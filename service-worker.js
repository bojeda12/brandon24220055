const CACHE_NAME = "panda-cache-v4";
const urlsToCache = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/animations.js",
  "./manifest.json",
  "./assets/pandaico.png",
  "./assets/panda.jpg",
  "./assets/bamboo.jpg",
  "./assets/cuidado.jpg",
  "./assets/habitad.jpeg",
  "./assets/panda.mp4"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
