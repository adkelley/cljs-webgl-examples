// Compiled by ClojureScript 1.9.293 {:static-fns true}
goog.provide('projection.core');
goog.require('cljs.core');
goog.require('cljs_webgl.constants.buffer_object');
goog.require('gl_helpers.core');
goog.require('cljs_webgl.constants.uniform_type');
goog.require('cljs_webgl.context');
goog.require('cljs_webgl.constants.shader');
goog.require('cljs_webgl.buffers');
goog.require('cljs_webgl.constants.capability');
goog.require('geometry.core');
goog.require('cljs_webgl.constants.data_type');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.typed_arrays');
goog.require('cljs_webgl.constants.draw_mode');
projection.core.log = (function projection$core$log(var_args){
var args__7658__auto__ = [];
var len__7651__auto___9743 = arguments.length;
var i__7652__auto___9744 = (0);
while(true){
if((i__7652__auto___9744 < len__7651__auto___9743)){
args__7658__auto__.push((arguments[i__7652__auto___9744]));

var G__9745 = (i__7652__auto___9744 + (1));
i__7652__auto___9744 = G__9745;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return projection.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

projection.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.to_array(args));
});

projection.core.log.cljs$lang$maxFixedArity = (0);

projection.core.log.cljs$lang$applyTo = (function (seq9742){
return projection.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9742));
});

projection.core.vertex_shader_source = "attribute vec4 a_position;\n   attribute vec4 a_color;\n   uniform mat4 u_pMatrix;\n   uniform mat4 u_mvMatrix;\n   varying vec4 v_color;\n\n   void main() {\n     gl_Position = u_pMatrix * u_mvMatrix * a_position;\n     v_color = a_color;\n   }";
projection.core.fragment_shader_source = "precision mediump float;\n   uniform vec4 u_color;\n   varying vec4 v_color;\n\n   void main() {\n     gl_FragColor = v_color;\n   }";
projection.core.deg__GT_rad = (function projection$core$deg__GT_rad(degrees){
return ((degrees * Math.PI) / (180));
});
if(typeof projection.core.vertex_color !== 'undefined'){
} else {
projection.core.vertex_color = cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0,0.0,1.0,0.0,1.0,0.0,1.0,0.0,0.0,1.0,1.0], null));
}
projection.core.ortho_projection_matrix = (function projection$core$ortho_projection_matrix(frustrum){
var halfX = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frustrum,(0)) / 2.0);
var halfY = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frustrum,(1)) / 2.0);
var halfZ = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frustrum,(2)) / 2.0);
var G__9753 = (mat4.create.cljs$core$IFn$_invoke$arity$0 ? mat4.create.cljs$core$IFn$_invoke$arity$0() : mat4.create.call(null));
var G__9754 = (- halfX);
var G__9755 = halfX;
var G__9756 = (- halfY);
var G__9757 = halfY;
var G__9758 = (- halfZ);
var G__9759 = (10);
return (mat4.ortho.cljs$core$IFn$_invoke$arity$7 ? mat4.ortho.cljs$core$IFn$_invoke$arity$7(G__9753,G__9754,G__9755,G__9756,G__9757,G__9758,G__9759) : mat4.ortho.call(null,G__9753,G__9754,G__9755,G__9756,G__9757,G__9758,G__9759));
});
projection.core.perspective_projection_matrix = (function projection$core$perspective_projection_matrix(fov,aspect_ratio,depth){
var G__9765 = (mat4.create.cljs$core$IFn$_invoke$arity$0 ? mat4.create.cljs$core$IFn$_invoke$arity$0() : mat4.create.call(null));
var G__9766 = fov;
var G__9767 = aspect_ratio;
var G__9768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(depth,(0));
var G__9769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(depth,(1));
return (mat4.perspective.cljs$core$IFn$_invoke$arity$5 ? mat4.perspective.cljs$core$IFn$_invoke$arity$5(G__9765,G__9766,G__9767,G__9768,G__9769) : mat4.perspective.call(null,G__9765,G__9766,G__9767,G__9768,G__9769));
});
projection.core.model_view_matrix = (function projection$core$model_view_matrix(t,r,s){
var m = (mat4.create.cljs$core$IFn$_invoke$arity$0 ? mat4.create.cljs$core$IFn$_invoke$arity$0() : mat4.create.call(null));
var G__9785_9800 = m;
var G__9786_9801 = m;
var G__9787_9802 = cljs.core.clj__GT_js(t);
(mat4.translate.cljs$core$IFn$_invoke$arity$3 ? mat4.translate.cljs$core$IFn$_invoke$arity$3(G__9785_9800,G__9786_9801,G__9787_9802) : mat4.translate.call(null,G__9785_9800,G__9786_9801,G__9787_9802));

var G__9788_9803 = m;
var G__9789_9804 = m;
var G__9790_9805 = projection.core.deg__GT_rad(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,(0)));
(mat4.rotateX.cljs$core$IFn$_invoke$arity$3 ? mat4.rotateX.cljs$core$IFn$_invoke$arity$3(G__9788_9803,G__9789_9804,G__9790_9805) : mat4.rotateX.call(null,G__9788_9803,G__9789_9804,G__9790_9805));

var G__9791_9806 = m;
var G__9792_9807 = m;
var G__9793_9808 = projection.core.deg__GT_rad(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,(1)));
(mat4.rotateY.cljs$core$IFn$_invoke$arity$3 ? mat4.rotateY.cljs$core$IFn$_invoke$arity$3(G__9791_9806,G__9792_9807,G__9793_9808) : mat4.rotateY.call(null,G__9791_9806,G__9792_9807,G__9793_9808));

var G__9794_9809 = m;
var G__9795_9810 = m;
var G__9796_9811 = projection.core.deg__GT_rad(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,(2)));
(mat4.rotateZ.cljs$core$IFn$_invoke$arity$3 ? mat4.rotateZ.cljs$core$IFn$_invoke$arity$3(G__9794_9809,G__9795_9810,G__9796_9811) : mat4.rotateZ.call(null,G__9794_9809,G__9795_9810,G__9796_9811));

var G__9797 = m;
var G__9798 = m;
var G__9799 = cljs.core.clj__GT_js(s);
return (mat4.scale.cljs$core$IFn$_invoke$arity$3 ? mat4.scale.cljs$core$IFn$_invoke$arity$3(G__9797,G__9798,G__9799) : mat4.scale.call(null,G__9797,G__9798,G__9799));
});
projection.core.start = (function projection$core$start(){
var canvas = document.getElementById("canvas");
var gl = cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1(document.getElementById("canvas"));
var shader = cljs_webgl.shaders.create_program.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.array_seq([cljs_webgl.shaders.create_shader(gl,cljs_webgl.constants.shader.vertex_shader,projection.core.vertex_shader_source),cljs_webgl.shaders.create_shader(gl,cljs_webgl.constants.shader.fragment_shader,projection.core.fragment_shader_source)], 0));
var triangle_vertex_buffer = cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(gl,geometry.core.triangle,cljs_webgl.constants.buffer_object.array_buffer,cljs_webgl.constants.buffer_object.static_draw,cljs.core.array_seq([(3)], 0));
var vertex_color_buffer = cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(gl,projection.core.vertex_color,cljs_webgl.constants.buffer_object.array_buffer,cljs_webgl.constants.buffer_object.static_draw,cljs.core.array_seq([(4)], 0));
var translate = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-7)], null);
var rotate = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(0),(-45)], null);
var scale = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null);
var ortho = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10)], null);
var fov = (45);
var aspect_ratio = (function (){var map__9814 = gl_helpers.core.get_viewport(gl);
var map__9814__$1 = ((((!((map__9814 == null)))?((((map__9814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9814):map__9814);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9814__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9814__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (width / height);
})();
var depth = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,(100)], null);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_webgl.buffers.clear_depth_buffer(cljs_webgl.buffers.clear_color_buffer(gl,0.2,0.2,0.2,(1)),(1)),cljs.core.array_seq([new cljs.core.Keyword(null,"shader","shader",1492833021),shader,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),cljs_webgl.constants.draw_mode.triangles,new cljs.core.Keyword(null,"count","count",2139924085),triangle_vertex_buffer.numItems,new cljs.core.Keyword(null,"capabilities","capabilities",212739361),cljs.core.PersistentArrayMap.fromArray([cljs_webgl.constants.capability.depth_test,true], true, false),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),triangle_vertex_buffer,new cljs.core.Keyword(null,"location","location",1815599388),cljs_webgl.shaders.get_attrib_location(gl,shader,"a_position"),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635),triangle_vertex_buffer.itemSize,new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.float$], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),vertex_color_buffer,new cljs.core.Keyword(null,"location","location",1815599388),cljs_webgl.shaders.get_attrib_location(gl,shader,"a_color"),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635),vertex_color_buffer.itemSize,new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.float$], null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_pMatrix",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"values","values",372645556),projection.core.perspective_projection_matrix(fov,aspect_ratio,depth)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_mvMatrix",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"values","values",372645556),projection.core.model_view_matrix(translate,rotate,scale)], null)], null)], 0));
});
