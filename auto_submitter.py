"""
Antigravity Tools — Automated Content Submitter
Automates submissions to Dev.to, Hacker News, Reddit, and Web Directories using APIs and Session Tokens.
"""

import os
import sys
import json
import requests

# Force UTF-8 stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Load .env file manually if present
def load_env():
    env_file = ".env"
    if os.path.exists(env_file):
        with open(env_file, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, val = line.split("=", 1)
                    os.environ.setdefault(key.strip(), val.strip())

load_env()

DEVTO_API_KEY = os.getenv("DEVTO_API_KEY")
HN_COOKIE = os.getenv("HN_COOKIE") # Value of 'user' cookie from news.ycombinator.com
REDDIT_CLIENT_ID = os.getenv("REDDIT_CLIENT_ID")
REDDIT_CLIENT_SECRET = os.getenv("REDDIT_CLIENT_SECRET")
REDDIT_USERNAME = os.getenv("REDDIT_USERNAME")
REDDIT_PASSWORD = os.getenv("REDDIT_PASSWORD")


def publish_devto():
    """Publishes article to Dev.to via REST API"""
    print("\n[Dev.to] Attempting automated publishing...")
    if not DEVTO_API_KEY:
        print("  ❌ Missing DEVTO_API_KEY in .env file.")
        print("     To get one: Log in to Dev.to -> Settings -> Extensions -> Generate API Key")
        return False

    url = "https://dev.to/api/articles"
    headers = {
        "api-key": DEVTO_API_KEY,
        "Content-Type": "application/json"
    }
    
    # Read Dev.to article text from launch-kit content
    article_body = """I've been quietly building **[Antigravity Tools](https://antigravitytools.app)** — a collection of 59 free, browser-based developer utilities — and today I'm sharing everything I built and learned.

## Why vanilla JS? No React, no build step.

The main constraint I set for myself: **zero dependencies, zero server, zero telemetry**.

When you paste your JWT token into jwt.io, it goes to their server. When you use an online regex tester, your test strings are logged. I built Antigravity Tools so every operation runs inside your browser, using native APIs.

```
No Node.js backend
No npm packages
No webpack/vite/parcel
No Google Analytics
No cookies
```

Everything runs on `Web Crypto API`, `Canvas API`, `Web Audio API`, and `IndexedDB` — all native to modern browsers.

## The 8 tool categories

### 🔐 Security & Auth Tools
- **JWT Inspector** — decode JWT header, payload, and check expiry locally
- **RSA & ECC Key Generator** — generate 2048-bit key pairs via SubtleCrypto
- **Hash & Password Generator** — SHA-256/SHA-512 via Web Crypto
- **PII Masker** — strip emails, credit cards, SSNs, IPs from text
- **Universal Encoder/Decoder** — Base64, URL, Hex, HTML entities, Unicode

### 🤖 AI & Prompting Tools
- **AI Token Counter** — estimate cost across GPT-4o, Claude 3.5, Gemini 2.0, DeepSeek R1
- **System Prompt Builder** — structure agent instructions with XML tags and tool definitions
- **AI Text Humanizer** — rephrase robotic AI output into natural writing
- **Prompt Cost Trimmer** — compress prompts by 30–50% to reduce API costs

### ⚡ Dev & Code Tools
- **JSON Workbench** — beautify, validate, convert to TypeScript, Python, Go types
- **cURL Converter** — cURL → JS fetch, Python requests, Go, PHP
- **Regex Tester** — real-time match highlighting with capture group display
- **Cron Builder** — visual cron expression editor with plain-English output
- **Git Command Helper** — build undo/squash/cherry-pick commands visually

## Try it
👉 **https://antigravitytools.app**
"""

    payload = {
        "article": {
            "title": "I built 59 free browser-based dev tools in vanilla JS — here's what I learned",
            "published": True,
            "body_markdown": article_body,
            "tags": ["webdev", "javascript", "tools", "programming"],
            "main_image": "https://antigravitytools.app/og-image.png"
        }
    }

    res = requests.post(url, headers=headers, json=payload)
    if res.status_code == 201:
        data = res.json()
        print(f"  ✅ Published successfully! Article URL: {data.get('url')}")
        return True
    else:
        print(f"  ❌ Failed with status code {res.status_code}: {res.text}")
        return False


def publish_hacker_news(title, url_link=None, text_content=None):
    """Submits post to Hacker News using session cookie"""
    print("\n[Hacker News] Attempting automated submission...")
    if not HN_COOKIE:
        print("  ❌ Missing HN_COOKIE in .env file.")
        print("     To get one: Log into Hacker News -> Open DevTools (F12) -> Application -> Cookies -> Copy value of 'user'")
        return False

    session = requests.Session()
    session.cookies.set("user", HN_COOKIE, domain="news.ycombinator.com")

    # Step 1: Get fnid from submit page
    get_res = session.get("https://news.ycombinator.com/submit")
    if "fnid" not in get_res.text:
        print("  ❌ Session cookie expired or invalid.")
        return False

    import re
    match = re.search(r'name="fnid" value="([^"]+)"', get_res.text)
    if not match:
        print("  ❌ Could not parse submission token (fnid).")
        return False

    fnid = match.group(1)

    # Step 2: Post submission
    post_data = {
        "fnid": fnid,
        "title": title,
        "url": url_link or "",
        "text": text_content or ""
    }

    post_res = session.post("https://news.ycombinator.com/r", data=post_data)
    if post_res.status_code == 200:
        print("  ✅ Hacker News submission request sent successfully!")
        return True
    else:
        print(f"  ❌ Submission failed with status {post_res.status_code}")
        return False


def publish_reddit(title, text, subreddit="webdev"):
    """Submits post to Reddit via API or Session Login"""
    print(f"\n[Reddit r/{subreddit}] Attempting automated submission...")
    if not REDDIT_USERNAME or not REDDIT_PASSWORD:
        print("  ❌ Missing REDDIT_USERNAME or REDDIT_PASSWORD in .env file.")
        return False

    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })

    if REDDIT_CLIENT_ID and REDDIT_CLIENT_SECRET:
        # OAuth Flow
        auth = requests.auth.HTTPBasicAuth(REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET)
        data = {
            'grant_type': 'password',
            'username': REDDIT_USERNAME,
            'password': REDDIT_PASSWORD
        }
        token_res = requests.post('https://www.reddit.com/api/v1/access_token', auth=auth, data=data, headers={'User-Agent': 'AntigravityTools/1.0'})
        if token_res.status_code == 200:
            token = token_res.json().get('access_token')
            api_headers = {
                'Authorization': f'bearer {token}',
                'User-Agent': 'AntigravityTools/1.0'
            }
            submit_data = {
                'sr': subreddit,
                'kind': 'self',
                'title': title,
                'text': text,
                'api_type': 'json'
            }
            res = requests.post('https://oauth.reddit.com/api/submit', headers=api_headers, data=submit_data)
            if res.status_code == 200 and "errors\": []" in res.text:
                print(f"  ✅ Successfully posted to r/{subreddit} via OAuth API!")
                return True
            else:
                print(f"  ❌ OAuth submission response:", res.text[:200])

    # Fallback Session Login
    login_url = "https://www.reddit.com/api/login/" + REDDIT_USERNAME
    login_data = {
        "user": REDDIT_USERNAME,
        "passwd": REDDIT_PASSWORD,
        "api_type": "json"
    }
    
    login_res = session.post(login_url, data=login_data)
    if "reddit_session" in session.cookies or "modhash" in login_res.text:
        modhash = ""
        try:
            modhash = login_res.json()["json"]["data"]["modhash"]
        except Exception:
            pass

        submit_data = {
            "sr": subreddit,
            "kind": "self",
            "title": title,
            "text": text,
            "uh": modhash,
            "api_type": "json"
        }
        submit_res = session.post("https://www.reddit.com/api/submit", data=submit_data)
        if submit_res.status_code == 200:
            print(f"  ✅ Successfully submitted post request to r/{subreddit}!")
            return True
        else:
            print(f"  ❌ Web submission error status {submit_res.status_code}: {submit_res.text[:200]}")
            return False
    else:
        print(f"  ❌ Web login response: {login_res.text[:200]}")
        print("  💡 Tip: Reddit requires Client ID/Secret or email verification on new accounts.")
        return False


def main():
    print("==================================================")
    print("🚀 Antigravity Tools Automated Submission Engine")
    print("==================================================")
    
    publish_devto()
    
    hn_title = "Ask HN: Feedback on my 59 free browser dev tools — JWT decoder, regex tester, speaker cleaner"
    hn_text = "I've been building Antigravity Tools (https://antigravitytools.app) — 59 free browser-based utilities that run 100% client-side. No data ever leaves your browser.\n\nBuilt in vanilla JS — no React, no build step, no server.\n\nHappy to answer questions about the architecture or specific tools. What would you add?"
    publish_hacker_news(hn_title, text_content=hn_text)

    reddit_title = "I built 59 free browser-based dev tools — JWT decoder, regex tester, cURL converter, JSON formatter. No server, 100% client-side."
    reddit_text = "Hey 👋\n\nI've been building Antigravity Tools (https://antigravitytools.app) — 59 browser-based utilities that run entirely client-side.\n\nEverything runs in your browser via the Web Crypto API, Canvas, and Web Audio API.\n\nLink: https://antigravitytools.app"
    publish_reddit(reddit_title, reddit_text, subreddit="webdev")

if __name__ == "__main__":
    main()
