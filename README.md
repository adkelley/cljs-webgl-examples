cljs-webgl-examples
----
ClojureScript sandbox for webGL

Goal
----
Create a sandbox utilizing [cljs-webgl](https://github.com/asakeron/cljs-webgl) which binds WebGL to ClojureScript. It (cljs-webl) allows a more convenient functional style for creating WebGL applications in ClojureScript, by means of hiding mutability where possible and wrapping every Javascript value in ClojureScript constructs.

Examples
----
The program below can be run by first building:

    $ lein cljsbuild once

And then opening the `examples/index.html` page in a webGL capable browser.

To change to another example (e.g., triangle.cljs -> projection.cljs), update the
the script name in index.html accordingly

```html
<script type="text/javascript">
    projection.core.start();
</script>
```

Coming Soon
----
Fork cljs-webgl and port it to [webgl2](https://www.khronos.org/registry/webgl/specs/latest/2.0/)

Foreign Libraries
---
[glmatrix.js](http://glmatrix.net/)
[webgl-utils](https://www.khronos.org/registry/webgl/sdk/demos/common/webgl-utils.js)
