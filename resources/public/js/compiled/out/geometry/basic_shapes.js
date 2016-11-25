// Compiled by ClojureScript 1.9.293 {:static-fns true}
goog.provide('geometry.basic_shapes');
goog.require('cljs.core');
goog.require('cljs_webgl.typed_arrays');
if(typeof geometry.basic_shapes.triangle !== 'undefined'){
} else {
geometry.basic_shapes.triangle = cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0,0.0,-1.0,-1.0,0.0,1.0,-1.0,0.0], null));
}
if(typeof geometry.basic_shapes.square !== 'undefined'){
} else {
geometry.basic_shapes.square = cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.0,-1.0,0.0,1.0,-1.0,0.0,-1.0,1.0,0.0,-1.0,1.0,0.0,1.0,-1.0,0.0,1.0,1.0,0.0], null));
}
