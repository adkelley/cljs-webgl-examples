(ns examples.core
  (:require [projection.core :as projection]
            [triangle.core :as triangle]
            [reagent.core :as r]))

(enable-console-print!)

(println "Rendering Example: projection.cljs")

(defonce transform (r/atom {:tx 0 :ty 0 :tz -10
                            :rx 0 :ry 0 :rz 0
                            :sx 1 :sy 1 :sz 1}))

(defn slider [param value min max]
  [:div {:class "slider"}
    [:input {:type "range" :value value :min min :max max
             :on-change (fn [e]
                          (swap! transform assoc param (.-target.value e))
                          (let [{:keys [tx ty tz
                                        sx sy sz
                                        rx ry rz]} @transform]
                             (projection/start tx ty tz rx ry rz sx sy sz)))}]])



(defn scale-panel []
   (let [{:keys [sx sy sz]} @transform]
     [:div {:id "scale-panel"}
       [:h3 "Scaling"]
       [:div {:id "sx"}
        "X: " (int sx)
        [slider :sx sx -5 5]]
       [:div {:id "sy"}
        "Y: " (int sy)
        [slider :sy sy -5 5]]
       [:div {:id "sz"}
        "Z: " (int sz)
        [slider :sz sz -5 5]]]))

(defn translate-panel []
  (let [{:keys [tx ty tz]} @transform]
    [:div {:id "translate-panel"}
      [:h3 "Translation"]
      [:div {:id "tx"}
       "X: " (int tx)
       [slider :tx tx -10 10]]
      [:div {:id "ty"}
       "Y: " (int ty)
       [slider :ty ty -10 10]]
      [:div {:id "tz"}
       "Z: " (int tz)
       [slider :tz tz -10 10]]]))

(defn rotate-panel []
   (let [{:keys [rx ry rz]} @transform]
     [:div {:id "rotate-panel"}
       [:h3 "Rotation"]
       [:div {:id "rx"}
        "X: " (int rx)
        [slider :rx rx -90 90]]
       [:div {:id "ry"}
        "Y: " (int ry)
        [slider :ry ry -90 90]]
       [:div {:id "rz"}
        "Z: " (int rz)
        [slider :rz rz -90 90]]]))

(defn transform-panel []
  [:div {:id "transform-panel"}
    [translate-panel]
    [rotate-panel]
    [scale-panel]])

(r/render
    [transform-panel]
    (. js/document (getElementById "app")))

(let [{:keys [tx ty tz
              rx ry rz
              sx sy sz]} @transform]
  (projection/start tx ty tz
                    rx ry rz
                    sx sy sz))

; uncomment lines 10-11 when using Figwheel (see Readme)
; (defn on-js-reload []
;   (let [{:keys [tx ty tz]} @translate]
;     (projection/start :tx :ty :tz)))   ;; change me!! (e.g., projection/start)

;; comment out lines 14-15 when using Figwheel (see Readme)
;; change (e.g., projection/start -> triangle/start)
; (let [{:keys [tx ty tz]} @translate
;       {:keys [rx ry rz]} @rotate
;       {:keys [sx sy sz]} @scale]
;   (projection/start tx ty tz
;                     rx ry rz
;                     sz sy sz))


; (defonce app-state (atom {:text "Hello world!"}))
;
; (defn hello-world []
;   [:h1 (:text @app-state)])
;
; (r/render-component [hello-world]
;                           (. js/document (getElementById "app")))
