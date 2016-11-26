(defproject cljs-webgl-examples "0.0.1"
  :description "A sandbox of webgl examples using cljs-wegbl https://github.com/Asakeron/cljs-webgl"
  :url "https://github.com/adkelley/cljs-webgl-examples"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [cljs-webgl "0.1.5-SNAPSHOT"]
                 [reagent "0.6.0"]]
  :source-paths ["src/cljs"]
  :plugins [[lein-figwheel "0.5.8"]
            [lein-cljsbuild "1.1.4" :exclusions [[org.clojure/clojure]]]]


  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :figwheel {:on-jsload "examples.core/on-js-reload"
                           ;; :open-urls will pop open your application
                           ;; in the default browser once Figwheel has
                           ;; started and complied your application.
                           ;; Comment this out once it no longer serves you.
                           :open-urls ["http://localhost:3449/index.html"]}
                :compiler {:main examples.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/examples.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :foreign-libs [{:file "resources/js/gl-matrix-min.js" :provides ["mat4","mat3","vec3"]}
                                          {:file "resources/js/webgl-utils.js" :provides ["WebGLUtils"]}]
                           :pretty-print false}}
               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src"]
                :compiler {:asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/examples.js"
                           :foreign-libs [{:file "resources/js/gl-matrix-min.js" :provides ["mat4","mat3","vec3"]}
                                          {:file "resources/js/webgl-utils.js" :provides ["WebGLUtils"]}]
                           :optimizations :simple ;; don't use :advanced due to foreign-libs!!
                           :pretty-print false}}]}

  :figwheel {
    ;; :http-server-root "public" ;; default and assumes "resources"
    ;; :server-port 3449 ;; default
    ;; :server-ip "127.0.0.1"
    ;; watch and update CSS
                  :css-dirs ["resources/public/css"]}



    ;; Start an nREPL server into the running figwheel process
    ;; :nrepl-port 7888

    ;; Server Ring Handler (optional)
    ;; if you want to embed a ring handler into the figwheel http-kit
    ;; server, this is for simple ring servers, if this

    ;; doesn't work for you just run your own server :) (see lein-ring)

    ;; :ring-handler hello_world.server/handler

    ;; To be able to open files in your editor from the heads up display
    ;; you will need to put a script on your path.
    ;; that script will have to take a file path and a line number
    ;; ie. in  ~/bin/myfile-opener
    ;; #! /bin/sh
    ;; emacsclient -n +$2 $1
    ;;
    ;; :open-file-command "myfile-opener"

    ;; if you are using emacsclient you can just use
    ;; :open-file-command "emacsclient"

    ;; if you want to disable the REPL
    ;; :repl false

    ;; to configure a different figwheel logfile path
    ;; :server-logfile "tmp/logs/figwheel-logfile.log"

  ;; setting up nREPL for Figwheel and ClojureScript dev
  ;; Please see:
  ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl


  :profiles {:dev {:dependencies [[binaryage/devtools "0.8.2"]
                                  [figwheel-sidecar "0.5.8"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {; for nREPL dev you really need to limit output
                                  :init (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
