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
var len__25996__auto___36983 = arguments.length;
var i__25997__auto___36984 = (0);
while(true){
if((i__25997__auto___36984 < len__25996__auto___36983)){
args__26003__auto__.push((arguments[i__25997__auto___36984]));

var G__36985 = (i__25997__auto___36984 + (1));
i__25997__auto___36984 = G__36985;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((4) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((4)),(0),null)):null);
return cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26004__auto__);
});

cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,data,target,usage,p__36979){
var vec__36980 = p__36979;
var item_size = cljs.core.nth.call(null,vec__36980,(0),null);
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

cljs_webgl.buffers.create_buffer.cljs$lang$applyTo = (function (seq36974){
var G__36975 = cljs.core.first.call(null,seq36974);
var seq36974__$1 = cljs.core.next.call(null,seq36974);
var G__36976 = cljs.core.first.call(null,seq36974__$1);
var seq36974__$2 = cljs.core.next.call(null,seq36974__$1);
var G__36977 = cljs.core.first.call(null,seq36974__$2);
var seq36974__$3 = cljs.core.next.call(null,seq36974__$2);
var G__36978 = cljs.core.first.call(null,seq36974__$3);
var seq36974__$4 = cljs.core.next.call(null,seq36974__$3);
return cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(G__36975,G__36976,G__36977,G__36978,seq36974__$4);
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
cljs_webgl.buffers.set_uniform = (function cljs_webgl$buffers$set_uniform(gl_context,shader,p__36986){
var map__36990 = p__36986;
var map__36990__$1 = ((((!((map__36990 == null)))?((((map__36990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36990):map__36990);
var name = cljs.core.get.call(null,map__36990__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__36990__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.call(null,map__36990__$1,new cljs.core.Keyword(null,"values","values",372645556));
var transpose = cljs.core.get.call(null,map__36990__$1,new cljs.core.Keyword(null,"transpose","transpose",-474726680));
var uniform_location = cljs_webgl.shaders.get_uniform_location.call(null,gl_context,shader,name);
var G__36992 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36992) {
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
cljs_webgl.buffers.set_attribute = (function cljs_webgl$buffers$set_attribute(gl_context,p__36994){
var map__36997 = p__36994;
var map__36997__$1 = ((((!((map__36997 == null)))?((((map__36997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36997):map__36997);
var buffer = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var location = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var components_per_vertex = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635));
var type = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized_QMARK_ = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"normalized?","normalized?",1246099953));
var stride = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
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
cljs_webgl.buffers.set_texture = (function cljs_webgl$buffers$set_texture(gl_context,shader,p__36999){
var map__37002 = p__36999;
var map__37002__$1 = ((((!((map__37002 == null)))?((((map__37002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37002):map__37002);
var texture = cljs.core.get.call(null,map__37002__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
var name = cljs.core.get.call(null,map__37002__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var texture_unit = cljs.core.get.call(null,map__37002__$1,new cljs.core.Keyword(null,"texture-unit","texture-unit",-731109059));
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
var len__25996__auto___37035 = arguments.length;
var i__25997__auto___37036 = (0);
while(true){
if((i__25997__auto___37036 < len__25996__auto___37035)){
args__26003__auto__.push((arguments[i__25997__auto___37036]));

var G__37037 = (i__25997__auto___37036 + (1));
i__25997__auto___37036 = G__37037;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((1) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((1)),(0),null)):null);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26004__auto__);
});

cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,p__37006){
var map__37007 = p__37006;
var map__37007__$1 = ((((!((map__37007 == null)))?((((map__37007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37007):map__37007);
var opts = map__37007__$1;
var shader = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"shader","shader",1492833021));
var draw_mode = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794));
var first = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var count = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var attributes = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var uniforms = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var textures = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var element_array = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"element-array","element-array",38145164));
var capabilities = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"capabilities","capabilities",212739361));
gl_context.useProgram(shader);

var seq__37009_37038 = cljs.core.seq.call(null,uniforms);
var chunk__37010_37039 = null;
var count__37011_37040 = (0);
var i__37012_37041 = (0);
while(true){
if((i__37012_37041 < count__37011_37040)){
var u_37042 = cljs.core._nth.call(null,chunk__37010_37039,i__37012_37041);
cljs_webgl.buffers.set_uniform.call(null,gl_context,shader,u_37042);

var G__37043 = seq__37009_37038;
var G__37044 = chunk__37010_37039;
var G__37045 = count__37011_37040;
var G__37046 = (i__37012_37041 + (1));
seq__37009_37038 = G__37043;
chunk__37010_37039 = G__37044;
count__37011_37040 = G__37045;
i__37012_37041 = G__37046;
continue;
} else {
var temp__4657__auto___37047 = cljs.core.seq.call(null,seq__37009_37038);
if(temp__4657__auto___37047){
var seq__37009_37048__$1 = temp__4657__auto___37047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37009_37048__$1)){
var c__25702__auto___37049 = cljs.core.chunk_first.call(null,seq__37009_37048__$1);
var G__37050 = cljs.core.chunk_rest.call(null,seq__37009_37048__$1);
var G__37051 = c__25702__auto___37049;
var G__37052 = cljs.core.count.call(null,c__25702__auto___37049);
var G__37053 = (0);
seq__37009_37038 = G__37050;
chunk__37010_37039 = G__37051;
count__37011_37040 = G__37052;
i__37012_37041 = G__37053;
continue;
} else {
var u_37054 = cljs.core.first.call(null,seq__37009_37048__$1);
cljs_webgl.buffers.set_uniform.call(null,gl_context,shader,u_37054);

var G__37055 = cljs.core.next.call(null,seq__37009_37048__$1);
var G__37056 = null;
var G__37057 = (0);
var G__37058 = (0);
seq__37009_37038 = G__37055;
chunk__37010_37039 = G__37056;
count__37011_37040 = G__37057;
i__37012_37041 = G__37058;
continue;
}
} else {
}
}
break;
}

var seq__37013_37059 = cljs.core.seq.call(null,attributes);
var chunk__37014_37060 = null;
var count__37015_37061 = (0);
var i__37016_37062 = (0);
while(true){
if((i__37016_37062 < count__37015_37061)){
var a_37063 = cljs.core._nth.call(null,chunk__37014_37060,i__37016_37062);
cljs_webgl.buffers.set_attribute.call(null,gl_context,a_37063);

var G__37064 = seq__37013_37059;
var G__37065 = chunk__37014_37060;
var G__37066 = count__37015_37061;
var G__37067 = (i__37016_37062 + (1));
seq__37013_37059 = G__37064;
chunk__37014_37060 = G__37065;
count__37015_37061 = G__37066;
i__37016_37062 = G__37067;
continue;
} else {
var temp__4657__auto___37068 = cljs.core.seq.call(null,seq__37013_37059);
if(temp__4657__auto___37068){
var seq__37013_37069__$1 = temp__4657__auto___37068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37013_37069__$1)){
var c__25702__auto___37070 = cljs.core.chunk_first.call(null,seq__37013_37069__$1);
var G__37071 = cljs.core.chunk_rest.call(null,seq__37013_37069__$1);
var G__37072 = c__25702__auto___37070;
var G__37073 = cljs.core.count.call(null,c__25702__auto___37070);
var G__37074 = (0);
seq__37013_37059 = G__37071;
chunk__37014_37060 = G__37072;
count__37015_37061 = G__37073;
i__37016_37062 = G__37074;
continue;
} else {
var a_37075 = cljs.core.first.call(null,seq__37013_37069__$1);
cljs_webgl.buffers.set_attribute.call(null,gl_context,a_37075);

var G__37076 = cljs.core.next.call(null,seq__37013_37069__$1);
var G__37077 = null;
var G__37078 = (0);
var G__37079 = (0);
seq__37013_37059 = G__37076;
chunk__37014_37060 = G__37077;
count__37015_37061 = G__37078;
i__37016_37062 = G__37079;
continue;
}
} else {
}
}
break;
}

var seq__37017_37080 = cljs.core.seq.call(null,textures);
var chunk__37018_37081 = null;
var count__37019_37082 = (0);
var i__37020_37083 = (0);
while(true){
if((i__37020_37083 < count__37019_37082)){
var t_37084 = cljs.core._nth.call(null,chunk__37018_37081,i__37020_37083);
cljs_webgl.buffers.set_texture.call(null,gl_context,shader,t_37084);

var G__37085 = seq__37017_37080;
var G__37086 = chunk__37018_37081;
var G__37087 = count__37019_37082;
var G__37088 = (i__37020_37083 + (1));
seq__37017_37080 = G__37085;
chunk__37018_37081 = G__37086;
count__37019_37082 = G__37087;
i__37020_37083 = G__37088;
continue;
} else {
var temp__4657__auto___37089 = cljs.core.seq.call(null,seq__37017_37080);
if(temp__4657__auto___37089){
var seq__37017_37090__$1 = temp__4657__auto___37089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37017_37090__$1)){
var c__25702__auto___37091 = cljs.core.chunk_first.call(null,seq__37017_37090__$1);
var G__37092 = cljs.core.chunk_rest.call(null,seq__37017_37090__$1);
var G__37093 = c__25702__auto___37091;
var G__37094 = cljs.core.count.call(null,c__25702__auto___37091);
var G__37095 = (0);
seq__37017_37080 = G__37092;
chunk__37018_37081 = G__37093;
count__37019_37082 = G__37094;
i__37020_37083 = G__37095;
continue;
} else {
var t_37096 = cljs.core.first.call(null,seq__37017_37090__$1);
cljs_webgl.buffers.set_texture.call(null,gl_context,shader,t_37096);

var G__37097 = cljs.core.next.call(null,seq__37017_37090__$1);
var G__37098 = null;
var G__37099 = (0);
var G__37100 = (0);
seq__37017_37080 = G__37097;
chunk__37018_37081 = G__37098;
count__37019_37082 = G__37099;
i__37020_37083 = G__37100;
continue;
}
} else {
}
}
break;
}

var seq__37021_37101 = cljs.core.seq.call(null,cljs.core.merge.call(null,cljs_webgl.buffers.default_capabilities,capabilities));
var chunk__37022_37102 = null;
var count__37023_37103 = (0);
var i__37024_37104 = (0);
while(true){
if((i__37024_37104 < count__37023_37103)){
var vec__37025_37105 = cljs.core._nth.call(null,chunk__37022_37102,i__37024_37104);
var capability_37106 = cljs.core.nth.call(null,vec__37025_37105,(0),null);
var enabled_QMARK__37107 = cljs.core.nth.call(null,vec__37025_37105,(1),null);
cljs_webgl.buffers.set_capability.call(null,gl_context,capability_37106,enabled_QMARK__37107);

var G__37108 = seq__37021_37101;
var G__37109 = chunk__37022_37102;
var G__37110 = count__37023_37103;
var G__37111 = (i__37024_37104 + (1));
seq__37021_37101 = G__37108;
chunk__37022_37102 = G__37109;
count__37023_37103 = G__37110;
i__37024_37104 = G__37111;
continue;
} else {
var temp__4657__auto___37112 = cljs.core.seq.call(null,seq__37021_37101);
if(temp__4657__auto___37112){
var seq__37021_37113__$1 = temp__4657__auto___37112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37021_37113__$1)){
var c__25702__auto___37114 = cljs.core.chunk_first.call(null,seq__37021_37113__$1);
var G__37115 = cljs.core.chunk_rest.call(null,seq__37021_37113__$1);
var G__37116 = c__25702__auto___37114;
var G__37117 = cljs.core.count.call(null,c__25702__auto___37114);
var G__37118 = (0);
seq__37021_37101 = G__37115;
chunk__37022_37102 = G__37116;
count__37023_37103 = G__37117;
i__37024_37104 = G__37118;
continue;
} else {
var vec__37028_37119 = cljs.core.first.call(null,seq__37021_37113__$1);
var capability_37120 = cljs.core.nth.call(null,vec__37028_37119,(0),null);
var enabled_QMARK__37121 = cljs.core.nth.call(null,vec__37028_37119,(1),null);
cljs_webgl.buffers.set_capability.call(null,gl_context,capability_37120,enabled_QMARK__37121);

var G__37122 = cljs.core.next.call(null,seq__37021_37113__$1);
var G__37123 = null;
var G__37124 = (0);
var G__37125 = (0);
seq__37021_37101 = G__37122;
chunk__37022_37102 = G__37123;
count__37023_37103 = G__37124;
i__37024_37104 = G__37125;
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

var seq__37031_37126 = cljs.core.seq.call(null,attributes);
var chunk__37032_37127 = null;
var count__37033_37128 = (0);
var i__37034_37129 = (0);
while(true){
if((i__37034_37129 < count__37033_37128)){
var a_37130 = cljs.core._nth.call(null,chunk__37032_37127,i__37034_37129);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_37130));

var G__37131 = seq__37031_37126;
var G__37132 = chunk__37032_37127;
var G__37133 = count__37033_37128;
var G__37134 = (i__37034_37129 + (1));
seq__37031_37126 = G__37131;
chunk__37032_37127 = G__37132;
count__37033_37128 = G__37133;
i__37034_37129 = G__37134;
continue;
} else {
var temp__4657__auto___37135 = cljs.core.seq.call(null,seq__37031_37126);
if(temp__4657__auto___37135){
var seq__37031_37136__$1 = temp__4657__auto___37135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37031_37136__$1)){
var c__25702__auto___37137 = cljs.core.chunk_first.call(null,seq__37031_37136__$1);
var G__37138 = cljs.core.chunk_rest.call(null,seq__37031_37136__$1);
var G__37139 = c__25702__auto___37137;
var G__37140 = cljs.core.count.call(null,c__25702__auto___37137);
var G__37141 = (0);
seq__37031_37126 = G__37138;
chunk__37032_37127 = G__37139;
count__37033_37128 = G__37140;
i__37034_37129 = G__37141;
continue;
} else {
var a_37142 = cljs.core.first.call(null,seq__37031_37136__$1);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_37142));

var G__37143 = cljs.core.next.call(null,seq__37031_37136__$1);
var G__37144 = null;
var G__37145 = (0);
var G__37146 = (0);
seq__37031_37126 = G__37143;
chunk__37032_37127 = G__37144;
count__37033_37128 = G__37145;
i__37034_37129 = G__37146;
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

cljs_webgl.buffers.draw_BANG_.cljs$lang$applyTo = (function (seq37004){
var G__37005 = cljs.core.first.call(null,seq37004);
var seq37004__$1 = cljs.core.next.call(null,seq37004);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37005,seq37004__$1);
});


//# sourceMappingURL=buffers.js.map?rel=1480194643713