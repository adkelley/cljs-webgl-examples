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
var args41226 = [];
var len__25996__auto___41229 = arguments.length;
var i__25997__auto___41230 = (0);
while(true){
if((i__25997__auto___41230 < len__25996__auto___41229)){
args41226.push((arguments[i__25997__auto___41230]));

var G__41231 = (i__25997__auto___41230 + (1));
i__25997__auto___41230 = G__41231;
continue;
} else {
}
break;
}

var G__41228 = args41226.length;
switch (G__41228) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41226.length)].join('')));

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
var len__25996__auto___41234 = arguments.length;
var i__25997__auto___41235 = (0);
while(true){
if((i__25997__auto___41235 < len__25996__auto___41234)){
args__26003__auto__.push((arguments[i__25997__auto___41235]));

var G__41236 = (i__25997__auto___41235 + (1));
i__25997__auto___41235 = G__41236;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41233){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41233));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26003__auto__ = [];
var len__25996__auto___41238 = arguments.length;
var i__25997__auto___41239 = (0);
while(true){
if((i__25997__auto___41239 < len__25996__auto___41238)){
args__26003__auto__.push((arguments[i__25997__auto___41239]));

var G__41240 = (i__25997__auto___41239 + (1));
i__25997__auto___41239 = G__41240;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41237){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41237));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__41241 = cljs.core._EQ_;
var expr__41242 = (function (){var or__24888__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e41245){if((e41245 instanceof Error)){
var e = e41245;
return false;
} else {
throw e41245;

}
}})();
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41241.call(null,"true",expr__41242))){
return true;
} else {
if(cljs.core.truth_(pred__41241.call(null,"false",expr__41242))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41242)].join('')));
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
}catch (e41247){if((e41247 instanceof Error)){
var e = e41247;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e41247;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41248){
var map__41251 = p__41248;
var map__41251__$1 = ((((!((map__41251 == null)))?((((map__41251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41251):map__41251);
var message = cljs.core.get.call(null,map__41251__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41251__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27021__auto___41413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___41413,ch){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___41413,ch){
return (function (state_41382){
var state_val_41383 = (state_41382[(1)]);
if((state_val_41383 === (7))){
var inst_41378 = (state_41382[(2)]);
var state_41382__$1 = state_41382;
var statearr_41384_41414 = state_41382__$1;
(statearr_41384_41414[(2)] = inst_41378);

(statearr_41384_41414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (1))){
var state_41382__$1 = state_41382;
var statearr_41385_41415 = state_41382__$1;
(statearr_41385_41415[(2)] = null);

(statearr_41385_41415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (4))){
var inst_41335 = (state_41382[(7)]);
var inst_41335__$1 = (state_41382[(2)]);
var state_41382__$1 = (function (){var statearr_41386 = state_41382;
(statearr_41386[(7)] = inst_41335__$1);

return statearr_41386;
})();
if(cljs.core.truth_(inst_41335__$1)){
var statearr_41387_41416 = state_41382__$1;
(statearr_41387_41416[(1)] = (5));

} else {
var statearr_41388_41417 = state_41382__$1;
(statearr_41388_41417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (15))){
var inst_41342 = (state_41382[(8)]);
var inst_41357 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41342);
var inst_41358 = cljs.core.first.call(null,inst_41357);
var inst_41359 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41358);
var inst_41360 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41359)].join('');
var inst_41361 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41360);
var state_41382__$1 = state_41382;
var statearr_41389_41418 = state_41382__$1;
(statearr_41389_41418[(2)] = inst_41361);

(statearr_41389_41418[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (13))){
var inst_41366 = (state_41382[(2)]);
var state_41382__$1 = state_41382;
var statearr_41390_41419 = state_41382__$1;
(statearr_41390_41419[(2)] = inst_41366);

(statearr_41390_41419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (6))){
var state_41382__$1 = state_41382;
var statearr_41391_41420 = state_41382__$1;
(statearr_41391_41420[(2)] = null);

(statearr_41391_41420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (17))){
var inst_41364 = (state_41382[(2)]);
var state_41382__$1 = state_41382;
var statearr_41392_41421 = state_41382__$1;
(statearr_41392_41421[(2)] = inst_41364);

(statearr_41392_41421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (3))){
var inst_41380 = (state_41382[(2)]);
var state_41382__$1 = state_41382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41382__$1,inst_41380);
} else {
if((state_val_41383 === (12))){
var inst_41341 = (state_41382[(9)]);
var inst_41355 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41341,opts);
var state_41382__$1 = state_41382;
if(cljs.core.truth_(inst_41355)){
var statearr_41393_41422 = state_41382__$1;
(statearr_41393_41422[(1)] = (15));

} else {
var statearr_41394_41423 = state_41382__$1;
(statearr_41394_41423[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (2))){
var state_41382__$1 = state_41382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41382__$1,(4),ch);
} else {
if((state_val_41383 === (11))){
var inst_41342 = (state_41382[(8)]);
var inst_41347 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41348 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41342);
var inst_41349 = cljs.core.async.timeout.call(null,(1000));
var inst_41350 = [inst_41348,inst_41349];
var inst_41351 = (new cljs.core.PersistentVector(null,2,(5),inst_41347,inst_41350,null));
var state_41382__$1 = state_41382;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41382__$1,(14),inst_41351);
} else {
if((state_val_41383 === (9))){
var inst_41342 = (state_41382[(8)]);
var inst_41368 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41369 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41342);
var inst_41370 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41369);
var inst_41371 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41370)].join('');
var inst_41372 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41371);
var state_41382__$1 = (function (){var statearr_41395 = state_41382;
(statearr_41395[(10)] = inst_41368);

return statearr_41395;
})();
var statearr_41396_41424 = state_41382__$1;
(statearr_41396_41424[(2)] = inst_41372);

(statearr_41396_41424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (5))){
var inst_41335 = (state_41382[(7)]);
var inst_41337 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41338 = (new cljs.core.PersistentArrayMap(null,2,inst_41337,null));
var inst_41339 = (new cljs.core.PersistentHashSet(null,inst_41338,null));
var inst_41340 = figwheel.client.focus_msgs.call(null,inst_41339,inst_41335);
var inst_41341 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41340);
var inst_41342 = cljs.core.first.call(null,inst_41340);
var inst_41343 = figwheel.client.autoload_QMARK_.call(null);
var state_41382__$1 = (function (){var statearr_41397 = state_41382;
(statearr_41397[(9)] = inst_41341);

(statearr_41397[(8)] = inst_41342);

return statearr_41397;
})();
if(cljs.core.truth_(inst_41343)){
var statearr_41398_41425 = state_41382__$1;
(statearr_41398_41425[(1)] = (8));

} else {
var statearr_41399_41426 = state_41382__$1;
(statearr_41399_41426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (14))){
var inst_41353 = (state_41382[(2)]);
var state_41382__$1 = state_41382;
var statearr_41400_41427 = state_41382__$1;
(statearr_41400_41427[(2)] = inst_41353);

(statearr_41400_41427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (16))){
var state_41382__$1 = state_41382;
var statearr_41401_41428 = state_41382__$1;
(statearr_41401_41428[(2)] = null);

(statearr_41401_41428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (10))){
var inst_41374 = (state_41382[(2)]);
var state_41382__$1 = (function (){var statearr_41402 = state_41382;
(statearr_41402[(11)] = inst_41374);

return statearr_41402;
})();
var statearr_41403_41429 = state_41382__$1;
(statearr_41403_41429[(2)] = null);

(statearr_41403_41429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41383 === (8))){
var inst_41341 = (state_41382[(9)]);
var inst_41345 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41341,opts);
var state_41382__$1 = state_41382;
if(cljs.core.truth_(inst_41345)){
var statearr_41404_41430 = state_41382__$1;
(statearr_41404_41430[(1)] = (11));

} else {
var statearr_41405_41431 = state_41382__$1;
(statearr_41405_41431[(1)] = (12));

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
});})(c__27021__auto___41413,ch))
;
return ((function (switch__26956__auto__,c__27021__auto___41413,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26957__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26957__auto____0 = (function (){
var statearr_41409 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41409[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26957__auto__);

(statearr_41409[(1)] = (1));

return statearr_41409;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26957__auto____1 = (function (state_41382){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_41382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e41410){if((e41410 instanceof Object)){
var ex__26960__auto__ = e41410;
var statearr_41411_41432 = state_41382;
(statearr_41411_41432[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41433 = state_41382;
state_41382 = G__41433;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26957__auto__ = function(state_41382){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26957__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26957__auto____1.call(this,state_41382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26957__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26957__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___41413,ch))
})();
var state__27023__auto__ = (function (){var statearr_41412 = f__27022__auto__.call(null);
(statearr_41412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___41413);

return statearr_41412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___41413,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41434_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41434_SHARP_));
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
var base_path_41437 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41437){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41436){if((e41436 instanceof Error)){
var e = e41436;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41437], null));
} else {
var e = e41436;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41437))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41438){
var map__41447 = p__41438;
var map__41447__$1 = ((((!((map__41447 == null)))?((((map__41447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41447):map__41447);
var opts = map__41447__$1;
var build_id = cljs.core.get.call(null,map__41447__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41447,map__41447__$1,opts,build_id){
return (function (p__41449){
var vec__41450 = p__41449;
var seq__41451 = cljs.core.seq.call(null,vec__41450);
var first__41452 = cljs.core.first.call(null,seq__41451);
var seq__41451__$1 = cljs.core.next.call(null,seq__41451);
var map__41453 = first__41452;
var map__41453__$1 = ((((!((map__41453 == null)))?((((map__41453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41453):map__41453);
var msg = map__41453__$1;
var msg_name = cljs.core.get.call(null,map__41453__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41451__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41450,seq__41451,first__41452,seq__41451__$1,map__41453,map__41453__$1,msg,msg_name,_,map__41447,map__41447__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41450,seq__41451,first__41452,seq__41451__$1,map__41453,map__41453__$1,msg,msg_name,_,map__41447,map__41447__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41447,map__41447__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41461){
var vec__41462 = p__41461;
var seq__41463 = cljs.core.seq.call(null,vec__41462);
var first__41464 = cljs.core.first.call(null,seq__41463);
var seq__41463__$1 = cljs.core.next.call(null,seq__41463);
var map__41465 = first__41464;
var map__41465__$1 = ((((!((map__41465 == null)))?((((map__41465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41465):map__41465);
var msg = map__41465__$1;
var msg_name = cljs.core.get.call(null,map__41465__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41463__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41467){
var map__41479 = p__41467;
var map__41479__$1 = ((((!((map__41479 == null)))?((((map__41479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41479):map__41479);
var on_compile_warning = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41479,map__41479__$1,on_compile_warning,on_compile_fail){
return (function (p__41481){
var vec__41482 = p__41481;
var seq__41483 = cljs.core.seq.call(null,vec__41482);
var first__41484 = cljs.core.first.call(null,seq__41483);
var seq__41483__$1 = cljs.core.next.call(null,seq__41483);
var map__41485 = first__41484;
var map__41485__$1 = ((((!((map__41485 == null)))?((((map__41485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41485):map__41485);
var msg = map__41485__$1;
var msg_name = cljs.core.get.call(null,map__41485__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41483__$1;
var pred__41487 = cljs.core._EQ_;
var expr__41488 = msg_name;
if(cljs.core.truth_(pred__41487.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41488))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41487.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41488))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41479,map__41479__$1,on_compile_warning,on_compile_fail))
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
var c__27021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto__,msg_hist,msg_names,msg){
return (function (state_41716){
var state_val_41717 = (state_41716[(1)]);
if((state_val_41717 === (7))){
var inst_41636 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41636)){
var statearr_41718_41768 = state_41716__$1;
(statearr_41718_41768[(1)] = (8));

} else {
var statearr_41719_41769 = state_41716__$1;
(statearr_41719_41769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (20))){
var inst_41710 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41720_41770 = state_41716__$1;
(statearr_41720_41770[(2)] = inst_41710);

(statearr_41720_41770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (27))){
var inst_41706 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41721_41771 = state_41716__$1;
(statearr_41721_41771[(2)] = inst_41706);

(statearr_41721_41771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (1))){
var inst_41629 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41629)){
var statearr_41722_41772 = state_41716__$1;
(statearr_41722_41772[(1)] = (2));

} else {
var statearr_41723_41773 = state_41716__$1;
(statearr_41723_41773[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (24))){
var inst_41708 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41724_41774 = state_41716__$1;
(statearr_41724_41774[(2)] = inst_41708);

(statearr_41724_41774[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (4))){
var inst_41714 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41716__$1,inst_41714);
} else {
if((state_val_41717 === (15))){
var inst_41712 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41725_41775 = state_41716__$1;
(statearr_41725_41775[(2)] = inst_41712);

(statearr_41725_41775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (21))){
var inst_41665 = (state_41716[(2)]);
var inst_41666 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41667 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41666);
var state_41716__$1 = (function (){var statearr_41726 = state_41716;
(statearr_41726[(7)] = inst_41665);

return statearr_41726;
})();
var statearr_41727_41776 = state_41716__$1;
(statearr_41727_41776[(2)] = inst_41667);

(statearr_41727_41776[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (31))){
var inst_41695 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41695)){
var statearr_41728_41777 = state_41716__$1;
(statearr_41728_41777[(1)] = (34));

} else {
var statearr_41729_41778 = state_41716__$1;
(statearr_41729_41778[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (32))){
var inst_41704 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41730_41779 = state_41716__$1;
(statearr_41730_41779[(2)] = inst_41704);

(statearr_41730_41779[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (33))){
var inst_41691 = (state_41716[(2)]);
var inst_41692 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41693 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41692);
var state_41716__$1 = (function (){var statearr_41731 = state_41716;
(statearr_41731[(8)] = inst_41691);

return statearr_41731;
})();
var statearr_41732_41780 = state_41716__$1;
(statearr_41732_41780[(2)] = inst_41693);

(statearr_41732_41780[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (13))){
var inst_41650 = figwheel.client.heads_up.clear.call(null);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(16),inst_41650);
} else {
if((state_val_41717 === (22))){
var inst_41671 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41672 = figwheel.client.heads_up.append_warning_message.call(null,inst_41671);
var state_41716__$1 = state_41716;
var statearr_41733_41781 = state_41716__$1;
(statearr_41733_41781[(2)] = inst_41672);

(statearr_41733_41781[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (36))){
var inst_41702 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41734_41782 = state_41716__$1;
(statearr_41734_41782[(2)] = inst_41702);

(statearr_41734_41782[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (29))){
var inst_41682 = (state_41716[(2)]);
var inst_41683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41684 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41683);
var state_41716__$1 = (function (){var statearr_41735 = state_41716;
(statearr_41735[(9)] = inst_41682);

return statearr_41735;
})();
var statearr_41736_41783 = state_41716__$1;
(statearr_41736_41783[(2)] = inst_41684);

(statearr_41736_41783[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (6))){
var inst_41631 = (state_41716[(10)]);
var state_41716__$1 = state_41716;
var statearr_41737_41784 = state_41716__$1;
(statearr_41737_41784[(2)] = inst_41631);

(statearr_41737_41784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (28))){
var inst_41678 = (state_41716[(2)]);
var inst_41679 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41680 = figwheel.client.heads_up.display_warning.call(null,inst_41679);
var state_41716__$1 = (function (){var statearr_41738 = state_41716;
(statearr_41738[(11)] = inst_41678);

return statearr_41738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(29),inst_41680);
} else {
if((state_val_41717 === (25))){
var inst_41676 = figwheel.client.heads_up.clear.call(null);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(28),inst_41676);
} else {
if((state_val_41717 === (34))){
var inst_41697 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(37),inst_41697);
} else {
if((state_val_41717 === (17))){
var inst_41656 = (state_41716[(2)]);
var inst_41657 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41658 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41657);
var state_41716__$1 = (function (){var statearr_41739 = state_41716;
(statearr_41739[(12)] = inst_41656);

return statearr_41739;
})();
var statearr_41740_41785 = state_41716__$1;
(statearr_41740_41785[(2)] = inst_41658);

(statearr_41740_41785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (3))){
var inst_41648 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41648)){
var statearr_41741_41786 = state_41716__$1;
(statearr_41741_41786[(1)] = (13));

} else {
var statearr_41742_41787 = state_41716__$1;
(statearr_41742_41787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (12))){
var inst_41644 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41743_41788 = state_41716__$1;
(statearr_41743_41788[(2)] = inst_41644);

(statearr_41743_41788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (2))){
var inst_41631 = (state_41716[(10)]);
var inst_41631__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41716__$1 = (function (){var statearr_41744 = state_41716;
(statearr_41744[(10)] = inst_41631__$1);

return statearr_41744;
})();
if(cljs.core.truth_(inst_41631__$1)){
var statearr_41745_41789 = state_41716__$1;
(statearr_41745_41789[(1)] = (5));

} else {
var statearr_41746_41790 = state_41716__$1;
(statearr_41746_41790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (23))){
var inst_41674 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41674)){
var statearr_41747_41791 = state_41716__$1;
(statearr_41747_41791[(1)] = (25));

} else {
var statearr_41748_41792 = state_41716__$1;
(statearr_41748_41792[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (35))){
var state_41716__$1 = state_41716;
var statearr_41749_41793 = state_41716__$1;
(statearr_41749_41793[(2)] = null);

(statearr_41749_41793[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (19))){
var inst_41669 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41669)){
var statearr_41750_41794 = state_41716__$1;
(statearr_41750_41794[(1)] = (22));

} else {
var statearr_41751_41795 = state_41716__$1;
(statearr_41751_41795[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (11))){
var inst_41640 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41752_41796 = state_41716__$1;
(statearr_41752_41796[(2)] = inst_41640);

(statearr_41752_41796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (9))){
var inst_41642 = figwheel.client.heads_up.clear.call(null);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(12),inst_41642);
} else {
if((state_val_41717 === (5))){
var inst_41633 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41716__$1 = state_41716;
var statearr_41753_41797 = state_41716__$1;
(statearr_41753_41797[(2)] = inst_41633);

(statearr_41753_41797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (14))){
var inst_41660 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41660)){
var statearr_41754_41798 = state_41716__$1;
(statearr_41754_41798[(1)] = (18));

} else {
var statearr_41755_41799 = state_41716__$1;
(statearr_41755_41799[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (26))){
var inst_41686 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41686)){
var statearr_41756_41800 = state_41716__$1;
(statearr_41756_41800[(1)] = (30));

} else {
var statearr_41757_41801 = state_41716__$1;
(statearr_41757_41801[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (16))){
var inst_41652 = (state_41716[(2)]);
var inst_41653 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41654 = figwheel.client.heads_up.display_exception.call(null,inst_41653);
var state_41716__$1 = (function (){var statearr_41758 = state_41716;
(statearr_41758[(13)] = inst_41652);

return statearr_41758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(17),inst_41654);
} else {
if((state_val_41717 === (30))){
var inst_41688 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41689 = figwheel.client.heads_up.display_warning.call(null,inst_41688);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(33),inst_41689);
} else {
if((state_val_41717 === (10))){
var inst_41646 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41759_41802 = state_41716__$1;
(statearr_41759_41802[(2)] = inst_41646);

(statearr_41759_41802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (18))){
var inst_41662 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41663 = figwheel.client.heads_up.display_exception.call(null,inst_41662);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(21),inst_41663);
} else {
if((state_val_41717 === (37))){
var inst_41699 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41760_41803 = state_41716__$1;
(statearr_41760_41803[(2)] = inst_41699);

(statearr_41760_41803[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (8))){
var inst_41638 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(11),inst_41638);
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
});})(c__27021__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26956__auto__,c__27021__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto____0 = (function (){
var statearr_41764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41764[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto__);

(statearr_41764[(1)] = (1));

return statearr_41764;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto____1 = (function (state_41716){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_41716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e41765){if((e41765 instanceof Object)){
var ex__26960__auto__ = e41765;
var statearr_41766_41804 = state_41716;
(statearr_41766_41804[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41805 = state_41716;
state_41716 = G__41805;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto__ = function(state_41716){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto____1.call(this,state_41716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto__,msg_hist,msg_names,msg))
})();
var state__27023__auto__ = (function (){var statearr_41767 = f__27022__auto__.call(null);
(statearr_41767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto__);

return statearr_41767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto__,msg_hist,msg_names,msg))
);

return c__27021__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27021__auto___41868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___41868,ch){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___41868,ch){
return (function (state_41851){
var state_val_41852 = (state_41851[(1)]);
if((state_val_41852 === (1))){
var state_41851__$1 = state_41851;
var statearr_41853_41869 = state_41851__$1;
(statearr_41853_41869[(2)] = null);

(statearr_41853_41869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41852 === (2))){
var state_41851__$1 = state_41851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41851__$1,(4),ch);
} else {
if((state_val_41852 === (3))){
var inst_41849 = (state_41851[(2)]);
var state_41851__$1 = state_41851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41851__$1,inst_41849);
} else {
if((state_val_41852 === (4))){
var inst_41839 = (state_41851[(7)]);
var inst_41839__$1 = (state_41851[(2)]);
var state_41851__$1 = (function (){var statearr_41854 = state_41851;
(statearr_41854[(7)] = inst_41839__$1);

return statearr_41854;
})();
if(cljs.core.truth_(inst_41839__$1)){
var statearr_41855_41870 = state_41851__$1;
(statearr_41855_41870[(1)] = (5));

} else {
var statearr_41856_41871 = state_41851__$1;
(statearr_41856_41871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41852 === (5))){
var inst_41839 = (state_41851[(7)]);
var inst_41841 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41839);
var state_41851__$1 = state_41851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41851__$1,(8),inst_41841);
} else {
if((state_val_41852 === (6))){
var state_41851__$1 = state_41851;
var statearr_41857_41872 = state_41851__$1;
(statearr_41857_41872[(2)] = null);

(statearr_41857_41872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41852 === (7))){
var inst_41847 = (state_41851[(2)]);
var state_41851__$1 = state_41851;
var statearr_41858_41873 = state_41851__$1;
(statearr_41858_41873[(2)] = inst_41847);

(statearr_41858_41873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41852 === (8))){
var inst_41843 = (state_41851[(2)]);
var state_41851__$1 = (function (){var statearr_41859 = state_41851;
(statearr_41859[(8)] = inst_41843);

return statearr_41859;
})();
var statearr_41860_41874 = state_41851__$1;
(statearr_41860_41874[(2)] = null);

(statearr_41860_41874[(1)] = (2));


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
});})(c__27021__auto___41868,ch))
;
return ((function (switch__26956__auto__,c__27021__auto___41868,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26957__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26957__auto____0 = (function (){
var statearr_41864 = [null,null,null,null,null,null,null,null,null];
(statearr_41864[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26957__auto__);

(statearr_41864[(1)] = (1));

return statearr_41864;
});
var figwheel$client$heads_up_plugin_$_state_machine__26957__auto____1 = (function (state_41851){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_41851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e41865){if((e41865 instanceof Object)){
var ex__26960__auto__ = e41865;
var statearr_41866_41875 = state_41851;
(statearr_41866_41875[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41876 = state_41851;
state_41851 = G__41876;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26957__auto__ = function(state_41851){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26957__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26957__auto____1.call(this,state_41851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26957__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26957__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___41868,ch))
})();
var state__27023__auto__ = (function (){var statearr_41867 = f__27022__auto__.call(null);
(statearr_41867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___41868);

return statearr_41867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___41868,ch))
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
var c__27021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto__){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto__){
return (function (state_41897){
var state_val_41898 = (state_41897[(1)]);
if((state_val_41898 === (1))){
var inst_41892 = cljs.core.async.timeout.call(null,(3000));
var state_41897__$1 = state_41897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41897__$1,(2),inst_41892);
} else {
if((state_val_41898 === (2))){
var inst_41894 = (state_41897[(2)]);
var inst_41895 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41897__$1 = (function (){var statearr_41899 = state_41897;
(statearr_41899[(7)] = inst_41894);

return statearr_41899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41897__$1,inst_41895);
} else {
return null;
}
}
});})(c__27021__auto__))
;
return ((function (switch__26956__auto__,c__27021__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26957__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26957__auto____0 = (function (){
var statearr_41903 = [null,null,null,null,null,null,null,null];
(statearr_41903[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26957__auto__);

(statearr_41903[(1)] = (1));

return statearr_41903;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26957__auto____1 = (function (state_41897){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_41897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e41904){if((e41904 instanceof Object)){
var ex__26960__auto__ = e41904;
var statearr_41905_41907 = state_41897;
(statearr_41905_41907[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41908 = state_41897;
state_41897 = G__41908;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26957__auto__ = function(state_41897){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26957__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26957__auto____1.call(this,state_41897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26957__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26957__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto__))
})();
var state__27023__auto__ = (function (){var statearr_41906 = f__27022__auto__.call(null);
(statearr_41906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto__);

return statearr_41906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto__))
);

return c__27021__auto__;
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
var c__27021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto__,figwheel_version,temp__4657__auto__){
return (function (state_41931){
var state_val_41932 = (state_41931[(1)]);
if((state_val_41932 === (1))){
var inst_41925 = cljs.core.async.timeout.call(null,(2000));
var state_41931__$1 = state_41931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41931__$1,(2),inst_41925);
} else {
if((state_val_41932 === (2))){
var inst_41927 = (state_41931[(2)]);
var inst_41928 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_41929 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41928);
var state_41931__$1 = (function (){var statearr_41933 = state_41931;
(statearr_41933[(7)] = inst_41927);

return statearr_41933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41931__$1,inst_41929);
} else {
return null;
}
}
});})(c__27021__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26956__auto__,c__27021__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto____0 = (function (){
var statearr_41937 = [null,null,null,null,null,null,null,null];
(statearr_41937[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto__);

(statearr_41937[(1)] = (1));

return statearr_41937;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto____1 = (function (state_41931){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_41931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e41938){if((e41938 instanceof Object)){
var ex__26960__auto__ = e41938;
var statearr_41939_41941 = state_41931;
(statearr_41939_41941[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41942 = state_41931;
state_41931 = G__41942;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto__ = function(state_41931){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto____1.call(this,state_41931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27023__auto__ = (function (){var statearr_41940 = f__27022__auto__.call(null);
(statearr_41940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto__);

return statearr_41940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto__,figwheel_version,temp__4657__auto__))
);

return c__27021__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41943){
var map__41947 = p__41943;
var map__41947__$1 = ((((!((map__41947 == null)))?((((map__41947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41947):map__41947);
var file = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41949 = "";
var G__41949__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__41949),cljs.core.str("file "),cljs.core.str(file)].join(''):G__41949);
var G__41949__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__41949__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__41949__$1);
if(cljs.core.truth_((function (){var and__24876__auto__ = line;
if(cljs.core.truth_(and__24876__auto__)){
return column;
} else {
return and__24876__auto__;
}
})())){
return [cljs.core.str(G__41949__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__41949__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41950){
var map__41957 = p__41950;
var map__41957__$1 = ((((!((map__41957 == null)))?((((map__41957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41957):map__41957);
var ed = map__41957__$1;
var formatted_exception = cljs.core.get.call(null,map__41957__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41957__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41957__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41959_41963 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41960_41964 = null;
var count__41961_41965 = (0);
var i__41962_41966 = (0);
while(true){
if((i__41962_41966 < count__41961_41965)){
var msg_41967 = cljs.core._nth.call(null,chunk__41960_41964,i__41962_41966);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41967);

var G__41968 = seq__41959_41963;
var G__41969 = chunk__41960_41964;
var G__41970 = count__41961_41965;
var G__41971 = (i__41962_41966 + (1));
seq__41959_41963 = G__41968;
chunk__41960_41964 = G__41969;
count__41961_41965 = G__41970;
i__41962_41966 = G__41971;
continue;
} else {
var temp__4657__auto___41972 = cljs.core.seq.call(null,seq__41959_41963);
if(temp__4657__auto___41972){
var seq__41959_41973__$1 = temp__4657__auto___41972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41959_41973__$1)){
var c__25702__auto___41974 = cljs.core.chunk_first.call(null,seq__41959_41973__$1);
var G__41975 = cljs.core.chunk_rest.call(null,seq__41959_41973__$1);
var G__41976 = c__25702__auto___41974;
var G__41977 = cljs.core.count.call(null,c__25702__auto___41974);
var G__41978 = (0);
seq__41959_41963 = G__41975;
chunk__41960_41964 = G__41976;
count__41961_41965 = G__41977;
i__41962_41966 = G__41978;
continue;
} else {
var msg_41979 = cljs.core.first.call(null,seq__41959_41973__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41979);

var G__41980 = cljs.core.next.call(null,seq__41959_41973__$1);
var G__41981 = null;
var G__41982 = (0);
var G__41983 = (0);
seq__41959_41963 = G__41980;
chunk__41960_41964 = G__41981;
count__41961_41965 = G__41982;
i__41962_41966 = G__41983;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41984){
var map__41987 = p__41984;
var map__41987__$1 = ((((!((map__41987 == null)))?((((map__41987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41987):map__41987);
var w = map__41987__$1;
var message = cljs.core.get.call(null,map__41987__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__41999 = cljs.core.seq.call(null,plugins);
var chunk__42000 = null;
var count__42001 = (0);
var i__42002 = (0);
while(true){
if((i__42002 < count__42001)){
var vec__42003 = cljs.core._nth.call(null,chunk__42000,i__42002);
var k = cljs.core.nth.call(null,vec__42003,(0),null);
var plugin = cljs.core.nth.call(null,vec__42003,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42009 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41999,chunk__42000,count__42001,i__42002,pl_42009,vec__42003,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42009.call(null,msg_hist);
});})(seq__41999,chunk__42000,count__42001,i__42002,pl_42009,vec__42003,k,plugin))
);
} else {
}

var G__42010 = seq__41999;
var G__42011 = chunk__42000;
var G__42012 = count__42001;
var G__42013 = (i__42002 + (1));
seq__41999 = G__42010;
chunk__42000 = G__42011;
count__42001 = G__42012;
i__42002 = G__42013;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41999);
if(temp__4657__auto__){
var seq__41999__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41999__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__41999__$1);
var G__42014 = cljs.core.chunk_rest.call(null,seq__41999__$1);
var G__42015 = c__25702__auto__;
var G__42016 = cljs.core.count.call(null,c__25702__auto__);
var G__42017 = (0);
seq__41999 = G__42014;
chunk__42000 = G__42015;
count__42001 = G__42016;
i__42002 = G__42017;
continue;
} else {
var vec__42006 = cljs.core.first.call(null,seq__41999__$1);
var k = cljs.core.nth.call(null,vec__42006,(0),null);
var plugin = cljs.core.nth.call(null,vec__42006,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42018 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41999,chunk__42000,count__42001,i__42002,pl_42018,vec__42006,k,plugin,seq__41999__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42018.call(null,msg_hist);
});})(seq__41999,chunk__42000,count__42001,i__42002,pl_42018,vec__42006,k,plugin,seq__41999__$1,temp__4657__auto__))
);
} else {
}

var G__42019 = cljs.core.next.call(null,seq__41999__$1);
var G__42020 = null;
var G__42021 = (0);
var G__42022 = (0);
seq__41999 = G__42019;
chunk__42000 = G__42020;
count__42001 = G__42021;
i__42002 = G__42022;
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
var args42023 = [];
var len__25996__auto___42030 = arguments.length;
var i__25997__auto___42031 = (0);
while(true){
if((i__25997__auto___42031 < len__25996__auto___42030)){
args42023.push((arguments[i__25997__auto___42031]));

var G__42032 = (i__25997__auto___42031 + (1));
i__25997__auto___42031 = G__42032;
continue;
} else {
}
break;
}

var G__42025 = args42023.length;
switch (G__42025) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42023.length)].join('')));

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

var seq__42026_42034 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42027_42035 = null;
var count__42028_42036 = (0);
var i__42029_42037 = (0);
while(true){
if((i__42029_42037 < count__42028_42036)){
var msg_42038 = cljs.core._nth.call(null,chunk__42027_42035,i__42029_42037);
figwheel.client.socket.handle_incoming_message.call(null,msg_42038);

var G__42039 = seq__42026_42034;
var G__42040 = chunk__42027_42035;
var G__42041 = count__42028_42036;
var G__42042 = (i__42029_42037 + (1));
seq__42026_42034 = G__42039;
chunk__42027_42035 = G__42040;
count__42028_42036 = G__42041;
i__42029_42037 = G__42042;
continue;
} else {
var temp__4657__auto___42043 = cljs.core.seq.call(null,seq__42026_42034);
if(temp__4657__auto___42043){
var seq__42026_42044__$1 = temp__4657__auto___42043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42026_42044__$1)){
var c__25702__auto___42045 = cljs.core.chunk_first.call(null,seq__42026_42044__$1);
var G__42046 = cljs.core.chunk_rest.call(null,seq__42026_42044__$1);
var G__42047 = c__25702__auto___42045;
var G__42048 = cljs.core.count.call(null,c__25702__auto___42045);
var G__42049 = (0);
seq__42026_42034 = G__42046;
chunk__42027_42035 = G__42047;
count__42028_42036 = G__42048;
i__42029_42037 = G__42049;
continue;
} else {
var msg_42050 = cljs.core.first.call(null,seq__42026_42044__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42050);

var G__42051 = cljs.core.next.call(null,seq__42026_42044__$1);
var G__42052 = null;
var G__42053 = (0);
var G__42054 = (0);
seq__42026_42034 = G__42051;
chunk__42027_42035 = G__42052;
count__42028_42036 = G__42053;
i__42029_42037 = G__42054;
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
var len__25996__auto___42059 = arguments.length;
var i__25997__auto___42060 = (0);
while(true){
if((i__25997__auto___42060 < len__25996__auto___42059)){
args__26003__auto__.push((arguments[i__25997__auto___42060]));

var G__42061 = (i__25997__auto___42060 + (1));
i__25997__auto___42060 = G__42061;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42056){
var map__42057 = p__42056;
var map__42057__$1 = ((((!((map__42057 == null)))?((((map__42057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42057):map__42057);
var opts = map__42057__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42055){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42055));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42063){if((e42063 instanceof Error)){
var e = e42063;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42063;

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
return (function (p__42067){
var map__42068 = p__42067;
var map__42068__$1 = ((((!((map__42068 == null)))?((((map__42068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42068):map__42068);
var msg_name = cljs.core.get.call(null,map__42068__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1480181542241