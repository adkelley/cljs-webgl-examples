// Compiled by ClojureScript 1.9.293 {:static-fns true}
goog.provide('geometry.core');
goog.require('cljs.core');
goog.require('cljs_webgl.typed_arrays');
if(typeof geometry.core.triangle !== 'undefined'){
} else {
geometry.core.triangle = cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0,0.0,-1.0,-1.0,0.0,1.0,-1.0,0.0], null));
}
if(typeof geometry.core.square !== 'undefined'){
} else {
geometry.core.square = cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.5,0.0,0.0,0.0,0.5,0.0,0.0,0.5,0.0,0.5,0.0,0.0,0.5,0.5,0.0], null));
}
if(typeof geometry.core.f_shape !== 'undefined'){
} else {
geometry.core.f_shape = cljs_webgl.typed_arrays.float32(cljs.core.PersistentVector.fromArray([(0),(0),(0),(30),(0),(0),(0),(150),(0),(0),(150),(0),(30),(0),(0),(30),(150),(0),(30),(0),(0),(100),(0),(0),(30),(30),(0),(30),(30),(0),(100),(0),(0),(100),(30),(0),(30),(60),(0),(67),(60),(0),(30),(90),(0),(30),(90),(0),(67),(60),(0),(67),(90),(0)], true));
}
