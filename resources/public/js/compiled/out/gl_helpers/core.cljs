(ns gl-helpers.core
  (:require [cljs-webgl.constants.parameter-name :as parameter-name]))

;; Not in the cljs-webgl "0.1.5-SNAPSHOT"
(defn get-viewport
 "Returns the current viewport for a given `gl-context` as a map with the form:
 {:x,
   :y,
   :width,
   :height}"
 [gl-context]
 (let [[x y w h] (.apply js/Array [] (.getParameter gl-context parameter-name/viewport))] ;; TODO: Is there any other way to access typed array values?
   {:x      x,
    :y      y,
    :width  w,
    :height h}))
