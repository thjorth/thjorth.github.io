---
title: using gulp
---

{% highlight javascript %}
gulp.task('watch', function () {
	gulp.watch('C:/work/cph-shop/Applications/Cph.Shop.Website/ui/less/*.less', function () {
		gulp.src('C:/work/cph-shop/Applications/Cph.Shop.Website/ui/less/master-blue.less')
			.pipe(less({
				paths: ['C:/work/cph-shop/Applications/Cph.Shop.Website/']
			}))
			.on("error", function (err) {
				console.log(err);
			})
			.pipe(rename(function (path) {
				if (path.basename === "master-blue" && path.extname === ".css") {
					path.extname = ".less";
				}
			}))
			.pipe(gulp.dest('./css/'));
	});

	gulp.watch('./css/master-blue.less', function () {
		gulp.src('./css/master-blue.less')
			.pipe(browserSync.reload({ stream: true }));
	});
});{% endhighlight %}
 