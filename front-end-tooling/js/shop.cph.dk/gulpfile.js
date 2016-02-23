'use strict';

var gulp = require('gulp');
var browserSync = require("browser-sync").create();
var less = require("gulp-less");
var rename = require("gulp-rename");
var url = require("url");

gulp.task('browserSync', function () {
	browserSync.init({
		proxy: "https://localhost:57923/",
		//proxy: "https://mv-shopdepi1.adv.cph.local/",
		//proxy: "https://shop.cph.dk",
		injectFileTypes: ["less"],
		middleware: function (req, res, next) {
			//console.log(req.url);
			var parsed = url.parse(req.url);
			var fname;
			if (parsed.pathname.match(/\.less$/)) {
				console.log("middleware: " + parsed.pathname);
				console.log(parsed);
				fname = /[^\/]*$/.exec(parsed.pathname)[0];
				console.log(fname);
				streamCssFile(fname, res);
				return;
			}
			if (parsed.pathname.match(/\/bundles\/less/)) {
				console.log("streaming bundle!");
				streamCssFile("master-blue.less", res);
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
});


gulp.task("default", ["browserSync", "watch"]);

