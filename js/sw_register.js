/* Set up service worker */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js', {scope: "/"})
      .then(reg => {
        console.log('Service Worker Registration Successful: ' + reg.scope);
      })
      .catch(error => {
        console.log('Service Worker Registration Failed: ' + error);
      });
  }



/*
const registerServiceWorker = () => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('sw.js', {
			scope: './'
		}).then((registration) => {
      var serviceWorker;
      if (registration.installing) {
          serviceWorker = registration.installing;
          console.log('installing');
      } else if (registration.waiting) {
          serviceWorker = registration.waiting;
          console.log('waiting');
      } else if (registration.active) {
          serviceWorker = registration.active;
          console.log('active');
      }
      if (serviceWorker) {
          // logState(serviceWorker.state);
          serviceWorker.addEventListener('statechange', function (e) {
              // logState(e.target.state);
              console.log(e.target.state);
          });
      }
    }).catch(error => {
      console.log(error);
    });
	}
}

registerServiceWorker();





/*
if(navigator.serviceWorker){

    navigator.serviceWorker.register('/sw.js').then (reg => {
            console.log('ServiceWorker registration ok');
        }).catch(err => {
            console.log('ServiceWorker registration failed');
        });
    
    }*/    