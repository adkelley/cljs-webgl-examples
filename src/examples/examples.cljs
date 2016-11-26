(ns examples.core
  (:require [projection.core :as projection]
            [triangle.core :as triangle]))

(enable-console-print!)

(println "Rendering Example: triangle.cljs")

;; uncomment line 10-11 when using Figwheel
; (defn on-js-reload []
;   (triangle/start))   ;; change me!! (e.g., projection/start)

;; comment out line 14 when using Figwheel
(projection/start)  ;; change me!! (e.g., projection/start)
