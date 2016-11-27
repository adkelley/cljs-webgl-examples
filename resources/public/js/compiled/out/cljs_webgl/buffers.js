// Compiled by ClojureScript 1.9.293 {}
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
var args__26003__auto__ = [];
var len__25996__auto___26739 = arguments.length;
var i__25997__auto___26740 = (0);
while(true){
if((i__25997__auto___26740 < len__25996__auto___26739)){
args__26003__auto__.push((arguments[i__25997__auto___26740]));

var G__26741 = (i__25997__auto___26740 + (1));
i__25997__auto___26740 = G__26741;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((4) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((4)),(0),null)):null);
return cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26004__auto__);
});

cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,data,target,usage,p__26735){
var vec__26736 = p__26735;
var item_size = cljs.core.nth.call(null,vec__26736,(0),null);
var buffer = gl_context.createBuffer();
gl_context.bindBuffer(target,buffer);

gl_context.bufferData(target,data,usage);

if(cljs.core.truth_(item_size)){
buffer.itemSize = item_size;

buffer.numItems = cljs.core.quot.call(null,data.length,item_size);
} else {
}

return buffer;
});

cljs_webgl.buffers.create_buffer.cljs$lang$maxFixedArity = (4);

cljs_webgl.buffers.create_buffer.cljs$lang$applyTo = (function (seq26730){
var G__26731 = cljs.core.first.call(null,seq26730);
var seq26730__$1 = cljs.core.next.call(null,seq26730);
var G__26732 = cljs.core.first.call(null,seq26730__$1);
var seq26730__$2 = cljs.core.next.call(null,seq26730__$1);
var G__26733 = cljs.core.first.call(null,seq26730__$2);
var seq26730__$3 = cljs.core.next.call(null,seq26730__$2);
var G__26734 = cljs.core.first.call(null,seq26730__$3);
var seq26730__$4 = cljs.core.next.call(null,seq26730__$3);
return cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(G__26731,G__26732,G__26733,G__26734,seq26730__$4);
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
cljs_webgl.buffers.set_uniform = (function cljs_webgl$buffers$set_uniform(gl_context,shader,p__26742){
var map__26746 = p__26742;
var map__26746__$1 = ((((!((map__26746 == null)))?((((map__26746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26746):map__26746);
var name = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"values","values",372645556));
var transpose = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"transpose","transpose",-474726680));
var uniform_location = cljs_webgl.shaders.get_uniform_location.call(null,gl_context,shader,name);
var G__26748 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26748) {
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
cljs_webgl.buffers.set_attribute = (function cljs_webgl$buffers$set_attribute(gl_context,p__26750){
var map__26753 = p__26750;
var map__26753__$1 = ((((!((map__26753 == null)))?((((map__26753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26753):map__26753);
var buffer = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var location = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var components_per_vertex = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635));
var type = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized_QMARK_ = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword(null,"normalized?","normalized?",1246099953));
var stride = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
gl_context.bindBuffer(cljs_webgl.constants.buffer_object.array_buffer,buffer);

gl_context.enableVertexAttribArray(location);

return gl_context.vertexAttribPointer(location,(function (){var or__24888__auto__ = components_per_vertex;
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return buffer.itemSize;
}
})(),(function (){var or__24888__auto__ = type;
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return cljs_webgl.constants.data_type.float$;
}
})(),(function (){var or__24888__auto__ = normalized_QMARK_;
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return false;
}
})(),(function (){var or__24888__auto__ = stride;
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return (0);
}
})(),(function (){var or__24888__auto__ = offset;
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return (0);
}
})());
});
cljs_webgl.buffers.set_texture = (function cljs_webgl$buffers$set_texture(gl_context,shader,p__26755){
var map__26758 = p__26755;
var map__26758__$1 = ((((!((map__26758 == null)))?((((map__26758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26758):map__26758);
var texture = cljs.core.get.call(null,map__26758__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
var name = cljs.core.get.call(null,map__26758__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var texture_unit = cljs.core.get.call(null,map__26758__$1,new cljs.core.Keyword(null,"texture-unit","texture-unit",-731109059));
var unit = (cljs.core.truth_(texture_unit)?(cljs_webgl.constants.texture_unit.texture0 + texture_unit):cljs_webgl.constants.texture_unit.texture0);
var uniform_index = (function (){var or__24888__auto__ = texture_unit;
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return (0);
}
})();
gl_context.activeTexture(cljs_webgl.constants.texture_unit.texture0);

gl_context.bindTexture(cljs_webgl.constants.texture_target.texture_2d,texture);

return gl_context.uniform1i(cljs_webgl.shaders.get_uniform_location.call(null,gl_context,shader,name),(0));
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
var args__26003__auto__ = [];
var len__25996__auto___26791 = arguments.length;
var i__25997__auto___26792 = (0);
while(true){
if((i__25997__auto___26792 < len__25996__auto___26791)){
args__26003__auto__.push((arguments[i__25997__auto___26792]));

var G__26793 = (i__25997__auto___26792 + (1));
i__25997__auto___26792 = G__26793;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((1) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((1)),(0),null)):null);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26004__auto__);
});

cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,p__26762){
var map__26763 = p__26762;
var map__26763__$1 = ((((!((map__26763 == null)))?((((map__26763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26763):map__26763);
var opts = map__26763__$1;
var shader = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"shader","shader",1492833021));
var draw_mode = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794));
var first = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var count = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var attributes = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var uniforms = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var textures = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var element_array = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"element-array","element-array",38145164));
var capabilities = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"capabilities","capabilities",212739361));
gl_context.useProgram(shader);

var seq__26765_26794 = cljs.core.seq.call(null,uniforms);
var chunk__26766_26795 = null;
var count__26767_26796 = (0);
var i__26768_26797 = (0);
while(true){
if((i__26768_26797 < count__26767_26796)){
var u_26798 = cljs.core._nth.call(null,chunk__26766_26795,i__26768_26797);
cljs_webgl.buffers.set_uniform.call(null,gl_context,shader,u_26798);

var G__26799 = seq__26765_26794;
var G__26800 = chunk__26766_26795;
var G__26801 = count__26767_26796;
var G__26802 = (i__26768_26797 + (1));
seq__26765_26794 = G__26799;
chunk__26766_26795 = G__26800;
count__26767_26796 = G__26801;
i__26768_26797 = G__26802;
continue;
} else {
var temp__4657__auto___26803 = cljs.core.seq.call(null,seq__26765_26794);
if(temp__4657__auto___26803){
var seq__26765_26804__$1 = temp__4657__auto___26803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26765_26804__$1)){
var c__25702__auto___26805 = cljs.core.chunk_first.call(null,seq__26765_26804__$1);
var G__26806 = cljs.core.chunk_rest.call(null,seq__26765_26804__$1);
var G__26807 = c__25702__auto___26805;
var G__26808 = cljs.core.count.call(null,c__25702__auto___26805);
var G__26809 = (0);
seq__26765_26794 = G__26806;
chunk__26766_26795 = G__26807;
count__26767_26796 = G__26808;
i__26768_26797 = G__26809;
continue;
} else {
var u_26810 = cljs.core.first.call(null,seq__26765_26804__$1);
cljs_webgl.buffers.set_uniform.call(null,gl_context,shader,u_26810);

var G__26811 = cljs.core.next.call(null,seq__26765_26804__$1);
var G__26812 = null;
var G__26813 = (0);
var G__26814 = (0);
seq__26765_26794 = G__26811;
chunk__26766_26795 = G__26812;
count__26767_26796 = G__26813;
i__26768_26797 = G__26814;
continue;
}
} else {
}
}
break;
}

var seq__26769_26815 = cljs.core.seq.call(null,attributes);
var chunk__26770_26816 = null;
var count__26771_26817 = (0);
var i__26772_26818 = (0);
while(true){
if((i__26772_26818 < count__26771_26817)){
var a_26819 = cljs.core._nth.call(null,chunk__26770_26816,i__26772_26818);
cljs_webgl.buffers.set_attribute.call(null,gl_context,a_26819);

var G__26820 = seq__26769_26815;
var G__26821 = chunk__26770_26816;
var G__26822 = count__26771_26817;
var G__26823 = (i__26772_26818 + (1));
seq__26769_26815 = G__26820;
chunk__26770_26816 = G__26821;
count__26771_26817 = G__26822;
i__26772_26818 = G__26823;
continue;
} else {
var temp__4657__auto___26824 = cljs.core.seq.call(null,seq__26769_26815);
if(temp__4657__auto___26824){
var seq__26769_26825__$1 = temp__4657__auto___26824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26769_26825__$1)){
var c__25702__auto___26826 = cljs.core.chunk_first.call(null,seq__26769_26825__$1);
var G__26827 = cljs.core.chunk_rest.call(null,seq__26769_26825__$1);
var G__26828 = c__25702__auto___26826;
var G__26829 = cljs.core.count.call(null,c__25702__auto___26826);
var G__26830 = (0);
seq__26769_26815 = G__26827;
chunk__26770_26816 = G__26828;
count__26771_26817 = G__26829;
i__26772_26818 = G__26830;
continue;
} else {
var a_26831 = cljs.core.first.call(null,seq__26769_26825__$1);
cljs_webgl.buffers.set_attribute.call(null,gl_context,a_26831);

var G__26832 = cljs.core.next.call(null,seq__26769_26825__$1);
var G__26833 = null;
var G__26834 = (0);
var G__26835 = (0);
seq__26769_26815 = G__26832;
chunk__26770_26816 = G__26833;
count__26771_26817 = G__26834;
i__26772_26818 = G__26835;
continue;
}
} else {
}
}
break;
}

var seq__26773_26836 = cljs.core.seq.call(null,textures);
var chunk__26774_26837 = null;
var count__26775_26838 = (0);
var i__26776_26839 = (0);
while(true){
if((i__26776_26839 < count__26775_26838)){
var t_26840 = cljs.core._nth.call(null,chunk__26774_26837,i__26776_26839);
cljs_webgl.buffers.set_texture.call(null,gl_context,shader,t_26840);

var G__26841 = seq__26773_26836;
var G__26842 = chunk__26774_26837;
var G__26843 = count__26775_26838;
var G__26844 = (i__26776_26839 + (1));
seq__26773_26836 = G__26841;
chunk__26774_26837 = G__26842;
count__26775_26838 = G__26843;
i__26776_26839 = G__26844;
continue;
} else {
var temp__4657__auto___26845 = cljs.core.seq.call(null,seq__26773_26836);
if(temp__4657__auto___26845){
var seq__26773_26846__$1 = temp__4657__auto___26845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26773_26846__$1)){
var c__25702__auto___26847 = cljs.core.chunk_first.call(null,seq__26773_26846__$1);
var G__26848 = cljs.core.chunk_rest.call(null,seq__26773_26846__$1);
var G__26849 = c__25702__auto___26847;
var G__26850 = cljs.core.count.call(null,c__25702__auto___26847);
var G__26851 = (0);
seq__26773_26836 = G__26848;
chunk__26774_26837 = G__26849;
count__26775_26838 = G__26850;
i__26776_26839 = G__26851;
continue;
} else {
var t_26852 = cljs.core.first.call(null,seq__26773_26846__$1);
cljs_webgl.buffers.set_texture.call(null,gl_context,shader,t_26852);

var G__26853 = cljs.core.next.call(null,seq__26773_26846__$1);
var G__26854 = null;
var G__26855 = (0);
var G__26856 = (0);
seq__26773_26836 = G__26853;
chunk__26774_26837 = G__26854;
count__26775_26838 = G__26855;
i__26776_26839 = G__26856;
continue;
}
} else {
}
}
break;
}

var seq__26777_26857 = cljs.core.seq.call(null,cljs.core.merge.call(null,cljs_webgl.buffers.default_capabilities,capabilities));
var chunk__26778_26858 = null;
var count__26779_26859 = (0);
var i__26780_26860 = (0);
while(true){
if((i__26780_26860 < count__26779_26859)){
var vec__26781_26861 = cljs.core._nth.call(null,chunk__26778_26858,i__26780_26860);
var capability_26862 = cljs.core.nth.call(null,vec__26781_26861,(0),null);
var enabled_QMARK__26863 = cljs.core.nth.call(null,vec__26781_26861,(1),null);
cljs_webgl.buffers.set_capability.call(null,gl_context,capability_26862,enabled_QMARK__26863);

var G__26864 = seq__26777_26857;
var G__26865 = chunk__26778_26858;
var G__26866 = count__26779_26859;
var G__26867 = (i__26780_26860 + (1));
seq__26777_26857 = G__26864;
chunk__26778_26858 = G__26865;
count__26779_26859 = G__26866;
i__26780_26860 = G__26867;
continue;
} else {
var temp__4657__auto___26868 = cljs.core.seq.call(null,seq__26777_26857);
if(temp__4657__auto___26868){
var seq__26777_26869__$1 = temp__4657__auto___26868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26777_26869__$1)){
var c__25702__auto___26870 = cljs.core.chunk_first.call(null,seq__26777_26869__$1);
var G__26871 = cljs.core.chunk_rest.call(null,seq__26777_26869__$1);
var G__26872 = c__25702__auto___26870;
var G__26873 = cljs.core.count.call(null,c__25702__auto___26870);
var G__26874 = (0);
seq__26777_26857 = G__26871;
chunk__26778_26858 = G__26872;
count__26779_26859 = G__26873;
i__26780_26860 = G__26874;
continue;
} else {
var vec__26784_26875 = cljs.core.first.call(null,seq__26777_26869__$1);
var capability_26876 = cljs.core.nth.call(null,vec__26784_26875,(0),null);
var enabled_QMARK__26877 = cljs.core.nth.call(null,vec__26784_26875,(1),null);
cljs_webgl.buffers.set_capability.call(null,gl_context,capability_26876,enabled_QMARK__26877);

var G__26878 = cljs.core.next.call(null,seq__26777_26869__$1);
var G__26879 = null;
var G__26880 = (0);
var G__26881 = (0);
seq__26777_26857 = G__26878;
chunk__26778_26858 = G__26879;
count__26779_26859 = G__26880;
i__26780_26860 = G__26881;
continue;
}
} else {
}
}
break;
}

if((element_array == null)){
gl_context.drawArrays(draw_mode,(function (){var or__24888__auto__ = first;
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return (0);
}
})(),count);
} else {
gl_context.bindBuffer(cljs_webgl.constants.buffer_object.element_array_buffer,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(element_array));

gl_context.drawElements(draw_mode,count,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element_array),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(element_array));
}

var seq__26787_26882 = cljs.core.seq.call(null,attributes);
var chunk__26788_26883 = null;
var count__26789_26884 = (0);
var i__26790_26885 = (0);
while(true){
if((i__26790_26885 < count__26789_26884)){
var a_26886 = cljs.core._nth.call(null,chunk__26788_26883,i__26790_26885);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_26886));

var G__26887 = seq__26787_26882;
var G__26888 = chunk__26788_26883;
var G__26889 = count__26789_26884;
var G__26890 = (i__26790_26885 + (1));
seq__26787_26882 = G__26887;
chunk__26788_26883 = G__26888;
count__26789_26884 = G__26889;
i__26790_26885 = G__26890;
continue;
} else {
var temp__4657__auto___26891 = cljs.core.seq.call(null,seq__26787_26882);
if(temp__4657__auto___26891){
var seq__26787_26892__$1 = temp__4657__auto___26891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26787_26892__$1)){
var c__25702__auto___26893 = cljs.core.chunk_first.call(null,seq__26787_26892__$1);
var G__26894 = cljs.core.chunk_rest.call(null,seq__26787_26892__$1);
var G__26895 = c__25702__auto___26893;
var G__26896 = cljs.core.count.call(null,c__25702__auto___26893);
var G__26897 = (0);
seq__26787_26882 = G__26894;
chunk__26788_26883 = G__26895;
count__26789_26884 = G__26896;
i__26790_26885 = G__26897;
continue;
} else {
var a_26898 = cljs.core.first.call(null,seq__26787_26892__$1);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_26898));

var G__26899 = cljs.core.next.call(null,seq__26787_26892__$1);
var G__26900 = null;
var G__26901 = (0);
var G__26902 = (0);
seq__26787_26882 = G__26899;
chunk__26788_26883 = G__26900;
count__26789_26884 = G__26901;
i__26790_26885 = G__26902;
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

cljs_webgl.buffers.draw_BANG_.cljs$lang$applyTo = (function (seq26760){
var G__26761 = cljs.core.first.call(null,seq26760);
var seq26760__$1 = cljs.core.next.call(null,seq26760);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26761,seq26760__$1);
});


//# sourceMappingURL=buffers.js.map?rel=1480258608885