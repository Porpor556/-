self.addEventListener("install", (event) => {
  console.log("Service Worker ติดตั้งแล้ว");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
