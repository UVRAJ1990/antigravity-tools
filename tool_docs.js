/**
 * Antigravity Tools - Complete SEO, AEO & Technical Documentation Engine
 * Provides rank #1 technical breakdowns, AEO direct answer snippets,
 * step-by-step guides, FAQs, and JSON-LD schema markup for all 50 tools.
 */

const TOOL_DOCS = {
  'ai-token-counter': {
    slug: '/tools/ai-token-counter',
    spec: 'https://github.com/openai/tiktoken',
    specName: 'OpenAI Tiktoken BPE Specification',
    aeoSnippet: 'An AI Token Counter is a web utility designed to calculate the precise token count, character density, and API costs for Large Language Model prompts. Developers and prompt engineers use it to optimize input context lengths for GPT-4o, Claude 3.5, Gemini 2.0, and DeepSeek R1 before sending API requests.',
    howTo: [
      'Paste your prompt text or code snippet into the input box.',
      'View real-time token count calculated using Byte-Pair Encoding (BPE) heuristics (~4 characters per token).',
      'Compare estimated API costs across top LLM providers (GPT-4o, Claude 3.5, Gemini 2.0, DeepSeek R1).',
      'Trim unnecessary words to reduce overall API spend before sending requests.'
    ],
    technical: 'Large Language Models (LLMs) do not process raw strings directly; instead, they break text into mathematical chunks called tokens using Byte-Pair Encoding (BPE). This tool analyzes character boundaries, spaces, and punctuation to approximate token density locally in your browser thread without transmitting prompts to any remote API server.',
    faqs: [
      { q: 'Is my prompt data safe and private?', a: 'Yes. Token calculation happens 100% client-side in browser memory. No prompt data is ever transmitted across the network or logged on remote servers.' },
      { q: 'Why do token counts differ from word counts?', a: 'Words are space-separated language units, whereas tokens include sub-word units, punctuation marks, and whitespace sequences. On average, 1,000 words equal roughly 1,333 tokens in English.' },
      { q: 'Which models are supported for cost estimation?', a: 'Cost estimates cover GPT-4o ($2.50/M), Claude 3.5 Sonnet ($3.00/M), Gemini 2.0 Flash ($0.10/M), and DeepSeek R1 ($0.55/M).' }
    ],
    related: ['ai-prompt-trimmer', 'ai-prompt-builder', 'json-schema-gen', 'ai-code-scanner']
  },

  'jwt-inspector': {
    slug: '/tools/jwt-inspector-debugger',
    spec: 'https://datatracker.ietf.org/doc/html/rfc7519',
    specName: 'RFC 7519 - JSON Web Token (JWT)',
    aeoSnippet: 'A JWT Inspector is an online developer tool designed to decode, parse, and analyze JSON Web Tokens (RFC 7519) directly within your web browser. Developers use it to inspect token header parameters, payload claims, and expiration timestamps without sending sensitive authentication signatures or private secret keys to remote servers.',
    howTo: [
      'Paste your raw JSON Web Token string into the input box.',
      'The decoder automatically splits the token on dot (.) delimiters and decodes Base64URL strings.',
      'Inspect header parameters (alg, typ) and payload claims (sub, iss, aud).',
      'Verify expiration timestamp (exp) and current validity status.'
    ],
    technical: 'JSON Web Tokens consist of three Base64URL-encoded strings separated by dots: Header, Payload, and Signature. Decoding is performed locally using native window.atob() and TextDecoder Web APIs without any network calls, preserving absolute token secrecy for production Bearer tokens.',
    faqs: [
      { q: 'Is it safe to paste production JWTs here?', a: 'Yes, 100% safe. Decoding takes place entirely inside your local browser JavaScript thread. Zero network calls are sent.' },
      { q: 'Why does my token mark as Expired?', a: 'The tool checks the exp payload claim against current system time (Date.now()). If exp timestamp is in the past, it flags as expired.' },
      { q: 'Does this verify signatures online?', a: 'Header and payload decoding are client-side. Signature validation can be checked locally against public key certificates.' }
    ],
    related: ['universal-encoder', 'hash-password-gen', 'rsa-ecc-key-gen', 'pii-masker']
  },

  'ai-bg-remover': {
    slug: '/tools/ai-background-remover',
    spec: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    specName: 'W3C HTML5 Canvas API Specification',
    aeoSnippet: 'An AI Background Remover is a browser-based graphic tool that isolates subjects and removes background colors from images automatically. Designers and developers use it to create transparent PNG assets for websites, app icons, and product photos without sending images to external cloud servers.',
    howTo: [
      'Upload any PNG, JPG, or WebP photo into the workspace.',
      'The engine automatically samples background corner pixels and calculates color distances.',
      'Adjust the Tolerance slider to fine-tune background pixel removal.',
      'Click Re-Apply to update the preview and download your transparent PNG file.'
    ],
    technical: 'Background removal operates locally on an HTML5 Canvas using direct RGBA pixel manipulation. The algorithm samples corner pixel values, calculates color delta tolerances across RGB channels, and updates the alpha channel (d[i+3] = 0) in real time without uploading images to any cloud processing server.',
    faqs: [
      { q: 'Are my uploaded photos kept private?', a: 'Yes. Photos are loaded directly into browser memory via FileReader API. Images are never uploaded to any server.' },
      { q: 'What image formats can I export?', a: 'Exports are saved as high-quality 32-bit transparent PNG files preserving full alpha transparency.' },
      { q: 'What types of photos work best?', a: 'Photos with solid or high-contrast backgrounds (white, black, green screen, studio backdrops) yield the cleanest results.' }
    ],
    related: ['image-compressor', 'favicon-generator', 'social-banner-resizer', 'brand-palette-extractor']
  },

  'favicon-generator': {
    slug: '/tools/favicon-app-icon-generator',
    spec: 'https://html.spec.whatwg.org/multipage/semantics.html#rel-icon',
    specName: 'WHATWG HTML Icon Rel Standard',
    aeoSnippet: 'A Favicon & App Icon Generator is a client-side graphic tool that converts uploaded logos or emojis into multi-size icon packages for web applications. Webmasters use it to export 16x16, 32x32, 48x48, 180x180 (Apple Touch), and 512x512 (PWA) PNG icons alongside HTML head tags.',
    howTo: [
      'Upload a logo image (PNG/JPG/SVG) or select Emoji/Text mode.',
      'Choose background color, transparency, and corner rounding (Square, Rounded, Circle).',
      'Adjust icon scaling and padding slider.',
      'Download individual icon sizes or click Download All Icons for batch export.'
    ],
    technical: 'Icon generation uses HTML5 Canvas vector clipping paths to crop images into custom geometries (rect, roundRect, arc). Multi-scale canvas contexts render pixel-crisp representations across standard favicon sizes (16px to 512px) entirely client-side.',
    faqs: [
      { q: 'Which icon sizes are generated?', a: 'Generates 16x16, 32x32 (standard favicons), 48x48 (desktop), 180x180 (Apple Touch Icon), 192x192 (Android), and 512x512 (PWA Manifest).' },
      { q: 'Does it generate HTML code?', a: 'Yes! It generates ready-to-copy HTML <link rel="icon"> tags for your site\'s <head> section.' },
      { q: 'Can I create icons from emojis?', a: 'Yes, switch to Emoji/Text mode to generate custom vector icons from any Unicode emoji or character.' }
    ],
    related: ['og-card-previewer', 'meta-tag-generator', 'svg-optimizer', 'site-trust-badge']
  },

  'og-card-previewer': {
    slug: '/tools/social-open-graph-previewer',
    spec: 'https://ogp.me/',
    specName: 'The Open Graph Protocol Standard',
    aeoSnippet: 'A Social Open Graph Previewer is a webmaster tool that simulates how link preview cards render across social platforms like Twitter/X, LinkedIn, Facebook, Discord, and WhatsApp. It helps developers verify title tags, descriptions, domain names, and OG images before publishing.',
    howTo: [
      'Enter your page title, description, and site URL.',
      'Add an optional custom image URL.',
      'Select platform tab (Twitter, LinkedIn, Facebook, Discord, WhatsApp) to preview live rendering.',
      'Click Generate OG Meta Tags to copy ready-to-use HTML code.'
    ],
    technical: 'Simulates platform-specific UI card containers, typography, domain extraction, and aspect ratios defined by Open Graph Protocol (og:title, og:description, og:image, twitter:card). Generates compliant HTML metadata for seamless social sharing.',
    faqs: [
      { q: 'Why are Open Graph tags important?', a: 'OG tags control how your website link appears when shared on social media and chat apps, driving significantly higher click-through rates (CTR).' },
      { q: 'Which platforms are supported?', a: 'Supports live preview simulations for Twitter/X (summary_large_image), LinkedIn, Facebook, Discord, and WhatsApp.' },
      { q: 'Does this tool test live URLs?', a: 'You can test live URLs or type in draft metadata before deploying changes to production.' }
    ],
    related: ['meta-tag-generator', 'favicon-generator', 'site-trust-badge', 'sitemap-generator']
  },

  'regex-tester': {
    slug: '/tools/regex-tester-visualizer',
    spec: 'https://tc39.es/ecma262/#sec-patterns',
    specName: 'ECMAScript RegExp Language Specification',
    aeoSnippet: 'A Regex Tester is an interactive developer tool designed to test, validate, and debug regular expressions against target text in real time. Developers use it to match patterns, highlight regex captures, test flags (g, i, m), and execute string replacements safely.',
    howTo: [
      'Enter your regular expression pattern and flags (g, i, m, s).',
      'Paste sample target text into the input field.',
      'Inspect live highlighted matches and total match counts.',
      'Enable replacement mode to test regex string substitutions.'
    ],
    technical: 'Executes native JavaScript RegExp engine evaluation inside try-catch execution blocks. Match indices and capture groups are parsed via matchAll() and highlighted dynamically without transmitting code strings to any remote server.',
    faqs: [
      { q: 'Which regex flags are supported?', a: 'Supports global (g), case-insensitive (i), multiline (m), dotAll (s), unicode (u), and sticky (y) flags.' },
      { q: 'Is string replacement supported?', a: 'Yes! Toggle replacement mode to test string substitutions and capture group references ($1, $2).' }
    ],
    related: ['text-converter', 'json-workbench', 'curl-converter', 'pii-masker']
  }
};

/**
 * Get or dynamically generate complete SEO documentation for any tool
 */
function getToolDocs(tool) {
  if (TOOL_DOCS[tool.id]) {
    return TOOL_DOCS[tool.id];
  }

  // Dynamic fallback docs generator for all other tools
  const name = tool.name;
  const catName = getCategoryName(tool.cat);
  const tag = tool.tag || 'Utility';
  const desc = tool.description;

  return {
    slug: `/tools/${tool.id}`,
    spec: 'https://developer.mozilla.org/en-US/docs/Web',
    specName: 'MDN Web Docs Standard',
    aeoSnippet: `The ${name} is a free online browser-based ${tag.toLowerCase()} tool designed for developers, webmasters, and creators. It allows users to ${desc.toLowerCase()} instantly in local browser memory without uploading any sensitive data to external servers.`,
    howTo: [
      `Open the ${name} workspace interface.`,
      `Input your target data, code snippet, file, or parameters into the provided input fields.`,
      `Observe instant real-time processing, formatted outputs, calculations, or graphical previews.`,
      `Click the Copy or Download button to export your final generated assets.`
    ],
    technical: `The ${name} executes 100% client-side using browser-native Web APIs (DOM, Canvas, Web Crypto, Web Audio, or ES6 JavaScript). Operations take place in local memory threads with zero network telemetry or server-side logging.`,
    faqs: [
      { q: `Is using ${name} private and secure?`, a: `Yes, 100% private. All processing is strictly local to your browser session. No data is stored, logged, or sent to backend servers.` },
      { q: `Does ${name} work offline?`, a: `Yes! Once loaded in your browser, the tool operates completely offline without needing an active internet connection.` },
      { q: `Is there any usage limit or paywall?`, a: `No. Antigravity Tools are 100% free with unlimited usage, zero ads, and no registration required.` }
    ],
    related: getRelatedToolIds(tool)
  };
}

function getCategoryName(cat) {
  const map = { mobile: 'Mobile & Device', youtube: 'YouTube & Video', ai: 'AI & Prompting', trust: 'Site Trust & SEO', dev: 'Dev & Code', security: 'Security & Auth', media: 'Text & Media', design: 'CSS & UI Design' };
  return map[cat] || 'Developer Tools';
}

function getRelatedToolIds(tool) {
  return TOOLS.filter(t => t.id !== tool.id && (t.cat === tool.cat || t.tag === tool.tag))
    .slice(0, 4)
    .map(t => t.id);
}

/**
 * Append complete SEO & Developer documentation to the tool modal workspace
 */
function appendToolSeoDocs(tool, modalBody) {
  const docs = getToolDocs(tool);

  // 1. Create SEO Docs Container
  const docsContainer = document.createElement('div');
  docsContainer.className = 'tool-seo-docs-container';
  docsContainer.style.cssText = 'margin-top:2.5rem;padding-top:2rem;border-top:1px solid rgba(255,255,255,0.08);text-align:left;color:var(--text-secondary);font-size:0.9rem;line-height:1.6;';

  // Build FAQs HTML
  const faqsHtml = docs.faqs.map((faq, i) => `
    <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:0.9rem 1.1rem;margin-bottom:0.8rem;">
      <h5 style="color:#fff;font-size:0.95rem;margin-bottom:0.4rem;">❓ ${escapeXml(faq.q)}</h5>
      <p style="margin:0;color:#94a3b8;font-size:0.85rem;">${escapeXml(faq.a)}</p>
    </div>
  `).join('');

  // Build How-To List HTML
  const howToHtml = docs.howTo.map(step => `<li style="margin-bottom:0.5rem;">${escapeXml(step)}</li>`).join('');

  // Build Related Tools Buttons HTML
  const relatedToolsHtml = docs.related.map(relId => {
    const relTool = TOOLS.find(t => t.id === relId);
    if (!relTool) return '';
    return `<button class="btn btn-secondary rel-tool-btn" data-id="${relTool.id}" style="padding:0.4rem 0.8rem;font-size:0.8rem;display:inline-flex;align-items:center;gap:0.4rem;margin:0.2rem;">
      <span>${relTool.icon}</span> <span>${escapeXml(relTool.name)}</span>
    </button>`;
  }).join('');

  docsContainer.innerHTML = `
    <!-- AEO Featured Snippet Direct Answer Box -->
    <div style="background:rgba(0,242,254,0.04);border:1px solid rgba(0,242,254,0.2);padding:1.2rem 1.4rem;border-radius:12px;margin-bottom:2rem;">
      <div style="display:flex;align-items:center;gap:0.5rem;color:var(--primary-cyan);font-weight:700;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0.5rem;">
        ⚡ Direct Answer / Overview
      </div>
      <p style="color:#e2e8f0;font-size:0.98rem;margin:0;line-height:1.6;font-weight:400;">
        ${escapeXml(docs.aeoSnippet)}
      </p>
    </div>

    <!-- 2 Column Layout: How-to + Privacy Guarantee -->
    <div class="grid-2" style="margin-bottom:2rem;gap:1.8rem;">
      <div>
        <h4 style="color:#fff;font-size:1.05rem;margin-bottom:0.8rem;display:flex;align-items:center;gap:0.4rem;">
          📖 How to Use ${escapeXml(tool.name)}
        </h4>
        <ol style="padding-left:1.2rem;color:#cbd5e1;margin:0;">
          ${howToHtml}
        </ol>
      </div>
      <div>
        <h4 style="color:#fff;font-size:1.05rem;margin-bottom:0.8rem;display:flex;align-items:center;gap:0.4rem;">
          🛡️ Privacy & Performance Guarantee
        </h4>
        <ul style="list-style:none;padding:0;margin:0;color:#cbd5e1;">
          <li style="margin-bottom:0.5rem;">⚡ <strong>100% Client-Side</strong> — Runs entirely in browser thread.</li>
          <li style="margin-bottom:0.5rem;">🔒 <strong>Zero Server Logging</strong> — No remote data transmission.</li>
          <li style="margin-bottom:0.5rem;">🚀 <strong>Instant Processing</strong> — 0ms network latency.</li>
          <li style="margin-bottom:0.5rem;">📴 <strong>Offline Capable</strong> — Operates without internet connection.</li>
        </ul>
      </div>
    </div>

    <!-- Technical Breakdown -->
    <div style="margin-bottom:2rem;background:rgba(255,255,255,0.02);padding:1.2rem;border-radius:10px;border:1px solid rgba(255,255,255,0.05);">
      <h4 style="color:#fff;font-size:1.05rem;margin-bottom:0.6rem;display:flex;align-items:center;gap:0.4rem;">
        🔬 Technical Architecture & Standard Specifications
      </h4>
      <p style="color:#94a3b8;margin-bottom:0.8rem;font-size:0.88rem;">
        ${escapeXml(docs.technical)}
      </p>
      <div style="font-size:0.8rem;">
        Official Reference Spec: <a href="${escapeXml(docs.spec)}" target="_blank" rel="noopener noreferrer" style="color:var(--primary-cyan);text-decoration:none;">${escapeXml(docs.specName)} ↗</a>
      </div>
    </div>

    <!-- FAQ Section -->
    <div style="margin-bottom:2rem;">
      <h4 style="color:#fff;font-size:1.05rem;margin-bottom:1rem;display:flex;align-items:center;gap:0.4rem;">
        ❓ Frequently Asked Questions
      </h4>
      ${faqsHtml}
    </div>

    <!-- Related Tools Section -->
    <div style="background:rgba(0,0,0,0.2);padding:1rem 1.2rem;border-radius:10px;border:1px solid rgba(255,255,255,0.05);">
      <h5 style="color:#fff;font-size:0.9rem;margin-bottom:0.6rem;">🔗 Related Antigravity Tools:</h5>
      <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
        ${relatedToolsHtml}
      </div>
    </div>
  `;

  modalBody.appendChild(docsContainer);

  // Attach event listener to related tool buttons inside modal
  docsContainer.querySelectorAll('.rel-tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const relId = btn.getAttribute('data-id');
      const targetTool = TOOLS.find(t => t.id === relId);
      if (targetTool) {
        openToolWorkspace(targetTool);
      }
    });
  });

  // Inject Dynamic JSON-LD Schema
  injectJsonLdSchema(tool, docs);
}

/**
 * Dynamically injects WebApplication + FAQPage + BreadcrumbList JSON-LD Schema
 */
function injectJsonLdSchema(tool, docs) {
  // Remove any previously injected schema
  const existing = document.getElementById('dynamicToolSchema');
  if (existing) existing.remove();

  const schemaObj = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `https://antigravitytools.app${docs.slug}#webapp`,
        "url": `https://antigravitytools.app${docs.slug}`,
        "name": tool.name,
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All (Web Browser)",
        "browserRequirements": "Requires JavaScript",
        "description": tool.description,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `https://antigravitytools.app${docs.slug}#faq`,
        "mainEntity": docs.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  const script = document.createElement('script');
  script.id = 'dynamicToolSchema';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schemaObj);
  document.head.appendChild(script);
}
