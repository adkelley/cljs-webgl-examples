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
var len__25996__auto___33879 = arguments.length;
var i__25997__auto___33880 = (0);
while(true){
if((i__25997__auto___33880 < len__25996__auto___33879)){
args__26003__auto__.push((arguments[i__25997__auto___33880]));

var G__33881 = (i__25997__auto___33880 + (1));
i__25997__auto___33880 = G__33881;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((4) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((4)),(0),null)):null);
return cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26004__auto__);
});

cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,data,target,usage,p__33875){
var vec__33876 = p__33875;
var item_size = cljs.core.nth.call(null,vec__33876,(0),null);
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

cljs_webgl.buffers.create_buffer.cljs$lang$applyTo = (function (seq33870){
var G__33871 = cljs.core.first.call(null,seq33870);
var seq33870__$1 = cljs.core.next.call(null,seq33870);
var G__33872 = cljs.core.first.call(null,seq33870__$1);
var seq33870__$2 = cljs.core.next.call(null,seq33870__$1);
var G__33873 = cljs.core.first.call(null,seq33870__$2);
var seq33870__$3 = cljs.core.next.call(null,seq33870__$2);
var G__33874 = cljs.core.first.call(null,seq33870__$3);
var seq33870__$4 = cljs.core.next.call(null,seq33870__$3);
return cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(G__33871,G__33872,G__33873,G__33874,seq33870__$4);
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
cljs_webgl.buffers.set_uniform = (function cljs_webgl$buffers$set_uniform(gl_context,shader,p__33882){
var map__33886 = p__33882;
var map__33886__$1 = ((((!((map__33886 == null)))?((((map__33886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33886):map__33886);
var name = cljs.core.get.call(null,map__33886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__33886__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.call(null,map__33886__$1,new cljs.core.Keyword(null,"values","values",372645556));
var transpose = cljs.core.get.call(null,map__33886__$1,new cljs.core.Keyword(null,"transpose","transpose",-474726680));
var uniform_location = cljs_webgl.shaders.get_uniform_location.call(null,gl_context,shader,name);
var G__33888 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33888) {
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
cljs_webgl.buffers.set_attribute = (function cljs_webgl$buffers$set_attribute(gl_context,p__33890){
var map__33893 = p__33890;
var map__33893__$1 = ((((!((map__33893 == null)))?((((map__33893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33893):map__33893);
var buffer = cljs.core.get.call(null,map__33893__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var location = cljs.core.get.call(null,map__33893__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var components_per_vertex = cljs.core.get.call(null,map__33893__$1,new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635));
var type = cljs.core.get.call(null,map__33893__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized_QMARK_ = cljs.core.get.call(null,map__33893__$1,new cljs.core.Keyword(null,"normalized?","normalized?",1246099953));
var stride = cljs.core.get.call(null,map__33893__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.call(null,map__33893__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
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
cljs_webgl.buffers.set_texture = (function cljs_webgl$buffers$set_texture(gl_context,shader,p__33895){
var map__33898 = p__33895;
var map__33898__$1 = ((((!((map__33898 == null)))?((((map__33898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33898):map__33898);
var texture = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
var name = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var texture_unit = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"texture-unit","texture-unit",-731109059));
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
var len__25996__auto___33931 = arguments.length;
var i__25997__auto___33932 = (0);
while(true){
if((i__25997__auto___33932 < len__25996__auto___33931)){
args__26003__auto__.push((arguments[i__25997__auto___33932]));

var G__33933 = (i__25997__auto___33932 + (1));
i__25997__auto___33932 = G__33933;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((1) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((1)),(0),null)):null);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26004__auto__);
});

cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,p__33902){
var map__33903 = p__33902;
var map__33903__$1 = ((((!((map__33903 == null)))?((((map__33903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33903):map__33903);
var opts = map__33903__$1;
var shader = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"shader","shader",1492833021));
var draw_mode = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794));
var first = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var count = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var attributes = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var uniforms = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var textures = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var element_array = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"element-array","element-array",38145164));
var capabilities = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"capabilities","capabilities",212739361));
gl_context.useProgram(shader);

var seq__33905_33934 = cljs.core.seq.call(null,uniforms);
var chunk__33906_33935 = null;
var count__33907_33936 = (0);
var i__33908_33937 = (0);
while(true){
if((i__33908_33937 < count__33907_33936)){
var u_33938 = cljs.core._nth.call(null,chunk__33906_33935,i__33908_33937);
cljs_webgl.buffers.set_uniform.call(null,gl_context,shader,u_33938);

var G__33939 = seq__33905_33934;
var G__33940 = chunk__33906_33935;
var G__33941 = count__33907_33936;
var G__33942 = (i__33908_33937 + (1));
seq__33905_33934 = G__33939;
chunk__33906_33935 = G__33940;
count__33907_33936 = G__33941;
i__33908_33937 = G__33942;
continue;
} else {
var temp__4657__auto___33943 = cljs.core.seq.call(null,seq__33905_33934);
if(temp__4657__auto___33943){
var seq__33905_33944__$1 = temp__4657__auto___33943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33905_33944__$1)){
var c__25702__auto___33945 = cljs.core.chunk_first.call(null,seq__33905_33944__$1);
var G__33946 = cljs.core.chunk_rest.call(null,seq__33905_33944__$1);
var G__33947 = c__25702__auto___33945;
var G__33948 = cljs.core.count.call(null,c__25702__auto___33945);
var G__33949 = (0);
seq__33905_33934 = G__33946;
chunk__33906_33935 = G__33947;
count__33907_33936 = G__33948;
i__33908_33937 = G__33949;
continue;
} else {
var u_33950 = cljs.core.first.call(null,seq__33905_33944__$1);
cljs_webgl.buffers.set_uniform.call(null,gl_context,shader,u_33950);

var G__33951 = cljs.core.next.call(null,seq__33905_33944__$1);
var G__33952 = null;
var G__33953 = (0);
var G__33954 = (0);
seq__33905_33934 = G__33951;
chunk__33906_33935 = G__33952;
count__33907_33936 = G__33953;
i__33908_33937 = G__33954;
continue;
}
} else {
}
}
break;
}

var seq__33909_33955 = cljs.core.seq.call(null,attributes);
var chunk__33910_33956 = null;
var count__33911_33957 = (0);
var i__33912_33958 = (0);
while(true){
if((i__33912_33958 < count__33911_33957)){
var a_33959 = cljs.core._nth.call(null,chunk__33910_33956,i__33912_33958);
cljs_webgl.buffers.set_attribute.call(null,gl_context,a_33959);

var G__33960 = seq__33909_33955;
var G__33961 = chunk__33910_33956;
var G__33962 = count__33911_33957;
var G__33963 = (i__33912_33958 + (1));
seq__33909_33955 = G__33960;
chunk__33910_33956 = G__33961;
count__33911_33957 = G__33962;
i__33912_33958 = G__33963;
continue;
} else {
var temp__4657__auto___33964 = cljs.core.seq.call(null,seq__33909_33955);
if(temp__4657__auto___33964){
var seq__33909_33965__$1 = temp__4657__auto___33964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33909_33965__$1)){
var c__25702__auto___33966 = cljs.core.chunk_first.call(null,seq__33909_33965__$1);
var G__33967 = cljs.core.chunk_rest.call(null,seq__33909_33965__$1);
var G__33968 = c__25702__auto___33966;
var G__33969 = cljs.core.count.call(null,c__25702__auto___33966);
var G__33970 = (0);
seq__33909_33955 = G__33967;
chunk__33910_33956 = G__33968;
count__33911_33957 = G__33969;
i__33912_33958 = G__33970;
continue;
} else {
var a_33971 = cljs.core.first.call(null,seq__33909_33965__$1);
cljs_webgl.buffers.set_attribute.call(null,gl_context,a_33971);

var G__33972 = cljs.core.next.call(null,seq__33909_33965__$1);
var G__33973 = null;
var G__33974 = (0);
var G__33975 = (0);
seq__33909_33955 = G__33972;
chunk__33910_33956 = G__33973;
count__33911_33957 = G__33974;
i__33912_33958 = G__33975;
continue;
}
} else {
}
}
break;
}

var seq__33913_33976 = cljs.core.seq.call(null,textures);
var chunk__33914_33977 = null;
var count__33915_33978 = (0);
var i__33916_33979 = (0);
while(true){
if((i__33916_33979 < count__33915_33978)){
var t_33980 = cljs.core._nth.call(null,chunk__33914_33977,i__33916_33979);
cljs_webgl.buffers.set_texture.call(null,gl_context,shader,t_33980);

var G__33981 = seq__33913_33976;
var G__33982 = chunk__33914_33977;
var G__33983 = count__33915_33978;
var G__33984 = (i__33916_33979 + (1));
seq__33913_33976 = G__33981;
chunk__33914_33977 = G__33982;
count__33915_33978 = G__33983;
i__33916_33979 = G__33984;
continue;
} else {
var temp__4657__auto___33985 = cljs.core.seq.call(null,seq__33913_33976);
if(temp__4657__auto___33985){
var seq__33913_33986__$1 = temp__4657__auto___33985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33913_33986__$1)){
var c__25702__auto___33987 = cljs.core.chunk_first.call(null,seq__33913_33986__$1);
var G__33988 = cljs.core.chunk_rest.call(null,seq__33913_33986__$1);
var G__33989 = c__25702__auto___33987;
var G__33990 = cljs.core.count.call(null,c__25702__auto___33987);
var G__33991 = (0);
seq__33913_33976 = G__33988;
chunk__33914_33977 = G__33989;
count__33915_33978 = G__33990;
i__33916_33979 = G__33991;
continue;
} else {
var t_33992 = cljs.core.first.call(null,seq__33913_33986__$1);
cljs_webgl.buffers.set_texture.call(null,gl_context,shader,t_33992);

var G__33993 = cljs.core.next.call(null,seq__33913_33986__$1);
var G__33994 = null;
var G__33995 = (0);
var G__33996 = (0);
seq__33913_33976 = G__33993;
chunk__33914_33977 = G__33994;
count__33915_33978 = G__33995;
i__33916_33979 = G__33996;
continue;
}
} else {
}
}
break;
}

var seq__33917_33997 = cljs.core.seq.call(null,cljs.core.merge.call(null,cljs_webgl.buffers.default_capabilities,capabilities));
var chunk__33918_33998 = null;
var count__33919_33999 = (0);
var i__33920_34000 = (0);
while(true){
if((i__33920_34000 < count__33919_33999)){
var vec__33921_34001 = cljs.core._nth.call(null,chunk__33918_33998,i__33920_34000);
var capability_34002 = cljs.core.nth.call(null,vec__33921_34001,(0),null);
var enabled_QMARK__34003 = cljs.core.nth.call(null,vec__33921_34001,(1),null);
cljs_webgl.buffers.set_capability.call(null,gl_context,capability_34002,enabled_QMARK__34003);

var G__34004 = seq__33917_33997;
var G__34005 = chunk__33918_33998;
var G__34006 = count__33919_33999;
var G__34007 = (i__33920_34000 + (1));
seq__33917_33997 = G__34004;
chunk__33918_33998 = G__34005;
count__33919_33999 = G__34006;
i__33920_34000 = G__34007;
continue;
} else {
var temp__4657__auto___34008 = cljs.core.seq.call(null,seq__33917_33997);
if(temp__4657__auto___34008){
var seq__33917_34009__$1 = temp__4657__auto___34008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33917_34009__$1)){
var c__25702__auto___34010 = cljs.core.chunk_first.call(null,seq__33917_34009__$1);
var G__34011 = cljs.core.chunk_rest.call(null,seq__33917_34009__$1);
var G__34012 = c__25702__auto___34010;
var G__34013 = cljs.core.count.call(null,c__25702__auto___34010);
var G__34014 = (0);
seq__33917_33997 = G__34011;
chunk__33918_33998 = G__34012;
count__33919_33999 = G__34013;
i__33920_34000 = G__34014;
continue;
} else {
var vec__33924_34015 = cljs.core.first.call(null,seq__33917_34009__$1);
var capability_34016 = cljs.core.nth.call(null,vec__33924_34015,(0),null);
var enabled_QMARK__34017 = cljs.core.nth.call(null,vec__33924_34015,(1),null);
cljs_webgl.buffers.set_capability.call(null,gl_context,capability_34016,enabled_QMARK__34017);

var G__34018 = cljs.core.next.call(null,seq__33917_34009__$1);
var G__34019 = null;
var G__34020 = (0);
var G__34021 = (0);
seq__33917_33997 = G__34018;
chunk__33918_33998 = G__34019;
count__33919_33999 = G__34020;
i__33920_34000 = G__34021;
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

var seq__33927_34022 = cljs.core.seq.call(null,attributes);
var chunk__33928_34023 = null;
var count__33929_34024 = (0);
var i__33930_34025 = (0);
while(true){
if((i__33930_34025 < count__33929_34024)){
var a_34026 = cljs.core._nth.call(null,chunk__33928_34023,i__33930_34025);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_34026));

var G__34027 = seq__33927_34022;
var G__34028 = chunk__33928_34023;
var G__34029 = count__33929_34024;
var G__34030 = (i__33930_34025 + (1));
seq__33927_34022 = G__34027;
chunk__33928_34023 = G__34028;
count__33929_34024 = G__34029;
i__33930_34025 = G__34030;
continue;
} else {
var temp__4657__auto___34031 = cljs.core.seq.call(null,seq__33927_34022);
if(temp__4657__auto___34031){
var seq__33927_34032__$1 = temp__4657__auto___34031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33927_34032__$1)){
var c__25702__auto___34033 = cljs.core.chunk_first.call(null,seq__33927_34032__$1);
var G__34034 = cljs.core.chunk_rest.call(null,seq__33927_34032__$1);
var G__34035 = c__25702__auto___34033;
var G__34036 = cljs.core.count.call(null,c__25702__auto___34033);
var G__34037 = (0);
seq__33927_34022 = G__34034;
chunk__33928_34023 = G__34035;
count__33929_34024 = G__34036;
i__33930_34025 = G__34037;
continue;
} else {
var a_34038 = cljs.core.first.call(null,seq__33927_34032__$1);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_34038));

var G__34039 = cljs.core.next.call(null,seq__33927_34032__$1);
var G__34040 = null;
var G__34041 = (0);
var G__34042 = (0);
seq__33927_34022 = G__34039;
chunk__33928_34023 = G__34040;
count__33929_34024 = G__34041;
i__33930_34025 = G__34042;
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

cljs_webgl.buffers.draw_BANG_.cljs$lang$applyTo = (function (seq33900){
var G__33901 = cljs.core.first.call(null,seq33900);
var seq33900__$1 = cljs.core.next.call(null,seq33900);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33901,seq33900__$1);
});


//# sourceMappingURL=buffers.js.map?rel=1480181532396