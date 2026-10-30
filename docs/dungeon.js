const dialogs = [...document.querySelectorAll('dialog')];

function openFromHash() {
  const next = dialogs.find(dialog => `#${dialog.id}` === location.hash);
  for (const dialog of dialogs) {
    if (dialog.open && dialog !== next) dialog.close();
  }
  if (next && !next.open) next.showModal();
}

for (const dialog of dialogs) {
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    // Only the backdrop dismisses; whitespace inside the panel should not.
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (location.hash === `#${dialog.id}`) history.replaceState(null, '', location.pathname + location.search);
    if (!dialogs.some(item => item.open)) document.querySelector(`.room-object[href="#${dialog.id}"]`).focus({ preventScroll: true });
  });
}
window.addEventListener('hashchange', openFromHash);
openFromHash();
