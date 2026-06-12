const CACHE_NAME = 'mecaweb-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './textos.js',
  './games.js',
  './logo1.png',
  './logo2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve la versión en caché si existe, si no, hace la petición a la red
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
