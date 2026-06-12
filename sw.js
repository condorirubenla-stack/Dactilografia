const CACHE_NAME = 'mecaweb-v4';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './textos.js',
  './games.js',
  './logo1.png',
  './logo2.png',
  './instalar/pwa.js',
  './instalar/icon-192.png',
  './instalar/icon-512.png'
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
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
