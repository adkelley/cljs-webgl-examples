// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_webgl.shaders');
goog.require('cljs.core');
goog.require('cljs_webgl.constants.shader');
goog.require('cljs_webgl.constants.shader_source');
/**
 * Returns the value of a given `parameter` in a `program` object.
 * 
 *   Valid values for `parameter` are `cljs-webgl.constants.shader/validate-status`, `cljs-webgl.constants.shader/link-status` and `cljs-webgl.constants.shader/delete-status`.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGetProgramiv (similar to getProgramParameter)](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGetProgramiv.xml)
 */
cljs_webgl.shaders.get_program_parameter = (function cljs_webgl$shaders$get_program_parameter(gl_context,program,parameter){
return gl_context.getProgramParameter(program,parameter);
});
/**
 * Returns a lazy sequence of shader objects attached to a given shader `program`.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGetAttachedShaders](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGetAttachedShaders.xml)
 */
cljs_webgl.shaders.get_attached_shaders = (function cljs_webgl$shaders$get_attached_shaders(gl_context,program){
return (new cljs.core.LazySeq(null,(function (){
return gl_context.getAttachedShaders(program);
}),null,null));
});
/**
 * Returns the source code for a given `shader` object.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGetShaderSource](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGetShaderSource.xml)
 */
cljs_webgl.shaders.get_shader_source = (function cljs_webgl$shaders$get_shader_source(gl_context,shader){
return gl_context.getShaderSource(shader);
});
/**
 * Returns the information log for a given `shader` object. Useful for checking for compile errors.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGetShaderInfoLog](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGetShaderInfoLog.xml)
 */
cljs_webgl.shaders.get_shader_info_log = (function cljs_webgl$shaders$get_shader_info_log(gl_context,shader){
return gl_context.getShaderInfoLog(shader);
});
/**
 * Returns the value of a given `parameter` in a `shader` object.
 * 
 *   Valid values for `parameter` are `cljs-webgl.constants.shader/shader-type`, `cljs-webgl.constants.shader/compile-status` and `cljs-webgl.constants.shader/delete-status`.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGetShaderiv(similar to getShaderParameter)](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGetShaderiv.xml)
 */
cljs_webgl.shaders.get_shader_parameter = (function cljs_webgl$shaders$get_shader_parameter(gl_context,shader,parameter){
return gl_context.getShaderParameter(shader,parameter);
});
/**
 * Returns a map describing the range and precision for the specified `shader-type` and `precision-type`. The returned map
 *   has the following form:
 * 
 *  {:range-min
 *   :range-max
 *   :precision}
 * 
 *   Valid values for `shader-type` are `cljs-webgl.constants.shader/fragment-shader` and `cljs-webgl.constants.shader/vertex-shader`.
 * 
 *   Valid values for `precision type` are `cljs-webgl.constants.shader-precision-specified-types/low-float`,
 *   `cljs-webgl.constants.shader-precision-specified-types/medium-float`,
 *   `cljs-webgl.constants.shader-precision-specified-types/high-float`, `cljs-webgl.constants.shader-precision-specified-types/low-int`,
 *   `cljs-webgl.constants.shader-precision-specified-types/medium-int` and `cljs-webgl.constants.shader-precision-specified-types/high-int`
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGetShaderPrecisionFormat](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGetShaderPrecisionFormat.xml)
 */
cljs_webgl.shaders.get_shader_precision_format = (function cljs_webgl$shaders$get_shader_precision_format(gl_context,shader_type,precision_type){
var js_obj = gl_context.getShaderPrecisionFormat(shader_type,precision_type);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"range-min","range-min",-797195752),js_obj.rangeMin,new cljs.core.Keyword(null,"range-max","range-max",-1850570674),js_obj.rangeMax,new cljs.core.Keyword(null,"precision","precision",-1175707478),js_obj.precision], null);
});
/**
 * Returns the attribute - specified by it's name - location in a given `shader-program`.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGetAttribLocation](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGetAttribLocation.xml)
 */
cljs_webgl.shaders.get_attrib_location = (function cljs_webgl$shaders$get_attrib_location(gl_context,shader_program,attrib_name){
return gl_context.getAttribLocation(shader_program,attrib_name);
});
/**
 * Returns the uniform - specified by it's name - location in a given `shader-program`.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGetUniformLocation](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGetUniformLocation.xml)
 */
cljs_webgl.shaders.get_uniform_location = (function cljs_webgl$shaders$get_uniform_location(gl_context,shader_program,uniform_name){
return gl_context.getUniformLocation(shader_program,uniform_name);
});
/**
 * Returns whether a given shader object is valid.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glIsShader](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glIsShader.xml)
 */
cljs_webgl.shaders.is_shader_QMARK_ = (function cljs_webgl$shaders$is_shader_QMARK_(gl_context,shader){
return gl_context.isShader(shader);
});
/**
 * Returns whether a given shader program is valid.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glIsProgram](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glIsProgram.xml)
 */
cljs_webgl.shaders.is_program_QMARK_ = (function cljs_webgl$shaders$is_program_QMARK_(gl_context,shader_program){
return gl_context.isProgram(shader_program);
});
/**
 * Returns a compiled vertex or fragment shader object (specified by the `type` parameter)
 * for a given `source`. If the shader cannot be compiled successfully, an error is thrown.
 * 
 *   The valid values for `type` are `cljs-webgl.constants.shader/vertex-shader` and `cljs-webgl.constants.shader/fragment-shader`.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glCreateShader](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glCreateShader.xml)
 *   * [glShaderSource](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glShaderSource.xml)
 *   * [glCompileShader](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glCompileShader.xml)
 */
cljs_webgl.shaders.create_shader = (function cljs_webgl$shaders$create_shader(gl_context,type,source){
var shader = gl_context.createShader(type);
gl_context.shaderSource(shader,source);

gl_context.compileShader(shader);

if(cljs.core.truth_(cljs_webgl.shaders.get_shader_parameter.call(null,gl_context,shader,cljs_webgl.constants.shader_source.compile_status))){
} else {
throw (new Error(cljs_webgl.shaders.get_shader_info_log.call(null,gl_context,shader)));
}

return shader;
});
/**
 * Grabs the text content of the element's children
 */
cljs_webgl.shaders.text_content = (function cljs_webgl$shaders$text_content(element){
var child = element.firstChild;
var text = "";
while(true){
if((child == null)){
return text;
} else {
var G__26692 = child.nextSibling;
var G__26693 = [cljs.core.str(text),cljs.core.str(((cljs.core._EQ_.call(null,child.nodeType,(3)))?child.textContent:null))].join('');
child = G__26692;
text = G__26693;
continue;
}
break;
}
});
/**
 * Mapping of mime/type to relevant GL constant
 */
cljs_webgl.shaders.mime_type = new cljs.core.PersistentArrayMap(null, 2, ["x-shader/x-fragment",cljs_webgl.constants.shader.fragment_shader,"x-shader/x-vertex",cljs_webgl.constants.shader.vertex_shader], null);
/**
 * Returns a compiled vertext or fragment shader, loaded from the script-id
 */
cljs_webgl.shaders.get_shader = (function cljs_webgl$shaders$get_shader(gl_context,script_id){
var temp__4657__auto__ = document.getElementById(script_id);
if(cljs.core.truth_(temp__4657__auto__)){
var script = temp__4657__auto__;
return cljs_webgl.shaders.create_shader.call(null,gl_context,cljs_webgl.shaders.mime_type.call(null,script.type),cljs_webgl.shaders.text_content.call(null,script));
} else {
return null;
}
});
/**
 * Returns a linked shader program composed of the compiled shader objects
 * specified by the `shaders` parameter. Throws an error if the program was
 * not linked successfully.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glCreateProgram](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glCreateProgram.xml)
 *   * [glAttachShader](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glAttachShader.xml)
 *   * [glLinkProgram](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glLinkProgram.xml)
 */
cljs_webgl.shaders.create_program = (function cljs_webgl$shaders$create_program(var_args){
var args__26003__auto__ = [];
var len__25996__auto___26700 = arguments.length;
var i__25997__auto___26701 = (0);
while(true){
if((i__25997__auto___26701 < len__25996__auto___26700)){
args__26003__auto__.push((arguments[i__25997__auto___26701]));

var G__26702 = (i__25997__auto___26701 + (1));
i__25997__auto___26701 = G__26702;
continue;
} else {
}
break;
}

var argseq__26004__auto__ = ((((1) < args__26003__auto__.length))?(new cljs.core.IndexedSeq(args__26003__auto__.slice((1)),(0),null)):null);
return cljs_webgl.shaders.create_program.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26004__auto__);
});

cljs_webgl.shaders.create_program.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,shaders){
var program = gl_context.createProgram();
var seq__26696_26703 = cljs.core.seq.call(null,shaders);
var chunk__26697_26704 = null;
var count__26698_26705 = (0);
var i__26699_26706 = (0);
while(true){
if((i__26699_26706 < count__26698_26705)){
var shader_26707 = cljs.core._nth.call(null,chunk__26697_26704,i__26699_26706);
gl_context.attachShader(program,shader_26707);

var G__26708 = seq__26696_26703;
var G__26709 = chunk__26697_26704;
var G__26710 = count__26698_26705;
var G__26711 = (i__26699_26706 + (1));
seq__26696_26703 = G__26708;
chunk__26697_26704 = G__26709;
count__26698_26705 = G__26710;
i__26699_26706 = G__26711;
continue;
} else {
var temp__4657__auto___26712 = cljs.core.seq.call(null,seq__26696_26703);
if(temp__4657__auto___26712){
var seq__26696_26713__$1 = temp__4657__auto___26712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26696_26713__$1)){
var c__25702__auto___26714 = cljs.core.chunk_first.call(null,seq__26696_26713__$1);
var G__26715 = cljs.core.chunk_rest.call(null,seq__26696_26713__$1);
var G__26716 = c__25702__auto___26714;
var G__26717 = cljs.core.count.call(null,c__25702__auto___26714);
var G__26718 = (0);
seq__26696_26703 = G__26715;
chunk__26697_26704 = G__26716;
count__26698_26705 = G__26717;
i__26699_26706 = G__26718;
continue;
} else {
var shader_26719 = cljs.core.first.call(null,seq__26696_26713__$1);
gl_context.attachShader(program,shader_26719);

var G__26720 = cljs.core.next.call(null,seq__26696_26713__$1);
var G__26721 = null;
var G__26722 = (0);
var G__26723 = (0);
seq__26696_26703 = G__26720;
chunk__26697_26704 = G__26721;
count__26698_26705 = G__26722;
i__26699_26706 = G__26723;
continue;
}
} else {
}
}
break;
}

gl_context.linkProgram(program);

if(cljs.core.truth_(cljs_webgl.shaders.get_program_parameter.call(null,gl_context,program,cljs_webgl.constants.shader.link_status))){
} else {
throw (new Error("Could not initialize shaders"));
}

gl_context.useProgram(program);

return program;
});

cljs_webgl.shaders.create_program.cljs$lang$maxFixedArity = (1);

cljs_webgl.shaders.create_program.cljs$lang$applyTo = (function (seq26694){
var G__26695 = cljs.core.first.call(null,seq26694);
var seq26694__$1 = cljs.core.next.call(null,seq26694);
return cljs_webgl.shaders.create_program.cljs$core$IFn$_invoke$arity$variadic(G__26695,seq26694__$1);
});


//# sourceMappingURL=shaders.js.map?rel=1480258608694