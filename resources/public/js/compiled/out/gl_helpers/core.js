// Compiled by ClojureScript 1.9.293 {}
goog.provide('gl_helpers.core');
goog.require('cljs.core');
goog.require('cljs_webgl.constants.parameter_name');
/**
 * Returns the current viewport for a given `gl-context` as a map with the form:
 *  {:x,
 * :y,
 * :width,
 * :height}
 */
gl_helpers.core.get_viewport = (function gl_helpers$core$get_viewport(gl_context){
var vec__37154 = Array.apply(cljs.core.PersistentVector.EMPTY,gl_context.getParameter(cljs_webgl.constants.parameter_name.viewport));
var x = cljs.core.nth.call(null,vec__37154,(0),null);
var y = cljs.core.nth.call(null,vec__37154,(1),null);
var w = cljs.core.nth.call(null,vec__37154,(2),null);
var h = cljs.core.nth.call(null,vec__37154,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null);
});

//# sourceMappingURL=core.js.map?rel=1480194643751