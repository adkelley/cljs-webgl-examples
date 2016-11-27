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
var args31974 = [];
var len__25996__auto___31977 = arguments.length;
var i__25997__auto___31978 = (0);
while(true){
if((i__25997__auto___31978 < len__25996__auto___31977)){
args31974.push((arguments[i__25997__auto___31978]));

var G__31979 = (i__25997__auto___31978 + (1));
i__25997__auto___31978 = G__31979;
continue;
} else {
}
break;
}

var G__31976 = args31974.length;
switch (G__31976) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31974.length)].join('')));

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
var len__25996__auto___31982 = arguments.length;
var i__25997__auto___31983 = (0);
while(true){
if((i__25997__auto___31983 < len__25996__auto___31982)){
args__26003__auto__.push((arguments[i__25997__auto___31983]));

var G__31984 = (i__25997__auto___31983 + (1));
i__25997__auto___31983 = G__31984;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31981){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31981));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26003__auto__ = [];
var len__25996__auto___31986 = arguments.length;
var i__25997__auto___31987 = (0);
while(true){
if((i__25997__auto___31987 < len__25996__auto___31986)){
args__26003__auto__.push((arguments[i__25997__auto___31987]));

var G__31988 = (i__25997__auto___31987 + (1));
i__25997__auto___31987 = G__31988;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31985){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31985));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31989 = cljs.core._EQ_;
var expr__31990 = (function (){var or__24888__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31993){if((e31993 instanceof Error)){
var e = e31993;
return false;
} else {
throw e31993;

}
}})();
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31989.call(null,"true",expr__31990))){
return true;
} else {
if(cljs.core.truth_(pred__31989.call(null,"false",expr__31990))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31990)].join('')));
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
}catch (e31995){if((e31995 instanceof Error)){
var e = e31995;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31995;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31996){
var map__31999 = p__31996;
var map__31999__$1 = ((((!((map__31999 == null)))?((((map__31999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31999):map__31999);
var message = cljs.core.get.call(null,map__31999__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31999__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27221__auto___32161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___32161,ch){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___32161,ch){
return (function (state_32130){
var state_val_32131 = (state_32130[(1)]);
if((state_val_32131 === (7))){
var inst_32126 = (state_32130[(2)]);
var state_32130__$1 = state_32130;
var statearr_32132_32162 = state_32130__$1;
(statearr_32132_32162[(2)] = inst_32126);

(statearr_32132_32162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (1))){
var state_32130__$1 = state_32130;
var statearr_32133_32163 = state_32130__$1;
(statearr_32133_32163[(2)] = null);

(statearr_32133_32163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (4))){
var inst_32083 = (state_32130[(7)]);
var inst_32083__$1 = (state_32130[(2)]);
var state_32130__$1 = (function (){var statearr_32134 = state_32130;
(statearr_32134[(7)] = inst_32083__$1);

return statearr_32134;
})();
if(cljs.core.truth_(inst_32083__$1)){
var statearr_32135_32164 = state_32130__$1;
(statearr_32135_32164[(1)] = (5));

} else {
var statearr_32136_32165 = state_32130__$1;
(statearr_32136_32165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (15))){
var inst_32090 = (state_32130[(8)]);
var inst_32105 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32090);
var inst_32106 = cljs.core.first.call(null,inst_32105);
var inst_32107 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32106);
var inst_32108 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32107)].join('');
var inst_32109 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32108);
var state_32130__$1 = state_32130;
var statearr_32137_32166 = state_32130__$1;
(statearr_32137_32166[(2)] = inst_32109);

(statearr_32137_32166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (13))){
var inst_32114 = (state_32130[(2)]);
var state_32130__$1 = state_32130;
var statearr_32138_32167 = state_32130__$1;
(statearr_32138_32167[(2)] = inst_32114);

(statearr_32138_32167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (6))){
var state_32130__$1 = state_32130;
var statearr_32139_32168 = state_32130__$1;
(statearr_32139_32168[(2)] = null);

(statearr_32139_32168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (17))){
var inst_32112 = (state_32130[(2)]);
var state_32130__$1 = state_32130;
var statearr_32140_32169 = state_32130__$1;
(statearr_32140_32169[(2)] = inst_32112);

(statearr_32140_32169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (3))){
var inst_32128 = (state_32130[(2)]);
var state_32130__$1 = state_32130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32130__$1,inst_32128);
} else {
if((state_val_32131 === (12))){
var inst_32089 = (state_32130[(9)]);
var inst_32103 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32089,opts);
var state_32130__$1 = state_32130;
if(cljs.core.truth_(inst_32103)){
var statearr_32141_32170 = state_32130__$1;
(statearr_32141_32170[(1)] = (15));

} else {
var statearr_32142_32171 = state_32130__$1;
(statearr_32142_32171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (2))){
var state_32130__$1 = state_32130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32130__$1,(4),ch);
} else {
if((state_val_32131 === (11))){
var inst_32090 = (state_32130[(8)]);
var inst_32095 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32096 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32090);
var inst_32097 = cljs.core.async.timeout.call(null,(1000));
var inst_32098 = [inst_32096,inst_32097];
var inst_32099 = (new cljs.core.PersistentVector(null,2,(5),inst_32095,inst_32098,null));
var state_32130__$1 = state_32130;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32130__$1,(14),inst_32099);
} else {
if((state_val_32131 === (9))){
var inst_32090 = (state_32130[(8)]);
var inst_32116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32117 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32090);
var inst_32118 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32117);
var inst_32119 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32118)].join('');
var inst_32120 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32119);
var state_32130__$1 = (function (){var statearr_32143 = state_32130;
(statearr_32143[(10)] = inst_32116);

return statearr_32143;
})();
var statearr_32144_32172 = state_32130__$1;
(statearr_32144_32172[(2)] = inst_32120);

(statearr_32144_32172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (5))){
var inst_32083 = (state_32130[(7)]);
var inst_32085 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32086 = (new cljs.core.PersistentArrayMap(null,2,inst_32085,null));
var inst_32087 = (new cljs.core.PersistentHashSet(null,inst_32086,null));
var inst_32088 = figwheel.client.focus_msgs.call(null,inst_32087,inst_32083);
var inst_32089 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32088);
var inst_32090 = cljs.core.first.call(null,inst_32088);
var inst_32091 = figwheel.client.autoload_QMARK_.call(null);
var state_32130__$1 = (function (){var statearr_32145 = state_32130;
(statearr_32145[(9)] = inst_32089);

(statearr_32145[(8)] = inst_32090);

return statearr_32145;
})();
if(cljs.core.truth_(inst_32091)){
var statearr_32146_32173 = state_32130__$1;
(statearr_32146_32173[(1)] = (8));

} else {
var statearr_32147_32174 = state_32130__$1;
(statearr_32147_32174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (14))){
var inst_32101 = (state_32130[(2)]);
var state_32130__$1 = state_32130;
var statearr_32148_32175 = state_32130__$1;
(statearr_32148_32175[(2)] = inst_32101);

(statearr_32148_32175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (16))){
var state_32130__$1 = state_32130;
var statearr_32149_32176 = state_32130__$1;
(statearr_32149_32176[(2)] = null);

(statearr_32149_32176[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (10))){
var inst_32122 = (state_32130[(2)]);
var state_32130__$1 = (function (){var statearr_32150 = state_32130;
(statearr_32150[(11)] = inst_32122);

return statearr_32150;
})();
var statearr_32151_32177 = state_32130__$1;
(statearr_32151_32177[(2)] = null);

(statearr_32151_32177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32131 === (8))){
var inst_32089 = (state_32130[(9)]);
var inst_32093 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32089,opts);
var state_32130__$1 = state_32130;
if(cljs.core.truth_(inst_32093)){
var statearr_32152_32178 = state_32130__$1;
(statearr_32152_32178[(1)] = (11));

} else {
var statearr_32153_32179 = state_32130__$1;
(statearr_32153_32179[(1)] = (12));

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
});})(c__27221__auto___32161,ch))
;
return ((function (switch__27109__auto__,c__27221__auto___32161,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27110__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27110__auto____0 = (function (){
var statearr_32157 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32157[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27110__auto__);

(statearr_32157[(1)] = (1));

return statearr_32157;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27110__auto____1 = (function (state_32130){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_32130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e32158){if((e32158 instanceof Object)){
var ex__27113__auto__ = e32158;
var statearr_32159_32180 = state_32130;
(statearr_32159_32180[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32181 = state_32130;
state_32130 = G__32181;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27110__auto__ = function(state_32130){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27110__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27110__auto____1.call(this,state_32130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27110__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27110__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___32161,ch))
})();
var state__27223__auto__ = (function (){var statearr_32160 = f__27222__auto__.call(null);
(statearr_32160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___32161);

return statearr_32160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___32161,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32182_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32182_SHARP_));
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
var base_path_32185 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32185){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e32184){if((e32184 instanceof Error)){
var e = e32184;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32185], null));
} else {
var e = e32184;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_32185))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32186){
var map__32195 = p__32186;
var map__32195__$1 = ((((!((map__32195 == null)))?((((map__32195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32195):map__32195);
var opts = map__32195__$1;
var build_id = cljs.core.get.call(null,map__32195__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32195,map__32195__$1,opts,build_id){
return (function (p__32197){
var vec__32198 = p__32197;
var seq__32199 = cljs.core.seq.call(null,vec__32198);
var first__32200 = cljs.core.first.call(null,seq__32199);
var seq__32199__$1 = cljs.core.next.call(null,seq__32199);
var map__32201 = first__32200;
var map__32201__$1 = ((((!((map__32201 == null)))?((((map__32201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32201):map__32201);
var msg = map__32201__$1;
var msg_name = cljs.core.get.call(null,map__32201__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32199__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32198,seq__32199,first__32200,seq__32199__$1,map__32201,map__32201__$1,msg,msg_name,_,map__32195,map__32195__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32198,seq__32199,first__32200,seq__32199__$1,map__32201,map__32201__$1,msg,msg_name,_,map__32195,map__32195__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32195,map__32195__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32209){
var vec__32210 = p__32209;
var seq__32211 = cljs.core.seq.call(null,vec__32210);
var first__32212 = cljs.core.first.call(null,seq__32211);
var seq__32211__$1 = cljs.core.next.call(null,seq__32211);
var map__32213 = first__32212;
var map__32213__$1 = ((((!((map__32213 == null)))?((((map__32213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32213):map__32213);
var msg = map__32213__$1;
var msg_name = cljs.core.get.call(null,map__32213__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32211__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32215){
var map__32227 = p__32215;
var map__32227__$1 = ((((!((map__32227 == null)))?((((map__32227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32227):map__32227);
var on_compile_warning = cljs.core.get.call(null,map__32227__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32227__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32227,map__32227__$1,on_compile_warning,on_compile_fail){
return (function (p__32229){
var vec__32230 = p__32229;
var seq__32231 = cljs.core.seq.call(null,vec__32230);
var first__32232 = cljs.core.first.call(null,seq__32231);
var seq__32231__$1 = cljs.core.next.call(null,seq__32231);
var map__32233 = first__32232;
var map__32233__$1 = ((((!((map__32233 == null)))?((((map__32233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32233):map__32233);
var msg = map__32233__$1;
var msg_name = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32231__$1;
var pred__32235 = cljs.core._EQ_;
var expr__32236 = msg_name;
if(cljs.core.truth_(pred__32235.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32236))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32235.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32236))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32227,map__32227__$1,on_compile_warning,on_compile_fail))
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
var c__27221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto__,msg_hist,msg_names,msg){
return (function (state_32464){
var state_val_32465 = (state_32464[(1)]);
if((state_val_32465 === (7))){
var inst_32384 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32384)){
var statearr_32466_32516 = state_32464__$1;
(statearr_32466_32516[(1)] = (8));

} else {
var statearr_32467_32517 = state_32464__$1;
(statearr_32467_32517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (20))){
var inst_32458 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32468_32518 = state_32464__$1;
(statearr_32468_32518[(2)] = inst_32458);

(statearr_32468_32518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (27))){
var inst_32454 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32469_32519 = state_32464__$1;
(statearr_32469_32519[(2)] = inst_32454);

(statearr_32469_32519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (1))){
var inst_32377 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32377)){
var statearr_32470_32520 = state_32464__$1;
(statearr_32470_32520[(1)] = (2));

} else {
var statearr_32471_32521 = state_32464__$1;
(statearr_32471_32521[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (24))){
var inst_32456 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32472_32522 = state_32464__$1;
(statearr_32472_32522[(2)] = inst_32456);

(statearr_32472_32522[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (4))){
var inst_32462 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32464__$1,inst_32462);
} else {
if((state_val_32465 === (15))){
var inst_32460 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32473_32523 = state_32464__$1;
(statearr_32473_32523[(2)] = inst_32460);

(statearr_32473_32523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (21))){
var inst_32413 = (state_32464[(2)]);
var inst_32414 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32415 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32414);
var state_32464__$1 = (function (){var statearr_32474 = state_32464;
(statearr_32474[(7)] = inst_32413);

return statearr_32474;
})();
var statearr_32475_32524 = state_32464__$1;
(statearr_32475_32524[(2)] = inst_32415);

(statearr_32475_32524[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (31))){
var inst_32443 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32443)){
var statearr_32476_32525 = state_32464__$1;
(statearr_32476_32525[(1)] = (34));

} else {
var statearr_32477_32526 = state_32464__$1;
(statearr_32477_32526[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (32))){
var inst_32452 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32478_32527 = state_32464__$1;
(statearr_32478_32527[(2)] = inst_32452);

(statearr_32478_32527[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (33))){
var inst_32439 = (state_32464[(2)]);
var inst_32440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32441 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32440);
var state_32464__$1 = (function (){var statearr_32479 = state_32464;
(statearr_32479[(8)] = inst_32439);

return statearr_32479;
})();
var statearr_32480_32528 = state_32464__$1;
(statearr_32480_32528[(2)] = inst_32441);

(statearr_32480_32528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (13))){
var inst_32398 = figwheel.client.heads_up.clear.call(null);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(16),inst_32398);
} else {
if((state_val_32465 === (22))){
var inst_32419 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32420 = figwheel.client.heads_up.append_warning_message.call(null,inst_32419);
var state_32464__$1 = state_32464;
var statearr_32481_32529 = state_32464__$1;
(statearr_32481_32529[(2)] = inst_32420);

(statearr_32481_32529[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (36))){
var inst_32450 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32482_32530 = state_32464__$1;
(statearr_32482_32530[(2)] = inst_32450);

(statearr_32482_32530[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (29))){
var inst_32430 = (state_32464[(2)]);
var inst_32431 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32432 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32431);
var state_32464__$1 = (function (){var statearr_32483 = state_32464;
(statearr_32483[(9)] = inst_32430);

return statearr_32483;
})();
var statearr_32484_32531 = state_32464__$1;
(statearr_32484_32531[(2)] = inst_32432);

(statearr_32484_32531[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (6))){
var inst_32379 = (state_32464[(10)]);
var state_32464__$1 = state_32464;
var statearr_32485_32532 = state_32464__$1;
(statearr_32485_32532[(2)] = inst_32379);

(statearr_32485_32532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (28))){
var inst_32426 = (state_32464[(2)]);
var inst_32427 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32428 = figwheel.client.heads_up.display_warning.call(null,inst_32427);
var state_32464__$1 = (function (){var statearr_32486 = state_32464;
(statearr_32486[(11)] = inst_32426);

return statearr_32486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(29),inst_32428);
} else {
if((state_val_32465 === (25))){
var inst_32424 = figwheel.client.heads_up.clear.call(null);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(28),inst_32424);
} else {
if((state_val_32465 === (34))){
var inst_32445 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(37),inst_32445);
} else {
if((state_val_32465 === (17))){
var inst_32404 = (state_32464[(2)]);
var inst_32405 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32406 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32405);
var state_32464__$1 = (function (){var statearr_32487 = state_32464;
(statearr_32487[(12)] = inst_32404);

return statearr_32487;
})();
var statearr_32488_32533 = state_32464__$1;
(statearr_32488_32533[(2)] = inst_32406);

(statearr_32488_32533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (3))){
var inst_32396 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32396)){
var statearr_32489_32534 = state_32464__$1;
(statearr_32489_32534[(1)] = (13));

} else {
var statearr_32490_32535 = state_32464__$1;
(statearr_32490_32535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (12))){
var inst_32392 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32491_32536 = state_32464__$1;
(statearr_32491_32536[(2)] = inst_32392);

(statearr_32491_32536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (2))){
var inst_32379 = (state_32464[(10)]);
var inst_32379__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32464__$1 = (function (){var statearr_32492 = state_32464;
(statearr_32492[(10)] = inst_32379__$1);

return statearr_32492;
})();
if(cljs.core.truth_(inst_32379__$1)){
var statearr_32493_32537 = state_32464__$1;
(statearr_32493_32537[(1)] = (5));

} else {
var statearr_32494_32538 = state_32464__$1;
(statearr_32494_32538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (23))){
var inst_32422 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32422)){
var statearr_32495_32539 = state_32464__$1;
(statearr_32495_32539[(1)] = (25));

} else {
var statearr_32496_32540 = state_32464__$1;
(statearr_32496_32540[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (35))){
var state_32464__$1 = state_32464;
var statearr_32497_32541 = state_32464__$1;
(statearr_32497_32541[(2)] = null);

(statearr_32497_32541[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (19))){
var inst_32417 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32417)){
var statearr_32498_32542 = state_32464__$1;
(statearr_32498_32542[(1)] = (22));

} else {
var statearr_32499_32543 = state_32464__$1;
(statearr_32499_32543[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (11))){
var inst_32388 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32500_32544 = state_32464__$1;
(statearr_32500_32544[(2)] = inst_32388);

(statearr_32500_32544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (9))){
var inst_32390 = figwheel.client.heads_up.clear.call(null);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(12),inst_32390);
} else {
if((state_val_32465 === (5))){
var inst_32381 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32464__$1 = state_32464;
var statearr_32501_32545 = state_32464__$1;
(statearr_32501_32545[(2)] = inst_32381);

(statearr_32501_32545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (14))){
var inst_32408 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32408)){
var statearr_32502_32546 = state_32464__$1;
(statearr_32502_32546[(1)] = (18));

} else {
var statearr_32503_32547 = state_32464__$1;
(statearr_32503_32547[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (26))){
var inst_32434 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32434)){
var statearr_32504_32548 = state_32464__$1;
(statearr_32504_32548[(1)] = (30));

} else {
var statearr_32505_32549 = state_32464__$1;
(statearr_32505_32549[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (16))){
var inst_32400 = (state_32464[(2)]);
var inst_32401 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32402 = figwheel.client.heads_up.display_exception.call(null,inst_32401);
var state_32464__$1 = (function (){var statearr_32506 = state_32464;
(statearr_32506[(13)] = inst_32400);

return statearr_32506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(17),inst_32402);
} else {
if((state_val_32465 === (30))){
var inst_32436 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32437 = figwheel.client.heads_up.display_warning.call(null,inst_32436);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(33),inst_32437);
} else {
if((state_val_32465 === (10))){
var inst_32394 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32507_32550 = state_32464__$1;
(statearr_32507_32550[(2)] = inst_32394);

(statearr_32507_32550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (18))){
var inst_32410 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32411 = figwheel.client.heads_up.display_exception.call(null,inst_32410);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(21),inst_32411);
} else {
if((state_val_32465 === (37))){
var inst_32447 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32508_32551 = state_32464__$1;
(statearr_32508_32551[(2)] = inst_32447);

(statearr_32508_32551[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (8))){
var inst_32386 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(11),inst_32386);
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
});})(c__27221__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27109__auto__,c__27221__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto____0 = (function (){
var statearr_32512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32512[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto__);

(statearr_32512[(1)] = (1));

return statearr_32512;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto____1 = (function (state_32464){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_32464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e32513){if((e32513 instanceof Object)){
var ex__27113__auto__ = e32513;
var statearr_32514_32552 = state_32464;
(statearr_32514_32552[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32553 = state_32464;
state_32464 = G__32553;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto__ = function(state_32464){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto____1.call(this,state_32464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto__,msg_hist,msg_names,msg))
})();
var state__27223__auto__ = (function (){var statearr_32515 = f__27222__auto__.call(null);
(statearr_32515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto__);

return statearr_32515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto__,msg_hist,msg_names,msg))
);

return c__27221__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27221__auto___32616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___32616,ch){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___32616,ch){
return (function (state_32599){
var state_val_32600 = (state_32599[(1)]);
if((state_val_32600 === (1))){
var state_32599__$1 = state_32599;
var statearr_32601_32617 = state_32599__$1;
(statearr_32601_32617[(2)] = null);

(statearr_32601_32617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (2))){
var state_32599__$1 = state_32599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32599__$1,(4),ch);
} else {
if((state_val_32600 === (3))){
var inst_32597 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32599__$1,inst_32597);
} else {
if((state_val_32600 === (4))){
var inst_32587 = (state_32599[(7)]);
var inst_32587__$1 = (state_32599[(2)]);
var state_32599__$1 = (function (){var statearr_32602 = state_32599;
(statearr_32602[(7)] = inst_32587__$1);

return statearr_32602;
})();
if(cljs.core.truth_(inst_32587__$1)){
var statearr_32603_32618 = state_32599__$1;
(statearr_32603_32618[(1)] = (5));

} else {
var statearr_32604_32619 = state_32599__$1;
(statearr_32604_32619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (5))){
var inst_32587 = (state_32599[(7)]);
var inst_32589 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32587);
var state_32599__$1 = state_32599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32599__$1,(8),inst_32589);
} else {
if((state_val_32600 === (6))){
var state_32599__$1 = state_32599;
var statearr_32605_32620 = state_32599__$1;
(statearr_32605_32620[(2)] = null);

(statearr_32605_32620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (7))){
var inst_32595 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32606_32621 = state_32599__$1;
(statearr_32606_32621[(2)] = inst_32595);

(statearr_32606_32621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (8))){
var inst_32591 = (state_32599[(2)]);
var state_32599__$1 = (function (){var statearr_32607 = state_32599;
(statearr_32607[(8)] = inst_32591);

return statearr_32607;
})();
var statearr_32608_32622 = state_32599__$1;
(statearr_32608_32622[(2)] = null);

(statearr_32608_32622[(1)] = (2));


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
});})(c__27221__auto___32616,ch))
;
return ((function (switch__27109__auto__,c__27221__auto___32616,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27110__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27110__auto____0 = (function (){
var statearr_32612 = [null,null,null,null,null,null,null,null,null];
(statearr_32612[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27110__auto__);

(statearr_32612[(1)] = (1));

return statearr_32612;
});
var figwheel$client$heads_up_plugin_$_state_machine__27110__auto____1 = (function (state_32599){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_32599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e32613){if((e32613 instanceof Object)){
var ex__27113__auto__ = e32613;
var statearr_32614_32623 = state_32599;
(statearr_32614_32623[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32624 = state_32599;
state_32599 = G__32624;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27110__auto__ = function(state_32599){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27110__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27110__auto____1.call(this,state_32599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27110__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27110__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___32616,ch))
})();
var state__27223__auto__ = (function (){var statearr_32615 = f__27222__auto__.call(null);
(statearr_32615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___32616);

return statearr_32615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___32616,ch))
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
var c__27221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto__){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto__){
return (function (state_32645){
var state_val_32646 = (state_32645[(1)]);
if((state_val_32646 === (1))){
var inst_32640 = cljs.core.async.timeout.call(null,(3000));
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32645__$1,(2),inst_32640);
} else {
if((state_val_32646 === (2))){
var inst_32642 = (state_32645[(2)]);
var inst_32643 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32645__$1 = (function (){var statearr_32647 = state_32645;
(statearr_32647[(7)] = inst_32642);

return statearr_32647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32645__$1,inst_32643);
} else {
return null;
}
}
});})(c__27221__auto__))
;
return ((function (switch__27109__auto__,c__27221__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27110__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27110__auto____0 = (function (){
var statearr_32651 = [null,null,null,null,null,null,null,null];
(statearr_32651[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27110__auto__);

(statearr_32651[(1)] = (1));

return statearr_32651;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27110__auto____1 = (function (state_32645){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_32645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e32652){if((e32652 instanceof Object)){
var ex__27113__auto__ = e32652;
var statearr_32653_32655 = state_32645;
(statearr_32653_32655[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32656 = state_32645;
state_32645 = G__32656;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27110__auto__ = function(state_32645){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27110__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27110__auto____1.call(this,state_32645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27110__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27110__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto__))
})();
var state__27223__auto__ = (function (){var statearr_32654 = f__27222__auto__.call(null);
(statearr_32654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto__);

return statearr_32654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto__))
);

return c__27221__auto__;
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
var c__27221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto__,figwheel_version,temp__4657__auto__){
return (function (state_32679){
var state_val_32680 = (state_32679[(1)]);
if((state_val_32680 === (1))){
var inst_32673 = cljs.core.async.timeout.call(null,(2000));
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(2),inst_32673);
} else {
if((state_val_32680 === (2))){
var inst_32675 = (state_32679[(2)]);
var inst_32676 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_32677 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32676);
var state_32679__$1 = (function (){var statearr_32681 = state_32679;
(statearr_32681[(7)] = inst_32675);

return statearr_32681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32679__$1,inst_32677);
} else {
return null;
}
}
});})(c__27221__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27109__auto__,c__27221__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto____0 = (function (){
var statearr_32685 = [null,null,null,null,null,null,null,null];
(statearr_32685[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto__);

(statearr_32685[(1)] = (1));

return statearr_32685;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto____1 = (function (state_32679){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_32679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e32686){if((e32686 instanceof Object)){
var ex__27113__auto__ = e32686;
var statearr_32687_32689 = state_32679;
(statearr_32687_32689[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32690 = state_32679;
state_32679 = G__32690;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto__ = function(state_32679){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto____1.call(this,state_32679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27223__auto__ = (function (){var statearr_32688 = f__27222__auto__.call(null);
(statearr_32688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto__);

return statearr_32688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto__,figwheel_version,temp__4657__auto__))
);

return c__27221__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32691){
var map__32695 = p__32691;
var map__32695__$1 = ((((!((map__32695 == null)))?((((map__32695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32695):map__32695);
var file = cljs.core.get.call(null,map__32695__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32695__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32695__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32697 = "";
var G__32697__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__32697),cljs.core.str("file "),cljs.core.str(file)].join(''):G__32697);
var G__32697__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__32697__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__32697__$1);
if(cljs.core.truth_((function (){var and__24876__auto__ = line;
if(cljs.core.truth_(and__24876__auto__)){
return column;
} else {
return and__24876__auto__;
}
})())){
return [cljs.core.str(G__32697__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__32697__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32698){
var map__32705 = p__32698;
var map__32705__$1 = ((((!((map__32705 == null)))?((((map__32705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32705):map__32705);
var ed = map__32705__$1;
var formatted_exception = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32707_32711 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32708_32712 = null;
var count__32709_32713 = (0);
var i__32710_32714 = (0);
while(true){
if((i__32710_32714 < count__32709_32713)){
var msg_32715 = cljs.core._nth.call(null,chunk__32708_32712,i__32710_32714);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32715);

var G__32716 = seq__32707_32711;
var G__32717 = chunk__32708_32712;
var G__32718 = count__32709_32713;
var G__32719 = (i__32710_32714 + (1));
seq__32707_32711 = G__32716;
chunk__32708_32712 = G__32717;
count__32709_32713 = G__32718;
i__32710_32714 = G__32719;
continue;
} else {
var temp__4657__auto___32720 = cljs.core.seq.call(null,seq__32707_32711);
if(temp__4657__auto___32720){
var seq__32707_32721__$1 = temp__4657__auto___32720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32707_32721__$1)){
var c__25702__auto___32722 = cljs.core.chunk_first.call(null,seq__32707_32721__$1);
var G__32723 = cljs.core.chunk_rest.call(null,seq__32707_32721__$1);
var G__32724 = c__25702__auto___32722;
var G__32725 = cljs.core.count.call(null,c__25702__auto___32722);
var G__32726 = (0);
seq__32707_32711 = G__32723;
chunk__32708_32712 = G__32724;
count__32709_32713 = G__32725;
i__32710_32714 = G__32726;
continue;
} else {
var msg_32727 = cljs.core.first.call(null,seq__32707_32721__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32727);

var G__32728 = cljs.core.next.call(null,seq__32707_32721__$1);
var G__32729 = null;
var G__32730 = (0);
var G__32731 = (0);
seq__32707_32711 = G__32728;
chunk__32708_32712 = G__32729;
count__32709_32713 = G__32730;
i__32710_32714 = G__32731;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32732){
var map__32735 = p__32732;
var map__32735__$1 = ((((!((map__32735 == null)))?((((map__32735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32735):map__32735);
var w = map__32735__$1;
var message = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__32747 = cljs.core.seq.call(null,plugins);
var chunk__32748 = null;
var count__32749 = (0);
var i__32750 = (0);
while(true){
if((i__32750 < count__32749)){
var vec__32751 = cljs.core._nth.call(null,chunk__32748,i__32750);
var k = cljs.core.nth.call(null,vec__32751,(0),null);
var plugin = cljs.core.nth.call(null,vec__32751,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32757 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32747,chunk__32748,count__32749,i__32750,pl_32757,vec__32751,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32757.call(null,msg_hist);
});})(seq__32747,chunk__32748,count__32749,i__32750,pl_32757,vec__32751,k,plugin))
);
} else {
}

var G__32758 = seq__32747;
var G__32759 = chunk__32748;
var G__32760 = count__32749;
var G__32761 = (i__32750 + (1));
seq__32747 = G__32758;
chunk__32748 = G__32759;
count__32749 = G__32760;
i__32750 = G__32761;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32747);
if(temp__4657__auto__){
var seq__32747__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32747__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__32747__$1);
var G__32762 = cljs.core.chunk_rest.call(null,seq__32747__$1);
var G__32763 = c__25702__auto__;
var G__32764 = cljs.core.count.call(null,c__25702__auto__);
var G__32765 = (0);
seq__32747 = G__32762;
chunk__32748 = G__32763;
count__32749 = G__32764;
i__32750 = G__32765;
continue;
} else {
var vec__32754 = cljs.core.first.call(null,seq__32747__$1);
var k = cljs.core.nth.call(null,vec__32754,(0),null);
var plugin = cljs.core.nth.call(null,vec__32754,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32766 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32747,chunk__32748,count__32749,i__32750,pl_32766,vec__32754,k,plugin,seq__32747__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32766.call(null,msg_hist);
});})(seq__32747,chunk__32748,count__32749,i__32750,pl_32766,vec__32754,k,plugin,seq__32747__$1,temp__4657__auto__))
);
} else {
}

var G__32767 = cljs.core.next.call(null,seq__32747__$1);
var G__32768 = null;
var G__32769 = (0);
var G__32770 = (0);
seq__32747 = G__32767;
chunk__32748 = G__32768;
count__32749 = G__32769;
i__32750 = G__32770;
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
var args32771 = [];
var len__25996__auto___32778 = arguments.length;
var i__25997__auto___32779 = (0);
while(true){
if((i__25997__auto___32779 < len__25996__auto___32778)){
args32771.push((arguments[i__25997__auto___32779]));

var G__32780 = (i__25997__auto___32779 + (1));
i__25997__auto___32779 = G__32780;
continue;
} else {
}
break;
}

var G__32773 = args32771.length;
switch (G__32773) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32771.length)].join('')));

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

var seq__32774_32782 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32775_32783 = null;
var count__32776_32784 = (0);
var i__32777_32785 = (0);
while(true){
if((i__32777_32785 < count__32776_32784)){
var msg_32786 = cljs.core._nth.call(null,chunk__32775_32783,i__32777_32785);
figwheel.client.socket.handle_incoming_message.call(null,msg_32786);

var G__32787 = seq__32774_32782;
var G__32788 = chunk__32775_32783;
var G__32789 = count__32776_32784;
var G__32790 = (i__32777_32785 + (1));
seq__32774_32782 = G__32787;
chunk__32775_32783 = G__32788;
count__32776_32784 = G__32789;
i__32777_32785 = G__32790;
continue;
} else {
var temp__4657__auto___32791 = cljs.core.seq.call(null,seq__32774_32782);
if(temp__4657__auto___32791){
var seq__32774_32792__$1 = temp__4657__auto___32791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32774_32792__$1)){
var c__25702__auto___32793 = cljs.core.chunk_first.call(null,seq__32774_32792__$1);
var G__32794 = cljs.core.chunk_rest.call(null,seq__32774_32792__$1);
var G__32795 = c__25702__auto___32793;
var G__32796 = cljs.core.count.call(null,c__25702__auto___32793);
var G__32797 = (0);
seq__32774_32782 = G__32794;
chunk__32775_32783 = G__32795;
count__32776_32784 = G__32796;
i__32777_32785 = G__32797;
continue;
} else {
var msg_32798 = cljs.core.first.call(null,seq__32774_32792__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32798);

var G__32799 = cljs.core.next.call(null,seq__32774_32792__$1);
var G__32800 = null;
var G__32801 = (0);
var G__32802 = (0);
seq__32774_32782 = G__32799;
chunk__32775_32783 = G__32800;
count__32776_32784 = G__32801;
i__32777_32785 = G__32802;
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
var len__25996__auto___32807 = arguments.length;
var i__25997__auto___32808 = (0);
while(true){
if((i__25997__auto___32808 < len__25996__auto___32807)){
args__26003__auto__.push((arguments[i__25997__auto___32808]));

var G__32809 = (i__25997__auto___32808 + (1));
i__25997__auto___32808 = G__32809;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32804){
var map__32805 = p__32804;
var map__32805__$1 = ((((!((map__32805 == null)))?((((map__32805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32805):map__32805);
var opts = map__32805__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32803){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32803));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32811){if((e32811 instanceof Error)){
var e = e32811;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32811;

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
return (function (p__32815){
var map__32816 = p__32815;
var map__32816__$1 = ((((!((map__32816 == null)))?((((map__32816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32816):map__32816);
var msg_name = cljs.core.get.call(null,map__32816__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1480282069476