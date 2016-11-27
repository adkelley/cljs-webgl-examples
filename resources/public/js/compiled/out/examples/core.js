// Compiled by ClojureScript 1.9.293 {}
goog.provide('examples.core');
goog.require('cljs.core');
goog.require('projection.core');
goog.require('triangle.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Rendering Example: projection.cljs");
if(typeof examples.core.transform !== 'undefined'){
} else {
examples.core.transform = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sz","sz",-1795504382),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"sy","sy",227523849),new cljs.core.Keyword(null,"tz","tz",278339241),new cljs.core.Keyword(null,"ty","ty",158290825),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.Keyword(null,"rz","rz",386461181),new cljs.core.Keyword(null,"ry","ry",-334598563)],[(1),(0),(1),(-10),(0),(0),(1),(0),(0)]));
}
examples.core.slider = (function examples$core$slider(param,value,min,max){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"slider"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.swap_BANG_.call(null,examples.core.transform,cljs.core.assoc,param,e.target.value);

var map__32892 = cljs.core.deref.call(null,examples.core.transform);
var map__32892__$1 = ((((!((map__32892 == null)))?((((map__32892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32892):map__32892);
var tx = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var tz = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"tz","tz",278339241));
var sx = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var sy = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var sz = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"sz","sz",-1795504382));
var rx = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var ry = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rz = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"rz","rz",386461181));
return projection.core.start.call(null,tx,ty,tz,rx,ry,rz,sx,sy,sz);
})], null)], null)], null);
});
examples.core.scale_panel = (function examples$core$scale_panel(){
var map__32896 = cljs.core.deref.call(null,examples.core.transform);
var map__32896__$1 = ((((!((map__32896 == null)))?((((map__32896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32896):map__32896);
var sx = cljs.core.get.call(null,map__32896__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var sy = cljs.core.get.call(null,map__32896__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var sz = cljs.core.get.call(null,map__32896__$1,new cljs.core.Keyword(null,"sz","sz",-1795504382));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"scale-panel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Scaling"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sx"], null),"X: ",(sx | (0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.slider,new cljs.core.Keyword(null,"sx","sx",-403071592),sx,(-5),(5)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sy"], null),"Y: ",(sy | (0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.slider,new cljs.core.Keyword(null,"sy","sy",227523849),sy,(-5),(5)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sz"], null),"Z: ",(sz | (0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.slider,new cljs.core.Keyword(null,"sz","sz",-1795504382),sz,(-5),(5)], null)], null)], null);
});
examples.core.translate_panel = (function examples$core$translate_panel(){
var map__32900 = cljs.core.deref.call(null,examples.core.transform);
var map__32900__$1 = ((((!((map__32900 == null)))?((((map__32900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32900):map__32900);
var tx = cljs.core.get.call(null,map__32900__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__32900__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var tz = cljs.core.get.call(null,map__32900__$1,new cljs.core.Keyword(null,"tz","tz",278339241));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"translate-panel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Translation"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tx"], null),"X: ",(tx | (0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.slider,new cljs.core.Keyword(null,"tx","tx",466630418),tx,(-10),(10)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"ty"], null),"Y: ",(ty | (0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.slider,new cljs.core.Keyword(null,"ty","ty",158290825),ty,(-10),(10)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tz"], null),"Z: ",(tz | (0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.slider,new cljs.core.Keyword(null,"tz","tz",278339241),tz,(-10),(10)], null)], null)], null);
});
examples.core.rotate_panel = (function examples$core$rotate_panel(){
var map__32904 = cljs.core.deref.call(null,examples.core.transform);
var map__32904__$1 = ((((!((map__32904 == null)))?((((map__32904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32904):map__32904);
var rx = cljs.core.get.call(null,map__32904__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var ry = cljs.core.get.call(null,map__32904__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rz = cljs.core.get.call(null,map__32904__$1,new cljs.core.Keyword(null,"rz","rz",386461181));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"rotate-panel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Rotation"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"rx"], null),"X: ",(rx | (0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.slider,new cljs.core.Keyword(null,"rx","rx",1627208482),rx,(-90),(90)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"ry"], null),"Y: ",(ry | (0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.slider,new cljs.core.Keyword(null,"ry","ry",-334598563),ry,(-90),(90)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"rz"], null),"Z: ",(rz | (0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.slider,new cljs.core.Keyword(null,"rz","rz",386461181),rz,(-90),(90)], null)], null)], null);
});
examples.core.transform_panel = (function examples$core$transform_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"transform-panel"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.translate_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.rotate_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.scale_panel], null)], null);
});
var map__32906_32908 = cljs.core.deref.call(null,examples.core.transform);
var map__32906_32909__$1 = ((((!((map__32906_32908 == null)))?((((map__32906_32908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32906_32908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32906_32908):map__32906_32908);
var tx_32910 = cljs.core.get.call(null,map__32906_32909__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty_32911 = cljs.core.get.call(null,map__32906_32909__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var tz_32912 = cljs.core.get.call(null,map__32906_32909__$1,new cljs.core.Keyword(null,"tz","tz",278339241));
var rx_32913 = cljs.core.get.call(null,map__32906_32909__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var ry_32914 = cljs.core.get.call(null,map__32906_32909__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rz_32915 = cljs.core.get.call(null,map__32906_32909__$1,new cljs.core.Keyword(null,"rz","rz",386461181));
var sx_32916 = cljs.core.get.call(null,map__32906_32909__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var sy_32917 = cljs.core.get.call(null,map__32906_32909__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var sz_32918 = cljs.core.get.call(null,map__32906_32909__$1,new cljs.core.Keyword(null,"sz","sz",-1795504382));
projection.core.start.call(null,tx_32910,ty_32911,tz_32912,rx_32913,ry_32914,rz_32915,sx_32916,sy_32917,sz_32918);

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.core.transform_panel], null),document.getElementById("app"));
examples.core.on_js_reload = (function examples$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1480282429272