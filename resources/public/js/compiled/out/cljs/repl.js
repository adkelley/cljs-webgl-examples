// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30731){
var map__30756 = p__30731;
var map__30756__$1 = ((((!((map__30756 == null)))?((((map__30756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30756):map__30756);
var m = map__30756__$1;
var n = cljs.core.get.call(null,map__30756__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30756__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30758_30780 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30759_30781 = null;
var count__30760_30782 = (0);
var i__30761_30783 = (0);
while(true){
if((i__30761_30783 < count__30760_30782)){
var f_30784 = cljs.core._nth.call(null,chunk__30759_30781,i__30761_30783);
cljs.core.println.call(null,"  ",f_30784);

var G__30785 = seq__30758_30780;
var G__30786 = chunk__30759_30781;
var G__30787 = count__30760_30782;
var G__30788 = (i__30761_30783 + (1));
seq__30758_30780 = G__30785;
chunk__30759_30781 = G__30786;
count__30760_30782 = G__30787;
i__30761_30783 = G__30788;
continue;
} else {
var temp__4657__auto___30789 = cljs.core.seq.call(null,seq__30758_30780);
if(temp__4657__auto___30789){
var seq__30758_30790__$1 = temp__4657__auto___30789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30758_30790__$1)){
var c__25702__auto___30791 = cljs.core.chunk_first.call(null,seq__30758_30790__$1);
var G__30792 = cljs.core.chunk_rest.call(null,seq__30758_30790__$1);
var G__30793 = c__25702__auto___30791;
var G__30794 = cljs.core.count.call(null,c__25702__auto___30791);
var G__30795 = (0);
seq__30758_30780 = G__30792;
chunk__30759_30781 = G__30793;
count__30760_30782 = G__30794;
i__30761_30783 = G__30795;
continue;
} else {
var f_30796 = cljs.core.first.call(null,seq__30758_30790__$1);
cljs.core.println.call(null,"  ",f_30796);

var G__30797 = cljs.core.next.call(null,seq__30758_30790__$1);
var G__30798 = null;
var G__30799 = (0);
var G__30800 = (0);
seq__30758_30780 = G__30797;
chunk__30759_30781 = G__30798;
count__30760_30782 = G__30799;
i__30761_30783 = G__30800;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30801 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24888__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30801);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30801)))?cljs.core.second.call(null,arglists_30801):arglists_30801));
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
var seq__30762_30802 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30763_30803 = null;
var count__30764_30804 = (0);
var i__30765_30805 = (0);
while(true){
if((i__30765_30805 < count__30764_30804)){
var vec__30766_30806 = cljs.core._nth.call(null,chunk__30763_30803,i__30765_30805);
var name_30807 = cljs.core.nth.call(null,vec__30766_30806,(0),null);
var map__30769_30808 = cljs.core.nth.call(null,vec__30766_30806,(1),null);
var map__30769_30809__$1 = ((((!((map__30769_30808 == null)))?((((map__30769_30808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30769_30808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30769_30808):map__30769_30808);
var doc_30810 = cljs.core.get.call(null,map__30769_30809__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30811 = cljs.core.get.call(null,map__30769_30809__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30807);

cljs.core.println.call(null," ",arglists_30811);

if(cljs.core.truth_(doc_30810)){
cljs.core.println.call(null," ",doc_30810);
} else {
}

var G__30812 = seq__30762_30802;
var G__30813 = chunk__30763_30803;
var G__30814 = count__30764_30804;
var G__30815 = (i__30765_30805 + (1));
seq__30762_30802 = G__30812;
chunk__30763_30803 = G__30813;
count__30764_30804 = G__30814;
i__30765_30805 = G__30815;
continue;
} else {
var temp__4657__auto___30816 = cljs.core.seq.call(null,seq__30762_30802);
if(temp__4657__auto___30816){
var seq__30762_30817__$1 = temp__4657__auto___30816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30762_30817__$1)){
var c__25702__auto___30818 = cljs.core.chunk_first.call(null,seq__30762_30817__$1);
var G__30819 = cljs.core.chunk_rest.call(null,seq__30762_30817__$1);
var G__30820 = c__25702__auto___30818;
var G__30821 = cljs.core.count.call(null,c__25702__auto___30818);
var G__30822 = (0);
seq__30762_30802 = G__30819;
chunk__30763_30803 = G__30820;
count__30764_30804 = G__30821;
i__30765_30805 = G__30822;
continue;
} else {
var vec__30771_30823 = cljs.core.first.call(null,seq__30762_30817__$1);
var name_30824 = cljs.core.nth.call(null,vec__30771_30823,(0),null);
var map__30774_30825 = cljs.core.nth.call(null,vec__30771_30823,(1),null);
var map__30774_30826__$1 = ((((!((map__30774_30825 == null)))?((((map__30774_30825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30774_30825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30774_30825):map__30774_30825);
var doc_30827 = cljs.core.get.call(null,map__30774_30826__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30828 = cljs.core.get.call(null,map__30774_30826__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30824);

cljs.core.println.call(null," ",arglists_30828);

if(cljs.core.truth_(doc_30827)){
cljs.core.println.call(null," ",doc_30827);
} else {
}

var G__30829 = cljs.core.next.call(null,seq__30762_30817__$1);
var G__30830 = null;
var G__30831 = (0);
var G__30832 = (0);
seq__30762_30802 = G__30829;
chunk__30763_30803 = G__30830;
count__30764_30804 = G__30831;
i__30765_30805 = G__30832;
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

var seq__30776 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30777 = null;
var count__30778 = (0);
var i__30779 = (0);
while(true){
if((i__30779 < count__30778)){
var role = cljs.core._nth.call(null,chunk__30777,i__30779);
var temp__4657__auto___30833__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30833__$1)){
var spec_30834 = temp__4657__auto___30833__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30834));
} else {
}

var G__30835 = seq__30776;
var G__30836 = chunk__30777;
var G__30837 = count__30778;
var G__30838 = (i__30779 + (1));
seq__30776 = G__30835;
chunk__30777 = G__30836;
count__30778 = G__30837;
i__30779 = G__30838;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30776);
if(temp__4657__auto____$1){
var seq__30776__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30776__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__30776__$1);
var G__30839 = cljs.core.chunk_rest.call(null,seq__30776__$1);
var G__30840 = c__25702__auto__;
var G__30841 = cljs.core.count.call(null,c__25702__auto__);
var G__30842 = (0);
seq__30776 = G__30839;
chunk__30777 = G__30840;
count__30778 = G__30841;
i__30779 = G__30842;
continue;
} else {
var role = cljs.core.first.call(null,seq__30776__$1);
var temp__4657__auto___30843__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30843__$2)){
var spec_30844 = temp__4657__auto___30843__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30844));
} else {
}

var G__30845 = cljs.core.next.call(null,seq__30776__$1);
var G__30846 = null;
var G__30847 = (0);
var G__30848 = (0);
seq__30776 = G__30845;
chunk__30777 = G__30846;
count__30778 = G__30847;
i__30779 = G__30848;
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

//# sourceMappingURL=repl.js.map?rel=1480258617281