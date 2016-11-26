// Compiled by ClojureScript 1.9.293 {}
goog.provide('triangle.core');
goog.require('cljs.core');
goog.require('cljs_webgl.constants.buffer_object');
goog.require('cljs_webgl.constants.uniform_type');
goog.require('cljs_webgl.context');
goog.require('cljs_webgl.constants.shader');
goog.require('cljs_webgl.buffers');
goog.require('cljs_webgl.constants.data_type');
goog.require('cljs_webgl.shaders');
goog.require('geometry.basic_shapes');
goog.require('cljs_webgl.typed_arrays');
goog.require('cljs_webgl.constants.draw_mode');
if(typeof triangle.core.randomColor !== 'undefined'){
} else {
triangle.core.randomColor = cljs_webgl.typed_arrays.float32.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null),cljs.core.rand.call(null),(1)], null));
}
triangle.core.vertex_shader_source = "attribute vec4 vertex_position;\n   void main() {\n     gl_Position = vertex_position;\n   }";
triangle.core.fragment_shader_source = "precision mediump float;\n\n   uniform vec4 u_color;\n\n   void main() {\n     gl_FragColor = u_color;\n   }";
triangle.core.log = (function triangle$core$log(var_args){
var args__26003__auto__ = [];
var len__25996__auto___34072 = arguments.length;
var i__25997__auto___34073 = (0);
while(true){
if((i__25997__auto___34073 < len__25996__auto___34072)){
args__26003__auto__.push((arguments[i__25997__auto___34073]));

var G__34074 = (i__25997__auto___34073 + (1));
i__25997__auto___34073 = G__34074;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return triangle.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});

triangle.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.to_array.call(null,args));
});

triangle.core.log.cljs$lang$maxFixedArity = (0);

triangle.core.log.cljs$lang$applyTo = (function (seq34071){
return triangle.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34071));
});

triangle.core.start = (function triangle$core$start(){
var canvas = document.getElementById("canvas");
var gl = cljs_webgl.context.get_context.call(null,document.getElementById("canvas"));
var shader = cljs_webgl.shaders.create_program.call(null,gl,cljs_webgl.shaders.create_shader.call(null,gl,cljs_webgl.constants.shader.vertex_shader,triangle.core.vertex_shader_source),cljs_webgl.shaders.create_shader.call(null,gl,cljs_webgl.constants.shader.fragment_shader,triangle.core.fragment_shader_source));
var triangle_vertex_buffer = cljs_webgl.buffers.create_buffer.call(null,gl,geometry.basic_shapes.triangle,cljs_webgl.constants.buffer_object.array_buffer,cljs_webgl.constants.buffer_object.static_draw,(3));
return cljs_webgl.buffers.draw_BANG_.call(null,cljs_webgl.buffers.clear_color_buffer.call(null,gl,0.2,0.2,0.2,(1)),new cljs.core.Keyword(null,"shader","shader",1492833021),shader,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),cljs_webgl.constants.draw_mode.triangles,new cljs.core.Keyword(null,"count","count",2139924085),triangle_vertex_buffer.numItems,new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),triangle_vertex_buffer,new cljs.core.Keyword(null,"location","location",1815599388),cljs_webgl.shaders.get_attrib_location.call(null,gl,shader,"vertex_position"),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635),(3),new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.float$], null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_color",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"values","values",372645556),triangle.core.randomColor], null)], null));
});

//# sourceMappingURL=core.js.map?rel=1480181532590