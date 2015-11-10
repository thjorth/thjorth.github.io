---
type: reveal-auto
---

### SASS / LESS

{% highlight sass %}
// Width of the content area
$content-width:    800px;

$on-palm:          600px;
$on-laptop:        800px;

@mixin media-query($device) {
    @media screen and (max-width: $device) {
        @content;
    }
}{% endhighlight %}
