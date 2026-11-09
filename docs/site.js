const BUILD_DATA = {
  fmu: {
    name: 'Faster Mac Use (fmu)',
    route: 'clifan.com/faster-mac-use/',
    href: 'faster-mac-use/',
    art: 'faster-mac-use/assets/swarm-vs-mcp-demo.svg',
    repo: 'https://github.com/lifan-builds/faster-mac-use',
    repoLabel: 'lifan-builds/faster-mac-use ↗',
    summary: 'Background multi-cursor browser & macOS computer-use engine driving unfocused Chrome tab groups and native apps in parallel.',
    pillars: ['local', 'agents', 'eval'],
    diagram: `
      <rect x="6" y="14" width="110" height="40" rx="6" fill="#13202c" stroke="#34d399" stroke-width="1.5"/>
      <text x="61" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="600" fill="#5eead4">AGENT REPL</text>
      <text x="61" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#cbd5e1">3-Cursor Swarm</text>
      <path d="M116 34 L182 14 M116 34 L182 34 M116 34 L182 54" stroke="#34d399" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="182" y="4" width="142" height="18" rx="4" fill="#13202c" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="253" y="16" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#93c5fd">Chrome MV3 Tab #1 (bg)</text>
      <rect x="182" y="25" width="142" height="18" rx="4" fill="#13202c" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="253" y="37" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#93c5fd">Chrome MV3 Tab #2 (bg)</text>
      <rect x="182" y="46" width="142" height="18" rx="4" fill="#13202c" stroke="#34d399" stroke-width="1.2"/>
      <text x="253" y="58" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#5eead4">macOS AX Native (fmu-ax)</text>
      <path d="M324 14 L388 34 M324 34 L388 34 M324 54 L388 34" stroke="#34d399" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="388" y="14" width="126" height="40" rx="6" fill="#13202c" stroke="#34d399" stroke-width="1.5"/>
      <text x="451" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="600" fill="#5eead4">268-TOK DELTA</text>
      <text x="451" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#cbd5e1">114× fewer · 0.0px</text>`,
    metrics: [
      { val: '114× fewer', lbl: 'Tokens vs @playwright/mcp' },
      { val: '0.0 px', lbl: 'Physical cursor drift' },
      { val: '326 ms', lbl: '3-agent parallel swarm' }
    ],
    trace: `<span class="tok-comment"># 3-agent background swarm across Chrome + macOS AX</span>\n<span class="tok-cmd">$ fmu</span> <span class="tok-str">'{"parallel":[{"agent":"a1","surface":"browser"},{"agent":"a2","surface":"app"}]}'</span>\n✓ 1,510 total tokens · 0 focus steals · clipboard intact`
  },
  autofill: {
    name: 'Agent Autofill',
    route: 'clifan.com/agent-autofill/',
    href: 'agent-autofill/',
    art: 'assets/project-autofill-diagram.svg',
    repo: 'agent-autofill/demo/',
    repoLabel: 'Interactive approval demo →',
    summary: 'Local-first personal vault and MCP broker for macOS agents. Share scoped fields, origin-bound logins, and 2FA codes with explicit human approval.',
    pillars: ['local', 'agents', 'eval'],
    diagram: `
      <rect x="6" y="14" width="108" height="40" rx="6" fill="#13202c" stroke="#34d399" stroke-width="1.5"/>
      <text x="60" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#5eead4">AES-GCM VAULT</text>
      <text x="60" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">Local Keychain</text>
      <line x1="114" y1="34" x2="152" y2="34" stroke="#34d399" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="152" y="22" width="114" height="38" rx="6" fill="#13202c" stroke="#60a5fa" stroke-width="1.5"/>
      <text x="209" y="38" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#93c5fd">MCP BROKER</text>
      <text x="209" y="51" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">Scoped Fields</text>
      <rect x="152" y="2" width="114" height="15" rx="3" fill="#2a1215" stroke="#f87171" stroke-width="1"/>
      <text x="209" y="12" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6.8" fill="#fca5a5">✗ LLM Context (0 Secrets)</text>
      <line x1="266" y1="41" x2="304" y2="34" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="304" y="14" width="100" height="40" rx="6" fill="#13202c" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="354" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#fcd34d">HUMAN GATE ✓</text>
      <text x="354" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">Origin Verified</text>
      <line x1="404" y1="34" x2="432" y2="34" stroke="#34d399" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="432" y="14" width="82" height="40" rx="6" fill="#13202c" stroke="#34d399" stroke-width="1.5"/>
      <text x="473" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#5eead4">1-TIME FILL</text>
      <text x="473" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">DOM Injected</text>`,
    metrics: [
      { val: 'AES-GCM', lbl: 'Local encrypted vault' },
      { val: '1-time', lbl: 'Origin-bound handoff' },
      { val: '0:33 tour', lbl: 'Interactive web sandbox' }
    ],
    trace: `<span class="tok-comment"># Scoped MCP broker check before external submission</span>\n<span class="tok-cmd">mcp.call</span>(<span class="tok-str">"request_credential_use"</span>, { origin: <span class="tok-str">"portal.example"</span> })\n✓ Approved once by user · secret never enters model context`
  },
  quotaswitch: {
    name: 'QuotaSwitch',
    route: 'clifan.com/quotaswitch/',
    href: 'quotaswitch/',
    art: 'assets/project-quotaswitch-diagram.svg',
    repo: 'https://github.com/lifan-builds/quotaswitch',
    repoLabel: 'lifan-builds/quotaswitch ↗',
    summary: 'Unified quota-driven multi-account switcher and 30s background auto-rotator for Google Antigravity (agy) and OpenAI Codex (codex).',
    pillars: ['local', 'ml', 'agents'],
    diagram: `
      <rect x="6" y="6" width="128" height="24" rx="5" fill="#13202c" stroke="#f59e0b" stroke-width="1.3"/>
      <text x="70" y="21" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#fcd34d">agy: Claude 0% (Exhausted)</text>
      <rect x="6" y="38" width="128" height="24" rx="5" fill="#13202c" stroke="#60a5fa" stroke-width="1.3"/>
      <text x="70" y="53" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#93c5fd">codex: 5h Quota &lt; 5%</text>
      <path d="M134 18 L186 34 M134 50 L186 34" stroke="#60a5fa" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="186" y="12" width="144" height="44" rx="7" fill="#13202c" stroke="#34d399" stroke-width="1.6"/>
      <text x="258" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="600" fill="#5eead4">30s AUTO-ROTATOR</text>
      <text x="258" y="45" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">--provider=all daemon</text>
      <path d="M330 34 L380 18 M330 34 L380 50" stroke="#34d399" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="380" y="6" width="134" height="24" rx="5" fill="#13202c" stroke="#34d399" stroke-width="1.3"/>
      <text x="447" y="21" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#5eead4">Waterfall -> Gemini 4 (100%)</text>
      <rect x="380" y="38" width="134" height="24" rx="5" fill="#13202c" stroke="#34d399" stroke-width="1.3"/>
      <text x="447" y="53" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#5eead4">Codex Account #2 Resumed</text>`,
    metrics: [
      { val: 'agy + codex', lbl: 'Dual-provider CLI' },
      { val: '30s watch', lbl: 'Auto-rotate & resume' },
      { val: 'AES-GCM', lbl: 'Encrypted snapshots' }
    ],
    trace: `<span class="tok-comment"># Unified quota matrix + automatic model waterfall</span>\n<span class="tok-cmd">$ npx quotaswitch</span> list --provider=all\n✓ Claude 0% -> Gemini 4 Argon High · Codex rotated &amp; thread resumed`
  },
  freshpowder: {
    name: 'FreshPowder',
    route: 'clifan.com/freshpowder/',
    href: 'freshpowder/',
    art: 'assets/project-freshpowder-diagram.svg',
    repo: 'https://freshpowder.clifan.com/',
    repoLabel: 'Launch live deal finder ↗',
    summary: 'Ski and snowboard deal aggregator across 28 North American retailers, normalized across USD/CAD and filtered by exact size and budget.',
    pillars: ['local', 'eval'],
    diagram: `
      <rect x="6" y="4" width="112" height="18" rx="4" fill="#13202c" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="62" y="16" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#93c5fd">evo · Backcountry</text>
      <rect x="6" y="25" width="112" height="18" rx="4" fill="#13202c" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="62" y="37" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#93c5fd">Corbetts · Oberson (CAD)</text>
      <rect x="6" y="46" width="112" height="18" rx="4" fill="#13202c" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="62" y="58" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#93c5fd">+24 Specialty Shops</text>
      <path d="M118 13 L176 34 M118 34 L176 34 M118 55 L176 34" stroke="#60a5fa" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="176" y="12" width="154" height="44" rx="6" fill="#13202c" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="253" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.2" font-weight="600" fill="#fcd34d">ENTITY + FX ENGINE</text>
      <text x="253" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">USD/CAD · Exact cm/mondo</text>
      <line x1="330" y1="34" x2="376" y2="34" stroke="#34d399" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="376" y="12" width="138" height="44" rx="6" fill="#13202c" stroke="#34d399" stroke-width="1.5"/>
      <text x="445" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.2" font-weight="600" fill="#5eead4">VERIFIED DEALS</text>
      <text x="445" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">QST 98 · $449 (-36%)</text>`,
    metrics: [
      { val: '28 shops', lbl: 'Live retailer feeds' },
      { val: 'USD / CAD', lbl: 'Normalized pricing' },
      { val: '2:00 demo', lbl: 'Recorded site walkthrough' }
    ],
    trace: `<span class="tok-comment"># Cross-retailer size &amp; discount match</span>\n<span class="tok-cmd">query</span>(category=<span class="tok-str">"skis"</span>, length_cm=<span class="tok-str">"178"</span>, max_usd=500)\n✓ Matched QST 98 across evo ($449, -36%), Backcountry, Corbetts`
  },
  perks: {
    name: 'Perks Reminder',
    route: 'clifan.com/perks-reminder/',
    href: 'perks-reminder/',
    art: 'assets/project-perks-diagram.svg',
    repo: 'https://www.perks-reminder.com/',
    repoLabel: 'Launch perks-reminder.com ↗',
    summary: 'Free, open-source credit card benefits, welcome bonus, and annual-fee ROI tracker with duplicate physical-card support and zero bank logins.',
    pillars: ['local'],
    diagram: `
      <rect x="6" y="12" width="124" height="44" rx="6" fill="#13202c" stroke="#60a5fa" stroke-width="1.5"/>
      <text x="68" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#93c5fd">PHYSICAL CARDS</text>
      <text x="68" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">Amex #1 · #2 · CSR</text>
      <path d="M130 34 L176 13 M130 34 L176 34 M130 34 L176 55" stroke="#60a5fa" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="176" y="4" width="148" height="18" rx="4" fill="#13202c" stroke="#34d399" stroke-width="1.2"/>
      <text x="250" y="16" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#5eead4">Monthly ($15 Uber · $20 Dining)</text>
      <rect x="176" y="25" width="148" height="18" rx="4" fill="#13202c" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="250" y="37" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#fcd34d">Quarterly / Semi ($50 Saks)</text>
      <rect x="176" y="46" width="148" height="18" rx="4" fill="#13202c" stroke="#34d399" stroke-width="1.2"/>
      <text x="250" y="58" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#5eead4">Annual ($300 Travel Credit)</text>
      <path d="M324 13 L372 34 M324 34 L372 34 M324 55 L372 34" stroke="#34d399" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="372" y="12" width="142" height="44" rx="6" fill="#13202c" stroke="#34d399" stroke-width="1.5"/>
      <text x="443" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.2" font-weight="600" fill="#5eead4">NET ROI +$1,145</text>
      <text x="443" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">0 Bank Logins · JSON</text>`,
    metrics: [
      { val: '18★ GitHub', lbl: 'Open-source MIT' },
      { val: '0 logins', lbl: 'No Plaid or bank auth' },
      { val: 'JSON export', lbl: 'Portable user data' }
    ],
    trace: `<span class="tok-comment"># Physical-card benefit cycle &amp; net annual-fee ROI check</span>\n<span class="tok-cmd">$ npm run</span> card-template:validate\n✓ 4 physical cards tracked · Net ROI +$1,145 · JSON backup exported`
  },
  brief: {
    name: 'AI Builder Brief',
    route: 'clifan.com/ai-builder-brief/',
    href: 'ai-builder-brief/',
    art: 'assets/project-brief-diagram.svg',
    repo: 'journal/ai-builder-brief/',
    repoLabel: 'Browse 59 daily briefs →',
    summary: 'Source-linked daily AI engineering developments and builder field notes distilled into evidence-gated Top 10 briefs with primary receipts.',
    pillars: ['ml', 'agents', 'eval'],
    diagram: `
      <polygon points="6,6 138,16 138,52 6,62" fill="#13202c" stroke="#60a5fa" stroke-width="1.5"/>
      <text x="68" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.8" font-weight="600" fill="#93c5fd">140+ RAW SIGNALS</text>
      <text x="68" y="43" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6.8" fill="#cbd5e1">Commits · ArXiv · HN</text>
      <line x1="138" y1="34" x2="184" y2="34" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="184" y="12" width="150" height="44" rx="6" fill="#13202c" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="259" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.2" font-weight="600" fill="#fcd34d">PRIMARY RECEIPT GATE</text>
      <text x="259" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">10/10 Links Verified ✓</text>
      <line x1="334" y1="34" x2="380" y2="34" stroke="#34d399" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="380" y="12" width="134" height="44" rx="6" fill="#13202c" stroke="#34d399" stroke-width="1.5"/>
      <text x="447" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.2" font-weight="600" fill="#5eead4">TOP 10 DAILY BRIEF</text>
      <text x="447" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">59+ Published Editions</text>`,
    metrics: [
      { val: '59+ briefs', lbl: 'Published daily archive' },
      { val: '10 stories', lbl: 'Per daily edition' },
      { val: '100% linked', lbl: 'Primary commits & papers' }
    ],
    trace: `<span class="tok-comment"># Evidence gate: every claim requires primary artifact</span>\n<span class="tok-cmd">verify_brief</span>(<span class="tok-str">"2026-11-06.md"</span>) -> 10/10 primary links verified\n✓ Published to clifan.com/journal/ai-builder-brief/2026-11-06.html`
  },
  nitan: {
    name: 'Nitan Podcast (泥潭播客)',
    route: 'clifan.com/nitan-podcast/',
    href: 'nitan-podcast/',
    art: 'assets/project-nitan-diagram.svg',
    repo: 'https://github.com/lifan-builds/nitan-podcast',
    repoLabel: 'lifan-builds/nitan-podcast ↗',
    summary: 'Weekly six-minute Chinese audio digest synthesized from high-signal USCardForum discussions and shipped with verified thread receipts via RSS.',
    pillars: ['ml', 'eval'],
    diagram: `
      <rect x="6" y="12" width="128" height="44" rx="6" fill="#13202c" stroke="#60a5fa" stroke-width="1.5"/>
      <text x="70" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#93c5fd">USCARDFORUM</text>
      <text x="70" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">Cited Thread Clusters</text>
      <line x1="134" y1="34" x2="176" y2="34" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="176" y="8" width="164" height="52" rx="6" fill="#13202c" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="258" y="23" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.8" font-weight="600" fill="#fcd34d">DUAL-HOST ZH AUDIO (6:00)</text>
      <g fill="#34d399">
        <rect x="196" y="36" width="4" height="14" rx="1"/><rect x="206" y="30" width="4" height="22" rx="1"/>
        <rect x="216" y="34" width="4" height="16" rx="1"/><rect x="226" y="28" width="4" height="26" rx="1"/>
        <rect x="236" y="35" width="4" height="14" rx="1"/><rect x="246" y="31" width="4" height="20" rx="1"/>
        <rect x="256" y="27" width="4" height="26" rx="1"/><rect x="266" y="34" width="4" height="16" rx="1"/>
        <rect x="276" y="30" width="4" height="22" rx="1"/><rect x="286" y="28" width="4" height="25" rx="1"/>
        <rect x="296" y="35" width="4" height="14" rx="1"/><rect x="306" y="31" width="4" height="20" rx="1"/>
        <rect x="316" y="36" width="4" height="12" rx="1"/>
      </g>
      <line x1="340" y1="34" x2="382" y2="34" stroke="#34d399" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="382" y="12" width="132" height="44" rx="6" fill="#13202c" stroke="#34d399" stroke-width="1.5"/>
      <text x="448" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#5eead4">RSS + SHOW NOTES</text>
      <text x="448" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">Apple · Spotify · Web</text>`,
    metrics: [
      { val: '6 min', lbl: 'Weekly audio briefing' },
      { val: 'RSS + Web', lbl: 'Apple & Spotify feeds' },
      { val: 'CastForge', lbl: 'Validated TTS pipeline' }
    ],
    trace: `<span class="tok-comment"># End-to-end source-to-audio validation stage</span>\n<span class="tok-cmd">castforge build</span> --source uscardforum --validate-audio\n✓ Episode rendered · source links &amp; chapters verified`
  },
  foliofen: {
    name: 'Foliofen CLI',
    route: 'clifan.com/foliofen-cli/',
    href: 'foliofen-cli/',
    art: 'assets/project-foliofen-diagram.svg',
    repo: 'https://github.com/lifan-builds/foliofen-cli',
    repoLabel: 'lifan-builds/foliofen-cli ↗',
    summary: 'Local-first CLI for exporting patient-owned Epic MyChart health records into deterministic Markdown or JSONL with zero cloud custody.',
    pillars: ['local', 'eval'],
    diagram: `
      <rect x="6" y="12" width="122" height="44" rx="6" fill="#13202c" stroke="#60a5fa" stroke-width="1.5"/>
      <text x="67" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#93c5fd">EPIC MYCHART</text>
      <text x="67" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">Authenticated Tab</text>
      <line x1="128" y1="34" x2="170" y2="34" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="170" y="22" width="154" height="38" rx="6" fill="#13202c" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="247" y="38" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#fcd34d">PATIENT GUARD ✓</text>
      <text x="247" y="51" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="#cbd5e1">--require-active-patient</text>
      <rect x="170" y="2" width="154" height="15" rx="3" fill="#2a1215" stroke="#f87171" stroke-width="1"/>
      <text x="247" y="12" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6.8" fill="#fca5a5">✗ 0 Cloud Custody · PHI Redacted</text>
      <line x1="324" y1="41" x2="368" y2="34" stroke="#34d399" stroke-width="1.6" stroke-dasharray="5 4" class="signal-flow-line"/>
      <rect x="368" y="12" width="146" height="44" rx="6" fill="#13202c" stroke="#34d399" stroke-width="1.5"/>
      <text x="441" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#5eead4">POSIX 0600 EXPORT</text>
      <text x="441" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.2" fill="#cbd5e1">Deterministic MD + JSONL</text>`,
    metrics: [
      { val: '0 cloud', lbl: 'Local POSIX 0600 store' },
      { val: 'MD + JSONL', lbl: 'Deterministic chunks' },
      { val: 'Patient guard', lbl: 'Exact chart-owner check' }
    ],
    trace: `<span class="tok-comment"># Patient-scoped sync &amp; PHI-free diagnostic summary</span>\n<span class="tok-cmd">$ npx @lifan-builds/mychart-cli</span> demo\n✓ Verified --require-active-patient · exported Markdown &amp; JSONL`
  },
  castforge: {
    name: 'CastForge',
    route: 'clifan.com/castforge/',
    href: 'castforge/',
    art: 'assets/project-castforge-diagram.svg',
    repo: 'https://pypi.org/project/castforge/',
    repoLabel: 'PyPI: castforge 0.1.3 ↗',
    summary: 'Open-source Python framework for source-transparent podcast pipelines with StoryCluster evidence gates, NotebookLM audio, and atomic R2 + RSS checks.',
    pillars: ['ml', 'eval'],
    diagram: `
      <rect x="6" y="12" width="106" height="44" rx="6" fill="#13202c" stroke="#60a5fa" stroke-width="1.4"/>
      <text x="59" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.6" font-weight="600" fill="#93c5fd">1. DISCOVER</text>
      <text x="59" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6.8" fill="#cbd5e1">StoryCluster Gate</text>
      <line x1="112" y1="34" x2="138" y2="34" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4 3" class="signal-flow-line"/>
      <rect x="138" y="12" width="106" height="44" rx="6" fill="#13202c" stroke="#60a5fa" stroke-width="1.4"/>
      <text x="191" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.6" font-weight="600" fill="#93c5fd">2. SCRIPT</text>
      <text x="191" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6.8" fill="#cbd5e1">Manifest Schema v2</text>
      <line x1="244" y1="34" x2="270" y2="34" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3" class="signal-flow-line"/>
      <rect x="270" y="12" width="106" height="44" rx="6" fill="#13202c" stroke="#f59e0b" stroke-width="1.4"/>
      <text x="323" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.6" font-weight="600" fill="#fcd34d">3. AUDIO</text>
      <text x="323" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6.8" fill="#cbd5e1">MP3 Ceiling Check</text>
      <line x1="376" y1="34" x2="402" y2="34" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4 3" class="signal-flow-line"/>
      <rect x="402" y="12" width="112" height="44" rx="6" fill="#13202c" stroke="#34d399" stroke-width="1.5"/>
      <text x="458" y="31" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7.6" font-weight="600" fill="#5eead4">4. PUBLISH ✓</text>
      <text x="458" y="44" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6.8" fill="#cbd5e1">R2 HEAD -> RSS</text>`,
    metrics: [
      { val: 'PyPI 0.1.3', lbl: 'Trusted publishing' },
      { val: 'Schema v2', lbl: 'Cited EpisodeManifest' },
      { val: 'Atomic RSS', lbl: 'R2 byte-length HEAD gate' }
    ],
    trace: `<span class="tok-comment"># Fail-closed source-to-audio validation pipeline</span>\n<span class="tok-cmd">$ castforge validate</span> --config podcast.yaml --check-public\n✓ 10 cited clusters · MP3 duration &lt; ceiling · R2 200 OK verified`
  }
};

const CONCEPT_LEAD_BUILD = {
  all: 'fmu',
  local: 'perks',
  ml: 'brief',
  agents: 'fmu',
  eval: 'fmu'
};

const LOOP_DATA = {
  source: {
    title: '01 · Source — Anchor on primary artifacts, not summaries',
    desc: 'Start from raw commits, protocol traces, DOM trees, or user failure logs rather than secondary commentary. Every brief and benchmark records its exact input state.',
    proof: 'Applied in: AI Builder Brief (source-linked gates) & Foliofen CLI (live portal DOM snapshots)'
  },
  build: {
    title: '02 · Build — Keep personal data local and interfaces fast',
    desc: 'Prefer zero-cloud local storage, small schemas (268 tokens in fmu), and native OS primitives so tools work without hijacking focus or leaking credentials.',
    proof: 'Applied in: Faster Mac Use (fmu-ax + Chrome MV3 bridge) & Agent Autofill (AES-GCM vault)'
  },
  evaluate: {
    title: '03 · Evaluate — Turn the goal into a repeatable check',
    desc: 'Before optimizing or shipping, encode the target outcome as a deterministic harness across real workloads—measuring tokens, wall-clock latency, and pass rates.',
    proof: 'Applied in: Faster Mac Use (5-workload, 15-system benchmark suite)'
  },
  inspect: {
    title: '04 · Inspect — Leave an auditable trail of failures and diffs',
    desc: 'Log privacy-safe sub-phase timings, visual diffs, and holdout regressions so a human or agent can see why a step failed in seconds.',
    proof: 'Applied in: ~/.fmu/logs/perf-*.jsonl & Context Harness filesystem memory'
  },
  improve: {
    title: '05 · Improve — Turn observed failures into harness guards',
    desc: 'Feed real edge cases directly back into tests, prompts, and skill rules so the next run does not repeat the same mistake.',
    proof: 'Applied in: QuotaSwitch auto-rotation & self-improving skill snapshots'
  },
  ship: {
    title: '06 · Ship — Require human approval before external state',
    desc: 'Pause at explicit checkpoints before submitting forms, publishing posts, or mutating external accounts, then verify the live result.',
    proof: 'Applied in: Agent Autofill approval gates, Foliofen CLI, & clifan.com releases'
  }
};

// 1. Theme Management
const root = document.documentElement;
const themeBtn = document.querySelector('[data-theme-toggle]');

function applyTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
  if (themeBtn) {
    const label = themeBtn.querySelector('[data-theme-label]');
    if (label) label.textContent = theme === 'dark' ? 'Dark' : 'Light';
    themeBtn.setAttribute('aria-pressed', String(theme === 'dark'));
  }
}

const savedTheme = localStorage.getItem('clifan-theme') || 'light';
applyTheme(savedTheme);

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('clifan-theme', next);
    applyTheme(next);
  });
}

// 2. Interactive Build Stage & Project-Specific Architecture Schematics
const stageTabs = [...document.querySelectorAll('.stage-tab[data-build]')];
const releaseCards = [...document.querySelectorAll('.release-card[data-build]')];
const ledgerRows = [...document.querySelectorAll('.ledger-row[data-pillars]')];
const stageBody = document.getElementById('stage-body-panel');

function selectBuild(key) {
  const item = BUILD_DATA[key];
  if (!item) return;

  for (const tab of stageTabs) {
    const active = tab.dataset.build === key;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  }

  for (const card of releaseCards) {
    card.classList.toggle('is-active', card.dataset.build === key);
  }

  if (stageBody) {
    stageBody.classList.add('is-switching');
    window.clearTimeout(stageBody._switchTimer);
    stageBody._switchTimer = window.setTimeout(() => {
      stageBody.classList.remove('is-switching');
    }, 120);
  }

  const nameEl = document.getElementById('stage-project-name');
  const routeEl = document.getElementById('stage-route-pill');
  const summaryEl = document.getElementById('stage-summary');
  const signalSvgEl = document.getElementById('stage-signal-svg');
  const metricsEl = document.getElementById('stage-metrics');
  const traceEl = document.getElementById('stage-trace');
  const stageArtEl = document.getElementById('stage-art-img');
  const primaryLink = document.getElementById('stage-primary-link');
  const secondaryLink = document.getElementById('stage-secondary-link');

  if (nameEl) nameEl.textContent = item.name;
  if (routeEl) routeEl.textContent = item.route;
  if (summaryEl) summaryEl.textContent = item.summary;
  if (signalSvgEl && item.diagram) signalSvgEl.innerHTML = item.diagram;
  if (stageArtEl && item.art) stageArtEl.src = item.art;

  if (metricsEl) {
    metricsEl.innerHTML = item.metrics
      .map(
        m =>
          `<div class="stage-metric-cell"><span class="stage-metric-val">${m.val}</span><span class="stage-metric-lbl">${m.lbl}</span></div>`
      )
      .join('');
  }
  if (traceEl) traceEl.innerHTML = item.trace;
  if (primaryLink) {
    primaryLink.href = item.href;
    primaryLink.textContent = `Open ${item.route} →`;
  }
  if (secondaryLink) {
    secondaryLink.href = item.repo;
    secondaryLink.textContent = item.repoLabel;
  }
}

for (const tab of stageTabs) {
  tab.addEventListener('click', () => selectBuild(tab.dataset.build));
}

for (const card of releaseCards) {
  card.addEventListener('mouseenter', () => selectBuild(card.dataset.build));
  card.addEventListener('focusin', () => selectBuild(card.dataset.build));
  card.addEventListener('pointermove', e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
}

for (const row of ledgerRows) {
  if (row.dataset.build) {
    row.addEventListener('mouseenter', () => selectBuild(row.dataset.build));
    row.addEventListener('focusin', () => selectBuild(row.dataset.build));
  }
}

// 3. Interactive Cover Portal, Constellation Canvas & Click-to-Open Workbench
const coverPortal = document.getElementById('cover-portal');
const fullWorkbench = document.getElementById('full-workbench');
const coverCards = [...document.querySelectorAll('.cover-card[data-open-pillar]')];
const coverOpenAllBtn = document.getElementById('cover-open-all');
const coverBackBtn = document.getElementById('cover-back-btn');
const coverTickerTag = document.getElementById('cover-ticker-tag');
const coverTickerText = document.getElementById('cover-ticker-text');
const wordmarkHome = document.getElementById('wordmark-home');
const navWorkbenchLinks = [...document.querySelectorAll('[data-open-workbench]')];
const conceptChips = [...document.querySelectorAll('.concept-chip[data-concept]')];
const heroConceptPills = [...document.querySelectorAll('.focus-item[data-concept-pill]')];

const COVER_TICKER_DATA = {
  local: {
    tag: '01 · LOCAL',
    text: 'Faster Mac Use · Agent Autofill · QuotaSwitch · Perks Reminder · Foliofen CLI'
  },
  ml: {
    tag: '02 · ML',
    text: 'AI Builder Brief · FreshPowder · CastForge · Nitan Podcast'
  },
  agents: {
    tag: '03 · AGENTS',
    text: 'Faster Mac Use · Agent Autofill · QuotaSwitch · CastForge'
  },
  eval: {
    tag: '04 · EVALS',
    text: '114× token benchmark · 0.0 px cursor drift · Primary-source receipts'
  }
};

function updateConceptDOM(concept) {
  for (const chip of conceptChips) {
    chip.setAttribute('aria-pressed', String(chip.dataset.concept === concept));
  }
  for (const pill of heroConceptPills) {
    pill.classList.toggle('is-active', concept === 'all' ? pill.dataset.conceptPill === 'local' : pill.dataset.conceptPill === concept);
  }
  for (const card of releaseCards) {
    const pillars = (card.dataset.pillars || '').split(/\s+/);
    const match = concept === 'all' || pillars.includes(concept);
    card.classList.toggle('is-dimmed', !match);
  }
  for (const row of ledgerRows) {
    const pillars = (row.dataset.pillars || '').split(/\s+/);
    const match = concept === 'all' || pillars.includes(concept);
    row.classList.toggle('is-dimmed', !match);
  }
  const leadBuild = CONCEPT_LEAD_BUILD[concept];
  if (leadBuild) selectBuild(leadBuild);
}

function applyConceptFilter(concept) {
  if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.startViewTransition(() => updateConceptDOM(concept));
  } else {
    updateConceptDOM(concept);
  }
}

function openWorkbench(concept = 'all', scrollSelector = null) {
  if (!coverPortal || !fullWorkbench) return;
  const doOpen = () => {
    document.body.setAttribute('data-cover', 'open');
    coverPortal.hidden = true;
    fullWorkbench.hidden = false;
    updateConceptDOM(concept);
  };

  if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const vt = document.startViewTransition(doOpen);
    vt.finished.then(() => {
      if (scrollSelector) {
        const target = document.querySelector(scrollSelector);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  } else {
    doOpen();
    if (scrollSelector) {
      const target = document.querySelector(scrollSelector);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

function closeWorkbench() {
  if (!coverPortal || !fullWorkbench) return;
  const doClose = () => {
    document.body.setAttribute('data-cover', 'closed');
    fullWorkbench.hidden = true;
    coverPortal.hidden = false;
  };
  if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.startViewTransition(doClose);
  } else {
    doClose();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

for (const card of coverCards) {
  const pillar = card.dataset.openPillar;
  card.addEventListener('mouseenter', () => {
    for (const c of coverCards) c.classList.toggle('is-focused', c === card);
    const info = COVER_TICKER_DATA[pillar];
    if (info && coverTickerTag && coverTickerText) {
      coverTickerTag.textContent = info.tag;
      coverTickerText.textContent = info.text;
    }
  });
  card.addEventListener('pointermove', e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
  card.addEventListener('click', () => {
    openWorkbench(pillar, '#quests');
  });
}

if (coverOpenAllBtn) {
  coverOpenAllBtn.addEventListener('click', () => openWorkbench('all'));
}

if (coverBackBtn) {
  coverBackBtn.addEventListener('click', () => closeWorkbench());
}

if (wordmarkHome && coverPortal) {
  wordmarkHome.addEventListener('click', e => {
    if (document.body.getAttribute('data-cover') === 'open') {
      e.preventDefault();
      closeWorkbench();
    }
  });
}

for (const link of navWorkbenchLinks) {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && document.body.getAttribute('data-cover') === 'closed') {
      e.preventDefault();
      openWorkbench('all', href);
    }
  });
}

// Auto-open workbench if arriving with a section hash (#quests, #journal, #about) or ?view=full
if (coverPortal && fullWorkbench) {
  const hash = window.location.hash;
  const params = new URLSearchParams(window.location.search);
  if (hash === '#quests' || hash === '#journal' || hash === '#about' || params.get('view') === 'full') {
    document.body.setAttribute('data-cover', 'open');
    coverPortal.hidden = true;
    fullWorkbench.hidden = false;
  }
}

// Interactive Signal Constellation Canvas on Cover Portal
const coverCanvas = document.getElementById('cover-canvas');
if (coverCanvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const ctx = coverCanvas.getContext('2d');
  let width = 0;
  let height = 0;
  const pointer = { x: -999, y: -999 };
  const nodes = Array.from({ length: 24 }, (_, i) => ({
    x: ((i * 97) % 100) / 100,
    y: ((i * 53 + 17) % 100) / 100,
    vx: ((i % 2 === 0 ? 1 : -1) * (0.08 + (i % 5) * 0.02)),
    vy: (((i % 3 === 0 ? 1 : -1)) * (0.06 + (i % 4) * 0.02)),
    r: i % 4 === 0 ? 2.6 : 1.8
  }));

  function resizeCanvas() {
    const rect = coverCanvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    coverCanvas.width = width * dpr;
    coverCanvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  if (coverPortal) {
    coverPortal.addEventListener('pointermove', e => {
      const rect = coverCanvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    });
    coverPortal.addEventListener('pointerleave', () => {
      pointer.x = -999;
      pointer.y = -999;
    });
  }

  function drawCoverField() {
    if (!coverPortal || coverPortal.hidden) {
      requestAnimationFrame(drawCoverField);
      return;
    }
    ctx.clearRect(0, 0, width, height);
    const isDark = root.getAttribute('data-theme') === 'dark';
    const dotColor = isDark ? 'rgba(102, 166, 255, 0.36)' : 'rgba(8, 71, 196, 0.24)';
    const lineColor = isDark ? 'rgba(52, 211, 153, 0.14)' : 'rgba(8, 102, 78, 0.11)';

    for (const n of nodes) {
      n.x += n.vx / Math.max(width, 300);
      n.y += n.vy / Math.max(height, 300);
      if (n.x < 0.02 || n.x > 0.98) n.vx *= -1;
      if (n.y < 0.04 || n.y > 0.96) n.vy *= -1;
    }

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const ax = a.x * width;
      const ay = a.y * height;
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const bx = b.x * width;
        const by = b.y * height;
        const dist = Math.hypot(ax - bx, ay - by);
        if (dist < 155) {
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }
      if (pointer.x > 0) {
        const pDist = Math.hypot(ax - pointer.x, ay - pointer.y);
        if (pDist < 180) {
          ctx.strokeStyle = dotColor;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = dotColor;
      ctx.beginPath();
      ctx.arc(ax, ay, a.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(drawCoverField);
  }
  requestAnimationFrame(drawCoverField);
}

for (const chip of conceptChips) {
  chip.addEventListener('click', () => applyConceptFilter(chip.dataset.concept));
}

// 4. Interactive Evaluation Loop (About Me)
const loopBtns = [...document.querySelectorAll('.loop-step-btn[data-step]')];

function selectLoopStep(stepKey) {
  const info = LOOP_DATA[stepKey];
  if (!info) return;

  for (const btn of loopBtns) {
    const active = btn.dataset.step === stepKey;
    btn.setAttribute('aria-selected', String(active));
  }

  const titleEl = document.getElementById('loop-detail-title');
  const descEl = document.getElementById('loop-detail-desc');
  const proofEl = document.getElementById('loop-detail-proof');
  if (titleEl) titleEl.textContent = info.title;
  if (descEl) descEl.textContent = info.desc;
  if (proofEl) proofEl.textContent = info.proof;
}

for (const btn of loopBtns) {
  btn.addEventListener('click', () => selectLoopStep(btn.dataset.step));
}

// 5. Journal Filter Pills (/journal/) & Brief Archive Search (/journal/ai-builder-brief/)
const filterBtns = [...document.querySelectorAll('.filter-pill[data-filter]')];
if (filterBtns.length > 0) {
  const essaysSec = document.getElementById('journal-essays-section');
  const briefsSec = document.getElementById('journal-briefs-section');
  for (const btn of filterBtns) {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.filter;
      for (const b of filterBtns) {
        b.setAttribute('aria-pressed', String(b === btn));
      }
      if (essaysSec) essaysSec.hidden = mode === 'briefs';
      if (briefsSec) briefsSec.hidden = mode === 'essays';
    });
  }
}

const briefSearch = document.getElementById('brief-search');
const briefCards = [...document.querySelectorAll('.brief-archive-card[data-search]')];
const briefCount = document.getElementById('brief-search-count');
if (briefSearch && briefCards.length > 0) {
  briefSearch.addEventListener('input', () => {
    const q = briefSearch.value.trim().toLowerCase();
    let visible = 0;
    for (const card of briefCards) {
      const hay = card.dataset.search || '';
      const match = !q || hay.includes(q);
      card.hidden = !match;
      if (match) visible += 1;
    }
    if (briefCount) {
      briefCount.textContent = `${visible} of ${briefCards.length} editions`;
    }
  });
}

// 6. Keyboard Shortcuts (Enter to open cover, 1-9 for Build Stage, t for Theme, / for Search)
window.addEventListener('keydown', event => {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement?.isContentEditable) return;

  if (event.key === '/' && briefSearch) {
    event.preventDefault();
    briefSearch.focus();
    return;
  }

  if (event.key === 't' || event.key === 'T') {
    if (themeBtn) themeBtn.click();
    return;
  }

  if (event.key === 'Enter' && tag !== 'BUTTON' && tag !== 'A' && document.body.getAttribute('data-cover') === 'closed') {
    event.preventDefault();
    openWorkbench('all');
    return;
  }

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const idx = keys.indexOf(event.key);
  if (idx !== -1 && stageTabs[idx]) {
    if (document.body.getAttribute('data-cover') === 'closed') {
      openWorkbench('all');
    }
    selectBuild(stageTabs[idx].dataset.build);
  }
});
