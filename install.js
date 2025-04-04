let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Previene que el mini-infobar aparezca en mobile
  e.preventDefault();
  // Guarda el evento para que pueda ser activado luego
  deferredPrompt = e;
  // Muestra el botón de instalación (puedes agregar esto en tu UI)
  showInstallButton();
});

function showInstallButton() {
  if (isMobile()) {
    const installButton = document.createElement('button');
    installButton.textContent = 'Instalar App';
    installButton.className = 'install-button';
    installButton.onclick = installApp;
    document.body.appendChild(installButton);
  }
}

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  }
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}