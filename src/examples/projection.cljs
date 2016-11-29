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
            [common.core :as common]  ;; missing in cljs-webgl.context??
            [geometry.basic-shapes :refer [square square-color]]
            [shader-source.core :refer [basic-vertex-shader
                                        basic-fragment-shader]]))

(enable-console-print!)

; (defn deg->rad [degrees]
;  (/ (* degrees Math/PI) 180))
;
;
; (defn ortho-projection-matrix
;   [frustrum]
;   (let [halfX (/ (nth frustrum 0) 2.0)
;         halfY (/ (nth frustrum 1) 2.0)
;         halfZ (/ (nth frustrum 2) 2.0)]
;     (mat4/ortho
;       (mat4/create)
;       (- halfX) halfX (- halfY) halfY (- halfZ) 10)))
;
; (defn perspective-projection-matrix
;   [fov aspect-ratio depth]
;   (mat4/perspective
;     (mat4/create)
;     fov aspect-ratio (nth depth 0) (nth depth 1)))
;
; (defn model-view-matrix [t r s]
;   (let [m (mat4/create)]
;     (mat4/translate m m (clj->js t))
;     (mat4/rotateX m m (deg->rad (nth r 0)))
;     (mat4/rotateY m m (deg->rad (nth r 1)))
;     (mat4/rotateZ m m (deg->rad (nth r 2)))
;     (mat4/scale m m (clj->js s))))

(defonce canvas (.getElementById js/document "canvas"))
(defonce gl (context/get-context (.getElementById js/document "canvas")))
(defonce shader (shaders/create-program gl
                  (shaders/create-shader gl shader/vertex-shader basic-vertex-shader)
                  (shaders/create-shader gl shader/fragment-shader basic-fragment-shader)))
(defonce vertex-buffer (buffers/create-buffer gl square
                                     buffer-object/array-buffer
                                     buffer-object/static-draw
                                     3))
(defonce vertex-color-buffer (buffers/create-buffer gl
                                           square-color
                                           buffer-object/array-buffer
                                           buffer-object/static-draw
                                           4))
(defonce ortho [10 10 10])
(defonce fov 45)
(defonce aspect-ratio (let [{width :width,
                             height :height}
                            (common/get-viewport gl)]
                          (/ width height)))
(defonce depth [0.1 100])

(defn draw [translate
            rotate
            scale]

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
                        (common/perspective-projection-matrix fov aspect-ratio depth)}
                      {:name "u_mvMatrix" :type :mat4 :values
                        (common/model-view-matrix translate rotate scale)}])))
