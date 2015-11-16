---
title: using gulp
---

{% highlight javascript %}
gulp.task('browserSync', function () {
	browserSync.init({
		proxy: "https://localhost:37016"
	});
});
{% endhighlight %}
 