(ns common.core
  (:require
    [cljs-webgl.constants.parameter-name :as parameter-name]
    [cljs-webgl.texture :as texture]
    [cljs-webgl.constants.texture-parameter-name :as texture-parameter-name]
    [cljs-webgl.constants.texture-target :as target]
    [cljs-webgl.constants.pixel-format :as format]
    [cljs-webgl.constants.texture-filter :as texture-filter]
    [cljs-webgl.constants.webgl :as webgl]
    [WebGLUtils]
    [mat4]))

;; Not in the cljs-webgl "0.1.5-SNAPSHOT"
(defn get-viewport
 "Returns the current viewport for a given `gl-context` as a map with the form:
 {:x, :y, :width, :height}"

 [gl-context]
 (let [[x y w h]
       ;; TODO: Is there any other way to access typed array values?
       (.apply js/Array [] (.getParameter gl-context parameter-name/viewport))]
   {:x x, :y y, :width w, :height h}))

(defn deg->rad [degrees]
 (/ (* degrees Math/PI) 180))

(defn ortho-projection
  [[width height depth]]
  (let [halfX (/ width 2.0)
        halfY (/ height 2.0)
        halfZ (/ depth 2.0)]
    (mat4/ortho
      (mat4/create)
      (- halfX) halfX (- halfY) halfY (- halfZ) 10)))

; (defn perspective-projection
;   [fov aspect [near far]]
;   (let [f (Math/tan(- (* Math/PI 0.5) (* (deg->rad fov) 0.5)))
;         range-inv (/ 1.0 (- near far))]
;     (mat4/fromValues
;       (/ f aspect) 0 0 0
;       0 f 0 0
;       0 0 (* range-inv (+ near far)) -1
;       0 0 (* near far range-inv 2) 0)))


(defn perspective-projection
  [fov aspect-ratio [near far]]
  (mat4/perspective
    (mat4/create)
    (deg->rad fov) aspect-ratio near far))

(defn model-view-matrix [t [rx ry rz] s]
  (let [m (mat4/create)]
    (mat4/translate m m (clj->js t))
    (mat4/rotateX m m (deg->rad rx))
    (mat4/rotateY m m (deg->rad ry))
    (mat4/rotateZ m m (deg->rad rz))
    (mat4/scale m m (clj->js s))))

(defn animate [draw-fn]
  (letfn [(loop [frame]
            (fn []
              (.requestAnimFrame  js/window (loop (inc frame)))
              (draw-fn frame)))]
    ((loop 0))))

(defn load-image
  [url callback-fn]
  (let [img (js/Image.)]
    (set! (.-onload img) (fn [] (callback-fn img)))
    (set! (.-crossOrigin img) "anonymous")
    (set! (.-src img) url)))

(defn load-texture
  "Loads the texture from the given URL. Note that the image is loaded in the background,
   and the returned texture will not immediately be fully initialized."
  [gl-context url callback-fn]
  (load-image url (fn [img] (callback-fn
                              (texture/create-texture
                                gl-context
                                :image img
                                :pixel-store-modes {webgl/unpack-flip-y-webgl true}
                                :parameters {texture-parameter-name/texture-mag-filter texture-filter/nearest
                                             texture-parameter-name/texture-min-filter texture-filter/nearest})))))
