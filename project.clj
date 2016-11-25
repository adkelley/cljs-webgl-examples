(defproject cljs-webgl "0.1.6-SNAPSHOT"
  :description "WebGL binding to ClojureScript"
  :url "https://github.com/Asakeron/cljs-webgl"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [cljs-webgl "0.1.5-SNAPSHOT"]]
  :source-paths ["src/cljs"]
  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-marginalia "0.8.0"]]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :incremental? true
                :compiler {:output-to "resource/js/compiled/example.js"
                           :source-map-timestamp: true
                           :foreign-libs [{:file "resources/js/gl-matrix-min.js" :provides ["mat4","mat3","vec3"]}
                                          {:file "resources/js/webgl-utils.js" :provides ["WebGLUtils"]}]
                           :static-fns true
                           :closure-warnings {
                                              :externs-validation :off
                                              :non-standard-jsdoc :off}
                           :pretty-print false
                           :optimizations :simple}}]})
