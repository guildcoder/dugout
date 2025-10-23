// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}

// iOS Add-to-Home prompt
window.addEventListener('load', () => {
  const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
  const isInStandalone = ('standalone' in window.navigator) && window.navigator.standalone;

  if (isIos && !isInStandalone && !localStorage.getItem('installPromptShown')) {
    const banner = document.createElement('div');
    banner.className = 'install-banner';
    banner.innerHTML = `
      <p>📱 Add Dugout to your home screen for a full app experience.<br>
      Tap <strong>Share → Add to Home Screen</strong></p>
      <button id="closeBanner">Got it</button>
    `;
    document.body.appendChild(banner);
    document.getElementById('closeBanner').onclick = () => {
      banner.remove();
      localStorage.setItem('installPromptShown', 'true');
    };
  }
});
