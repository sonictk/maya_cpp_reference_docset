var Resources = function (e) {

    var t = {},
        n = {},
        r = {},
        i = {
            getLocalTemplate: function (t) {
                var n = e('script[type="text/x-handlebars"][data-template-name="' + t + '"]');

                if (n.length) return e.trim(n.html())
            },

            getResourceName: function (e) {
                return e.replace(/^(.*\/)/, "")
            }
        };

    return {
        getAllCSS: function (t) {
            return e.each(t || [], function (e, t) {
                Resources.getCSS(t)
            }), e.Deferred().resolve().promise()
        },

        getCSS: function (e) {
            if (n[e]) return;
            var t = document.getElementsByTagName("head")[0],
                r = document.createElement("link");
            r.rel = "stylesheet",
            r.type = "text/css",
            r.href = Boot.Config.resources.styles + e + ".css",
            t.appendChild(r), n[e] = !0;
            return
        },

        getScript: function (n) {
            if (t[n]) return t[n].promise();
            var r = e.Deferred(),
                i = document.getElementsByTagName("head")[0],
                s = document.createElement("script");
            return s.onload = function () {
                s.onreadystatechange = null,
                r.resolve()
            },
            s.onreadystatechange = function () {
                if (this.readyState === "loaded" || this.readyState === "complete")
                    s.onload = null, r.resolve()
                },
                s.onerror = r.reject,
                s.src = n,
                t[n] = r,
                i.appendChild(s),
                r.promise()
        },

        getAllScripts:function (t) {
            var n = [];
            return e.each(t || [], function (e, t) {
                window[i.getResourceName(t)] || n.push(Resources.getScript(Boot.Config.resources.modules + t + ".js"))
            }),
            e.when.apply(null, n).promise()
        },

        getTemplate: function (t) {
            var n = t && r[t] || e.Deferred();
            if (!t) {
                n.resolve(Handlebars.compile(""))
            } else if (!r[t]) {
                var s = i.getLocalTemplate(t);
                console.log(t);
                r[t] = n.promise(),
                s ? n.resolve(Handlebars.compile(s)) : e.ajax({
                    url:        Boot.Config.resources.templates + t + ".handlebars",
                    success:    function (e) {
                        n.resolve(Handlebars.compile(e))
                    },
                    error:      n.reject
                })
            }
            return n.promise()
        }
    }

}.call(this, jQuery),

Boot = function (e) {
    var t, n = {
        loadFramework: function () {
            return window.UIComponent ? e.Deferred().resolve().promise() : Resources.getScript(Boot.Config.resources.modules + "framework.js")
        },

        loadConfig: function () {
            return Boot.Config = {
                resources: {
                    modules: "modules/"
                }
            }, e.ajax({
                url: "config/config.json",
                dataType: "json",
                success: function (t) {
                    e.extend(!0, Boot.Config, t)
                }
            })
        },

        loadLocalization: function () {
            var t = e.Deferred();
            return Boot.Config.sourceLanguage === Boot.Config.meta.language && !Boot.Config.forceLocaleLoad ? (Boot.Lang = {}, t.resolve()) : e.ajax({
                url: Boot.Config.resources.i18n + Boot.Config.meta.language + ".json",
                dataType: "json",
                success: function (e) {
                    Boot.Lang = e.i18n, t.resolve()
                },
                error: function () {
                    Boot.Lang = {}, t.resolve()
                }
            }), t.promise()
        }
    };

    return {
        init: function (r) {
            return r = r || [], t ? e.when(Resources.getAllScripts(r), t.promise()) : (t = e.Deferred(), n.loadConfig().done(function () {
                n.loadFramework().done(function () {
                    var i = {};
                    Boot.Config = e.extend(!0, StaticConfig, Boot.Config),
                    Boot.CurrentProduct = Boot.Config.productCodeFeatures[Boot.Config.meta.product] || {},
                    e.each(Boot.CurrentProduct.features || [], function (e, t) {
                        i[t] = !0
                    }),
                    Boot.CurrentProduct.features = i,
                    e.when(Resources.getAllScripts(r),
                    n.loadLocalization()).done(t.resolve)
                }).fail(t.reject)
            }).fail(t.reject), t.promise())
        }
    }
}.call(this, jQuery);