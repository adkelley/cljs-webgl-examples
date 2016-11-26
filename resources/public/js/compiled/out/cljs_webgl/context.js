// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_webgl.context');
goog.require('cljs.core');
/**
 * Gets a WebGL context from a canvas element.
 * `context-attributes` may be a map in the following form:
 * 
 *  {:alpha
 *   :depth
 *   :stencil
 *   :antialias
 *   :premultiplied-apha
 *   :preserve-drawing-buffer}
 * If you don't specify any key, the default value is assumed.
 * 
 * For further information on context creation parameters see [WebGLContextAttributes](https://www.khronos.org/registry/webgl/specs/1.0.2/#WEBGLCONTEXTATTRIBUTES);
 */
cljs_webgl.context.get_context = (function cljs_webgl$context$get_context(var_args){
var args36567 = [];
var len__25996__auto___36573 = arguments.length;
var i__25997__auto___36574 = (0);
while(true){
if((i__25997__auto___36574 < len__25996__auto___36573)){
args36567.push((arguments[i__25997__auto___36574]));

var G__36575 = (i__25997__auto___36574 + (1));
i__25997__auto___36574 = G__36575;
continue;
} else {
}
break;
}

var G__36569 = args36567.length;
switch (G__36569) {
case 1:
return cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36567.length)].join('')));

}
});

cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1 = (function (canvas_element){
return cljs_webgl.context.get_context.call(null,canvas_element,cljs.core.PersistentArrayMap.EMPTY);
});

cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$2 = (function (canvas_element,context_attributes){
var default_attributes = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),true,new cljs.core.Keyword(null,"depth","depth",1768663640),true,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),false,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636),true,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663),false], null);
var attributes__GT_js = ((function (default_attributes){
return (function (p__36570){
var map__36571 = p__36570;
var map__36571__$1 = ((((!((map__36571 == null)))?((((map__36571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36571):map__36571);
var alpha = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var depth = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var stencil = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"stencil","stencil",-1049110946));
var antialias = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"antialias","antialias",-2073640634));
var premultiplied_alpha = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636));
var preserve_drawing_buffer = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663));
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),alpha,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),stencil,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),antialias,new cljs.core.Keyword(null,"premultipliedAlpha","premultipliedAlpha",1701284427),premultiplied_alpha,new cljs.core.Keyword(null,"preserveDrawingBuffer","preserveDrawingBuffer",187464949),preserve_drawing_buffer], null));
});})(default_attributes))
;
var opts = attributes__GT_js.call(null,cljs.core.merge.call(null,default_attributes,context_attributes));
var or__24888__auto__ = canvas_element.getContext("experimental-webgl",opts);
if(cljs.core.truth_(or__24888__auto__)){
return or__24888__auto__;
} else {
return canvas_element.getContext("webgl",opts);
}
});

cljs_webgl.context.get_context.cljs$lang$maxFixedArity = 2;

/**
 * Returns the actual context parameters for a created context. The returned map has the following form:
 * 
 *  {:alpha
 *   :depth
 *   :stencil
 *   :antialias
 *   :premultiplied-apha
 *   :preserve-drawing-buffer}
 * 
 * This function is helpful for testing if the requested parameters were satisfied.
 */
cljs_webgl.context.get_context_attributes = (function cljs_webgl$context$get_context_attributes(gl_context){
var js_obj = gl_context.getContextAttributes();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),js_obj.alpha,new cljs.core.Keyword(null,"depth","depth",1768663640),js_obj.depth,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),js_obj.stencil,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),js_obj.antialias,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636),js_obj.premultipliedAlpha,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663),js_obj.preserveDrawingBuffer], null);
});
/**
 * Returns the canvas element from the given WebGL context.
 */
cljs_webgl.context.get_canvas = (function cljs_webgl$context$get_canvas(gl_context){
return gl_context.canvas;
});
/**
 * Returns the buffer current width.
 */
cljs_webgl.context.get_drawing_buffer_width = (function cljs_webgl$context$get_drawing_buffer_width(gl_context){
return gl_context.drawingBufferWidth;
});
/**
 * Returns the buffer current height.
 */
cljs_webgl.context.get_drawing_buffer_height = (function cljs_webgl$context$get_drawing_buffer_height(gl_context){
return gl_context.drawingBufferHeight;
});
/**
 * Returns whether the context was lost.
 * 
 *   See [The Context Lost Event](http://www.khronos.org/registry/webgl/specs/1.0/#CONTEXT_LOST)
 */
cljs_webgl.context.is_context_lost_QMARK_ = (function cljs_webgl$context$is_context_lost_QMARK_(gl_context){
return gl_context.isContextLost();
});
/**
 * Returns a string sequence containing the name for each supported extension
 */
cljs_webgl.context.get_supported_extensions = (function cljs_webgl$context$get_supported_extensions(gl_context){
return (new cljs.core.LazySeq(null,(function (){
return gl_context.getSupportedExtensions();
}),null,null));
});
/**
 * Returns the object for the requested extension. The returned value is not wrapped in any ClojureScript construct.
 */
cljs_webgl.context.get_extension = (function cljs_webgl$context$get_extension(gl_context,extension_name){
return gl_context.getExtension(extension_name);
});

//# sourceMappingURL=context.js.map?rel=1480194642629