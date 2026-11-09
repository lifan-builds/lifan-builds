const BUILD_DATA = {
  fmu: {
    name: 'Faster Mac Use (fmu)',
    route: 'clifan.com/faster-mac-use/',
    href: 'faster-mac-use/',
    repo: 'https://github.com/lifan-builds/faster-mac-use',
    repoLabel: 'lifan-builds/faster-mac-use ↗',
    summary: 'Background multi-cursor browser & macOS computer-use engine driving unfocused Chrome tab groups and native apps in parallel.',
    pillars: ['local', 'agents', 'eval'],
    signals: {
      local: 'macOS AX + CDP',
      ml: '268-tok schema',
      agents: '3-cursor swarm',
      eval: '114× fewer tok'
    },
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
    repo: 'agent-autofill/demo/',
    repoLabel: 'Interactive approval demo →',
    summary: 'Local-first personal vault and MCP broker for macOS agents. Share scoped fields, origin-bound logins, and 2FA codes with explicit human approval.',
    pillars: ['local', 'agents', 'eval'],
    signals: {
      local: 'AES-GCM vault',
      ml: 'Field matcher',
      agents: 'MCP broker',
      eval: 'Origin gate ✓'
    },
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
    repo: 'https://github.com/lifan-builds/quotaswitch',
    repoLabel: 'lifan-builds/quotaswitch ↗',
    summary: 'Unified quota-driven multi-account switcher and 30s background auto-rotator for Google Antigravity (agy) and OpenAI Codex (codex).',
    pillars: ['local', 'ml', 'agents'],
    signals: {
      local: 'Keychain store',
      ml: 'Model waterfall',
      agents: '30s auto-rotate',
      eval: 'Mid-turn resume'
    },
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
    repo: 'https://freshpowder.clifan.com/',
    repoLabel: 'Launch live deal finder ↗',
    summary: 'Ski and snowboard deal aggregator across 28 North American retailers, normalized across USD/CAD and filtered by exact size and budget.',
    pillars: ['local', 'eval'],
    signals: {
      local: '28 shop feeds',
      ml: 'Entity match',
      agents: '6h collector',
      eval: 'USD/CAD audit'
    },
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
    repo: 'https://www.perks-reminder.com/',
    repoLabel: 'Launch perks-reminder.com ↗',
    summary: 'Free, open-source credit card benefits, welcome bonus, and annual-fee ROI tracker with duplicate physical-card support and zero bank logins.',
    pillars: ['local'],
    signals: {
      local: '0 bank logins',
      ml: 'Static catalog',
      agents: 'Cycle alerts',
      eval: 'Schema check ✓'
    },
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
    repo: 'journal/ai-builder-brief/',
    repoLabel: 'Browse 59 daily briefs →',
    summary: 'Source-linked daily AI engineering developments and builder field notes distilled into evidence-gated Top 10 briefs with primary receipts.',
    pillars: ['ml', 'agents', 'eval'],
    signals: {
      local: '59 MD archive',
      ml: 'Frontier ML',
      agents: 'Daily collector',
      eval: 'Primary gate ✓'
    },
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
    repo: 'https://github.com/lifan-builds/nitan-podcast',
    repoLabel: 'lifan-builds/nitan-podcast ↗',
    summary: 'Weekly six-minute Chinese audio digest synthesized from high-signal USCardForum discussions and shipped with verified thread receipts via RSS.',
    pillars: ['ml', 'eval'],
    signals: {
      local: 'Show manifest',
      ml: 'NotebookLM TTS',
      agents: 'Nitan MCP',
      eval: 'Audio HEAD ✓'
    },
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
    repo: 'https://github.com/lifan-builds/foliofen-cli',
    repoLabel: 'lifan-builds/foliofen-cli ↗',
    summary: 'Local-first CLI for exporting patient-owned Epic MyChart health records into deterministic Markdown or JSONL with zero cloud custody.',
    pillars: ['local', 'eval'],
    signals: {
      local: 'POSIX 0600',
      ml: 'Vision PDF OCR',
      agents: 'Chrome harness',
      eval: 'Patient guard ✓'
    },
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
    repo: 'https://pypi.org/project/castforge/',
    repoLabel: 'PyPI: castforge 0.1.3 ↗',
    summary: 'Open-source Python framework for source-transparent podcast pipelines with StoryCluster evidence gates, NotebookLM audio, and atomic R2 + RSS checks.',
    pillars: ['ml', 'eval'],
    signals: {
      local: 'Offline fixtures',
      ml: 'NotebookLM API',
      agents: 'Stage hooks',
      eval: 'Atomic R2+RSS'
    },
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

// 2. Interactive Build Stage & 4-Pillar Signal Telemetry
const stageTabs = [...document.querySelectorAll('.stage-tab[data-build]')];
const releaseCards = [...document.querySelectorAll('.release-card[data-build]')];
const ledgerRows = [...document.querySelectorAll('.ledger-row[data-pillars]')];
const sigNodes = [...document.querySelectorAll('.sig-node[data-sig]')];
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
  const metricsEl = document.getElementById('stage-metrics');
  const traceEl = document.getElementById('stage-trace');
  const primaryLink = document.getElementById('stage-primary-link');
  const secondaryLink = document.getElementById('stage-secondary-link');

  if (nameEl) nameEl.textContent = item.name;
  if (routeEl) routeEl.textContent = item.route;
  if (summaryEl) summaryEl.textContent = item.summary;

  // Update 4-Pillar Signal SVG nodes
  if (item.signals) {
    for (const node of sigNodes) {
      const k = node.dataset.sig;
      const lit = item.pillars && item.pillars.includes(k);
      node.classList.toggle('is-lit', Boolean(lit));
      const sub = document.getElementById(`sig-sub-${k}`);
      if (sub && item.signals[k]) sub.textContent = item.signals[k];
    }
  }

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

// 3. 4-Pillar Concept Filter & View Transitions (Local Tools, ML, AI Agents, Evaluation)
const conceptChips = [...document.querySelectorAll('.concept-chip[data-concept]')];
const heroConceptPills = [...document.querySelectorAll('.focus-item[data-concept-pill]')];

function applyConceptFilter(concept) {
  const updateDOM = () => {
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
  };

  if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.startViewTransition(updateDOM);
  } else {
    updateDOM();
  }
}

for (const chip of conceptChips) {
  chip.addEventListener('click', () => applyConceptFilter(chip.dataset.concept));
}

for (const pill of heroConceptPills) {
  pill.addEventListener('mouseenter', () => {
    for (const p of heroConceptPills) p.classList.toggle('is-active', p === pill);
    const lead = CONCEPT_LEAD_BUILD[pill.dataset.conceptPill];
    if (lead) selectBuild(lead);
  });
  pill.addEventListener('click', () => {
    const c = pill.dataset.conceptPill;
    applyConceptFilter(c);
    const quests = document.getElementById('quests');
    if (quests) quests.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
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

// 6. Keyboard Shortcuts (1-6 for Build Stage, t for Theme, / for Search)
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

  const keys = ['1', '2', '3', '4', '5', '6'];
  const idx = keys.indexOf(event.key);
  if (idx !== -1 && stageTabs[idx]) {
    selectBuild(stageTabs[idx].dataset.build);
  }
});
