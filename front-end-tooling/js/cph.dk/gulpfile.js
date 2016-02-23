'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();
var url = require("url");

gulp.task('sass', function () {

	gulp.src('./Static/css/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./Resources/css'))
		.pipe(browserSync.stream());

});

gulp.task('browserSync', function () {
	browserSync.init({
		proxy: "https://localhost:37016"
	});

});

gulp.task('browserSync-prod', function () {
	browserSync.init({
		proxy: "https://www.cph.dk/",
		middleware: function (req, res, next) {
			var parsed = url.parse(req.url);
			var fname;
			if (parsed.pathname.match(/\.css$/)) {
				console.log("middleware: " + parsed.pathname);
				console.log(parsed);
				fname = parsed.pathname;
				console.log(fname);
				streamCssFile(fname, res);
				return;
			}
			next();
		}
	});
});

function streamCssFile(fname, response) {
	var f = require('fs').readFileSync("." + fname).toString();
	response.setHeader('Content-Type', 'text/css');
	response.end(f);
}



gulp.task('sass:watch', function () {
	gulp.watch('./Static/**/*.scss', ['sass']);
});

gulp.task("default", ["browserSync", "sass", "sass:watch"]);
gulp.task("prod", ["browserSync-prod", "sass", "sass:watch"]);


