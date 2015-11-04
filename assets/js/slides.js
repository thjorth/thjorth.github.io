(function () {

	var 
		next = document.querySelector("#next"),
		dir = document.location.pathname.replace(/[^\/]+$/, ""),
		siblingPages,
		next,
		reveal = [];

	document.addEventListener("keydown", function (e) {
		console.log("keydown:");
		console.log(e);
		if (e.keyCode === 32) {
			e.preventDefault();
			if (reveal.length > 0) {
				showNextHiddenElm();
			} else if (next && next.url) {
				document.location.pathname = next.url;
			}
		} else if (e.keyCode === 36) {
			document.location.pathname = "/";
		}
	});

	siblingPages = data.pages.filter(function (page) {
		return page.url.indexOf(dir) === 0;
	});
	next = siblingPages.reduce(function (previousValue, currentValue) {

		if (currentValue.url === document.location.pathname) {
			return "found";
		} else if (previousValue === "found") {
			return currentValue;
		}
		return previousValue;
	}, undefined);

	if (document.querySelector(".slide.reveal")) {
		var domElms = document.querySelectorAll(".slide-content > *");
		for (var i = 0; i < domElms.length; i++) {
			reveal.push(domElms[i]);
		}
		setTimeout(function () {
			showNextHiddenElm();
		}, 250);
	}

	function showNextHiddenElm() {
		var firstElm = reveal.shift();
		firstElm.style.opacity = "1.0";
	}

	console.log(siblingPages);
	console.log(next);
})();