(ns projection.core
  (:require [cljs-webgl.context :as context]
            [cljs-webgl.shaders :as shaders]
            [cljs-webgl.constants.draw-mode :as draw-mode]
            [cljs-webgl.constants.data-type :as data-type]
            [cljs-webgl.constants.uniform-type :as uniform-type]
            [cljs-webgl.constants.buffer-object :as buffer-object]
            [cljs-webgl.constants.shader :as shader]
            [cljs-webgl.constants.capability :as capability]
            [cljs-webgl.buffers :as buffers]
            [cljs-webgl.typed-arrays :as ta]
            [gl-helpers.core :as helpers]  ;; missing in cljs-webgl.context??
            [geometry.basic-shapes :refer [square]]
            [mat4]))

(defn log [& args]
  (.apply js/console.log js/console (to-array args)))

(def vertex-shader-source
  "attribute vec4 a_position;
   attribute vec4 a_color;
   uniform mat4 u_pMatrix;
   uniform mat4 u_mvMatrix;
   varying vec4 v_color;

   void main() {
     gl_Position = u_pMatrix * u_mvMatrix * a_position;
     v_color = a_color;
   }")

(def fragment-shader-source
  "precision mediump float;
   uniform vec4 u_color;
   varying vec4 v_color;

   void main() {
     gl_FragColor = v_color;
   }")

(defn deg->rad [degrees]
 (/ (* degrees Math/PI) 180))

(defonce vertex-color
 (ta/float32 [1.0 0.0 0.0 1.0
              0.0 1.0 0.0 1.0
              0.0 0.0 1.0 1.0
              1.0 0.0 0.0 1.0
              0.0 1.0 0.0 1.0
              0.0 0.0 1.0 1.0]))


(defn ortho-projection-matrix
  [frustrum]
  (let [halfX (/ (nth frustrum 0) 2.0)
        halfY (/ (nth frustrum 1) 2.0)
        halfZ (/ (nth frustrum 2) 2.0)]
    (mat4/ortho
      (mat4/create)
      (- halfX) halfX (- halfY) halfY (- halfZ) 10)))

(defn perspective-projection-matrix
  [fov aspect-ratio depth]
  (mat4/perspective
    (mat4/create)
    fov aspect-ratio (nth depth 0) (nth depth 1)))

(defn model-view-matrix [t r s]
  (let [m (mat4/create)]
    (mat4/translate m m (clj->js t))
    (mat4/rotateX m m (deg->rad (nth r 0)))
    (mat4/rotateY m m (deg->rad (nth r 1)))
    (mat4/rotateZ m m (deg->rad (nth r 2)))
    (mat4/scale m m (clj->js s))))



(defn start []
  (let [canvas      (.getElementById js/document "canvas")
        gl          (context/get-context (.getElementById js/document "canvas"))
        shader (shaders/create-program gl
                 (shaders/create-shader gl shader/vertex-shader vertex-shader-source)
                 (shaders/create-shader gl shader/fragment-shader fragment-shader-source))
        vertex-buffer (buffers/create-buffer gl square
                                             buffer-object/array-buffer
                                             buffer-object/static-draw
                                             3)
        vertex-color-buffer (buffers/create-buffer gl
                                                   vertex-color
                                                   buffer-object/array-buffer
                                                   buffer-object/static-draw
                                                   4)
        translate [1, 0, -7]
        rotate [45, -45, 0]
        scale [2, 1, 1]
        ortho [10 10 10]
        fov 45
        aspect-ratio (let [{width :width,
                            height :height}
                           (helpers/get-viewport gl)]
                        (/ width height))
        depth [0.1 100]]


    (-> gl
     (buffers/clear-color-buffer 0.2 0.2 0.2 1)
     (buffers/clear-depth-buffer 1)
     (buffers/draw! :shader shader
                    :draw-mode draw-mode/triangles
                    :count (.-numItems vertex-buffer)
                    :capabilities {capability/depth-test true}
                    :attributes
                    [{:buffer vertex-buffer
                      :location (shaders/get-attrib-location gl shader "a_position")
                      :components-per-vertex (.-itemSize vertex-buffer)
                      :type data-type/float}

                     {:buffer vertex-color-buffer
                      :location (shaders/get-attrib-location gl shader "a_color")
                      :components-per-vertex (.-itemSize vertex-color-buffer)
                      :type data-type/float}]

                    :uniforms
                    ;  [{:name "u_pMatrix" :type :mat4 :values (ortho-projection-matrix ortho)}]
                     [{:name "u_pMatrix" :type :mat4 :values
                        (perspective-projection-matrix fov aspect-ratio depth)}
                      {:name "u_mvMatrix" :type :mat4 :values
                        (model-view-matrix translate rotate scale)}]))))
