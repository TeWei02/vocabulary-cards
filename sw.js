/* 單字卡睡眠學習 PWA Service Worker v7（雙語版） */
var CACHE = "vocab-cards-v7";
var PRECACHE = [
  "index.html",
  "all.html",
  "level1.html",
  "level2.html",
  "level3.html",
  "level4.html",
  "level5.html",
  "level6.html",
  "vocab_index.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll(PRECACHE);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (e) {
  var url = e.request.url;
  // 仅处理同源 GET 请求（HTML/manifest/图标）；远端图片（img 等）不缓存
  if (e.request.method !== "GET") return;
  var u = new URL(url);
  if (u.origin !== self.location.origin) return;
  // 缓存优先：命中直接返回，未命中回源并放入缓存
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).then(function (res) {
        if (res && res.status === 200 && res.type === "basic") {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      });
    })
  );
});
