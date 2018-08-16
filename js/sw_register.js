if(navigator.serviceWorker){

    navigator.serviceWorker.register('/sw.js')
        .then (reg => {
            console.log(`Registration serviceWorker ok: ${reg.scope}`);
        }).catch(err => {
            console.log(`Failed registration serviceWorker, error: ${err}`);
        });
    
    }
    