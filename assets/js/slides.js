(function () {

	var 
		body = document.querySelector("body"),
		dir = document.location.pathname.replace(/[^\/]+$/, ""),
		siblingPages,
		next,
		reveal = [],
		slideType = body.dataset.type,
		delay = body.dataset.delay || 1;

	console.log(slideType);

	document.addEventListener("keydown", function (e) {
		if (e.keyCode === 32 && slideType === "reveal") {
			e.preventDefault();
			if (reveal.length > 0) {
				showNextHiddenElm();
			} else if (next && next.url) {
				document.location.pathname = next.url;
			}
		} else if (e.keyCode === 32 && next && next.url) {
			document.location.pathname = next.url;
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

	if (slideType === "reveal" || slideType === "reveal-auto") {
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
		if (slideType === "reveal-auto" && reveal.length > 0) {
			setTimeout(showNextHiddenElm, delay * 1000);
		}
	}

	console.log(siblingPages);
	console.log(next);
})();