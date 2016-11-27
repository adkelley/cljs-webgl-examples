// Compiled by ClojureScript 1.9.293 {}
goog.provide('examples.core');
goog.require('cljs.core');
goog.require('projection.core');
goog.require('triangle.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Rendering Example: projection.cljs");
if(typeof examples.core.translate !== 'undefined'){
} else {
examples.core.translate = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx","tx",466630418),(0),new cljs.core.Keyword(null,"ty","ty",158290825),(0),new cljs.core.Keyword(null,"tz","tz",278339241),(-10)], null));
}
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.control_panel], null),document.getElementById("app"));
