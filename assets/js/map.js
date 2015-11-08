(function () {
	var
		$ = document.querySelectorAll;
		pathsList = document.querySelectorAll("#routes path"),
		paths = [];

	for (var i = 0; i < pathsList.length; i++) {
		paths.push(pathsList[i]);
	}

	function showPath() {
		if (paths.length > 0) {
			var path = paths.pop(),
				length = path.getTotalLength();

			console.log(length);
			path.style.transition = path.style.WebkitTransition = "none";
			path.style.strokeDasharray = length + " " + length;
			path.style.strokeDashoffset = length;
			path.getBoundingClientRect();

			path.style.visibility = "visible";
			path.style.transition = path.style.WebkitTransition = "stroke-dashoffset " + length / 15 + "s ease-in-out";
			path.style.strokeDashoffset = "0";

			setTimeout(showPath, 300);
		}
	}

	setTimeout(showPath, 500);

})();