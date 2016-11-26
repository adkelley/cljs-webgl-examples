// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39163){
var map__39188 = p__39163;
var map__39188__$1 = ((((!((map__39188 == null)))?((((map__39188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39188):map__39188);
var m = map__39188__$1;
var n = cljs.core.get.call(null,map__39188__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39188__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39190_39212 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39191_39213 = null;
var count__39192_39214 = (0);
var i__39193_39215 = (0);
while(true){
if((i__39193_39215 < count__39192_39214)){
var f_39216 = cljs.core._nth.call(null,chunk__39191_39213,i__39193_39215);
cljs.core.println.call(null,"  ",f_39216);

var G__39217 = seq__39190_39212;
var G__39218 = chunk__39191_39213;
var G__39219 = count__39192_39214;
var G__39220 = (i__39193_39215 + (1));
seq__39190_39212 = G__39217;
chunk__39191_39213 = G__39218;
count__39192_39214 = G__39219;
i__39193_39215 = G__39220;
continue;
} else {
var temp__4657__auto___39221 = cljs.core.seq.call(null,seq__39190_39212);
if(temp__4657__auto___39221){
var seq__39190_39222__$1 = temp__4657__auto___39221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39190_39222__$1)){
var c__25702__auto___39223 = cljs.core.chunk_first.call(null,seq__39190_39222__$1);
var G__39224 = cljs.core.chunk_rest.call(null,seq__39190_39222__$1);
var G__39225 = c__25702__auto___39223;
var G__39226 = cljs.core.count.call(null,c__25702__auto___39223);
var G__39227 = (0);
seq__39190_39212 = G__39224;
chunk__39191_39213 = G__39225;
count__39192_39214 = G__39226;
i__39193_39215 = G__39227;
continue;
} else {
var f_39228 = cljs.core.first.call(null,seq__39190_39222__$1);
cljs.core.println.call(null,"  ",f_39228);

var G__39229 = cljs.core.next.call(null,seq__39190_39222__$1);
var G__39230 = null;
var G__39231 = (0);
var G__39232 = (0);
seq__39190_39212 = G__39229;
chunk__39191_39213 = G__39230;
count__39192_39214 = G__39231;
i__39193_39215 = G__39232;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39233 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24888__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39233);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39233)))?cljs.core.second.call(null,arglists_39233):arglists_39233));
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
var seq__39194_39234 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39195_39235 = null;
var count__39196_39236 = (0);
var i__39197_39237 = (0);
while(true){
if((i__39197_39237 < count__39196_39236)){
var vec__39198_39238 = cljs.core._nth.call(null,chunk__39195_39235,i__39197_39237);
var name_39239 = cljs.core.nth.call(null,vec__39198_39238,(0),null);
var map__39201_39240 = cljs.core.nth.call(null,vec__39198_39238,(1),null);
var map__39201_39241__$1 = ((((!((map__39201_39240 == null)))?((((map__39201_39240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39201_39240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39201_39240):map__39201_39240);
var doc_39242 = cljs.core.get.call(null,map__39201_39241__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39243 = cljs.core.get.call(null,map__39201_39241__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39239);

cljs.core.println.call(null," ",arglists_39243);

if(cljs.core.truth_(doc_39242)){
cljs.core.println.call(null," ",doc_39242);
} else {
}

var G__39244 = seq__39194_39234;
var G__39245 = chunk__39195_39235;
var G__39246 = count__39196_39236;
var G__39247 = (i__39197_39237 + (1));
seq__39194_39234 = G__39244;
chunk__39195_39235 = G__39245;
count__39196_39236 = G__39246;
i__39197_39237 = G__39247;
continue;
} else {
var temp__4657__auto___39248 = cljs.core.seq.call(null,seq__39194_39234);
if(temp__4657__auto___39248){
var seq__39194_39249__$1 = temp__4657__auto___39248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39194_39249__$1)){
var c__25702__auto___39250 = cljs.core.chunk_first.call(null,seq__39194_39249__$1);
var G__39251 = cljs.core.chunk_rest.call(null,seq__39194_39249__$1);
var G__39252 = c__25702__auto___39250;
var G__39253 = cljs.core.count.call(null,c__25702__auto___39250);
var G__39254 = (0);
seq__39194_39234 = G__39251;
chunk__39195_39235 = G__39252;
count__39196_39236 = G__39253;
i__39197_39237 = G__39254;
continue;
} else {
var vec__39203_39255 = cljs.core.first.call(null,seq__39194_39249__$1);
var name_39256 = cljs.core.nth.call(null,vec__39203_39255,(0),null);
var map__39206_39257 = cljs.core.nth.call(null,vec__39203_39255,(1),null);
var map__39206_39258__$1 = ((((!((map__39206_39257 == null)))?((((map__39206_39257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39206_39257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39206_39257):map__39206_39257);
var doc_39259 = cljs.core.get.call(null,map__39206_39258__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39260 = cljs.core.get.call(null,map__39206_39258__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39256);

cljs.core.println.call(null," ",arglists_39260);

if(cljs.core.truth_(doc_39259)){
cljs.core.println.call(null," ",doc_39259);
} else {
}

var G__39261 = cljs.core.next.call(null,seq__39194_39249__$1);
var G__39262 = null;
var G__39263 = (0);
var G__39264 = (0);
seq__39194_39234 = G__39261;
chunk__39195_39235 = G__39262;
count__39196_39236 = G__39263;
i__39197_39237 = G__39264;
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

var seq__39208 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39209 = null;
var count__39210 = (0);
var i__39211 = (0);
while(true){
if((i__39211 < count__39210)){
var role = cljs.core._nth.call(null,chunk__39209,i__39211);
var temp__4657__auto___39265__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39265__$1)){
var spec_39266 = temp__4657__auto___39265__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39266));
} else {
}

var G__39267 = seq__39208;
var G__39268 = chunk__39209;
var G__39269 = count__39210;
var G__39270 = (i__39211 + (1));
seq__39208 = G__39267;
chunk__39209 = G__39268;
count__39210 = G__39269;
i__39211 = G__39270;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__39208);
if(temp__4657__auto____$1){
var seq__39208__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39208__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__39208__$1);
var G__39271 = cljs.core.chunk_rest.call(null,seq__39208__$1);
var G__39272 = c__25702__auto__;
var G__39273 = cljs.core.count.call(null,c__25702__auto__);
var G__39274 = (0);
seq__39208 = G__39271;
chunk__39209 = G__39272;
count__39210 = G__39273;
i__39211 = G__39274;
continue;
} else {
var role = cljs.core.first.call(null,seq__39208__$1);
var temp__4657__auto___39275__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39275__$2)){
var spec_39276 = temp__4657__auto___39275__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39276));
} else {
}

var G__39277 = cljs.core.next.call(null,seq__39208__$1);
var G__39278 = null;
var G__39279 = (0);
var G__39280 = (0);
seq__39208 = G__39277;
chunk__39209 = G__39278;
count__39210 = G__39279;
i__39211 = G__39280;
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

//# sourceMappingURL=repl.js.map?rel=1480181538000