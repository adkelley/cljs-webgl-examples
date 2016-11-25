// Compiled by ClojureScript 1.9.293 {:static-fns true}
goog.provide('cljs_webgl.buffers');
goog.require('cljs.core');
goog.require('cljs_webgl.constants.texture_target');
goog.require('cljs_webgl.constants.buffer_object');
goog.require('cljs_webgl.constants.clear_buffer_mask');
goog.require('cljs_webgl.constants.texture_unit');
goog.require('cljs_webgl.constants.capability');
goog.require('cljs_webgl.constants.data_type');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.typed_arrays');
/**
 * Creates a new buffer with initialized `data`.
 * 
 *   `data` must be a typed-array
 * 
 *   `target` may be `cljs-webgl.constants.buffer-object/array-buffer` or `cljs-webgl.constants.buffer-object/element-array-buffer`
 * 
 *   `usage` may be `cljs-webgl.constants.buffer-object/static-draw` or `cljs-webgl.constants.buffer-object/dynamic-draw`
 * 
 *   `item-size` [optional] will set the item size as an attribute on the buffer, and the calculate the number of items accordingly.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGenBuffers(Similar to createBuffer)](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGenBuffers.xml)
 *   * [glBindBuffer](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glBindBuffer.xml)
 *   * [glBufferData](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glBufferData.xml)
 */
cljs_webgl.buffers.create_buffer = (function cljs_webgl$buffers$create_buffer(var_args){
var args__7658__auto__ = [];
var len__7651__auto___12613 = arguments.length;
var i__7652__auto___12614 = (0);
while(true){
if((i__7652__auto___12614 < len__7651__auto___12613)){
args__7658__auto__.push((arguments[i__7652__auto___12614]));

var G__12615 = (i__7652__auto___12614 + (1));
i__7652__auto___12614 = G__12615;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((4) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((4)),(0),null)):null);
return cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7659__auto__);
});

cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,data,target,usage,p__12609){
var vec__12610 = p__12609;
var item_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12610,(0),null);
var buffer = gl_context.createBuffer();
gl_context.bindBuffer(target,buffer);

gl_context.bufferData(target,data,usage);

if(cljs.core.truth_(item_size)){
buffer.itemSize = item_size;

buffer.numItems = cljs.core.quot(data.length,item_size);
} else {
}

return buffer;
});

cljs_webgl.buffers.create_buffer.cljs$lang$maxFixedArity = (4);

cljs_webgl.buffers.create_buffer.cljs$lang$applyTo = (function (seq12604){
var G__12605 = cljs.core.first(seq12604);
var seq12604__$1 = cljs.core.next(seq12604);
var G__12606 = cljs.core.first(seq12604__$1);
var seq12604__$2 = cljs.core.next(seq12604__$1);
var G__12607 = cljs.core.first(seq12604__$2);
var seq12604__$3 = cljs.core.next(seq12604__$2);
var G__12608 = cljs.core.first(seq12604__$3);
var seq12604__$4 = cljs.core.next(seq12604__$3);
return cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(G__12605,G__12606,G__12607,G__12608,seq12604__$4);
});

/**
 * Clears the color buffer with specified `red`, `green`, `blue` and `alpha` values.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glClearColor](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearColor.xml)
 *   * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)
 */
cljs_webgl.buffers.clear_color_buffer = (function cljs_webgl$buffers$clear_color_buffer(gl_context,red,green,blue,alpha){
gl_context.clearColor(red,green,blue,alpha);

gl_context.clear(cljs_webgl.constants.clear_buffer_mask.color_buffer_bit);

return gl_context;
});
/**
 * Clears the depth buffer with specified `depth` value.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glClearDepthf](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearDepthf.xml)
 *   * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)
 */
cljs_webgl.buffers.clear_depth_buffer = (function cljs_webgl$buffers$clear_depth_buffer(gl_context,depth){
gl_context.clearDepth(depth);

gl_context.clear(cljs_webgl.constants.clear_buffer_mask.depth_buffer_bit);

return gl_context;
});
/**
 * Clears the stencil buffer with specified `index` value.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glClearStencil](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearStencil.xml)
 *   * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)
 */
cljs_webgl.buffers.clear_stencil_buffer = (function cljs_webgl$buffers$clear_stencil_buffer(gl_context,index){
gl_context.clearStencil(index);

gl_context.clear(cljs_webgl.constants.clear_buffer_mask.stencil_buffer_bit);

return gl_context;
});
cljs_webgl.buffers.set_uniform = (function cljs_webgl$buffers$set_uniform(gl_context,shader,p__12616){
var map__12620 = p__12616;
var map__12620__$1 = ((((!((map__12620 == null)))?((((map__12620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12620):map__12620);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12620__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12620__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12620__$1,new cljs.core.Keyword(null,"values","values",372645556));
var transpose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12620__$1,new cljs.core.Keyword(null,"transpose","transpose",-474726680));
var uniform_location = cljs_webgl.shaders.get_uniform_location(gl_context,shader,name);
var G__12622 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12622) {
case "bvec3":
return gl_context.uniform3fv(uniform_location,values);

break;
case "int":
return gl_context.uniform1iv(uniform_location,values);

break;
case "mat3":
return gl_context.uniformMatrix3fv(uniform_location,transpose,values);

break;
case "vec3":
return gl_context.uniform3fv(uniform_location,values);

break;
case "float":
return gl_context.uniform1fv(uniform_location,values);

break;
case "ivec4":
return gl_context.uniform4iv(uniform_location,values);

break;
case "mat2":
return gl_context.uniformMatrix2fv(uniform_location,transpose,values);

break;
case "ivec2":
return gl_context.uniform2iv(uniform_location,values);

break;
case "vec4":
return gl_context.uniform4fv(uniform_location,values);

break;
case "vec2":
return gl_context.uniform2fv(uniform_location,values);

break;
case "bvec2":
return gl_context.uniform2fv(uniform_location,values);

break;
case "mat4":
return gl_context.uniformMatrix4fv(uniform_location,transpose,values);

break;
case "bvec4":
return gl_context.uniform4fv(uniform_location,values);

break;
case "bool":
return gl_context.uniform1fv(uniform_location,values);

break;
case "ivec3":
return gl_context.uniform3iv(uniform_location,values);

break;
default:
return null;

}
});
cljs_webgl.buffers.set_attribute = (function cljs_webgl$buffers$set_attribute(gl_context,p__12624){
var map__12627 = p__12624;
var map__12627__$1 = ((((!((map__12627 == null)))?((((map__12627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12627):map__12627);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12627__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12627__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var components_per_vertex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12627__$1,new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12627__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12627__$1,new cljs.core.Keyword(null,"normalized?","normalized?",1246099953));
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12627__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12627__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
gl_context.bindBuffer(cljs_webgl.constants.buffer_object.array_buffer,buffer);

gl_context.enableVertexAttribArray(location);

return gl_context.vertexAttribPointer(location,(function (){var or__6543__auto__ = components_per_vertex;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return buffer.itemSize;
}
})(),(function (){var or__6543__auto__ = type;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs_webgl.constants.data_type.float$;
}
})(),(function (){var or__6543__auto__ = normalized_QMARK_;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return false;
}
})(),(function (){var or__6543__auto__ = stride;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})(),(function (){var or__6543__auto__ = offset;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})());
});
cljs_webgl.buffers.set_texture = (function cljs_webgl$buffers$set_texture(gl_context,shader,p__12629){
var map__12632 = p__12629;
var map__12632__$1 = ((((!((map__12632 == null)))?((((map__12632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12632):map__12632);
var texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12632__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12632__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var texture_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12632__$1,new cljs.core.Keyword(null,"texture-unit","texture-unit",-731109059));
var unit = (cljs.core.truth_(texture_unit)?(cljs_webgl.constants.texture_unit.texture0 + texture_unit):cljs_webgl.constants.texture_unit.texture0);
var uniform_index = (function (){var or__6543__auto__ = texture_unit;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})();
gl_context.activeTexture(cljs_webgl.constants.texture_unit.texture0);

gl_context.bindTexture(cljs_webgl.constants.texture_target.texture_2d,texture);

return gl_context.uniform1i(cljs_webgl.shaders.get_uniform_location(gl_context,shader,name),(0));
});
cljs_webgl.buffers.default_capabilities = cljs.core.PersistentHashMap.fromArrays([cljs_webgl.constants.capability.stencil_test,cljs_webgl.constants.capability.dither,cljs_webgl.constants.capability.depth_test,cljs_webgl.constants.capability.blend,cljs_webgl.constants.capability.scissor_test,cljs_webgl.constants.capability.sample_alpha_to_coverage,cljs_webgl.constants.capability.polygon_offset_fill,cljs_webgl.constants.capability.cull_face,cljs_webgl.constants.capability.sample_coverage],[false,true,false,false,false,false,false,false,false]);
/**
 * Enables/disables acording to `enabled?` a given server-side GL `capability`
 * 
 * The valid values for `capability` are: `cljs-webgl.constants.capability/blend`,
 * `cljs-webgl.constants.capability/cull-face`, `cljs-webgl.constants.capability/depth-test`, `cljs-webgl.constants.capability/dither`,
 * `cljs-webgl.constants.capability/polygon-offset-fill`, `cljs-webgl.constants.capability/sample-alpha-to-coverage`,
 * `cljs-webgl.constants.capability/sample-coverage`, `cljs-webgl.constants.capability/scissor-test`,
 * `cljs-webgl.constants.capability/stencil-test`
 * 
 * Relevant OpenGL ES reference pages:
 * 
 * * [glEnable](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glEnable.xml)
 * * [glDisable](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glDisable.xml)
 */
cljs_webgl.buffers.set_capability = (function cljs_webgl$buffers$set_capability(gl_context,capability,enabled_QMARK_){
if(cljs.core.truth_(enabled_QMARK_)){
gl_context.enable(capability);
} else {
gl_context.disable(capability);
}

return gl_context;
});
cljs_webgl.buffers.draw_BANG_ = (function cljs_webgl$buffers$draw_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___12665 = arguments.length;
var i__7652__auto___12666 = (0);
while(true){
if((i__7652__auto___12666 < len__7651__auto___12665)){
args__7658__auto__.push((arguments[i__7652__auto___12666]));

var G__12667 = (i__7652__auto___12666 + (1));
i__7652__auto___12666 = G__12667;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,p__12636){
var map__12637 = p__12636;
var map__12637__$1 = ((((!((map__12637 == null)))?((((map__12637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12637):map__12637);
var opts = map__12637__$1;
var shader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12637__$1,new cljs.core.Keyword(null,"shader","shader",1492833021));
var draw_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12637__$1,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794));
var first = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12637__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12637__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12637__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var uniforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12637__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var textures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12637__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var element_array = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12637__$1,new cljs.core.Keyword(null,"element-array","element-array",38145164));
var capabilities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12637__$1,new cljs.core.Keyword(null,"capabilities","capabilities",212739361));
gl_context.useProgram(shader);

var seq__12639_12668 = cljs.core.seq(uniforms);
var chunk__12640_12669 = null;
var count__12641_12670 = (0);
var i__12642_12671 = (0);
while(true){
if((i__12642_12671 < count__12641_12670)){
var u_12672 = chunk__12640_12669.cljs$core$IIndexed$_nth$arity$2(null,i__12642_12671);
cljs_webgl.buffers.set_uniform(gl_context,shader,u_12672);

var G__12673 = seq__12639_12668;
var G__12674 = chunk__12640_12669;
var G__12675 = count__12641_12670;
var G__12676 = (i__12642_12671 + (1));
seq__12639_12668 = G__12673;
chunk__12640_12669 = G__12674;
count__12641_12670 = G__12675;
i__12642_12671 = G__12676;
continue;
} else {
var temp__4657__auto___12677 = cljs.core.seq(seq__12639_12668);
if(temp__4657__auto___12677){
var seq__12639_12678__$1 = temp__4657__auto___12677;
if(cljs.core.chunked_seq_QMARK_(seq__12639_12678__$1)){
var c__7357__auto___12679 = cljs.core.chunk_first(seq__12639_12678__$1);
var G__12680 = cljs.core.chunk_rest(seq__12639_12678__$1);
var G__12681 = c__7357__auto___12679;
var G__12682 = cljs.core.count(c__7357__auto___12679);
var G__12683 = (0);
seq__12639_12668 = G__12680;
chunk__12640_12669 = G__12681;
count__12641_12670 = G__12682;
i__12642_12671 = G__12683;
continue;
} else {
var u_12684 = cljs.core.first(seq__12639_12678__$1);
cljs_webgl.buffers.set_uniform(gl_context,shader,u_12684);

var G__12685 = cljs.core.next(seq__12639_12678__$1);
var G__12686 = null;
var G__12687 = (0);
var G__12688 = (0);
seq__12639_12668 = G__12685;
chunk__12640_12669 = G__12686;
count__12641_12670 = G__12687;
i__12642_12671 = G__12688;
continue;
}
} else {
}
}
break;
}

var seq__12643_12689 = cljs.core.seq(attributes);
var chunk__12644_12690 = null;
var count__12645_12691 = (0);
var i__12646_12692 = (0);
while(true){
if((i__12646_12692 < count__12645_12691)){
var a_12693 = chunk__12644_12690.cljs$core$IIndexed$_nth$arity$2(null,i__12646_12692);
cljs_webgl.buffers.set_attribute(gl_context,a_12693);

var G__12694 = seq__12643_12689;
var G__12695 = chunk__12644_12690;
var G__12696 = count__12645_12691;
var G__12697 = (i__12646_12692 + (1));
seq__12643_12689 = G__12694;
chunk__12644_12690 = G__12695;
count__12645_12691 = G__12696;
i__12646_12692 = G__12697;
continue;
} else {
var temp__4657__auto___12698 = cljs.core.seq(seq__12643_12689);
if(temp__4657__auto___12698){
var seq__12643_12699__$1 = temp__4657__auto___12698;
if(cljs.core.chunked_seq_QMARK_(seq__12643_12699__$1)){
var c__7357__auto___12700 = cljs.core.chunk_first(seq__12643_12699__$1);
var G__12701 = cljs.core.chunk_rest(seq__12643_12699__$1);
var G__12702 = c__7357__auto___12700;
var G__12703 = cljs.core.count(c__7357__auto___12700);
var G__12704 = (0);
seq__12643_12689 = G__12701;
chunk__12644_12690 = G__12702;
count__12645_12691 = G__12703;
i__12646_12692 = G__12704;
continue;
} else {
var a_12705 = cljs.core.first(seq__12643_12699__$1);
cljs_webgl.buffers.set_attribute(gl_context,a_12705);

var G__12706 = cljs.core.next(seq__12643_12699__$1);
var G__12707 = null;
var G__12708 = (0);
var G__12709 = (0);
seq__12643_12689 = G__12706;
chunk__12644_12690 = G__12707;
count__12645_12691 = G__12708;
i__12646_12692 = G__12709;
continue;
}
} else {
}
}
break;
}

var seq__12647_12710 = cljs.core.seq(textures);
var chunk__12648_12711 = null;
var count__12649_12712 = (0);
var i__12650_12713 = (0);
while(true){
if((i__12650_12713 < count__12649_12712)){
var t_12714 = chunk__12648_12711.cljs$core$IIndexed$_nth$arity$2(null,i__12650_12713);
cljs_webgl.buffers.set_texture(gl_context,shader,t_12714);

var G__12715 = seq__12647_12710;
var G__12716 = chunk__12648_12711;
var G__12717 = count__12649_12712;
var G__12718 = (i__12650_12713 + (1));
seq__12647_12710 = G__12715;
chunk__12648_12711 = G__12716;
count__12649_12712 = G__12717;
i__12650_12713 = G__12718;
continue;
} else {
var temp__4657__auto___12719 = cljs.core.seq(seq__12647_12710);
if(temp__4657__auto___12719){
var seq__12647_12720__$1 = temp__4657__auto___12719;
if(cljs.core.chunked_seq_QMARK_(seq__12647_12720__$1)){
var c__7357__auto___12721 = cljs.core.chunk_first(seq__12647_12720__$1);
var G__12722 = cljs.core.chunk_rest(seq__12647_12720__$1);
var G__12723 = c__7357__auto___12721;
var G__12724 = cljs.core.count(c__7357__auto___12721);
var G__12725 = (0);
seq__12647_12710 = G__12722;
chunk__12648_12711 = G__12723;
count__12649_12712 = G__12724;
i__12650_12713 = G__12725;
continue;
} else {
var t_12726 = cljs.core.first(seq__12647_12720__$1);
cljs_webgl.buffers.set_texture(gl_context,shader,t_12726);

var G__12727 = cljs.core.next(seq__12647_12720__$1);
var G__12728 = null;
var G__12729 = (0);
var G__12730 = (0);
seq__12647_12710 = G__12727;
chunk__12648_12711 = G__12728;
count__12649_12712 = G__12729;
i__12650_12713 = G__12730;
continue;
}
} else {
}
}
break;
}

var seq__12651_12731 = cljs.core.seq(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_webgl.buffers.default_capabilities,capabilities], 0)));
var chunk__12652_12732 = null;
var count__12653_12733 = (0);
var i__12654_12734 = (0);
while(true){
if((i__12654_12734 < count__12653_12733)){
var vec__12655_12735 = chunk__12652_12732.cljs$core$IIndexed$_nth$arity$2(null,i__12654_12734);
var capability_12736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12655_12735,(0),null);
var enabled_QMARK__12737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12655_12735,(1),null);
cljs_webgl.buffers.set_capability(gl_context,capability_12736,enabled_QMARK__12737);

var G__12738 = seq__12651_12731;
var G__12739 = chunk__12652_12732;
var G__12740 = count__12653_12733;
var G__12741 = (i__12654_12734 + (1));
seq__12651_12731 = G__12738;
chunk__12652_12732 = G__12739;
count__12653_12733 = G__12740;
i__12654_12734 = G__12741;
continue;
} else {
var temp__4657__auto___12742 = cljs.core.seq(seq__12651_12731);
if(temp__4657__auto___12742){
var seq__12651_12743__$1 = temp__4657__auto___12742;
if(cljs.core.chunked_seq_QMARK_(seq__12651_12743__$1)){
var c__7357__auto___12744 = cljs.core.chunk_first(seq__12651_12743__$1);
var G__12745 = cljs.core.chunk_rest(seq__12651_12743__$1);
var G__12746 = c__7357__auto___12744;
var G__12747 = cljs.core.count(c__7357__auto___12744);
var G__12748 = (0);
seq__12651_12731 = G__12745;
chunk__12652_12732 = G__12746;
count__12653_12733 = G__12747;
i__12654_12734 = G__12748;
continue;
} else {
var vec__12658_12749 = cljs.core.first(seq__12651_12743__$1);
var capability_12750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12658_12749,(0),null);
var enabled_QMARK__12751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12658_12749,(1),null);
cljs_webgl.buffers.set_capability(gl_context,capability_12750,enabled_QMARK__12751);

var G__12752 = cljs.core.next(seq__12651_12743__$1);
var G__12753 = null;
var G__12754 = (0);
var G__12755 = (0);
seq__12651_12731 = G__12752;
chunk__12652_12732 = G__12753;
count__12653_12733 = G__12754;
i__12654_12734 = G__12755;
continue;
}
} else {
}
}
break;
}

if((element_array == null)){
gl_context.drawArrays(draw_mode,(function (){var or__6543__auto__ = first;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})(),count);
} else {
gl_context.bindBuffer(cljs_webgl.constants.buffer_object.element_array_buffer,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(element_array));

gl_context.drawElements(draw_mode,count,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element_array),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(element_array));
}

var seq__12661_12756 = cljs.core.seq(attributes);
var chunk__12662_12757 = null;
var count__12663_12758 = (0);
var i__12664_12759 = (0);
while(true){
if((i__12664_12759 < count__12663_12758)){
var a_12760 = chunk__12662_12757.cljs$core$IIndexed$_nth$arity$2(null,i__12664_12759);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_12760));

var G__12761 = seq__12661_12756;
var G__12762 = chunk__12662_12757;
var G__12763 = count__12663_12758;
var G__12764 = (i__12664_12759 + (1));
seq__12661_12756 = G__12761;
chunk__12662_12757 = G__12762;
count__12663_12758 = G__12763;
i__12664_12759 = G__12764;
continue;
} else {
var temp__4657__auto___12765 = cljs.core.seq(seq__12661_12756);
if(temp__4657__auto___12765){
var seq__12661_12766__$1 = temp__4657__auto___12765;
if(cljs.core.chunked_seq_QMARK_(seq__12661_12766__$1)){
var c__7357__auto___12767 = cljs.core.chunk_first(seq__12661_12766__$1);
var G__12768 = cljs.core.chunk_rest(seq__12661_12766__$1);
var G__12769 = c__7357__auto___12767;
var G__12770 = cljs.core.count(c__7357__auto___12767);
var G__12771 = (0);
seq__12661_12756 = G__12768;
chunk__12662_12757 = G__12769;
count__12663_12758 = G__12770;
i__12664_12759 = G__12771;
continue;
} else {
var a_12772 = cljs.core.first(seq__12661_12766__$1);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_12772));

var G__12773 = cljs.core.next(seq__12661_12766__$1);
var G__12774 = null;
var G__12775 = (0);
var G__12776 = (0);
seq__12661_12756 = G__12773;
chunk__12662_12757 = G__12774;
count__12663_12758 = G__12775;
i__12664_12759 = G__12776;
continue;
}
} else {
}
}
break;
}

return gl_context;
});

cljs_webgl.buffers.draw_BANG_.cljs$lang$maxFixedArity = (1);

cljs_webgl.buffers.draw_BANG_.cljs$lang$applyTo = (function (seq12634){
var G__12635 = cljs.core.first(seq12634);
var seq12634__$1 = cljs.core.next(seq12634);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12635,seq12634__$1);
});

