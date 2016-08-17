---
title: The how
type: reveal-auto
delay: 0.2
align: left
---

gulpfile.js

{% highlight javascript %}
var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
{% endhighlight %}
