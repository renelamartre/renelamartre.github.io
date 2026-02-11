// Minimal no-op service worker (stops 404s for /sw.js)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
