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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40165_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40165_SHARP_));
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
var seq__40170 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40171 = null;
var count__40172 = (0);
var i__40173 = (0);
while(true){
if((i__40173 < count__40172)){
var n = cljs.core._nth.call(null,chunk__40171,i__40173);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40174 = seq__40170;
var G__40175 = chunk__40171;
var G__40176 = count__40172;
var G__40177 = (i__40173 + (1));
seq__40170 = G__40174;
chunk__40171 = G__40175;
count__40172 = G__40176;
i__40173 = G__40177;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40170);
if(temp__4657__auto__){
var seq__40170__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40170__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__40170__$1);
var G__40178 = cljs.core.chunk_rest.call(null,seq__40170__$1);
var G__40179 = c__25702__auto__;
var G__40180 = cljs.core.count.call(null,c__25702__auto__);
var G__40181 = (0);
seq__40170 = G__40178;
chunk__40171 = G__40179;
count__40172 = G__40180;
i__40173 = G__40181;
continue;
} else {
var n = cljs.core.first.call(null,seq__40170__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40182 = cljs.core.next.call(null,seq__40170__$1);
var G__40183 = null;
var G__40184 = (0);
var G__40185 = (0);
seq__40170 = G__40182;
chunk__40171 = G__40183;
count__40172 = G__40184;
i__40173 = G__40185;
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

var seq__40236_40247 = cljs.core.seq.call(null,deps);
var chunk__40237_40248 = null;
var count__40238_40249 = (0);
var i__40239_40250 = (0);
while(true){
if((i__40239_40250 < count__40238_40249)){
var dep_40251 = cljs.core._nth.call(null,chunk__40237_40248,i__40239_40250);
topo_sort_helper_STAR_.call(null,dep_40251,(depth + (1)),state);

var G__40252 = seq__40236_40247;
var G__40253 = chunk__40237_40248;
var G__40254 = count__40238_40249;
var G__40255 = (i__40239_40250 + (1));
seq__40236_40247 = G__40252;
chunk__40237_40248 = G__40253;
count__40238_40249 = G__40254;
i__40239_40250 = G__40255;
continue;
} else {
var temp__4657__auto___40256 = cljs.core.seq.call(null,seq__40236_40247);
if(temp__4657__auto___40256){
var seq__40236_40257__$1 = temp__4657__auto___40256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40236_40257__$1)){
var c__25702__auto___40258 = cljs.core.chunk_first.call(null,seq__40236_40257__$1);
var G__40259 = cljs.core.chunk_rest.call(null,seq__40236_40257__$1);
var G__40260 = c__25702__auto___40258;
var G__40261 = cljs.core.count.call(null,c__25702__auto___40258);
var G__40262 = (0);
seq__40236_40247 = G__40259;
chunk__40237_40248 = G__40260;
count__40238_40249 = G__40261;
i__40239_40250 = G__40262;
continue;
} else {
var dep_40263 = cljs.core.first.call(null,seq__40236_40257__$1);
topo_sort_helper_STAR_.call(null,dep_40263,(depth + (1)),state);

var G__40264 = cljs.core.next.call(null,seq__40236_40257__$1);
var G__40265 = null;
var G__40266 = (0);
var G__40267 = (0);
seq__40236_40247 = G__40264;
chunk__40237_40248 = G__40265;
count__40238_40249 = G__40266;
i__40239_40250 = G__40267;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40240){
var vec__40244 = p__40240;
var seq__40245 = cljs.core.seq.call(null,vec__40244);
var first__40246 = cljs.core.first.call(null,seq__40245);
var seq__40245__$1 = cljs.core.next.call(null,seq__40245);
var x = first__40246;
var xs = seq__40245__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40244,seq__40245,first__40246,seq__40245__$1,x,xs,get_deps__$1){
return (function (p1__40186_SHARP_){
return clojure.set.difference.call(null,p1__40186_SHARP_,x);
});})(vec__40244,seq__40245,first__40246,seq__40245__$1,x,xs,get_deps__$1))
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
var seq__40280 = cljs.core.seq.call(null,provides);
var chunk__40281 = null;
var count__40282 = (0);
var i__40283 = (0);
while(true){
if((i__40283 < count__40282)){
var prov = cljs.core._nth.call(null,chunk__40281,i__40283);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40284_40292 = cljs.core.seq.call(null,requires);
var chunk__40285_40293 = null;
var count__40286_40294 = (0);
var i__40287_40295 = (0);
while(true){
if((i__40287_40295 < count__40286_40294)){
var req_40296 = cljs.core._nth.call(null,chunk__40285_40293,i__40287_40295);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40296,prov);

var G__40297 = seq__40284_40292;
var G__40298 = chunk__40285_40293;
var G__40299 = count__40286_40294;
var G__40300 = (i__40287_40295 + (1));
seq__40284_40292 = G__40297;
chunk__40285_40293 = G__40298;
count__40286_40294 = G__40299;
i__40287_40295 = G__40300;
continue;
} else {
var temp__4657__auto___40301 = cljs.core.seq.call(null,seq__40284_40292);
if(temp__4657__auto___40301){
var seq__40284_40302__$1 = temp__4657__auto___40301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40284_40302__$1)){
var c__25702__auto___40303 = cljs.core.chunk_first.call(null,seq__40284_40302__$1);
var G__40304 = cljs.core.chunk_rest.call(null,seq__40284_40302__$1);
var G__40305 = c__25702__auto___40303;
var G__40306 = cljs.core.count.call(null,c__25702__auto___40303);
var G__40307 = (0);
seq__40284_40292 = G__40304;
chunk__40285_40293 = G__40305;
count__40286_40294 = G__40306;
i__40287_40295 = G__40307;
continue;
} else {
var req_40308 = cljs.core.first.call(null,seq__40284_40302__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40308,prov);

var G__40309 = cljs.core.next.call(null,seq__40284_40302__$1);
var G__40310 = null;
var G__40311 = (0);
var G__40312 = (0);
seq__40284_40292 = G__40309;
chunk__40285_40293 = G__40310;
count__40286_40294 = G__40311;
i__40287_40295 = G__40312;
continue;
}
} else {
}
}
break;
}

var G__40313 = seq__40280;
var G__40314 = chunk__40281;
var G__40315 = count__40282;
var G__40316 = (i__40283 + (1));
seq__40280 = G__40313;
chunk__40281 = G__40314;
count__40282 = G__40315;
i__40283 = G__40316;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40280);
if(temp__4657__auto__){
var seq__40280__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40280__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__40280__$1);
var G__40317 = cljs.core.chunk_rest.call(null,seq__40280__$1);
var G__40318 = c__25702__auto__;
var G__40319 = cljs.core.count.call(null,c__25702__auto__);
var G__40320 = (0);
seq__40280 = G__40317;
chunk__40281 = G__40318;
count__40282 = G__40319;
i__40283 = G__40320;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40280__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40288_40321 = cljs.core.seq.call(null,requires);
var chunk__40289_40322 = null;
var count__40290_40323 = (0);
var i__40291_40324 = (0);
while(true){
if((i__40291_40324 < count__40290_40323)){
var req_40325 = cljs.core._nth.call(null,chunk__40289_40322,i__40291_40324);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40325,prov);

var G__40326 = seq__40288_40321;
var G__40327 = chunk__40289_40322;
var G__40328 = count__40290_40323;
var G__40329 = (i__40291_40324 + (1));
seq__40288_40321 = G__40326;
chunk__40289_40322 = G__40327;
count__40290_40323 = G__40328;
i__40291_40324 = G__40329;
continue;
} else {
var temp__4657__auto___40330__$1 = cljs.core.seq.call(null,seq__40288_40321);
if(temp__4657__auto___40330__$1){
var seq__40288_40331__$1 = temp__4657__auto___40330__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40288_40331__$1)){
var c__25702__auto___40332 = cljs.core.chunk_first.call(null,seq__40288_40331__$1);
var G__40333 = cljs.core.chunk_rest.call(null,seq__40288_40331__$1);
var G__40334 = c__25702__auto___40332;
var G__40335 = cljs.core.count.call(null,c__25702__auto___40332);
var G__40336 = (0);
seq__40288_40321 = G__40333;
chunk__40289_40322 = G__40334;
count__40290_40323 = G__40335;
i__40291_40324 = G__40336;
continue;
} else {
var req_40337 = cljs.core.first.call(null,seq__40288_40331__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40337,prov);

var G__40338 = cljs.core.next.call(null,seq__40288_40331__$1);
var G__40339 = null;
var G__40340 = (0);
var G__40341 = (0);
seq__40288_40321 = G__40338;
chunk__40289_40322 = G__40339;
count__40290_40323 = G__40340;
i__40291_40324 = G__40341;
continue;
}
} else {
}
}
break;
}

var G__40342 = cljs.core.next.call(null,seq__40280__$1);
var G__40343 = null;
var G__40344 = (0);
var G__40345 = (0);
seq__40280 = G__40342;
chunk__40281 = G__40343;
count__40282 = G__40344;
i__40283 = G__40345;
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
var seq__40350_40354 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40351_40355 = null;
var count__40352_40356 = (0);
var i__40353_40357 = (0);
while(true){
if((i__40353_40357 < count__40352_40356)){
var ns_40358 = cljs.core._nth.call(null,chunk__40351_40355,i__40353_40357);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40358);

var G__40359 = seq__40350_40354;
var G__40360 = chunk__40351_40355;
var G__40361 = count__40352_40356;
var G__40362 = (i__40353_40357 + (1));
seq__40350_40354 = G__40359;
chunk__40351_40355 = G__40360;
count__40352_40356 = G__40361;
i__40353_40357 = G__40362;
continue;
} else {
var temp__4657__auto___40363 = cljs.core.seq.call(null,seq__40350_40354);
if(temp__4657__auto___40363){
var seq__40350_40364__$1 = temp__4657__auto___40363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40350_40364__$1)){
var c__25702__auto___40365 = cljs.core.chunk_first.call(null,seq__40350_40364__$1);
var G__40366 = cljs.core.chunk_rest.call(null,seq__40350_40364__$1);
var G__40367 = c__25702__auto___40365;
var G__40368 = cljs.core.count.call(null,c__25702__auto___40365);
var G__40369 = (0);
seq__40350_40354 = G__40366;
chunk__40351_40355 = G__40367;
count__40352_40356 = G__40368;
i__40353_40357 = G__40369;
continue;
} else {
var ns_40370 = cljs.core.first.call(null,seq__40350_40364__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40370);

var G__40371 = cljs.core.next.call(null,seq__40350_40364__$1);
var G__40372 = null;
var G__40373 = (0);
var G__40374 = (0);
seq__40350_40354 = G__40371;
chunk__40351_40355 = G__40372;
count__40352_40356 = G__40373;
i__40353_40357 = G__40374;
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
var G__40375__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40376__i = 0, G__40376__a = new Array(arguments.length -  0);
while (G__40376__i < G__40376__a.length) {G__40376__a[G__40376__i] = arguments[G__40376__i + 0]; ++G__40376__i;}
  args = new cljs.core.IndexedSeq(G__40376__a,0);
} 
return G__40375__delegate.call(this,args);};
G__40375.cljs$lang$maxFixedArity = 0;
G__40375.cljs$lang$applyTo = (function (arglist__40377){
var args = cljs.core.seq(arglist__40377);
return G__40375__delegate(args);
});
G__40375.cljs$core$IFn$_invoke$arity$variadic = G__40375__delegate;
return G__40375;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40379 = cljs.core._EQ_;
var expr__40380 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40379.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40380))){
var path_parts = ((function (pred__40379,expr__40380){
return (function (p1__40378_SHARP_){
return clojure.string.split.call(null,p1__40378_SHARP_,/[\/\\]/);
});})(pred__40379,expr__40380))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40379,expr__40380){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40382){if((e40382 instanceof Error)){
var e = e40382;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40382;

}
}})());
});
;})(path_parts,sep,root,pred__40379,expr__40380))
} else {
if(cljs.core.truth_(pred__40379.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40380))){
return ((function (pred__40379,expr__40380){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__40379,expr__40380){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40379,expr__40380))
);

return deferred.addErrback(((function (deferred,pred__40379,expr__40380){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40379,expr__40380))
);
});
;})(pred__40379,expr__40380))
} else {
return ((function (pred__40379,expr__40380){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40379,expr__40380))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40383,callback){
var map__40386 = p__40383;
var map__40386__$1 = ((((!((map__40386 == null)))?((((map__40386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40386):map__40386);
var file_msg = map__40386__$1;
var request_url = cljs.core.get.call(null,map__40386__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40386,map__40386__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40386,map__40386__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto__){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto__){
return (function (state_40410){
var state_val_40411 = (state_40410[(1)]);
if((state_val_40411 === (7))){
var inst_40406 = (state_40410[(2)]);
var state_40410__$1 = state_40410;
var statearr_40412_40432 = state_40410__$1;
(statearr_40412_40432[(2)] = inst_40406);

(statearr_40412_40432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (1))){
var state_40410__$1 = state_40410;
var statearr_40413_40433 = state_40410__$1;
(statearr_40413_40433[(2)] = null);

(statearr_40413_40433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (4))){
var inst_40390 = (state_40410[(7)]);
var inst_40390__$1 = (state_40410[(2)]);
var state_40410__$1 = (function (){var statearr_40414 = state_40410;
(statearr_40414[(7)] = inst_40390__$1);

return statearr_40414;
})();
if(cljs.core.truth_(inst_40390__$1)){
var statearr_40415_40434 = state_40410__$1;
(statearr_40415_40434[(1)] = (5));

} else {
var statearr_40416_40435 = state_40410__$1;
(statearr_40416_40435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (6))){
var state_40410__$1 = state_40410;
var statearr_40417_40436 = state_40410__$1;
(statearr_40417_40436[(2)] = null);

(statearr_40417_40436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (3))){
var inst_40408 = (state_40410[(2)]);
var state_40410__$1 = state_40410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40410__$1,inst_40408);
} else {
if((state_val_40411 === (2))){
var state_40410__$1 = state_40410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40410__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40411 === (11))){
var inst_40402 = (state_40410[(2)]);
var state_40410__$1 = (function (){var statearr_40418 = state_40410;
(statearr_40418[(8)] = inst_40402);

return statearr_40418;
})();
var statearr_40419_40437 = state_40410__$1;
(statearr_40419_40437[(2)] = null);

(statearr_40419_40437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (9))){
var inst_40394 = (state_40410[(9)]);
var inst_40396 = (state_40410[(10)]);
var inst_40398 = inst_40396.call(null,inst_40394);
var state_40410__$1 = state_40410;
var statearr_40420_40438 = state_40410__$1;
(statearr_40420_40438[(2)] = inst_40398);

(statearr_40420_40438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (5))){
var inst_40390 = (state_40410[(7)]);
var inst_40392 = figwheel.client.file_reloading.blocking_load.call(null,inst_40390);
var state_40410__$1 = state_40410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40410__$1,(8),inst_40392);
} else {
if((state_val_40411 === (10))){
var inst_40394 = (state_40410[(9)]);
var inst_40400 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40394);
var state_40410__$1 = state_40410;
var statearr_40421_40439 = state_40410__$1;
(statearr_40421_40439[(2)] = inst_40400);

(statearr_40421_40439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (8))){
var inst_40390 = (state_40410[(7)]);
var inst_40396 = (state_40410[(10)]);
var inst_40394 = (state_40410[(2)]);
var inst_40395 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40396__$1 = cljs.core.get.call(null,inst_40395,inst_40390);
var state_40410__$1 = (function (){var statearr_40422 = state_40410;
(statearr_40422[(9)] = inst_40394);

(statearr_40422[(10)] = inst_40396__$1);

return statearr_40422;
})();
if(cljs.core.truth_(inst_40396__$1)){
var statearr_40423_40440 = state_40410__$1;
(statearr_40423_40440[(1)] = (9));

} else {
var statearr_40424_40441 = state_40410__$1;
(statearr_40424_40441[(1)] = (10));

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
});})(c__28055__auto__))
;
return ((function (switch__27943__auto__,c__28055__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27944__auto__ = null;
var figwheel$client$file_reloading$state_machine__27944__auto____0 = (function (){
var statearr_40428 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40428[(0)] = figwheel$client$file_reloading$state_machine__27944__auto__);

(statearr_40428[(1)] = (1));

return statearr_40428;
});
var figwheel$client$file_reloading$state_machine__27944__auto____1 = (function (state_40410){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_40410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e40429){if((e40429 instanceof Object)){
var ex__27947__auto__ = e40429;
var statearr_40430_40442 = state_40410;
(statearr_40430_40442[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40443 = state_40410;
state_40410 = G__40443;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27944__auto__ = function(state_40410){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27944__auto____1.call(this,state_40410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27944__auto____0;
figwheel$client$file_reloading$state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27944__auto____1;
return figwheel$client$file_reloading$state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto__))
})();
var state__28057__auto__ = (function (){var statearr_40431 = f__28056__auto__.call(null);
(statearr_40431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto__);

return statearr_40431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto__))
);

return c__28055__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40444,callback){
var map__40447 = p__40444;
var map__40447__$1 = ((((!((map__40447 == null)))?((((map__40447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40447):map__40447);
var file_msg = map__40447__$1;
var namespace = cljs.core.get.call(null,map__40447__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40447,map__40447__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40447,map__40447__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40449){
var map__40452 = p__40449;
var map__40452__$1 = ((((!((map__40452 == null)))?((((map__40452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40452):map__40452);
var file_msg = map__40452__$1;
var namespace = cljs.core.get.call(null,map__40452__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40454,callback){
var map__40457 = p__40454;
var map__40457__$1 = ((((!((map__40457 == null)))?((((map__40457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40457):map__40457);
var file_msg = map__40457__$1;
var request_url = cljs.core.get.call(null,map__40457__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40457__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28055__auto___40561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto___40561,out){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto___40561,out){
return (function (state_40543){
var state_val_40544 = (state_40543[(1)]);
if((state_val_40544 === (1))){
var inst_40517 = cljs.core.seq.call(null,files);
var inst_40518 = cljs.core.first.call(null,inst_40517);
var inst_40519 = cljs.core.next.call(null,inst_40517);
var inst_40520 = files;
var state_40543__$1 = (function (){var statearr_40545 = state_40543;
(statearr_40545[(7)] = inst_40518);

(statearr_40545[(8)] = inst_40519);

(statearr_40545[(9)] = inst_40520);

return statearr_40545;
})();
var statearr_40546_40562 = state_40543__$1;
(statearr_40546_40562[(2)] = null);

(statearr_40546_40562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40544 === (2))){
var inst_40526 = (state_40543[(10)]);
var inst_40520 = (state_40543[(9)]);
var inst_40525 = cljs.core.seq.call(null,inst_40520);
var inst_40526__$1 = cljs.core.first.call(null,inst_40525);
var inst_40527 = cljs.core.next.call(null,inst_40525);
var inst_40528 = (inst_40526__$1 == null);
var inst_40529 = cljs.core.not.call(null,inst_40528);
var state_40543__$1 = (function (){var statearr_40547 = state_40543;
(statearr_40547[(11)] = inst_40527);

(statearr_40547[(10)] = inst_40526__$1);

return statearr_40547;
})();
if(inst_40529){
var statearr_40548_40563 = state_40543__$1;
(statearr_40548_40563[(1)] = (4));

} else {
var statearr_40549_40564 = state_40543__$1;
(statearr_40549_40564[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40544 === (3))){
var inst_40541 = (state_40543[(2)]);
var state_40543__$1 = state_40543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40543__$1,inst_40541);
} else {
if((state_val_40544 === (4))){
var inst_40526 = (state_40543[(10)]);
var inst_40531 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40526);
var state_40543__$1 = state_40543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40543__$1,(7),inst_40531);
} else {
if((state_val_40544 === (5))){
var inst_40537 = cljs.core.async.close_BANG_.call(null,out);
var state_40543__$1 = state_40543;
var statearr_40550_40565 = state_40543__$1;
(statearr_40550_40565[(2)] = inst_40537);

(statearr_40550_40565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40544 === (6))){
var inst_40539 = (state_40543[(2)]);
var state_40543__$1 = state_40543;
var statearr_40551_40566 = state_40543__$1;
(statearr_40551_40566[(2)] = inst_40539);

(statearr_40551_40566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40544 === (7))){
var inst_40527 = (state_40543[(11)]);
var inst_40533 = (state_40543[(2)]);
var inst_40534 = cljs.core.async.put_BANG_.call(null,out,inst_40533);
var inst_40520 = inst_40527;
var state_40543__$1 = (function (){var statearr_40552 = state_40543;
(statearr_40552[(12)] = inst_40534);

(statearr_40552[(9)] = inst_40520);

return statearr_40552;
})();
var statearr_40553_40567 = state_40543__$1;
(statearr_40553_40567[(2)] = null);

(statearr_40553_40567[(1)] = (2));


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
});})(c__28055__auto___40561,out))
;
return ((function (switch__27943__auto__,c__28055__auto___40561,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto____0 = (function (){
var statearr_40557 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40557[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto__);

(statearr_40557[(1)] = (1));

return statearr_40557;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto____1 = (function (state_40543){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_40543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e40558){if((e40558 instanceof Object)){
var ex__27947__auto__ = e40558;
var statearr_40559_40568 = state_40543;
(statearr_40559_40568[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40569 = state_40543;
state_40543 = G__40569;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto__ = function(state_40543){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto____1.call(this,state_40543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto___40561,out))
})();
var state__28057__auto__ = (function (){var statearr_40560 = f__28056__auto__.call(null);
(statearr_40560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto___40561);

return statearr_40560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto___40561,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40570,opts){
var map__40574 = p__40570;
var map__40574__$1 = ((((!((map__40574 == null)))?((((map__40574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40574):map__40574);
var eval_body = cljs.core.get.call(null,map__40574__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40574__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e40576){var e = e40576;
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
return (function (p1__40577_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40577_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__40586){
var vec__40587 = p__40586;
var k = cljs.core.nth.call(null,vec__40587,(0),null);
var v = cljs.core.nth.call(null,vec__40587,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40590){
var vec__40591 = p__40590;
var k = cljs.core.nth.call(null,vec__40591,(0),null);
var v = cljs.core.nth.call(null,vec__40591,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40597,p__40598){
var map__40846 = p__40597;
var map__40846__$1 = ((((!((map__40846 == null)))?((((map__40846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40846):map__40846);
var opts = map__40846__$1;
var before_jsload = cljs.core.get.call(null,map__40846__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40846__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40846__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40847 = p__40598;
var map__40847__$1 = ((((!((map__40847 == null)))?((((map__40847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40847):map__40847);
var msg = map__40847__$1;
var files = cljs.core.get.call(null,map__40847__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40847__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40847__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28056__auto__ = (function (){var switch__27943__auto__ = ((function (c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41001){
var state_val_41002 = (state_41001[(1)]);
if((state_val_41002 === (7))){
var inst_40864 = (state_41001[(7)]);
var inst_40861 = (state_41001[(8)]);
var inst_40863 = (state_41001[(9)]);
var inst_40862 = (state_41001[(10)]);
var inst_40869 = cljs.core._nth.call(null,inst_40862,inst_40864);
var inst_40870 = figwheel.client.file_reloading.eval_body.call(null,inst_40869,opts);
var inst_40871 = (inst_40864 + (1));
var tmp41003 = inst_40861;
var tmp41004 = inst_40863;
var tmp41005 = inst_40862;
var inst_40861__$1 = tmp41003;
var inst_40862__$1 = tmp41005;
var inst_40863__$1 = tmp41004;
var inst_40864__$1 = inst_40871;
var state_41001__$1 = (function (){var statearr_41006 = state_41001;
(statearr_41006[(7)] = inst_40864__$1);

(statearr_41006[(8)] = inst_40861__$1);

(statearr_41006[(11)] = inst_40870);

(statearr_41006[(9)] = inst_40863__$1);

(statearr_41006[(10)] = inst_40862__$1);

return statearr_41006;
})();
var statearr_41007_41093 = state_41001__$1;
(statearr_41007_41093[(2)] = null);

(statearr_41007_41093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (20))){
var inst_40904 = (state_41001[(12)]);
var inst_40912 = figwheel.client.file_reloading.sort_files.call(null,inst_40904);
var state_41001__$1 = state_41001;
var statearr_41008_41094 = state_41001__$1;
(statearr_41008_41094[(2)] = inst_40912);

(statearr_41008_41094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (27))){
var state_41001__$1 = state_41001;
var statearr_41009_41095 = state_41001__$1;
(statearr_41009_41095[(2)] = null);

(statearr_41009_41095[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (1))){
var inst_40853 = (state_41001[(13)]);
var inst_40850 = before_jsload.call(null,files);
var inst_40851 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40852 = (function (){return ((function (inst_40853,inst_40850,inst_40851,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40594_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40594_SHARP_);
});
;})(inst_40853,inst_40850,inst_40851,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40853__$1 = cljs.core.filter.call(null,inst_40852,files);
var inst_40854 = cljs.core.not_empty.call(null,inst_40853__$1);
var state_41001__$1 = (function (){var statearr_41010 = state_41001;
(statearr_41010[(14)] = inst_40851);

(statearr_41010[(13)] = inst_40853__$1);

(statearr_41010[(15)] = inst_40850);

return statearr_41010;
})();
if(cljs.core.truth_(inst_40854)){
var statearr_41011_41096 = state_41001__$1;
(statearr_41011_41096[(1)] = (2));

} else {
var statearr_41012_41097 = state_41001__$1;
(statearr_41012_41097[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (24))){
var state_41001__$1 = state_41001;
var statearr_41013_41098 = state_41001__$1;
(statearr_41013_41098[(2)] = null);

(statearr_41013_41098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (39))){
var inst_40954 = (state_41001[(16)]);
var state_41001__$1 = state_41001;
var statearr_41014_41099 = state_41001__$1;
(statearr_41014_41099[(2)] = inst_40954);

(statearr_41014_41099[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (46))){
var inst_40996 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
var statearr_41015_41100 = state_41001__$1;
(statearr_41015_41100[(2)] = inst_40996);

(statearr_41015_41100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (4))){
var inst_40898 = (state_41001[(2)]);
var inst_40899 = cljs.core.List.EMPTY;
var inst_40900 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40899);
var inst_40901 = (function (){return ((function (inst_40898,inst_40899,inst_40900,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40595_SHARP_){
var and__24876__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40595_SHARP_);
if(cljs.core.truth_(and__24876__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40595_SHARP_));
} else {
return and__24876__auto__;
}
});
;})(inst_40898,inst_40899,inst_40900,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40902 = cljs.core.filter.call(null,inst_40901,files);
var inst_40903 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40904 = cljs.core.concat.call(null,inst_40902,inst_40903);
var state_41001__$1 = (function (){var statearr_41016 = state_41001;
(statearr_41016[(17)] = inst_40900);

(statearr_41016[(18)] = inst_40898);

(statearr_41016[(12)] = inst_40904);

return statearr_41016;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41017_41101 = state_41001__$1;
(statearr_41017_41101[(1)] = (16));

} else {
var statearr_41018_41102 = state_41001__$1;
(statearr_41018_41102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (15))){
var inst_40888 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
var statearr_41019_41103 = state_41001__$1;
(statearr_41019_41103[(2)] = inst_40888);

(statearr_41019_41103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (21))){
var inst_40914 = (state_41001[(19)]);
var inst_40914__$1 = (state_41001[(2)]);
var inst_40915 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40914__$1);
var state_41001__$1 = (function (){var statearr_41020 = state_41001;
(statearr_41020[(19)] = inst_40914__$1);

return statearr_41020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41001__$1,(22),inst_40915);
} else {
if((state_val_41002 === (31))){
var inst_40999 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41001__$1,inst_40999);
} else {
if((state_val_41002 === (32))){
var inst_40954 = (state_41001[(16)]);
var inst_40959 = inst_40954.cljs$lang$protocol_mask$partition0$;
var inst_40960 = (inst_40959 & (64));
var inst_40961 = inst_40954.cljs$core$ISeq$;
var inst_40962 = (cljs.core.PROTOCOL_SENTINEL === inst_40961);
var inst_40963 = (inst_40960) || (inst_40962);
var state_41001__$1 = state_41001;
if(cljs.core.truth_(inst_40963)){
var statearr_41021_41104 = state_41001__$1;
(statearr_41021_41104[(1)] = (35));

} else {
var statearr_41022_41105 = state_41001__$1;
(statearr_41022_41105[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (40))){
var inst_40976 = (state_41001[(20)]);
var inst_40975 = (state_41001[(2)]);
var inst_40976__$1 = cljs.core.get.call(null,inst_40975,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40977 = cljs.core.get.call(null,inst_40975,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40978 = cljs.core.not_empty.call(null,inst_40976__$1);
var state_41001__$1 = (function (){var statearr_41023 = state_41001;
(statearr_41023[(20)] = inst_40976__$1);

(statearr_41023[(21)] = inst_40977);

return statearr_41023;
})();
if(cljs.core.truth_(inst_40978)){
var statearr_41024_41106 = state_41001__$1;
(statearr_41024_41106[(1)] = (41));

} else {
var statearr_41025_41107 = state_41001__$1;
(statearr_41025_41107[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (33))){
var state_41001__$1 = state_41001;
var statearr_41026_41108 = state_41001__$1;
(statearr_41026_41108[(2)] = false);

(statearr_41026_41108[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (13))){
var inst_40874 = (state_41001[(22)]);
var inst_40878 = cljs.core.chunk_first.call(null,inst_40874);
var inst_40879 = cljs.core.chunk_rest.call(null,inst_40874);
var inst_40880 = cljs.core.count.call(null,inst_40878);
var inst_40861 = inst_40879;
var inst_40862 = inst_40878;
var inst_40863 = inst_40880;
var inst_40864 = (0);
var state_41001__$1 = (function (){var statearr_41027 = state_41001;
(statearr_41027[(7)] = inst_40864);

(statearr_41027[(8)] = inst_40861);

(statearr_41027[(9)] = inst_40863);

(statearr_41027[(10)] = inst_40862);

return statearr_41027;
})();
var statearr_41028_41109 = state_41001__$1;
(statearr_41028_41109[(2)] = null);

(statearr_41028_41109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (22))){
var inst_40922 = (state_41001[(23)]);
var inst_40914 = (state_41001[(19)]);
var inst_40917 = (state_41001[(24)]);
var inst_40918 = (state_41001[(25)]);
var inst_40917__$1 = (state_41001[(2)]);
var inst_40918__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40917__$1);
var inst_40919 = (function (){var all_files = inst_40914;
var res_SINGLEQUOTE_ = inst_40917__$1;
var res = inst_40918__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40922,inst_40914,inst_40917,inst_40918,inst_40917__$1,inst_40918__$1,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40596_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40596_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40922,inst_40914,inst_40917,inst_40918,inst_40917__$1,inst_40918__$1,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40920 = cljs.core.filter.call(null,inst_40919,inst_40917__$1);
var inst_40921 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40922__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40921);
var inst_40923 = cljs.core.not_empty.call(null,inst_40922__$1);
var state_41001__$1 = (function (){var statearr_41029 = state_41001;
(statearr_41029[(23)] = inst_40922__$1);

(statearr_41029[(24)] = inst_40917__$1);

(statearr_41029[(25)] = inst_40918__$1);

(statearr_41029[(26)] = inst_40920);

return statearr_41029;
})();
if(cljs.core.truth_(inst_40923)){
var statearr_41030_41110 = state_41001__$1;
(statearr_41030_41110[(1)] = (23));

} else {
var statearr_41031_41111 = state_41001__$1;
(statearr_41031_41111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (36))){
var state_41001__$1 = state_41001;
var statearr_41032_41112 = state_41001__$1;
(statearr_41032_41112[(2)] = false);

(statearr_41032_41112[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (41))){
var inst_40976 = (state_41001[(20)]);
var inst_40980 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40981 = cljs.core.map.call(null,inst_40980,inst_40976);
var inst_40982 = cljs.core.pr_str.call(null,inst_40981);
var inst_40983 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40982)].join('');
var inst_40984 = figwheel.client.utils.log.call(null,inst_40983);
var state_41001__$1 = state_41001;
var statearr_41033_41113 = state_41001__$1;
(statearr_41033_41113[(2)] = inst_40984);

(statearr_41033_41113[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (43))){
var inst_40977 = (state_41001[(21)]);
var inst_40987 = (state_41001[(2)]);
var inst_40988 = cljs.core.not_empty.call(null,inst_40977);
var state_41001__$1 = (function (){var statearr_41034 = state_41001;
(statearr_41034[(27)] = inst_40987);

return statearr_41034;
})();
if(cljs.core.truth_(inst_40988)){
var statearr_41035_41114 = state_41001__$1;
(statearr_41035_41114[(1)] = (44));

} else {
var statearr_41036_41115 = state_41001__$1;
(statearr_41036_41115[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (29))){
var inst_40922 = (state_41001[(23)]);
var inst_40914 = (state_41001[(19)]);
var inst_40917 = (state_41001[(24)]);
var inst_40918 = (state_41001[(25)]);
var inst_40920 = (state_41001[(26)]);
var inst_40954 = (state_41001[(16)]);
var inst_40950 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40953 = (function (){var all_files = inst_40914;
var res_SINGLEQUOTE_ = inst_40917;
var res = inst_40918;
var files_not_loaded = inst_40920;
var dependencies_that_loaded = inst_40922;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40922,inst_40914,inst_40917,inst_40918,inst_40920,inst_40954,inst_40950,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40952){
var map__41037 = p__40952;
var map__41037__$1 = ((((!((map__41037 == null)))?((((map__41037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41037):map__41037);
var namespace = cljs.core.get.call(null,map__41037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40922,inst_40914,inst_40917,inst_40918,inst_40920,inst_40954,inst_40950,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40954__$1 = cljs.core.group_by.call(null,inst_40953,inst_40920);
var inst_40956 = (inst_40954__$1 == null);
var inst_40957 = cljs.core.not.call(null,inst_40956);
var state_41001__$1 = (function (){var statearr_41039 = state_41001;
(statearr_41039[(28)] = inst_40950);

(statearr_41039[(16)] = inst_40954__$1);

return statearr_41039;
})();
if(inst_40957){
var statearr_41040_41116 = state_41001__$1;
(statearr_41040_41116[(1)] = (32));

} else {
var statearr_41041_41117 = state_41001__$1;
(statearr_41041_41117[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (44))){
var inst_40977 = (state_41001[(21)]);
var inst_40990 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40977);
var inst_40991 = cljs.core.pr_str.call(null,inst_40990);
var inst_40992 = [cljs.core.str("not required: "),cljs.core.str(inst_40991)].join('');
var inst_40993 = figwheel.client.utils.log.call(null,inst_40992);
var state_41001__$1 = state_41001;
var statearr_41042_41118 = state_41001__$1;
(statearr_41042_41118[(2)] = inst_40993);

(statearr_41042_41118[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (6))){
var inst_40895 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
var statearr_41043_41119 = state_41001__$1;
(statearr_41043_41119[(2)] = inst_40895);

(statearr_41043_41119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (28))){
var inst_40920 = (state_41001[(26)]);
var inst_40947 = (state_41001[(2)]);
var inst_40948 = cljs.core.not_empty.call(null,inst_40920);
var state_41001__$1 = (function (){var statearr_41044 = state_41001;
(statearr_41044[(29)] = inst_40947);

return statearr_41044;
})();
if(cljs.core.truth_(inst_40948)){
var statearr_41045_41120 = state_41001__$1;
(statearr_41045_41120[(1)] = (29));

} else {
var statearr_41046_41121 = state_41001__$1;
(statearr_41046_41121[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (25))){
var inst_40918 = (state_41001[(25)]);
var inst_40934 = (state_41001[(2)]);
var inst_40935 = cljs.core.not_empty.call(null,inst_40918);
var state_41001__$1 = (function (){var statearr_41047 = state_41001;
(statearr_41047[(30)] = inst_40934);

return statearr_41047;
})();
if(cljs.core.truth_(inst_40935)){
var statearr_41048_41122 = state_41001__$1;
(statearr_41048_41122[(1)] = (26));

} else {
var statearr_41049_41123 = state_41001__$1;
(statearr_41049_41123[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (34))){
var inst_40970 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
if(cljs.core.truth_(inst_40970)){
var statearr_41050_41124 = state_41001__$1;
(statearr_41050_41124[(1)] = (38));

} else {
var statearr_41051_41125 = state_41001__$1;
(statearr_41051_41125[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (17))){
var state_41001__$1 = state_41001;
var statearr_41052_41126 = state_41001__$1;
(statearr_41052_41126[(2)] = recompile_dependents);

(statearr_41052_41126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (3))){
var state_41001__$1 = state_41001;
var statearr_41053_41127 = state_41001__$1;
(statearr_41053_41127[(2)] = null);

(statearr_41053_41127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (12))){
var inst_40891 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
var statearr_41054_41128 = state_41001__$1;
(statearr_41054_41128[(2)] = inst_40891);

(statearr_41054_41128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (2))){
var inst_40853 = (state_41001[(13)]);
var inst_40860 = cljs.core.seq.call(null,inst_40853);
var inst_40861 = inst_40860;
var inst_40862 = null;
var inst_40863 = (0);
var inst_40864 = (0);
var state_41001__$1 = (function (){var statearr_41055 = state_41001;
(statearr_41055[(7)] = inst_40864);

(statearr_41055[(8)] = inst_40861);

(statearr_41055[(9)] = inst_40863);

(statearr_41055[(10)] = inst_40862);

return statearr_41055;
})();
var statearr_41056_41129 = state_41001__$1;
(statearr_41056_41129[(2)] = null);

(statearr_41056_41129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (23))){
var inst_40922 = (state_41001[(23)]);
var inst_40914 = (state_41001[(19)]);
var inst_40917 = (state_41001[(24)]);
var inst_40918 = (state_41001[(25)]);
var inst_40920 = (state_41001[(26)]);
var inst_40925 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40927 = (function (){var all_files = inst_40914;
var res_SINGLEQUOTE_ = inst_40917;
var res = inst_40918;
var files_not_loaded = inst_40920;
var dependencies_that_loaded = inst_40922;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40922,inst_40914,inst_40917,inst_40918,inst_40920,inst_40925,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40926){
var map__41057 = p__40926;
var map__41057__$1 = ((((!((map__41057 == null)))?((((map__41057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41057):map__41057);
var request_url = cljs.core.get.call(null,map__41057__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40922,inst_40914,inst_40917,inst_40918,inst_40920,inst_40925,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40928 = cljs.core.reverse.call(null,inst_40922);
var inst_40929 = cljs.core.map.call(null,inst_40927,inst_40928);
var inst_40930 = cljs.core.pr_str.call(null,inst_40929);
var inst_40931 = figwheel.client.utils.log.call(null,inst_40930);
var state_41001__$1 = (function (){var statearr_41059 = state_41001;
(statearr_41059[(31)] = inst_40925);

return statearr_41059;
})();
var statearr_41060_41130 = state_41001__$1;
(statearr_41060_41130[(2)] = inst_40931);

(statearr_41060_41130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (35))){
var state_41001__$1 = state_41001;
var statearr_41061_41131 = state_41001__$1;
(statearr_41061_41131[(2)] = true);

(statearr_41061_41131[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (19))){
var inst_40904 = (state_41001[(12)]);
var inst_40910 = figwheel.client.file_reloading.expand_files.call(null,inst_40904);
var state_41001__$1 = state_41001;
var statearr_41062_41132 = state_41001__$1;
(statearr_41062_41132[(2)] = inst_40910);

(statearr_41062_41132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (11))){
var state_41001__$1 = state_41001;
var statearr_41063_41133 = state_41001__$1;
(statearr_41063_41133[(2)] = null);

(statearr_41063_41133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (9))){
var inst_40893 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
var statearr_41064_41134 = state_41001__$1;
(statearr_41064_41134[(2)] = inst_40893);

(statearr_41064_41134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (5))){
var inst_40864 = (state_41001[(7)]);
var inst_40863 = (state_41001[(9)]);
var inst_40866 = (inst_40864 < inst_40863);
var inst_40867 = inst_40866;
var state_41001__$1 = state_41001;
if(cljs.core.truth_(inst_40867)){
var statearr_41065_41135 = state_41001__$1;
(statearr_41065_41135[(1)] = (7));

} else {
var statearr_41066_41136 = state_41001__$1;
(statearr_41066_41136[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (14))){
var inst_40874 = (state_41001[(22)]);
var inst_40883 = cljs.core.first.call(null,inst_40874);
var inst_40884 = figwheel.client.file_reloading.eval_body.call(null,inst_40883,opts);
var inst_40885 = cljs.core.next.call(null,inst_40874);
var inst_40861 = inst_40885;
var inst_40862 = null;
var inst_40863 = (0);
var inst_40864 = (0);
var state_41001__$1 = (function (){var statearr_41067 = state_41001;
(statearr_41067[(7)] = inst_40864);

(statearr_41067[(8)] = inst_40861);

(statearr_41067[(9)] = inst_40863);

(statearr_41067[(10)] = inst_40862);

(statearr_41067[(32)] = inst_40884);

return statearr_41067;
})();
var statearr_41068_41137 = state_41001__$1;
(statearr_41068_41137[(2)] = null);

(statearr_41068_41137[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (45))){
var state_41001__$1 = state_41001;
var statearr_41069_41138 = state_41001__$1;
(statearr_41069_41138[(2)] = null);

(statearr_41069_41138[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (26))){
var inst_40922 = (state_41001[(23)]);
var inst_40914 = (state_41001[(19)]);
var inst_40917 = (state_41001[(24)]);
var inst_40918 = (state_41001[(25)]);
var inst_40920 = (state_41001[(26)]);
var inst_40937 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40939 = (function (){var all_files = inst_40914;
var res_SINGLEQUOTE_ = inst_40917;
var res = inst_40918;
var files_not_loaded = inst_40920;
var dependencies_that_loaded = inst_40922;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40922,inst_40914,inst_40917,inst_40918,inst_40920,inst_40937,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40938){
var map__41070 = p__40938;
var map__41070__$1 = ((((!((map__41070 == null)))?((((map__41070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41070):map__41070);
var namespace = cljs.core.get.call(null,map__41070__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41070__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40922,inst_40914,inst_40917,inst_40918,inst_40920,inst_40937,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40940 = cljs.core.map.call(null,inst_40939,inst_40918);
var inst_40941 = cljs.core.pr_str.call(null,inst_40940);
var inst_40942 = figwheel.client.utils.log.call(null,inst_40941);
var inst_40943 = (function (){var all_files = inst_40914;
var res_SINGLEQUOTE_ = inst_40917;
var res = inst_40918;
var files_not_loaded = inst_40920;
var dependencies_that_loaded = inst_40922;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40922,inst_40914,inst_40917,inst_40918,inst_40920,inst_40937,inst_40939,inst_40940,inst_40941,inst_40942,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40922,inst_40914,inst_40917,inst_40918,inst_40920,inst_40937,inst_40939,inst_40940,inst_40941,inst_40942,state_val_41002,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40944 = setTimeout(inst_40943,(10));
var state_41001__$1 = (function (){var statearr_41072 = state_41001;
(statearr_41072[(33)] = inst_40942);

(statearr_41072[(34)] = inst_40937);

return statearr_41072;
})();
var statearr_41073_41139 = state_41001__$1;
(statearr_41073_41139[(2)] = inst_40944);

(statearr_41073_41139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (16))){
var state_41001__$1 = state_41001;
var statearr_41074_41140 = state_41001__$1;
(statearr_41074_41140[(2)] = reload_dependents);

(statearr_41074_41140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (38))){
var inst_40954 = (state_41001[(16)]);
var inst_40972 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40954);
var state_41001__$1 = state_41001;
var statearr_41075_41141 = state_41001__$1;
(statearr_41075_41141[(2)] = inst_40972);

(statearr_41075_41141[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (30))){
var state_41001__$1 = state_41001;
var statearr_41076_41142 = state_41001__$1;
(statearr_41076_41142[(2)] = null);

(statearr_41076_41142[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (10))){
var inst_40874 = (state_41001[(22)]);
var inst_40876 = cljs.core.chunked_seq_QMARK_.call(null,inst_40874);
var state_41001__$1 = state_41001;
if(inst_40876){
var statearr_41077_41143 = state_41001__$1;
(statearr_41077_41143[(1)] = (13));

} else {
var statearr_41078_41144 = state_41001__$1;
(statearr_41078_41144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (18))){
var inst_40908 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
if(cljs.core.truth_(inst_40908)){
var statearr_41079_41145 = state_41001__$1;
(statearr_41079_41145[(1)] = (19));

} else {
var statearr_41080_41146 = state_41001__$1;
(statearr_41080_41146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (42))){
var state_41001__$1 = state_41001;
var statearr_41081_41147 = state_41001__$1;
(statearr_41081_41147[(2)] = null);

(statearr_41081_41147[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (37))){
var inst_40967 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
var statearr_41082_41148 = state_41001__$1;
(statearr_41082_41148[(2)] = inst_40967);

(statearr_41082_41148[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (8))){
var inst_40861 = (state_41001[(8)]);
var inst_40874 = (state_41001[(22)]);
var inst_40874__$1 = cljs.core.seq.call(null,inst_40861);
var state_41001__$1 = (function (){var statearr_41083 = state_41001;
(statearr_41083[(22)] = inst_40874__$1);

return statearr_41083;
})();
if(inst_40874__$1){
var statearr_41084_41149 = state_41001__$1;
(statearr_41084_41149[(1)] = (10));

} else {
var statearr_41085_41150 = state_41001__$1;
(statearr_41085_41150[(1)] = (11));

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
});})(c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27943__auto__,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto____0 = (function (){
var statearr_41089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41089[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto__);

(statearr_41089[(1)] = (1));

return statearr_41089;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto____1 = (function (state_41001){
while(true){
var ret_value__27945__auto__ = (function (){try{while(true){
var result__27946__auto__ = switch__27943__auto__.call(null,state_41001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27946__auto__;
}
break;
}
}catch (e41090){if((e41090 instanceof Object)){
var ex__27947__auto__ = e41090;
var statearr_41091_41151 = state_41001;
(statearr_41091_41151[(5)] = ex__27947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41152 = state_41001;
state_41001 = G__41152;
continue;
} else {
return ret_value__27945__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto__ = function(state_41001){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto____1.call(this,state_41001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27944__auto__;
})()
;})(switch__27943__auto__,c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28057__auto__ = (function (){var statearr_41092 = f__28056__auto__.call(null);
(statearr_41092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28055__auto__);

return statearr_41092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28057__auto__);
});})(c__28055__auto__,map__40846,map__40846__$1,opts,before_jsload,on_jsload,reload_dependents,map__40847,map__40847__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28055__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41155,link){
var map__41158 = p__41155;
var map__41158__$1 = ((((!((map__41158 == null)))?((((map__41158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41158):map__41158);
var file = cljs.core.get.call(null,map__41158__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41158,map__41158__$1,file){
return (function (p1__41153_SHARP_,p2__41154_SHARP_){
if(cljs.core._EQ_.call(null,p1__41153_SHARP_,p2__41154_SHARP_)){
return p1__41153_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41158,map__41158__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41164){
var map__41165 = p__41164;
var map__41165__$1 = ((((!((map__41165 == null)))?((((map__41165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41165):map__41165);
var match_length = cljs.core.get.call(null,map__41165__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41165__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41160_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41160_SHARP_);
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
var args41167 = [];
var len__25996__auto___41170 = arguments.length;
var i__25997__auto___41171 = (0);
while(true){
if((i__25997__auto___41171 < len__25996__auto___41170)){
args41167.push((arguments[i__25997__auto___41171]));

var G__41172 = (i__25997__auto___41171 + (1));
i__25997__auto___41171 = G__41172;
continue;
} else {
}
break;
}

var G__41169 = args41167.length;
switch (G__41169) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41167.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41174_SHARP_,p2__41175_SHARP_){
return cljs.core.assoc.call(null,p1__41174_SHARP_,cljs.core.get.call(null,p2__41175_SHARP_,key),p2__41175_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41176){
var map__41179 = p__41176;
var map__41179__$1 = ((((!((map__41179 == null)))?((((map__41179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41179):map__41179);
var f_data = map__41179__$1;
var file = cljs.core.get.call(null,map__41179__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41181,p__41182){
var map__41191 = p__41181;
var map__41191__$1 = ((((!((map__41191 == null)))?((((map__41191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41191):map__41191);
var opts = map__41191__$1;
var on_cssload = cljs.core.get.call(null,map__41191__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41192 = p__41182;
var map__41192__$1 = ((((!((map__41192 == null)))?((((map__41192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41192):map__41192);
var files_msg = map__41192__$1;
var files = cljs.core.get.call(null,map__41192__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41195_41199 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__41196_41200 = null;
var count__41197_41201 = (0);
var i__41198_41202 = (0);
while(true){
if((i__41198_41202 < count__41197_41201)){
var f_41203 = cljs.core._nth.call(null,chunk__41196_41200,i__41198_41202);
figwheel.client.file_reloading.reload_css_file.call(null,f_41203);

var G__41204 = seq__41195_41199;
var G__41205 = chunk__41196_41200;
var G__41206 = count__41197_41201;
var G__41207 = (i__41198_41202 + (1));
seq__41195_41199 = G__41204;
chunk__41196_41200 = G__41205;
count__41197_41201 = G__41206;
i__41198_41202 = G__41207;
continue;
} else {
var temp__4657__auto___41208 = cljs.core.seq.call(null,seq__41195_41199);
if(temp__4657__auto___41208){
var seq__41195_41209__$1 = temp__4657__auto___41208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41195_41209__$1)){
var c__25702__auto___41210 = cljs.core.chunk_first.call(null,seq__41195_41209__$1);
var G__41211 = cljs.core.chunk_rest.call(null,seq__41195_41209__$1);
var G__41212 = c__25702__auto___41210;
var G__41213 = cljs.core.count.call(null,c__25702__auto___41210);
var G__41214 = (0);
seq__41195_41199 = G__41211;
chunk__41196_41200 = G__41212;
count__41197_41201 = G__41213;
i__41198_41202 = G__41214;
continue;
} else {
var f_41215 = cljs.core.first.call(null,seq__41195_41209__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41215);

var G__41216 = cljs.core.next.call(null,seq__41195_41209__$1);
var G__41217 = null;
var G__41218 = (0);
var G__41219 = (0);
seq__41195_41199 = G__41216;
chunk__41196_41200 = G__41217;
count__41197_41201 = G__41218;
i__41198_41202 = G__41219;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41191,map__41191__$1,opts,on_cssload,map__41192,map__41192__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__41191,map__41191__$1,opts,on_cssload,map__41192,map__41192__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1480194646995