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
  (ta/float32 [-1.0 -1.0 -1.0
                1.0 -1.0 -1.0
               -1.0  1.0 -1.0
               -1.0  1.0 -1.0
                1.0 -1.0 -1.0
                1.0  1.0 -1.0]))

; vertex-colors for square
(defonce square-color
  (ta/float32 [1.0 0.0 0.0 1.0
               0.0 1.0 0.0 1.0
               0.0 0.0 1.0 1.0
               0.0 0.0 1.0 1.0
               0.0 1.0 0.0 1.0
               1.0 1.0 1.0 1.0]))

(defonce square-texture-coord
  (ta/float32 [0.0 0.0
               1.0 0.0
               0.0 1.0
               0.0 1.0
               1.0 0.0
               1.0 1.0]))


(defn make-cube
  [x0 y0 z0 x1 y1 z1]
  (ta/float32
    [ ; front face -- red
      x0 y0 z0
      x1 y0 z0
      x0 y1 z0
      x0 y1 z0
      x1 y0 z0
      x1 y1 z0
      ; right face -- green
      x1 y0 z0
      x1 y0 z1
      x1 y1 z0
      x1 y1 z0
      x1 y0 z1
      x1 y1 z1
      ; top face -- blue
      x1 y1 z0
      x1 y1 z1
      x0 y1 z1
      x0 y1 z1
      x0 y1 z0
      x1 y1 z0
      ; left face -- light blue
      x0 y0 z0
      x0 y1 z0
      x0 y0 z1
      x0 y0 z1
      x0 y1 z0
      x0 y1 z1
      ; bottom -- yellow
      x0 y0 z0
      x0 y0 z1
      x1 y0 z0
      x1 y0 z0
      x0 y0 z1
      x1 y0 z1
      ; back -- white
      x1 y0 z1
      x0 y0 z1
      x1 y1 z1
      x1 y1 z1
      x0 y0 z1
      x0 y1 z1]))


 ; vertex-colors for cube
(defonce cube-color
  (ta/float32
    [ ;front face -- red
     1.0 0.0 0.0 1.0
     1.0 0.0 0.0 1.0
     1.0 0.0 0.0 1.0
     1.0 0.0 0.0 1.0
     1.0 0.0 0.0 1.0
     1.0 0.0 0.0 1.0
      ;right face -- green
     0.0 1.0 0.0 1.0
     0.0 1.0 0.0 1.0
     0.0 1.0 0.0 1.0
     0.0 1.0 0.0 1.0
     0.0 1.0 0.0 1.0
     0.0 1.0 0.0 1.0
     ; top -- blue
     0.0 0.0 1.0 1.0
     0.0 0.0 1.0 1.0
     0.0 0.0 1.0 1.0
     0.0 0.0 1.0 1.0
     0.0 0.0 1.0 1.0
     0.0 0.0 1.0 1.0
     ; left face -- light blue
     0.0 1.0 1.0 1.0
     0.0 1.0 1.0 1.0
     0.0 1.0 1.0 1.0
     0.0 1.0 1.0 1.0
     0.0 1.0 1.0 1.0
     0.0 1.0 1.0 1.0
     ; bottom -- yellow
     1.0 1.0 0.0 1.0
     1.0 1.0 0.0 1.0
     1.0 1.0 0.0 1.0
     1.0 1.0 0.0 1.0
     1.0 1.0 0.0 1.0
     1.0 1.0 0.0 1.0
     ; back -- white
     1.0 1.0 1.0 1.0
     1.0 1.0 1.0 1.0
     1.0 1.0 1.0 1.0
     1.0 1.0 1.0 1.0
     1.0 1.0 1.0 1.0
     1.0 1.0 1.0 1.0]))
