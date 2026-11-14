// 9029スクリプト オフライン用。アプリを更新したら VERSION の数字を上げてください。
const VERSION = '9029script-v19';
const FILES = ['./', './index.html', './manifest.webmanifest', './logo.png', './icon-180.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // 画面本体：電波があれば最新を取りに行き、なければ保存済みを使う
    const net = fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; });
    const slow = new Promise((_, ng) => setTimeout(ng, 3000)); // 電波が弱いときは3秒で保存済みに切り替え
    e.respondWith(Promise.race([net, slow]).catch(() => caches.match('./index.html').then(hit => hit || net)));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
