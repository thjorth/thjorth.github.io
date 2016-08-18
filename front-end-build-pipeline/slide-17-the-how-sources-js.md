---
title: The how
type: reveal-auto
delay: 0.2
align: left
---

sources.js

{% highlight javascript %}
var bundles = [
  {
    target: "jquery-bndl.js",
    files: [
      "./ui/js/lib/jquery-1.11.0.js",
      "./ui/js/lib/jquery.cookie-1.4.1.js",
      "./ui/js/lib/jquery.ba-throttle-debounce.js",
      "./ui/js/lib/jquery.panzoom.js",
      "./ui/js/lib/jquery.scrollTo.js"
    ]
  },
  {
    target: "angular-bndl.js",
    files: [
      "./ui/js/lib/angular.js",
      "./ui/js/lib/angular-checklist-model.js"
    ]
  }
];
exports.bundles = bundles;
{% endhighlight %}
