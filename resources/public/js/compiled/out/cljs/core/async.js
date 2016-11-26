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
var args34170 = [];
var len__25996__auto___34176 = arguments.length;
var i__25997__auto___34177 = (0);
while(true){
if((i__25997__auto___34177 < len__25996__auto___34176)){
args34170.push((arguments[i__25997__auto___34177]));

var G__34178 = (i__25997__auto___34177 + (1));
i__25997__auto___34177 = G__34178;
continue;
} else {
}
break;
}

var G__34172 = args34170.length;
switch (G__34172) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34170.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34173 = (function (f,blockable,meta34174){
this.f = f;
this.blockable = blockable;
this.meta34174 = meta34174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34175,meta34174__$1){
var self__ = this;
var _34175__$1 = this;
return (new cljs.core.async.t_cljs$core$async34173(self__.f,self__.blockable,meta34174__$1));
});

cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34175){
var self__ = this;
var _34175__$1 = this;
return self__.meta34174;
});

cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34174","meta34174",1589288616,null)], null);
});

cljs.core.async.t_cljs$core$async34173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34173";

cljs.core.async.t_cljs$core$async34173.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async34173");
});

cljs.core.async.__GT_t_cljs$core$async34173 = (function cljs$core$async$__GT_t_cljs$core$async34173(f__$1,blockable__$1,meta34174){
return (new cljs.core.async.t_cljs$core$async34173(f__$1,blockable__$1,meta34174));
});

}

return (new cljs.core.async.t_cljs$core$async34173(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args34182 = [];
var len__25996__auto___34185 = arguments.length;
var i__25997__auto___34186 = (0);
while(true){
if((i__25997__auto___34186 < len__25996__auto___34185)){
args34182.push((arguments[i__25997__auto___34186]));

var G__34187 = (i__25997__auto___34186 + (1));
i__25997__auto___34186 = G__34187;
continue;
} else {
}
break;
}

var G__34184 = args34182.length;
switch (G__34184) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34182.length)].join('')));

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
var args34189 = [];
var len__25996__auto___34192 = arguments.length;
var i__25997__auto___34193 = (0);
while(true){
if((i__25997__auto___34193 < len__25996__auto___34192)){
args34189.push((arguments[i__25997__auto___34193]));

var G__34194 = (i__25997__auto___34193 + (1));
i__25997__auto___34193 = G__34194;
continue;
} else {
}
break;
}

var G__34191 = args34189.length;
switch (G__34191) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34189.length)].join('')));

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
var args34196 = [];
var len__25996__auto___34199 = arguments.length;
var i__25997__auto___34200 = (0);
while(true){
if((i__25997__auto___34200 < len__25996__auto___34199)){
args34196.push((arguments[i__25997__auto___34200]));

var G__34201 = (i__25997__auto___34200 + (1));
i__25997__auto___34200 = G__34201;
continue;
} else {
}
break;
}

var G__34198 = args34196.length;
switch (G__34198) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34196.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34203 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34203);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34203,ret){
return (function (){
return fn1.call(null,val_34203);
});})(val_34203,ret))
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
var args34204 = [];
var len__25996__auto___34207 = arguments.length;
var i__25997__auto___34208 = (0);
while(true){
if((i__25997__auto___34208 < len__25996__auto___34207)){
args34204.push((arguments[i__25997__auto___34208]));

var G__34209 = (i__25997__auto___34208 + (1));
i__25997__auto___34208 = G__34209;
continue;
} else {
}
break;
}

var G__34206 = args34204.length;
switch (G__34206) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34204.length)].join('')));

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
var n__25806__auto___34211 = n;
var x_34212 = (0);
while(true){
if((x_34212 < n__25806__auto___34211)){
(a[x_34212] = (0));

var G__34213 = (x_34212 + (1));
x_34212 = G__34213;
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

var G__34214 = (i + (1));
i = G__34214;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34218 = (function (flag,meta34219){
this.flag = flag;
this.meta34219 = meta34219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34220,meta34219__$1){
var self__ = this;
var _34220__$1 = this;
return (new cljs.core.async.t_cljs$core$async34218(self__.flag,meta34219__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34220){
var self__ = this;
var _34220__$1 = this;
return self__.meta34219;
});})(flag))
;

cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34218.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34219","meta34219",-1606973855,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34218";

cljs.core.async.t_cljs$core$async34218.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async34218");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34218 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34218(flag__$1,meta34219){
return (new cljs.core.async.t_cljs$core$async34218(flag__$1,meta34219));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34218(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34224 = (function (flag,cb,meta34225){
this.flag = flag;
this.cb = cb;
this.meta34225 = meta34225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34226,meta34225__$1){
var self__ = this;
var _34226__$1 = this;
return (new cljs.core.async.t_cljs$core$async34224(self__.flag,self__.cb,meta34225__$1));
});

cljs.core.async.t_cljs$core$async34224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34226){
var self__ = this;
var _34226__$1 = this;
return self__.meta34225;
});

cljs.core.async.t_cljs$core$async34224.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34224.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34225","meta34225",-2041794156,null)], null);
});

cljs.core.async.t_cljs$core$async34224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34224";

cljs.core.async.t_cljs$core$async34224.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async34224");
});

cljs.core.async.__GT_t_cljs$core$async34224 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34224(flag__$1,cb__$1,meta34225){
return (new cljs.core.async.t_cljs$core$async34224(flag__$1,cb__$1,meta34225));
});

}

return (new cljs.core.async.t_cljs$core$async34224(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34227_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34227_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34228_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34228_SHARP_,port], null));
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
var G__34229 = (i + (1));
i = G__34229;
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
var len__25996__auto___34235 = arguments.length;
var i__25997__auto___34236 = (0);
while(true){
if((i__25997__auto___34236 < len__25996__auto___34235)){
args__26003__auto__.push((arguments[i__25997__auto___34236]));

var G__34237 = (i__25997__auto___34236 + (1));
i__25997__auto___34236 = G__34237;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((1) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26004__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34232){
var map__34233 = p__34232;
var map__34233__$1 = ((((!((map__34233 == null)))?((((map__34233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34233):map__34233);
var opts = map__34233__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34230){
var G__34231 = cljs.core.first.call(null,seq34230);
var seq34230__$1 = cljs.core.next.call(null,seq34230);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34231,seq34230__$1);
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
var args34238 = [];
var len__25996__auto___34288 = arguments.length;
var i__25997__auto___34289 = (0);
while(true){
if((i__25997__auto___34289 < len__25996__auto___34288)){
args34238.push((arguments[i__25997__auto___34289]));

var G__34290 = (i__25997__auto___34289 + (1));
i__25997__auto___34289 = G__34290;
continue;
} else {
}
break;
}

var G__34240 = args34238.length;
switch (G__34240) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34238.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27021__auto___34292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___34292){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___34292){
return (function (state_34264){
var state_val_34265 = (state_34264[(1)]);
if((state_val_34265 === (7))){
var inst_34260 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34266_34293 = state_34264__$1;
(statearr_34266_34293[(2)] = inst_34260);

(statearr_34266_34293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (1))){
var state_34264__$1 = state_34264;
var statearr_34267_34294 = state_34264__$1;
(statearr_34267_34294[(2)] = null);

(statearr_34267_34294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (4))){
var inst_34243 = (state_34264[(7)]);
var inst_34243__$1 = (state_34264[(2)]);
var inst_34244 = (inst_34243__$1 == null);
var state_34264__$1 = (function (){var statearr_34268 = state_34264;
(statearr_34268[(7)] = inst_34243__$1);

return statearr_34268;
})();
if(cljs.core.truth_(inst_34244)){
var statearr_34269_34295 = state_34264__$1;
(statearr_34269_34295[(1)] = (5));

} else {
var statearr_34270_34296 = state_34264__$1;
(statearr_34270_34296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (13))){
var state_34264__$1 = state_34264;
var statearr_34271_34297 = state_34264__$1;
(statearr_34271_34297[(2)] = null);

(statearr_34271_34297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (6))){
var inst_34243 = (state_34264[(7)]);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34264__$1,(11),to,inst_34243);
} else {
if((state_val_34265 === (3))){
var inst_34262 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34264__$1,inst_34262);
} else {
if((state_val_34265 === (12))){
var state_34264__$1 = state_34264;
var statearr_34272_34298 = state_34264__$1;
(statearr_34272_34298[(2)] = null);

(statearr_34272_34298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (2))){
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34264__$1,(4),from);
} else {
if((state_val_34265 === (11))){
var inst_34253 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
if(cljs.core.truth_(inst_34253)){
var statearr_34273_34299 = state_34264__$1;
(statearr_34273_34299[(1)] = (12));

} else {
var statearr_34274_34300 = state_34264__$1;
(statearr_34274_34300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (9))){
var state_34264__$1 = state_34264;
var statearr_34275_34301 = state_34264__$1;
(statearr_34275_34301[(2)] = null);

(statearr_34275_34301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (5))){
var state_34264__$1 = state_34264;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34276_34302 = state_34264__$1;
(statearr_34276_34302[(1)] = (8));

} else {
var statearr_34277_34303 = state_34264__$1;
(statearr_34277_34303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (14))){
var inst_34258 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34278_34304 = state_34264__$1;
(statearr_34278_34304[(2)] = inst_34258);

(statearr_34278_34304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (10))){
var inst_34250 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34279_34305 = state_34264__$1;
(statearr_34279_34305[(2)] = inst_34250);

(statearr_34279_34305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (8))){
var inst_34247 = cljs.core.async.close_BANG_.call(null,to);
var state_34264__$1 = state_34264;
var statearr_34280_34306 = state_34264__$1;
(statearr_34280_34306[(2)] = inst_34247);

(statearr_34280_34306[(1)] = (10));


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
});})(c__27021__auto___34292))
;
return ((function (switch__26956__auto__,c__27021__auto___34292){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_34284 = [null,null,null,null,null,null,null,null];
(statearr_34284[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_34284[(1)] = (1));

return statearr_34284;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_34264){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_34264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e34285){if((e34285 instanceof Object)){
var ex__26960__auto__ = e34285;
var statearr_34286_34307 = state_34264;
(statearr_34286_34307[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34308 = state_34264;
state_34264 = G__34308;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_34264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_34264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___34292))
})();
var state__27023__auto__ = (function (){var statearr_34287 = f__27022__auto__.call(null);
(statearr_34287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___34292);

return statearr_34287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___34292))
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
return (function (p__34496){
var vec__34497 = p__34496;
var v = cljs.core.nth.call(null,vec__34497,(0),null);
var p = cljs.core.nth.call(null,vec__34497,(1),null);
var job = vec__34497;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27021__auto___34683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___34683,res,vec__34497,v,p,job,jobs,results){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___34683,res,vec__34497,v,p,job,jobs,results){
return (function (state_34504){
var state_val_34505 = (state_34504[(1)]);
if((state_val_34505 === (1))){
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34504__$1,(2),res,v);
} else {
if((state_val_34505 === (2))){
var inst_34501 = (state_34504[(2)]);
var inst_34502 = cljs.core.async.close_BANG_.call(null,res);
var state_34504__$1 = (function (){var statearr_34506 = state_34504;
(statearr_34506[(7)] = inst_34501);

return statearr_34506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34504__$1,inst_34502);
} else {
return null;
}
}
});})(c__27021__auto___34683,res,vec__34497,v,p,job,jobs,results))
;
return ((function (switch__26956__auto__,c__27021__auto___34683,res,vec__34497,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0 = (function (){
var statearr_34510 = [null,null,null,null,null,null,null,null];
(statearr_34510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__);

(statearr_34510[(1)] = (1));

return statearr_34510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1 = (function (state_34504){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_34504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e34511){if((e34511 instanceof Object)){
var ex__26960__auto__ = e34511;
var statearr_34512_34684 = state_34504;
(statearr_34512_34684[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34685 = state_34504;
state_34504 = G__34685;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__ = function(state_34504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1.call(this,state_34504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___34683,res,vec__34497,v,p,job,jobs,results))
})();
var state__27023__auto__ = (function (){var statearr_34513 = f__27022__auto__.call(null);
(statearr_34513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___34683);

return statearr_34513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___34683,res,vec__34497,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34514){
var vec__34515 = p__34514;
var v = cljs.core.nth.call(null,vec__34515,(0),null);
var p = cljs.core.nth.call(null,vec__34515,(1),null);
var job = vec__34515;
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
var n__25806__auto___34686 = n;
var __34687 = (0);
while(true){
if((__34687 < n__25806__auto___34686)){
var G__34518_34688 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34518_34688) {
case "compute":
var c__27021__auto___34690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34687,c__27021__auto___34690,G__34518_34688,n__25806__auto___34686,jobs,results,process,async){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (__34687,c__27021__auto___34690,G__34518_34688,n__25806__auto___34686,jobs,results,process,async){
return (function (state_34531){
var state_val_34532 = (state_34531[(1)]);
if((state_val_34532 === (1))){
var state_34531__$1 = state_34531;
var statearr_34533_34691 = state_34531__$1;
(statearr_34533_34691[(2)] = null);

(statearr_34533_34691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (2))){
var state_34531__$1 = state_34531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34531__$1,(4),jobs);
} else {
if((state_val_34532 === (3))){
var inst_34529 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34531__$1,inst_34529);
} else {
if((state_val_34532 === (4))){
var inst_34521 = (state_34531[(2)]);
var inst_34522 = process.call(null,inst_34521);
var state_34531__$1 = state_34531;
if(cljs.core.truth_(inst_34522)){
var statearr_34534_34692 = state_34531__$1;
(statearr_34534_34692[(1)] = (5));

} else {
var statearr_34535_34693 = state_34531__$1;
(statearr_34535_34693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (5))){
var state_34531__$1 = state_34531;
var statearr_34536_34694 = state_34531__$1;
(statearr_34536_34694[(2)] = null);

(statearr_34536_34694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (6))){
var state_34531__$1 = state_34531;
var statearr_34537_34695 = state_34531__$1;
(statearr_34537_34695[(2)] = null);

(statearr_34537_34695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (7))){
var inst_34527 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
var statearr_34538_34696 = state_34531__$1;
(statearr_34538_34696[(2)] = inst_34527);

(statearr_34538_34696[(1)] = (3));


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
});})(__34687,c__27021__auto___34690,G__34518_34688,n__25806__auto___34686,jobs,results,process,async))
;
return ((function (__34687,switch__26956__auto__,c__27021__auto___34690,G__34518_34688,n__25806__auto___34686,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0 = (function (){
var statearr_34542 = [null,null,null,null,null,null,null];
(statearr_34542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__);

(statearr_34542[(1)] = (1));

return statearr_34542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1 = (function (state_34531){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_34531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e34543){if((e34543 instanceof Object)){
var ex__26960__auto__ = e34543;
var statearr_34544_34697 = state_34531;
(statearr_34544_34697[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34698 = state_34531;
state_34531 = G__34698;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__ = function(state_34531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1.call(this,state_34531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__;
})()
;})(__34687,switch__26956__auto__,c__27021__auto___34690,G__34518_34688,n__25806__auto___34686,jobs,results,process,async))
})();
var state__27023__auto__ = (function (){var statearr_34545 = f__27022__auto__.call(null);
(statearr_34545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___34690);

return statearr_34545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(__34687,c__27021__auto___34690,G__34518_34688,n__25806__auto___34686,jobs,results,process,async))
);


break;
case "async":
var c__27021__auto___34699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34687,c__27021__auto___34699,G__34518_34688,n__25806__auto___34686,jobs,results,process,async){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (__34687,c__27021__auto___34699,G__34518_34688,n__25806__auto___34686,jobs,results,process,async){
return (function (state_34558){
var state_val_34559 = (state_34558[(1)]);
if((state_val_34559 === (1))){
var state_34558__$1 = state_34558;
var statearr_34560_34700 = state_34558__$1;
(statearr_34560_34700[(2)] = null);

(statearr_34560_34700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (2))){
var state_34558__$1 = state_34558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34558__$1,(4),jobs);
} else {
if((state_val_34559 === (3))){
var inst_34556 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34558__$1,inst_34556);
} else {
if((state_val_34559 === (4))){
var inst_34548 = (state_34558[(2)]);
var inst_34549 = async.call(null,inst_34548);
var state_34558__$1 = state_34558;
if(cljs.core.truth_(inst_34549)){
var statearr_34561_34701 = state_34558__$1;
(statearr_34561_34701[(1)] = (5));

} else {
var statearr_34562_34702 = state_34558__$1;
(statearr_34562_34702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (5))){
var state_34558__$1 = state_34558;
var statearr_34563_34703 = state_34558__$1;
(statearr_34563_34703[(2)] = null);

(statearr_34563_34703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (6))){
var state_34558__$1 = state_34558;
var statearr_34564_34704 = state_34558__$1;
(statearr_34564_34704[(2)] = null);

(statearr_34564_34704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (7))){
var inst_34554 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
var statearr_34565_34705 = state_34558__$1;
(statearr_34565_34705[(2)] = inst_34554);

(statearr_34565_34705[(1)] = (3));


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
});})(__34687,c__27021__auto___34699,G__34518_34688,n__25806__auto___34686,jobs,results,process,async))
;
return ((function (__34687,switch__26956__auto__,c__27021__auto___34699,G__34518_34688,n__25806__auto___34686,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0 = (function (){
var statearr_34569 = [null,null,null,null,null,null,null];
(statearr_34569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__);

(statearr_34569[(1)] = (1));

return statearr_34569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1 = (function (state_34558){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_34558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e34570){if((e34570 instanceof Object)){
var ex__26960__auto__ = e34570;
var statearr_34571_34706 = state_34558;
(statearr_34571_34706[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34707 = state_34558;
state_34558 = G__34707;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__ = function(state_34558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1.call(this,state_34558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__;
})()
;})(__34687,switch__26956__auto__,c__27021__auto___34699,G__34518_34688,n__25806__auto___34686,jobs,results,process,async))
})();
var state__27023__auto__ = (function (){var statearr_34572 = f__27022__auto__.call(null);
(statearr_34572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___34699);

return statearr_34572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(__34687,c__27021__auto___34699,G__34518_34688,n__25806__auto___34686,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34708 = (__34687 + (1));
__34687 = G__34708;
continue;
} else {
}
break;
}

var c__27021__auto___34709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___34709,jobs,results,process,async){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___34709,jobs,results,process,async){
return (function (state_34594){
var state_val_34595 = (state_34594[(1)]);
if((state_val_34595 === (1))){
var state_34594__$1 = state_34594;
var statearr_34596_34710 = state_34594__$1;
(statearr_34596_34710[(2)] = null);

(statearr_34596_34710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (2))){
var state_34594__$1 = state_34594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34594__$1,(4),from);
} else {
if((state_val_34595 === (3))){
var inst_34592 = (state_34594[(2)]);
var state_34594__$1 = state_34594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34594__$1,inst_34592);
} else {
if((state_val_34595 === (4))){
var inst_34575 = (state_34594[(7)]);
var inst_34575__$1 = (state_34594[(2)]);
var inst_34576 = (inst_34575__$1 == null);
var state_34594__$1 = (function (){var statearr_34597 = state_34594;
(statearr_34597[(7)] = inst_34575__$1);

return statearr_34597;
})();
if(cljs.core.truth_(inst_34576)){
var statearr_34598_34711 = state_34594__$1;
(statearr_34598_34711[(1)] = (5));

} else {
var statearr_34599_34712 = state_34594__$1;
(statearr_34599_34712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (5))){
var inst_34578 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34594__$1 = state_34594;
var statearr_34600_34713 = state_34594__$1;
(statearr_34600_34713[(2)] = inst_34578);

(statearr_34600_34713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (6))){
var inst_34580 = (state_34594[(8)]);
var inst_34575 = (state_34594[(7)]);
var inst_34580__$1 = cljs.core.async.chan.call(null,(1));
var inst_34581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34582 = [inst_34575,inst_34580__$1];
var inst_34583 = (new cljs.core.PersistentVector(null,2,(5),inst_34581,inst_34582,null));
var state_34594__$1 = (function (){var statearr_34601 = state_34594;
(statearr_34601[(8)] = inst_34580__$1);

return statearr_34601;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34594__$1,(8),jobs,inst_34583);
} else {
if((state_val_34595 === (7))){
var inst_34590 = (state_34594[(2)]);
var state_34594__$1 = state_34594;
var statearr_34602_34714 = state_34594__$1;
(statearr_34602_34714[(2)] = inst_34590);

(statearr_34602_34714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (8))){
var inst_34580 = (state_34594[(8)]);
var inst_34585 = (state_34594[(2)]);
var state_34594__$1 = (function (){var statearr_34603 = state_34594;
(statearr_34603[(9)] = inst_34585);

return statearr_34603;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34594__$1,(9),results,inst_34580);
} else {
if((state_val_34595 === (9))){
var inst_34587 = (state_34594[(2)]);
var state_34594__$1 = (function (){var statearr_34604 = state_34594;
(statearr_34604[(10)] = inst_34587);

return statearr_34604;
})();
var statearr_34605_34715 = state_34594__$1;
(statearr_34605_34715[(2)] = null);

(statearr_34605_34715[(1)] = (2));


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
});})(c__27021__auto___34709,jobs,results,process,async))
;
return ((function (switch__26956__auto__,c__27021__auto___34709,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0 = (function (){
var statearr_34609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__);

(statearr_34609[(1)] = (1));

return statearr_34609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1 = (function (state_34594){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_34594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e34610){if((e34610 instanceof Object)){
var ex__26960__auto__ = e34610;
var statearr_34611_34716 = state_34594;
(statearr_34611_34716[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34717 = state_34594;
state_34594 = G__34717;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__ = function(state_34594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1.call(this,state_34594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___34709,jobs,results,process,async))
})();
var state__27023__auto__ = (function (){var statearr_34612 = f__27022__auto__.call(null);
(statearr_34612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___34709);

return statearr_34612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___34709,jobs,results,process,async))
);


var c__27021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto__,jobs,results,process,async){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto__,jobs,results,process,async){
return (function (state_34650){
var state_val_34651 = (state_34650[(1)]);
if((state_val_34651 === (7))){
var inst_34646 = (state_34650[(2)]);
var state_34650__$1 = state_34650;
var statearr_34652_34718 = state_34650__$1;
(statearr_34652_34718[(2)] = inst_34646);

(statearr_34652_34718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (20))){
var state_34650__$1 = state_34650;
var statearr_34653_34719 = state_34650__$1;
(statearr_34653_34719[(2)] = null);

(statearr_34653_34719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (1))){
var state_34650__$1 = state_34650;
var statearr_34654_34720 = state_34650__$1;
(statearr_34654_34720[(2)] = null);

(statearr_34654_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (4))){
var inst_34615 = (state_34650[(7)]);
var inst_34615__$1 = (state_34650[(2)]);
var inst_34616 = (inst_34615__$1 == null);
var state_34650__$1 = (function (){var statearr_34655 = state_34650;
(statearr_34655[(7)] = inst_34615__$1);

return statearr_34655;
})();
if(cljs.core.truth_(inst_34616)){
var statearr_34656_34721 = state_34650__$1;
(statearr_34656_34721[(1)] = (5));

} else {
var statearr_34657_34722 = state_34650__$1;
(statearr_34657_34722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (15))){
var inst_34628 = (state_34650[(8)]);
var state_34650__$1 = state_34650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34650__$1,(18),to,inst_34628);
} else {
if((state_val_34651 === (21))){
var inst_34641 = (state_34650[(2)]);
var state_34650__$1 = state_34650;
var statearr_34658_34723 = state_34650__$1;
(statearr_34658_34723[(2)] = inst_34641);

(statearr_34658_34723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (13))){
var inst_34643 = (state_34650[(2)]);
var state_34650__$1 = (function (){var statearr_34659 = state_34650;
(statearr_34659[(9)] = inst_34643);

return statearr_34659;
})();
var statearr_34660_34724 = state_34650__$1;
(statearr_34660_34724[(2)] = null);

(statearr_34660_34724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (6))){
var inst_34615 = (state_34650[(7)]);
var state_34650__$1 = state_34650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34650__$1,(11),inst_34615);
} else {
if((state_val_34651 === (17))){
var inst_34636 = (state_34650[(2)]);
var state_34650__$1 = state_34650;
if(cljs.core.truth_(inst_34636)){
var statearr_34661_34725 = state_34650__$1;
(statearr_34661_34725[(1)] = (19));

} else {
var statearr_34662_34726 = state_34650__$1;
(statearr_34662_34726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (3))){
var inst_34648 = (state_34650[(2)]);
var state_34650__$1 = state_34650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34650__$1,inst_34648);
} else {
if((state_val_34651 === (12))){
var inst_34625 = (state_34650[(10)]);
var state_34650__$1 = state_34650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34650__$1,(14),inst_34625);
} else {
if((state_val_34651 === (2))){
var state_34650__$1 = state_34650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34650__$1,(4),results);
} else {
if((state_val_34651 === (19))){
var state_34650__$1 = state_34650;
var statearr_34663_34727 = state_34650__$1;
(statearr_34663_34727[(2)] = null);

(statearr_34663_34727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (11))){
var inst_34625 = (state_34650[(2)]);
var state_34650__$1 = (function (){var statearr_34664 = state_34650;
(statearr_34664[(10)] = inst_34625);

return statearr_34664;
})();
var statearr_34665_34728 = state_34650__$1;
(statearr_34665_34728[(2)] = null);

(statearr_34665_34728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (9))){
var state_34650__$1 = state_34650;
var statearr_34666_34729 = state_34650__$1;
(statearr_34666_34729[(2)] = null);

(statearr_34666_34729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (5))){
var state_34650__$1 = state_34650;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34667_34730 = state_34650__$1;
(statearr_34667_34730[(1)] = (8));

} else {
var statearr_34668_34731 = state_34650__$1;
(statearr_34668_34731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (14))){
var inst_34628 = (state_34650[(8)]);
var inst_34630 = (state_34650[(11)]);
var inst_34628__$1 = (state_34650[(2)]);
var inst_34629 = (inst_34628__$1 == null);
var inst_34630__$1 = cljs.core.not.call(null,inst_34629);
var state_34650__$1 = (function (){var statearr_34669 = state_34650;
(statearr_34669[(8)] = inst_34628__$1);

(statearr_34669[(11)] = inst_34630__$1);

return statearr_34669;
})();
if(inst_34630__$1){
var statearr_34670_34732 = state_34650__$1;
(statearr_34670_34732[(1)] = (15));

} else {
var statearr_34671_34733 = state_34650__$1;
(statearr_34671_34733[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (16))){
var inst_34630 = (state_34650[(11)]);
var state_34650__$1 = state_34650;
var statearr_34672_34734 = state_34650__$1;
(statearr_34672_34734[(2)] = inst_34630);

(statearr_34672_34734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (10))){
var inst_34622 = (state_34650[(2)]);
var state_34650__$1 = state_34650;
var statearr_34673_34735 = state_34650__$1;
(statearr_34673_34735[(2)] = inst_34622);

(statearr_34673_34735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (18))){
var inst_34633 = (state_34650[(2)]);
var state_34650__$1 = state_34650;
var statearr_34674_34736 = state_34650__$1;
(statearr_34674_34736[(2)] = inst_34633);

(statearr_34674_34736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34651 === (8))){
var inst_34619 = cljs.core.async.close_BANG_.call(null,to);
var state_34650__$1 = state_34650;
var statearr_34675_34737 = state_34650__$1;
(statearr_34675_34737[(2)] = inst_34619);

(statearr_34675_34737[(1)] = (10));


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
});})(c__27021__auto__,jobs,results,process,async))
;
return ((function (switch__26956__auto__,c__27021__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0 = (function (){
var statearr_34679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__);

(statearr_34679[(1)] = (1));

return statearr_34679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1 = (function (state_34650){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_34650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e34680){if((e34680 instanceof Object)){
var ex__26960__auto__ = e34680;
var statearr_34681_34738 = state_34650;
(statearr_34681_34738[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34739 = state_34650;
state_34650 = G__34739;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__ = function(state_34650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1.call(this,state_34650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto__,jobs,results,process,async))
})();
var state__27023__auto__ = (function (){var statearr_34682 = f__27022__auto__.call(null);
(statearr_34682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto__);

return statearr_34682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto__,jobs,results,process,async))
);

return c__27021__auto__;
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
var args34740 = [];
var len__25996__auto___34743 = arguments.length;
var i__25997__auto___34744 = (0);
while(true){
if((i__25997__auto___34744 < len__25996__auto___34743)){
args34740.push((arguments[i__25997__auto___34744]));

var G__34745 = (i__25997__auto___34744 + (1));
i__25997__auto___34744 = G__34745;
continue;
} else {
}
break;
}

var G__34742 = args34740.length;
switch (G__34742) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34740.length)].join('')));

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
var args34747 = [];
var len__25996__auto___34750 = arguments.length;
var i__25997__auto___34751 = (0);
while(true){
if((i__25997__auto___34751 < len__25996__auto___34750)){
args34747.push((arguments[i__25997__auto___34751]));

var G__34752 = (i__25997__auto___34751 + (1));
i__25997__auto___34751 = G__34752;
continue;
} else {
}
break;
}

var G__34749 = args34747.length;
switch (G__34749) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34747.length)].join('')));

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
var args34754 = [];
var len__25996__auto___34807 = arguments.length;
var i__25997__auto___34808 = (0);
while(true){
if((i__25997__auto___34808 < len__25996__auto___34807)){
args34754.push((arguments[i__25997__auto___34808]));

var G__34809 = (i__25997__auto___34808 + (1));
i__25997__auto___34808 = G__34809;
continue;
} else {
}
break;
}

var G__34756 = args34754.length;
switch (G__34756) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34754.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27021__auto___34811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___34811,tc,fc){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___34811,tc,fc){
return (function (state_34782){
var state_val_34783 = (state_34782[(1)]);
if((state_val_34783 === (7))){
var inst_34778 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34784_34812 = state_34782__$1;
(statearr_34784_34812[(2)] = inst_34778);

(statearr_34784_34812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (1))){
var state_34782__$1 = state_34782;
var statearr_34785_34813 = state_34782__$1;
(statearr_34785_34813[(2)] = null);

(statearr_34785_34813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (4))){
var inst_34759 = (state_34782[(7)]);
var inst_34759__$1 = (state_34782[(2)]);
var inst_34760 = (inst_34759__$1 == null);
var state_34782__$1 = (function (){var statearr_34786 = state_34782;
(statearr_34786[(7)] = inst_34759__$1);

return statearr_34786;
})();
if(cljs.core.truth_(inst_34760)){
var statearr_34787_34814 = state_34782__$1;
(statearr_34787_34814[(1)] = (5));

} else {
var statearr_34788_34815 = state_34782__$1;
(statearr_34788_34815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (13))){
var state_34782__$1 = state_34782;
var statearr_34789_34816 = state_34782__$1;
(statearr_34789_34816[(2)] = null);

(statearr_34789_34816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (6))){
var inst_34759 = (state_34782[(7)]);
var inst_34765 = p.call(null,inst_34759);
var state_34782__$1 = state_34782;
if(cljs.core.truth_(inst_34765)){
var statearr_34790_34817 = state_34782__$1;
(statearr_34790_34817[(1)] = (9));

} else {
var statearr_34791_34818 = state_34782__$1;
(statearr_34791_34818[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (3))){
var inst_34780 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34782__$1,inst_34780);
} else {
if((state_val_34783 === (12))){
var state_34782__$1 = state_34782;
var statearr_34792_34819 = state_34782__$1;
(statearr_34792_34819[(2)] = null);

(statearr_34792_34819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (2))){
var state_34782__$1 = state_34782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34782__$1,(4),ch);
} else {
if((state_val_34783 === (11))){
var inst_34759 = (state_34782[(7)]);
var inst_34769 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34782__$1,(8),inst_34769,inst_34759);
} else {
if((state_val_34783 === (9))){
var state_34782__$1 = state_34782;
var statearr_34793_34820 = state_34782__$1;
(statearr_34793_34820[(2)] = tc);

(statearr_34793_34820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (5))){
var inst_34762 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34763 = cljs.core.async.close_BANG_.call(null,fc);
var state_34782__$1 = (function (){var statearr_34794 = state_34782;
(statearr_34794[(8)] = inst_34762);

return statearr_34794;
})();
var statearr_34795_34821 = state_34782__$1;
(statearr_34795_34821[(2)] = inst_34763);

(statearr_34795_34821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (14))){
var inst_34776 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34796_34822 = state_34782__$1;
(statearr_34796_34822[(2)] = inst_34776);

(statearr_34796_34822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (10))){
var state_34782__$1 = state_34782;
var statearr_34797_34823 = state_34782__$1;
(statearr_34797_34823[(2)] = fc);

(statearr_34797_34823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (8))){
var inst_34771 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
if(cljs.core.truth_(inst_34771)){
var statearr_34798_34824 = state_34782__$1;
(statearr_34798_34824[(1)] = (12));

} else {
var statearr_34799_34825 = state_34782__$1;
(statearr_34799_34825[(1)] = (13));

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
});})(c__27021__auto___34811,tc,fc))
;
return ((function (switch__26956__auto__,c__27021__auto___34811,tc,fc){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_34803 = [null,null,null,null,null,null,null,null,null];
(statearr_34803[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_34803[(1)] = (1));

return statearr_34803;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_34782){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_34782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e34804){if((e34804 instanceof Object)){
var ex__26960__auto__ = e34804;
var statearr_34805_34826 = state_34782;
(statearr_34805_34826[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34827 = state_34782;
state_34782 = G__34827;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_34782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_34782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___34811,tc,fc))
})();
var state__27023__auto__ = (function (){var statearr_34806 = f__27022__auto__.call(null);
(statearr_34806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___34811);

return statearr_34806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___34811,tc,fc))
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
var c__27021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto__){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto__){
return (function (state_34891){
var state_val_34892 = (state_34891[(1)]);
if((state_val_34892 === (7))){
var inst_34887 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
var statearr_34893_34914 = state_34891__$1;
(statearr_34893_34914[(2)] = inst_34887);

(statearr_34893_34914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (1))){
var inst_34871 = init;
var state_34891__$1 = (function (){var statearr_34894 = state_34891;
(statearr_34894[(7)] = inst_34871);

return statearr_34894;
})();
var statearr_34895_34915 = state_34891__$1;
(statearr_34895_34915[(2)] = null);

(statearr_34895_34915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (4))){
var inst_34874 = (state_34891[(8)]);
var inst_34874__$1 = (state_34891[(2)]);
var inst_34875 = (inst_34874__$1 == null);
var state_34891__$1 = (function (){var statearr_34896 = state_34891;
(statearr_34896[(8)] = inst_34874__$1);

return statearr_34896;
})();
if(cljs.core.truth_(inst_34875)){
var statearr_34897_34916 = state_34891__$1;
(statearr_34897_34916[(1)] = (5));

} else {
var statearr_34898_34917 = state_34891__$1;
(statearr_34898_34917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (6))){
var inst_34871 = (state_34891[(7)]);
var inst_34874 = (state_34891[(8)]);
var inst_34878 = (state_34891[(9)]);
var inst_34878__$1 = f.call(null,inst_34871,inst_34874);
var inst_34879 = cljs.core.reduced_QMARK_.call(null,inst_34878__$1);
var state_34891__$1 = (function (){var statearr_34899 = state_34891;
(statearr_34899[(9)] = inst_34878__$1);

return statearr_34899;
})();
if(inst_34879){
var statearr_34900_34918 = state_34891__$1;
(statearr_34900_34918[(1)] = (8));

} else {
var statearr_34901_34919 = state_34891__$1;
(statearr_34901_34919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (3))){
var inst_34889 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34891__$1,inst_34889);
} else {
if((state_val_34892 === (2))){
var state_34891__$1 = state_34891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34891__$1,(4),ch);
} else {
if((state_val_34892 === (9))){
var inst_34878 = (state_34891[(9)]);
var inst_34871 = inst_34878;
var state_34891__$1 = (function (){var statearr_34902 = state_34891;
(statearr_34902[(7)] = inst_34871);

return statearr_34902;
})();
var statearr_34903_34920 = state_34891__$1;
(statearr_34903_34920[(2)] = null);

(statearr_34903_34920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (5))){
var inst_34871 = (state_34891[(7)]);
var state_34891__$1 = state_34891;
var statearr_34904_34921 = state_34891__$1;
(statearr_34904_34921[(2)] = inst_34871);

(statearr_34904_34921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (10))){
var inst_34885 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
var statearr_34905_34922 = state_34891__$1;
(statearr_34905_34922[(2)] = inst_34885);

(statearr_34905_34922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (8))){
var inst_34878 = (state_34891[(9)]);
var inst_34881 = cljs.core.deref.call(null,inst_34878);
var state_34891__$1 = state_34891;
var statearr_34906_34923 = state_34891__$1;
(statearr_34906_34923[(2)] = inst_34881);

(statearr_34906_34923[(1)] = (10));


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
});})(c__27021__auto__))
;
return ((function (switch__26956__auto__,c__27021__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26957__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26957__auto____0 = (function (){
var statearr_34910 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34910[(0)] = cljs$core$async$reduce_$_state_machine__26957__auto__);

(statearr_34910[(1)] = (1));

return statearr_34910;
});
var cljs$core$async$reduce_$_state_machine__26957__auto____1 = (function (state_34891){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_34891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e34911){if((e34911 instanceof Object)){
var ex__26960__auto__ = e34911;
var statearr_34912_34924 = state_34891;
(statearr_34912_34924[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34925 = state_34891;
state_34891 = G__34925;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26957__auto__ = function(state_34891){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26957__auto____1.call(this,state_34891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26957__auto____0;
cljs$core$async$reduce_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26957__auto____1;
return cljs$core$async$reduce_$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto__))
})();
var state__27023__auto__ = (function (){var statearr_34913 = f__27022__auto__.call(null);
(statearr_34913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto__);

return statearr_34913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto__))
);

return c__27021__auto__;
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
var args34926 = [];
var len__25996__auto___34978 = arguments.length;
var i__25997__auto___34979 = (0);
while(true){
if((i__25997__auto___34979 < len__25996__auto___34978)){
args34926.push((arguments[i__25997__auto___34979]));

var G__34980 = (i__25997__auto___34979 + (1));
i__25997__auto___34979 = G__34980;
continue;
} else {
}
break;
}

var G__34928 = args34926.length;
switch (G__34928) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34926.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto__){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto__){
return (function (state_34953){
var state_val_34954 = (state_34953[(1)]);
if((state_val_34954 === (7))){
var inst_34935 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34955_34982 = state_34953__$1;
(statearr_34955_34982[(2)] = inst_34935);

(statearr_34955_34982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (1))){
var inst_34929 = cljs.core.seq.call(null,coll);
var inst_34930 = inst_34929;
var state_34953__$1 = (function (){var statearr_34956 = state_34953;
(statearr_34956[(7)] = inst_34930);

return statearr_34956;
})();
var statearr_34957_34983 = state_34953__$1;
(statearr_34957_34983[(2)] = null);

(statearr_34957_34983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (4))){
var inst_34930 = (state_34953[(7)]);
var inst_34933 = cljs.core.first.call(null,inst_34930);
var state_34953__$1 = state_34953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34953__$1,(7),ch,inst_34933);
} else {
if((state_val_34954 === (13))){
var inst_34947 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34958_34984 = state_34953__$1;
(statearr_34958_34984[(2)] = inst_34947);

(statearr_34958_34984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (6))){
var inst_34938 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
if(cljs.core.truth_(inst_34938)){
var statearr_34959_34985 = state_34953__$1;
(statearr_34959_34985[(1)] = (8));

} else {
var statearr_34960_34986 = state_34953__$1;
(statearr_34960_34986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (3))){
var inst_34951 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34953__$1,inst_34951);
} else {
if((state_val_34954 === (12))){
var state_34953__$1 = state_34953;
var statearr_34961_34987 = state_34953__$1;
(statearr_34961_34987[(2)] = null);

(statearr_34961_34987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (2))){
var inst_34930 = (state_34953[(7)]);
var state_34953__$1 = state_34953;
if(cljs.core.truth_(inst_34930)){
var statearr_34962_34988 = state_34953__$1;
(statearr_34962_34988[(1)] = (4));

} else {
var statearr_34963_34989 = state_34953__$1;
(statearr_34963_34989[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (11))){
var inst_34944 = cljs.core.async.close_BANG_.call(null,ch);
var state_34953__$1 = state_34953;
var statearr_34964_34990 = state_34953__$1;
(statearr_34964_34990[(2)] = inst_34944);

(statearr_34964_34990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (9))){
var state_34953__$1 = state_34953;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34965_34991 = state_34953__$1;
(statearr_34965_34991[(1)] = (11));

} else {
var statearr_34966_34992 = state_34953__$1;
(statearr_34966_34992[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (5))){
var inst_34930 = (state_34953[(7)]);
var state_34953__$1 = state_34953;
var statearr_34967_34993 = state_34953__$1;
(statearr_34967_34993[(2)] = inst_34930);

(statearr_34967_34993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (10))){
var inst_34949 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34968_34994 = state_34953__$1;
(statearr_34968_34994[(2)] = inst_34949);

(statearr_34968_34994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (8))){
var inst_34930 = (state_34953[(7)]);
var inst_34940 = cljs.core.next.call(null,inst_34930);
var inst_34930__$1 = inst_34940;
var state_34953__$1 = (function (){var statearr_34969 = state_34953;
(statearr_34969[(7)] = inst_34930__$1);

return statearr_34969;
})();
var statearr_34970_34995 = state_34953__$1;
(statearr_34970_34995[(2)] = null);

(statearr_34970_34995[(1)] = (2));


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
});})(c__27021__auto__))
;
return ((function (switch__26956__auto__,c__27021__auto__){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_34974 = [null,null,null,null,null,null,null,null];
(statearr_34974[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_34974[(1)] = (1));

return statearr_34974;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_34953){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_34953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e34975){if((e34975 instanceof Object)){
var ex__26960__auto__ = e34975;
var statearr_34976_34996 = state_34953;
(statearr_34976_34996[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34997 = state_34953;
state_34953 = G__34997;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_34953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_34953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto__))
})();
var state__27023__auto__ = (function (){var statearr_34977 = f__27022__auto__.call(null);
(statearr_34977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto__);

return statearr_34977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto__))
);

return c__27021__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async35223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35223 = (function (ch,cs,meta35224){
this.ch = ch;
this.cs = cs;
this.meta35224 = meta35224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35225,meta35224__$1){
var self__ = this;
var _35225__$1 = this;
return (new cljs.core.async.t_cljs$core$async35223(self__.ch,self__.cs,meta35224__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35225){
var self__ = this;
var _35225__$1 = this;
return self__.meta35224;
});})(cs))
;

cljs.core.async.t_cljs$core$async35223.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35223.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35223.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35223.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35223.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35223.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35224","meta35224",1968068039,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35223";

cljs.core.async.t_cljs$core$async35223.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async35223");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35223 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35223(ch__$1,cs__$1,meta35224){
return (new cljs.core.async.t_cljs$core$async35223(ch__$1,cs__$1,meta35224));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35223(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27021__auto___35448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___35448,cs,m,dchan,dctr,done){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___35448,cs,m,dchan,dctr,done){
return (function (state_35360){
var state_val_35361 = (state_35360[(1)]);
if((state_val_35361 === (7))){
var inst_35356 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35362_35449 = state_35360__$1;
(statearr_35362_35449[(2)] = inst_35356);

(statearr_35362_35449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (20))){
var inst_35259 = (state_35360[(7)]);
var inst_35271 = cljs.core.first.call(null,inst_35259);
var inst_35272 = cljs.core.nth.call(null,inst_35271,(0),null);
var inst_35273 = cljs.core.nth.call(null,inst_35271,(1),null);
var state_35360__$1 = (function (){var statearr_35363 = state_35360;
(statearr_35363[(8)] = inst_35272);

return statearr_35363;
})();
if(cljs.core.truth_(inst_35273)){
var statearr_35364_35450 = state_35360__$1;
(statearr_35364_35450[(1)] = (22));

} else {
var statearr_35365_35451 = state_35360__$1;
(statearr_35365_35451[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (27))){
var inst_35303 = (state_35360[(9)]);
var inst_35301 = (state_35360[(10)]);
var inst_35308 = (state_35360[(11)]);
var inst_35228 = (state_35360[(12)]);
var inst_35308__$1 = cljs.core._nth.call(null,inst_35301,inst_35303);
var inst_35309 = cljs.core.async.put_BANG_.call(null,inst_35308__$1,inst_35228,done);
var state_35360__$1 = (function (){var statearr_35366 = state_35360;
(statearr_35366[(11)] = inst_35308__$1);

return statearr_35366;
})();
if(cljs.core.truth_(inst_35309)){
var statearr_35367_35452 = state_35360__$1;
(statearr_35367_35452[(1)] = (30));

} else {
var statearr_35368_35453 = state_35360__$1;
(statearr_35368_35453[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (1))){
var state_35360__$1 = state_35360;
var statearr_35369_35454 = state_35360__$1;
(statearr_35369_35454[(2)] = null);

(statearr_35369_35454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (24))){
var inst_35259 = (state_35360[(7)]);
var inst_35278 = (state_35360[(2)]);
var inst_35279 = cljs.core.next.call(null,inst_35259);
var inst_35237 = inst_35279;
var inst_35238 = null;
var inst_35239 = (0);
var inst_35240 = (0);
var state_35360__$1 = (function (){var statearr_35370 = state_35360;
(statearr_35370[(13)] = inst_35239);

(statearr_35370[(14)] = inst_35278);

(statearr_35370[(15)] = inst_35238);

(statearr_35370[(16)] = inst_35237);

(statearr_35370[(17)] = inst_35240);

return statearr_35370;
})();
var statearr_35371_35455 = state_35360__$1;
(statearr_35371_35455[(2)] = null);

(statearr_35371_35455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (39))){
var state_35360__$1 = state_35360;
var statearr_35375_35456 = state_35360__$1;
(statearr_35375_35456[(2)] = null);

(statearr_35375_35456[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (4))){
var inst_35228 = (state_35360[(12)]);
var inst_35228__$1 = (state_35360[(2)]);
var inst_35229 = (inst_35228__$1 == null);
var state_35360__$1 = (function (){var statearr_35376 = state_35360;
(statearr_35376[(12)] = inst_35228__$1);

return statearr_35376;
})();
if(cljs.core.truth_(inst_35229)){
var statearr_35377_35457 = state_35360__$1;
(statearr_35377_35457[(1)] = (5));

} else {
var statearr_35378_35458 = state_35360__$1;
(statearr_35378_35458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (15))){
var inst_35239 = (state_35360[(13)]);
var inst_35238 = (state_35360[(15)]);
var inst_35237 = (state_35360[(16)]);
var inst_35240 = (state_35360[(17)]);
var inst_35255 = (state_35360[(2)]);
var inst_35256 = (inst_35240 + (1));
var tmp35372 = inst_35239;
var tmp35373 = inst_35238;
var tmp35374 = inst_35237;
var inst_35237__$1 = tmp35374;
var inst_35238__$1 = tmp35373;
var inst_35239__$1 = tmp35372;
var inst_35240__$1 = inst_35256;
var state_35360__$1 = (function (){var statearr_35379 = state_35360;
(statearr_35379[(13)] = inst_35239__$1);

(statearr_35379[(15)] = inst_35238__$1);

(statearr_35379[(18)] = inst_35255);

(statearr_35379[(16)] = inst_35237__$1);

(statearr_35379[(17)] = inst_35240__$1);

return statearr_35379;
})();
var statearr_35380_35459 = state_35360__$1;
(statearr_35380_35459[(2)] = null);

(statearr_35380_35459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (21))){
var inst_35282 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35384_35460 = state_35360__$1;
(statearr_35384_35460[(2)] = inst_35282);

(statearr_35384_35460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (31))){
var inst_35308 = (state_35360[(11)]);
var inst_35312 = done.call(null,null);
var inst_35313 = cljs.core.async.untap_STAR_.call(null,m,inst_35308);
var state_35360__$1 = (function (){var statearr_35385 = state_35360;
(statearr_35385[(19)] = inst_35312);

return statearr_35385;
})();
var statearr_35386_35461 = state_35360__$1;
(statearr_35386_35461[(2)] = inst_35313);

(statearr_35386_35461[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (32))){
var inst_35303 = (state_35360[(9)]);
var inst_35301 = (state_35360[(10)]);
var inst_35300 = (state_35360[(20)]);
var inst_35302 = (state_35360[(21)]);
var inst_35315 = (state_35360[(2)]);
var inst_35316 = (inst_35303 + (1));
var tmp35381 = inst_35301;
var tmp35382 = inst_35300;
var tmp35383 = inst_35302;
var inst_35300__$1 = tmp35382;
var inst_35301__$1 = tmp35381;
var inst_35302__$1 = tmp35383;
var inst_35303__$1 = inst_35316;
var state_35360__$1 = (function (){var statearr_35387 = state_35360;
(statearr_35387[(9)] = inst_35303__$1);

(statearr_35387[(10)] = inst_35301__$1);

(statearr_35387[(20)] = inst_35300__$1);

(statearr_35387[(21)] = inst_35302__$1);

(statearr_35387[(22)] = inst_35315);

return statearr_35387;
})();
var statearr_35388_35462 = state_35360__$1;
(statearr_35388_35462[(2)] = null);

(statearr_35388_35462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (40))){
var inst_35328 = (state_35360[(23)]);
var inst_35332 = done.call(null,null);
var inst_35333 = cljs.core.async.untap_STAR_.call(null,m,inst_35328);
var state_35360__$1 = (function (){var statearr_35389 = state_35360;
(statearr_35389[(24)] = inst_35332);

return statearr_35389;
})();
var statearr_35390_35463 = state_35360__$1;
(statearr_35390_35463[(2)] = inst_35333);

(statearr_35390_35463[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (33))){
var inst_35319 = (state_35360[(25)]);
var inst_35321 = cljs.core.chunked_seq_QMARK_.call(null,inst_35319);
var state_35360__$1 = state_35360;
if(inst_35321){
var statearr_35391_35464 = state_35360__$1;
(statearr_35391_35464[(1)] = (36));

} else {
var statearr_35392_35465 = state_35360__$1;
(statearr_35392_35465[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (13))){
var inst_35249 = (state_35360[(26)]);
var inst_35252 = cljs.core.async.close_BANG_.call(null,inst_35249);
var state_35360__$1 = state_35360;
var statearr_35393_35466 = state_35360__$1;
(statearr_35393_35466[(2)] = inst_35252);

(statearr_35393_35466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (22))){
var inst_35272 = (state_35360[(8)]);
var inst_35275 = cljs.core.async.close_BANG_.call(null,inst_35272);
var state_35360__$1 = state_35360;
var statearr_35394_35467 = state_35360__$1;
(statearr_35394_35467[(2)] = inst_35275);

(statearr_35394_35467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (36))){
var inst_35319 = (state_35360[(25)]);
var inst_35323 = cljs.core.chunk_first.call(null,inst_35319);
var inst_35324 = cljs.core.chunk_rest.call(null,inst_35319);
var inst_35325 = cljs.core.count.call(null,inst_35323);
var inst_35300 = inst_35324;
var inst_35301 = inst_35323;
var inst_35302 = inst_35325;
var inst_35303 = (0);
var state_35360__$1 = (function (){var statearr_35395 = state_35360;
(statearr_35395[(9)] = inst_35303);

(statearr_35395[(10)] = inst_35301);

(statearr_35395[(20)] = inst_35300);

(statearr_35395[(21)] = inst_35302);

return statearr_35395;
})();
var statearr_35396_35468 = state_35360__$1;
(statearr_35396_35468[(2)] = null);

(statearr_35396_35468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (41))){
var inst_35319 = (state_35360[(25)]);
var inst_35335 = (state_35360[(2)]);
var inst_35336 = cljs.core.next.call(null,inst_35319);
var inst_35300 = inst_35336;
var inst_35301 = null;
var inst_35302 = (0);
var inst_35303 = (0);
var state_35360__$1 = (function (){var statearr_35397 = state_35360;
(statearr_35397[(27)] = inst_35335);

(statearr_35397[(9)] = inst_35303);

(statearr_35397[(10)] = inst_35301);

(statearr_35397[(20)] = inst_35300);

(statearr_35397[(21)] = inst_35302);

return statearr_35397;
})();
var statearr_35398_35469 = state_35360__$1;
(statearr_35398_35469[(2)] = null);

(statearr_35398_35469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (43))){
var state_35360__$1 = state_35360;
var statearr_35399_35470 = state_35360__$1;
(statearr_35399_35470[(2)] = null);

(statearr_35399_35470[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (29))){
var inst_35344 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35400_35471 = state_35360__$1;
(statearr_35400_35471[(2)] = inst_35344);

(statearr_35400_35471[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (44))){
var inst_35353 = (state_35360[(2)]);
var state_35360__$1 = (function (){var statearr_35401 = state_35360;
(statearr_35401[(28)] = inst_35353);

return statearr_35401;
})();
var statearr_35402_35472 = state_35360__$1;
(statearr_35402_35472[(2)] = null);

(statearr_35402_35472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (6))){
var inst_35292 = (state_35360[(29)]);
var inst_35291 = cljs.core.deref.call(null,cs);
var inst_35292__$1 = cljs.core.keys.call(null,inst_35291);
var inst_35293 = cljs.core.count.call(null,inst_35292__$1);
var inst_35294 = cljs.core.reset_BANG_.call(null,dctr,inst_35293);
var inst_35299 = cljs.core.seq.call(null,inst_35292__$1);
var inst_35300 = inst_35299;
var inst_35301 = null;
var inst_35302 = (0);
var inst_35303 = (0);
var state_35360__$1 = (function (){var statearr_35403 = state_35360;
(statearr_35403[(9)] = inst_35303);

(statearr_35403[(10)] = inst_35301);

(statearr_35403[(29)] = inst_35292__$1);

(statearr_35403[(20)] = inst_35300);

(statearr_35403[(30)] = inst_35294);

(statearr_35403[(21)] = inst_35302);

return statearr_35403;
})();
var statearr_35404_35473 = state_35360__$1;
(statearr_35404_35473[(2)] = null);

(statearr_35404_35473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (28))){
var inst_35319 = (state_35360[(25)]);
var inst_35300 = (state_35360[(20)]);
var inst_35319__$1 = cljs.core.seq.call(null,inst_35300);
var state_35360__$1 = (function (){var statearr_35405 = state_35360;
(statearr_35405[(25)] = inst_35319__$1);

return statearr_35405;
})();
if(inst_35319__$1){
var statearr_35406_35474 = state_35360__$1;
(statearr_35406_35474[(1)] = (33));

} else {
var statearr_35407_35475 = state_35360__$1;
(statearr_35407_35475[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (25))){
var inst_35303 = (state_35360[(9)]);
var inst_35302 = (state_35360[(21)]);
var inst_35305 = (inst_35303 < inst_35302);
var inst_35306 = inst_35305;
var state_35360__$1 = state_35360;
if(cljs.core.truth_(inst_35306)){
var statearr_35408_35476 = state_35360__$1;
(statearr_35408_35476[(1)] = (27));

} else {
var statearr_35409_35477 = state_35360__$1;
(statearr_35409_35477[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (34))){
var state_35360__$1 = state_35360;
var statearr_35410_35478 = state_35360__$1;
(statearr_35410_35478[(2)] = null);

(statearr_35410_35478[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (17))){
var state_35360__$1 = state_35360;
var statearr_35411_35479 = state_35360__$1;
(statearr_35411_35479[(2)] = null);

(statearr_35411_35479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (3))){
var inst_35358 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35360__$1,inst_35358);
} else {
if((state_val_35361 === (12))){
var inst_35287 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35412_35480 = state_35360__$1;
(statearr_35412_35480[(2)] = inst_35287);

(statearr_35412_35480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (2))){
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35360__$1,(4),ch);
} else {
if((state_val_35361 === (23))){
var state_35360__$1 = state_35360;
var statearr_35413_35481 = state_35360__$1;
(statearr_35413_35481[(2)] = null);

(statearr_35413_35481[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (35))){
var inst_35342 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35414_35482 = state_35360__$1;
(statearr_35414_35482[(2)] = inst_35342);

(statearr_35414_35482[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (19))){
var inst_35259 = (state_35360[(7)]);
var inst_35263 = cljs.core.chunk_first.call(null,inst_35259);
var inst_35264 = cljs.core.chunk_rest.call(null,inst_35259);
var inst_35265 = cljs.core.count.call(null,inst_35263);
var inst_35237 = inst_35264;
var inst_35238 = inst_35263;
var inst_35239 = inst_35265;
var inst_35240 = (0);
var state_35360__$1 = (function (){var statearr_35415 = state_35360;
(statearr_35415[(13)] = inst_35239);

(statearr_35415[(15)] = inst_35238);

(statearr_35415[(16)] = inst_35237);

(statearr_35415[(17)] = inst_35240);

return statearr_35415;
})();
var statearr_35416_35483 = state_35360__$1;
(statearr_35416_35483[(2)] = null);

(statearr_35416_35483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (11))){
var inst_35237 = (state_35360[(16)]);
var inst_35259 = (state_35360[(7)]);
var inst_35259__$1 = cljs.core.seq.call(null,inst_35237);
var state_35360__$1 = (function (){var statearr_35417 = state_35360;
(statearr_35417[(7)] = inst_35259__$1);

return statearr_35417;
})();
if(inst_35259__$1){
var statearr_35418_35484 = state_35360__$1;
(statearr_35418_35484[(1)] = (16));

} else {
var statearr_35419_35485 = state_35360__$1;
(statearr_35419_35485[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (9))){
var inst_35289 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35420_35486 = state_35360__$1;
(statearr_35420_35486[(2)] = inst_35289);

(statearr_35420_35486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (5))){
var inst_35235 = cljs.core.deref.call(null,cs);
var inst_35236 = cljs.core.seq.call(null,inst_35235);
var inst_35237 = inst_35236;
var inst_35238 = null;
var inst_35239 = (0);
var inst_35240 = (0);
var state_35360__$1 = (function (){var statearr_35421 = state_35360;
(statearr_35421[(13)] = inst_35239);

(statearr_35421[(15)] = inst_35238);

(statearr_35421[(16)] = inst_35237);

(statearr_35421[(17)] = inst_35240);

return statearr_35421;
})();
var statearr_35422_35487 = state_35360__$1;
(statearr_35422_35487[(2)] = null);

(statearr_35422_35487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (14))){
var state_35360__$1 = state_35360;
var statearr_35423_35488 = state_35360__$1;
(statearr_35423_35488[(2)] = null);

(statearr_35423_35488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (45))){
var inst_35350 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35424_35489 = state_35360__$1;
(statearr_35424_35489[(2)] = inst_35350);

(statearr_35424_35489[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (26))){
var inst_35292 = (state_35360[(29)]);
var inst_35346 = (state_35360[(2)]);
var inst_35347 = cljs.core.seq.call(null,inst_35292);
var state_35360__$1 = (function (){var statearr_35425 = state_35360;
(statearr_35425[(31)] = inst_35346);

return statearr_35425;
})();
if(inst_35347){
var statearr_35426_35490 = state_35360__$1;
(statearr_35426_35490[(1)] = (42));

} else {
var statearr_35427_35491 = state_35360__$1;
(statearr_35427_35491[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (16))){
var inst_35259 = (state_35360[(7)]);
var inst_35261 = cljs.core.chunked_seq_QMARK_.call(null,inst_35259);
var state_35360__$1 = state_35360;
if(inst_35261){
var statearr_35428_35492 = state_35360__$1;
(statearr_35428_35492[(1)] = (19));

} else {
var statearr_35429_35493 = state_35360__$1;
(statearr_35429_35493[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (38))){
var inst_35339 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35430_35494 = state_35360__$1;
(statearr_35430_35494[(2)] = inst_35339);

(statearr_35430_35494[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (30))){
var state_35360__$1 = state_35360;
var statearr_35431_35495 = state_35360__$1;
(statearr_35431_35495[(2)] = null);

(statearr_35431_35495[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (10))){
var inst_35238 = (state_35360[(15)]);
var inst_35240 = (state_35360[(17)]);
var inst_35248 = cljs.core._nth.call(null,inst_35238,inst_35240);
var inst_35249 = cljs.core.nth.call(null,inst_35248,(0),null);
var inst_35250 = cljs.core.nth.call(null,inst_35248,(1),null);
var state_35360__$1 = (function (){var statearr_35432 = state_35360;
(statearr_35432[(26)] = inst_35249);

return statearr_35432;
})();
if(cljs.core.truth_(inst_35250)){
var statearr_35433_35496 = state_35360__$1;
(statearr_35433_35496[(1)] = (13));

} else {
var statearr_35434_35497 = state_35360__$1;
(statearr_35434_35497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (18))){
var inst_35285 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35435_35498 = state_35360__$1;
(statearr_35435_35498[(2)] = inst_35285);

(statearr_35435_35498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (42))){
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35360__$1,(45),dchan);
} else {
if((state_val_35361 === (37))){
var inst_35319 = (state_35360[(25)]);
var inst_35328 = (state_35360[(23)]);
var inst_35228 = (state_35360[(12)]);
var inst_35328__$1 = cljs.core.first.call(null,inst_35319);
var inst_35329 = cljs.core.async.put_BANG_.call(null,inst_35328__$1,inst_35228,done);
var state_35360__$1 = (function (){var statearr_35436 = state_35360;
(statearr_35436[(23)] = inst_35328__$1);

return statearr_35436;
})();
if(cljs.core.truth_(inst_35329)){
var statearr_35437_35499 = state_35360__$1;
(statearr_35437_35499[(1)] = (39));

} else {
var statearr_35438_35500 = state_35360__$1;
(statearr_35438_35500[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (8))){
var inst_35239 = (state_35360[(13)]);
var inst_35240 = (state_35360[(17)]);
var inst_35242 = (inst_35240 < inst_35239);
var inst_35243 = inst_35242;
var state_35360__$1 = state_35360;
if(cljs.core.truth_(inst_35243)){
var statearr_35439_35501 = state_35360__$1;
(statearr_35439_35501[(1)] = (10));

} else {
var statearr_35440_35502 = state_35360__$1;
(statearr_35440_35502[(1)] = (11));

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
});})(c__27021__auto___35448,cs,m,dchan,dctr,done))
;
return ((function (switch__26956__auto__,c__27021__auto___35448,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26957__auto__ = null;
var cljs$core$async$mult_$_state_machine__26957__auto____0 = (function (){
var statearr_35444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35444[(0)] = cljs$core$async$mult_$_state_machine__26957__auto__);

(statearr_35444[(1)] = (1));

return statearr_35444;
});
var cljs$core$async$mult_$_state_machine__26957__auto____1 = (function (state_35360){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_35360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e35445){if((e35445 instanceof Object)){
var ex__26960__auto__ = e35445;
var statearr_35446_35503 = state_35360;
(statearr_35446_35503[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35504 = state_35360;
state_35360 = G__35504;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26957__auto__ = function(state_35360){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26957__auto____1.call(this,state_35360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26957__auto____0;
cljs$core$async$mult_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26957__auto____1;
return cljs$core$async$mult_$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___35448,cs,m,dchan,dctr,done))
})();
var state__27023__auto__ = (function (){var statearr_35447 = f__27022__auto__.call(null);
(statearr_35447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___35448);

return statearr_35447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___35448,cs,m,dchan,dctr,done))
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
var args35505 = [];
var len__25996__auto___35508 = arguments.length;
var i__25997__auto___35509 = (0);
while(true){
if((i__25997__auto___35509 < len__25996__auto___35508)){
args35505.push((arguments[i__25997__auto___35509]));

var G__35510 = (i__25997__auto___35509 + (1));
i__25997__auto___35509 = G__35510;
continue;
} else {
}
break;
}

var G__35507 = args35505.length;
switch (G__35507) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35505.length)].join('')));

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
var len__25996__auto___35522 = arguments.length;
var i__25997__auto___35523 = (0);
while(true){
if((i__25997__auto___35523 < len__25996__auto___35522)){
args__26003__auto__.push((arguments[i__25997__auto___35523]));

var G__35524 = (i__25997__auto___35523 + (1));
i__25997__auto___35523 = G__35524;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((3) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26004__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35516){
var map__35517 = p__35516;
var map__35517__$1 = ((((!((map__35517 == null)))?((((map__35517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35517):map__35517);
var opts = map__35517__$1;
var statearr_35519_35525 = state;
(statearr_35519_35525[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35517,map__35517__$1,opts){
return (function (val){
var statearr_35520_35526 = state;
(statearr_35520_35526[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35517,map__35517__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35521_35527 = state;
(statearr_35521_35527[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35512){
var G__35513 = cljs.core.first.call(null,seq35512);
var seq35512__$1 = cljs.core.next.call(null,seq35512);
var G__35514 = cljs.core.first.call(null,seq35512__$1);
var seq35512__$2 = cljs.core.next.call(null,seq35512__$1);
var G__35515 = cljs.core.first.call(null,seq35512__$2);
var seq35512__$3 = cljs.core.next.call(null,seq35512__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35513,G__35514,G__35515,seq35512__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35695 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35696){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35696 = meta35696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35697,meta35696__$1){
var self__ = this;
var _35697__$1 = this;
return (new cljs.core.async.t_cljs$core$async35695(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35696__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35697){
var self__ = this;
var _35697__$1 = this;
return self__.meta35696;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35695.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35695.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35695.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35695.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35695.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35695.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35695.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35695.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35696","meta35696",1153395676,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35695";

cljs.core.async.t_cljs$core$async35695.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async35695");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35695 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35695(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35696){
return (new cljs.core.async.t_cljs$core$async35695(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35696));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35695(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27021__auto___35862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___35862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___35862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35799){
var state_val_35800 = (state_35799[(1)]);
if((state_val_35800 === (7))){
var inst_35714 = (state_35799[(2)]);
var state_35799__$1 = state_35799;
var statearr_35801_35863 = state_35799__$1;
(statearr_35801_35863[(2)] = inst_35714);

(statearr_35801_35863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (20))){
var inst_35726 = (state_35799[(7)]);
var state_35799__$1 = state_35799;
var statearr_35802_35864 = state_35799__$1;
(statearr_35802_35864[(2)] = inst_35726);

(statearr_35802_35864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (27))){
var state_35799__$1 = state_35799;
var statearr_35803_35865 = state_35799__$1;
(statearr_35803_35865[(2)] = null);

(statearr_35803_35865[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (1))){
var inst_35701 = (state_35799[(8)]);
var inst_35701__$1 = calc_state.call(null);
var inst_35703 = (inst_35701__$1 == null);
var inst_35704 = cljs.core.not.call(null,inst_35703);
var state_35799__$1 = (function (){var statearr_35804 = state_35799;
(statearr_35804[(8)] = inst_35701__$1);

return statearr_35804;
})();
if(inst_35704){
var statearr_35805_35866 = state_35799__$1;
(statearr_35805_35866[(1)] = (2));

} else {
var statearr_35806_35867 = state_35799__$1;
(statearr_35806_35867[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (24))){
var inst_35759 = (state_35799[(9)]);
var inst_35773 = (state_35799[(10)]);
var inst_35750 = (state_35799[(11)]);
var inst_35773__$1 = inst_35750.call(null,inst_35759);
var state_35799__$1 = (function (){var statearr_35807 = state_35799;
(statearr_35807[(10)] = inst_35773__$1);

return statearr_35807;
})();
if(cljs.core.truth_(inst_35773__$1)){
var statearr_35808_35868 = state_35799__$1;
(statearr_35808_35868[(1)] = (29));

} else {
var statearr_35809_35869 = state_35799__$1;
(statearr_35809_35869[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (4))){
var inst_35717 = (state_35799[(2)]);
var state_35799__$1 = state_35799;
if(cljs.core.truth_(inst_35717)){
var statearr_35810_35870 = state_35799__$1;
(statearr_35810_35870[(1)] = (8));

} else {
var statearr_35811_35871 = state_35799__$1;
(statearr_35811_35871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (15))){
var inst_35744 = (state_35799[(2)]);
var state_35799__$1 = state_35799;
if(cljs.core.truth_(inst_35744)){
var statearr_35812_35872 = state_35799__$1;
(statearr_35812_35872[(1)] = (19));

} else {
var statearr_35813_35873 = state_35799__$1;
(statearr_35813_35873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (21))){
var inst_35749 = (state_35799[(12)]);
var inst_35749__$1 = (state_35799[(2)]);
var inst_35750 = cljs.core.get.call(null,inst_35749__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35751 = cljs.core.get.call(null,inst_35749__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35752 = cljs.core.get.call(null,inst_35749__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35799__$1 = (function (){var statearr_35814 = state_35799;
(statearr_35814[(12)] = inst_35749__$1);

(statearr_35814[(11)] = inst_35750);

(statearr_35814[(13)] = inst_35751);

return statearr_35814;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35799__$1,(22),inst_35752);
} else {
if((state_val_35800 === (31))){
var inst_35781 = (state_35799[(2)]);
var state_35799__$1 = state_35799;
if(cljs.core.truth_(inst_35781)){
var statearr_35815_35874 = state_35799__$1;
(statearr_35815_35874[(1)] = (32));

} else {
var statearr_35816_35875 = state_35799__$1;
(statearr_35816_35875[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (32))){
var inst_35758 = (state_35799[(14)]);
var state_35799__$1 = state_35799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35799__$1,(35),out,inst_35758);
} else {
if((state_val_35800 === (33))){
var inst_35749 = (state_35799[(12)]);
var inst_35726 = inst_35749;
var state_35799__$1 = (function (){var statearr_35817 = state_35799;
(statearr_35817[(7)] = inst_35726);

return statearr_35817;
})();
var statearr_35818_35876 = state_35799__$1;
(statearr_35818_35876[(2)] = null);

(statearr_35818_35876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (13))){
var inst_35726 = (state_35799[(7)]);
var inst_35733 = inst_35726.cljs$lang$protocol_mask$partition0$;
var inst_35734 = (inst_35733 & (64));
var inst_35735 = inst_35726.cljs$core$ISeq$;
var inst_35736 = (cljs.core.PROTOCOL_SENTINEL === inst_35735);
var inst_35737 = (inst_35734) || (inst_35736);
var state_35799__$1 = state_35799;
if(cljs.core.truth_(inst_35737)){
var statearr_35819_35877 = state_35799__$1;
(statearr_35819_35877[(1)] = (16));

} else {
var statearr_35820_35878 = state_35799__$1;
(statearr_35820_35878[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (22))){
var inst_35759 = (state_35799[(9)]);
var inst_35758 = (state_35799[(14)]);
var inst_35757 = (state_35799[(2)]);
var inst_35758__$1 = cljs.core.nth.call(null,inst_35757,(0),null);
var inst_35759__$1 = cljs.core.nth.call(null,inst_35757,(1),null);
var inst_35760 = (inst_35758__$1 == null);
var inst_35761 = cljs.core._EQ_.call(null,inst_35759__$1,change);
var inst_35762 = (inst_35760) || (inst_35761);
var state_35799__$1 = (function (){var statearr_35821 = state_35799;
(statearr_35821[(9)] = inst_35759__$1);

(statearr_35821[(14)] = inst_35758__$1);

return statearr_35821;
})();
if(cljs.core.truth_(inst_35762)){
var statearr_35822_35879 = state_35799__$1;
(statearr_35822_35879[(1)] = (23));

} else {
var statearr_35823_35880 = state_35799__$1;
(statearr_35823_35880[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (36))){
var inst_35749 = (state_35799[(12)]);
var inst_35726 = inst_35749;
var state_35799__$1 = (function (){var statearr_35824 = state_35799;
(statearr_35824[(7)] = inst_35726);

return statearr_35824;
})();
var statearr_35825_35881 = state_35799__$1;
(statearr_35825_35881[(2)] = null);

(statearr_35825_35881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (29))){
var inst_35773 = (state_35799[(10)]);
var state_35799__$1 = state_35799;
var statearr_35826_35882 = state_35799__$1;
(statearr_35826_35882[(2)] = inst_35773);

(statearr_35826_35882[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (6))){
var state_35799__$1 = state_35799;
var statearr_35827_35883 = state_35799__$1;
(statearr_35827_35883[(2)] = false);

(statearr_35827_35883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (28))){
var inst_35769 = (state_35799[(2)]);
var inst_35770 = calc_state.call(null);
var inst_35726 = inst_35770;
var state_35799__$1 = (function (){var statearr_35828 = state_35799;
(statearr_35828[(15)] = inst_35769);

(statearr_35828[(7)] = inst_35726);

return statearr_35828;
})();
var statearr_35829_35884 = state_35799__$1;
(statearr_35829_35884[(2)] = null);

(statearr_35829_35884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (25))){
var inst_35795 = (state_35799[(2)]);
var state_35799__$1 = state_35799;
var statearr_35830_35885 = state_35799__$1;
(statearr_35830_35885[(2)] = inst_35795);

(statearr_35830_35885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (34))){
var inst_35793 = (state_35799[(2)]);
var state_35799__$1 = state_35799;
var statearr_35831_35886 = state_35799__$1;
(statearr_35831_35886[(2)] = inst_35793);

(statearr_35831_35886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (17))){
var state_35799__$1 = state_35799;
var statearr_35832_35887 = state_35799__$1;
(statearr_35832_35887[(2)] = false);

(statearr_35832_35887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (3))){
var state_35799__$1 = state_35799;
var statearr_35833_35888 = state_35799__$1;
(statearr_35833_35888[(2)] = false);

(statearr_35833_35888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (12))){
var inst_35797 = (state_35799[(2)]);
var state_35799__$1 = state_35799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35799__$1,inst_35797);
} else {
if((state_val_35800 === (2))){
var inst_35701 = (state_35799[(8)]);
var inst_35706 = inst_35701.cljs$lang$protocol_mask$partition0$;
var inst_35707 = (inst_35706 & (64));
var inst_35708 = inst_35701.cljs$core$ISeq$;
var inst_35709 = (cljs.core.PROTOCOL_SENTINEL === inst_35708);
var inst_35710 = (inst_35707) || (inst_35709);
var state_35799__$1 = state_35799;
if(cljs.core.truth_(inst_35710)){
var statearr_35834_35889 = state_35799__$1;
(statearr_35834_35889[(1)] = (5));

} else {
var statearr_35835_35890 = state_35799__$1;
(statearr_35835_35890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (23))){
var inst_35758 = (state_35799[(14)]);
var inst_35764 = (inst_35758 == null);
var state_35799__$1 = state_35799;
if(cljs.core.truth_(inst_35764)){
var statearr_35836_35891 = state_35799__$1;
(statearr_35836_35891[(1)] = (26));

} else {
var statearr_35837_35892 = state_35799__$1;
(statearr_35837_35892[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (35))){
var inst_35784 = (state_35799[(2)]);
var state_35799__$1 = state_35799;
if(cljs.core.truth_(inst_35784)){
var statearr_35838_35893 = state_35799__$1;
(statearr_35838_35893[(1)] = (36));

} else {
var statearr_35839_35894 = state_35799__$1;
(statearr_35839_35894[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (19))){
var inst_35726 = (state_35799[(7)]);
var inst_35746 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35726);
var state_35799__$1 = state_35799;
var statearr_35840_35895 = state_35799__$1;
(statearr_35840_35895[(2)] = inst_35746);

(statearr_35840_35895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (11))){
var inst_35726 = (state_35799[(7)]);
var inst_35730 = (inst_35726 == null);
var inst_35731 = cljs.core.not.call(null,inst_35730);
var state_35799__$1 = state_35799;
if(inst_35731){
var statearr_35841_35896 = state_35799__$1;
(statearr_35841_35896[(1)] = (13));

} else {
var statearr_35842_35897 = state_35799__$1;
(statearr_35842_35897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (9))){
var inst_35701 = (state_35799[(8)]);
var state_35799__$1 = state_35799;
var statearr_35843_35898 = state_35799__$1;
(statearr_35843_35898[(2)] = inst_35701);

(statearr_35843_35898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (5))){
var state_35799__$1 = state_35799;
var statearr_35844_35899 = state_35799__$1;
(statearr_35844_35899[(2)] = true);

(statearr_35844_35899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (14))){
var state_35799__$1 = state_35799;
var statearr_35845_35900 = state_35799__$1;
(statearr_35845_35900[(2)] = false);

(statearr_35845_35900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (26))){
var inst_35759 = (state_35799[(9)]);
var inst_35766 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35759);
var state_35799__$1 = state_35799;
var statearr_35846_35901 = state_35799__$1;
(statearr_35846_35901[(2)] = inst_35766);

(statearr_35846_35901[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (16))){
var state_35799__$1 = state_35799;
var statearr_35847_35902 = state_35799__$1;
(statearr_35847_35902[(2)] = true);

(statearr_35847_35902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (38))){
var inst_35789 = (state_35799[(2)]);
var state_35799__$1 = state_35799;
var statearr_35848_35903 = state_35799__$1;
(statearr_35848_35903[(2)] = inst_35789);

(statearr_35848_35903[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (30))){
var inst_35759 = (state_35799[(9)]);
var inst_35750 = (state_35799[(11)]);
var inst_35751 = (state_35799[(13)]);
var inst_35776 = cljs.core.empty_QMARK_.call(null,inst_35750);
var inst_35777 = inst_35751.call(null,inst_35759);
var inst_35778 = cljs.core.not.call(null,inst_35777);
var inst_35779 = (inst_35776) && (inst_35778);
var state_35799__$1 = state_35799;
var statearr_35849_35904 = state_35799__$1;
(statearr_35849_35904[(2)] = inst_35779);

(statearr_35849_35904[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (10))){
var inst_35701 = (state_35799[(8)]);
var inst_35722 = (state_35799[(2)]);
var inst_35723 = cljs.core.get.call(null,inst_35722,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35724 = cljs.core.get.call(null,inst_35722,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35725 = cljs.core.get.call(null,inst_35722,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35726 = inst_35701;
var state_35799__$1 = (function (){var statearr_35850 = state_35799;
(statearr_35850[(16)] = inst_35723);

(statearr_35850[(17)] = inst_35724);

(statearr_35850[(7)] = inst_35726);

(statearr_35850[(18)] = inst_35725);

return statearr_35850;
})();
var statearr_35851_35905 = state_35799__$1;
(statearr_35851_35905[(2)] = null);

(statearr_35851_35905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (18))){
var inst_35741 = (state_35799[(2)]);
var state_35799__$1 = state_35799;
var statearr_35852_35906 = state_35799__$1;
(statearr_35852_35906[(2)] = inst_35741);

(statearr_35852_35906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (37))){
var state_35799__$1 = state_35799;
var statearr_35853_35907 = state_35799__$1;
(statearr_35853_35907[(2)] = null);

(statearr_35853_35907[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35800 === (8))){
var inst_35701 = (state_35799[(8)]);
var inst_35719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35701);
var state_35799__$1 = state_35799;
var statearr_35854_35908 = state_35799__$1;
(statearr_35854_35908[(2)] = inst_35719);

(statearr_35854_35908[(1)] = (10));


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
});})(c__27021__auto___35862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26956__auto__,c__27021__auto___35862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26957__auto__ = null;
var cljs$core$async$mix_$_state_machine__26957__auto____0 = (function (){
var statearr_35858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35858[(0)] = cljs$core$async$mix_$_state_machine__26957__auto__);

(statearr_35858[(1)] = (1));

return statearr_35858;
});
var cljs$core$async$mix_$_state_machine__26957__auto____1 = (function (state_35799){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_35799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e35859){if((e35859 instanceof Object)){
var ex__26960__auto__ = e35859;
var statearr_35860_35909 = state_35799;
(statearr_35860_35909[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35910 = state_35799;
state_35799 = G__35910;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26957__auto__ = function(state_35799){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26957__auto____1.call(this,state_35799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26957__auto____0;
cljs$core$async$mix_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26957__auto____1;
return cljs$core$async$mix_$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___35862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27023__auto__ = (function (){var statearr_35861 = f__27022__auto__.call(null);
(statearr_35861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___35862);

return statearr_35861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___35862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args35911 = [];
var len__25996__auto___35914 = arguments.length;
var i__25997__auto___35915 = (0);
while(true){
if((i__25997__auto___35915 < len__25996__auto___35914)){
args35911.push((arguments[i__25997__auto___35915]));

var G__35916 = (i__25997__auto___35915 + (1));
i__25997__auto___35915 = G__35916;
continue;
} else {
}
break;
}

var G__35913 = args35911.length;
switch (G__35913) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35911.length)].join('')));

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
var args35919 = [];
var len__25996__auto___36044 = arguments.length;
var i__25997__auto___36045 = (0);
while(true){
if((i__25997__auto___36045 < len__25996__auto___36044)){
args35919.push((arguments[i__25997__auto___36045]));

var G__36046 = (i__25997__auto___36045 + (1));
i__25997__auto___36045 = G__36046;
continue;
} else {
}
break;
}

var G__35921 = args35919.length;
switch (G__35921) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35919.length)].join('')));

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
return (function (p1__35918_SHARP_){
if(cljs.core.truth_(p1__35918_SHARP_.call(null,topic))){
return p1__35918_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35918_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24888__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35922 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35923){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35923 = meta35923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35924,meta35923__$1){
var self__ = this;
var _35924__$1 = this;
return (new cljs.core.async.t_cljs$core$async35922(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35923__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35924){
var self__ = this;
var _35924__$1 = this;
return self__.meta35923;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35922.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35923","meta35923",-2135349399,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35922";

cljs.core.async.t_cljs$core$async35922.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async35922");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35922 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35922(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35923){
return (new cljs.core.async.t_cljs$core$async35922(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35923));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35922(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27021__auto___36048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___36048,mults,ensure_mult,p){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___36048,mults,ensure_mult,p){
return (function (state_35996){
var state_val_35997 = (state_35996[(1)]);
if((state_val_35997 === (7))){
var inst_35992 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_35998_36049 = state_35996__$1;
(statearr_35998_36049[(2)] = inst_35992);

(statearr_35998_36049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (20))){
var state_35996__$1 = state_35996;
var statearr_35999_36050 = state_35996__$1;
(statearr_35999_36050[(2)] = null);

(statearr_35999_36050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (1))){
var state_35996__$1 = state_35996;
var statearr_36000_36051 = state_35996__$1;
(statearr_36000_36051[(2)] = null);

(statearr_36000_36051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (24))){
var inst_35975 = (state_35996[(7)]);
var inst_35984 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35975);
var state_35996__$1 = state_35996;
var statearr_36001_36052 = state_35996__$1;
(statearr_36001_36052[(2)] = inst_35984);

(statearr_36001_36052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (4))){
var inst_35927 = (state_35996[(8)]);
var inst_35927__$1 = (state_35996[(2)]);
var inst_35928 = (inst_35927__$1 == null);
var state_35996__$1 = (function (){var statearr_36002 = state_35996;
(statearr_36002[(8)] = inst_35927__$1);

return statearr_36002;
})();
if(cljs.core.truth_(inst_35928)){
var statearr_36003_36053 = state_35996__$1;
(statearr_36003_36053[(1)] = (5));

} else {
var statearr_36004_36054 = state_35996__$1;
(statearr_36004_36054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (15))){
var inst_35969 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_36005_36055 = state_35996__$1;
(statearr_36005_36055[(2)] = inst_35969);

(statearr_36005_36055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (21))){
var inst_35989 = (state_35996[(2)]);
var state_35996__$1 = (function (){var statearr_36006 = state_35996;
(statearr_36006[(9)] = inst_35989);

return statearr_36006;
})();
var statearr_36007_36056 = state_35996__$1;
(statearr_36007_36056[(2)] = null);

(statearr_36007_36056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (13))){
var inst_35951 = (state_35996[(10)]);
var inst_35953 = cljs.core.chunked_seq_QMARK_.call(null,inst_35951);
var state_35996__$1 = state_35996;
if(inst_35953){
var statearr_36008_36057 = state_35996__$1;
(statearr_36008_36057[(1)] = (16));

} else {
var statearr_36009_36058 = state_35996__$1;
(statearr_36009_36058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (22))){
var inst_35981 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
if(cljs.core.truth_(inst_35981)){
var statearr_36010_36059 = state_35996__$1;
(statearr_36010_36059[(1)] = (23));

} else {
var statearr_36011_36060 = state_35996__$1;
(statearr_36011_36060[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (6))){
var inst_35975 = (state_35996[(7)]);
var inst_35977 = (state_35996[(11)]);
var inst_35927 = (state_35996[(8)]);
var inst_35975__$1 = topic_fn.call(null,inst_35927);
var inst_35976 = cljs.core.deref.call(null,mults);
var inst_35977__$1 = cljs.core.get.call(null,inst_35976,inst_35975__$1);
var state_35996__$1 = (function (){var statearr_36012 = state_35996;
(statearr_36012[(7)] = inst_35975__$1);

(statearr_36012[(11)] = inst_35977__$1);

return statearr_36012;
})();
if(cljs.core.truth_(inst_35977__$1)){
var statearr_36013_36061 = state_35996__$1;
(statearr_36013_36061[(1)] = (19));

} else {
var statearr_36014_36062 = state_35996__$1;
(statearr_36014_36062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (25))){
var inst_35986 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_36015_36063 = state_35996__$1;
(statearr_36015_36063[(2)] = inst_35986);

(statearr_36015_36063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (17))){
var inst_35951 = (state_35996[(10)]);
var inst_35960 = cljs.core.first.call(null,inst_35951);
var inst_35961 = cljs.core.async.muxch_STAR_.call(null,inst_35960);
var inst_35962 = cljs.core.async.close_BANG_.call(null,inst_35961);
var inst_35963 = cljs.core.next.call(null,inst_35951);
var inst_35937 = inst_35963;
var inst_35938 = null;
var inst_35939 = (0);
var inst_35940 = (0);
var state_35996__$1 = (function (){var statearr_36016 = state_35996;
(statearr_36016[(12)] = inst_35940);

(statearr_36016[(13)] = inst_35938);

(statearr_36016[(14)] = inst_35937);

(statearr_36016[(15)] = inst_35962);

(statearr_36016[(16)] = inst_35939);

return statearr_36016;
})();
var statearr_36017_36064 = state_35996__$1;
(statearr_36017_36064[(2)] = null);

(statearr_36017_36064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (3))){
var inst_35994 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35996__$1,inst_35994);
} else {
if((state_val_35997 === (12))){
var inst_35971 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_36018_36065 = state_35996__$1;
(statearr_36018_36065[(2)] = inst_35971);

(statearr_36018_36065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (2))){
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35996__$1,(4),ch);
} else {
if((state_val_35997 === (23))){
var state_35996__$1 = state_35996;
var statearr_36019_36066 = state_35996__$1;
(statearr_36019_36066[(2)] = null);

(statearr_36019_36066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (19))){
var inst_35977 = (state_35996[(11)]);
var inst_35927 = (state_35996[(8)]);
var inst_35979 = cljs.core.async.muxch_STAR_.call(null,inst_35977);
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35996__$1,(22),inst_35979,inst_35927);
} else {
if((state_val_35997 === (11))){
var inst_35937 = (state_35996[(14)]);
var inst_35951 = (state_35996[(10)]);
var inst_35951__$1 = cljs.core.seq.call(null,inst_35937);
var state_35996__$1 = (function (){var statearr_36020 = state_35996;
(statearr_36020[(10)] = inst_35951__$1);

return statearr_36020;
})();
if(inst_35951__$1){
var statearr_36021_36067 = state_35996__$1;
(statearr_36021_36067[(1)] = (13));

} else {
var statearr_36022_36068 = state_35996__$1;
(statearr_36022_36068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (9))){
var inst_35973 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_36023_36069 = state_35996__$1;
(statearr_36023_36069[(2)] = inst_35973);

(statearr_36023_36069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (5))){
var inst_35934 = cljs.core.deref.call(null,mults);
var inst_35935 = cljs.core.vals.call(null,inst_35934);
var inst_35936 = cljs.core.seq.call(null,inst_35935);
var inst_35937 = inst_35936;
var inst_35938 = null;
var inst_35939 = (0);
var inst_35940 = (0);
var state_35996__$1 = (function (){var statearr_36024 = state_35996;
(statearr_36024[(12)] = inst_35940);

(statearr_36024[(13)] = inst_35938);

(statearr_36024[(14)] = inst_35937);

(statearr_36024[(16)] = inst_35939);

return statearr_36024;
})();
var statearr_36025_36070 = state_35996__$1;
(statearr_36025_36070[(2)] = null);

(statearr_36025_36070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (14))){
var state_35996__$1 = state_35996;
var statearr_36029_36071 = state_35996__$1;
(statearr_36029_36071[(2)] = null);

(statearr_36029_36071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (16))){
var inst_35951 = (state_35996[(10)]);
var inst_35955 = cljs.core.chunk_first.call(null,inst_35951);
var inst_35956 = cljs.core.chunk_rest.call(null,inst_35951);
var inst_35957 = cljs.core.count.call(null,inst_35955);
var inst_35937 = inst_35956;
var inst_35938 = inst_35955;
var inst_35939 = inst_35957;
var inst_35940 = (0);
var state_35996__$1 = (function (){var statearr_36030 = state_35996;
(statearr_36030[(12)] = inst_35940);

(statearr_36030[(13)] = inst_35938);

(statearr_36030[(14)] = inst_35937);

(statearr_36030[(16)] = inst_35939);

return statearr_36030;
})();
var statearr_36031_36072 = state_35996__$1;
(statearr_36031_36072[(2)] = null);

(statearr_36031_36072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (10))){
var inst_35940 = (state_35996[(12)]);
var inst_35938 = (state_35996[(13)]);
var inst_35937 = (state_35996[(14)]);
var inst_35939 = (state_35996[(16)]);
var inst_35945 = cljs.core._nth.call(null,inst_35938,inst_35940);
var inst_35946 = cljs.core.async.muxch_STAR_.call(null,inst_35945);
var inst_35947 = cljs.core.async.close_BANG_.call(null,inst_35946);
var inst_35948 = (inst_35940 + (1));
var tmp36026 = inst_35938;
var tmp36027 = inst_35937;
var tmp36028 = inst_35939;
var inst_35937__$1 = tmp36027;
var inst_35938__$1 = tmp36026;
var inst_35939__$1 = tmp36028;
var inst_35940__$1 = inst_35948;
var state_35996__$1 = (function (){var statearr_36032 = state_35996;
(statearr_36032[(12)] = inst_35940__$1);

(statearr_36032[(13)] = inst_35938__$1);

(statearr_36032[(17)] = inst_35947);

(statearr_36032[(14)] = inst_35937__$1);

(statearr_36032[(16)] = inst_35939__$1);

return statearr_36032;
})();
var statearr_36033_36073 = state_35996__$1;
(statearr_36033_36073[(2)] = null);

(statearr_36033_36073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (18))){
var inst_35966 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_36034_36074 = state_35996__$1;
(statearr_36034_36074[(2)] = inst_35966);

(statearr_36034_36074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (8))){
var inst_35940 = (state_35996[(12)]);
var inst_35939 = (state_35996[(16)]);
var inst_35942 = (inst_35940 < inst_35939);
var inst_35943 = inst_35942;
var state_35996__$1 = state_35996;
if(cljs.core.truth_(inst_35943)){
var statearr_36035_36075 = state_35996__$1;
(statearr_36035_36075[(1)] = (10));

} else {
var statearr_36036_36076 = state_35996__$1;
(statearr_36036_36076[(1)] = (11));

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
});})(c__27021__auto___36048,mults,ensure_mult,p))
;
return ((function (switch__26956__auto__,c__27021__auto___36048,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_36040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36040[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_36040[(1)] = (1));

return statearr_36040;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_35996){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_35996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e36041){if((e36041 instanceof Object)){
var ex__26960__auto__ = e36041;
var statearr_36042_36077 = state_35996;
(statearr_36042_36077[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36078 = state_35996;
state_35996 = G__36078;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_35996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_35996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___36048,mults,ensure_mult,p))
})();
var state__27023__auto__ = (function (){var statearr_36043 = f__27022__auto__.call(null);
(statearr_36043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___36048);

return statearr_36043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___36048,mults,ensure_mult,p))
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
var args36079 = [];
var len__25996__auto___36082 = arguments.length;
var i__25997__auto___36083 = (0);
while(true){
if((i__25997__auto___36083 < len__25996__auto___36082)){
args36079.push((arguments[i__25997__auto___36083]));

var G__36084 = (i__25997__auto___36083 + (1));
i__25997__auto___36083 = G__36084;
continue;
} else {
}
break;
}

var G__36081 = args36079.length;
switch (G__36081) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36079.length)].join('')));

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
var args36086 = [];
var len__25996__auto___36089 = arguments.length;
var i__25997__auto___36090 = (0);
while(true){
if((i__25997__auto___36090 < len__25996__auto___36089)){
args36086.push((arguments[i__25997__auto___36090]));

var G__36091 = (i__25997__auto___36090 + (1));
i__25997__auto___36090 = G__36091;
continue;
} else {
}
break;
}

var G__36088 = args36086.length;
switch (G__36088) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36086.length)].join('')));

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
var args36093 = [];
var len__25996__auto___36164 = arguments.length;
var i__25997__auto___36165 = (0);
while(true){
if((i__25997__auto___36165 < len__25996__auto___36164)){
args36093.push((arguments[i__25997__auto___36165]));

var G__36166 = (i__25997__auto___36165 + (1));
i__25997__auto___36165 = G__36166;
continue;
} else {
}
break;
}

var G__36095 = args36093.length;
switch (G__36095) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36093.length)].join('')));

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
var c__27021__auto___36168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___36168,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___36168,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36134){
var state_val_36135 = (state_36134[(1)]);
if((state_val_36135 === (7))){
var state_36134__$1 = state_36134;
var statearr_36136_36169 = state_36134__$1;
(statearr_36136_36169[(2)] = null);

(statearr_36136_36169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (1))){
var state_36134__$1 = state_36134;
var statearr_36137_36170 = state_36134__$1;
(statearr_36137_36170[(2)] = null);

(statearr_36137_36170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (4))){
var inst_36098 = (state_36134[(7)]);
var inst_36100 = (inst_36098 < cnt);
var state_36134__$1 = state_36134;
if(cljs.core.truth_(inst_36100)){
var statearr_36138_36171 = state_36134__$1;
(statearr_36138_36171[(1)] = (6));

} else {
var statearr_36139_36172 = state_36134__$1;
(statearr_36139_36172[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (15))){
var inst_36130 = (state_36134[(2)]);
var state_36134__$1 = state_36134;
var statearr_36140_36173 = state_36134__$1;
(statearr_36140_36173[(2)] = inst_36130);

(statearr_36140_36173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (13))){
var inst_36123 = cljs.core.async.close_BANG_.call(null,out);
var state_36134__$1 = state_36134;
var statearr_36141_36174 = state_36134__$1;
(statearr_36141_36174[(2)] = inst_36123);

(statearr_36141_36174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (6))){
var state_36134__$1 = state_36134;
var statearr_36142_36175 = state_36134__$1;
(statearr_36142_36175[(2)] = null);

(statearr_36142_36175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (3))){
var inst_36132 = (state_36134[(2)]);
var state_36134__$1 = state_36134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36134__$1,inst_36132);
} else {
if((state_val_36135 === (12))){
var inst_36120 = (state_36134[(8)]);
var inst_36120__$1 = (state_36134[(2)]);
var inst_36121 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36120__$1);
var state_36134__$1 = (function (){var statearr_36143 = state_36134;
(statearr_36143[(8)] = inst_36120__$1);

return statearr_36143;
})();
if(cljs.core.truth_(inst_36121)){
var statearr_36144_36176 = state_36134__$1;
(statearr_36144_36176[(1)] = (13));

} else {
var statearr_36145_36177 = state_36134__$1;
(statearr_36145_36177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (2))){
var inst_36097 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36098 = (0);
var state_36134__$1 = (function (){var statearr_36146 = state_36134;
(statearr_36146[(9)] = inst_36097);

(statearr_36146[(7)] = inst_36098);

return statearr_36146;
})();
var statearr_36147_36178 = state_36134__$1;
(statearr_36147_36178[(2)] = null);

(statearr_36147_36178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (11))){
var inst_36098 = (state_36134[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36134,(10),Object,null,(9));
var inst_36107 = chs__$1.call(null,inst_36098);
var inst_36108 = done.call(null,inst_36098);
var inst_36109 = cljs.core.async.take_BANG_.call(null,inst_36107,inst_36108);
var state_36134__$1 = state_36134;
var statearr_36148_36179 = state_36134__$1;
(statearr_36148_36179[(2)] = inst_36109);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36134__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (9))){
var inst_36098 = (state_36134[(7)]);
var inst_36111 = (state_36134[(2)]);
var inst_36112 = (inst_36098 + (1));
var inst_36098__$1 = inst_36112;
var state_36134__$1 = (function (){var statearr_36149 = state_36134;
(statearr_36149[(7)] = inst_36098__$1);

(statearr_36149[(10)] = inst_36111);

return statearr_36149;
})();
var statearr_36150_36180 = state_36134__$1;
(statearr_36150_36180[(2)] = null);

(statearr_36150_36180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (5))){
var inst_36118 = (state_36134[(2)]);
var state_36134__$1 = (function (){var statearr_36151 = state_36134;
(statearr_36151[(11)] = inst_36118);

return statearr_36151;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36134__$1,(12),dchan);
} else {
if((state_val_36135 === (14))){
var inst_36120 = (state_36134[(8)]);
var inst_36125 = cljs.core.apply.call(null,f,inst_36120);
var state_36134__$1 = state_36134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36134__$1,(16),out,inst_36125);
} else {
if((state_val_36135 === (16))){
var inst_36127 = (state_36134[(2)]);
var state_36134__$1 = (function (){var statearr_36152 = state_36134;
(statearr_36152[(12)] = inst_36127);

return statearr_36152;
})();
var statearr_36153_36181 = state_36134__$1;
(statearr_36153_36181[(2)] = null);

(statearr_36153_36181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (10))){
var inst_36102 = (state_36134[(2)]);
var inst_36103 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36134__$1 = (function (){var statearr_36154 = state_36134;
(statearr_36154[(13)] = inst_36102);

return statearr_36154;
})();
var statearr_36155_36182 = state_36134__$1;
(statearr_36155_36182[(2)] = inst_36103);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36134__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (8))){
var inst_36116 = (state_36134[(2)]);
var state_36134__$1 = state_36134;
var statearr_36156_36183 = state_36134__$1;
(statearr_36156_36183[(2)] = inst_36116);

(statearr_36156_36183[(1)] = (5));


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
});})(c__27021__auto___36168,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26956__auto__,c__27021__auto___36168,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_36160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36160[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_36160[(1)] = (1));

return statearr_36160;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_36134){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_36134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e36161){if((e36161 instanceof Object)){
var ex__26960__auto__ = e36161;
var statearr_36162_36184 = state_36134;
(statearr_36162_36184[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36185 = state_36134;
state_36134 = G__36185;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_36134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_36134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___36168,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27023__auto__ = (function (){var statearr_36163 = f__27022__auto__.call(null);
(statearr_36163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___36168);

return statearr_36163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___36168,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args36187 = [];
var len__25996__auto___36245 = arguments.length;
var i__25997__auto___36246 = (0);
while(true){
if((i__25997__auto___36246 < len__25996__auto___36245)){
args36187.push((arguments[i__25997__auto___36246]));

var G__36247 = (i__25997__auto___36246 + (1));
i__25997__auto___36246 = G__36247;
continue;
} else {
}
break;
}

var G__36189 = args36187.length;
switch (G__36189) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36187.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27021__auto___36249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___36249,out){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___36249,out){
return (function (state_36221){
var state_val_36222 = (state_36221[(1)]);
if((state_val_36222 === (7))){
var inst_36200 = (state_36221[(7)]);
var inst_36201 = (state_36221[(8)]);
var inst_36200__$1 = (state_36221[(2)]);
var inst_36201__$1 = cljs.core.nth.call(null,inst_36200__$1,(0),null);
var inst_36202 = cljs.core.nth.call(null,inst_36200__$1,(1),null);
var inst_36203 = (inst_36201__$1 == null);
var state_36221__$1 = (function (){var statearr_36223 = state_36221;
(statearr_36223[(9)] = inst_36202);

(statearr_36223[(7)] = inst_36200__$1);

(statearr_36223[(8)] = inst_36201__$1);

return statearr_36223;
})();
if(cljs.core.truth_(inst_36203)){
var statearr_36224_36250 = state_36221__$1;
(statearr_36224_36250[(1)] = (8));

} else {
var statearr_36225_36251 = state_36221__$1;
(statearr_36225_36251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (1))){
var inst_36190 = cljs.core.vec.call(null,chs);
var inst_36191 = inst_36190;
var state_36221__$1 = (function (){var statearr_36226 = state_36221;
(statearr_36226[(10)] = inst_36191);

return statearr_36226;
})();
var statearr_36227_36252 = state_36221__$1;
(statearr_36227_36252[(2)] = null);

(statearr_36227_36252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (4))){
var inst_36191 = (state_36221[(10)]);
var state_36221__$1 = state_36221;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36221__$1,(7),inst_36191);
} else {
if((state_val_36222 === (6))){
var inst_36217 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
var statearr_36228_36253 = state_36221__$1;
(statearr_36228_36253[(2)] = inst_36217);

(statearr_36228_36253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (3))){
var inst_36219 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36221__$1,inst_36219);
} else {
if((state_val_36222 === (2))){
var inst_36191 = (state_36221[(10)]);
var inst_36193 = cljs.core.count.call(null,inst_36191);
var inst_36194 = (inst_36193 > (0));
var state_36221__$1 = state_36221;
if(cljs.core.truth_(inst_36194)){
var statearr_36230_36254 = state_36221__$1;
(statearr_36230_36254[(1)] = (4));

} else {
var statearr_36231_36255 = state_36221__$1;
(statearr_36231_36255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (11))){
var inst_36191 = (state_36221[(10)]);
var inst_36210 = (state_36221[(2)]);
var tmp36229 = inst_36191;
var inst_36191__$1 = tmp36229;
var state_36221__$1 = (function (){var statearr_36232 = state_36221;
(statearr_36232[(10)] = inst_36191__$1);

(statearr_36232[(11)] = inst_36210);

return statearr_36232;
})();
var statearr_36233_36256 = state_36221__$1;
(statearr_36233_36256[(2)] = null);

(statearr_36233_36256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (9))){
var inst_36201 = (state_36221[(8)]);
var state_36221__$1 = state_36221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36221__$1,(11),out,inst_36201);
} else {
if((state_val_36222 === (5))){
var inst_36215 = cljs.core.async.close_BANG_.call(null,out);
var state_36221__$1 = state_36221;
var statearr_36234_36257 = state_36221__$1;
(statearr_36234_36257[(2)] = inst_36215);

(statearr_36234_36257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (10))){
var inst_36213 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
var statearr_36235_36258 = state_36221__$1;
(statearr_36235_36258[(2)] = inst_36213);

(statearr_36235_36258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (8))){
var inst_36191 = (state_36221[(10)]);
var inst_36202 = (state_36221[(9)]);
var inst_36200 = (state_36221[(7)]);
var inst_36201 = (state_36221[(8)]);
var inst_36205 = (function (){var cs = inst_36191;
var vec__36196 = inst_36200;
var v = inst_36201;
var c = inst_36202;
return ((function (cs,vec__36196,v,c,inst_36191,inst_36202,inst_36200,inst_36201,state_val_36222,c__27021__auto___36249,out){
return (function (p1__36186_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36186_SHARP_);
});
;})(cs,vec__36196,v,c,inst_36191,inst_36202,inst_36200,inst_36201,state_val_36222,c__27021__auto___36249,out))
})();
var inst_36206 = cljs.core.filterv.call(null,inst_36205,inst_36191);
var inst_36191__$1 = inst_36206;
var state_36221__$1 = (function (){var statearr_36236 = state_36221;
(statearr_36236[(10)] = inst_36191__$1);

return statearr_36236;
})();
var statearr_36237_36259 = state_36221__$1;
(statearr_36237_36259[(2)] = null);

(statearr_36237_36259[(1)] = (2));


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
});})(c__27021__auto___36249,out))
;
return ((function (switch__26956__auto__,c__27021__auto___36249,out){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_36241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36241[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_36241[(1)] = (1));

return statearr_36241;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_36221){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_36221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e36242){if((e36242 instanceof Object)){
var ex__26960__auto__ = e36242;
var statearr_36243_36260 = state_36221;
(statearr_36243_36260[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36261 = state_36221;
state_36221 = G__36261;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_36221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_36221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___36249,out))
})();
var state__27023__auto__ = (function (){var statearr_36244 = f__27022__auto__.call(null);
(statearr_36244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___36249);

return statearr_36244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___36249,out))
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
var args36262 = [];
var len__25996__auto___36311 = arguments.length;
var i__25997__auto___36312 = (0);
while(true){
if((i__25997__auto___36312 < len__25996__auto___36311)){
args36262.push((arguments[i__25997__auto___36312]));

var G__36313 = (i__25997__auto___36312 + (1));
i__25997__auto___36312 = G__36313;
continue;
} else {
}
break;
}

var G__36264 = args36262.length;
switch (G__36264) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36262.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27021__auto___36315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___36315,out){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___36315,out){
return (function (state_36288){
var state_val_36289 = (state_36288[(1)]);
if((state_val_36289 === (7))){
var inst_36270 = (state_36288[(7)]);
var inst_36270__$1 = (state_36288[(2)]);
var inst_36271 = (inst_36270__$1 == null);
var inst_36272 = cljs.core.not.call(null,inst_36271);
var state_36288__$1 = (function (){var statearr_36290 = state_36288;
(statearr_36290[(7)] = inst_36270__$1);

return statearr_36290;
})();
if(inst_36272){
var statearr_36291_36316 = state_36288__$1;
(statearr_36291_36316[(1)] = (8));

} else {
var statearr_36292_36317 = state_36288__$1;
(statearr_36292_36317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (1))){
var inst_36265 = (0);
var state_36288__$1 = (function (){var statearr_36293 = state_36288;
(statearr_36293[(8)] = inst_36265);

return statearr_36293;
})();
var statearr_36294_36318 = state_36288__$1;
(statearr_36294_36318[(2)] = null);

(statearr_36294_36318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (4))){
var state_36288__$1 = state_36288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36288__$1,(7),ch);
} else {
if((state_val_36289 === (6))){
var inst_36283 = (state_36288[(2)]);
var state_36288__$1 = state_36288;
var statearr_36295_36319 = state_36288__$1;
(statearr_36295_36319[(2)] = inst_36283);

(statearr_36295_36319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (3))){
var inst_36285 = (state_36288[(2)]);
var inst_36286 = cljs.core.async.close_BANG_.call(null,out);
var state_36288__$1 = (function (){var statearr_36296 = state_36288;
(statearr_36296[(9)] = inst_36285);

return statearr_36296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36288__$1,inst_36286);
} else {
if((state_val_36289 === (2))){
var inst_36265 = (state_36288[(8)]);
var inst_36267 = (inst_36265 < n);
var state_36288__$1 = state_36288;
if(cljs.core.truth_(inst_36267)){
var statearr_36297_36320 = state_36288__$1;
(statearr_36297_36320[(1)] = (4));

} else {
var statearr_36298_36321 = state_36288__$1;
(statearr_36298_36321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (11))){
var inst_36265 = (state_36288[(8)]);
var inst_36275 = (state_36288[(2)]);
var inst_36276 = (inst_36265 + (1));
var inst_36265__$1 = inst_36276;
var state_36288__$1 = (function (){var statearr_36299 = state_36288;
(statearr_36299[(10)] = inst_36275);

(statearr_36299[(8)] = inst_36265__$1);

return statearr_36299;
})();
var statearr_36300_36322 = state_36288__$1;
(statearr_36300_36322[(2)] = null);

(statearr_36300_36322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (9))){
var state_36288__$1 = state_36288;
var statearr_36301_36323 = state_36288__$1;
(statearr_36301_36323[(2)] = null);

(statearr_36301_36323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (5))){
var state_36288__$1 = state_36288;
var statearr_36302_36324 = state_36288__$1;
(statearr_36302_36324[(2)] = null);

(statearr_36302_36324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (10))){
var inst_36280 = (state_36288[(2)]);
var state_36288__$1 = state_36288;
var statearr_36303_36325 = state_36288__$1;
(statearr_36303_36325[(2)] = inst_36280);

(statearr_36303_36325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (8))){
var inst_36270 = (state_36288[(7)]);
var state_36288__$1 = state_36288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36288__$1,(11),out,inst_36270);
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
});})(c__27021__auto___36315,out))
;
return ((function (switch__26956__auto__,c__27021__auto___36315,out){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_36307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36307[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_36307[(1)] = (1));

return statearr_36307;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_36288){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_36288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e36308){if((e36308 instanceof Object)){
var ex__26960__auto__ = e36308;
var statearr_36309_36326 = state_36288;
(statearr_36309_36326[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36327 = state_36288;
state_36288 = G__36327;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_36288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_36288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___36315,out))
})();
var state__27023__auto__ = (function (){var statearr_36310 = f__27022__auto__.call(null);
(statearr_36310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___36315);

return statearr_36310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___36315,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36335 = (function (f,ch,meta36336){
this.f = f;
this.ch = ch;
this.meta36336 = meta36336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36337,meta36336__$1){
var self__ = this;
var _36337__$1 = this;
return (new cljs.core.async.t_cljs$core$async36335(self__.f,self__.ch,meta36336__$1));
});

cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36337){
var self__ = this;
var _36337__$1 = this;
return self__.meta36336;
});

cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36338 = (function (f,ch,meta36336,_,fn1,meta36339){
this.f = f;
this.ch = ch;
this.meta36336 = meta36336;
this._ = _;
this.fn1 = fn1;
this.meta36339 = meta36339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36340,meta36339__$1){
var self__ = this;
var _36340__$1 = this;
return (new cljs.core.async.t_cljs$core$async36338(self__.f,self__.ch,self__.meta36336,self__._,self__.fn1,meta36339__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36340){
var self__ = this;
var _36340__$1 = this;
return self__.meta36339;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36338.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36328_SHARP_){
return f1.call(null,(((p1__36328_SHARP_ == null))?null:self__.f.call(null,p1__36328_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36338.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36336","meta36336",-525227016,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36335","cljs.core.async/t_cljs$core$async36335",-979416306,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36339","meta36339",1153544851,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36338";

cljs.core.async.t_cljs$core$async36338.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async36338");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36338 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36338(f__$1,ch__$1,meta36336__$1,___$2,fn1__$1,meta36339){
return (new cljs.core.async.t_cljs$core$async36338(f__$1,ch__$1,meta36336__$1,___$2,fn1__$1,meta36339));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36338(self__.f,self__.ch,self__.meta36336,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36336","meta36336",-525227016,null)], null);
});

cljs.core.async.t_cljs$core$async36335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36335";

cljs.core.async.t_cljs$core$async36335.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async36335");
});

cljs.core.async.__GT_t_cljs$core$async36335 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36335(f__$1,ch__$1,meta36336){
return (new cljs.core.async.t_cljs$core$async36335(f__$1,ch__$1,meta36336));
});

}

return (new cljs.core.async.t_cljs$core$async36335(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36344 = (function (f,ch,meta36345){
this.f = f;
this.ch = ch;
this.meta36345 = meta36345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36346,meta36345__$1){
var self__ = this;
var _36346__$1 = this;
return (new cljs.core.async.t_cljs$core$async36344(self__.f,self__.ch,meta36345__$1));
});

cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36346){
var self__ = this;
var _36346__$1 = this;
return self__.meta36345;
});

cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36345","meta36345",-82122636,null)], null);
});

cljs.core.async.t_cljs$core$async36344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36344";

cljs.core.async.t_cljs$core$async36344.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async36344");
});

cljs.core.async.__GT_t_cljs$core$async36344 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36344(f__$1,ch__$1,meta36345){
return (new cljs.core.async.t_cljs$core$async36344(f__$1,ch__$1,meta36345));
});

}

return (new cljs.core.async.t_cljs$core$async36344(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36350 = (function (p,ch,meta36351){
this.p = p;
this.ch = ch;
this.meta36351 = meta36351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36352,meta36351__$1){
var self__ = this;
var _36352__$1 = this;
return (new cljs.core.async.t_cljs$core$async36350(self__.p,self__.ch,meta36351__$1));
});

cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36352){
var self__ = this;
var _36352__$1 = this;
return self__.meta36351;
});

cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36351","meta36351",-30894265,null)], null);
});

cljs.core.async.t_cljs$core$async36350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36350";

cljs.core.async.t_cljs$core$async36350.cljs$lang$ctorPrWriter = (function (this__25494__auto__,writer__25495__auto__,opt__25496__auto__){
return cljs.core._write.call(null,writer__25495__auto__,"cljs.core.async/t_cljs$core$async36350");
});

cljs.core.async.__GT_t_cljs$core$async36350 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36350(p__$1,ch__$1,meta36351){
return (new cljs.core.async.t_cljs$core$async36350(p__$1,ch__$1,meta36351));
});

}

return (new cljs.core.async.t_cljs$core$async36350(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args36353 = [];
var len__25996__auto___36397 = arguments.length;
var i__25997__auto___36398 = (0);
while(true){
if((i__25997__auto___36398 < len__25996__auto___36397)){
args36353.push((arguments[i__25997__auto___36398]));

var G__36399 = (i__25997__auto___36398 + (1));
i__25997__auto___36398 = G__36399;
continue;
} else {
}
break;
}

var G__36355 = args36353.length;
switch (G__36355) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36353.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27021__auto___36401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___36401,out){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___36401,out){
return (function (state_36376){
var state_val_36377 = (state_36376[(1)]);
if((state_val_36377 === (7))){
var inst_36372 = (state_36376[(2)]);
var state_36376__$1 = state_36376;
var statearr_36378_36402 = state_36376__$1;
(statearr_36378_36402[(2)] = inst_36372);

(statearr_36378_36402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (1))){
var state_36376__$1 = state_36376;
var statearr_36379_36403 = state_36376__$1;
(statearr_36379_36403[(2)] = null);

(statearr_36379_36403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (4))){
var inst_36358 = (state_36376[(7)]);
var inst_36358__$1 = (state_36376[(2)]);
var inst_36359 = (inst_36358__$1 == null);
var state_36376__$1 = (function (){var statearr_36380 = state_36376;
(statearr_36380[(7)] = inst_36358__$1);

return statearr_36380;
})();
if(cljs.core.truth_(inst_36359)){
var statearr_36381_36404 = state_36376__$1;
(statearr_36381_36404[(1)] = (5));

} else {
var statearr_36382_36405 = state_36376__$1;
(statearr_36382_36405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (6))){
var inst_36358 = (state_36376[(7)]);
var inst_36363 = p.call(null,inst_36358);
var state_36376__$1 = state_36376;
if(cljs.core.truth_(inst_36363)){
var statearr_36383_36406 = state_36376__$1;
(statearr_36383_36406[(1)] = (8));

} else {
var statearr_36384_36407 = state_36376__$1;
(statearr_36384_36407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (3))){
var inst_36374 = (state_36376[(2)]);
var state_36376__$1 = state_36376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36376__$1,inst_36374);
} else {
if((state_val_36377 === (2))){
var state_36376__$1 = state_36376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36376__$1,(4),ch);
} else {
if((state_val_36377 === (11))){
var inst_36366 = (state_36376[(2)]);
var state_36376__$1 = state_36376;
var statearr_36385_36408 = state_36376__$1;
(statearr_36385_36408[(2)] = inst_36366);

(statearr_36385_36408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (9))){
var state_36376__$1 = state_36376;
var statearr_36386_36409 = state_36376__$1;
(statearr_36386_36409[(2)] = null);

(statearr_36386_36409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (5))){
var inst_36361 = cljs.core.async.close_BANG_.call(null,out);
var state_36376__$1 = state_36376;
var statearr_36387_36410 = state_36376__$1;
(statearr_36387_36410[(2)] = inst_36361);

(statearr_36387_36410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (10))){
var inst_36369 = (state_36376[(2)]);
var state_36376__$1 = (function (){var statearr_36388 = state_36376;
(statearr_36388[(8)] = inst_36369);

return statearr_36388;
})();
var statearr_36389_36411 = state_36376__$1;
(statearr_36389_36411[(2)] = null);

(statearr_36389_36411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (8))){
var inst_36358 = (state_36376[(7)]);
var state_36376__$1 = state_36376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36376__$1,(11),out,inst_36358);
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
});})(c__27021__auto___36401,out))
;
return ((function (switch__26956__auto__,c__27021__auto___36401,out){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_36393 = [null,null,null,null,null,null,null,null,null];
(statearr_36393[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_36393[(1)] = (1));

return statearr_36393;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_36376){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_36376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e36394){if((e36394 instanceof Object)){
var ex__26960__auto__ = e36394;
var statearr_36395_36412 = state_36376;
(statearr_36395_36412[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36413 = state_36376;
state_36376 = G__36413;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_36376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_36376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___36401,out))
})();
var state__27023__auto__ = (function (){var statearr_36396 = f__27022__auto__.call(null);
(statearr_36396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___36401);

return statearr_36396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___36401,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36414 = [];
var len__25996__auto___36417 = arguments.length;
var i__25997__auto___36418 = (0);
while(true){
if((i__25997__auto___36418 < len__25996__auto___36417)){
args36414.push((arguments[i__25997__auto___36418]));

var G__36419 = (i__25997__auto___36418 + (1));
i__25997__auto___36418 = G__36419;
continue;
} else {
}
break;
}

var G__36416 = args36414.length;
switch (G__36416) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36414.length)].join('')));

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
var c__27021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto__){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto__){
return (function (state_36586){
var state_val_36587 = (state_36586[(1)]);
if((state_val_36587 === (7))){
var inst_36582 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36588_36629 = state_36586__$1;
(statearr_36588_36629[(2)] = inst_36582);

(statearr_36588_36629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (20))){
var inst_36552 = (state_36586[(7)]);
var inst_36563 = (state_36586[(2)]);
var inst_36564 = cljs.core.next.call(null,inst_36552);
var inst_36538 = inst_36564;
var inst_36539 = null;
var inst_36540 = (0);
var inst_36541 = (0);
var state_36586__$1 = (function (){var statearr_36589 = state_36586;
(statearr_36589[(8)] = inst_36539);

(statearr_36589[(9)] = inst_36540);

(statearr_36589[(10)] = inst_36541);

(statearr_36589[(11)] = inst_36538);

(statearr_36589[(12)] = inst_36563);

return statearr_36589;
})();
var statearr_36590_36630 = state_36586__$1;
(statearr_36590_36630[(2)] = null);

(statearr_36590_36630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (1))){
var state_36586__$1 = state_36586;
var statearr_36591_36631 = state_36586__$1;
(statearr_36591_36631[(2)] = null);

(statearr_36591_36631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (4))){
var inst_36527 = (state_36586[(13)]);
var inst_36527__$1 = (state_36586[(2)]);
var inst_36528 = (inst_36527__$1 == null);
var state_36586__$1 = (function (){var statearr_36592 = state_36586;
(statearr_36592[(13)] = inst_36527__$1);

return statearr_36592;
})();
if(cljs.core.truth_(inst_36528)){
var statearr_36593_36632 = state_36586__$1;
(statearr_36593_36632[(1)] = (5));

} else {
var statearr_36594_36633 = state_36586__$1;
(statearr_36594_36633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (15))){
var state_36586__$1 = state_36586;
var statearr_36598_36634 = state_36586__$1;
(statearr_36598_36634[(2)] = null);

(statearr_36598_36634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (21))){
var state_36586__$1 = state_36586;
var statearr_36599_36635 = state_36586__$1;
(statearr_36599_36635[(2)] = null);

(statearr_36599_36635[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (13))){
var inst_36539 = (state_36586[(8)]);
var inst_36540 = (state_36586[(9)]);
var inst_36541 = (state_36586[(10)]);
var inst_36538 = (state_36586[(11)]);
var inst_36548 = (state_36586[(2)]);
var inst_36549 = (inst_36541 + (1));
var tmp36595 = inst_36539;
var tmp36596 = inst_36540;
var tmp36597 = inst_36538;
var inst_36538__$1 = tmp36597;
var inst_36539__$1 = tmp36595;
var inst_36540__$1 = tmp36596;
var inst_36541__$1 = inst_36549;
var state_36586__$1 = (function (){var statearr_36600 = state_36586;
(statearr_36600[(8)] = inst_36539__$1);

(statearr_36600[(9)] = inst_36540__$1);

(statearr_36600[(14)] = inst_36548);

(statearr_36600[(10)] = inst_36541__$1);

(statearr_36600[(11)] = inst_36538__$1);

return statearr_36600;
})();
var statearr_36601_36636 = state_36586__$1;
(statearr_36601_36636[(2)] = null);

(statearr_36601_36636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (22))){
var state_36586__$1 = state_36586;
var statearr_36602_36637 = state_36586__$1;
(statearr_36602_36637[(2)] = null);

(statearr_36602_36637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (6))){
var inst_36527 = (state_36586[(13)]);
var inst_36536 = f.call(null,inst_36527);
var inst_36537 = cljs.core.seq.call(null,inst_36536);
var inst_36538 = inst_36537;
var inst_36539 = null;
var inst_36540 = (0);
var inst_36541 = (0);
var state_36586__$1 = (function (){var statearr_36603 = state_36586;
(statearr_36603[(8)] = inst_36539);

(statearr_36603[(9)] = inst_36540);

(statearr_36603[(10)] = inst_36541);

(statearr_36603[(11)] = inst_36538);

return statearr_36603;
})();
var statearr_36604_36638 = state_36586__$1;
(statearr_36604_36638[(2)] = null);

(statearr_36604_36638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (17))){
var inst_36552 = (state_36586[(7)]);
var inst_36556 = cljs.core.chunk_first.call(null,inst_36552);
var inst_36557 = cljs.core.chunk_rest.call(null,inst_36552);
var inst_36558 = cljs.core.count.call(null,inst_36556);
var inst_36538 = inst_36557;
var inst_36539 = inst_36556;
var inst_36540 = inst_36558;
var inst_36541 = (0);
var state_36586__$1 = (function (){var statearr_36605 = state_36586;
(statearr_36605[(8)] = inst_36539);

(statearr_36605[(9)] = inst_36540);

(statearr_36605[(10)] = inst_36541);

(statearr_36605[(11)] = inst_36538);

return statearr_36605;
})();
var statearr_36606_36639 = state_36586__$1;
(statearr_36606_36639[(2)] = null);

(statearr_36606_36639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (3))){
var inst_36584 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36586__$1,inst_36584);
} else {
if((state_val_36587 === (12))){
var inst_36572 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36607_36640 = state_36586__$1;
(statearr_36607_36640[(2)] = inst_36572);

(statearr_36607_36640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (2))){
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36586__$1,(4),in$);
} else {
if((state_val_36587 === (23))){
var inst_36580 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36608_36641 = state_36586__$1;
(statearr_36608_36641[(2)] = inst_36580);

(statearr_36608_36641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (19))){
var inst_36567 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36609_36642 = state_36586__$1;
(statearr_36609_36642[(2)] = inst_36567);

(statearr_36609_36642[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (11))){
var inst_36552 = (state_36586[(7)]);
var inst_36538 = (state_36586[(11)]);
var inst_36552__$1 = cljs.core.seq.call(null,inst_36538);
var state_36586__$1 = (function (){var statearr_36610 = state_36586;
(statearr_36610[(7)] = inst_36552__$1);

return statearr_36610;
})();
if(inst_36552__$1){
var statearr_36611_36643 = state_36586__$1;
(statearr_36611_36643[(1)] = (14));

} else {
var statearr_36612_36644 = state_36586__$1;
(statearr_36612_36644[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (9))){
var inst_36574 = (state_36586[(2)]);
var inst_36575 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36586__$1 = (function (){var statearr_36613 = state_36586;
(statearr_36613[(15)] = inst_36574);

return statearr_36613;
})();
if(cljs.core.truth_(inst_36575)){
var statearr_36614_36645 = state_36586__$1;
(statearr_36614_36645[(1)] = (21));

} else {
var statearr_36615_36646 = state_36586__$1;
(statearr_36615_36646[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (5))){
var inst_36530 = cljs.core.async.close_BANG_.call(null,out);
var state_36586__$1 = state_36586;
var statearr_36616_36647 = state_36586__$1;
(statearr_36616_36647[(2)] = inst_36530);

(statearr_36616_36647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (14))){
var inst_36552 = (state_36586[(7)]);
var inst_36554 = cljs.core.chunked_seq_QMARK_.call(null,inst_36552);
var state_36586__$1 = state_36586;
if(inst_36554){
var statearr_36617_36648 = state_36586__$1;
(statearr_36617_36648[(1)] = (17));

} else {
var statearr_36618_36649 = state_36586__$1;
(statearr_36618_36649[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (16))){
var inst_36570 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36619_36650 = state_36586__$1;
(statearr_36619_36650[(2)] = inst_36570);

(statearr_36619_36650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (10))){
var inst_36539 = (state_36586[(8)]);
var inst_36541 = (state_36586[(10)]);
var inst_36546 = cljs.core._nth.call(null,inst_36539,inst_36541);
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36586__$1,(13),out,inst_36546);
} else {
if((state_val_36587 === (18))){
var inst_36552 = (state_36586[(7)]);
var inst_36561 = cljs.core.first.call(null,inst_36552);
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36586__$1,(20),out,inst_36561);
} else {
if((state_val_36587 === (8))){
var inst_36540 = (state_36586[(9)]);
var inst_36541 = (state_36586[(10)]);
var inst_36543 = (inst_36541 < inst_36540);
var inst_36544 = inst_36543;
var state_36586__$1 = state_36586;
if(cljs.core.truth_(inst_36544)){
var statearr_36620_36651 = state_36586__$1;
(statearr_36620_36651[(1)] = (10));

} else {
var statearr_36621_36652 = state_36586__$1;
(statearr_36621_36652[(1)] = (11));

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
});})(c__27021__auto__))
;
return ((function (switch__26956__auto__,c__27021__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26957__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26957__auto____0 = (function (){
var statearr_36625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36625[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26957__auto__);

(statearr_36625[(1)] = (1));

return statearr_36625;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26957__auto____1 = (function (state_36586){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_36586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e36626){if((e36626 instanceof Object)){
var ex__26960__auto__ = e36626;
var statearr_36627_36653 = state_36586;
(statearr_36627_36653[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36654 = state_36586;
state_36586 = G__36654;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26957__auto__ = function(state_36586){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26957__auto____1.call(this,state_36586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26957__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26957__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto__))
})();
var state__27023__auto__ = (function (){var statearr_36628 = f__27022__auto__.call(null);
(statearr_36628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto__);

return statearr_36628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto__))
);

return c__27021__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36655 = [];
var len__25996__auto___36658 = arguments.length;
var i__25997__auto___36659 = (0);
while(true){
if((i__25997__auto___36659 < len__25996__auto___36658)){
args36655.push((arguments[i__25997__auto___36659]));

var G__36660 = (i__25997__auto___36659 + (1));
i__25997__auto___36659 = G__36660;
continue;
} else {
}
break;
}

var G__36657 = args36655.length;
switch (G__36657) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36655.length)].join('')));

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
var args36662 = [];
var len__25996__auto___36665 = arguments.length;
var i__25997__auto___36666 = (0);
while(true){
if((i__25997__auto___36666 < len__25996__auto___36665)){
args36662.push((arguments[i__25997__auto___36666]));

var G__36667 = (i__25997__auto___36666 + (1));
i__25997__auto___36666 = G__36667;
continue;
} else {
}
break;
}

var G__36664 = args36662.length;
switch (G__36664) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36662.length)].join('')));

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
var args36669 = [];
var len__25996__auto___36720 = arguments.length;
var i__25997__auto___36721 = (0);
while(true){
if((i__25997__auto___36721 < len__25996__auto___36720)){
args36669.push((arguments[i__25997__auto___36721]));

var G__36722 = (i__25997__auto___36721 + (1));
i__25997__auto___36721 = G__36722;
continue;
} else {
}
break;
}

var G__36671 = args36669.length;
switch (G__36671) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36669.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27021__auto___36724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___36724,out){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___36724,out){
return (function (state_36695){
var state_val_36696 = (state_36695[(1)]);
if((state_val_36696 === (7))){
var inst_36690 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36697_36725 = state_36695__$1;
(statearr_36697_36725[(2)] = inst_36690);

(statearr_36697_36725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (1))){
var inst_36672 = null;
var state_36695__$1 = (function (){var statearr_36698 = state_36695;
(statearr_36698[(7)] = inst_36672);

return statearr_36698;
})();
var statearr_36699_36726 = state_36695__$1;
(statearr_36699_36726[(2)] = null);

(statearr_36699_36726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (4))){
var inst_36675 = (state_36695[(8)]);
var inst_36675__$1 = (state_36695[(2)]);
var inst_36676 = (inst_36675__$1 == null);
var inst_36677 = cljs.core.not.call(null,inst_36676);
var state_36695__$1 = (function (){var statearr_36700 = state_36695;
(statearr_36700[(8)] = inst_36675__$1);

return statearr_36700;
})();
if(inst_36677){
var statearr_36701_36727 = state_36695__$1;
(statearr_36701_36727[(1)] = (5));

} else {
var statearr_36702_36728 = state_36695__$1;
(statearr_36702_36728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (6))){
var state_36695__$1 = state_36695;
var statearr_36703_36729 = state_36695__$1;
(statearr_36703_36729[(2)] = null);

(statearr_36703_36729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (3))){
var inst_36692 = (state_36695[(2)]);
var inst_36693 = cljs.core.async.close_BANG_.call(null,out);
var state_36695__$1 = (function (){var statearr_36704 = state_36695;
(statearr_36704[(9)] = inst_36692);

return statearr_36704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36695__$1,inst_36693);
} else {
if((state_val_36696 === (2))){
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36695__$1,(4),ch);
} else {
if((state_val_36696 === (11))){
var inst_36675 = (state_36695[(8)]);
var inst_36684 = (state_36695[(2)]);
var inst_36672 = inst_36675;
var state_36695__$1 = (function (){var statearr_36705 = state_36695;
(statearr_36705[(10)] = inst_36684);

(statearr_36705[(7)] = inst_36672);

return statearr_36705;
})();
var statearr_36706_36730 = state_36695__$1;
(statearr_36706_36730[(2)] = null);

(statearr_36706_36730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (9))){
var inst_36675 = (state_36695[(8)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36695__$1,(11),out,inst_36675);
} else {
if((state_val_36696 === (5))){
var inst_36675 = (state_36695[(8)]);
var inst_36672 = (state_36695[(7)]);
var inst_36679 = cljs.core._EQ_.call(null,inst_36675,inst_36672);
var state_36695__$1 = state_36695;
if(inst_36679){
var statearr_36708_36731 = state_36695__$1;
(statearr_36708_36731[(1)] = (8));

} else {
var statearr_36709_36732 = state_36695__$1;
(statearr_36709_36732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (10))){
var inst_36687 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36710_36733 = state_36695__$1;
(statearr_36710_36733[(2)] = inst_36687);

(statearr_36710_36733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (8))){
var inst_36672 = (state_36695[(7)]);
var tmp36707 = inst_36672;
var inst_36672__$1 = tmp36707;
var state_36695__$1 = (function (){var statearr_36711 = state_36695;
(statearr_36711[(7)] = inst_36672__$1);

return statearr_36711;
})();
var statearr_36712_36734 = state_36695__$1;
(statearr_36712_36734[(2)] = null);

(statearr_36712_36734[(1)] = (2));


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
});})(c__27021__auto___36724,out))
;
return ((function (switch__26956__auto__,c__27021__auto___36724,out){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_36716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36716[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_36716[(1)] = (1));

return statearr_36716;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_36695){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_36695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e36717){if((e36717 instanceof Object)){
var ex__26960__auto__ = e36717;
var statearr_36718_36735 = state_36695;
(statearr_36718_36735[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36736 = state_36695;
state_36695 = G__36736;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_36695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_36695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___36724,out))
})();
var state__27023__auto__ = (function (){var statearr_36719 = f__27022__auto__.call(null);
(statearr_36719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___36724);

return statearr_36719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___36724,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36737 = [];
var len__25996__auto___36807 = arguments.length;
var i__25997__auto___36808 = (0);
while(true){
if((i__25997__auto___36808 < len__25996__auto___36807)){
args36737.push((arguments[i__25997__auto___36808]));

var G__36809 = (i__25997__auto___36808 + (1));
i__25997__auto___36808 = G__36809;
continue;
} else {
}
break;
}

var G__36739 = args36737.length;
switch (G__36739) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36737.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27021__auto___36811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___36811,out){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___36811,out){
return (function (state_36777){
var state_val_36778 = (state_36777[(1)]);
if((state_val_36778 === (7))){
var inst_36773 = (state_36777[(2)]);
var state_36777__$1 = state_36777;
var statearr_36779_36812 = state_36777__$1;
(statearr_36779_36812[(2)] = inst_36773);

(statearr_36779_36812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (1))){
var inst_36740 = (new Array(n));
var inst_36741 = inst_36740;
var inst_36742 = (0);
var state_36777__$1 = (function (){var statearr_36780 = state_36777;
(statearr_36780[(7)] = inst_36741);

(statearr_36780[(8)] = inst_36742);

return statearr_36780;
})();
var statearr_36781_36813 = state_36777__$1;
(statearr_36781_36813[(2)] = null);

(statearr_36781_36813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (4))){
var inst_36745 = (state_36777[(9)]);
var inst_36745__$1 = (state_36777[(2)]);
var inst_36746 = (inst_36745__$1 == null);
var inst_36747 = cljs.core.not.call(null,inst_36746);
var state_36777__$1 = (function (){var statearr_36782 = state_36777;
(statearr_36782[(9)] = inst_36745__$1);

return statearr_36782;
})();
if(inst_36747){
var statearr_36783_36814 = state_36777__$1;
(statearr_36783_36814[(1)] = (5));

} else {
var statearr_36784_36815 = state_36777__$1;
(statearr_36784_36815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (15))){
var inst_36767 = (state_36777[(2)]);
var state_36777__$1 = state_36777;
var statearr_36785_36816 = state_36777__$1;
(statearr_36785_36816[(2)] = inst_36767);

(statearr_36785_36816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (13))){
var state_36777__$1 = state_36777;
var statearr_36786_36817 = state_36777__$1;
(statearr_36786_36817[(2)] = null);

(statearr_36786_36817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (6))){
var inst_36742 = (state_36777[(8)]);
var inst_36763 = (inst_36742 > (0));
var state_36777__$1 = state_36777;
if(cljs.core.truth_(inst_36763)){
var statearr_36787_36818 = state_36777__$1;
(statearr_36787_36818[(1)] = (12));

} else {
var statearr_36788_36819 = state_36777__$1;
(statearr_36788_36819[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (3))){
var inst_36775 = (state_36777[(2)]);
var state_36777__$1 = state_36777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36777__$1,inst_36775);
} else {
if((state_val_36778 === (12))){
var inst_36741 = (state_36777[(7)]);
var inst_36765 = cljs.core.vec.call(null,inst_36741);
var state_36777__$1 = state_36777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36777__$1,(15),out,inst_36765);
} else {
if((state_val_36778 === (2))){
var state_36777__$1 = state_36777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36777__$1,(4),ch);
} else {
if((state_val_36778 === (11))){
var inst_36757 = (state_36777[(2)]);
var inst_36758 = (new Array(n));
var inst_36741 = inst_36758;
var inst_36742 = (0);
var state_36777__$1 = (function (){var statearr_36789 = state_36777;
(statearr_36789[(10)] = inst_36757);

(statearr_36789[(7)] = inst_36741);

(statearr_36789[(8)] = inst_36742);

return statearr_36789;
})();
var statearr_36790_36820 = state_36777__$1;
(statearr_36790_36820[(2)] = null);

(statearr_36790_36820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (9))){
var inst_36741 = (state_36777[(7)]);
var inst_36755 = cljs.core.vec.call(null,inst_36741);
var state_36777__$1 = state_36777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36777__$1,(11),out,inst_36755);
} else {
if((state_val_36778 === (5))){
var inst_36745 = (state_36777[(9)]);
var inst_36741 = (state_36777[(7)]);
var inst_36750 = (state_36777[(11)]);
var inst_36742 = (state_36777[(8)]);
var inst_36749 = (inst_36741[inst_36742] = inst_36745);
var inst_36750__$1 = (inst_36742 + (1));
var inst_36751 = (inst_36750__$1 < n);
var state_36777__$1 = (function (){var statearr_36791 = state_36777;
(statearr_36791[(12)] = inst_36749);

(statearr_36791[(11)] = inst_36750__$1);

return statearr_36791;
})();
if(cljs.core.truth_(inst_36751)){
var statearr_36792_36821 = state_36777__$1;
(statearr_36792_36821[(1)] = (8));

} else {
var statearr_36793_36822 = state_36777__$1;
(statearr_36793_36822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (14))){
var inst_36770 = (state_36777[(2)]);
var inst_36771 = cljs.core.async.close_BANG_.call(null,out);
var state_36777__$1 = (function (){var statearr_36795 = state_36777;
(statearr_36795[(13)] = inst_36770);

return statearr_36795;
})();
var statearr_36796_36823 = state_36777__$1;
(statearr_36796_36823[(2)] = inst_36771);

(statearr_36796_36823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (10))){
var inst_36761 = (state_36777[(2)]);
var state_36777__$1 = state_36777;
var statearr_36797_36824 = state_36777__$1;
(statearr_36797_36824[(2)] = inst_36761);

(statearr_36797_36824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (8))){
var inst_36741 = (state_36777[(7)]);
var inst_36750 = (state_36777[(11)]);
var tmp36794 = inst_36741;
var inst_36741__$1 = tmp36794;
var inst_36742 = inst_36750;
var state_36777__$1 = (function (){var statearr_36798 = state_36777;
(statearr_36798[(7)] = inst_36741__$1);

(statearr_36798[(8)] = inst_36742);

return statearr_36798;
})();
var statearr_36799_36825 = state_36777__$1;
(statearr_36799_36825[(2)] = null);

(statearr_36799_36825[(1)] = (2));


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
});})(c__27021__auto___36811,out))
;
return ((function (switch__26956__auto__,c__27021__auto___36811,out){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_36803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36803[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_36803[(1)] = (1));

return statearr_36803;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_36777){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_36777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e36804){if((e36804 instanceof Object)){
var ex__26960__auto__ = e36804;
var statearr_36805_36826 = state_36777;
(statearr_36805_36826[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36827 = state_36777;
state_36777 = G__36827;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_36777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_36777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___36811,out))
})();
var state__27023__auto__ = (function (){var statearr_36806 = f__27022__auto__.call(null);
(statearr_36806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___36811);

return statearr_36806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___36811,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36828 = [];
var len__25996__auto___36902 = arguments.length;
var i__25997__auto___36903 = (0);
while(true){
if((i__25997__auto___36903 < len__25996__auto___36902)){
args36828.push((arguments[i__25997__auto___36903]));

var G__36904 = (i__25997__auto___36903 + (1));
i__25997__auto___36903 = G__36904;
continue;
} else {
}
break;
}

var G__36830 = args36828.length;
switch (G__36830) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36828.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27021__auto___36906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___36906,out){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___36906,out){
return (function (state_36872){
var state_val_36873 = (state_36872[(1)]);
if((state_val_36873 === (7))){
var inst_36868 = (state_36872[(2)]);
var state_36872__$1 = state_36872;
var statearr_36874_36907 = state_36872__$1;
(statearr_36874_36907[(2)] = inst_36868);

(statearr_36874_36907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (1))){
var inst_36831 = [];
var inst_36832 = inst_36831;
var inst_36833 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36872__$1 = (function (){var statearr_36875 = state_36872;
(statearr_36875[(7)] = inst_36832);

(statearr_36875[(8)] = inst_36833);

return statearr_36875;
})();
var statearr_36876_36908 = state_36872__$1;
(statearr_36876_36908[(2)] = null);

(statearr_36876_36908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (4))){
var inst_36836 = (state_36872[(9)]);
var inst_36836__$1 = (state_36872[(2)]);
var inst_36837 = (inst_36836__$1 == null);
var inst_36838 = cljs.core.not.call(null,inst_36837);
var state_36872__$1 = (function (){var statearr_36877 = state_36872;
(statearr_36877[(9)] = inst_36836__$1);

return statearr_36877;
})();
if(inst_36838){
var statearr_36878_36909 = state_36872__$1;
(statearr_36878_36909[(1)] = (5));

} else {
var statearr_36879_36910 = state_36872__$1;
(statearr_36879_36910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (15))){
var inst_36862 = (state_36872[(2)]);
var state_36872__$1 = state_36872;
var statearr_36880_36911 = state_36872__$1;
(statearr_36880_36911[(2)] = inst_36862);

(statearr_36880_36911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (13))){
var state_36872__$1 = state_36872;
var statearr_36881_36912 = state_36872__$1;
(statearr_36881_36912[(2)] = null);

(statearr_36881_36912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (6))){
var inst_36832 = (state_36872[(7)]);
var inst_36857 = inst_36832.length;
var inst_36858 = (inst_36857 > (0));
var state_36872__$1 = state_36872;
if(cljs.core.truth_(inst_36858)){
var statearr_36882_36913 = state_36872__$1;
(statearr_36882_36913[(1)] = (12));

} else {
var statearr_36883_36914 = state_36872__$1;
(statearr_36883_36914[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (3))){
var inst_36870 = (state_36872[(2)]);
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36872__$1,inst_36870);
} else {
if((state_val_36873 === (12))){
var inst_36832 = (state_36872[(7)]);
var inst_36860 = cljs.core.vec.call(null,inst_36832);
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36872__$1,(15),out,inst_36860);
} else {
if((state_val_36873 === (2))){
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36872__$1,(4),ch);
} else {
if((state_val_36873 === (11))){
var inst_36840 = (state_36872[(10)]);
var inst_36836 = (state_36872[(9)]);
var inst_36850 = (state_36872[(2)]);
var inst_36851 = [];
var inst_36852 = inst_36851.push(inst_36836);
var inst_36832 = inst_36851;
var inst_36833 = inst_36840;
var state_36872__$1 = (function (){var statearr_36884 = state_36872;
(statearr_36884[(7)] = inst_36832);

(statearr_36884[(8)] = inst_36833);

(statearr_36884[(11)] = inst_36852);

(statearr_36884[(12)] = inst_36850);

return statearr_36884;
})();
var statearr_36885_36915 = state_36872__$1;
(statearr_36885_36915[(2)] = null);

(statearr_36885_36915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (9))){
var inst_36832 = (state_36872[(7)]);
var inst_36848 = cljs.core.vec.call(null,inst_36832);
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36872__$1,(11),out,inst_36848);
} else {
if((state_val_36873 === (5))){
var inst_36833 = (state_36872[(8)]);
var inst_36840 = (state_36872[(10)]);
var inst_36836 = (state_36872[(9)]);
var inst_36840__$1 = f.call(null,inst_36836);
var inst_36841 = cljs.core._EQ_.call(null,inst_36840__$1,inst_36833);
var inst_36842 = cljs.core.keyword_identical_QMARK_.call(null,inst_36833,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36843 = (inst_36841) || (inst_36842);
var state_36872__$1 = (function (){var statearr_36886 = state_36872;
(statearr_36886[(10)] = inst_36840__$1);

return statearr_36886;
})();
if(cljs.core.truth_(inst_36843)){
var statearr_36887_36916 = state_36872__$1;
(statearr_36887_36916[(1)] = (8));

} else {
var statearr_36888_36917 = state_36872__$1;
(statearr_36888_36917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (14))){
var inst_36865 = (state_36872[(2)]);
var inst_36866 = cljs.core.async.close_BANG_.call(null,out);
var state_36872__$1 = (function (){var statearr_36890 = state_36872;
(statearr_36890[(13)] = inst_36865);

return statearr_36890;
})();
var statearr_36891_36918 = state_36872__$1;
(statearr_36891_36918[(2)] = inst_36866);

(statearr_36891_36918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (10))){
var inst_36855 = (state_36872[(2)]);
var state_36872__$1 = state_36872;
var statearr_36892_36919 = state_36872__$1;
(statearr_36892_36919[(2)] = inst_36855);

(statearr_36892_36919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (8))){
var inst_36832 = (state_36872[(7)]);
var inst_36840 = (state_36872[(10)]);
var inst_36836 = (state_36872[(9)]);
var inst_36845 = inst_36832.push(inst_36836);
var tmp36889 = inst_36832;
var inst_36832__$1 = tmp36889;
var inst_36833 = inst_36840;
var state_36872__$1 = (function (){var statearr_36893 = state_36872;
(statearr_36893[(7)] = inst_36832__$1);

(statearr_36893[(8)] = inst_36833);

(statearr_36893[(14)] = inst_36845);

return statearr_36893;
})();
var statearr_36894_36920 = state_36872__$1;
(statearr_36894_36920[(2)] = null);

(statearr_36894_36920[(1)] = (2));


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
});})(c__27021__auto___36906,out))
;
return ((function (switch__26956__auto__,c__27021__auto___36906,out){
return (function() {
var cljs$core$async$state_machine__26957__auto__ = null;
var cljs$core$async$state_machine__26957__auto____0 = (function (){
var statearr_36898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36898[(0)] = cljs$core$async$state_machine__26957__auto__);

(statearr_36898[(1)] = (1));

return statearr_36898;
});
var cljs$core$async$state_machine__26957__auto____1 = (function (state_36872){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_36872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e36899){if((e36899 instanceof Object)){
var ex__26960__auto__ = e36899;
var statearr_36900_36921 = state_36872;
(statearr_36900_36921[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36922 = state_36872;
state_36872 = G__36922;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
cljs$core$async$state_machine__26957__auto__ = function(state_36872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26957__auto____1.call(this,state_36872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26957__auto____0;
cljs$core$async$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26957__auto____1;
return cljs$core$async$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___36906,out))
})();
var state__27023__auto__ = (function (){var statearr_36901 = f__27022__auto__.call(null);
(statearr_36901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___36906);

return statearr_36901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___36906,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1480181534616