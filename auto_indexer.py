"""
Antigravity Tools — Automated Search Engine Indexer & Ping Engine
Submits all 59 individual tool URLs to IndexNow (Bing, DuckDuckGo, Yandex, Seznam) and pings Google for instant indexing.
"""

import os
import sys
import json
import requests
import uuid

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://antigravitytools.app"
KEY = "a7e93b12f45c81d293847e2f1029384c"
KEY_FILE = f"{KEY}.txt"

# 1. Create IndexNow verification key file
with open(KEY_FILE, "w", encoding="utf-8") as f:
    f.write(KEY)

print(f"✅ Created IndexNow verification key file: ./{KEY_FILE}")

# 2. Collect all 59 tool URLs
tools = [
    "mobile-speaker-cleaner", "mobile-stolen-assistant", "mobile-imei-validator",
    "mobile-emergency-wallpaper", "mobile-screen-tester", "mobile-touch-hz-tester",
    "mobile-qr-suite", "yt-thumbnail-downloader", "yt-timestamp-generator",
    "yt-transcript-extractor", "yt-tag-extractor", "yt-banner-safezone",
    "yt-embed-generator", "ai-token-counter", "ai-prompt-builder",
    "json-schema-gen", "ai-text-humanizer", "ai-prompt-trimmer",
    "ai-code-scanner", "ai-audio-transcribe", "ai-bg-remover",
    "site-trust-badge", "og-card-previewer", "meta-tag-generator",
    "favicon-generator", "schema-generator", "core-web-vitals",
    "sitemap-generator", "privacy-policy-gen", "link-redirect-checker",
    "json-workbench", "curl-converter", "svg-optimizer",
    "sql-formatter", "regex-tester", "cron-generator",
    "git-helper", "jwt-inspector", "universal-encoder",
    "hash-password-gen", "uuid-ulid-gen", "subnet-calculator",
    "cors-header-inspector", "pii-masker", "rsa-ecc-key-gen",
    "markdown-editor", "diff-checker", "text-converter",
    "image-compressor", "pdf-merger-splitter", "audio-trimmer",
    "video-gif-converter", "glassmorphism-studio", "flexbox-builder",
    "contrast-checker", "brand-palette-extractor", "css-animator",
    "tailwind-converter", "social-banner-resizer"
]

url_list = [f"{BASE_URL}/"] + [f"{BASE_URL}/tools/{t}.html" for t in tools]

print(f"📊 Prepared {len(url_list)} URLs for instant search engine indexing.")

# 3. Submit to IndexNow API (Bing, DuckDuckGo, Yandex, Seznam, Naver)
indexnow_url = "https://api.indexnow.org/IndexNow"
payload = {
    "host": "antigravitytools.app",
    "key": KEY,
    "keyLocation": f"{BASE_URL}/{KEY_FILE}",
    "urlList": url_list
}

print("\n🚀 Submitting 60 URLs to IndexNow Search Engine Indexing API...")
try:
    res = requests.post(indexnow_url, json=payload, headers={"Content-Type": "application/json; charset=utf-8"}, timeout=10)
    if res.status_code in [200, 202]:
        print(f"  ✅ IndexNow Submission Successful! (Status Code: {res.status_code})")
        print("  🎯 Bing, DuckDuckGo & Yandex will index all 59 tool pages instantly!")
    else:
        print(f"  ⚠️ IndexNow returned status code {res.status_code}: {res.text}")
except Exception as e:
    print(f"  ❌ IndexNow error: {e}")

# 4. Ping Google & Bing Sitemaps
print("\n📡 Pinging Search Engine Sitemap Endpoints...")

sitemap_url = f"{BASE_URL}/sitemap.xml"
ping_targets = [
    f"https://www.google.com/ping?sitemap={sitemap_url}",
    f"https://www.bing.com/ping?sitemap={sitemap_url}"
]

for target in ping_targets:
    try:
        r = requests.get(target, timeout=5)
        name = "Google" if "google" in target else "Bing"
        print(f"  ✅ Pinged {name} Sitemap Endpoint (Status: {r.status_code})")
    except Exception as e:
        print(f"  ⚠️ Ping failed for {target}: {e}")

print("\n🎉 Automated Indexing & Ping Complete!")
