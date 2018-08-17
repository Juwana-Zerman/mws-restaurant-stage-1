const currentCacheName = 'restaurant-static-v1';

/*self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(currentCacheName)
      .then(cache => {
        return cache.addAll([*/

const urlsToCache = [
          '/',
          './css/styles.css',
          './data/restaurants.json',
          './img/1.jpg',
          './img/2.jpg',
          './img/3.jpg',
          './img/4.jpg',
          './img/5.jpg',
          './img/6.jpg',
          './img/7.jpg',
          './img/8.jpg',
          './img/9.jpg',
          './img/10.jpg',
          './js/dbhelper.js',
          './js/main.js',
          './js/restaurant_info.js',
          /*'./index.html',
          './restaurant.html'*/
        ];
       
  self.addEventListener('install',  event => {
      event.waitUntil(caches.open(currentCacheName).then(cache => {return cacheaddAll(urlsToCache);
      })
    );
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {return response;}
        {return fetch(event.request);}
      })
    );
  });


/*
    
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
*/


/*const cacheName = 'restaurant-reviews';

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('cacheName')
      .then(cache => {
          console.log("in cache");
        return cache.addAll([
          '/',
          './css/styles.css',
          './data/restaurants.json',
          './img/1.jpg',
          './img/2.jpg',
          './img/3.jpg',
          './img/4.jpg',
          './img/5.jpg',
          './img/6.jpg',
          './img/7.jpg',
          './img/8.jpg',
          './img/9.jpg',
          './img/10.jpg',
          './js/dbhelper.js',
          './js/main.js',
          './js/restaurant_info.js',
          './index.html',
          './restaurant.html'
        ]);
      }).catch(error => console.log(error))
    );
  });
    
  self.addEventListener('activate',  event => {
      event.waitUntil(self.clients.claim());
    });
    
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
}*/