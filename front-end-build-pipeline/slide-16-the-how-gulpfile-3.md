---
title: The how
type: reveal-auto
delay: 0.2
align: left
---

gulpfile.js

{% highlight javascript %}
var sources = require("./ui/build/sources.js");
///
/// Javascript
///
gulp.task("js", function () {
    sources.bundles.forEach(function (bundle) {
        gulp.src(
            bundle.files
        )
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat(bundle.target))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist/js"))
    });
});
gulp.task("js:watch", function () {
    gulp.watch("./ui/js/**/*.js", ["js"]);
});
gulp.task("default", ["js", "js:watch"]);
gulp.task("compile", ["js"]);
{% endhighlight %}
