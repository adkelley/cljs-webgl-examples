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
var args37383 = [];
var len__25996__auto___37389 = arguments.length;
var i__25997__auto___37390 = (0);
while(true){
if((i__25997__auto___37390 < len__25996__auto___37389)){
args37383.push((arguments[i__25997__auto___37390]));

var G__37391 = (i__25997__auto___37390 + (1));
i__25997__auto___37390 = G__37391;
continue;
} else {
}
break;
}

var G__37385 = args37383.length;
switch (G__37385) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37383.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37386 = (function (f,blockable,meta37387){
this.f = f;
this.blockable = blockable;
this.meta37387 = meta37387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37388,meta37387__$1){
var self__ = this;
var _37388__$1 = this;
return (new cljs.core.async.t_cljs$core$async37386(self__.f,self__.blockable,meta37387__$1));
});

cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37388){
var self__ = this;
var _37388__$1 = this;
return self__.meta37387;
});

cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37387","meta37387",960872301,null)], null);
});

cljs.core.async.t_cljs$core$async37386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37386";

cljs.core.async.t_cljs$core$async37386.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async37386");
});

cljs.core.async.__GT_t_cljs$core$async37386 = (function cljs$core$async$__GT_t_cljs$core$async37386(f__$1,blockable__$1,meta37387){
return (new cljs.core.async.t_cljs$core$async37386(f__$1,blockable__$1,meta37387));
});

}

return (new cljs.core.async.t_cljs$core$async37386(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args37395 = [];
var len__25996__auto___37398 = arguments.length;
var i__25997__auto___37399 = (0);
while(true){
if((i__25997__auto___37399 < len__25996__auto___37398)){
args37395.push((arguments[i__25997__auto___37399]));

var G__37400 = (i__25997__auto___37399 + (1));
i__25997__auto___37399 = G__37400;
continue;
} else {
}
break;
}

var G__37397 = args37395.length;
switch (G__37397) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37395.length)].join('')));

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
var args37402 = [];
var len__25996__auto___37405 = arguments.length;
var i__25997__auto___37406 = (0);
while(true){
if((i__25997__auto___37406 < len__25996__auto___37405)){
args37402.push((arguments[i__25997__auto___37406]));

var G__37407 = (i__25997__auto___37406 + (1));
i__25997__auto___37406 = G__37407;
continue;
} else {
}
break;
}

var G__37404 = args37402.length;
switch (G__37404) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37402.length)].join('')));

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
var args37409 = [];
var len__25996__auto___37412 = arguments.length;
var i__25997__auto___37413 = (0);
while(true){
if((i__25997__auto___37413 < len__25996__auto___37412)){
args37409.push((arguments[i__25997__auto___37413]));

var G__37414 = (i__25997__auto___37413 + (1));
i__25997__auto___37413 = G__37414;
continue;
} else {
}
break;
}

var G__37411 = args37409.length;
switch (G__37411) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37409.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37416 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37416);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37416,ret){
return (function (){
return fn1.call(null,val_37416);
});})(val_37416,ret))
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
var args37417 = [];
var len__25996__auto___37420 = arguments.length;
var i__25997__auto___37421 = (0);
while(true){
if((i__25997__auto___37421 < len__25996__auto___37420)){
args37417.push((arguments[i__25997__auto___37421]));

var G__37422 = (i__25997__auto___37421 + (1));
i__25997__auto___37421 = G__37422;
continue;
} else {
}
break;
}

var G__37419 = args37417.length;
switch (G__37419) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37417.length)].join('')));

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
var n__25806__auto___37424 = n;
var x_37425 = (0);
while(true){
if((x_37425 < n__25806__auto___37424)){
(a[x_37425] = (0));

var G__37426 = (x_37425 + (1));
x_37425 = G__37426;
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

var G__37427 = (i + (1));
i = G__37427;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37431 = (function (flag,meta37432){
this.flag = flag;
this.meta37432 = meta37432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37433,meta37432__$1){
var self__ = this;
var _37433__$1 = this;
return (new cljs.core.async.t_cljs$core$async37431(self__.flag,meta37432__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37433){
var self__ = this;
var _37433__$1 = this;
return self__.meta37432;
});})(flag))
;

cljs.core.async.t_cljs$core$async37431.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37431.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37432","meta37432",1657883155,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37431";

cljs.core.async.t_cljs$core$async37431.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async37431");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37431 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37431(flag__$1,meta37432){
return (new cljs.core.async.t_cljs$core$async37431(flag__$1,meta37432));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37431(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37437 = (function (flag,cb,meta37438){
this.flag = flag;
this.cb = cb;
this.meta37438 = meta37438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37439,meta37438__$1){
var self__ = this;
var _37439__$1 = this;
return (new cljs.core.async.t_cljs$core$async37437(self__.flag,self__.cb,meta37438__$1));
});

cljs.core.async.t_cljs$core$async37437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37439){
var self__ = this;
var _37439__$1 = this;
return self__.meta37438;
});

cljs.core.async.t_cljs$core$async37437.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37438","meta37438",1307660212,null)], null);
});

cljs.core.async.t_cljs$core$async37437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37437";

cljs.core.async.t_cljs$core$async37437.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async37437");
});

cljs.core.async.__GT_t_cljs$core$async37437 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37437(flag__$1,cb__$1,meta37438){
return (new cljs.core.async.t_cljs$core$async37437(flag__$1,cb__$1,meta37438));
});

}

return (new cljs.core.async.t_cljs$core$async37437(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37440_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37440_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37441_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37441_SHARP_,port], null));
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
var G__37442 = (i + (1));
i = G__37442;
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
var len__25996__auto___37448 = arguments.length;
var i__25997__auto___37449 = (0);
while(true){
if((i__25997__auto___37449 < len__25996__auto___37448)){
args__26003__auto__.push((arguments[i__25997__auto___37449]));

var G__37450 = (i__25997__auto___37449 + (1));
i__25997__auto___37449 = G__37450;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((1) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26004__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37445){
var map__37446 = p__37445;
var map__37446__$1 = ((((!((map__37446 == null)))?((((map__37446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37446):map__37446);
var opts = map__37446__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37443){
var G__37444 = cljs.core.first.call(null,seq37443);
var seq37443__$1 = cljs.core.next.call(null,seq37443);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37444,seq37443__$1);
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
var args37451 = [];
var len__25996__auto___37501 = arguments.length;
var i__25997__auto___37502 = (0);
while(true){
if((i__25997__auto___37502 < len__25996__auto___37501)){
args37451.push((arguments[i__25997__auto___37502]));

var G__37503 = (i__25997__auto___37502 + (1));
i__25997__auto___37502 = G__37503;
continue;
} else {
}
break;
}

var G__37453 = args37451.length;
switch (G__37453) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37451.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28055__auto___37505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___37505){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___37505){
return (function (state_37477){
var state_val_37478 = (state_37477[(1)]);
if((state_val_37478 === (7))){
var inst_37473 = (state_37477[(2)]);
var state_37477__$1 = state_37477;
var statearr_37479_37506 = state_37477__$1;
(statearr_37479_37506[(2)] = inst_37473);

(statearr_37479_37506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37478 === (1))){
var state_37477__$1 = state_37477;
var statearr_37480_37507 = state_37477__$1;
(statearr_37480_37507[(2)] = null);

(statearr_37480_37507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37478 === (4))){
var inst_37456 = (state_37477[(7)]);
var inst_37456__$1 = (state_37477[(2)]);
var inst_37457 = (inst_37456__$1 == null);
var state_37477__$1 = (function (){var statearr_37481 = state_37477;
(statearr_37481[(7)] = inst_37456__$1);

return statearr_37481;
})();
if(cljs.core.truth_(inst_37457)){
var statearr_37482_37508 = state_37477__$1;
(statearr_37482_37508[(1)] = (5));

} else {
var statearr_37483_37509 = state_37477__$1;
(statearr_37483_37509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37478 === (13))){
var state_37477__$1 = state_37477;
var statearr_37484_37510 = state_37477__$1;
(statearr_37484_37510[(2)] = null);

(statearr_37484_37510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37478 === (6))){
var inst_37456 = (state_37477[(7)]);
var state_37477__$1 = state_37477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37477__$1,(11),to,inst_37456);
} else {
if((state_val_37478 === (3))){
var inst_37475 = (state_37477[(2)]);
var state_37477__$1 = state_37477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37477__$1,inst_37475);
} else {
if((state_val_37478 === (12))){
var state_37477__$1 = state_37477;
var statearr_37485_37511 = state_37477__$1;
(statearr_37485_37511[(2)] = null);

(statearr_37485_37511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37478 === (2))){
var state_37477__$1 = state_37477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37477__$1,(4),from);
} else {
if((state_val_37478 === (11))){
var inst_37466 = (state_37477[(2)]);
var state_37477__$1 = state_37477;
if(cljs.core.truth_(inst_37466)){
var statearr_37486_37512 = state_37477__$1;
(statearr_37486_37512[(1)] = (12));

} else {
var statearr_37487_37513 = state_37477__$1;
(statearr_37487_37513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37478 === (9))){
var state_37477__$1 = state_37477;
var statearr_37488_37514 = state_37477__$1;
(statearr_37488_37514[(2)] = null);

(statearr_37488_37514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37478 === (5))){
var state_37477__$1 = state_37477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37489_37515 = state_37477__$1;
(statearr_37489_37515[(1)] = (8));

} else {
var statearr_37490_37516 = state_37477__$1;
(statearr_37490_37516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37478 === (14))){
var inst_37471 = (state_37477[(2)]);
var state_37477__$1 = state_37477;
var statearr_37491_37517 = state_37477__$1;
(statearr_37491_37517[(2)] = inst_37471);

(statearr_37491_37517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37478 === (10))){
var inst_37463 = (state_37477[(2)]);
var state_37477__$1 = state_37477;
var statearr_37492_37518 = state_37477__$1;
(statearr_37492_37518[(2)] = inst_37463);

(statearr_37492_37518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37478 === (8))){
var inst_37460 = cljs.core.async.close_BANG_.call(null,to);
var state_37477__$1 = state_37477;
var statearr_37493_37519 = state_37477__$1;
(statearr_37493_37519[(2)] = inst_37460);

(statearr_37493_37519[(1)] = (10));


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
});})(c__28055__auto___37505))
;
return ((function (switch__27943__auto__,c__28055__auto___37505){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_37497 = [null,null,null,null,null,null,null,null];
(statearr_37497[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_37497[(1)] = (1));

return statearr_37497;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_37477){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_37477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e37498){if((e37498 instanceof Object)){
var ex__27947__auto__ = e37498;
var statearr_37499_37520 = state_37477;
(statearr_37499_37520[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37521 = state_37477;
state_37477 = G__37521;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_37477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_37477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___37505))
})();
var state__28057__auto__ = (function (){var statearr_37500 = f__28056__auto__.call(null);
(statearr_37500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___37505);

return statearr_37500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___37505))
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
return (function (p__37709){
var vec__37710 = p__37709;
var v = cljs.core.nth.call(null,vec__37710,(0),null);
var p = cljs.core.nth.call(null,vec__37710,(1),null);
var job = vec__37710;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28055__auto___37896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___37896,res,vec__37710,v,p,job,jobs,results){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___37896,res,vec__37710,v,p,job,jobs,results){
return (function (state_37717){
var state_val_37718 = (state_37717[(1)]);
if((state_val_37718 === (1))){
var state_37717__$1 = state_37717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37717__$1,(2),res,v);
} else {
if((state_val_37718 === (2))){
var inst_37714 = (state_37717[(2)]);
var inst_37715 = cljs.core.async.close_BANG_.call(null,res);
var state_37717__$1 = (function (){var statearr_37719 = state_37717;
(statearr_37719[(7)] = inst_37714);

return statearr_37719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37717__$1,inst_37715);
} else {
return null;
}
}
});})(c__28055__auto___37896,res,vec__37710,v,p,job,jobs,results))
;
return ((function (switch__27943__auto__,c__28055__auto___37896,res,vec__37710,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0 = (function (){
var statearr_37723 = [null,null,null,null,null,null,null,null];
(statearr_37723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__);

(statearr_37723[(1)] = (1));

return statearr_37723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1 = (function (state_37717){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_37717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e37724){if((e37724 instanceof Object)){
var ex__27947__auto__ = e37724;
var statearr_37725_37897 = state_37717;
(statearr_37725_37897[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37898 = state_37717;
state_37717 = G__37898;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__ = function(state_37717){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1.call(this,state_37717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___37896,res,vec__37710,v,p,job,jobs,results))
})();
var state__28057__auto__ = (function (){var statearr_37726 = f__28056__auto__.call(null);
(statearr_37726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___37896);

return statearr_37726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___37896,res,vec__37710,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37727){
var vec__37728 = p__37727;
var v = cljs.core.nth.call(null,vec__37728,(0),null);
var p = cljs.core.nth.call(null,vec__37728,(1),null);
var job = vec__37728;
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
var n__25806__auto___37899 = n;
var __37900 = (0);
while(true){
if((__37900 < n__25806__auto___37899)){
var G__37731_37901 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37731_37901) {
case "compute":
var c__28055__auto___37903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37900,c__28055__auto___37903,G__37731_37901,n__25806__auto___37899,jobs,results,process,async){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (__37900,c__28055__auto___37903,G__37731_37901,n__25806__auto___37899,jobs,results,process,async){
return (function (state_37744){
var state_val_37745 = (state_37744[(1)]);
if((state_val_37745 === (1))){
var state_37744__$1 = state_37744;
var statearr_37746_37904 = state_37744__$1;
(statearr_37746_37904[(2)] = null);

(statearr_37746_37904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37745 === (2))){
var state_37744__$1 = state_37744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37744__$1,(4),jobs);
} else {
if((state_val_37745 === (3))){
var inst_37742 = (state_37744[(2)]);
var state_37744__$1 = state_37744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37744__$1,inst_37742);
} else {
if((state_val_37745 === (4))){
var inst_37734 = (state_37744[(2)]);
var inst_37735 = process.call(null,inst_37734);
var state_37744__$1 = state_37744;
if(cljs.core.truth_(inst_37735)){
var statearr_37747_37905 = state_37744__$1;
(statearr_37747_37905[(1)] = (5));

} else {
var statearr_37748_37906 = state_37744__$1;
(statearr_37748_37906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37745 === (5))){
var state_37744__$1 = state_37744;
var statearr_37749_37907 = state_37744__$1;
(statearr_37749_37907[(2)] = null);

(statearr_37749_37907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37745 === (6))){
var state_37744__$1 = state_37744;
var statearr_37750_37908 = state_37744__$1;
(statearr_37750_37908[(2)] = null);

(statearr_37750_37908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37745 === (7))){
var inst_37740 = (state_37744[(2)]);
var state_37744__$1 = state_37744;
var statearr_37751_37909 = state_37744__$1;
(statearr_37751_37909[(2)] = inst_37740);

(statearr_37751_37909[(1)] = (3));


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
});})(__37900,c__28055__auto___37903,G__37731_37901,n__25806__auto___37899,jobs,results,process,async))
;
return ((function (__37900,switch__27943__auto__,c__28055__auto___37903,G__37731_37901,n__25806__auto___37899,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0 = (function (){
var statearr_37755 = [null,null,null,null,null,null,null];
(statearr_37755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__);

(statearr_37755[(1)] = (1));

return statearr_37755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1 = (function (state_37744){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_37744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e37756){if((e37756 instanceof Object)){
var ex__27947__auto__ = e37756;
var statearr_37757_37910 = state_37744;
(statearr_37757_37910[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37911 = state_37744;
state_37744 = G__37911;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__ = function(state_37744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1.call(this,state_37744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__;
})()
;})(__37900,switch__27943__auto__,c__28055__auto___37903,G__37731_37901,n__25806__auto___37899,jobs,results,process,async))
})();
var state__28057__auto__ = (function (){var statearr_37758 = f__28056__auto__.call(null);
(statearr_37758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___37903);

return statearr_37758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(__37900,c__28055__auto___37903,G__37731_37901,n__25806__auto___37899,jobs,results,process,async))
);


break;
case "async":
var c__28055__auto___37912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37900,c__28055__auto___37912,G__37731_37901,n__25806__auto___37899,jobs,results,process,async){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (__37900,c__28055__auto___37912,G__37731_37901,n__25806__auto___37899,jobs,results,process,async){
return (function (state_37771){
var state_val_37772 = (state_37771[(1)]);
if((state_val_37772 === (1))){
var state_37771__$1 = state_37771;
var statearr_37773_37913 = state_37771__$1;
(statearr_37773_37913[(2)] = null);

(statearr_37773_37913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (2))){
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(4),jobs);
} else {
if((state_val_37772 === (3))){
var inst_37769 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37771__$1,inst_37769);
} else {
if((state_val_37772 === (4))){
var inst_37761 = (state_37771[(2)]);
var inst_37762 = async.call(null,inst_37761);
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37762)){
var statearr_37774_37914 = state_37771__$1;
(statearr_37774_37914[(1)] = (5));

} else {
var statearr_37775_37915 = state_37771__$1;
(statearr_37775_37915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (5))){
var state_37771__$1 = state_37771;
var statearr_37776_37916 = state_37771__$1;
(statearr_37776_37916[(2)] = null);

(statearr_37776_37916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (6))){
var state_37771__$1 = state_37771;
var statearr_37777_37917 = state_37771__$1;
(statearr_37777_37917[(2)] = null);

(statearr_37777_37917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (7))){
var inst_37767 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37778_37918 = state_37771__$1;
(statearr_37778_37918[(2)] = inst_37767);

(statearr_37778_37918[(1)] = (3));


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
});})(__37900,c__28055__auto___37912,G__37731_37901,n__25806__auto___37899,jobs,results,process,async))
;
return ((function (__37900,switch__27943__auto__,c__28055__auto___37912,G__37731_37901,n__25806__auto___37899,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0 = (function (){
var statearr_37782 = [null,null,null,null,null,null,null];
(statearr_37782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__);

(statearr_37782[(1)] = (1));

return statearr_37782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1 = (function (state_37771){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_37771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e37783){if((e37783 instanceof Object)){
var ex__27947__auto__ = e37783;
var statearr_37784_37919 = state_37771;
(statearr_37784_37919[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37920 = state_37771;
state_37771 = G__37920;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__ = function(state_37771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1.call(this,state_37771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__;
})()
;})(__37900,switch__27943__auto__,c__28055__auto___37912,G__37731_37901,n__25806__auto___37899,jobs,results,process,async))
})();
var state__28057__auto__ = (function (){var statearr_37785 = f__28056__auto__.call(null);
(statearr_37785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___37912);

return statearr_37785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(__37900,c__28055__auto___37912,G__37731_37901,n__25806__auto___37899,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37921 = (__37900 + (1));
__37900 = G__37921;
continue;
} else {
}
break;
}

var c__28055__auto___37922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___37922,jobs,results,process,async){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___37922,jobs,results,process,async){
return (function (state_37807){
var state_val_37808 = (state_37807[(1)]);
if((state_val_37808 === (1))){
var state_37807__$1 = state_37807;
var statearr_37809_37923 = state_37807__$1;
(statearr_37809_37923[(2)] = null);

(statearr_37809_37923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (2))){
var state_37807__$1 = state_37807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37807__$1,(4),from);
} else {
if((state_val_37808 === (3))){
var inst_37805 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37807__$1,inst_37805);
} else {
if((state_val_37808 === (4))){
var inst_37788 = (state_37807[(7)]);
var inst_37788__$1 = (state_37807[(2)]);
var inst_37789 = (inst_37788__$1 == null);
var state_37807__$1 = (function (){var statearr_37810 = state_37807;
(statearr_37810[(7)] = inst_37788__$1);

return statearr_37810;
})();
if(cljs.core.truth_(inst_37789)){
var statearr_37811_37924 = state_37807__$1;
(statearr_37811_37924[(1)] = (5));

} else {
var statearr_37812_37925 = state_37807__$1;
(statearr_37812_37925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (5))){
var inst_37791 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37807__$1 = state_37807;
var statearr_37813_37926 = state_37807__$1;
(statearr_37813_37926[(2)] = inst_37791);

(statearr_37813_37926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (6))){
var inst_37788 = (state_37807[(7)]);
var inst_37793 = (state_37807[(8)]);
var inst_37793__$1 = cljs.core.async.chan.call(null,(1));
var inst_37794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37795 = [inst_37788,inst_37793__$1];
var inst_37796 = (new cljs.core.PersistentVector(null,2,(5),inst_37794,inst_37795,null));
var state_37807__$1 = (function (){var statearr_37814 = state_37807;
(statearr_37814[(8)] = inst_37793__$1);

return statearr_37814;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37807__$1,(8),jobs,inst_37796);
} else {
if((state_val_37808 === (7))){
var inst_37803 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
var statearr_37815_37927 = state_37807__$1;
(statearr_37815_37927[(2)] = inst_37803);

(statearr_37815_37927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (8))){
var inst_37793 = (state_37807[(8)]);
var inst_37798 = (state_37807[(2)]);
var state_37807__$1 = (function (){var statearr_37816 = state_37807;
(statearr_37816[(9)] = inst_37798);

return statearr_37816;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37807__$1,(9),results,inst_37793);
} else {
if((state_val_37808 === (9))){
var inst_37800 = (state_37807[(2)]);
var state_37807__$1 = (function (){var statearr_37817 = state_37807;
(statearr_37817[(10)] = inst_37800);

return statearr_37817;
})();
var statearr_37818_37928 = state_37807__$1;
(statearr_37818_37928[(2)] = null);

(statearr_37818_37928[(1)] = (2));


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
});})(c__28055__auto___37922,jobs,results,process,async))
;
return ((function (switch__27943__auto__,c__28055__auto___37922,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0 = (function (){
var statearr_37822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__);

(statearr_37822[(1)] = (1));

return statearr_37822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1 = (function (state_37807){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_37807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e37823){if((e37823 instanceof Object)){
var ex__27947__auto__ = e37823;
var statearr_37824_37929 = state_37807;
(statearr_37824_37929[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37930 = state_37807;
state_37807 = G__37930;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__ = function(state_37807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1.call(this,state_37807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___37922,jobs,results,process,async))
})();
var state__28057__auto__ = (function (){var statearr_37825 = f__28056__auto__.call(null);
(statearr_37825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___37922);

return statearr_37825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___37922,jobs,results,process,async))
);


var c__28055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto__,jobs,results,process,async){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto__,jobs,results,process,async){
return (function (state_37863){
var state_val_37864 = (state_37863[(1)]);
if((state_val_37864 === (7))){
var inst_37859 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
var statearr_37865_37931 = state_37863__$1;
(statearr_37865_37931[(2)] = inst_37859);

(statearr_37865_37931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (20))){
var state_37863__$1 = state_37863;
var statearr_37866_37932 = state_37863__$1;
(statearr_37866_37932[(2)] = null);

(statearr_37866_37932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (1))){
var state_37863__$1 = state_37863;
var statearr_37867_37933 = state_37863__$1;
(statearr_37867_37933[(2)] = null);

(statearr_37867_37933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (4))){
var inst_37828 = (state_37863[(7)]);
var inst_37828__$1 = (state_37863[(2)]);
var inst_37829 = (inst_37828__$1 == null);
var state_37863__$1 = (function (){var statearr_37868 = state_37863;
(statearr_37868[(7)] = inst_37828__$1);

return statearr_37868;
})();
if(cljs.core.truth_(inst_37829)){
var statearr_37869_37934 = state_37863__$1;
(statearr_37869_37934[(1)] = (5));

} else {
var statearr_37870_37935 = state_37863__$1;
(statearr_37870_37935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (15))){
var inst_37841 = (state_37863[(8)]);
var state_37863__$1 = state_37863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37863__$1,(18),to,inst_37841);
} else {
if((state_val_37864 === (21))){
var inst_37854 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
var statearr_37871_37936 = state_37863__$1;
(statearr_37871_37936[(2)] = inst_37854);

(statearr_37871_37936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (13))){
var inst_37856 = (state_37863[(2)]);
var state_37863__$1 = (function (){var statearr_37872 = state_37863;
(statearr_37872[(9)] = inst_37856);

return statearr_37872;
})();
var statearr_37873_37937 = state_37863__$1;
(statearr_37873_37937[(2)] = null);

(statearr_37873_37937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (6))){
var inst_37828 = (state_37863[(7)]);
var state_37863__$1 = state_37863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37863__$1,(11),inst_37828);
} else {
if((state_val_37864 === (17))){
var inst_37849 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
if(cljs.core.truth_(inst_37849)){
var statearr_37874_37938 = state_37863__$1;
(statearr_37874_37938[(1)] = (19));

} else {
var statearr_37875_37939 = state_37863__$1;
(statearr_37875_37939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (3))){
var inst_37861 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37863__$1,inst_37861);
} else {
if((state_val_37864 === (12))){
var inst_37838 = (state_37863[(10)]);
var state_37863__$1 = state_37863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37863__$1,(14),inst_37838);
} else {
if((state_val_37864 === (2))){
var state_37863__$1 = state_37863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37863__$1,(4),results);
} else {
if((state_val_37864 === (19))){
var state_37863__$1 = state_37863;
var statearr_37876_37940 = state_37863__$1;
(statearr_37876_37940[(2)] = null);

(statearr_37876_37940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (11))){
var inst_37838 = (state_37863[(2)]);
var state_37863__$1 = (function (){var statearr_37877 = state_37863;
(statearr_37877[(10)] = inst_37838);

return statearr_37877;
})();
var statearr_37878_37941 = state_37863__$1;
(statearr_37878_37941[(2)] = null);

(statearr_37878_37941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (9))){
var state_37863__$1 = state_37863;
var statearr_37879_37942 = state_37863__$1;
(statearr_37879_37942[(2)] = null);

(statearr_37879_37942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (5))){
var state_37863__$1 = state_37863;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37880_37943 = state_37863__$1;
(statearr_37880_37943[(1)] = (8));

} else {
var statearr_37881_37944 = state_37863__$1;
(statearr_37881_37944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (14))){
var inst_37841 = (state_37863[(8)]);
var inst_37843 = (state_37863[(11)]);
var inst_37841__$1 = (state_37863[(2)]);
var inst_37842 = (inst_37841__$1 == null);
var inst_37843__$1 = cljs.core.not.call(null,inst_37842);
var state_37863__$1 = (function (){var statearr_37882 = state_37863;
(statearr_37882[(8)] = inst_37841__$1);

(statearr_37882[(11)] = inst_37843__$1);

return statearr_37882;
})();
if(inst_37843__$1){
var statearr_37883_37945 = state_37863__$1;
(statearr_37883_37945[(1)] = (15));

} else {
var statearr_37884_37946 = state_37863__$1;
(statearr_37884_37946[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (16))){
var inst_37843 = (state_37863[(11)]);
var state_37863__$1 = state_37863;
var statearr_37885_37947 = state_37863__$1;
(statearr_37885_37947[(2)] = inst_37843);

(statearr_37885_37947[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (10))){
var inst_37835 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
var statearr_37886_37948 = state_37863__$1;
(statearr_37886_37948[(2)] = inst_37835);

(statearr_37886_37948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (18))){
var inst_37846 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
var statearr_37887_37949 = state_37863__$1;
(statearr_37887_37949[(2)] = inst_37846);

(statearr_37887_37949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (8))){
var inst_37832 = cljs.core.async.close_BANG_.call(null,to);
var state_37863__$1 = state_37863;
var statearr_37888_37950 = state_37863__$1;
(statearr_37888_37950[(2)] = inst_37832);

(statearr_37888_37950[(1)] = (10));


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
});})(c__28055__auto__,jobs,results,process,async))
;
return ((function (switch__27943__auto__,c__28055__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0 = (function (){
var statearr_37892 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__);

(statearr_37892[(1)] = (1));

return statearr_37892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1 = (function (state_37863){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_37863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e37893){if((e37893 instanceof Object)){
var ex__27947__auto__ = e37893;
var statearr_37894_37951 = state_37863;
(statearr_37894_37951[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37952 = state_37863;
state_37863 = G__37952;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__ = function(state_37863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1.call(this,state_37863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto__,jobs,results,process,async))
})();
var state__28057__auto__ = (function (){var statearr_37895 = f__28056__auto__.call(null);
(statearr_37895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto__);

return statearr_37895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto__,jobs,results,process,async))
);

return c__28055__auto__;
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
var args37953 = [];
var len__25996__auto___37956 = arguments.length;
var i__25997__auto___37957 = (0);
while(true){
if((i__25997__auto___37957 < len__25996__auto___37956)){
args37953.push((arguments[i__25997__auto___37957]));

var G__37958 = (i__25997__auto___37957 + (1));
i__25997__auto___37957 = G__37958;
continue;
} else {
}
break;
}

var G__37955 = args37953.length;
switch (G__37955) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37953.length)].join('')));

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
var args37960 = [];
var len__25996__auto___37963 = arguments.length;
var i__25997__auto___37964 = (0);
while(true){
if((i__25997__auto___37964 < len__25996__auto___37963)){
args37960.push((arguments[i__25997__auto___37964]));

var G__37965 = (i__25997__auto___37964 + (1));
i__25997__auto___37964 = G__37965;
continue;
} else {
}
break;
}

var G__37962 = args37960.length;
switch (G__37962) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37960.length)].join('')));

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
var args37967 = [];
var len__25996__auto___38020 = arguments.length;
var i__25997__auto___38021 = (0);
while(true){
if((i__25997__auto___38021 < len__25996__auto___38020)){
args37967.push((arguments[i__25997__auto___38021]));

var G__38022 = (i__25997__auto___38021 + (1));
i__25997__auto___38021 = G__38022;
continue;
} else {
}
break;
}

var G__37969 = args37967.length;
switch (G__37969) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37967.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28055__auto___38024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___38024,tc,fc){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___38024,tc,fc){
return (function (state_37995){
var state_val_37996 = (state_37995[(1)]);
if((state_val_37996 === (7))){
var inst_37991 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
var statearr_37997_38025 = state_37995__$1;
(statearr_37997_38025[(2)] = inst_37991);

(statearr_37997_38025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (1))){
var state_37995__$1 = state_37995;
var statearr_37998_38026 = state_37995__$1;
(statearr_37998_38026[(2)] = null);

(statearr_37998_38026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (4))){
var inst_37972 = (state_37995[(7)]);
var inst_37972__$1 = (state_37995[(2)]);
var inst_37973 = (inst_37972__$1 == null);
var state_37995__$1 = (function (){var statearr_37999 = state_37995;
(statearr_37999[(7)] = inst_37972__$1);

return statearr_37999;
})();
if(cljs.core.truth_(inst_37973)){
var statearr_38000_38027 = state_37995__$1;
(statearr_38000_38027[(1)] = (5));

} else {
var statearr_38001_38028 = state_37995__$1;
(statearr_38001_38028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (13))){
var state_37995__$1 = state_37995;
var statearr_38002_38029 = state_37995__$1;
(statearr_38002_38029[(2)] = null);

(statearr_38002_38029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (6))){
var inst_37972 = (state_37995[(7)]);
var inst_37978 = p.call(null,inst_37972);
var state_37995__$1 = state_37995;
if(cljs.core.truth_(inst_37978)){
var statearr_38003_38030 = state_37995__$1;
(statearr_38003_38030[(1)] = (9));

} else {
var statearr_38004_38031 = state_37995__$1;
(statearr_38004_38031[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (3))){
var inst_37993 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37995__$1,inst_37993);
} else {
if((state_val_37996 === (12))){
var state_37995__$1 = state_37995;
var statearr_38005_38032 = state_37995__$1;
(statearr_38005_38032[(2)] = null);

(statearr_38005_38032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (2))){
var state_37995__$1 = state_37995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37995__$1,(4),ch);
} else {
if((state_val_37996 === (11))){
var inst_37972 = (state_37995[(7)]);
var inst_37982 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37995__$1,(8),inst_37982,inst_37972);
} else {
if((state_val_37996 === (9))){
var state_37995__$1 = state_37995;
var statearr_38006_38033 = state_37995__$1;
(statearr_38006_38033[(2)] = tc);

(statearr_38006_38033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (5))){
var inst_37975 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37976 = cljs.core.async.close_BANG_.call(null,fc);
var state_37995__$1 = (function (){var statearr_38007 = state_37995;
(statearr_38007[(8)] = inst_37975);

return statearr_38007;
})();
var statearr_38008_38034 = state_37995__$1;
(statearr_38008_38034[(2)] = inst_37976);

(statearr_38008_38034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (14))){
var inst_37989 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
var statearr_38009_38035 = state_37995__$1;
(statearr_38009_38035[(2)] = inst_37989);

(statearr_38009_38035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (10))){
var state_37995__$1 = state_37995;
var statearr_38010_38036 = state_37995__$1;
(statearr_38010_38036[(2)] = fc);

(statearr_38010_38036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (8))){
var inst_37984 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
if(cljs.core.truth_(inst_37984)){
var statearr_38011_38037 = state_37995__$1;
(statearr_38011_38037[(1)] = (12));

} else {
var statearr_38012_38038 = state_37995__$1;
(statearr_38012_38038[(1)] = (13));

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
});})(c__28055__auto___38024,tc,fc))
;
return ((function (switch__27943__auto__,c__28055__auto___38024,tc,fc){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_38016 = [null,null,null,null,null,null,null,null,null];
(statearr_38016[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_38016[(1)] = (1));

return statearr_38016;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_37995){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_37995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e38017){if((e38017 instanceof Object)){
var ex__27947__auto__ = e38017;
var statearr_38018_38039 = state_37995;
(statearr_38018_38039[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38040 = state_37995;
state_37995 = G__38040;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_37995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_37995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___38024,tc,fc))
})();
var state__28057__auto__ = (function (){var statearr_38019 = f__28056__auto__.call(null);
(statearr_38019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___38024);

return statearr_38019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___38024,tc,fc))
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
var c__28055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto__){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto__){
return (function (state_38104){
var state_val_38105 = (state_38104[(1)]);
if((state_val_38105 === (7))){
var inst_38100 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38106_38127 = state_38104__$1;
(statearr_38106_38127[(2)] = inst_38100);

(statearr_38106_38127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (1))){
var inst_38084 = init;
var state_38104__$1 = (function (){var statearr_38107 = state_38104;
(statearr_38107[(7)] = inst_38084);

return statearr_38107;
})();
var statearr_38108_38128 = state_38104__$1;
(statearr_38108_38128[(2)] = null);

(statearr_38108_38128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (4))){
var inst_38087 = (state_38104[(8)]);
var inst_38087__$1 = (state_38104[(2)]);
var inst_38088 = (inst_38087__$1 == null);
var state_38104__$1 = (function (){var statearr_38109 = state_38104;
(statearr_38109[(8)] = inst_38087__$1);

return statearr_38109;
})();
if(cljs.core.truth_(inst_38088)){
var statearr_38110_38129 = state_38104__$1;
(statearr_38110_38129[(1)] = (5));

} else {
var statearr_38111_38130 = state_38104__$1;
(statearr_38111_38130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (6))){
var inst_38087 = (state_38104[(8)]);
var inst_38091 = (state_38104[(9)]);
var inst_38084 = (state_38104[(7)]);
var inst_38091__$1 = f.call(null,inst_38084,inst_38087);
var inst_38092 = cljs.core.reduced_QMARK_.call(null,inst_38091__$1);
var state_38104__$1 = (function (){var statearr_38112 = state_38104;
(statearr_38112[(9)] = inst_38091__$1);

return statearr_38112;
})();
if(inst_38092){
var statearr_38113_38131 = state_38104__$1;
(statearr_38113_38131[(1)] = (8));

} else {
var statearr_38114_38132 = state_38104__$1;
(statearr_38114_38132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (3))){
var inst_38102 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38104__$1,inst_38102);
} else {
if((state_val_38105 === (2))){
var state_38104__$1 = state_38104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38104__$1,(4),ch);
} else {
if((state_val_38105 === (9))){
var inst_38091 = (state_38104[(9)]);
var inst_38084 = inst_38091;
var state_38104__$1 = (function (){var statearr_38115 = state_38104;
(statearr_38115[(7)] = inst_38084);

return statearr_38115;
})();
var statearr_38116_38133 = state_38104__$1;
(statearr_38116_38133[(2)] = null);

(statearr_38116_38133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (5))){
var inst_38084 = (state_38104[(7)]);
var state_38104__$1 = state_38104;
var statearr_38117_38134 = state_38104__$1;
(statearr_38117_38134[(2)] = inst_38084);

(statearr_38117_38134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (10))){
var inst_38098 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38118_38135 = state_38104__$1;
(statearr_38118_38135[(2)] = inst_38098);

(statearr_38118_38135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (8))){
var inst_38091 = (state_38104[(9)]);
var inst_38094 = cljs.core.deref.call(null,inst_38091);
var state_38104__$1 = state_38104;
var statearr_38119_38136 = state_38104__$1;
(statearr_38119_38136[(2)] = inst_38094);

(statearr_38119_38136[(1)] = (10));


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
});})(c__28055__auto__))
;
return ((function (switch__27943__auto__,c__28055__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27944__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27944__auto____0 = (function (){
var statearr_38123 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38123[(0)] = cljs$core$async$reduce_$_state_machine__27944__auto__);

(statearr_38123[(1)] = (1));

return statearr_38123;
});
var cljs$core$async$reduce_$_state_machine__27944__auto____1 = (function (state_38104){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_38104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e38124){if((e38124 instanceof Object)){
var ex__27947__auto__ = e38124;
var statearr_38125_38137 = state_38104;
(statearr_38125_38137[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38138 = state_38104;
state_38104 = G__38138;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27944__auto__ = function(state_38104){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27944__auto____1.call(this,state_38104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27944__auto____0;
cljs$core$async$reduce_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27944__auto____1;
return cljs$core$async$reduce_$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto__))
})();
var state__28057__auto__ = (function (){var statearr_38126 = f__28056__auto__.call(null);
(statearr_38126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto__);

return statearr_38126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto__))
);

return c__28055__auto__;
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
var args38139 = [];
var len__25996__auto___38191 = arguments.length;
var i__25997__auto___38192 = (0);
while(true){
if((i__25997__auto___38192 < len__25996__auto___38191)){
args38139.push((arguments[i__25997__auto___38192]));

var G__38193 = (i__25997__auto___38192 + (1));
i__25997__auto___38192 = G__38193;
continue;
} else {
}
break;
}

var G__38141 = args38139.length;
switch (G__38141) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38139.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto__){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto__){
return (function (state_38166){
var state_val_38167 = (state_38166[(1)]);
if((state_val_38167 === (7))){
var inst_38148 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
var statearr_38168_38195 = state_38166__$1;
(statearr_38168_38195[(2)] = inst_38148);

(statearr_38168_38195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (1))){
var inst_38142 = cljs.core.seq.call(null,coll);
var inst_38143 = inst_38142;
var state_38166__$1 = (function (){var statearr_38169 = state_38166;
(statearr_38169[(7)] = inst_38143);

return statearr_38169;
})();
var statearr_38170_38196 = state_38166__$1;
(statearr_38170_38196[(2)] = null);

(statearr_38170_38196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (4))){
var inst_38143 = (state_38166[(7)]);
var inst_38146 = cljs.core.first.call(null,inst_38143);
var state_38166__$1 = state_38166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38166__$1,(7),ch,inst_38146);
} else {
if((state_val_38167 === (13))){
var inst_38160 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
var statearr_38171_38197 = state_38166__$1;
(statearr_38171_38197[(2)] = inst_38160);

(statearr_38171_38197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (6))){
var inst_38151 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
if(cljs.core.truth_(inst_38151)){
var statearr_38172_38198 = state_38166__$1;
(statearr_38172_38198[(1)] = (8));

} else {
var statearr_38173_38199 = state_38166__$1;
(statearr_38173_38199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (3))){
var inst_38164 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38166__$1,inst_38164);
} else {
if((state_val_38167 === (12))){
var state_38166__$1 = state_38166;
var statearr_38174_38200 = state_38166__$1;
(statearr_38174_38200[(2)] = null);

(statearr_38174_38200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (2))){
var inst_38143 = (state_38166[(7)]);
var state_38166__$1 = state_38166;
if(cljs.core.truth_(inst_38143)){
var statearr_38175_38201 = state_38166__$1;
(statearr_38175_38201[(1)] = (4));

} else {
var statearr_38176_38202 = state_38166__$1;
(statearr_38176_38202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (11))){
var inst_38157 = cljs.core.async.close_BANG_.call(null,ch);
var state_38166__$1 = state_38166;
var statearr_38177_38203 = state_38166__$1;
(statearr_38177_38203[(2)] = inst_38157);

(statearr_38177_38203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (9))){
var state_38166__$1 = state_38166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38178_38204 = state_38166__$1;
(statearr_38178_38204[(1)] = (11));

} else {
var statearr_38179_38205 = state_38166__$1;
(statearr_38179_38205[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (5))){
var inst_38143 = (state_38166[(7)]);
var state_38166__$1 = state_38166;
var statearr_38180_38206 = state_38166__$1;
(statearr_38180_38206[(2)] = inst_38143);

(statearr_38180_38206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (10))){
var inst_38162 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
var statearr_38181_38207 = state_38166__$1;
(statearr_38181_38207[(2)] = inst_38162);

(statearr_38181_38207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (8))){
var inst_38143 = (state_38166[(7)]);
var inst_38153 = cljs.core.next.call(null,inst_38143);
var inst_38143__$1 = inst_38153;
var state_38166__$1 = (function (){var statearr_38182 = state_38166;
(statearr_38182[(7)] = inst_38143__$1);

return statearr_38182;
})();
var statearr_38183_38208 = state_38166__$1;
(statearr_38183_38208[(2)] = null);

(statearr_38183_38208[(1)] = (2));


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
});})(c__28055__auto__))
;
return ((function (switch__27943__auto__,c__28055__auto__){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_38187 = [null,null,null,null,null,null,null,null];
(statearr_38187[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_38187[(1)] = (1));

return statearr_38187;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_38166){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_38166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e38188){if((e38188 instanceof Object)){
var ex__27947__auto__ = e38188;
var statearr_38189_38209 = state_38166;
(statearr_38189_38209[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38210 = state_38166;
state_38166 = G__38210;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_38166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_38166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto__))
})();
var state__28057__auto__ = (function (){var statearr_38190 = f__28056__auto__.call(null);
(statearr_38190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto__);

return statearr_38190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto__))
);

return c__28055__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async38436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38436 = (function (ch,cs,meta38437){
this.ch = ch;
this.cs = cs;
this.meta38437 = meta38437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38438,meta38437__$1){
var self__ = this;
var _38438__$1 = this;
return (new cljs.core.async.t_cljs$core$async38436(self__.ch,self__.cs,meta38437__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38438){
var self__ = this;
var _38438__$1 = this;
return self__.meta38437;
});})(cs))
;

cljs.core.async.t_cljs$core$async38436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38436.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38436.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38436.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38436.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38436.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38437","meta38437",-356485667,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38436";

cljs.core.async.t_cljs$core$async38436.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async38436");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38436 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38436(ch__$1,cs__$1,meta38437){
return (new cljs.core.async.t_cljs$core$async38436(ch__$1,cs__$1,meta38437));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38436(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28055__auto___38661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___38661,cs,m,dchan,dctr,done){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___38661,cs,m,dchan,dctr,done){
return (function (state_38573){
var state_val_38574 = (state_38573[(1)]);
if((state_val_38574 === (7))){
var inst_38569 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38575_38662 = state_38573__$1;
(statearr_38575_38662[(2)] = inst_38569);

(statearr_38575_38662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (20))){
var inst_38472 = (state_38573[(7)]);
var inst_38484 = cljs.core.first.call(null,inst_38472);
var inst_38485 = cljs.core.nth.call(null,inst_38484,(0),null);
var inst_38486 = cljs.core.nth.call(null,inst_38484,(1),null);
var state_38573__$1 = (function (){var statearr_38576 = state_38573;
(statearr_38576[(8)] = inst_38485);

return statearr_38576;
})();
if(cljs.core.truth_(inst_38486)){
var statearr_38577_38663 = state_38573__$1;
(statearr_38577_38663[(1)] = (22));

} else {
var statearr_38578_38664 = state_38573__$1;
(statearr_38578_38664[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (27))){
var inst_38441 = (state_38573[(9)]);
var inst_38514 = (state_38573[(10)]);
var inst_38521 = (state_38573[(11)]);
var inst_38516 = (state_38573[(12)]);
var inst_38521__$1 = cljs.core._nth.call(null,inst_38514,inst_38516);
var inst_38522 = cljs.core.async.put_BANG_.call(null,inst_38521__$1,inst_38441,done);
var state_38573__$1 = (function (){var statearr_38579 = state_38573;
(statearr_38579[(11)] = inst_38521__$1);

return statearr_38579;
})();
if(cljs.core.truth_(inst_38522)){
var statearr_38580_38665 = state_38573__$1;
(statearr_38580_38665[(1)] = (30));

} else {
var statearr_38581_38666 = state_38573__$1;
(statearr_38581_38666[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (1))){
var state_38573__$1 = state_38573;
var statearr_38582_38667 = state_38573__$1;
(statearr_38582_38667[(2)] = null);

(statearr_38582_38667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (24))){
var inst_38472 = (state_38573[(7)]);
var inst_38491 = (state_38573[(2)]);
var inst_38492 = cljs.core.next.call(null,inst_38472);
var inst_38450 = inst_38492;
var inst_38451 = null;
var inst_38452 = (0);
var inst_38453 = (0);
var state_38573__$1 = (function (){var statearr_38583 = state_38573;
(statearr_38583[(13)] = inst_38452);

(statearr_38583[(14)] = inst_38453);

(statearr_38583[(15)] = inst_38491);

(statearr_38583[(16)] = inst_38451);

(statearr_38583[(17)] = inst_38450);

return statearr_38583;
})();
var statearr_38584_38668 = state_38573__$1;
(statearr_38584_38668[(2)] = null);

(statearr_38584_38668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (39))){
var state_38573__$1 = state_38573;
var statearr_38588_38669 = state_38573__$1;
(statearr_38588_38669[(2)] = null);

(statearr_38588_38669[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (4))){
var inst_38441 = (state_38573[(9)]);
var inst_38441__$1 = (state_38573[(2)]);
var inst_38442 = (inst_38441__$1 == null);
var state_38573__$1 = (function (){var statearr_38589 = state_38573;
(statearr_38589[(9)] = inst_38441__$1);

return statearr_38589;
})();
if(cljs.core.truth_(inst_38442)){
var statearr_38590_38670 = state_38573__$1;
(statearr_38590_38670[(1)] = (5));

} else {
var statearr_38591_38671 = state_38573__$1;
(statearr_38591_38671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (15))){
var inst_38452 = (state_38573[(13)]);
var inst_38453 = (state_38573[(14)]);
var inst_38451 = (state_38573[(16)]);
var inst_38450 = (state_38573[(17)]);
var inst_38468 = (state_38573[(2)]);
var inst_38469 = (inst_38453 + (1));
var tmp38585 = inst_38452;
var tmp38586 = inst_38451;
var tmp38587 = inst_38450;
var inst_38450__$1 = tmp38587;
var inst_38451__$1 = tmp38586;
var inst_38452__$1 = tmp38585;
var inst_38453__$1 = inst_38469;
var state_38573__$1 = (function (){var statearr_38592 = state_38573;
(statearr_38592[(13)] = inst_38452__$1);

(statearr_38592[(18)] = inst_38468);

(statearr_38592[(14)] = inst_38453__$1);

(statearr_38592[(16)] = inst_38451__$1);

(statearr_38592[(17)] = inst_38450__$1);

return statearr_38592;
})();
var statearr_38593_38672 = state_38573__$1;
(statearr_38593_38672[(2)] = null);

(statearr_38593_38672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (21))){
var inst_38495 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38597_38673 = state_38573__$1;
(statearr_38597_38673[(2)] = inst_38495);

(statearr_38597_38673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (31))){
var inst_38521 = (state_38573[(11)]);
var inst_38525 = done.call(null,null);
var inst_38526 = cljs.core.async.untap_STAR_.call(null,m,inst_38521);
var state_38573__$1 = (function (){var statearr_38598 = state_38573;
(statearr_38598[(19)] = inst_38525);

return statearr_38598;
})();
var statearr_38599_38674 = state_38573__$1;
(statearr_38599_38674[(2)] = inst_38526);

(statearr_38599_38674[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (32))){
var inst_38514 = (state_38573[(10)]);
var inst_38515 = (state_38573[(20)]);
var inst_38513 = (state_38573[(21)]);
var inst_38516 = (state_38573[(12)]);
var inst_38528 = (state_38573[(2)]);
var inst_38529 = (inst_38516 + (1));
var tmp38594 = inst_38514;
var tmp38595 = inst_38515;
var tmp38596 = inst_38513;
var inst_38513__$1 = tmp38596;
var inst_38514__$1 = tmp38594;
var inst_38515__$1 = tmp38595;
var inst_38516__$1 = inst_38529;
var state_38573__$1 = (function (){var statearr_38600 = state_38573;
(statearr_38600[(10)] = inst_38514__$1);

(statearr_38600[(20)] = inst_38515__$1);

(statearr_38600[(21)] = inst_38513__$1);

(statearr_38600[(22)] = inst_38528);

(statearr_38600[(12)] = inst_38516__$1);

return statearr_38600;
})();
var statearr_38601_38675 = state_38573__$1;
(statearr_38601_38675[(2)] = null);

(statearr_38601_38675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (40))){
var inst_38541 = (state_38573[(23)]);
var inst_38545 = done.call(null,null);
var inst_38546 = cljs.core.async.untap_STAR_.call(null,m,inst_38541);
var state_38573__$1 = (function (){var statearr_38602 = state_38573;
(statearr_38602[(24)] = inst_38545);

return statearr_38602;
})();
var statearr_38603_38676 = state_38573__$1;
(statearr_38603_38676[(2)] = inst_38546);

(statearr_38603_38676[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (33))){
var inst_38532 = (state_38573[(25)]);
var inst_38534 = cljs.core.chunked_seq_QMARK_.call(null,inst_38532);
var state_38573__$1 = state_38573;
if(inst_38534){
var statearr_38604_38677 = state_38573__$1;
(statearr_38604_38677[(1)] = (36));

} else {
var statearr_38605_38678 = state_38573__$1;
(statearr_38605_38678[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (13))){
var inst_38462 = (state_38573[(26)]);
var inst_38465 = cljs.core.async.close_BANG_.call(null,inst_38462);
var state_38573__$1 = state_38573;
var statearr_38606_38679 = state_38573__$1;
(statearr_38606_38679[(2)] = inst_38465);

(statearr_38606_38679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (22))){
var inst_38485 = (state_38573[(8)]);
var inst_38488 = cljs.core.async.close_BANG_.call(null,inst_38485);
var state_38573__$1 = state_38573;
var statearr_38607_38680 = state_38573__$1;
(statearr_38607_38680[(2)] = inst_38488);

(statearr_38607_38680[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (36))){
var inst_38532 = (state_38573[(25)]);
var inst_38536 = cljs.core.chunk_first.call(null,inst_38532);
var inst_38537 = cljs.core.chunk_rest.call(null,inst_38532);
var inst_38538 = cljs.core.count.call(null,inst_38536);
var inst_38513 = inst_38537;
var inst_38514 = inst_38536;
var inst_38515 = inst_38538;
var inst_38516 = (0);
var state_38573__$1 = (function (){var statearr_38608 = state_38573;
(statearr_38608[(10)] = inst_38514);

(statearr_38608[(20)] = inst_38515);

(statearr_38608[(21)] = inst_38513);

(statearr_38608[(12)] = inst_38516);

return statearr_38608;
})();
var statearr_38609_38681 = state_38573__$1;
(statearr_38609_38681[(2)] = null);

(statearr_38609_38681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (41))){
var inst_38532 = (state_38573[(25)]);
var inst_38548 = (state_38573[(2)]);
var inst_38549 = cljs.core.next.call(null,inst_38532);
var inst_38513 = inst_38549;
var inst_38514 = null;
var inst_38515 = (0);
var inst_38516 = (0);
var state_38573__$1 = (function (){var statearr_38610 = state_38573;
(statearr_38610[(27)] = inst_38548);

(statearr_38610[(10)] = inst_38514);

(statearr_38610[(20)] = inst_38515);

(statearr_38610[(21)] = inst_38513);

(statearr_38610[(12)] = inst_38516);

return statearr_38610;
})();
var statearr_38611_38682 = state_38573__$1;
(statearr_38611_38682[(2)] = null);

(statearr_38611_38682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (43))){
var state_38573__$1 = state_38573;
var statearr_38612_38683 = state_38573__$1;
(statearr_38612_38683[(2)] = null);

(statearr_38612_38683[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (29))){
var inst_38557 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38613_38684 = state_38573__$1;
(statearr_38613_38684[(2)] = inst_38557);

(statearr_38613_38684[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (44))){
var inst_38566 = (state_38573[(2)]);
var state_38573__$1 = (function (){var statearr_38614 = state_38573;
(statearr_38614[(28)] = inst_38566);

return statearr_38614;
})();
var statearr_38615_38685 = state_38573__$1;
(statearr_38615_38685[(2)] = null);

(statearr_38615_38685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (6))){
var inst_38505 = (state_38573[(29)]);
var inst_38504 = cljs.core.deref.call(null,cs);
var inst_38505__$1 = cljs.core.keys.call(null,inst_38504);
var inst_38506 = cljs.core.count.call(null,inst_38505__$1);
var inst_38507 = cljs.core.reset_BANG_.call(null,dctr,inst_38506);
var inst_38512 = cljs.core.seq.call(null,inst_38505__$1);
var inst_38513 = inst_38512;
var inst_38514 = null;
var inst_38515 = (0);
var inst_38516 = (0);
var state_38573__$1 = (function (){var statearr_38616 = state_38573;
(statearr_38616[(30)] = inst_38507);

(statearr_38616[(10)] = inst_38514);

(statearr_38616[(20)] = inst_38515);

(statearr_38616[(21)] = inst_38513);

(statearr_38616[(12)] = inst_38516);

(statearr_38616[(29)] = inst_38505__$1);

return statearr_38616;
})();
var statearr_38617_38686 = state_38573__$1;
(statearr_38617_38686[(2)] = null);

(statearr_38617_38686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (28))){
var inst_38532 = (state_38573[(25)]);
var inst_38513 = (state_38573[(21)]);
var inst_38532__$1 = cljs.core.seq.call(null,inst_38513);
var state_38573__$1 = (function (){var statearr_38618 = state_38573;
(statearr_38618[(25)] = inst_38532__$1);

return statearr_38618;
})();
if(inst_38532__$1){
var statearr_38619_38687 = state_38573__$1;
(statearr_38619_38687[(1)] = (33));

} else {
var statearr_38620_38688 = state_38573__$1;
(statearr_38620_38688[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (25))){
var inst_38515 = (state_38573[(20)]);
var inst_38516 = (state_38573[(12)]);
var inst_38518 = (inst_38516 < inst_38515);
var inst_38519 = inst_38518;
var state_38573__$1 = state_38573;
if(cljs.core.truth_(inst_38519)){
var statearr_38621_38689 = state_38573__$1;
(statearr_38621_38689[(1)] = (27));

} else {
var statearr_38622_38690 = state_38573__$1;
(statearr_38622_38690[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (34))){
var state_38573__$1 = state_38573;
var statearr_38623_38691 = state_38573__$1;
(statearr_38623_38691[(2)] = null);

(statearr_38623_38691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (17))){
var state_38573__$1 = state_38573;
var statearr_38624_38692 = state_38573__$1;
(statearr_38624_38692[(2)] = null);

(statearr_38624_38692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (3))){
var inst_38571 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38573__$1,inst_38571);
} else {
if((state_val_38574 === (12))){
var inst_38500 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38625_38693 = state_38573__$1;
(statearr_38625_38693[(2)] = inst_38500);

(statearr_38625_38693[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (2))){
var state_38573__$1 = state_38573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38573__$1,(4),ch);
} else {
if((state_val_38574 === (23))){
var state_38573__$1 = state_38573;
var statearr_38626_38694 = state_38573__$1;
(statearr_38626_38694[(2)] = null);

(statearr_38626_38694[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (35))){
var inst_38555 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38627_38695 = state_38573__$1;
(statearr_38627_38695[(2)] = inst_38555);

(statearr_38627_38695[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (19))){
var inst_38472 = (state_38573[(7)]);
var inst_38476 = cljs.core.chunk_first.call(null,inst_38472);
var inst_38477 = cljs.core.chunk_rest.call(null,inst_38472);
var inst_38478 = cljs.core.count.call(null,inst_38476);
var inst_38450 = inst_38477;
var inst_38451 = inst_38476;
var inst_38452 = inst_38478;
var inst_38453 = (0);
var state_38573__$1 = (function (){var statearr_38628 = state_38573;
(statearr_38628[(13)] = inst_38452);

(statearr_38628[(14)] = inst_38453);

(statearr_38628[(16)] = inst_38451);

(statearr_38628[(17)] = inst_38450);

return statearr_38628;
})();
var statearr_38629_38696 = state_38573__$1;
(statearr_38629_38696[(2)] = null);

(statearr_38629_38696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (11))){
var inst_38472 = (state_38573[(7)]);
var inst_38450 = (state_38573[(17)]);
var inst_38472__$1 = cljs.core.seq.call(null,inst_38450);
var state_38573__$1 = (function (){var statearr_38630 = state_38573;
(statearr_38630[(7)] = inst_38472__$1);

return statearr_38630;
})();
if(inst_38472__$1){
var statearr_38631_38697 = state_38573__$1;
(statearr_38631_38697[(1)] = (16));

} else {
var statearr_38632_38698 = state_38573__$1;
(statearr_38632_38698[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (9))){
var inst_38502 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38633_38699 = state_38573__$1;
(statearr_38633_38699[(2)] = inst_38502);

(statearr_38633_38699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (5))){
var inst_38448 = cljs.core.deref.call(null,cs);
var inst_38449 = cljs.core.seq.call(null,inst_38448);
var inst_38450 = inst_38449;
var inst_38451 = null;
var inst_38452 = (0);
var inst_38453 = (0);
var state_38573__$1 = (function (){var statearr_38634 = state_38573;
(statearr_38634[(13)] = inst_38452);

(statearr_38634[(14)] = inst_38453);

(statearr_38634[(16)] = inst_38451);

(statearr_38634[(17)] = inst_38450);

return statearr_38634;
})();
var statearr_38635_38700 = state_38573__$1;
(statearr_38635_38700[(2)] = null);

(statearr_38635_38700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (14))){
var state_38573__$1 = state_38573;
var statearr_38636_38701 = state_38573__$1;
(statearr_38636_38701[(2)] = null);

(statearr_38636_38701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (45))){
var inst_38563 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38637_38702 = state_38573__$1;
(statearr_38637_38702[(2)] = inst_38563);

(statearr_38637_38702[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (26))){
var inst_38505 = (state_38573[(29)]);
var inst_38559 = (state_38573[(2)]);
var inst_38560 = cljs.core.seq.call(null,inst_38505);
var state_38573__$1 = (function (){var statearr_38638 = state_38573;
(statearr_38638[(31)] = inst_38559);

return statearr_38638;
})();
if(inst_38560){
var statearr_38639_38703 = state_38573__$1;
(statearr_38639_38703[(1)] = (42));

} else {
var statearr_38640_38704 = state_38573__$1;
(statearr_38640_38704[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (16))){
var inst_38472 = (state_38573[(7)]);
var inst_38474 = cljs.core.chunked_seq_QMARK_.call(null,inst_38472);
var state_38573__$1 = state_38573;
if(inst_38474){
var statearr_38641_38705 = state_38573__$1;
(statearr_38641_38705[(1)] = (19));

} else {
var statearr_38642_38706 = state_38573__$1;
(statearr_38642_38706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (38))){
var inst_38552 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38643_38707 = state_38573__$1;
(statearr_38643_38707[(2)] = inst_38552);

(statearr_38643_38707[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (30))){
var state_38573__$1 = state_38573;
var statearr_38644_38708 = state_38573__$1;
(statearr_38644_38708[(2)] = null);

(statearr_38644_38708[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (10))){
var inst_38453 = (state_38573[(14)]);
var inst_38451 = (state_38573[(16)]);
var inst_38461 = cljs.core._nth.call(null,inst_38451,inst_38453);
var inst_38462 = cljs.core.nth.call(null,inst_38461,(0),null);
var inst_38463 = cljs.core.nth.call(null,inst_38461,(1),null);
var state_38573__$1 = (function (){var statearr_38645 = state_38573;
(statearr_38645[(26)] = inst_38462);

return statearr_38645;
})();
if(cljs.core.truth_(inst_38463)){
var statearr_38646_38709 = state_38573__$1;
(statearr_38646_38709[(1)] = (13));

} else {
var statearr_38647_38710 = state_38573__$1;
(statearr_38647_38710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (18))){
var inst_38498 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38648_38711 = state_38573__$1;
(statearr_38648_38711[(2)] = inst_38498);

(statearr_38648_38711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (42))){
var state_38573__$1 = state_38573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38573__$1,(45),dchan);
} else {
if((state_val_38574 === (37))){
var inst_38541 = (state_38573[(23)]);
var inst_38441 = (state_38573[(9)]);
var inst_38532 = (state_38573[(25)]);
var inst_38541__$1 = cljs.core.first.call(null,inst_38532);
var inst_38542 = cljs.core.async.put_BANG_.call(null,inst_38541__$1,inst_38441,done);
var state_38573__$1 = (function (){var statearr_38649 = state_38573;
(statearr_38649[(23)] = inst_38541__$1);

return statearr_38649;
})();
if(cljs.core.truth_(inst_38542)){
var statearr_38650_38712 = state_38573__$1;
(statearr_38650_38712[(1)] = (39));

} else {
var statearr_38651_38713 = state_38573__$1;
(statearr_38651_38713[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (8))){
var inst_38452 = (state_38573[(13)]);
var inst_38453 = (state_38573[(14)]);
var inst_38455 = (inst_38453 < inst_38452);
var inst_38456 = inst_38455;
var state_38573__$1 = state_38573;
if(cljs.core.truth_(inst_38456)){
var statearr_38652_38714 = state_38573__$1;
(statearr_38652_38714[(1)] = (10));

} else {
var statearr_38653_38715 = state_38573__$1;
(statearr_38653_38715[(1)] = (11));

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
});})(c__28055__auto___38661,cs,m,dchan,dctr,done))
;
return ((function (switch__27943__auto__,c__28055__auto___38661,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27944__auto__ = null;
var cljs$core$async$mult_$_state_machine__27944__auto____0 = (function (){
var statearr_38657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38657[(0)] = cljs$core$async$mult_$_state_machine__27944__auto__);

(statearr_38657[(1)] = (1));

return statearr_38657;
});
var cljs$core$async$mult_$_state_machine__27944__auto____1 = (function (state_38573){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_38573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e38658){if((e38658 instanceof Object)){
var ex__27947__auto__ = e38658;
var statearr_38659_38716 = state_38573;
(statearr_38659_38716[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38717 = state_38573;
state_38573 = G__38717;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27944__auto__ = function(state_38573){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27944__auto____1.call(this,state_38573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27944__auto____0;
cljs$core$async$mult_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27944__auto____1;
return cljs$core$async$mult_$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___38661,cs,m,dchan,dctr,done))
})();
var state__28057__auto__ = (function (){var statearr_38660 = f__28056__auto__.call(null);
(statearr_38660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___38661);

return statearr_38660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___38661,cs,m,dchan,dctr,done))
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
var args38718 = [];
var len__25996__auto___38721 = arguments.length;
var i__25997__auto___38722 = (0);
while(true){
if((i__25997__auto___38722 < len__25996__auto___38721)){
args38718.push((arguments[i__25997__auto___38722]));

var G__38723 = (i__25997__auto___38722 + (1));
i__25997__auto___38722 = G__38723;
continue;
} else {
}
break;
}

var G__38720 = args38718.length;
switch (G__38720) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38718.length)].join('')));

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
var len__25996__auto___38735 = arguments.length;
var i__25997__auto___38736 = (0);
while(true){
if((i__25997__auto___38736 < len__25996__auto___38735)){
args__26003__auto__.push((arguments[i__25997__auto___38736]));

var G__38737 = (i__25997__auto___38736 + (1));
i__25997__auto___38736 = G__38737;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((3) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26004__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38729){
var map__38730 = p__38729;
var map__38730__$1 = ((((!((map__38730 == null)))?((((map__38730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38730):map__38730);
var opts = map__38730__$1;
var statearr_38732_38738 = state;
(statearr_38732_38738[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38730,map__38730__$1,opts){
return (function (val){
var statearr_38733_38739 = state;
(statearr_38733_38739[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38730,map__38730__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38734_38740 = state;
(statearr_38734_38740[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38725){
var G__38726 = cljs.core.first.call(null,seq38725);
var seq38725__$1 = cljs.core.next.call(null,seq38725);
var G__38727 = cljs.core.first.call(null,seq38725__$1);
var seq38725__$2 = cljs.core.next.call(null,seq38725__$1);
var G__38728 = cljs.core.first.call(null,seq38725__$2);
var seq38725__$3 = cljs.core.next.call(null,seq38725__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38726,G__38727,G__38728,seq38725__$3);
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
if(typeof cljs.core.async.t_cljs$core$async38908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38908 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38909){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38909 = meta38909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38910,meta38909__$1){
var self__ = this;
var _38910__$1 = this;
return (new cljs.core.async.t_cljs$core$async38908(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38909__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38910){
var self__ = this;
var _38910__$1 = this;
return self__.meta38909;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async38908.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38909","meta38909",1450003079,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38908";

cljs.core.async.t_cljs$core$async38908.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async38908");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38908 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38908(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38909){
return (new cljs.core.async.t_cljs$core$async38908(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38909));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38908(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28055__auto___39075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___39075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___39075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39012){
var state_val_39013 = (state_39012[(1)]);
if((state_val_39013 === (7))){
var inst_38927 = (state_39012[(2)]);
var state_39012__$1 = state_39012;
var statearr_39014_39076 = state_39012__$1;
(statearr_39014_39076[(2)] = inst_38927);

(statearr_39014_39076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (20))){
var inst_38939 = (state_39012[(7)]);
var state_39012__$1 = state_39012;
var statearr_39015_39077 = state_39012__$1;
(statearr_39015_39077[(2)] = inst_38939);

(statearr_39015_39077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (27))){
var state_39012__$1 = state_39012;
var statearr_39016_39078 = state_39012__$1;
(statearr_39016_39078[(2)] = null);

(statearr_39016_39078[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (1))){
var inst_38914 = (state_39012[(8)]);
var inst_38914__$1 = calc_state.call(null);
var inst_38916 = (inst_38914__$1 == null);
var inst_38917 = cljs.core.not.call(null,inst_38916);
var state_39012__$1 = (function (){var statearr_39017 = state_39012;
(statearr_39017[(8)] = inst_38914__$1);

return statearr_39017;
})();
if(inst_38917){
var statearr_39018_39079 = state_39012__$1;
(statearr_39018_39079[(1)] = (2));

} else {
var statearr_39019_39080 = state_39012__$1;
(statearr_39019_39080[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (24))){
var inst_38963 = (state_39012[(9)]);
var inst_38972 = (state_39012[(10)]);
var inst_38986 = (state_39012[(11)]);
var inst_38986__$1 = inst_38963.call(null,inst_38972);
var state_39012__$1 = (function (){var statearr_39020 = state_39012;
(statearr_39020[(11)] = inst_38986__$1);

return statearr_39020;
})();
if(cljs.core.truth_(inst_38986__$1)){
var statearr_39021_39081 = state_39012__$1;
(statearr_39021_39081[(1)] = (29));

} else {
var statearr_39022_39082 = state_39012__$1;
(statearr_39022_39082[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (4))){
var inst_38930 = (state_39012[(2)]);
var state_39012__$1 = state_39012;
if(cljs.core.truth_(inst_38930)){
var statearr_39023_39083 = state_39012__$1;
(statearr_39023_39083[(1)] = (8));

} else {
var statearr_39024_39084 = state_39012__$1;
(statearr_39024_39084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (15))){
var inst_38957 = (state_39012[(2)]);
var state_39012__$1 = state_39012;
if(cljs.core.truth_(inst_38957)){
var statearr_39025_39085 = state_39012__$1;
(statearr_39025_39085[(1)] = (19));

} else {
var statearr_39026_39086 = state_39012__$1;
(statearr_39026_39086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (21))){
var inst_38962 = (state_39012[(12)]);
var inst_38962__$1 = (state_39012[(2)]);
var inst_38963 = cljs.core.get.call(null,inst_38962__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38964 = cljs.core.get.call(null,inst_38962__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38965 = cljs.core.get.call(null,inst_38962__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39012__$1 = (function (){var statearr_39027 = state_39012;
(statearr_39027[(9)] = inst_38963);

(statearr_39027[(13)] = inst_38964);

(statearr_39027[(12)] = inst_38962__$1);

return statearr_39027;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39012__$1,(22),inst_38965);
} else {
if((state_val_39013 === (31))){
var inst_38994 = (state_39012[(2)]);
var state_39012__$1 = state_39012;
if(cljs.core.truth_(inst_38994)){
var statearr_39028_39087 = state_39012__$1;
(statearr_39028_39087[(1)] = (32));

} else {
var statearr_39029_39088 = state_39012__$1;
(statearr_39029_39088[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (32))){
var inst_38971 = (state_39012[(14)]);
var state_39012__$1 = state_39012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39012__$1,(35),out,inst_38971);
} else {
if((state_val_39013 === (33))){
var inst_38962 = (state_39012[(12)]);
var inst_38939 = inst_38962;
var state_39012__$1 = (function (){var statearr_39030 = state_39012;
(statearr_39030[(7)] = inst_38939);

return statearr_39030;
})();
var statearr_39031_39089 = state_39012__$1;
(statearr_39031_39089[(2)] = null);

(statearr_39031_39089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (13))){
var inst_38939 = (state_39012[(7)]);
var inst_38946 = inst_38939.cljs$lang$protocol_mask$partition0$;
var inst_38947 = (inst_38946 & (64));
var inst_38948 = inst_38939.cljs$core$ISeq$;
var inst_38949 = (cljs.core.PROTOCOL_SENTINEL === inst_38948);
var inst_38950 = (inst_38947) || (inst_38949);
var state_39012__$1 = state_39012;
if(cljs.core.truth_(inst_38950)){
var statearr_39032_39090 = state_39012__$1;
(statearr_39032_39090[(1)] = (16));

} else {
var statearr_39033_39091 = state_39012__$1;
(statearr_39033_39091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (22))){
var inst_38972 = (state_39012[(10)]);
var inst_38971 = (state_39012[(14)]);
var inst_38970 = (state_39012[(2)]);
var inst_38971__$1 = cljs.core.nth.call(null,inst_38970,(0),null);
var inst_38972__$1 = cljs.core.nth.call(null,inst_38970,(1),null);
var inst_38973 = (inst_38971__$1 == null);
var inst_38974 = cljs.core._EQ_.call(null,inst_38972__$1,change);
var inst_38975 = (inst_38973) || (inst_38974);
var state_39012__$1 = (function (){var statearr_39034 = state_39012;
(statearr_39034[(10)] = inst_38972__$1);

(statearr_39034[(14)] = inst_38971__$1);

return statearr_39034;
})();
if(cljs.core.truth_(inst_38975)){
var statearr_39035_39092 = state_39012__$1;
(statearr_39035_39092[(1)] = (23));

} else {
var statearr_39036_39093 = state_39012__$1;
(statearr_39036_39093[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (36))){
var inst_38962 = (state_39012[(12)]);
var inst_38939 = inst_38962;
var state_39012__$1 = (function (){var statearr_39037 = state_39012;
(statearr_39037[(7)] = inst_38939);

return statearr_39037;
})();
var statearr_39038_39094 = state_39012__$1;
(statearr_39038_39094[(2)] = null);

(statearr_39038_39094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (29))){
var inst_38986 = (state_39012[(11)]);
var state_39012__$1 = state_39012;
var statearr_39039_39095 = state_39012__$1;
(statearr_39039_39095[(2)] = inst_38986);

(statearr_39039_39095[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (6))){
var state_39012__$1 = state_39012;
var statearr_39040_39096 = state_39012__$1;
(statearr_39040_39096[(2)] = false);

(statearr_39040_39096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (28))){
var inst_38982 = (state_39012[(2)]);
var inst_38983 = calc_state.call(null);
var inst_38939 = inst_38983;
var state_39012__$1 = (function (){var statearr_39041 = state_39012;
(statearr_39041[(7)] = inst_38939);

(statearr_39041[(15)] = inst_38982);

return statearr_39041;
})();
var statearr_39042_39097 = state_39012__$1;
(statearr_39042_39097[(2)] = null);

(statearr_39042_39097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (25))){
var inst_39008 = (state_39012[(2)]);
var state_39012__$1 = state_39012;
var statearr_39043_39098 = state_39012__$1;
(statearr_39043_39098[(2)] = inst_39008);

(statearr_39043_39098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (34))){
var inst_39006 = (state_39012[(2)]);
var state_39012__$1 = state_39012;
var statearr_39044_39099 = state_39012__$1;
(statearr_39044_39099[(2)] = inst_39006);

(statearr_39044_39099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (17))){
var state_39012__$1 = state_39012;
var statearr_39045_39100 = state_39012__$1;
(statearr_39045_39100[(2)] = false);

(statearr_39045_39100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (3))){
var state_39012__$1 = state_39012;
var statearr_39046_39101 = state_39012__$1;
(statearr_39046_39101[(2)] = false);

(statearr_39046_39101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (12))){
var inst_39010 = (state_39012[(2)]);
var state_39012__$1 = state_39012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39012__$1,inst_39010);
} else {
if((state_val_39013 === (2))){
var inst_38914 = (state_39012[(8)]);
var inst_38919 = inst_38914.cljs$lang$protocol_mask$partition0$;
var inst_38920 = (inst_38919 & (64));
var inst_38921 = inst_38914.cljs$core$ISeq$;
var inst_38922 = (cljs.core.PROTOCOL_SENTINEL === inst_38921);
var inst_38923 = (inst_38920) || (inst_38922);
var state_39012__$1 = state_39012;
if(cljs.core.truth_(inst_38923)){
var statearr_39047_39102 = state_39012__$1;
(statearr_39047_39102[(1)] = (5));

} else {
var statearr_39048_39103 = state_39012__$1;
(statearr_39048_39103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (23))){
var inst_38971 = (state_39012[(14)]);
var inst_38977 = (inst_38971 == null);
var state_39012__$1 = state_39012;
if(cljs.core.truth_(inst_38977)){
var statearr_39049_39104 = state_39012__$1;
(statearr_39049_39104[(1)] = (26));

} else {
var statearr_39050_39105 = state_39012__$1;
(statearr_39050_39105[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (35))){
var inst_38997 = (state_39012[(2)]);
var state_39012__$1 = state_39012;
if(cljs.core.truth_(inst_38997)){
var statearr_39051_39106 = state_39012__$1;
(statearr_39051_39106[(1)] = (36));

} else {
var statearr_39052_39107 = state_39012__$1;
(statearr_39052_39107[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (19))){
var inst_38939 = (state_39012[(7)]);
var inst_38959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38939);
var state_39012__$1 = state_39012;
var statearr_39053_39108 = state_39012__$1;
(statearr_39053_39108[(2)] = inst_38959);

(statearr_39053_39108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (11))){
var inst_38939 = (state_39012[(7)]);
var inst_38943 = (inst_38939 == null);
var inst_38944 = cljs.core.not.call(null,inst_38943);
var state_39012__$1 = state_39012;
if(inst_38944){
var statearr_39054_39109 = state_39012__$1;
(statearr_39054_39109[(1)] = (13));

} else {
var statearr_39055_39110 = state_39012__$1;
(statearr_39055_39110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (9))){
var inst_38914 = (state_39012[(8)]);
var state_39012__$1 = state_39012;
var statearr_39056_39111 = state_39012__$1;
(statearr_39056_39111[(2)] = inst_38914);

(statearr_39056_39111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (5))){
var state_39012__$1 = state_39012;
var statearr_39057_39112 = state_39012__$1;
(statearr_39057_39112[(2)] = true);

(statearr_39057_39112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (14))){
var state_39012__$1 = state_39012;
var statearr_39058_39113 = state_39012__$1;
(statearr_39058_39113[(2)] = false);

(statearr_39058_39113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (26))){
var inst_38972 = (state_39012[(10)]);
var inst_38979 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38972);
var state_39012__$1 = state_39012;
var statearr_39059_39114 = state_39012__$1;
(statearr_39059_39114[(2)] = inst_38979);

(statearr_39059_39114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (16))){
var state_39012__$1 = state_39012;
var statearr_39060_39115 = state_39012__$1;
(statearr_39060_39115[(2)] = true);

(statearr_39060_39115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (38))){
var inst_39002 = (state_39012[(2)]);
var state_39012__$1 = state_39012;
var statearr_39061_39116 = state_39012__$1;
(statearr_39061_39116[(2)] = inst_39002);

(statearr_39061_39116[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (30))){
var inst_38963 = (state_39012[(9)]);
var inst_38972 = (state_39012[(10)]);
var inst_38964 = (state_39012[(13)]);
var inst_38989 = cljs.core.empty_QMARK_.call(null,inst_38963);
var inst_38990 = inst_38964.call(null,inst_38972);
var inst_38991 = cljs.core.not.call(null,inst_38990);
var inst_38992 = (inst_38989) && (inst_38991);
var state_39012__$1 = state_39012;
var statearr_39062_39117 = state_39012__$1;
(statearr_39062_39117[(2)] = inst_38992);

(statearr_39062_39117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (10))){
var inst_38914 = (state_39012[(8)]);
var inst_38935 = (state_39012[(2)]);
var inst_38936 = cljs.core.get.call(null,inst_38935,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38937 = cljs.core.get.call(null,inst_38935,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38938 = cljs.core.get.call(null,inst_38935,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38939 = inst_38914;
var state_39012__$1 = (function (){var statearr_39063 = state_39012;
(statearr_39063[(16)] = inst_38936);

(statearr_39063[(17)] = inst_38938);

(statearr_39063[(18)] = inst_38937);

(statearr_39063[(7)] = inst_38939);

return statearr_39063;
})();
var statearr_39064_39118 = state_39012__$1;
(statearr_39064_39118[(2)] = null);

(statearr_39064_39118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (18))){
var inst_38954 = (state_39012[(2)]);
var state_39012__$1 = state_39012;
var statearr_39065_39119 = state_39012__$1;
(statearr_39065_39119[(2)] = inst_38954);

(statearr_39065_39119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (37))){
var state_39012__$1 = state_39012;
var statearr_39066_39120 = state_39012__$1;
(statearr_39066_39120[(2)] = null);

(statearr_39066_39120[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39013 === (8))){
var inst_38914 = (state_39012[(8)]);
var inst_38932 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38914);
var state_39012__$1 = state_39012;
var statearr_39067_39121 = state_39012__$1;
(statearr_39067_39121[(2)] = inst_38932);

(statearr_39067_39121[(1)] = (10));


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
});})(c__28055__auto___39075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27943__auto__,c__28055__auto___39075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27944__auto__ = null;
var cljs$core$async$mix_$_state_machine__27944__auto____0 = (function (){
var statearr_39071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39071[(0)] = cljs$core$async$mix_$_state_machine__27944__auto__);

(statearr_39071[(1)] = (1));

return statearr_39071;
});
var cljs$core$async$mix_$_state_machine__27944__auto____1 = (function (state_39012){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_39012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e39072){if((e39072 instanceof Object)){
var ex__27947__auto__ = e39072;
var statearr_39073_39122 = state_39012;
(statearr_39073_39122[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39123 = state_39012;
state_39012 = G__39123;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27944__auto__ = function(state_39012){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27944__auto____1.call(this,state_39012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27944__auto____0;
cljs$core$async$mix_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27944__auto____1;
return cljs$core$async$mix_$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___39075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28057__auto__ = (function (){var statearr_39074 = f__28056__auto__.call(null);
(statearr_39074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___39075);

return statearr_39074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___39075,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args39124 = [];
var len__25996__auto___39127 = arguments.length;
var i__25997__auto___39128 = (0);
while(true){
if((i__25997__auto___39128 < len__25996__auto___39127)){
args39124.push((arguments[i__25997__auto___39128]));

var G__39129 = (i__25997__auto___39128 + (1));
i__25997__auto___39128 = G__39129;
continue;
} else {
}
break;
}

var G__39126 = args39124.length;
switch (G__39126) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39124.length)].join('')));

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
var args39132 = [];
var len__25996__auto___39257 = arguments.length;
var i__25997__auto___39258 = (0);
while(true){
if((i__25997__auto___39258 < len__25996__auto___39257)){
args39132.push((arguments[i__25997__auto___39258]));

var G__39259 = (i__25997__auto___39258 + (1));
i__25997__auto___39258 = G__39259;
continue;
} else {
}
break;
}

var G__39134 = args39132.length;
switch (G__39134) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39132.length)].join('')));

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
return (function (p1__39131_SHARP_){
if(cljs.core.truth_(p1__39131_SHARP_.call(null,topic))){
return p1__39131_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39131_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24888__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39135 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39136){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39136 = meta39136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39137,meta39136__$1){
var self__ = this;
var _39137__$1 = this;
return (new cljs.core.async.t_cljs$core$async39135(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39136__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39137){
var self__ = this;
var _39137__$1 = this;
return self__.meta39136;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39135.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39135.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39135.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39135.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async39135.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39135.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39135.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39136","meta39136",1062980964,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39135";

cljs.core.async.t_cljs$core$async39135.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async39135");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39135 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39135(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39136){
return (new cljs.core.async.t_cljs$core$async39135(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39136));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39135(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28055__auto___39261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___39261,mults,ensure_mult,p){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___39261,mults,ensure_mult,p){
return (function (state_39209){
var state_val_39210 = (state_39209[(1)]);
if((state_val_39210 === (7))){
var inst_39205 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
var statearr_39211_39262 = state_39209__$1;
(statearr_39211_39262[(2)] = inst_39205);

(statearr_39211_39262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (20))){
var state_39209__$1 = state_39209;
var statearr_39212_39263 = state_39209__$1;
(statearr_39212_39263[(2)] = null);

(statearr_39212_39263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (1))){
var state_39209__$1 = state_39209;
var statearr_39213_39264 = state_39209__$1;
(statearr_39213_39264[(2)] = null);

(statearr_39213_39264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (24))){
var inst_39188 = (state_39209[(7)]);
var inst_39197 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39188);
var state_39209__$1 = state_39209;
var statearr_39214_39265 = state_39209__$1;
(statearr_39214_39265[(2)] = inst_39197);

(statearr_39214_39265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (4))){
var inst_39140 = (state_39209[(8)]);
var inst_39140__$1 = (state_39209[(2)]);
var inst_39141 = (inst_39140__$1 == null);
var state_39209__$1 = (function (){var statearr_39215 = state_39209;
(statearr_39215[(8)] = inst_39140__$1);

return statearr_39215;
})();
if(cljs.core.truth_(inst_39141)){
var statearr_39216_39266 = state_39209__$1;
(statearr_39216_39266[(1)] = (5));

} else {
var statearr_39217_39267 = state_39209__$1;
(statearr_39217_39267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (15))){
var inst_39182 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
var statearr_39218_39268 = state_39209__$1;
(statearr_39218_39268[(2)] = inst_39182);

(statearr_39218_39268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (21))){
var inst_39202 = (state_39209[(2)]);
var state_39209__$1 = (function (){var statearr_39219 = state_39209;
(statearr_39219[(9)] = inst_39202);

return statearr_39219;
})();
var statearr_39220_39269 = state_39209__$1;
(statearr_39220_39269[(2)] = null);

(statearr_39220_39269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (13))){
var inst_39164 = (state_39209[(10)]);
var inst_39166 = cljs.core.chunked_seq_QMARK_.call(null,inst_39164);
var state_39209__$1 = state_39209;
if(inst_39166){
var statearr_39221_39270 = state_39209__$1;
(statearr_39221_39270[(1)] = (16));

} else {
var statearr_39222_39271 = state_39209__$1;
(statearr_39222_39271[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (22))){
var inst_39194 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
if(cljs.core.truth_(inst_39194)){
var statearr_39223_39272 = state_39209__$1;
(statearr_39223_39272[(1)] = (23));

} else {
var statearr_39224_39273 = state_39209__$1;
(statearr_39224_39273[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (6))){
var inst_39140 = (state_39209[(8)]);
var inst_39188 = (state_39209[(7)]);
var inst_39190 = (state_39209[(11)]);
var inst_39188__$1 = topic_fn.call(null,inst_39140);
var inst_39189 = cljs.core.deref.call(null,mults);
var inst_39190__$1 = cljs.core.get.call(null,inst_39189,inst_39188__$1);
var state_39209__$1 = (function (){var statearr_39225 = state_39209;
(statearr_39225[(7)] = inst_39188__$1);

(statearr_39225[(11)] = inst_39190__$1);

return statearr_39225;
})();
if(cljs.core.truth_(inst_39190__$1)){
var statearr_39226_39274 = state_39209__$1;
(statearr_39226_39274[(1)] = (19));

} else {
var statearr_39227_39275 = state_39209__$1;
(statearr_39227_39275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (25))){
var inst_39199 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
var statearr_39228_39276 = state_39209__$1;
(statearr_39228_39276[(2)] = inst_39199);

(statearr_39228_39276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (17))){
var inst_39164 = (state_39209[(10)]);
var inst_39173 = cljs.core.first.call(null,inst_39164);
var inst_39174 = cljs.core.async.muxch_STAR_.call(null,inst_39173);
var inst_39175 = cljs.core.async.close_BANG_.call(null,inst_39174);
var inst_39176 = cljs.core.next.call(null,inst_39164);
var inst_39150 = inst_39176;
var inst_39151 = null;
var inst_39152 = (0);
var inst_39153 = (0);
var state_39209__$1 = (function (){var statearr_39229 = state_39209;
(statearr_39229[(12)] = inst_39153);

(statearr_39229[(13)] = inst_39150);

(statearr_39229[(14)] = inst_39152);

(statearr_39229[(15)] = inst_39175);

(statearr_39229[(16)] = inst_39151);

return statearr_39229;
})();
var statearr_39230_39277 = state_39209__$1;
(statearr_39230_39277[(2)] = null);

(statearr_39230_39277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (3))){
var inst_39207 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39209__$1,inst_39207);
} else {
if((state_val_39210 === (12))){
var inst_39184 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
var statearr_39231_39278 = state_39209__$1;
(statearr_39231_39278[(2)] = inst_39184);

(statearr_39231_39278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (2))){
var state_39209__$1 = state_39209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39209__$1,(4),ch);
} else {
if((state_val_39210 === (23))){
var state_39209__$1 = state_39209;
var statearr_39232_39279 = state_39209__$1;
(statearr_39232_39279[(2)] = null);

(statearr_39232_39279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (19))){
var inst_39140 = (state_39209[(8)]);
var inst_39190 = (state_39209[(11)]);
var inst_39192 = cljs.core.async.muxch_STAR_.call(null,inst_39190);
var state_39209__$1 = state_39209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39209__$1,(22),inst_39192,inst_39140);
} else {
if((state_val_39210 === (11))){
var inst_39164 = (state_39209[(10)]);
var inst_39150 = (state_39209[(13)]);
var inst_39164__$1 = cljs.core.seq.call(null,inst_39150);
var state_39209__$1 = (function (){var statearr_39233 = state_39209;
(statearr_39233[(10)] = inst_39164__$1);

return statearr_39233;
})();
if(inst_39164__$1){
var statearr_39234_39280 = state_39209__$1;
(statearr_39234_39280[(1)] = (13));

} else {
var statearr_39235_39281 = state_39209__$1;
(statearr_39235_39281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (9))){
var inst_39186 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
var statearr_39236_39282 = state_39209__$1;
(statearr_39236_39282[(2)] = inst_39186);

(statearr_39236_39282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (5))){
var inst_39147 = cljs.core.deref.call(null,mults);
var inst_39148 = cljs.core.vals.call(null,inst_39147);
var inst_39149 = cljs.core.seq.call(null,inst_39148);
var inst_39150 = inst_39149;
var inst_39151 = null;
var inst_39152 = (0);
var inst_39153 = (0);
var state_39209__$1 = (function (){var statearr_39237 = state_39209;
(statearr_39237[(12)] = inst_39153);

(statearr_39237[(13)] = inst_39150);

(statearr_39237[(14)] = inst_39152);

(statearr_39237[(16)] = inst_39151);

return statearr_39237;
})();
var statearr_39238_39283 = state_39209__$1;
(statearr_39238_39283[(2)] = null);

(statearr_39238_39283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (14))){
var state_39209__$1 = state_39209;
var statearr_39242_39284 = state_39209__$1;
(statearr_39242_39284[(2)] = null);

(statearr_39242_39284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (16))){
var inst_39164 = (state_39209[(10)]);
var inst_39168 = cljs.core.chunk_first.call(null,inst_39164);
var inst_39169 = cljs.core.chunk_rest.call(null,inst_39164);
var inst_39170 = cljs.core.count.call(null,inst_39168);
var inst_39150 = inst_39169;
var inst_39151 = inst_39168;
var inst_39152 = inst_39170;
var inst_39153 = (0);
var state_39209__$1 = (function (){var statearr_39243 = state_39209;
(statearr_39243[(12)] = inst_39153);

(statearr_39243[(13)] = inst_39150);

(statearr_39243[(14)] = inst_39152);

(statearr_39243[(16)] = inst_39151);

return statearr_39243;
})();
var statearr_39244_39285 = state_39209__$1;
(statearr_39244_39285[(2)] = null);

(statearr_39244_39285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (10))){
var inst_39153 = (state_39209[(12)]);
var inst_39150 = (state_39209[(13)]);
var inst_39152 = (state_39209[(14)]);
var inst_39151 = (state_39209[(16)]);
var inst_39158 = cljs.core._nth.call(null,inst_39151,inst_39153);
var inst_39159 = cljs.core.async.muxch_STAR_.call(null,inst_39158);
var inst_39160 = cljs.core.async.close_BANG_.call(null,inst_39159);
var inst_39161 = (inst_39153 + (1));
var tmp39239 = inst_39150;
var tmp39240 = inst_39152;
var tmp39241 = inst_39151;
var inst_39150__$1 = tmp39239;
var inst_39151__$1 = tmp39241;
var inst_39152__$1 = tmp39240;
var inst_39153__$1 = inst_39161;
var state_39209__$1 = (function (){var statearr_39245 = state_39209;
(statearr_39245[(12)] = inst_39153__$1);

(statearr_39245[(17)] = inst_39160);

(statearr_39245[(13)] = inst_39150__$1);

(statearr_39245[(14)] = inst_39152__$1);

(statearr_39245[(16)] = inst_39151__$1);

return statearr_39245;
})();
var statearr_39246_39286 = state_39209__$1;
(statearr_39246_39286[(2)] = null);

(statearr_39246_39286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (18))){
var inst_39179 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
var statearr_39247_39287 = state_39209__$1;
(statearr_39247_39287[(2)] = inst_39179);

(statearr_39247_39287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (8))){
var inst_39153 = (state_39209[(12)]);
var inst_39152 = (state_39209[(14)]);
var inst_39155 = (inst_39153 < inst_39152);
var inst_39156 = inst_39155;
var state_39209__$1 = state_39209;
if(cljs.core.truth_(inst_39156)){
var statearr_39248_39288 = state_39209__$1;
(statearr_39248_39288[(1)] = (10));

} else {
var statearr_39249_39289 = state_39209__$1;
(statearr_39249_39289[(1)] = (11));

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
});})(c__28055__auto___39261,mults,ensure_mult,p))
;
return ((function (switch__27943__auto__,c__28055__auto___39261,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_39253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39253[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_39253[(1)] = (1));

return statearr_39253;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_39209){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_39209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e39254){if((e39254 instanceof Object)){
var ex__27947__auto__ = e39254;
var statearr_39255_39290 = state_39209;
(statearr_39255_39290[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39291 = state_39209;
state_39209 = G__39291;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_39209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_39209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___39261,mults,ensure_mult,p))
})();
var state__28057__auto__ = (function (){var statearr_39256 = f__28056__auto__.call(null);
(statearr_39256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___39261);

return statearr_39256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___39261,mults,ensure_mult,p))
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
var args39292 = [];
var len__25996__auto___39295 = arguments.length;
var i__25997__auto___39296 = (0);
while(true){
if((i__25997__auto___39296 < len__25996__auto___39295)){
args39292.push((arguments[i__25997__auto___39296]));

var G__39297 = (i__25997__auto___39296 + (1));
i__25997__auto___39296 = G__39297;
continue;
} else {
}
break;
}

var G__39294 = args39292.length;
switch (G__39294) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39292.length)].join('')));

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
var args39299 = [];
var len__25996__auto___39302 = arguments.length;
var i__25997__auto___39303 = (0);
while(true){
if((i__25997__auto___39303 < len__25996__auto___39302)){
args39299.push((arguments[i__25997__auto___39303]));

var G__39304 = (i__25997__auto___39303 + (1));
i__25997__auto___39303 = G__39304;
continue;
} else {
}
break;
}

var G__39301 = args39299.length;
switch (G__39301) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39299.length)].join('')));

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
var args39306 = [];
var len__25996__auto___39377 = arguments.length;
var i__25997__auto___39378 = (0);
while(true){
if((i__25997__auto___39378 < len__25996__auto___39377)){
args39306.push((arguments[i__25997__auto___39378]));

var G__39379 = (i__25997__auto___39378 + (1));
i__25997__auto___39378 = G__39379;
continue;
} else {
}
break;
}

var G__39308 = args39306.length;
switch (G__39308) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39306.length)].join('')));

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
var c__28055__auto___39381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___39381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___39381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39347){
var state_val_39348 = (state_39347[(1)]);
if((state_val_39348 === (7))){
var state_39347__$1 = state_39347;
var statearr_39349_39382 = state_39347__$1;
(statearr_39349_39382[(2)] = null);

(statearr_39349_39382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (1))){
var state_39347__$1 = state_39347;
var statearr_39350_39383 = state_39347__$1;
(statearr_39350_39383[(2)] = null);

(statearr_39350_39383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (4))){
var inst_39311 = (state_39347[(7)]);
var inst_39313 = (inst_39311 < cnt);
var state_39347__$1 = state_39347;
if(cljs.core.truth_(inst_39313)){
var statearr_39351_39384 = state_39347__$1;
(statearr_39351_39384[(1)] = (6));

} else {
var statearr_39352_39385 = state_39347__$1;
(statearr_39352_39385[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (15))){
var inst_39343 = (state_39347[(2)]);
var state_39347__$1 = state_39347;
var statearr_39353_39386 = state_39347__$1;
(statearr_39353_39386[(2)] = inst_39343);

(statearr_39353_39386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (13))){
var inst_39336 = cljs.core.async.close_BANG_.call(null,out);
var state_39347__$1 = state_39347;
var statearr_39354_39387 = state_39347__$1;
(statearr_39354_39387[(2)] = inst_39336);

(statearr_39354_39387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (6))){
var state_39347__$1 = state_39347;
var statearr_39355_39388 = state_39347__$1;
(statearr_39355_39388[(2)] = null);

(statearr_39355_39388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (3))){
var inst_39345 = (state_39347[(2)]);
var state_39347__$1 = state_39347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39347__$1,inst_39345);
} else {
if((state_val_39348 === (12))){
var inst_39333 = (state_39347[(8)]);
var inst_39333__$1 = (state_39347[(2)]);
var inst_39334 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39333__$1);
var state_39347__$1 = (function (){var statearr_39356 = state_39347;
(statearr_39356[(8)] = inst_39333__$1);

return statearr_39356;
})();
if(cljs.core.truth_(inst_39334)){
var statearr_39357_39389 = state_39347__$1;
(statearr_39357_39389[(1)] = (13));

} else {
var statearr_39358_39390 = state_39347__$1;
(statearr_39358_39390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (2))){
var inst_39310 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39311 = (0);
var state_39347__$1 = (function (){var statearr_39359 = state_39347;
(statearr_39359[(9)] = inst_39310);

(statearr_39359[(7)] = inst_39311);

return statearr_39359;
})();
var statearr_39360_39391 = state_39347__$1;
(statearr_39360_39391[(2)] = null);

(statearr_39360_39391[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (11))){
var inst_39311 = (state_39347[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39347,(10),Object,null,(9));
var inst_39320 = chs__$1.call(null,inst_39311);
var inst_39321 = done.call(null,inst_39311);
var inst_39322 = cljs.core.async.take_BANG_.call(null,inst_39320,inst_39321);
var state_39347__$1 = state_39347;
var statearr_39361_39392 = state_39347__$1;
(statearr_39361_39392[(2)] = inst_39322);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39347__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (9))){
var inst_39311 = (state_39347[(7)]);
var inst_39324 = (state_39347[(2)]);
var inst_39325 = (inst_39311 + (1));
var inst_39311__$1 = inst_39325;
var state_39347__$1 = (function (){var statearr_39362 = state_39347;
(statearr_39362[(10)] = inst_39324);

(statearr_39362[(7)] = inst_39311__$1);

return statearr_39362;
})();
var statearr_39363_39393 = state_39347__$1;
(statearr_39363_39393[(2)] = null);

(statearr_39363_39393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (5))){
var inst_39331 = (state_39347[(2)]);
var state_39347__$1 = (function (){var statearr_39364 = state_39347;
(statearr_39364[(11)] = inst_39331);

return statearr_39364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39347__$1,(12),dchan);
} else {
if((state_val_39348 === (14))){
var inst_39333 = (state_39347[(8)]);
var inst_39338 = cljs.core.apply.call(null,f,inst_39333);
var state_39347__$1 = state_39347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39347__$1,(16),out,inst_39338);
} else {
if((state_val_39348 === (16))){
var inst_39340 = (state_39347[(2)]);
var state_39347__$1 = (function (){var statearr_39365 = state_39347;
(statearr_39365[(12)] = inst_39340);

return statearr_39365;
})();
var statearr_39366_39394 = state_39347__$1;
(statearr_39366_39394[(2)] = null);

(statearr_39366_39394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (10))){
var inst_39315 = (state_39347[(2)]);
var inst_39316 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39347__$1 = (function (){var statearr_39367 = state_39347;
(statearr_39367[(13)] = inst_39315);

return statearr_39367;
})();
var statearr_39368_39395 = state_39347__$1;
(statearr_39368_39395[(2)] = inst_39316);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39347__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39348 === (8))){
var inst_39329 = (state_39347[(2)]);
var state_39347__$1 = state_39347;
var statearr_39369_39396 = state_39347__$1;
(statearr_39369_39396[(2)] = inst_39329);

(statearr_39369_39396[(1)] = (5));


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
});})(c__28055__auto___39381,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27943__auto__,c__28055__auto___39381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_39373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39373[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_39373[(1)] = (1));

return statearr_39373;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_39347){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_39347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e39374){if((e39374 instanceof Object)){
var ex__27947__auto__ = e39374;
var statearr_39375_39397 = state_39347;
(statearr_39375_39397[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39398 = state_39347;
state_39347 = G__39398;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_39347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_39347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___39381,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28057__auto__ = (function (){var statearr_39376 = f__28056__auto__.call(null);
(statearr_39376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___39381);

return statearr_39376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___39381,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args39400 = [];
var len__25996__auto___39458 = arguments.length;
var i__25997__auto___39459 = (0);
while(true){
if((i__25997__auto___39459 < len__25996__auto___39458)){
args39400.push((arguments[i__25997__auto___39459]));

var G__39460 = (i__25997__auto___39459 + (1));
i__25997__auto___39459 = G__39460;
continue;
} else {
}
break;
}

var G__39402 = args39400.length;
switch (G__39402) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39400.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28055__auto___39462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___39462,out){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___39462,out){
return (function (state_39434){
var state_val_39435 = (state_39434[(1)]);
if((state_val_39435 === (7))){
var inst_39413 = (state_39434[(7)]);
var inst_39414 = (state_39434[(8)]);
var inst_39413__$1 = (state_39434[(2)]);
var inst_39414__$1 = cljs.core.nth.call(null,inst_39413__$1,(0),null);
var inst_39415 = cljs.core.nth.call(null,inst_39413__$1,(1),null);
var inst_39416 = (inst_39414__$1 == null);
var state_39434__$1 = (function (){var statearr_39436 = state_39434;
(statearr_39436[(9)] = inst_39415);

(statearr_39436[(7)] = inst_39413__$1);

(statearr_39436[(8)] = inst_39414__$1);

return statearr_39436;
})();
if(cljs.core.truth_(inst_39416)){
var statearr_39437_39463 = state_39434__$1;
(statearr_39437_39463[(1)] = (8));

} else {
var statearr_39438_39464 = state_39434__$1;
(statearr_39438_39464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (1))){
var inst_39403 = cljs.core.vec.call(null,chs);
var inst_39404 = inst_39403;
var state_39434__$1 = (function (){var statearr_39439 = state_39434;
(statearr_39439[(10)] = inst_39404);

return statearr_39439;
})();
var statearr_39440_39465 = state_39434__$1;
(statearr_39440_39465[(2)] = null);

(statearr_39440_39465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (4))){
var inst_39404 = (state_39434[(10)]);
var state_39434__$1 = state_39434;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39434__$1,(7),inst_39404);
} else {
if((state_val_39435 === (6))){
var inst_39430 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39441_39466 = state_39434__$1;
(statearr_39441_39466[(2)] = inst_39430);

(statearr_39441_39466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (3))){
var inst_39432 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39434__$1,inst_39432);
} else {
if((state_val_39435 === (2))){
var inst_39404 = (state_39434[(10)]);
var inst_39406 = cljs.core.count.call(null,inst_39404);
var inst_39407 = (inst_39406 > (0));
var state_39434__$1 = state_39434;
if(cljs.core.truth_(inst_39407)){
var statearr_39443_39467 = state_39434__$1;
(statearr_39443_39467[(1)] = (4));

} else {
var statearr_39444_39468 = state_39434__$1;
(statearr_39444_39468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (11))){
var inst_39404 = (state_39434[(10)]);
var inst_39423 = (state_39434[(2)]);
var tmp39442 = inst_39404;
var inst_39404__$1 = tmp39442;
var state_39434__$1 = (function (){var statearr_39445 = state_39434;
(statearr_39445[(11)] = inst_39423);

(statearr_39445[(10)] = inst_39404__$1);

return statearr_39445;
})();
var statearr_39446_39469 = state_39434__$1;
(statearr_39446_39469[(2)] = null);

(statearr_39446_39469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (9))){
var inst_39414 = (state_39434[(8)]);
var state_39434__$1 = state_39434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39434__$1,(11),out,inst_39414);
} else {
if((state_val_39435 === (5))){
var inst_39428 = cljs.core.async.close_BANG_.call(null,out);
var state_39434__$1 = state_39434;
var statearr_39447_39470 = state_39434__$1;
(statearr_39447_39470[(2)] = inst_39428);

(statearr_39447_39470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (10))){
var inst_39426 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39448_39471 = state_39434__$1;
(statearr_39448_39471[(2)] = inst_39426);

(statearr_39448_39471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (8))){
var inst_39415 = (state_39434[(9)]);
var inst_39404 = (state_39434[(10)]);
var inst_39413 = (state_39434[(7)]);
var inst_39414 = (state_39434[(8)]);
var inst_39418 = (function (){var cs = inst_39404;
var vec__39409 = inst_39413;
var v = inst_39414;
var c = inst_39415;
return ((function (cs,vec__39409,v,c,inst_39415,inst_39404,inst_39413,inst_39414,state_val_39435,c__28055__auto___39462,out){
return (function (p1__39399_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39399_SHARP_);
});
;})(cs,vec__39409,v,c,inst_39415,inst_39404,inst_39413,inst_39414,state_val_39435,c__28055__auto___39462,out))
})();
var inst_39419 = cljs.core.filterv.call(null,inst_39418,inst_39404);
var inst_39404__$1 = inst_39419;
var state_39434__$1 = (function (){var statearr_39449 = state_39434;
(statearr_39449[(10)] = inst_39404__$1);

return statearr_39449;
})();
var statearr_39450_39472 = state_39434__$1;
(statearr_39450_39472[(2)] = null);

(statearr_39450_39472[(1)] = (2));


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
});})(c__28055__auto___39462,out))
;
return ((function (switch__27943__auto__,c__28055__auto___39462,out){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_39454 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39454[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_39454[(1)] = (1));

return statearr_39454;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_39434){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_39434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e39455){if((e39455 instanceof Object)){
var ex__27947__auto__ = e39455;
var statearr_39456_39473 = state_39434;
(statearr_39456_39473[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39474 = state_39434;
state_39434 = G__39474;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_39434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_39434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___39462,out))
})();
var state__28057__auto__ = (function (){var statearr_39457 = f__28056__auto__.call(null);
(statearr_39457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___39462);

return statearr_39457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___39462,out))
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
var args39475 = [];
var len__25996__auto___39524 = arguments.length;
var i__25997__auto___39525 = (0);
while(true){
if((i__25997__auto___39525 < len__25996__auto___39524)){
args39475.push((arguments[i__25997__auto___39525]));

var G__39526 = (i__25997__auto___39525 + (1));
i__25997__auto___39525 = G__39526;
continue;
} else {
}
break;
}

var G__39477 = args39475.length;
switch (G__39477) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39475.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28055__auto___39528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___39528,out){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___39528,out){
return (function (state_39501){
var state_val_39502 = (state_39501[(1)]);
if((state_val_39502 === (7))){
var inst_39483 = (state_39501[(7)]);
var inst_39483__$1 = (state_39501[(2)]);
var inst_39484 = (inst_39483__$1 == null);
var inst_39485 = cljs.core.not.call(null,inst_39484);
var state_39501__$1 = (function (){var statearr_39503 = state_39501;
(statearr_39503[(7)] = inst_39483__$1);

return statearr_39503;
})();
if(inst_39485){
var statearr_39504_39529 = state_39501__$1;
(statearr_39504_39529[(1)] = (8));

} else {
var statearr_39505_39530 = state_39501__$1;
(statearr_39505_39530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (1))){
var inst_39478 = (0);
var state_39501__$1 = (function (){var statearr_39506 = state_39501;
(statearr_39506[(8)] = inst_39478);

return statearr_39506;
})();
var statearr_39507_39531 = state_39501__$1;
(statearr_39507_39531[(2)] = null);

(statearr_39507_39531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (4))){
var state_39501__$1 = state_39501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39501__$1,(7),ch);
} else {
if((state_val_39502 === (6))){
var inst_39496 = (state_39501[(2)]);
var state_39501__$1 = state_39501;
var statearr_39508_39532 = state_39501__$1;
(statearr_39508_39532[(2)] = inst_39496);

(statearr_39508_39532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (3))){
var inst_39498 = (state_39501[(2)]);
var inst_39499 = cljs.core.async.close_BANG_.call(null,out);
var state_39501__$1 = (function (){var statearr_39509 = state_39501;
(statearr_39509[(9)] = inst_39498);

return statearr_39509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39501__$1,inst_39499);
} else {
if((state_val_39502 === (2))){
var inst_39478 = (state_39501[(8)]);
var inst_39480 = (inst_39478 < n);
var state_39501__$1 = state_39501;
if(cljs.core.truth_(inst_39480)){
var statearr_39510_39533 = state_39501__$1;
(statearr_39510_39533[(1)] = (4));

} else {
var statearr_39511_39534 = state_39501__$1;
(statearr_39511_39534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (11))){
var inst_39478 = (state_39501[(8)]);
var inst_39488 = (state_39501[(2)]);
var inst_39489 = (inst_39478 + (1));
var inst_39478__$1 = inst_39489;
var state_39501__$1 = (function (){var statearr_39512 = state_39501;
(statearr_39512[(10)] = inst_39488);

(statearr_39512[(8)] = inst_39478__$1);

return statearr_39512;
})();
var statearr_39513_39535 = state_39501__$1;
(statearr_39513_39535[(2)] = null);

(statearr_39513_39535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (9))){
var state_39501__$1 = state_39501;
var statearr_39514_39536 = state_39501__$1;
(statearr_39514_39536[(2)] = null);

(statearr_39514_39536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (5))){
var state_39501__$1 = state_39501;
var statearr_39515_39537 = state_39501__$1;
(statearr_39515_39537[(2)] = null);

(statearr_39515_39537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (10))){
var inst_39493 = (state_39501[(2)]);
var state_39501__$1 = state_39501;
var statearr_39516_39538 = state_39501__$1;
(statearr_39516_39538[(2)] = inst_39493);

(statearr_39516_39538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39502 === (8))){
var inst_39483 = (state_39501[(7)]);
var state_39501__$1 = state_39501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39501__$1,(11),out,inst_39483);
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
});})(c__28055__auto___39528,out))
;
return ((function (switch__27943__auto__,c__28055__auto___39528,out){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_39520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39520[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_39520[(1)] = (1));

return statearr_39520;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_39501){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_39501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e39521){if((e39521 instanceof Object)){
var ex__27947__auto__ = e39521;
var statearr_39522_39539 = state_39501;
(statearr_39522_39539[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39540 = state_39501;
state_39501 = G__39540;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_39501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_39501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___39528,out))
})();
var state__28057__auto__ = (function (){var statearr_39523 = f__28056__auto__.call(null);
(statearr_39523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___39528);

return statearr_39523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___39528,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39548 = (function (f,ch,meta39549){
this.f = f;
this.ch = ch;
this.meta39549 = meta39549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39550,meta39549__$1){
var self__ = this;
var _39550__$1 = this;
return (new cljs.core.async.t_cljs$core$async39548(self__.f,self__.ch,meta39549__$1));
});

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39550){
var self__ = this;
var _39550__$1 = this;
return self__.meta39549;
});

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39551 = (function (f,ch,meta39549,_,fn1,meta39552){
this.f = f;
this.ch = ch;
this.meta39549 = meta39549;
this._ = _;
this.fn1 = fn1;
this.meta39552 = meta39552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39553,meta39552__$1){
var self__ = this;
var _39553__$1 = this;
return (new cljs.core.async.t_cljs$core$async39551(self__.f,self__.ch,self__.meta39549,self__._,self__.fn1,meta39552__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39553){
var self__ = this;
var _39553__$1 = this;
return self__.meta39552;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39551.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39551.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39541_SHARP_){
return f1.call(null,(((p1__39541_SHARP_ == null))?null:self__.f.call(null,p1__39541_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39551.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39549","meta39549",-947146275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39548","cljs.core.async/t_cljs$core$async39548",503981390,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39552","meta39552",1166538937,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39551";

cljs.core.async.t_cljs$core$async39551.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async39551");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39551 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39551(f__$1,ch__$1,meta39549__$1,___$2,fn1__$1,meta39552){
return (new cljs.core.async.t_cljs$core$async39551(f__$1,ch__$1,meta39549__$1,___$2,fn1__$1,meta39552));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39551(self__.f,self__.ch,self__.meta39549,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39549","meta39549",-947146275,null)], null);
});

cljs.core.async.t_cljs$core$async39548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39548";

cljs.core.async.t_cljs$core$async39548.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async39548");
});

cljs.core.async.__GT_t_cljs$core$async39548 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39548(f__$1,ch__$1,meta39549){
return (new cljs.core.async.t_cljs$core$async39548(f__$1,ch__$1,meta39549));
});

}

return (new cljs.core.async.t_cljs$core$async39548(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39557 = (function (f,ch,meta39558){
this.f = f;
this.ch = ch;
this.meta39558 = meta39558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39559,meta39558__$1){
var self__ = this;
var _39559__$1 = this;
return (new cljs.core.async.t_cljs$core$async39557(self__.f,self__.ch,meta39558__$1));
});

cljs.core.async.t_cljs$core$async39557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39559){
var self__ = this;
var _39559__$1 = this;
return self__.meta39558;
});

cljs.core.async.t_cljs$core$async39557.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39557.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39557.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39558","meta39558",272237460,null)], null);
});

cljs.core.async.t_cljs$core$async39557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39557";

cljs.core.async.t_cljs$core$async39557.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async39557");
});

cljs.core.async.__GT_t_cljs$core$async39557 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39557(f__$1,ch__$1,meta39558){
return (new cljs.core.async.t_cljs$core$async39557(f__$1,ch__$1,meta39558));
});

}

return (new cljs.core.async.t_cljs$core$async39557(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39563 = (function (p,ch,meta39564){
this.p = p;
this.ch = ch;
this.meta39564 = meta39564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39565,meta39564__$1){
var self__ = this;
var _39565__$1 = this;
return (new cljs.core.async.t_cljs$core$async39563(self__.p,self__.ch,meta39564__$1));
});

cljs.core.async.t_cljs$core$async39563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39565){
var self__ = this;
var _39565__$1 = this;
return self__.meta39564;
});

cljs.core.async.t_cljs$core$async39563.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39563.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39563.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39563.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39564","meta39564",-927292024,null)], null);
});

cljs.core.async.t_cljs$core$async39563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39563";

cljs.core.async.t_cljs$core$async39563.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async39563");
});

cljs.core.async.__GT_t_cljs$core$async39563 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39563(p__$1,ch__$1,meta39564){
return (new cljs.core.async.t_cljs$core$async39563(p__$1,ch__$1,meta39564));
});

}

return (new cljs.core.async.t_cljs$core$async39563(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args39566 = [];
var len__25996__auto___39610 = arguments.length;
var i__25997__auto___39611 = (0);
while(true){
if((i__25997__auto___39611 < len__25996__auto___39610)){
args39566.push((arguments[i__25997__auto___39611]));

var G__39612 = (i__25997__auto___39611 + (1));
i__25997__auto___39611 = G__39612;
continue;
} else {
}
break;
}

var G__39568 = args39566.length;
switch (G__39568) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39566.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28055__auto___39614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___39614,out){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___39614,out){
return (function (state_39589){
var state_val_39590 = (state_39589[(1)]);
if((state_val_39590 === (7))){
var inst_39585 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
var statearr_39591_39615 = state_39589__$1;
(statearr_39591_39615[(2)] = inst_39585);

(statearr_39591_39615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (1))){
var state_39589__$1 = state_39589;
var statearr_39592_39616 = state_39589__$1;
(statearr_39592_39616[(2)] = null);

(statearr_39592_39616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (4))){
var inst_39571 = (state_39589[(7)]);
var inst_39571__$1 = (state_39589[(2)]);
var inst_39572 = (inst_39571__$1 == null);
var state_39589__$1 = (function (){var statearr_39593 = state_39589;
(statearr_39593[(7)] = inst_39571__$1);

return statearr_39593;
})();
if(cljs.core.truth_(inst_39572)){
var statearr_39594_39617 = state_39589__$1;
(statearr_39594_39617[(1)] = (5));

} else {
var statearr_39595_39618 = state_39589__$1;
(statearr_39595_39618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (6))){
var inst_39571 = (state_39589[(7)]);
var inst_39576 = p.call(null,inst_39571);
var state_39589__$1 = state_39589;
if(cljs.core.truth_(inst_39576)){
var statearr_39596_39619 = state_39589__$1;
(statearr_39596_39619[(1)] = (8));

} else {
var statearr_39597_39620 = state_39589__$1;
(statearr_39597_39620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (3))){
var inst_39587 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39589__$1,inst_39587);
} else {
if((state_val_39590 === (2))){
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39589__$1,(4),ch);
} else {
if((state_val_39590 === (11))){
var inst_39579 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
var statearr_39598_39621 = state_39589__$1;
(statearr_39598_39621[(2)] = inst_39579);

(statearr_39598_39621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (9))){
var state_39589__$1 = state_39589;
var statearr_39599_39622 = state_39589__$1;
(statearr_39599_39622[(2)] = null);

(statearr_39599_39622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (5))){
var inst_39574 = cljs.core.async.close_BANG_.call(null,out);
var state_39589__$1 = state_39589;
var statearr_39600_39623 = state_39589__$1;
(statearr_39600_39623[(2)] = inst_39574);

(statearr_39600_39623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (10))){
var inst_39582 = (state_39589[(2)]);
var state_39589__$1 = (function (){var statearr_39601 = state_39589;
(statearr_39601[(8)] = inst_39582);

return statearr_39601;
})();
var statearr_39602_39624 = state_39589__$1;
(statearr_39602_39624[(2)] = null);

(statearr_39602_39624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (8))){
var inst_39571 = (state_39589[(7)]);
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39589__$1,(11),out,inst_39571);
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
});})(c__28055__auto___39614,out))
;
return ((function (switch__27943__auto__,c__28055__auto___39614,out){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_39606 = [null,null,null,null,null,null,null,null,null];
(statearr_39606[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_39606[(1)] = (1));

return statearr_39606;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_39589){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_39589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e39607){if((e39607 instanceof Object)){
var ex__27947__auto__ = e39607;
var statearr_39608_39625 = state_39589;
(statearr_39608_39625[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39626 = state_39589;
state_39589 = G__39626;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_39589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_39589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___39614,out))
})();
var state__28057__auto__ = (function (){var statearr_39609 = f__28056__auto__.call(null);
(statearr_39609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___39614);

return statearr_39609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___39614,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39627 = [];
var len__25996__auto___39630 = arguments.length;
var i__25997__auto___39631 = (0);
while(true){
if((i__25997__auto___39631 < len__25996__auto___39630)){
args39627.push((arguments[i__25997__auto___39631]));

var G__39632 = (i__25997__auto___39631 + (1));
i__25997__auto___39631 = G__39632;
continue;
} else {
}
break;
}

var G__39629 = args39627.length;
switch (G__39629) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39627.length)].join('')));

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
var c__28055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto__){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto__){
return (function (state_39799){
var state_val_39800 = (state_39799[(1)]);
if((state_val_39800 === (7))){
var inst_39795 = (state_39799[(2)]);
var state_39799__$1 = state_39799;
var statearr_39801_39842 = state_39799__$1;
(statearr_39801_39842[(2)] = inst_39795);

(statearr_39801_39842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (20))){
var inst_39765 = (state_39799[(7)]);
var inst_39776 = (state_39799[(2)]);
var inst_39777 = cljs.core.next.call(null,inst_39765);
var inst_39751 = inst_39777;
var inst_39752 = null;
var inst_39753 = (0);
var inst_39754 = (0);
var state_39799__$1 = (function (){var statearr_39802 = state_39799;
(statearr_39802[(8)] = inst_39752);

(statearr_39802[(9)] = inst_39754);

(statearr_39802[(10)] = inst_39776);

(statearr_39802[(11)] = inst_39753);

(statearr_39802[(12)] = inst_39751);

return statearr_39802;
})();
var statearr_39803_39843 = state_39799__$1;
(statearr_39803_39843[(2)] = null);

(statearr_39803_39843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (1))){
var state_39799__$1 = state_39799;
var statearr_39804_39844 = state_39799__$1;
(statearr_39804_39844[(2)] = null);

(statearr_39804_39844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (4))){
var inst_39740 = (state_39799[(13)]);
var inst_39740__$1 = (state_39799[(2)]);
var inst_39741 = (inst_39740__$1 == null);
var state_39799__$1 = (function (){var statearr_39805 = state_39799;
(statearr_39805[(13)] = inst_39740__$1);

return statearr_39805;
})();
if(cljs.core.truth_(inst_39741)){
var statearr_39806_39845 = state_39799__$1;
(statearr_39806_39845[(1)] = (5));

} else {
var statearr_39807_39846 = state_39799__$1;
(statearr_39807_39846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (15))){
var state_39799__$1 = state_39799;
var statearr_39811_39847 = state_39799__$1;
(statearr_39811_39847[(2)] = null);

(statearr_39811_39847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (21))){
var state_39799__$1 = state_39799;
var statearr_39812_39848 = state_39799__$1;
(statearr_39812_39848[(2)] = null);

(statearr_39812_39848[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (13))){
var inst_39752 = (state_39799[(8)]);
var inst_39754 = (state_39799[(9)]);
var inst_39753 = (state_39799[(11)]);
var inst_39751 = (state_39799[(12)]);
var inst_39761 = (state_39799[(2)]);
var inst_39762 = (inst_39754 + (1));
var tmp39808 = inst_39752;
var tmp39809 = inst_39753;
var tmp39810 = inst_39751;
var inst_39751__$1 = tmp39810;
var inst_39752__$1 = tmp39808;
var inst_39753__$1 = tmp39809;
var inst_39754__$1 = inst_39762;
var state_39799__$1 = (function (){var statearr_39813 = state_39799;
(statearr_39813[(8)] = inst_39752__$1);

(statearr_39813[(14)] = inst_39761);

(statearr_39813[(9)] = inst_39754__$1);

(statearr_39813[(11)] = inst_39753__$1);

(statearr_39813[(12)] = inst_39751__$1);

return statearr_39813;
})();
var statearr_39814_39849 = state_39799__$1;
(statearr_39814_39849[(2)] = null);

(statearr_39814_39849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (22))){
var state_39799__$1 = state_39799;
var statearr_39815_39850 = state_39799__$1;
(statearr_39815_39850[(2)] = null);

(statearr_39815_39850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (6))){
var inst_39740 = (state_39799[(13)]);
var inst_39749 = f.call(null,inst_39740);
var inst_39750 = cljs.core.seq.call(null,inst_39749);
var inst_39751 = inst_39750;
var inst_39752 = null;
var inst_39753 = (0);
var inst_39754 = (0);
var state_39799__$1 = (function (){var statearr_39816 = state_39799;
(statearr_39816[(8)] = inst_39752);

(statearr_39816[(9)] = inst_39754);

(statearr_39816[(11)] = inst_39753);

(statearr_39816[(12)] = inst_39751);

return statearr_39816;
})();
var statearr_39817_39851 = state_39799__$1;
(statearr_39817_39851[(2)] = null);

(statearr_39817_39851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (17))){
var inst_39765 = (state_39799[(7)]);
var inst_39769 = cljs.core.chunk_first.call(null,inst_39765);
var inst_39770 = cljs.core.chunk_rest.call(null,inst_39765);
var inst_39771 = cljs.core.count.call(null,inst_39769);
var inst_39751 = inst_39770;
var inst_39752 = inst_39769;
var inst_39753 = inst_39771;
var inst_39754 = (0);
var state_39799__$1 = (function (){var statearr_39818 = state_39799;
(statearr_39818[(8)] = inst_39752);

(statearr_39818[(9)] = inst_39754);

(statearr_39818[(11)] = inst_39753);

(statearr_39818[(12)] = inst_39751);

return statearr_39818;
})();
var statearr_39819_39852 = state_39799__$1;
(statearr_39819_39852[(2)] = null);

(statearr_39819_39852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (3))){
var inst_39797 = (state_39799[(2)]);
var state_39799__$1 = state_39799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39799__$1,inst_39797);
} else {
if((state_val_39800 === (12))){
var inst_39785 = (state_39799[(2)]);
var state_39799__$1 = state_39799;
var statearr_39820_39853 = state_39799__$1;
(statearr_39820_39853[(2)] = inst_39785);

(statearr_39820_39853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (2))){
var state_39799__$1 = state_39799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39799__$1,(4),in$);
} else {
if((state_val_39800 === (23))){
var inst_39793 = (state_39799[(2)]);
var state_39799__$1 = state_39799;
var statearr_39821_39854 = state_39799__$1;
(statearr_39821_39854[(2)] = inst_39793);

(statearr_39821_39854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (19))){
var inst_39780 = (state_39799[(2)]);
var state_39799__$1 = state_39799;
var statearr_39822_39855 = state_39799__$1;
(statearr_39822_39855[(2)] = inst_39780);

(statearr_39822_39855[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (11))){
var inst_39765 = (state_39799[(7)]);
var inst_39751 = (state_39799[(12)]);
var inst_39765__$1 = cljs.core.seq.call(null,inst_39751);
var state_39799__$1 = (function (){var statearr_39823 = state_39799;
(statearr_39823[(7)] = inst_39765__$1);

return statearr_39823;
})();
if(inst_39765__$1){
var statearr_39824_39856 = state_39799__$1;
(statearr_39824_39856[(1)] = (14));

} else {
var statearr_39825_39857 = state_39799__$1;
(statearr_39825_39857[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (9))){
var inst_39787 = (state_39799[(2)]);
var inst_39788 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39799__$1 = (function (){var statearr_39826 = state_39799;
(statearr_39826[(15)] = inst_39787);

return statearr_39826;
})();
if(cljs.core.truth_(inst_39788)){
var statearr_39827_39858 = state_39799__$1;
(statearr_39827_39858[(1)] = (21));

} else {
var statearr_39828_39859 = state_39799__$1;
(statearr_39828_39859[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (5))){
var inst_39743 = cljs.core.async.close_BANG_.call(null,out);
var state_39799__$1 = state_39799;
var statearr_39829_39860 = state_39799__$1;
(statearr_39829_39860[(2)] = inst_39743);

(statearr_39829_39860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (14))){
var inst_39765 = (state_39799[(7)]);
var inst_39767 = cljs.core.chunked_seq_QMARK_.call(null,inst_39765);
var state_39799__$1 = state_39799;
if(inst_39767){
var statearr_39830_39861 = state_39799__$1;
(statearr_39830_39861[(1)] = (17));

} else {
var statearr_39831_39862 = state_39799__$1;
(statearr_39831_39862[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (16))){
var inst_39783 = (state_39799[(2)]);
var state_39799__$1 = state_39799;
var statearr_39832_39863 = state_39799__$1;
(statearr_39832_39863[(2)] = inst_39783);

(statearr_39832_39863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39800 === (10))){
var inst_39752 = (state_39799[(8)]);
var inst_39754 = (state_39799[(9)]);
var inst_39759 = cljs.core._nth.call(null,inst_39752,inst_39754);
var state_39799__$1 = state_39799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39799__$1,(13),out,inst_39759);
} else {
if((state_val_39800 === (18))){
var inst_39765 = (state_39799[(7)]);
var inst_39774 = cljs.core.first.call(null,inst_39765);
var state_39799__$1 = state_39799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39799__$1,(20),out,inst_39774);
} else {
if((state_val_39800 === (8))){
var inst_39754 = (state_39799[(9)]);
var inst_39753 = (state_39799[(11)]);
var inst_39756 = (inst_39754 < inst_39753);
var inst_39757 = inst_39756;
var state_39799__$1 = state_39799;
if(cljs.core.truth_(inst_39757)){
var statearr_39833_39864 = state_39799__$1;
(statearr_39833_39864[(1)] = (10));

} else {
var statearr_39834_39865 = state_39799__$1;
(statearr_39834_39865[(1)] = (11));

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
});})(c__28055__auto__))
;
return ((function (switch__27943__auto__,c__28055__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27944__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27944__auto____0 = (function (){
var statearr_39838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39838[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27944__auto__);

(statearr_39838[(1)] = (1));

return statearr_39838;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27944__auto____1 = (function (state_39799){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_39799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e39839){if((e39839 instanceof Object)){
var ex__27947__auto__ = e39839;
var statearr_39840_39866 = state_39799;
(statearr_39840_39866[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39867 = state_39799;
state_39799 = G__39867;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27944__auto__ = function(state_39799){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27944__auto____1.call(this,state_39799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27944__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27944__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto__))
})();
var state__28057__auto__ = (function (){var statearr_39841 = f__28056__auto__.call(null);
(statearr_39841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto__);

return statearr_39841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto__))
);

return c__28055__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39868 = [];
var len__25996__auto___39871 = arguments.length;
var i__25997__auto___39872 = (0);
while(true){
if((i__25997__auto___39872 < len__25996__auto___39871)){
args39868.push((arguments[i__25997__auto___39872]));

var G__39873 = (i__25997__auto___39872 + (1));
i__25997__auto___39872 = G__39873;
continue;
} else {
}
break;
}

var G__39870 = args39868.length;
switch (G__39870) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39868.length)].join('')));

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
var args39875 = [];
var len__25996__auto___39878 = arguments.length;
var i__25997__auto___39879 = (0);
while(true){
if((i__25997__auto___39879 < len__25996__auto___39878)){
args39875.push((arguments[i__25997__auto___39879]));

var G__39880 = (i__25997__auto___39879 + (1));
i__25997__auto___39879 = G__39880;
continue;
} else {
}
break;
}

var G__39877 = args39875.length;
switch (G__39877) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39875.length)].join('')));

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
var args39882 = [];
var len__25996__auto___39933 = arguments.length;
var i__25997__auto___39934 = (0);
while(true){
if((i__25997__auto___39934 < len__25996__auto___39933)){
args39882.push((arguments[i__25997__auto___39934]));

var G__39935 = (i__25997__auto___39934 + (1));
i__25997__auto___39934 = G__39935;
continue;
} else {
}
break;
}

var G__39884 = args39882.length;
switch (G__39884) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39882.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28055__auto___39937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___39937,out){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___39937,out){
return (function (state_39908){
var state_val_39909 = (state_39908[(1)]);
if((state_val_39909 === (7))){
var inst_39903 = (state_39908[(2)]);
var state_39908__$1 = state_39908;
var statearr_39910_39938 = state_39908__$1;
(statearr_39910_39938[(2)] = inst_39903);

(statearr_39910_39938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39909 === (1))){
var inst_39885 = null;
var state_39908__$1 = (function (){var statearr_39911 = state_39908;
(statearr_39911[(7)] = inst_39885);

return statearr_39911;
})();
var statearr_39912_39939 = state_39908__$1;
(statearr_39912_39939[(2)] = null);

(statearr_39912_39939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39909 === (4))){
var inst_39888 = (state_39908[(8)]);
var inst_39888__$1 = (state_39908[(2)]);
var inst_39889 = (inst_39888__$1 == null);
var inst_39890 = cljs.core.not.call(null,inst_39889);
var state_39908__$1 = (function (){var statearr_39913 = state_39908;
(statearr_39913[(8)] = inst_39888__$1);

return statearr_39913;
})();
if(inst_39890){
var statearr_39914_39940 = state_39908__$1;
(statearr_39914_39940[(1)] = (5));

} else {
var statearr_39915_39941 = state_39908__$1;
(statearr_39915_39941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39909 === (6))){
var state_39908__$1 = state_39908;
var statearr_39916_39942 = state_39908__$1;
(statearr_39916_39942[(2)] = null);

(statearr_39916_39942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39909 === (3))){
var inst_39905 = (state_39908[(2)]);
var inst_39906 = cljs.core.async.close_BANG_.call(null,out);
var state_39908__$1 = (function (){var statearr_39917 = state_39908;
(statearr_39917[(9)] = inst_39905);

return statearr_39917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39908__$1,inst_39906);
} else {
if((state_val_39909 === (2))){
var state_39908__$1 = state_39908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39908__$1,(4),ch);
} else {
if((state_val_39909 === (11))){
var inst_39888 = (state_39908[(8)]);
var inst_39897 = (state_39908[(2)]);
var inst_39885 = inst_39888;
var state_39908__$1 = (function (){var statearr_39918 = state_39908;
(statearr_39918[(10)] = inst_39897);

(statearr_39918[(7)] = inst_39885);

return statearr_39918;
})();
var statearr_39919_39943 = state_39908__$1;
(statearr_39919_39943[(2)] = null);

(statearr_39919_39943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39909 === (9))){
var inst_39888 = (state_39908[(8)]);
var state_39908__$1 = state_39908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39908__$1,(11),out,inst_39888);
} else {
if((state_val_39909 === (5))){
var inst_39885 = (state_39908[(7)]);
var inst_39888 = (state_39908[(8)]);
var inst_39892 = cljs.core._EQ_.call(null,inst_39888,inst_39885);
var state_39908__$1 = state_39908;
if(inst_39892){
var statearr_39921_39944 = state_39908__$1;
(statearr_39921_39944[(1)] = (8));

} else {
var statearr_39922_39945 = state_39908__$1;
(statearr_39922_39945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39909 === (10))){
var inst_39900 = (state_39908[(2)]);
var state_39908__$1 = state_39908;
var statearr_39923_39946 = state_39908__$1;
(statearr_39923_39946[(2)] = inst_39900);

(statearr_39923_39946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39909 === (8))){
var inst_39885 = (state_39908[(7)]);
var tmp39920 = inst_39885;
var inst_39885__$1 = tmp39920;
var state_39908__$1 = (function (){var statearr_39924 = state_39908;
(statearr_39924[(7)] = inst_39885__$1);

return statearr_39924;
})();
var statearr_39925_39947 = state_39908__$1;
(statearr_39925_39947[(2)] = null);

(statearr_39925_39947[(1)] = (2));


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
});})(c__28055__auto___39937,out))
;
return ((function (switch__27943__auto__,c__28055__auto___39937,out){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_39929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39929[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_39929[(1)] = (1));

return statearr_39929;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_39908){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_39908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e39930){if((e39930 instanceof Object)){
var ex__27947__auto__ = e39930;
var statearr_39931_39948 = state_39908;
(statearr_39931_39948[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39949 = state_39908;
state_39908 = G__39949;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_39908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_39908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___39937,out))
})();
var state__28057__auto__ = (function (){var statearr_39932 = f__28056__auto__.call(null);
(statearr_39932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___39937);

return statearr_39932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___39937,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39950 = [];
var len__25996__auto___40020 = arguments.length;
var i__25997__auto___40021 = (0);
while(true){
if((i__25997__auto___40021 < len__25996__auto___40020)){
args39950.push((arguments[i__25997__auto___40021]));

var G__40022 = (i__25997__auto___40021 + (1));
i__25997__auto___40021 = G__40022;
continue;
} else {
}
break;
}

var G__39952 = args39950.length;
switch (G__39952) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39950.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28055__auto___40024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___40024,out){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___40024,out){
return (function (state_39990){
var state_val_39991 = (state_39990[(1)]);
if((state_val_39991 === (7))){
var inst_39986 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_39992_40025 = state_39990__$1;
(statearr_39992_40025[(2)] = inst_39986);

(statearr_39992_40025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (1))){
var inst_39953 = (new Array(n));
var inst_39954 = inst_39953;
var inst_39955 = (0);
var state_39990__$1 = (function (){var statearr_39993 = state_39990;
(statearr_39993[(7)] = inst_39955);

(statearr_39993[(8)] = inst_39954);

return statearr_39993;
})();
var statearr_39994_40026 = state_39990__$1;
(statearr_39994_40026[(2)] = null);

(statearr_39994_40026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (4))){
var inst_39958 = (state_39990[(9)]);
var inst_39958__$1 = (state_39990[(2)]);
var inst_39959 = (inst_39958__$1 == null);
var inst_39960 = cljs.core.not.call(null,inst_39959);
var state_39990__$1 = (function (){var statearr_39995 = state_39990;
(statearr_39995[(9)] = inst_39958__$1);

return statearr_39995;
})();
if(inst_39960){
var statearr_39996_40027 = state_39990__$1;
(statearr_39996_40027[(1)] = (5));

} else {
var statearr_39997_40028 = state_39990__$1;
(statearr_39997_40028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (15))){
var inst_39980 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_39998_40029 = state_39990__$1;
(statearr_39998_40029[(2)] = inst_39980);

(statearr_39998_40029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (13))){
var state_39990__$1 = state_39990;
var statearr_39999_40030 = state_39990__$1;
(statearr_39999_40030[(2)] = null);

(statearr_39999_40030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (6))){
var inst_39955 = (state_39990[(7)]);
var inst_39976 = (inst_39955 > (0));
var state_39990__$1 = state_39990;
if(cljs.core.truth_(inst_39976)){
var statearr_40000_40031 = state_39990__$1;
(statearr_40000_40031[(1)] = (12));

} else {
var statearr_40001_40032 = state_39990__$1;
(statearr_40001_40032[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (3))){
var inst_39988 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39990__$1,inst_39988);
} else {
if((state_val_39991 === (12))){
var inst_39954 = (state_39990[(8)]);
var inst_39978 = cljs.core.vec.call(null,inst_39954);
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39990__$1,(15),out,inst_39978);
} else {
if((state_val_39991 === (2))){
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39990__$1,(4),ch);
} else {
if((state_val_39991 === (11))){
var inst_39970 = (state_39990[(2)]);
var inst_39971 = (new Array(n));
var inst_39954 = inst_39971;
var inst_39955 = (0);
var state_39990__$1 = (function (){var statearr_40002 = state_39990;
(statearr_40002[(10)] = inst_39970);

(statearr_40002[(7)] = inst_39955);

(statearr_40002[(8)] = inst_39954);

return statearr_40002;
})();
var statearr_40003_40033 = state_39990__$1;
(statearr_40003_40033[(2)] = null);

(statearr_40003_40033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (9))){
var inst_39954 = (state_39990[(8)]);
var inst_39968 = cljs.core.vec.call(null,inst_39954);
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39990__$1,(11),out,inst_39968);
} else {
if((state_val_39991 === (5))){
var inst_39963 = (state_39990[(11)]);
var inst_39958 = (state_39990[(9)]);
var inst_39955 = (state_39990[(7)]);
var inst_39954 = (state_39990[(8)]);
var inst_39962 = (inst_39954[inst_39955] = inst_39958);
var inst_39963__$1 = (inst_39955 + (1));
var inst_39964 = (inst_39963__$1 < n);
var state_39990__$1 = (function (){var statearr_40004 = state_39990;
(statearr_40004[(11)] = inst_39963__$1);

(statearr_40004[(12)] = inst_39962);

return statearr_40004;
})();
if(cljs.core.truth_(inst_39964)){
var statearr_40005_40034 = state_39990__$1;
(statearr_40005_40034[(1)] = (8));

} else {
var statearr_40006_40035 = state_39990__$1;
(statearr_40006_40035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (14))){
var inst_39983 = (state_39990[(2)]);
var inst_39984 = cljs.core.async.close_BANG_.call(null,out);
var state_39990__$1 = (function (){var statearr_40008 = state_39990;
(statearr_40008[(13)] = inst_39983);

return statearr_40008;
})();
var statearr_40009_40036 = state_39990__$1;
(statearr_40009_40036[(2)] = inst_39984);

(statearr_40009_40036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (10))){
var inst_39974 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40010_40037 = state_39990__$1;
(statearr_40010_40037[(2)] = inst_39974);

(statearr_40010_40037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (8))){
var inst_39963 = (state_39990[(11)]);
var inst_39954 = (state_39990[(8)]);
var tmp40007 = inst_39954;
var inst_39954__$1 = tmp40007;
var inst_39955 = inst_39963;
var state_39990__$1 = (function (){var statearr_40011 = state_39990;
(statearr_40011[(7)] = inst_39955);

(statearr_40011[(8)] = inst_39954__$1);

return statearr_40011;
})();
var statearr_40012_40038 = state_39990__$1;
(statearr_40012_40038[(2)] = null);

(statearr_40012_40038[(1)] = (2));


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
});})(c__28055__auto___40024,out))
;
return ((function (switch__27943__auto__,c__28055__auto___40024,out){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_40016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40016[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_40016[(1)] = (1));

return statearr_40016;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_39990){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_39990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e40017){if((e40017 instanceof Object)){
var ex__27947__auto__ = e40017;
var statearr_40018_40039 = state_39990;
(statearr_40018_40039[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40040 = state_39990;
state_39990 = G__40040;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_39990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_39990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___40024,out))
})();
var state__28057__auto__ = (function (){var statearr_40019 = f__28056__auto__.call(null);
(statearr_40019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___40024);

return statearr_40019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___40024,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args40041 = [];
var len__25996__auto___40115 = arguments.length;
var i__25997__auto___40116 = (0);
while(true){
if((i__25997__auto___40116 < len__25996__auto___40115)){
args40041.push((arguments[i__25997__auto___40116]));

var G__40117 = (i__25997__auto___40116 + (1));
i__25997__auto___40116 = G__40117;
continue;
} else {
}
break;
}

var G__40043 = args40041.length;
switch (G__40043) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40041.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28055__auto___40119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___40119,out){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___40119,out){
return (function (state_40085){
var state_val_40086 = (state_40085[(1)]);
if((state_val_40086 === (7))){
var inst_40081 = (state_40085[(2)]);
var state_40085__$1 = state_40085;
var statearr_40087_40120 = state_40085__$1;
(statearr_40087_40120[(2)] = inst_40081);

(statearr_40087_40120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (1))){
var inst_40044 = [];
var inst_40045 = inst_40044;
var inst_40046 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40085__$1 = (function (){var statearr_40088 = state_40085;
(statearr_40088[(7)] = inst_40045);

(statearr_40088[(8)] = inst_40046);

return statearr_40088;
})();
var statearr_40089_40121 = state_40085__$1;
(statearr_40089_40121[(2)] = null);

(statearr_40089_40121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (4))){
var inst_40049 = (state_40085[(9)]);
var inst_40049__$1 = (state_40085[(2)]);
var inst_40050 = (inst_40049__$1 == null);
var inst_40051 = cljs.core.not.call(null,inst_40050);
var state_40085__$1 = (function (){var statearr_40090 = state_40085;
(statearr_40090[(9)] = inst_40049__$1);

return statearr_40090;
})();
if(inst_40051){
var statearr_40091_40122 = state_40085__$1;
(statearr_40091_40122[(1)] = (5));

} else {
var statearr_40092_40123 = state_40085__$1;
(statearr_40092_40123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (15))){
var inst_40075 = (state_40085[(2)]);
var state_40085__$1 = state_40085;
var statearr_40093_40124 = state_40085__$1;
(statearr_40093_40124[(2)] = inst_40075);

(statearr_40093_40124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (13))){
var state_40085__$1 = state_40085;
var statearr_40094_40125 = state_40085__$1;
(statearr_40094_40125[(2)] = null);

(statearr_40094_40125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (6))){
var inst_40045 = (state_40085[(7)]);
var inst_40070 = inst_40045.length;
var inst_40071 = (inst_40070 > (0));
var state_40085__$1 = state_40085;
if(cljs.core.truth_(inst_40071)){
var statearr_40095_40126 = state_40085__$1;
(statearr_40095_40126[(1)] = (12));

} else {
var statearr_40096_40127 = state_40085__$1;
(statearr_40096_40127[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (3))){
var inst_40083 = (state_40085[(2)]);
var state_40085__$1 = state_40085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40085__$1,inst_40083);
} else {
if((state_val_40086 === (12))){
var inst_40045 = (state_40085[(7)]);
var inst_40073 = cljs.core.vec.call(null,inst_40045);
var state_40085__$1 = state_40085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40085__$1,(15),out,inst_40073);
} else {
if((state_val_40086 === (2))){
var state_40085__$1 = state_40085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40085__$1,(4),ch);
} else {
if((state_val_40086 === (11))){
var inst_40049 = (state_40085[(9)]);
var inst_40053 = (state_40085[(10)]);
var inst_40063 = (state_40085[(2)]);
var inst_40064 = [];
var inst_40065 = inst_40064.push(inst_40049);
var inst_40045 = inst_40064;
var inst_40046 = inst_40053;
var state_40085__$1 = (function (){var statearr_40097 = state_40085;
(statearr_40097[(7)] = inst_40045);

(statearr_40097[(8)] = inst_40046);

(statearr_40097[(11)] = inst_40065);

(statearr_40097[(12)] = inst_40063);

return statearr_40097;
})();
var statearr_40098_40128 = state_40085__$1;
(statearr_40098_40128[(2)] = null);

(statearr_40098_40128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (9))){
var inst_40045 = (state_40085[(7)]);
var inst_40061 = cljs.core.vec.call(null,inst_40045);
var state_40085__$1 = state_40085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40085__$1,(11),out,inst_40061);
} else {
if((state_val_40086 === (5))){
var inst_40046 = (state_40085[(8)]);
var inst_40049 = (state_40085[(9)]);
var inst_40053 = (state_40085[(10)]);
var inst_40053__$1 = f.call(null,inst_40049);
var inst_40054 = cljs.core._EQ_.call(null,inst_40053__$1,inst_40046);
var inst_40055 = cljs.core.keyword_identical_QMARK_.call(null,inst_40046,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40056 = (inst_40054) || (inst_40055);
var state_40085__$1 = (function (){var statearr_40099 = state_40085;
(statearr_40099[(10)] = inst_40053__$1);

return statearr_40099;
})();
if(cljs.core.truth_(inst_40056)){
var statearr_40100_40129 = state_40085__$1;
(statearr_40100_40129[(1)] = (8));

} else {
var statearr_40101_40130 = state_40085__$1;
(statearr_40101_40130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (14))){
var inst_40078 = (state_40085[(2)]);
var inst_40079 = cljs.core.async.close_BANG_.call(null,out);
var state_40085__$1 = (function (){var statearr_40103 = state_40085;
(statearr_40103[(13)] = inst_40078);

return statearr_40103;
})();
var statearr_40104_40131 = state_40085__$1;
(statearr_40104_40131[(2)] = inst_40079);

(statearr_40104_40131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (10))){
var inst_40068 = (state_40085[(2)]);
var state_40085__$1 = state_40085;
var statearr_40105_40132 = state_40085__$1;
(statearr_40105_40132[(2)] = inst_40068);

(statearr_40105_40132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (8))){
var inst_40045 = (state_40085[(7)]);
var inst_40049 = (state_40085[(9)]);
var inst_40053 = (state_40085[(10)]);
var inst_40058 = inst_40045.push(inst_40049);
var tmp40102 = inst_40045;
var inst_40045__$1 = tmp40102;
var inst_40046 = inst_40053;
var state_40085__$1 = (function (){var statearr_40106 = state_40085;
(statearr_40106[(7)] = inst_40045__$1);

(statearr_40106[(8)] = inst_40046);

(statearr_40106[(14)] = inst_40058);

return statearr_40106;
})();
var statearr_40107_40133 = state_40085__$1;
(statearr_40107_40133[(2)] = null);

(statearr_40107_40133[(1)] = (2));


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
});})(c__28055__auto___40119,out))
;
return ((function (switch__27943__auto__,c__28055__auto___40119,out){
return (function() {
var cljs$core$async$state_machine__27944__auto__ = null;
var cljs$core$async$state_machine__27944__auto____0 = (function (){
var statearr_40111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40111[(0)] = cljs$core$async$state_machine__27944__auto__);

(statearr_40111[(1)] = (1));

return statearr_40111;
});
var cljs$core$async$state_machine__27944__auto____1 = (function (state_40085){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_40085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e40112){if((e40112 instanceof Object)){
var ex__27947__auto__ = e40112;
var statearr_40113_40134 = state_40085;
(statearr_40113_40134[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40135 = state_40085;
state_40085 = G__40135;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
cljs$core$async$state_machine__27944__auto__ = function(state_40085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27944__auto____1.call(this,state_40085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27944__auto____0;
cljs$core$async$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27944__auto____1;
return cljs$core$async$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___40119,out))
})();
var state__28057__auto__ = (function (){var statearr_40114 = f__28056__auto__.call(null);
(statearr_40114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___40119);

return statearr_40114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___40119,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1480194646202