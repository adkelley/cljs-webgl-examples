// Compiled by ClojureScript 1.9.293 {:static-fns true}
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
var args12542 = [];
var len__7651__auto___12548 = arguments.length;
var i__7652__auto___12549 = (0);
while(true){
if((i__7652__auto___12549 < len__7651__auto___12548)){
args12542.push((arguments[i__7652__auto___12549]));

var G__12550 = (i__7652__auto___12549 + (1));
i__7652__auto___12549 = G__12550;
continue;
} else {
}
break;
}

var G__12544 = args12542.length;
switch (G__12544) {
case 1:
return cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12542.length)].join('')));

}
});

cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1 = (function (canvas_element){
return cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$2(canvas_element,cljs.core.PersistentArrayMap.EMPTY);
});

cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$2 = (function (canvas_element,context_attributes){
var default_attributes = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),true,new cljs.core.Keyword(null,"depth","depth",1768663640),true,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),false,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636),true,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663),false], null);
var attributes__GT_js = ((function (default_attributes){
return (function (p__12545){
var map__12546 = p__12545;
var map__12546__$1 = ((((!((map__12546 == null)))?((((map__12546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12546):map__12546);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12546__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12546__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var stencil = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12546__$1,new cljs.core.Keyword(null,"stencil","stencil",-1049110946));
var antialias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12546__$1,new cljs.core.Keyword(null,"antialias","antialias",-2073640634));
var premultiplied_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12546__$1,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636));
var preserve_drawing_buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12546__$1,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663));
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),alpha,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),stencil,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),antialias,new cljs.core.Keyword(null,"premultipliedAlpha","premultipliedAlpha",1701284427),premultiplied_alpha,new cljs.core.Keyword(null,"preserveDrawingBuffer","preserveDrawingBuffer",187464949),preserve_drawing_buffer], null));
});})(default_attributes))
;
var opts = attributes__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_attributes,context_attributes], 0)));
var or__6543__auto__ = canvas_element.getContext("experimental-webgl",opts);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
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
