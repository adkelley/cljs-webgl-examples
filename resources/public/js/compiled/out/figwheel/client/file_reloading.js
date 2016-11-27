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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30080_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30080_SHARP_));
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
var seq__30085 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30086 = null;
var count__30087 = (0);
var i__30088 = (0);
while(true){
if((i__30088 < count__30087)){
var n = cljs.core._nth.call(null,chunk__30086,i__30088);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30089 = seq__30085;
var G__30090 = chunk__30086;
var G__30091 = count__30087;
var G__30092 = (i__30088 + (1));
seq__30085 = G__30089;
chunk__30086 = G__30090;
count__30087 = G__30091;
i__30088 = G__30092;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30085);
if(temp__4657__auto__){
var seq__30085__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30085__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__30085__$1);
var G__30093 = cljs.core.chunk_rest.call(null,seq__30085__$1);
var G__30094 = c__25702__auto__;
var G__30095 = cljs.core.count.call(null,c__25702__auto__);
var G__30096 = (0);
seq__30085 = G__30093;
chunk__30086 = G__30094;
count__30087 = G__30095;
i__30088 = G__30096;
continue;
} else {
var n = cljs.core.first.call(null,seq__30085__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30097 = cljs.core.next.call(null,seq__30085__$1);
var G__30098 = null;
var G__30099 = (0);
var G__30100 = (0);
seq__30085 = G__30097;
chunk__30086 = G__30098;
count__30087 = G__30099;
i__30088 = G__30100;
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

var seq__30151_30162 = cljs.core.seq.call(null,deps);
var chunk__30152_30163 = null;
var count__30153_30164 = (0);
var i__30154_30165 = (0);
while(true){
if((i__30154_30165 < count__30153_30164)){
var dep_30166 = cljs.core._nth.call(null,chunk__30152_30163,i__30154_30165);
topo_sort_helper_STAR_.call(null,dep_30166,(depth + (1)),state);

var G__30167 = seq__30151_30162;
var G__30168 = chunk__30152_30163;
var G__30169 = count__30153_30164;
var G__30170 = (i__30154_30165 + (1));
seq__30151_30162 = G__30167;
chunk__30152_30163 = G__30168;
count__30153_30164 = G__30169;
i__30154_30165 = G__30170;
continue;
} else {
var temp__4657__auto___30171 = cljs.core.seq.call(null,seq__30151_30162);
if(temp__4657__auto___30171){
var seq__30151_30172__$1 = temp__4657__auto___30171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30151_30172__$1)){
var c__25702__auto___30173 = cljs.core.chunk_first.call(null,seq__30151_30172__$1);
var G__30174 = cljs.core.chunk_rest.call(null,seq__30151_30172__$1);
var G__30175 = c__25702__auto___30173;
var G__30176 = cljs.core.count.call(null,c__25702__auto___30173);
var G__30177 = (0);
seq__30151_30162 = G__30174;
chunk__30152_30163 = G__30175;
count__30153_30164 = G__30176;
i__30154_30165 = G__30177;
continue;
} else {
var dep_30178 = cljs.core.first.call(null,seq__30151_30172__$1);
topo_sort_helper_STAR_.call(null,dep_30178,(depth + (1)),state);

var G__30179 = cljs.core.next.call(null,seq__30151_30172__$1);
var G__30180 = null;
var G__30181 = (0);
var G__30182 = (0);
seq__30151_30162 = G__30179;
chunk__30152_30163 = G__30180;
count__30153_30164 = G__30181;
i__30154_30165 = G__30182;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30155){
var vec__30159 = p__30155;
var seq__30160 = cljs.core.seq.call(null,vec__30159);
var first__30161 = cljs.core.first.call(null,seq__30160);
var seq__30160__$1 = cljs.core.next.call(null,seq__30160);
var x = first__30161;
var xs = seq__30160__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30159,seq__30160,first__30161,seq__30160__$1,x,xs,get_deps__$1){
return (function (p1__30101_SHARP_){
return clojure.set.difference.call(null,p1__30101_SHARP_,x);
});})(vec__30159,seq__30160,first__30161,seq__30160__$1,x,xs,get_deps__$1))
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
var seq__30195 = cljs.core.seq.call(null,provides);
var chunk__30196 = null;
var count__30197 = (0);
var i__30198 = (0);
while(true){
if((i__30198 < count__30197)){
var prov = cljs.core._nth.call(null,chunk__30196,i__30198);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30199_30207 = cljs.core.seq.call(null,requires);
var chunk__30200_30208 = null;
var count__30201_30209 = (0);
var i__30202_30210 = (0);
while(true){
if((i__30202_30210 < count__30201_30209)){
var req_30211 = cljs.core._nth.call(null,chunk__30200_30208,i__30202_30210);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30211,prov);

var G__30212 = seq__30199_30207;
var G__30213 = chunk__30200_30208;
var G__30214 = count__30201_30209;
var G__30215 = (i__30202_30210 + (1));
seq__30199_30207 = G__30212;
chunk__30200_30208 = G__30213;
count__30201_30209 = G__30214;
i__30202_30210 = G__30215;
continue;
} else {
var temp__4657__auto___30216 = cljs.core.seq.call(null,seq__30199_30207);
if(temp__4657__auto___30216){
var seq__30199_30217__$1 = temp__4657__auto___30216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30199_30217__$1)){
var c__25702__auto___30218 = cljs.core.chunk_first.call(null,seq__30199_30217__$1);
var G__30219 = cljs.core.chunk_rest.call(null,seq__30199_30217__$1);
var G__30220 = c__25702__auto___30218;
var G__30221 = cljs.core.count.call(null,c__25702__auto___30218);
var G__30222 = (0);
seq__30199_30207 = G__30219;
chunk__30200_30208 = G__30220;
count__30201_30209 = G__30221;
i__30202_30210 = G__30222;
continue;
} else {
var req_30223 = cljs.core.first.call(null,seq__30199_30217__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30223,prov);

var G__30224 = cljs.core.next.call(null,seq__30199_30217__$1);
var G__30225 = null;
var G__30226 = (0);
var G__30227 = (0);
seq__30199_30207 = G__30224;
chunk__30200_30208 = G__30225;
count__30201_30209 = G__30226;
i__30202_30210 = G__30227;
continue;
}
} else {
}
}
break;
}

var G__30228 = seq__30195;
var G__30229 = chunk__30196;
var G__30230 = count__30197;
var G__30231 = (i__30198 + (1));
seq__30195 = G__30228;
chunk__30196 = G__30229;
count__30197 = G__30230;
i__30198 = G__30231;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30195);
if(temp__4657__auto__){
var seq__30195__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30195__$1)){
var c__25702__auto__ = cljs.core.chunk_first.call(null,seq__30195__$1);
var G__30232 = cljs.core.chunk_rest.call(null,seq__30195__$1);
var G__30233 = c__25702__auto__;
var G__30234 = cljs.core.count.call(null,c__25702__auto__);
var G__30235 = (0);
seq__30195 = G__30232;
chunk__30196 = G__30233;
count__30197 = G__30234;
i__30198 = G__30235;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30195__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30203_30236 = cljs.core.seq.call(null,requires);
var chunk__30204_30237 = null;
var count__30205_30238 = (0);
var i__30206_30239 = (0);
while(true){
if((i__30206_30239 < count__30205_30238)){
var req_30240 = cljs.core._nth.call(null,chunk__30204_30237,i__30206_30239);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30240,prov);

var G__30241 = seq__30203_30236;
var G__30242 = chunk__30204_30237;
var G__30243 = count__30205_30238;
var G__30244 = (i__30206_30239 + (1));
seq__30203_30236 = G__30241;
chunk__30204_30237 = G__30242;
count__30205_30238 = G__30243;
i__30206_30239 = G__30244;
continue;
} else {
var temp__4657__auto___30245__$1 = cljs.core.seq.call(null,seq__30203_30236);
if(temp__4657__auto___30245__$1){
var seq__30203_30246__$1 = temp__4657__auto___30245__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30203_30246__$1)){
var c__25702__auto___30247 = cljs.core.chunk_first.call(null,seq__30203_30246__$1);
var G__30248 = cljs.core.chunk_rest.call(null,seq__30203_30246__$1);
var G__30249 = c__25702__auto___30247;
var G__30250 = cljs.core.count.call(null,c__25702__auto___30247);
var G__30251 = (0);
seq__30203_30236 = G__30248;
chunk__30204_30237 = G__30249;
count__30205_30238 = G__30250;
i__30206_30239 = G__30251;
continue;
} else {
var req_30252 = cljs.core.first.call(null,seq__30203_30246__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30252,prov);

var G__30253 = cljs.core.next.call(null,seq__30203_30246__$1);
var G__30254 = null;
var G__30255 = (0);
var G__30256 = (0);
seq__30203_30236 = G__30253;
chunk__30204_30237 = G__30254;
count__30205_30238 = G__30255;
i__30206_30239 = G__30256;
continue;
}
} else {
}
}
break;
}

var G__30257 = cljs.core.next.call(null,seq__30195__$1);
var G__30258 = null;
var G__30259 = (0);
var G__30260 = (0);
seq__30195 = G__30257;
chunk__30196 = G__30258;
count__30197 = G__30259;
i__30198 = G__30260;
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
var seq__30265_30269 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30266_30270 = null;
var count__30267_30271 = (0);
var i__30268_30272 = (0);
while(true){
if((i__30268_30272 < count__30267_30271)){
var ns_30273 = cljs.core._nth.call(null,chunk__30266_30270,i__30268_30272);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30273);

var G__30274 = seq__30265_30269;
var G__30275 = chunk__30266_30270;
var G__30276 = count__30267_30271;
var G__30277 = (i__30268_30272 + (1));
seq__30265_30269 = G__30274;
chunk__30266_30270 = G__30275;
count__30267_30271 = G__30276;
i__30268_30272 = G__30277;
continue;
} else {
var temp__4657__auto___30278 = cljs.core.seq.call(null,seq__30265_30269);
if(temp__4657__auto___30278){
var seq__30265_30279__$1 = temp__4657__auto___30278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30265_30279__$1)){
var c__25702__auto___30280 = cljs.core.chunk_first.call(null,seq__30265_30279__$1);
var G__30281 = cljs.core.chunk_rest.call(null,seq__30265_30279__$1);
var G__30282 = c__25702__auto___30280;
var G__30283 = cljs.core.count.call(null,c__25702__auto___30280);
var G__30284 = (0);
seq__30265_30269 = G__30281;
chunk__30266_30270 = G__30282;
count__30267_30271 = G__30283;
i__30268_30272 = G__30284;
continue;
} else {
var ns_30285 = cljs.core.first.call(null,seq__30265_30279__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30285);

var G__30286 = cljs.core.next.call(null,seq__30265_30279__$1);
var G__30287 = null;
var G__30288 = (0);
var G__30289 = (0);
seq__30265_30269 = G__30286;
chunk__30266_30270 = G__30287;
count__30267_30271 = G__30288;
i__30268_30272 = G__30289;
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
var G__30290__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30291__i = 0, G__30291__a = new Array(arguments.length -  0);
while (G__30291__i < G__30291__a.length) {G__30291__a[G__30291__i] = arguments[G__30291__i + 0]; ++G__30291__i;}
  args = new cljs.core.IndexedSeq(G__30291__a,0);
} 
return G__30290__delegate.call(this,args);};
G__30290.cljs$lang$maxFixedArity = 0;
G__30290.cljs$lang$applyTo = (function (arglist__30292){
var args = cljs.core.seq(arglist__30292);
return G__30290__delegate(args);
});
G__30290.cljs$core$IFn$_invoke$arity$variadic = G__30290__delegate;
return G__30290;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30294 = cljs.core._EQ_;
var expr__30295 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30294.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30295))){
var path_parts = ((function (pred__30294,expr__30295){
return (function (p1__30293_SHARP_){
return clojure.string.split.call(null,p1__30293_SHARP_,/[\/\\]/);
});})(pred__30294,expr__30295))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30294,expr__30295){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30297){if((e30297 instanceof Error)){
var e = e30297;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30297;

}
}})());
});
;})(path_parts,sep,root,pred__30294,expr__30295))
} else {
if(cljs.core.truth_(pred__30294.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30295))){
return ((function (pred__30294,expr__30295){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30294,expr__30295){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30294,expr__30295))
);

return deferred.addErrback(((function (deferred,pred__30294,expr__30295){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30294,expr__30295))
);
});
;})(pred__30294,expr__30295))
} else {
return ((function (pred__30294,expr__30295){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30294,expr__30295))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30298,callback){
var map__30301 = p__30298;
var map__30301__$1 = ((((!((map__30301 == null)))?((((map__30301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30301):map__30301);
var file_msg = map__30301__$1;
var request_url = cljs.core.get.call(null,map__30301__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30301,map__30301__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30301,map__30301__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto__){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto__){
return (function (state_30325){
var state_val_30326 = (state_30325[(1)]);
if((state_val_30326 === (7))){
var inst_30321 = (state_30325[(2)]);
var state_30325__$1 = state_30325;
var statearr_30327_30347 = state_30325__$1;
(statearr_30327_30347[(2)] = inst_30321);

(statearr_30327_30347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (1))){
var state_30325__$1 = state_30325;
var statearr_30328_30348 = state_30325__$1;
(statearr_30328_30348[(2)] = null);

(statearr_30328_30348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (4))){
var inst_30305 = (state_30325[(7)]);
var inst_30305__$1 = (state_30325[(2)]);
var state_30325__$1 = (function (){var statearr_30329 = state_30325;
(statearr_30329[(7)] = inst_30305__$1);

return statearr_30329;
})();
if(cljs.core.truth_(inst_30305__$1)){
var statearr_30330_30349 = state_30325__$1;
(statearr_30330_30349[(1)] = (5));

} else {
var statearr_30331_30350 = state_30325__$1;
(statearr_30331_30350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (6))){
var state_30325__$1 = state_30325;
var statearr_30332_30351 = state_30325__$1;
(statearr_30332_30351[(2)] = null);

(statearr_30332_30351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (3))){
var inst_30323 = (state_30325[(2)]);
var state_30325__$1 = state_30325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30325__$1,inst_30323);
} else {
if((state_val_30326 === (2))){
var state_30325__$1 = state_30325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30325__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30326 === (11))){
var inst_30317 = (state_30325[(2)]);
var state_30325__$1 = (function (){var statearr_30333 = state_30325;
(statearr_30333[(8)] = inst_30317);

return statearr_30333;
})();
var statearr_30334_30352 = state_30325__$1;
(statearr_30334_30352[(2)] = null);

(statearr_30334_30352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (9))){
var inst_30309 = (state_30325[(9)]);
var inst_30311 = (state_30325[(10)]);
var inst_30313 = inst_30311.call(null,inst_30309);
var state_30325__$1 = state_30325;
var statearr_30335_30353 = state_30325__$1;
(statearr_30335_30353[(2)] = inst_30313);

(statearr_30335_30353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (5))){
var inst_30305 = (state_30325[(7)]);
var inst_30307 = figwheel.client.file_reloading.blocking_load.call(null,inst_30305);
var state_30325__$1 = state_30325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30325__$1,(8),inst_30307);
} else {
if((state_val_30326 === (10))){
var inst_30309 = (state_30325[(9)]);
var inst_30315 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30309);
var state_30325__$1 = state_30325;
var statearr_30336_30354 = state_30325__$1;
(statearr_30336_30354[(2)] = inst_30315);

(statearr_30336_30354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (8))){
var inst_30311 = (state_30325[(10)]);
var inst_30305 = (state_30325[(7)]);
var inst_30309 = (state_30325[(2)]);
var inst_30310 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30311__$1 = cljs.core.get.call(null,inst_30310,inst_30305);
var state_30325__$1 = (function (){var statearr_30337 = state_30325;
(statearr_30337[(9)] = inst_30309);

(statearr_30337[(10)] = inst_30311__$1);

return statearr_30337;
})();
if(cljs.core.truth_(inst_30311__$1)){
var statearr_30338_30355 = state_30325__$1;
(statearr_30338_30355[(1)] = (9));

} else {
var statearr_30339_30356 = state_30325__$1;
(statearr_30339_30356[(1)] = (10));

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
});})(c__27221__auto__))
;
return ((function (switch__27109__auto__,c__27221__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27110__auto__ = null;
var figwheel$client$file_reloading$state_machine__27110__auto____0 = (function (){
var statearr_30343 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30343[(0)] = figwheel$client$file_reloading$state_machine__27110__auto__);

(statearr_30343[(1)] = (1));

return statearr_30343;
});
var figwheel$client$file_reloading$state_machine__27110__auto____1 = (function (state_30325){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_30325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e30344){if((e30344 instanceof Object)){
var ex__27113__auto__ = e30344;
var statearr_30345_30357 = state_30325;
(statearr_30345_30357[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30358 = state_30325;
state_30325 = G__30358;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27110__auto__ = function(state_30325){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27110__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27110__auto____1.call(this,state_30325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27110__auto____0;
figwheel$client$file_reloading$state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27110__auto____1;
return figwheel$client$file_reloading$state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto__))
})();
var state__27223__auto__ = (function (){var statearr_30346 = f__27222__auto__.call(null);
(statearr_30346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto__);

return statearr_30346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto__))
);

return c__27221__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30359,callback){
var map__30362 = p__30359;
var map__30362__$1 = ((((!((map__30362 == null)))?((((map__30362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30362):map__30362);
var file_msg = map__30362__$1;
var namespace = cljs.core.get.call(null,map__30362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30362,map__30362__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30362,map__30362__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30364){
var map__30367 = p__30364;
var map__30367__$1 = ((((!((map__30367 == null)))?((((map__30367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30367):map__30367);
var file_msg = map__30367__$1;
var namespace = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30369,callback){
var map__30372 = p__30369;
var map__30372__$1 = ((((!((map__30372 == null)))?((((map__30372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30372):map__30372);
var file_msg = map__30372__$1;
var request_url = cljs.core.get.call(null,map__30372__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27221__auto___30476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto___30476,out){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto___30476,out){
return (function (state_30458){
var state_val_30459 = (state_30458[(1)]);
if((state_val_30459 === (1))){
var inst_30432 = cljs.core.seq.call(null,files);
var inst_30433 = cljs.core.first.call(null,inst_30432);
var inst_30434 = cljs.core.next.call(null,inst_30432);
var inst_30435 = files;
var state_30458__$1 = (function (){var statearr_30460 = state_30458;
(statearr_30460[(7)] = inst_30435);

(statearr_30460[(8)] = inst_30434);

(statearr_30460[(9)] = inst_30433);

return statearr_30460;
})();
var statearr_30461_30477 = state_30458__$1;
(statearr_30461_30477[(2)] = null);

(statearr_30461_30477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30459 === (2))){
var inst_30435 = (state_30458[(7)]);
var inst_30441 = (state_30458[(10)]);
var inst_30440 = cljs.core.seq.call(null,inst_30435);
var inst_30441__$1 = cljs.core.first.call(null,inst_30440);
var inst_30442 = cljs.core.next.call(null,inst_30440);
var inst_30443 = (inst_30441__$1 == null);
var inst_30444 = cljs.core.not.call(null,inst_30443);
var state_30458__$1 = (function (){var statearr_30462 = state_30458;
(statearr_30462[(10)] = inst_30441__$1);

(statearr_30462[(11)] = inst_30442);

return statearr_30462;
})();
if(inst_30444){
var statearr_30463_30478 = state_30458__$1;
(statearr_30463_30478[(1)] = (4));

} else {
var statearr_30464_30479 = state_30458__$1;
(statearr_30464_30479[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30459 === (3))){
var inst_30456 = (state_30458[(2)]);
var state_30458__$1 = state_30458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30458__$1,inst_30456);
} else {
if((state_val_30459 === (4))){
var inst_30441 = (state_30458[(10)]);
var inst_30446 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30441);
var state_30458__$1 = state_30458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30458__$1,(7),inst_30446);
} else {
if((state_val_30459 === (5))){
var inst_30452 = cljs.core.async.close_BANG_.call(null,out);
var state_30458__$1 = state_30458;
var statearr_30465_30480 = state_30458__$1;
(statearr_30465_30480[(2)] = inst_30452);

(statearr_30465_30480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30459 === (6))){
var inst_30454 = (state_30458[(2)]);
var state_30458__$1 = state_30458;
var statearr_30466_30481 = state_30458__$1;
(statearr_30466_30481[(2)] = inst_30454);

(statearr_30466_30481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30459 === (7))){
var inst_30442 = (state_30458[(11)]);
var inst_30448 = (state_30458[(2)]);
var inst_30449 = cljs.core.async.put_BANG_.call(null,out,inst_30448);
var inst_30435 = inst_30442;
var state_30458__$1 = (function (){var statearr_30467 = state_30458;
(statearr_30467[(12)] = inst_30449);

(statearr_30467[(7)] = inst_30435);

return statearr_30467;
})();
var statearr_30468_30482 = state_30458__$1;
(statearr_30468_30482[(2)] = null);

(statearr_30468_30482[(1)] = (2));


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
});})(c__27221__auto___30476,out))
;
return ((function (switch__27109__auto__,c__27221__auto___30476,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto____0 = (function (){
var statearr_30472 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30472[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto__);

(statearr_30472[(1)] = (1));

return statearr_30472;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto____1 = (function (state_30458){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_30458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e30473){if((e30473 instanceof Object)){
var ex__27113__auto__ = e30473;
var statearr_30474_30483 = state_30458;
(statearr_30474_30483[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30484 = state_30458;
state_30458 = G__30484;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto__ = function(state_30458){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto____1.call(this,state_30458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto___30476,out))
})();
var state__27223__auto__ = (function (){var statearr_30475 = f__27222__auto__.call(null);
(statearr_30475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto___30476);

return statearr_30475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto___30476,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30485,opts){
var map__30489 = p__30485;
var map__30489__$1 = ((((!((map__30489 == null)))?((((map__30489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30489):map__30489);
var eval_body = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30491){var e = e30491;
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
return (function (p1__30492_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30492_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30501){
var vec__30502 = p__30501;
var k = cljs.core.nth.call(null,vec__30502,(0),null);
var v = cljs.core.nth.call(null,vec__30502,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30505){
var vec__30506 = p__30505;
var k = cljs.core.nth.call(null,vec__30506,(0),null);
var v = cljs.core.nth.call(null,vec__30506,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30512,p__30513){
var map__30761 = p__30512;
var map__30761__$1 = ((((!((map__30761 == null)))?((((map__30761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30761):map__30761);
var opts = map__30761__$1;
var before_jsload = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30762 = p__30513;
var map__30762__$1 = ((((!((map__30762 == null)))?((((map__30762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30762):map__30762);
var msg = map__30762__$1;
var files = cljs.core.get.call(null,map__30762__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30762__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30762__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27222__auto__ = (function (){var switch__27109__auto__ = ((function (c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30916){
var state_val_30917 = (state_30916[(1)]);
if((state_val_30917 === (7))){
var inst_30778 = (state_30916[(7)]);
var inst_30777 = (state_30916[(8)]);
var inst_30779 = (state_30916[(9)]);
var inst_30776 = (state_30916[(10)]);
var inst_30784 = cljs.core._nth.call(null,inst_30777,inst_30779);
var inst_30785 = figwheel.client.file_reloading.eval_body.call(null,inst_30784,opts);
var inst_30786 = (inst_30779 + (1));
var tmp30918 = inst_30778;
var tmp30919 = inst_30777;
var tmp30920 = inst_30776;
var inst_30776__$1 = tmp30920;
var inst_30777__$1 = tmp30919;
var inst_30778__$1 = tmp30918;
var inst_30779__$1 = inst_30786;
var state_30916__$1 = (function (){var statearr_30921 = state_30916;
(statearr_30921[(7)] = inst_30778__$1);

(statearr_30921[(8)] = inst_30777__$1);

(statearr_30921[(9)] = inst_30779__$1);

(statearr_30921[(11)] = inst_30785);

(statearr_30921[(10)] = inst_30776__$1);

return statearr_30921;
})();
var statearr_30922_31008 = state_30916__$1;
(statearr_30922_31008[(2)] = null);

(statearr_30922_31008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (20))){
var inst_30819 = (state_30916[(12)]);
var inst_30827 = figwheel.client.file_reloading.sort_files.call(null,inst_30819);
var state_30916__$1 = state_30916;
var statearr_30923_31009 = state_30916__$1;
(statearr_30923_31009[(2)] = inst_30827);

(statearr_30923_31009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (27))){
var state_30916__$1 = state_30916;
var statearr_30924_31010 = state_30916__$1;
(statearr_30924_31010[(2)] = null);

(statearr_30924_31010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (1))){
var inst_30768 = (state_30916[(13)]);
var inst_30765 = before_jsload.call(null,files);
var inst_30766 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30767 = (function (){return ((function (inst_30768,inst_30765,inst_30766,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30509_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30509_SHARP_);
});
;})(inst_30768,inst_30765,inst_30766,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30768__$1 = cljs.core.filter.call(null,inst_30767,files);
var inst_30769 = cljs.core.not_empty.call(null,inst_30768__$1);
var state_30916__$1 = (function (){var statearr_30925 = state_30916;
(statearr_30925[(14)] = inst_30766);

(statearr_30925[(15)] = inst_30765);

(statearr_30925[(13)] = inst_30768__$1);

return statearr_30925;
})();
if(cljs.core.truth_(inst_30769)){
var statearr_30926_31011 = state_30916__$1;
(statearr_30926_31011[(1)] = (2));

} else {
var statearr_30927_31012 = state_30916__$1;
(statearr_30927_31012[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (24))){
var state_30916__$1 = state_30916;
var statearr_30928_31013 = state_30916__$1;
(statearr_30928_31013[(2)] = null);

(statearr_30928_31013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (39))){
var inst_30869 = (state_30916[(16)]);
var state_30916__$1 = state_30916;
var statearr_30929_31014 = state_30916__$1;
(statearr_30929_31014[(2)] = inst_30869);

(statearr_30929_31014[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (46))){
var inst_30911 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
var statearr_30930_31015 = state_30916__$1;
(statearr_30930_31015[(2)] = inst_30911);

(statearr_30930_31015[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (4))){
var inst_30813 = (state_30916[(2)]);
var inst_30814 = cljs.core.List.EMPTY;
var inst_30815 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30814);
var inst_30816 = (function (){return ((function (inst_30813,inst_30814,inst_30815,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30510_SHARP_){
var and__24876__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30510_SHARP_);
if(cljs.core.truth_(and__24876__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30510_SHARP_));
} else {
return and__24876__auto__;
}
});
;})(inst_30813,inst_30814,inst_30815,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30817 = cljs.core.filter.call(null,inst_30816,files);
var inst_30818 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30819 = cljs.core.concat.call(null,inst_30817,inst_30818);
var state_30916__$1 = (function (){var statearr_30931 = state_30916;
(statearr_30931[(12)] = inst_30819);

(statearr_30931[(17)] = inst_30813);

(statearr_30931[(18)] = inst_30815);

return statearr_30931;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30932_31016 = state_30916__$1;
(statearr_30932_31016[(1)] = (16));

} else {
var statearr_30933_31017 = state_30916__$1;
(statearr_30933_31017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (15))){
var inst_30803 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
var statearr_30934_31018 = state_30916__$1;
(statearr_30934_31018[(2)] = inst_30803);

(statearr_30934_31018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (21))){
var inst_30829 = (state_30916[(19)]);
var inst_30829__$1 = (state_30916[(2)]);
var inst_30830 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30829__$1);
var state_30916__$1 = (function (){var statearr_30935 = state_30916;
(statearr_30935[(19)] = inst_30829__$1);

return statearr_30935;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30916__$1,(22),inst_30830);
} else {
if((state_val_30917 === (31))){
var inst_30914 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30916__$1,inst_30914);
} else {
if((state_val_30917 === (32))){
var inst_30869 = (state_30916[(16)]);
var inst_30874 = inst_30869.cljs$lang$protocol_mask$partition0$;
var inst_30875 = (inst_30874 & (64));
var inst_30876 = inst_30869.cljs$core$ISeq$;
var inst_30877 = (cljs.core.PROTOCOL_SENTINEL === inst_30876);
var inst_30878 = (inst_30875) || (inst_30877);
var state_30916__$1 = state_30916;
if(cljs.core.truth_(inst_30878)){
var statearr_30936_31019 = state_30916__$1;
(statearr_30936_31019[(1)] = (35));

} else {
var statearr_30937_31020 = state_30916__$1;
(statearr_30937_31020[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (40))){
var inst_30891 = (state_30916[(20)]);
var inst_30890 = (state_30916[(2)]);
var inst_30891__$1 = cljs.core.get.call(null,inst_30890,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30892 = cljs.core.get.call(null,inst_30890,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30893 = cljs.core.not_empty.call(null,inst_30891__$1);
var state_30916__$1 = (function (){var statearr_30938 = state_30916;
(statearr_30938[(21)] = inst_30892);

(statearr_30938[(20)] = inst_30891__$1);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30893)){
var statearr_30939_31021 = state_30916__$1;
(statearr_30939_31021[(1)] = (41));

} else {
var statearr_30940_31022 = state_30916__$1;
(statearr_30940_31022[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (33))){
var state_30916__$1 = state_30916;
var statearr_30941_31023 = state_30916__$1;
(statearr_30941_31023[(2)] = false);

(statearr_30941_31023[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (13))){
var inst_30789 = (state_30916[(22)]);
var inst_30793 = cljs.core.chunk_first.call(null,inst_30789);
var inst_30794 = cljs.core.chunk_rest.call(null,inst_30789);
var inst_30795 = cljs.core.count.call(null,inst_30793);
var inst_30776 = inst_30794;
var inst_30777 = inst_30793;
var inst_30778 = inst_30795;
var inst_30779 = (0);
var state_30916__$1 = (function (){var statearr_30942 = state_30916;
(statearr_30942[(7)] = inst_30778);

(statearr_30942[(8)] = inst_30777);

(statearr_30942[(9)] = inst_30779);

(statearr_30942[(10)] = inst_30776);

return statearr_30942;
})();
var statearr_30943_31024 = state_30916__$1;
(statearr_30943_31024[(2)] = null);

(statearr_30943_31024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (22))){
var inst_30837 = (state_30916[(23)]);
var inst_30829 = (state_30916[(19)]);
var inst_30833 = (state_30916[(24)]);
var inst_30832 = (state_30916[(25)]);
var inst_30832__$1 = (state_30916[(2)]);
var inst_30833__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30832__$1);
var inst_30834 = (function (){var all_files = inst_30829;
var res_SINGLEQUOTE_ = inst_30832__$1;
var res = inst_30833__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30837,inst_30829,inst_30833,inst_30832,inst_30832__$1,inst_30833__$1,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30511_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30511_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30837,inst_30829,inst_30833,inst_30832,inst_30832__$1,inst_30833__$1,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30835 = cljs.core.filter.call(null,inst_30834,inst_30832__$1);
var inst_30836 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30837__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30836);
var inst_30838 = cljs.core.not_empty.call(null,inst_30837__$1);
var state_30916__$1 = (function (){var statearr_30944 = state_30916;
(statearr_30944[(23)] = inst_30837__$1);

(statearr_30944[(26)] = inst_30835);

(statearr_30944[(24)] = inst_30833__$1);

(statearr_30944[(25)] = inst_30832__$1);

return statearr_30944;
})();
if(cljs.core.truth_(inst_30838)){
var statearr_30945_31025 = state_30916__$1;
(statearr_30945_31025[(1)] = (23));

} else {
var statearr_30946_31026 = state_30916__$1;
(statearr_30946_31026[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (36))){
var state_30916__$1 = state_30916;
var statearr_30947_31027 = state_30916__$1;
(statearr_30947_31027[(2)] = false);

(statearr_30947_31027[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (41))){
var inst_30891 = (state_30916[(20)]);
var inst_30895 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30896 = cljs.core.map.call(null,inst_30895,inst_30891);
var inst_30897 = cljs.core.pr_str.call(null,inst_30896);
var inst_30898 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30897)].join('');
var inst_30899 = figwheel.client.utils.log.call(null,inst_30898);
var state_30916__$1 = state_30916;
var statearr_30948_31028 = state_30916__$1;
(statearr_30948_31028[(2)] = inst_30899);

(statearr_30948_31028[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (43))){
var inst_30892 = (state_30916[(21)]);
var inst_30902 = (state_30916[(2)]);
var inst_30903 = cljs.core.not_empty.call(null,inst_30892);
var state_30916__$1 = (function (){var statearr_30949 = state_30916;
(statearr_30949[(27)] = inst_30902);

return statearr_30949;
})();
if(cljs.core.truth_(inst_30903)){
var statearr_30950_31029 = state_30916__$1;
(statearr_30950_31029[(1)] = (44));

} else {
var statearr_30951_31030 = state_30916__$1;
(statearr_30951_31030[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (29))){
var inst_30837 = (state_30916[(23)]);
var inst_30835 = (state_30916[(26)]);
var inst_30829 = (state_30916[(19)]);
var inst_30833 = (state_30916[(24)]);
var inst_30832 = (state_30916[(25)]);
var inst_30869 = (state_30916[(16)]);
var inst_30865 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30868 = (function (){var all_files = inst_30829;
var res_SINGLEQUOTE_ = inst_30832;
var res = inst_30833;
var files_not_loaded = inst_30835;
var dependencies_that_loaded = inst_30837;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30837,inst_30835,inst_30829,inst_30833,inst_30832,inst_30869,inst_30865,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30867){
var map__30952 = p__30867;
var map__30952__$1 = ((((!((map__30952 == null)))?((((map__30952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30952):map__30952);
var namespace = cljs.core.get.call(null,map__30952__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30837,inst_30835,inst_30829,inst_30833,inst_30832,inst_30869,inst_30865,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30869__$1 = cljs.core.group_by.call(null,inst_30868,inst_30835);
var inst_30871 = (inst_30869__$1 == null);
var inst_30872 = cljs.core.not.call(null,inst_30871);
var state_30916__$1 = (function (){var statearr_30954 = state_30916;
(statearr_30954[(28)] = inst_30865);

(statearr_30954[(16)] = inst_30869__$1);

return statearr_30954;
})();
if(inst_30872){
var statearr_30955_31031 = state_30916__$1;
(statearr_30955_31031[(1)] = (32));

} else {
var statearr_30956_31032 = state_30916__$1;
(statearr_30956_31032[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (44))){
var inst_30892 = (state_30916[(21)]);
var inst_30905 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30892);
var inst_30906 = cljs.core.pr_str.call(null,inst_30905);
var inst_30907 = [cljs.core.str("not required: "),cljs.core.str(inst_30906)].join('');
var inst_30908 = figwheel.client.utils.log.call(null,inst_30907);
var state_30916__$1 = state_30916;
var statearr_30957_31033 = state_30916__$1;
(statearr_30957_31033[(2)] = inst_30908);

(statearr_30957_31033[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (6))){
var inst_30810 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
var statearr_30958_31034 = state_30916__$1;
(statearr_30958_31034[(2)] = inst_30810);

(statearr_30958_31034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (28))){
var inst_30835 = (state_30916[(26)]);
var inst_30862 = (state_30916[(2)]);
var inst_30863 = cljs.core.not_empty.call(null,inst_30835);
var state_30916__$1 = (function (){var statearr_30959 = state_30916;
(statearr_30959[(29)] = inst_30862);

return statearr_30959;
})();
if(cljs.core.truth_(inst_30863)){
var statearr_30960_31035 = state_30916__$1;
(statearr_30960_31035[(1)] = (29));

} else {
var statearr_30961_31036 = state_30916__$1;
(statearr_30961_31036[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (25))){
var inst_30833 = (state_30916[(24)]);
var inst_30849 = (state_30916[(2)]);
var inst_30850 = cljs.core.not_empty.call(null,inst_30833);
var state_30916__$1 = (function (){var statearr_30962 = state_30916;
(statearr_30962[(30)] = inst_30849);

return statearr_30962;
})();
if(cljs.core.truth_(inst_30850)){
var statearr_30963_31037 = state_30916__$1;
(statearr_30963_31037[(1)] = (26));

} else {
var statearr_30964_31038 = state_30916__$1;
(statearr_30964_31038[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (34))){
var inst_30885 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
if(cljs.core.truth_(inst_30885)){
var statearr_30965_31039 = state_30916__$1;
(statearr_30965_31039[(1)] = (38));

} else {
var statearr_30966_31040 = state_30916__$1;
(statearr_30966_31040[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (17))){
var state_30916__$1 = state_30916;
var statearr_30967_31041 = state_30916__$1;
(statearr_30967_31041[(2)] = recompile_dependents);

(statearr_30967_31041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (3))){
var state_30916__$1 = state_30916;
var statearr_30968_31042 = state_30916__$1;
(statearr_30968_31042[(2)] = null);

(statearr_30968_31042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (12))){
var inst_30806 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
var statearr_30969_31043 = state_30916__$1;
(statearr_30969_31043[(2)] = inst_30806);

(statearr_30969_31043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (2))){
var inst_30768 = (state_30916[(13)]);
var inst_30775 = cljs.core.seq.call(null,inst_30768);
var inst_30776 = inst_30775;
var inst_30777 = null;
var inst_30778 = (0);
var inst_30779 = (0);
var state_30916__$1 = (function (){var statearr_30970 = state_30916;
(statearr_30970[(7)] = inst_30778);

(statearr_30970[(8)] = inst_30777);

(statearr_30970[(9)] = inst_30779);

(statearr_30970[(10)] = inst_30776);

return statearr_30970;
})();
var statearr_30971_31044 = state_30916__$1;
(statearr_30971_31044[(2)] = null);

(statearr_30971_31044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (23))){
var inst_30837 = (state_30916[(23)]);
var inst_30835 = (state_30916[(26)]);
var inst_30829 = (state_30916[(19)]);
var inst_30833 = (state_30916[(24)]);
var inst_30832 = (state_30916[(25)]);
var inst_30840 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30842 = (function (){var all_files = inst_30829;
var res_SINGLEQUOTE_ = inst_30832;
var res = inst_30833;
var files_not_loaded = inst_30835;
var dependencies_that_loaded = inst_30837;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30837,inst_30835,inst_30829,inst_30833,inst_30832,inst_30840,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30841){
var map__30972 = p__30841;
var map__30972__$1 = ((((!((map__30972 == null)))?((((map__30972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30972):map__30972);
var request_url = cljs.core.get.call(null,map__30972__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30837,inst_30835,inst_30829,inst_30833,inst_30832,inst_30840,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30843 = cljs.core.reverse.call(null,inst_30837);
var inst_30844 = cljs.core.map.call(null,inst_30842,inst_30843);
var inst_30845 = cljs.core.pr_str.call(null,inst_30844);
var inst_30846 = figwheel.client.utils.log.call(null,inst_30845);
var state_30916__$1 = (function (){var statearr_30974 = state_30916;
(statearr_30974[(31)] = inst_30840);

return statearr_30974;
})();
var statearr_30975_31045 = state_30916__$1;
(statearr_30975_31045[(2)] = inst_30846);

(statearr_30975_31045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (35))){
var state_30916__$1 = state_30916;
var statearr_30976_31046 = state_30916__$1;
(statearr_30976_31046[(2)] = true);

(statearr_30976_31046[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (19))){
var inst_30819 = (state_30916[(12)]);
var inst_30825 = figwheel.client.file_reloading.expand_files.call(null,inst_30819);
var state_30916__$1 = state_30916;
var statearr_30977_31047 = state_30916__$1;
(statearr_30977_31047[(2)] = inst_30825);

(statearr_30977_31047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (11))){
var state_30916__$1 = state_30916;
var statearr_30978_31048 = state_30916__$1;
(statearr_30978_31048[(2)] = null);

(statearr_30978_31048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (9))){
var inst_30808 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
var statearr_30979_31049 = state_30916__$1;
(statearr_30979_31049[(2)] = inst_30808);

(statearr_30979_31049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (5))){
var inst_30778 = (state_30916[(7)]);
var inst_30779 = (state_30916[(9)]);
var inst_30781 = (inst_30779 < inst_30778);
var inst_30782 = inst_30781;
var state_30916__$1 = state_30916;
if(cljs.core.truth_(inst_30782)){
var statearr_30980_31050 = state_30916__$1;
(statearr_30980_31050[(1)] = (7));

} else {
var statearr_30981_31051 = state_30916__$1;
(statearr_30981_31051[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (14))){
var inst_30789 = (state_30916[(22)]);
var inst_30798 = cljs.core.first.call(null,inst_30789);
var inst_30799 = figwheel.client.file_reloading.eval_body.call(null,inst_30798,opts);
var inst_30800 = cljs.core.next.call(null,inst_30789);
var inst_30776 = inst_30800;
var inst_30777 = null;
var inst_30778 = (0);
var inst_30779 = (0);
var state_30916__$1 = (function (){var statearr_30982 = state_30916;
(statearr_30982[(32)] = inst_30799);

(statearr_30982[(7)] = inst_30778);

(statearr_30982[(8)] = inst_30777);

(statearr_30982[(9)] = inst_30779);

(statearr_30982[(10)] = inst_30776);

return statearr_30982;
})();
var statearr_30983_31052 = state_30916__$1;
(statearr_30983_31052[(2)] = null);

(statearr_30983_31052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (45))){
var state_30916__$1 = state_30916;
var statearr_30984_31053 = state_30916__$1;
(statearr_30984_31053[(2)] = null);

(statearr_30984_31053[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (26))){
var inst_30837 = (state_30916[(23)]);
var inst_30835 = (state_30916[(26)]);
var inst_30829 = (state_30916[(19)]);
var inst_30833 = (state_30916[(24)]);
var inst_30832 = (state_30916[(25)]);
var inst_30852 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30854 = (function (){var all_files = inst_30829;
var res_SINGLEQUOTE_ = inst_30832;
var res = inst_30833;
var files_not_loaded = inst_30835;
var dependencies_that_loaded = inst_30837;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30837,inst_30835,inst_30829,inst_30833,inst_30832,inst_30852,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30853){
var map__30985 = p__30853;
var map__30985__$1 = ((((!((map__30985 == null)))?((((map__30985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30985):map__30985);
var namespace = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30837,inst_30835,inst_30829,inst_30833,inst_30832,inst_30852,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30855 = cljs.core.map.call(null,inst_30854,inst_30833);
var inst_30856 = cljs.core.pr_str.call(null,inst_30855);
var inst_30857 = figwheel.client.utils.log.call(null,inst_30856);
var inst_30858 = (function (){var all_files = inst_30829;
var res_SINGLEQUOTE_ = inst_30832;
var res = inst_30833;
var files_not_loaded = inst_30835;
var dependencies_that_loaded = inst_30837;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30837,inst_30835,inst_30829,inst_30833,inst_30832,inst_30852,inst_30854,inst_30855,inst_30856,inst_30857,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30837,inst_30835,inst_30829,inst_30833,inst_30832,inst_30852,inst_30854,inst_30855,inst_30856,inst_30857,state_val_30917,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30859 = setTimeout(inst_30858,(10));
var state_30916__$1 = (function (){var statearr_30987 = state_30916;
(statearr_30987[(33)] = inst_30857);

(statearr_30987[(34)] = inst_30852);

return statearr_30987;
})();
var statearr_30988_31054 = state_30916__$1;
(statearr_30988_31054[(2)] = inst_30859);

(statearr_30988_31054[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (16))){
var state_30916__$1 = state_30916;
var statearr_30989_31055 = state_30916__$1;
(statearr_30989_31055[(2)] = reload_dependents);

(statearr_30989_31055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (38))){
var inst_30869 = (state_30916[(16)]);
var inst_30887 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30869);
var state_30916__$1 = state_30916;
var statearr_30990_31056 = state_30916__$1;
(statearr_30990_31056[(2)] = inst_30887);

(statearr_30990_31056[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (30))){
var state_30916__$1 = state_30916;
var statearr_30991_31057 = state_30916__$1;
(statearr_30991_31057[(2)] = null);

(statearr_30991_31057[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (10))){
var inst_30789 = (state_30916[(22)]);
var inst_30791 = cljs.core.chunked_seq_QMARK_.call(null,inst_30789);
var state_30916__$1 = state_30916;
if(inst_30791){
var statearr_30992_31058 = state_30916__$1;
(statearr_30992_31058[(1)] = (13));

} else {
var statearr_30993_31059 = state_30916__$1;
(statearr_30993_31059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (18))){
var inst_30823 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
if(cljs.core.truth_(inst_30823)){
var statearr_30994_31060 = state_30916__$1;
(statearr_30994_31060[(1)] = (19));

} else {
var statearr_30995_31061 = state_30916__$1;
(statearr_30995_31061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (42))){
var state_30916__$1 = state_30916;
var statearr_30996_31062 = state_30916__$1;
(statearr_30996_31062[(2)] = null);

(statearr_30996_31062[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (37))){
var inst_30882 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
var statearr_30997_31063 = state_30916__$1;
(statearr_30997_31063[(2)] = inst_30882);

(statearr_30997_31063[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (8))){
var inst_30789 = (state_30916[(22)]);
var inst_30776 = (state_30916[(10)]);
var inst_30789__$1 = cljs.core.seq.call(null,inst_30776);
var state_30916__$1 = (function (){var statearr_30998 = state_30916;
(statearr_30998[(22)] = inst_30789__$1);

return statearr_30998;
})();
if(inst_30789__$1){
var statearr_30999_31064 = state_30916__$1;
(statearr_30999_31064[(1)] = (10));

} else {
var statearr_31000_31065 = state_30916__$1;
(statearr_31000_31065[(1)] = (11));

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
});})(c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27109__auto__,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto____0 = (function (){
var statearr_31004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31004[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto__);

(statearr_31004[(1)] = (1));

return statearr_31004;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto____1 = (function (state_30916){
while(true){
var ret_value__27111__auto__ = (function (){try{while(true){
var result__27112__auto__ = switch__27109__auto__.call(null,state_30916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27112__auto__;
}
break;
}
}catch (e31005){if((e31005 instanceof Object)){
var ex__27113__auto__ = e31005;
var statearr_31006_31066 = state_30916;
(statearr_31006_31066[(5)] = ex__27113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31067 = state_30916;
state_30916 = G__31067;
continue;
} else {
return ret_value__27111__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto__ = function(state_30916){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto____1.call(this,state_30916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27110__auto__;
})()
;})(switch__27109__auto__,c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27223__auto__ = (function (){var statearr_31007 = f__27222__auto__.call(null);
(statearr_31007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27221__auto__);

return statearr_31007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27223__auto__);
});})(c__27221__auto__,map__30761,map__30761__$1,opts,before_jsload,on_jsload,reload_dependents,map__30762,map__30762__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27221__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31070,link){
var map__31073 = p__31070;
var map__31073__$1 = ((((!((map__31073 == null)))?((((map__31073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31073):map__31073);
var file = cljs.core.get.call(null,map__31073__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31073,map__31073__$1,file){
return (function (p1__31068_SHARP_,p2__31069_SHARP_){
if(cljs.core._EQ_.call(null,p1__31068_SHARP_,p2__31069_SHARP_)){
return p1__31068_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31073,map__31073__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31079){
var map__31080 = p__31079;
var map__31080__$1 = ((((!((map__31080 == null)))?((((map__31080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31080):map__31080);
var match_length = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31075_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31075_SHARP_);
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
var args31082 = [];
var len__25996__auto___31085 = arguments.length;
var i__25997__auto___31086 = (0);
while(true){
if((i__25997__auto___31086 < len__25996__auto___31085)){
args31082.push((arguments[i__25997__auto___31086]));

var G__31087 = (i__25997__auto___31086 + (1));
i__25997__auto___31086 = G__31087;
continue;
} else {
}
break;
}

var G__31084 = args31082.length;
switch (G__31084) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31082.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31089_SHARP_,p2__31090_SHARP_){
return cljs.core.assoc.call(null,p1__31089_SHARP_,cljs.core.get.call(null,p2__31090_SHARP_,key),p2__31090_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31091){
var map__31094 = p__31091;
var map__31094__$1 = ((((!((map__31094 == null)))?((((map__31094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31094):map__31094);
var f_data = map__31094__$1;
var file = cljs.core.get.call(null,map__31094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31096,p__31097){
var map__31106 = p__31096;
var map__31106__$1 = ((((!((map__31106 == null)))?((((map__31106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31106):map__31106);
var opts = map__31106__$1;
var on_cssload = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31107 = p__31097;
var map__31107__$1 = ((((!((map__31107 == null)))?((((map__31107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31107):map__31107);
var files_msg = map__31107__$1;
var files = cljs.core.get.call(null,map__31107__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31110_31114 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31111_31115 = null;
var count__31112_31116 = (0);
var i__31113_31117 = (0);
while(true){
if((i__31113_31117 < count__31112_31116)){
var f_31118 = cljs.core._nth.call(null,chunk__31111_31115,i__31113_31117);
figwheel.client.file_reloading.reload_css_file.call(null,f_31118);

var G__31119 = seq__31110_31114;
var G__31120 = chunk__31111_31115;
var G__31121 = count__31112_31116;
var G__31122 = (i__31113_31117 + (1));
seq__31110_31114 = G__31119;
chunk__31111_31115 = G__31120;
count__31112_31116 = G__31121;
i__31113_31117 = G__31122;
continue;
} else {
var temp__4657__auto___31123 = cljs.core.seq.call(null,seq__31110_31114);
if(temp__4657__auto___31123){
var seq__31110_31124__$1 = temp__4657__auto___31123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31110_31124__$1)){
var c__25702__auto___31125 = cljs.core.chunk_first.call(null,seq__31110_31124__$1);
var G__31126 = cljs.core.chunk_rest.call(null,seq__31110_31124__$1);
var G__31127 = c__25702__auto___31125;
var G__31128 = cljs.core.count.call(null,c__25702__auto___31125);
var G__31129 = (0);
seq__31110_31114 = G__31126;
chunk__31111_31115 = G__31127;
count__31112_31116 = G__31128;
i__31113_31117 = G__31129;
continue;
} else {
var f_31130 = cljs.core.first.call(null,seq__31110_31124__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31130);

var G__31131 = cljs.core.next.call(null,seq__31110_31124__$1);
var G__31132 = null;
var G__31133 = (0);
var G__31134 = (0);
seq__31110_31114 = G__31131;
chunk__31111_31115 = G__31132;
count__31112_31116 = G__31133;
i__31113_31117 = G__31134;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31106,map__31106__$1,opts,on_cssload,map__31107,map__31107__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31106,map__31106__$1,opts,on_cssload,map__31107,map__31107__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1480282067966