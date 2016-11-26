// Compiled by ClojureScript 1.9.293 {}
goog.provide('examples.core');
goog.require('cljs.core');
goog.require('projection.core');
goog.require('triangle.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Rendering Example: projection.cljs");
if(typeof examples.core.app_state !== 'undefined'){
} else {
examples.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx","tx",466630418),(-1),new cljs.core.Keyword(null,"ty","ty",158290825),(-1),new cljs.core.Keyword(null,"tz","tz",278339241),(-10)], null));
}
examples.core.control_panel = (function examples$core$control_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Translate: ",new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,examples.core.app_state)),", ",new cljs.core.Keyword(null,"ty","ty",158290825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,examples.core.app_state)),", ",new cljs.core.Keyword(null,"tz","tz",278339241).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,examples.core.app_state))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.control_panel], null),document.getElementById("app"));
examples.core.on_js_reload = (function examples$core$on_js_reload(){
return projection.core.start.call(null,new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,examples.core.app_state)),new cljs.core.Keyword(null,"ty","ty",158290825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,examples.core.app_state)),new cljs.core.Keyword(null,"tz","tz",278339241).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,examples.core.app_state)));
});

//# sourceMappingURL=core.js.map?rel=1480195310963