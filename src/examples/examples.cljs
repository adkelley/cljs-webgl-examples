(ns examples.core
  (:require
    ; [projection.core :as projection]
    [map-texture.core :as texture]
    ; [triangle.core :as triangle] ;sliders are off for this example
    [reagent.core :as r]))

(enable-console-print!)

(println "Rendering Example: texture.cljs")

(defonce transform (r/atom {:tx -50 :ty 50 :tz -400
                            :rx 0 :ry 45 :rz 0
                            :sx 1.0 :sy 1.0 :sz 1.0}))

; (defn slider [param value min max step]
;   [:div {:class "slider"}
;     [:input {:type "range" :value value :min min :max max :step step
;              :on-change (fn [e]
;                           (swap! transform assoc param (.-target.value e))
;                           (let [{:keys [tx ty tz
;                                         sx sy sz
;                                         rx ry rz]} @transform]
;                              (texture/draw [tx ty tz] [rx ry rz] [sx sy sz])))}]])

(defn draw-slider
  [{:keys [label param attributes]}]
  [:div
    (str label ": ") (param @transform)
    [:div {:class "slider"}
      [:input (hash-map
                :type "range"
                :value (param @transform) :min (:min attributes)
                :max (:max attributes) :step (:step attributes)
                :on-change (fn [e]
                             (swap! transform assoc param (.-target.value e))
                             (let [{:keys [tx ty tz
                                           sx sy sz
                                           rx ry rz]} @transform]
                               (texture/draw [tx ty tz] [rx ry rz] [sx sy sz]))))]]])

(defn draw-panel
  [{:keys [label sliders]}]
  [:div {:class "panel"}
    [:h3 label]
    (map draw-slider sliders)])
;

(defonce translate-sliders
  (let [attributes {:min -200 :max 200 :step 1}]
    [{:label "X" :param :tx :attributes attributes}
     {:label "Y" :param :ty :attributes attributes}
     {:label "Z" :param :tz :attributes attributes}]))

(defonce scale-sliders
  (let [attributes {:min 1.0 :max 5.0 :step 0.25}]
    [{:label "X" :param :sx :attributes attributes}
     {:label "Y" :param :sy :attributes attributes}
     {:label "Z" :param :sz :attributes attributes}]))

(defonce rotate-sliders
  (let [attributes {:min 0 :max 359 :step 1}]
    [{:label "X" :param :rx :attributes attributes}
     {:label "Y" :param :ry :attributes attributes}
     {:label "Z" :param :rz :attributes attributes}]))

(defn ui-panel []
  [:div {:id "ui-panel"}
    [draw-panel :key 1
      {:label "Translation"
       :sliders translate-sliders}]
    [draw-panel :key 2
      {:label "Rotation"
       :sliders rotate-sliders}]
    [draw-panel :key 3
      {:label "Scaling"
       :sliders scale-sliders}]])

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
