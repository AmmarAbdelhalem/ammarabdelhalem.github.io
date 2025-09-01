self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("tazakkur-v1").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./فكيف اذا جئنا من كل امة بشهيد الشيخ محمد ايوب.mp4"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
