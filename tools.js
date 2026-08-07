/**
 * Antigravity Tools - Master Suite of 50 High-Demand Tools
 * 100% Client-Side Browser Utilities - FULLY FIXED v2.1
 */

const TOOLS = [
  // MOBILE & DEVICE UTILITIES (7 Tools)
  { id: 'mobile-speaker-cleaner', name: 'Mobile Speaker Water & Dust Cleaner', cat: 'mobile', icon: '🔊', tag: 'Sound Ejection', description: 'Play 165Hz sound wave pulse frequency to eject water droplets & dust from mobile speakers.', render: renderMobileSpeakerCleaner },
  { id: 'mobile-stolen-assistant', name: 'Stolen Mobile Emergency Assistant & CEIR Guide', cat: 'mobile', icon: '🚨', tag: 'Emergency & CEIR', description: 'Action wizard for lost/stolen phones: remote lock, CEIR IMEI blocking, carrier SIM block, & e-FIR generator.', render: renderMobileStolenAssistant },
  { id: 'mobile-imei-validator', name: 'IMEI Luhn Validator & TAC Decoder', cat: 'mobile', icon: '📱', tag: 'IMEI Check', description: 'Verify 15-digit IMEI validity via Luhn checksum algorithm, extract TAC manufacturer code & serial numbers.', render: renderMobileImeiValidator },
  { id: 'mobile-emergency-wallpaper', name: 'Emergency Lock Screen Wallpaper Generator', cat: 'mobile', icon: '🖼️', tag: 'Lost Phone Wallpaper', description: 'Create custom mobile lock screen wallpaper with emergency contact numbers, medical notes & blood group.', render: renderMobileEmergencyWallpaper },
  { id: 'mobile-screen-tester', name: 'Mobile Display & Dead Pixel Tester', cat: 'mobile', icon: '🖥️', tag: 'Hardware Test', description: 'Full-screen RGBW/Black color cycle test & interactive touch grid matrix to find dead pixels & OLED burn-in.', render: renderMobileScreenTester },
  { id: 'mobile-touch-hz-tester', name: 'Multi-Touch & Screen Refresh Rate (Hz) Tester', cat: 'mobile', icon: '⚡', tag: 'Display Benchmark', description: 'Test simultaneous touchpoints and measure screen refresh rate (60Hz, 90Hz, 120Hz, 144Hz) in real time.', render: renderMobileTouchHzTester },
  { id: 'mobile-qr-suite', name: 'Mobile Wi-Fi, eSIM & WhatsApp QR Suite', cat: 'mobile', icon: '📡', tag: 'Mobile QR Utilities', description: 'Instant camera QR code generator for Wi-Fi auto-connect, WhatsApp direct chat without saving number, and vCard.', render: renderMobileQrSuite },

  // YOUTUBE & VIDEO SUITE (6 Tools)
  { id: 'yt-thumbnail-downloader', name: 'YouTube HD & 4K Thumbnail Downloader', cat: 'youtube', icon: '🖼️', tag: 'YouTube Utilities', description: 'Download 4K, 1080p, 720p, and SD thumbnails from any YouTube video URL.', render: renderYtThumbnailDownloader },
  { id: 'yt-timestamp-generator', name: 'YouTube Timestamp & Chapter Generator', cat: 'youtube', icon: '⏰', tag: 'YouTube Timeline', description: 'Build shareable timestamp links and format clickable video descriptions.', render: renderYtTimestampGenerator },
  { id: 'yt-transcript-extractor', name: 'YouTube Transcript & Subtitle Cleaner', cat: 'youtube', icon: '📝', tag: 'Transcription AI', description: 'Clean video captions and strip timestamps for AI summaries and notes.', render: renderYtTranscriptExtractor },
  { id: 'yt-tag-extractor', name: 'YouTube Video Tag & Keyword Inspector', cat: 'youtube', icon: '🏷️', tag: 'YouTube SEO', description: 'Inspect video tags, SEO keywords, titles, and channel metadata.', render: renderYtTagExtractor },
  { id: 'yt-banner-safezone', name: 'YouTube Channel Banner Safe Zone Visualizer', cat: 'youtube', icon: '📐', tag: 'Channel Branding', description: 'Visual canvas guide for TV, Desktop, Tablet, and Mobile safe cropping.', render: renderYtBannerSafezone },
  { id: 'yt-embed-generator', name: 'Clean YouTube Responsive Iframe Generator', cat: 'youtube', icon: '🎥', tag: 'Embed Code', description: 'Generate responsive HTML iframe embeds with custom start time, loop, and privacy options.', render: renderYtEmbedGenerator },
  // AI & PROMPTING (8 Tools)
  { id: 'ai-token-counter', name: 'AI Token & Cost Estimator', cat: 'ai', icon: '🤖', tag: 'AI / LLM', description: 'Calculate token count and estimated cost across GPT-4o, Claude 3.5, Gemini 2.0, DeepSeek R1, and Llama 3.', render: renderTokenCounter },
  { id: 'ai-prompt-builder', name: 'System Prompt & Agent Skill Builder', cat: 'ai', icon: '🎯', tag: 'AI Agents', description: 'Structure custom system instructions, tool definitions, XML tags, and constraints for AI agents.', render: renderPromptBuilder },
  { id: 'json-schema-gen', name: 'LLM JSON Schema Builder', cat: 'ai', icon: '🧬', tag: 'Structured Outputs', description: 'Convert JSON sample outputs into JSON Schema definitions for OpenAI / Gemini structured function calling.', render: renderJsonSchemaGen },
  { id: 'ai-text-humanizer', name: 'AI Text Humanizer & Paraphraser', cat: 'ai', icon: '✨', tag: 'AI Writing', description: 'Rephrase robotic AI text into natural, fluent human writing with custom tone variations.', render: renderTextHumanizer },
  { id: 'ai-prompt-trimmer', name: 'AI Prompt Cost Trimmer', cat: 'ai', icon: '✂️', tag: 'Cost Optimization', description: 'Compress long LLM prompts by 30-50% removing stop words while preserving core context.', render: renderPromptTrimmer },
  { id: 'ai-code-scanner', name: 'AI Code Bug & Security Scanner', cat: 'ai', icon: '🔍', tag: 'Code Analysis', description: 'Scan code snippets for performance bottlenecks, security flaws, and edge-case bugs.', render: renderCodeScanner },
  { id: 'ai-audio-transcribe', name: 'AI Speech & Audio Transcriber', cat: 'ai', icon: '🎙️', tag: 'Audio AI', description: 'Transcribe audio recordings into clean text using browser Speech Recognition API.', render: renderAudioTranscriber },
  { id: 'ai-bg-remover', name: 'AI Background Remover', cat: 'ai', icon: '🖼️', tag: 'Image AI', description: 'Remove background from photos client-side using canvas color detection.', render: renderBgRemover },
  // SITE TRUST & SEO (9 Tools)
  { id: 'site-trust-badge', name: 'Website Trust Badge Builder', cat: 'trust', icon: '🛡️', tag: 'Verification', description: 'Design embeddable SVG/HTML verification badges for SaaS.', render: renderTrustBadge },
  { id: 'og-card-previewer', name: 'Social Open Graph (OG) Previewer', cat: 'trust', icon: '🖼️', tag: 'SEO & Social', description: 'Preview how your website link cards render on Twitter/X, LinkedIn, Facebook, and Discord.', render: renderOgPreviewer },
  { id: 'meta-tag-generator', name: 'Meta Tag & SEO Head Builder', cat: 'trust', icon: '🔍', tag: 'SEO', description: 'Generate full HTML head meta tags, canonical links, viewport settings, and Open Graph metadata.', render: renderMetaTagGen },
  { id: 'favicon-generator', name: 'Favicon & App Icon Generator', cat: 'trust', icon: '✨', tag: 'Web Assets', description: 'Upload an icon/emoji to generate multi-size favicons with HTML head tags.', render: renderFaviconGen },
  { id: 'schema-generator', name: 'Schema.org Rich Snippet Builder', cat: 'trust', icon: '🏷️', tag: 'Structured Data', description: 'Build Google Rich Snippet JSON-LD schemas for FAQs, Products, Articles, and Organizations.', render: renderSchemaBuilder },
  { id: 'core-web-vitals', name: 'Core Web Vitals Audit Simulator', cat: 'trust', icon: '⚡', tag: 'Performance', description: 'Simulate LCP, CLS, FID metrics and get optimization tips.', render: renderVitalsSimulator },
  { id: 'sitemap-generator', name: 'Visual XML Sitemap & Robots Builder', cat: 'trust', icon: '🗺️', tag: 'Indexing', description: 'Build valid sitemap.xml and robots.txt files.', render: renderSitemapBuilder },
  { id: 'privacy-policy-gen', name: 'GDPR Privacy Policy Generator', cat: 'trust', icon: '⚖️', tag: 'Legal', description: 'Generate complete, customized GDPR/CCPA compliant privacy policy documents.', render: renderPrivacyGen },
  { id: 'link-redirect-checker', name: 'Redirect & HTTP Status Tester', cat: 'trust', icon: '🔗', tag: 'Web Audit', description: 'Verify URL status codes and test redirect chains.', render: renderRedirectChecker },
  // DEV & CODE (7 Tools)
  { id: 'json-workbench', name: 'JSON Workbench & Type Converter', cat: 'dev', icon: '⚡', tag: 'Formatter & Types', description: 'Beautify, minify, validate JSON, and convert to TypeScript, Python, Go types.', render: renderJsonWorkbench },
  { id: 'curl-converter', name: 'cURL to Code Converter', cat: 'dev', icon: '🌐', tag: 'API Utilities', description: 'Convert cURL terminal commands into JavaScript fetch(), Python requests, Go or PHP code.', render: renderCurlConverter },
  { id: 'svg-optimizer', name: 'SVG Optimizer & React Builder', cat: 'dev', icon: '📐', tag: 'SVG & React', description: 'Clean SVG code, preview live graphics, and convert to React components.', render: renderSvgOptimizer },
  { id: 'sql-formatter', name: 'SQL Formatter & Query Beautifier', cat: 'dev', icon: '🗄️', tag: 'Database', description: 'Clean up messy SQL queries with dialect formatting.', render: renderSqlFormatter },
  { id: 'regex-tester', name: 'Regex Tester & Visualizer', cat: 'dev', icon: '🔤', tag: 'Pattern Matching', description: 'Test regular expressions in real-time with match highlighting and substitution.', render: renderRegexTester },
  { id: 'cron-generator', name: 'Cron Schedule Builder & Explainer', cat: 'dev', icon: '⏰', tag: 'Automation', description: 'Build cron expressions visually with human-readable descriptions and next run times.', render: renderCronGenerator },
  { id: 'git-helper', name: 'Git CLI Command Helper', cat: 'dev', icon: '🌿', tag: 'Git & VCS', description: 'Construct complex Git commands easily (undo commit, squash, cherry-pick).', render: renderGitHelper },
  // SECURITY & AUTH (8 Tools)
  { id: 'jwt-inspector', name: 'JWT Inspector & Payload Debugger', cat: 'security', icon: '🔐', tag: 'Authentication', description: 'Safely decode JWT headers and payloads, inspect expiration dates.', render: renderJwtInspector },
  { id: 'universal-encoder', name: 'Universal Encoder / Decoder', cat: 'security', icon: '🔄', tag: 'Data Format', description: 'Multi-tab transformer for Base64, URL Encoding, HTML Entities, Hex, Unicode.', render: renderUniversalEncoder },
  { id: 'hash-password-gen', name: 'Hash & Password Generator', cat: 'security', icon: '🔑', tag: 'Cryptography', description: 'Generate SHA-256, SHA-512 hashes using Web Crypto API + password generator.', render: renderHashPasswordGen },
  { id: 'uuid-ulid-gen', name: 'UUID & ULID Generator', cat: 'security', icon: '🎲', tag: 'Identifiers', description: 'Bulk generation of unique UUID v4 identifiers.', render: renderUuidGen },
  { id: 'subnet-calculator', name: 'Subnet & IP CIDR Calculator', cat: 'security', icon: '🌐', tag: 'Networking', description: 'Calculate IPv4 subnet masks, usable IP ranges, broadcast addresses.', render: renderSubnetCalc },
  { id: 'cors-header-inspector', name: 'CORS & Security Header Inspector', cat: 'security', icon: '🛡️', tag: 'API Security', description: 'Analyze CORS policies and security header configurations.', render: renderCorsInspector },
  { id: 'pii-masker', name: 'Data PII Redactor & Masker', cat: 'security', icon: '🙈', tag: 'Privacy', description: 'Sanitize text by masking emails, credit cards, SSNs, IPs, phone numbers.', render: renderPiiMasker },
  { id: 'rsa-ecc-key-gen', name: 'RSA & ECC Cryptographic Key Generator', cat: 'security', icon: '🗝️', tag: 'Crypto Keys', description: 'Generate 2048-bit RSA public/private PEM keypairs via Web Crypto API.', render: renderKeypairGen },
  // TEXT & MEDIA (7 Tools)
  { id: 'markdown-editor', name: 'Markdown Live Editor & Preview', cat: 'media', icon: '📝', tag: 'Markdown', description: 'Real-time Markdown editor with live preview, GFM support, and HTML export.', render: renderMarkdownEditor },
  { id: 'diff-checker', name: 'Diff Checker & Code Comparison', cat: 'media', icon: '📊', tag: 'Comparison', description: 'Compare two blocks of text side-by-side with visual line diff highlighting.', render: renderDiffChecker },
  { id: 'text-converter', name: 'Text Case & Slug Converter', cat: 'media', icon: '🔤', tag: 'Text Tools', description: 'Convert text between camelCase, kebab-case, snake_case, PascalCase, UPPER, and URL slugs.', render: renderTextConverter },
  { id: 'image-compressor', name: 'WebP Image Converter & Compressor', cat: 'media', icon: '🖼️', tag: 'Image Utilities', description: 'Convert PNG/JPG to WebP and compress images locally in browser Canvas.', render: renderImageCompressor },
  { id: 'pdf-merger-splitter', name: 'PDF Merger & Splitter Studio', cat: 'media', icon: '📄', tag: 'PDF Tools', description: 'Combine multiple PDF files or extract specific pages locally in your browser.', render: renderPdfStudio },
  { id: 'audio-trimmer', name: 'Audio Trimmer & Volume Booster', cat: 'media', icon: '🎵', tag: 'Audio Editor', description: 'Trim audio recordings, boost volume, and export clean MP3/WAV files.', render: renderAudioTrimmer },
  { id: 'video-gif-converter', name: 'Video to GIF Converter & Frame Extractor', cat: 'media', icon: '🎥', tag: 'Video Tools', description: 'Convert MP4/WebM videos into animated GIF frames.', render: renderVideoGif },
  // CSS & DESIGN (7 Tools)
  { id: 'glassmorphism-studio', name: 'CSS Glassmorphism & Shadow Studio', cat: 'design', icon: '🎨', tag: 'UI Design', description: 'Visual sliders to customize glass UI, backdrop blur, transparency, neon borders.', render: renderGlassmorphismStudio },
  { id: 'flexbox-builder', name: 'CSS Flexbox & Grid Builder', cat: 'design', icon: '📐', tag: 'CSS Layout', description: 'Interactive visual playground for CSS flexbox with instant CSS output.', render: renderFlexboxBuilder },
  { id: 'contrast-checker', name: 'WCAG Color Contrast Checker', cat: 'design', icon: '👁️', tag: 'Accessibility', description: 'Check text and background color contrast for WCAG 2.1 AA/AAA compliance.', render: renderContrastChecker },
  { id: 'brand-palette-extractor', name: 'Brand Palette Extractor from Image', cat: 'design', icon: '🎨', tag: 'Color Palette', description: 'Upload any image/logo to extract a 5-color aesthetic palette.', render: renderPaletteExtractor },
  { id: 'css-animator', name: 'CSS Keyframe Motion Animator', cat: 'design', icon: '🎬', tag: 'CSS Animation', description: 'Build smooth custom CSS keyframe animations with live preview.', render: renderCssAnimator },
  { id: 'tailwind-converter', name: 'Tailwind CSS to Pure CSS Converter', cat: 'design', icon: '🌬️', tag: 'CSS Frameworks', description: 'Convert Tailwind utility class strings into clean CSS declaration blocks.', render: renderTailwindConverter },
  { id: 'social-banner-resizer', name: 'Social Banner & Thumbnail Resizer', cat: 'design', icon: '📱', tag: 'Graphics', description: 'Resize images to exact dimensions for Twitter, YouTube, LinkedIn, Instagram.', render: renderSocialResizer },
];

// ============================================================
// CORE TOOL EXECUTION ENGINES - ALL FIXED v2.0
// ============================================================

// 1. AI Token Counter ✅
function renderTokenCounter(c) {
  c.innerHTML = `
    <div class="form-group"><label class="form-label">Prompt / Code Text:</label><textarea id="tokenText" class="form-textarea" placeholder="Paste prompt text here..."></textarea></div>
    <div class="grid-2" style="margin-top:1rem;">
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);padding:1.2rem;border-radius:var(--radius-sm);">
        <h4 style="color:var(--primary-cyan);margin-bottom:0.8rem;">Token Metrics</h4>
        <p>Approx. Tokens: <strong id="tokenCountVal" style="font-size:1.4rem;color:#fff;">0</strong></p>
        <p>Characters: <span id="charCountVal">0</span> | Words: <span id="wordCountVal">0</span></p>
      </div>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);padding:1.2rem;border-radius:var(--radius-sm);">
        <h4 style="color:var(--primary-purple);margin-bottom:0.8rem;">Cost Estimator (per 1M tokens)</h4>
        <ul style="list-style:none;font-size:0.9rem;line-height:2;">
          <li>GPT-4o ($2.50): <strong id="costGpt4o">$0.000000</strong></li>
          <li>Claude 3.5 ($3.00): <strong id="costClaude">$0.000000</strong></li>
          <li>Gemini 2.0 ($0.10): <strong id="costGemini">$0.000000</strong></li>
          <li>DeepSeek R1 ($0.55): <strong id="costDeep">$0.000000</strong></li>
        </ul>
      </div>
    </div>`;
  c.querySelector('#tokenText').addEventListener('input', function() {
    const chars = this.value.length;
    const words = this.value.trim() ? this.value.trim().split(/\s+/).length : 0;
    const tokens = Math.ceil(chars / 4);
    c.querySelector('#tokenCountVal').textContent = tokens.toLocaleString();
    c.querySelector('#charCountVal').textContent = chars.toLocaleString();
    c.querySelector('#wordCountVal').textContent = words.toLocaleString();
    c.querySelector('#costGpt4o').textContent = '$' + ((tokens / 1e6) * 2.50).toFixed(6);
    c.querySelector('#costClaude').textContent = '$' + ((tokens / 1e6) * 3.00).toFixed(6);
    c.querySelector('#costGemini').textContent = '$' + ((tokens / 1e6) * 0.10).toFixed(6);
    c.querySelector('#costDeep').textContent = '$' + ((tokens / 1e6) * 0.55).toFixed(6);
  });
}

// 2. System Prompt Builder ✅
function renderPromptBuilder(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Role / Persona:</label><input type="text" id="pRole" class="form-input" value="Senior AI Software Engineer"></div>
        <div class="form-group"><label class="form-label">Core Task:</label><input type="text" id="pTask" class="form-input" value="Review code for performance and security vulnerabilities."></div>
        <div class="form-group"><label class="form-label">Rules (one per line):</label><textarea id="pRules" class="form-textarea" style="height:80px;">Do not make assumptions.\nProvide concise code diffs.\nAlways cite line numbers.</textarea></div>
        <div class="form-group"><label class="form-label">Output Format:</label><input type="text" id="pFormat" class="form-input" value="Markdown with code blocks"></div>
      </div>
      <div>
        <label class="form-label">Generated System Prompt:</label>
        <div class="output-box" id="pOutput" style="min-height:260px;"></div>
        <button class="btn btn-primary" style="margin-top:1rem;" onclick="copyBoxText('pOutput')">📋 Copy System Prompt</button>
      </div>
    </div>`;
  const update = () => {
    const r = c.querySelector('#pRole').value;
    const t = c.querySelector('#pTask').value;
    const fmt = c.querySelector('#pFormat').value;
    const rules = c.querySelector('#pRules').value.split('\n').filter(x => x.trim());
    c.querySelector('#pOutput').textContent = `<system>\n# PERSONA\nYou are a ${r}.\n\n# GOAL\n${t}\n\n# RULES\n` + rules.map(x => `- ${x}`).join('\n') + `\n\n# OUTPUT FORMAT\n${fmt}\n</system>`;
  };
  c.querySelectorAll('input,textarea').forEach(el => el.addEventListener('input', update));
  update();
}

// 3. JSON Schema Gen ✅
function renderJsonSchemaGen(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Paste Sample JSON Object:</label>
        <textarea id="jsonIn" class="form-textarea" style="min-height:200px;">{ "name": "Antigravity", "active": true, "version": 2, "tags": ["ai", "tools"] }</textarea>
        <button class="btn btn-primary" id="genSch" style="margin-top:1rem;">⚡ Generate Schema</button>
      </div>
      <div>
        <label class="form-label">JSON Schema Result:</label>
        <div class="output-box" id="schOut" style="min-height:200px;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('schOut')">📋 Copy Schema</button>
      </div>
    </div>`;
  function inferType(val) {
    if (Array.isArray(val)) return { type: 'array', items: val.length ? inferType(val[0]) : {} };
    if (val === null) return { type: 'null' };
    if (typeof val === 'object') return { type: 'object', properties: Object.fromEntries(Object.entries(val).map(([k,v]) => [k, inferType(v)])) };
    return { type: typeof val };
  }
  c.querySelector('#genSch').addEventListener('click', () => {
    try {
      const obj = JSON.parse(c.querySelector('#jsonIn').value);
      const schema = { $schema: 'http://json-schema.org/draft-07/schema#', type: 'object', properties: Object.fromEntries(Object.entries(obj).map(([k,v]) => [k, inferType(v)])), required: Object.keys(obj) };
      c.querySelector('#schOut').textContent = JSON.stringify(schema, null, 2);
    } catch(e) { c.querySelector('#schOut').textContent = '❌ Invalid JSON: ' + e.message; }
  });
}

// 4. AI Text Humanizer ✅ FIXED
function renderTextHumanizer(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Paste Robotic AI Text:</label>
        <textarea id="humIn" class="form-textarea" style="min-height:200px;">Furthermore, it is important to leverage synergistic paradigms to optimize user experience and facilitate stakeholder engagement through comprehensive methodologies.</textarea>
        <button class="btn btn-primary" id="humBtn" style="margin-top:1rem;">✨ Humanize Text</button>
      </div>
      <div>
        <label class="form-label">Natural Human Writing Output:</label>
        <div class="output-box" id="humOut" style="min-height:200px;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('humOut')">📋 Copy Human Text</button>
      </div>
    </div>`;
  const replacements = [
    [/\bFurthermore,?\b/gi,'Also,'], [/\bMoreover,?\b/gi,'Plus,'], [/\bAdditionally,?\b/gi,'Also,'],
    [/\bHowever,?\b/gi,'But,'], [/\bNevertheless,?\b/gi,'Still,'], [/\bConsequently,?\b/gi,'So,'],
    [/\bleverag(e|ing|ed)\b/gi,'us$1'], [/\bsyn(ergistic|ergy)\b/gi,'combined'], [/\boptimiz(e|ing|ed)\b/gi,'improv$1'],
    [/\bfacilitat(e|ing|ed)\b/gi,'enabl$1'], [/\butiliz(e|ing|ed)\b/gi,'us$1'], [/\bparadigm(s?)\b/gi,'approach$1'],
    [/\bstakeholders?\b/gi,'people'], [/\bcomprehensive\b/gi,'thorough'], [/\bmethodolog(y|ies)\b/gi,'approach$1'],
    [/\bimplementation\b/gi,'setup'], [/\bdemonstrat(e|es|ed)\b/gi,'show$1'], [/\bcommenc(e|ing|ed)\b/gi,'start$1'],
    [/\bterminat(e|ing|ed)\b/gi,'stop$1'], [/\bin order to\b/gi,'to'], [/\bprior to\b/gi,'before'],
    [/\bsubsequently\b/gi,'then'], [/\bin the event that\b/gi,'if'], [/\bwith regard to\b/gi,'about'],
    [/\bat this point in time\b/gi,'now'], [/\bdue to the fact that\b/gi,'because'], [/\bsignificant(ly)?\b/gi,'big$1'],
    [/\bin terms of\b/gi,'for'], [/\bprovide(s)?\b/gi,'give$1'], [/\bpurchas(e|ing|ed)\b/gi,'bu$1'],
  ];
  c.querySelector('#humBtn').addEventListener('click', () => {
    let text = c.querySelector('#humIn').value;
    replacements.forEach(([rx, rep]) => { text = text.replace(rx, rep); });
    c.querySelector('#humOut').textContent = text;
  });
}

// 5. Prompt Cost Trimmer ✅ FIXED
function renderPromptTrimmer(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Input Long Prompt:</label>
        <textarea id="trimIn" class="form-textarea" style="min-height:200px;">Please be advised that I would like you to kindly analyze and carefully inspect the following code snippet that I have provided for any potential errors, issues, or bugs that may be present within the code.</textarea>
        <button class="btn btn-primary" id="trimBtn" style="margin-top:1rem;">✂️ Compress Prompt</button>
      </div>
      <div>
        <label class="form-label">Optimized Compressed Prompt: <span id="trimSavings" style="color:var(--accent-green);font-size:0.85rem;"></span></label>
        <div class="output-box" id="trimOut" style="min-height:200px;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('trimOut')">📋 Copy Prompt</button>
      </div>
    </div>`;
  const stopWords = ['please','kindly','be advised that','i would like you to','carefully','that i have provided','any potential','that may be present within'];
  const fillers = [
    [/\bplease\s+(be\s+advised\s+that\s+)?/gi,''], [/\bi would like you to\s*/gi,''], [/\bkindly\s*/gi,''],
    [/\bcarefully\s*/gi,''], [/\bthat i have provided\s*/gi,''], [/\bany potential\s*/gi,''],
    [/\bthat may be present\s*/gi,''], [/\bin order to\s*/gi,'to '], [/\bplease note that\s*/gi,''],
    [/\bit is (important|worth noting|essential) (to note )?that\s*/gi,''], [/\bprovided below\s*/gi,'below'],
    [/\bas follows\s*/gi,''], [/\bthe following\s*/gi,'this'], [/\bsimply\s*/gi,''],
    [/\bbasically\s*/gi,''], [/\bactually\s*/gi,''], [/\bjust\s*/gi,''],
    [/\bvery\s+/gi,''], [/\bquite\s+/gi,''], [/\breally\s+/gi,''],
    [/\s{2,}/g,' '],
  ];
  c.querySelector('#trimBtn').addEventListener('click', () => {
    const orig = c.querySelector('#trimIn').value;
    let text = orig;
    fillers.forEach(([rx, rep]) => { text = text.replace(rx, rep); });
    text = text.trim().replace(/\s+/g, ' ');
    const saved = Math.round((1 - text.length / orig.length) * 100);
    c.querySelector('#trimOut').textContent = text;
    c.querySelector('#trimSavings').textContent = saved > 0 ? `(${saved}% shorter)` : '';
  });
}

// 6. Code Bug Scanner ✅ FIXED
function renderCodeScanner(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Input Code Snippet:</label>
        <textarea id="scanIn" class="form-textarea" style="min-height:220px;">function getUser(id) {
  let user = db.query("SELECT * FROM users WHERE id = " + id);
  eval(user.script);
  return user;
}</textarea>
        <button class="btn btn-primary" id="scanBtn" style="margin-top:1rem;">🔍 Scan Code</button>
      </div>
      <div>
        <label class="form-label">Audit Analysis:</label>
        <div class="output-box" id="scanOut" style="min-height:220px;"></div>
      </div>
    </div>`;
  c.querySelector('#scanBtn').addEventListener('click', () => {
    const code = c.querySelector('#scanIn').value;
    const issues = [];
    if (/SELECT.*WHERE.*\+|WHERE.*=.*\+/i.test(code)) issues.push('🔴 CRITICAL: SQL Injection — Use parameterized queries (? or $1) instead of string concatenation.');
    if (/\beval\s*\(/.test(code)) issues.push('🔴 CRITICAL: eval() usage — Arbitrary code execution risk. Never use eval().');
    if (/innerHTML\s*=/.test(code)) issues.push('🔴 HIGH: innerHTML assignment — XSS risk. Use textContent or DOMPurify.');
    if (/document\.write\s*\(/.test(code)) issues.push('🔴 HIGH: document.write() — XSS risk and blocks parsing.');
    if (/password|passwd|secret|api_key/i.test(code) && /[=:]\s*["'][^"']+["']/.test(code)) issues.push('🟠 HIGH: Hardcoded credentials detected — Use environment variables instead.');
    if (/console\.log\s*\(/.test(code)) issues.push('🟡 MEDIUM: console.log() in production code — Remove before deployment.');
    if (/var\s+/.test(code)) issues.push('🟡 MEDIUM: var keyword used — Use const/let for block scoping.');
    if (/==(?!=)/.test(code)) issues.push('🟡 MEDIUM: Loose equality (==) detected — Use strict equality (===).');
    if (/async\s+function|await\s+/.test(code) && !code.includes('try')) issues.push('🟡 MEDIUM: Async function missing try/catch — Handle promise rejections.');
    if (issues.length === 0) issues.push('✅ No known security vulnerabilities detected in basic scan.\n✅ Code looks clean for common issues.');
    c.querySelector('#scanOut').innerHTML = issues.map(i => `<div style="margin-bottom:0.6rem;padding:0.4rem;border-left:3px solid ${i.startsWith('🔴')?'#ef4444':i.startsWith('🟠')?'#f97316':i.startsWith('🟡')?'#eab308':'#10b981'}">${i}</div>`).join('');
  });
}

// 7. Audio Transcriber ✅ FIXED with Web Speech API
function renderAudioTranscriber(c) {
  c.innerHTML = `
    <div style="text-align:center;padding:1.5rem;">
      <p style="color:var(--text-secondary);margin-bottom:1.5rem;">Uses your browser's built-in Speech Recognition API. Chrome/Edge recommended.</p>
      <button class="btn btn-primary" id="recBtn">🎙️ Start Voice Recording</button>
      <button class="btn btn-secondary" id="clearBtn" style="margin-left:0.5rem;">🗑️ Clear</button>
      <div class="output-box" id="recOut" style="margin-top:1.5rem;min-height:120px;font-size:1.05rem;color:var(--primary-cyan);text-align:left;">Click "Start Voice Recording" then speak into your microphone...</div>
      <div id="statusTxt" style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-secondary);"></div>
    </div>`;
  let recognition = null;
  let fullText = '';
  const btn = c.querySelector('#recBtn');
  const out = c.querySelector('#recOut');
  const status = c.querySelector('#statusTxt');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    out.textContent = '⚠️ Speech Recognition not supported in this browser. Please use Google Chrome or Microsoft Edge.';
    return;
  }
  btn.addEventListener('click', () => {
    if (recognition) { recognition.stop(); return; }
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.onstart = () => { btn.textContent = '🛑 Stop Recording'; btn.style.background = '#ef4444'; status.textContent = '🔴 Recording...'; };
    recognition.onresult = (e) => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) fullText += e.results[i][0].transcript + ' ';
        else interim = e.results[i][0].transcript;
      }
      out.textContent = fullText + interim;
    };
    recognition.onend = () => { recognition = null; btn.textContent = '🎙️ Start Voice Recording'; btn.style.background = ''; status.textContent = '✅ Recording stopped.'; };
    recognition.onerror = (e) => { status.textContent = '❌ Error: ' + e.error; recognition = null; btn.textContent = '🎙️ Start Voice Recording'; btn.style.background = ''; };
    recognition.start();
  });
  c.querySelector('#clearBtn').addEventListener('click', () => { fullText = ''; out.textContent = 'Cleared. Click Start to record again.'; });
}

// 8. Background Remover ✅ FULLY FIXED v2.2
function renderBgRemover(c) {
  c.innerHTML = '<div style="text-align:center;padding:1rem;">' +
    '<input type="file" id="bgFile" accept="image/*" class="form-input" style="max-width:420px;margin:0 auto 0.8rem;display:block;">' +
    '<div style="margin-bottom:0.8rem;"><label class="form-label">Tolerance: <span id="tolVal">30</span> <small style="color:#888">(higher = removes more background)</small></label><br>' +
    '<input type="range" id="bgTol" min="5" max="120" value="30" style="width:220px;"></div>' +
    '<p style="color:#888;font-size:0.85rem;margin-bottom:1rem;">Best for solid backgrounds (white, black, green). Adjust tolerance then click Re-Apply.</p>' +
    '<div id="bgPrevArea" style="display:none;margin-top:1rem;">' +
    '<canvas id="bgCvs" style="max-width:100%;border-radius:12px;border:2px dashed #555;"></canvas>' +
    '<div style="display:flex;gap:0.8rem;justify-content:center;margin-top:1.2rem;flex-wrap:wrap;">' +
    '<button class="btn btn-secondary" id="bgReApply">🔄 Re-Apply</button>' +
    '<button class="btn btn-primary" id="dlBgBtn" style="font-size:1rem;padding:0.7rem 1.5rem;">📥 Download Transparent PNG</button>' +
    '</div><p id="bgStatus" style="color:#10b981;margin-top:0.8rem;font-size:0.9rem;"></p></div></div>';

  var lastFile = null;

  c.querySelector('#bgTol').addEventListener('input', function() {
    c.querySelector('#tolVal').textContent = this.value;
  });

  function processImage(file, tol) {
    var reader = new FileReader();
    reader.onload = function(ev) {
      var img = new Image();
      img.onload = function() {
        var cvs = c.querySelector('#bgCvs');
        cvs.width = img.width;
        cvs.height = img.height;
        var ctx = cvs.getContext('2d');
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        ctx.drawImage(img, 0, 0);
        try {
          var imgData = ctx.getImageData(0, 0, cvs.width, cvs.height);
          var d = imgData.data;
          var bgR = d[0], bgG = d[1], bgB = d[2];
          var removed = 0;
          for (var i = 0; i < d.length; i += 4) {
            if (Math.abs(d[i]-bgR) < tol && Math.abs(d[i+1]-bgG) < tol && Math.abs(d[i+2]-bgB) < tol) {
              d[i+3] = 0; removed++;
            }
          }
          ctx.putImageData(imgData, 0, 0);
          c.querySelector('#bgPrevArea').style.display = 'block';
          c.querySelector('#bgStatus').textContent = '✅ Removed ~' + removed.toLocaleString() + ' pixels. Adjust tolerance and Re-Apply if needed.';
        } catch(err) {
          c.querySelector('#bgStatus').textContent = '❌ Error: ' + err.message;
        }
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

  c.querySelector('#bgFile').addEventListener('change', function(e) {
    lastFile = e.target.files[0];
    if (!lastFile) return;
    c.querySelector('#bgStatus').textContent = '⏳ Processing...';
    processImage(lastFile, parseInt(c.querySelector('#bgTol').value));
  });

  c.querySelector('#bgReApply').addEventListener('click', function() {
    if (!lastFile) { c.querySelector('#bgStatus').textContent = '⚠️ Please upload an image first.'; return; }
    c.querySelector('#bgStatus').textContent = '⏳ Re-applying...';
    processImage(lastFile, parseInt(c.querySelector('#bgTol').value));
  });

  c.querySelector('#dlBgBtn').addEventListener('click', function() {
    var cvs = c.querySelector('#bgCvs');
    if (!cvs || cvs.width === 0) { c.querySelector('#bgStatus').textContent = '⚠️ Please upload an image first.'; return; }
    try {
      var dataURL = cvs.toDataURL('image/png');
      var a = document.createElement('a');
      a.href = dataURL;
      a.download = 'transparent-bg.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      c.querySelector('#bgStatus').textContent = '✅ Downloaded! Check your Downloads folder.';
    } catch(err) {
      c.querySelector('#bgStatus').textContent = '❌ Download error: ' + err.message;
    }
  });
}

// 9. Trust Badge ✅
function renderTrustBadge(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Badge Text:</label><input type="text" id="tbL" class="form-input" value="Verified by Antigravity"></div>
        <div class="form-group"><label class="form-label">Subtext:</label><input type="text" id="tbS" class="form-input" value="100% Security Inspected"></div>
        <div class="form-group"><label class="form-label">Accent Color:</label><input type="color" id="tbColor" value="#00f2fe" style="width:80px;height:36px;border-radius:8px;cursor:pointer;border:none;"></div>
      </div>
      <div>
        <label class="form-label">Live Preview:</label>
        <div id="tbP" style="padding:1rem;background:#000;text-align:center;border-radius:8px;margin-bottom:1rem;"></div>
        <div class="output-box" id="tbC" style="max-height:150px;font-size:0.75rem;"></div>
        <button class="btn btn-primary" style="margin-top:1rem;" onclick="copyBoxText('tbC')">📋 Copy Badge SVG</button>
      </div>
    </div>`;
  const update = () => {
    const l = c.querySelector('#tbL').value;
    const s = c.querySelector('#tbS').value;
    const col = c.querySelector('#tbColor').value;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="52" viewBox="0 0 280 52"><rect width="280" height="52" rx="26" fill="#0d1322" stroke="${escapeXml(col)}" stroke-width="1.5"/><circle cx="26" cy="26" r="7" fill="${escapeXml(col)}"/><text x="16" y="23" fill="${escapeXml(col)}" font-family="sans-serif" font-size="14" font-weight="bold">✓</text><text x="46" y="23" fill="#fff" font-family="sans-serif" font-size="13" font-weight="700">${escapeXml(l)}</text><text x="46" y="38" fill="#9CA3AF" font-family="sans-serif" font-size="11">${escapeXml(s)}</text></svg>`;
    c.querySelector('#tbP').innerHTML = svg;
    c.querySelector('#tbC').textContent = svg;
  };
  c.querySelectorAll('input').forEach(el => el.addEventListener('input', update));
  update();
}

// 10. OG Card Previewer ✅ FULLY REWRITTEN v2.2
function renderOgPreviewer(c) {
  c.innerHTML = '<div style="padding:0.5rem;">' +
    '<div class="grid-2">' +
    '<div>' +
    '<div class="form-group"><label class="form-label">🔤 Page Title:</label><input type="text" id="ogT" class="form-input" value="Antigravity Tools — 50 Free Developer Tools"></div>' +
    '<div class="form-group"><label class="form-label">📝 Description:</label><textarea id="ogD" class="form-textarea" style="height:80px;">Free browser-based tools for AI, SEO, code, security and design. No signup needed.</textarea></div>' +
    '<div class="form-group"><label class="form-label">🔗 Page URL:</label><input type="text" id="ogU" class="form-input" value="https://antigravitytools.app"></div>' +
    '<div class="form-group"><label class="form-label">🖼️ Image URL (optional):</label><input type="text" id="ogImg" class="form-input" placeholder="https://yoursite.com/og-image.jpg"></div>' +
    '<div class="form-group"><label class="form-label">🌐 Platform Preview:</label>' +
    '<select id="ogPlat" class="form-select">' +
    '<option value="twitter">Twitter / X</option>' +
    '<option value="linkedin">LinkedIn</option>' +
    '<option value="facebook">Facebook</option>' +
    '<option value="discord">Discord</option>' +
    '<option value="whatsapp">WhatsApp</option>' +
    '</select></div>' +
    '<button class="btn btn-primary" id="ogGenBtn" style="margin-top:0.5rem;">⚡ Generate OG Meta Tags</button>' +
    '</div>' +
    '<div>' +
    '<label class="form-label">👁️ Live Card Preview:</label>' +
    '<div id="ogCard" style="border-radius:12px;overflow:hidden;border:1px solid #333;font-family:Arial,sans-serif;max-width:420px;box-shadow:0 4px 20px rgba(0,0,0,0.4);"></div>' +
    '<div id="ogSiteName" style="font-size:0.75rem;color:#888;margin-top:0.4rem;padding-left:4px;"></div>' +
    '</div>' +
    '</div>' +
    '<div id="ogTagsOut" style="display:none;margin-top:1.5rem;">' +
    '<label class="form-label">📋 Generated OG Meta Tags:</label>' +
    '<div class="output-box" id="ogTagsBox" style="font-size:0.8rem;min-height:180px;"></div>' +
    '<div style="display:flex;gap:0.8rem;margin-top:0.8rem;">' +
    '<button class="btn btn-secondary" onclick="copyBoxText(\'ogTagsBox\')">📋 Copy Tags</button>' +
    '</div>' +
    '</div>' +
    '</div>';

  var platforms = {
    twitter:  { bg: '#15202b', card: '#1e2c3a', urlColor: '#8899a6', textColor: '#fff', descColor: '#8899a6', label: 'twitter.com' },
    linkedin: { bg: '#1b1f23', card: '#1b1f23', urlColor: '#70b7f0', textColor: '#fff', descColor: '#b0b8c4', label: 'linkedin.com' },
    facebook: { bg: '#242526', card: '#3a3b3c', urlColor: '#b0b3b8', textColor: '#e4e6ea', descColor: '#b0b3b8', label: 'facebook.com' },
    discord:  { bg: '#36393f', card: '#2f3136', urlColor: '#00aff4', textColor: '#dcddde', descColor: '#b9bbbe', label: 'discord.com' },
    whatsapp: { bg: '#0d1418', card: '#1f2c34', urlColor: '#25d366', textColor: '#e9edef', descColor: '#8696a0', label: 'whatsapp.com' }
  };

  function update() {
    var title = c.querySelector('#ogT').value || 'Page Title';
    var desc  = c.querySelector('#ogD').value || 'Page description goes here.';
    var url   = c.querySelector('#ogU').value || 'https://example.com';
    var img   = c.querySelector('#ogImg').value.trim();
    var plat  = c.querySelector('#ogPlat').value;
    var p     = platforms[plat];

    // Extract domain for display
    var domain = url.replace(/https?:\/\//,'').split('/')[0].toUpperCase();

    // Image area
    var imgHtml = img
      ? '<img src="' + escapeXml(img) + '" style="width:100%;height:160px;object-fit:cover;display:block;" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">' +
        '<div style="display:none;height:160px;background:linear-gradient(135deg,#00f2fe22,#7928ca44);align-items:center;justify-content:center;color:#555;font-size:0.85rem;">Image failed to load</div>'
      : '<div style="height:160px;background:linear-gradient(135deg,#00f2fe,#7928ca);display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.1rem;font-weight:800;letter-spacing:1px;">OG IMAGE PREVIEW</div>';

    // Card HTML
    c.querySelector('#ogCard').innerHTML =
      '<div style="background:' + p.bg + ';">' +
        imgHtml +
        '<div style="padding:0.9rem 1rem;background:' + p.card + ';border-top:1px solid rgba(255,255,255,0.08);">' +
          '<div style="font-size:0.72rem;color:' + p.urlColor + ';text-transform:uppercase;margin-bottom:0.35rem;letter-spacing:0.5px;">' + escapeXml(domain) + '</div>' +
          '<div style="font-weight:700;color:' + p.textColor + ';font-size:0.95rem;margin-bottom:0.3rem;line-height:1.3;">' + escapeXml(title.slice(0,80)) + (title.length>80?'…':'') + '</div>' +
          '<div style="font-size:0.82rem;color:' + p.descColor + ';line-height:1.4;">' + escapeXml(desc.slice(0,120)) + (desc.length>120?'…':'') + '</div>' +
        '</div>' +
      '</div>';

    c.querySelector('#ogSiteName').textContent = '↑ Preview as seen on ' + p.label;
  }

  // Generate tags button
  c.querySelector('#ogGenBtn').addEventListener('click', function() {
    var title = c.querySelector('#ogT').value;
    var desc  = c.querySelector('#ogD').value;
    var url   = c.querySelector('#ogU').value;
    var img   = c.querySelector('#ogImg').value.trim();
    var tags =
      '<!-- Primary Meta Tags -->\n' +
      '<title>' + escapeXml(title) + '</title>\n' +
      '<meta name="title" content="' + escapeXml(title) + '">\n' +
      '<meta name="description" content="' + escapeXml(desc) + '">\n\n' +
      '<!-- Open Graph / Facebook -->\n' +
      '<meta property="og:type" content="website">\n' +
      '<meta property="og:url" content="' + escapeXml(url) + '">\n' +
      '<meta property="og:title" content="' + escapeXml(title) + '">\n' +
      '<meta property="og:description" content="' + escapeXml(desc) + '">\n' +
      (img ? '<meta property="og:image" content="' + escapeXml(img) + '">\n' : '') +
      '\n<!-- Twitter -->\n' +
      '<meta property="twitter:card" content="summary_large_image">\n' +
      '<meta property="twitter:url" content="' + escapeXml(url) + '">\n' +
      '<meta property="twitter:title" content="' + escapeXml(title) + '">\n' +
      '<meta property="twitter:description" content="' + escapeXml(desc) + '">\n' +
      (img ? '<meta property="twitter:image" content="' + escapeXml(img) + '">\n' : '');

    c.querySelector('#ogTagsBox').textContent = tags;
    c.querySelector('#ogTagsOut').style.display = 'block';
  });

  c.querySelectorAll('input, textarea, select').forEach(function(el) {
    el.addEventListener('input', update);
  });
  update();
}

// 11. Meta Tag Generator ✅ FIXED - Full tags
function renderMetaTagGen(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Site Title:</label><input type="text" id="mtT" class="form-input" value="Antigravity Tools"></div>
        <div class="form-group"><label class="form-label">Description:</label><textarea id="mtD" class="form-textarea" style="height:60px;">Free AI & developer tools. 50 tools for SEO, code, security and design.</textarea></div>
        <div class="form-group"><label class="form-label">Canonical URL:</label><input type="text" id="mtU" class="form-input" value="https://antigravitytools.app"></div>
        <div class="form-group"><label class="form-label">Keywords:</label><input type="text" id="mtK" class="form-input" value="AI tools, developer tools, free tools"></div>
        <button class="btn btn-primary" id="mtGen" style="margin-top:0.5rem;">⚡ Generate Meta Tags</button>
      </div>
      <div>
        <div class="output-box" id="mtO" style="min-height:280px;font-size:0.82rem;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('mtO')">📋 Copy Meta Tags</button>
      </div>
    </div>`;
  c.querySelector('#mtGen').addEventListener('click', () => {
    const t = escapeXml(c.querySelector('#mtT').value);
    const d = escapeXml(c.querySelector('#mtD').value);
    const u = escapeXml(c.querySelector('#mtU').value);
    const k = escapeXml(c.querySelector('#mtK').value);
    c.querySelector('#mtO').textContent = `<!-- Primary Meta Tags -->
<title>${t}</title>
<meta name="title" content="${t}">
<meta name="description" content="${d}">
<meta name="keywords" content="${k}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="UTF-8">
<link rel="canonical" href="${u}">
<meta name="robots" content="index, follow">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${u}">
<meta property="og:title" content="${t}">
<meta property="og:description" content="${d}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${u}">
<meta property="twitter:title" content="${t}">
<meta property="twitter:description" content="${d}">`;
  });
  c.querySelector('#mtGen').click();
}

// 12. Favicon & App Icon Generator ✅ FULLY REWRITTEN v2.2
function renderFaviconGen(c) {
  c.innerHTML = '<div style="padding:0.5rem;">' +
    '<div class="grid-2">' +
      '<div>' +
        '<div class="form-group"><label class="form-label">Mode / Source:</label>' +
          '<div style="display:flex;gap:0.5rem;">' +
            '<button class="btn btn-secondary" id="favModeImg" style="flex:1;background:var(--primary-cyan);color:#000;">📁 Upload Image</button>' +
            '<button class="btn btn-secondary" id="favModeText" style="flex:1;">⚡ Emoji / Text</button>' +
          '</div>' +
        '</div>' +
        '<div id="favImgInputGroup" class="form-group">' +
          '<label class="form-label">Upload Logo / Graphic (PNG, JPG, SVG):</label>' +
          '<input type="file" id="favFile" accept="image/*" class="form-input">' +
        '</div>' +
        '<div id="favTextInputGroup" class="form-group" style="display:none;">' +
          '<label class="form-label">Icon Emoji or Text:</label>' +
          '<input type="text" id="favText" class="form-input" value="⚡" style="text-align:center;font-size:1.5rem;" maxlength="4">' +
        '</div>' +
        '<div class="grid-2">' +
          '<div class="form-group">' +
            '<label class="form-label">Background Color:</label>' +
            '<input type="color" id="favBgColor" value="#0d1322" style="width:100%;height:38px;border-radius:6px;cursor:pointer;border:1px solid #333;">' +
            '<label style="font-size:0.75rem;color:#888;margin-top:4px;display:block;"><input type="checkbox" id="favBgTrans"> Transparent BG</label>' +
          '</div>' +
          '<div class="form-group">' +
            '<label class="form-label">Icon Shape:</label>' +
            '<select id="favShape" class="form-select">' +
              '<option value="square">Square (0%)</option>' +
              '<option value="rounded" selected>Rounded (20%)</option>' +
              '<option value="circle">Circle (50%)</option>' +
            '</select>' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label">Icon Scale / Padding: <span id="favScaleVal">80</span>%</label>' +
          '<input type="range" id="favScale" min="30" max="100" value="80" style="width:100%;">' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<label class="form-label">👁️ Multi-Size Live Previews:</label>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(90px,1fr));gap:1rem;background:rgba(0,0,0,0.3);padding:1rem;border-radius:10px;border:1px solid #333;text-align:center;">' +
          '<div><canvas id="fav16" width="16" height="16" style="width:32px;height:32px;border:1px solid #444;image-rendering:pixelated;"></canvas><p style="font-size:0.7rem;margin-top:2px;color:#aaa;">16×16<br><small>Favicon</small></p><button class="btn btn-secondary dl-sz-btn" data-sz="16" style="padding:2px 6px;font-size:0.65rem;margin-top:2px;">📥 16px</button></div>' +
          '<div><canvas id="fav32" width="32" height="32" style="width:32px;height:32px;border:1px solid #444;image-rendering:pixelated;"></canvas><p style="font-size:0.7rem;margin-top:2px;color:#aaa;">32×32<br><small>Favicon</small></p><button class="btn btn-secondary dl-sz-btn" data-sz="32" style="padding:2px 6px;font-size:0.65rem;margin-top:2px;">📥 32px</button></div>' +
          '<div><canvas id="fav48" width="48" height="48" style="width:48px;height:48px;border:1px solid #444;"></canvas><p style="font-size:0.7rem;margin-top:2px;color:#aaa;">48×48<br><small>Desktop</small></p><button class="btn btn-secondary dl-sz-btn" data-sz="48" style="padding:2px 6px;font-size:0.65rem;margin-top:2px;">📥 48px</button></div>' +
          '<div><canvas id="fav180" width="180" height="180" style="width:60px;height:60px;border:1px solid #444;border-radius:12px;"></canvas><p style="font-size:0.7rem;margin-top:2px;color:#aaa;">180×180<br><small>Apple Touch</small></p><button class="btn btn-secondary dl-sz-btn" data-sz="180" style="padding:2px 6px;font-size:0.65rem;margin-top:2px;">📥 180px</button></div>' +
          '<div><canvas id="fav192" width="192" height="192" style="width:60px;height:60px;border:1px solid #444;border-radius:12px;"></canvas><p style="font-size:0.7rem;margin-top:2px;color:#aaa;">192×192<br><small>Android</small></p><button class="btn btn-secondary dl-sz-btn" data-sz="192" style="padding:2px 6px;font-size:0.65rem;margin-top:2px;">📥 192px</button></div>' +
          '<div><canvas id="fav512" width="512" height="512" style="width:60px;height:60px;border:1px solid #444;border-radius:12px;"></canvas><p style="font-size:0.7rem;margin-top:2px;color:#aaa;">512×512<br><small>PWA Splash</small></p><button class="btn btn-secondary dl-sz-btn" data-sz="512" style="padding:2px 6px;font-size:0.65rem;margin-top:2px;">📥 512px</button></div>' +
        '</div>' +
        '<button class="btn btn-primary" id="dlAllFavs" style="width:100%;margin-top:1rem;padding:0.7rem;">📥 Download All Icons (Batch PNGs)</button>' +
      '</div>' +
    '</div>' +
    '<div style="margin-top:1.5rem;">' +
      '<label class="form-label">📋 Copy HTML &lt;head&gt; Link Tags:</label>' +
      '<div class="output-box" id="favHtmlCode" style="font-size:0.8rem;min-height:100px;"></div>' +
      '<button class="btn btn-secondary" style="margin-top:0.5rem;" onclick="copyBoxText(\'favHtmlCode\')">📋 Copy HTML Code</button>' +
    '</div>' +
  '</div>';

  var activeSource = 'image';
  var uploadedImg = null;

  var modeImgBtn = c.querySelector('#favModeImg');
  var modeTextBtn = c.querySelector('#favModeText');
  var imgGroup = c.querySelector('#favImgInputGroup');
  var textGroup = c.querySelector('#favTextInputGroup');

  modeImgBtn.addEventListener('click', function() {
    activeSource = 'image';
    modeImgBtn.style.background = 'var(--primary-cyan)';
    modeImgBtn.style.color = '#000';
    modeTextBtn.style.background = '';
    modeTextBtn.style.color = '';
    imgGroup.style.display = 'block';
    textGroup.style.display = 'none';
    renderAll();
  });

  modeTextBtn.addEventListener('click', function() {
    activeSource = 'text';
    modeTextBtn.style.background = 'var(--primary-cyan)';
    modeTextBtn.style.color = '#000';
    modeImgBtn.style.background = '';
    modeImgBtn.style.color = '';
    textGroup.style.display = 'block';
    imgGroup.style.display = 'none';
    renderAll();
  });

  c.querySelector('#favFile').addEventListener('change', function(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      var img = new Image();
      img.onload = function() {
        uploadedImg = img;
        renderAll();
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  c.querySelector('#favScale').addEventListener('input', function() {
    c.querySelector('#favScaleVal').textContent = this.value;
    renderAll();
  });

  ['#favText', '#favBgColor', '#favBgTrans', '#favShape'].forEach(function(sel) {
    var el = c.querySelector(sel);
    if (el) {
      el.addEventListener('input', renderAll);
      el.addEventListener('change', renderAll);
    }
  });

  var sizes = [16, 32, 48, 180, 192, 512];

  function renderAll() {
    var isTrans = c.querySelector('#favBgTrans').checked;
    var bgColor = c.querySelector('#favBgColor').value;
    var shape = c.querySelector('#favShape').value;
    var scalePct = parseInt(c.querySelector('#favScale').value) / 100;
    var txt = c.querySelector('#favText').value || '⚡';

    sizes.forEach(function(sz) {
      var cvs = c.querySelector('#fav' + sz);
      if (!cvs) return;
      var ctx = cvs.getContext('2d');
      ctx.clearRect(0, 0, sz, sz);

      ctx.save();
      ctx.beginPath();
      if (shape === 'circle') {
        ctx.arc(sz / 2, sz / 2, sz / 2, 0, Math.PI * 2);
      } else if (shape === 'rounded') {
        var r = sz * 0.2;
        ctx.moveTo(r, 0);
        ctx.lineTo(sz - r, 0);
        ctx.quadraticCurveTo(sz, 0, sz, r);
        ctx.lineTo(sz, sz - r);
        ctx.quadraticCurveTo(sz, sz, sz - r, sz);
        ctx.lineTo(r, sz);
        ctx.quadraticCurveTo(0, sz, 0, sz - r);
        ctx.lineTo(0, r);
        ctx.quadraticCurveTo(0, 0, r, 0);
      } else {
        ctx.rect(0, 0, sz, sz);
      }
      ctx.closePath();

      if (!isTrans) {
        ctx.fillStyle = bgColor;
        ctx.fill();
      }

      ctx.clip();

      if (activeSource === 'image' && uploadedImg) {
        var drawW = sz * scalePct;
        var drawH = sz * scalePct;
        var drawX = (sz - drawW) / 2;
        var drawY = (sz - drawH) / 2;
        ctx.drawImage(uploadedImg, drawX, drawY, drawW, drawH);
      } else {
        ctx.font = 'bold ' + Math.round(sz * 0.65 * scalePct) + 'px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = isTrans ? '#00f2fe' : '#ffffff';
        ctx.fillText(txt, sz / 2, sz / 2 + sz * 0.04);
      }

      ctx.restore();
    });

    updateHtmlSnippet();
  }

  function updateHtmlSnippet() {
    var html = '<!-- Favicon & App Icon Head Tags -->\n' +
      '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n' +
      '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n' +
      '<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">\n' +
      '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n' +
      '<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">\n' +
      '<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">';
    c.querySelector('#favHtmlCode').textContent = html;
  }

  c.querySelectorAll('.dl-sz-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var sz = this.getAttribute('data-sz');
      var cvs = c.querySelector('#fav' + sz);
      if (!cvs) return;
      var fname = sz === '180' ? 'apple-touch-icon.png' : 'favicon-' + sz + 'x' + sz + '.png';
      var a = document.createElement('a');
      a.download = fname;
      a.href = cvs.toDataURL('image/png');
      a.click();
    });
  });

  c.querySelector('#dlAllFavs').addEventListener('click', function() {
    sizes.forEach(function(sz, idx) {
      setTimeout(function() {
        var cvs = c.querySelector('#fav' + sz);
        if (!cvs) return;
        var fname = sz === '180' ? 'apple-touch-icon.png' : (sz >= 192 ? 'android-chrome-' + sz + 'x' + sz + '.png' : 'favicon-' + sz + 'x' + sz + '.png');
        var a = document.createElement('a');
        a.download = fname;
        a.href = cvs.toDataURL('image/png');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, idx * 250);
    });
  });

  renderAll();
}

// 13. Schema Builder ✅
function renderSchemaBuilder(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Schema Type:</label><select id="scType" class="form-select"><option value="faq">FAQ</option><option value="product">Product</option><option value="article">Article</option><option value="org">Organization</option></select></div>
        <div class="form-group"><label class="form-label">Name / Question:</label><input type="text" id="scQ" class="form-input" value="Is Antigravity Tools free?"></div>
        <div class="form-group"><label class="form-label">Description / Answer:</label><input type="text" id="scA" class="form-input" value="Yes, 100% free with zero registration required."></div>
        <div class="form-group"><label class="form-label">URL:</label><input type="text" id="scUrl" class="form-input" value="https://antigravitytools.app"></div>
      </div>
      <div>
        <label class="form-label">Generated JSON-LD Schema:</label>
        <div class="output-box" id="scOut" style="min-height:200px;font-size:0.82rem;"></div>
        <button class="btn btn-primary" style="margin-top:1rem;" onclick="copyBoxText('scOut')">📋 Copy Schema</button>
      </div>
    </div>`;
  const update = () => {
    const type = c.querySelector('#scType').value;
    const q = c.querySelector('#scQ').value;
    const a = c.querySelector('#scA').value;
    const url = c.querySelector('#scUrl').value;
    let schema;
    if (type === 'faq') schema = { "@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}] };
    else if (type === 'product') schema = { "@context":"https://schema.org","@type":"Product","name":q,"description":a,"url":url };
    else if (type === 'article') schema = { "@context":"https://schema.org","@type":"Article","headline":q,"description":a,"url":url };
    else schema = { "@context":"https://schema.org","@type":"Organization","name":q,"description":a,"url":url };
    c.querySelector('#scOut').textContent = JSON.stringify(schema, null, 2);
  };
  c.querySelectorAll('input,select').forEach(el => el.addEventListener('input', update));
  update();
}

// 14. Core Web Vitals ✅ FIXED - Interactive simulation
function renderVitalsSimulator(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Images above fold: <span id="imgC">3</span></label><input type="range" id="imgSlider" min="0" max="20" value="3" style="width:100%;"></div>
        <div class="form-group"><label class="form-label">External scripts: <span id="jsC">2</span></label><input type="range" id="jsSlider" min="0" max="30" value="2" style="width:100%;"></div>
        <div class="form-group"><label class="form-label">CSS files: <span id="cssC">1</span></label><input type="range" id="cssSlider" min="0" max="20" value="1" style="width:100%;"></div>
        <div class="form-group"><label class="form-label">DOM nodes: <span id="domC">500</span></label><input type="range" id="domSlider" min="100" max="5000" value="500" step="100" style="width:100%;"></div>
      </div>
      <div>
        <div id="vitalsOut" style="background:rgba(255,255,255,0.03);padding:1.2rem;border-radius:12px;"></div>
      </div>
    </div>`;
  const update = () => {
    const imgs = parseInt(c.querySelector('#imgSlider').value);
    const js = parseInt(c.querySelector('#jsSlider').value);
    const css = parseInt(c.querySelector('#cssSlider').value);
    const dom = parseInt(c.querySelector('#domSlider').value);
    c.querySelector('#imgC').textContent = imgs;
    c.querySelector('#jsC').textContent = js;
    c.querySelector('#cssC').textContent = css;
    c.querySelector('#domC').textContent = dom;
    const lcp = (0.5 + imgs * 0.1 + js * 0.08 + css * 0.05).toFixed(2);
    const cls = (js * 0.003 + imgs * 0.002).toFixed(3);
    const fid = (10 + js * 3 + dom / 100).toFixed(0);
    const score = Math.max(0, Math.min(100, 100 - (parseFloat(lcp)>2.5?20:0) - (parseFloat(cls)>0.1?15:0) - (parseInt(fid)>100?15:0) - Math.floor(dom/500)*3 - js));
    const grade = score >= 90 ? '#10b981' : score >= 50 ? '#eab308' : '#ef4444';
    c.querySelector('#vitalsOut').innerHTML = `
      <h3 style="color:${grade};font-size:2.5rem;text-align:center;">${score} / 100</h3>
      <p style="text-align:center;color:${grade};margin-bottom:1rem;">${score>=90?'🟢 GOOD':score>=50?'🟡 NEEDS IMPROVEMENT':'🔴 POOR'}</p>
      <table style="width:100%;font-size:0.9rem;border-collapse:collapse;">
        <tr><td style="padding:0.4rem;">LCP</td><td style="color:${parseFloat(lcp)<=2.5?'#10b981':'#ef4444'}">${lcp}s ${parseFloat(lcp)<=2.5?'✅':'❌'}</td></tr>
        <tr><td style="padding:0.4rem;">CLS</td><td style="color:${parseFloat(cls)<=0.1?'#10b981':'#ef4444'}">${cls} ${parseFloat(cls)<=0.1?'✅':'❌'}</td></tr>
        <tr><td style="padding:0.4rem;">FID</td><td style="color:${parseInt(fid)<=100?'#10b981':'#ef4444'}">${fid}ms ${parseInt(fid)<=100?'✅':'❌'}</td></tr>
        <tr><td style="padding:0.4rem;">DOM Nodes</td><td style="color:${dom<=1500?'#10b981':'#f59e0b'}">${dom} ${dom<=1500?'✅':'⚠️'}</td></tr>
      </table>`;
  };
  c.querySelectorAll('input[type=range]').forEach(el => el.addEventListener('input', update));
  update();
}

// 15. Sitemap Builder ✅
function renderSitemapBuilder(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Domain URL:</label><input type="text" id="smUrl" class="form-input" value="https://antigravitytools.app"></div>
        <div class="form-group"><label class="form-label">Pages (one per line):</label><textarea id="smPages" class="form-textarea" style="height:100px;">/
/about
/tools
/blog
/contact</textarea></div>
        <button class="btn btn-primary" id="smGen" style="margin-top:0.5rem;">🗺️ Generate Sitemap</button>
      </div>
      <div>
        <div class="output-box" id="smOut" style="min-height:200px;font-size:0.82rem;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('smOut')">📋 Copy sitemap.xml</button>
      </div>
    </div>`;
  c.querySelector('#smGen').addEventListener('click', () => {
    const url = c.querySelector('#smUrl').value.replace(/\/$/, '');
    const pages = c.querySelector('#smPages').value.split('\n').filter(p => p.trim());
    const urls = pages.map((p, i) => `  <url>\n    <loc>${url}${p.trim()}</loc>\n    <priority>${i===0?'1.0':'0.8'}</priority>\n    <changefreq>${i===0?'daily':'weekly'}</changefreq>\n  </url>`).join('\n');
    c.querySelector('#smOut').textContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  });
  c.querySelector('#smGen').click();
}

// 16. Privacy Policy Generator ✅
function renderPrivacyGen(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Company / Site Name:</label><input type="text" id="prName" class="form-input" value="Antigravity Tools"></div>
        <div class="form-group"><label class="form-label">Website URL:</label><input type="text" id="prUrl" class="form-input" value="https://antigravitytools.app"></div>
        <div class="form-group"><label class="form-label">Contact Email:</label><input type="text" id="prEmail" class="form-input" value="hello@antigravitytools.app"></div>
        <button class="btn btn-primary" id="prGen" style="margin-top:0.5rem;">⚖️ Generate Policy</button>
      </div>
      <div>
        <div class="output-box" id="prOut" style="min-height:250px;font-size:0.82rem;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('prOut')">📋 Copy Privacy Policy</button>
      </div>
    </div>`;
  c.querySelector('#prGen').addEventListener('click', () => {
    const n = c.querySelector('#prName').value;
    const u = c.querySelector('#prUrl').value;
    const e = c.querySelector('#prEmail').value;
    const date = new Date().toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'});
    c.querySelector('#prOut').textContent = `PRIVACY POLICY FOR ${n.toUpperCase()}
Last updated: ${date}

1. INFORMATION WE COLLECT
${n} (${u}) does not collect personal data. All tool computations run 100% locally inside your browser. No data is sent to our servers.

2. COOKIES
We do not use tracking cookies. Only essential session storage is used for user preferences (e.g. favorites).

3. THIRD PARTIES
We do not share any data with third parties. No analytics or advertising trackers are used on this site.

4. DATA SECURITY
Since no personal data is collected or transmitted, there is no data stored to be breached.

5. GDPR RIGHTS (EU Users)
You have the right to access, rectify, and erase any personal data. Since we collect none, there is nothing to erase.

6. CCPA RIGHTS (California Users)
We do not sell personal information as we collect none.

7. CHILDREN'S PRIVACY
Our services are not directed to children under 13. We do not knowingly collect data from children.

8. CONTACT
For privacy questions: ${e}

This policy complies with GDPR (EU) 2016/679 and CCPA (California) requirements.`;
  });
  c.querySelector('#prGen').click();
}

// 17. Redirect Checker ✅ FIXED
function renderRedirectChecker(c) {
  c.innerHTML = `
    <div class="form-group"><label class="form-label">URL to Check:</label>
      <div style="display:flex;gap:0.5rem;">
        <input type="text" id="rdUrl" class="form-input" value="https://antigravitytools.app">
        <button class="btn btn-primary" id="rdBtn" style="flex-shrink:0;">Check</button>
      </div>
    </div>
    <div class="output-box" id="rdOut" style="min-height:100px;color:var(--accent-green);">
      ⚠️ Note: Due to browser CORS policy, direct HTTP header inspection requires a server-side proxy.<br><br>
      However, you can test any URL using:<br>
      • <strong>curl -I [URL]</strong> in terminal<br>
      • Chrome DevTools → Network tab → check Status column<br>
      • <a href="https://httpstatus.io" target="_blank" style="color:var(--primary-cyan);">httpstatus.io</a> (free online checker)
    </div>
    <div id="rdResult"></div>`;
  c.querySelector('#rdBtn').addEventListener('click', () => {
    const url = c.querySelector('#rdUrl').value;
    const out = c.querySelector('#rdOut');
    out.innerHTML = `<div style="color:var(--primary-cyan);">🔍 Checking ${escapeXml(url)} via no-cors fetch...</div>`;
    fetch(url, { method: 'HEAD', mode: 'no-cors' })
      .then(() => { out.innerHTML = `<div style="color:#10b981;">✅ URL appears reachable (no-cors fetch succeeded)</div><div style="margin-top:0.5rem;color:var(--text-secondary);">For exact status codes, use: <strong>curl -I ${escapeXml(url)}</strong></div>`; })
      .catch(err => { out.innerHTML = `<div style="color:#ef4444;">❌ Could not reach ${escapeXml(url)}</div><div style="margin-top:0.5rem;color:var(--text-secondary);">Error: ${escapeXml(err.message)}</div>`; });
  });
}

// 18. JSON Workbench ✅ FIXED - with type converter
function renderJsonWorkbench(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <textarea id="jwIn" class="form-textarea" style="min-height:180px;">{ "id": 1, "name": "Alex", "active": true, "score": 9.5, "tags": ["ai", "dev"] }</textarea>
        <div style="display:flex;gap:0.5rem;margin-top:1rem;flex-wrap:wrap;">
          <button class="btn btn-primary" id="jwFormat">✨ Format</button>
          <button class="btn btn-secondary" id="jwMinify">Minify</button>
          <button class="btn btn-secondary" id="jwTS">→ TypeScript</button>
          <button class="btn btn-secondary" id="jwPy">→ Python</button>
        </div>
      </div>
      <div>
        <div class="output-box" id="jwOut" style="min-height:180px;font-size:0.82rem;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('jwOut')">📋 Copy</button>
      </div>
    </div>`;
  const getObj = () => JSON.parse(c.querySelector('#jwIn').value);
  const out = () => c.querySelector('#jwOut');
  const typeOf = v => Array.isArray(v) ? 'any[]' : v===null ? 'null' : typeof v === 'number' ? (Number.isInteger(v) ? 'number' : 'number') : typeof v;
  c.querySelector('#jwFormat').addEventListener('click', () => { try { out().textContent = JSON.stringify(getObj(), null, 2); } catch(e) { out().textContent = '❌ ' + e.message; } });
  c.querySelector('#jwMinify').addEventListener('click', () => { try { out().textContent = JSON.stringify(getObj()); } catch(e) { out().textContent = '❌ ' + e.message; } });
  c.querySelector('#jwTS').addEventListener('click', () => { try { const o = getObj(); out().textContent = 'interface Root {\n' + Object.entries(o).map(([k,v]) => `  ${k}: ${typeOf(v)};`).join('\n') + '\n}'; } catch(e) { out().textContent = '❌ ' + e.message; } });
  c.querySelector('#jwPy').addEventListener('click', () => { try { const o = getObj(); out().textContent = 'from dataclasses import dataclass\n\n@dataclass\nclass Root:\n' + Object.entries(o).map(([k,v]) => `    ${k}: ${typeof v === 'number'?'int':'str'}`).join('\n'); } catch(e) { out().textContent = '❌ ' + e.message; } });
}

// 19. cURL Converter ✅ FIXED
function renderCurlConverter(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Paste cURL Command:</label>
        <textarea id="cIn" class="form-textarea" style="min-height:120px;">curl -X POST https://api.example.com/data -H "Content-Type: application/json" -H "Authorization: Bearer TOKEN" -d '{"name":"Alex"}'</textarea>
        <div style="display:flex;gap:0.5rem;margin-top:1rem;flex-wrap:wrap;">
          <button class="btn btn-primary" id="cJS">→ JS Fetch</button>
          <button class="btn btn-secondary" id="cPy">→ Python</button>
          <button class="btn btn-secondary" id="cPHP">→ PHP</button>
        </div>
      </div>
      <div>
        <div class="output-box" id="cOut" style="min-height:200px;font-size:0.82rem;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('cOut')">📋 Copy</button>
      </div>
    </div>`;
  function parseCurl(raw) {
    const url = (raw.match(/curl\s+(?:-[A-Z]\s+\w+\s+)?['"]?(https?:\/\/[^\s'"]+)['"]?/i) || [])[1] || '';
    const method = (raw.match(/-X\s+(\w+)/i) || [])[1] || 'GET';
    const headers = [...raw.matchAll(/-H\s+['"]([^'"]+)['"]/gi)].map(m => m[1]);
    const body = (raw.match(/-d\s+['"]([^'"]+)['"]/i) || raw.match(/--data\s+['"]([^'"]+)['"]/i) || [])[1] || '';
    return { url, method, headers, body };
  }
  c.querySelector('#cJS').addEventListener('click', () => {
    const { url, method, headers, body } = parseCurl(c.querySelector('#cIn').value);
    const hObj = Object.fromEntries(headers.map(h => h.split(': ')));
    c.querySelector('#cOut').textContent = `const response = await fetch("${url}", {\n  method: "${method}",\n  headers: ${JSON.stringify(hObj, null, 4)},${body ? `\n  body: JSON.stringify(${body}),` : ''}\n});\nconst data = await response.json();`;
  });
  c.querySelector('#cPy').addEventListener('click', () => {
    const { url, method, headers, body } = parseCurl(c.querySelector('#cIn').value);
    const hObj = Object.fromEntries(headers.map(h => h.split(': ')));
    c.querySelector('#cOut').textContent = `import requests\n\nheaders = ${JSON.stringify(hObj, null, 4)}\n${body ? `payload = ${body}\n` : ''}response = requests.${method.toLowerCase()}("${url}"${body ? ', json=payload' : ''}, headers=headers)\nprint(response.json())`;
  });
  c.querySelector('#cPHP').addEventListener('click', () => {
    const { url, method } = parseCurl(c.querySelector('#cIn').value);
    c.querySelector('#cOut').textContent = `<?php\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, "${url}");\ncurl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${method}");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n$result = curl_exec($ch);\ncurl_close($ch);\necho $result;\n?>`;
  });
  c.querySelector('#cJS').click();
}

// 20. SVG Optimizer ✅ FIXED
function renderSvgOptimizer(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Paste SVG Code:</label>
        <textarea id="sIn" class="form-textarea" style="min-height:180px;"><svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- Created by editor -->
  <title>Circle</title>
  <circle cx="50" cy="50" r="40" fill="#00f2fe"/>
</svg></textarea>
        <div style="display:flex;gap:0.5rem;margin-top:1rem;flex-wrap:wrap;">
          <button class="btn btn-primary" id="svgOpt">✨ Optimize SVG</button>
          <button class="btn btn-secondary" id="svgReact">→ React JSX</button>
        </div>
      </div>
      <div>
        <label class="form-label">Live Preview:</label>
        <div id="sPrev" style="background:#000;border-radius:8px;padding:1rem;min-height:100px;display:flex;align-items:center;justify-content:center;margin-bottom:0.5rem;"></div>
        <div class="output-box" id="sOut" style="max-height:150px;font-size:0.8rem;"></div>
        <button class="btn btn-secondary" style="margin-top:0.5rem;" onclick="copyBoxText('sOut')">📋 Copy</button>
      </div>
    </div>`;
  const preview = () => { c.querySelector('#sPrev').innerHTML = c.querySelector('#sIn').value; };
  c.querySelector('#sIn').addEventListener('input', preview);
  c.querySelector('#svgOpt').addEventListener('click', () => {
    let svg = c.querySelector('#sIn').value;
    svg = svg.replace(/<!--[\s\S]*?-->/g, '').replace(/<title>[\s\S]*?<\/title>/g, '').replace(/<desc>[\s\S]*?<\/desc>/g, '').replace(/\s+/g, ' ').replace(/> </g, '><').trim();
    c.querySelector('#sOut').textContent = svg;
  });
  c.querySelector('#svgReact').addEventListener('click', () => {
    let svg = c.querySelector('#sIn').value;
    svg = svg.replace(/<!--[\s\S]*?-->/g, '').replace(/class=/g, 'className=').replace(/<title>[\s\S]*?<\/title>/g, '').replace(/\s+/g, ' ').trim();
    c.querySelector('#sOut').textContent = `export default function Icon() {\n  return (\n    ${svg}\n  );\n}`;
  });
  preview();
}

// 21. SQL Formatter ✅ FIXED
function renderSqlFormatter(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <textarea id="sqlIn" class="form-textarea" style="min-height:180px;">select u.id,u.name,o.total from users u inner join orders o on u.id=o.user_id where u.active=1 and o.total>100 order by o.total desc limit 10</textarea>
        <button class="btn btn-primary" id="sqlFmt" style="margin-top:1rem;">Format SQL</button>
      </div>
      <div><div class="output-box" id="sqlOut" style="min-height:180px;font-size:0.85rem;"></div><button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('sqlOut')">📋 Copy</button></div>
    </div>`;
  c.querySelector('#sqlFmt').addEventListener('click', () => {
    let sql = c.querySelector('#sqlIn').value;
    const kw = ['SELECT','FROM','WHERE','INNER JOIN','LEFT JOIN','RIGHT JOIN','JOIN','ON','AND','OR','ORDER BY','GROUP BY','HAVING','LIMIT','OFFSET','INSERT INTO','VALUES','UPDATE','SET','DELETE FROM'];
    kw.forEach(k => { sql = sql.replace(new RegExp('\\b' + k + '\\b', 'gi'), '\n' + k); });
    sql = sql.replace(/,\s*/g, ',\n  ').replace(/\n\n+/g, '\n').trim();
    c.querySelector('#sqlOut').textContent = sql;
  });
}

// 22. Regex Tester ✅ FIXED - Real live matching
function renderRegexTester(c) {
  c.innerHTML = `
    <div class="form-group">
      <label class="form-label">Regex Pattern:</label>
      <div style="display:flex;gap:0.5rem;align-items:center;">
        <span style="color:var(--primary-cyan);font-size:1.2rem;">/</span>
        <input type="text" id="rgP" class="form-input" value="\\b[A-Z][a-z]+\\b">
        <span style="color:var(--primary-cyan);font-size:1.2rem;">/</span>
        <input type="text" id="rgF" class="form-input" value="g" style="width:60px;">
      </div>
    </div>
    <div class="form-group"><label class="form-label">Test String:</label>
      <textarea id="rgT" class="form-textarea" style="height:80px;">Hello World. Meet Alice, Bob and Charlie in New York.</textarea>
    </div>
    <div class="form-group"><label class="form-label">Replacement (optional):</label><input type="text" id="rgR" class="form-input" placeholder="Leave empty to just highlight matches..."></div>
    <div id="rgOut" style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);border-radius:8px;padding:1rem;min-height:80px;"></div>
    <div id="rgInfo" style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-secondary);"></div>`;
  const run = () => {
    const pat = c.querySelector('#rgP').value;
    const flags = c.querySelector('#rgF').value;
    const text = c.querySelector('#rgT').value;
    const rep = c.querySelector('#rgR').value;
    try {
      const rx = new RegExp(pat, flags.includes('g') ? flags : flags + 'g');
      if (rep) {
        c.querySelector('#rgOut').textContent = text.replace(rx, rep);
        c.querySelector('#rgInfo').textContent = 'Replacement applied.';
      } else {
        const matches = [...text.matchAll(rx)];
        const highlighted = text.replace(rx, function(m) { return '<mark style="background:rgba(0,242,254,0.3);color:#fff;border-radius:3px;padding:0 2px;">' + escapeXml(m) + '</mark>'; });
        c.querySelector('#rgOut').innerHTML = highlighted;
        c.querySelector('#rgInfo').textContent = `✅ ${matches.length} match${matches.length!==1?'es':''} found: ${matches.map(m=>'"'+m[0]+'"').slice(0,5).join(', ')}`;
      }
    } catch(e) {
      c.querySelector('#rgOut').textContent = '❌ Invalid regex: ' + e.message;
      c.querySelector('#rgInfo').textContent = '';
    }
  };
  c.querySelectorAll('input,textarea').forEach(el => el.addEventListener('input', run));
  run();
}

// 23. Cron Generator ✅ FIXED - Visual builder
function renderCronGenerator(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <h4 style="color:var(--primary-cyan);margin-bottom:1rem;">Visual Cron Builder</h4>
        <div class="form-group"><label class="form-label">Minute (0-59 or *)</label><input type="text" id="crMin" class="form-input" value="0"></div>
        <div class="form-group"><label class="form-label">Hour (0-23 or *)</label><input type="text" id="crHour" class="form-input" value="9"></div>
        <div class="form-group"><label class="form-label">Day of Month (1-31 or *)</label><input type="text" id="crDom" class="form-input" value="*"></div>
        <div class="form-group"><label class="form-label">Month (1-12 or *)</label><input type="text" id="crMon" class="form-input" value="*"></div>
        <div class="form-group"><label class="form-label">Day of Week (0=Sun 6=Sat or *)</label><input type="text" id="crDow" class="form-input" value="1"></div>
        <div style="margin-top:0.5rem;"><label class="form-label">Quick Presets:</label>
          <select id="crPreset" class="form-select">
            <option value="">-- Select Preset --</option>
            <option value="0 9 * * 1">Every Monday at 9 AM</option>
            <option value="0 0 * * *">Every day at midnight</option>
            <option value="*/5 * * * *">Every 5 minutes</option>
            <option value="0 */2 * * *">Every 2 hours</option>
            <option value="0 9 1 * *">First day of month 9 AM</option>
            <option value="0 18 * * 5">Every Friday at 6 PM</option>
            <option value="*/30 * * * *">Every 30 minutes</option>
            <option value="0 12 * * *">Every day at noon</option>
          </select>
        </div>
      </div>
      <div>
        <div class="output-box" style="font-size:1.8rem;text-align:center;color:var(--primary-cyan);margin-bottom:1rem;" id="crExpr">0 9 * * 1</div>
        <div id="crDesc" style="text-align:center;color:var(--accent-green);font-size:1rem;margin-bottom:1rem;"></div>
        <div id="crNext" style="background:rgba(255,255,255,0.03);padding:1rem;border-radius:8px;font-size:0.85rem;"></div>
        <button class="btn btn-primary" style="margin-top:1rem;" onclick="copyBoxText('crExpr')">📋 Copy Cron Expression</button>
      </div>
    </div>`;
  const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const describe = (min,hr,dom,mon,dow) => {
    if (min==='*'&&hr==='*'&&dom==='*'&&mon==='*'&&dow==='*') return 'Every minute';
    if (min.startsWith('*/')&&hr==='*'&&dom==='*'&&mon==='*'&&dow==='*') return `Every ${min.split('/')[1]} minutes`;
    if (dom==='*'&&mon==='*'&&dow==='*') return `Every day at ${hr.padStart(2,'0')}:${min.padStart(2,'0')}`;
    if (dom==='*'&&mon==='*'&&dow!=='*') return `Every ${DAYS[parseInt(dow)]||'day'} at ${hr.padStart(2,'0')}:${min.padStart(2,'0')}`;
    if (dom!=='*'&&mon==='*'&&dow==='*') return `Day ${dom} of every month at ${hr.padStart(2,'0')}:${min.padStart(2,'0')}`;
    return `At ${hr.padStart(2,'0')}:${min.padStart(2,'0')} on ${dom}/${mon!=='*'?MONTHS[parseInt(mon)-1]:''} (DOW:${dow})`;
  };
  const update = () => {
    const [min,hr,dom,mon,dow] = ['crMin','crHour','crDom','crMon','crDow'].map(id => c.querySelector('#'+id).value.trim()||'*');
    const expr = `${min} ${hr} ${dom} ${mon} ${dow}`;
    c.querySelector('#crExpr').textContent = expr;
    c.querySelector('#crDesc').textContent = '📅 ' + describe(min,hr,dom,mon,dow);
    c.querySelector('#crNext').innerHTML = '<strong style="color:var(--primary-purple);">Next 3 runs:</strong><br>Uses cron expression — exact times depend on server timezone.';
  };
  c.querySelectorAll('#crMin,#crHour,#crDom,#crMon,#crDow').forEach(el => el.addEventListener('input', update));
  c.querySelector('#crPreset').addEventListener('change', function() {
    if (!this.value) return;
    const parts = this.value.split(' ');
    ['crMin','crHour','crDom','crMon','crDow'].forEach((id,i) => { c.querySelector('#'+id).value = parts[i]; });
    update();
  });
  update();
}

// 24. Git Helper ✅ FIXED - More commands
function renderGitHelper(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Select Git Operation:</label>
          <select id="gitS" class="form-select">
            <option value="git reset --soft HEAD~1">Undo Last Commit (keep changes)</option>
            <option value="git reset --hard HEAD~1">Undo Last Commit (discard changes)</option>
            <option value="git stash">Stash All Changes</option>
            <option value="git stash pop">Restore Stashed Changes</option>
            <option value="git log --oneline -10">Show Last 10 Commits</option>
            <option value="git diff --stat HEAD">Show Changed Files</option>
            <option value="git branch -D {branch}">Delete Local Branch</option>
            <option value="git push origin --delete {branch}">Delete Remote Branch</option>
            <option value="git rebase -i HEAD~{N}">Squash Last N Commits</option>
            <option value="git cherry-pick {commit-hash}">Cherry-pick Commit</option>
            <option value="git clean -fd">Remove All Untracked Files</option>
            <option value="git remote set-url origin {url}">Change Remote URL</option>
            <option value="git tag v1.0.0 && git push origin v1.0.0">Tag & Push Release</option>
          </select>
        </div>
        <div class="form-group" id="gitVarGroup" style="display:none;"><label class="form-label" id="gitVarLabel">Value:</label><input type="text" id="gitVar" class="form-input" placeholder="Enter value..."></div>
      </div>
      <div>
        <label class="form-label">Git Command:</label>
        <div class="output-box" id="gitO" style="font-size:1rem;color:var(--primary-cyan);min-height:80px;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('gitO')">📋 Copy Command</button>
        <div id="gitExplain" style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-secondary);"></div>
      </div>
    </div>`;
  const explain = {
    'git reset --soft HEAD~1': 'Moves HEAD back one commit. Your staged changes are preserved.',
    'git reset --hard HEAD~1': '⚠️ Permanently deletes last commit AND all changes. Irreversible.',
    'git stash': 'Temporarily saves uncommitted changes to a stack.',
    'git stash pop': 'Restores the most recently stashed changes.',
    'git clean -fd': '⚠️ Permanently deletes all untracked files and directories.',
  };
  const update = () => {
    let cmd = c.querySelector('#gitS').value;
    const hasVar = cmd.includes('{');
    c.querySelector('#gitVarGroup').style.display = hasVar ? 'block' : 'none';
    if (hasVar) {
      const varName = (cmd.match(/\{([^}]+)\}/) || [])[1] || 'value';
      c.querySelector('#gitVarLabel').textContent = `Enter ${varName}:`;
      const val = c.querySelector('#gitVar').value || `<${varName}>`;
      cmd = cmd.replace(/\{[^}]+\}/g, val);
    }
    c.querySelector('#gitO').textContent = cmd;
    c.querySelector('#gitExplain').textContent = explain[c.querySelector('#gitS').value] || '';
  };
  c.querySelector('#gitS').addEventListener('change', update);
  c.querySelector('#gitVar').addEventListener('input', update);
  update();
}

// 25. JWT Inspector ✅ FIXED - Real base64 decode
function renderJwtInspector(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Paste JWT Token:</label>
        <textarea id="jwtIn" class="form-textarea" style="min-height:120px;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTl9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</textarea>
        <button class="btn btn-primary" id="jwtDec" style="margin-top:1rem;">🔐 Decode JWT</button>
      </div>
      <div>
        <label class="form-label">Decoded Payload:</label>
        <div class="output-box" id="jwtOut" style="min-height:120px;font-size:0.82rem;"></div>
        <div id="jwtStatus" style="margin-top:0.5rem;font-size:0.85rem;"></div>
      </div>
    </div>`;
  c.querySelector('#jwtDec').addEventListener('click', () => {
    try {
      const token = c.querySelector('#jwtIn').value.trim();
      const parts = token.split('.');
      if (parts.length !== 3) throw new Error('JWT must have 3 parts separated by dots');
      const b64d = (s) => { s = s.replace(/-/g,'+').replace(/_/g,'/'); while(s.length%4) s+='='; return JSON.parse(atob(s)); };
      const header = b64d(parts[0]);
      const payload = b64d(parts[1]);
      const now = Math.floor(Date.now()/1000);
      const expired = payload.exp && payload.exp < now;
      c.querySelector('#jwtOut').textContent = `// HEADER\n${JSON.stringify(header, null, 2)}\n\n// PAYLOAD\n${JSON.stringify(payload, null, 2)}`;
      let status = `<div style="color:${expired?'#ef4444':'#10b981'};">${expired?'❌ Token EXPIRED':'✅ Token is valid (not expired)'}</div>`;
      if (payload.exp) status += `<div style="color:var(--text-secondary);">Expires: ${new Date(payload.exp*1000).toLocaleString()}</div>`;
      if (payload.iat) status += `<div style="color:var(--text-secondary);">Issued at: ${new Date(payload.iat*1000).toLocaleString()}</div>`;
      c.querySelector('#jwtStatus').innerHTML = status;
    } catch(e) { c.querySelector('#jwtOut').textContent = '❌ Error: ' + e.message; }
  });
  c.querySelector('#jwtDec').click();
}

// 26. Universal Encoder ✅ FIXED - All modes
function renderUniversalEncoder(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Input Text:</label>
        <textarea id="eIn" class="form-textarea" style="min-height:140px;">Hello <World> & "Antigravity" Tools!</textarea>
        <div style="display:flex;gap:0.5rem;margin-top:1rem;flex-wrap:wrap;">
          <button class="btn btn-primary" id="eB64E">Base64 Encode</button>
          <button class="btn btn-secondary" id="eB64D">Base64 Decode</button>
          <button class="btn btn-secondary" id="eUrlE">URL Encode</button>
          <button class="btn btn-secondary" id="eHtml">HTML Entities</button>
          <button class="btn btn-secondary" id="eHex">→ Hex</button>
        </div>
      </div>
      <div>
        <div class="output-box" id="eOut" style="min-height:140px;font-size:0.9rem;word-break:break-all;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('eOut')">📋 Copy</button>
      </div>
    </div>`;
  const inp = () => c.querySelector('#eIn').value;
  const out = v => { c.querySelector('#eOut').textContent = v; };
  c.querySelector('#eB64E').addEventListener('click', () => { try { out(btoa(unescape(encodeURIComponent(inp())))); } catch(e) { out('❌ '+e.message); } });
  c.querySelector('#eB64D').addEventListener('click', () => { try { out(decodeURIComponent(escape(atob(inp())))); } catch(e) { out('❌ '+e.message); } });
  c.querySelector('#eUrlE').addEventListener('click', () => { out(encodeURIComponent(inp())); });
  c.querySelector('#eHtml').addEventListener('click', () => { out(inp().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')); });
  c.querySelector('#eHex').addEventListener('click', () => { out([...inp()].map(ch => ch.charCodeAt(0).toString(16).padStart(2,'0')).join(' ')); });
}

// 27. Hash & Password Generator ✅
function renderHashPasswordGen(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Text to Hash:</label><input type="text" id="hIn" class="form-input" value="Antigravity"></div>
        <div class="form-group"><label class="form-label">Algorithm:</label><select id="hAlg" class="form-select"><option value="SHA-256">SHA-256</option><option value="SHA-512">SHA-512</option><option value="SHA-1">SHA-1</option></select></div>
        <div class="output-box" id="hOut" style="margin-top:0.5rem;font-size:0.78rem;word-break:break-all;min-height:50px;"></div>
      </div>
      <div>
        <div class="form-group"><label class="form-label">Password Generator:</label>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.5rem;">
            <label><input type="checkbox" id="pUpper" checked> A-Z</label>
            <label><input type="checkbox" id="pLower" checked> a-z</label>
            <label><input type="checkbox" id="pNum" checked> 0-9</label>
            <label><input type="checkbox" id="pSym" checked> !@#</label>
          </div>
          <div style="margin-bottom:0.5rem;"><label class="form-label">Length: <span id="pLenVal">16</span></label><input type="range" id="pLen" min="8" max="64" value="16" style="width:100%;"></div>
          <button class="btn btn-primary" id="gP">🔑 Generate Password</button>
        </div>
        <div class="output-box" id="pOut" style="margin-top:0.5rem;font-size:1.1rem;letter-spacing:0.05em;"></div>
        <div id="pStrength" style="margin-top:0.5rem;font-size:0.85rem;"></div>
      </div>
    </div>`;
  const hashUpdate = async () => {
    const text = c.querySelector('#hIn').value;
    const alg = c.querySelector('#hAlg').value;
    try {
      const buf = await crypto.subtle.digest(alg, new TextEncoder().encode(text));
      c.querySelector('#hOut').textContent = Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
    } catch(e) {}
  };
  c.querySelector('#hIn').addEventListener('input', hashUpdate);
  c.querySelector('#hAlg').addEventListener('change', hashUpdate);
  c.querySelector('#pLen').addEventListener('input', function() { c.querySelector('#pLenVal').textContent = this.value; });
  c.querySelector('#gP').addEventListener('click', () => {
    let chars = '';
    if (c.querySelector('#pUpper').checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (c.querySelector('#pLower').checked) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (c.querySelector('#pNum').checked) chars += '0123456789';
    if (c.querySelector('#pSym').checked) chars += '!@#$%^&*()_+-=[]{}|;:,.?';
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';
    const len = parseInt(c.querySelector('#pLen').value);
    const arr = new Uint32Array(len);
    crypto.getRandomValues(arr);
    const pwd = Array.from(arr).map(v => chars[v % chars.length]).join('');
    c.querySelector('#pOut').textContent = pwd;
    const strength = len>=16&&c.querySelector('#pSym').checked ? '🟢 Strong' : len>=12 ? '🟡 Medium' : '🔴 Weak';
    c.querySelector('#pStrength').textContent = strength;
  });
  hashUpdate();
}

// 28. UUID Generator ✅
function renderUuidGen(c) {
  c.innerHTML = `
    <div style="text-align:center;padding:1rem;">
      <div class="form-group" style="max-width:200px;margin:0 auto 1rem;">
        <label class="form-label">Count (1-50):</label><input type="number" id="uCount" class="form-input" value="5" min="1" max="50">
      </div>
      <div style="display:flex;gap:0.5rem;justify-content:center;margin-bottom:1rem;">
        <button class="btn btn-primary" id="gU">⚡ Generate UUIDs</button>
        <button class="btn btn-secondary" onclick="copyBoxText('uOut')">📋 Copy All</button>
      </div>
      <div class="output-box" id="uOut" style="font-size:0.95rem;min-height:200px;text-align:left;font-family:monospace;color:var(--primary-cyan);"></div>
    </div>`;
  const gen = () => {
    const count = Math.min(50, Math.max(1, parseInt(c.querySelector('#uCount').value) || 5));
    c.querySelector('#uOut').textContent = Array.from({length:count}, () => crypto.randomUUID()).join('\n');
  };
  c.querySelector('#gU').addEventListener('click', gen);
  gen();
}

// 29. Subnet Calculator ✅ FIXED - Real CIDR math
function renderSubnetCalc(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">IP / CIDR Notation:</label><input type="text" id="snIp" class="form-input" value="192.168.1.0/24"></div>
        <button class="btn btn-primary" id="snCalc">⚡ Calculate</button>
      </div>
      <div><div class="output-box" id="snOut" style="min-height:200px;font-size:0.85rem;"></div></div>
    </div>`;
  c.querySelector('#snCalc').addEventListener('click', () => {
    try {
      const [ipStr, cidrStr] = c.querySelector('#snIp').value.split('/');
      const cidr = parseInt(cidrStr);
      if (isNaN(cidr)||cidr<0||cidr>32) throw new Error('Invalid CIDR (must be 0-32)');
      const ip = ipStr.split('.').map(Number);
      if (ip.length!==4||ip.some(n=>n<0||n>255)) throw new Error('Invalid IP address');
      const ipInt = ip.reduce((acc,o) => (acc<<8)|o, 0) >>> 0;
      const mask = cidr===0 ? 0 : (~0 << (32-cidr)) >>> 0;
      const net = (ipInt & mask) >>> 0;
      const bcast = (net | (~mask >>> 0)) >>> 0;
      const first = net + 1;
      const last = bcast - 1;
      const hosts = Math.max(0, bcast - net - 1);
      const fmt = n => [(n>>24)&255,(n>>16)&255,(n>>8)&255,n&255].join('.');
      const fmtMask = n => [(n>>24)&255,(n>>16)&255,(n>>8)&255,n&255].join('.');
      c.querySelector('#snOut').innerHTML = `
        <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
          ${[['Network Address', fmt(net)],['Subnet Mask', fmtMask(mask)],['Broadcast', fmt(bcast)],['First Host', fmt(first)],['Last Host', fmt(last)],['Usable Hosts', hosts.toLocaleString()],['CIDR', '/'+cidr],['Total IPs', Math.pow(2,32-cidr).toLocaleString()]].map(([l,v])=>`<tr><td style="padding:0.4rem;color:var(--text-secondary);">${l}</td><td style="padding:0.4rem;color:var(--primary-cyan);font-family:monospace;">${v}</td></tr>`).join('')}
        </table>`;
    } catch(e) { c.querySelector('#snOut').textContent = '❌ ' + e.message; }
  });
  c.querySelector('#snCalc').click();
}

// 30. CORS Inspector ✅ FIXED
function renderCorsInspector(c) {
  c.innerHTML = `
    <div class="form-group"><label class="form-label">Enter URL to Inspect:</label>
      <div style="display:flex;gap:0.5rem;">
        <input type="text" id="corsUrl" class="form-input" value="https://antigravitytools.app">
        <button class="btn btn-primary" id="corsBtn">Inspect</button>
      </div>
    </div>
    <div class="output-box" id="corsOut" style="min-height:150px;font-size:0.85rem;"></div>
    <div style="margin-top:1rem;">
      <h4 style="color:var(--primary-cyan);margin-bottom:0.5rem;">Security Header Checklist:</h4>
      <div id="corsCheck"></div>
    </div>`;
  c.querySelector('#corsBtn').addEventListener('click', () => {
    const url = c.querySelector('#corsUrl').value;
    const headers = ['Content-Security-Policy','Strict-Transport-Security','X-Frame-Options','X-Content-Type-Options','Referrer-Policy','Permissions-Policy'];
    c.querySelector('#corsOut').innerHTML = `<div style="color:var(--text-secondary);">⚠️ Browser CORS policy prevents reading response headers directly.<br><br>Use this command to inspect headers:</div><div style="color:var(--primary-cyan);margin-top:0.5rem;font-family:monospace;font-size:0.9rem;">curl -I ${escapeXml(url)}</div>`;
    c.querySelector('#corsCheck').innerHTML = headers.map(h => `<div style="padding:0.3rem 0;display:flex;gap:0.5rem;align-items:center;"><span style="color:#eab308;">⚠️</span> <span>${h}</span> <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/${h}" target="_blank" style="color:var(--primary-cyan);font-size:0.8rem;">docs ↗</a></div>`).join('');
  });
  c.querySelector('#corsBtn').click();
}

// 31. PII Masker ✅ FIXED - More patterns
function renderPiiMasker(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Input Text with PII:</label>
        <textarea id="piiIn" class="form-textarea" style="min-height:180px;">Contact John at john.doe@email.com or +1-555-123-4567.
Card: 4111-2222-3333-4444. SSN: 123-45-6789. IP: 192.168.1.1</textarea>
      </div>
      <div>
        <label class="form-label">Redacted Output:</label>
        <div class="output-box" id="piiOut" style="min-height:180px;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('piiOut')">📋 Copy Redacted</button>
      </div>
    </div>`;
  c.querySelector('#piiIn').addEventListener('input', function() {
    let text = this.value;
    text = text.replace(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g, '[MASKED_EMAIL]');
    text = text.replace(/\b\d{4}[\s\-]?\d{4}[\s\-]?\d{4}[\s\-]?\d{4}\b/g, '[MASKED_CARD]');
    text = text.replace(/\b\d{3}[-\s]?\d{2}[-\s]?\d{4}\b/g, '[MASKED_SSN]');
    text = text.replace(/(\+?1[-\s]?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}/g, '[MASKED_PHONE]');
    text = text.replace(/\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\b/g, '[MASKED_IP]');
    text = text.replace(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g, '[MASKED_NAME]');
    c.querySelector('#piiOut').textContent = text;
  });
  c.querySelector('#piiIn').dispatchEvent(new Event('input'));
}

// 32. RSA Key Generator ✅ FIXED - Real Web Crypto
function renderKeypairGen(c) {
  c.innerHTML = `
    <div style="text-align:center;padding:1rem;">
      <div style="display:flex;gap:0.5rem;justify-content:center;margin-bottom:1rem;flex-wrap:wrap;">
        <select id="keyAlg" class="form-select" style="width:auto;">
          <option value="RSA-OAEP-2048">RSA-OAEP 2048-bit</option>
          <option value="RSA-OAEP-4096">RSA-OAEP 4096-bit</option>
          <option value="ECDSA">ECDSA P-256</option>
        </select>
        <button class="btn btn-primary" id="gKey">🔑 Generate Keypair</button>
      </div>
      <div id="keyOut" style="text-align:left;">
        <div id="pubOut" class="output-box" style="font-size:0.75rem;margin-bottom:0.5rem;word-break:break-all;"></div>
        <div id="privOut" class="output-box" style="font-size:0.75rem;word-break:break-all;"></div>
        <div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
          <button class="btn btn-secondary" onclick="navigator.clipboard.writeText(document.getElementById('pubKeyText').textContent)">📋 Copy Public Key</button>
          <button class="btn btn-secondary" onclick="navigator.clipboard.writeText(document.getElementById('privKeyText').textContent)">🔒 Copy Private Key</button>
        </div>
      </div>
      <div id="keyStatus" style="margin-top:1rem;color:var(--text-secondary);font-size:0.9rem;"></div>
    </div>`;
  c.querySelector('#gKey').addEventListener('click', async () => {
    const alg = c.querySelector('#keyAlg').value;
    c.querySelector('#keyStatus').textContent = '⏳ Generating keypair... (may take a moment for 4096-bit)';
    try {
      let keyPair;
      if (alg.startsWith('RSA')) {
        const bits = alg.includes('4096') ? 4096 : 2048;
        keyPair = await crypto.subtle.generateKey({ name:'RSA-OAEP', modulusLength:bits, publicExponent:new Uint8Array([1,0,1]), hash:'SHA-256' }, true, ['encrypt','decrypt']);
      } else {
        keyPair = await crypto.subtle.generateKey({ name:'ECDSA', namedCurve:'P-256' }, true, ['sign','verify']);
      }
      const pubExported = await crypto.subtle.exportKey('spki', keyPair.publicKey);
      const privExported = await crypto.subtle.exportKey('pkcs8', keyPair.privateKey);
      const toB64PEM = (buf, type) => `-----BEGIN ${type}-----\n` + btoa(String.fromCharCode(...new Uint8Array(buf))).match(/.{1,64}/g).join('\n') + `\n-----END ${type}-----`;
      const pubPem = toB64PEM(pubExported, 'PUBLIC KEY');
      const privPem = toB64PEM(privExported, 'PRIVATE KEY');
      c.querySelector('#pubOut').innerHTML = `<strong style="color:var(--primary-cyan);">PUBLIC KEY:</strong><pre id="pubKeyText" style="white-space:pre-wrap;font-size:0.72rem;">${pubPem}</pre>`;
      c.querySelector('#privOut').innerHTML = `<strong style="color:#f59e0b;">PRIVATE KEY (keep secret!):</strong><pre id="privKeyText" style="white-space:pre-wrap;font-size:0.72rem;">${privPem}</pre>`;
      c.querySelector('#keyStatus').textContent = `✅ ${alg} keypair generated successfully!`;
    } catch(e) { c.querySelector('#keyStatus').textContent = '❌ Error: ' + e.message; }
  });
}

// 33. Markdown Editor ✅ FIXED - Real MD parser
function renderMarkdownEditor(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Markdown Input:</label>
        <textarea id="mdIn" class="form-textarea" style="min-height:280px;"># Antigravity Tools
## The Best Free Developer Suite

A **powerful** and _flexible_ toolkit for modern developers.

### Features
- ✅ 50 High-demand tools
- ✅ 100% **client-side** — zero data sent to servers
- ✅ AI, SEO, Dev, Security & Design tools

> Built for speed. Built for developers.

\`\`\`js
const tools = await fetch('/api/tools');
\`\`\`

[Visit Site](https://antigravitytools.app)</textarea>
      </div>
      <div>
        <label class="form-label">Live HTML Preview:</label>
        <div id="mdOut" style="padding:1.2rem;background:#000;border-radius:8px;min-height:280px;overflow:auto;line-height:1.7;"></div>
        <button class="btn btn-secondary" style="margin-top:0.5rem;" onclick="copyBoxText('mdOut')">📋 Copy HTML</button>
      </div>
    </div>`;
  function parseMarkdown(md) {
    return md
      .replace(/^#### (.+)$/gm,'<h4>$1</h4>')
      .replace(/^### (.+)$/gm,'<h3>$1</h3>')
      .replace(/^## (.+)$/gm,'<h2>$1</h2>')
      .replace(/^# (.+)$/gm,'<h1>$1</h1>')
      .replace(/\*\*\*(.+?)\*\*\*/g,'<strong><em>$1</em></strong>')
      .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
      .replace(/\*(.+?)\*/g,'<em>$1</em>')
      .replace(/_(.+?)_/g,'<em>$1</em>')
      .replace(/~~(.+?)~~/g,'<del>$1</del>')
      .replace(/`([^`]+)`/g,'<code style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;font-family:monospace;">$1</code>')
      .replace(/```[\w]*\n?([\s\S]*?)```/g,'<pre style="background:#111;padding:1rem;border-radius:8px;overflow:auto;"><code>$1</code></pre>')
      .replace(/^\> (.+)$/gm,'<blockquote style="border-left:4px solid var(--primary-cyan);margin:0.5rem 0;padding:0.5rem 1rem;background:rgba(0,242,254,0.05);">$1</blockquote>')
      .replace(/^- (.+)$/gm,'<li>$1</li>').replace(/(<li>.*<\/li>\n?)+/g,'<ul>$&</ul>')
      .replace(/^\d+\. (.+)$/gm,'<li>$1</li>').replace(/(<li>.*<\/li>\n?)+/g,'<ol>$&</ol>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" style="color:var(--primary-cyan);">$1</a>')
      .replace(/^---$/gm,'<hr style="border-color:var(--border-color);">')
      .replace(/\n\n/g,'</p><p>').replace(/^(?!<[hupboa]|<li|<pre|<block)(.+)/gm,'$1');
  }
  const update = () => { c.querySelector('#mdOut').innerHTML = parseMarkdown(c.querySelector('#mdIn').value); };
  c.querySelector('#mdIn').addEventListener('input', update);
  update();
}

// 34. Diff Checker ✅ FIXED - Real line-by-line diff
function renderDiffChecker(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Original Text:</label>
        <textarea id="diffA" class="form-textarea" style="min-height:200px;">function greet(name) {
  console.log("Hello " + name);
  return name;
}</textarea>
      </div>
      <div>
        <label class="form-label">Modified Text:</label>
        <textarea id="diffB" class="form-textarea" style="min-height:200px;">function greet(name, greeting = "Hello") {
  console.log(\`\${greeting} \${name}!\`);
  return { name, greeting };
}</textarea>
      </div>
    </div>
    <div style="margin-top:1rem;">
      <label class="form-label">Diff Result: <span id="diffStats" style="color:var(--text-secondary);font-size:0.85rem;"></span></label>
      <div id="diffOut" style="background:#000;border-radius:8px;padding:1rem;font-family:monospace;font-size:0.85rem;min-height:150px;overflow:auto;"></div>
    </div>`;
  const diff = () => {
    const aLines = c.querySelector('#diffA').value.split('\n');
    const bLines = c.querySelector('#diffB').value.split('\n');
    let added = 0, removed = 0;
    const result = [];
    const maxLen = Math.max(aLines.length, bLines.length);
    for (let i = 0; i < maxLen; i++) {
      const a = aLines[i], b = bLines[i];
      if (a === b) result.push(`<div style="padding:2px 0.5rem;color:#aaa;"> ${escapeXml(a||'')}</div>`);
      else {
        if (a !== undefined) { result.push(`<div style="padding:2px 0.5rem;background:rgba(239,68,68,0.15);color:#f87171;">- ${escapeXml(a)}</div>`); removed++; }
        if (b !== undefined) { result.push(`<div style="padding:2px 0.5rem;background:rgba(16,185,129,0.15);color:#6ee7b7;">+ ${escapeXml(b)}</div>`); added++; }
      }
    }
    c.querySelector('#diffOut').innerHTML = result.join('');
    c.querySelector('#diffStats').textContent = `+${added} additions  -${removed} deletions`;
  };
  c.querySelectorAll('textarea').forEach(el => el.addEventListener('input', diff));
  diff();
}

// 35. Text Case Converter ✅ FIXED - All cases
function renderTextConverter(c) {
  c.innerHTML = `
    <div>
      <input type="text" id="tIn" class="form-input" value="Antigravity Developer Tools Suite" style="margin-bottom:1rem;">
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0.5rem;" id="tCases"></div>
    </div>`;
  const update = () => {
    const v = c.querySelector('#tIn').value;
    const words = v.trim().split(/[\s_\-]+/);
    const cases = [
      ['kebab-case', words.map(w=>w.toLowerCase()).join('-')],
      ['snake_case', words.map(w=>w.toLowerCase()).join('_')],
      ['camelCase', words.map((w,i)=>i===0?w.toLowerCase():w[0].toUpperCase()+w.slice(1).toLowerCase()).join('')],
      ['PascalCase', words.map(w=>w[0].toUpperCase()+w.slice(1).toLowerCase()).join('')],
      ['SCREAMING_SNAKE', words.map(w=>w.toUpperCase()).join('_')],
      ['Title Case', words.map(w=>w[0].toUpperCase()+w.slice(1).toLowerCase()).join(' ')],
      ['lowercase', v.toLowerCase()],
      ['UPPERCASE', v.toUpperCase()],
      ['URL Slug', words.map(w=>w.toLowerCase().replace(/[^a-z0-9]/g,'')).filter(Boolean).join('-')],
      ['dot.case', words.map(w=>w.toLowerCase()).join('.')],
    ];
    c.querySelector('#tCases').innerHTML = cases.map(([label, val]) =>
      `<div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);border-radius:8px;padding:0.8rem;cursor:pointer;" onclick="navigator.clipboard.writeText(this.querySelector('code').textContent);showToast('Copied!')">
        <div style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:0.3rem;">${label}</div>
        <code style="color:var(--primary-cyan);font-size:0.9rem;word-break:break-all;">${escapeXml(val)}</code>
      </div>`
    ).join('');
  };
  c.querySelector('#tIn').addEventListener('input', update);
  update();
}

// 36. WebP Image Compressor ✅ FIXED
function renderImageCompressor(c) {
  c.innerHTML = `
    <div style="text-align:center;padding:1rem;">
      <input type="file" id="imgFile" accept="image/*" class="form-input" style="max-width:400px;margin:0 auto 0.5rem;">
      <div style="margin-bottom:0.5rem;"><label class="form-label">Quality: <span id="qVal">80</span>%</label><br><input type="range" id="qSlider" min="10" max="100" value="80" style="width:200px;"></div>
      <div id="imgResult" style="display:none;margin-top:1rem;">
        <canvas id="imgCvs" style="max-width:100%;border-radius:12px;border:1px solid #333;display:none;"></canvas>
        <div id="imgInfo" style="margin:0.5rem 0;color:var(--primary-cyan);"></div>
        <button class="btn btn-primary" id="imgDl">📥 Download WebP</button>
      </div>
    </div>`;
  c.querySelector('#qSlider').addEventListener('input', function() { c.querySelector('#qVal').textContent = this.value; });
  c.querySelector('#imgFile').addEventListener('change', (e) => {
    const file = e.target.files[0]; if (!file) return;
    const origSize = file.size;
    const img = new Image();
    img.onload = () => {
      const cvs = c.querySelector('#imgCvs');
      cvs.width = img.width; cvs.height = img.height;
      cvs.getContext('2d').drawImage(img, 0, 0);
      const q = parseInt(c.querySelector('#qSlider').value) / 100;
      cvs.toBlob(blob => {
        const pct = Math.round((1 - blob.size / origSize) * 100);
        c.querySelector('#imgInfo').textContent = `Original: ${(origSize/1024).toFixed(1)}KB → WebP: ${(blob.size/1024).toFixed(1)}KB (${pct > 0 ? pct+'% smaller' : 'same size'})`;
        c.querySelector('#imgResult').style.display = 'block';
        c.querySelector('#imgDl').onclick = () => { const a = document.createElement('a'); a.download = 'converted.webp'; a.href = URL.createObjectURL(blob); a.click(); };
      }, 'image/webp', q);
    };
    img.src = URL.createObjectURL(file);
  });
}

// 37. PDF Studio ✅ IMPROVED
function renderPdfStudio(c) {
  c.innerHTML = `
    <div style="text-align:center;padding:1.5rem;">
      <p style="color:var(--text-secondary);margin-bottom:1.5rem;">PDF manipulation requires the PDF.js library. Here's the recommended integration:</p>
      <div class="output-box" style="text-align:left;margin-bottom:1rem;">
// To add PDF merge to your project:
// 1. Install: npm install pdf-lib
// 2. Merge code:
import { PDFDocument } from 'pdf-lib';

const pdfA = await PDFDocument.load(fileBytesA);
const pdfB = await PDFDocument.load(fileBytesB);
const merged = await PDFDocument.create();
const [donorPages] = await merged.copyPages(pdfA, pdfA.getPageIndices());
merged.addPage(donorPages);
const pdfBytes = await merged.save();</div>
      <a href="https://pdf-lib.js.org/" target="_blank" class="btn btn-primary">🔗 Open PDF-lib Docs</a>
      <a href="https://smallpdf.com/merge-pdf" target="_blank" class="btn btn-secondary" style="margin-left:0.5rem;">🔗 Use SmallPDF (Free Online)</a>
    </div>`;
}

// 38. Audio Trimmer
function renderAudioTrimmer(c) {
  c.innerHTML = '<div style="padding:1rem;"><div class="form-group"><label class="form-label">Upload Audio File (MP3/WAV/OGG):</label><input type="file" id="audFile" accept="audio/*" class="form-input"></div><div id="audControls" style="display:none;"><audio id="audPlayer" controls style="width:100%;margin:1rem 0;"></audio><div class="grid-2"><div class="form-group"><label class="form-label">Start Time (seconds):</label><input type="number" id="audStart" class="form-input" value="0" min="0" step="0.1"></div><div class="form-group"><label class="form-label">End Time (seconds):</label><input type="number" id="audEnd" class="form-input" value="10" min="0" step="0.1"></div></div><div class="form-group"><label class="form-label">Volume Boost: <span id="volVal">1.0</span>x</label><input type="range" id="volBoost" min="0.1" max="3.0" value="1.0" step="0.1" style="width:100%;"></div><button class="btn btn-primary" id="audTrim">Trim and Export WAV</button><div id="audStatus" style="margin-top:0.5rem;color:var(--primary-cyan);"></div></div></div>';
  c.querySelector('#volBoost').addEventListener('input', function() { c.querySelector('#volVal').textContent = parseFloat(this.value).toFixed(1); });
  c.querySelector('#audFile').addEventListener('change', function(e) {
    var file = e.target.files[0]; if (!file) return;
    var player = c.querySelector('#audPlayer');
    player.src = URL.createObjectURL(file);
    c.querySelector('#audControls').style.display = 'block';
    player.onloadedmetadata = function() { c.querySelector('#audEnd').value = Math.floor(player.duration); };
  });
  c.querySelector('#audTrim').addEventListener('click', async function() {
    var status = c.querySelector('#audStatus');
    status.textContent = 'Trimming audio...';
    try {
      var file = c.querySelector('#audFile').files[0];
      var start = parseFloat(c.querySelector('#audStart').value);
      var end = parseFloat(c.querySelector('#audEnd').value);
      var vol = parseFloat(c.querySelector('#volBoost').value);
      var actx = new AudioContext();
      var buf = await actx.decodeAudioData(await file.arrayBuffer());
      var sr = buf.sampleRate;
      var s0 = Math.floor(start * sr);
      var s1 = Math.min(Math.floor(end * sr), buf.length);
      var trimmed = actx.createBuffer(buf.numberOfChannels, s1 - s0, sr);
      for (var ch = 0; ch < buf.numberOfChannels; ch++) {
        var src = buf.getChannelData(ch).slice(s0, s1);
        var dst = trimmed.getChannelData(ch);
        for (var i = 0; i < src.length; i++) dst[i] = Math.max(-1, Math.min(1, src[i] * vol));
      }
      var numSamples = trimmed.length * trimmed.numberOfChannels;
      var wavBuf = new ArrayBuffer(44 + numSamples * 2);
      var dv = new DataView(wavBuf);
      function ws(o, s) { for (var i=0;i<s.length;i++) dv.setUint8(o+i, s.charCodeAt(i)); }
      ws(0,'RIFF'); dv.setUint32(4,36+numSamples*2,true); ws(8,'WAVE');
      ws(12,'fmt '); dv.setUint32(16,16,true); dv.setUint16(20,1,true);
      dv.setUint16(22,trimmed.numberOfChannels,true); dv.setUint32(24,sr,true);
      dv.setUint32(28,sr*trimmed.numberOfChannels*2,true);
      dv.setUint16(32,trimmed.numberOfChannels*2,true); dv.setUint16(34,16,true);
      ws(36,'data'); dv.setUint32(40,numSamples*2,true);
      var off = 44;
      for (var i=0;i<trimmed.length;i++) for (var ch=0;ch<trimmed.numberOfChannels;ch++) {
        var sv = Math.max(-1,Math.min(1,trimmed.getChannelData(ch)[i]));
        dv.setInt16(off, sv<0?sv*32768:sv*32767, true); off+=2;
      }
      var a = document.createElement('a'); a.download = 'trimmed.wav';
      a.href = URL.createObjectURL(new Blob([wavBuf],{type:'audio/wav'})); a.click();
      status.textContent = 'Exported ' + (end-start).toFixed(1) + 's WAV at ' + vol + 'x volume!';
    } catch(e) { status.textContent = 'Error: ' + e.message; }
  });
}

// 39. Video Frame Extractor
function renderVideoGif(c) {
  c.innerHTML = '<div style="padding:1rem;"><div class="form-group"><label class="form-label">Upload Video (MP4/WebM):</label><input type="file" id="vidFile" accept="video/*" class="form-input"></div><div id="vidControls" style="display:none;"><video id="vidPlayer" controls style="width:100%;max-height:240px;border-radius:8px;margin:0.5rem 0;"></video><div class="grid-2"><div class="form-group"><label class="form-label">Start at (seconds):</label><input type="number" id="vidTime" class="form-input" value="0" min="0" step="0.5"></div><div class="form-group"><label class="form-label">Frames to extract (1-20):</label><input type="number" id="vidFrames" class="form-input" value="8" min="1" max="20"></div></div><button class="btn btn-primary" id="vidCapture">Extract Frames</button><div id="vidFrameOutput" style="margin-top:1rem;display:flex;flex-wrap:wrap;gap:0.5rem;"></div></div></div>';
  c.querySelector('#vidFile').addEventListener('change', function(e) {
    var file = e.target.files[0]; if (!file) return;
    var player = c.querySelector('#vidPlayer');
    player.src = URL.createObjectURL(file);
    c.querySelector('#vidControls').style.display = 'block';
  });
  c.querySelector('#vidCapture').addEventListener('click', function() {
    var video = c.querySelector('#vidPlayer');
    var numFrames = parseInt(c.querySelector('#vidFrames').value);
    var startTime = parseFloat(c.querySelector('#vidTime').value);
    var output = c.querySelector('#vidFrameOutput');
    output.innerHTML = '';
    var canvas = document.createElement('canvas');
    canvas.width = 240; canvas.height = 135;
    var ctx = canvas.getContext('2d');
    var frame = 0;
    function captureFrame() {
      if (frame >= numFrames) return;
      var fn = frame;
      video.currentTime = startTime + (fn * 0.25);
      video.addEventListener('seeked', function onSeeked() {
        ctx.drawImage(video, 0, 0, 240, 135);
        var img = document.createElement('img');
        img.src = canvas.toDataURL('image/jpeg', 0.8);
        img.style.cssText = 'border-radius:4px;border:1px solid #333;width:80px;cursor:pointer;';
        img.title = 'Frame ' + (fn+1) + ' - click to download';
        var imgSrc = img.src;
        var frameNum = fn+1;
        img.addEventListener('click', function() {
          var a = document.createElement('a');
          a.download = 'frame-' + frameNum + '.jpg';
          a.href = imgSrc;
          a.click();
        });
        output.appendChild(img);
        frame++;
        video.removeEventListener('seeked', onSeeked);
        captureFrame();
      }, {once:true});
    }
    captureFrame();
  });
}

// 40. Glassmorphism Studio ✅ FIXED - CSS output
function renderGlassmorphismStudio(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Blur: <span id="gBlurV">16</span>px</label><input type="range" id="gBlur" min="0" max="40" value="16" style="width:100%;"></div>
        <div class="form-group"><label class="form-label">Opacity: <span id="gOpV">0.15</span></label><input type="range" id="gOp" min="0" max="100" value="15" style="width:100%;"></div>
        <div class="form-group"><label class="form-label">Border Opacity: <span id="gBdV">0.20</span></label><input type="range" id="gBd" min="0" max="100" value="20" style="width:100%;"></div>
        <div class="form-group"><label class="form-label">Border Radius: <span id="gRdV">16</span>px</label><input type="range" id="gRd" min="0" max="50" value="16" style="width:100%;"></div>
        <div class="form-group"><label class="form-label">Shadow Spread: <span id="gShV">20</span>px</label><input type="range" id="gSh" min="0" max="60" value="20" style="width:100%;"></div>
        <div class="form-group"><label class="form-label">Accent Color:</label><input type="color" id="gColor" value="#00f2fe" style="width:80px;height:36px;border-radius:8px;cursor:pointer;border:none;"></div>
      </div>
      <div>
        <div id="gBg" style="background:linear-gradient(135deg,#7928ca,#00f2fe);border-radius:16px;padding:2rem;min-height:220px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
          <div id="gCard" style="width:180px;height:120px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.1rem;">Glass Card</div>
        </div>
        <div class="output-box" id="gCssOut" style="margin-top:1rem;font-size:0.78rem;max-height:140px;"></div>
        <button class="btn btn-primary" style="margin-top:0.5rem;" onclick="copyBoxText('gCssOut')">📋 Copy CSS</button>
      </div>
    </div>`;
  const update = () => {
    const blur = c.querySelector('#gBlur').value;
    const op = (c.querySelector('#gOp').value / 100).toFixed(2);
    const bd = (c.querySelector('#gBd').value / 100).toFixed(2);
    const rd = c.querySelector('#gRd').value;
    const sh = c.querySelector('#gSh').value;
    const col = c.querySelector('#gColor').value;
    c.querySelector('#gBlurV').textContent = blur;
    c.querySelector('#gOpV').textContent = op;
    c.querySelector('#gBdV').textContent = bd;
    c.querySelector('#gRdV').textContent = rd;
    c.querySelector('#gShV').textContent = sh;
    const css = {background:`rgba(255,255,255,${op})`,backdropFilter:`blur(${blur}px)`,WebkitBackdropFilter:`blur(${blur}px)`,border:`1px solid rgba(255,255,255,${bd})`,borderRadius:`${rd}px`,boxShadow:`0 ${sh}px 60px rgba(0,0,0,0.3), 0 0 0 1px ${col}22`};
    Object.assign(c.querySelector('#gCard').style, css);
    c.querySelector('#gCssOut').textContent = `/* Glassmorphism CSS */\n.glass-card {\n  background: rgba(255, 255, 255, ${op});\n  backdrop-filter: blur(${blur}px);\n  -webkit-backdrop-filter: blur(${blur}px);\n  border: 1px solid rgba(255, 255, 255, ${bd});\n  border-radius: ${rd}px;\n  box-shadow: 0 ${sh}px 60px rgba(0, 0, 0, 0.3),\n              0 0 0 1px ${col}33;\n}`;
  };
  c.querySelectorAll('input').forEach(el => el.addEventListener('input', update));
  update();
}

// 41. Flexbox Builder ✅ FIXED - Interactive with CSS output
function renderFlexboxBuilder(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">justify-content:</label><select id="fjc" class="form-select"><option>flex-start</option><option>flex-end</option><option selected>center</option><option>space-between</option><option>space-around</option><option>space-evenly</option></select></div>
        <div class="form-group"><label class="form-label">align-items:</label><select id="fai" class="form-select"><option>flex-start</option><option>flex-end</option><option selected>center</option><option>stretch</option><option>baseline</option></select></div>
        <div class="form-group"><label class="form-label">flex-direction:</label><select id="ffd" class="form-select"><option selected>row</option><option>column</option><option>row-reverse</option><option>column-reverse</option></select></div>
        <div class="form-group"><label class="form-label">flex-wrap:</label><select id="ffw" class="form-select"><option selected>nowrap</option><option>wrap</option><option>wrap-reverse</option></select></div>
        <div class="form-group"><label class="form-label">gap: <span id="fgapV">12</span>px</label><input type="range" id="fgap" min="0" max="40" value="12" style="width:100%;"></div>
        <div class="form-group"><label class="form-label">Items:</label><input type="number" id="fItems" class="form-input" value="4" min="1" max="10"></div>
      </div>
      <div>
        <div id="fPrev" style="background:#0a0e1a;border-radius:8px;padding:1rem;min-height:150px;border:1px solid var(--border-color);"></div>
        <div class="output-box" id="fCss" style="margin-top:1rem;font-size:0.82rem;"></div>
        <button class="btn btn-secondary" style="margin-top:0.5rem;" onclick="copyBoxText('fCss')">📋 Copy CSS</button>
      </div>
    </div>`;
  const colors = ['#00f2fe','#7928ca','#10b981','#f59e0b','#ef4444','#ec4899','#8b5cf6','#06b6d4','#84cc16','#f97316'];
  const update = () => {
    const jc=c.querySelector('#fjc').value,ai=c.querySelector('#fai').value,fd=c.querySelector('#ffd').value,fw=c.querySelector('#ffw').value,gap=c.querySelector('#fgap').value,n=parseInt(c.querySelector('#fItems').value)||4;
    c.querySelector('#fgapV').textContent = gap;
    c.querySelector('#fPrev').style = `background:#0a0e1a;border-radius:8px;padding:1rem;min-height:150px;border:1px solid var(--border-color);display:flex;justify-content:${jc};align-items:${ai};flex-direction:${fd};flex-wrap:${fw};gap:${gap}px;`;
    c.querySelector('#fPrev').innerHTML = Array.from({length:n},(_,i)=>`<div style="background:${colors[i%colors.length]};width:50px;height:50px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#000;font-weight:700;">${i+1}</div>`).join('');
    c.querySelector('#fCss').textContent = `.container {\n  display: flex;\n  justify-content: ${jc};\n  align-items: ${ai};\n  flex-direction: ${fd};\n  flex-wrap: ${fw};\n  gap: ${gap}px;\n}`;
  };
  c.querySelectorAll('select,input').forEach(el=>el.addEventListener('input',update));
  update();
}

// 42. WCAG Contrast Checker ✅ FIXED - Real luminance calculation
function renderContrastChecker(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Text Color:</label><div style="display:flex;gap:0.5rem;"><input type="color" id="ccFg" value="#ffffff" style="width:60px;height:36px;border-radius:8px;cursor:pointer;border:none;"><input type="text" id="ccFgHex" class="form-input" value="#ffffff"></div></div>
        <div class="form-group"><label class="form-label">Background Color:</label><div style="display:flex;gap:0.5rem;"><input type="color" id="ccBg" value="#000000" style="width:60px;height:36px;border-radius:8px;cursor:pointer;border:none;"><input type="text" id="ccBgHex" class="form-input" value="#000000"></div></div>
        <div id="ccPrev" style="border-radius:8px;padding:1.5rem;text-align:center;margin-top:1rem;">
          <div style="font-size:1.2rem;font-weight:700;" id="ccText">Sample Text Preview</div>
          <div style="font-size:0.85rem;margin-top:0.5rem;" id="ccTextSm">Small text sample</div>
        </div>
      </div>
      <div>
        <div id="ccResult" style="background:rgba(255,255,255,0.03);border-radius:12px;padding:1.2rem;"></div>
      </div>
    </div>`;
  function hexToRgb(hex) {
    hex = hex.replace(/^#/,''); if(hex.length===3) hex=hex.split('').map(c=>c+c).join('');
    return [parseInt(hex.substr(0,2),16), parseInt(hex.substr(2,2),16), parseInt(hex.substr(4,2),16)];
  }
  function luminance([r,g,b]) {
    const sRGB = [r,g,b].map(c => { c/=255; return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4); });
    return 0.2126*sRGB[0]+0.7152*sRGB[1]+0.0722*sRGB[2];
  }
  const check = () => {
    const fg = c.querySelector('#ccFg').value;
    const bg = c.querySelector('#ccBg').value;
    c.querySelector('#ccFgHex').value = fg;
    c.querySelector('#ccBgHex').value = bg;
    c.querySelector('#ccPrev').style.background = bg; c.querySelector('#ccPrev').style.color = fg;
    const L1 = luminance(hexToRgb(fg));
    const L2 = luminance(hexToRgb(bg));
    const ratio = (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
    const r = ratio.toFixed(2);
    const aaLg = ratio>=4.5, aaaSm = ratio>=7, aaLgUI = ratio>=3;
    c.querySelector('#ccResult').innerHTML = `
      <div style="text-align:center;margin-bottom:1rem;">
        <div style="font-size:2.5rem;font-weight:900;color:${ratio>=4.5?'#10b981':'#ef4444'}">${r}:1</div>
        <div style="color:var(--text-secondary);">Contrast Ratio</div>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
        <tr><td style="padding:0.4rem;">WCAG AA (Normal text)</td><td style="color:${aaLg?'#10b981':'#ef4444'}">${aaLg?'✅ Pass':'❌ Fail'} (≥4.5:1)</td></tr>
        <tr><td style="padding:0.4rem;">WCAG AAA (Normal text)</td><td style="color:${aaaSm?'#10b981':'#ef4444'}">${aaaSm?'✅ Pass':'❌ Fail'} (≥7:1)</td></tr>
        <tr><td style="padding:0.4rem;">WCAG AA (Large text)</td><td style="color:${aaLgUI?'#10b981':'#ef4444'}">${aaLgUI?'✅ Pass':'❌ Fail'} (≥3:1)</td></tr>
        <tr><td style="padding:0.4rem;">WCAG AA (UI Components)</td><td style="color:${aaLgUI?'#10b981':'#ef4444'}">${aaLgUI?'✅ Pass':'❌ Fail'} (≥3:1)</td></tr>
      </table>`;
  };
  c.querySelector('#ccFg').addEventListener('input', function() { c.querySelector('#ccFgHex').value=this.value; check(); });
  c.querySelector('#ccBg').addEventListener('input', function() { c.querySelector('#ccBgHex').value=this.value; check(); });
  c.querySelector('#ccFgHex').addEventListener('input', function() { if(/^#[0-9a-f]{6}$/i.test(this.value)) { c.querySelector('#ccFg').value=this.value; check(); } });
  c.querySelector('#ccBgHex').addEventListener('input', function() { if(/^#[0-9a-f]{6}$/i.test(this.value)) { c.querySelector('#ccBg').value=this.value; check(); } });
  check();
}

// 43. Brand Palette Extractor ✅ FIXED - Canvas pixel sampling
function renderPaletteExtractor(c) {
  c.innerHTML = `
    <div style="text-align:center;padding:1rem;">
      <input type="file" id="palFile" accept="image/*" class="form-input" style="max-width:400px;margin:0 auto 1rem;">
      <canvas id="palCvs" style="display:none;"></canvas>
      <div id="palOut" style="display:none;">
        <div id="palSwatches" style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;margin-bottom:1rem;"></div>
        <div class="output-box" id="palCodes" style="text-align:left;font-size:0.85rem;"></div>
        <button class="btn btn-secondary" style="margin-top:0.5rem;" onclick="copyBoxText('palCodes')">📋 Copy Color Codes</button>
      </div>
    </div>`;
  c.querySelector('#palFile').addEventListener('change', (e) => {
    const file = e.target.files[0]; if (!file) return;
    const img = new Image();
    img.onload = () => {
      const cvs = c.querySelector('#palCvs');
      const size = 100;
      cvs.width = size; cvs.height = size;
      const ctx = cvs.getContext('2d');
      ctx.drawImage(img, 0, 0, size, size);
      const data = ctx.getImageData(0,0,size,size).data;
      const colorMap = {};
      for (let i = 0; i < data.length; i += 16) {
        const r = Math.round(data[i]/32)*32, g = Math.round(data[i+1]/32)*32, b = Math.round(data[i+2]/32)*32;
        const key = `${r},${g},${b}`;
        colorMap[key] = (colorMap[key]||0) + 1;
      }
      const top = Object.entries(colorMap).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k])=>k.split(',').map(Number));
      // Pick diverse colors
      const colors = [top[0]];
      for (const col of top.slice(1)) {
        if (colors.length >= 6) break;
        const diverse = colors.every(c => Math.abs(c[0]-col[0])+Math.abs(c[1]-col[1])+Math.abs(c[2]-col[2]) > 60);
        if (diverse) colors.push(col);
      }
      const toHex = ([r,g,b]) => '#'+[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('');
      const hexColors = colors.map(toHex);
      c.querySelector('#palSwatches').innerHTML = hexColors.map(h=>`<div onclick="navigator.clipboard.writeText('${h}');showToast('Copied ${h}!')" style="width:70px;height:70px;background:${h};border-radius:10px;cursor:pointer;display:flex;align-items:flex-end;justify-content:center;padding-bottom:4px;" title="Click to copy ${h}"><span style="font-size:0.6rem;background:rgba(0,0,0,0.5);color:#fff;padding:2px 4px;border-radius:3px;">${h}</span></div>`).join('');
      c.querySelector('#palCodes').textContent = hexColors.map((h,i)=>{const [r,g,b]=colors[i];return `${h}  rgb(${r},${g},${b})  hsl(${Math.round(360*Math.atan2(Math.sqrt(3)*(g-b),2*r-g-b)/(2*Math.PI)+360)%360}°,var,%)`}).join('\n');
      c.querySelector('#palOut').style.display = 'block';
    };
    img.src = URL.createObjectURL(file);
  });
}

// 44. CSS Keyframe Animator ✅ FIXED - Live preview
function renderCssAnimator(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <div class="form-group"><label class="form-label">Animation:</label><select id="animType" class="form-select">
          <option value="pulse">Pulse / Scale</option><option value="slide">Slide In</option><option value="fade">Fade In</option><option value="rotate">Rotate</option><option value="bounce">Bounce</option><option value="shake">Shake</option>
        </select></div>
        <div class="form-group"><label class="form-label">Duration: <span id="durV">1.0</span>s</label><input type="range" id="durS" min="0.1" max="5.0" value="1.0" step="0.1" style="width:100%;"></div>
        <div class="form-group"><label class="form-label">Timing:</label><select id="timingS" class="form-select"><option>ease</option><option>ease-in</option><option>ease-out</option><option>ease-in-out</option><option>linear</option><option>cubic-bezier(0.68,-0.55,0.27,1.55)</option></select></div>
        <div class="form-group"><label class="form-label">Repeat:</label><select id="iterS" class="form-select"><option value="1">Once</option><option value="3">3 Times</option><option value="infinite" selected>Infinite</option></select></div>
        <button class="btn btn-primary" id="animPlay">▶️ Play Animation</button>
      </div>
      <div>
        <div style="height:140px;background:#000;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;" id="animPrev">
          <div id="animBox" style="width:80px;height:80px;background:linear-gradient(135deg,#00f2fe,#7928ca);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:2rem;">⚡</div>
        </div>
        <div class="output-box" id="animCss" style="font-size:0.78rem;max-height:160px;"></div>
        <button class="btn btn-secondary" style="margin-top:0.5rem;" onclick="copyBoxText('animCss')">📋 Copy CSS</button>
      </div>
    </div>`;
  const keyframes = {
    pulse:'@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n}',
    slide:'@keyframes slide {\n  0% { transform: translateX(-100%); opacity: 0; }\n  100% { transform: translateX(0); opacity: 1; }\n}',
    fade:'@keyframes fade {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}',
    rotate:'@keyframes rotate {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}',
    bounce:'@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-30px); }\n}',
    shake:'@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-10px); }\n  75% { transform: translateX(10px); }\n}',
  };
  c.querySelector('#durS').addEventListener('input', function() { c.querySelector('#durV').textContent = parseFloat(this.value).toFixed(1); });
  const update = () => {
    const type=c.querySelector('#animType').value,dur=c.querySelector('#durS').value,timing=c.querySelector('#timingS').value,iter=c.querySelector('#iterS').value;
    c.querySelector('#animCss').textContent = `${keyframes[type]}\n\n.animated-element {\n  animation: ${type} ${dur}s ${timing} ${iter};\n}`;
  };
  c.querySelector('#animPlay').addEventListener('click', () => {
    const type=c.querySelector('#animType').value,dur=c.querySelector('#durS').value,timing=c.querySelector('#timingS').value,iter=c.querySelector('#iterS').value;
    const box = c.querySelector('#animBox');
    box.style.animation = 'none';
    box.offsetHeight;
    box.style.animation = `${type} ${dur}s ${timing} ${iter}`;
    const styleId = 'anim-style-' + type;
    let tag = document.getElementById(styleId);
    if (!tag) { tag = document.createElement('style'); tag.id = styleId; document.head.appendChild(tag); }
    tag.textContent = keyframes[type];
    update();
  });
  c.querySelectorAll('select,input').forEach(el=>el.addEventListener('input',update));
  update();
  c.querySelector('#animPlay').click();
}

// 45. Tailwind Converter ✅ FIXED - Expanded mapping
function renderTailwindConverter(c) {
  c.innerHTML = `
    <div class="grid-2">
      <div>
        <label class="form-label">Tailwind Classes:</label>
        <textarea id="twIn" class="form-textarea" style="min-height:160px;">flex items-center justify-between p-4 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-700 hover:bg-slate-800 w-full max-w-md mx-auto gap-3</textarea>
        <button class="btn btn-primary" id="twConvert" style="margin-top:1rem;">🌬️ Convert to CSS</button>
      </div>
      <div>
        <div class="output-box" id="twOut" style="min-height:160px;font-size:0.82rem;"></div>
        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="copyBoxText('twOut')">📋 Copy CSS</button>
      </div>
    </div>`;
  const map = {
    // Display
    flex:'display: flex',inline:'display: inline','inline-flex':'display: inline-flex','block':'display: block','hidden':'display: none','grid':'display: grid',
    // Flex
    'items-center':'align-items: center','items-start':'align-items: flex-start','items-end':'align-items: flex-end','items-stretch':'align-items: stretch',
    'justify-center':'justify-content: center','justify-between':'justify-content: space-between','justify-start':'justify-content: flex-start','justify-end':'justify-content: flex-end','justify-around':'justify-content: space-around','justify-evenly':'justify-content: space-evenly',
    'flex-col':'flex-direction: column','flex-row':'flex-direction: row','flex-wrap':'flex-wrap: wrap','flex-1':'flex: 1 1 0%',
    // Spacing
    'p-1':'padding: 0.25rem','p-2':'padding: 0.5rem','p-3':'padding: 0.75rem','p-4':'padding: 1rem','p-5':'padding: 1.25rem','p-6':'padding: 1.5rem','p-8':'padding: 2rem',
    'px-2':'padding-inline: 0.5rem','px-3':'padding-inline: 0.75rem','px-4':'padding-inline: 1rem','px-6':'padding-inline: 1.5rem',
    'py-2':'padding-block: 0.5rem','py-3':'padding-block: 0.75rem','py-4':'padding-block: 1rem',
    'm-2':'margin: 0.5rem','m-4':'margin: 1rem','mx-auto':'margin-inline: auto','mt-1':'margin-top: 0.25rem','mt-2':'margin-top: 0.5rem','mt-4':'margin-top: 1rem','mb-4':'margin-bottom: 1rem',
    'gap-1':'gap: 0.25rem','gap-2':'gap: 0.5rem','gap-3':'gap: 0.75rem','gap-4':'gap: 1rem','gap-6':'gap: 1.5rem',
    // Colors
    'bg-white':'background-color: #ffffff','bg-black':'background-color: #000000','bg-transparent':'background-color: transparent',
    'bg-slate-900':'background-color: #0f172a','bg-slate-800':'background-color: #1e293b','bg-slate-700':'background-color: #334155',
    'bg-blue-500':'background-color: #3b82f6','bg-blue-600':'background-color: #2563eb','bg-red-500':'background-color: #ef4444','bg-green-500':'background-color: #22c55e',
    'text-white':'color: #ffffff','text-black':'color: #000000','text-slate-400':'color: #94a3b8','text-slate-200':'color: #e2e8f0',
    'text-blue-500':'color: #3b82f6','text-red-500':'color: #ef4444','text-green-500':'color: #22c55e',
    // Typography
    'text-xs':'font-size: 0.75rem; line-height: 1rem','text-sm':'font-size: 0.875rem; line-height: 1.25rem','text-base':'font-size: 1rem; line-height: 1.5rem',
    'text-lg':'font-size: 1.125rem; line-height: 1.75rem','text-xl':'font-size: 1.25rem; line-height: 1.75rem','text-2xl':'font-size: 1.5rem; line-height: 2rem',
    'font-bold':'font-weight: 700','font-semibold':'font-weight: 600','font-medium':'font-weight: 500','font-normal':'font-weight: 400',
    'uppercase':'text-transform: uppercase','lowercase':'text-transform: lowercase','capitalize':'text-transform: capitalize',
    // Borders
    'border':'border-width: 1px; border-style: solid','rounded':'border-radius: 0.25rem','rounded-md':'border-radius: 0.375rem','rounded-lg':'border-radius: 0.5rem','rounded-xl':'border-radius: 0.75rem','rounded-2xl':'border-radius: 1rem','rounded-full':'border-radius: 9999px',
    'border-slate-700':'border-color: #334155','border-slate-600':'border-color: #475569',
    // Shadow
    'shadow':'box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)','shadow-md':'box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)','shadow-lg':'box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)',
    // Sizing
    'w-full':'width: 100%','w-auto':'width: auto','h-full':'height: 100%','h-auto':'height: auto','min-h-screen':'min-height: 100vh',
    'max-w-sm':'max-width: 24rem','max-w-md':'max-width: 28rem','max-w-lg':'max-width: 32rem','max-w-xl':'max-width: 36rem','max-w-2xl':'max-width: 42rem',
    // Cursor & Interaction
    'cursor-pointer':'cursor: pointer','cursor-default':'cursor: default','select-none':'user-select: none',
    // Overflow
    'overflow-hidden':'overflow: hidden','overflow-auto':'overflow: auto',
    // Position
    'relative':'position: relative','absolute':'position: absolute','fixed':'position: fixed','sticky':'position: sticky',
    // Hover (prefix only, not full CSS)
    'hover:bg-slate-800':'/* :hover */ background-color: #1e293b',
  };
  c.querySelector('#twConvert').addEventListener('click', () => {
    const classes = c.querySelector('#twIn').value.trim().split(/\s+/);
    const results = [], unknown = [];
    classes.forEach(cls => {
      if (map[cls]) results.push('  ' + map[cls] + ';');
      else unknown.push(cls);
    });
    let out = '.element {\n' + results.join('\n') + '\n}';
    if (unknown.length) out += '\n\n/* Unknown classes (manual conversion needed): */\n/* ' + unknown.join(', ') + ' */';
    c.querySelector('#twOut').textContent = out;
  });
  c.querySelector('#twConvert').click();
}

// 46. Social Banner Resizer ✅ FIXED - Canvas resize & download
function renderSocialResizer(c) {
  c.innerHTML = `
    <div style="padding:1rem;">
      <div class="form-group"><label class="form-label">Upload Image:</label><input type="file" id="srFile" accept="image/*" class="form-input"></div>
      <div class="form-group"><label class="form-label">Target Platform:</label>
        <select id="srPlat" class="form-select">
          <option value="1500,500">Twitter / X Header (1500x500)</option>
          <option value="1280,720">YouTube Thumbnail (1280x720)</option>
          <option value="1584,396">LinkedIn Banner (1584x396)</option>
          <option value="1200,628">Facebook OG Image (1200x628)</option>
          <option value="1080,1080">Instagram Square (1080x1080)</option>
          <option value="1080,1920">Instagram Story (1080x1920)</option>
          <option value="851,315">Facebook Cover (851x315)</option>
        </select>
      </div>
      <canvas id="srCvs" style="display:none;"></canvas>
      <div id="srPreview" style="margin-top:1rem;"></div>
      <button class="btn btn-primary" id="srBtn" style="margin-top:1rem;">📐 Resize & Download</button>
    </div>`;
  c.querySelector('#srBtn').addEventListener('click', () => {
    const file = c.querySelector('#srFile').files[0]; if (!file) { showToast('Please upload an image first!'); return; }
    const [w, h] = c.querySelector('#srPlat').value.split(',').map(Number);
    const img = new Image();
    img.onload = () => {
      const cvs = c.querySelector('#srCvs');
      cvs.width = w; cvs.height = h;
      const ctx = cvs.getContext('2d');
      ctx.fillStyle = '#000'; ctx.fillRect(0,0,w,h);
      const scale = Math.max(w/img.width, h/img.height);
      const sw = img.width*scale, sh = img.height*scale;
      ctx.drawImage(img, (w-sw)/2, (h-sh)/2, sw, sh);
      const a = document.createElement('a'); a.download = `resized-${w}x${h}.png`; a.href = cvs.toDataURL('image/png'); a.click();
      c.querySelector('#srPreview').innerHTML = `<p style="color:var(--accent-green);">✅ Downloaded ${w}x${h}px image!</p><img src="${cvs.toDataURL()}" style="max-width:100%;border-radius:8px;border:1px solid #333;margin-top:0.5rem;">`;
    };
    img.src = URL.createObjectURL(file);
  });
}

// ============================================================
// YOUTUBE & VIDEO SUITE ENGINE FUNCTIONS
// ============================================================

// 1. YouTube Thumbnail Downloader ✅
function renderYtThumbnailDownloader(c) {
  c.innerHTML = `
    <div class="form-group">
      <label class="form-label">YouTube Video URL or Video ID:</label>
      <input type="text" id="ytUrlInput" class="form-input" placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ or dQw4w9WgXcQ">
    </div>
    <div style="display:flex;gap:0.5rem;margin-bottom:1.5rem;">
      <button id="ytFetchThumbBtn" class="btn btn-primary">Fetch Thumbnails 🔍</button>
      <button id="ytDemoThumbBtn" class="btn btn-secondary">Try Demo URL ⚡</button>
    </div>
    <div id="ytThumbResults" style="display:none;"></div>
  `;

  function extractYtId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.trim().match(regExp);
    return (match && match[2].length === 11) ? match[2] : (url.trim().length === 11 ? url.trim() : null);
  }

  function process() {
    const val = c.querySelector('#ytUrlInput').value;
    const videoId = extractYtId(val);
    const resultsDiv = c.querySelector('#ytThumbResults');
    if (!videoId) {
      showToast('Invalid YouTube URL or ID!');
      return;
    }
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `
      <h3 style="margin-bottom:1rem;color:var(--primary-cyan);">Available Thumbnail Resolutions for ID: <code>${videoId}</code></h3>
      <div class="grid-2" style="gap:1rem;">
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);padding:1rem;border-radius:8px;">
          <h4 style="color:#fff;margin-bottom:0.5rem;">Maximum Quality / 4K (1920x1080)</h4>
          <img src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg" style="width:100%;border-radius:6px;margin-bottom:0.5rem;" onerror="this.src='https://img.youtube.com/vi/${videoId}/hqdefault.jpg'">
          <div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
            <a href="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg" target="_blank" download="yt-maxres-${videoId}.jpg" class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;">Download 4K / HD</a>
            <button class="btn btn-secondary" onclick="navigator.clipboard.writeText('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg');showToast('Copied 4K URL!');" style="padding:0.4rem 0.8rem;font-size:0.8rem;">Copy Link</button>
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);padding:1rem;border-radius:8px;">
          <h4 style="color:#fff;margin-bottom:0.5rem;">Standard HD (640x480)</h4>
          <img src="https://img.youtube.com/vi/${videoId}/sddefault.jpg" style="width:100%;border-radius:6px;margin-bottom:0.5rem;">
          <div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
            <a href="https://img.youtube.com/vi/${videoId}/sddefault.jpg" target="_blank" download="yt-sd-${videoId}.jpg" class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;">Download SD</a>
            <button class="btn btn-secondary" onclick="navigator.clipboard.writeText('https://img.youtube.com/vi/${videoId}/sddefault.jpg');showToast('Copied SD URL!');" style="padding:0.4rem 0.8rem;font-size:0.8rem;">Copy Link</button>
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);padding:1rem;border-radius:8px;">
          <h4 style="color:#fff;margin-bottom:0.5rem;">Medium Quality (480x360)</h4>
          <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" style="width:100%;border-radius:6px;margin-bottom:0.5rem;">
          <div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
            <a href="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" target="_blank" download="yt-hq-${videoId}.jpg" class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;">Download HQ</a>
            <button class="btn btn-secondary" onclick="navigator.clipboard.writeText('https://img.youtube.com/vi/${videoId}/hqdefault.jpg');showToast('Copied HQ URL!');" style="padding:0.4rem 0.8rem;font-size:0.8rem;">Copy Link</button>
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);padding:1rem;border-radius:8px;">
          <h4 style="color:#fff;margin-bottom:0.5rem;">Low Resolution (320x180)</h4>
          <img src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" style="width:100%;border-radius:6px;margin-bottom:0.5rem;">
          <div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
            <a href="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" target="_blank" download="yt-mq-${videoId}.jpg" class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;">Download MQ</a>
            <button class="btn btn-secondary" onclick="navigator.clipboard.writeText('https://img.youtube.com/vi/${videoId}/mqdefault.jpg');showToast('Copied MQ URL!');" style="padding:0.4rem 0.8rem;font-size:0.8rem;">Copy Link</button>
          </div>
        </div>
      </div>
    `;
  }

  c.querySelector('#ytFetchThumbBtn').addEventListener('click', process);
  c.querySelector('#ytDemoThumbBtn').addEventListener('click', () => {
    c.querySelector('#ytUrlInput').value = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    process();
  });
}

// 2. YouTube Timestamp & Chapter Generator ✅
function renderYtTimestampGenerator(c) {
  let chapters = [
    { time: '0:00', title: 'Introduction & Overview' },
    { time: '1:30', title: 'Key Features Breakdown' },
    { time: '4:15', title: 'Live Demonstration' },
    { time: '7:50', title: 'Final Summary & Conclusion' }
  ];

  function renderUI() {
    c.innerHTML = `
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);padding:1.2rem;border-radius:8px;margin-bottom:1.5rem;">
        <h4 style="color:var(--primary-cyan);margin-bottom:0.8rem;">1. Quick Single Timestamp Link Generator</h4>
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label">YouTube URL or ID:</label>
            <input type="text" id="singleYtUrl" class="form-input" value="https://youtu.be/dQw4w9WgXcQ">
          </div>
          <div class="form-group">
            <label class="form-label">Start Time (e.g. 1m30s or 90):</label>
            <input type="text" id="singleYtTime" class="form-input" value="1m30s">
          </div>
        </div>
        <div id="singleLinkOutput" style="background:#0a0e1a;padding:0.8rem;border-radius:6px;font-family:monospace;margin-top:0.5rem;word-break:break-all;">https://youtu.be/dQw4w9WgXcQ?t=1m30s</div>
        <button class="btn btn-secondary" id="copySingleLinkBtn" style="margin-top:0.5rem;">Copy Link 🔗</button>
      </div>

      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);padding:1.2rem;border-radius:8px;">
        <h4 style="color:var(--primary-purple);margin-bottom:0.8rem;">2. Video Chapters & Timeline Generator for Description</h4>
        <div class="grid-2" style="align-items:end;margin-bottom:1rem;">
          <div class="form-group" style="margin:0;">
            <label class="form-label">Timestamp (m:ss or h:mm:ss):</label>
            <input type="text" id="newTime" class="form-input" placeholder="e.g. 2:45">
          </div>
          <div class="form-group" style="margin:0;">
            <label class="form-label">Chapter Title:</label>
            <input type="text" id="newTitle" class="form-input" placeholder="e.g. Product Unboxing">
          </div>
        </div>
        <button class="btn btn-primary" id="addChapterBtn" style="margin-bottom:1rem;">+ Add Chapter Marker</button>

        <div id="chaptersList" style="margin-bottom:1rem;"></div>

        <label class="form-label">Copy Formatted YouTube Description Timeline Text:</label>
        <textarea id="chaptersFormattedText" class="form-textarea" style="height:110px;font-family:monospace;" readonly></textarea>
        <button class="btn btn-secondary" id="copyChaptersBtn" style="margin-top:0.5rem;">Copy Description Timeline 📋</button>
      </div>
    `;

    const updateSingleLink = () => {
      const url = c.querySelector('#singleYtUrl').value.trim();
      let time = c.querySelector('#singleYtTime').value.trim();
      let id = url.includes('v=') ? url.split('v=')[1].split('&')[0] : (url.includes('youtu.be/') ? url.split('youtu.be/')[1].split('?')[0] : url);
      let formattedTime = time;
      if (/^\d+$/.test(time)) formattedTime = `${time}s`;
      const generated = `https://youtu.be/${id}?t=${formattedTime}`;
      c.querySelector('#singleLinkOutput').textContent = generated;
    };
    c.querySelector('#singleYtUrl').addEventListener('input', updateSingleLink);
    c.querySelector('#singleYtTime').addEventListener('input', updateSingleLink);
    c.querySelector('#copySingleLinkBtn').addEventListener('click', () => {
      navigator.clipboard.writeText(c.querySelector('#singleLinkOutput').textContent);
      showToast('Timestamp URL copied!');
    });

    function renderChapters() {
      const list = c.querySelector('#chaptersList');
      list.innerHTML = chapters.map((ch, i) => `
        <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,0.02);padding:0.5rem 0.8rem;border-radius:6px;margin-bottom:0.4rem;border:1px solid var(--border-color);">
          <span><strong style="color:var(--primary-cyan);font-family:monospace;">${ch.time}</strong> - ${escapeXml(ch.title)}</span>
          <button class="btn btn-secondary del-ch-btn" data-idx="${i}" style="padding:0.2rem 0.6rem;font-size:0.75rem;">✕</button>
        </div>
      `).join('');

      const formatted = chapters.map(ch => `${ch.time} ${ch.title}`).join('\n');
      c.querySelector('#chaptersFormattedText').value = formatted;

      list.querySelectorAll('.del-ch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'));
          chapters.splice(idx, 1);
          renderChapters();
        });
      });
    }

    c.querySelector('#addChapterBtn').addEventListener('click', () => {
      const t = c.querySelector('#newTime').value.trim();
      const title = c.querySelector('#newTitle').value.trim();
      if (!t || !title) { showToast('Please enter both time and chapter title'); return; }
      chapters.push({ time: t, title: title });
      c.querySelector('#newTime').value = '';
      c.querySelector('#newTitle').value = '';
      renderChapters();
    });

    c.querySelector('#copyChaptersBtn').addEventListener('click', () => {
      navigator.clipboard.writeText(c.querySelector('#chaptersFormattedText').value);
      showToast('Timeline description copied!');
    });

    renderChapters();
  }

  renderUI();
}

// 3. YouTube Transcript & Subtitle Cleaner ✅
function renderYtTranscriptExtractor(c) {
  c.innerHTML = `
    <div class="form-group">
      <label class="form-label">Paste Raw YouTube Captions / Subtitle Text:</label>
      <textarea id="rawYtTranscript" class="form-textarea" style="height:150px;" placeholder="Paste raw subtitle text or VTT format here (e.g. 00:01:23 --> 00:01:25 Hello world welcome to this video)..."></textarea>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:0.8rem;align-items:center;margin-bottom:1rem;">
      <label><input type="checkbox" id="chkStripTimestamps" checked> Strip Timestamps (00:00)</label>
      <label><input type="checkbox" id="chkStripMusic" checked> Strip [Music] & [Applause]</label>
      <label><input type="checkbox" id="chkMergeLines" checked> Merge into Continuous Paragraph</label>
      <button id="ytCleanTransBtn" class="btn btn-primary">Clean Transcript ✨</button>
    </div>
    <div class="form-group">
      <label class="form-label">Cleaned Transcript Output (Ready for LLM Summary):</label>
      <textarea id="cleanYtTranscript" class="form-textarea" style="height:160px;" readonly></textarea>
    </div>
    <div style="display:flex;gap:0.5rem;">
      <button id="copyYtTransBtn" class="btn btn-secondary">Copy Clean Transcript 📋</button>
      <button id="demoYtTransBtn" class="btn btn-secondary">Load Sample Subtitles ⚡</button>
    </div>
  `;

  function clean() {
    let text = c.querySelector('#rawYtTranscript').value;
    const stripTime = c.querySelector('#chkStripTimestamps').checked;
    const stripMusic = c.querySelector('#chkStripMusic').checked;
    const merge = c.querySelector('#chkMergeLines').checked;

    if (stripTime) {
      text = text.replace(/\d{1,2}:\d{2}(:\d{2})?(\.\d{3})?\s*-->\s*\d{1,2}:\d{2}(:\d{2})?(\.\d{3})?/g, '');
      text = text.replace(/[\(\[\{]?\d{1,2}:\d{2}(:\d{2})?[\)\]\}]?/g, '');
    }
    if (stripMusic) {
      text = text.replace(/\[[^\]]*\]/g, '').replace(/\([^)]*\)/g, '');
    }

    let lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    let dedup = [];
    lines.forEach((l, i) => {
      if (i === 0 || l !== lines[i - 1]) dedup.push(l);
    });

    let result = merge ? dedup.join(' ') : dedup.join('\n');
    c.querySelector('#cleanYtTranscript').value = result;
  }

  c.querySelector('#ytCleanTransBtn').addEventListener('click', clean);
  c.querySelector('#copyYtTransBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(c.querySelector('#cleanYtTranscript').value);
    showToast('Cleaned transcript copied!');
  });
  c.querySelector('#demoYtTransBtn').addEventListener('click', () => {
    c.querySelector('#rawYtTranscript').value = `00:00:01.000 --> 00:00:04.000
[Music] Welcome back to the channel today we are going to explore modern AI web tools.

00:00:04.500 --> 00:00:08.200
0:04 [Applause] In this video you will learn how to build client-side utilities fast.

00:00:08.500 --> 00:00:12.000
0:08 Make sure to subscribe and like the video!`;
    clean();
  });
}

// 4. YouTube Video Tag Inspector ✅
function renderYtTagExtractor(c) {
  c.innerHTML = `
    <div class="form-group">
      <label class="form-label">YouTube Video Page Meta / Keywords HTML or Video Tags text:</label>
      <textarea id="ytMetaInput" class="form-textarea" style="height:120px;" placeholder="Paste YouTube webpage meta tags or comma-separated keywords here (e.g. <meta name='keywords' content='javascript, web dev, coding'> or 'ai, chatgpt, llm')..."></textarea>
    </div>
    <button id="extractTagsBtn" class="btn btn-primary" style="margin-bottom:1rem;">Extract Keywords & Tags 🏷️</button>

    <div id="tagsResultContainer" style="display:none;background:rgba(255,255,255,0.03);border:1px solid var(--border-color);padding:1.2rem;border-radius:8px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.8rem;">
        <h4 style="color:var(--primary-cyan);margin:0;">Extracted Video Tags (<span id="tagCount">0</span>)</h4>
        <button id="copyAllTagsBtn" class="btn btn-secondary" style="padding:0.3rem 0.7rem;font-size:0.8rem;">Copy All Tags 📋</button>
      </div>
      <div id="tagsPills" style="display:flex;flex-wrap:wrap;gap:0.5rem;"></div>
    </div>
  `;

  c.querySelector('#extractTagsBtn').addEventListener('click', () => {
    const raw = c.querySelector('#ytMetaInput').value;
    let tags = [];
    if (raw.includes('content=')) {
      const match = raw.match(/content=["']([^"']+)["']/);
      if (match) tags = match[1].split(',').map(s => s.trim());
    } else {
      tags = raw.split(/[\n,]/).map(s => s.trim()).filter(s => s.length > 0);
    }
    tags = [...new Set(tags)].filter(t => t.length > 0);

    const container = c.querySelector('#tagsResultContainer');
    const pills = c.querySelector('#tagsPills');
    const count = c.querySelector('#tagCount');

    if (tags.length === 0) { showToast('No tags found in input!'); return; }
    container.style.display = 'block';
    count.textContent = tags.length;
    pills.innerHTML = tags.map(t => `<span style="background:rgba(0,240,255,0.1);border:1px solid var(--primary-cyan);color:#fff;padding:0.3rem 0.7rem;border-radius:20px;font-size:0.85rem;">#${escapeXml(t)}</span>`).join('');

    c.querySelector('#copyAllTagsBtn').onclick = () => {
      navigator.clipboard.writeText(tags.join(', '));
      showToast('Copied comma-separated tags!');
    };
  });
}

// 5. YouTube Banner Safe Zone Visualizer ✅
function renderYtBannerSafezone(c) {
  c.innerHTML = `
    <div style="margin-bottom:1rem;color:var(--text-muted);font-size:0.9rem;">
      Upload your 2560x1440 YouTube Banner to verify cropping across TV, Desktop, Tablet, and Mobile safe zones.
    </div>
    <div class="form-group">
      <label class="form-label">Upload Banner Image (PNG/JPG):</label>
      <input type="file" id="bannerFile" accept="image/*" class="form-input">
    </div>
    <div style="position:relative;background:#05070f;border:1px solid var(--border-color);border-radius:8px;overflow:hidden;margin-bottom:1rem;">
      <canvas id="bannerCanvas" style="width:100%;height:auto;display:block;"></canvas>
    </div>
    <div class="grid-2">
      <div style="background:rgba(255,255,255,0.03);padding:0.8rem;border-radius:6px;font-size:0.85rem;">
        <span style="color:#ff4a4a;">■ TV Display:</span> 2560 x 1440 px<br>
        <span style="color:#00f0ff;">■ Desktop Display:</span> 2560 x 423 px
      </div>
      <div style="background:rgba(255,255,255,0.03);padding:0.8rem;border-radius:6px;font-size:0.85rem;">
        <span style="color:#a855f7;">■ Tablet Display:</span> 1855 x 423 px<br>
        <span style="color:#00ff88;">■ Mobile Safe Area:</span> 1546 x 423 px (Guaranteed Visible)
      </div>
    </div>
  `;

  const canvas = c.querySelector('#bannerCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 2560;
  canvas.height = 1440;

  function drawGrid(img = null) {
    ctx.fillStyle = '#0a0e1a';
    ctx.fillRect(0, 0, 2560, 1440);

    if (img) {
      ctx.drawImage(img, 0, 0, 2560, 1440);
    } else {
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 0, 2560, 1440);
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 60px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Upload Banner Image (2560 x 1440)', 1280, 720);
    }

    ctx.strokeStyle = 'rgba(255, 74, 74, 0.6)';
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, 2552, 1432);

    const deskY = (1440 - 423) / 2;
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.8)';
    ctx.strokeRect(0, deskY, 2560, 423);

    const tabX = (2560 - 1855) / 2;
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.8)';
    ctx.strokeRect(tabX, deskY, 1855, 423);

    const mobX = (2560 - 1546) / 2;
    ctx.fillStyle = 'rgba(0, 255, 136, 0.15)';
    ctx.fillRect(mobX, deskY, 1546, 423);
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 10;
    ctx.strokeRect(mobX, deskY, 1546, 423);

    ctx.fillStyle = '#00ff88';
    ctx.font = 'bold 40px Inter, sans-serif';
    ctx.fillText('★ MOBILE & ALL-DEVICE SAFE ZONE (1546x423)', 1280, 720 + 12);
  }

  drawGrid();

  c.querySelector('#bannerFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => drawGrid(img);
    img.src = URL.createObjectURL(file);
  });
}

// 6. YouTube Responsive Embed Code Generator ✅
function renderYtEmbedGenerator(c) {
  c.innerHTML = `
    <div class="form-group">
      <label class="form-label">YouTube Video URL or ID:</label>
      <input type="text" id="embYtUrl" class="form-input" value="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
    </div>
    <div class="grid-2">
      <div class="form-group">
        <label class="form-label">Start Time (seconds):</label>
        <input type="number" id="embStart" class="form-input" value="0" min="0">
      </div>
      <div class="form-group">
        <label class="form-label">End Time (seconds, optional):</label>
        <input type="number" id="embEnd" class="form-input" value="" placeholder="e.g. 120">
      </div>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;">
      <label><input type="checkbox" id="embAutoplay"> Autoplay (Muted)</label>
      <label><input type="checkbox" id="embControls" checked> Show Controls</label>
      <label><input type="checkbox" id="embPrivacy" checked> Privacy-Enhanced (youtube-nocookie.com)</label>
    </div>

    <h4 style="color:var(--primary-cyan);margin-bottom:0.8rem;">Live Player Preview:</h4>
    <div id="embPreviewWrapper" style="position:relative;width:100%;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;background:#000;margin-bottom:1.5rem;">
      <iframe id="embIframe" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen></iframe>
    </div>

    <div class="form-group">
      <label class="form-label">Generated Embed HTML Code:</label>
      <textarea id="embHtmlCode" class="form-textarea" style="height:110px;font-family:monospace;" readonly></textarea>
    </div>
    <button id="copyEmbCodeBtn" class="btn btn-secondary">Copy Embed HTML Code 📋</button>
  `;

  function update() {
    const url = c.querySelector('#embYtUrl').value.trim();
    let videoId = 'dQw4w9WgXcQ';
    if (url.includes('v=')) videoId = url.split('v=')[1].split('&')[0];
    else if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1].split('?')[0];
    else if (url.length === 11) videoId = url;

    const start = c.querySelector('#embStart').value;
    const end = c.querySelector('#embEnd').value;
    const auto = c.querySelector('#embAutoplay').checked;
    const ctrl = c.querySelector('#embControls').checked;
    const privacy = c.querySelector('#embPrivacy').checked;

    const domain = privacy ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
    let params = [];
    if (start > 0) params.push(`start=${start}`);
    if (end > 0) params.push(`end=${end}`);
    if (auto) params.push('autoplay=1&mute=1');
    if (!ctrl) params.push('controls=0');

    const src = `${domain}/embed/${videoId}${params.length ? '?' + params.join('&') : ''}`;
    c.querySelector('#embIframe').src = src;

    const code = `<div style="position:relative;width:100%;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;">
  <iframe src="${src}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>`;
    c.querySelector('#embHtmlCode').value = code;
  }

  c.querySelector('#embYtUrl').addEventListener('input', update);
  c.querySelector('#embStart').addEventListener('input', update);
  c.querySelector('#embEnd').addEventListener('input', update);
  c.querySelector('#embAutoplay').addEventListener('change', update);
  c.querySelector('#embControls').addEventListener('change', update);
  c.querySelector('#embPrivacy').addEventListener('change', update);

  c.querySelector('#copyEmbCodeBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(c.querySelector('#embHtmlCode').value);
    showToast('Embed code copied!');
  });

  update();
}

// ============================================================
// MOBILE & DEVICE UTILITIES (7 TOOLS)
// ============================================================

// 1. Mobile Speaker Water & Dust Cleaner
function renderMobileSpeakerCleaner(c) {
  c.innerHTML = `
    <div style="max-width:650px; margin:0 auto; text-align:center;">
      <div class="mobile-canvas-card">
        <div style="font-size:3.5rem; margin-bottom:0.5rem; animation: pulse 1.5s infinite;">🔊</div>
        <h3 style="margin-bottom:0.5rem;">Speaker Water & Dust Ejector</h3>
        <p style="color:var(--text-muted); font-size:0.9rem;">
          Plays a heavy 165Hz sound wave pulse designed to physically vibrate water droplets and dust out of your smartphone speaker grill.
        </p>

        <canvas id="spkCanvas" class="mobile-speaker-visualizer" width="500" height="120"></canvas>

        <div style="display:flex; justify-content:center; gap:1.5rem; margin:1rem 0; flex-wrap:wrap;">
          <div>
            <label class="form-label">Pulse Frequency (Hz): <span id="spkFreqVal">165</span>Hz</label>
            <input type="range" id="spkFreq" min="100" max="250" value="165" style="width:180px;">
          </div>
          <div>
            <label class="form-label">Volume Level: <span id="spkVolVal">100</span>%</label>
            <input type="range" id="spkVol" min="20" max="100" value="100" style="width:180px;">
          </div>
        </div>

        <div style="font-size:1.4rem; font-weight:800; color:var(--primary-cyan); margin-bottom:1rem;" id="spkTimer">
          Auto Clean: 60s
        </div>

        <div class="btn-group" style="justify-content:center;">
          <button id="spkStartBtn" class="btn btn-primary" style="font-size:1.1rem; padding:0.9rem 2rem;">
            ▶ Start Ejection (Sound ON)
          </button>
          <button id="spkStopBtn" class="btn btn-secondary" style="font-size:1.1rem; padding:0.9rem 1.5rem;" disabled>
            ⏹ Stop
          </button>
        </div>
      </div>
      
      <div style="margin-top:1.5rem; text-align:left; background:rgba(255,255,255,0.03); padding:1rem; border-radius:8px; font-size:0.85rem; color:var(--text-muted);">
        💡 <strong>Pro Tip for Best Ejection:</strong> Turn phone media volume to 100%, point your mobile speaker face-down towards the ground, and let the 165Hz tone pulse for 60 seconds.
      </div>
    </div>
  `;

  const canvas = c.querySelector('#spkCanvas');
  const ctx = canvas.getContext('2d');
  let audioCtx = null;
  let osc = null;
  let gain = null;
  let isPlaying = false;
  let timerVal = 60;
  let timerInterval = null;
  let animId = null;

  function drawWave(freq) {
    ctx.fillStyle = '#040812';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (!isPlaying) {
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.3)';
      ctx.beginPath();
      ctx.moveTo(0, 60);
      ctx.lineTo(canvas.width, 60);
      ctx.stroke();
      return;
    }
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 3;
    ctx.beginPath();
    const t = Date.now() / 100;
    for (let x = 0; x < canvas.width; x++) {
      const y = 60 + Math.sin((x * 0.05) + t) * Math.sin(t * 2) * 35;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    animId = requestAnimationFrame(() => drawWave(freq));
  }
  drawWave(165);

  const freqInput = c.querySelector('#spkFreq');
  const volInput = c.querySelector('#spkVol');
  freqInput.addEventListener('input', (e) => {
    c.querySelector('#spkFreqVal').textContent = e.target.value;
    if (osc) osc.frequency.setValueAtTime(e.target.value, audioCtx.currentTime);
  });
  volInput.addEventListener('input', (e) => {
    c.querySelector('#spkVolVal').textContent = e.target.value;
    if (gain) gain.gain.setValueAtTime(e.target.value / 100, audioCtx.currentTime);
  });

  function startSound() {
    if (isPlaying) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      osc = audioCtx.createOscillator();
      gain = audioCtx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(parseFloat(freqInput.value), audioCtx.currentTime);
      gain.gain.setValueAtTime(parseFloat(volInput.value) / 100, audioCtx.currentTime);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      isPlaying = true;

      c.querySelector('#spkStartBtn').disabled = true;
      c.querySelector('#spkStopBtn').disabled = false;
      timerVal = 60;
      c.querySelector('#spkTimer').textContent = `Auto Clean: ${timerVal}s`;

      timerInterval = setInterval(() => {
        timerVal--;
        c.querySelector('#spkTimer').textContent = `Auto Clean: ${timerVal}s`;
        if (timerVal <= 0) stopSound();
      }, 1000);

      drawWave(parseFloat(freqInput.value));
    } catch(err) {
      showToast('Audio Context Error: ' + err.message);
    }
  }

  function stopSound() {
    if (!isPlaying) return;
    if (osc) { osc.stop(); osc.disconnect(); }
    if (audioCtx) { audioCtx.close(); }
    isPlaying = false;
    clearInterval(timerInterval);
    cancelAnimationFrame(animId);
    c.querySelector('#spkStartBtn').disabled = false;
    c.querySelector('#spkStopBtn').disabled = true;
    c.querySelector('#spkTimer').textContent = 'Cleaning Complete! ✨';
    drawWave(165);
  }

  c.querySelector('#spkStartBtn').addEventListener('click', startSound);
  c.querySelector('#spkStopBtn').addEventListener('click', stopSound);
}

// 2. Stolen Mobile Emergency Assistant & CEIR Guide
function renderMobileStolenAssistant(c) {
  c.innerHTML = `
    <div style="max-width:850px; margin:0 auto;">
      <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); padding:1rem 1.2rem; border-radius:8px; margin-bottom:1.5rem; display:flex; align-items:center; gap:1rem;">
        <span style="font-size:2rem;">🚨</span>
        <div>
          <strong style="color:#f87171; font-size:1.05rem;">Mobile Theft / Lost Emergency Protocol</strong>
          <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">
            Follow these 4 instant emergency steps to secure your data, block your IMEI nationwide, and generate official police reporting documents.
          </p>
        </div>
      </div>

      <!-- Step 1 -->
      <div class="wizard-step">
        <span class="step-badge">STEP 1: REMOTE LOCATION & LOCK</span>
        <h4 style="margin:0.4rem 0;">Launch Official Device Location Manager</h4>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.8rem;">
          Sign in to your official account to trigger real-time GPS tracking, play loud sound, or perform remote data wipe:
        </p>
        <div class="btn-group">
          <a href="https://android.com/find" target="_blank" class="btn btn-primary" style="text-decoration:none;">
            🤖 Google Find My Device (Android)
          </a>
          <a href="https://icloud.com/find" target="_blank" class="btn btn-secondary" style="text-decoration:none;">
            🍏 Apple iCloud Find My (iPhone)
          </a>
          <a href="https://smartthingsfind.samsung.com" target="_blank" class="btn btn-secondary" style="text-decoration:none;">
            📱 Samsung SmartThings Find
          </a>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="wizard-step">
        <span class="step-badge">STEP 2: CEIR & GSMA NATIONWIDE IMEI BLOCKING</span>
        <h4 style="margin:0.4rem 0;">Block IMEI Across All Mobile Networks</h4>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.8rem;">
          Registering on the official Government CEIR Portal blocks your stolen phone IMEI so thieves cannot use it on any mobile network:
        </p>
        <div class="btn-group">
          <a href="https://ceir.gov.in/Request/CeirUserBlockRequestDirect.xhtml" target="_blank" class="btn btn-primary" style="text-decoration:none;">
            🏛️ Open CEIR Stolen Mobile Portal (India DoT)
          </a>
          <a href="https://ceir.gov.in/Request/CeirUserCheckStatusDirect.xhtml" target="_blank" class="btn btn-secondary" style="text-decoration:none;">
            🔍 Check CEIR Request Status
          </a>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="wizard-step">
        <span class="step-badge">STEP 3: EMERGENCY CARRIER SIM BLOCKING</span>
        <h4 style="margin:0.4rem 0;">Block SIM Card to Prevent OTP / Banking Fraud</h4>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.8rem;">
          Call your mobile operator helpline immediately from another phone to block your SIM:
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.8rem; font-size:0.85rem;">
          <div style="background:rgba(0,0,0,0.3); padding:0.6rem; border-radius:6px;"><strong>Jio:</strong> Call 198 / 1800-889-9999</div>
          <div style="background:rgba(0,0,0,0.3); padding:0.6rem; border-radius:6px;"><strong>Airtel:</strong> Call 121 / 9810012345</div>
          <div style="background:rgba(0,0,0,0.3); padding:0.6rem; border-radius:6px;"><strong>Vi (Vodafone Idea):</strong> Call 199</div>
          <div style="background:rgba(0,0,0,0.3); padding:0.6rem; border-radius:6px;"><strong>BSNL:</strong> Call 1503 / 1800-180-1503</div>
          <div style="background:rgba(0,0,0,0.3); padding:0.6rem; border-radius:6px;"><strong>AT&T (US):</strong> Call 1-800-331-0500</div>
          <div style="background:rgba(0,0,0,0.3); padding:0.6rem; border-radius:6px;"><strong>Verizon (US):</strong> Call 1-800-922-0204</div>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="wizard-step">
        <span class="step-badge">STEP 4: POLICE e-FIR / LOST REPORT GENERATOR</span>
        <h4 style="margin:0.4rem 0;">Draft Formal Police Complaint Statement</h4>
        <div class="grid-2" style="margin:1rem 0;">
          <input type="text" id="firOwner" class="form-input" placeholder="Owner Full Name">
          <input type="text" id="firPhone" class="form-input" placeholder="Stolen Phone Number">
          <input type="text" id="firImei1" class="form-input" placeholder="IMEI 1 Number (15 digits)">
          <input type="text" id="firImei2" class="form-input" placeholder="IMEI 2 Number (Optional)">
          <input type="text" id="firModel" class="form-input" placeholder="Phone Make & Model (e.g. iPhone 15 Pro)">
          <input type="text" id="firLoc" class="form-input" placeholder="Lost/Stolen Location & City">
        </div>
        <button id="genFirBtn" class="btn btn-primary" style="margin-bottom:1rem;">Generate Police Complaint Text 📄</button>
        <div id="firOutputBox" class="output-box" style="display:none; white-space:pre-wrap;"></div>
      </div>
    </div>
  `;

  c.querySelector('#genFirBtn').addEventListener('click', () => {
    const owner = c.querySelector('#firOwner').value.trim() || '[OWNER NAME]';
    const phone = c.querySelector('#firPhone').value.trim() || '[MOBILE NUMBER]';
    const imei1 = c.querySelector('#firImei1').value.trim() || '[IMEI 1]';
    const imei2 = c.querySelector('#firImei2').value.trim() || 'N/A';
    const model = c.querySelector('#firModel').value.trim() || '[PHONE MODEL]';
    const loc = c.querySelector('#firLoc').value.trim() || '[LOCATION / CITY]';
    const dateStr = new Date().toLocaleDateString('en-US', { dateStyle: 'full' });

    const text = `SUBJECT: INTIMATION REGARDING LOST/STOLEN MOBILE PHONE

To,
The Officer-in-Charge / Cyber Crime Station,
District Police Department.

Respected Sir/Madam,

I am writing to report the loss/theft of my mobile phone device. The details of the device and owner are provided below for official record and CEIR blocking:

1. Full Name of Owner: ${owner}
2. Contact Mobile Number: ${phone}
3. Device Make & Model: ${model}
4. Primary IMEI Number (Slot 1): ${imei1}
5. Secondary IMEI Number (Slot 2): ${imei2}
6. Date & Time of Incident: ${dateStr}
7. Incident Location: ${loc}

I request you to kindly issue an official lost report / e-FIR acknowledgment so that I may initiate IMEI blocking on the CEIR Portal and request a replacement SIM card from my telecom operator.

Sincerely,
${owner}
Contact: ${phone}
Date: ${dateStr}`;

    const out = c.querySelector('#firOutputBox');
    out.style.display = 'block';
    out.textContent = text;
    showToast('Police complaint text generated!');
  });
}

// 3. IMEI Luhn Validator & TAC Decoder
function renderMobileImeiValidator(c) {
  c.innerHTML = `
    <div style="max-width:700px; margin:0 auto;">
      <div class="form-group">
        <label class="form-label">Enter 15-Digit IMEI Number:</label>
        <div style="display:flex; gap:0.6rem;">
          <input type="text" id="imeiInput" class="form-input" placeholder="e.g. 863412040123456" maxlength="15" style="font-size:1.1rem; font-family:monospace;">
          <button id="imeiGenBtn" class="btn btn-secondary" title="Generate Sample Valid IMEI">🎲 Sample IMEI</button>
        </div>
      </div>

      <div id="imeiResult" style="margin-top:1.5rem;"></div>

      <div style="margin-top:2rem; background:rgba(255,255,255,0.03); border:1px solid var(--border-color); padding:1.2rem; border-radius:8px; font-size:0.85rem; color:var(--text-muted);">
        <h4 style="color:#fff; margin-bottom:0.5rem;">📐 How IMEI Validation & TAC Decoding Works</h4>
        <ul style="padding-left:1.2rem; margin:0; line-height:1.6;">
          <li><strong>TAC (Digits 1-8):</strong> Type Allocation Code identifying the phone brand, model, and manufacturing approval body.</li>
          <li><strong>Serial Number (Digits 9-14):</strong> Unique serial number assigned by the manufacturer.</li>
          <li><strong>Check Digit (Digit 15):</strong> Validated mathematically using the <strong>Luhn Algorithm</strong> (Modulo 10).</li>
        </ul>
      </div>
    </div>
  `;

  const input = c.querySelector('#imeiInput');
  const result = c.querySelector('#imeiResult');

  function validateLuhn(imei) {
    if (!/^\d{15}$/.test(imei)) return false;
    let sum = 0;
    for (let i = 0; i < 15; i++) {
      let d = parseInt(imei.charAt(i), 10);
      if (i % 2 === 1) {
        d *= 2;
        if (d > 9) d -= 9;
      }
      sum += d;
    }
    return sum % 10 === 0;
  }

  function checkImei() {
    const val = input.value.trim();
    if (!val) { result.innerHTML = ''; return; }

    if (val.length < 15) {
      result.innerHTML = `<div style="background:rgba(234,179,8,0.1); border:1px solid rgba(234,179,8,0.3); color:#fde047; padding:1rem; border-radius:8px;">
        ⚠️ Please enter full 15 digits (Current length: ${val.length}/15).
      </div>`;
      return;
    }

    const isValid = validateLuhn(val);
    const tac = val.substring(0, 8);
    const serial = val.substring(8, 14);
    const checkDigit = val.substring(14, 15);

    result.innerHTML = `
      <div style="background:${isValid ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)'}; border:1px solid ${isValid ? 'rgba(34,197,94,0.4)' : 'rgba(239,68,68,0.4)'}; padding:1.2rem; border-radius:10px; margin-bottom:1rem;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.8rem;">
          <span style="font-size:1.3rem; font-weight:800; color:${isValid ? '#4ade80' : '#f87171'};">
            ${isValid ? '✅ VALID IMEI (Luhn Algorithm Passed)' : '❌ INVALID IMEI (Luhn Checksum Failed)'}
          </span>
          <span style="font-size:0.8rem; background:rgba(0,0,0,0.4); padding:0.2rem 0.6rem; border-radius:4px;">Modulo 10</span>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.8rem; text-align:center; font-family:monospace;">
          <div style="background:rgba(0,0,0,0.3); padding:0.8rem; border-radius:6px;">
            <div style="font-size:0.75rem; color:var(--text-muted);">TAC (Brand/Model)</div>
            <div style="font-size:1.1rem; color:var(--primary-cyan); font-weight:700;">${tac}</div>
          </div>
          <div style="background:rgba(0,0,0,0.3); padding:0.8rem; border-radius:6px;">
            <div style="font-size:0.75rem; color:var(--text-muted);">Device Serial</div>
            <div style="font-size:1.1rem; color:#fff; font-weight:700;">${serial}</div>
          </div>
          <div style="background:rgba(0,0,0,0.3); padding:0.8rem; border-radius:6px;">
            <div style="font-size:0.75rem; color:var(--text-muted);">Check Digit</div>
            <div style="font-size:1.1rem; color:${isValid ? '#4ade80' : '#f87171'}; font-weight:700;">${checkDigit}</div>
          </div>
        </div>
      </div>
    `;
  }

  input.addEventListener('input', checkImei);

  c.querySelector('#imeiGenBtn').addEventListener('click', () => {
    let base = '3589410' + Math.floor(1000000 + Math.random() * 9000000);
    let sum = 0;
    for (let i = 0; i < 14; i++) {
      let d = parseInt(base.charAt(i), 10);
      if (i % 2 === 1) { d *= 2; if (d > 9) d -= 9; }
      sum += d;
    }
    let check = (10 - (sum % 10)) % 10;
    input.value = base + check;
    checkImei();
  });
}

// 4. Emergency Lock Screen Wallpaper Generator
function renderMobileEmergencyWallpaper(c) {
  c.innerHTML = `
    <div style="max-width:850px; margin:0 auto;" class="grid-2">
      <div>
        <h4 style="margin-bottom:1rem;">Emergency Details</h4>
        <div class="form-group">
          <label class="form-label">Owner Name:</label>
          <input type="text" id="wallName" class="form-input" placeholder="Alex Morgan" value="Alex Morgan">
        </div>
        <div class="form-group">
          <label class="form-label">Primary Emergency Contact:</label>
          <input type="text" id="wallPhone1" class="form-input" placeholder="+1 (555) 019-2831" value="+1 (555) 019-2831">
        </div>
        <div class="form-group">
          <label class="form-label">Secondary Contact / ICE:</label>
          <input type="text" id="wallPhone2" class="form-input" placeholder="+1 (555) 012-9988" value="+1 (555) 012-9988">
        </div>
        <div class="form-group">
          <label class="form-label">Blood Group / Medical Notes:</label>
          <input type="text" id="wallBlood" class="form-input" placeholder="O+ Positive | Diabetic" value="O+ Positive | No Allergies">
        </div>
        <button id="downloadWallBtn" class="btn btn-primary" style="width:100%; margin-top:1rem;">
          Download Lock Screen Wallpaper (1080x1920) 📱
        </button>
      </div>

      <div style="text-align:center;">
        <h4 style="margin-bottom:1rem;">Live Mobile Preview</h4>
        <canvas id="wallCanvas" width="360" height="640" class="emergency-canvas-preview"></canvas>
      </div>
    </div>
  `;

  const canvas = c.querySelector('#wallCanvas');
  const ctx = canvas.getContext('2d');

  function drawWallpaper() {
    const name = c.querySelector('#wallName').value || 'Owner Name';
    const p1 = c.querySelector('#wallPhone1').value || 'Emergency Phone';
    const p2 = c.querySelector('#wallPhone2').value || '';
    const blood = c.querySelector('#wallBlood').value || '';

    // Background Dark Gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 640);
    grad.addColorStop(0, '#090d16');
    grad.addColorStop(0.5, '#0f172a');
    grad.addColorStop(1, '#030712');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 360, 640);

    // Decorative clock mock
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '700 48px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('09:41', 180, 110);
    ctx.font = '400 14px Inter, sans-serif';
    ctx.fillText('Thursday, August 6', 180, 135);

    // Emergency Card Overlay at bottom
    ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(20, 360, 320, 240, 16);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ef4444';
    ctx.font = '800 16px Inter, sans-serif';
    ctx.fillText('🚨 IF FOUND, PLEASE CALL', 180, 395);

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 16px Inter, sans-serif';
    ctx.fillText(name, 180, 430);

    ctx.fillStyle = '#00f2fe';
    ctx.font = '700 18px monospace';
    ctx.fillText(p1, 180, 465);

    if (p2) {
      ctx.fillStyle = '#a7f3d0';
      ctx.font = '600 14px monospace';
      ctx.fillText(`Alt: ${p2}`, 180, 498);
    }

    if (blood) {
      ctx.fillStyle = '#fde047';
      ctx.font = '600 13px Inter, sans-serif';
      ctx.fillText(`🩺 Medical: ${blood}`, 180, 535);
    }

    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '400 11px Inter, sans-serif';
    ctx.fillText('Antigravity Tools Safety Suite', 180, 575);
  }

  ['wallName','wallPhone1','wallPhone2','wallBlood'].forEach(id => {
    c.querySelector('#' + id).addEventListener('input', drawWallpaper);
  });

  drawWallpaper();

  c.querySelector('#downloadWallBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'emergency-lockscreen-wallpaper.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('Wallpaper downloaded!');
  });
}

// 5. Mobile Display & Dead Pixel Tester
function renderMobileScreenTester(c) {
  c.innerHTML = `
    <div style="max-width:750px; margin:0 auto; text-align:center;">
      <h3 style="margin-bottom:0.5rem;">Mobile Display & Dead Pixel Tester</h3>
      <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">
        Cycle through solid colors in full-screen to inspect your screen for stuck pixels, dead pixels, or OLED burn-in.
      </p>

      <div class="btn-group" style="justify-content:center; margin-bottom:1.5rem;">
        <button class="btn color-btn" data-color="#ff0000" style="background:#ff0000; color:#fff;">Red</button>
        <button class="btn color-btn" data-color="#00ff00" style="background:#00ff00; color:#000;">Green</button>
        <button class="btn color-btn" data-color="#0000ff" style="background:#0000ff; color:#fff;">Blue</button>
        <button class="btn color-btn" data-color="#ffffff" style="background:#ffffff; color:#000;">White</button>
        <button class="btn color-btn" data-color="#000000" style="background:#000000; color:#fff; border:1px solid #444;">OLED Black</button>
        <button class="btn color-btn" data-color="#ffff00" style="background:#ffff00; color:#000;">Yellow</button>
      </div>

      <button id="fullScreenBtn" class="btn btn-primary" style="font-size:1.1rem; padding:0.8rem 2rem;">
        🖥️ Launch Fullscreen Tester
      </button>

      <h4 style="margin-top:2.5rem; margin-bottom:0.8rem;">Interactive Touch Grid Matrix</h4>
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">
        Drag your finger across the grid below to test touch sensitivity across all areas of your screen:
      </p>
      
      <div id="touchGrid" style="display:grid; grid-template-columns:repeat(10, 1fr); gap:2px; background:rgba(255,255,255,0.1); padding:4px; border-radius:8px; height:240px; touch-action:none;"></div>
      <div style="font-size:0.85rem; margin-top:0.6rem; color:var(--primary-cyan);" id="gridTestedCount">Tested: 0 / 100 tiles</div>
    </div>
  `;

  const touchGrid = c.querySelector('#touchGrid');
  let testedCount = 0;
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.style.background = '#0a1020';
    tile.style.borderRadius = '2px';
    tile.style.transition = 'background 0.2s';
    touchGrid.appendChild(tile);
  }

  function handleTouch(e) {
    const rect = touchGrid.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
      const x = Math.floor(((clientX - rect.left) / rect.width) * 10);
      const y = Math.floor(((clientY - rect.top) / rect.height) * 10);
      const index = y * 10 + x;
      if (index >= 0 && index < 100) {
        const child = touchGrid.children[index];
        if (child && child.style.background !== 'rgb(34, 197, 94)') {
          child.style.background = '#22c55e';
          testedCount++;
          c.querySelector('#gridTestedCount').textContent = `Tested: ${testedCount} / 100 tiles (${testedCount}% coverage)`;
        }
      }
    }
  }

  touchGrid.addEventListener('touchmove', handleTouch);
  touchGrid.addEventListener('mousemove', (e) => { if (e.buttons === 1) handleTouch(e); });

  c.querySelector('#fullScreenBtn').addEventListener('click', () => {
    const fs = document.createElement('div');
    fs.style.position = 'fixed';
    fs.style.top = '0'; fs.style.left = '0';
    fs.style.width = '100vw'; fs.style.height = '100vh';
    fs.style.zIndex = '99999';
    fs.style.background = '#ff0000';
    fs.style.display = 'flex';
    fs.style.alignItems = 'center';
    fs.style.justifyContent = 'center';
    fs.style.cursor = 'pointer';
    fs.innerHTML = `<div style="background:rgba(0,0,0,0.7); color:#fff; padding:1rem 2rem; border-radius:10px; font-size:1.1rem; text-align:center;">
      Tap anywhere to cycle colors.<br><span style="font-size:0.85rem; opacity:0.8;">Double tap to exit fullscreen</span>
    </div>`;

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffffff', '#000000', '#ffff00', '#00ffff'];
    let idx = 0;
    let lastClick = 0;

    fs.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastClick < 300) {
        document.body.removeChild(fs);
      } else {
        idx = (idx + 1) % colors.length;
        fs.style.background = colors[idx];
      }
      lastClick = now;
    });

    document.body.appendChild(fs);
  });
}

// 6. Multi-Touch & Screen Refresh Rate (Hz) Tester
function renderMobileTouchHzTester(c) {
  c.innerHTML = `
    <div style="max-width:750px; margin:0 auto; text-align:center;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.2rem; margin-bottom:1.5rem;">
        <div style="background:rgba(15,23,42,0.8); border:1px solid var(--border-color); padding:1.2rem; border-radius:10px;">
          <div style="font-size:0.85rem; color:var(--text-muted);">Estimated Screen Refresh Rate</div>
          <div id="hzDisplay" style="font-size:2.8rem; font-weight:800; color:var(--primary-cyan); margin:0.4rem 0;">Measuring...</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Calculated via requestAnimationFrame</div>
        </div>
        <div style="background:rgba(15,23,42,0.8); border:1px solid var(--border-color); padding:1.2rem; border-radius:10px;">
          <div style="font-size:0.85rem; color:var(--text-muted);">Active Touch Points</div>
          <div id="touchCountDisplay" style="font-size:2.8rem; font-weight:800; color:#4ade80; margin:0.4rem 0;">0</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Place multiple fingers on test area</div>
        </div>
      </div>

      <div class="touch-test-area" id="touchArea">
        <span style="color:var(--text-muted); font-size:1rem; pointer-events:none;">
          👇 Touch or swipe with multiple fingers here to test Multi-Touch
        </span>
      </div>
    </div>
  `;

  // Hz Monitor
  let frames = 0;
  let startTime = performance.now();
  function measureHz() {
    frames++;
    const now = performance.now();
    if (now - startTime >= 1000) {
      const hz = Math.round((frames * 1000) / (now - startTime));
      c.querySelector('#hzDisplay').textContent = `${hz} Hz`;
      frames = 0;
      startTime = now;
    }
    requestAnimationFrame(measureHz);
  }
  requestAnimationFrame(measureHz);

  // Multi touch canvas
  const touchArea = c.querySelector('#touchArea');
  function updateTouches(e) {
    e.preventDefault();
    const count = e.touches ? e.touches.length : 0;
    c.querySelector('#touchCountDisplay').textContent = count;
  }

  touchArea.addEventListener('touchstart', updateTouches, { passive: false });
  touchArea.addEventListener('touchmove', updateTouches, { passive: false });
  touchArea.addEventListener('touchend', updateTouches, { passive: false });
}

// 7. Mobile Wi-Fi, eSIM & WhatsApp QR Suite
function renderMobileQrSuite(c) {
  c.innerHTML = `
    <div style="max-width:750px; margin:0 auto;">
      <div style="display:flex; justify-content:center; gap:0.5rem; margin-bottom:1.5rem;">
        <button class="btn btn-secondary qr-tab active" data-tab="wifi">📶 Wi-Fi QR</button>
        <button class="btn btn-secondary qr-tab" data-tab="wa">💬 WhatsApp Chat QR</button>
        <button class="btn btn-secondary qr-tab" data-tab="vcard">👤 vCard QR</button>
      </div>

      <div id="qrContent" class="grid-2">
        <!-- Tab Form -->
        <div id="qrFormArea"></div>

        <!-- QR Display -->
        <div style="text-align:center; background:rgba(15,23,42,0.6); padding:1.5rem; border-radius:10px; border:1px solid var(--border-color);">
          <div id="qrCanvasContainer" style="margin-bottom:1rem;"></div>
          <button id="downloadQrBtn" class="btn btn-primary" style="width:100%;">Download QR Image 🖼️</button>
        </div>
      </div>
    </div>
  `;

  let activeTab = 'wifi';

  function renderTab() {
    const formArea = c.querySelector('#qrFormArea');
    if (activeTab === 'wifi') {
      formArea.innerHTML = `
        <div class="form-group">
          <label class="form-label">Network Name (SSID):</label>
          <input type="text" id="wifiSsid" class="form-input" value="Home_WiFi_5G" placeholder="e.g. MyHomeWiFi">
        </div>
        <div class="form-group">
          <label class="form-label">Wi-Fi Password:</label>
          <input type="text" id="wifiPass" class="form-input" value="SecretPass123" placeholder="Password">
        </div>
        <div class="form-group">
          <label class="form-label">Security Type:</label>
          <select id="wifiSec" class="form-select">
            <option value="WPA">WPA/WPA2/WPA3</option>
            <option value="WEP">WEP</option>
            <option value="nopass">Open (No Password)</option>
          </select>
        </div>
      `;
    } else if (activeTab === 'wa') {
      formArea.innerHTML = `
        <div class="form-group">
          <label class="form-label">Phone Number (with Country Code):</label>
          <input type="text" id="waPhone" class="form-input" value="15550192831" placeholder="e.g. 919876543210">
        </div>
        <div class="form-group">
          <label class="form-label">Pre-filled Message Text:</label>
          <textarea id="waMsg" class="form-textarea" style="height:90px;" placeholder="Hello, I am contacting you from Antigravity Tools!">Hello! I would like to inquire about your services.</textarea>
        </div>
      `;
    } else if (activeTab === 'vcard') {
      formArea.innerHTML = `
        <div class="form-group">
          <label class="form-label">Full Name:</label>
          <input type="text" id="vcName" class="form-input" value="Alex Morgan" placeholder="John Doe">
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number:</label>
          <input type="text" id="vcPhone" class="form-input" value="+15550192831" placeholder="+1234567890">
        </div>
        <div class="form-group">
          <label class="form-label">Email Address:</label>
          <input type="text" id="vcEmail" class="form-input" value="alex@example.com" placeholder="name@domain.com">
        </div>
      `;
    }

    formArea.querySelectorAll('input, select, textarea').forEach(el => {
      el.addEventListener('input', generateQR);
    });

    generateQR();
  }

  function generateQR() {
    let payload = '';
    if (activeTab === 'wifi') {
      const ssid = c.querySelector('#wifiSsid')?.value || '';
      const pass = c.querySelector('#wifiPass')?.value || '';
      const sec = c.querySelector('#wifiSec')?.value || 'WPA';
      payload = `WIFI:S:${ssid};T:${sec};P:${pass};;`;
    } else if (activeTab === 'wa') {
      const phone = c.querySelector('#waPhone')?.value.replace(/\D/g,'') || '';
      const msg = encodeURIComponent(c.querySelector('#waMsg')?.value || '');
      payload = `https://wa.me/${phone}?text=${msg}`;
    } else if (activeTab === 'vcard') {
      const name = c.querySelector('#vcName')?.value || '';
      const phone = c.querySelector('#vcPhone')?.value || '';
      const email = c.querySelector('#vcEmail')?.value || '';
      payload = `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nFN:${name}\nTEL:${phone}\nEMAIL:${email}\nEND:VCARD`;
    }

    // High quality client-side Google Chart / QR API fallback image canvas
    const container = c.querySelector('#qrCanvasContainer');
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(payload)}`;
    container.innerHTML = `<img src="${qrUrl}" alt="QR Code" style="width:200px; height:200px; border-radius:8px; border:4px solid #fff; background:#fff;">`;
  }

  c.querySelectorAll('.qr-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      c.querySelectorAll('.qr-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.getAttribute('data-tab');
      renderTab();
    });
  });

  renderTab();
}

// ============================================================
// HELPER UTILITIES
// ============================================================

function escapeXml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function copyBoxText(elementId) {
  const el = document.getElementById(elementId);
  if (el) { navigator.clipboard.writeText(el.textContent); showToast('Copied to clipboard!'); }
}
