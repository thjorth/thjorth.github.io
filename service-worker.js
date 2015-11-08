///
// setting up the service worker
//

var cache = [
	"/css/main.css"
];

var version = "v1::";
var regexes = {
	cssMain: /\/main\.css/,
	version: /[\?&].*v\=([^&]+)/
}

self.addEventListener('install', function installer (event) {
	console.log("installing...");
});

self.addEventListener("fetch", function fetcher (event) {
	//console.log(event.request);
	if (regexes.cssMain.test(event.request.url)) {
		//event.respondWith(new Response("body { background: red; }"));
		//return;
	}
 	//event.respondWith(new Response("Hello world!"));
 	event.respondWith(fetch(event.request));
});
