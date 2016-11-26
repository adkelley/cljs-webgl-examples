// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24888__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24888__auto__){
return or__24888__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24888__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37074_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37074_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37079 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37080 = null;
var count__37081 = (0);
var i__37082 = (0);
while(true){
if((i__37082 < count__37081)){
var n = cljs.core._nth.call(null,chunk__37080,i__37082);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37083 = seq__37079;
var G__37084 = chunk__37080;
var G__37085 = count__37081;
var G__37086 = (i__37082 + (1));
seq__37079 = G__37083;
chunk__37080 = G__37084;
count__37081 = G__37085;
i__37082 = G__37086;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37079);
if(temp__4657__auto__){
var seq__37079__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37079__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__37079__$1);
var G__37087 = cljs.core.chunk_rest.call(null,seq__37079__$1);
var G__37088 = c__25702__auto__;
var G__37089 = cljs.core.count.call(null,c__25702__auto__);
var G__37090 = (0);
seq__37079 = G__37087;
chunk__37080 = G__37088;
count__37081 = G__37089;
i__37082 = G__37090;
continue;
} else {
var n = cljs.core.first.call(null,seq__37079__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37091 = cljs.core.next.call(null,seq__37079__$1);
var G__37092 = null;
var G__37093 = (0);
var G__37094 = (0);
seq__37079 = G__37091;
chunk__37080 = G__37092;
count__37081 = G__37093;
i__37082 = G__37094;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37145_37156 = cljs.core.seq.call(null,deps);
var chunk__37146_37157 = null;
var count__37147_37158 = (0);
var i__37148_37159 = (0);
while(true){
if((i__37148_37159 < count__37147_37158)){
var dep_37160 = cljs.core._nth.call(null,chunk__37146_37157,i__37148_37159);
topo_sort_helper_STAR_.call(null,dep_37160,(depth + (1)),state);

var G__37161 = seq__37145_37156;
var G__37162 = chunk__37146_37157;
var G__37163 = count__37147_37158;
var G__37164 = (i__37148_37159 + (1));
seq__37145_37156 = G__37161;
chunk__37146_37157 = G__37162;
count__37147_37158 = G__37163;
i__37148_37159 = G__37164;
continue;
} else {
var temp__4657__auto___37165 = cljs.core.seq.call(null,seq__37145_37156);
if(temp__4657__auto___37165){
var seq__37145_37166__$1 = temp__4657__auto___37165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37145_37166__$1)){
var c__25702__auto___37167 = cljs.core.chunk_first.call(null,seq__37145_37166__$1);
var G__37168 = cljs.core.chunk_rest.call(null,seq__37145_37166__$1);
var G__37169 = c__25702__auto___37167;
var G__37170 = cljs.core.count.call(null,c__25702__auto___37167);
var G__37171 = (0);
seq__37145_37156 = G__37168;
chunk__37146_37157 = G__37169;
count__37147_37158 = G__37170;
i__37148_37159 = G__37171;
continue;
} else {
var dep_37172 = cljs.core.first.call(null,seq__37145_37166__$1);
topo_sort_helper_STAR_.call(null,dep_37172,(depth + (1)),state);

var G__37173 = cljs.core.next.call(null,seq__37145_37166__$1);
var G__37174 = null;
var G__37175 = (0);
var G__37176 = (0);
seq__37145_37156 = G__37173;
chunk__37146_37157 = G__37174;
count__37147_37158 = G__37175;
i__37148_37159 = G__37176;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37149){
var vec__37153 = p__37149;
var seq__37154 = cljs.core.seq.call(null,vec__37153);
var first__37155 = cljs.core.first.call(null,seq__37154);
var seq__37154__$1 = cljs.core.next.call(null,seq__37154);
var x = first__37155;
var xs = seq__37154__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37153,seq__37154,first__37155,seq__37154__$1,x,xs,get_deps__$1){
return (function (p1__37095_SHARP_){
return clojure.set.difference.call(null,p1__37095_SHARP_,x);
});})(vec__37153,seq__37154,first__37155,seq__37154__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37189 = cljs.core.seq.call(null,provides);
var chunk__37190 = null;
var count__37191 = (0);
var i__37192 = (0);
while(true){
if((i__37192 < count__37191)){
var prov = cljs.core._nth.call(null,chunk__37190,i__37192);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37193_37201 = cljs.core.seq.call(null,requires);
var chunk__37194_37202 = null;
var count__37195_37203 = (0);
var i__37196_37204 = (0);
while(true){
if((i__37196_37204 < count__37195_37203)){
var req_37205 = cljs.core._nth.call(null,chunk__37194_37202,i__37196_37204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37205,prov);

var G__37206 = seq__37193_37201;
var G__37207 = chunk__37194_37202;
var G__37208 = count__37195_37203;
var G__37209 = (i__37196_37204 + (1));
seq__37193_37201 = G__37206;
chunk__37194_37202 = G__37207;
count__37195_37203 = G__37208;
i__37196_37204 = G__37209;
continue;
} else {
var temp__4657__auto___37210 = cljs.core.seq.call(null,seq__37193_37201);
if(temp__4657__auto___37210){
var seq__37193_37211__$1 = temp__4657__auto___37210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37193_37211__$1)){
var c__25702__auto___37212 = cljs.core.chunk_first.call(null,seq__37193_37211__$1);
var G__37213 = cljs.core.chunk_rest.call(null,seq__37193_37211__$1);
var G__37214 = c__25702__auto___37212;
var G__37215 = cljs.core.count.call(null,c__25702__auto___37212);
var G__37216 = (0);
seq__37193_37201 = G__37213;
chunk__37194_37202 = G__37214;
count__37195_37203 = G__37215;
i__37196_37204 = G__37216;
continue;
} else {
var req_37217 = cljs.core.first.call(null,seq__37193_37211__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37217,prov);

var G__37218 = cljs.core.next.call(null,seq__37193_37211__$1);
var G__37219 = null;
var G__37220 = (0);
var G__37221 = (0);
seq__37193_37201 = G__37218;
chunk__37194_37202 = G__37219;
count__37195_37203 = G__37220;
i__37196_37204 = G__37221;
continue;
}
} else {
}
}
break;
}

var G__37222 = seq__37189;
var G__37223 = chunk__37190;
var G__37224 = count__37191;
var G__37225 = (i__37192 + (1));
seq__37189 = G__37222;
chunk__37190 = G__37223;
count__37191 = G__37224;
i__37192 = G__37225;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37189);
if(temp__4657__auto__){
var seq__37189__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37189__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__37189__$1);
var G__37226 = cljs.core.chunk_rest.call(null,seq__37189__$1);
var G__37227 = c__25702__auto__;
var G__37228 = cljs.core.count.call(null,c__25702__auto__);
var G__37229 = (0);
seq__37189 = G__37226;
chunk__37190 = G__37227;
count__37191 = G__37228;
i__37192 = G__37229;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37189__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37197_37230 = cljs.core.seq.call(null,requires);
var chunk__37198_37231 = null;
var count__37199_37232 = (0);
var i__37200_37233 = (0);
while(true){
if((i__37200_37233 < count__37199_37232)){
var req_37234 = cljs.core._nth.call(null,chunk__37198_37231,i__37200_37233);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37234,prov);

var G__37235 = seq__37197_37230;
var G__37236 = chunk__37198_37231;
var G__37237 = count__37199_37232;
var G__37238 = (i__37200_37233 + (1));
seq__37197_37230 = G__37235;
chunk__37198_37231 = G__37236;
count__37199_37232 = G__37237;
i__37200_37233 = G__37238;
continue;
} else {
var temp__4657__auto___37239__$1 = cljs.core.seq.call(null,seq__37197_37230);
if(temp__4657__auto___37239__$1){
var seq__37197_37240__$1 = temp__4657__auto___37239__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37197_37240__$1)){
var c__25702__auto___37241 = cljs.core.chunk_first.call(null,seq__37197_37240__$1);
var G__37242 = cljs.core.chunk_rest.call(null,seq__37197_37240__$1);
var G__37243 = c__25702__auto___37241;
var G__37244 = cljs.core.count.call(null,c__25702__auto___37241);
var G__37245 = (0);
seq__37197_37230 = G__37242;
chunk__37198_37231 = G__37243;
count__37199_37232 = G__37244;
i__37200_37233 = G__37245;
continue;
} else {
var req_37246 = cljs.core.first.call(null,seq__37197_37240__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37246,prov);

var G__37247 = cljs.core.next.call(null,seq__37197_37240__$1);
var G__37248 = null;
var G__37249 = (0);
var G__37250 = (0);
seq__37197_37230 = G__37247;
chunk__37198_37231 = G__37248;
count__37199_37232 = G__37249;
i__37200_37233 = G__37250;
continue;
}
} else {
}
}
break;
}

var G__37251 = cljs.core.next.call(null,seq__37189__$1);
var G__37252 = null;
var G__37253 = (0);
var G__37254 = (0);
seq__37189 = G__37251;
chunk__37190 = G__37252;
count__37191 = G__37253;
i__37192 = G__37254;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37259_37263 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37260_37264 = null;
var count__37261_37265 = (0);
var i__37262_37266 = (0);
while(true){
if((i__37262_37266 < count__37261_37265)){
var ns_37267 = cljs.core._nth.call(null,chunk__37260_37264,i__37262_37266);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37267);

var G__37268 = seq__37259_37263;
var G__37269 = chunk__37260_37264;
var G__37270 = count__37261_37265;
var G__37271 = (i__37262_37266 + (1));
seq__37259_37263 = G__37268;
chunk__37260_37264 = G__37269;
count__37261_37265 = G__37270;
i__37262_37266 = G__37271;
continue;
} else {
var temp__4657__auto___37272 = cljs.core.seq.call(null,seq__37259_37263);
if(temp__4657__auto___37272){
var seq__37259_37273__$1 = temp__4657__auto___37272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37259_37273__$1)){
var c__25702__auto___37274 = cljs.core.chunk_first.call(null,seq__37259_37273__$1);
var G__37275 = cljs.core.chunk_rest.call(null,seq__37259_37273__$1);
var G__37276 = c__25702__auto___37274;
var G__37277 = cljs.core.count.call(null,c__25702__auto___37274);
var G__37278 = (0);
seq__37259_37263 = G__37275;
chunk__37260_37264 = G__37276;
count__37261_37265 = G__37277;
i__37262_37266 = G__37278;
continue;
} else {
var ns_37279 = cljs.core.first.call(null,seq__37259_37273__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37279);

var G__37280 = cljs.core.next.call(null,seq__37259_37273__$1);
var G__37281 = null;
var G__37282 = (0);
var G__37283 = (0);
seq__37259_37263 = G__37280;
chunk__37260_37264 = G__37281;
count__37261_37265 = G__37282;
i__37262_37266 = G__37283;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24888__auto__ = goog.require__;
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37284__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37285__i = 0, G__37285__a = new Array(arguments.length -  0);
while (G__37285__i < G__37285__a.length) {G__37285__a[G__37285__i] = arguments[G__37285__i + 0]; ++G__37285__i;}
  args = new cljs.core.IndexedSeq(G__37285__a,0);
} 
return G__37284__delegate.call(this,args);};
G__37284.cljs$lang$maxFixedArity = 0;
G__37284.cljs$lang$applyTo = (function (arglist__37286){
var args = cljs.core.seq(arglist__37286);
return G__37284__delegate(args);
});
G__37284.cljs$core$IFn$_invoke$arity$variadic = G__37284__delegate;
return G__37284;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37288 = cljs.core._EQ_;
var expr__37289 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37288.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37289))){
var path_parts = ((function (pred__37288,expr__37289){
return (function (p1__37287_SHARP_){
return clojure.string.split.call(null,p1__37287_SHARP_,/[\/\\]/);
});})(pred__37288,expr__37289))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__37288,expr__37289){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37291){if((e37291 instanceof Error)){
var e = e37291;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37291;

}
}})());
});
;})(path_parts,sep,root,pred__37288,expr__37289))
} else {
if(cljs.core.truth_(pred__37288.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37289))){
return ((function (pred__37288,expr__37289){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__37288,expr__37289){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__37288,expr__37289))
);

return deferred.addErrback(((function (deferred,pred__37288,expr__37289){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__37288,expr__37289))
);
});
;})(pred__37288,expr__37289))
} else {
return ((function (pred__37288,expr__37289){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37288,expr__37289))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37292,callback){
var map__37295 = p__37292;
var map__37295__$1 = ((((!((map__37295 == null)))?((((map__37295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37295):map__37295);
var file_msg = map__37295__$1;
var request_url = cljs.core.get.call(null,map__37295__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37295,map__37295__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37295,map__37295__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto__){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto__){
return (function (state_37319){
var state_val_37320 = (state_37319[(1)]);
if((state_val_37320 === (7))){
var inst_37315 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
var statearr_37321_37341 = state_37319__$1;
(statearr_37321_37341[(2)] = inst_37315);

(statearr_37321_37341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (1))){
var state_37319__$1 = state_37319;
var statearr_37322_37342 = state_37319__$1;
(statearr_37322_37342[(2)] = null);

(statearr_37322_37342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (4))){
var inst_37299 = (state_37319[(7)]);
var inst_37299__$1 = (state_37319[(2)]);
var state_37319__$1 = (function (){var statearr_37323 = state_37319;
(statearr_37323[(7)] = inst_37299__$1);

return statearr_37323;
})();
if(cljs.core.truth_(inst_37299__$1)){
var statearr_37324_37343 = state_37319__$1;
(statearr_37324_37343[(1)] = (5));

} else {
var statearr_37325_37344 = state_37319__$1;
(statearr_37325_37344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (6))){
var state_37319__$1 = state_37319;
var statearr_37326_37345 = state_37319__$1;
(statearr_37326_37345[(2)] = null);

(statearr_37326_37345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (3))){
var inst_37317 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37319__$1,inst_37317);
} else {
if((state_val_37320 === (2))){
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37319__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37320 === (11))){
var inst_37311 = (state_37319[(2)]);
var state_37319__$1 = (function (){var statearr_37327 = state_37319;
(statearr_37327[(8)] = inst_37311);

return statearr_37327;
})();
var statearr_37328_37346 = state_37319__$1;
(statearr_37328_37346[(2)] = null);

(statearr_37328_37346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (9))){
var inst_37305 = (state_37319[(9)]);
var inst_37303 = (state_37319[(10)]);
var inst_37307 = inst_37305.call(null,inst_37303);
var state_37319__$1 = state_37319;
var statearr_37329_37347 = state_37319__$1;
(statearr_37329_37347[(2)] = inst_37307);

(statearr_37329_37347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (5))){
var inst_37299 = (state_37319[(7)]);
var inst_37301 = figwheel.client.file_reloading.blocking_load.call(null,inst_37299);
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37319__$1,(8),inst_37301);
} else {
if((state_val_37320 === (10))){
var inst_37303 = (state_37319[(10)]);
var inst_37309 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37303);
var state_37319__$1 = state_37319;
var statearr_37330_37348 = state_37319__$1;
(statearr_37330_37348[(2)] = inst_37309);

(statearr_37330_37348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (8))){
var inst_37299 = (state_37319[(7)]);
var inst_37305 = (state_37319[(9)]);
var inst_37303 = (state_37319[(2)]);
var inst_37304 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37305__$1 = cljs.core.get.call(null,inst_37304,inst_37299);
var state_37319__$1 = (function (){var statearr_37331 = state_37319;
(statearr_37331[(9)] = inst_37305__$1);

(statearr_37331[(10)] = inst_37303);

return statearr_37331;
})();
if(cljs.core.truth_(inst_37305__$1)){
var statearr_37332_37349 = state_37319__$1;
(statearr_37332_37349[(1)] = (9));

} else {
var statearr_37333_37350 = state_37319__$1;
(statearr_37333_37350[(1)] = (10));

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
});})(c__27021__auto__))
;
return ((function (switch__26956__auto__,c__27021__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26957__auto__ = null;
var figwheel$client$file_reloading$state_machine__26957__auto____0 = (function (){
var statearr_37337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37337[(0)] = figwheel$client$file_reloading$state_machine__26957__auto__);

(statearr_37337[(1)] = (1));

return statearr_37337;
});
var figwheel$client$file_reloading$state_machine__26957__auto____1 = (function (state_37319){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_37319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e37338){if((e37338 instanceof Object)){
var ex__26960__auto__ = e37338;
var statearr_37339_37351 = state_37319;
(statearr_37339_37351[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37352 = state_37319;
state_37319 = G__37352;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26957__auto__ = function(state_37319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26957__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26957__auto____1.call(this,state_37319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26957__auto____0;
figwheel$client$file_reloading$state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26957__auto____1;
return figwheel$client$file_reloading$state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto__))
})();
var state__27023__auto__ = (function (){var statearr_37340 = f__27022__auto__.call(null);
(statearr_37340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto__);

return statearr_37340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto__))
);

return c__27021__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37353,callback){
var map__37356 = p__37353;
var map__37356__$1 = ((((!((map__37356 == null)))?((((map__37356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37356):map__37356);
var file_msg = map__37356__$1;
var namespace = cljs.core.get.call(null,map__37356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37356,map__37356__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37356,map__37356__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37358){
var map__37361 = p__37358;
var map__37361__$1 = ((((!((map__37361 == null)))?((((map__37361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37361):map__37361);
var file_msg = map__37361__$1;
var namespace = cljs.core.get.call(null,map__37361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24876__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24876__auto__){
var or__24888__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
var or__24888__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24888__auto____$1)){
return or__24888__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24876__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37363,callback){
var map__37366 = p__37363;
var map__37366__$1 = ((((!((map__37366 == null)))?((((map__37366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37366):map__37366);
var file_msg = map__37366__$1;
var request_url = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27021__auto___37470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto___37470,out){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto___37470,out){
return (function (state_37452){
var state_val_37453 = (state_37452[(1)]);
if((state_val_37453 === (1))){
var inst_37426 = cljs.core.seq.call(null,files);
var inst_37427 = cljs.core.first.call(null,inst_37426);
var inst_37428 = cljs.core.next.call(null,inst_37426);
var inst_37429 = files;
var state_37452__$1 = (function (){var statearr_37454 = state_37452;
(statearr_37454[(7)] = inst_37428);

(statearr_37454[(8)] = inst_37427);

(statearr_37454[(9)] = inst_37429);

return statearr_37454;
})();
var statearr_37455_37471 = state_37452__$1;
(statearr_37455_37471[(2)] = null);

(statearr_37455_37471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37453 === (2))){
var inst_37435 = (state_37452[(10)]);
var inst_37429 = (state_37452[(9)]);
var inst_37434 = cljs.core.seq.call(null,inst_37429);
var inst_37435__$1 = cljs.core.first.call(null,inst_37434);
var inst_37436 = cljs.core.next.call(null,inst_37434);
var inst_37437 = (inst_37435__$1 == null);
var inst_37438 = cljs.core.not.call(null,inst_37437);
var state_37452__$1 = (function (){var statearr_37456 = state_37452;
(statearr_37456[(11)] = inst_37436);

(statearr_37456[(10)] = inst_37435__$1);

return statearr_37456;
})();
if(inst_37438){
var statearr_37457_37472 = state_37452__$1;
(statearr_37457_37472[(1)] = (4));

} else {
var statearr_37458_37473 = state_37452__$1;
(statearr_37458_37473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37453 === (3))){
var inst_37450 = (state_37452[(2)]);
var state_37452__$1 = state_37452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37452__$1,inst_37450);
} else {
if((state_val_37453 === (4))){
var inst_37435 = (state_37452[(10)]);
var inst_37440 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37435);
var state_37452__$1 = state_37452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37452__$1,(7),inst_37440);
} else {
if((state_val_37453 === (5))){
var inst_37446 = cljs.core.async.close_BANG_.call(null,out);
var state_37452__$1 = state_37452;
var statearr_37459_37474 = state_37452__$1;
(statearr_37459_37474[(2)] = inst_37446);

(statearr_37459_37474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37453 === (6))){
var inst_37448 = (state_37452[(2)]);
var state_37452__$1 = state_37452;
var statearr_37460_37475 = state_37452__$1;
(statearr_37460_37475[(2)] = inst_37448);

(statearr_37460_37475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37453 === (7))){
var inst_37436 = (state_37452[(11)]);
var inst_37442 = (state_37452[(2)]);
var inst_37443 = cljs.core.async.put_BANG_.call(null,out,inst_37442);
var inst_37429 = inst_37436;
var state_37452__$1 = (function (){var statearr_37461 = state_37452;
(statearr_37461[(9)] = inst_37429);

(statearr_37461[(12)] = inst_37443);

return statearr_37461;
})();
var statearr_37462_37476 = state_37452__$1;
(statearr_37462_37476[(2)] = null);

(statearr_37462_37476[(1)] = (2));


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
});})(c__27021__auto___37470,out))
;
return ((function (switch__26956__auto__,c__27021__auto___37470,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto____0 = (function (){
var statearr_37466 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37466[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto__);

(statearr_37466[(1)] = (1));

return statearr_37466;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto____1 = (function (state_37452){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_37452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e37467){if((e37467 instanceof Object)){
var ex__26960__auto__ = e37467;
var statearr_37468_37477 = state_37452;
(statearr_37468_37477[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37478 = state_37452;
state_37452 = G__37478;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto__ = function(state_37452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto____1.call(this,state_37452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto___37470,out))
})();
var state__27023__auto__ = (function (){var statearr_37469 = f__27022__auto__.call(null);
(statearr_37469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto___37470);

return statearr_37469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto___37470,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37479,opts){
var map__37483 = p__37479;
var map__37483__$1 = ((((!((map__37483 == null)))?((((map__37483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37483):map__37483);
var eval_body = cljs.core.get.call(null,map__37483__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24876__auto__ = eval_body;
if(cljs.core.truth_(and__24876__auto__)){
return typeof eval_body === 'string';
} else {
return and__24876__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37485){var e = e37485;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37486_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37486_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37495){
var vec__37496 = p__37495;
var k = cljs.core.nth.call(null,vec__37496,(0),null);
var v = cljs.core.nth.call(null,vec__37496,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37499){
var vec__37500 = p__37499;
var k = cljs.core.nth.call(null,vec__37500,(0),null);
var v = cljs.core.nth.call(null,vec__37500,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37506,p__37507){
var map__37755 = p__37506;
var map__37755__$1 = ((((!((map__37755 == null)))?((((map__37755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37755):map__37755);
var opts = map__37755__$1;
var before_jsload = cljs.core.get.call(null,map__37755__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37755__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37755__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37756 = p__37507;
var map__37756__$1 = ((((!((map__37756 == null)))?((((map__37756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37756):map__37756);
var msg = map__37756__$1;
var files = cljs.core.get.call(null,map__37756__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37756__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37756__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27022__auto__ = (function (){var switch__26956__auto__ = ((function (c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37910){
var state_val_37911 = (state_37910[(1)]);
if((state_val_37911 === (7))){
var inst_37773 = (state_37910[(7)]);
var inst_37772 = (state_37910[(8)]);
var inst_37770 = (state_37910[(9)]);
var inst_37771 = (state_37910[(10)]);
var inst_37778 = cljs.core._nth.call(null,inst_37771,inst_37773);
var inst_37779 = figwheel.client.file_reloading.eval_body.call(null,inst_37778,opts);
var inst_37780 = (inst_37773 + (1));
var tmp37912 = inst_37772;
var tmp37913 = inst_37770;
var tmp37914 = inst_37771;
var inst_37770__$1 = tmp37913;
var inst_37771__$1 = tmp37914;
var inst_37772__$1 = tmp37912;
var inst_37773__$1 = inst_37780;
var state_37910__$1 = (function (){var statearr_37915 = state_37910;
(statearr_37915[(7)] = inst_37773__$1);

(statearr_37915[(11)] = inst_37779);

(statearr_37915[(8)] = inst_37772__$1);

(statearr_37915[(9)] = inst_37770__$1);

(statearr_37915[(10)] = inst_37771__$1);

return statearr_37915;
})();
var statearr_37916_38002 = state_37910__$1;
(statearr_37916_38002[(2)] = null);

(statearr_37916_38002[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (20))){
var inst_37813 = (state_37910[(12)]);
var inst_37821 = figwheel.client.file_reloading.sort_files.call(null,inst_37813);
var state_37910__$1 = state_37910;
var statearr_37917_38003 = state_37910__$1;
(statearr_37917_38003[(2)] = inst_37821);

(statearr_37917_38003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (27))){
var state_37910__$1 = state_37910;
var statearr_37918_38004 = state_37910__$1;
(statearr_37918_38004[(2)] = null);

(statearr_37918_38004[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (1))){
var inst_37762 = (state_37910[(13)]);
var inst_37759 = before_jsload.call(null,files);
var inst_37760 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37761 = (function (){return ((function (inst_37762,inst_37759,inst_37760,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37503_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37503_SHARP_);
});
;})(inst_37762,inst_37759,inst_37760,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37762__$1 = cljs.core.filter.call(null,inst_37761,files);
var inst_37763 = cljs.core.not_empty.call(null,inst_37762__$1);
var state_37910__$1 = (function (){var statearr_37919 = state_37910;
(statearr_37919[(14)] = inst_37759);

(statearr_37919[(13)] = inst_37762__$1);

(statearr_37919[(15)] = inst_37760);

return statearr_37919;
})();
if(cljs.core.truth_(inst_37763)){
var statearr_37920_38005 = state_37910__$1;
(statearr_37920_38005[(1)] = (2));

} else {
var statearr_37921_38006 = state_37910__$1;
(statearr_37921_38006[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (24))){
var state_37910__$1 = state_37910;
var statearr_37922_38007 = state_37910__$1;
(statearr_37922_38007[(2)] = null);

(statearr_37922_38007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (39))){
var inst_37863 = (state_37910[(16)]);
var state_37910__$1 = state_37910;
var statearr_37923_38008 = state_37910__$1;
(statearr_37923_38008[(2)] = inst_37863);

(statearr_37923_38008[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (46))){
var inst_37905 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
var statearr_37924_38009 = state_37910__$1;
(statearr_37924_38009[(2)] = inst_37905);

(statearr_37924_38009[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (4))){
var inst_37807 = (state_37910[(2)]);
var inst_37808 = cljs.core.List.EMPTY;
var inst_37809 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37808);
var inst_37810 = (function (){return ((function (inst_37807,inst_37808,inst_37809,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37504_SHARP_){
var and__24876__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37504_SHARP_);
if(cljs.core.truth_(and__24876__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37504_SHARP_));
} else {
return and__24876__auto__;
}
});
;})(inst_37807,inst_37808,inst_37809,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37811 = cljs.core.filter.call(null,inst_37810,files);
var inst_37812 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37813 = cljs.core.concat.call(null,inst_37811,inst_37812);
var state_37910__$1 = (function (){var statearr_37925 = state_37910;
(statearr_37925[(17)] = inst_37809);

(statearr_37925[(18)] = inst_37807);

(statearr_37925[(12)] = inst_37813);

return statearr_37925;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37926_38010 = state_37910__$1;
(statearr_37926_38010[(1)] = (16));

} else {
var statearr_37927_38011 = state_37910__$1;
(statearr_37927_38011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (15))){
var inst_37797 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
var statearr_37928_38012 = state_37910__$1;
(statearr_37928_38012[(2)] = inst_37797);

(statearr_37928_38012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (21))){
var inst_37823 = (state_37910[(19)]);
var inst_37823__$1 = (state_37910[(2)]);
var inst_37824 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37823__$1);
var state_37910__$1 = (function (){var statearr_37929 = state_37910;
(statearr_37929[(19)] = inst_37823__$1);

return statearr_37929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37910__$1,(22),inst_37824);
} else {
if((state_val_37911 === (31))){
var inst_37908 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37910__$1,inst_37908);
} else {
if((state_val_37911 === (32))){
var inst_37863 = (state_37910[(16)]);
var inst_37868 = inst_37863.cljs$lang$protocol_mask$partition0$;
var inst_37869 = (inst_37868 & (64));
var inst_37870 = inst_37863.cljs$core$ISeq$;
var inst_37871 = (cljs.core.PROTOCOL_SENTINEL === inst_37870);
var inst_37872 = (inst_37869) || (inst_37871);
var state_37910__$1 = state_37910;
if(cljs.core.truth_(inst_37872)){
var statearr_37930_38013 = state_37910__$1;
(statearr_37930_38013[(1)] = (35));

} else {
var statearr_37931_38014 = state_37910__$1;
(statearr_37931_38014[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (40))){
var inst_37885 = (state_37910[(20)]);
var inst_37884 = (state_37910[(2)]);
var inst_37885__$1 = cljs.core.get.call(null,inst_37884,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37886 = cljs.core.get.call(null,inst_37884,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37887 = cljs.core.not_empty.call(null,inst_37885__$1);
var state_37910__$1 = (function (){var statearr_37932 = state_37910;
(statearr_37932[(21)] = inst_37886);

(statearr_37932[(20)] = inst_37885__$1);

return statearr_37932;
})();
if(cljs.core.truth_(inst_37887)){
var statearr_37933_38015 = state_37910__$1;
(statearr_37933_38015[(1)] = (41));

} else {
var statearr_37934_38016 = state_37910__$1;
(statearr_37934_38016[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (33))){
var state_37910__$1 = state_37910;
var statearr_37935_38017 = state_37910__$1;
(statearr_37935_38017[(2)] = false);

(statearr_37935_38017[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (13))){
var inst_37783 = (state_37910[(22)]);
var inst_37787 = cljs.core.chunk_first.call(null,inst_37783);
var inst_37788 = cljs.core.chunk_rest.call(null,inst_37783);
var inst_37789 = cljs.core.count.call(null,inst_37787);
var inst_37770 = inst_37788;
var inst_37771 = inst_37787;
var inst_37772 = inst_37789;
var inst_37773 = (0);
var state_37910__$1 = (function (){var statearr_37936 = state_37910;
(statearr_37936[(7)] = inst_37773);

(statearr_37936[(8)] = inst_37772);

(statearr_37936[(9)] = inst_37770);

(statearr_37936[(10)] = inst_37771);

return statearr_37936;
})();
var statearr_37937_38018 = state_37910__$1;
(statearr_37937_38018[(2)] = null);

(statearr_37937_38018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (22))){
var inst_37826 = (state_37910[(23)]);
var inst_37831 = (state_37910[(24)]);
var inst_37827 = (state_37910[(25)]);
var inst_37823 = (state_37910[(19)]);
var inst_37826__$1 = (state_37910[(2)]);
var inst_37827__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37826__$1);
var inst_37828 = (function (){var all_files = inst_37823;
var res_SINGLEQUOTE_ = inst_37826__$1;
var res = inst_37827__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37826,inst_37831,inst_37827,inst_37823,inst_37826__$1,inst_37827__$1,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37505_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37505_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37826,inst_37831,inst_37827,inst_37823,inst_37826__$1,inst_37827__$1,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37829 = cljs.core.filter.call(null,inst_37828,inst_37826__$1);
var inst_37830 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37831__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37830);
var inst_37832 = cljs.core.not_empty.call(null,inst_37831__$1);
var state_37910__$1 = (function (){var statearr_37938 = state_37910;
(statearr_37938[(23)] = inst_37826__$1);

(statearr_37938[(24)] = inst_37831__$1);

(statearr_37938[(26)] = inst_37829);

(statearr_37938[(25)] = inst_37827__$1);

return statearr_37938;
})();
if(cljs.core.truth_(inst_37832)){
var statearr_37939_38019 = state_37910__$1;
(statearr_37939_38019[(1)] = (23));

} else {
var statearr_37940_38020 = state_37910__$1;
(statearr_37940_38020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (36))){
var state_37910__$1 = state_37910;
var statearr_37941_38021 = state_37910__$1;
(statearr_37941_38021[(2)] = false);

(statearr_37941_38021[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (41))){
var inst_37885 = (state_37910[(20)]);
var inst_37889 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37890 = cljs.core.map.call(null,inst_37889,inst_37885);
var inst_37891 = cljs.core.pr_str.call(null,inst_37890);
var inst_37892 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37891)].join('');
var inst_37893 = figwheel.client.utils.log.call(null,inst_37892);
var state_37910__$1 = state_37910;
var statearr_37942_38022 = state_37910__$1;
(statearr_37942_38022[(2)] = inst_37893);

(statearr_37942_38022[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (43))){
var inst_37886 = (state_37910[(21)]);
var inst_37896 = (state_37910[(2)]);
var inst_37897 = cljs.core.not_empty.call(null,inst_37886);
var state_37910__$1 = (function (){var statearr_37943 = state_37910;
(statearr_37943[(27)] = inst_37896);

return statearr_37943;
})();
if(cljs.core.truth_(inst_37897)){
var statearr_37944_38023 = state_37910__$1;
(statearr_37944_38023[(1)] = (44));

} else {
var statearr_37945_38024 = state_37910__$1;
(statearr_37945_38024[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (29))){
var inst_37863 = (state_37910[(16)]);
var inst_37826 = (state_37910[(23)]);
var inst_37831 = (state_37910[(24)]);
var inst_37829 = (state_37910[(26)]);
var inst_37827 = (state_37910[(25)]);
var inst_37823 = (state_37910[(19)]);
var inst_37859 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37862 = (function (){var all_files = inst_37823;
var res_SINGLEQUOTE_ = inst_37826;
var res = inst_37827;
var files_not_loaded = inst_37829;
var dependencies_that_loaded = inst_37831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37863,inst_37826,inst_37831,inst_37829,inst_37827,inst_37823,inst_37859,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37861){
var map__37946 = p__37861;
var map__37946__$1 = ((((!((map__37946 == null)))?((((map__37946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37946):map__37946);
var namespace = cljs.core.get.call(null,map__37946__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37863,inst_37826,inst_37831,inst_37829,inst_37827,inst_37823,inst_37859,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37863__$1 = cljs.core.group_by.call(null,inst_37862,inst_37829);
var inst_37865 = (inst_37863__$1 == null);
var inst_37866 = cljs.core.not.call(null,inst_37865);
var state_37910__$1 = (function (){var statearr_37948 = state_37910;
(statearr_37948[(28)] = inst_37859);

(statearr_37948[(16)] = inst_37863__$1);

return statearr_37948;
})();
if(inst_37866){
var statearr_37949_38025 = state_37910__$1;
(statearr_37949_38025[(1)] = (32));

} else {
var statearr_37950_38026 = state_37910__$1;
(statearr_37950_38026[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (44))){
var inst_37886 = (state_37910[(21)]);
var inst_37899 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37886);
var inst_37900 = cljs.core.pr_str.call(null,inst_37899);
var inst_37901 = [cljs.core.str("not required: "),cljs.core.str(inst_37900)].join('');
var inst_37902 = figwheel.client.utils.log.call(null,inst_37901);
var state_37910__$1 = state_37910;
var statearr_37951_38027 = state_37910__$1;
(statearr_37951_38027[(2)] = inst_37902);

(statearr_37951_38027[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (6))){
var inst_37804 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
var statearr_37952_38028 = state_37910__$1;
(statearr_37952_38028[(2)] = inst_37804);

(statearr_37952_38028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (28))){
var inst_37829 = (state_37910[(26)]);
var inst_37856 = (state_37910[(2)]);
var inst_37857 = cljs.core.not_empty.call(null,inst_37829);
var state_37910__$1 = (function (){var statearr_37953 = state_37910;
(statearr_37953[(29)] = inst_37856);

return statearr_37953;
})();
if(cljs.core.truth_(inst_37857)){
var statearr_37954_38029 = state_37910__$1;
(statearr_37954_38029[(1)] = (29));

} else {
var statearr_37955_38030 = state_37910__$1;
(statearr_37955_38030[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (25))){
var inst_37827 = (state_37910[(25)]);
var inst_37843 = (state_37910[(2)]);
var inst_37844 = cljs.core.not_empty.call(null,inst_37827);
var state_37910__$1 = (function (){var statearr_37956 = state_37910;
(statearr_37956[(30)] = inst_37843);

return statearr_37956;
})();
if(cljs.core.truth_(inst_37844)){
var statearr_37957_38031 = state_37910__$1;
(statearr_37957_38031[(1)] = (26));

} else {
var statearr_37958_38032 = state_37910__$1;
(statearr_37958_38032[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (34))){
var inst_37879 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
if(cljs.core.truth_(inst_37879)){
var statearr_37959_38033 = state_37910__$1;
(statearr_37959_38033[(1)] = (38));

} else {
var statearr_37960_38034 = state_37910__$1;
(statearr_37960_38034[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (17))){
var state_37910__$1 = state_37910;
var statearr_37961_38035 = state_37910__$1;
(statearr_37961_38035[(2)] = recompile_dependents);

(statearr_37961_38035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (3))){
var state_37910__$1 = state_37910;
var statearr_37962_38036 = state_37910__$1;
(statearr_37962_38036[(2)] = null);

(statearr_37962_38036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (12))){
var inst_37800 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
var statearr_37963_38037 = state_37910__$1;
(statearr_37963_38037[(2)] = inst_37800);

(statearr_37963_38037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (2))){
var inst_37762 = (state_37910[(13)]);
var inst_37769 = cljs.core.seq.call(null,inst_37762);
var inst_37770 = inst_37769;
var inst_37771 = null;
var inst_37772 = (0);
var inst_37773 = (0);
var state_37910__$1 = (function (){var statearr_37964 = state_37910;
(statearr_37964[(7)] = inst_37773);

(statearr_37964[(8)] = inst_37772);

(statearr_37964[(9)] = inst_37770);

(statearr_37964[(10)] = inst_37771);

return statearr_37964;
})();
var statearr_37965_38038 = state_37910__$1;
(statearr_37965_38038[(2)] = null);

(statearr_37965_38038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (23))){
var inst_37826 = (state_37910[(23)]);
var inst_37831 = (state_37910[(24)]);
var inst_37829 = (state_37910[(26)]);
var inst_37827 = (state_37910[(25)]);
var inst_37823 = (state_37910[(19)]);
var inst_37834 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37836 = (function (){var all_files = inst_37823;
var res_SINGLEQUOTE_ = inst_37826;
var res = inst_37827;
var files_not_loaded = inst_37829;
var dependencies_that_loaded = inst_37831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37826,inst_37831,inst_37829,inst_37827,inst_37823,inst_37834,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37835){
var map__37966 = p__37835;
var map__37966__$1 = ((((!((map__37966 == null)))?((((map__37966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37966):map__37966);
var request_url = cljs.core.get.call(null,map__37966__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37826,inst_37831,inst_37829,inst_37827,inst_37823,inst_37834,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37837 = cljs.core.reverse.call(null,inst_37831);
var inst_37838 = cljs.core.map.call(null,inst_37836,inst_37837);
var inst_37839 = cljs.core.pr_str.call(null,inst_37838);
var inst_37840 = figwheel.client.utils.log.call(null,inst_37839);
var state_37910__$1 = (function (){var statearr_37968 = state_37910;
(statearr_37968[(31)] = inst_37834);

return statearr_37968;
})();
var statearr_37969_38039 = state_37910__$1;
(statearr_37969_38039[(2)] = inst_37840);

(statearr_37969_38039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (35))){
var state_37910__$1 = state_37910;
var statearr_37970_38040 = state_37910__$1;
(statearr_37970_38040[(2)] = true);

(statearr_37970_38040[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (19))){
var inst_37813 = (state_37910[(12)]);
var inst_37819 = figwheel.client.file_reloading.expand_files.call(null,inst_37813);
var state_37910__$1 = state_37910;
var statearr_37971_38041 = state_37910__$1;
(statearr_37971_38041[(2)] = inst_37819);

(statearr_37971_38041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (11))){
var state_37910__$1 = state_37910;
var statearr_37972_38042 = state_37910__$1;
(statearr_37972_38042[(2)] = null);

(statearr_37972_38042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (9))){
var inst_37802 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
var statearr_37973_38043 = state_37910__$1;
(statearr_37973_38043[(2)] = inst_37802);

(statearr_37973_38043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (5))){
var inst_37773 = (state_37910[(7)]);
var inst_37772 = (state_37910[(8)]);
var inst_37775 = (inst_37773 < inst_37772);
var inst_37776 = inst_37775;
var state_37910__$1 = state_37910;
if(cljs.core.truth_(inst_37776)){
var statearr_37974_38044 = state_37910__$1;
(statearr_37974_38044[(1)] = (7));

} else {
var statearr_37975_38045 = state_37910__$1;
(statearr_37975_38045[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (14))){
var inst_37783 = (state_37910[(22)]);
var inst_37792 = cljs.core.first.call(null,inst_37783);
var inst_37793 = figwheel.client.file_reloading.eval_body.call(null,inst_37792,opts);
var inst_37794 = cljs.core.next.call(null,inst_37783);
var inst_37770 = inst_37794;
var inst_37771 = null;
var inst_37772 = (0);
var inst_37773 = (0);
var state_37910__$1 = (function (){var statearr_37976 = state_37910;
(statearr_37976[(7)] = inst_37773);

(statearr_37976[(8)] = inst_37772);

(statearr_37976[(9)] = inst_37770);

(statearr_37976[(32)] = inst_37793);

(statearr_37976[(10)] = inst_37771);

return statearr_37976;
})();
var statearr_37977_38046 = state_37910__$1;
(statearr_37977_38046[(2)] = null);

(statearr_37977_38046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (45))){
var state_37910__$1 = state_37910;
var statearr_37978_38047 = state_37910__$1;
(statearr_37978_38047[(2)] = null);

(statearr_37978_38047[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (26))){
var inst_37826 = (state_37910[(23)]);
var inst_37831 = (state_37910[(24)]);
var inst_37829 = (state_37910[(26)]);
var inst_37827 = (state_37910[(25)]);
var inst_37823 = (state_37910[(19)]);
var inst_37846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37848 = (function (){var all_files = inst_37823;
var res_SINGLEQUOTE_ = inst_37826;
var res = inst_37827;
var files_not_loaded = inst_37829;
var dependencies_that_loaded = inst_37831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37826,inst_37831,inst_37829,inst_37827,inst_37823,inst_37846,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37847){
var map__37979 = p__37847;
var map__37979__$1 = ((((!((map__37979 == null)))?((((map__37979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37979):map__37979);
var namespace = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37826,inst_37831,inst_37829,inst_37827,inst_37823,inst_37846,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37849 = cljs.core.map.call(null,inst_37848,inst_37827);
var inst_37850 = cljs.core.pr_str.call(null,inst_37849);
var inst_37851 = figwheel.client.utils.log.call(null,inst_37850);
var inst_37852 = (function (){var all_files = inst_37823;
var res_SINGLEQUOTE_ = inst_37826;
var res = inst_37827;
var files_not_loaded = inst_37829;
var dependencies_that_loaded = inst_37831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37826,inst_37831,inst_37829,inst_37827,inst_37823,inst_37846,inst_37848,inst_37849,inst_37850,inst_37851,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37826,inst_37831,inst_37829,inst_37827,inst_37823,inst_37846,inst_37848,inst_37849,inst_37850,inst_37851,state_val_37911,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37853 = setTimeout(inst_37852,(10));
var state_37910__$1 = (function (){var statearr_37981 = state_37910;
(statearr_37981[(33)] = inst_37851);

(statearr_37981[(34)] = inst_37846);

return statearr_37981;
})();
var statearr_37982_38048 = state_37910__$1;
(statearr_37982_38048[(2)] = inst_37853);

(statearr_37982_38048[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (16))){
var state_37910__$1 = state_37910;
var statearr_37983_38049 = state_37910__$1;
(statearr_37983_38049[(2)] = reload_dependents);

(statearr_37983_38049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (38))){
var inst_37863 = (state_37910[(16)]);
var inst_37881 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37863);
var state_37910__$1 = state_37910;
var statearr_37984_38050 = state_37910__$1;
(statearr_37984_38050[(2)] = inst_37881);

(statearr_37984_38050[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (30))){
var state_37910__$1 = state_37910;
var statearr_37985_38051 = state_37910__$1;
(statearr_37985_38051[(2)] = null);

(statearr_37985_38051[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (10))){
var inst_37783 = (state_37910[(22)]);
var inst_37785 = cljs.core.chunked_seq_QMARK_.call(null,inst_37783);
var state_37910__$1 = state_37910;
if(inst_37785){
var statearr_37986_38052 = state_37910__$1;
(statearr_37986_38052[(1)] = (13));

} else {
var statearr_37987_38053 = state_37910__$1;
(statearr_37987_38053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (18))){
var inst_37817 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
if(cljs.core.truth_(inst_37817)){
var statearr_37988_38054 = state_37910__$1;
(statearr_37988_38054[(1)] = (19));

} else {
var statearr_37989_38055 = state_37910__$1;
(statearr_37989_38055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (42))){
var state_37910__$1 = state_37910;
var statearr_37990_38056 = state_37910__$1;
(statearr_37990_38056[(2)] = null);

(statearr_37990_38056[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (37))){
var inst_37876 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
var statearr_37991_38057 = state_37910__$1;
(statearr_37991_38057[(2)] = inst_37876);

(statearr_37991_38057[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (8))){
var inst_37770 = (state_37910[(9)]);
var inst_37783 = (state_37910[(22)]);
var inst_37783__$1 = cljs.core.seq.call(null,inst_37770);
var state_37910__$1 = (function (){var statearr_37992 = state_37910;
(statearr_37992[(22)] = inst_37783__$1);

return statearr_37992;
})();
if(inst_37783__$1){
var statearr_37993_38058 = state_37910__$1;
(statearr_37993_38058[(1)] = (10));

} else {
var statearr_37994_38059 = state_37910__$1;
(statearr_37994_38059[(1)] = (11));

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
}
});})(c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26956__auto__,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto____0 = (function (){
var statearr_37998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37998[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto__);

(statearr_37998[(1)] = (1));

return statearr_37998;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto____1 = (function (state_37910){
while(true){
var ret_value__26958__auto__ = (function (){try{while(true){
var result__26959__auto__ = switch__26956__auto__.call(null,state_37910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26959__auto__;
}
break;
}
}catch (e37999){if((e37999 instanceof Object)){
var ex__26960__auto__ = e37999;
var statearr_38000_38060 = state_37910;
(statearr_38000_38060[(5)] = ex__26960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38061 = state_37910;
state_37910 = G__38061;
continue;
} else {
return ret_value__26958__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto__ = function(state_37910){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto____1.call(this,state_37910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26957__auto__;
})()
;})(switch__26956__auto__,c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27023__auto__ = (function (){var statearr_38001 = f__27022__auto__.call(null);
(statearr_38001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27021__auto__);

return statearr_38001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27023__auto__);
});})(c__27021__auto__,map__37755,map__37755__$1,opts,before_jsload,on_jsload,reload_dependents,map__37756,map__37756__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27021__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38064,link){
var map__38067 = p__38064;
var map__38067__$1 = ((((!((map__38067 == null)))?((((map__38067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38067):map__38067);
var file = cljs.core.get.call(null,map__38067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__38067,map__38067__$1,file){
return (function (p1__38062_SHARP_,p2__38063_SHARP_){
if(cljs.core._EQ_.call(null,p1__38062_SHARP_,p2__38063_SHARP_)){
return p1__38062_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__38067,map__38067__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38073){
var map__38074 = p__38073;
var map__38074__$1 = ((((!((map__38074 == null)))?((((map__38074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38074):map__38074);
var match_length = cljs.core.get.call(null,map__38074__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38074__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38069_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38069_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args38076 = [];
var len__25996__auto___38079 = arguments.length;
var i__25997__auto___38080 = (0);
while(true){
if((i__25997__auto___38080 < len__25996__auto___38079)){
args38076.push((arguments[i__25997__auto___38080]));

var G__38081 = (i__25997__auto___38080 + (1));
i__25997__auto___38080 = G__38081;
continue;
} else {
}
break;
}

var G__38078 = args38076.length;
switch (G__38078) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38076.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38083_SHARP_,p2__38084_SHARP_){
return cljs.core.assoc.call(null,p1__38083_SHARP_,cljs.core.get.call(null,p2__38084_SHARP_,key),p2__38084_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__38085){
var map__38088 = p__38085;
var map__38088__$1 = ((((!((map__38088 == null)))?((((map__38088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38088):map__38088);
var f_data = map__38088__$1;
var file = cljs.core.get.call(null,map__38088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38090,p__38091){
var map__38100 = p__38090;
var map__38100__$1 = ((((!((map__38100 == null)))?((((map__38100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38100):map__38100);
var opts = map__38100__$1;
var on_cssload = cljs.core.get.call(null,map__38100__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38101 = p__38091;
var map__38101__$1 = ((((!((map__38101 == null)))?((((map__38101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38101):map__38101);
var files_msg = map__38101__$1;
var files = cljs.core.get.call(null,map__38101__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__38104_38108 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__38105_38109 = null;
var count__38106_38110 = (0);
var i__38107_38111 = (0);
while(true){
if((i__38107_38111 < count__38106_38110)){
var f_38112 = cljs.core._nth.call(null,chunk__38105_38109,i__38107_38111);
figwheel.client.file_reloading.reload_css_file.call(null,f_38112);

var G__38113 = seq__38104_38108;
var G__38114 = chunk__38105_38109;
var G__38115 = count__38106_38110;
var G__38116 = (i__38107_38111 + (1));
seq__38104_38108 = G__38113;
chunk__38105_38109 = G__38114;
count__38106_38110 = G__38115;
i__38107_38111 = G__38116;
continue;
} else {
var temp__4657__auto___38117 = cljs.core.seq.call(null,seq__38104_38108);
if(temp__4657__auto___38117){
var seq__38104_38118__$1 = temp__4657__auto___38117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38104_38118__$1)){
var c__25702__auto___38119 = cljs.core.chunk_first.call(null,seq__38104_38118__$1);
var G__38120 = cljs.core.chunk_rest.call(null,seq__38104_38118__$1);
var G__38121 = c__25702__auto___38119;
var G__38122 = cljs.core.count.call(null,c__25702__auto___38119);
var G__38123 = (0);
seq__38104_38108 = G__38120;
chunk__38105_38109 = G__38121;
count__38106_38110 = G__38122;
i__38107_38111 = G__38123;
continue;
} else {
var f_38124 = cljs.core.first.call(null,seq__38104_38118__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_38124);

var G__38125 = cljs.core.next.call(null,seq__38104_38118__$1);
var G__38126 = null;
var G__38127 = (0);
var G__38128 = (0);
seq__38104_38108 = G__38125;
chunk__38105_38109 = G__38126;
count__38106_38110 = G__38127;
i__38107_38111 = G__38128;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__38100,map__38100__$1,opts,on_cssload,map__38101,map__38101__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__38100,map__38100__$1,opts,on_cssload,map__38101,map__38101__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1480181535850