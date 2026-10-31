// Lightweight enhancement: keep the download link usable without JavaScript.
document.querySelectorAll('a[download]').forEach(link => {
  link.addEventListener('click', () => {
    const label = link.querySelector('strong');
    if (label) {
      const original = label.textContent;
      label.textContent = 'Starting download…';
      window.setTimeout(() => { label.textContent = original; }, 2200);
    }
  });
});
