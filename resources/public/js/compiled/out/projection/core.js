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
goog.require('cljs_webgl.constants.data_type');
goog.require('cljs_webgl.shaders');
goog.require('geometry.basic_shapes');
goog.require('cljs_webgl.typed_arrays');
goog.require('cljs_webgl.constants.draw_mode');
projection.core.log = (function projection$core$log(var_args){
var args__7658__auto__ = [];
var len__7651__auto___9735 = arguments.length;
var i__7652__auto___9736 = (0);
while(true){
if((i__7652__auto___9736 < len__7651__auto___9735)){
args__7658__auto__.push((arguments[i__7652__auto___9736]));

var G__9737 = (i__7652__auto___9736 + (1));
i__7652__auto___9736 = G__9737;
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

projection.core.log.cljs$lang$applyTo = (function (seq9734){
return projection.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9734));
});

projection.core.vertex_shader_source = "attribute vec4 a_position;\n   attribute vec4 a_color;\n   uniform mat4 u_pMatrix;\n   uniform mat4 u_mvMatrix;\n   varying vec4 v_color;\n\n   void main() {\n     gl_Position = u_pMatrix * u_mvMatrix * a_position;\n     v_color = a_color;\n   }";
projection.core.fragment_shader_source = "precision mediump float;\n   uniform vec4 u_color;\n   varying vec4 v_color;\n\n   void main() {\n     gl_FragColor = v_color;\n   }";
projection.core.deg__GT_rad = (function projection$core$deg__GT_rad(degrees){
return ((degrees * Math.PI) / (180));
});
if(typeof projection.core.vertex_color !== 'undefined'){
} else {
projection.core.vertex_color = cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0,0.0,1.0,0.0,1.0,0.0,1.0,0.0,0.0,1.0,1.0,1.0,0.0,0.0,1.0,0.0,1.0,0.0,1.0,0.0,0.0,1.0,1.0], null));
}
projection.core.ortho_projection_matrix = (function projection$core$ortho_projection_matrix(frustrum){
var halfX = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frustrum,(0)) / 2.0);
var halfY = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frustrum,(1)) / 2.0);
var halfZ = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frustrum,(2)) / 2.0);
var G__9745 = (mat4.create.cljs$core$IFn$_invoke$arity$0 ? mat4.create.cljs$core$IFn$_invoke$arity$0() : mat4.create.call(null));
var G__9746 = (- halfX);
var G__9747 = halfX;
var G__9748 = (- halfY);
var G__9749 = halfY;
var G__9750 = (- halfZ);
var G__9751 = (10);
return (mat4.ortho.cljs$core$IFn$_invoke$arity$7 ? mat4.ortho.cljs$core$IFn$_invoke$arity$7(G__9745,G__9746,G__9747,G__9748,G__9749,G__9750,G__9751) : mat4.ortho.call(null,G__9745,G__9746,G__9747,G__9748,G__9749,G__9750,G__9751));
});
projection.core.perspective_projection_matrix = (function projection$core$perspective_projection_matrix(fov,aspect_ratio,depth){
var G__9757 = (mat4.create.cljs$core$IFn$_invoke$arity$0 ? mat4.create.cljs$core$IFn$_invoke$arity$0() : mat4.create.call(null));
var G__9758 = fov;
var G__9759 = aspect_ratio;
var G__9760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(depth,(0));
var G__9761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(depth,(1));
return (mat4.perspective.cljs$core$IFn$_invoke$arity$5 ? mat4.perspective.cljs$core$IFn$_invoke$arity$5(G__9757,G__9758,G__9759,G__9760,G__9761) : mat4.perspective.call(null,G__9757,G__9758,G__9759,G__9760,G__9761));
});
projection.core.model_view_matrix = (function projection$core$model_view_matrix(t,r,s){
var m = (mat4.create.cljs$core$IFn$_invoke$arity$0 ? mat4.create.cljs$core$IFn$_invoke$arity$0() : mat4.create.call(null));
var G__9777_9792 = m;
var G__9778_9793 = m;
var G__9779_9794 = cljs.core.clj__GT_js(t);
(mat4.translate.cljs$core$IFn$_invoke$arity$3 ? mat4.translate.cljs$core$IFn$_invoke$arity$3(G__9777_9792,G__9778_9793,G__9779_9794) : mat4.translate.call(null,G__9777_9792,G__9778_9793,G__9779_9794));

var G__9780_9795 = m;
var G__9781_9796 = m;
var G__9782_9797 = projection.core.deg__GT_rad(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,(0)));
(mat4.rotateX.cljs$core$IFn$_invoke$arity$3 ? mat4.rotateX.cljs$core$IFn$_invoke$arity$3(G__9780_9795,G__9781_9796,G__9782_9797) : mat4.rotateX.call(null,G__9780_9795,G__9781_9796,G__9782_9797));

var G__9783_9798 = m;
var G__9784_9799 = m;
var G__9785_9800 = projection.core.deg__GT_rad(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,(1)));
(mat4.rotateY.cljs$core$IFn$_invoke$arity$3 ? mat4.rotateY.cljs$core$IFn$_invoke$arity$3(G__9783_9798,G__9784_9799,G__9785_9800) : mat4.rotateY.call(null,G__9783_9798,G__9784_9799,G__9785_9800));

var G__9786_9801 = m;
var G__9787_9802 = m;
var G__9788_9803 = projection.core.deg__GT_rad(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,(2)));
(mat4.rotateZ.cljs$core$IFn$_invoke$arity$3 ? mat4.rotateZ.cljs$core$IFn$_invoke$arity$3(G__9786_9801,G__9787_9802,G__9788_9803) : mat4.rotateZ.call(null,G__9786_9801,G__9787_9802,G__9788_9803));

var G__9789 = m;
var G__9790 = m;
var G__9791 = cljs.core.clj__GT_js(s);
return (mat4.scale.cljs$core$IFn$_invoke$arity$3 ? mat4.scale.cljs$core$IFn$_invoke$arity$3(G__9789,G__9790,G__9791) : mat4.scale.call(null,G__9789,G__9790,G__9791));
});
projection.core.start = (function projection$core$start(){
var canvas = document.getElementById("canvas");
var gl = cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1(document.getElementById("canvas"));
var shader = cljs_webgl.shaders.create_program.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.array_seq([cljs_webgl.shaders.create_shader(gl,cljs_webgl.constants.shader.vertex_shader,projection.core.vertex_shader_source),cljs_webgl.shaders.create_shader(gl,cljs_webgl.constants.shader.fragment_shader,projection.core.fragment_shader_source)], 0));
var vertex_buffer = cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(gl,geometry.basic_shapes.square,cljs_webgl.constants.buffer_object.array_buffer,cljs_webgl.constants.buffer_object.static_draw,cljs.core.array_seq([(3)], 0));
var vertex_color_buffer = cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(gl,projection.core.vertex_color,cljs_webgl.constants.buffer_object.array_buffer,cljs_webgl.constants.buffer_object.static_draw,cljs.core.array_seq([(4)], 0));
var translate = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-7)], null);
var rotate = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(-45),(0)], null);
var scale = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null);
var ortho = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10)], null);
var fov = (45);
var aspect_ratio = (function (){var map__9806 = gl_helpers.core.get_viewport(gl);
var map__9806__$1 = ((((!((map__9806 == null)))?((((map__9806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9806):map__9806);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9806__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9806__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (width / height);
})();
var depth = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,(100)], null);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_webgl.buffers.clear_depth_buffer(cljs_webgl.buffers.clear_color_buffer(gl,0.2,0.2,0.2,(1)),(1)),cljs.core.array_seq([new cljs.core.Keyword(null,"shader","shader",1492833021),shader,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),cljs_webgl.constants.draw_mode.triangles,new cljs.core.Keyword(null,"count","count",2139924085),vertex_buffer.numItems,new cljs.core.Keyword(null,"capabilities","capabilities",212739361),cljs.core.PersistentArrayMap.fromArray([cljs_webgl.constants.capability.depth_test,true], true, false),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),vertex_buffer,new cljs.core.Keyword(null,"location","location",1815599388),cljs_webgl.shaders.get_attrib_location(gl,shader,"a_position"),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635),vertex_buffer.itemSize,new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.float$], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),vertex_color_buffer,new cljs.core.Keyword(null,"location","location",1815599388),cljs_webgl.shaders.get_attrib_location(gl,shader,"a_color"),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635),vertex_color_buffer.itemSize,new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.float$], null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_pMatrix",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"values","values",372645556),projection.core.perspective_projection_matrix(fov,aspect_ratio,depth)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_mvMatrix",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"values","values",372645556),projection.core.model_view_matrix(translate,rotate,scale)], null)], null)], 0));
});
