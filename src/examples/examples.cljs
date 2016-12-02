(ns examples.core
  (:require [projection.core :as projection]
            [texture-map.core :as texture-map]
            [triangle.core :as triangle]
            [reagent.core :as r]))

(enable-console-print!)

(println "Rendering Example: texture-map.cljs")

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
                             (texture-map/draw [tx ty tz] [rx ry rz] [sx sy sz])))}]])


(defn scale-panel []
   (let [{:keys [sx sy sz]} @transform]
     [:div {:class "panel"}
       [:h3 "Scaling"]
       [:div {:class "x"}
        "X: " (int sx)
        [slider :sx sx 1 5]]
       [:div {:class "y"}
        "Y: " (int sy)
        [slider :sy sy 1 5]]
       [:div {:class "z"}
        "Z: " (int sz)
        [slider :sz sz 1 5]]]))

(defn translate-panel []
  (let [{:keys [tx ty tz]} @transform]
    [:div {:class "panel"}
      [:h3 "Translation"]
      [:div {:class "x"}
       "X: " (int tx)
       [slider :tx tx -50 50]]
      [:div {:class "y"}
       "Y: " (int ty)
       [slider :ty ty -50 50]]
      [:div {:class "z"}
       "Z: " (int tz)
       [slider :tz tz -100 -0.1]]]))

(defn rotate-panel []
   (let [{:keys [rx ry rz]} @transform]
     [:div {:class "panel"}
       [:h3 "Rotation"]
       [:div {:class "x"}
        "X: " (int rx)
        [slider :rx rx 0 359]]
       [:div {:class "y"}
        "Y: " (int ry)
        [slider :ry ry 0 359]]
       [:div {:class "z"}
        "Z: " (int rz)
        [slider :rz rz 0 359]]]))

(defn ui-panel []
  [:div {:id "ui-panel"}
    [translate-panel]
    [rotate-panel]
    [scale-panel]])

(defn on-js-reload [])

(let [{:keys [tx ty tz
              rx ry rz
              sx sy sz]} @transform]
  (texture-map/draw [tx ty tz]
                [rx ry rz]
                [sx sy sz])
  (r/render
    [ui-panel]
    (. js/document (getElementById "app"))))
