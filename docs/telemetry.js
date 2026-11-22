// Cookieless first-party anonymous counts (excludes /agent-autofill/ per OAuth policy and skips localhost).
(() => {
  if (typeof window === 'undefined') return;
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl) return;
  const host = location.hostname.toLowerCase();
  if (host !== 'clifan.com' && host !== 'www.clifan.com') return;
  if (location.pathname.startsWith('/agent-autofill')) return;

  const ENDPOINTS = [
    'https://stats.clifan.com/api/event',
    'https://clifan-umami.vercel.app/api/event',
  ];
  let activeIdx = 0;

  const postPayload = (idx, body) => {
    if (idx >= ENDPOINTS.length) return;
    fetch(ENDPOINTS[idx], {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
      mode: 'cors',
    }).then(
      (res) => { if (res.ok) activeIdx = idx; },
      () => postPayload(idx + 1, body),
    );
  };

  const send = (event, dims = {}) => {
    const body = JSON.stringify({
      site: 'clifan.com',
      event,
      path: location.pathname || '/',
      ref: document.referrer || '',
      dims,
    });
    postPayload(activeIdx, body);
  };

  window.clifanTrack = send;
  send('pageview');

  document.addEventListener('click', (e) => {
    const el = e.target?.closest?.('a[href], button');
    if (!el) return;
    if (el.tagName === 'A') {
      const href = el.getAttribute('href') || '';
      if (href.includes('github.com/lifan-builds')) {
        send('github_outbound', { href: href.slice(0, 120), path: location.pathname });
      }
      return;
    }
    if (el.hasAttribute('data-lang-btn')) {
      const card = el.closest('[data-thought-card]');
      send('journal_lang_switch', {
        lang: el.getAttribute('data-lang-btn') || '',
        entry: card?.id || '',
        path: location.pathname,
      });
      return;
    }
    if (!el.hasAttribute('data-theme-toggle')) {
      const idCls = `${el.id || ''} ${el.className || ''} ${el.getAttribute('aria-label') || ''}`.toLowerCase();
      const txt = (el.innerText || '').trim().toLowerCase();
      if (idCls.includes('copy') || txt === 'copy' || txt.startsWith('copy ')) {
        send('copy_install', { path: location.pathname });
      }
    }
  }, { capture: true, passive: true });
})();
