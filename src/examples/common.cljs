(ns common.core
  (:require [cljs-webgl.constants.parameter-name :as parameter-name]
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

(defn ortho-projection-matrix
  [[width height depth]]
  (let [halfX (/ width 2.0)
        halfY (/ height 2.0)
        halfZ (/ depth 2.0)]
    (mat4/ortho
      (mat4/create)
      (- halfX) halfX (- halfY) halfY (- halfZ) 10)))

(defn perspective-projection-matrix
  [fov aspect-ratio [near far]]
  (mat4/perspective
    (mat4/create)
    fov aspect-ratio near far))

(defn model-view-matrix [t [rx ry rz] s]
  (let [m (mat4/create)]
    (mat4/translate m m (clj->js t))
    (mat4/rotateX m m (deg->rad rx))
    (mat4/rotateY m m (deg->rad ry))
    (mat4/rotateZ m m (deg->rad rz))
    (mat4/scale m m (clj->js s))))
