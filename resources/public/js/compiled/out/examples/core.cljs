(ns examples.core
  (:require [projection.core :as projection]
            [triangle.core :as triangle]
            [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "Rendering Example: projection.cljs")

(defonce app-state (atom {:tx -1 :ty -1 :tz -10}))

(defn control-panel []
  [:h1 "Translate: " (:tx @app-state) ", " (:ty @app-state) ", " (:tz @app-state)])

(reagent/render-component [control-panel]
                          (. js/document (getElementById "app")))

; uncomment lines 10-11 when using Figwheel (see Readme)
(defn on-js-reload []
  (projection/start (:tx @app-state) (:ty @app-state) (:tz @app-state)))   ;; change me!! (e.g., projection/start)

;; comment out line 14 when using Figwheel (see Readme)
; (projection/start [2 2]) ;; change me!! (e.g., projection/start)
