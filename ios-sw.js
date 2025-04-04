// Service Worker especial para iOS
self.addEventListener('install', (event) => {
    self.skipWaiting();
  });
  
  self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request.url.includes('dashboard') ? '/dashboard.html' : '/index.html')
      ));
    } else {
      event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
      );
    }
  });