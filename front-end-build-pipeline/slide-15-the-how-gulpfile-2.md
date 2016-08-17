---
title: The how
type: reveal-auto
delay: 0.2
align: left
---

gulpfile.js

{% highlight javascript %}
///
/// SASS
///
gulp.task('sass', function () {
    return gulp.src([
        './ui/sass/**/*.scss'
    ])
    .pipe(sourcemaps.init({ debug: false }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."));
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
    gulp.watch('./ui/less/**/*.scss', ['sass']);
});

gulp.task("default", ["sass", "sass:watch"]);
gulp.task("compile", ["sass"]);
{% endhighlight %}
