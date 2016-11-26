(ns geometry.text-shapes
  (:require [cljs-webgl.typed-arrays :as ta]))

(defonce f-shape
  (ta/float32 [
    ; left column
               0,   0,  0,
               30,   0,  0,
               0, 150,  0,
               0, 150,  0,
               30,   0,  0,
               30, 150,  0,

    ; top rung
               30,   0,  0,
               100,   0,  0,
               30,  30,  0,
               30,  30,  0,
               100,   0,  0,
               100,  30,  0,

   ; middle rung
               30,  60,  0,
               67,  60,  0,
               30,  90,  0,
               30,  90,  0,
               67,  60,  0,
               67,  90,  0]))
