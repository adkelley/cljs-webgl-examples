// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41223 = arguments.length;
var i__25997__auto___41224 = (0);
while(true){
if((i__25997__auto___41224 < len__25996__auto___41223)){
args__26003__auto__.push((arguments[i__25997__auto___41224]));

var G__41225 = (i__25997__auto___41224 + (1));
i__25997__auto___41224 = G__41225;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq41222){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41222));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41227 = arguments.length;
var i__25997__auto___41228 = (0);
while(true){
if((i__25997__auto___41228 < len__25996__auto___41227)){
args__26003__auto__.push((arguments[i__25997__auto___41228]));

var G__41229 = (i__25997__auto___41228 + (1));
i__25997__auto___41228 = G__41229;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq41226){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41226));
});

var g_QMARK__41230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_41231 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__41230){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__41230))
,null));
var mkg_41232 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__41230,g_41231){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__41230,g_41231))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__41230,g_41231,mkg_41232){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__41230).call(null,x);
});})(g_QMARK__41230,g_41231,mkg_41232))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__41230,g_41231,mkg_41232){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_41232).call(null,gfn);
});})(g_QMARK__41230,g_41231,mkg_41232))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__41230,g_41231,mkg_41232){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_41231).call(null,generator);
});})(g_QMARK__41230,g_41231,mkg_41232))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31993__auto___41251 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__31993__auto___41251){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41252 = arguments.length;
var i__25997__auto___41253 = (0);
while(true){
if((i__25997__auto___41253 < len__25996__auto___41252)){
args__26003__auto__.push((arguments[i__25997__auto___41253]));

var G__41254 = (i__25997__auto___41253 + (1));
i__25997__auto___41253 = G__41254;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41251))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41251){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41251),args);
});})(g__31993__auto___41251))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__31993__auto___41251){
return (function (seq41233){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41233));
});})(g__31993__auto___41251))
;


var g__31993__auto___41255 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__31993__auto___41255){
return (function cljs$spec$impl$gen$list(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41256 = arguments.length;
var i__25997__auto___41257 = (0);
while(true){
if((i__25997__auto___41257 < len__25996__auto___41256)){
args__26003__auto__.push((arguments[i__25997__auto___41257]));

var G__41258 = (i__25997__auto___41257 + (1));
i__25997__auto___41257 = G__41258;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41255))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41255){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41255),args);
});})(g__31993__auto___41255))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__31993__auto___41255){
return (function (seq41234){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41234));
});})(g__31993__auto___41255))
;


var g__31993__auto___41259 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__31993__auto___41259){
return (function cljs$spec$impl$gen$map(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41260 = arguments.length;
var i__25997__auto___41261 = (0);
while(true){
if((i__25997__auto___41261 < len__25996__auto___41260)){
args__26003__auto__.push((arguments[i__25997__auto___41261]));

var G__41262 = (i__25997__auto___41261 + (1));
i__25997__auto___41261 = G__41262;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41259))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41259){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41259),args);
});})(g__31993__auto___41259))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__31993__auto___41259){
return (function (seq41235){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41235));
});})(g__31993__auto___41259))
;


var g__31993__auto___41263 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__31993__auto___41263){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41264 = arguments.length;
var i__25997__auto___41265 = (0);
while(true){
if((i__25997__auto___41265 < len__25996__auto___41264)){
args__26003__auto__.push((arguments[i__25997__auto___41265]));

var G__41266 = (i__25997__auto___41265 + (1));
i__25997__auto___41265 = G__41266;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41263))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41263){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41263),args);
});})(g__31993__auto___41263))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__31993__auto___41263){
return (function (seq41236){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41236));
});})(g__31993__auto___41263))
;


var g__31993__auto___41267 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__31993__auto___41267){
return (function cljs$spec$impl$gen$set(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41268 = arguments.length;
var i__25997__auto___41269 = (0);
while(true){
if((i__25997__auto___41269 < len__25996__auto___41268)){
args__26003__auto__.push((arguments[i__25997__auto___41269]));

var G__41270 = (i__25997__auto___41269 + (1));
i__25997__auto___41269 = G__41270;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41267))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41267){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41267),args);
});})(g__31993__auto___41267))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__31993__auto___41267){
return (function (seq41237){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41237));
});})(g__31993__auto___41267))
;


var g__31993__auto___41271 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__31993__auto___41271){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41272 = arguments.length;
var i__25997__auto___41273 = (0);
while(true){
if((i__25997__auto___41273 < len__25996__auto___41272)){
args__26003__auto__.push((arguments[i__25997__auto___41273]));

var G__41274 = (i__25997__auto___41273 + (1));
i__25997__auto___41273 = G__41274;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41271))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41271){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41271),args);
});})(g__31993__auto___41271))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__31993__auto___41271){
return (function (seq41238){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41238));
});})(g__31993__auto___41271))
;


var g__31993__auto___41275 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__31993__auto___41275){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41276 = arguments.length;
var i__25997__auto___41277 = (0);
while(true){
if((i__25997__auto___41277 < len__25996__auto___41276)){
args__26003__auto__.push((arguments[i__25997__auto___41277]));

var G__41278 = (i__25997__auto___41277 + (1));
i__25997__auto___41277 = G__41278;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41275))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41275){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41275),args);
});})(g__31993__auto___41275))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__31993__auto___41275){
return (function (seq41239){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41239));
});})(g__31993__auto___41275))
;


var g__31993__auto___41279 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__31993__auto___41279){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41280 = arguments.length;
var i__25997__auto___41281 = (0);
while(true){
if((i__25997__auto___41281 < len__25996__auto___41280)){
args__26003__auto__.push((arguments[i__25997__auto___41281]));

var G__41282 = (i__25997__auto___41281 + (1));
i__25997__auto___41281 = G__41282;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41279))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41279){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41279),args);
});})(g__31993__auto___41279))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__31993__auto___41279){
return (function (seq41240){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41240));
});})(g__31993__auto___41279))
;


var g__31993__auto___41283 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__31993__auto___41283){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41284 = arguments.length;
var i__25997__auto___41285 = (0);
while(true){
if((i__25997__auto___41285 < len__25996__auto___41284)){
args__26003__auto__.push((arguments[i__25997__auto___41285]));

var G__41286 = (i__25997__auto___41285 + (1));
i__25997__auto___41285 = G__41286;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41283))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41283){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41283),args);
});})(g__31993__auto___41283))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__31993__auto___41283){
return (function (seq41241){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41241));
});})(g__31993__auto___41283))
;


var g__31993__auto___41287 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__31993__auto___41287){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41288 = arguments.length;
var i__25997__auto___41289 = (0);
while(true){
if((i__25997__auto___41289 < len__25996__auto___41288)){
args__26003__auto__.push((arguments[i__25997__auto___41289]));

var G__41290 = (i__25997__auto___41289 + (1));
i__25997__auto___41289 = G__41290;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41287))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41287){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41287),args);
});})(g__31993__auto___41287))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__31993__auto___41287){
return (function (seq41242){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41242));
});})(g__31993__auto___41287))
;


var g__31993__auto___41291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__31993__auto___41291){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41292 = arguments.length;
var i__25997__auto___41293 = (0);
while(true){
if((i__25997__auto___41293 < len__25996__auto___41292)){
args__26003__auto__.push((arguments[i__25997__auto___41293]));

var G__41294 = (i__25997__auto___41293 + (1));
i__25997__auto___41293 = G__41294;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41291))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41291){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41291),args);
});})(g__31993__auto___41291))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__31993__auto___41291){
return (function (seq41243){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41243));
});})(g__31993__auto___41291))
;


var g__31993__auto___41295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__31993__auto___41295){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41296 = arguments.length;
var i__25997__auto___41297 = (0);
while(true){
if((i__25997__auto___41297 < len__25996__auto___41296)){
args__26003__auto__.push((arguments[i__25997__auto___41297]));

var G__41298 = (i__25997__auto___41297 + (1));
i__25997__auto___41297 = G__41298;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41295))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41295){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41295),args);
});})(g__31993__auto___41295))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__31993__auto___41295){
return (function (seq41244){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41244));
});})(g__31993__auto___41295))
;


var g__31993__auto___41299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__31993__auto___41299){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41300 = arguments.length;
var i__25997__auto___41301 = (0);
while(true){
if((i__25997__auto___41301 < len__25996__auto___41300)){
args__26003__auto__.push((arguments[i__25997__auto___41301]));

var G__41302 = (i__25997__auto___41301 + (1));
i__25997__auto___41301 = G__41302;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41299))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41299){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41299),args);
});})(g__31993__auto___41299))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__31993__auto___41299){
return (function (seq41245){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41245));
});})(g__31993__auto___41299))
;


var g__31993__auto___41303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__31993__auto___41303){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41304 = arguments.length;
var i__25997__auto___41305 = (0);
while(true){
if((i__25997__auto___41305 < len__25996__auto___41304)){
args__26003__auto__.push((arguments[i__25997__auto___41305]));

var G__41306 = (i__25997__auto___41305 + (1));
i__25997__auto___41305 = G__41306;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41303))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41303){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41303),args);
});})(g__31993__auto___41303))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__31993__auto___41303){
return (function (seq41246){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41246));
});})(g__31993__auto___41303))
;


var g__31993__auto___41307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__31993__auto___41307){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41308 = arguments.length;
var i__25997__auto___41309 = (0);
while(true){
if((i__25997__auto___41309 < len__25996__auto___41308)){
args__26003__auto__.push((arguments[i__25997__auto___41309]));

var G__41310 = (i__25997__auto___41309 + (1));
i__25997__auto___41309 = G__41310;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41307))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41307){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41307),args);
});})(g__31993__auto___41307))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__31993__auto___41307){
return (function (seq41247){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41247));
});})(g__31993__auto___41307))
;


var g__31993__auto___41311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__31993__auto___41311){
return (function cljs$spec$impl$gen$return(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41312 = arguments.length;
var i__25997__auto___41313 = (0);
while(true){
if((i__25997__auto___41313 < len__25996__auto___41312)){
args__26003__auto__.push((arguments[i__25997__auto___41313]));

var G__41314 = (i__25997__auto___41313 + (1));
i__25997__auto___41313 = G__41314;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41311))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41311){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41311),args);
});})(g__31993__auto___41311))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__31993__auto___41311){
return (function (seq41248){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41248));
});})(g__31993__auto___41311))
;


var g__31993__auto___41315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__31993__auto___41315){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41316 = arguments.length;
var i__25997__auto___41317 = (0);
while(true){
if((i__25997__auto___41317 < len__25996__auto___41316)){
args__26003__auto__.push((arguments[i__25997__auto___41317]));

var G__41318 = (i__25997__auto___41317 + (1));
i__25997__auto___41317 = G__41318;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41315))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41315){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41315),args);
});})(g__31993__auto___41315))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31993__auto___41315){
return (function (seq41249){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41249));
});})(g__31993__auto___41315))
;


var g__31993__auto___41319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__31993__auto___41319){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41320 = arguments.length;
var i__25997__auto___41321 = (0);
while(true){
if((i__25997__auto___41321 < len__25996__auto___41320)){
args__26003__auto__.push((arguments[i__25997__auto___41321]));

var G__41322 = (i__25997__auto___41321 + (1));
i__25997__auto___41321 = G__41322;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__31993__auto___41319))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31993__auto___41319){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31993__auto___41319),args);
});})(g__31993__auto___41319))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__31993__auto___41319){
return (function (seq41250){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41250));
});})(g__31993__auto___41319))
;

var g__32006__auto___41344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32006__auto___41344){
return (function cljs$spec$impl$gen$any(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41345 = arguments.length;
var i__25997__auto___41346 = (0);
while(true){
if((i__25997__auto___41346 < len__25996__auto___41345)){
args__26003__auto__.push((arguments[i__25997__auto___41346]));

var G__41347 = (i__25997__auto___41346 + (1));
i__25997__auto___41346 = G__41347;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41344))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41344){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41344);
});})(g__32006__auto___41344))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32006__auto___41344){
return (function (seq41323){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41323));
});})(g__32006__auto___41344))
;


var g__32006__auto___41348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32006__auto___41348){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41349 = arguments.length;
var i__25997__auto___41350 = (0);
while(true){
if((i__25997__auto___41350 < len__25996__auto___41349)){
args__26003__auto__.push((arguments[i__25997__auto___41350]));

var G__41351 = (i__25997__auto___41350 + (1));
i__25997__auto___41350 = G__41351;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41348))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41348){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41348);
});})(g__32006__auto___41348))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32006__auto___41348){
return (function (seq41324){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41324));
});})(g__32006__auto___41348))
;


var g__32006__auto___41352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32006__auto___41352){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41353 = arguments.length;
var i__25997__auto___41354 = (0);
while(true){
if((i__25997__auto___41354 < len__25996__auto___41353)){
args__26003__auto__.push((arguments[i__25997__auto___41354]));

var G__41355 = (i__25997__auto___41354 + (1));
i__25997__auto___41354 = G__41355;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41352))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41352){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41352);
});})(g__32006__auto___41352))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32006__auto___41352){
return (function (seq41325){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41325));
});})(g__32006__auto___41352))
;


var g__32006__auto___41356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32006__auto___41356){
return (function cljs$spec$impl$gen$char(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41357 = arguments.length;
var i__25997__auto___41358 = (0);
while(true){
if((i__25997__auto___41358 < len__25996__auto___41357)){
args__26003__auto__.push((arguments[i__25997__auto___41358]));

var G__41359 = (i__25997__auto___41358 + (1));
i__25997__auto___41358 = G__41359;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41356))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41356){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41356);
});})(g__32006__auto___41356))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32006__auto___41356){
return (function (seq41326){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41326));
});})(g__32006__auto___41356))
;


var g__32006__auto___41360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32006__auto___41360){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41361 = arguments.length;
var i__25997__auto___41362 = (0);
while(true){
if((i__25997__auto___41362 < len__25996__auto___41361)){
args__26003__auto__.push((arguments[i__25997__auto___41362]));

var G__41363 = (i__25997__auto___41362 + (1));
i__25997__auto___41362 = G__41363;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41360))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41360){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41360);
});})(g__32006__auto___41360))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32006__auto___41360){
return (function (seq41327){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41327));
});})(g__32006__auto___41360))
;


var g__32006__auto___41364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32006__auto___41364){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41365 = arguments.length;
var i__25997__auto___41366 = (0);
while(true){
if((i__25997__auto___41366 < len__25996__auto___41365)){
args__26003__auto__.push((arguments[i__25997__auto___41366]));

var G__41367 = (i__25997__auto___41366 + (1));
i__25997__auto___41366 = G__41367;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41364))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41364){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41364);
});})(g__32006__auto___41364))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32006__auto___41364){
return (function (seq41328){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41328));
});})(g__32006__auto___41364))
;


var g__32006__auto___41368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32006__auto___41368){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41369 = arguments.length;
var i__25997__auto___41370 = (0);
while(true){
if((i__25997__auto___41370 < len__25996__auto___41369)){
args__26003__auto__.push((arguments[i__25997__auto___41370]));

var G__41371 = (i__25997__auto___41370 + (1));
i__25997__auto___41370 = G__41371;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41368))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41368){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41368);
});})(g__32006__auto___41368))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32006__auto___41368){
return (function (seq41329){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41329));
});})(g__32006__auto___41368))
;


var g__32006__auto___41372 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32006__auto___41372){
return (function cljs$spec$impl$gen$double(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41373 = arguments.length;
var i__25997__auto___41374 = (0);
while(true){
if((i__25997__auto___41374 < len__25996__auto___41373)){
args__26003__auto__.push((arguments[i__25997__auto___41374]));

var G__41375 = (i__25997__auto___41374 + (1));
i__25997__auto___41374 = G__41375;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41372))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41372){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41372);
});})(g__32006__auto___41372))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32006__auto___41372){
return (function (seq41330){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41330));
});})(g__32006__auto___41372))
;


var g__32006__auto___41376 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32006__auto___41376){
return (function cljs$spec$impl$gen$int(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41377 = arguments.length;
var i__25997__auto___41378 = (0);
while(true){
if((i__25997__auto___41378 < len__25996__auto___41377)){
args__26003__auto__.push((arguments[i__25997__auto___41378]));

var G__41379 = (i__25997__auto___41378 + (1));
i__25997__auto___41378 = G__41379;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41376))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41376){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41376);
});})(g__32006__auto___41376))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32006__auto___41376){
return (function (seq41331){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41331));
});})(g__32006__auto___41376))
;


var g__32006__auto___41380 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32006__auto___41380){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41381 = arguments.length;
var i__25997__auto___41382 = (0);
while(true){
if((i__25997__auto___41382 < len__25996__auto___41381)){
args__26003__auto__.push((arguments[i__25997__auto___41382]));

var G__41383 = (i__25997__auto___41382 + (1));
i__25997__auto___41382 = G__41383;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41380))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41380){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41380);
});})(g__32006__auto___41380))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32006__auto___41380){
return (function (seq41332){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41332));
});})(g__32006__auto___41380))
;


var g__32006__auto___41384 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32006__auto___41384){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41385 = arguments.length;
var i__25997__auto___41386 = (0);
while(true){
if((i__25997__auto___41386 < len__25996__auto___41385)){
args__26003__auto__.push((arguments[i__25997__auto___41386]));

var G__41387 = (i__25997__auto___41386 + (1));
i__25997__auto___41386 = G__41387;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41384))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41384){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41384);
});})(g__32006__auto___41384))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32006__auto___41384){
return (function (seq41333){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41333));
});})(g__32006__auto___41384))
;


var g__32006__auto___41388 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32006__auto___41388){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41389 = arguments.length;
var i__25997__auto___41390 = (0);
while(true){
if((i__25997__auto___41390 < len__25996__auto___41389)){
args__26003__auto__.push((arguments[i__25997__auto___41390]));

var G__41391 = (i__25997__auto___41390 + (1));
i__25997__auto___41390 = G__41391;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41388))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41388){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41388);
});})(g__32006__auto___41388))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32006__auto___41388){
return (function (seq41334){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41334));
});})(g__32006__auto___41388))
;


var g__32006__auto___41392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32006__auto___41392){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41393 = arguments.length;
var i__25997__auto___41394 = (0);
while(true){
if((i__25997__auto___41394 < len__25996__auto___41393)){
args__26003__auto__.push((arguments[i__25997__auto___41394]));

var G__41395 = (i__25997__auto___41394 + (1));
i__25997__auto___41394 = G__41395;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41392))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41392){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41392);
});})(g__32006__auto___41392))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32006__auto___41392){
return (function (seq41335){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41335));
});})(g__32006__auto___41392))
;


var g__32006__auto___41396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32006__auto___41396){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41397 = arguments.length;
var i__25997__auto___41398 = (0);
while(true){
if((i__25997__auto___41398 < len__25996__auto___41397)){
args__26003__auto__.push((arguments[i__25997__auto___41398]));

var G__41399 = (i__25997__auto___41398 + (1));
i__25997__auto___41398 = G__41399;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41396))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41396){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41396);
});})(g__32006__auto___41396))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32006__auto___41396){
return (function (seq41336){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41336));
});})(g__32006__auto___41396))
;


var g__32006__auto___41400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32006__auto___41400){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41401 = arguments.length;
var i__25997__auto___41402 = (0);
while(true){
if((i__25997__auto___41402 < len__25996__auto___41401)){
args__26003__auto__.push((arguments[i__25997__auto___41402]));

var G__41403 = (i__25997__auto___41402 + (1));
i__25997__auto___41402 = G__41403;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41400))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41400){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41400);
});})(g__32006__auto___41400))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32006__auto___41400){
return (function (seq41337){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41337));
});})(g__32006__auto___41400))
;


var g__32006__auto___41404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32006__auto___41404){
return (function cljs$spec$impl$gen$string(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41405 = arguments.length;
var i__25997__auto___41406 = (0);
while(true){
if((i__25997__auto___41406 < len__25996__auto___41405)){
args__26003__auto__.push((arguments[i__25997__auto___41406]));

var G__41407 = (i__25997__auto___41406 + (1));
i__25997__auto___41406 = G__41407;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41404))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41404){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41404);
});})(g__32006__auto___41404))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32006__auto___41404){
return (function (seq41338){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41338));
});})(g__32006__auto___41404))
;


var g__32006__auto___41408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32006__auto___41408){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41409 = arguments.length;
var i__25997__auto___41410 = (0);
while(true){
if((i__25997__auto___41410 < len__25996__auto___41409)){
args__26003__auto__.push((arguments[i__25997__auto___41410]));

var G__41411 = (i__25997__auto___41410 + (1));
i__25997__auto___41410 = G__41411;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41408))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41408){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41408);
});})(g__32006__auto___41408))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32006__auto___41408){
return (function (seq41339){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41339));
});})(g__32006__auto___41408))
;


var g__32006__auto___41412 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32006__auto___41412){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41413 = arguments.length;
var i__25997__auto___41414 = (0);
while(true){
if((i__25997__auto___41414 < len__25996__auto___41413)){
args__26003__auto__.push((arguments[i__25997__auto___41414]));

var G__41415 = (i__25997__auto___41414 + (1));
i__25997__auto___41414 = G__41415;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41412))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41412){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41412);
});})(g__32006__auto___41412))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32006__auto___41412){
return (function (seq41340){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41340));
});})(g__32006__auto___41412))
;


var g__32006__auto___41416 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32006__auto___41416){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41417 = arguments.length;
var i__25997__auto___41418 = (0);
while(true){
if((i__25997__auto___41418 < len__25996__auto___41417)){
args__26003__auto__.push((arguments[i__25997__auto___41418]));

var G__41419 = (i__25997__auto___41418 + (1));
i__25997__auto___41418 = G__41419;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41416))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41416){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41416);
});})(g__32006__auto___41416))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32006__auto___41416){
return (function (seq41341){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41341));
});})(g__32006__auto___41416))
;


var g__32006__auto___41420 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32006__auto___41420){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41421 = arguments.length;
var i__25997__auto___41422 = (0);
while(true){
if((i__25997__auto___41422 < len__25996__auto___41421)){
args__26003__auto__.push((arguments[i__25997__auto___41422]));

var G__41423 = (i__25997__auto___41422 + (1));
i__25997__auto___41422 = G__41423;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41420))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41420){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41420);
});})(g__32006__auto___41420))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32006__auto___41420){
return (function (seq41342){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41342));
});})(g__32006__auto___41420))
;


var g__32006__auto___41424 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32006__auto___41424){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41425 = arguments.length;
var i__25997__auto___41426 = (0);
while(true){
if((i__25997__auto___41426 < len__25996__auto___41425)){
args__26003__auto__.push((arguments[i__25997__auto___41426]));

var G__41427 = (i__25997__auto___41426 + (1));
i__25997__auto___41426 = G__41427;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});})(g__32006__auto___41424))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32006__auto___41424){
return (function (args){
return cljs.core.deref.call(null,g__32006__auto___41424);
});})(g__32006__auto___41424))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32006__auto___41424){
return (function (seq41343){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41343));
});})(g__32006__auto___41424))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41430 = arguments.length;
var i__25997__auto___41431 = (0);
while(true){
if((i__25997__auto___41431 < len__25996__auto___41430)){
args__26003__auto__.push((arguments[i__25997__auto___41431]));

var G__41432 = (i__25997__auto___41431 + (1));
i__25997__auto___41431 = G__41432;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__41428_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__41428_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq41429){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41429));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__41433_SHARP_){
return (new Date(p1__41433_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1480194647436