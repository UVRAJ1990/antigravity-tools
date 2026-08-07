import requests
import re
import os

def load_env():
    if os.path.exists(".env"):
        with open(".env", "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, val = line.split("=", 1)
                    os.environ.setdefault(key.strip(), val.strip())

load_env()
cookie_val = os.getenv("HN_COOKIE")

session = requests.Session()
session.cookies.set("user", cookie_val, domain="news.ycombinator.com")

# 1. Get submit page
res = session.get("https://news.ycombinator.com/submit")
print("Submit page status:", res.status_code)

match = re.search(r'name="fnid" value="([^"]+)"', res.text)
if match:
    fnid = match.group(1)
    print("Found fnid:", fnid[:10] + "...")
    
    # Try submitting a text post (Ask HN)
    data = {
        "fnid": fnid,
        "title": "Ask HN: Feedback on 59 free browser dev tools (100% client-side)",
        "url": "",
        "text": "I've been building Antigravity Tools (https://antigravitytools.app) — 59 free browser-based utilities that run 100% client-side. No data leaves your browser.\n\nTools include JWT inspector, AI token counter, speaker water cleaner, PII masker, and regex tester.\n\nBuilt in vanilla JS — no React, no build step. Would love feedback!"
    }
    
    post_res = session.post("https://news.ycombinator.com/r", data=data, allow_redirects=True)
    print("Response URL after post:", post_res.url)
    print("Response snippet:", post_res.text[:500])
else:
    print("Could not find fnid in submit page. Cookie might be invalid or user logged out.")
