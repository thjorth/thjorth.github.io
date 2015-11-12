(function () {

	var 
		body = document.querySelector("body"),
		dir = document.location.pathname.replace(/[^\/]+$/, ""),
		siblingPages,
		next,
		reveal = [],
		slideType = body.dataset.type,
		delay = body.dataset.delay || 1,
		duration = body.dataset.duration || -1;

	console.log(slideType);

	// add next/previous slide event listeners
	document.addEventListener("keydown", function (e) {
		if (e.keyCode === 32 && slideType === "reveal") {
			e.preventDefault();
			if (reveal.length > 0) {
				showNextHiddenElm();
			} else  {
				gotoNext();
			}
		} else if (e.keyCode === 32) {
			gotoNext();
		} else if (e.keyCode === 36) {
			document.location.pathname = "/";
		} 
	});

	// cal this to go to the next slide
	function gotoNext () {
		if (next && next.url) {
			document.location.pathname = next.url;
		}
	}

	// get a list of all sibling pages
	siblingPages = data.pages.filter(function (page) {
		return page.url.indexOf(dir) === 0;
	});
	// get a reference to the next page
	next = siblingPages.reduce(function (previousValue, currentValue) {

		if (currentValue.url === document.location.pathname) {
			return "found";
		} else if (previousValue === "found") {
			return currentValue;
		}
		return previousValue;
	}, undefined);

	// handle the the two (and very similar versions) of the reveal slide type
	if (slideType === "reveal" || slideType === "reveal-auto") {
		var domElms = document.querySelectorAll(".slide-content > *");
		for (var i = 0; i < domElms.length; i++) {
			reveal.push(domElms[i]);
		}
		setTimeout(function () {
			showNextHiddenElm();
		}, 250);
	}

	// helper function used to reveal the top level slide elements for the reveal slide type
	function showNextHiddenElm() {
		var firstElm = reveal.shift();
		firstElm.style.opacity = "1.0";
		if (slideType === "reveal-auto" && reveal.length > 0) {
			setTimeout(showNextHiddenElm, delay * 1000);
		}
	}

	// if a duration has been set make sure to auto-progress to next slide
	if (duration > 0) {
		setTimeout(function () {
			gotoNext();
		}, duration * 1000);
	}

	console.log(siblingPages);
	console.log(next);
})();