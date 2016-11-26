(ns examples.core
  (:require [projection.core :as projection]
            [triangle.core :as triangle]))

(enable-console-print!)

(println "Rendering Example: projection.cljs")

;; uncomment lines 10-11 when using Figwheel (see Readme)
(defn on-js-reload []
  (projection/start))   ;; change me!! (e.g., projection/start)

;; comment out line 14 when using Figwheel (see Readme)
; (triangle/start)  ;; change me!! (e.g., projection/start)
