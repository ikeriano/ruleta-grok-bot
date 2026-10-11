// Caché para jugar sin conexión una vez instalada (como la PWA del APK de referencia). Las voces se guardan al usarse.
const C = 'ruleta3d-v1.0';
const BASE = ['./', 'index.html', 'style.css', 'menu.css', 'rs.css', 'js/app.js', 'data/paneles_extra.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'voz/index.json', 'voz/q/index.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(BASE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => { if (r.ok && new URL(e.request.url).origin === location.origin) { const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); } return r; }).catch(() => caches.match(e.request)));
});
