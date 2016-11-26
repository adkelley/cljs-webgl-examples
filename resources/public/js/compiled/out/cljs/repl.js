// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42236){
var map__42261 = p__42236;
var map__42261__$1 = ((((!((map__42261 == null)))?((((map__42261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42261):map__42261);
var m = map__42261__$1;
var n = cljs.core.get.call(null,map__42261__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42261__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42263_42285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42264_42286 = null;
var count__42265_42287 = (0);
var i__42266_42288 = (0);
while(true){
if((i__42266_42288 < count__42265_42287)){
var f_42289 = cljs.core._nth.call(null,chunk__42264_42286,i__42266_42288);
cljs.core.println.call(null,"  ",f_42289);

var G__42290 = seq__42263_42285;
var G__42291 = chunk__42264_42286;
var G__42292 = count__42265_42287;
var G__42293 = (i__42266_42288 + (1));
seq__42263_42285 = G__42290;
chunk__42264_42286 = G__42291;
count__42265_42287 = G__42292;
i__42266_42288 = G__42293;
continue;
} else {
var temp__4657__auto___42294 = cljs.core.seq.call(null,seq__42263_42285);
if(temp__4657__auto___42294){
var seq__42263_42295__$1 = temp__4657__auto___42294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42263_42295__$1)){
var c__25702__auto___42296 = cljs.core.chunk_first.call(null,seq__42263_42295__$1);
var G__42297 = cljs.core.chunk_rest.call(null,seq__42263_42295__$1);
var G__42298 = c__25702__auto___42296;
var G__42299 = cljs.core.count.call(null,c__25702__auto___42296);
var G__42300 = (0);
seq__42263_42285 = G__42297;
chunk__42264_42286 = G__42298;
count__42265_42287 = G__42299;
i__42266_42288 = G__42300;
continue;
} else {
var f_42301 = cljs.core.first.call(null,seq__42263_42295__$1);
cljs.core.println.call(null,"  ",f_42301);

var G__42302 = cljs.core.next.call(null,seq__42263_42295__$1);
var G__42303 = null;
var G__42304 = (0);
var G__42305 = (0);
seq__42263_42285 = G__42302;
chunk__42264_42286 = G__42303;
count__42265_42287 = G__42304;
i__42266_42288 = G__42305;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42306 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24888__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42306);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42306)))?cljs.core.second.call(null,arglists_42306):arglists_42306));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42267_42307 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42268_42308 = null;
var count__42269_42309 = (0);
var i__42270_42310 = (0);
while(true){
if((i__42270_42310 < count__42269_42309)){
var vec__42271_42311 = cljs.core._nth.call(null,chunk__42268_42308,i__42270_42310);
var name_42312 = cljs.core.nth.call(null,vec__42271_42311,(0),null);
var map__42274_42313 = cljs.core.nth.call(null,vec__42271_42311,(1),null);
var map__42274_42314__$1 = ((((!((map__42274_42313 == null)))?((((map__42274_42313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42274_42313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42274_42313):map__42274_42313);
var doc_42315 = cljs.core.get.call(null,map__42274_42314__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42316 = cljs.core.get.call(null,map__42274_42314__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42312);

cljs.core.println.call(null," ",arglists_42316);

if(cljs.core.truth_(doc_42315)){
cljs.core.println.call(null," ",doc_42315);
} else {
}

var G__42317 = seq__42267_42307;
var G__42318 = chunk__42268_42308;
var G__42319 = count__42269_42309;
var G__42320 = (i__42270_42310 + (1));
seq__42267_42307 = G__42317;
chunk__42268_42308 = G__42318;
count__42269_42309 = G__42319;
i__42270_42310 = G__42320;
continue;
} else {
var temp__4657__auto___42321 = cljs.core.seq.call(null,seq__42267_42307);
if(temp__4657__auto___42321){
var seq__42267_42322__$1 = temp__4657__auto___42321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42267_42322__$1)){
var c__25702__auto___42323 = cljs.core.chunk_first.call(null,seq__42267_42322__$1);
var G__42324 = cljs.core.chunk_rest.call(null,seq__42267_42322__$1);
var G__42325 = c__25702__auto___42323;
var G__42326 = cljs.core.count.call(null,c__25702__auto___42323);
var G__42327 = (0);
seq__42267_42307 = G__42324;
chunk__42268_42308 = G__42325;
count__42269_42309 = G__42326;
i__42270_42310 = G__42327;
continue;
} else {
var vec__42276_42328 = cljs.core.first.call(null,seq__42267_42322__$1);
var name_42329 = cljs.core.nth.call(null,vec__42276_42328,(0),null);
var map__42279_42330 = cljs.core.nth.call(null,vec__42276_42328,(1),null);
var map__42279_42331__$1 = ((((!((map__42279_42330 == null)))?((((map__42279_42330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42279_42330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42279_42330):map__42279_42330);
var doc_42332 = cljs.core.get.call(null,map__42279_42331__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42333 = cljs.core.get.call(null,map__42279_42331__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42329);

cljs.core.println.call(null," ",arglists_42333);

if(cljs.core.truth_(doc_42332)){
cljs.core.println.call(null," ",doc_42332);
} else {
}

var G__42334 = cljs.core.next.call(null,seq__42267_42322__$1);
var G__42335 = null;
var G__42336 = (0);
var G__42337 = (0);
seq__42267_42307 = G__42334;
chunk__42268_42308 = G__42335;
count__42269_42309 = G__42336;
i__42270_42310 = G__42337;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__42281 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42282 = null;
var count__42283 = (0);
var i__42284 = (0);
while(true){
if((i__42284 < count__42283)){
var role = cljs.core._nth.call(null,chunk__42282,i__42284);
var temp__4657__auto___42338__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42338__$1)){
var spec_42339 = temp__4657__auto___42338__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42339));
} else {
}

var G__42340 = seq__42281;
var G__42341 = chunk__42282;
var G__42342 = count__42283;
var G__42343 = (i__42284 + (1));
seq__42281 = G__42340;
chunk__42282 = G__42341;
count__42283 = G__42342;
i__42284 = G__42343;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__42281);
if(temp__4657__auto____$1){
var seq__42281__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42281__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__42281__$1);
var G__42344 = cljs.core.chunk_rest.call(null,seq__42281__$1);
var G__42345 = c__25702__auto__;
var G__42346 = cljs.core.count.call(null,c__25702__auto__);
var G__42347 = (0);
seq__42281 = G__42344;
chunk__42282 = G__42345;
count__42283 = G__42346;
i__42284 = G__42347;
continue;
} else {
var role = cljs.core.first.call(null,seq__42281__$1);
var temp__4657__auto___42348__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42348__$2)){
var spec_42349 = temp__4657__auto___42348__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42349));
} else {
}

var G__42350 = cljs.core.next.call(null,seq__42281__$1);
var G__42351 = null;
var G__42352 = (0);
var G__42353 = (0);
seq__42281 = G__42350;
chunk__42282 = G__42351;
count__42283 = G__42352;
i__42284 = G__42353;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1480194648945