let currentCacheName = 'restaurant-static-v1';

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('currentCacheName')
      .then(cache => {
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
        ])
        .catch(error => {

      });
    }));
  });

  self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName.startsWith('restaurant-') &&
                   cacheName != currentCacheName;
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });
  
 

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
    );
  });

  /*
  self.addEventListener('fetch', 
  function(event) 
  {
    event.respondWith
    (    
      caches.match(event.request)
      .then
      (
        function(response) 
        {
          if (response !== undefined) 
          {
            return response;
          } 
        
          else 
          {        
            return fetch(event.request).then
            (
                function (response) 
                {
                  let responseClone = response.clone();
                  
                  caches.open('v1')
                  .then
                  (
                    function (cache) 
                    {
                      cache.put(event.request, responseClone);
                    }
                  );
                  return response;
                }
            );
          }
        }
      ) // end of promise for cache match
        
    ); // end of respond with
  
  }
  );*/