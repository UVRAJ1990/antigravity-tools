"""
Antigravity Tools — Auto RSS Feed Generator
Generates feed.xml for automatic content syndication across Medium, Hashnode, Dev.to, and RSS aggregators.
"""

import os
import sys
from datetime import datetime

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://antigravitytools.app"
NOW_RFC822 = datetime.utcnow().strftime("%a, %d %b %Y %H:%M:%S +0000")

# Read tool list from generate_tool_pages.py or define items
from generate_tool_pages import TOOLS

rss_items = []
for t in TOOLS:
    item_xml = f"""    <item>
      <title><![CDATA[{t['name']}]]></title>
      <link>{BASE_URL}/tools/{t['id']}.html</link>
      <guid isPermaLink="true">{BASE_URL}/tools/{t['id']}.html</guid>
      <description><![CDATA[{t['desc']}]]></description>
      <pubDate>{NOW_RFC822}</pubDate>
      <category>{t['cat']}</category>
    </item>"""
    rss_items.append(item_xml)

items_str = "\n".join(rss_items)

rss_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Antigravity Tools — 52 Free Browser Dev Tools</title>
    <link>{BASE_URL}/</link>
    <description>52 free browser-based developer tools. Zero installs, 100% client-side privacy.</description>
    <language>en-us</language>
    <lastBuildDate>{NOW_RFC822}</lastBuildDate>
    <atom:link href="{BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
{items_str}
  </channel>
</rss>"""

with open("feed.xml", "w", encoding="utf-8") as f:
    f.write(rss_xml)

print(f"✅ Generated RSS feed with {len(TOOLS)} items -> ./feed.xml")
