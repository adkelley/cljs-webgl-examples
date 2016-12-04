(ns examples.core
  (:require
    ; [projection.core :as projection]
    [map-texture.core :as texture]
    ; [triangle.core :as triangle]
    [reagent.core :as r]))

(enable-console-print!)

(println "Rendering Example: map-texture.cljs")

(defonce transform (r/atom {:tx -50 :ty 50 :tz -400
                            :rx 0 :ry 45 :rz 0
                            :sx 1 :sy 1 :sz 1}))

(defn slider [param value min max step]
  [:div {:class "slider"}
    [:input {:type "range" :value value :min min :max max :step step
             :on-change (fn [e]
                          (swap! transform assoc param (.-target.value e))
                          (let [{:keys [tx ty tz
                                        sx sy sz
                                        rx ry rz]} @transform]
                             (texture/draw [tx ty tz] [rx ry rz] [sx sy sz])))}]])


(defn scale-panel []
   (let [{:keys [sx sy sz]} @transform]
     [:div {:class "panel"}
       [:h3 "Scaling"]
       [:div {:class "x"}
        "X: " (float sx)
        [slider :sx sx 1 5 0.25]]
       [:div {:class "y"}
        "Y: " (float sy)
        [slider :sy sy 1 5 0.25]]
       [:div {:class "z"}
        "Z: " (float sz)
        [slider :sz sz 1 5 0.25]]]))

(defn translate-panel []
  (let [{:keys [tx ty tz]} @transform]
    [:div {:class "panel"}
      [:h3 "Translation"]
      [:div {:class "x"}
       "X: " (int tx)
       [slider :tx tx -200 200 1]]
      [:div {:class "y"}
       "Y: " (int ty)
       [slider :ty ty -200 200 1]]
      [:div {:class "z"}
       "Z: " (int tz)
       [slider :tz tz -1000 0 1]]]))

(defn rotate-panel []
   (let [{:keys [rx ry rz]} @transform]
     [:div {:class "panel"}
       [:h3 "Rotation"]
       [:div {:class "x"}
        "X: " (int rx)
        [slider :rx rx 0 359 1]]
       [:div {:class "y"}
        "Y: " (int ry)
        [slider :ry ry 0 359 1]]
       [:div {:class "z"}
        "Z: " (int rz)
        [slider :rz rz 0 359 1]]]))

(defn ui-panel []
  [:div {:id "ui-panel"}
    [translate-panel]
    [rotate-panel]
    [scale-panel]])

(defn on-js-reload [])

(let [{:keys [tx ty tz
              rx ry rz
              sx sy sz]} @transform]
  (texture/draw
    [tx ty tz]
    [rx ry rz]
    [sx sy sz])
  (r/render
    [ui-panel]
    (. js/document (getElementById "app"))))
