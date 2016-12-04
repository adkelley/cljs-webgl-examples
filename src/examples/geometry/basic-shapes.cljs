(ns geometry.basic-shapes
  (:require [cljs-webgl.typed-arrays :as ta]))

; model space for triangle and square is [-1 1 -1 1 -1 1]


(defn set-triangle
  [x0 y0 z0 x1 y1 z1 x2 y2 z2]
  (ta/float32 [x0 y0 z0
               x1 y1 z1
               x2 y2 z2]))

(defonce triangle-color
 (ta/float32 [1.0 0.0 0.0 1.0
              0.0 1.0 0.0 1.0
              0.0 0.0 1.0 1.0]))

(defonce triangle-texture-coord
 (ta/float32 [0.0 0.0
              1.0 0.0
              0.5 1.0]))            

(defn set-square
  [x0 y0 z0 x1 y1 z1]
  (ta/float32
    [x0 y0 z0
     x1 y0 z0
     x1 y1 z0
     x1 y1 z0
     x0 y1 z0
     x0 y0 z0]))

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
               1.0 1.0
               1.0 1.0
               0.0 1.0
               0.0 0.0]))


(defn set-cube
  [x0 y0 z0 x1 y1 z1]
  (ta/float32
    [ ; front face
      x0 y0 z1
      x1 y0 z1
      x1 y1 z1
      x1 y1 z1
      x0 y1 z1
      x0 y0 z1
      ; bottom face
      x0 y0 z0
      x1 y0 z0
      x0 y0 z1
      x0 y0 z1
      x1 y0 z0
      x1 y0 z1
      ; back face
      x1 y0 z0
      x0 y0 z0
      x1 y1 z0
      x1 y1 z0
      x0 y0 z0
      x0 y1 z0
      ; top face
      x0 y1 z0
      x0 y1 z1
      x1 y1 z0
      x1 y1 z0
      x0 y1 z1
      x1 y1 z1
      ; left face
      x0 y0 z0
      x0 y0 z1
      x0 y1 z0
      x0 y1 z0
      x0 y0 z1
      x0 y1 z1
      ; right face
      x1 y0 z1
      x1 y0 z0
      x1 y1 z1
      x1 y1 z1
      x1 y0 z0
      x1 y1 z0]))

(defonce cube-color
  (ta/float32
    [;; front face -- red
     1.0 0.0 0.0 1.0
     1.0 0.0 0.0 1.0
     1.0 0.0 0.0 1.0
     1.0 0.0 0.0 1.0
     1.0 0.0 0.0 1.0
     1.0 0.0 0.0 1.0
     ;; bottom face -- blue
     0.0 0.0 1.0 1.0
     0.0 0.0 1.0 1.0
     0.0 0.0 1.0 1.0
     0.0 0.0 1.0 1.0
     0.0 0.0 1.0 1.0
     0.0 0.0 1.0 1.0
     ; back face -- green
     0.0 1.0 0.0 1.0
     0.0 1.0 0.0 1.0
     0.0 1.0 0.0 1.0
     0.0 1.0 0.0 1.0
     0.0 1.0 0.0 1.0
     0.0 1.0 0.0 1.0
     ; top face -- white
     1.0 1.0 1.0 1.0
     1.0 1.0 1.0 1.0
     1.0 1.0 1.0 1.0
     1.0 1.0 1.0 1.0
     1.0 1.0 1.0 1.0
     1.0 1.0 1.0 1.0
     ; left face -- light blue
     0.0 1.0 1.0 1.0
     0.0 1.0 1.0 1.0
     0.0 1.0 1.0 1.0
     0.0 1.0 1.0 1.0
     0.0 1.0 1.0 1.0
     0.0 1.0 1.0 1.0
     ; right face -- yellow
     1.0 1.0 0.0 1.0
     1.0 1.0 0.0 1.0
     1.0 1.0 0.0 1.0
     1.0 1.0 0.0 1.0
     1.0 1.0 0.0 1.0
     1.0 1.0 0.0 1.0]))

(defonce cube-texture-coord
 (ta/float32
   [;front
    0.0 0.0
    1.0 0.0
    1.0 1.0
    1.0 1.0
    0.0 1.0
    0.0 0.0
    ;bottom
    0.0 0.0
    1.0 0.0
    0.0 1.0
    0.0 1.0
    1.0 0.0
    1.0 1.0
    ;back
    0.0 0.0
    1.0 0.0
    0.0 1.0
    0.0 1.0
    1.0 0.0
    1.0 1.0
    ;top
    0.0 0.0
    1.0 0.0
    0.0 1.0
    0.0 1.0
    1.0 0.0
    1.0 1.0
    ;left
    0.0 0.0
    1.0 0.0
    0.0 1.0
    0.0 1.0
    1.0 0.0
    1.0 1.0
    ;right
    0.0 0.0
    1.0 0.0
    0.0 1.0
    0.0 1.0
    1.0 0.0
    1.0 1.0]))
