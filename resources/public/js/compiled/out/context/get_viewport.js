// Compiled by ClojureScript 1.9.293 {:static-fns true}
goog.provide('context.get_viewport');
goog.require('cljs.core');
goog.require('cljs_webgl.constants.parameter_name');
/**
 * Returns the current viewport for a given `gl-context` as a map with the form:
 *  {:x,
 * :y,
 * :width,
 * :height}
 */
context.get_viewport.get_viewport = (function context$get_viewport$get_viewport(gl_context){
var vec__9755 = Array.apply(cljs.core.PersistentVector.EMPTY,gl_context.getParameter(cljs_webgl.constants.parameter_name.viewport));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9755,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9755,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9755,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9755,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null);
});