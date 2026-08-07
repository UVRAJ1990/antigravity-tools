"""
submit_urls.py — Google Indexing API URL Submitter
Submits 10 un-indexed URLs per day from sitemap.xml
Tracks progress in submission_log.json so URLs aren't re-submitted
"""

import json, time, base64, urllib.request, urllib.parse, urllib.error, re, rsa
from datetime import datetime, timezone

# ── Config ────────────────────────────────────────────────────────────────────
CREDS_FILE      = "sc_credentials.json"
SITEMAP_FILE    = "sitemap.xml"
LOG_FILE        = "submission_log.json"
BATCH_SIZE      = 10          # URLs per run
DELAY_BETWEEN   = 1.0         # seconds between API calls

# ── Load credentials ──────────────────────────────────────────────────────────
with open(CREDS_FILE) as f:
    creds = json.load(f)

# ── JWT / Token helpers ───────────────────────────────────────────────────────
def b64url(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()

def make_jwt(sa: dict, scope: str) -> str:
    now = int(time.time())
    header  = b64url(json.dumps({"alg":"RS256","typ":"JWT"}).encode())
    payload = b64url(json.dumps({
        "iss": sa["client_email"],
        "scope": scope,
        "aud": sa["token_uri"],
        "iat": now, "exp": now + 3600,
    }).encode())
    signing_input = f"{header}.{payload}".encode()
    pem_body = sa["private_key"]
    der = base64.b64decode("".join(pem_body.strip().splitlines()[1:-1]))
    idx = der.find(b'\x30\x82', 20)
    privkey = rsa.PrivateKey._load_pkcs1_der(der[idx:])
    sig = rsa.sign(signing_input, privkey, "SHA-256")
    return f"{header}.{payload}.{b64url(sig)}"

def get_token(scope: str) -> str:
    jwt = make_jwt(creds, scope)
    data = urllib.parse.urlencode({
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": jwt,
    }).encode()
    req = urllib.request.Request(creds["token_uri"], data=data,
        headers={"Content-Type": "application/x-www-form-urlencoded"})
    with urllib.request.urlopen(req) as r:
        return json.load(r)["access_token"]

# ── Submission log helpers ────────────────────────────────────────────────────
def load_log() -> dict:
    try:
        with open(LOG_FILE, encoding="utf-8") as f:
            content = f.read().strip()
            if not content:
                return {"submitted": {}, "runs": []}
            return json.loads(content)
    except (FileNotFoundError, json.JSONDecodeError):
        return {"submitted": {}, "runs": []}

def save_log(log: dict):
    tmp = LOG_FILE + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(log, f, indent=2, ensure_ascii=False)
    import os
    os.replace(tmp, LOG_FILE)

# ── Read all URLs from sitemap ────────────────────────────────────────────────
def get_sitemap_urls() -> list:
    with open(SITEMAP_FILE, encoding="utf-8") as f:
        content = f.read()
    return re.findall(r"<loc>(https://antigravitytools\.app[^<]*)</loc>", content)

# ── Submit a URL via Google Indexing API ──────────────────────────────────────
def submit_url(token: str, url: str) -> dict:
    body = json.dumps({"url": url, "type": "URL_UPDATED"}).encode()
    req = urllib.request.Request(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        data=body,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            return {"status": "ok", "response": json.load(r)}
    except urllib.error.HTTPError as e:
        err_body = e.read().decode()
        return {"status": "error", "code": e.code, "error": err_body}
    except Exception as e:
        return {"status": "error", "error": str(e)}

# ── Main ──────────────────────────────────────────────────────────────────────
now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
print("=" * 65)
print(f"  Antigravity Tools — URL Submission Run")
print(f"  {now_str}")
print("=" * 65)

# 1. Get token for Indexing API
print("\nAuthenticating...")
token = get_token("https://www.googleapis.com/auth/indexing")
print("Token OK\n")

# 2. Load submission log
log = load_log()
submitted_urls = set(log["submitted"].keys())

# 3. Get all sitemap URLs
all_urls = get_sitemap_urls()
print(f"Total URLs in sitemap : {len(all_urls)}")
print(f"Already submitted     : {len(submitted_urls)}")

# 4. Pick next batch — unsubmitted first, then oldest submissions
pending = [u for u in all_urls if u not in submitted_urls]
print(f"Pending (never sent)  : {len(pending)}")

batch = pending[:BATCH_SIZE]

if not batch:
    # All submitted — re-submit oldest ones to keep fresh
    sorted_submitted = sorted(log["submitted"].items(), key=lambda x: x[1].get("submitted_at", ""))
    batch = [u for u, _ in sorted_submitted[:BATCH_SIZE]]
    print(f"\nAll URLs submitted before! Re-submitting {len(batch)} oldest URLs to refresh.\n")
else:
    print(f"This batch            : {len(batch)} URLs\n")

# 5. Submit each URL
print("-" * 65)
results = {"ok": [], "error": []}

for i, url in enumerate(batch, 1):
    result = submit_url(token, url)
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")

    if result["status"] == "ok":
        print(f"  [{i:02d}] SUBMITTED  {url}")
        log["submitted"][url] = {"submitted_at": ts, "last_status": "ok"}
        results["ok"].append(url)
    else:
        code = result.get("code", "?")
        err  = result.get("error", "")[:80]
        print(f"  [{i:02d}] ERROR {code}  {url}")
        print(f"         {err}")
        log["submitted"][url] = {"submitted_at": ts, "last_status": f"error_{code}"}
        results["error"].append({"url": url, "error": err})

    time.sleep(DELAY_BETWEEN)

# 6. Save run to log
log["runs"].append({
    "run_at"   : now_str,
    "submitted": len(results["ok"]),
    "errors"   : len(results["error"]),
    "urls"     : batch,
})
save_log(log)

# 7. Summary
print("\n" + "=" * 65)
print("  SUMMARY")
print("=" * 65)
print(f"  Submitted OK   : {len(results['ok'])}")
print(f"  Errors         : {len(results['error'])}")
print(f"  Remaining      : {max(0, len(pending) - len(results['ok']))}")
print(f"  Total in log   : {len(log['submitted'])}")
days_left = max(0, len(pending) - len(results['ok'])) // BATCH_SIZE
print(f"  Est. days left : ~{days_left} day(s) to submit all")
print(f"\n  Log saved to   : {LOG_FILE}")
print("=" * 65)
