(ns shader-source.core)

(defonce vertex-shader-source
  "attribute vec4 a_position;
   attribute vec4 a_color;
   uniform mat4 u_pMatrix;
   uniform mat4 u_mvMatrix;
   varying vec4 v_color;

   void main() {
     gl_Position = u_pMatrix * u_mvMatrix * a_position;
     v_color = a_color;
   }"
)

(defonce fragment-shader-source
  "precision mediump float;
   uniform vec4 u_color;
   varying vec4 v_color;

   void main() {
     gl_FragColor = v_color;
   }"
)
