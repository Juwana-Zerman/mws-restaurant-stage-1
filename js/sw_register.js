// sw start
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {

      if(reg.active) {
        console.log('Service worker is active');
      }
      

    }).catch(function() {
      console.log('Service worker registration failed');
    });
  }
  // sw end