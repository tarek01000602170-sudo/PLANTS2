const CACHE_NAME = 'hasad-cache-v1';
const assetsToCache = [
  '/',
  'index.html',
  'manifest.json'
];

// تثبيت الـ Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// تفعيل الخدمة حتى لو كان الموبايل أوفلاين
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});