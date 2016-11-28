(ns geometry.basic-shapes
  (:require [cljs-webgl.typed-arrays :as ta]))

; model space is [-1 1, -1 1, -1 1]

(defonce triangle
  (ta/float32 [  0.0  1.0  0.0
                -1.0 -1.0  0.0
                 1.0 -1.0  0.0]))

(defonce triangle-color
  (ta/float32 [1.0 0.0 0.0 1.0
               0.0 1.0 0.0 1.0
               0.0 0.0 1.0 1.0]))

(defonce square
 (ta/float32 [-1.0 -1.0 0.0
               1.0 -1.0 0.0
              -1.0  1.0 0.0
              -1.0  1.0 0.0
               1.0 -1.0 0.0
               1.0  1.0 0.0]))

; vertex-colors for square
(defonce square-color
  (ta/float32 [1.0 0.0 0.0 1.0
               0.0 1.0 0.0 1.0
               0.0 0.0 1.0 1.0
               0.0 0.0 1.0 1.0
               0.0 1.0 0.0 1.0
               1.0 1.0 1.0 1.0]))
