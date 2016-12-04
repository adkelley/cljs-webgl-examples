(ns map-texture.core
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
            [geometry.basic-shapes :refer [set-triangle triangle-texture-coord]]
            [shader-source.core :refer [texture-vertex-shader
                                        texture-fragment-shader]]
            [mat4]
            [cljs.core.async :refer [timeout]]))

(enable-console-print!)

(defonce triangle (set-triangle 0 0 0 50 50 0 25 50 0))
(defonce canvas (.getElementById js/document "canvas"))
(defonce gl (context/get-context (.getElementById js/document "canvas")))
(defonce shader (shaders/create-program gl
                  (shaders/create-shader gl shader/vertex-shader texture-vertex-shader)
                  (shaders/create-shader gl shader/fragment-shader texture-fragment-shader)))
(defonce position-buffer (buffers/create-buffer gl triangle
                                     buffer-object/array-buffer
                                     buffer-object/static-draw
                                     3))
(defonce texture-coord-buffer (buffers/create-buffer gl
                                     triangle-texture-coord
                                     buffer-object/array-buffer
                                     buffer-object/static-draw
                                     2))

(defonce ortho [10 10 10])
(defonce fov 60)
(defonce aspect-ratio (let [{width :width,
                             height :height}
                            (common/get-viewport gl)]
                          (/ width height)))
(defonce depth [1 2000])
(defonce projection-matrix
  (common/perspective-projection fov aspect-ratio depth))

(defonce my-texture (atom {:texture nil :loaded false}))


(common/load-texture
  gl
  "./images/webgl-logo-256.png"
  (fn [webgl-texture]
    (println "texture loaded")
    (swap! my-texture assoc :texture webgl-texture :loaded true)))

(defn draw [translate
            rotate
            scale]
  (when (:loaded @my-texture)
    (-> gl
      (buffers/clear-color-buffer 0.0 0.0 0.0 1.0)
      (buffers/clear-depth-buffer 1)
      (buffers/draw! :shader shader
                     :draw-mode draw-mode/triangles
                     :count (.-numItems position-buffer)
                     :capabilities {capability/depth-test true capability/cull-face true}
                     :attributes
                       [{:buffer position-buffer
                         :location (shaders/get-attrib-location gl shader "a_position")
                         :components-per-vertex (.-itemSize position-buffer)
                         :type data-type/float}
                        {:buffer texture-coord-buffer
                         :location (shaders/get-attrib-location gl shader "a_texcoord")
                         :components-per-vertex (.-itemSize texture-coord-buffer)
                         :type data-type/float}]

                     :uniforms
                       [{:name "u_pMatrix" :type :mat4 :values projection-matrix}
                        {:name "u_mvMatrix" :type :mat4 :values
                          (common/model-view-matrix translate rotate scale)}]
                     :textures
                       [{:name "u_texture" :texture (:texture @my-texture)}]))))
