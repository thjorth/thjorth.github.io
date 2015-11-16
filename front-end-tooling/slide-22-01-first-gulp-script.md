---
title: using gulp
---

{% highlight javascript %}
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require("browser-sync").create();

gulp.task('sass', function () {
	gulp.src('./Static/css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./Resources/css'))
		.pipe(browserSync.stream());
}); 
{% endhighlight %}
 