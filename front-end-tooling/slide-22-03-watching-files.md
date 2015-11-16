---
title: using gulp
---

{% highlight javascript %}
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();

gulp.task('sass', function () {
	gulp.src('./Static/css/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./Resources/css'))
		.pipe(browserSync.stream());
});
gulp.task('sass:watch', function () {
	gulp.watch('./Static/**/*.scss', ['sass']);
});
gulp.task("default", ["browserSync", "sass", "sass:watch"]);
{% endhighlight %}
 