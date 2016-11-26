// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__36430__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36431__i = 0, G__36431__a = new Array(arguments.length -  0);
while (G__36431__i < G__36431__a.length) {G__36431__a[G__36431__i] = arguments[G__36431__i + 0]; ++G__36431__i;}
  args = new cljs.core.IndexedSeq(G__36431__a,0);
} 
return G__36430__delegate.call(this,args);};
G__36430.cljs$lang$maxFixedArity = 0;
G__36430.cljs$lang$applyTo = (function (arglist__36432){
var args = cljs.core.seq(arglist__36432);
return G__36430__delegate(args);
});
G__36430.cljs$core$IFn$_invoke$arity$variadic = G__36430__delegate;
return G__36430;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36433__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36434__i = 0, G__36434__a = new Array(arguments.length -  0);
while (G__36434__i < G__36434__a.length) {G__36434__a[G__36434__i] = arguments[G__36434__i + 0]; ++G__36434__i;}
  args = new cljs.core.IndexedSeq(G__36434__a,0);
} 
return G__36433__delegate.call(this,args);};
G__36433.cljs$lang$maxFixedArity = 0;
G__36433.cljs$lang$applyTo = (function (arglist__36435){
var args = cljs.core.seq(arglist__36435);
return G__36433__delegate(args);
});
G__36433.cljs$core$IFn$_invoke$arity$variadic = G__36433__delegate;
return G__36433;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1480194642194