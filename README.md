cljs-webgl-examples
----
A ClojureScript sandbox for WebGL.

Goal
----
Create WebGL tutorial examples utilizing [cljs-webgl](https://github.com/asakeron/cljs-webgl), which binds WebGL to ClojureScript. It (cljs-webl) allows a more convenient functional style for creating WebGL applications in ClojureScript, by means of hiding mutability where possible and wrapping every Javascript value in ClojureScript constructs.

Examples
----
The program below can be run by first building:

    $ lein cljsbuild once min

And then opening the `resources/public/index.html` page in a webGL capable browser.

Alternatively (when you're developing your own examples), [Figwheel](https://github.com/bhauman/lein-figwheel) support has been added for a
better, more interactive development experience:

    $ lein figwheel

then point your webGL capable browser to http://localhost:3449/index.html


To change to another example (e.g., triangle.cljs -> projection.cljs), update lines *22* & *76* in `src/examples/examples.cljs`

### Sandbox Examples (WIP)
1. **triangle.cljs**   - draw a triangle with a one-to-one mapping from model space to GL clip space
2. **projection.cljs** - draw a square by transforming [ModelViewProjectionMatrix] X (Square Vertices). Default is a perspective projection.  Choose an orthographic projection by uncommenting line *119* and commenting out line *121*.
Modify translation, rotation, scaling by changing the vector values on lines *89-97*.  Choose another shape (e.g., triangle, F-Shape) by
modifying lines *13* & *83*.  Be sure to change the number of vertex-colors to match the shape.

Future
----
* Fork cljs-webgl and port it to [WebGL2](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
* UI support for selecting examples

Plugins
----
UI - [Reagent](https://reagent-project.github.io/)

Foreign Libraries
----
[glmatrix.js](http://glmatrix.net/)

[webgl-utils](https://www.khronos.org/registry/webgl/sdk/demos/common/webgl-utils.js)

## License

Copyright © 2016 Alex Kelley

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
