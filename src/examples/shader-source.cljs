(ns shader-source.core)

(defonce basic-vertex-shader
  "attribute vec3 a_position;
   attribute vec4 a_color;
   uniform mat4 u_pMatrix;
   uniform mat4 u_mvMatrix;
   varying vec4 v_color;

   void main() {
     gl_Position = u_pMatrix * u_mvMatrix * vec4(a_position, 1);
     v_color = a_color;
   }")


(defonce basic-fragment-shader
  "precision mediump float;
   uniform vec4 u_color;
   varying vec4 v_color;

   void main() {
     gl_FragColor = v_color;
   }")

(defonce texture-vertex-shader
  "attribute vec4 a_position;
   attribute vec2 a_texcoord;
   uniform mat4 u_mvMatrix;
   uniform mat4 u_pMatrix;
   varying vec2 v_texcoord;

   void main() {
     gl_Position = u_pMatrix * u_mvMatrix * a_position;

     /* pass the texture coord to fragment-shader */
     v_texcoord = a_texcoord;
   }")

(defonce texture-fragment-shader
  "precision mediump float;
   varying vec2 v_texcoord;

   uniform sampler2D u_texture;

   void main() {
     gl_FragColor = texture2D(u_texture, v_texcoord);
   }")
