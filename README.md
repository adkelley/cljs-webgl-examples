cljs-webgl-examples
----
A ClojureScript sandbox for WebGL.

Goal
----
Create WebGL tutorial examples utilizing [cljs-webgl](https://github.com/asakeron/cljs-webgl), which binds WebGL to ClojureScript. It (cljs-webl) allows a more convenient functional style for creating WebGL applications in ClojureScript, by means of hiding mutability where possible and wrapping every Javascript value in ClojureScript constructs.

Examples
----
The program below can be run by first building:

    $ lein cljsbuild once

And then opening the `resource/pubic/index.html` page in a webGL capable browser.


To change to another example (e.g., triangle.cljs -> projection.cljs), update the
the script name in index.html accordingly

```html
<script type="text/javascript">
    projection.core.start();
</script>
```

### Sandbox Examples (WIP)
1. **triangle.cljs**   - draw a triangle with a one-to-one mapping from model space to GL clip space
2. **projection.cljs** - draw a triangle by transforming [ModelViewProjectionMatrix] X (Triangle Vertices). Default is a perspective projection.  Choose an orthographic projection by uncommenting line *119* and commenting out line *121*.
Modify translation, rotation, scaling by changing the vector values on lines *89-97*.  Choose a shape (e.g., square, triangle) by
modifying lines *13* & *83*.  Be sure to change the number of vertex-colors to match the shape.

Coming Soon
----
* [Figwheel](https://github.com/bhauman/lein-figwheel) support
* [Reagent](https://reagent-project.github.io/) support for interactive translation, rotation, and scaling

Future
----
Fork cljs-webgl and port it to [WebGL2](https://www.khronos.org/registry/webgl/specs/latest/2.0/)

Foreign Libraries
---
[glmatrix.js](http://glmatrix.net/)

[webgl-utils](https://www.khronos.org/registry/webgl/sdk/demos/common/webgl-utils.js)
