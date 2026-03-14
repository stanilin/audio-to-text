self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
  // Позволяет приложению работать онлайн/оффлайн
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
