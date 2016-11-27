// Compiled by ClojureScript 1.9.293 {}
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
goog.require('mat4');
goog.require('cljs_webgl.constants.draw_mode');
projection.core.log = (function projection$core$log(var_args){
var args__26003__auto__ = [];
var len__25996__auto___26051 = arguments.length;
var i__25997__auto___26052 = (0);
while(true){
if((i__25997__auto___26052 < len__25996__auto___26051)){
args__26003__auto__.push((arguments[i__25997__auto___26052]));

var G__26053 = (i__25997__auto___26052 + (1));
i__25997__auto___26052 = G__26053;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((0) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((0)),(0),null)):null);
return projection.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26004__auto__);
});

projection.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.to_array.call(null,args));
});

projection.core.log.cljs$lang$maxFixedArity = (0);

projection.core.log.cljs$lang$applyTo = (function (seq26050){
return projection.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26050));
});

projection.core.vertex_shader_source = "attribute vec4 a_position;\n   attribute vec4 a_color;\n   uniform mat4 u_pMatrix;\n   uniform mat4 u_mvMatrix;\n   varying vec4 v_color;\n\n   void main() {\n     gl_Position = u_pMatrix * u_mvMatrix * a_position;\n     v_color = a_color;\n   }";
projection.core.fragment_shader_source = "precision mediump float;\n   uniform vec4 u_color;\n   varying vec4 v_color;\n\n   void main() {\n     gl_FragColor = v_color;\n   }";
projection.core.deg__GT_rad = (function projection$core$deg__GT_rad(degrees){
return ((degrees * Math.PI) / (180));
});
if(typeof projection.core.vertex_color !== 'undefined'){
} else {
projection.core.vertex_color = cljs_webgl.typed_arrays.float32.call(null,new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0,0.0,1.0,0.0,1.0,0.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,1.0,0.0,1.0,1.0,1.0,1.0,1.0], null));
}
projection.core.ortho_projection_matrix = (function projection$core$ortho_projection_matrix(frustrum){
var halfX = (cljs.core.nth.call(null,frustrum,(0)) / 2.0);
var halfY = (cljs.core.nth.call(null,frustrum,(1)) / 2.0);
var halfZ = (cljs.core.nth.call(null,frustrum,(2)) / 2.0);
return mat4.ortho.call(null,mat4.create.call(null),(- halfX),halfX,(- halfY),halfY,(- halfZ),(10));
});
projection.core.perspective_projection_matrix = (function projection$core$perspective_projection_matrix(fov,aspect_ratio,depth){
return mat4.perspective.call(null,mat4.create.call(null),fov,aspect_ratio,cljs.core.nth.call(null,depth,(0)),cljs.core.nth.call(null,depth,(1)));
});
projection.core.model_view_matrix = (function projection$core$model_view_matrix(t,r,s){
var m = mat4.create.call(null);
mat4.translate.call(null,m,m,cljs.core.clj__GT_js.call(null,t));

mat4.rotateX.call(null,m,m,projection.core.deg__GT_rad.call(null,cljs.core.nth.call(null,r,(0))));

mat4.rotateY.call(null,m,m,projection.core.deg__GT_rad.call(null,cljs.core.nth.call(null,r,(1))));

mat4.rotateZ.call(null,m,m,projection.core.deg__GT_rad.call(null,cljs.core.nth.call(null,r,(2))));

return mat4.scale.call(null,m,m,cljs.core.clj__GT_js.call(null,s));
});
projection.core.start = (function projection$core$start(tx,ty,tz,rx,ry,rz,sx,sy,sz){
var canvas = document.getElementById("canvas");
var gl = cljs_webgl.context.get_context.call(null,document.getElementById("canvas"));
var shader = cljs_webgl.shaders.create_program.call(null,gl,cljs_webgl.shaders.create_shader.call(null,gl,cljs_webgl.constants.shader.vertex_shader,projection.core.vertex_shader_source),cljs_webgl.shaders.create_shader.call(null,gl,cljs_webgl.constants.shader.fragment_shader,projection.core.fragment_shader_source));
var vertex_buffer = cljs_webgl.buffers.create_buffer.call(null,gl,geometry.basic_shapes.square,cljs_webgl.constants.buffer_object.array_buffer,cljs_webgl.constants.buffer_object.static_draw,(3));
var vertex_color_buffer = cljs_webgl.buffers.create_buffer.call(null,gl,projection.core.vertex_color,cljs_webgl.constants.buffer_object.array_buffer,cljs_webgl.constants.buffer_object.static_draw,(4));
var translate = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,tz], null);
var rotate = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,ry,rz], null);
var scale = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy,sz], null);
var ortho = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10)], null);
var fov = (45);
var aspect_ratio = (function (){var map__26056 = gl_helpers.core.get_viewport.call(null,gl);
var map__26056__$1 = ((((!((map__26056 == null)))?((((map__26056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26056):map__26056);
var width = cljs.core.get.call(null,map__26056__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__26056__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (width / height);
})();
var depth = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,(100)], null);
return cljs_webgl.buffers.draw_BANG_.call(null,cljs_webgl.buffers.clear_depth_buffer.call(null,cljs_webgl.buffers.clear_color_buffer.call(null,gl,0.2,0.2,0.2,(1)),(1)),new cljs.core.Keyword(null,"shader","shader",1492833021),shader,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),cljs_webgl.constants.draw_mode.triangles,new cljs.core.Keyword(null,"count","count",2139924085),vertex_buffer.numItems,new cljs.core.Keyword(null,"capabilities","capabilities",212739361),cljs.core.PersistentArrayMap.fromArray([cljs_webgl.constants.capability.depth_test,true], true, false),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),vertex_buffer,new cljs.core.Keyword(null,"location","location",1815599388),cljs_webgl.shaders.get_attrib_location.call(null,gl,shader,"a_position"),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635),vertex_buffer.itemSize,new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.float$], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),vertex_color_buffer,new cljs.core.Keyword(null,"location","location",1815599388),cljs_webgl.shaders.get_attrib_location.call(null,gl,shader,"a_color"),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635),vertex_color_buffer.itemSize,new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.float$], null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_pMatrix",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"values","values",372645556),projection.core.perspective_projection_matrix.call(null,fov,aspect_ratio,depth)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_mvMatrix",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"values","values",372645556),projection.core.model_view_matrix.call(null,translate,rotate,scale)], null)], null));
});

//# sourceMappingURL=core.js.map?rel=1480282064233