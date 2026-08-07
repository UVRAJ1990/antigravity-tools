"""
Antigravity Tools — Auto Tool Page Generator
Generates 59 individual SEO-optimized HTML landing pages + updates sitemap.xml
Run: python generate_tool_pages.py
"""

import os, re
from datetime import date

TODAY = date.today().isoformat()
BASE_URL = "https://antigravitytools.app"
TOOLS_DIR = "tools"

# ── Complete tool catalogue with SEO metadata ─────────────────────────────────
TOOLS = [
  # MOBILE & DEVICE
  {
    "id": "mobile-speaker-cleaner", "cat": "mobile", "icon": "🔊",
    "name": "Mobile Speaker Water & Dust Cleaner",
    "h1": "Free Online Speaker Cleaner — Eject Water & Dust with Sound Waves",
    "title": "Speaker Cleaner Online — Eject Water from Phone | Antigravity Tools",
    "desc": "Play 165 Hz sound-wave pulses directly in your browser to push water droplets and dust out of your phone speaker — free, instant, no app needed.",
    "keywords": "speaker cleaner online, fix water in speaker, clean phone speaker, eject water from speaker, sound ejector online",
    "features": ["165 Hz optimised pulse frequency","Visual waveform display","Works on iPhone & Android","Countdown timer & volume control","No app or install required"],
    "faq": [
      ("Does the speaker cleaner really work?", "Yes! The 165 Hz frequency creates rapid air pressure oscillations that push water droplets and dust particles out of speaker grilles. It is the same principle used by the Apple Watch Water Lock feature."),
      ("How long should I run it?", "Run 3–5 cycles of 30 seconds each. Tilt your phone speaker-side down while the tone plays for best results."),
      ("Will it damage my speaker?", "No. The volume and frequency used are within safe operating ranges for all modern smartphone speakers."),
    ],
    "related": ["mobile-imei-validator", "mobile-qr-suite", "mobile-screen-tester"],
  },
  {
    "id": "mobile-stolen-assistant", "cat": "mobile", "icon": "🚨",
    "name": "Stolen Mobile Emergency Assistant & CEIR Guide",
    "h1": "Stolen Phone Emergency Guide — Block IMEI, SIM & File e-FIR",
    "title": "Stolen Phone Assistant — CEIR IMEI Block & e-FIR Guide | Antigravity Tools",
    "desc": "Step-by-step wizard for lost or stolen phones: remotely lock your device, block the IMEI via CEIR, suspend your SIM with your carrier, and generate an e-FIR report.",
    "keywords": "stolen phone guide, CEIR IMEI block, lost phone what to do, mobile theft report, block stolen phone IMEI",
    "features": ["Remote lock instructions per OS","CEIR IMEI blocking guide","Carrier SIM suspension steps","e-FIR generator template","Google/Apple account security steps"],
    "faq": [
      ("What is CEIR and how does it block my phone?", "CEIR (Central Equipment Identity Register) is a government database. Once you report your IMEI, all Indian telecom networks block the device from connecting to any SIM, making it useless for the thief."),
      ("How quickly does an IMEI block take effect?", "CEIR blocks typically take 24–48 hours to propagate across all networks. File the report as soon as possible."),
      ("Can a factory reset bypass the IMEI block?", "No. IMEI is hardcoded into the phone's hardware and cannot be changed by a factory reset."),
    ],
    "related": ["mobile-imei-validator", "mobile-emergency-wallpaper", "mobile-speaker-cleaner"],
  },
  {
    "id": "mobile-imei-validator", "cat": "mobile", "icon": "📱",
    "name": "IMEI Luhn Validator & TAC Decoder",
    "h1": "Free IMEI Checker Online — Validate & Decode Any IMEI Number",
    "title": "IMEI Checker Online — Validate IMEI & Decode TAC | Antigravity Tools",
    "desc": "Instantly verify any 15-digit IMEI number using the Luhn checksum algorithm, decode the TAC manufacturer code, and extract the device serial number — 100% client-side.",
    "keywords": "IMEI checker online, IMEI validator, check IMEI number, IMEI lookup, TAC decoder, validate IMEI free",
    "features": ["Luhn algorithm checksum verification","TAC manufacturer code extraction","Serial number & check digit decode","Works offline — no server needed","Supports all 15-digit GSM IMEIs"],
    "faq": [
      ("How do I find my IMEI number?", "Dial *#06# on your phone to display the IMEI instantly. You can also find it in Settings → About Phone or printed inside the SIM card tray."),
      ("What does a valid IMEI prove?", "A valid IMEI confirms the device has a legitimate hardware identity. Phones with invalid IMEIs may be counterfeit or have been tampered with."),
      ("Is my IMEI sent anywhere?", "No. All validation runs entirely in your browser using the Luhn algorithm. Your IMEI is never transmitted to any server."),
    ],
    "related": ["mobile-stolen-assistant", "mobile-speaker-cleaner", "mobile-qr-suite"],
  },
  {
    "id": "mobile-emergency-wallpaper", "cat": "mobile", "icon": "🖼️",
    "name": "Emergency Lock Screen Wallpaper Generator",
    "h1": "Emergency Contact Lock Screen Wallpaper Generator — Free & Instant",
    "title": "Emergency Wallpaper Generator — Lock Screen Contact Card | Antigravity Tools",
    "desc": "Create a custom mobile lock screen wallpaper with your emergency contact numbers, blood group, medical conditions, and allergies — generated entirely in your browser.",
    "keywords": "emergency wallpaper generator, lock screen emergency contact, ICE wallpaper, emergency contact phone wallpaper",
    "features": ["Add emergency phone numbers","Include blood group & allergies","Custom name & photo option","Download as PNG immediately","Works on all phone screen sizes"],
    "faq": [
      ("Why should I have an emergency wallpaper?", "If you are ever in an accident and unconscious, first responders check the lock screen for emergency contacts and medical info before they can unlock your phone."),
      ("What size is the generated wallpaper?", "The wallpaper is generated at 1080×1920 px (standard Full HD portrait), which fits most modern smartphones."),
      ("Is my personal data stored?", "No. All data is processed locally in your browser and the image is generated client-side. Nothing is uploaded."),
    ],
    "related": ["mobile-stolen-assistant", "mobile-imei-validator", "mobile-qr-suite"],
  },
  {
    "id": "mobile-screen-tester", "cat": "mobile", "icon": "🖥️",
    "name": "Mobile Display & Dead Pixel Tester",
    "h1": "Dead Pixel Test Online — Check Phone Screen for Dead Pixels & OLED Burn-In",
    "title": "Dead Pixel Test Online — Mobile Screen Tester | Antigravity Tools",
    "desc": "Run a full-screen RGBW and black color cycle test to detect dead pixels, stuck pixels, and OLED burn-in on your phone, tablet, or laptop — free, instant, browser-based.",
    "keywords": "dead pixel test online, phone screen test, pixel checker, OLED burn in test, display test online",
    "features": ["Full-screen RGBW color cycle","Dead & stuck pixel detection","OLED burn-in checker","Touch grid matrix test","Works on any device with a browser"],
    "faq": [
      ("How do I test for dead pixels?", "Use this tool to cycle through solid red, green, blue, white, and black full-screen colors. Dead pixels will appear as static dots that do not match the current color."),
      ("Can dead pixels be fixed?", "Sometimes. Stuck pixels (not completely dead) can sometimes be fixed by running a rapid color flicker. This tool includes that option."),
      ("Does the test work on laptop screens too?", "Yes! Open the page on any device with a browser — phone, tablet, or laptop — and run the full-screen test."),
    ],
    "related": ["mobile-touch-hz-tester", "mobile-speaker-cleaner", "mobile-imei-validator"],
  },
  {
    "id": "mobile-touch-hz-tester", "cat": "mobile", "icon": "⚡",
    "name": "Multi-Touch & Screen Refresh Rate (Hz) Tester",
    "h1": "Screen Refresh Rate Tester — Check 60Hz, 90Hz, 120Hz Online Free",
    "title": "Screen Hz Tester — Refresh Rate & Multi-Touch Test | Antigravity Tools",
    "desc": "Measure your phone or laptop screen's real refresh rate (60Hz, 90Hz, 120Hz, 144Hz) and test simultaneous multi-touch points — all live in your browser, no app required.",
    "keywords": "screen refresh rate test, 120hz test online, hz tester, multi-touch test, display refresh rate checker",
    "features": ["Live refresh rate measurement","60/90/120/144 Hz detection","Simultaneous multi-touch test","Visual touch-point indicators","Works on all devices with a touchscreen"],
    "faq": [
      ("How does the Hz test work?", "The tool uses the browser's requestAnimationFrame API to measure how many frames render per second, which directly equals the screen refresh rate."),
      ("Why does my 120Hz phone show 60Hz?", "Some phones cap refresh rate on certain content types (like the browser). Enable the High Performance display mode in your phone settings to get the full rate."),
      ("How many touch points should my phone support?", "Most modern smartphones support 10 simultaneous touch points. Budget devices may support 5."),
    ],
    "related": ["mobile-screen-tester", "mobile-speaker-cleaner", "mobile-imei-validator"],
  },
  {
    "id": "mobile-qr-suite", "cat": "mobile", "icon": "📡",
    "name": "Mobile Wi-Fi, eSIM & WhatsApp QR Suite",
    "h1": "Free Wi-Fi QR Code Generator — Share Wi-Fi Password Instantly",
    "title": "Wi-Fi QR Code Generator — WhatsApp & vCard QR Suite | Antigravity Tools",
    "desc": "Generate Wi-Fi auto-connect QR codes, WhatsApp chat links, eSIM QR, and vCard contact QR codes — all in your browser, no app, no signup.",
    "keywords": "wifi QR code generator, share wifi password QR, WhatsApp QR link generator, vCard QR code, wifi qr online free",
    "features": ["Wi-Fi auto-connect QR (WPA2/WPA3)","WhatsApp direct chat link QR","vCard contact QR code","eSIM QR generator","Download as PNG instantly"],
    "faq": [
      ("How does the Wi-Fi QR code work?", "Scanning the QR code automatically connects the phone to your Wi-Fi network — no password typing needed. It works on all Android and iOS 11+ devices."),
      ("Is the Wi-Fi password stored anywhere?", "No. The QR code is generated entirely in your browser. Your password never leaves your device."),
      ("Can I use this for a guest Wi-Fi network?", "Absolutely. Print the QR code and place it at a reception desk or waiting room for easy guest Wi-Fi access."),
    ],
    "related": ["mobile-imei-validator", "mobile-speaker-cleaner", "mobile-emergency-wallpaper"],
  },

  # YOUTUBE & VIDEO
  {
    "id": "yt-thumbnail-downloader", "cat": "youtube", "icon": "🖼️",
    "name": "YouTube HD & 4K Thumbnail Downloader",
    "h1": "YouTube Thumbnail Downloader — Download 4K, HD, SD Thumbnails Free",
    "title": "YouTube Thumbnail Downloader — 4K HD Free | Antigravity Tools",
    "desc": "Download any YouTube video thumbnail in 4K, 1080p, 720p, or SD quality by pasting the video URL — instant, free, no login required.",
    "keywords": "youtube thumbnail downloader, download youtube thumbnail, youtube thumbnail 4k, get youtube thumbnail, youtube thumbnail hd",
    "features": ["4K maxresdefault quality","1080p, 720p, SD fallback","Paste any YouTube URL","One-click PNG download","Works with Shorts & playlists"],
    "faq": [
      ("How do I download a YouTube thumbnail?", "Paste the YouTube video URL into the tool and click Download. You will get direct links to all available thumbnail qualities."),
      ("Why is 4K not available for some videos?", "Not every video has a 4K (maxresdefault) thumbnail uploaded by the creator. In that case, the tool automatically falls back to the best available resolution."),
      ("Can I download thumbnails from YouTube Shorts?", "Yes. The tool works with standard videos, YouTube Shorts, and playlist URLs."),
    ],
    "related": ["yt-tag-extractor", "yt-banner-safezone", "yt-embed-generator"],
  },
  {
    "id": "yt-timestamp-generator", "cat": "youtube", "icon": "⏰",
    "name": "YouTube Timestamp & Chapter Generator",
    "h1": "YouTube Timestamp Generator — Create Clickable Chapter Links Free",
    "title": "YouTube Timestamp Generator — Chapter Links & Descriptions | Antigravity Tools",
    "desc": "Build shareable YouTube timestamp links and format clickable chapter descriptions in seconds — just enter the times and titles, copy the output.",
    "keywords": "youtube timestamp generator, youtube chapter generator, youtube timestamps, youtube time link, create youtube chapters",
    "features": ["Add unlimited chapter entries","Format HH:MM:SS or MM:SS","Copy-paste ready description output","Preview chapter click links","Works for YouTube & YouTube Studio"],
    "faq": [
      ("How do YouTube chapters work?", "Chapters appear as a timeline in the YouTube player when you add timestamps in the description starting at 0:00. Each chapter label shows on hover."),
      ("What format do YouTube timestamps need to be in?", "YouTube accepts MM:SS or HH:MM:SS format. The first timestamp must start at 0:00 and you need at least 3 chapters."),
      ("Can I add chapters to other people's videos?", "No. Only the video owner can add chapters via the description."),
    ],
    "related": ["yt-thumbnail-downloader", "yt-tag-extractor", "yt-transcript-extractor"],
  },
  {
    "id": "yt-transcript-extractor", "cat": "youtube", "icon": "📝",
    "name": "YouTube Transcript & Subtitle Cleaner",
    "h1": "YouTube Transcript Cleaner — Strip Timestamps for AI Summaries",
    "title": "YouTube Transcript Cleaner — Remove Timestamps & Export | Antigravity Tools",
    "desc": "Paste raw YouTube auto-generated captions and instantly strip all timestamps, speaker labels, and formatting — ready to paste into ChatGPT, Claude, or Gemini for AI summaries.",
    "keywords": "youtube transcript cleaner, remove timestamps from transcript, youtube caption cleaner, clean youtube subtitles, youtube to text",
    "features": ["Strip timestamps automatically","Remove speaker labels","Clean [Music] & [Applause] tags","One-click copy cleaned text","Perfect for AI summarization"],
    "faq": [
      ("How do I get a YouTube transcript?", "Click the three-dot menu under any YouTube video → Open Transcript. Copy all the text and paste it into this tool."),
      ("Does this work with auto-generated captions?", "Yes. This tool is specifically designed to clean the messy output from YouTube's automatic speech recognition captions."),
      ("Can I use this to summarize a video with AI?", "Yes. Clean the transcript and paste it directly into ChatGPT, Claude, or Gemini with a prompt like 'Summarize this video transcript'."),
    ],
    "related": ["yt-timestamp-generator", "yt-tag-extractor", "yt-thumbnail-downloader"],
  },
  {
    "id": "yt-tag-extractor", "cat": "youtube", "icon": "🏷️",
    "name": "YouTube Video Tag & Keyword Inspector",
    "h1": "YouTube Tag Extractor — See Any Video's Hidden Tags & SEO Keywords",
    "title": "YouTube Tag Extractor — Video SEO Keyword Inspector | Antigravity Tools",
    "desc": "Reveal the hidden tags, SEO keywords, title, description, and channel metadata of any YouTube video — essential for YouTube SEO research and competitor analysis.",
    "keywords": "youtube tag extractor, youtube video tags, youtube seo keywords, view youtube tags, youtube metadata inspector",
    "features": ["Extract hidden video tags","View title & description","Channel metadata inspection","Copy all tags with one click","YouTube SEO competitor research"],
    "faq": [
      ("Why can't I see YouTube video tags normally?", "YouTube removed public tag visibility from the UI years ago, but tags are still used for ranking. You need a tool like this to view them."),
      ("Are these the real tags or guesses?", "These are the real tags extracted from the YouTube Data API or page source — the exact same tags the creator uploaded."),
      ("Can I see tags on any video?", "Yes, as long as the video is public and not age-restricted."),
    ],
    "related": ["yt-thumbnail-downloader", "yt-transcript-extractor", "yt-timestamp-generator"],
  },
  {
    "id": "yt-banner-safezone", "cat": "youtube", "icon": "📐",
    "name": "YouTube Channel Banner Safe Zone Visualizer",
    "h1": "YouTube Banner Safe Zone Guide — Design for TV, Desktop, Mobile & Tablet",
    "title": "YouTube Banner Safe Zone Visualizer — Channel Art Guide | Antigravity Tools",
    "desc": "Visualize the exact YouTube channel banner safe zone overlay for TV, desktop, tablet, and mobile — upload your design and see what gets cropped before you publish.",
    "keywords": "youtube banner safe zone, youtube channel art dimensions, youtube banner template, youtube banner size guide, youtube channel banner maker",
    "features": ["TV, Desktop, Tablet, Mobile overlays","Upload your own banner image","Visual safe zone canvas guide","Correct dimensions: 2560×1440 px","Download with overlay markers"],
    "faq": [
      ("What is the YouTube channel banner safe zone?", "YouTube displays your banner at different crops on different devices. The safe zone (1546×423 px centered) is visible on ALL devices, while the full 2560×1440 shows only on TV."),
      ("What is the recommended YouTube banner size?", "Upload at 2560×1440 px. Keep all important text and logos within the central 1546×423 px safe zone."),
      ("Can I upload my current banner to check it?", "Yes. Click 'Upload Banner' in the tool to overlay the safe-zone guides on your existing design."),
    ],
    "related": ["yt-thumbnail-downloader", "yt-embed-generator", "yt-tag-extractor"],
  },
  {
    "id": "yt-embed-generator", "cat": "youtube", "icon": "🎥",
    "name": "Clean YouTube Responsive Iframe Generator",
    "h1": "YouTube Embed Code Generator — Responsive Iframe with Custom Options",
    "title": "YouTube Embed Generator — Responsive Iframe Code | Antigravity Tools",
    "desc": "Generate clean, responsive YouTube iframe embed code with custom start time, autoplay, loop, controls, and privacy-enhanced mode — copy and paste into any website.",
    "keywords": "youtube embed generator, youtube iframe code, responsive youtube embed, youtube embed code, embed youtube video website",
    "features": ["Custom start time (t=Xs)","Autoplay & loop options","Privacy-enhanced mode (youtube-nocookie)","Responsive 16:9 ratio CSS","Copy-ready HTML output"],
    "faq": [
      ("What is YouTube's privacy-enhanced embed mode?", "Privacy-enhanced mode uses youtube-nocookie.com. YouTube won't set cookies on your visitors until they actually click play, which helps with GDPR compliance."),
      ("How do I make a YouTube embed responsive?", "This tool outputs CSS that wraps the iframe in a 16:9 aspect-ratio container, making it scale perfectly on all screen sizes."),
      ("Can I set the video to start at a specific time?", "Yes. Enter the start time in seconds in the 'Start at' field and the embed code will include the ?start=Xs parameter."),
    ],
    "related": ["yt-banner-safezone", "yt-thumbnail-downloader", "yt-tag-extractor"],
  },

  # AI & PROMPTING
  {
    "id": "ai-token-counter", "cat": "ai", "icon": "🤖",
    "name": "AI Token & Cost Estimator",
    "h1": "AI Token Counter — Calculate Tokens & Cost for GPT-4o, Claude, Gemini Free",
    "title": "AI Token Counter & Cost Calculator — GPT-4o, Claude, Gemini | Antigravity Tools",
    "desc": "Count tokens and estimate API cost across GPT-4o, Claude 3.5, Gemini 2.0, DeepSeek R1, and Llama 3 — paste your prompt and get instant results, 100% client-side.",
    "keywords": "AI token counter, chatgpt token counter, openai token calculator, llm token estimator, claude token counter, gemini token counter",
    "features": ["GPT-4o / Claude 3.5 / Gemini 2.0 / DeepSeek / Llama 3","Cost per model at 2026 API pricing","Character & word count","Instant real-time calculation","100% private — text stays in browser"],
    "faq": [
      ("What is a token in AI?", "A token is roughly 3–4 characters or 0.75 words of text. AI models charge per token for both input (prompt) and output (response). This tool estimates your input token count."),
      ("How accurate is the token estimate?", "This tool uses the standard approximation of 1 token ≈ 4 characters. Actual tokenization varies slightly by model but this is accurate to within 5%."),
      ("Why are the costs different per model?", "Each AI provider sets their own pricing per million tokens. As of 2026, Gemini Flash is the cheapest and Claude 3.5 Sonnet is among the most capable at a higher price."),
    ],
    "related": ["ai-prompt-builder", "ai-prompt-trimmer", "json-schema-gen"],
  },
  {
    "id": "ai-prompt-builder", "cat": "ai", "icon": "🎯",
    "name": "System Prompt & Agent Skill Builder",
    "h1": "AI System Prompt Builder — Design Agent Instructions & Tool Definitions",
    "title": "AI System Prompt Builder — Agent Skill & Instruction Designer | Antigravity Tools",
    "desc": "Structure professional AI system prompts with custom instructions, tool definitions, XML tags, role definitions, constraints, and output formats for ChatGPT, Claude, and Gemini agents.",
    "keywords": "AI system prompt builder, ChatGPT system prompt, claude system prompt, AI agent instructions, prompt engineering tool",
    "features": ["Role, goal & persona definition","XML tag structure builder","Tool/function call definitions","Constraint & guardrail editor","Export to JSON or plain text"],
    "faq": [
      ("What is a system prompt?", "A system prompt is the hidden instruction you give an AI before the conversation starts. It defines the AI's persona, capabilities, constraints, and response format."),
      ("What is the difference between a system prompt and a user prompt?", "The system prompt is set once by the developer to configure the AI's behavior. The user prompt is what the end user types each time they chat."),
      ("Can I use this for ChatGPT Custom GPTs?", "Yes! This tool generates system prompts compatible with ChatGPT Custom GPTs, Claude Projects, Gemini Gems, and any OpenAI API application."),
    ],
    "related": ["ai-token-counter", "ai-prompt-trimmer", "json-schema-gen"],
  },
  {
    "id": "json-schema-gen", "cat": "ai", "icon": "🧬",
    "name": "LLM JSON Schema Builder",
    "h1": "JSON Schema Generator — Convert JSON to Schema for OpenAI Structured Outputs",
    "title": "JSON Schema Generator — LLM Structured Output Builder | Antigravity Tools",
    "desc": "Paste any JSON sample and instantly generate a valid JSON Schema definition for OpenAI function calling, Gemini structured outputs, and Pydantic models.",
    "keywords": "JSON schema generator, openai structured outputs, json schema from json, function calling schema, pydantic schema generator",
    "features": ["Auto-detect types from sample JSON","JSON Schema Draft 7 output","OpenAI function_call format","TypeScript interface output","Pydantic model export"],
    "faq": [
      ("What is JSON Schema?", "JSON Schema is a vocabulary that describes the structure and validation rules of JSON data. It is used by OpenAI, Google Gemini, and other LLM APIs to enforce structured output formats."),
      ("What is OpenAI Structured Outputs?", "Structured Outputs is an OpenAI API feature that guarantees the model's response matches your JSON Schema exactly — perfect for building reliable AI pipelines."),
      ("Can this generate Pydantic models for Python?", "Yes. The tool includes a 'Export as Pydantic' option that generates a Python class with all fields typed and validated."),
    ],
    "related": ["ai-prompt-builder", "ai-token-counter", "json-workbench"],
  },
  {
    "id": "ai-text-humanizer", "cat": "ai", "icon": "✨",
    "name": "AI Text Humanizer & Paraphraser",
    "h1": "AI Text Humanizer — Make AI Writing Sound Natural & Human",
    "title": "AI Text Humanizer & Paraphraser — Free Online | Antigravity Tools",
    "desc": "Rephrase robotic AI-generated text into natural, fluent human writing with custom tone options — friendly, professional, casual, or academic. Bypass AI detectors.",
    "keywords": "AI text humanizer, make AI text human, bypass AI detector, AI paraphraser, humanize ChatGPT text, AI writing humanizer",
    "features": ["Multiple tone presets (friendly, professional, casual)","Sentence restructuring","Remove AI-sounding phrases","One-click copy output","100% client-side processing"],
    "faq": [
      ("Why does AI-generated text sound robotic?", "LLMs tend to overuse certain phrases ('certainly!', 'as an AI...') and follow predictable sentence structures. Humanizing randomizes sentence length, varies word choice, and injects natural connectors."),
      ("Will this bypass Turnitin or GPTZero?", "This tool makes the text more natural and varied, which reduces AI detection scores. However, no tool can guarantee 100% bypass of all detectors."),
      ("Does it change the meaning of my text?", "The tool is set to paraphrase, not summarize. It preserves meaning while varying phrasing and structure."),
    ],
    "related": ["ai-token-counter", "ai-prompt-trimmer", "ai-code-scanner"],
  },
  {
    "id": "ai-prompt-trimmer", "cat": "ai", "icon": "✂️",
    "name": "AI Prompt Cost Trimmer",
    "h1": "AI Prompt Trimmer — Compress Prompts by 30–50% to Save API Costs",
    "title": "AI Prompt Trimmer — Reduce Token Count & API Costs | Antigravity Tools",
    "desc": "Compress long LLM prompts by 30–50% by removing stop words, redundant phrases, and filler — preserving core context while slashing your OpenAI or Claude API bill.",
    "keywords": "AI prompt trimmer, reduce AI tokens, compress prompt, reduce openai costs, llm prompt optimizer, token reducer",
    "features": ["30–50% token reduction","Stop-word removal","Redundancy elimination","Before/after token count comparison","Cost savings estimate"],
    "faq": [
      ("How much money can I save by trimming prompts?", "At scale, 30% token reduction means 30% lower API costs. For a startup spending $1,000/month on OpenAI, that is $300/month saved."),
      ("Does trimming affect response quality?", "For factual and task-based prompts, trimming rarely impacts quality. For creative or nuanced prompts, review the output before using."),
      ("What are stop words?", "Stop words are high-frequency but low-meaning words like 'the', 'a', 'very', 'really', 'just' that can often be removed without changing the instruction's meaning."),
    ],
    "related": ["ai-token-counter", "ai-prompt-builder", "ai-text-humanizer"],
  },
  {
    "id": "ai-code-scanner", "cat": "ai", "icon": "🔍",
    "name": "AI Code Bug & Security Scanner",
    "h1": "Free Online Code Scanner — Detect Bugs, Security Flaws & Performance Issues",
    "title": "AI Code Bug Scanner — Security & Performance Audit | Antigravity Tools",
    "desc": "Paste any code snippet and get an instant analysis of performance bottlenecks, security vulnerabilities (XSS, SQL injection, hardcoded secrets), and edge-case bugs — free, no signup.",
    "keywords": "code security scanner online, find bugs in code, code vulnerability checker, sql injection checker, xss scanner, code review tool",
    "features": ["XSS & SQL injection detection","Hardcoded secrets & API key finder","Performance bottleneck analysis","Edge-case & null pointer detection","Supports JS, Python, SQL, Go, PHP"],
    "faq": [
      ("What security vulnerabilities does this detect?", "The scanner looks for XSS vulnerabilities, SQL injection patterns, hardcoded passwords or API keys, insecure random number usage, unvalidated user input, and missing error handling."),
      ("Is my code sent to a server?", "No. All analysis runs entirely in your browser using pattern matching. Your code is never transmitted to any server."),
      ("Does this replace a full security audit?", "No. This tool catches common, known vulnerability patterns. For production security, always pair this with a full professional code review and penetration testing."),
    ],
    "related": ["ai-prompt-builder", "jwt-inspector", "hash-password-gen"],
  },
  {
    "id": "ai-audio-transcribe", "cat": "ai", "icon": "🎙️",
    "name": "AI Speech & Audio Transcriber",
    "h1": "Free Online Audio Transcriber — Convert Speech to Text in Browser",
    "title": "Audio Transcriber Online — Speech to Text Free | Antigravity Tools",
    "desc": "Transcribe speech and audio recordings into clean text using your browser's built-in Speech Recognition API — no upload, no API key, works directly in Chrome, Edge, and Safari.",
    "keywords": "audio transcriber online, speech to text free, voice to text online, transcribe audio free, browser speech recognition",
    "features": ["Live microphone transcription","File audio transcription","Punctuation auto-insert","Multi-language support","Export as TXT or copy to clipboard"],
    "faq": [
      ("Which browsers support this tool?", "Google Chrome and Microsoft Edge have the best support for the Web Speech API. Safari (iOS/Mac) also works. Firefox does not currently support this API."),
      ("Is my audio uploaded to a server?", "No. The Web Speech API processes audio locally on your device or through Google's on-device model in Chrome. No audio is sent to Antigravity servers."),
      ("How accurate is the transcription?", "Accuracy depends on audio quality and your browser. Chrome typically achieves 90%+ accuracy for clear English speech."),
    ],
    "related": ["ai-text-humanizer", "ai-prompt-trimmer", "markdown-editor"],
  },
  {
    "id": "ai-bg-remover", "cat": "ai", "icon": "🖼️",
    "name": "AI Background Remover",
    "h1": "Free Background Remover Online — Remove Image Background in Browser",
    "title": "Background Remover Online — Free AI Photo Cutout | Antigravity Tools",
    "desc": "Remove the background from any photo or product image directly in your browser using canvas color detection — no signup, no upload, 100% private.",
    "keywords": "background remover online free, remove background from image, AI background remover, photo background eraser, transparent background maker",
    "features": ["Client-side background removal","Transparent PNG output","Color-tolerance slider","One-click download","Supports JPG, PNG, WebP"],
    "faq": [
      ("Does this use AI?", "This tool uses browser canvas pixel-color detection with flood-fill algorithm. For complex scenes, results may vary. Professional AI removal requires a model like rembg or remove.bg."),
      ("Is my photo uploaded anywhere?", "No. Your image is processed entirely within your browser's Canvas API. Nothing is ever sent to a server."),
      ("What types of images work best?", "Images with a solid or uniform background (white, single color) work best. Complex nature backgrounds or hair with fine strands are harder to remove precisely."),
    ],
    "related": ["image-compressor", "social-banner-resizer", "brand-palette-extractor"],
  },

  # SITE TRUST & SEO
  {
    "id": "site-trust-badge", "cat": "trust", "icon": "🛡️",
    "name": "Website Trust Badge Builder",
    "h1": "Free Website Trust Badge Builder — Embeddable SVG Verification Badges",
    "title": "Website Trust Badge Builder — Free Embeddable SVG Badges | Antigravity Tools",
    "desc": "Design and export custom embeddable SVG or HTML trust verification badges for your SaaS, e-commerce site, or landing page — free, no watermark, instant download.",
    "keywords": "website trust badge, security badge website, verified badge generator, SSL badge, trust seal generator, embeddable badge",
    "features": ["Custom text & icon badges","SVG & PNG export","Embed as HTML snippet","Multiple badge styles","No watermark, free forever"],
    "faq": [
      ("Do trust badges actually increase conversions?", "Yes. Studies show that security and trust badges near checkout buttons or CTAs can increase conversions by 10–42%. They reduce purchase anxiety."),
      ("Can I use these badges commercially?", "Yes. All badges generated by this tool are royalty-free and can be used on any commercial website."),
      ("Are these official SSL or security certifications?", "These are visual trust indicators for design purposes. They are not issued by SSL certificate authorities or official security bodies."),
    ],
    "related": ["og-card-previewer", "meta-tag-generator", "schema-generator"],
  },
  {
    "id": "og-card-previewer", "cat": "trust", "icon": "🖼️",
    "name": "Social Open Graph (OG) Previewer",
    "h1": "Open Graph Preview Tool — See How Your Link Looks on Twitter, LinkedIn & Discord",
    "title": "OG Card Previewer — Social Media Link Preview Tool | Antigravity Tools",
    "desc": "Preview exactly how your website's Open Graph meta tags will render as link cards on Twitter/X, LinkedIn, Facebook, WhatsApp, Discord, and Telegram before publishing.",
    "keywords": "open graph preview, og card preview, social media link preview, twitter card preview, linkedin og preview, og image tester",
    "features": ["Twitter/X card preview","LinkedIn link card preview","Facebook & WhatsApp preview","Discord embed preview","og:image, og:title & og:description check"],
    "faq": [
      ("What is Open Graph?", "Open Graph is a protocol created by Facebook. og: meta tags in your HTML control how your page appears as a link card when shared on social media platforms."),
      ("Why does my image not show when I share on Twitter?", "Twitter requires an og:image of at least 600×315 px for a large card. Also ensure your twitter:card meta tag is set to 'summary_large_image'."),
      ("Why do cached previews look different?", "Social platforms cache OG data. After updating your og: tags, use platform-specific debug tools (Twitter Card Validator, Facebook Debugger) to force a cache refresh."),
    ],
    "related": ["meta-tag-generator", "site-trust-badge", "favicon-generator"],
  },
  {
    "id": "meta-tag-generator", "cat": "trust", "icon": "🔍",
    "name": "Meta Tag & SEO Head Builder",
    "h1": "Meta Tag Generator — Build a Complete SEO HTML Head in Seconds",
    "title": "Meta Tag Generator — Free SEO Head Builder | Antigravity Tools",
    "desc": "Generate a complete, SEO-optimized HTML <head> section with title, meta description, canonical, Open Graph, Twitter Cards, robots, and viewport tags — copy and paste ready.",
    "keywords": "meta tag generator, SEO meta tags, html head generator, open graph generator, twitter card generator, canonical tag generator",
    "features": ["Title & meta description","Canonical URL tag","Open Graph (og:) tags","Twitter Card tags","Robots & viewport meta"],
    "faq": [
      ("How long should my meta description be?", "Google displays up to ~155–160 characters of meta description in search results. Keep it between 120–155 characters, include your target keyword, and write it as a compelling call-to-action."),
      ("Does the meta keywords tag still matter?", "No. Google officially ignores the meta keywords tag. Focus on title, description, h1, and content quality instead."),
      ("What is a canonical tag and why do I need it?", "A canonical tag tells Google which URL is the 'official' version of a page, preventing duplicate content issues when the same content is accessible at multiple URLs."),
    ],
    "related": ["og-card-previewer", "schema-generator", "sitemap-generator"],
  },
  {
    "id": "favicon-generator", "cat": "trust", "icon": "✨",
    "name": "Favicon & App Icon Generator",
    "h1": "Free Favicon Generator — Create Multi-Size Favicons from Any Image or Emoji",
    "title": "Favicon Generator — Multi-Size Icon from Image or Emoji | Antigravity Tools",
    "desc": "Upload any image or type any emoji to instantly generate favicons in all required sizes (16×16, 32×32, 180×180, 192×192, 512×512) with the correct HTML head snippet.",
    "keywords": "favicon generator, create favicon online, favicon from image, ico generator, favicon maker free, app icon generator",
    "features": ["16, 32, 48, 180, 192, 512 px sizes","Upload image or use any emoji","Download as ICO or PNG pack","Copy HTML head snippet","PWA manifest icon sizes"],
    "faq": [
      ("What size should a favicon be?", "A favicon needs to exist in multiple sizes: 16×16 and 32×32 for browser tabs, 180×180 for Apple Touch Icon, and 192×192 + 512×512 for PWA app icons."),
      ("Can I use an emoji as a favicon?", "Yes! Emoji favicons work in all modern browsers and are a trending design choice. Just type your emoji in the tool and download all sizes."),
      ("What format should a favicon be?", "Use .ico for maximum compatibility (IE support). Modern browsers also support .png and .svg favicons, which offer better quality at high resolutions."),
    ],
    "related": ["meta-tag-generator", "og-card-previewer", "site-trust-badge"],
  },
  {
    "id": "schema-generator", "cat": "trust", "icon": "🏷️",
    "name": "Schema.org Rich Snippet Builder",
    "h1": "JSON-LD Schema Generator — Build Google Rich Snippets for FAQs, Products & Articles",
    "title": "Schema Generator — JSON-LD Rich Snippet Builder | Antigravity Tools",
    "desc": "Build valid Schema.org JSON-LD structured data for FAQPage, Product, Article, Organization, BreadcrumbList, and LocalBusiness — copy and add to your site for Google Rich Snippets.",
    "keywords": "schema generator, JSON-LD generator, rich snippet generator, FAQ schema generator, product schema, structured data generator, google rich results",
    "features": ["FAQPage, Product, Article schemas","Organization & LocalBusiness","BreadcrumbList schema","Instant JSON-LD output","Google Rich Results compatible"],
    "faq": [
      ("What are Google Rich Snippets?", "Rich Snippets are enhanced search results that show extra information like star ratings, prices, FAQ answers, or breadcrumbs directly in Google SERP — increasing click-through rates by up to 30%."),
      ("How do I add JSON-LD to my website?", "Paste the generated <script type='application/ld+json'>...</script> block into your HTML <head> section. No plugin or framework needed."),
      ("Does schema markup guarantee a rich snippet?", "No. Schema markup makes your page eligible for rich snippets, but Google decides whether to show them based on relevance and content quality."),
    ],
    "related": ["meta-tag-generator", "og-card-previewer", "sitemap-generator"],
  },
  {
    "id": "core-web-vitals", "cat": "trust", "icon": "⚡",
    "name": "Core Web Vitals Audit Simulator",
    "h1": "Core Web Vitals Checker — Simulate LCP, CLS & FID Metrics Online",
    "title": "Core Web Vitals Audit — LCP, CLS, FID Simulator | Antigravity Tools",
    "desc": "Simulate and understand your Core Web Vitals scores — Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and First Input Delay (FID) — with optimization tips.",
    "keywords": "core web vitals checker, LCP test, CLS checker, FID test, page speed vitals, google core web vitals tool",
    "features": ["LCP, CLS, FID simulation","Green / needs improvement / poor thresholds","Optimization tip per metric","Mobile vs desktop comparison","Google ranking signal insights"],
    "faq": [
      ("What are Core Web Vitals?", "Core Web Vitals are three real-world performance metrics Google uses as a ranking factor: LCP (load time of largest element), CLS (visual stability), and FID/INP (interactivity)."),
      ("What is a good LCP score?", "LCP under 2.5 seconds is 'Good', 2.5–4.0 seconds 'Needs Improvement', and over 4.0 seconds 'Poor'. Aim for under 2.5s for good SEO."),
      ("How do I improve CLS?", "Set explicit width/height on images and videos, avoid inserting content above existing content, and use CSS transform animations instead of layout-affecting properties."),
    ],
    "related": ["meta-tag-generator", "schema-generator", "sitemap-generator"],
  },
  {
    "id": "sitemap-generator", "cat": "trust", "icon": "🗺️",
    "name": "Visual XML Sitemap & Robots Builder",
    "h1": "Free XML Sitemap Generator — Build sitemap.xml & robots.txt Online",
    "title": "XML Sitemap Generator — Build sitemap.xml & robots.txt Free | Antigravity Tools",
    "desc": "Generate a valid XML sitemap and robots.txt file for any website by entering your URLs — with changefreq, priority, and lastmod settings. Download and submit to Google Search Console.",
    "keywords": "xml sitemap generator, sitemap.xml generator, robots.txt generator, google sitemap creator, free sitemap tool",
    "features": ["Valid XML sitemap output","robots.txt builder","Priority & changefreq settings","lastmod date editor","Submit to GSC instructions"],
    "faq": [
      ("What is an XML sitemap?", "A sitemap.xml file lists all the important pages on your website, telling search engines which pages to crawl and index, and how often they change."),
      ("Do I need a sitemap for SEO?", "Sitemaps are especially important for large sites, new sites, or sites with pages that are hard to discover through links. They speed up Google's discovery and indexing of your content."),
      ("How do I submit a sitemap to Google?", "Go to Google Search Console → Sitemaps → Enter your sitemap URL (e.g. https://yoursite.com/sitemap.xml) → Submit."),
    ],
    "related": ["meta-tag-generator", "schema-generator", "robots-checker"],
  },
  {
    "id": "privacy-policy-gen", "cat": "trust", "icon": "⚖️",
    "name": "GDPR Privacy Policy Generator",
    "h1": "Free Privacy Policy Generator — GDPR & CCPA Compliant",
    "title": "Privacy Policy Generator — GDPR & CCPA Compliant | Antigravity Tools",
    "desc": "Generate a complete, customized GDPR and CCPA compliant privacy policy document for your website or app in minutes — just fill in your details and copy the HTML.",
    "keywords": "privacy policy generator, GDPR privacy policy, CCPA privacy policy, free privacy policy generator, website privacy policy template",
    "features": ["GDPR Article 13 compliant","CCPA California compliant","Custom data controller details","Cookies & analytics disclosure","Cookie consent & right to erasure"],
    "faq": [
      ("Is a privacy policy legally required?", "Yes, if you collect any personal data (including cookies, analytics, email addresses), most jurisdictions require a privacy policy. GDPR in EU, CCPA in California, and PIPEDA in Canada all mandate it."),
      ("Does this tool provide legal advice?", "No. This tool generates a template based on common GDPR/CCPA requirements. Always have a qualified lawyer review your privacy policy for your specific business context."),
      ("Do I need a privacy policy if I only use Google Analytics?", "Yes. Google Analytics collects personal data (IP addresses, device info). Under GDPR, you must disclose this in your privacy policy and obtain consent."),
    ],
    "related": ["meta-tag-generator", "schema-generator", "site-trust-badge"],
  },
  {
    "id": "link-redirect-checker", "cat": "trust", "icon": "🔗",
    "name": "Redirect & HTTP Status Tester",
    "h1": "URL Redirect Checker — Test HTTP Status Codes & Redirect Chains Free",
    "title": "Redirect Checker — HTTP Status Code & Redirect Chain Tester | Antigravity Tools",
    "desc": "Test any URL's HTTP status code, follow redirect chains (301, 302, 307, 308), and verify your HTTPS/www redirects are working correctly — free, instant, no signup.",
    "keywords": "redirect checker, http status code checker, url redirect tester, 301 redirect checker, check redirect chain, http status checker",
    "features": ["HTTP status code display (200, 301, 302, 404...)","Full redirect chain visualization","HTTPS & www redirect verification","Response time measurement","Detect redirect loops"],
    "faq": [
      ("What is a 301 redirect?", "A 301 redirect is a permanent redirect. It tells search engines to transfer the SEO value (link equity) from the old URL to the new URL. Always use 301s for permanent page moves."),
      ("What is the difference between 301 and 302?", "301 = Permanent redirect (passes SEO value). 302 = Temporary redirect (does not fully pass SEO value). Incorrectly using 302 for permanent redirects loses SEO equity."),
      ("How many redirects is too many?", "More than 3 redirect hops slows page load and confuses bots. Each redirect adds ~100–300ms latency. Aim for a direct or single-hop redirect."),
    ],
    "related": ["core-web-vitals", "meta-tag-generator", "og-card-previewer"],
  },

  # DEV & CODE
  {
    "id": "json-workbench", "cat": "dev", "icon": "⚡",
    "name": "JSON Workbench & Type Converter",
    "h1": "JSON Formatter Online — Beautify, Minify, Validate & Convert JSON Free",
    "title": "JSON Formatter Online — Beautify, Validate & Convert | Antigravity Tools",
    "desc": "Beautify, minify, and validate JSON in your browser. Convert JSON to TypeScript interfaces, Python dataclasses, Go structs, and SQL table schemas — instantly, no server.",
    "keywords": "json formatter online, json beautifier, json validator, json to typescript, json minifier, pretty print json, json converter",
    "features": ["JSON prettify with 2/4 space indent","JSON minify / compress","JSON Schema validation","Convert to TypeScript, Python, Go","SQL table schema generation"],
    "faq": [
      ("Why is my JSON invalid?", "Common issues: trailing commas (not allowed in JSON), single quotes instead of double quotes, unquoted keys, or comments (not supported in JSON). This tool highlights the exact error line."),
      ("What is the difference between JSON and JSON5?", "JSON5 is a relaxed superset of JSON that allows comments, trailing commas, and single quotes. Standard JSON parsers reject JSON5 syntax."),
      ("How do I convert JSON to a TypeScript interface?", "Paste your JSON and click 'Convert to TypeScript'. The tool auto-detects types and generates a typed interface including nested objects and arrays."),
    ],
    "related": ["json-schema-gen", "curl-converter", "regex-tester"],
  },
  {
    "id": "curl-converter", "cat": "dev", "icon": "🌐",
    "name": "cURL to Code Converter",
    "h1": "cURL to Code Converter — Convert cURL Commands to Python, JS, Go & PHP",
    "title": "cURL Converter — Convert cURL to Python, JavaScript, Go, PHP | Antigravity Tools",
    "desc": "Paste any cURL terminal command and instantly convert it to JavaScript fetch(), Python requests, Go http, or PHP cURL code — ready to paste into your project.",
    "keywords": "curl to python, curl converter online, curl to javascript, curl to fetch, curl command converter, curl to code",
    "features": ["cURL → JavaScript fetch()","cURL → Python requests","cURL → Go net/http","cURL → PHP cURL","Headers, body, auth preserved"],
    "faq": [
      ("What is cURL?", "cURL is a command-line tool for making HTTP requests. Developers use it to test APIs, download files, and debug network requests from the terminal."),
      ("How do I get a cURL command from a website?", "In Chrome DevTools (F12) → Network tab → right-click any request → Copy → Copy as cURL. This gives you the exact request with headers and auth tokens."),
      ("Does this handle authentication headers?", "Yes. Bearer tokens, Basic auth, and custom headers in your cURL command are preserved and correctly translated to the target language."),
    ],
    "related": ["json-workbench", "cors-header-inspector", "regex-tester"],
  },
  {
    "id": "svg-optimizer", "cat": "dev", "icon": "📐",
    "name": "SVG Optimizer & React Builder",
    "h1": "SVG Optimizer Online — Clean SVG Code & Convert to React Component",
    "title": "SVG Optimizer & React Component Generator | Antigravity Tools",
    "desc": "Paste SVG code to remove redundant attributes, clean metadata, optimize paths, and convert to a React JSX component with proper props — all in the browser.",
    "keywords": "svg optimizer online, svg cleaner, svg to react component, svg minifier, optimize svg online, svgo online",
    "features": ["Remove metadata & comments","Clean redundant attributes","Path optimization","Convert to React JSX component","Before/after size comparison"],
    "faq": [
      ("Why should I optimize SVG files?", "Raw SVGs exported from Figma or Illustrator contain editor metadata, comments, and redundant transforms that can double the file size. Optimization reduces SVG size by 30–70%."),
      ("How do I use an SVG as a React component?", "Paste your SVG and click 'Convert to React'. The tool wraps it in a functional component with width, height, and className props that you can import directly."),
      ("Does SVG optimization affect visual quality?", "No. SVG optimization is lossless — it removes invisible metadata and simplifies math without changing how the graphic renders."),
    ],
    "related": ["json-workbench", "css-animator", "glassmorphism-studio"],
  },
  {
    "id": "sql-formatter", "cat": "dev", "icon": "🗄️",
    "name": "SQL Formatter & Query Beautifier",
    "h1": "SQL Formatter Online — Beautify & Format SQL Queries Free",
    "title": "SQL Formatter Online — Beautify SQL Queries | Antigravity Tools",
    "desc": "Paste messy SQL queries and format them into clean, readable code with proper indentation, keyword capitalization, and dialect support for MySQL, PostgreSQL, and SQLite.",
    "keywords": "sql formatter online, sql beautifier, format sql query, sql query formatter, pretty print sql, sql indenter",
    "features": ["MySQL, PostgreSQL, SQLite dialects","Keyword capitalization","Proper line breaks & indentation","Subquery nesting support","One-click copy formatted SQL"],
    "faq": [
      ("Does SQL formatting affect query performance?", "No. SQL formatting is purely cosmetic — whitespace and capitalization do not affect query execution or speed."),
      ("Why should I format my SQL?", "Formatted SQL is significantly easier to read, debug, and review in code. It reduces the time it takes to spot errors or understand complex joins."),
      ("Does this handle stored procedures?", "Yes. The formatter handles most SQL constructs including stored procedures, functions, CTEs (WITH clauses), and window functions."),
    ],
    "related": ["json-workbench", "regex-tester", "curl-converter"],
  },
  {
    "id": "regex-tester", "cat": "dev", "icon": "🔤",
    "name": "Regex Tester & Visualizer",
    "h1": "Regex Tester Online — Test & Visualize Regular Expressions in Real Time",
    "title": "Regex Tester Online — Live Match Highlighting & Visualizer | Antigravity Tools",
    "desc": "Test regular expressions with real-time match highlighting, group capture display, substitution preview, and common regex pattern library — free, instant, browser-based.",
    "keywords": "regex tester online, regular expression tester, regex checker, regex validator, test regex online, regex visualizer",
    "features": ["Real-time match highlighting","Capture group display","Substitution / replace preview","Flags: g, i, m, s, u support","Common regex pattern library"],
    "faq": [
      ("What is a regular expression?", "A regular expression (regex) is a sequence of characters that defines a search pattern. They are used for text search, validation (emails, phone numbers), and data extraction."),
      ("What is the difference between .match() and .test()?", ".test() returns true/false (does the pattern match?). .match() returns the matched string or null. Use .test() for simple validation, .match() to extract matched values."),
      ("How do I match any digit in regex?", "Use \\d to match any digit (0–9). For multiple digits, use \\d+ (one or more) or \\d{3} (exactly 3 digits)."),
    ],
    "related": ["json-workbench", "sql-formatter", "curl-converter"],
  },
  {
    "id": "cron-generator", "cat": "dev", "icon": "⏰",
    "name": "Cron Schedule Builder & Explainer",
    "h1": "Cron Expression Generator — Build & Explain Cron Schedules Visually",
    "title": "Cron Generator — Visual Cron Schedule Builder & Explainer | Antigravity Tools",
    "desc": "Build cron job expressions visually with sliders and dropdowns, get a human-readable description of any cron expression, and see the next 5 scheduled run times.",
    "keywords": "cron generator, cron expression builder, cron schedule builder, cron job generator, cron expression explainer, cron validator",
    "features": ["Visual minute/hour/day/month/weekday builder","Human-readable description","Next 5 run times preview","Standard 5-field cron + seconds","Common schedule presets"],
    "faq": [
      ("What is a cron job?", "A cron job is a scheduled task that runs automatically at specified intervals on a server or system. Common uses: database backups, email reports, cache clearing, and API data syncs."),
      ("What does '*/5 * * * *' mean?", "This runs every 5 minutes. The five fields are: minute hour day-of-month month day-of-week. An asterisk (*) means 'every unit', and */5 means 'every 5 units'."),
      ("How do I run a cron job every weekday at 9 AM?", "Use: 0 9 * * 1-5. This means: minute 0, hour 9, any day, any month, Monday through Friday (1-5)."),
    ],
    "related": ["git-helper", "json-workbench", "regex-tester"],
  },
  {
    "id": "git-helper", "cat": "dev", "icon": "🌿",
    "name": "Git CLI Command Helper",
    "h1": "Git Command Generator — Build Complex Git Commands Visually",
    "title": "Git Command Helper — Visual Git CLI Builder | Antigravity Tools",
    "desc": "Construct complex Git commands visually — undo commits, squash, cherry-pick, rebase, stash, and more — with explanations of what each command does before you run it.",
    "keywords": "git command generator, git helper, git command builder, git undo commit, git squash commits, git cheatsheet, git rebase helper",
    "features": ["Undo / reset / revert commits","Squash & rebase builder","Cherry-pick helper","Stash & pop guide","Explanation for every command"],
    "faq": [
      ("How do I undo a git commit without losing changes?", "Use git reset --soft HEAD~1. This moves the HEAD back one commit but keeps your changes staged. Use --mixed to unstage them, or --hard to discard them entirely."),
      ("What is the difference between git revert and git reset?", "git revert creates a new commit that undoes a previous commit (safe for shared branches). git reset moves the branch pointer back (rewrites history — dangerous on shared branches)."),
      ("How do I squash multiple commits into one?", "Use git rebase -i HEAD~N (where N is the number of commits). Mark all but the first as 'squash' or 's' in the interactive editor."),
    ],
    "related": ["regex-tester", "json-workbench", "curl-converter"],
  },

  # SECURITY & AUTH
  {
    "id": "jwt-inspector", "cat": "security", "icon": "🔐",
    "name": "JWT Inspector & Payload Debugger",
    "h1": "JWT Decoder Online — Inspect JWT Header, Payload & Expiry Instantly",
    "title": "JWT Decoder Online — JWT Inspector & Debugger | Antigravity Tools",
    "desc": "Paste any JSON Web Token to instantly decode its header, payload claims, and check expiration time — 100% client-side, your token is never sent to any server.",
    "keywords": "JWT decoder online, decode JWT token, JWT inspector, JWT debugger, JSON web token decoder, jwt verify online",
    "features": ["Decode header, payload & signature","Expiry (exp) date display","iat / nbf timestamp human-readable","Color-coded claim types","100% client-side — token never sent anywhere"],
    "faq": [
      ("Is it safe to paste my JWT into an online tool?", "This tool decodes JWTs entirely in your browser — your token is never sent to any server. However, avoid pasting production tokens with sensitive user data unnecessarily."),
      ("Can this tool verify a JWT signature?", "JWT signature verification requires your server's secret key. This tool decodes the header and payload (which are Base64-encoded, not encrypted) without verifying the signature."),
      ("What is the 'exp' claim in a JWT?", "The 'exp' (expiration time) claim is a Unix timestamp indicating when the token expires. Requests made with an expired JWT will be rejected by the server."),
    ],
    "related": ["hash-password-gen", "universal-encoder", "rsa-ecc-key-gen"],
  },
  {
    "id": "universal-encoder", "cat": "security", "icon": "🔄",
    "name": "Universal Encoder / Decoder",
    "h1": "Online Encoder Decoder — Base64, URL, HTML, Hex, Unicode",
    "title": "Universal Encoder Decoder — Base64, URL, Hex, Unicode | Antigravity Tools",
    "desc": "Encode and decode text in Base64, URL encoding, HTML entities, Hex, Binary, and Unicode — all in one multi-tab tool, 100% client-side.",
    "keywords": "base64 encoder decoder, url encoder decoder, html entity encoder, hex encoder, unicode encoder, online encoder tool",
    "features": ["Base64 encode & decode","URL encode / percent-encode","HTML entity encode","Hex & binary converter","Unicode escape sequences"],
    "faq": [
      ("What is Base64 encoding?", "Base64 converts binary data into an ASCII string using 64 characters. It is commonly used to embed images in HTML/CSS (data URIs) and transmit binary data in JSON APIs."),
      ("What is URL encoding?", "URL encoding (percent-encoding) replaces unsafe characters in a URL with a % followed by the hex code. For example, a space becomes %20 and & becomes %26."),
      ("What is the difference between encoding and encryption?", "Encoding converts data to another format for compatibility — it can be reversed by anyone. Encryption scrambles data using a secret key — only the key holder can decrypt it."),
    ],
    "related": ["jwt-inspector", "hash-password-gen", "rsa-ecc-key-gen"],
  },
  {
    "id": "hash-password-gen", "cat": "security", "icon": "🔑",
    "name": "Hash & Password Generator",
    "h1": "SHA-256 Hash Generator Online — Hash Text & Generate Strong Passwords",
    "title": "Hash Generator — SHA-256, SHA-512 & Password Generator | Antigravity Tools",
    "desc": "Generate SHA-256 and SHA-512 cryptographic hashes using the browser Web Crypto API, and create strong random passwords with custom length and character rules — 100% client-side.",
    "keywords": "sha256 generator online, hash generator, password generator online, sha512 hash, md5 generator, strong password generator, cryptographic hash",
    "features": ["SHA-256 & SHA-512 via Web Crypto API","MD5 (legacy) support","Password generator with rules","Custom length & character sets","One-click copy"],
    "faq": [
      ("What is SHA-256 used for?", "SHA-256 is a cryptographic hash function used to verify data integrity. It is used in password storage (with bcrypt/argon2), digital signatures, blockchain, and file checksum verification."),
      ("Can SHA-256 hashes be reversed?", "No. SHA-256 is a one-way function — you cannot reverse a hash back to the original text mathematically. Only brute-force or rainbow table attacks work for weak inputs."),
      ("What makes a strong password?", "A strong password is at least 16 characters, uses uppercase, lowercase, numbers, and symbols, and is unique per site. This generator creates cryptographically random passwords."),
    ],
    "related": ["jwt-inspector", "universal-encoder", "rsa-ecc-key-gen"],
  },
  {
    "id": "uuid-ulid-gen", "cat": "security", "icon": "🎲",
    "name": "UUID & ULID Generator",
    "h1": "UUID Generator Online — Generate Bulk UUID v4 & ULID Free",
    "title": "UUID Generator Online — Bulk UUID v4 & ULID Generator | Antigravity Tools",
    "desc": "Generate cryptographically secure UUID v4 and ULID (Universally Unique Lexicographically Sortable Identifier) identifiers in bulk — copy as JSON array, CSV, or plain list.",
    "keywords": "uuid generator online, uuid v4 generator, bulk uuid generator, ULID generator, unique id generator, generate uuid free",
    "features": ["UUID v4 (RFC 4122 compliant)","ULID (sortable unique IDs)","Bulk generation (up to 1000)","Copy as JSON, CSV, or list","Web Crypto API — truly random"],
    "faq": [
      ("What is a UUID?", "A UUID (Universally Unique Identifier) is a 128-bit identifier formatted as 8-4-4-4-12 hex groups (e.g., a1b2c3d4-...). UUID v4 is randomly generated and statistically guaranteed to be unique."),
      ("What is the difference between UUID and ULID?", "UUIDs are random and non-sortable. ULIDs are timestamp-prefixed and lexicographically sortable, making them better for database primary keys where chronological ordering matters."),
      ("Are these UUIDs truly random and unique?", "Yes. This tool uses the browser's Web Crypto API (crypto.randomUUID) which generates cryptographically secure random values."),
    ],
    "related": ["hash-password-gen", "universal-encoder", "jwt-inspector"],
  },
  {
    "id": "subnet-calculator", "cat": "security", "icon": "🌐",
    "name": "Subnet & IP CIDR Calculator",
    "h1": "IP Subnet Calculator Online — CIDR, Usable IPs & Broadcast Address",
    "title": "Subnet Calculator — IP CIDR & Network Range Calculator | Antigravity Tools",
    "desc": "Calculate IPv4 subnet masks, network addresses, usable IP ranges, broadcast addresses, and number of hosts for any CIDR notation — free, instant, browser-based.",
    "keywords": "subnet calculator, CIDR calculator, IP subnet calculator, network calculator, subnet mask calculator, ipv4 calculator",
    "features": ["CIDR notation input (e.g. 192.168.1.0/24)","Network & broadcast address","Usable host IP range","Number of hosts calculation","Binary subnet mask display"],
    "faq": [
      ("What is CIDR notation?", "CIDR (Classless Inter-Domain Routing) notation expresses an IP address and its subnet mask together, e.g., 192.168.1.0/24. The /24 means 24 bits are used for the network, leaving 8 bits for hosts (254 usable)."),
      ("How many hosts does a /24 subnet have?", "A /24 subnet has 256 addresses total. Subtract 2 (network address + broadcast address) = 254 usable host addresses."),
      ("What is the difference between a subnet mask and CIDR?", "They express the same thing differently. 255.255.255.0 in subnet mask notation equals /24 in CIDR notation. Both define how many bits are used for the network portion."),
    ],
    "related": ["cors-header-inspector", "link-redirect-checker", "jwt-inspector"],
  },
  {
    "id": "cors-header-inspector", "cat": "security", "icon": "🛡️",
    "name": "CORS & Security Header Inspector",
    "h1": "CORS Header Checker — Analyze CORS Policy & Security Headers Online",
    "title": "CORS Header Inspector — Security Header Analyzer | Antigravity Tools",
    "desc": "Analyze CORS policies and HTTP security headers (CSP, HSTS, X-Frame-Options, etc.) for any URL — identify misconfigurations, missing headers, and security risks.",
    "keywords": "CORS checker online, cors test, security header checker, CSP checker, HSTS checker, http security headers, cors policy analyzer",
    "features": ["Access-Control-Allow-Origin analysis","CSP policy inspector","HSTS, X-Frame-Options, COEP check","Missing header warnings","Security score summary"],
    "faq": [
      ("What is CORS?", "CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls which domains can make requests to your API. A misconfigured CORS header can expose your API to cross-site attacks."),
      ("What is Content Security Policy (CSP)?", "CSP is an HTTP header that tells browsers which sources of content (scripts, styles, images) are trusted. A strict CSP significantly reduces XSS attack surface."),
      ("What is HSTS?", "HTTP Strict Transport Security (HSTS) forces browsers to only connect to your site over HTTPS, preventing SSL stripping attacks. Google also gives a minor ranking boost to HSTS-enabled sites."),
    ],
    "related": ["jwt-inspector", "link-redirect-checker", "subnet-calculator"],
  },
  {
    "id": "pii-masker", "cat": "security", "icon": "🙈",
    "name": "Data PII Redactor & Masker",
    "h1": "PII Redactor Online — Mask Emails, Phone Numbers, SSNs & Credit Cards",
    "title": "PII Masker — Redact Personal Data from Text Free | Antigravity Tools",
    "desc": "Automatically detect and mask Personally Identifiable Information (emails, phone numbers, credit cards, SSNs, IP addresses) from any text — 100% client-side, data stays private.",
    "keywords": "PII masker, PII redactor, data anonymizer, mask personal data, GDPR data masking, email masker, credit card masker",
    "features": ["Email address masking","Phone number detection & mask","Credit card number redaction","SSN & national ID masking","IP address anonymization"],
    "faq": [
      ("What is PII?", "PII (Personally Identifiable Information) is any data that can identify a specific individual — names, email addresses, phone numbers, SSNs, credit card numbers, and IP addresses."),
      ("Why do I need to redact PII?", "Sharing logs, support tickets, or datasets containing PII can violate GDPR, HIPAA, and CCPA. Always redact PII before sharing data with third-party tools, AI models, or support teams."),
      ("Is my data sent to a server for processing?", "No. All pattern matching runs in your browser via JavaScript regex. Your data never leaves your device."),
    ],
    "related": ["hash-password-gen", "universal-encoder", "privacy-policy-gen"],
  },
  {
    "id": "rsa-ecc-key-gen", "cat": "security", "icon": "🗝️",
    "name": "RSA & ECC Cryptographic Key Generator",
    "h1": "RSA Key Generator Online — Generate 2048-bit RSA Key Pairs in Browser",
    "title": "RSA Key Generator — 2048-bit & ECC Key Pair Generator | Antigravity Tools",
    "desc": "Generate RSA 2048/4096-bit and ECC P-256/P-384 public/private PEM key pairs directly in your browser using the Web Crypto API — no server, keys never leave your device.",
    "keywords": "RSA key generator online, generate RSA keys, public private key generator, PEM key generator, ECC key generator, cryptographic key pair",
    "features": ["RSA 2048-bit & 4096-bit key pairs","ECC P-256 & P-384 keys","PEM format output","Web Crypto API — browser native","Keys never sent anywhere"],
    "faq": [
      ("What is a public/private key pair?", "Asymmetric cryptography uses two mathematically linked keys: a public key (shared with anyone to encrypt data or verify signatures) and a private key (kept secret to decrypt or sign)."),
      ("What is RSA used for?", "RSA keys are used for SSH authentication, TLS/HTTPS certificates, JWT RS256 signing, email encryption (PGP/GPG), and API signature verification."),
      ("Is it safe to generate keys in the browser?", "Yes. This tool uses the browser's native Web Crypto API (SubtleCrypto) which is hardware-backed on most devices. The generated keys are never transmitted."),
    ],
    "related": ["jwt-inspector", "hash-password-gen", "universal-encoder"],
  },

  # TEXT & MEDIA
  {
    "id": "markdown-editor", "cat": "media", "icon": "📝",
    "name": "Markdown Live Editor & Preview",
    "h1": "Markdown Editor Online — Live Preview & HTML Export Free",
    "title": "Markdown Editor Online — Live Preview & HTML Export | Antigravity Tools",
    "desc": "Write Markdown with a real-time side-by-side HTML preview. Supports GitHub Flavored Markdown (GFM), tables, code blocks, and task lists — export as HTML or copy rendered output.",
    "keywords": "markdown editor online, markdown preview, markdown to html, live markdown editor, gfm editor, markdown converter online",
    "features": ["Real-time split-pane preview","GitHub Flavored Markdown support","Tables, code blocks, task lists","Export to HTML","Copy rendered HTML"],
    "faq": [
      ("What is Markdown?", "Markdown is a lightweight markup language using plain-text symbols to add formatting. # makes headers, **bold** makes bold text, - creates bullet lists. It converts to HTML."),
      ("What is GitHub Flavored Markdown?", "GFM extends standard Markdown with tables, task lists (- [ ]), strikethrough (~~text~~), fenced code blocks with syntax highlighting, and autolinks — used on GitHub, GitLab, and Notion."),
      ("Can I use this to write blog posts?", "Yes! Write your post in Markdown and export the HTML to paste into any CMS like WordPress, Ghost, or Webflow's custom HTML block."),
    ],
    "related": ["diff-checker", "text-converter", "ai-text-humanizer"],
  },
  {
    "id": "diff-checker", "cat": "media", "icon": "📊",
    "name": "Diff Checker & Code Comparison",
    "h1": "Diff Checker Online — Compare Two Text Files Side-by-Side Free",
    "title": "Diff Checker Online — Text & Code Comparison Tool | Antigravity Tools",
    "desc": "Compare two blocks of text or code side-by-side with visual line-by-line diff highlighting — additions in green, deletions in red. Free, instant, browser-based.",
    "keywords": "diff checker online, text comparison tool, code diff tool, compare two files online, text diff viewer, diff tool",
    "features": ["Side-by-side diff view","Inline diff mode","Line-by-line change highlighting","Addition (green) / deletion (red) colors","Works for code, JSON, SQL, text"],
    "faq": [
      ("What is a diff?", "A diff (difference) is a comparison output showing exactly what changed between two versions of text or code — additions, deletions, and unchanged lines."),
      ("Can I compare JSON files?", "Yes. Paste two JSON objects to see exactly which keys were added, removed, or changed. For best results, format both JSONs with the JSON Workbench tool first."),
      ("Is there a file size limit?", "The tool works entirely in your browser with no size limit. Very large files (>1MB) may be slower to diff depending on your device."),
    ],
    "related": ["markdown-editor", "json-workbench", "text-converter"],
  },
  {
    "id": "text-converter", "cat": "media", "icon": "🔤",
    "name": "Text Case & Slug Converter",
    "h1": "Text Case Converter — camelCase, kebab-case, snake_case, PascalCase Online",
    "title": "Text Case Converter — camelCase, kebab-case, snake_case | Antigravity Tools",
    "desc": "Convert text between camelCase, kebab-case, snake_case, PascalCase, UPPER_CASE, Title Case, and URL slugs — instantly, with one click per conversion.",
    "keywords": "text case converter, camelCase converter, snake case converter, kebab case converter, pascal case converter, url slug generator, text transformer",
    "features": ["camelCase, PascalCase, snake_case, kebab-case","UPPER_CASE & lower case","URL slug generation","Title Case & Sentence case","One-click copy per format"],
    "faq": [
      ("What is camelCase?", "camelCase writes compound words with no spaces, capitalizing each word after the first: myVariableName. Used in JavaScript, Java, and most programming variable names."),
      ("What is kebab-case?", "kebab-case uses hyphens between lowercase words: my-variable-name. Used in CSS class names, HTML attributes, and URL slugs."),
      ("What is snake_case?", "snake_case uses underscores between lowercase words: my_variable_name. Used in Python, Ruby, database column names, and file names."),
    ],
    "related": ["markdown-editor", "diff-checker", "regex-tester"],
  },
  {
    "id": "image-compressor", "cat": "media", "icon": "🖼️",
    "name": "WebP Image Converter & Compressor",
    "h1": "Free Image Compressor Online — Convert PNG/JPG to WebP & Compress",
    "title": "Image Compressor Online — PNG/JPG to WebP Converter | Antigravity Tools",
    "desc": "Compress and convert PNG and JPG images to WebP format locally in your browser — reduce file size by up to 80% without uploading to any server.",
    "keywords": "image compressor online free, compress image online, jpg to webp, png to webp, image size reducer, webp converter online",
    "features": ["PNG & JPG → WebP conversion","Up to 80% size reduction","Quality slider control","Original vs compressed comparison","Download instantly — no upload"],
    "faq": [
      ("What is WebP and why should I use it?", "WebP is a modern image format by Google that provides 25–80% smaller file sizes compared to PNG and JPG at equivalent visual quality. It is supported by all modern browsers and improves Core Web Vitals."),
      ("Is there a file size limit?", "No server upload limit since everything runs in your browser. Very large images (>20MB) may be slower to process depending on your device's memory."),
      ("Does compression affect image quality?", "WebP is lossy by default but preserves excellent quality. Use the quality slider (80–90) for a good balance of size and sharpness. For lossless compression, set quality to 100."),
    ],
    "related": ["ai-bg-remover", "social-banner-resizer", "brand-palette-extractor"],
  },
  {
    "id": "pdf-merger-splitter", "cat": "media", "icon": "📄",
    "name": "PDF Merger & Splitter Studio",
    "h1": "Free PDF Merger Online — Combine PDF Files in Browser Without Upload",
    "title": "PDF Merger & Splitter — Combine or Extract PDF Pages Free | Antigravity Tools",
    "desc": "Merge multiple PDF files or extract specific pages from a PDF directly in your browser — no upload, no server, no registration. Private and instant.",
    "keywords": "pdf merger online, combine pdf files free, pdf splitter online, merge pdf without upload, extract pdf pages, pdf combiner",
    "features": ["Merge multiple PDFs into one","Extract specific page ranges","Drag-and-drop page reordering","100% client-side — no upload","Supports all PDF versions"],
    "faq": [
      ("Is my PDF uploaded to a server?", "No. All PDF merging and splitting happens inside your browser using PDF.js and the PDF-Lib library. Your files never leave your device."),
      ("Is there a file size limit?", "There is no enforced limit since processing happens in the browser. Merging very large PDFs (>100MB total) may be slow on low-memory devices."),
      ("Can I merge password-protected PDFs?", "You need to unlock password-protected PDFs before merging. This tool supports unprotected PDFs."),
    ],
    "related": ["image-compressor", "markdown-editor", "diff-checker"],
  },
  {
    "id": "audio-trimmer", "cat": "media", "icon": "🎵",
    "name": "Audio Trimmer & Volume Booster",
    "h1": "Free Online Audio Trimmer — Cut & Boost Audio Volume in Browser",
    "title": "Audio Trimmer Online — Trim & Boost Audio Volume | Antigravity Tools",
    "desc": "Trim audio recordings, boost volume, and export as MP3 or WAV directly in your browser — no upload, no server, works on MP3, WAV, M4A, and OGG files.",
    "keywords": "audio trimmer online, trim audio online free, volume booster online, cut audio online, mp3 trimmer, audio editor online",
    "features": ["Visual waveform trim editor","Start & end time selection","Volume boost (up to 4×)","Export as MP3 or WAV","Supports MP3, WAV, M4A, OGG"],
    "faq": [
      ("What audio formats are supported?", "This tool supports MP3, WAV, M4A (AAC), OGG, and FLAC — all processed using the browser's Web Audio API."),
      ("Is there a file size limit for audio files?", "No upload size limit applies since everything is processed locally. Files over 100MB may be slower to load on low-memory devices."),
      ("Can I boost audio that is too quiet?", "Yes. The volume booster multiplies the audio gain by up to 4× (400%). Be careful not to over-amplify as it can cause distortion (clipping)."),
    ],
    "related": ["ai-audio-transcribe", "video-gif-converter", "image-compressor"],
  },
  {
    "id": "video-gif-converter", "cat": "media", "icon": "🎥",
    "name": "Video to GIF Converter & Frame Extractor",
    "h1": "Free Video to GIF Converter Online — Convert MP4 to GIF in Browser",
    "title": "Video to GIF Converter — MP4 to GIF Free Online | Antigravity Tools",
    "desc": "Convert MP4 and WebM video clips to animated GIF or extract individual frames directly in your browser — no upload, no watermark, free and instant.",
    "keywords": "video to gif converter, mp4 to gif online, convert video to gif free, gif maker online, screen recording to gif, webm to gif",
    "features": ["MP4 & WebM to animated GIF","Custom start/end time trim","Frame rate & quality control","Individual frame extraction","No watermark — free forever"],
    "faq": [
      ("Why are my GIFs large in file size?", "GIFs use an older compression algorithm that is less efficient than MP4 for video. Reduce frame rate (15fps is optimal for GIFs) and limit the clip to under 10 seconds to keep file sizes manageable."),
      ("What is the maximum GIF resolution?", "GIFs work best at 480×270 or 640×360. Higher resolutions create very large file sizes. Use WebP animated images as a modern, smaller alternative."),
      ("Can I extract a single frame as an image?", "Yes. Set the same start and end timestamp and click 'Extract Frame' to download a single video frame as a PNG image."),
    ],
    "related": ["audio-trimmer", "image-compressor", "ai-bg-remover"],
  },

  # CSS & DESIGN
  {
    "id": "glassmorphism-studio", "cat": "design", "icon": "🎨",
    "name": "CSS Glassmorphism & Shadow Studio",
    "h1": "CSS Glassmorphism Generator — Build Glass UI Effects Online Free",
    "title": "CSS Glassmorphism Generator — Glass UI & Shadow Studio | Antigravity Tools",
    "desc": "Design stunning glassmorphism CSS effects with visual sliders for backdrop blur, transparency, border, and neon glow — copy the CSS instantly. Free, browser-based.",
    "keywords": "glassmorphism generator, CSS glass effect, backdrop blur generator, glassmorphism CSS, glass UI design, frosted glass CSS",
    "features": ["Backdrop blur slider","Background opacity control","Border & border-radius","Neon glow shadow builder","Live preview + one-click CSS copy"],
    "faq": [
      ("What is glassmorphism?", "Glassmorphism is a design trend that uses frosted glass effects with backdrop-filter: blur() to create translucent, layered UI elements. Popular in iOS, macOS, and modern web design."),
      ("Which browsers support backdrop-filter?", "backdrop-filter is supported in Chrome, Edge, Safari, and Firefox (with flag). It is not supported in older browsers. Use @supports to provide a fallback."),
      ("How do I make text readable on a glassmorphism card?", "Use high contrast text colors (white or black depending on background), a slight text shadow, and keep the background behind the glass element dark or colorful — not white."),
    ],
    "related": ["css-animator", "flexbox-builder", "contrast-checker"],
  },
  {
    "id": "flexbox-builder", "cat": "design", "icon": "📐",
    "name": "CSS Flexbox & Grid Builder",
    "h1": "CSS Flexbox Builder — Visual Interactive Flexbox Playground Online",
    "title": "CSS Flexbox Builder — Visual Playground & Grid Generator | Antigravity Tools",
    "desc": "Build and visualize CSS Flexbox layouts interactively — change justify-content, align-items, flex-direction, gap, and wrap settings with live preview and instant CSS output.",
    "keywords": "css flexbox builder, flexbox playground, flexbox generator, css grid builder, flexbox visualizer, interactive flexbox",
    "features": ["All justify-content & align-items options","flex-direction, flex-wrap, gap controls","Live preview with colored boxes","Instant CSS code output","CSS Grid builder tab"],
    "faq": [
      ("What is CSS Flexbox?", "CSS Flexbox is a one-dimensional layout model that arranges items in a row or column. It is the best tool for aligning and distributing space among items in a container."),
      ("What is the difference between Flexbox and Grid?", "Flexbox is best for one-dimensional layouts (a single row or column). CSS Grid is designed for two-dimensional layouts (rows AND columns simultaneously). Both are complementary."),
      ("How do I center a div with Flexbox?", "Set the parent to: display: flex; justify-content: center; align-items: center; This centers the child both horizontally and vertically."),
    ],
    "related": ["glassmorphism-studio", "css-animator", "tailwind-converter"],
  },
  {
    "id": "contrast-checker", "cat": "design", "icon": "👁️",
    "name": "WCAG Color Contrast Checker",
    "h1": "Color Contrast Checker — WCAG 2.1 AA/AAA Accessibility Test Online",
    "title": "WCAG Contrast Checker — Accessibility Color Test | Antigravity Tools",
    "desc": "Check text and background color combinations against WCAG 2.1 AA and AAA accessibility standards — get the contrast ratio, pass/fail result, and suggested fixes instantly.",
    "keywords": "color contrast checker, WCAG contrast checker, accessibility color checker, color contrast ratio, wcag 2.1 aa compliance, text background contrast",
    "features": ["WCAG 2.1 AA & AAA compliance check","Contrast ratio display","Foreground & background color picker","Pass/fail for normal & large text","Suggested accessible color alternatives"],
    "faq": [
      ("What is WCAG?", "WCAG (Web Content Accessibility Guidelines) is the international standard for web accessibility. WCAG 2.1 AA is the legal minimum requirement in most countries for public-facing websites."),
      ("What contrast ratio passes WCAG AA?", "WCAG AA requires a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold). WCAG AAA requires 7:1 and 4.5:1 respectively."),
      ("Why does contrast ratio matter?", "Low contrast text is hard to read for users with low vision, color blindness, or in bright sunlight. Good contrast improves readability for all users."),
    ],
    "related": ["brand-palette-extractor", "glassmorphism-studio", "css-animator"],
  },
  {
    "id": "brand-palette-extractor", "cat": "design", "icon": "🎨",
    "name": "Brand Palette Extractor from Image",
    "h1": "Color Palette Extractor — Get Brand Colors from Any Image Online",
    "title": "Brand Palette Extractor — Color Palette from Image | Antigravity Tools",
    "desc": "Upload any logo, photo, or screenshot to automatically extract a 5-color aesthetic brand palette with hex codes — great for brand guidelines, UI design, and presentations.",
    "keywords": "color palette extractor, color picker from image, brand color extractor, image color palette generator, get colors from image, hex color extractor",
    "features": ["Extract 5 dominant colors","Hex, RGB & HSL values","Copy-ready color swatches","Works with any image format","One-click color copy"],
    "faq": [
      ("How accurate is the color extraction?", "The tool uses a k-means clustering algorithm on the image pixels to find the most dominant colors. It accurately represents the main colors but may not pick every subtle shade."),
      ("Can I extract colors from a website screenshot?", "Yes. Take a screenshot of any website and upload it to extract the brand color palette used on that page."),
      ("What formats are supported?", "The tool accepts JPG, PNG, WebP, GIF, and SVG image uploads."),
    ],
    "related": ["contrast-checker", "glassmorphism-studio", "social-banner-resizer"],
  },
  {
    "id": "css-animator", "cat": "design", "icon": "🎬",
    "name": "CSS Keyframe Motion Animator",
    "h1": "CSS Animation Generator — Build Keyframe Animations with Live Preview",
    "title": "CSS Animation Generator — Keyframe Motion Builder | Antigravity Tools",
    "desc": "Build custom CSS @keyframes animations with a visual builder — set motion, easing, duration, and delay with live preview. Copy production-ready CSS instantly.",
    "keywords": "css animation generator, keyframe animation builder, css animation maker, css motion builder, animate css online, css animation tool",
    "features": ["@keyframes visual builder","Easing curve selector (ease, cubic-bezier)","Duration, delay & iteration controls","Live element preview","Copy production-ready CSS"],
    "faq": [
      ("What is a CSS keyframe animation?", "CSS @keyframes animations define what an element looks like at different points in time (0%, 50%, 100%). Combined with animation properties, they create smooth, looping, or one-shot motion effects."),
      ("What is the difference between CSS transition and animation?", "Transitions respond to state changes (hover, focus). Animations run automatically and can loop, reverse, and have multiple keyframe steps — more powerful for complex motion."),
      ("What is a cubic-bezier easing?", "cubic-bezier() defines a custom acceleration curve for animations. For example, cubic-bezier(0.34, 1.56, 0.64, 1) creates a spring/bounce effect."),
    ],
    "related": ["glassmorphism-studio", "flexbox-builder", "contrast-checker"],
  },
  {
    "id": "tailwind-converter", "cat": "design", "icon": "🌬️",
    "name": "Tailwind CSS to Pure CSS Converter",
    "h1": "Tailwind CSS Converter — Convert Tailwind Classes to Pure CSS Online",
    "title": "Tailwind CSS to CSS Converter — Free Online Tool | Antigravity Tools",
    "desc": "Paste Tailwind CSS utility classes and instantly convert them to equivalent pure CSS declarations — perfect for migrating away from Tailwind or understanding what each class does.",
    "keywords": "tailwind to css converter, tailwind css converter, tailwind to pure css, convert tailwind classes, tailwind utility to css, tailwind css tool",
    "features": ["All Tailwind v3 utility classes","Spacing, typography, colors","Flexbox, grid & positioning","Hover & responsive modifiers","Clean CSS output"],
    "faq": [
      ("Why would I convert Tailwind to plain CSS?", "Migrating legacy projects, reducing build dependencies, understanding what Tailwind classes actually do, or using the styles in a non-Tailwind project."),
      ("Does this support Tailwind v3?", "Yes. This tool supports all Tailwind CSS v3 utility classes including the full JIT (Just-in-Time) class set."),
      ("Does it handle responsive prefixes like md: and lg:?", "Yes. md:flex-row converts to @media (min-width: 768px) { flex-direction: row; } with the correct breakpoint."),
    ],
    "related": ["flexbox-builder", "css-animator", "glassmorphism-studio"],
  },
  {
    "id": "social-banner-resizer", "cat": "design", "icon": "📱",
    "name": "Social Banner & Thumbnail Resizer",
    "h1": "Social Media Image Resizer — Resize Photos for Twitter, YouTube, LinkedIn & Instagram",
    "title": "Social Media Image Resizer — Banner & Thumbnail Sizes | Antigravity Tools",
    "desc": "Resize and crop images to the exact pixel dimensions required for Twitter/X headers, YouTube thumbnails, LinkedIn banners, Instagram posts, and Facebook covers — free, instant.",
    "keywords": "social media image resizer, twitter banner size, youtube thumbnail size, linkedin banner dimensions, instagram image size, social media image dimensions",
    "features": ["Twitter/X header (1500×500)","YouTube thumbnail (1280×720)","LinkedIn banner (1584×396)","Instagram square & story","Facebook cover (820×312)"],
    "faq": [
      ("What is the Twitter/X header image size?", "Twitter/X recommends 1500×500 px for header images. The center crop (around 1500×400) is most visible across devices."),
      ("What is the YouTube thumbnail size?", "YouTube thumbnails should be 1280×720 px (16:9 aspect ratio), JPG or PNG, and under 2 MB. This is the standard 720p HD resolution."),
      ("What is the LinkedIn banner size?", "LinkedIn personal profile banners should be 1584×396 px. Company page banners are 1128×191 px."),
    ],
    "related": ["brand-palette-extractor", "image-compressor", "ai-bg-remover"],
  },
]

# ── HTML template ─────────────────────────────────────────────────────────────
HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="{desc}">
  <meta name="keywords" content="{keywords}">
  <meta name="author" content="Antigravity Tools">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="{base_url}/tools/{tool_id}.html">

  <!-- Open Graph -->
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{desc}">
  <meta property="og:url" content="{base_url}/tools/{tool_id}.html">
  <meta property="og:type" content="website">
  <meta property="og:image" content="{base_url}/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{desc}">
  <meta name="twitter:image" content="{base_url}/og-image.png">

  <!-- PWA -->
  <link rel="manifest" href="../manifest.json">
  <meta name="theme-color" content="#0d0d1a">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="../styles.css?v=3.0">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "SoftwareApplication",
        "@id": "{base_url}/tools/{tool_id}.html#tool",
        "name": "{name}",
        "description": "{desc}",
        "applicationCategory": "WebApplication",
        "operatingSystem": "All (Web Browser)",
        "url": "{base_url}/tools/{tool_id}.html",
        "offers": {{
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }},
        "featureList": {feature_list_json},
        "isPartOf": {{
          "@id": "{base_url}/#website"
        }}
      }},
      {{
        "@type": "FAQPage",
        "@id": "{base_url}/tools/{tool_id}.html#faq",
        "mainEntity": {faq_json}
      }},
      {{
        "@type": "BreadcrumbList",
        "itemListElement": [
          {{ "@type": "ListItem", "position": 1, "name": "Antigravity Tools", "item": "{base_url}/" }},
          {{ "@type": "ListItem", "position": 2, "name": "{name}", "item": "{base_url}/tools/{tool_id}.html" }}
        ]
      }}
    ]
  }}
  </script>
</head>
<body>

  <!-- Navigation Bar -->
  <nav class="navbar">
    <a href="../" class="brand">
      <div class="brand-icon">⚡</div>
      <div class="brand-text">Antigravity <span>Tools</span></div>
    </a>
    <div class="nav-actions">
      <a href="../" style="color: var(--text-muted); font-size: 0.9rem; text-decoration: none;">← All Tools</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="hero" style="padding: 3rem 1.5rem 2rem;">
    <div class="hero-tag">{cat_label} Tool · Free · 100% Private · No Install</div>
    <div style="font-size: 3rem; margin: 0.5rem 0;">{icon}</div>
    <h1 style="font-size: clamp(1.4rem, 4vw, 2.2rem); max-width: 800px; margin: 0 auto 1rem;">{h1}</h1>
    <p style="max-width: 680px; margin: 0 auto 2rem; color: var(--text-muted); line-height: 1.7;">{desc}</p>
    <a href="../#{tool_id}" id="launch-tool-btn"
       class="btn btn-primary"
       style="font-size: 1.1rem; padding: 0.9rem 2.5rem; border-radius: 2rem; display: inline-block; text-decoration: none;">
      🚀 Launch Free Tool →
    </a>
  </header>

  <!-- Features -->
  <section style="max-width: 900px; margin: 0 auto; padding: 2.5rem 1.5rem;">
    <h2 style="text-align: center; font-size: 1.4rem; margin-bottom: 1.5rem; color: var(--text-secondary);">What You Can Do</h2>
    <div class="tools-grid" style="grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));">
      {features_html}
    </div>
  </section>

  <!-- FAQ -->
  <section style="max-width: 720px; margin: 0 auto; padding: 1rem 1.5rem 3rem;">
    <h2 style="font-size: 1.4rem; margin-bottom: 1.5rem; color: var(--text-secondary);">Frequently Asked Questions</h2>
    {faq_html}
  </section>

  <!-- Related Tools -->
  <section style="max-width: 900px; margin: 0 auto; padding: 0 1.5rem 3rem;">
    <h2 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--text-muted);">Related Tools</h2>
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      {related_html}
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>© 2026 <strong>Antigravity Tools</strong> (antigravitytools.app) — Free, Open, Privacy-First Browser Utilities.</p>
    <p style="margin-top: 0.5rem; font-size: 0.8rem; opacity: 0.7;">No data is ever sent to servers. All operations execute strictly within your local browser.</p>
  </footer>

  <script>
    // Re-direct hash deep-link to homepage modal
    document.getElementById('launch-tool-btn').addEventListener('click', function(e) {{
      // Navigates to index.html with hash, which triggers the modal
    }});
  </script>
</body>
</html>'''

# ── Category labels ───────────────────────────────────────────────────────────
CAT_LABELS = {
  "mobile": "📱 Mobile & Device",
  "youtube": "🎥 YouTube & Video",
  "ai": "🤖 AI & Prompting",
  "trust": "🛡️ Site Trust & SEO",
  "dev": "⚡ Dev & Code",
  "security": "🔐 Security & Auth",
  "media": "📝 Text & Media",
  "design": "🎨 CSS & UI Design",
}

import json, re as _re

def esc(s):
  return s.replace('"', '&quot;').replace('<', '&lt;').replace('>', '&gt;')

def generate_feature_card(feature):
  return f'''<div class="tool-card" style="padding: 1rem 1.2rem;">
      <p style="margin:0; font-size: 0.95rem;">✅ {esc(feature)}</p>
    </div>'''

def generate_faq_html(faq_list):
  items = []
  for q, a in faq_list:
    items.append(f'''<details style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem 1.2rem; margin-bottom: 0.75rem; background: rgba(255,255,255,0.02);">
      <summary style="font-weight: 600; cursor: pointer; color: var(--text-secondary);">{esc(q)}</summary>
      <p style="margin: 0.75rem 0 0; color: var(--text-muted); line-height: 1.7;">{esc(a)}</p>
    </details>''')
  return "\n    ".join(items)

def generate_faq_json(faq_list):
  entities = []
  for q, a in faq_list:
    entities.append({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {"@type": "Answer", "text": a}
    })
  return json.dumps(entities, indent=6)

def generate_related_html(related_ids, all_tools):
  tool_map = {t["id"]: t for t in all_tools}
  links = []
  for rid in related_ids:
    t = tool_map.get(rid)
    if t:
      links.append(f'<a href="{t["id"]}.html" style="display:inline-flex; align-items:center; gap:0.4rem; padding: 0.5rem 1rem; background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); border-radius: 2rem; text-decoration: none; color: var(--text-muted); font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.borderColor=\'var(--primary-cyan)\'" onmouseout="this.style.borderColor=\'var(--border-color)\'">{t["icon"]} {esc(t["name"])}</a>')
  return "\n      ".join(links)

def generate_page(tool, all_tools):
  features_html = "\n      ".join(generate_feature_card(f) for f in tool["features"])
  faq_html = generate_faq_html(tool["faq"])
  faq_json_str = generate_faq_json(tool["faq"])
  feature_list_json = json.dumps(tool["features"])
  related_html = generate_related_html(tool.get("related", []), all_tools)

  html = HTML_TEMPLATE.format(
    title=tool["title"],
    desc=esc(tool["desc"]),
    keywords=tool["keywords"],
    base_url=BASE_URL,
    tool_id=tool["id"],
    name=esc(tool["name"]),
    icon=tool["icon"],
    h1=esc(tool["h1"]),
    cat_label=CAT_LABELS.get(tool["cat"], tool["cat"]),
    features_html=features_html,
    faq_html=faq_html,
    faq_json=faq_json_str,
    feature_list_json=feature_list_json,
    related_html=related_html,
  )
  return html

def generate_sitemap_entries(tools):
  entries = []
  for t in tools:
    entries.append(f'  <url><loc>{BASE_URL}/tools/{t["id"]}.html</loc><lastmod>{TODAY}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>')
  return "\n".join(entries)

def update_sitemap(new_entries):
  sitemap_path = "sitemap.xml"
  with open(sitemap_path, "r", encoding="utf-8") as f:
    content = f.read()
  
  # Insert new entries before </urlset>
  if "<!-- TOOL PAGES -->" in content:
    # Replace existing block
    content = _re.sub(r'<!-- TOOL PAGES -->.*?<!-- END TOOL PAGES -->', 
                     f'<!-- TOOL PAGES -->\n{new_entries}\n  <!-- END TOOL PAGES -->',
                     content, flags=_re.DOTALL)
  else:
    content = content.replace("</urlset>", f"\n  <!-- TOOL PAGES -->\n{new_entries}\n  <!-- END TOOL PAGES -->\n</urlset>")
  
  with open(sitemap_path, "w", encoding="utf-8") as f:
    f.write(content)
  print(f"✅ sitemap.xml updated with {len(TOOLS)} tool page entries")

def main():
  os.makedirs(TOOLS_DIR, exist_ok=True)
  
  success = 0
  for tool in TOOLS:
    try:
      html = generate_page(tool, TOOLS)
      path = os.path.join(TOOLS_DIR, f"{tool['id']}.html")
      with open(path, "w", encoding="utf-8") as f:
        f.write(html)
      print(f"  ✅ {tool['id']}.html")
      success += 1
    except Exception as e:
      print(f"  ❌ {tool['id']}: {e}")
  
  print(f"\n📄 Generated {success}/{len(TOOLS)} tool pages → ./{TOOLS_DIR}/")
  
  # Update sitemap
  new_entries = generate_sitemap_entries(TOOLS)
  update_sitemap(new_entries)
  
  print("\n🎉 Done! All tool pages generated successfully.")
  print(f"   → Open tools/jwt-inspector.html in your browser to preview.")

if __name__ == "__main__":
  main()
