"""
List all Search Console properties accessible to this service account
"""
import json, time, base64, urllib.request, urllib.parse, urllib.error, rsa

with open("sc_credentials.json") as f:
    creds = json.load(f)

def b64url(data):
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()

def make_jwt(sa):
    now = int(time.time())
    header  = b64url(json.dumps({"alg":"RS256","typ":"JWT"}).encode())
    payload = b64url(json.dumps({
        "iss": sa["client_email"],
        "scope": "https://www.googleapis.com/auth/webmasters.readonly",
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

def get_token(sa):
    jwt = make_jwt(sa)
    data = urllib.parse.urlencode({
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": jwt,
    }).encode()
    req = urllib.request.Request(sa["token_uri"], data=data,
        headers={"Content-Type": "application/x-www-form-urlencoded"})
    with urllib.request.urlopen(req) as r:
        return json.load(r)["access_token"]

token = get_token(creds)
print("Authenticated OK\n")

# List all sites this service account can see
req = urllib.request.Request(
    "https://www.googleapis.com/webmasters/v3/sites",
    headers={"Authorization": f"Bearer {token}"}
)
with urllib.request.urlopen(req) as r:
    sites = json.load(r)

print("=" * 60)
print("PROPERTIES ACCESSIBLE TO SERVICE ACCOUNT")
print("=" * 60)
if sites.get("siteEntry"):
    for s in sites["siteEntry"]:
        print(f"  URL         : {s.get('siteUrl')}")
        print(f"  Permission  : {s.get('permissionLevel')}")
        print()
else:
    print("  No properties found!")
    print("  Raw response:", sites)
