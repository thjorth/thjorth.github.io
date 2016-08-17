///
// setting up the service worker
//

var urlsToCache = [
//	"/map.html",
	"/css/main.css"//,
//	"/css/gmap.css",
//	"/assets/js/gmap.js",
];

var CACHE_NAME = "maps-cache-v2";

var version = "v1::";
var regexes = {
	cssMain: /\/main\.css/,
	version: /[\?&].*v\=([^&]+)/
}

self.addEventListener('install', function installer (event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function (cache) {
				console.log("Cache opened");
				return cache.addAll(urlsToCache);
			})
	)
});

self.addEventListener("fetch", function fetcher (event) {
	//console.log(event.request);
	event.respondWith(
		caches.match(event.request)
			.then(function (response) {
				if (response) {
					return response;
				}

				return fetch(event.request);
			})
	)

});
