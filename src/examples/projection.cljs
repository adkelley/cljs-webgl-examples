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
            [geometry.basic-shapes :refer [set-square square-color]]
            [shader-source.core :refer [basic-vertex-shader
                                        basic-fragment-shader]]))

(enable-console-print!)

;; Initialization
(defonce square (set-square 0 0 0 50 50 0))
(defonce canvas
  (.getElementById js/document "canvas"))
(defonce gl
  (context/get-context (.getElementById js/document "canvas")))
(defonce shader
  (shaders/create-program gl
     (shaders/create-shader gl shader/vertex-shader basic-vertex-shader)
     (shaders/create-shader gl shader/fragment-shader basic-fragment-shader)))
(defonce vertex-buffer
  (buffers/create-buffer gl square
                         buffer-object/array-buffer
                         buffer-object/static-draw
                         3))
(defonce vertex-color-buffer
  (buffers/create-buffer gl
                         square-color
                         buffer-object/array-buffer
                         buffer-object/static-draw
                         4))
(defonce position-location
  (shaders/get-attrib-location gl shader "a_position"))
(defonce color-location
  (shaders/get-attrib-location gl shader "a_color"))

(defonce ortho [10 10 10])
(defonce fov 60)
(defonce aspect-ratio (let [{width :width,
                             height :height}
                            (common/get-viewport gl)]
                          (/ width height)))
(defonce depth [1 2000])
(defonce projection-matrix
  (common/perspective-projection fov aspect-ratio depth))

(defn draw [translate
            rotate
            scale]

    (-> gl
     (buffers/clear-color-buffer 0.25 0.25 0.25 1)
     (buffers/clear-depth-buffer 1)
     (buffers/draw! :shader shader
                    :draw-mode draw-mode/triangles
                    :count (.-numItems vertex-buffer)
                    :capabilities {capability/depth-test true capability/cull-face true}
                    :attributes
                    [{:buffer vertex-buffer
                      :location position-location
                      :components-per-vertex (.-itemSize vertex-buffer)
                      :type data-type/float}

                     {:buffer vertex-color-buffer
                      :location color-location
                      :components-per-vertex (.-itemSize vertex-color-buffer)
                      :type data-type/float}]

                    :uniforms
                     [{:name "u_pMatrix" :type :mat4 :values projection-matrix}
                      {:name "u_mvMatrix" :type :mat4 :values
                        (common/model-view-matrix translate rotate scale)}])))
