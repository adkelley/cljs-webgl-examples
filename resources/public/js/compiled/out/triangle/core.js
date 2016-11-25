// Compiled by ClojureScript 1.9.293 {:static-fns true}
goog.provide('triangle.core');
goog.require('cljs.core');
goog.require('cljs_webgl.constants.buffer_object');
goog.require('cljs_webgl.constants.uniform_type');
goog.require('cljs_webgl.context');
goog.require('cljs_webgl.constants.shader');
goog.require('cljs_webgl.buffers');
goog.require('geometry.core');
goog.require('cljs_webgl.constants.data_type');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.typed_arrays');
goog.require('cljs_webgl.constants.draw_mode');
if(typeof triangle.core.randomColor !== 'undefined'){
} else {
triangle.core.randomColor = cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),(1)], null));
}
triangle.core.vertex_shader_source = "attribute vec4 vertex_position;\n   void main() {\n     gl_Position = vertex_position;\n   }";
triangle.core.fragment_shader_source = "precision mediump float;\n\n   uniform vec4 u_color;\n\n   void main() {\n     gl_FragColor = u_color;\n   }";
triangle.core.log = (function triangle$core$log(var_args){
var args__7658__auto__ = [];
var len__7651__auto___12862 = arguments.length;
var i__7652__auto___12863 = (0);
while(true){
if((i__7652__auto___12863 < len__7651__auto___12862)){
args__7658__auto__.push((arguments[i__7652__auto___12863]));

var G__12864 = (i__7652__auto___12863 + (1));
i__7652__auto___12863 = G__12864;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return triangle.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

triangle.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.to_array(args));
});

triangle.core.log.cljs$lang$maxFixedArity = (0);

triangle.core.log.cljs$lang$applyTo = (function (seq12861){
return triangle.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12861));
});

triangle.core.start = (function triangle$core$start(){
var canvas = document.getElementById("canvas");
var gl = cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1(document.getElementById("canvas"));
var shader = cljs_webgl.shaders.create_program.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.array_seq([cljs_webgl.shaders.create_shader(gl,cljs_webgl.constants.shader.vertex_shader,triangle.core.vertex_shader_source),cljs_webgl.shaders.create_shader(gl,cljs_webgl.constants.shader.fragment_shader,triangle.core.fragment_shader_source)], 0));
var triangle_vertex_buffer = cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(gl,geometry.core.triangle,cljs_webgl.constants.buffer_object.array_buffer,cljs_webgl.constants.buffer_object.static_draw,cljs.core.array_seq([(3)], 0));
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_webgl.buffers.clear_color_buffer(gl,0.2,0.2,0.2,(1)),cljs.core.array_seq([new cljs.core.Keyword(null,"shader","shader",1492833021),shader,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),cljs_webgl.constants.draw_mode.triangles,new cljs.core.Keyword(null,"count","count",2139924085),triangle_vertex_buffer.numItems,new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),triangle_vertex_buffer,new cljs.core.Keyword(null,"location","location",1815599388),cljs_webgl.shaders.get_attrib_location(gl,shader,"vertex_position"),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635),(3),new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.float$], null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_color",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"values","values",372645556),triangle.core.randomColor], null)], null)], 0));
});
