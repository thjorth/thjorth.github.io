if ("serviceWorker" in navigator) {
	console.log("Now installing service worker.");
	navigator.serviceWorker.register("/service-worker.js");
}