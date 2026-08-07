"""
Google Search Console - Index Status Checker
Uses only 'rsa' (already installed) + built-in Python libraries
"""

import json, time, base64, urllib.request, urllib.parse, urllib.error, re, rsa

# ── Load credentials ──────────────────────────────────────────────────────────
with open("sc_credentials.json") as f:
    creds = json.load(f)

SITE_URL = "https://antigravitytools.app/"

# ── JWT / OAuth2 using rsa module ─────────────────────────────────────────────
def b64url(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()

def make_jwt(sa: dict) -> str:
    now = int(time.time())
    header  = b64url(json.dumps({"alg":"RS256","typ":"JWT"}).encode())
    payload = b64url(json.dumps({
        "iss": sa["client_email"],
        "scope": "https://www.googleapis.com/auth/webmasters.readonly",
        "aud": sa["token_uri"],
        "iat": now,
        "exp": now + 3600,
    }).encode())
    signing_input = f"{header}.{payload}".encode()
    # Google SA keys are PKCS8 — strip header/footer and decode DER, then extract PKCS1
    pem_body = sa["private_key"]
    der = base64.b64decode(
        "".join(pem_body.strip().splitlines()[1:-1])
    )
    # PKCS8 wraps PKCS1: skip the outer SEQUENCE + AlgorithmIdentifier
    # Find the inner OCTET STRING containing the RSA private key
    # Simple approach: find the PKCS1 RSAPrivateKey embedded in PKCS8 DER
    idx = der.find(b'\x30\x82', 20)  # find embedded SEQUENCE (RSAPrivateKey)
    pkcs1_der = der[idx:]
    privkey = rsa.PrivateKey._load_pkcs1_der(pkcs1_der)
    sig = rsa.sign(signing_input, privkey, "SHA-256")
    return f"{header}.{payload}.{b64url(sig)}"

def get_access_token(sa: dict) -> str:
    jwt = make_jwt(sa)
    data = urllib.parse.urlencode({
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": jwt,
    }).encode()
    req = urllib.request.Request(
        sa["token_uri"], data=data,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    with urllib.request.urlopen(req) as r:
        return json.load(r)["access_token"]

def sc_api(token: str, path: str, body=None) -> dict:
    base = "https://searchconsole.googleapis.com"
    req = urllib.request.Request(
        base + path,
        data=json.dumps(body).encode() if body else None,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
        method="POST" if body else "GET",
    )
    try:
        with urllib.request.urlopen(req) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        return {"error": e.read().decode()}

# ── Authenticate ──────────────────────────────────────────────────────────────
print("Authenticating with Google...")
token = get_access_token(creds)
print("Token obtained!\n")

# ── Sitemaps ──────────────────────────────────────────────────────────────────
print("=" * 70)
print("SITEMAPS")
print("=" * 70)
encoded = urllib.parse.quote(SITE_URL, safe="")
sitemaps = sc_api(token, f"/webmasters/v3/sites/{encoded}/sitemaps")
if sitemaps.get("sitemap"):
    for s in sitemaps["sitemap"]:
        contents = s.get("contents", [])
        submitted_count = sum(int(c.get("submitted", 0)) for c in contents)
        indexed_count   = sum(int(c.get("indexed", 0)) for c in contents)
        print(f"\n  URL        : {s.get('path','')}")
        print(f"  Submitted  : {s.get('lastSubmitted','N/A')}")
        print(f"  Downloaded : {s.get('lastDownloaded','N/A')}")
        print(f"  Pages Submitted : {submitted_count}")
        print(f"  Pages Indexed   : {indexed_count}")
        print(f"  Warnings/Errors : {s.get('warnings','0')}/{s.get('errors','0')}")
else:
    print("  No sitemaps found:", sitemaps)

# ── Fetch sitemap URLs ────────────────────────────────────────────────────────
print("\n" + "=" * 70)
print("URL INSPECTION")
print("=" * 70)

sitemap_urls = []
try:
    with open("sitemap.xml", encoding="utf-8") as f:
        content = f.read()
    sitemap_urls = re.findall(r"<loc>(https://antigravitytools\.app[^<]*)</loc>", content)
    print(f"\nFound {len(sitemap_urls)} URLs in local sitemap.xml\n")
except Exception as e:
    print(f"Could not read local sitemap.xml: {e}")
    # fallback: try remote with better headers
    try:
        req = urllib.request.Request(
            "https://antigravitytools.app/sitemap.xml",
            headers={"User-Agent": "Googlebot/2.1", "Accept": "*/*"}
        )
        with urllib.request.urlopen(req, timeout=15) as r:
            content = r.read().decode()
        sitemap_urls = re.findall(r"<loc>(https://antigravitytools\.app[^<]*)</loc>", content)
        print(f"\nFound {len(sitemap_urls)} URLs from remote sitemap\n")
    except Exception as e2:
        print(f"Could not fetch remote sitemap either: {e2}")

# ── Inspect each URL ──────────────────────────────────────────────────────────
indexed, not_indexed, unknown, errors_list = [], [], [], []
total = len(sitemap_urls)

for i, url in enumerate(sitemap_urls, 1):
    try:
        result = sc_api(token, "/v1/urlInspection/index:inspect", {
            "inspectionUrl": url,
            "siteUrl": SITE_URL,
        })
        if "error" in result:
            print(f"  [{i:03d}/{total}] ERROR | {url} => {result['error'][:80]}")
            errors_list.append(url)
            continue

        ir = result.get("inspectionResult", {}).get("indexStatusResult", {})
        verdict    = ir.get("verdict", "UNKNOWN")
        coverage   = ir.get("coverageState", "")
        last_crawl = ir.get("lastCrawlTime", "Never")
        robots_txt = ir.get("robotsTxtState", "")
        indexing   = ir.get("indexingState", "")

        icon = "OK" if verdict == "PASS" else ("NO" if verdict in ("FAIL","NEUTRAL") else "??")
        print(f"  [{i:03d}/{total}] [{icon}] {verdict:7s} | {coverage:45s} | {url}")

        entry = {"url": url, "coverage": coverage, "lastCrawl": last_crawl,
                 "robotsTxtState": robots_txt, "indexingState": indexing}
        if verdict == "PASS":
            indexed.append(entry)
        elif verdict in ("FAIL", "NEUTRAL"):
            entry["verdict"] = verdict
            not_indexed.append(entry)
        else:
            unknown.append(entry)

        time.sleep(0.35)
    except Exception as e:
        errors_list.append(url)
        print(f"  [{i:03d}/{total}] [ERR] {url} => {e}")

# ── Summary ───────────────────────────────────────────────────────────────────
print("\n" + "=" * 70)
print("SUMMARY")
print("=" * 70)
print(f"  Indexed           : {len(indexed)}")
print(f"  Not Indexed/Fail  : {len(not_indexed)}")
print(f"  Unknown/Pending   : {len(unknown)}")
print(f"  API Errors        : {len(errors_list)}")
print(f"  Total Checked     : {total}")

if indexed:
    print(f"\n--- INDEXED URLs ({len(indexed)}) ---")
    for u in indexed:
        print(f"  + {u['url']}")
        print(f"    State: {u['coverage']} | Last Crawl: {u['lastCrawl']}")

if not_indexed:
    print(f"\n--- NOT INDEXED ({len(not_indexed)}) ---")
    for u in not_indexed:
        print(f"  - {u['url']}")
        print(f"    State: {u['coverage']} | Verdict: {u.get('verdict','')}")

if unknown:
    print(f"\n--- UNKNOWN / PENDING ({len(unknown)}) ---")
    for u in unknown:
        print(f"  ? {u['url']}")
        print(f"    State: {u['coverage']}")

# ── Save report ───────────────────────────────────────────────────────────────
report = {
    "checked_at": time.strftime("%Y-%m-%d %H:%M:%S UTC", time.gmtime()),
    "total": total, "indexed": indexed,
    "not_indexed": not_indexed, "unknown": unknown, "errors": errors_list,
}
with open("index_report.json", "w", encoding="utf-8") as f:
    json.dump(report, f, indent=2, ensure_ascii=False)

print(f"\nFull report saved to index_report.json")
print("=" * 70)
