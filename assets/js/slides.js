(function () {

	var 
		next = document.querySelector("#next");

	document.addEventListener("keydown", function (e) {
		console.log("keydown:");
		console.log(e);
		if (e.keyCode === 32) {
			e.preventDefault();
			next.click();
		} else if (e.keyCode === 36) {
			document.location.pathname = "/";
		}
	});
})();