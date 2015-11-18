---
---

{% highlight javascript %}
gulp.task('browserSync', function () {
	browserSync.init({
		proxy: "https://localhost:57923/",
		injectFileTypes: ["less"],
		middleware: function (req, res, next) {
			var parsed = url.parse(req.url);
			var fname;
			if (parsed.pathname.match(/\.less$/)) {
				fname = /[^\/]*$/.exec(parsed.pathname)[0];
				streamCssFile(fname, res);
				return;
			}
			next();
		}
	});

});
function streamCssFile(fname, response) {
	var f = require('fs').readFileSync('css/' + fname).toString();
	response.setHeader('Content-Type', 'text/css');
	response.end(f);
}
{% endhighlight %}
 