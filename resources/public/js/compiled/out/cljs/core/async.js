// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27266 = [];
var len__25996__auto___27272 = arguments.length;
var i__25997__auto___27273 = (0);
while(true){
if((i__25997__auto___27273 < len__25996__auto___27272)){
args27266.push((arguments[i__25997__auto___27273]));

var G__27274 = (i__25997__auto___27273 + (1));
i__25997__auto___27273 = G__27274;
continue;
} else {
}
break;
}

var G__27268 = args27266.length;
switch (G__27268) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27266.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27269 = (function (f,blockable,meta27270){
this.f = f;
this.blockable = blockable;
this.meta27270 = meta27270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27271,meta27270__$1){
var self__ = this;
var _27271__$1 = this;
return (new cljs.core.async.t_cljs$core$async27269(self__.f,self__.blockable,meta27270__$1));
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27271){
var self__ = this;
var _27271__$1 = this;
return self__.meta27270;
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27270","meta27270",-1007746192,null)], null);
});

cljs.core.async.t_cljs$core$async27269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27269";

cljs.core.async.t_cljs$core$async27269.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async27269");
});

cljs.core.async.__GT_t_cljs$core$async27269 = (function cljs$core$async$__GT_t_cljs$core$async27269(f__$1,blockable__$1,meta27270){
return (new cljs.core.async.t_cljs$core$async27269(f__$1,blockable__$1,meta27270));
});

}

return (new cljs.core.async.t_cljs$core$async27269(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27278 = [];
var len__25996__auto___27281 = arguments.length;
var i__25997__auto___27282 = (0);
while(true){
if((i__25997__auto___27282 < len__25996__auto___27281)){
args27278.push((arguments[i__25997__auto___27282]));

var G__27283 = (i__25997__auto___27282 + (1));
i__25997__auto___27282 = G__27283;
continue;
} else {
}
break;
}

var G__27280 = args27278.length;
switch (G__27280) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27278.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27285 = [];
var len__25996__auto___27288 = arguments.length;
var i__25997__auto___27289 = (0);
while(true){
if((i__25997__auto___27289 < len__25996__auto___27288)){
args27285.push((arguments[i__25997__auto___27289]));

var G__27290 = (i__25997__auto___27289 + (1));
i__25997__auto___27289 = G__27290;
continue;
} else {
}
break;
}

var G__27287 = args27285.length;
switch (G__27287) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27285.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27292 = [];
var len__25996__auto___27295 = arguments.length;
var i__25997__auto___27296 = (0);
while(true){
if((i__25997__auto___27296 < len__25996__auto___27295)){
args27292.push((arguments[i__25997__auto___27296]));

var G__27297 = (i__25997__auto___27296 + (1));
i__25997__auto___27296 = G__27297;
continue;
} else {
}
break;
}

var G__27294 = args27292.length;
switch (G__27294) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27292.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27299 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27299);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27299,ret){
return (function (){
return fn1.call(null,val_27299);
});})(val_27299,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27300 = [];
var len__25996__auto___27303 = arguments.length;
var i__25997__auto___27304 = (0);
while(true){
if((i__25997__auto___27304 < len__25996__auto___27303)){
args27300.push((arguments[i__25997__auto___27304]));

var G__27305 = (i__25997__auto___27304 + (1));
i__25997__auto___27304 = G__27305;
continue;
} else {
}
break;
}

var G__27302 = args27300.length;
switch (G__27302) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27300.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25806__auto___27307 = n;
var x_27308 = (0);
while(true){
if((x_27308 < n__25806__auto___27307)){
(a[x_27308] = (0));

var G__27309 = (x_27308 + (1));
x_27308 = G__27309;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27310 = (i + (1));
i = G__27310;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27314 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27314 = (function (flag,meta27315){
this.flag = flag;
this.meta27315 = meta27315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27316,meta27315__$1){
var self__ = this;
var _27316__$1 = this;
return (new cljs.core.async.t_cljs$core$async27314(self__.flag,meta27315__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27316){
var self__ = this;
var _27316__$1 = this;
return self__.meta27315;
});})(flag))
;

cljs.core.async.t_cljs$core$async27314.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27314.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27314.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27315","meta27315",2005722703,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27314.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27314";

cljs.core.async.t_cljs$core$async27314.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async27314");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27314 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27314(flag__$1,meta27315){
return (new cljs.core.async.t_cljs$core$async27314(flag__$1,meta27315));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27314(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27320 = (function (flag,cb,meta27321){
this.flag = flag;
this.cb = cb;
this.meta27321 = meta27321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27322,meta27321__$1){
var self__ = this;
var _27322__$1 = this;
return (new cljs.core.async.t_cljs$core$async27320(self__.flag,self__.cb,meta27321__$1));
});

cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27322){
var self__ = this;
var _27322__$1 = this;
return self__.meta27321;
});

cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27321","meta27321",232545390,null)], null);
});

cljs.core.async.t_cljs$core$async27320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27320";

cljs.core.async.t_cljs$core$async27320.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async27320");
});

cljs.core.async.__GT_t_cljs$core$async27320 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27320(flag__$1,cb__$1,meta27321){
return (new cljs.core.async.t_cljs$core$async27320(flag__$1,cb__$1,meta27321));
});

}

return (new cljs.core.async.t_cljs$core$async27320(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27323_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27323_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27324_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27324_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24888__auto__ = wport;
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27325 = (i + (1));
i = G__27325;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24888__auto__ = ret;
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24876__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24876__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24876__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26003__auto__ = [];
var len__25996__auto___27331 = arguments.length;
var i__25997__auto___27332 = (0);
while(true){
if((i__25997__auto___27332 < len__25996__auto___27331)){
args__26003__auto__.push((arguments[i__25997__auto___27332]));

var G__27333 = (i__25997__auto___27332 + (1));
i__25997__auto___27332 = G__27333;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((1) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26004__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27328){
var map__27329 = p__27328;
var map__27329__$1 = ((((!((map__27329 == null)))?((((map__27329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27329):map__27329);
var opts = map__27329__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27326){
var G__27327 = cljs.core.first.call(null,seq27326);
var seq27326__$1 = cljs.core.next.call(null,seq27326);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27327,seq27326__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27334 = [];
var len__25996__auto___27384 = arguments.length;
var i__25997__auto___27385 = (0);
while(true){
if((i__25997__auto___27385 < len__25996__auto___27384)){
args27334.push((arguments[i__25997__auto___27385]));

var G__27386 = (i__25997__auto___27385 + (1));
i__25997__auto___27385 = G__27386;
continue;
} else {
}
break;
}

var G__27336 = args27334.length;
switch (G__27336) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27334.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27221__auto___27388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___27388){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___27388){
return (function (state_27360){
var state_val_27361 = (state_27360[(1)]);
if((state_val_27361 === (7))){
var inst_27356 = (state_27360[(2)]);
var state_27360__$1 = state_27360;
var statearr_27362_27389 = state_27360__$1;
(statearr_27362_27389[(2)] = inst_27356);

(statearr_27362_27389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (1))){
var state_27360__$1 = state_27360;
var statearr_27363_27390 = state_27360__$1;
(statearr_27363_27390[(2)] = null);

(statearr_27363_27390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (4))){
var inst_27339 = (state_27360[(7)]);
var inst_27339__$1 = (state_27360[(2)]);
var inst_27340 = (inst_27339__$1 == null);
var state_27360__$1 = (function (){var statearr_27364 = state_27360;
(statearr_27364[(7)] = inst_27339__$1);

return statearr_27364;
})();
if(cljs.core.truth_(inst_27340)){
var statearr_27365_27391 = state_27360__$1;
(statearr_27365_27391[(1)] = (5));

} else {
var statearr_27366_27392 = state_27360__$1;
(statearr_27366_27392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (13))){
var state_27360__$1 = state_27360;
var statearr_27367_27393 = state_27360__$1;
(statearr_27367_27393[(2)] = null);

(statearr_27367_27393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (6))){
var inst_27339 = (state_27360[(7)]);
var state_27360__$1 = state_27360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27360__$1,(11),to,inst_27339);
} else {
if((state_val_27361 === (3))){
var inst_27358 = (state_27360[(2)]);
var state_27360__$1 = state_27360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27360__$1,inst_27358);
} else {
if((state_val_27361 === (12))){
var state_27360__$1 = state_27360;
var statearr_27368_27394 = state_27360__$1;
(statearr_27368_27394[(2)] = null);

(statearr_27368_27394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (2))){
var state_27360__$1 = state_27360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27360__$1,(4),from);
} else {
if((state_val_27361 === (11))){
var inst_27349 = (state_27360[(2)]);
var state_27360__$1 = state_27360;
if(cljs.core.truth_(inst_27349)){
var statearr_27369_27395 = state_27360__$1;
(statearr_27369_27395[(1)] = (12));

} else {
var statearr_27370_27396 = state_27360__$1;
(statearr_27370_27396[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (9))){
var state_27360__$1 = state_27360;
var statearr_27371_27397 = state_27360__$1;
(statearr_27371_27397[(2)] = null);

(statearr_27371_27397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (5))){
var state_27360__$1 = state_27360;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27372_27398 = state_27360__$1;
(statearr_27372_27398[(1)] = (8));

} else {
var statearr_27373_27399 = state_27360__$1;
(statearr_27373_27399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (14))){
var inst_27354 = (state_27360[(2)]);
var state_27360__$1 = state_27360;
var statearr_27374_27400 = state_27360__$1;
(statearr_27374_27400[(2)] = inst_27354);

(statearr_27374_27400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (10))){
var inst_27346 = (state_27360[(2)]);
var state_27360__$1 = state_27360;
var statearr_27375_27401 = state_27360__$1;
(statearr_27375_27401[(2)] = inst_27346);

(statearr_27375_27401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (8))){
var inst_27343 = cljs.core.async.close_BANG_.call(null,to);
var state_27360__$1 = state_27360;
var statearr_27376_27402 = state_27360__$1;
(statearr_27376_27402[(2)] = inst_27343);

(statearr_27376_27402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___27388))
;
return ((function (switch__27109__auto__,c__27221__auto___27388){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_27380 = [null,null,null,null,null,null,null,null];
(statearr_27380[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_27380[(1)] = (1));

return statearr_27380;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_27360){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_27360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e27381){if((e27381 instanceof Object)){
var ex__27113__auto__ = e27381;
var statearr_27382_27403 = state_27360;
(statearr_27382_27403[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27404 = state_27360;
state_27360 = G__27404;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_27360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_27360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___27388))
})();
var state__27223__auto__ = (function (){var statearr_27383 = f__27222__auto__.call(null);
(statearr_27383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___27388);

return statearr_27383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___27388))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27592){
var vec__27593 = p__27592;
var v = cljs.core.nth.call(null,vec__27593,(0),null);
var p = cljs.core.nth.call(null,vec__27593,(1),null);
var job = vec__27593;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27221__auto___27779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___27779,res,vec__27593,v,p,job,jobs,results){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___27779,res,vec__27593,v,p,job,jobs,results){
return (function (state_27600){
var state_val_27601 = (state_27600[(1)]);
if((state_val_27601 === (1))){
var state_27600__$1 = state_27600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27600__$1,(2),res,v);
} else {
if((state_val_27601 === (2))){
var inst_27597 = (state_27600[(2)]);
var inst_27598 = cljs.core.async.close_BANG_.call(null,res);
var state_27600__$1 = (function (){var statearr_27602 = state_27600;
(statearr_27602[(7)] = inst_27597);

return statearr_27602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27600__$1,inst_27598);
} else {
return null;
}
}
});})(c__27221__auto___27779,res,vec__27593,v,p,job,jobs,results))
;
return ((function (switch__27109__auto__,c__27221__auto___27779,res,vec__27593,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0 = (function (){
var statearr_27606 = [null,null,null,null,null,null,null,null];
(statearr_27606[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__);

(statearr_27606[(1)] = (1));

return statearr_27606;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1 = (function (state_27600){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_27600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e27607){if((e27607 instanceof Object)){
var ex__27113__auto__ = e27607;
var statearr_27608_27780 = state_27600;
(statearr_27608_27780[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27781 = state_27600;
state_27600 = G__27781;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__ = function(state_27600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1.call(this,state_27600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___27779,res,vec__27593,v,p,job,jobs,results))
})();
var state__27223__auto__ = (function (){var statearr_27609 = f__27222__auto__.call(null);
(statearr_27609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___27779);

return statearr_27609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___27779,res,vec__27593,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27610){
var vec__27611 = p__27610;
var v = cljs.core.nth.call(null,vec__27611,(0),null);
var p = cljs.core.nth.call(null,vec__27611,(1),null);
var job = vec__27611;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25806__auto___27782 = n;
var __27783 = (0);
while(true){
if((__27783 < n__25806__auto___27782)){
var G__27614_27784 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27614_27784) {
case "compute":
var c__27221__auto___27786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27783,c__27221__auto___27786,G__27614_27784,n__25806__auto___27782,jobs,results,process,async){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (__27783,c__27221__auto___27786,G__27614_27784,n__25806__auto___27782,jobs,results,process,async){
return (function (state_27627){
var state_val_27628 = (state_27627[(1)]);
if((state_val_27628 === (1))){
var state_27627__$1 = state_27627;
var statearr_27629_27787 = state_27627__$1;
(statearr_27629_27787[(2)] = null);

(statearr_27629_27787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (2))){
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(4),jobs);
} else {
if((state_val_27628 === (3))){
var inst_27625 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27627__$1,inst_27625);
} else {
if((state_val_27628 === (4))){
var inst_27617 = (state_27627[(2)]);
var inst_27618 = process.call(null,inst_27617);
var state_27627__$1 = state_27627;
if(cljs.core.truth_(inst_27618)){
var statearr_27630_27788 = state_27627__$1;
(statearr_27630_27788[(1)] = (5));

} else {
var statearr_27631_27789 = state_27627__$1;
(statearr_27631_27789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (5))){
var state_27627__$1 = state_27627;
var statearr_27632_27790 = state_27627__$1;
(statearr_27632_27790[(2)] = null);

(statearr_27632_27790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (6))){
var state_27627__$1 = state_27627;
var statearr_27633_27791 = state_27627__$1;
(statearr_27633_27791[(2)] = null);

(statearr_27633_27791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (7))){
var inst_27623 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27634_27792 = state_27627__$1;
(statearr_27634_27792[(2)] = inst_27623);

(statearr_27634_27792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27783,c__27221__auto___27786,G__27614_27784,n__25806__auto___27782,jobs,results,process,async))
;
return ((function (__27783,switch__27109__auto__,c__27221__auto___27786,G__27614_27784,n__25806__auto___27782,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0 = (function (){
var statearr_27638 = [null,null,null,null,null,null,null];
(statearr_27638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__);

(statearr_27638[(1)] = (1));

return statearr_27638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1 = (function (state_27627){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_27627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e27639){if((e27639 instanceof Object)){
var ex__27113__auto__ = e27639;
var statearr_27640_27793 = state_27627;
(statearr_27640_27793[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27794 = state_27627;
state_27627 = G__27794;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__ = function(state_27627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1.call(this,state_27627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__;
})()
;})(__27783,switch__27109__auto__,c__27221__auto___27786,G__27614_27784,n__25806__auto___27782,jobs,results,process,async))
})();
var state__27223__auto__ = (function (){var statearr_27641 = f__27222__auto__.call(null);
(statearr_27641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___27786);

return statearr_27641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(__27783,c__27221__auto___27786,G__27614_27784,n__25806__auto___27782,jobs,results,process,async))
);


break;
case "async":
var c__27221__auto___27795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27783,c__27221__auto___27795,G__27614_27784,n__25806__auto___27782,jobs,results,process,async){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (__27783,c__27221__auto___27795,G__27614_27784,n__25806__auto___27782,jobs,results,process,async){
return (function (state_27654){
var state_val_27655 = (state_27654[(1)]);
if((state_val_27655 === (1))){
var state_27654__$1 = state_27654;
var statearr_27656_27796 = state_27654__$1;
(statearr_27656_27796[(2)] = null);

(statearr_27656_27796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (2))){
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27654__$1,(4),jobs);
} else {
if((state_val_27655 === (3))){
var inst_27652 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27654__$1,inst_27652);
} else {
if((state_val_27655 === (4))){
var inst_27644 = (state_27654[(2)]);
var inst_27645 = async.call(null,inst_27644);
var state_27654__$1 = state_27654;
if(cljs.core.truth_(inst_27645)){
var statearr_27657_27797 = state_27654__$1;
(statearr_27657_27797[(1)] = (5));

} else {
var statearr_27658_27798 = state_27654__$1;
(statearr_27658_27798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (5))){
var state_27654__$1 = state_27654;
var statearr_27659_27799 = state_27654__$1;
(statearr_27659_27799[(2)] = null);

(statearr_27659_27799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (6))){
var state_27654__$1 = state_27654;
var statearr_27660_27800 = state_27654__$1;
(statearr_27660_27800[(2)] = null);

(statearr_27660_27800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (7))){
var inst_27650 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27661_27801 = state_27654__$1;
(statearr_27661_27801[(2)] = inst_27650);

(statearr_27661_27801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27783,c__27221__auto___27795,G__27614_27784,n__25806__auto___27782,jobs,results,process,async))
;
return ((function (__27783,switch__27109__auto__,c__27221__auto___27795,G__27614_27784,n__25806__auto___27782,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0 = (function (){
var statearr_27665 = [null,null,null,null,null,null,null];
(statearr_27665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__);

(statearr_27665[(1)] = (1));

return statearr_27665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1 = (function (state_27654){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_27654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e27666){if((e27666 instanceof Object)){
var ex__27113__auto__ = e27666;
var statearr_27667_27802 = state_27654;
(statearr_27667_27802[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27803 = state_27654;
state_27654 = G__27803;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__ = function(state_27654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1.call(this,state_27654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__;
})()
;})(__27783,switch__27109__auto__,c__27221__auto___27795,G__27614_27784,n__25806__auto___27782,jobs,results,process,async))
})();
var state__27223__auto__ = (function (){var statearr_27668 = f__27222__auto__.call(null);
(statearr_27668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___27795);

return statearr_27668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(__27783,c__27221__auto___27795,G__27614_27784,n__25806__auto___27782,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27804 = (__27783 + (1));
__27783 = G__27804;
continue;
} else {
}
break;
}

var c__27221__auto___27805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___27805,jobs,results,process,async){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___27805,jobs,results,process,async){
return (function (state_27690){
var state_val_27691 = (state_27690[(1)]);
if((state_val_27691 === (1))){
var state_27690__$1 = state_27690;
var statearr_27692_27806 = state_27690__$1;
(statearr_27692_27806[(2)] = null);

(statearr_27692_27806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (2))){
var state_27690__$1 = state_27690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27690__$1,(4),from);
} else {
if((state_val_27691 === (3))){
var inst_27688 = (state_27690[(2)]);
var state_27690__$1 = state_27690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27690__$1,inst_27688);
} else {
if((state_val_27691 === (4))){
var inst_27671 = (state_27690[(7)]);
var inst_27671__$1 = (state_27690[(2)]);
var inst_27672 = (inst_27671__$1 == null);
var state_27690__$1 = (function (){var statearr_27693 = state_27690;
(statearr_27693[(7)] = inst_27671__$1);

return statearr_27693;
})();
if(cljs.core.truth_(inst_27672)){
var statearr_27694_27807 = state_27690__$1;
(statearr_27694_27807[(1)] = (5));

} else {
var statearr_27695_27808 = state_27690__$1;
(statearr_27695_27808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (5))){
var inst_27674 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27690__$1 = state_27690;
var statearr_27696_27809 = state_27690__$1;
(statearr_27696_27809[(2)] = inst_27674);

(statearr_27696_27809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (6))){
var inst_27676 = (state_27690[(8)]);
var inst_27671 = (state_27690[(7)]);
var inst_27676__$1 = cljs.core.async.chan.call(null,(1));
var inst_27677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27678 = [inst_27671,inst_27676__$1];
var inst_27679 = (new cljs.core.PersistentVector(null,2,(5),inst_27677,inst_27678,null));
var state_27690__$1 = (function (){var statearr_27697 = state_27690;
(statearr_27697[(8)] = inst_27676__$1);

return statearr_27697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27690__$1,(8),jobs,inst_27679);
} else {
if((state_val_27691 === (7))){
var inst_27686 = (state_27690[(2)]);
var state_27690__$1 = state_27690;
var statearr_27698_27810 = state_27690__$1;
(statearr_27698_27810[(2)] = inst_27686);

(statearr_27698_27810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (8))){
var inst_27676 = (state_27690[(8)]);
var inst_27681 = (state_27690[(2)]);
var state_27690__$1 = (function (){var statearr_27699 = state_27690;
(statearr_27699[(9)] = inst_27681);

return statearr_27699;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27690__$1,(9),results,inst_27676);
} else {
if((state_val_27691 === (9))){
var inst_27683 = (state_27690[(2)]);
var state_27690__$1 = (function (){var statearr_27700 = state_27690;
(statearr_27700[(10)] = inst_27683);

return statearr_27700;
})();
var statearr_27701_27811 = state_27690__$1;
(statearr_27701_27811[(2)] = null);

(statearr_27701_27811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___27805,jobs,results,process,async))
;
return ((function (switch__27109__auto__,c__27221__auto___27805,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0 = (function (){
var statearr_27705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__);

(statearr_27705[(1)] = (1));

return statearr_27705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1 = (function (state_27690){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_27690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e27706){if((e27706 instanceof Object)){
var ex__27113__auto__ = e27706;
var statearr_27707_27812 = state_27690;
(statearr_27707_27812[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27813 = state_27690;
state_27690 = G__27813;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__ = function(state_27690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1.call(this,state_27690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___27805,jobs,results,process,async))
})();
var state__27223__auto__ = (function (){var statearr_27708 = f__27222__auto__.call(null);
(statearr_27708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___27805);

return statearr_27708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___27805,jobs,results,process,async))
);


var c__27221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto__,jobs,results,process,async){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto__,jobs,results,process,async){
return (function (state_27746){
var state_val_27747 = (state_27746[(1)]);
if((state_val_27747 === (7))){
var inst_27742 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
var statearr_27748_27814 = state_27746__$1;
(statearr_27748_27814[(2)] = inst_27742);

(statearr_27748_27814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (20))){
var state_27746__$1 = state_27746;
var statearr_27749_27815 = state_27746__$1;
(statearr_27749_27815[(2)] = null);

(statearr_27749_27815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (1))){
var state_27746__$1 = state_27746;
var statearr_27750_27816 = state_27746__$1;
(statearr_27750_27816[(2)] = null);

(statearr_27750_27816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (4))){
var inst_27711 = (state_27746[(7)]);
var inst_27711__$1 = (state_27746[(2)]);
var inst_27712 = (inst_27711__$1 == null);
var state_27746__$1 = (function (){var statearr_27751 = state_27746;
(statearr_27751[(7)] = inst_27711__$1);

return statearr_27751;
})();
if(cljs.core.truth_(inst_27712)){
var statearr_27752_27817 = state_27746__$1;
(statearr_27752_27817[(1)] = (5));

} else {
var statearr_27753_27818 = state_27746__$1;
(statearr_27753_27818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (15))){
var inst_27724 = (state_27746[(8)]);
var state_27746__$1 = state_27746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27746__$1,(18),to,inst_27724);
} else {
if((state_val_27747 === (21))){
var inst_27737 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
var statearr_27754_27819 = state_27746__$1;
(statearr_27754_27819[(2)] = inst_27737);

(statearr_27754_27819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (13))){
var inst_27739 = (state_27746[(2)]);
var state_27746__$1 = (function (){var statearr_27755 = state_27746;
(statearr_27755[(9)] = inst_27739);

return statearr_27755;
})();
var statearr_27756_27820 = state_27746__$1;
(statearr_27756_27820[(2)] = null);

(statearr_27756_27820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (6))){
var inst_27711 = (state_27746[(7)]);
var state_27746__$1 = state_27746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27746__$1,(11),inst_27711);
} else {
if((state_val_27747 === (17))){
var inst_27732 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
if(cljs.core.truth_(inst_27732)){
var statearr_27757_27821 = state_27746__$1;
(statearr_27757_27821[(1)] = (19));

} else {
var statearr_27758_27822 = state_27746__$1;
(statearr_27758_27822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (3))){
var inst_27744 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27746__$1,inst_27744);
} else {
if((state_val_27747 === (12))){
var inst_27721 = (state_27746[(10)]);
var state_27746__$1 = state_27746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27746__$1,(14),inst_27721);
} else {
if((state_val_27747 === (2))){
var state_27746__$1 = state_27746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27746__$1,(4),results);
} else {
if((state_val_27747 === (19))){
var state_27746__$1 = state_27746;
var statearr_27759_27823 = state_27746__$1;
(statearr_27759_27823[(2)] = null);

(statearr_27759_27823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (11))){
var inst_27721 = (state_27746[(2)]);
var state_27746__$1 = (function (){var statearr_27760 = state_27746;
(statearr_27760[(10)] = inst_27721);

return statearr_27760;
})();
var statearr_27761_27824 = state_27746__$1;
(statearr_27761_27824[(2)] = null);

(statearr_27761_27824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (9))){
var state_27746__$1 = state_27746;
var statearr_27762_27825 = state_27746__$1;
(statearr_27762_27825[(2)] = null);

(statearr_27762_27825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (5))){
var state_27746__$1 = state_27746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27763_27826 = state_27746__$1;
(statearr_27763_27826[(1)] = (8));

} else {
var statearr_27764_27827 = state_27746__$1;
(statearr_27764_27827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (14))){
var inst_27724 = (state_27746[(8)]);
var inst_27726 = (state_27746[(11)]);
var inst_27724__$1 = (state_27746[(2)]);
var inst_27725 = (inst_27724__$1 == null);
var inst_27726__$1 = cljs.core.not.call(null,inst_27725);
var state_27746__$1 = (function (){var statearr_27765 = state_27746;
(statearr_27765[(8)] = inst_27724__$1);

(statearr_27765[(11)] = inst_27726__$1);

return statearr_27765;
})();
if(inst_27726__$1){
var statearr_27766_27828 = state_27746__$1;
(statearr_27766_27828[(1)] = (15));

} else {
var statearr_27767_27829 = state_27746__$1;
(statearr_27767_27829[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (16))){
var inst_27726 = (state_27746[(11)]);
var state_27746__$1 = state_27746;
var statearr_27768_27830 = state_27746__$1;
(statearr_27768_27830[(2)] = inst_27726);

(statearr_27768_27830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (10))){
var inst_27718 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
var statearr_27769_27831 = state_27746__$1;
(statearr_27769_27831[(2)] = inst_27718);

(statearr_27769_27831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (18))){
var inst_27729 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
var statearr_27770_27832 = state_27746__$1;
(statearr_27770_27832[(2)] = inst_27729);

(statearr_27770_27832[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (8))){
var inst_27715 = cljs.core.async.close_BANG_.call(null,to);
var state_27746__$1 = state_27746;
var statearr_27771_27833 = state_27746__$1;
(statearr_27771_27833[(2)] = inst_27715);

(statearr_27771_27833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto__,jobs,results,process,async))
;
return ((function (switch__27109__auto__,c__27221__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0 = (function (){
var statearr_27775 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__);

(statearr_27775[(1)] = (1));

return statearr_27775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1 = (function (state_27746){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_27746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e27776){if((e27776 instanceof Object)){
var ex__27113__auto__ = e27776;
var statearr_27777_27834 = state_27746;
(statearr_27777_27834[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27835 = state_27746;
state_27746 = G__27835;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__ = function(state_27746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1.call(this,state_27746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto__,jobs,results,process,async))
})();
var state__27223__auto__ = (function (){var statearr_27778 = f__27222__auto__.call(null);
(statearr_27778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto__);

return statearr_27778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto__,jobs,results,process,async))
);

return c__27221__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27836 = [];
var len__25996__auto___27839 = arguments.length;
var i__25997__auto___27840 = (0);
while(true){
if((i__25997__auto___27840 < len__25996__auto___27839)){
args27836.push((arguments[i__25997__auto___27840]));

var G__27841 = (i__25997__auto___27840 + (1));
i__25997__auto___27840 = G__27841;
continue;
} else {
}
break;
}

var G__27838 = args27836.length;
switch (G__27838) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27836.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27843 = [];
var len__25996__auto___27846 = arguments.length;
var i__25997__auto___27847 = (0);
while(true){
if((i__25997__auto___27847 < len__25996__auto___27846)){
args27843.push((arguments[i__25997__auto___27847]));

var G__27848 = (i__25997__auto___27847 + (1));
i__25997__auto___27847 = G__27848;
continue;
} else {
}
break;
}

var G__27845 = args27843.length;
switch (G__27845) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27843.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27850 = [];
var len__25996__auto___27903 = arguments.length;
var i__25997__auto___27904 = (0);
while(true){
if((i__25997__auto___27904 < len__25996__auto___27903)){
args27850.push((arguments[i__25997__auto___27904]));

var G__27905 = (i__25997__auto___27904 + (1));
i__25997__auto___27904 = G__27905;
continue;
} else {
}
break;
}

var G__27852 = args27850.length;
switch (G__27852) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27850.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27221__auto___27907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___27907,tc,fc){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___27907,tc,fc){
return (function (state_27878){
var state_val_27879 = (state_27878[(1)]);
if((state_val_27879 === (7))){
var inst_27874 = (state_27878[(2)]);
var state_27878__$1 = state_27878;
var statearr_27880_27908 = state_27878__$1;
(statearr_27880_27908[(2)] = inst_27874);

(statearr_27880_27908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27879 === (1))){
var state_27878__$1 = state_27878;
var statearr_27881_27909 = state_27878__$1;
(statearr_27881_27909[(2)] = null);

(statearr_27881_27909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27879 === (4))){
var inst_27855 = (state_27878[(7)]);
var inst_27855__$1 = (state_27878[(2)]);
var inst_27856 = (inst_27855__$1 == null);
var state_27878__$1 = (function (){var statearr_27882 = state_27878;
(statearr_27882[(7)] = inst_27855__$1);

return statearr_27882;
})();
if(cljs.core.truth_(inst_27856)){
var statearr_27883_27910 = state_27878__$1;
(statearr_27883_27910[(1)] = (5));

} else {
var statearr_27884_27911 = state_27878__$1;
(statearr_27884_27911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27879 === (13))){
var state_27878__$1 = state_27878;
var statearr_27885_27912 = state_27878__$1;
(statearr_27885_27912[(2)] = null);

(statearr_27885_27912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27879 === (6))){
var inst_27855 = (state_27878[(7)]);
var inst_27861 = p.call(null,inst_27855);
var state_27878__$1 = state_27878;
if(cljs.core.truth_(inst_27861)){
var statearr_27886_27913 = state_27878__$1;
(statearr_27886_27913[(1)] = (9));

} else {
var statearr_27887_27914 = state_27878__$1;
(statearr_27887_27914[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27879 === (3))){
var inst_27876 = (state_27878[(2)]);
var state_27878__$1 = state_27878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27878__$1,inst_27876);
} else {
if((state_val_27879 === (12))){
var state_27878__$1 = state_27878;
var statearr_27888_27915 = state_27878__$1;
(statearr_27888_27915[(2)] = null);

(statearr_27888_27915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27879 === (2))){
var state_27878__$1 = state_27878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27878__$1,(4),ch);
} else {
if((state_val_27879 === (11))){
var inst_27855 = (state_27878[(7)]);
var inst_27865 = (state_27878[(2)]);
var state_27878__$1 = state_27878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27878__$1,(8),inst_27865,inst_27855);
} else {
if((state_val_27879 === (9))){
var state_27878__$1 = state_27878;
var statearr_27889_27916 = state_27878__$1;
(statearr_27889_27916[(2)] = tc);

(statearr_27889_27916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27879 === (5))){
var inst_27858 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27859 = cljs.core.async.close_BANG_.call(null,fc);
var state_27878__$1 = (function (){var statearr_27890 = state_27878;
(statearr_27890[(8)] = inst_27858);

return statearr_27890;
})();
var statearr_27891_27917 = state_27878__$1;
(statearr_27891_27917[(2)] = inst_27859);

(statearr_27891_27917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27879 === (14))){
var inst_27872 = (state_27878[(2)]);
var state_27878__$1 = state_27878;
var statearr_27892_27918 = state_27878__$1;
(statearr_27892_27918[(2)] = inst_27872);

(statearr_27892_27918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27879 === (10))){
var state_27878__$1 = state_27878;
var statearr_27893_27919 = state_27878__$1;
(statearr_27893_27919[(2)] = fc);

(statearr_27893_27919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27879 === (8))){
var inst_27867 = (state_27878[(2)]);
var state_27878__$1 = state_27878;
if(cljs.core.truth_(inst_27867)){
var statearr_27894_27920 = state_27878__$1;
(statearr_27894_27920[(1)] = (12));

} else {
var statearr_27895_27921 = state_27878__$1;
(statearr_27895_27921[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___27907,tc,fc))
;
return ((function (switch__27109__auto__,c__27221__auto___27907,tc,fc){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_27899 = [null,null,null,null,null,null,null,null,null];
(statearr_27899[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_27899[(1)] = (1));

return statearr_27899;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_27878){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_27878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e27900){if((e27900 instanceof Object)){
var ex__27113__auto__ = e27900;
var statearr_27901_27922 = state_27878;
(statearr_27901_27922[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27923 = state_27878;
state_27878 = G__27923;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_27878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_27878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___27907,tc,fc))
})();
var state__27223__auto__ = (function (){var statearr_27902 = f__27222__auto__.call(null);
(statearr_27902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___27907);

return statearr_27902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___27907,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto__){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto__){
return (function (state_27987){
var state_val_27988 = (state_27987[(1)]);
if((state_val_27988 === (7))){
var inst_27983 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_27989_28010 = state_27987__$1;
(statearr_27989_28010[(2)] = inst_27983);

(statearr_27989_28010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (1))){
var inst_27967 = init;
var state_27987__$1 = (function (){var statearr_27990 = state_27987;
(statearr_27990[(7)] = inst_27967);

return statearr_27990;
})();
var statearr_27991_28011 = state_27987__$1;
(statearr_27991_28011[(2)] = null);

(statearr_27991_28011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (4))){
var inst_27970 = (state_27987[(8)]);
var inst_27970__$1 = (state_27987[(2)]);
var inst_27971 = (inst_27970__$1 == null);
var state_27987__$1 = (function (){var statearr_27992 = state_27987;
(statearr_27992[(8)] = inst_27970__$1);

return statearr_27992;
})();
if(cljs.core.truth_(inst_27971)){
var statearr_27993_28012 = state_27987__$1;
(statearr_27993_28012[(1)] = (5));

} else {
var statearr_27994_28013 = state_27987__$1;
(statearr_27994_28013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (6))){
var inst_27974 = (state_27987[(9)]);
var inst_27970 = (state_27987[(8)]);
var inst_27967 = (state_27987[(7)]);
var inst_27974__$1 = f.call(null,inst_27967,inst_27970);
var inst_27975 = cljs.core.reduced_QMARK_.call(null,inst_27974__$1);
var state_27987__$1 = (function (){var statearr_27995 = state_27987;
(statearr_27995[(9)] = inst_27974__$1);

return statearr_27995;
})();
if(inst_27975){
var statearr_27996_28014 = state_27987__$1;
(statearr_27996_28014[(1)] = (8));

} else {
var statearr_27997_28015 = state_27987__$1;
(statearr_27997_28015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (3))){
var inst_27985 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27987__$1,inst_27985);
} else {
if((state_val_27988 === (2))){
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27987__$1,(4),ch);
} else {
if((state_val_27988 === (9))){
var inst_27974 = (state_27987[(9)]);
var inst_27967 = inst_27974;
var state_27987__$1 = (function (){var statearr_27998 = state_27987;
(statearr_27998[(7)] = inst_27967);

return statearr_27998;
})();
var statearr_27999_28016 = state_27987__$1;
(statearr_27999_28016[(2)] = null);

(statearr_27999_28016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (5))){
var inst_27967 = (state_27987[(7)]);
var state_27987__$1 = state_27987;
var statearr_28000_28017 = state_27987__$1;
(statearr_28000_28017[(2)] = inst_27967);

(statearr_28000_28017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (10))){
var inst_27981 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28001_28018 = state_27987__$1;
(statearr_28001_28018[(2)] = inst_27981);

(statearr_28001_28018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (8))){
var inst_27974 = (state_27987[(9)]);
var inst_27977 = cljs.core.deref.call(null,inst_27974);
var state_27987__$1 = state_27987;
var statearr_28002_28019 = state_27987__$1;
(statearr_28002_28019[(2)] = inst_27977);

(statearr_28002_28019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto__))
;
return ((function (switch__27109__auto__,c__27221__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27110__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27110__auto____0 = (function (){
var statearr_28006 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28006[(0)] = cljs$core$async$reduce_$_state_machine__27110__auto__);

(statearr_28006[(1)] = (1));

return statearr_28006;
});
var cljs$core$async$reduce_$_state_machine__27110__auto____1 = (function (state_27987){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_27987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e28007){if((e28007 instanceof Object)){
var ex__27113__auto__ = e28007;
var statearr_28008_28020 = state_27987;
(statearr_28008_28020[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28021 = state_27987;
state_27987 = G__28021;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27110__auto__ = function(state_27987){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27110__auto____1.call(this,state_27987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27110__auto____0;
cljs$core$async$reduce_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27110__auto____1;
return cljs$core$async$reduce_$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto__))
})();
var state__27223__auto__ = (function (){var statearr_28009 = f__27222__auto__.call(null);
(statearr_28009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto__);

return statearr_28009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto__))
);

return c__27221__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28022 = [];
var len__25996__auto___28074 = arguments.length;
var i__25997__auto___28075 = (0);
while(true){
if((i__25997__auto___28075 < len__25996__auto___28074)){
args28022.push((arguments[i__25997__auto___28075]));

var G__28076 = (i__25997__auto___28075 + (1));
i__25997__auto___28075 = G__28076;
continue;
} else {
}
break;
}

var G__28024 = args28022.length;
switch (G__28024) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28022.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto__){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto__){
return (function (state_28049){
var state_val_28050 = (state_28049[(1)]);
if((state_val_28050 === (7))){
var inst_28031 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28051_28078 = state_28049__$1;
(statearr_28051_28078[(2)] = inst_28031);

(statearr_28051_28078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (1))){
var inst_28025 = cljs.core.seq.call(null,coll);
var inst_28026 = inst_28025;
var state_28049__$1 = (function (){var statearr_28052 = state_28049;
(statearr_28052[(7)] = inst_28026);

return statearr_28052;
})();
var statearr_28053_28079 = state_28049__$1;
(statearr_28053_28079[(2)] = null);

(statearr_28053_28079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (4))){
var inst_28026 = (state_28049[(7)]);
var inst_28029 = cljs.core.first.call(null,inst_28026);
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28049__$1,(7),ch,inst_28029);
} else {
if((state_val_28050 === (13))){
var inst_28043 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28054_28080 = state_28049__$1;
(statearr_28054_28080[(2)] = inst_28043);

(statearr_28054_28080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (6))){
var inst_28034 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
if(cljs.core.truth_(inst_28034)){
var statearr_28055_28081 = state_28049__$1;
(statearr_28055_28081[(1)] = (8));

} else {
var statearr_28056_28082 = state_28049__$1;
(statearr_28056_28082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (3))){
var inst_28047 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28049__$1,inst_28047);
} else {
if((state_val_28050 === (12))){
var state_28049__$1 = state_28049;
var statearr_28057_28083 = state_28049__$1;
(statearr_28057_28083[(2)] = null);

(statearr_28057_28083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (2))){
var inst_28026 = (state_28049[(7)]);
var state_28049__$1 = state_28049;
if(cljs.core.truth_(inst_28026)){
var statearr_28058_28084 = state_28049__$1;
(statearr_28058_28084[(1)] = (4));

} else {
var statearr_28059_28085 = state_28049__$1;
(statearr_28059_28085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (11))){
var inst_28040 = cljs.core.async.close_BANG_.call(null,ch);
var state_28049__$1 = state_28049;
var statearr_28060_28086 = state_28049__$1;
(statearr_28060_28086[(2)] = inst_28040);

(statearr_28060_28086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (9))){
var state_28049__$1 = state_28049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28061_28087 = state_28049__$1;
(statearr_28061_28087[(1)] = (11));

} else {
var statearr_28062_28088 = state_28049__$1;
(statearr_28062_28088[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (5))){
var inst_28026 = (state_28049[(7)]);
var state_28049__$1 = state_28049;
var statearr_28063_28089 = state_28049__$1;
(statearr_28063_28089[(2)] = inst_28026);

(statearr_28063_28089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (10))){
var inst_28045 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28064_28090 = state_28049__$1;
(statearr_28064_28090[(2)] = inst_28045);

(statearr_28064_28090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (8))){
var inst_28026 = (state_28049[(7)]);
var inst_28036 = cljs.core.next.call(null,inst_28026);
var inst_28026__$1 = inst_28036;
var state_28049__$1 = (function (){var statearr_28065 = state_28049;
(statearr_28065[(7)] = inst_28026__$1);

return statearr_28065;
})();
var statearr_28066_28091 = state_28049__$1;
(statearr_28066_28091[(2)] = null);

(statearr_28066_28091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto__))
;
return ((function (switch__27109__auto__,c__27221__auto__){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_28070 = [null,null,null,null,null,null,null,null];
(statearr_28070[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_28070[(1)] = (1));

return statearr_28070;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_28049){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_28049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e28071){if((e28071 instanceof Object)){
var ex__27113__auto__ = e28071;
var statearr_28072_28092 = state_28049;
(statearr_28072_28092[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28093 = state_28049;
state_28049 = G__28093;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_28049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_28049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto__))
})();
var state__27223__auto__ = (function (){var statearr_28073 = f__27222__auto__.call(null);
(statearr_28073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto__);

return statearr_28073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto__))
);

return c__27221__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25551__auto__ = (((_ == null))?null:_);
var m__25552__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,_);
} else {
var m__25552__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25551__auto__ = (((m == null))?null:m);
var m__25552__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25552__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25551__auto__ = (((m == null))?null:m);
var m__25552__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,m,ch);
} else {
var m__25552__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25551__auto__ = (((m == null))?null:m);
var m__25552__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,m);
} else {
var m__25552__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28319 = (function (ch,cs,meta28320){
this.ch = ch;
this.cs = cs;
this.meta28320 = meta28320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28321,meta28320__$1){
var self__ = this;
var _28321__$1 = this;
return (new cljs.core.async.t_cljs$core$async28319(self__.ch,self__.cs,meta28320__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28321){
var self__ = this;
var _28321__$1 = this;
return self__.meta28320;
});})(cs))
;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28319.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28320","meta28320",58959287,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28319";

cljs.core.async.t_cljs$core$async28319.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async28319");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28319 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28319(ch__$1,cs__$1,meta28320){
return (new cljs.core.async.t_cljs$core$async28319(ch__$1,cs__$1,meta28320));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28319(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27221__auto___28544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___28544,cs,m,dchan,dctr,done){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___28544,cs,m,dchan,dctr,done){
return (function (state_28456){
var state_val_28457 = (state_28456[(1)]);
if((state_val_28457 === (7))){
var inst_28452 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
var statearr_28458_28545 = state_28456__$1;
(statearr_28458_28545[(2)] = inst_28452);

(statearr_28458_28545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (20))){
var inst_28355 = (state_28456[(7)]);
var inst_28367 = cljs.core.first.call(null,inst_28355);
var inst_28368 = cljs.core.nth.call(null,inst_28367,(0),null);
var inst_28369 = cljs.core.nth.call(null,inst_28367,(1),null);
var state_28456__$1 = (function (){var statearr_28459 = state_28456;
(statearr_28459[(8)] = inst_28368);

return statearr_28459;
})();
if(cljs.core.truth_(inst_28369)){
var statearr_28460_28546 = state_28456__$1;
(statearr_28460_28546[(1)] = (22));

} else {
var statearr_28461_28547 = state_28456__$1;
(statearr_28461_28547[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (27))){
var inst_28399 = (state_28456[(9)]);
var inst_28397 = (state_28456[(10)]);
var inst_28404 = (state_28456[(11)]);
var inst_28324 = (state_28456[(12)]);
var inst_28404__$1 = cljs.core._nth.call(null,inst_28397,inst_28399);
var inst_28405 = cljs.core.async.put_BANG_.call(null,inst_28404__$1,inst_28324,done);
var state_28456__$1 = (function (){var statearr_28462 = state_28456;
(statearr_28462[(11)] = inst_28404__$1);

return statearr_28462;
})();
if(cljs.core.truth_(inst_28405)){
var statearr_28463_28548 = state_28456__$1;
(statearr_28463_28548[(1)] = (30));

} else {
var statearr_28464_28549 = state_28456__$1;
(statearr_28464_28549[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (1))){
var state_28456__$1 = state_28456;
var statearr_28465_28550 = state_28456__$1;
(statearr_28465_28550[(2)] = null);

(statearr_28465_28550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (24))){
var inst_28355 = (state_28456[(7)]);
var inst_28374 = (state_28456[(2)]);
var inst_28375 = cljs.core.next.call(null,inst_28355);
var inst_28333 = inst_28375;
var inst_28334 = null;
var inst_28335 = (0);
var inst_28336 = (0);
var state_28456__$1 = (function (){var statearr_28466 = state_28456;
(statearr_28466[(13)] = inst_28335);

(statearr_28466[(14)] = inst_28336);

(statearr_28466[(15)] = inst_28374);

(statearr_28466[(16)] = inst_28333);

(statearr_28466[(17)] = inst_28334);

return statearr_28466;
})();
var statearr_28467_28551 = state_28456__$1;
(statearr_28467_28551[(2)] = null);

(statearr_28467_28551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (39))){
var state_28456__$1 = state_28456;
var statearr_28471_28552 = state_28456__$1;
(statearr_28471_28552[(2)] = null);

(statearr_28471_28552[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (4))){
var inst_28324 = (state_28456[(12)]);
var inst_28324__$1 = (state_28456[(2)]);
var inst_28325 = (inst_28324__$1 == null);
var state_28456__$1 = (function (){var statearr_28472 = state_28456;
(statearr_28472[(12)] = inst_28324__$1);

return statearr_28472;
})();
if(cljs.core.truth_(inst_28325)){
var statearr_28473_28553 = state_28456__$1;
(statearr_28473_28553[(1)] = (5));

} else {
var statearr_28474_28554 = state_28456__$1;
(statearr_28474_28554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (15))){
var inst_28335 = (state_28456[(13)]);
var inst_28336 = (state_28456[(14)]);
var inst_28333 = (state_28456[(16)]);
var inst_28334 = (state_28456[(17)]);
var inst_28351 = (state_28456[(2)]);
var inst_28352 = (inst_28336 + (1));
var tmp28468 = inst_28335;
var tmp28469 = inst_28333;
var tmp28470 = inst_28334;
var inst_28333__$1 = tmp28469;
var inst_28334__$1 = tmp28470;
var inst_28335__$1 = tmp28468;
var inst_28336__$1 = inst_28352;
var state_28456__$1 = (function (){var statearr_28475 = state_28456;
(statearr_28475[(13)] = inst_28335__$1);

(statearr_28475[(14)] = inst_28336__$1);

(statearr_28475[(18)] = inst_28351);

(statearr_28475[(16)] = inst_28333__$1);

(statearr_28475[(17)] = inst_28334__$1);

return statearr_28475;
})();
var statearr_28476_28555 = state_28456__$1;
(statearr_28476_28555[(2)] = null);

(statearr_28476_28555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (21))){
var inst_28378 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
var statearr_28480_28556 = state_28456__$1;
(statearr_28480_28556[(2)] = inst_28378);

(statearr_28480_28556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (31))){
var inst_28404 = (state_28456[(11)]);
var inst_28408 = done.call(null,null);
var inst_28409 = cljs.core.async.untap_STAR_.call(null,m,inst_28404);
var state_28456__$1 = (function (){var statearr_28481 = state_28456;
(statearr_28481[(19)] = inst_28408);

return statearr_28481;
})();
var statearr_28482_28557 = state_28456__$1;
(statearr_28482_28557[(2)] = inst_28409);

(statearr_28482_28557[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (32))){
var inst_28399 = (state_28456[(9)]);
var inst_28398 = (state_28456[(20)]);
var inst_28396 = (state_28456[(21)]);
var inst_28397 = (state_28456[(10)]);
var inst_28411 = (state_28456[(2)]);
var inst_28412 = (inst_28399 + (1));
var tmp28477 = inst_28398;
var tmp28478 = inst_28396;
var tmp28479 = inst_28397;
var inst_28396__$1 = tmp28478;
var inst_28397__$1 = tmp28479;
var inst_28398__$1 = tmp28477;
var inst_28399__$1 = inst_28412;
var state_28456__$1 = (function (){var statearr_28483 = state_28456;
(statearr_28483[(9)] = inst_28399__$1);

(statearr_28483[(20)] = inst_28398__$1);

(statearr_28483[(21)] = inst_28396__$1);

(statearr_28483[(10)] = inst_28397__$1);

(statearr_28483[(22)] = inst_28411);

return statearr_28483;
})();
var statearr_28484_28558 = state_28456__$1;
(statearr_28484_28558[(2)] = null);

(statearr_28484_28558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (40))){
var inst_28424 = (state_28456[(23)]);
var inst_28428 = done.call(null,null);
var inst_28429 = cljs.core.async.untap_STAR_.call(null,m,inst_28424);
var state_28456__$1 = (function (){var statearr_28485 = state_28456;
(statearr_28485[(24)] = inst_28428);

return statearr_28485;
})();
var statearr_28486_28559 = state_28456__$1;
(statearr_28486_28559[(2)] = inst_28429);

(statearr_28486_28559[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (33))){
var inst_28415 = (state_28456[(25)]);
var inst_28417 = cljs.core.chunked_seq_QMARK_.call(null,inst_28415);
var state_28456__$1 = state_28456;
if(inst_28417){
var statearr_28487_28560 = state_28456__$1;
(statearr_28487_28560[(1)] = (36));

} else {
var statearr_28488_28561 = state_28456__$1;
(statearr_28488_28561[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (13))){
var inst_28345 = (state_28456[(26)]);
var inst_28348 = cljs.core.async.close_BANG_.call(null,inst_28345);
var state_28456__$1 = state_28456;
var statearr_28489_28562 = state_28456__$1;
(statearr_28489_28562[(2)] = inst_28348);

(statearr_28489_28562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (22))){
var inst_28368 = (state_28456[(8)]);
var inst_28371 = cljs.core.async.close_BANG_.call(null,inst_28368);
var state_28456__$1 = state_28456;
var statearr_28490_28563 = state_28456__$1;
(statearr_28490_28563[(2)] = inst_28371);

(statearr_28490_28563[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (36))){
var inst_28415 = (state_28456[(25)]);
var inst_28419 = cljs.core.chunk_first.call(null,inst_28415);
var inst_28420 = cljs.core.chunk_rest.call(null,inst_28415);
var inst_28421 = cljs.core.count.call(null,inst_28419);
var inst_28396 = inst_28420;
var inst_28397 = inst_28419;
var inst_28398 = inst_28421;
var inst_28399 = (0);
var state_28456__$1 = (function (){var statearr_28491 = state_28456;
(statearr_28491[(9)] = inst_28399);

(statearr_28491[(20)] = inst_28398);

(statearr_28491[(21)] = inst_28396);

(statearr_28491[(10)] = inst_28397);

return statearr_28491;
})();
var statearr_28492_28564 = state_28456__$1;
(statearr_28492_28564[(2)] = null);

(statearr_28492_28564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (41))){
var inst_28415 = (state_28456[(25)]);
var inst_28431 = (state_28456[(2)]);
var inst_28432 = cljs.core.next.call(null,inst_28415);
var inst_28396 = inst_28432;
var inst_28397 = null;
var inst_28398 = (0);
var inst_28399 = (0);
var state_28456__$1 = (function (){var statearr_28493 = state_28456;
(statearr_28493[(9)] = inst_28399);

(statearr_28493[(20)] = inst_28398);

(statearr_28493[(21)] = inst_28396);

(statearr_28493[(10)] = inst_28397);

(statearr_28493[(27)] = inst_28431);

return statearr_28493;
})();
var statearr_28494_28565 = state_28456__$1;
(statearr_28494_28565[(2)] = null);

(statearr_28494_28565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (43))){
var state_28456__$1 = state_28456;
var statearr_28495_28566 = state_28456__$1;
(statearr_28495_28566[(2)] = null);

(statearr_28495_28566[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (29))){
var inst_28440 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
var statearr_28496_28567 = state_28456__$1;
(statearr_28496_28567[(2)] = inst_28440);

(statearr_28496_28567[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (44))){
var inst_28449 = (state_28456[(2)]);
var state_28456__$1 = (function (){var statearr_28497 = state_28456;
(statearr_28497[(28)] = inst_28449);

return statearr_28497;
})();
var statearr_28498_28568 = state_28456__$1;
(statearr_28498_28568[(2)] = null);

(statearr_28498_28568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (6))){
var inst_28388 = (state_28456[(29)]);
var inst_28387 = cljs.core.deref.call(null,cs);
var inst_28388__$1 = cljs.core.keys.call(null,inst_28387);
var inst_28389 = cljs.core.count.call(null,inst_28388__$1);
var inst_28390 = cljs.core.reset_BANG_.call(null,dctr,inst_28389);
var inst_28395 = cljs.core.seq.call(null,inst_28388__$1);
var inst_28396 = inst_28395;
var inst_28397 = null;
var inst_28398 = (0);
var inst_28399 = (0);
var state_28456__$1 = (function (){var statearr_28499 = state_28456;
(statearr_28499[(9)] = inst_28399);

(statearr_28499[(20)] = inst_28398);

(statearr_28499[(21)] = inst_28396);

(statearr_28499[(10)] = inst_28397);

(statearr_28499[(29)] = inst_28388__$1);

(statearr_28499[(30)] = inst_28390);

return statearr_28499;
})();
var statearr_28500_28569 = state_28456__$1;
(statearr_28500_28569[(2)] = null);

(statearr_28500_28569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (28))){
var inst_28396 = (state_28456[(21)]);
var inst_28415 = (state_28456[(25)]);
var inst_28415__$1 = cljs.core.seq.call(null,inst_28396);
var state_28456__$1 = (function (){var statearr_28501 = state_28456;
(statearr_28501[(25)] = inst_28415__$1);

return statearr_28501;
})();
if(inst_28415__$1){
var statearr_28502_28570 = state_28456__$1;
(statearr_28502_28570[(1)] = (33));

} else {
var statearr_28503_28571 = state_28456__$1;
(statearr_28503_28571[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (25))){
var inst_28399 = (state_28456[(9)]);
var inst_28398 = (state_28456[(20)]);
var inst_28401 = (inst_28399 < inst_28398);
var inst_28402 = inst_28401;
var state_28456__$1 = state_28456;
if(cljs.core.truth_(inst_28402)){
var statearr_28504_28572 = state_28456__$1;
(statearr_28504_28572[(1)] = (27));

} else {
var statearr_28505_28573 = state_28456__$1;
(statearr_28505_28573[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (34))){
var state_28456__$1 = state_28456;
var statearr_28506_28574 = state_28456__$1;
(statearr_28506_28574[(2)] = null);

(statearr_28506_28574[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (17))){
var state_28456__$1 = state_28456;
var statearr_28507_28575 = state_28456__$1;
(statearr_28507_28575[(2)] = null);

(statearr_28507_28575[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (3))){
var inst_28454 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28456__$1,inst_28454);
} else {
if((state_val_28457 === (12))){
var inst_28383 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
var statearr_28508_28576 = state_28456__$1;
(statearr_28508_28576[(2)] = inst_28383);

(statearr_28508_28576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (2))){
var state_28456__$1 = state_28456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28456__$1,(4),ch);
} else {
if((state_val_28457 === (23))){
var state_28456__$1 = state_28456;
var statearr_28509_28577 = state_28456__$1;
(statearr_28509_28577[(2)] = null);

(statearr_28509_28577[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (35))){
var inst_28438 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
var statearr_28510_28578 = state_28456__$1;
(statearr_28510_28578[(2)] = inst_28438);

(statearr_28510_28578[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (19))){
var inst_28355 = (state_28456[(7)]);
var inst_28359 = cljs.core.chunk_first.call(null,inst_28355);
var inst_28360 = cljs.core.chunk_rest.call(null,inst_28355);
var inst_28361 = cljs.core.count.call(null,inst_28359);
var inst_28333 = inst_28360;
var inst_28334 = inst_28359;
var inst_28335 = inst_28361;
var inst_28336 = (0);
var state_28456__$1 = (function (){var statearr_28511 = state_28456;
(statearr_28511[(13)] = inst_28335);

(statearr_28511[(14)] = inst_28336);

(statearr_28511[(16)] = inst_28333);

(statearr_28511[(17)] = inst_28334);

return statearr_28511;
})();
var statearr_28512_28579 = state_28456__$1;
(statearr_28512_28579[(2)] = null);

(statearr_28512_28579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (11))){
var inst_28355 = (state_28456[(7)]);
var inst_28333 = (state_28456[(16)]);
var inst_28355__$1 = cljs.core.seq.call(null,inst_28333);
var state_28456__$1 = (function (){var statearr_28513 = state_28456;
(statearr_28513[(7)] = inst_28355__$1);

return statearr_28513;
})();
if(inst_28355__$1){
var statearr_28514_28580 = state_28456__$1;
(statearr_28514_28580[(1)] = (16));

} else {
var statearr_28515_28581 = state_28456__$1;
(statearr_28515_28581[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (9))){
var inst_28385 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
var statearr_28516_28582 = state_28456__$1;
(statearr_28516_28582[(2)] = inst_28385);

(statearr_28516_28582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (5))){
var inst_28331 = cljs.core.deref.call(null,cs);
var inst_28332 = cljs.core.seq.call(null,inst_28331);
var inst_28333 = inst_28332;
var inst_28334 = null;
var inst_28335 = (0);
var inst_28336 = (0);
var state_28456__$1 = (function (){var statearr_28517 = state_28456;
(statearr_28517[(13)] = inst_28335);

(statearr_28517[(14)] = inst_28336);

(statearr_28517[(16)] = inst_28333);

(statearr_28517[(17)] = inst_28334);

return statearr_28517;
})();
var statearr_28518_28583 = state_28456__$1;
(statearr_28518_28583[(2)] = null);

(statearr_28518_28583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (14))){
var state_28456__$1 = state_28456;
var statearr_28519_28584 = state_28456__$1;
(statearr_28519_28584[(2)] = null);

(statearr_28519_28584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (45))){
var inst_28446 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
var statearr_28520_28585 = state_28456__$1;
(statearr_28520_28585[(2)] = inst_28446);

(statearr_28520_28585[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (26))){
var inst_28388 = (state_28456[(29)]);
var inst_28442 = (state_28456[(2)]);
var inst_28443 = cljs.core.seq.call(null,inst_28388);
var state_28456__$1 = (function (){var statearr_28521 = state_28456;
(statearr_28521[(31)] = inst_28442);

return statearr_28521;
})();
if(inst_28443){
var statearr_28522_28586 = state_28456__$1;
(statearr_28522_28586[(1)] = (42));

} else {
var statearr_28523_28587 = state_28456__$1;
(statearr_28523_28587[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (16))){
var inst_28355 = (state_28456[(7)]);
var inst_28357 = cljs.core.chunked_seq_QMARK_.call(null,inst_28355);
var state_28456__$1 = state_28456;
if(inst_28357){
var statearr_28524_28588 = state_28456__$1;
(statearr_28524_28588[(1)] = (19));

} else {
var statearr_28525_28589 = state_28456__$1;
(statearr_28525_28589[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (38))){
var inst_28435 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
var statearr_28526_28590 = state_28456__$1;
(statearr_28526_28590[(2)] = inst_28435);

(statearr_28526_28590[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (30))){
var state_28456__$1 = state_28456;
var statearr_28527_28591 = state_28456__$1;
(statearr_28527_28591[(2)] = null);

(statearr_28527_28591[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (10))){
var inst_28336 = (state_28456[(14)]);
var inst_28334 = (state_28456[(17)]);
var inst_28344 = cljs.core._nth.call(null,inst_28334,inst_28336);
var inst_28345 = cljs.core.nth.call(null,inst_28344,(0),null);
var inst_28346 = cljs.core.nth.call(null,inst_28344,(1),null);
var state_28456__$1 = (function (){var statearr_28528 = state_28456;
(statearr_28528[(26)] = inst_28345);

return statearr_28528;
})();
if(cljs.core.truth_(inst_28346)){
var statearr_28529_28592 = state_28456__$1;
(statearr_28529_28592[(1)] = (13));

} else {
var statearr_28530_28593 = state_28456__$1;
(statearr_28530_28593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (18))){
var inst_28381 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
var statearr_28531_28594 = state_28456__$1;
(statearr_28531_28594[(2)] = inst_28381);

(statearr_28531_28594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (42))){
var state_28456__$1 = state_28456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28456__$1,(45),dchan);
} else {
if((state_val_28457 === (37))){
var inst_28424 = (state_28456[(23)]);
var inst_28415 = (state_28456[(25)]);
var inst_28324 = (state_28456[(12)]);
var inst_28424__$1 = cljs.core.first.call(null,inst_28415);
var inst_28425 = cljs.core.async.put_BANG_.call(null,inst_28424__$1,inst_28324,done);
var state_28456__$1 = (function (){var statearr_28532 = state_28456;
(statearr_28532[(23)] = inst_28424__$1);

return statearr_28532;
})();
if(cljs.core.truth_(inst_28425)){
var statearr_28533_28595 = state_28456__$1;
(statearr_28533_28595[(1)] = (39));

} else {
var statearr_28534_28596 = state_28456__$1;
(statearr_28534_28596[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (8))){
var inst_28335 = (state_28456[(13)]);
var inst_28336 = (state_28456[(14)]);
var inst_28338 = (inst_28336 < inst_28335);
var inst_28339 = inst_28338;
var state_28456__$1 = state_28456;
if(cljs.core.truth_(inst_28339)){
var statearr_28535_28597 = state_28456__$1;
(statearr_28535_28597[(1)] = (10));

} else {
var statearr_28536_28598 = state_28456__$1;
(statearr_28536_28598[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___28544,cs,m,dchan,dctr,done))
;
return ((function (switch__27109__auto__,c__27221__auto___28544,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27110__auto__ = null;
var cljs$core$async$mult_$_state_machine__27110__auto____0 = (function (){
var statearr_28540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28540[(0)] = cljs$core$async$mult_$_state_machine__27110__auto__);

(statearr_28540[(1)] = (1));

return statearr_28540;
});
var cljs$core$async$mult_$_state_machine__27110__auto____1 = (function (state_28456){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_28456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e28541){if((e28541 instanceof Object)){
var ex__27113__auto__ = e28541;
var statearr_28542_28599 = state_28456;
(statearr_28542_28599[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28600 = state_28456;
state_28456 = G__28600;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27110__auto__ = function(state_28456){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27110__auto____1.call(this,state_28456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27110__auto____0;
cljs$core$async$mult_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27110__auto____1;
return cljs$core$async$mult_$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___28544,cs,m,dchan,dctr,done))
})();
var state__27223__auto__ = (function (){var statearr_28543 = f__27222__auto__.call(null);
(statearr_28543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___28544);

return statearr_28543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___28544,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28601 = [];
var len__25996__auto___28604 = arguments.length;
var i__25997__auto___28605 = (0);
while(true){
if((i__25997__auto___28605 < len__25996__auto___28604)){
args28601.push((arguments[i__25997__auto___28605]));

var G__28606 = (i__25997__auto___28605 + (1));
i__25997__auto___28605 = G__28606;
continue;
} else {
}
break;
}

var G__28603 = args28601.length;
switch (G__28603) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28601.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25551__auto__ = (((m == null))?null:m);
var m__25552__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,m,ch);
} else {
var m__25552__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25551__auto__ = (((m == null))?null:m);
var m__25552__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,m,ch);
} else {
var m__25552__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25551__auto__ = (((m == null))?null:m);
var m__25552__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,m);
} else {
var m__25552__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25551__auto__ = (((m == null))?null:m);
var m__25552__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,m,state_map);
} else {
var m__25552__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25551__auto__ = (((m == null))?null:m);
var m__25552__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,m,mode);
} else {
var m__25552__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26003__auto__ = [];
var len__25996__auto___28618 = arguments.length;
var i__25997__auto___28619 = (0);
while(true){
if((i__25997__auto___28619 < len__25996__auto___28618)){
args__26003__auto__.push((arguments[i__25997__auto___28619]));

var G__28620 = (i__25997__auto___28619 + (1));
i__25997__auto___28619 = G__28620;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((3) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26004__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28612){
var map__28613 = p__28612;
var map__28613__$1 = ((((!((map__28613 == null)))?((((map__28613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28613):map__28613);
var opts = map__28613__$1;
var statearr_28615_28621 = state;
(statearr_28615_28621[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28613,map__28613__$1,opts){
return (function (val){
var statearr_28616_28622 = state;
(statearr_28616_28622[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28613,map__28613__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28617_28623 = state;
(statearr_28617_28623[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28608){
var G__28609 = cljs.core.first.call(null,seq28608);
var seq28608__$1 = cljs.core.next.call(null,seq28608);
var G__28610 = cljs.core.first.call(null,seq28608__$1);
var seq28608__$2 = cljs.core.next.call(null,seq28608__$1);
var G__28611 = cljs.core.first.call(null,seq28608__$2);
var seq28608__$3 = cljs.core.next.call(null,seq28608__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28609,G__28610,G__28611,seq28608__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28791 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28792){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28792 = meta28792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28793,meta28792__$1){
var self__ = this;
var _28793__$1 = this;
return (new cljs.core.async.t_cljs$core$async28791(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28792__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28793){
var self__ = this;
var _28793__$1 = this;
return self__.meta28792;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28791.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28791.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28791.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28791.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28791.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28791.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28791.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28791.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28791.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28792","meta28792",463538299,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28791";

cljs.core.async.t_cljs$core$async28791.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async28791");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28791 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28791(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28792){
return (new cljs.core.async.t_cljs$core$async28791(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28792));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28791(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27221__auto___28958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___28958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___28958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28895){
var state_val_28896 = (state_28895[(1)]);
if((state_val_28896 === (7))){
var inst_28810 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28897_28959 = state_28895__$1;
(statearr_28897_28959[(2)] = inst_28810);

(statearr_28897_28959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (20))){
var inst_28822 = (state_28895[(7)]);
var state_28895__$1 = state_28895;
var statearr_28898_28960 = state_28895__$1;
(statearr_28898_28960[(2)] = inst_28822);

(statearr_28898_28960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (27))){
var state_28895__$1 = state_28895;
var statearr_28899_28961 = state_28895__$1;
(statearr_28899_28961[(2)] = null);

(statearr_28899_28961[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (1))){
var inst_28797 = (state_28895[(8)]);
var inst_28797__$1 = calc_state.call(null);
var inst_28799 = (inst_28797__$1 == null);
var inst_28800 = cljs.core.not.call(null,inst_28799);
var state_28895__$1 = (function (){var statearr_28900 = state_28895;
(statearr_28900[(8)] = inst_28797__$1);

return statearr_28900;
})();
if(inst_28800){
var statearr_28901_28962 = state_28895__$1;
(statearr_28901_28962[(1)] = (2));

} else {
var statearr_28902_28963 = state_28895__$1;
(statearr_28902_28963[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (24))){
var inst_28869 = (state_28895[(9)]);
var inst_28855 = (state_28895[(10)]);
var inst_28846 = (state_28895[(11)]);
var inst_28869__$1 = inst_28846.call(null,inst_28855);
var state_28895__$1 = (function (){var statearr_28903 = state_28895;
(statearr_28903[(9)] = inst_28869__$1);

return statearr_28903;
})();
if(cljs.core.truth_(inst_28869__$1)){
var statearr_28904_28964 = state_28895__$1;
(statearr_28904_28964[(1)] = (29));

} else {
var statearr_28905_28965 = state_28895__$1;
(statearr_28905_28965[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (4))){
var inst_28813 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28813)){
var statearr_28906_28966 = state_28895__$1;
(statearr_28906_28966[(1)] = (8));

} else {
var statearr_28907_28967 = state_28895__$1;
(statearr_28907_28967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (15))){
var inst_28840 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28840)){
var statearr_28908_28968 = state_28895__$1;
(statearr_28908_28968[(1)] = (19));

} else {
var statearr_28909_28969 = state_28895__$1;
(statearr_28909_28969[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (21))){
var inst_28845 = (state_28895[(12)]);
var inst_28845__$1 = (state_28895[(2)]);
var inst_28846 = cljs.core.get.call(null,inst_28845__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28847 = cljs.core.get.call(null,inst_28845__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28848 = cljs.core.get.call(null,inst_28845__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28895__$1 = (function (){var statearr_28910 = state_28895;
(statearr_28910[(12)] = inst_28845__$1);

(statearr_28910[(13)] = inst_28847);

(statearr_28910[(11)] = inst_28846);

return statearr_28910;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28895__$1,(22),inst_28848);
} else {
if((state_val_28896 === (31))){
var inst_28877 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28877)){
var statearr_28911_28970 = state_28895__$1;
(statearr_28911_28970[(1)] = (32));

} else {
var statearr_28912_28971 = state_28895__$1;
(statearr_28912_28971[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (32))){
var inst_28854 = (state_28895[(14)]);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28895__$1,(35),out,inst_28854);
} else {
if((state_val_28896 === (33))){
var inst_28845 = (state_28895[(12)]);
var inst_28822 = inst_28845;
var state_28895__$1 = (function (){var statearr_28913 = state_28895;
(statearr_28913[(7)] = inst_28822);

return statearr_28913;
})();
var statearr_28914_28972 = state_28895__$1;
(statearr_28914_28972[(2)] = null);

(statearr_28914_28972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (13))){
var inst_28822 = (state_28895[(7)]);
var inst_28829 = inst_28822.cljs$lang$protocol_mask$partition0$;
var inst_28830 = (inst_28829 & (64));
var inst_28831 = inst_28822.cljs$core$ISeq$;
var inst_28832 = (cljs.core.PROTOCOL_SENTINEL === inst_28831);
var inst_28833 = (inst_28830) || (inst_28832);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28833)){
var statearr_28915_28973 = state_28895__$1;
(statearr_28915_28973[(1)] = (16));

} else {
var statearr_28916_28974 = state_28895__$1;
(statearr_28916_28974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (22))){
var inst_28854 = (state_28895[(14)]);
var inst_28855 = (state_28895[(10)]);
var inst_28853 = (state_28895[(2)]);
var inst_28854__$1 = cljs.core.nth.call(null,inst_28853,(0),null);
var inst_28855__$1 = cljs.core.nth.call(null,inst_28853,(1),null);
var inst_28856 = (inst_28854__$1 == null);
var inst_28857 = cljs.core._EQ_.call(null,inst_28855__$1,change);
var inst_28858 = (inst_28856) || (inst_28857);
var state_28895__$1 = (function (){var statearr_28917 = state_28895;
(statearr_28917[(14)] = inst_28854__$1);

(statearr_28917[(10)] = inst_28855__$1);

return statearr_28917;
})();
if(cljs.core.truth_(inst_28858)){
var statearr_28918_28975 = state_28895__$1;
(statearr_28918_28975[(1)] = (23));

} else {
var statearr_28919_28976 = state_28895__$1;
(statearr_28919_28976[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (36))){
var inst_28845 = (state_28895[(12)]);
var inst_28822 = inst_28845;
var state_28895__$1 = (function (){var statearr_28920 = state_28895;
(statearr_28920[(7)] = inst_28822);

return statearr_28920;
})();
var statearr_28921_28977 = state_28895__$1;
(statearr_28921_28977[(2)] = null);

(statearr_28921_28977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (29))){
var inst_28869 = (state_28895[(9)]);
var state_28895__$1 = state_28895;
var statearr_28922_28978 = state_28895__$1;
(statearr_28922_28978[(2)] = inst_28869);

(statearr_28922_28978[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (6))){
var state_28895__$1 = state_28895;
var statearr_28923_28979 = state_28895__$1;
(statearr_28923_28979[(2)] = false);

(statearr_28923_28979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (28))){
var inst_28865 = (state_28895[(2)]);
var inst_28866 = calc_state.call(null);
var inst_28822 = inst_28866;
var state_28895__$1 = (function (){var statearr_28924 = state_28895;
(statearr_28924[(7)] = inst_28822);

(statearr_28924[(15)] = inst_28865);

return statearr_28924;
})();
var statearr_28925_28980 = state_28895__$1;
(statearr_28925_28980[(2)] = null);

(statearr_28925_28980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (25))){
var inst_28891 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28926_28981 = state_28895__$1;
(statearr_28926_28981[(2)] = inst_28891);

(statearr_28926_28981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (34))){
var inst_28889 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28927_28982 = state_28895__$1;
(statearr_28927_28982[(2)] = inst_28889);

(statearr_28927_28982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (17))){
var state_28895__$1 = state_28895;
var statearr_28928_28983 = state_28895__$1;
(statearr_28928_28983[(2)] = false);

(statearr_28928_28983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (3))){
var state_28895__$1 = state_28895;
var statearr_28929_28984 = state_28895__$1;
(statearr_28929_28984[(2)] = false);

(statearr_28929_28984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (12))){
var inst_28893 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28895__$1,inst_28893);
} else {
if((state_val_28896 === (2))){
var inst_28797 = (state_28895[(8)]);
var inst_28802 = inst_28797.cljs$lang$protocol_mask$partition0$;
var inst_28803 = (inst_28802 & (64));
var inst_28804 = inst_28797.cljs$core$ISeq$;
var inst_28805 = (cljs.core.PROTOCOL_SENTINEL === inst_28804);
var inst_28806 = (inst_28803) || (inst_28805);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28806)){
var statearr_28930_28985 = state_28895__$1;
(statearr_28930_28985[(1)] = (5));

} else {
var statearr_28931_28986 = state_28895__$1;
(statearr_28931_28986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (23))){
var inst_28854 = (state_28895[(14)]);
var inst_28860 = (inst_28854 == null);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28860)){
var statearr_28932_28987 = state_28895__$1;
(statearr_28932_28987[(1)] = (26));

} else {
var statearr_28933_28988 = state_28895__$1;
(statearr_28933_28988[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (35))){
var inst_28880 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28880)){
var statearr_28934_28989 = state_28895__$1;
(statearr_28934_28989[(1)] = (36));

} else {
var statearr_28935_28990 = state_28895__$1;
(statearr_28935_28990[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (19))){
var inst_28822 = (state_28895[(7)]);
var inst_28842 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28822);
var state_28895__$1 = state_28895;
var statearr_28936_28991 = state_28895__$1;
(statearr_28936_28991[(2)] = inst_28842);

(statearr_28936_28991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (11))){
var inst_28822 = (state_28895[(7)]);
var inst_28826 = (inst_28822 == null);
var inst_28827 = cljs.core.not.call(null,inst_28826);
var state_28895__$1 = state_28895;
if(inst_28827){
var statearr_28937_28992 = state_28895__$1;
(statearr_28937_28992[(1)] = (13));

} else {
var statearr_28938_28993 = state_28895__$1;
(statearr_28938_28993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (9))){
var inst_28797 = (state_28895[(8)]);
var state_28895__$1 = state_28895;
var statearr_28939_28994 = state_28895__$1;
(statearr_28939_28994[(2)] = inst_28797);

(statearr_28939_28994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (5))){
var state_28895__$1 = state_28895;
var statearr_28940_28995 = state_28895__$1;
(statearr_28940_28995[(2)] = true);

(statearr_28940_28995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (14))){
var state_28895__$1 = state_28895;
var statearr_28941_28996 = state_28895__$1;
(statearr_28941_28996[(2)] = false);

(statearr_28941_28996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (26))){
var inst_28855 = (state_28895[(10)]);
var inst_28862 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28855);
var state_28895__$1 = state_28895;
var statearr_28942_28997 = state_28895__$1;
(statearr_28942_28997[(2)] = inst_28862);

(statearr_28942_28997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (16))){
var state_28895__$1 = state_28895;
var statearr_28943_28998 = state_28895__$1;
(statearr_28943_28998[(2)] = true);

(statearr_28943_28998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (38))){
var inst_28885 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28944_28999 = state_28895__$1;
(statearr_28944_28999[(2)] = inst_28885);

(statearr_28944_28999[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (30))){
var inst_28855 = (state_28895[(10)]);
var inst_28847 = (state_28895[(13)]);
var inst_28846 = (state_28895[(11)]);
var inst_28872 = cljs.core.empty_QMARK_.call(null,inst_28846);
var inst_28873 = inst_28847.call(null,inst_28855);
var inst_28874 = cljs.core.not.call(null,inst_28873);
var inst_28875 = (inst_28872) && (inst_28874);
var state_28895__$1 = state_28895;
var statearr_28945_29000 = state_28895__$1;
(statearr_28945_29000[(2)] = inst_28875);

(statearr_28945_29000[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (10))){
var inst_28797 = (state_28895[(8)]);
var inst_28818 = (state_28895[(2)]);
var inst_28819 = cljs.core.get.call(null,inst_28818,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28820 = cljs.core.get.call(null,inst_28818,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28821 = cljs.core.get.call(null,inst_28818,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28822 = inst_28797;
var state_28895__$1 = (function (){var statearr_28946 = state_28895;
(statearr_28946[(7)] = inst_28822);

(statearr_28946[(16)] = inst_28820);

(statearr_28946[(17)] = inst_28819);

(statearr_28946[(18)] = inst_28821);

return statearr_28946;
})();
var statearr_28947_29001 = state_28895__$1;
(statearr_28947_29001[(2)] = null);

(statearr_28947_29001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (18))){
var inst_28837 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28948_29002 = state_28895__$1;
(statearr_28948_29002[(2)] = inst_28837);

(statearr_28948_29002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (37))){
var state_28895__$1 = state_28895;
var statearr_28949_29003 = state_28895__$1;
(statearr_28949_29003[(2)] = null);

(statearr_28949_29003[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (8))){
var inst_28797 = (state_28895[(8)]);
var inst_28815 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28797);
var state_28895__$1 = state_28895;
var statearr_28950_29004 = state_28895__$1;
(statearr_28950_29004[(2)] = inst_28815);

(statearr_28950_29004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___28958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27109__auto__,c__27221__auto___28958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27110__auto__ = null;
var cljs$core$async$mix_$_state_machine__27110__auto____0 = (function (){
var statearr_28954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28954[(0)] = cljs$core$async$mix_$_state_machine__27110__auto__);

(statearr_28954[(1)] = (1));

return statearr_28954;
});
var cljs$core$async$mix_$_state_machine__27110__auto____1 = (function (state_28895){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_28895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e28955){if((e28955 instanceof Object)){
var ex__27113__auto__ = e28955;
var statearr_28956_29005 = state_28895;
(statearr_28956_29005[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29006 = state_28895;
state_28895 = G__29006;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27110__auto__ = function(state_28895){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27110__auto____1.call(this,state_28895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27110__auto____0;
cljs$core$async$mix_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27110__auto____1;
return cljs$core$async$mix_$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___28958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27223__auto__ = (function (){var statearr_28957 = f__27222__auto__.call(null);
(statearr_28957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___28958);

return statearr_28957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___28958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25551__auto__ = (((p == null))?null:p);
var m__25552__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25552__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25551__auto__ = (((p == null))?null:p);
var m__25552__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,p,v,ch);
} else {
var m__25552__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29007 = [];
var len__25996__auto___29010 = arguments.length;
var i__25997__auto___29011 = (0);
while(true){
if((i__25997__auto___29011 < len__25996__auto___29010)){
args29007.push((arguments[i__25997__auto___29011]));

var G__29012 = (i__25997__auto___29011 + (1));
i__25997__auto___29011 = G__29012;
continue;
} else {
}
break;
}

var G__29009 = args29007.length;
switch (G__29009) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29007.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25551__auto__ = (((p == null))?null:p);
var m__25552__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,p);
} else {
var m__25552__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25551__auto__ = (((p == null))?null:p);
var m__25552__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25551__auto__)]);
if(!((m__25552__auto__ == null))){
return m__25552__auto__.call(null,p,v);
} else {
var m__25552__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25552__auto____$1 == null))){
return m__25552__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29015 = [];
var len__25996__auto___29140 = arguments.length;
var i__25997__auto___29141 = (0);
while(true){
if((i__25997__auto___29141 < len__25996__auto___29140)){
args29015.push((arguments[i__25997__auto___29141]));

var G__29142 = (i__25997__auto___29141 + (1));
i__25997__auto___29141 = G__29142;
continue;
} else {
}
break;
}

var G__29017 = args29015.length;
switch (G__29017) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29015.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24888__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24888__auto__,mults){
return (function (p1__29014_SHARP_){
if(cljs.core.truth_(p1__29014_SHARP_.call(null,topic))){
return p1__29014_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29014_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24888__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29018 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29018 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29019){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29019 = meta29019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29020,meta29019__$1){
var self__ = this;
var _29020__$1 = this;
return (new cljs.core.async.t_cljs$core$async29018(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29019__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29020){
var self__ = this;
var _29020__$1 = this;
return self__.meta29019;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29018.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29018.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29018.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29018.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29019","meta29019",-1198506628,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29018";

cljs.core.async.t_cljs$core$async29018.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async29018");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29018 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29019){
return (new cljs.core.async.t_cljs$core$async29018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29019));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29018(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27221__auto___29144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___29144,mults,ensure_mult,p){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___29144,mults,ensure_mult,p){
return (function (state_29092){
var state_val_29093 = (state_29092[(1)]);
if((state_val_29093 === (7))){
var inst_29088 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
var statearr_29094_29145 = state_29092__$1;
(statearr_29094_29145[(2)] = inst_29088);

(statearr_29094_29145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (20))){
var state_29092__$1 = state_29092;
var statearr_29095_29146 = state_29092__$1;
(statearr_29095_29146[(2)] = null);

(statearr_29095_29146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (1))){
var state_29092__$1 = state_29092;
var statearr_29096_29147 = state_29092__$1;
(statearr_29096_29147[(2)] = null);

(statearr_29096_29147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (24))){
var inst_29071 = (state_29092[(7)]);
var inst_29080 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29071);
var state_29092__$1 = state_29092;
var statearr_29097_29148 = state_29092__$1;
(statearr_29097_29148[(2)] = inst_29080);

(statearr_29097_29148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (4))){
var inst_29023 = (state_29092[(8)]);
var inst_29023__$1 = (state_29092[(2)]);
var inst_29024 = (inst_29023__$1 == null);
var state_29092__$1 = (function (){var statearr_29098 = state_29092;
(statearr_29098[(8)] = inst_29023__$1);

return statearr_29098;
})();
if(cljs.core.truth_(inst_29024)){
var statearr_29099_29149 = state_29092__$1;
(statearr_29099_29149[(1)] = (5));

} else {
var statearr_29100_29150 = state_29092__$1;
(statearr_29100_29150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (15))){
var inst_29065 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
var statearr_29101_29151 = state_29092__$1;
(statearr_29101_29151[(2)] = inst_29065);

(statearr_29101_29151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (21))){
var inst_29085 = (state_29092[(2)]);
var state_29092__$1 = (function (){var statearr_29102 = state_29092;
(statearr_29102[(9)] = inst_29085);

return statearr_29102;
})();
var statearr_29103_29152 = state_29092__$1;
(statearr_29103_29152[(2)] = null);

(statearr_29103_29152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (13))){
var inst_29047 = (state_29092[(10)]);
var inst_29049 = cljs.core.chunked_seq_QMARK_.call(null,inst_29047);
var state_29092__$1 = state_29092;
if(inst_29049){
var statearr_29104_29153 = state_29092__$1;
(statearr_29104_29153[(1)] = (16));

} else {
var statearr_29105_29154 = state_29092__$1;
(statearr_29105_29154[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (22))){
var inst_29077 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
if(cljs.core.truth_(inst_29077)){
var statearr_29106_29155 = state_29092__$1;
(statearr_29106_29155[(1)] = (23));

} else {
var statearr_29107_29156 = state_29092__$1;
(statearr_29107_29156[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (6))){
var inst_29023 = (state_29092[(8)]);
var inst_29071 = (state_29092[(7)]);
var inst_29073 = (state_29092[(11)]);
var inst_29071__$1 = topic_fn.call(null,inst_29023);
var inst_29072 = cljs.core.deref.call(null,mults);
var inst_29073__$1 = cljs.core.get.call(null,inst_29072,inst_29071__$1);
var state_29092__$1 = (function (){var statearr_29108 = state_29092;
(statearr_29108[(7)] = inst_29071__$1);

(statearr_29108[(11)] = inst_29073__$1);

return statearr_29108;
})();
if(cljs.core.truth_(inst_29073__$1)){
var statearr_29109_29157 = state_29092__$1;
(statearr_29109_29157[(1)] = (19));

} else {
var statearr_29110_29158 = state_29092__$1;
(statearr_29110_29158[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (25))){
var inst_29082 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
var statearr_29111_29159 = state_29092__$1;
(statearr_29111_29159[(2)] = inst_29082);

(statearr_29111_29159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (17))){
var inst_29047 = (state_29092[(10)]);
var inst_29056 = cljs.core.first.call(null,inst_29047);
var inst_29057 = cljs.core.async.muxch_STAR_.call(null,inst_29056);
var inst_29058 = cljs.core.async.close_BANG_.call(null,inst_29057);
var inst_29059 = cljs.core.next.call(null,inst_29047);
var inst_29033 = inst_29059;
var inst_29034 = null;
var inst_29035 = (0);
var inst_29036 = (0);
var state_29092__$1 = (function (){var statearr_29112 = state_29092;
(statearr_29112[(12)] = inst_29034);

(statearr_29112[(13)] = inst_29035);

(statearr_29112[(14)] = inst_29033);

(statearr_29112[(15)] = inst_29036);

(statearr_29112[(16)] = inst_29058);

return statearr_29112;
})();
var statearr_29113_29160 = state_29092__$1;
(statearr_29113_29160[(2)] = null);

(statearr_29113_29160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (3))){
var inst_29090 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29092__$1,inst_29090);
} else {
if((state_val_29093 === (12))){
var inst_29067 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
var statearr_29114_29161 = state_29092__$1;
(statearr_29114_29161[(2)] = inst_29067);

(statearr_29114_29161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (2))){
var state_29092__$1 = state_29092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29092__$1,(4),ch);
} else {
if((state_val_29093 === (23))){
var state_29092__$1 = state_29092;
var statearr_29115_29162 = state_29092__$1;
(statearr_29115_29162[(2)] = null);

(statearr_29115_29162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (19))){
var inst_29023 = (state_29092[(8)]);
var inst_29073 = (state_29092[(11)]);
var inst_29075 = cljs.core.async.muxch_STAR_.call(null,inst_29073);
var state_29092__$1 = state_29092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29092__$1,(22),inst_29075,inst_29023);
} else {
if((state_val_29093 === (11))){
var inst_29047 = (state_29092[(10)]);
var inst_29033 = (state_29092[(14)]);
var inst_29047__$1 = cljs.core.seq.call(null,inst_29033);
var state_29092__$1 = (function (){var statearr_29116 = state_29092;
(statearr_29116[(10)] = inst_29047__$1);

return statearr_29116;
})();
if(inst_29047__$1){
var statearr_29117_29163 = state_29092__$1;
(statearr_29117_29163[(1)] = (13));

} else {
var statearr_29118_29164 = state_29092__$1;
(statearr_29118_29164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (9))){
var inst_29069 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
var statearr_29119_29165 = state_29092__$1;
(statearr_29119_29165[(2)] = inst_29069);

(statearr_29119_29165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (5))){
var inst_29030 = cljs.core.deref.call(null,mults);
var inst_29031 = cljs.core.vals.call(null,inst_29030);
var inst_29032 = cljs.core.seq.call(null,inst_29031);
var inst_29033 = inst_29032;
var inst_29034 = null;
var inst_29035 = (0);
var inst_29036 = (0);
var state_29092__$1 = (function (){var statearr_29120 = state_29092;
(statearr_29120[(12)] = inst_29034);

(statearr_29120[(13)] = inst_29035);

(statearr_29120[(14)] = inst_29033);

(statearr_29120[(15)] = inst_29036);

return statearr_29120;
})();
var statearr_29121_29166 = state_29092__$1;
(statearr_29121_29166[(2)] = null);

(statearr_29121_29166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (14))){
var state_29092__$1 = state_29092;
var statearr_29125_29167 = state_29092__$1;
(statearr_29125_29167[(2)] = null);

(statearr_29125_29167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (16))){
var inst_29047 = (state_29092[(10)]);
var inst_29051 = cljs.core.chunk_first.call(null,inst_29047);
var inst_29052 = cljs.core.chunk_rest.call(null,inst_29047);
var inst_29053 = cljs.core.count.call(null,inst_29051);
var inst_29033 = inst_29052;
var inst_29034 = inst_29051;
var inst_29035 = inst_29053;
var inst_29036 = (0);
var state_29092__$1 = (function (){var statearr_29126 = state_29092;
(statearr_29126[(12)] = inst_29034);

(statearr_29126[(13)] = inst_29035);

(statearr_29126[(14)] = inst_29033);

(statearr_29126[(15)] = inst_29036);

return statearr_29126;
})();
var statearr_29127_29168 = state_29092__$1;
(statearr_29127_29168[(2)] = null);

(statearr_29127_29168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (10))){
var inst_29034 = (state_29092[(12)]);
var inst_29035 = (state_29092[(13)]);
var inst_29033 = (state_29092[(14)]);
var inst_29036 = (state_29092[(15)]);
var inst_29041 = cljs.core._nth.call(null,inst_29034,inst_29036);
var inst_29042 = cljs.core.async.muxch_STAR_.call(null,inst_29041);
var inst_29043 = cljs.core.async.close_BANG_.call(null,inst_29042);
var inst_29044 = (inst_29036 + (1));
var tmp29122 = inst_29034;
var tmp29123 = inst_29035;
var tmp29124 = inst_29033;
var inst_29033__$1 = tmp29124;
var inst_29034__$1 = tmp29122;
var inst_29035__$1 = tmp29123;
var inst_29036__$1 = inst_29044;
var state_29092__$1 = (function (){var statearr_29128 = state_29092;
(statearr_29128[(12)] = inst_29034__$1);

(statearr_29128[(13)] = inst_29035__$1);

(statearr_29128[(17)] = inst_29043);

(statearr_29128[(14)] = inst_29033__$1);

(statearr_29128[(15)] = inst_29036__$1);

return statearr_29128;
})();
var statearr_29129_29169 = state_29092__$1;
(statearr_29129_29169[(2)] = null);

(statearr_29129_29169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (18))){
var inst_29062 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
var statearr_29130_29170 = state_29092__$1;
(statearr_29130_29170[(2)] = inst_29062);

(statearr_29130_29170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (8))){
var inst_29035 = (state_29092[(13)]);
var inst_29036 = (state_29092[(15)]);
var inst_29038 = (inst_29036 < inst_29035);
var inst_29039 = inst_29038;
var state_29092__$1 = state_29092;
if(cljs.core.truth_(inst_29039)){
var statearr_29131_29171 = state_29092__$1;
(statearr_29131_29171[(1)] = (10));

} else {
var statearr_29132_29172 = state_29092__$1;
(statearr_29132_29172[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___29144,mults,ensure_mult,p))
;
return ((function (switch__27109__auto__,c__27221__auto___29144,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_29136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29136[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_29136[(1)] = (1));

return statearr_29136;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_29092){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_29092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e29137){if((e29137 instanceof Object)){
var ex__27113__auto__ = e29137;
var statearr_29138_29173 = state_29092;
(statearr_29138_29173[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29174 = state_29092;
state_29092 = G__29174;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_29092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_29092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___29144,mults,ensure_mult,p))
})();
var state__27223__auto__ = (function (){var statearr_29139 = f__27222__auto__.call(null);
(statearr_29139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___29144);

return statearr_29139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___29144,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29175 = [];
var len__25996__auto___29178 = arguments.length;
var i__25997__auto___29179 = (0);
while(true){
if((i__25997__auto___29179 < len__25996__auto___29178)){
args29175.push((arguments[i__25997__auto___29179]));

var G__29180 = (i__25997__auto___29179 + (1));
i__25997__auto___29179 = G__29180;
continue;
} else {
}
break;
}

var G__29177 = args29175.length;
switch (G__29177) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29175.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29182 = [];
var len__25996__auto___29185 = arguments.length;
var i__25997__auto___29186 = (0);
while(true){
if((i__25997__auto___29186 < len__25996__auto___29185)){
args29182.push((arguments[i__25997__auto___29186]));

var G__29187 = (i__25997__auto___29186 + (1));
i__25997__auto___29186 = G__29187;
continue;
} else {
}
break;
}

var G__29184 = args29182.length;
switch (G__29184) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29182.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29189 = [];
var len__25996__auto___29260 = arguments.length;
var i__25997__auto___29261 = (0);
while(true){
if((i__25997__auto___29261 < len__25996__auto___29260)){
args29189.push((arguments[i__25997__auto___29261]));

var G__29262 = (i__25997__auto___29261 + (1));
i__25997__auto___29261 = G__29262;
continue;
} else {
}
break;
}

var G__29191 = args29189.length;
switch (G__29191) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29189.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27221__auto___29264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___29264,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___29264,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29230){
var state_val_29231 = (state_29230[(1)]);
if((state_val_29231 === (7))){
var state_29230__$1 = state_29230;
var statearr_29232_29265 = state_29230__$1;
(statearr_29232_29265[(2)] = null);

(statearr_29232_29265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (1))){
var state_29230__$1 = state_29230;
var statearr_29233_29266 = state_29230__$1;
(statearr_29233_29266[(2)] = null);

(statearr_29233_29266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (4))){
var inst_29194 = (state_29230[(7)]);
var inst_29196 = (inst_29194 < cnt);
var state_29230__$1 = state_29230;
if(cljs.core.truth_(inst_29196)){
var statearr_29234_29267 = state_29230__$1;
(statearr_29234_29267[(1)] = (6));

} else {
var statearr_29235_29268 = state_29230__$1;
(statearr_29235_29268[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (15))){
var inst_29226 = (state_29230[(2)]);
var state_29230__$1 = state_29230;
var statearr_29236_29269 = state_29230__$1;
(statearr_29236_29269[(2)] = inst_29226);

(statearr_29236_29269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (13))){
var inst_29219 = cljs.core.async.close_BANG_.call(null,out);
var state_29230__$1 = state_29230;
var statearr_29237_29270 = state_29230__$1;
(statearr_29237_29270[(2)] = inst_29219);

(statearr_29237_29270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (6))){
var state_29230__$1 = state_29230;
var statearr_29238_29271 = state_29230__$1;
(statearr_29238_29271[(2)] = null);

(statearr_29238_29271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (3))){
var inst_29228 = (state_29230[(2)]);
var state_29230__$1 = state_29230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29230__$1,inst_29228);
} else {
if((state_val_29231 === (12))){
var inst_29216 = (state_29230[(8)]);
var inst_29216__$1 = (state_29230[(2)]);
var inst_29217 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29216__$1);
var state_29230__$1 = (function (){var statearr_29239 = state_29230;
(statearr_29239[(8)] = inst_29216__$1);

return statearr_29239;
})();
if(cljs.core.truth_(inst_29217)){
var statearr_29240_29272 = state_29230__$1;
(statearr_29240_29272[(1)] = (13));

} else {
var statearr_29241_29273 = state_29230__$1;
(statearr_29241_29273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (2))){
var inst_29193 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29194 = (0);
var state_29230__$1 = (function (){var statearr_29242 = state_29230;
(statearr_29242[(7)] = inst_29194);

(statearr_29242[(9)] = inst_29193);

return statearr_29242;
})();
var statearr_29243_29274 = state_29230__$1;
(statearr_29243_29274[(2)] = null);

(statearr_29243_29274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (11))){
var inst_29194 = (state_29230[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29230,(10),Object,null,(9));
var inst_29203 = chs__$1.call(null,inst_29194);
var inst_29204 = done.call(null,inst_29194);
var inst_29205 = cljs.core.async.take_BANG_.call(null,inst_29203,inst_29204);
var state_29230__$1 = state_29230;
var statearr_29244_29275 = state_29230__$1;
(statearr_29244_29275[(2)] = inst_29205);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29230__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (9))){
var inst_29194 = (state_29230[(7)]);
var inst_29207 = (state_29230[(2)]);
var inst_29208 = (inst_29194 + (1));
var inst_29194__$1 = inst_29208;
var state_29230__$1 = (function (){var statearr_29245 = state_29230;
(statearr_29245[(10)] = inst_29207);

(statearr_29245[(7)] = inst_29194__$1);

return statearr_29245;
})();
var statearr_29246_29276 = state_29230__$1;
(statearr_29246_29276[(2)] = null);

(statearr_29246_29276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (5))){
var inst_29214 = (state_29230[(2)]);
var state_29230__$1 = (function (){var statearr_29247 = state_29230;
(statearr_29247[(11)] = inst_29214);

return statearr_29247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29230__$1,(12),dchan);
} else {
if((state_val_29231 === (14))){
var inst_29216 = (state_29230[(8)]);
var inst_29221 = cljs.core.apply.call(null,f,inst_29216);
var state_29230__$1 = state_29230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29230__$1,(16),out,inst_29221);
} else {
if((state_val_29231 === (16))){
var inst_29223 = (state_29230[(2)]);
var state_29230__$1 = (function (){var statearr_29248 = state_29230;
(statearr_29248[(12)] = inst_29223);

return statearr_29248;
})();
var statearr_29249_29277 = state_29230__$1;
(statearr_29249_29277[(2)] = null);

(statearr_29249_29277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (10))){
var inst_29198 = (state_29230[(2)]);
var inst_29199 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29230__$1 = (function (){var statearr_29250 = state_29230;
(statearr_29250[(13)] = inst_29198);

return statearr_29250;
})();
var statearr_29251_29278 = state_29230__$1;
(statearr_29251_29278[(2)] = inst_29199);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29230__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29231 === (8))){
var inst_29212 = (state_29230[(2)]);
var state_29230__$1 = state_29230;
var statearr_29252_29279 = state_29230__$1;
(statearr_29252_29279[(2)] = inst_29212);

(statearr_29252_29279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___29264,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27109__auto__,c__27221__auto___29264,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_29256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29256[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_29256[(1)] = (1));

return statearr_29256;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_29230){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_29230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e29257){if((e29257 instanceof Object)){
var ex__27113__auto__ = e29257;
var statearr_29258_29280 = state_29230;
(statearr_29258_29280[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29281 = state_29230;
state_29230 = G__29281;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_29230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_29230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___29264,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27223__auto__ = (function (){var statearr_29259 = f__27222__auto__.call(null);
(statearr_29259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___29264);

return statearr_29259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___29264,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29283 = [];
var len__25996__auto___29341 = arguments.length;
var i__25997__auto___29342 = (0);
while(true){
if((i__25997__auto___29342 < len__25996__auto___29341)){
args29283.push((arguments[i__25997__auto___29342]));

var G__29343 = (i__25997__auto___29342 + (1));
i__25997__auto___29342 = G__29343;
continue;
} else {
}
break;
}

var G__29285 = args29283.length;
switch (G__29285) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29283.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27221__auto___29345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___29345,out){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___29345,out){
return (function (state_29317){
var state_val_29318 = (state_29317[(1)]);
if((state_val_29318 === (7))){
var inst_29296 = (state_29317[(7)]);
var inst_29297 = (state_29317[(8)]);
var inst_29296__$1 = (state_29317[(2)]);
var inst_29297__$1 = cljs.core.nth.call(null,inst_29296__$1,(0),null);
var inst_29298 = cljs.core.nth.call(null,inst_29296__$1,(1),null);
var inst_29299 = (inst_29297__$1 == null);
var state_29317__$1 = (function (){var statearr_29319 = state_29317;
(statearr_29319[(7)] = inst_29296__$1);

(statearr_29319[(8)] = inst_29297__$1);

(statearr_29319[(9)] = inst_29298);

return statearr_29319;
})();
if(cljs.core.truth_(inst_29299)){
var statearr_29320_29346 = state_29317__$1;
(statearr_29320_29346[(1)] = (8));

} else {
var statearr_29321_29347 = state_29317__$1;
(statearr_29321_29347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (1))){
var inst_29286 = cljs.core.vec.call(null,chs);
var inst_29287 = inst_29286;
var state_29317__$1 = (function (){var statearr_29322 = state_29317;
(statearr_29322[(10)] = inst_29287);

return statearr_29322;
})();
var statearr_29323_29348 = state_29317__$1;
(statearr_29323_29348[(2)] = null);

(statearr_29323_29348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (4))){
var inst_29287 = (state_29317[(10)]);
var state_29317__$1 = state_29317;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29317__$1,(7),inst_29287);
} else {
if((state_val_29318 === (6))){
var inst_29313 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29324_29349 = state_29317__$1;
(statearr_29324_29349[(2)] = inst_29313);

(statearr_29324_29349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (3))){
var inst_29315 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29317__$1,inst_29315);
} else {
if((state_val_29318 === (2))){
var inst_29287 = (state_29317[(10)]);
var inst_29289 = cljs.core.count.call(null,inst_29287);
var inst_29290 = (inst_29289 > (0));
var state_29317__$1 = state_29317;
if(cljs.core.truth_(inst_29290)){
var statearr_29326_29350 = state_29317__$1;
(statearr_29326_29350[(1)] = (4));

} else {
var statearr_29327_29351 = state_29317__$1;
(statearr_29327_29351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (11))){
var inst_29287 = (state_29317[(10)]);
var inst_29306 = (state_29317[(2)]);
var tmp29325 = inst_29287;
var inst_29287__$1 = tmp29325;
var state_29317__$1 = (function (){var statearr_29328 = state_29317;
(statearr_29328[(11)] = inst_29306);

(statearr_29328[(10)] = inst_29287__$1);

return statearr_29328;
})();
var statearr_29329_29352 = state_29317__$1;
(statearr_29329_29352[(2)] = null);

(statearr_29329_29352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (9))){
var inst_29297 = (state_29317[(8)]);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29317__$1,(11),out,inst_29297);
} else {
if((state_val_29318 === (5))){
var inst_29311 = cljs.core.async.close_BANG_.call(null,out);
var state_29317__$1 = state_29317;
var statearr_29330_29353 = state_29317__$1;
(statearr_29330_29353[(2)] = inst_29311);

(statearr_29330_29353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (10))){
var inst_29309 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29331_29354 = state_29317__$1;
(statearr_29331_29354[(2)] = inst_29309);

(statearr_29331_29354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (8))){
var inst_29296 = (state_29317[(7)]);
var inst_29287 = (state_29317[(10)]);
var inst_29297 = (state_29317[(8)]);
var inst_29298 = (state_29317[(9)]);
var inst_29301 = (function (){var cs = inst_29287;
var vec__29292 = inst_29296;
var v = inst_29297;
var c = inst_29298;
return ((function (cs,vec__29292,v,c,inst_29296,inst_29287,inst_29297,inst_29298,state_val_29318,c__27221__auto___29345,out){
return (function (p1__29282_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29282_SHARP_);
});
;})(cs,vec__29292,v,c,inst_29296,inst_29287,inst_29297,inst_29298,state_val_29318,c__27221__auto___29345,out))
})();
var inst_29302 = cljs.core.filterv.call(null,inst_29301,inst_29287);
var inst_29287__$1 = inst_29302;
var state_29317__$1 = (function (){var statearr_29332 = state_29317;
(statearr_29332[(10)] = inst_29287__$1);

return statearr_29332;
})();
var statearr_29333_29355 = state_29317__$1;
(statearr_29333_29355[(2)] = null);

(statearr_29333_29355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___29345,out))
;
return ((function (switch__27109__auto__,c__27221__auto___29345,out){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_29337 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29337[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_29337[(1)] = (1));

return statearr_29337;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_29317){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_29317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e29338){if((e29338 instanceof Object)){
var ex__27113__auto__ = e29338;
var statearr_29339_29356 = state_29317;
(statearr_29339_29356[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29357 = state_29317;
state_29317 = G__29357;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_29317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_29317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___29345,out))
})();
var state__27223__auto__ = (function (){var statearr_29340 = f__27222__auto__.call(null);
(statearr_29340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___29345);

return statearr_29340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___29345,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29358 = [];
var len__25996__auto___29407 = arguments.length;
var i__25997__auto___29408 = (0);
while(true){
if((i__25997__auto___29408 < len__25996__auto___29407)){
args29358.push((arguments[i__25997__auto___29408]));

var G__29409 = (i__25997__auto___29408 + (1));
i__25997__auto___29408 = G__29409;
continue;
} else {
}
break;
}

var G__29360 = args29358.length;
switch (G__29360) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29358.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27221__auto___29411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___29411,out){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___29411,out){
return (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (7))){
var inst_29366 = (state_29384[(7)]);
var inst_29366__$1 = (state_29384[(2)]);
var inst_29367 = (inst_29366__$1 == null);
var inst_29368 = cljs.core.not.call(null,inst_29367);
var state_29384__$1 = (function (){var statearr_29386 = state_29384;
(statearr_29386[(7)] = inst_29366__$1);

return statearr_29386;
})();
if(inst_29368){
var statearr_29387_29412 = state_29384__$1;
(statearr_29387_29412[(1)] = (8));

} else {
var statearr_29388_29413 = state_29384__$1;
(statearr_29388_29413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (1))){
var inst_29361 = (0);
var state_29384__$1 = (function (){var statearr_29389 = state_29384;
(statearr_29389[(8)] = inst_29361);

return statearr_29389;
})();
var statearr_29390_29414 = state_29384__$1;
(statearr_29390_29414[(2)] = null);

(statearr_29390_29414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (4))){
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29384__$1,(7),ch);
} else {
if((state_val_29385 === (6))){
var inst_29379 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29391_29415 = state_29384__$1;
(statearr_29391_29415[(2)] = inst_29379);

(statearr_29391_29415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (3))){
var inst_29381 = (state_29384[(2)]);
var inst_29382 = cljs.core.async.close_BANG_.call(null,out);
var state_29384__$1 = (function (){var statearr_29392 = state_29384;
(statearr_29392[(9)] = inst_29381);

return statearr_29392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29384__$1,inst_29382);
} else {
if((state_val_29385 === (2))){
var inst_29361 = (state_29384[(8)]);
var inst_29363 = (inst_29361 < n);
var state_29384__$1 = state_29384;
if(cljs.core.truth_(inst_29363)){
var statearr_29393_29416 = state_29384__$1;
(statearr_29393_29416[(1)] = (4));

} else {
var statearr_29394_29417 = state_29384__$1;
(statearr_29394_29417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (11))){
var inst_29361 = (state_29384[(8)]);
var inst_29371 = (state_29384[(2)]);
var inst_29372 = (inst_29361 + (1));
var inst_29361__$1 = inst_29372;
var state_29384__$1 = (function (){var statearr_29395 = state_29384;
(statearr_29395[(10)] = inst_29371);

(statearr_29395[(8)] = inst_29361__$1);

return statearr_29395;
})();
var statearr_29396_29418 = state_29384__$1;
(statearr_29396_29418[(2)] = null);

(statearr_29396_29418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (9))){
var state_29384__$1 = state_29384;
var statearr_29397_29419 = state_29384__$1;
(statearr_29397_29419[(2)] = null);

(statearr_29397_29419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (5))){
var state_29384__$1 = state_29384;
var statearr_29398_29420 = state_29384__$1;
(statearr_29398_29420[(2)] = null);

(statearr_29398_29420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (10))){
var inst_29376 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29399_29421 = state_29384__$1;
(statearr_29399_29421[(2)] = inst_29376);

(statearr_29399_29421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (8))){
var inst_29366 = (state_29384[(7)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29384__$1,(11),out,inst_29366);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___29411,out))
;
return ((function (switch__27109__auto__,c__27221__auto___29411,out){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_29403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29403[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_29403[(1)] = (1));

return statearr_29403;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_29384){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_29384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e29404){if((e29404 instanceof Object)){
var ex__27113__auto__ = e29404;
var statearr_29405_29422 = state_29384;
(statearr_29405_29422[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29423 = state_29384;
state_29384 = G__29423;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___29411,out))
})();
var state__27223__auto__ = (function (){var statearr_29406 = f__27222__auto__.call(null);
(statearr_29406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___29411);

return statearr_29406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___29411,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29431 = (function (f,ch,meta29432){
this.f = f;
this.ch = ch;
this.meta29432 = meta29432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29433,meta29432__$1){
var self__ = this;
var _29433__$1 = this;
return (new cljs.core.async.t_cljs$core$async29431(self__.f,self__.ch,meta29432__$1));
});

cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29433){
var self__ = this;
var _29433__$1 = this;
return self__.meta29432;
});

cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29434 = (function (f,ch,meta29432,_,fn1,meta29435){
this.f = f;
this.ch = ch;
this.meta29432 = meta29432;
this._ = _;
this.fn1 = fn1;
this.meta29435 = meta29435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29436,meta29435__$1){
var self__ = this;
var _29436__$1 = this;
return (new cljs.core.async.t_cljs$core$async29434(self__.f,self__.ch,self__.meta29432,self__._,self__.fn1,meta29435__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29436){
var self__ = this;
var _29436__$1 = this;
return self__.meta29435;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29424_SHARP_){
return f1.call(null,(((p1__29424_SHARP_ == null))?null:self__.f.call(null,p1__29424_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29434.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29432","meta29432",-235848317,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29431","cljs.core.async/t_cljs$core$async29431",1088243548,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29435","meta29435",1651632017,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29434";

cljs.core.async.t_cljs$core$async29434.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async29434");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29434 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29434(f__$1,ch__$1,meta29432__$1,___$2,fn1__$1,meta29435){
return (new cljs.core.async.t_cljs$core$async29434(f__$1,ch__$1,meta29432__$1,___$2,fn1__$1,meta29435));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29434(self__.f,self__.ch,self__.meta29432,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24876__auto__ = ret;
if(cljs.core.truth_(and__24876__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24876__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29432","meta29432",-235848317,null)], null);
});

cljs.core.async.t_cljs$core$async29431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29431";

cljs.core.async.t_cljs$core$async29431.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async29431");
});

cljs.core.async.__GT_t_cljs$core$async29431 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29431(f__$1,ch__$1,meta29432){
return (new cljs.core.async.t_cljs$core$async29431(f__$1,ch__$1,meta29432));
});

}

return (new cljs.core.async.t_cljs$core$async29431(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29440 = (function (f,ch,meta29441){
this.f = f;
this.ch = ch;
this.meta29441 = meta29441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29442,meta29441__$1){
var self__ = this;
var _29442__$1 = this;
return (new cljs.core.async.t_cljs$core$async29440(self__.f,self__.ch,meta29441__$1));
});

cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29442){
var self__ = this;
var _29442__$1 = this;
return self__.meta29441;
});

cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29441","meta29441",-1898836246,null)], null);
});

cljs.core.async.t_cljs$core$async29440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29440";

cljs.core.async.t_cljs$core$async29440.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async29440");
});

cljs.core.async.__GT_t_cljs$core$async29440 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29440(f__$1,ch__$1,meta29441){
return (new cljs.core.async.t_cljs$core$async29440(f__$1,ch__$1,meta29441));
});

}

return (new cljs.core.async.t_cljs$core$async29440(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29446 = (function (p,ch,meta29447){
this.p = p;
this.ch = ch;
this.meta29447 = meta29447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29448,meta29447__$1){
var self__ = this;
var _29448__$1 = this;
return (new cljs.core.async.t_cljs$core$async29446(self__.p,self__.ch,meta29447__$1));
});

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29448){
var self__ = this;
var _29448__$1 = this;
return self__.meta29447;
});

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29447","meta29447",-1063470986,null)], null);
});

cljs.core.async.t_cljs$core$async29446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29446";

cljs.core.async.t_cljs$core$async29446.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async29446");
});

cljs.core.async.__GT_t_cljs$core$async29446 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29446(p__$1,ch__$1,meta29447){
return (new cljs.core.async.t_cljs$core$async29446(p__$1,ch__$1,meta29447));
});

}

return (new cljs.core.async.t_cljs$core$async29446(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29449 = [];
var len__25996__auto___29493 = arguments.length;
var i__25997__auto___29494 = (0);
while(true){
if((i__25997__auto___29494 < len__25996__auto___29493)){
args29449.push((arguments[i__25997__auto___29494]));

var G__29495 = (i__25997__auto___29494 + (1));
i__25997__auto___29494 = G__29495;
continue;
} else {
}
break;
}

var G__29451 = args29449.length;
switch (G__29451) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29449.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27221__auto___29497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___29497,out){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___29497,out){
return (function (state_29472){
var state_val_29473 = (state_29472[(1)]);
if((state_val_29473 === (7))){
var inst_29468 = (state_29472[(2)]);
var state_29472__$1 = state_29472;
var statearr_29474_29498 = state_29472__$1;
(statearr_29474_29498[(2)] = inst_29468);

(statearr_29474_29498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (1))){
var state_29472__$1 = state_29472;
var statearr_29475_29499 = state_29472__$1;
(statearr_29475_29499[(2)] = null);

(statearr_29475_29499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (4))){
var inst_29454 = (state_29472[(7)]);
var inst_29454__$1 = (state_29472[(2)]);
var inst_29455 = (inst_29454__$1 == null);
var state_29472__$1 = (function (){var statearr_29476 = state_29472;
(statearr_29476[(7)] = inst_29454__$1);

return statearr_29476;
})();
if(cljs.core.truth_(inst_29455)){
var statearr_29477_29500 = state_29472__$1;
(statearr_29477_29500[(1)] = (5));

} else {
var statearr_29478_29501 = state_29472__$1;
(statearr_29478_29501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (6))){
var inst_29454 = (state_29472[(7)]);
var inst_29459 = p.call(null,inst_29454);
var state_29472__$1 = state_29472;
if(cljs.core.truth_(inst_29459)){
var statearr_29479_29502 = state_29472__$1;
(statearr_29479_29502[(1)] = (8));

} else {
var statearr_29480_29503 = state_29472__$1;
(statearr_29480_29503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (3))){
var inst_29470 = (state_29472[(2)]);
var state_29472__$1 = state_29472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29472__$1,inst_29470);
} else {
if((state_val_29473 === (2))){
var state_29472__$1 = state_29472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29472__$1,(4),ch);
} else {
if((state_val_29473 === (11))){
var inst_29462 = (state_29472[(2)]);
var state_29472__$1 = state_29472;
var statearr_29481_29504 = state_29472__$1;
(statearr_29481_29504[(2)] = inst_29462);

(statearr_29481_29504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (9))){
var state_29472__$1 = state_29472;
var statearr_29482_29505 = state_29472__$1;
(statearr_29482_29505[(2)] = null);

(statearr_29482_29505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (5))){
var inst_29457 = cljs.core.async.close_BANG_.call(null,out);
var state_29472__$1 = state_29472;
var statearr_29483_29506 = state_29472__$1;
(statearr_29483_29506[(2)] = inst_29457);

(statearr_29483_29506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (10))){
var inst_29465 = (state_29472[(2)]);
var state_29472__$1 = (function (){var statearr_29484 = state_29472;
(statearr_29484[(8)] = inst_29465);

return statearr_29484;
})();
var statearr_29485_29507 = state_29472__$1;
(statearr_29485_29507[(2)] = null);

(statearr_29485_29507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (8))){
var inst_29454 = (state_29472[(7)]);
var state_29472__$1 = state_29472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29472__$1,(11),out,inst_29454);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___29497,out))
;
return ((function (switch__27109__auto__,c__27221__auto___29497,out){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_29489 = [null,null,null,null,null,null,null,null,null];
(statearr_29489[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_29489[(1)] = (1));

return statearr_29489;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_29472){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_29472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e29490){if((e29490 instanceof Object)){
var ex__27113__auto__ = e29490;
var statearr_29491_29508 = state_29472;
(statearr_29491_29508[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29509 = state_29472;
state_29472 = G__29509;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_29472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_29472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___29497,out))
})();
var state__27223__auto__ = (function (){var statearr_29492 = f__27222__auto__.call(null);
(statearr_29492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___29497);

return statearr_29492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___29497,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29510 = [];
var len__25996__auto___29513 = arguments.length;
var i__25997__auto___29514 = (0);
while(true){
if((i__25997__auto___29514 < len__25996__auto___29513)){
args29510.push((arguments[i__25997__auto___29514]));

var G__29515 = (i__25997__auto___29514 + (1));
i__25997__auto___29514 = G__29515;
continue;
} else {
}
break;
}

var G__29512 = args29510.length;
switch (G__29512) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29510.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto__){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto__){
return (function (state_29682){
var state_val_29683 = (state_29682[(1)]);
if((state_val_29683 === (7))){
var inst_29678 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29684_29725 = state_29682__$1;
(statearr_29684_29725[(2)] = inst_29678);

(statearr_29684_29725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (20))){
var inst_29648 = (state_29682[(7)]);
var inst_29659 = (state_29682[(2)]);
var inst_29660 = cljs.core.next.call(null,inst_29648);
var inst_29634 = inst_29660;
var inst_29635 = null;
var inst_29636 = (0);
var inst_29637 = (0);
var state_29682__$1 = (function (){var statearr_29685 = state_29682;
(statearr_29685[(8)] = inst_29635);

(statearr_29685[(9)] = inst_29636);

(statearr_29685[(10)] = inst_29637);

(statearr_29685[(11)] = inst_29659);

(statearr_29685[(12)] = inst_29634);

return statearr_29685;
})();
var statearr_29686_29726 = state_29682__$1;
(statearr_29686_29726[(2)] = null);

(statearr_29686_29726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (1))){
var state_29682__$1 = state_29682;
var statearr_29687_29727 = state_29682__$1;
(statearr_29687_29727[(2)] = null);

(statearr_29687_29727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (4))){
var inst_29623 = (state_29682[(13)]);
var inst_29623__$1 = (state_29682[(2)]);
var inst_29624 = (inst_29623__$1 == null);
var state_29682__$1 = (function (){var statearr_29688 = state_29682;
(statearr_29688[(13)] = inst_29623__$1);

return statearr_29688;
})();
if(cljs.core.truth_(inst_29624)){
var statearr_29689_29728 = state_29682__$1;
(statearr_29689_29728[(1)] = (5));

} else {
var statearr_29690_29729 = state_29682__$1;
(statearr_29690_29729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (15))){
var state_29682__$1 = state_29682;
var statearr_29694_29730 = state_29682__$1;
(statearr_29694_29730[(2)] = null);

(statearr_29694_29730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (21))){
var state_29682__$1 = state_29682;
var statearr_29695_29731 = state_29682__$1;
(statearr_29695_29731[(2)] = null);

(statearr_29695_29731[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (13))){
var inst_29635 = (state_29682[(8)]);
var inst_29636 = (state_29682[(9)]);
var inst_29637 = (state_29682[(10)]);
var inst_29634 = (state_29682[(12)]);
var inst_29644 = (state_29682[(2)]);
var inst_29645 = (inst_29637 + (1));
var tmp29691 = inst_29635;
var tmp29692 = inst_29636;
var tmp29693 = inst_29634;
var inst_29634__$1 = tmp29693;
var inst_29635__$1 = tmp29691;
var inst_29636__$1 = tmp29692;
var inst_29637__$1 = inst_29645;
var state_29682__$1 = (function (){var statearr_29696 = state_29682;
(statearr_29696[(8)] = inst_29635__$1);

(statearr_29696[(9)] = inst_29636__$1);

(statearr_29696[(10)] = inst_29637__$1);

(statearr_29696[(14)] = inst_29644);

(statearr_29696[(12)] = inst_29634__$1);

return statearr_29696;
})();
var statearr_29697_29732 = state_29682__$1;
(statearr_29697_29732[(2)] = null);

(statearr_29697_29732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (22))){
var state_29682__$1 = state_29682;
var statearr_29698_29733 = state_29682__$1;
(statearr_29698_29733[(2)] = null);

(statearr_29698_29733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (6))){
var inst_29623 = (state_29682[(13)]);
var inst_29632 = f.call(null,inst_29623);
var inst_29633 = cljs.core.seq.call(null,inst_29632);
var inst_29634 = inst_29633;
var inst_29635 = null;
var inst_29636 = (0);
var inst_29637 = (0);
var state_29682__$1 = (function (){var statearr_29699 = state_29682;
(statearr_29699[(8)] = inst_29635);

(statearr_29699[(9)] = inst_29636);

(statearr_29699[(10)] = inst_29637);

(statearr_29699[(12)] = inst_29634);

return statearr_29699;
})();
var statearr_29700_29734 = state_29682__$1;
(statearr_29700_29734[(2)] = null);

(statearr_29700_29734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (17))){
var inst_29648 = (state_29682[(7)]);
var inst_29652 = cljs.core.chunk_first.call(null,inst_29648);
var inst_29653 = cljs.core.chunk_rest.call(null,inst_29648);
var inst_29654 = cljs.core.count.call(null,inst_29652);
var inst_29634 = inst_29653;
var inst_29635 = inst_29652;
var inst_29636 = inst_29654;
var inst_29637 = (0);
var state_29682__$1 = (function (){var statearr_29701 = state_29682;
(statearr_29701[(8)] = inst_29635);

(statearr_29701[(9)] = inst_29636);

(statearr_29701[(10)] = inst_29637);

(statearr_29701[(12)] = inst_29634);

return statearr_29701;
})();
var statearr_29702_29735 = state_29682__$1;
(statearr_29702_29735[(2)] = null);

(statearr_29702_29735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (3))){
var inst_29680 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29682__$1,inst_29680);
} else {
if((state_val_29683 === (12))){
var inst_29668 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29703_29736 = state_29682__$1;
(statearr_29703_29736[(2)] = inst_29668);

(statearr_29703_29736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (2))){
var state_29682__$1 = state_29682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29682__$1,(4),in$);
} else {
if((state_val_29683 === (23))){
var inst_29676 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29704_29737 = state_29682__$1;
(statearr_29704_29737[(2)] = inst_29676);

(statearr_29704_29737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (19))){
var inst_29663 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29705_29738 = state_29682__$1;
(statearr_29705_29738[(2)] = inst_29663);

(statearr_29705_29738[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (11))){
var inst_29648 = (state_29682[(7)]);
var inst_29634 = (state_29682[(12)]);
var inst_29648__$1 = cljs.core.seq.call(null,inst_29634);
var state_29682__$1 = (function (){var statearr_29706 = state_29682;
(statearr_29706[(7)] = inst_29648__$1);

return statearr_29706;
})();
if(inst_29648__$1){
var statearr_29707_29739 = state_29682__$1;
(statearr_29707_29739[(1)] = (14));

} else {
var statearr_29708_29740 = state_29682__$1;
(statearr_29708_29740[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (9))){
var inst_29670 = (state_29682[(2)]);
var inst_29671 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29682__$1 = (function (){var statearr_29709 = state_29682;
(statearr_29709[(15)] = inst_29670);

return statearr_29709;
})();
if(cljs.core.truth_(inst_29671)){
var statearr_29710_29741 = state_29682__$1;
(statearr_29710_29741[(1)] = (21));

} else {
var statearr_29711_29742 = state_29682__$1;
(statearr_29711_29742[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (5))){
var inst_29626 = cljs.core.async.close_BANG_.call(null,out);
var state_29682__$1 = state_29682;
var statearr_29712_29743 = state_29682__$1;
(statearr_29712_29743[(2)] = inst_29626);

(statearr_29712_29743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (14))){
var inst_29648 = (state_29682[(7)]);
var inst_29650 = cljs.core.chunked_seq_QMARK_.call(null,inst_29648);
var state_29682__$1 = state_29682;
if(inst_29650){
var statearr_29713_29744 = state_29682__$1;
(statearr_29713_29744[(1)] = (17));

} else {
var statearr_29714_29745 = state_29682__$1;
(statearr_29714_29745[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (16))){
var inst_29666 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29715_29746 = state_29682__$1;
(statearr_29715_29746[(2)] = inst_29666);

(statearr_29715_29746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (10))){
var inst_29635 = (state_29682[(8)]);
var inst_29637 = (state_29682[(10)]);
var inst_29642 = cljs.core._nth.call(null,inst_29635,inst_29637);
var state_29682__$1 = state_29682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29682__$1,(13),out,inst_29642);
} else {
if((state_val_29683 === (18))){
var inst_29648 = (state_29682[(7)]);
var inst_29657 = cljs.core.first.call(null,inst_29648);
var state_29682__$1 = state_29682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29682__$1,(20),out,inst_29657);
} else {
if((state_val_29683 === (8))){
var inst_29636 = (state_29682[(9)]);
var inst_29637 = (state_29682[(10)]);
var inst_29639 = (inst_29637 < inst_29636);
var inst_29640 = inst_29639;
var state_29682__$1 = state_29682;
if(cljs.core.truth_(inst_29640)){
var statearr_29716_29747 = state_29682__$1;
(statearr_29716_29747[(1)] = (10));

} else {
var statearr_29717_29748 = state_29682__$1;
(statearr_29717_29748[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto__))
;
return ((function (switch__27109__auto__,c__27221__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27110__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27110__auto____0 = (function (){
var statearr_29721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29721[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27110__auto__);

(statearr_29721[(1)] = (1));

return statearr_29721;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27110__auto____1 = (function (state_29682){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_29682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e29722){if((e29722 instanceof Object)){
var ex__27113__auto__ = e29722;
var statearr_29723_29749 = state_29682;
(statearr_29723_29749[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29750 = state_29682;
state_29682 = G__29750;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27110__auto__ = function(state_29682){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27110__auto____1.call(this,state_29682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27110__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27110__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto__))
})();
var state__27223__auto__ = (function (){var statearr_29724 = f__27222__auto__.call(null);
(statearr_29724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto__);

return statearr_29724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto__))
);

return c__27221__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29751 = [];
var len__25996__auto___29754 = arguments.length;
var i__25997__auto___29755 = (0);
while(true){
if((i__25997__auto___29755 < len__25996__auto___29754)){
args29751.push((arguments[i__25997__auto___29755]));

var G__29756 = (i__25997__auto___29755 + (1));
i__25997__auto___29755 = G__29756;
continue;
} else {
}
break;
}

var G__29753 = args29751.length;
switch (G__29753) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29751.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29758 = [];
var len__25996__auto___29761 = arguments.length;
var i__25997__auto___29762 = (0);
while(true){
if((i__25997__auto___29762 < len__25996__auto___29761)){
args29758.push((arguments[i__25997__auto___29762]));

var G__29763 = (i__25997__auto___29762 + (1));
i__25997__auto___29762 = G__29763;
continue;
} else {
}
break;
}

var G__29760 = args29758.length;
switch (G__29760) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29758.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29765 = [];
var len__25996__auto___29816 = arguments.length;
var i__25997__auto___29817 = (0);
while(true){
if((i__25997__auto___29817 < len__25996__auto___29816)){
args29765.push((arguments[i__25997__auto___29817]));

var G__29818 = (i__25997__auto___29817 + (1));
i__25997__auto___29817 = G__29818;
continue;
} else {
}
break;
}

var G__29767 = args29765.length;
switch (G__29767) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29765.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27221__auto___29820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___29820,out){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___29820,out){
return (function (state_29791){
var state_val_29792 = (state_29791[(1)]);
if((state_val_29792 === (7))){
var inst_29786 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29793_29821 = state_29791__$1;
(statearr_29793_29821[(2)] = inst_29786);

(statearr_29793_29821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (1))){
var inst_29768 = null;
var state_29791__$1 = (function (){var statearr_29794 = state_29791;
(statearr_29794[(7)] = inst_29768);

return statearr_29794;
})();
var statearr_29795_29822 = state_29791__$1;
(statearr_29795_29822[(2)] = null);

(statearr_29795_29822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (4))){
var inst_29771 = (state_29791[(8)]);
var inst_29771__$1 = (state_29791[(2)]);
var inst_29772 = (inst_29771__$1 == null);
var inst_29773 = cljs.core.not.call(null,inst_29772);
var state_29791__$1 = (function (){var statearr_29796 = state_29791;
(statearr_29796[(8)] = inst_29771__$1);

return statearr_29796;
})();
if(inst_29773){
var statearr_29797_29823 = state_29791__$1;
(statearr_29797_29823[(1)] = (5));

} else {
var statearr_29798_29824 = state_29791__$1;
(statearr_29798_29824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (6))){
var state_29791__$1 = state_29791;
var statearr_29799_29825 = state_29791__$1;
(statearr_29799_29825[(2)] = null);

(statearr_29799_29825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (3))){
var inst_29788 = (state_29791[(2)]);
var inst_29789 = cljs.core.async.close_BANG_.call(null,out);
var state_29791__$1 = (function (){var statearr_29800 = state_29791;
(statearr_29800[(9)] = inst_29788);

return statearr_29800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29791__$1,inst_29789);
} else {
if((state_val_29792 === (2))){
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29791__$1,(4),ch);
} else {
if((state_val_29792 === (11))){
var inst_29771 = (state_29791[(8)]);
var inst_29780 = (state_29791[(2)]);
var inst_29768 = inst_29771;
var state_29791__$1 = (function (){var statearr_29801 = state_29791;
(statearr_29801[(10)] = inst_29780);

(statearr_29801[(7)] = inst_29768);

return statearr_29801;
})();
var statearr_29802_29826 = state_29791__$1;
(statearr_29802_29826[(2)] = null);

(statearr_29802_29826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (9))){
var inst_29771 = (state_29791[(8)]);
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29791__$1,(11),out,inst_29771);
} else {
if((state_val_29792 === (5))){
var inst_29771 = (state_29791[(8)]);
var inst_29768 = (state_29791[(7)]);
var inst_29775 = cljs.core._EQ_.call(null,inst_29771,inst_29768);
var state_29791__$1 = state_29791;
if(inst_29775){
var statearr_29804_29827 = state_29791__$1;
(statearr_29804_29827[(1)] = (8));

} else {
var statearr_29805_29828 = state_29791__$1;
(statearr_29805_29828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (10))){
var inst_29783 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29806_29829 = state_29791__$1;
(statearr_29806_29829[(2)] = inst_29783);

(statearr_29806_29829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (8))){
var inst_29768 = (state_29791[(7)]);
var tmp29803 = inst_29768;
var inst_29768__$1 = tmp29803;
var state_29791__$1 = (function (){var statearr_29807 = state_29791;
(statearr_29807[(7)] = inst_29768__$1);

return statearr_29807;
})();
var statearr_29808_29830 = state_29791__$1;
(statearr_29808_29830[(2)] = null);

(statearr_29808_29830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___29820,out))
;
return ((function (switch__27109__auto__,c__27221__auto___29820,out){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_29812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29812[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_29812[(1)] = (1));

return statearr_29812;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_29791){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_29791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e29813){if((e29813 instanceof Object)){
var ex__27113__auto__ = e29813;
var statearr_29814_29831 = state_29791;
(statearr_29814_29831[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29832 = state_29791;
state_29791 = G__29832;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_29791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_29791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___29820,out))
})();
var state__27223__auto__ = (function (){var statearr_29815 = f__27222__auto__.call(null);
(statearr_29815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___29820);

return statearr_29815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___29820,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29833 = [];
var len__25996__auto___29903 = arguments.length;
var i__25997__auto___29904 = (0);
while(true){
if((i__25997__auto___29904 < len__25996__auto___29903)){
args29833.push((arguments[i__25997__auto___29904]));

var G__29905 = (i__25997__auto___29904 + (1));
i__25997__auto___29904 = G__29905;
continue;
} else {
}
break;
}

var G__29835 = args29833.length;
switch (G__29835) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29833.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27221__auto___29907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___29907,out){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___29907,out){
return (function (state_29873){
var state_val_29874 = (state_29873[(1)]);
if((state_val_29874 === (7))){
var inst_29869 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
var statearr_29875_29908 = state_29873__$1;
(statearr_29875_29908[(2)] = inst_29869);

(statearr_29875_29908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (1))){
var inst_29836 = (new Array(n));
var inst_29837 = inst_29836;
var inst_29838 = (0);
var state_29873__$1 = (function (){var statearr_29876 = state_29873;
(statearr_29876[(7)] = inst_29838);

(statearr_29876[(8)] = inst_29837);

return statearr_29876;
})();
var statearr_29877_29909 = state_29873__$1;
(statearr_29877_29909[(2)] = null);

(statearr_29877_29909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (4))){
var inst_29841 = (state_29873[(9)]);
var inst_29841__$1 = (state_29873[(2)]);
var inst_29842 = (inst_29841__$1 == null);
var inst_29843 = cljs.core.not.call(null,inst_29842);
var state_29873__$1 = (function (){var statearr_29878 = state_29873;
(statearr_29878[(9)] = inst_29841__$1);

return statearr_29878;
})();
if(inst_29843){
var statearr_29879_29910 = state_29873__$1;
(statearr_29879_29910[(1)] = (5));

} else {
var statearr_29880_29911 = state_29873__$1;
(statearr_29880_29911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (15))){
var inst_29863 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
var statearr_29881_29912 = state_29873__$1;
(statearr_29881_29912[(2)] = inst_29863);

(statearr_29881_29912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (13))){
var state_29873__$1 = state_29873;
var statearr_29882_29913 = state_29873__$1;
(statearr_29882_29913[(2)] = null);

(statearr_29882_29913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (6))){
var inst_29838 = (state_29873[(7)]);
var inst_29859 = (inst_29838 > (0));
var state_29873__$1 = state_29873;
if(cljs.core.truth_(inst_29859)){
var statearr_29883_29914 = state_29873__$1;
(statearr_29883_29914[(1)] = (12));

} else {
var statearr_29884_29915 = state_29873__$1;
(statearr_29884_29915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (3))){
var inst_29871 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29873__$1,inst_29871);
} else {
if((state_val_29874 === (12))){
var inst_29837 = (state_29873[(8)]);
var inst_29861 = cljs.core.vec.call(null,inst_29837);
var state_29873__$1 = state_29873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29873__$1,(15),out,inst_29861);
} else {
if((state_val_29874 === (2))){
var state_29873__$1 = state_29873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29873__$1,(4),ch);
} else {
if((state_val_29874 === (11))){
var inst_29853 = (state_29873[(2)]);
var inst_29854 = (new Array(n));
var inst_29837 = inst_29854;
var inst_29838 = (0);
var state_29873__$1 = (function (){var statearr_29885 = state_29873;
(statearr_29885[(7)] = inst_29838);

(statearr_29885[(8)] = inst_29837);

(statearr_29885[(10)] = inst_29853);

return statearr_29885;
})();
var statearr_29886_29916 = state_29873__$1;
(statearr_29886_29916[(2)] = null);

(statearr_29886_29916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (9))){
var inst_29837 = (state_29873[(8)]);
var inst_29851 = cljs.core.vec.call(null,inst_29837);
var state_29873__$1 = state_29873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29873__$1,(11),out,inst_29851);
} else {
if((state_val_29874 === (5))){
var inst_29841 = (state_29873[(9)]);
var inst_29838 = (state_29873[(7)]);
var inst_29837 = (state_29873[(8)]);
var inst_29846 = (state_29873[(11)]);
var inst_29845 = (inst_29837[inst_29838] = inst_29841);
var inst_29846__$1 = (inst_29838 + (1));
var inst_29847 = (inst_29846__$1 < n);
var state_29873__$1 = (function (){var statearr_29887 = state_29873;
(statearr_29887[(12)] = inst_29845);

(statearr_29887[(11)] = inst_29846__$1);

return statearr_29887;
})();
if(cljs.core.truth_(inst_29847)){
var statearr_29888_29917 = state_29873__$1;
(statearr_29888_29917[(1)] = (8));

} else {
var statearr_29889_29918 = state_29873__$1;
(statearr_29889_29918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (14))){
var inst_29866 = (state_29873[(2)]);
var inst_29867 = cljs.core.async.close_BANG_.call(null,out);
var state_29873__$1 = (function (){var statearr_29891 = state_29873;
(statearr_29891[(13)] = inst_29866);

return statearr_29891;
})();
var statearr_29892_29919 = state_29873__$1;
(statearr_29892_29919[(2)] = inst_29867);

(statearr_29892_29919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (10))){
var inst_29857 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
var statearr_29893_29920 = state_29873__$1;
(statearr_29893_29920[(2)] = inst_29857);

(statearr_29893_29920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (8))){
var inst_29837 = (state_29873[(8)]);
var inst_29846 = (state_29873[(11)]);
var tmp29890 = inst_29837;
var inst_29837__$1 = tmp29890;
var inst_29838 = inst_29846;
var state_29873__$1 = (function (){var statearr_29894 = state_29873;
(statearr_29894[(7)] = inst_29838);

(statearr_29894[(8)] = inst_29837__$1);

return statearr_29894;
})();
var statearr_29895_29921 = state_29873__$1;
(statearr_29895_29921[(2)] = null);

(statearr_29895_29921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___29907,out))
;
return ((function (switch__27109__auto__,c__27221__auto___29907,out){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_29899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29899[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_29899[(1)] = (1));

return statearr_29899;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_29873){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_29873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e29900){if((e29900 instanceof Object)){
var ex__27113__auto__ = e29900;
var statearr_29901_29922 = state_29873;
(statearr_29901_29922[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29923 = state_29873;
state_29873 = G__29923;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_29873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_29873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___29907,out))
})();
var state__27223__auto__ = (function (){var statearr_29902 = f__27222__auto__.call(null);
(statearr_29902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___29907);

return statearr_29902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___29907,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29924 = [];
var len__25996__auto___29998 = arguments.length;
var i__25997__auto___29999 = (0);
while(true){
if((i__25997__auto___29999 < len__25996__auto___29998)){
args29924.push((arguments[i__25997__auto___29999]));

var G__30000 = (i__25997__auto___29999 + (1));
i__25997__auto___29999 = G__30000;
continue;
} else {
}
break;
}

var G__29926 = args29924.length;
switch (G__29926) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29924.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27221__auto___30002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___30002,out){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___30002,out){
return (function (state_29968){
var state_val_29969 = (state_29968[(1)]);
if((state_val_29969 === (7))){
var inst_29964 = (state_29968[(2)]);
var state_29968__$1 = state_29968;
var statearr_29970_30003 = state_29968__$1;
(statearr_29970_30003[(2)] = inst_29964);

(statearr_29970_30003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (1))){
var inst_29927 = [];
var inst_29928 = inst_29927;
var inst_29929 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29968__$1 = (function (){var statearr_29971 = state_29968;
(statearr_29971[(7)] = inst_29929);

(statearr_29971[(8)] = inst_29928);

return statearr_29971;
})();
var statearr_29972_30004 = state_29968__$1;
(statearr_29972_30004[(2)] = null);

(statearr_29972_30004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (4))){
var inst_29932 = (state_29968[(9)]);
var inst_29932__$1 = (state_29968[(2)]);
var inst_29933 = (inst_29932__$1 == null);
var inst_29934 = cljs.core.not.call(null,inst_29933);
var state_29968__$1 = (function (){var statearr_29973 = state_29968;
(statearr_29973[(9)] = inst_29932__$1);

return statearr_29973;
})();
if(inst_29934){
var statearr_29974_30005 = state_29968__$1;
(statearr_29974_30005[(1)] = (5));

} else {
var statearr_29975_30006 = state_29968__$1;
(statearr_29975_30006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (15))){
var inst_29958 = (state_29968[(2)]);
var state_29968__$1 = state_29968;
var statearr_29976_30007 = state_29968__$1;
(statearr_29976_30007[(2)] = inst_29958);

(statearr_29976_30007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (13))){
var state_29968__$1 = state_29968;
var statearr_29977_30008 = state_29968__$1;
(statearr_29977_30008[(2)] = null);

(statearr_29977_30008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (6))){
var inst_29928 = (state_29968[(8)]);
var inst_29953 = inst_29928.length;
var inst_29954 = (inst_29953 > (0));
var state_29968__$1 = state_29968;
if(cljs.core.truth_(inst_29954)){
var statearr_29978_30009 = state_29968__$1;
(statearr_29978_30009[(1)] = (12));

} else {
var statearr_29979_30010 = state_29968__$1;
(statearr_29979_30010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (3))){
var inst_29966 = (state_29968[(2)]);
var state_29968__$1 = state_29968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29968__$1,inst_29966);
} else {
if((state_val_29969 === (12))){
var inst_29928 = (state_29968[(8)]);
var inst_29956 = cljs.core.vec.call(null,inst_29928);
var state_29968__$1 = state_29968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29968__$1,(15),out,inst_29956);
} else {
if((state_val_29969 === (2))){
var state_29968__$1 = state_29968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29968__$1,(4),ch);
} else {
if((state_val_29969 === (11))){
var inst_29932 = (state_29968[(9)]);
var inst_29936 = (state_29968[(10)]);
var inst_29946 = (state_29968[(2)]);
var inst_29947 = [];
var inst_29948 = inst_29947.push(inst_29932);
var inst_29928 = inst_29947;
var inst_29929 = inst_29936;
var state_29968__$1 = (function (){var statearr_29980 = state_29968;
(statearr_29980[(11)] = inst_29946);

(statearr_29980[(7)] = inst_29929);

(statearr_29980[(8)] = inst_29928);

(statearr_29980[(12)] = inst_29948);

return statearr_29980;
})();
var statearr_29981_30011 = state_29968__$1;
(statearr_29981_30011[(2)] = null);

(statearr_29981_30011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (9))){
var inst_29928 = (state_29968[(8)]);
var inst_29944 = cljs.core.vec.call(null,inst_29928);
var state_29968__$1 = state_29968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29968__$1,(11),out,inst_29944);
} else {
if((state_val_29969 === (5))){
var inst_29929 = (state_29968[(7)]);
var inst_29932 = (state_29968[(9)]);
var inst_29936 = (state_29968[(10)]);
var inst_29936__$1 = f.call(null,inst_29932);
var inst_29937 = cljs.core._EQ_.call(null,inst_29936__$1,inst_29929);
var inst_29938 = cljs.core.keyword_identical_QMARK_.call(null,inst_29929,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29939 = (inst_29937) || (inst_29938);
var state_29968__$1 = (function (){var statearr_29982 = state_29968;
(statearr_29982[(10)] = inst_29936__$1);

return statearr_29982;
})();
if(cljs.core.truth_(inst_29939)){
var statearr_29983_30012 = state_29968__$1;
(statearr_29983_30012[(1)] = (8));

} else {
var statearr_29984_30013 = state_29968__$1;
(statearr_29984_30013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (14))){
var inst_29961 = (state_29968[(2)]);
var inst_29962 = cljs.core.async.close_BANG_.call(null,out);
var state_29968__$1 = (function (){var statearr_29986 = state_29968;
(statearr_29986[(13)] = inst_29961);

return statearr_29986;
})();
var statearr_29987_30014 = state_29968__$1;
(statearr_29987_30014[(2)] = inst_29962);

(statearr_29987_30014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (10))){
var inst_29951 = (state_29968[(2)]);
var state_29968__$1 = state_29968;
var statearr_29988_30015 = state_29968__$1;
(statearr_29988_30015[(2)] = inst_29951);

(statearr_29988_30015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (8))){
var inst_29928 = (state_29968[(8)]);
var inst_29932 = (state_29968[(9)]);
var inst_29936 = (state_29968[(10)]);
var inst_29941 = inst_29928.push(inst_29932);
var tmp29985 = inst_29928;
var inst_29928__$1 = tmp29985;
var inst_29929 = inst_29936;
var state_29968__$1 = (function (){var statearr_29989 = state_29968;
(statearr_29989[(14)] = inst_29941);

(statearr_29989[(7)] = inst_29929);

(statearr_29989[(8)] = inst_29928__$1);

return statearr_29989;
})();
var statearr_29990_30016 = state_29968__$1;
(statearr_29990_30016[(2)] = null);

(statearr_29990_30016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27221__auto___30002,out))
;
return ((function (switch__27109__auto__,c__27221__auto___30002,out){
return (function() {
var cljs$core$async$state_machine__27110__auto__ = null;
var cljs$core$async$state_machine__27110__auto____0 = (function (){
var statearr_29994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29994[(0)] = cljs$core$async$state_machine__27110__auto__);

(statearr_29994[(1)] = (1));

return statearr_29994;
});
var cljs$core$async$state_machine__27110__auto____1 = (function (state_29968){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_29968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e29995){if((e29995 instanceof Object)){
var ex__27113__auto__ = e29995;
var statearr_29996_30017 = state_29968;
(statearr_29996_30017[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30018 = state_29968;
state_29968 = G__30018;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
cljs$core$async$state_machine__27110__auto__ = function(state_29968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27110__auto____1.call(this,state_29968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27110__auto____0;
cljs$core$async$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27110__auto____1;
return cljs$core$async$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___30002,out))
})();
var state__27223__auto__ = (function (){var statearr_29997 = f__27222__auto__.call(null);
(statearr_29997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___30002);

return statearr_29997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___30002,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1480282067112