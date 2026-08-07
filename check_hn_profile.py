import requests

url = "https://news.ycombinator.com/submitted?id=yuvarajmani1971"
res = requests.get(url)
print("Profile submitted status:", res.status_code)
if "Antigravity" in res.text or "browser dev tools" in res.text or "Feedback" in res.text:
    print("✅ FOUND POST ON PROFILE!")
else:
    print("❌ Post not listed on profile.")
    # Print profile page text snippets
    print("Page snippet:")
    print(res.text[500:1500])
