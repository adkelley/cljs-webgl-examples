// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args44299 = [];
var len__25996__auto___44302 = arguments.length;
var i__25997__auto___44303 = (0);
while(true){
if((i__25997__auto___44303 < len__25996__auto___44302)){
args44299.push((arguments[i__25997__auto___44303]));

var G__44304 = (i__25997__auto___44303 + (1));
i__25997__auto___44303 = G__44304;
continue;
} else {
}
break;
}

var G__44301 = args44299.length;
switch (G__44301) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44299.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26003__auto__ = [];
var len__25996__auto___44307 = arguments.length;
var i__25997__auto___44308 = (0);
while(true){
if((i__25997__auto___44308 < len__25996__auto___44307)){
args__26003__auto__.push((arguments[i__25997__auto___44308]));

var G__44309 = (i__25997__auto___44308 + (1));
i__25997__auto___44308 = G__44309;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq44306){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44306));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26003__auto__ = [];
var len__25996__auto___44311 = arguments.length;
var i__25997__auto___44312 = (0);
while(true){
if((i__25997__auto___44312 < len__25996__auto___44311)){
args__26003__auto__.push((arguments[i__25997__auto___44312]));

var G__44313 = (i__25997__auto___44312 + (1));
i__25997__auto___44312 = G__44313;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq44310){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44310));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__44314 = cljs.core._EQ_;
var expr__44315 = (function (){var or__24888__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e44318){if((e44318 instanceof Error)){
var e = e44318;
return false;
} else {
throw e44318;

}
}})();
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__44314.call(null,"true",expr__44315))){
return true;
} else {
if(cljs.core.truth_(pred__44314.call(null,"false",expr__44315))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__44315)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e44320){if((e44320 instanceof Error)){
var e = e44320;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e44320;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44321){
var map__44324 = p__44321;
var map__44324__$1 = ((((!((map__44324 == null)))?((((map__44324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44324):map__44324);
var message = cljs.core.get.call(null,map__44324__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44324__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24888__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24876__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24876__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24876__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28055__auto___44486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___44486,ch){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___44486,ch){
return (function (state_44455){
var state_val_44456 = (state_44455[(1)]);
if((state_val_44456 === (7))){
var inst_44451 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
var statearr_44457_44487 = state_44455__$1;
(statearr_44457_44487[(2)] = inst_44451);

(statearr_44457_44487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (1))){
var state_44455__$1 = state_44455;
var statearr_44458_44488 = state_44455__$1;
(statearr_44458_44488[(2)] = null);

(statearr_44458_44488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (4))){
var inst_44408 = (state_44455[(7)]);
var inst_44408__$1 = (state_44455[(2)]);
var state_44455__$1 = (function (){var statearr_44459 = state_44455;
(statearr_44459[(7)] = inst_44408__$1);

return statearr_44459;
})();
if(cljs.core.truth_(inst_44408__$1)){
var statearr_44460_44489 = state_44455__$1;
(statearr_44460_44489[(1)] = (5));

} else {
var statearr_44461_44490 = state_44455__$1;
(statearr_44461_44490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (15))){
var inst_44415 = (state_44455[(8)]);
var inst_44430 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44415);
var inst_44431 = cljs.core.first.call(null,inst_44430);
var inst_44432 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44431);
var inst_44433 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_44432)].join('');
var inst_44434 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44433);
var state_44455__$1 = state_44455;
var statearr_44462_44491 = state_44455__$1;
(statearr_44462_44491[(2)] = inst_44434);

(statearr_44462_44491[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (13))){
var inst_44439 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
var statearr_44463_44492 = state_44455__$1;
(statearr_44463_44492[(2)] = inst_44439);

(statearr_44463_44492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (6))){
var state_44455__$1 = state_44455;
var statearr_44464_44493 = state_44455__$1;
(statearr_44464_44493[(2)] = null);

(statearr_44464_44493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (17))){
var inst_44437 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
var statearr_44465_44494 = state_44455__$1;
(statearr_44465_44494[(2)] = inst_44437);

(statearr_44465_44494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (3))){
var inst_44453 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44455__$1,inst_44453);
} else {
if((state_val_44456 === (12))){
var inst_44414 = (state_44455[(9)]);
var inst_44428 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44414,opts);
var state_44455__$1 = state_44455;
if(cljs.core.truth_(inst_44428)){
var statearr_44466_44495 = state_44455__$1;
(statearr_44466_44495[(1)] = (15));

} else {
var statearr_44467_44496 = state_44455__$1;
(statearr_44467_44496[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (2))){
var state_44455__$1 = state_44455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44455__$1,(4),ch);
} else {
if((state_val_44456 === (11))){
var inst_44415 = (state_44455[(8)]);
var inst_44420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44421 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44415);
var inst_44422 = cljs.core.async.timeout.call(null,(1000));
var inst_44423 = [inst_44421,inst_44422];
var inst_44424 = (new cljs.core.PersistentVector(null,2,(5),inst_44420,inst_44423,null));
var state_44455__$1 = state_44455;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44455__$1,(14),inst_44424);
} else {
if((state_val_44456 === (9))){
var inst_44415 = (state_44455[(8)]);
var inst_44441 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44442 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44415);
var inst_44443 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44442);
var inst_44444 = [cljs.core.str("Not loading: "),cljs.core.str(inst_44443)].join('');
var inst_44445 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44444);
var state_44455__$1 = (function (){var statearr_44468 = state_44455;
(statearr_44468[(10)] = inst_44441);

return statearr_44468;
})();
var statearr_44469_44497 = state_44455__$1;
(statearr_44469_44497[(2)] = inst_44445);

(statearr_44469_44497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (5))){
var inst_44408 = (state_44455[(7)]);
var inst_44410 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44411 = (new cljs.core.PersistentArrayMap(null,2,inst_44410,null));
var inst_44412 = (new cljs.core.PersistentHashSet(null,inst_44411,null));
var inst_44413 = figwheel.client.focus_msgs.call(null,inst_44412,inst_44408);
var inst_44414 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44413);
var inst_44415 = cljs.core.first.call(null,inst_44413);
var inst_44416 = figwheel.client.autoload_QMARK_.call(null);
var state_44455__$1 = (function (){var statearr_44470 = state_44455;
(statearr_44470[(9)] = inst_44414);

(statearr_44470[(8)] = inst_44415);

return statearr_44470;
})();
if(cljs.core.truth_(inst_44416)){
var statearr_44471_44498 = state_44455__$1;
(statearr_44471_44498[(1)] = (8));

} else {
var statearr_44472_44499 = state_44455__$1;
(statearr_44472_44499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (14))){
var inst_44426 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
var statearr_44473_44500 = state_44455__$1;
(statearr_44473_44500[(2)] = inst_44426);

(statearr_44473_44500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (16))){
var state_44455__$1 = state_44455;
var statearr_44474_44501 = state_44455__$1;
(statearr_44474_44501[(2)] = null);

(statearr_44474_44501[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (10))){
var inst_44447 = (state_44455[(2)]);
var state_44455__$1 = (function (){var statearr_44475 = state_44455;
(statearr_44475[(11)] = inst_44447);

return statearr_44475;
})();
var statearr_44476_44502 = state_44455__$1;
(statearr_44476_44502[(2)] = null);

(statearr_44476_44502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (8))){
var inst_44414 = (state_44455[(9)]);
var inst_44418 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44414,opts);
var state_44455__$1 = state_44455;
if(cljs.core.truth_(inst_44418)){
var statearr_44477_44503 = state_44455__$1;
(statearr_44477_44503[(1)] = (11));

} else {
var statearr_44478_44504 = state_44455__$1;
(statearr_44478_44504[(1)] = (12));

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
});})(c__28055__auto___44486,ch))
;
return ((function (switch__27943__auto__,c__28055__auto___44486,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27944__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27944__auto____0 = (function (){
var statearr_44482 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44482[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27944__auto__);

(statearr_44482[(1)] = (1));

return statearr_44482;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27944__auto____1 = (function (state_44455){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_44455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e44483){if((e44483 instanceof Object)){
var ex__27947__auto__ = e44483;
var statearr_44484_44505 = state_44455;
(statearr_44484_44505[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44506 = state_44455;
state_44455 = G__44506;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27944__auto__ = function(state_44455){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27944__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27944__auto____1.call(this,state_44455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27944__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27944__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___44486,ch))
})();
var state__28057__auto__ = (function (){var statearr_44485 = f__28056__auto__.call(null);
(statearr_44485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___44486);

return statearr_44485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___44486,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44507_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44507_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_44510 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44510){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e44509){if((e44509 instanceof Error)){
var e = e44509;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44510], null));
} else {
var e = e44509;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_44510))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44511){
var map__44520 = p__44511;
var map__44520__$1 = ((((!((map__44520 == null)))?((((map__44520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44520):map__44520);
var opts = map__44520__$1;
var build_id = cljs.core.get.call(null,map__44520__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44520,map__44520__$1,opts,build_id){
return (function (p__44522){
var vec__44523 = p__44522;
var seq__44524 = cljs.core.seq.call(null,vec__44523);
var first__44525 = cljs.core.first.call(null,seq__44524);
var seq__44524__$1 = cljs.core.next.call(null,seq__44524);
var map__44526 = first__44525;
var map__44526__$1 = ((((!((map__44526 == null)))?((((map__44526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44526):map__44526);
var msg = map__44526__$1;
var msg_name = cljs.core.get.call(null,map__44526__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44524__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44523,seq__44524,first__44525,seq__44524__$1,map__44526,map__44526__$1,msg,msg_name,_,map__44520,map__44520__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44523,seq__44524,first__44525,seq__44524__$1,map__44526,map__44526__$1,msg,msg_name,_,map__44520,map__44520__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44520,map__44520__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44534){
var vec__44535 = p__44534;
var seq__44536 = cljs.core.seq.call(null,vec__44535);
var first__44537 = cljs.core.first.call(null,seq__44536);
var seq__44536__$1 = cljs.core.next.call(null,seq__44536);
var map__44538 = first__44537;
var map__44538__$1 = ((((!((map__44538 == null)))?((((map__44538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44538):map__44538);
var msg = map__44538__$1;
var msg_name = cljs.core.get.call(null,map__44538__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44536__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44540){
var map__44552 = p__44540;
var map__44552__$1 = ((((!((map__44552 == null)))?((((map__44552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44552):map__44552);
var on_compile_warning = cljs.core.get.call(null,map__44552__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44552__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44552,map__44552__$1,on_compile_warning,on_compile_fail){
return (function (p__44554){
var vec__44555 = p__44554;
var seq__44556 = cljs.core.seq.call(null,vec__44555);
var first__44557 = cljs.core.first.call(null,seq__44556);
var seq__44556__$1 = cljs.core.next.call(null,seq__44556);
var map__44558 = first__44557;
var map__44558__$1 = ((((!((map__44558 == null)))?((((map__44558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44558):map__44558);
var msg = map__44558__$1;
var msg_name = cljs.core.get.call(null,map__44558__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44556__$1;
var pred__44560 = cljs.core._EQ_;
var expr__44561 = msg_name;
if(cljs.core.truth_(pred__44560.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44561))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44560.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44561))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44552,map__44552__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto__,msg_hist,msg_names,msg){
return (function (state_44789){
var state_val_44790 = (state_44789[(1)]);
if((state_val_44790 === (7))){
var inst_44709 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
if(cljs.core.truth_(inst_44709)){
var statearr_44791_44841 = state_44789__$1;
(statearr_44791_44841[(1)] = (8));

} else {
var statearr_44792_44842 = state_44789__$1;
(statearr_44792_44842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (20))){
var inst_44783 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
var statearr_44793_44843 = state_44789__$1;
(statearr_44793_44843[(2)] = inst_44783);

(statearr_44793_44843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (27))){
var inst_44779 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
var statearr_44794_44844 = state_44789__$1;
(statearr_44794_44844[(2)] = inst_44779);

(statearr_44794_44844[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (1))){
var inst_44702 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44789__$1 = state_44789;
if(cljs.core.truth_(inst_44702)){
var statearr_44795_44845 = state_44789__$1;
(statearr_44795_44845[(1)] = (2));

} else {
var statearr_44796_44846 = state_44789__$1;
(statearr_44796_44846[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (24))){
var inst_44781 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
var statearr_44797_44847 = state_44789__$1;
(statearr_44797_44847[(2)] = inst_44781);

(statearr_44797_44847[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (4))){
var inst_44787 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44789__$1,inst_44787);
} else {
if((state_val_44790 === (15))){
var inst_44785 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
var statearr_44798_44848 = state_44789__$1;
(statearr_44798_44848[(2)] = inst_44785);

(statearr_44798_44848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (21))){
var inst_44738 = (state_44789[(2)]);
var inst_44739 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44740 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44739);
var state_44789__$1 = (function (){var statearr_44799 = state_44789;
(statearr_44799[(7)] = inst_44738);

return statearr_44799;
})();
var statearr_44800_44849 = state_44789__$1;
(statearr_44800_44849[(2)] = inst_44740);

(statearr_44800_44849[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (31))){
var inst_44768 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44789__$1 = state_44789;
if(cljs.core.truth_(inst_44768)){
var statearr_44801_44850 = state_44789__$1;
(statearr_44801_44850[(1)] = (34));

} else {
var statearr_44802_44851 = state_44789__$1;
(statearr_44802_44851[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (32))){
var inst_44777 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
var statearr_44803_44852 = state_44789__$1;
(statearr_44803_44852[(2)] = inst_44777);

(statearr_44803_44852[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (33))){
var inst_44764 = (state_44789[(2)]);
var inst_44765 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44766 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44765);
var state_44789__$1 = (function (){var statearr_44804 = state_44789;
(statearr_44804[(8)] = inst_44764);

return statearr_44804;
})();
var statearr_44805_44853 = state_44789__$1;
(statearr_44805_44853[(2)] = inst_44766);

(statearr_44805_44853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (13))){
var inst_44723 = figwheel.client.heads_up.clear.call(null);
var state_44789__$1 = state_44789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44789__$1,(16),inst_44723);
} else {
if((state_val_44790 === (22))){
var inst_44744 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44745 = figwheel.client.heads_up.append_warning_message.call(null,inst_44744);
var state_44789__$1 = state_44789;
var statearr_44806_44854 = state_44789__$1;
(statearr_44806_44854[(2)] = inst_44745);

(statearr_44806_44854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (36))){
var inst_44775 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
var statearr_44807_44855 = state_44789__$1;
(statearr_44807_44855[(2)] = inst_44775);

(statearr_44807_44855[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (29))){
var inst_44755 = (state_44789[(2)]);
var inst_44756 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44757 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44756);
var state_44789__$1 = (function (){var statearr_44808 = state_44789;
(statearr_44808[(9)] = inst_44755);

return statearr_44808;
})();
var statearr_44809_44856 = state_44789__$1;
(statearr_44809_44856[(2)] = inst_44757);

(statearr_44809_44856[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (6))){
var inst_44704 = (state_44789[(10)]);
var state_44789__$1 = state_44789;
var statearr_44810_44857 = state_44789__$1;
(statearr_44810_44857[(2)] = inst_44704);

(statearr_44810_44857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (28))){
var inst_44751 = (state_44789[(2)]);
var inst_44752 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44753 = figwheel.client.heads_up.display_warning.call(null,inst_44752);
var state_44789__$1 = (function (){var statearr_44811 = state_44789;
(statearr_44811[(11)] = inst_44751);

return statearr_44811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44789__$1,(29),inst_44753);
} else {
if((state_val_44790 === (25))){
var inst_44749 = figwheel.client.heads_up.clear.call(null);
var state_44789__$1 = state_44789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44789__$1,(28),inst_44749);
} else {
if((state_val_44790 === (34))){
var inst_44770 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44789__$1 = state_44789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44789__$1,(37),inst_44770);
} else {
if((state_val_44790 === (17))){
var inst_44729 = (state_44789[(2)]);
var inst_44730 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44731 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44730);
var state_44789__$1 = (function (){var statearr_44812 = state_44789;
(statearr_44812[(12)] = inst_44729);

return statearr_44812;
})();
var statearr_44813_44858 = state_44789__$1;
(statearr_44813_44858[(2)] = inst_44731);

(statearr_44813_44858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (3))){
var inst_44721 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44789__$1 = state_44789;
if(cljs.core.truth_(inst_44721)){
var statearr_44814_44859 = state_44789__$1;
(statearr_44814_44859[(1)] = (13));

} else {
var statearr_44815_44860 = state_44789__$1;
(statearr_44815_44860[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (12))){
var inst_44717 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
var statearr_44816_44861 = state_44789__$1;
(statearr_44816_44861[(2)] = inst_44717);

(statearr_44816_44861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (2))){
var inst_44704 = (state_44789[(10)]);
var inst_44704__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44789__$1 = (function (){var statearr_44817 = state_44789;
(statearr_44817[(10)] = inst_44704__$1);

return statearr_44817;
})();
if(cljs.core.truth_(inst_44704__$1)){
var statearr_44818_44862 = state_44789__$1;
(statearr_44818_44862[(1)] = (5));

} else {
var statearr_44819_44863 = state_44789__$1;
(statearr_44819_44863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (23))){
var inst_44747 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44789__$1 = state_44789;
if(cljs.core.truth_(inst_44747)){
var statearr_44820_44864 = state_44789__$1;
(statearr_44820_44864[(1)] = (25));

} else {
var statearr_44821_44865 = state_44789__$1;
(statearr_44821_44865[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (35))){
var state_44789__$1 = state_44789;
var statearr_44822_44866 = state_44789__$1;
(statearr_44822_44866[(2)] = null);

(statearr_44822_44866[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (19))){
var inst_44742 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44789__$1 = state_44789;
if(cljs.core.truth_(inst_44742)){
var statearr_44823_44867 = state_44789__$1;
(statearr_44823_44867[(1)] = (22));

} else {
var statearr_44824_44868 = state_44789__$1;
(statearr_44824_44868[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (11))){
var inst_44713 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
var statearr_44825_44869 = state_44789__$1;
(statearr_44825_44869[(2)] = inst_44713);

(statearr_44825_44869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (9))){
var inst_44715 = figwheel.client.heads_up.clear.call(null);
var state_44789__$1 = state_44789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44789__$1,(12),inst_44715);
} else {
if((state_val_44790 === (5))){
var inst_44706 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44789__$1 = state_44789;
var statearr_44826_44870 = state_44789__$1;
(statearr_44826_44870[(2)] = inst_44706);

(statearr_44826_44870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (14))){
var inst_44733 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44789__$1 = state_44789;
if(cljs.core.truth_(inst_44733)){
var statearr_44827_44871 = state_44789__$1;
(statearr_44827_44871[(1)] = (18));

} else {
var statearr_44828_44872 = state_44789__$1;
(statearr_44828_44872[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (26))){
var inst_44759 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44789__$1 = state_44789;
if(cljs.core.truth_(inst_44759)){
var statearr_44829_44873 = state_44789__$1;
(statearr_44829_44873[(1)] = (30));

} else {
var statearr_44830_44874 = state_44789__$1;
(statearr_44830_44874[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (16))){
var inst_44725 = (state_44789[(2)]);
var inst_44726 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44727 = figwheel.client.heads_up.display_exception.call(null,inst_44726);
var state_44789__$1 = (function (){var statearr_44831 = state_44789;
(statearr_44831[(13)] = inst_44725);

return statearr_44831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44789__$1,(17),inst_44727);
} else {
if((state_val_44790 === (30))){
var inst_44761 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44762 = figwheel.client.heads_up.display_warning.call(null,inst_44761);
var state_44789__$1 = state_44789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44789__$1,(33),inst_44762);
} else {
if((state_val_44790 === (10))){
var inst_44719 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
var statearr_44832_44875 = state_44789__$1;
(statearr_44832_44875[(2)] = inst_44719);

(statearr_44832_44875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (18))){
var inst_44735 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44736 = figwheel.client.heads_up.display_exception.call(null,inst_44735);
var state_44789__$1 = state_44789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44789__$1,(21),inst_44736);
} else {
if((state_val_44790 === (37))){
var inst_44772 = (state_44789[(2)]);
var state_44789__$1 = state_44789;
var statearr_44833_44876 = state_44789__$1;
(statearr_44833_44876[(2)] = inst_44772);

(statearr_44833_44876[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44790 === (8))){
var inst_44711 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44789__$1 = state_44789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44789__$1,(11),inst_44711);
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
});})(c__28055__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27943__auto__,c__28055__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto____0 = (function (){
var statearr_44837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44837[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto__);

(statearr_44837[(1)] = (1));

return statearr_44837;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto____1 = (function (state_44789){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_44789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e44838){if((e44838 instanceof Object)){
var ex__27947__auto__ = e44838;
var statearr_44839_44877 = state_44789;
(statearr_44839_44877[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44878 = state_44789;
state_44789 = G__44878;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto__ = function(state_44789){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto____1.call(this,state_44789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto__,msg_hist,msg_names,msg))
})();
var state__28057__auto__ = (function (){var statearr_44840 = f__28056__auto__.call(null);
(statearr_44840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto__);

return statearr_44840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto__,msg_hist,msg_names,msg))
);

return c__28055__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28055__auto___44941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___44941,ch){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___44941,ch){
return (function (state_44924){
var state_val_44925 = (state_44924[(1)]);
if((state_val_44925 === (1))){
var state_44924__$1 = state_44924;
var statearr_44926_44942 = state_44924__$1;
(statearr_44926_44942[(2)] = null);

(statearr_44926_44942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44925 === (2))){
var state_44924__$1 = state_44924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44924__$1,(4),ch);
} else {
if((state_val_44925 === (3))){
var inst_44922 = (state_44924[(2)]);
var state_44924__$1 = state_44924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44924__$1,inst_44922);
} else {
if((state_val_44925 === (4))){
var inst_44912 = (state_44924[(7)]);
var inst_44912__$1 = (state_44924[(2)]);
var state_44924__$1 = (function (){var statearr_44927 = state_44924;
(statearr_44927[(7)] = inst_44912__$1);

return statearr_44927;
})();
if(cljs.core.truth_(inst_44912__$1)){
var statearr_44928_44943 = state_44924__$1;
(statearr_44928_44943[(1)] = (5));

} else {
var statearr_44929_44944 = state_44924__$1;
(statearr_44929_44944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44925 === (5))){
var inst_44912 = (state_44924[(7)]);
var inst_44914 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44912);
var state_44924__$1 = state_44924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44924__$1,(8),inst_44914);
} else {
if((state_val_44925 === (6))){
var state_44924__$1 = state_44924;
var statearr_44930_44945 = state_44924__$1;
(statearr_44930_44945[(2)] = null);

(statearr_44930_44945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44925 === (7))){
var inst_44920 = (state_44924[(2)]);
var state_44924__$1 = state_44924;
var statearr_44931_44946 = state_44924__$1;
(statearr_44931_44946[(2)] = inst_44920);

(statearr_44931_44946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44925 === (8))){
var inst_44916 = (state_44924[(2)]);
var state_44924__$1 = (function (){var statearr_44932 = state_44924;
(statearr_44932[(8)] = inst_44916);

return statearr_44932;
})();
var statearr_44933_44947 = state_44924__$1;
(statearr_44933_44947[(2)] = null);

(statearr_44933_44947[(1)] = (2));


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
});})(c__28055__auto___44941,ch))
;
return ((function (switch__27943__auto__,c__28055__auto___44941,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27944__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27944__auto____0 = (function (){
var statearr_44937 = [null,null,null,null,null,null,null,null,null];
(statearr_44937[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27944__auto__);

(statearr_44937[(1)] = (1));

return statearr_44937;
});
var figwheel$client$heads_up_plugin_$_state_machine__27944__auto____1 = (function (state_44924){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_44924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e44938){if((e44938 instanceof Object)){
var ex__27947__auto__ = e44938;
var statearr_44939_44948 = state_44924;
(statearr_44939_44948[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44949 = state_44924;
state_44924 = G__44949;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27944__auto__ = function(state_44924){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27944__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27944__auto____1.call(this,state_44924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27944__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27944__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___44941,ch))
})();
var state__28057__auto__ = (function (){var statearr_44940 = f__28056__auto__.call(null);
(statearr_44940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___44941);

return statearr_44940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___44941,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto__){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto__){
return (function (state_44970){
var state_val_44971 = (state_44970[(1)]);
if((state_val_44971 === (1))){
var inst_44965 = cljs.core.async.timeout.call(null,(3000));
var state_44970__$1 = state_44970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44970__$1,(2),inst_44965);
} else {
if((state_val_44971 === (2))){
var inst_44967 = (state_44970[(2)]);
var inst_44968 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44970__$1 = (function (){var statearr_44972 = state_44970;
(statearr_44972[(7)] = inst_44967);

return statearr_44972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44970__$1,inst_44968);
} else {
return null;
}
}
});})(c__28055__auto__))
;
return ((function (switch__27943__auto__,c__28055__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27944__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27944__auto____0 = (function (){
var statearr_44976 = [null,null,null,null,null,null,null,null];
(statearr_44976[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27944__auto__);

(statearr_44976[(1)] = (1));

return statearr_44976;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27944__auto____1 = (function (state_44970){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_44970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e44977){if((e44977 instanceof Object)){
var ex__27947__auto__ = e44977;
var statearr_44978_44980 = state_44970;
(statearr_44978_44980[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44981 = state_44970;
state_44970 = G__44981;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27944__auto__ = function(state_44970){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27944__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27944__auto____1.call(this,state_44970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27944__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27944__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto__))
})();
var state__28057__auto__ = (function (){var statearr_44979 = f__28056__auto__.call(null);
(statearr_44979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto__);

return statearr_44979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto__))
);

return c__28055__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto__,figwheel_version,temp__4657__auto__){
return (function (state_45004){
var state_val_45005 = (state_45004[(1)]);
if((state_val_45005 === (1))){
var inst_44998 = cljs.core.async.timeout.call(null,(2000));
var state_45004__$1 = state_45004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45004__$1,(2),inst_44998);
} else {
if((state_val_45005 === (2))){
var inst_45000 = (state_45004[(2)]);
var inst_45001 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_45002 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_45001);
var state_45004__$1 = (function (){var statearr_45006 = state_45004;
(statearr_45006[(7)] = inst_45000);

return statearr_45006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45004__$1,inst_45002);
} else {
return null;
}
}
});})(c__28055__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27943__auto__,c__28055__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto____0 = (function (){
var statearr_45010 = [null,null,null,null,null,null,null,null];
(statearr_45010[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto__);

(statearr_45010[(1)] = (1));

return statearr_45010;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto____1 = (function (state_45004){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_45004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e45011){if((e45011 instanceof Object)){
var ex__27947__auto__ = e45011;
var statearr_45012_45014 = state_45004;
(statearr_45012_45014[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45015 = state_45004;
state_45004 = G__45015;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto__ = function(state_45004){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto____1.call(this,state_45004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28057__auto__ = (function (){var statearr_45013 = f__28056__auto__.call(null);
(statearr_45013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto__);

return statearr_45013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto__,figwheel_version,temp__4657__auto__))
);

return c__28055__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__45016){
var map__45020 = p__45016;
var map__45020__$1 = ((((!((map__45020 == null)))?((((map__45020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45020):map__45020);
var file = cljs.core.get.call(null,map__45020__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__45020__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__45020__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__45022 = "";
var G__45022__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__45022),cljs.core.str("file "),cljs.core.str(file)].join(''):G__45022);
var G__45022__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__45022__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__45022__$1);
if(cljs.core.truth_((function (){var and__24876__auto__ = line;
if(cljs.core.truth_(and__24876__auto__)){
return column;
} else {
return and__24876__auto__;
}
})())){
return [cljs.core.str(G__45022__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__45022__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__45023){
var map__45030 = p__45023;
var map__45030__$1 = ((((!((map__45030 == null)))?((((map__45030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45030):map__45030);
var ed = map__45030__$1;
var formatted_exception = cljs.core.get.call(null,map__45030__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__45030__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__45030__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__45032_45036 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__45033_45037 = null;
var count__45034_45038 = (0);
var i__45035_45039 = (0);
while(true){
if((i__45035_45039 < count__45034_45038)){
var msg_45040 = cljs.core._nth.call(null,chunk__45033_45037,i__45035_45039);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45040);

var G__45041 = seq__45032_45036;
var G__45042 = chunk__45033_45037;
var G__45043 = count__45034_45038;
var G__45044 = (i__45035_45039 + (1));
seq__45032_45036 = G__45041;
chunk__45033_45037 = G__45042;
count__45034_45038 = G__45043;
i__45035_45039 = G__45044;
continue;
} else {
var temp__4657__auto___45045 = cljs.core.seq.call(null,seq__45032_45036);
if(temp__4657__auto___45045){
var seq__45032_45046__$1 = temp__4657__auto___45045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45032_45046__$1)){
var c__25702__auto___45047 = cljs.core.chunk_first.call(null,seq__45032_45046__$1);
var G__45048 = cljs.core.chunk_rest.call(null,seq__45032_45046__$1);
var G__45049 = c__25702__auto___45047;
var G__45050 = cljs.core.count.call(null,c__25702__auto___45047);
var G__45051 = (0);
seq__45032_45036 = G__45048;
chunk__45033_45037 = G__45049;
count__45034_45038 = G__45050;
i__45035_45039 = G__45051;
continue;
} else {
var msg_45052 = cljs.core.first.call(null,seq__45032_45046__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45052);

var G__45053 = cljs.core.next.call(null,seq__45032_45046__$1);
var G__45054 = null;
var G__45055 = (0);
var G__45056 = (0);
seq__45032_45036 = G__45053;
chunk__45033_45037 = G__45054;
count__45034_45038 = G__45055;
i__45035_45039 = G__45056;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__45057){
var map__45060 = p__45057;
var map__45060__$1 = ((((!((map__45060 == null)))?((((map__45060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45060):map__45060);
var w = map__45060__$1;
var message = cljs.core.get.call(null,map__45060__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24876__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24876__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24876__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__45072 = cljs.core.seq.call(null,plugins);
var chunk__45073 = null;
var count__45074 = (0);
var i__45075 = (0);
while(true){
if((i__45075 < count__45074)){
var vec__45076 = cljs.core._nth.call(null,chunk__45073,i__45075);
var k = cljs.core.nth.call(null,vec__45076,(0),null);
var plugin = cljs.core.nth.call(null,vec__45076,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45082 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45072,chunk__45073,count__45074,i__45075,pl_45082,vec__45076,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_45082.call(null,msg_hist);
});})(seq__45072,chunk__45073,count__45074,i__45075,pl_45082,vec__45076,k,plugin))
);
} else {
}

var G__45083 = seq__45072;
var G__45084 = chunk__45073;
var G__45085 = count__45074;
var G__45086 = (i__45075 + (1));
seq__45072 = G__45083;
chunk__45073 = G__45084;
count__45074 = G__45085;
i__45075 = G__45086;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45072);
if(temp__4657__auto__){
var seq__45072__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45072__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__45072__$1);
var G__45087 = cljs.core.chunk_rest.call(null,seq__45072__$1);
var G__45088 = c__25702__auto__;
var G__45089 = cljs.core.count.call(null,c__25702__auto__);
var G__45090 = (0);
seq__45072 = G__45087;
chunk__45073 = G__45088;
count__45074 = G__45089;
i__45075 = G__45090;
continue;
} else {
var vec__45079 = cljs.core.first.call(null,seq__45072__$1);
var k = cljs.core.nth.call(null,vec__45079,(0),null);
var plugin = cljs.core.nth.call(null,vec__45079,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45091 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45072,chunk__45073,count__45074,i__45075,pl_45091,vec__45079,k,plugin,seq__45072__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_45091.call(null,msg_hist);
});})(seq__45072,chunk__45073,count__45074,i__45075,pl_45091,vec__45079,k,plugin,seq__45072__$1,temp__4657__auto__))
);
} else {
}

var G__45092 = cljs.core.next.call(null,seq__45072__$1);
var G__45093 = null;
var G__45094 = (0);
var G__45095 = (0);
seq__45072 = G__45092;
chunk__45073 = G__45093;
count__45074 = G__45094;
i__45075 = G__45095;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args45096 = [];
var len__25996__auto___45103 = arguments.length;
var i__25997__auto___45104 = (0);
while(true){
if((i__25997__auto___45104 < len__25996__auto___45103)){
args45096.push((arguments[i__25997__auto___45104]));

var G__45105 = (i__25997__auto___45104 + (1));
i__25997__auto___45104 = G__45105;
continue;
} else {
}
break;
}

var G__45098 = args45096.length;
switch (G__45098) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45096.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__45099_45107 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__45100_45108 = null;
var count__45101_45109 = (0);
var i__45102_45110 = (0);
while(true){
if((i__45102_45110 < count__45101_45109)){
var msg_45111 = cljs.core._nth.call(null,chunk__45100_45108,i__45102_45110);
figwheel.client.socket.handle_incoming_message.call(null,msg_45111);

var G__45112 = seq__45099_45107;
var G__45113 = chunk__45100_45108;
var G__45114 = count__45101_45109;
var G__45115 = (i__45102_45110 + (1));
seq__45099_45107 = G__45112;
chunk__45100_45108 = G__45113;
count__45101_45109 = G__45114;
i__45102_45110 = G__45115;
continue;
} else {
var temp__4657__auto___45116 = cljs.core.seq.call(null,seq__45099_45107);
if(temp__4657__auto___45116){
var seq__45099_45117__$1 = temp__4657__auto___45116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45099_45117__$1)){
var c__25702__auto___45118 = cljs.core.chunk_first.call(null,seq__45099_45117__$1);
var G__45119 = cljs.core.chunk_rest.call(null,seq__45099_45117__$1);
var G__45120 = c__25702__auto___45118;
var G__45121 = cljs.core.count.call(null,c__25702__auto___45118);
var G__45122 = (0);
seq__45099_45107 = G__45119;
chunk__45100_45108 = G__45120;
count__45101_45109 = G__45121;
i__45102_45110 = G__45122;
continue;
} else {
var msg_45123 = cljs.core.first.call(null,seq__45099_45117__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_45123);

var G__45124 = cljs.core.next.call(null,seq__45099_45117__$1);
var G__45125 = null;
var G__45126 = (0);
var G__45127 = (0);
seq__45099_45107 = G__45124;
chunk__45100_45108 = G__45125;
count__45101_45109 = G__45126;
i__45102_45110 = G__45127;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26003__auto__ = [];
var len__25996__auto___45132 = arguments.length;
var i__25997__auto___45133 = (0);
while(true){
if((i__25997__auto___45133 < len__25996__auto___45132)){
args__26003__auto__.push((arguments[i__25997__auto___45133]));

var G__45134 = (i__25997__auto___45133 + (1));
i__25997__auto___45133 = G__45134;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__45129){
var map__45130 = p__45129;
var map__45130__$1 = ((((!((map__45130 == null)))?((((map__45130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45130):map__45130);
var opts = map__45130__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq45128){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45128));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e45136){if((e45136 instanceof Error)){
var e = e45136;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e45136;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__45140){
var map__45141 = p__45140;
var map__45141__$1 = ((((!((map__45141 == null)))?((((map__45141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45141):map__45141);
var msg_name = cljs.core.get.call(null,map__45141__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1480194654197