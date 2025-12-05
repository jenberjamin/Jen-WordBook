/* * LifeHub: Wordbook Service Worker
 * "The Digital Squirrel"
 * Caches assets for offline usage.
 */

const CACHE_NAME = 'wordbook-v1-storage';

// 1. The Shopping List
// These are the files we MUST have to work offline.
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/WORDBOOK.html',
    '/auto-taglist.js',
    '/manifest.json',
    // We cache the Google Fonts/Icons so the UI doesn't break offline
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
    'https://fonts.googleapis.com/css2?family=Century+Gothic:wght@400;700&display=swap'
];

// 2. INSTALLATION (The Hoarding Phase)
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing & Caching Assets...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 3. ACTIVATION (The Cleanup Phase)
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

// 4. FETCH (The Traffic Cop)
// Intercepts every request. Checks the cache first. If not there, goes to network.
self.addEventListener('fetch', (event) => {
    
    // Ignore non-GET requests (like saving data to Firebase)
    if (event.request.method !== 'GET') return;

    // Handle Firebase/Google CDN requests separately to allow "Stale-while-revalidate"
    // (This helps Firebase load even if the network is spotty)
    if (event.request.url.includes('firestore') || event.request.url.includes('firebase')) {
         return; // Let Firebase handle its own offline persistence logic
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // A. If found in cache, return it (Fast!)
            if (cachedResponse) {
                return cachedResponse;
            }

            // B. If not in cache, fetch from internet
            return fetch(event.request).then((networkResponse) => {
                // Check if we got a valid response
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }

                // C. Clone it and store it in cache for next time
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return networkResponse;
            });
        })
    );
});