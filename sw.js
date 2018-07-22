/*
//    Andela Level Up Program
//    Nehemie Zikama
//   I love expressing what I've learnt, we learn by doing"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
 */
let cachesNM="nemie_m-v2",
    contentsURL=[
	              "./",
	              "./index.html",
				  "./asset/css/main.css",
				  "./asset/js/main.js",		  
				  "./asset/images/blue_1.png",
				  "./asset/images/blue_2.png",
				  "./asset/images/blue_3.png"
	];

self.addEventListener("install",(event)=>{
	event.waitUntil(
	  caches.open(cachesNM).then((cache)=>{
		  cache.addAll(contentsURL);
	  console.log(`[sw is caching]`,cache);
	  }
	).catch(err=>{
		console.log(`ERROR:`,err);
	})
	);
	console.log("servise Worker Intalled");
});
self.addEventListener('activate',event=>{
	event.waitUntil(
	 caches.keys().then(namesChs=>{
		 return Promise.all(
		 namesChs.filter((cacheN)=>{
			 return cacheN.startsWith('nemie_m-') && !cachesNM.includes(cacheN);
		 }).map(cacheN=>{
			 return caches.delete(cacheN);
		 }));
	 })
	);
	console.log("servise Worker Activated");
});
self.addEventListener("fetch",event=>{
	/*const requests= new URL(event.request.url);	
	if(requests == location.origin){
		if(requests.pathname =="./"){
			event.respondWith(caches.match("./index.html"))
		}
	}*/
	 event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request)),
  );
});
self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});