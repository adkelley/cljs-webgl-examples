(ns triangle.core
  (:require [cljs-webgl.context :as context]
            [cljs-webgl.shaders :as shaders]
            [cljs-webgl.constants.draw-mode :as draw-mode]
            [cljs-webgl.constants.data-type :as data-type]
            [cljs-webgl.constants.uniform-type :as uniform-type]
            [cljs-webgl.constants.buffer-object :as buffer-object]
            [cljs-webgl.constants.shader :as shader]
            [cljs-webgl.buffers :as buffers]
            [cljs-webgl.typed-arrays :as ta]
            [geometry.basic-shapes :refer [set-triangle]]))


(defonce triangle (set-triangle 0.0 1.0 0.0 -1.0 -1.0 0.0 1.0 -1.0 0.0))
(defonce randomColor
  (ta/float32 [(rand), (rand), (rand), 1]))

(def vertex-shader-source
  "attribute vec4 vertex_position;
   void main() {
     gl_Position = vertex_position;
   }")

;; set the vertex colors uniformly
(def fragment-shader-source
  "precision mediump float;

   uniform vec4 u_color;

   void main() {
     gl_FragColor = u_color;
   }")

(defn log [& args]
  (.apply js/console.log js/console (to-array args)))


(defonce canvas (.getElementById js/document "canvas"))
(defonce gl (context/get-context (.getElementById js/document "canvas")))
(defonce shader (shaders/create-program gl
                  (shaders/create-shader gl shader/vertex-shader vertex-shader-source)
                  (shaders/create-shader gl shader/fragment-shader fragment-shader-source)))
(defonce triangle-vertex-buffer
  (buffers/create-buffer gl
                         triangle
                         buffer-object/array-buffer
                         buffer-object/static-draw
                         3))

(defn draw [translate
            rotate
            scale] ; not used in this example

    (-> gl
     (buffers/clear-color-buffer 0.2 0.2 0.2 1)
     (buffers/draw! :shader shader
                    :draw-mode draw-mode/triangles
                    :count (.-numItems triangle-vertex-buffer)

                    :attributes
                    [{:buffer triangle-vertex-buffer
                      :location (shaders/get-attrib-location gl shader "vertex_position")
                      :components-per-vertex (.-itemSize triangle-vertex-buffer)
                      :type data-type/float}]

                    :uniforms
                    [{:name "u_color" :type :vec4 :values randomColor}])))
