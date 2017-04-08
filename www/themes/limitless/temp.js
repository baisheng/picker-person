window.Modernizr = function (a, d, f) {
    var g = {}, c = d.documentElement;
    a = d.createElement("modernizr");
    a = a.style;
    var h = {}.toString, k = {}, l = [], n = l.slice, p, r = {}.hasOwnProperty, q;
    "undefined" !== typeof r && "undefined" !== typeof r.call ? q = function (a, c) {
            return r.call(a, c)
        } : q = function (a, c) {
            return c in a && "undefined" === typeof a.constructor.prototype[c]
        };
    Function.prototype.bind || (Function.prototype.bind = function (a) {
        var c = this;
        if ("function" != typeof c)throw new TypeError;
        var g = n.call(arguments, 1), f = function () {
            if (this instanceof f) {
                var d = function () {
                };
                d.prototype = c.prototype;
                var d = new d, h = c.apply(d, g.concat(n.call(arguments)));
                return Object(h) === h ? h : d
            }
            return c.apply(a, g.concat(n.call(arguments)))
        };
        return f
    });
    k.smil = function () {
        return !!d.createElementNS && /SVGAnimate/.test(h.call(d.createElementNS("http://www.w3.org/2000/svg", "animate")))
    };
    for (var s in k)q(k, s) && (p = s.toLowerCase(), g[p] = k[s](), l.push((g[p] ? "" : "no-") + p));
    g.addTest = function (a, d) {
        if ("object" == typeof a)for (var h in a)q(a, h) && g.addTest(h, a[h]); else {
            a = a.toLowerCase();
            if (g[a] !== f)return g;
            d = "function" == typeof d ? d() : d;
            "undefined" != typeof enableClasses && enableClasses && (c.className += " " + (d ? "" : "no-") + a);
            g[a] = d
        }
        return g
    };
    a.cssText = "";
    return a = null, g._version = "2.8.3", g
}(this, this.document);
(function (a, d, f) {
    function g(a) {
        return "[object Function]" == t.call(a)
    }

    function c(a) {
        return "string" == typeof a
    }

    function h() {
    }

    function k(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function l() {
        var a = u.shift();
        v = 1;
        a ? a.t ? s(function () {
                    ("c" == a.t ? H.injectCss : H.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
                }, 0) : (a(), l()) : v = 0
    }

    function n(a, c, g, f, h, p, n) {
        function r(g) {
            if (!t && k(q.readyState) && (G.r = t = 1, !v && l(), q.onload = q.onreadystatechange = null, g)) {
                "img" != a && s(function () {
                    D.removeChild(q)
                }, 50);
                for (var d in E[c])E[c].hasOwnProperty(d) &&
                E[c][d].onload()
            }
        }

        n = n || H.errorTimeout;
        var q = d.createElement(a), t = 0, z = 0, G = {t: g, s: c, e: h, a: p, x: n};
        1 === E[c] && (z = 1, E[c] = []);
        "object" == a ? q.data = c : (q.src = c, q.type = a);
        q.width = q.height = "0";
        q.onerror = q.onload = q.onreadystatechange = function () {
            r.call(this, z)
        };
        u.splice(f, 0, G);
        "img" != a && (z || 2 === E[c] ? (D.insertBefore(q, C ? null : w), s(r, n)) : E[c].push(q))
    }

    function p(a, g, d, f, h) {
        return v = 0, g = g || "j", c(a) ? n("c" == g ? B : F, a, g, this.i++, d, f, h) : (u.splice(this.i++, 0, a), 1 == u.length && l()), this
    }

    function r() {
        var a = H;
        return a.loader = {
            load: p,
            i: 0
        }, a
    }

    var q = d.documentElement, s = a.setTimeout, w = d.getElementsByTagName("script")[0], t = {}.toString, u = [], v = 0, z = "MozAppearance" in q.style, C = z && !!d.createRange().compareNode, D = C ? q : w.parentNode, q = a.opera && "[object Opera]" == t.call(a.opera), q = !!d.attachEvent && !q, F = z ? "object" : q ? "script" : "img", B = q ? "script" : F, G = Array.isArray || function (a) {
            return "[object Array]" == t.call(a)
        }, J = [], E = {}, M = {
        timeout: function (a, c) {
            return c.length && (a.timeout = c[0]), a
        }
    }, N, H;
    H = function (a) {
        function d(a) {
            a = a.split("!");
            var c = J.length, g =
                a.pop(), f = a.length, g = {url: g, origUrl: g, prefixes: a}, h, k, n;
            for (k = 0; k < f; k++)n = a[k].split("="), (h = M[n.shift()]) && (g = h(g, n));
            for (k = 0; k < c; k++)g = J[k](g);
            return g
        }

        function k(a, c, h, n, p) {
            var l = d(a), q = l.autoCallback;
            l.url.split(".").pop().split("?").shift();
            l.bypass || (c && (c = g(c) ? c : c[a] || c[n] || c[a.split("/").pop().split("?")[0]]), l.instead ? l.instead(a, c, h, n, p) : (E[l.url] ? l.noexec = !0 : E[l.url] = 1, h.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : f, l.noexec, l.attrs, l.timeout),
                (g(c) || g(q)) && h.load(function () {
                    r();
                    c && c(l.origUrl, p, n);
                    q && q(l.origUrl, p, n);
                    E[l.url] = 2
                })))
        }

        function n(a, d) {
            function f(a, h) {
                if (a)if (c(a)) h || (r = function () {
                    var a = [].slice.call(arguments);
                    q.apply(this, a);
                    s()
                }), k(a, r, d, 0, p); else {
                    if (Object(a) === a)for (z in t = function () {
                        var c = 0, g;
                        for (g in a)a.hasOwnProperty(g) && c++;
                        return c
                    }(), a)a.hasOwnProperty(z) && (!h && !--t && (g(r) ? r = function () {
                            var a = [].slice.call(arguments);
                            q.apply(this, a);
                            s()
                        } : r[z] = function (a) {
                            return function () {
                                var c = [].slice.call(arguments);
                                a && a.apply(this,
                                    c);
                                s()
                            }
                        }(q[z])), k(a[z], r, d, z, p))
                } else!h && s()
            }

            var p = !!a.test, l = a.load || a.both, r = a.callback || h, q = r, s = a.complete || h, t, z;
            f(p ? a.yep : a.nope, !!l);
            l && f(l)
        }

        var p, l, q = this.yepnope.loader;
        if (c(a)) k(a, 0, q, 0); else if (G(a))for (p = 0; p < a.length; p++)l = a[p], c(l) ? k(l, 0, q, 0) : G(l) ? H(l) : Object(l) === l && n(l, q); else Object(a) === a && n(a, q)
    };
    H.addPrefix = function (a, c) {
        M[a] = c
    };
    H.addFilter = function (a) {
        J.push(a)
    };
    H.errorTimeout = 1E4;
    null == d.readyState && d.addEventListener && (d.readyState = "loading", d.addEventListener("DOMContentLoaded",
        N = function () {
            d.removeEventListener("DOMContentLoaded", N, 0);
            d.readyState = "complete"
        }, 0));
    a.yepnope = r();
    a.yepnope.executeStack = l;
    a.yepnope.injectJs = function (a, c, g, f, n, p) {
        var r = d.createElement("script"), q, t;
        f = f || H.errorTimeout;
        r.src = a;
        for (t in g)r.setAttribute(t, g[t]);
        c = p ? l : c || h;
        r.onreadystatechange = r.onload = function () {
            !q && k(r.readyState) && (q = 1, c(), r.onload = r.onreadystatechange = null)
        };
        s(function () {
            q || (q = 1, c(1))
        }, f);
        n ? r.onload() : w.parentNode.insertBefore(r, w)
    };
    a.yepnope.injectCss = function (a, c, g, f, k, n) {
        f =
            d.createElement("link");
        var p;
        c = n ? l : c || h;
        f.href = a;
        f.rel = "stylesheet";
        f.type = "text/css";
        for (p in g)f.setAttribute(p, g[p]);
        k || (w.parentNode.insertBefore(f, w), s(c, 0))
    }
})(this, document);
Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
Modernizr.load([{test: Modernizr.smil, nope: [STATIC_URL + "css/pages/fallback.css"]}]);
function Ajax(a) {
    var d = this;
    d.request = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    d.convertHeadersToObject = function (a) {
        a = a.split("\n");
        for (var c = {}, f = 0; f < a.length; f++) {
            var d = a[f].split(": ", 2);
            1 < d.length && (c[d[0]] = d[1])
        }
        return c
    };
    d.request.onreadystatechange = function () {
        if (4 == d.request.readyState && 200 == d.request.status) {
            var g = d.request.getResponseHeader("Content-Type");
            g.match(/xml/gi) ? g = d.request.responseXML : g.match(/json/gi) ? (eval("var qqq=" + d.request.responseText),
                        g = qqq) : g = d.request.responseText;
            if (a.onComplete)if (d.includeHeaders) {
                var c = d.convertHeadersToObject(d.request.getAllResponseHeaders());
                a.onComplete(g, c)
            } else a.onComplete(g)
        } else if (4 == d.request.readyState && 200 != d.request.status && a.onFailure) a.onFailure({
            text: d.request.responseText,
            code: d.request.status
        })
    };
    var f = "";
    if (a.params)if (a.params.substr) f = a.params; else {
        for (param in a.params)f += "&" + encodeURIComponent(param) + "=" + encodeURIComponent(a.params[param]);
        f = f.substr(1)
    }
    d.includeHeaders = a.includeHeaders;
    if ("GET" == a.method) {
        f && (f = "?" + f);
        d.request.open("GET", a.path + f, !0);
        for (header in a.headers)d.request.setRequestHeader(header, a.headers[header]);
        d.request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        d.request.send(null)
    } else {
        d.request.open("POST", a.path, !0);
        for (header in a.headers)d.request.setRequestHeader(header, a.headers[header]);
        d.request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        d.request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        d.request.send(f)
    }
    d.abort =
        function () {
            d.request.onreadystatechange = null;
            d.request.abort();
            if (a.onFailure) a.onFailure({text: d.request.responseText, code: d.request.status})
        }
};var Tween = function (a, d, f) {
    this.ease = function (a, g, f, d) {
        return f * a / d + g
    };
    this.onComplete = function () {
    };
    this.onUpdate = function () {
    };
    this.running = null;
    this.prefix = this.units = "";
    this.delay = 0;
    this.begin = {};
    var g = this;
    this.__construct__ = function () {
        this.time = d;
        this.obj = a;
        this.id = Tween.getId();
        Tween.tweens[this.id] = this;
        f.onComplete && (this.onComplete = f.onComplete, delete f.onComplete);
        f.onUpdate && (this.onUpdate = f.onUpdate, delete f.onUpdate);
        f.ease && (this.ease = f.ease, delete f.ease);
        f.delay && (this.delay = f.delay,
            delete f.delay);
        for (prop in f)this.begin[prop] = a[prop];
        this.playTimeout = setTimeout(function () {
            g.play()
        }, this.delay)
    };
    this.play = function () {
        Tween.tweens[a] || (Tween.tweens[a] = []);
        Tween.tweens[a].push(this);
        this.endAt = (new Date).getTime() + this.time;
        GlobalEvents.addListener(GlobalEvent.RENDER_FRAME, this.mechanism)
    };
    this.stop = function () {
        clearTimeout(g.playTimeout);
        GlobalEvents.removeListener(GlobalEvent.RENDER_FRAME, g.mechanism);
        g.stopped = !0
    };
    this.mechanism = function () {
        if (g.stopped)return !1;
        var a = g.endAt -
            (new Date).getTime();
        0 >= a ? (g.stop(), g.advanceFrame(1, 1), g.onUpdate(), g.onComplete()) : (g.advanceFrame(g.time - a, g.time), g.onUpdate())
    };
    this.advanceFrame = function (c, g) {
        for (prop in f)b = this.begin[prop], e = f[prop], m = e - b, a[prop] = this.ease(c, b, m, g)
    };
    this.__construct__()
};
Tween.id = 0;
Tween.tweens = {};
Tween.killTweensOf = function (a) {
    for (var d in Tween.tweens) {
        var f = Tween.tweens[d];
        f.obj == a && f.stop()
    }
};
Tween.getId = function () {
    return ++Tween.id
};
Ease = {
    linear: function (a, d, f, g) {
        return f * a / g + d
    }, easeOut: {
        quad: function (a, d, f, g) {
            return -f * (a /= g) * (a - 2) + d
        }, cubic: function (a, d, f, g) {
            return f * (Math.pow(a / g - 1, 3) + 1) + d
        }, quart: function (a, d, f, g) {
            return -f * (Math.pow(a / g - 1, 4) - 1) + d
        }, quint: function (a, d, f, g) {
            return f * (Math.pow(a / g - 1, 5) + 1) + d
        }, sine: function (a, d, f, g) {
            return f * Math.sin(a / g * (Math.PI / 2)) + d
        }, expo: function (a, d, f, g) {
            return f * (-Math.pow(2, -10 * a / g) + 1) + d
        }, circ: function (a, d, f, g) {
            return f * Math.sqrt(1 - (a = a / g - 1) * a) + d
        }, bounce: function (a, d, f, g) {
            return (a /= g) < 1 / 2.75 ?
                7.5625 * f * a * a + d : a < 2 / 2.75 ? f * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + d : a < 2.5 / 2.75 ? f * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + d : f * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + d
        }, back: function (a, d, f, g, c) {
            void 0 == c && (c = 1.70158);
            return f * ((a = a / g - 1) * a * ((c + 1) * a + c) + 1) + d
        }
    }, easeIn: {
        quad: function (a, d, f, g) {
            return f * (a /= g) * a + d
        }, cubic: function (a, d, f, g) {
            return f * Math.pow(a / g, 3) + d
        }, quart: function (a, d, f, g) {
            return f * Math.pow(a / g, 4) + d
        }, quint: function (a, d, f, g) {
            return f * Math.pow(a / g, 5) + d
        }, sine: function (a, d, f, g) {
            return f * (1 - Math.cos(a / g * (Math.PI /
                    2))) + d
        }, expo: function (a, d, f, g) {
            return f * Math.pow(2, 10 * (a / g - 1)) + d
        }, circ: function (a, d, f, g) {
            return f * (1 - Math.sqrt(1 - (a /= g) * a)) + d
        }, bounce: function (a, d, f, g) {
            return f - Ease._out.bounce(g - a, 0, f, g) + d
        }, back: function (a, d, f, g, c) {
            void 0 == c && (c = 1.70158);
            return f * (a /= g) * a * ((c + 1) * a - c) + d
        }
    }, easeInOut: {
        quad: function (a, d, f, g) {
            return 1 > (a /= g / 2) ? f / 2 * a * a + d : -f / 2 * (--a * (a - 2) - 1) + d
        }, cubic: function (a, d, f, g) {
            return 1 > (a /= g / 2) ? f / 2 * Math.pow(a, 3) + d : f / 2 * (Math.pow(a - 2, 3) + 2) + d
        }, quart: function (a, d, f, g) {
            return 1 > (a /= g / 2) ? f / 2 * Math.pow(a,
                    4) + d : -f / 2 * (Math.pow(a - 2, 4) - 2) + d
        }, quint: function (a, d, f, g) {
            return 1 > (a /= g / 2) ? f / 2 * Math.pow(a, 5) + d : f / 2 * (Math.pow(a - 2, 5) + 2) + d
        }, sine: function (a, d, f, g) {
            return f / 2 * (1 - Math.cos(Math.PI * a / g)) + d
        }, expo: function (a, d, f, g) {
            return 1 > (a /= g / 2) ? f / 2 * Math.pow(2, 10 * (a - 1)) + d : f / 2 * (-Math.pow(2, -10 * --a) + 2) + d
        }, circ: function (a, d, f, g) {
            return 1 > (a /= g / 2) ? f / 2 * (1 - Math.sqrt(1 - a * a)) + d : f / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + d
        }, bounce: function (a, d, f, g) {
            return a < g / 2 ? 0.5 * Ease._in.bounce(2 * a, 0, f, g) + d : 0.5 * Ease._out.bounce(2 * a - g, 0, f, g) + 0.5 * f + d
        }, back: function (a,
                           d, f, g, c) {
            void 0 == c && (c = 1.70158);
            return 1 > (a /= g / 2) ? f / 2 * a * a * (((c *= 1.525) + 1) * a - c) + d : f / 2 * ((a -= 2) * a * (((c *= 1.525) + 1) * a + c) + 2) + d
        }
    }
};
GlobalEvent = function (a, d) {
    this.name = a;
    this.data = d
};
GlobalEvent.RENDER_FRAME = "global_event_render_frame";
GlobalEvent.WINDOW_RESIZE = "global_event_window_resize";
GlobalEvent.WINDOW_SCROLL = "global_event_window_scroll";
GlobalEvent.WINDOW_LOAD = "global_event_window_load";
GlobalEvents = {
    registry: {}, dispatch: function (a) {
        this.register(a.name);
        for (var d = this.registry[a.name], f = 0; f < d.length; f++)d[f](a)
    }, addListener: function (a, d) {
        this.register(a);
        this.registry[a].push(d)
    }, removeListener: function (a, d) {
        var f = this.registry[a];
        if (!f)return !1;
        for (var g = 0; g < f.length; g++)d == f[g] && f.splice(g, 1)
    }, register: function (a) {
        this.registry[a] || (this.registry[a] = [])
    }, destroy: function (a) {
        this.registry[a] = !1
    }
};
KeyboardEvent = function (a, d) {
    this.name = a;
    this.keyCode = d.keyCode
};
KeyboardEvent.KEY_DOWN = "keyboard_event_key_down";
KeyboardEvent.KEY_UP = "keyboard_event_key_up";
KeyCode = {UP: 38, LEFT: 37, RIGHT: 39, DOWN: 40};
KeyboardEvents = {
    pressed: [], preventDefault: function (a) {
        KeyboardEvents.preventedKeys || (KeyboardEvents.preventedKeys = []);
        KeyboardEvents.preventedKeys.push(a)
    }
};
document.onkeydown = function (a) {
    -1 == KeyboardEvents.pressed.indexOf(a.keyCode) && (KeyboardEvents.pressed.push(a.keyCode), GlobalEvents.dispatch(new KeyboardEvent(KeyboardEvent.KEY_DOWN, a)))
};
document.onkeyup = function (a) {
    var d = KeyboardEvents.pressed.indexOf(a.keyCode);
    -1 != d && (KeyboardEvents.pressed.splice(d, 1), GlobalEvents.dispatch(new KeyboardEvent(KeyboardEvent.KEY_UP, a)))
};
MouseEvent = function (a, d) {
    this.name = a;
    this.data = d
};
MouseEvent.ROLL_OVER = "mouse_event_roll_over";
MouseEvent.ROLL_OUT = "mouse_event_roll_out";
MouseEvent.MOUSE_UP = "mouse_event_mouse_up";
MouseEvent.MOUSE_DOWN = "mouse_event_mouse_down";
MouseEvent.CLICK = "mouse_event_click";
var R = {
    scrollbarWidth: 0,
    iOS: !1,
    iOSVersion: 0,
    mobile: !1,
    phone: !1,
    tablet: !1,
    renderEvent: new GlobalEvent(GlobalEvent.RENDER_FRAME),
    resizeEvent: new GlobalEvent(GlobalEvent.WINDOW_RESIZE),
    scrollEvent: new GlobalEvent(GlobalEvent.WINDOW_SCROLL),
    loadEvent: new GlobalEvent(GlobalEvent.WINDOW_LOAD),
    touch: "ontouchstart" in document.documentElement,
    init: function () {
        R.iOS = /iP(hone|od|ad)/.test(navigator.platform);
        if (R.iOS) {
            var a = navigator.appVersion.match(/OS (\d+)/);
            a && (R.iOSVersion = a[1])
        }
        R.phone = -1 != document.body.className.indexOf("phone");
        R.tablet = -1 != document.body.className.indexOf("tablet");
        R.mobile = R.phone || R.tablet;
        R.scale = R.getPixelRatio();
        R.mobile && GestureEvent.setup();
        R.prefixData = R.getPrefixData();
        window.onload = R.windowLoad;
        window.onresize = R.windowResize;
        window.onscroll = R.windowScroll
    },
    domReady: function () {
        R.scrollbarWidth = R.getScrollBarWidth();
        R.startRendering()
    },
    windowLoad: function () {
        GlobalEvents.dispatch(R.loadEvent)
    },
    windowResize: function () {
        clearTimeout(R.resizeTimeout);
        R.resizeTimeout = setTimeout(R.fireWindowResize, 120)
    },
    fireWindowResize: function () {
        GlobalEvents.dispatch(R.resizeEvent)
    },
    windowScroll: function () {
        clearTimeout(R.scrollTimeout);
        R.scrollTimeout = setTimeout(R.fireWindowScroll, 120)
    },
    fireWindowScroll: function () {
        GlobalEvents.dispatch(R.scrollEvent)
    },
    windowRender: function () {
        R.rendering && (R.prefixed.requestAnimationFrame(R.windowRender), GlobalEvents.dispatch(R.renderEvent))
    },
    startRendering: function (a) {
        R.rendering || (R.prefixed.requestAnimationFrame(R.windowRender), R.rendering = !0)
    },
    stopRendering: function () {
        R.rendering = !1
    },
    onNextFrame: function (a) {
        setTimeout(function () {
            a()
        }, 32)
    },
    getScrollBarWidth: function () {
        var a = document.createElement("p");
        a.style.width = "100%";
        a.style.height = "200px";
        var d = document.createElement("div");
        d.style.position = "absolute";
        d.style.top = "0px";
        d.style.left = "0px";
        d.style.visibility = "hidden";
        d.style.width = "200px";
        d.style.height = "150px";
        d.style.overflow = "hidden";
        d.appendChild(a);
        document.body.appendChild(d);
        var f = a.offsetWidth;
        d.style.overflow = "scroll";
        a = a.offsetWidth;
        f == a && (a = d.clientWidth);
        document.body.removeChild(d);
        return f - a
    },
    getPrefixData: function () {
        var a, d = document.createElement("fake-element"), f = {
            transition: {},
            transform: {}
        }, g = {
            transform: "transform",
            MozTransform: "-moz-transform",
            WebkitTransform: "-webkit-transform"
        }, c = {
            transition: "transition",
            MozTransition: "-moz-transition",
            WebkitTransition: "-webkit-transition"
        }, h = {transition: "transitionend", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd"};
        for (a in c)if (void 0 !== d.style[a]) {
            f.transition.jsProp = a;
            f.transition.cssProp = c[a];
            break
        }
        for (a in g)if (void 0 !==
            d.style[a]) {
            f.transform.jsProp = a;
            f.transform.cssProp = g[a];
            break
        }
        for (a in h)if (void 0 !== d.style[a]) {
            f.transition.endEvent = h[a];
            break
        }
        return f
    },
    onTransitionEnd: function (a, d, f, g) {
        f || (f = a);
        a.onTransitionEnd && (a.removeEventListener(R.prefixData.transition.endEvent, a.onTransitionEnd), delete a.onTransitionEnd);
        a.onTransitionEnd = function (c) {
            var h = c.srcElement || c.originalTarget;
            f && h != f || g && c.propertyName != g || (a.removeEventListener(R.prefixData.transition.endEvent, a.onTransitionEnd), delete a.onTransitionEnd,
                d())
        };
        a.addEventListener(R.prefixData.transition.endEvent, a.onTransitionEnd)
    },
    setTransform: function (a, d) {
        a.style[R.prefixData.transform.jsProp] = d
    },
    setTransition: function (a, d) {
        d = d.replace(/transform/g, R.prefixData.transform.cssProp);
        a.style[R.prefixData.transition.jsProp] = d;
        a.clientHeight
    },
    id: function (a) {
        return document.getElementById(a)
    },
    qs: function (a) {
        return document.querySelector(a)
    },
    qsa: function (a) {
        return document.querySelectorAll(a)
    },
    hasClass: function (a, d) {
        var f = !1, g = a.getAttribute("class"), c =
            " " + d + " ";
        -1 < (" " + g + " ").replace(/[\n\t]/g, " ").indexOf(c) && (f = !0);
        return f
    },
    addClass: function (a, d) {
        if (!R.hasClass(a, d)) {
            var f = a.getAttribute("class") + " " + d;
            a.setAttribute("class", f)
        }
    },
    removeClass: function (a, d) {
        if (R.hasClass(a, d)) {
            var f = a.getAttribute("class").replace(RegExp("(?:^|\\s)" + d + "(?!\\S)"), "");
            a.setAttribute("class", f)
        }
    },
    toggleClass: function (a, d) {
        R.hasClass(a, d) ? R.removeClass(a, d) : R.addClass(a, d)
    },
    isEmpty: function (a) {
        return null != a && void 0 !== typeof a ? !1 : !0
    },
    visible: function (a, d) {
        var f = document.body.getBoundingClientRect(),
            g = a.getBoundingClientRect().top - f.top, c = g + a.offsetHeight, h = window, f = h.scrollY, h = f + h.innerHeight, k;
        !0 === d ? k = c : (k = g, g = c);
        return g <= h && k >= f
    },
    visiblePlus: function (a, d) {
        var f = document.body.getBoundingClientRect(), g = a.getBoundingClientRect().top - f.top, c = g + a.offsetHeight, h = window, f = h.scrollY - h.innerHeight, h = h.scrollY + h.innerHeight + h.innerHeight, k;
        !0 === d ? k = c : (k = g, g = c);
        return g <= h && k >= f
    },
    getTransformY: function (a) {
        return parseFloat((a.transform || a.WebkitTransform).substr(22))
    },
    getTransformX: function (a) {
        return parseFloat((a.transform ||
        a.WebkitTransform).split(",")[4])
    },
    getPixelRatio: function () {
        if (window.devicePixelRatio)return window.devicePixelRatio;
        if (window.matchMedia && window.matchMedia("(-moz-device-pixel-ratio: 2.0)").matches)return 2
    },
    redrawElement: function (a) {
        var d = a.style.display;
        a.style.display = "none";
        a.style.display = d
    },
    normalize: function (a, d, f, g, c) {
        return g + (a - d) / (f - d) * (c - g)
    }
};
var DragHelper = function () {
    var a = this, d, f, g, c, h, k, l, n, p, r, q, s = !1;
    this.dragComplete = this.drag = void 0;
    this.init = function (a, c) {
        return this
    };
    this.getDimensionX = function () {
        return window.innerWidth
    };
    this.getDimensionY = function () {
        return window.innerHeight
    };
    this.start = function (a) {
        a.touches && (a.clientX = a.touches[0].clientX, a.clientY = a.touches[0].clientY);
        l = a.clientX;
        k = a.clientY;
        g = new Date;
        p = a;
        q = r = h = c = 0;
        s = !1;
        R.touch ? (window.addEventListener("touchmove", this.inputMove), window.addEventListener("touchend", this.inputEnd)) :
            (window.addEventListener("mousemove", this.inputMove), window.addEventListener("mouseup", this.inputEnd));
        return !0
    };
    this.stop = function () {
        R.touch ? (window.removeEventListener("touchmove", this.inputMove), window.removeEventListener("touchend", this.inputEnd)) : (window.removeEventListener("mousemove", this.inputMove), window.removeEventListener("mouseup", this.inputEnd))
    };
    this.getOutcome = function (a, c) {
        var g = DragHelper.OUTCOME_NONE;
        90 <= a && 0 >= c || -90 >= a && 0 <= c ? g = DragHelper.OUTCOME_NONE : 0.15 <= c ? g = DragHelper.OUTCOME_BACK :
                -0.15 >= c && (g = DragHelper.OUTCOME_NEXT);
        return g
    };
    this.inputEnd = function (f) {
        f = a.getOutcome(r, c / a.getDimensionX());
        var d = a.getOutcome(q, h / a.getDimensionY());
        500 > new Date - g && 9 > Math.abs(c) && 9 > Math.abs(h) && (f = d = DragHelper.OUTCOME_CLICK);
        a.dragComplete(f, d);
        a.stop()
    };
    this.inputMove = function (g) {
        g.touches && (g.clientX = g.touches[0].clientX, g.clientY = g.touches[0].clientY);
        var t = g.clientX - p.clientX, u = g.clientY - p.clientY;
        p.clientX > g.clientX && -1 != d ? (r = t, d = -1) : p.clientX < g.clientX && 1 != d && (r = t, d = 1);
        p.clientY > g.clientY &&
        -1 != f ? (q = u, f = -1) : p.clientY < g.clientX && 1 != f && (q = u, f = 1);
        r += t / 2;
        q += u / 2;
        c = g.clientX - l;
        h = g.clientY - k;
        p = g;
        if (!s && a.onIntentClear) {
            var v = !1;
            8 < Math.abs(h) ? (a.onIntentClear(DragHelper.DRAG_DIRECTION_Y, c, h, g.clientX, g.clientY, t, u), v = !0) : 8 < Math.abs(c) && (a.onIntentClear(DragHelper.DRAG_DIRECTION_X, c, h, g.clientX, g.clientY, t, u), v = !0);
            v && (l = g.clientX, k = g.clientY, c = g.clientX - l, h = g.clientY - k, s = !0)
        }
        clearTimeout(n);
        n = setTimeout(function () {
            _dragSpeed = 0
        }, 120);
        if (a.onDrag && !a.onDrag(c, h, g.clientX, g.clientY, t, u))return g.preventDefault(),
            !1
    };
    this.dragComplete = function (a, c) {
        if (this.onComplete) this.onComplete(a, c)
    };
    this.enableTextSelection = function (a) {
        a.style.WebkitUserSelect = "";
        a.style.cursor = "";
        a.onselectstart = null;
        a.onmousedown = null
    };
    this.disableTextSelection = function (a) {
        a.style.WebkitUserSelect = "none";
        a.style.cursor = "-webkit-grabbing";
        a.style.cursor = "-moz-grabbing";
        a.style.cursor = "grabbing";
        a.onselectstart = function () {
            return !1
        };
        a.onmousedown = function () {
            return !1
        }
    }
};
DragHelper.DRAG_DIRECTION_X = "DRAG_HELPER_DIRECTION_X";
DragHelper.DRAG_DIRECTION_Y = "DRAG_HELPER_DIRECTION_Y";
DragHelper.OUTCOME_CLICK = "DRAG_HELPER_OUTCOME_CLICK";
DragHelper.OUTCOME_NEXT = "DRAG_HELPER_OUTCOME_NEXT";
DragHelper.OUTCOME_BACK = "DRAG_HELPER_OUTCOME_BACK";
DragHelper.OUTCOME_NONE = "DRAG_HELPER_OUTCOME_NONE";
R = R || {};
R.Prefixed = function () {
    var a = null, d = "", f = {
        cursor: [{value: "grab", pattern: /grab/}],
        transition: [{value: "transform 1s ease 0s", pattern: /transform/}]
    }, g = "";
    this.init = function () {
        a = document.createElement("div");
        a:{
            for (var n in a.style) {
                var p = n.toLowerCase().match(/^(webkit|moz|ms)/);
                if (p) {
                    d = "-" + p[1] + "-";
                    break a
                }
            }
            d = ""
        }
        n = {};
        for (var r in f)if (prop = c(r))for (var q in f[r])if (p = f[r][q], a.style[prop] = p.value, a.style[prop] != p.value) {
            var s = p.value.replace(p.pattern, d + "$&");
            a.style[prop] = s;
            a.style[prop] == s && (n[r] ||
            (n[r] = []), n[r].push(p.pattern))
        }
        f = n;
        r = c("transition");
        g = "-webkit-transition" == r ? "WebkitTransitionEnd" : r ? "transitionend" : void 0;
        this.prefix = d;
        this.style = c;
        this.setStyle = h;
        this.onTransitionEnd = k;
        this.requestAnimationFrame = l(60);
        return this
    };
    var c = function (g, h) {
        if (!h)return g in a.style ? g : d + g in a.style ? d + g : !1;
        var k = f[g], l;
        for (l in k)h = h.replace(k[l], d + "$&");
        g = c(g);
        a.style[g] = "";
        a.style[g] = h;
        return a.style[g] ? h : !1
    }, h = function (a, g, f) {
        f = c(g, f);
        return (g = c(g)) && f ? (a.style[g] = f, a.style[g]) : !1
    }, k = function (a,
                     f, d) {
        if (!a || !f || !d)throw"Missing parameters";
        a.removeEventListener(g, a.onTransitionEnd);
        a.onTransitionEnd = function (h) {
            if (h.target != a || h.propertyName != c(d))return !1;
            a.removeEventListener(g, a.onTransitionEnd);
            delete a.onTransitionEnd;
            f()
        };
        a.addEventListener(g, a.onTransitionEnd)
    }, l = function (a) {
        var c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (a) {
                window.setTimeout(a, 1E3 / 60)
            };
        return function (a) {
            c.call(window, a)
        }
    }
};
R.prefixed = (new R.Prefixed).init();
R.Nav = function () {
    var a = this;
    this.html = {};
    this.open = !1;
    this.delegate = null;
    this.contentMode = !1;
    this.init = function (a) {
        this.delegate = a;
        this.html.siteNavDiv = R.qs(".site-nav");
        this.html.navPaginationDiv = R.qs(".nav-pagination");
        this.html.navBarBgDiv = R.qs(".nav-bar-bg");
        this.html.navBarDiv = R.qs(".nav-bar");
        this.html.navLogoLink = R.qs(".nav-link-logo");
        this.html.navMenuLink = R.qs(".nav-link-menu");
        this.html.navMenuLinkOuter = R.qs(".nav-link-menu-outer");
        this.html.navMenuContent = R.qs("#nav-menu-content");
        this.html.navMenuDiv =
            R.qs("#nav-menu");
        this.html.navMenuContentCopies = R.qsa(".nav-menu-content");
        this.html.navPaginationList = R.qs(".nav-pagination ul");
        this.html.siteHeadPaginationDiv = R.qs(".site-head-pagination");
        this.html.baseContentDivs = R.qsa(".nav-menu-base-content");
        this.html.foldContentDivs = R.qsa(".nav-menu-fold-content");
        this.html.menuLinks = R.qsa("#nav-menu-content a");
        this.html.navMenuLink.onclick = this.menuClick.bind(this);
        this.initMenuContent();
        this.addListeners();
        this.resize();
        return this
    };
    this.addListeners =
        function () {
            GlobalEvents.addListener(GlobalEvent.WINDOW_RESIZE, this.resize.bind(this));
            GlobalEvents.addListener(GlobalEvent.WINDOW_LOAD, this.resize.bind(this));
            for (var a = 0; a < this.html.menuLinks.length; a++)this.html.menuLinks[a].onclick = this.menuLinkClick;
            this.html.navLogoLink.onclick = this.logoClick.bind(this)
        };
    this.menuLinkClick = function (d) {
        d.stopPropagation();
        return a.delegate.menuLinkClick(this)
    };
    this.logoClick = function (a) {
        a.stopPropagation();
        this.delegate.navLogoClick();
        return !1
    };
    this.initMenuContent =
        function () {
            for (var a = this.html.navMenuContent.innerHTML, f = this.html.navMenuContentCopies.length; f--;)this.html.navMenuContentCopies[f].innerHTML = a
        };
    this.resize = function () {
        for (var a = document.documentElement.clientWidth, f = this.html.navMenuContentCopies.length; f--;)this.html.navMenuContentCopies[f].style.width = a + "px"
    };
    this.menuClick = function (d) {
        d.stopPropagation();
        a.delegate.menuClick();
        return !1
    };
    this.menuWillOpen = function () {
        this.contentMode == R.Site.CONTENT_MODE_CONTENT ? (R.setTransition(this.html.navPaginationDiv,
                "opacity .25s linear"), this.html.navPaginationDiv.style.opacity = "0") : (R.setTransition(this.html.siteHeadPaginationDiv, "opacity .25s linear"), this.html.siteHeadPaginationDiv.style.opacity = "0");
        window.oldtouchmove = window.ontouchmove;
        window.ontouchmove = function (a) {
            a.stopPropagation();
            return !1
        };
        R.setTransition(this.html.navLogoLink, "opacity .25s linear");
        this.html.navLogoLink.style.opacity = "0";
        R.onTransitionEnd(this.html.navLogoLink, function () {
            a.html.siteHeadPaginationDiv.style.display = "none";
            a.html.navPaginationDiv.style.display =
                "none";
            a.html.navLogoLink.style.display = "none"
        });
        R.addClass(a.html.navMenuLink, "active")
    };
    this.menuWillClose = function () {
        this.contentMode == R.Site.CONTENT_MODE_CONTENT ? (this.html.navPaginationDiv.style.display = "block", R.setTransition(this.html.navPaginationDiv, "opacity .25s linear"), this.html.navPaginationDiv.style.opacity = "1") : (this.html.siteHeadPaginationDiv.style.display = "block", R.setTransition(this.html.siteHeadPaginationDiv, "opacity .25s linear .85s"), this.html.siteHeadPaginationDiv.style.opacity =
                "1");
        window.ontouchmove = window.oldtouchmove;
        this.html.navLogoLink.style.display = "";
        R.setTransition(this.html.navLogoLink, "opacity .25s linear");
        this.html.navLogoLink.style.opacity = "1";
        R.removeClass(this.html.navMenuLink, "active")
    };
    this.openMenu = function (d) {
        a.html.navMenuDiv.style.display = "block";
        a.html.navMenuDiv.clientWidth;
        R.addClass(a.html.siteNavDiv, "nav-menu-open animating");
        R.onTransitionEnd(a.html.navMenuContent, function () {
            R.removeClass(a.html.siteNavDiv, "animating");
            d && d()
        })
    };
    this.closeMenu =
        function (d) {
            R.addClass(a.html.siteNavDiv, "animating");
            R.removeClass(a.html.siteNavDiv, "nav-menu-open");
            R.onTransitionEnd(a.html.navMenuDiv, function () {
                R.removeClass(a.html.siteNavDiv, "animating");
                a.html.navMenuDiv.style.display = "none";
                d && d()
            })
        };
    this.setForegroundColor = function (a) {
        this.html.navBarBgDiv.style.backgroundColor = a;
        for (var f = 0; f < this.html.baseContentDivs.length; f++) {
            var g = this.html.baseContentDivs[f];
            g.style.backgroundColor = a
        }
        for (f = 0; f < this.html.foldContentDivs.length; f++)g = this.html.foldContentDivs[f],
            g.style.backgroundColor = a;
        this.html.navMenuContent.style.backgroundColor = a
    };
    this.setBackgroundColor = function (a) {
        this.html.navBarDiv.style.backgroundColor = a
    };
    this.enterContentMode = function () {
        if (this.contentMode)return !1;
        this.contentMode = !0;
        this.useLightIcons()
    };
    this.exitContentMode = function () {
        if (!this.contentMode)return !1;
        this.contentMode = !1;
        this.useDarkIcons()
    };
    this.useLightIcons = function () {
        R.addClass(this.html.navMenuLink, "content-mode");
        R.addClass(this.html.navLogoLink, "content-mode")
    };
    this.useDarkIcons =
        function () {
            R.removeClass(this.html.navMenuLink, "content-mode");
            R.removeClass(this.html.navLogoLink, "content-mode")
        };
    this.showBg = function () {
        this.html.navBarBgDiv.style.visibility = "visible"
    };
    this.hideBg = function () {
        this.html.navBarBgDiv.style.visibility = "hidden"
    };
    this.hidePagination = function (d) {
        d ? (R.setTransition(this.html.navPaginationDiv, ""), this.html.navPaginationDiv.style.display = "none") : (R.setTransition(this.html.navPaginationDiv, "opacity .2s linear"), this.html.navPaginationDiv.style.opacity = "0",
                R.onTransitionEnd(this.html.navPaginationDiv, function () {
                    a.html.navPaginationDiv.style.display = "none"
                }))
    };
    this.showPagination = function () {
        this.html.navPaginationDiv.style.display = "block";
        this.html.navPaginationDiv.style.opacity = "0";
        R.onNextFrame(function () {
            R.setTransition(a.html.navPaginationDiv, "opacity .2s linear");
            a.html.navPaginationDiv.style.opacity = "1"
        })
    };
    this.updateMenuStatus = function () {
        this.html.navMenuDiv.setAttribute("data-path", window.location.pathname)
    }
};
R.Pagination = function () {
    var a = this;
    this.html = {sitePaginationDiv: null, navPaginationList: null, navPaginationItems: [], navPaginationLinks: []};
    this.open = !1;
    this.page = 0;
    this.inverted = !1;
    this.delegate = null;
    this.init = function (a, f) {
        this.delegate = a;
        this.html.sitePaginationDiv = f;
        this.html.sitePaginationList = f.querySelector("ul");
        this.html.sitePaginationItems = f.querySelectorAll("li");
        this.html.sitePaginationLinks = f.querySelectorAll("a");
        for (var g = 0; g < this.html.sitePaginationItems.length; g++)if (/selected/.test(this.html.sitePaginationItems[g].className)) {
            this.page =
                g;
            break
        }
        for (g = 0; g < this.html.sitePaginationLinks.length; g++)this.html.sitePaginationLinks[g].onclick = this.pageClick;
        return this
    };
    this.pageClick = function (d) {
        d.stopPropagation();
        for (d = 0; d < a.html.sitePaginationLinks.length && a.html.sitePaginationLinks[d] != this; d++);
        a.delegate.paginationClick(d);
        return !1
    };
    this.show = function () {
        this.html.sitePaginationDiv.style.display = "block"
    };
    this.hide = function () {
        this.html.sitePaginationDiv.style.display = "none"
    };
    this.invertIcons = function () {
        this.html.sitePaginationList.style.borderColor =
            this.inverted ? "" : "#fff";
        this.inverted = !this.inverted
    };
    this.enterContentMode = function () {
        this.html.sitePaginationDiv.style.position = "fixed";
        this.html.sitePaginationDiv.style.top = "0"
    };
    this.exitContentMode = function () {
        this.html.sitePaginationDiv.style.position = "";
        this.html.sitePaginationDiv.style.top = ""
    };
    this.setPage = function (a, f) {
        if (a != this.page) {
            var g = this.delegate.getRealIndex(this.page), c = this.delegate.getRealIndex(a);
            R.removeClass(this.html.sitePaginationItems[g], "selected");
            R.addClass(this.html.sitePaginationItems[c],
                "selected");
            this.page = a
        }
    }
};
R.Badge = function () {
    var a = this, d = this.site = null, f = {value: 0};
    this.html = {
        siteBadgeDiv: null,
        siteBadgeContentDiv: null,
        badgeControlsDiv: null,
        badgeNextLink: null,
        badgeBackLink: null,
        badgeCurrentSpan: null,
        badgeTotalSpan: null
    };
    this.init = function (a) {
        this.site = a;
        this.html.siteBadgeDiv = R.qs(".site-badge");
        this.html.siteBadgeContentDiv = R.qs(".site-badge-content");
        this.html.siteBadgePerspectiveDiv = R.qs(".site-badge-perspective");
        this.html.badgeControlsDiv = R.qs(".badge-controls");
        this.html.badgeCurrentSpan = R.qs(".badge-current");
        this.html.badgeTotalSpan = R.qs(".badge-total");
        this.html.badgeNextLink = R.qs(".badge-next-link");
        this.html.badgeBackLink = R.qs(".badge-back-link");
        this.html.badgeBackSpan = R.qs(".badge-back");
        this.html.badgeNextSpan = R.qs(".badge-next");
        this.page = parseInt(this.html.badgeCurrentSpan.innerHTML) - 1;
        this.addListeners();
        return this
    };
    this.addListeners = function () {
        this.html.badgeNextLink.onmouseover = this.nextOver;
        this.html.badgeBackLink.onmouseover = this.backOver;
        this.html.badgeNextLink.onclick = this.nextClick;
        this.html.badgeBackLink.onclick =
            this.backClick;
        this.html.badgeNextLink.onmouseout = this.nextOut;
        this.html.badgeBackLink.onmouseout = this.backOut
    };
    this.nextClick = function () {
        a.site.badgeNextClick();
        return !1
    };
    this.backClick = function () {
        a.site.badgeBackClick();
        return !1
    };
    this.nextOver = function () {
        a.html.badgeNextSpan.style.opacity = "1";
        a.animating || a.tilt(30)
    };
    this.nextOut = function () {
        a.html.badgeNextSpan.style.opacity = ".2";
        a.animating || a.tilt(0)
    };
    this.backOver = function () {
        a.html.badgeBackSpan.style.opacity = "1";
        a.animating || a.tilt(-30)
    };
    this.backOut =
        function () {
            a.html.badgeBackSpan.style.opacity = ".2";
            a.animating || a.tilt(0)
        };
    this.tilt = function (g) {
        d && d.stop();
        d = new Tween(f, 500, {
            ease: Ease.easeOut.sine, value: g, onUpdate: function () {
                R.setTransform(a.html.siteBadgePerspectiveDiv, "rotateY(" + f.value + "deg)")
            }, onComplete: function () {
                0 == f.value && R.setTransform(a.html.siteBadgePerspectiveDiv, "")
            }
        })
    };
    this.setPage = function (g, c, h, k) {
        if (g != this.page) {
            if (h) {
                d && d.stop();
                this.animating = !0;
                var l = k ? 200 : 400;
                R.setTransition(this.html.siteBadgePerspectiveDiv, "none");
                new Tween(f,
                    l, {
                        ease: Ease.easeIn.sine, value: 90 * c, onUpdate: function () {
                            R.setTransform(a.html.siteBadgePerspectiveDiv, "rotateY(" + f.value + "deg)")
                        }, onComplete: function () {
                            new Tween(f, l, {
                                ease: Ease.easeOut.sine, value: 0, delay: 50, onUpdate: function () {
                                    R.setTransform(a.html.siteBadgePerspectiveDiv, "rotateY(" + -1 * f.value + "deg)")
                                }, onComplete: function () {
                                    R.setTransform(a.html.siteBadgePerspectiveDiv, "");
                                    a.animating = !1
                                }
                            });
                            a.html.badgeCurrentSpan.innerHTML = a.site.getRealIndex(g) + 1
                        }
                    })
            } else a.html.badgeCurrentSpan.innerHTML = a.site.getRealIndex(g) +
                1;
            this.page = g
        }
    }
};
R.Site = function () {
    var a = this;
    R.Site.historyState = null;
    var d = R.Site.CONTENT_MODE_CONTENT, f = R.Site.CONTENT_MODE_MASTHEAD;
    this.html = {};
    this.animations = this.navPagination = this.headerPagination = this.badge = this.nav = null;
    this.mobileSize = this.pagesLoaded = !1;
    this.ribbonManager = this.ribbonCenter = this.ribbon = null;
    this.ribbonColorTransitions = [];
    this.mouseWheelSuspended = this.menuOpen = this.animating = !1;
    this.mouseWheelSpeedY = this.mouseWheelSpeedX = this.mouseWheelLastY = this.mouseWheelLastX = this.mouseWheelDirection =
        0;
    this.dragHelper = null;
    this.dragging = this.dragSuspended = !1;
    this.dragSide = this.dragOffset = 0;
    this.contentMode = f;
    this.pageIndex = PAGE_INDEX;
    this.pagesLength = PAGE_DATA.length;
    this.navHeight = this.ribbonWidth = 0;
    this.navArrowShowing = !0;
    this.currentFooter = null;
    this.footerShowing = !1;
    this.dribbbleShots = [];
    this.pageBodyImages = [];
    this.pageBodyBgDivs = [];
    this.init = function () {
        if ("simple" != document.body.className)return this.html.siteDiv = R.qs(".site"), this.html.siteBodyDiv = R.qs(".site-body"), this.html.siteBodyPageAreaDiv =
            R.qs(".site-body .page-area"), this.html.siteNavDiv = R.qs(".site-nav"), this.html.navBarBgDiv = R.qs(".nav-bar-bg"), this.html.navMenuLink = R.qs(".nav-link-menu"), this.html.navPaginationDiv = R.qs(".nav-pagination"), this.html.navPaginationList = R.qs(".nav-pagination ul"), this.html.navDirectionDiv = R.qs(".site-nav .nav-direction"), this.html.navArrowLink = R.qs(".site-nav a.nav-arrow"), this.html.siteHeadDiv = R.qs(".site-head"), this.html.siteHeadPageAreaDiv = R.qs(".site-head .page-area"), this.html.siteHeadPaginationDiv =
            R.qs(".site-head-pagination"), this.html.siteHeadArrowsDiv = R.qs(".site-head-arrows"), this.html.siteHeadDirectionDiv = R.qs(".site-head .site-direction"), this.html.siteHeadDownArrowLink = R.qs(".site-head a.down-arrow"), this.html.siteRibbonDiv = R.qs(".site-ribbon"), this.html.pageHeadDivs = Array(PAGE_DATA.length), this.html.pageHeadDivs[this.pageIndex] = R.qs(".page-head"), this.html.pageBodyDivs = Array(PAGE_DATA.length), this.html.pageBodyDivs[this.pageIndex] = R.qs(".page-body"), this.html.pageBodyImages = Array(PAGE_DATA.length),
            this.html.pageBodyBgDivs = Array(PAGE_DATA.length), this.html.pageContentDivs = Array(PAGE_DATA.length), this.html.pageContentDivs[this.pageIndex] = R.qs(".page-content"), this.nav = (new R.Nav).init(this), this.badge = (new R.Badge).init(this), this.navPagination = (new R.Pagination).init(this, this.html.navPaginationDiv), this.headerPagination = (new R.Pagination).init(this, this.html.siteHeadPaginationDiv), this.dragHelper = (new DragHelper).init(), this.createRibbon(), this.loadPages(), R.touch || (document.body.style.overflow =
            "hidden"), R.touch && (this.html.siteDiv.style.overflow = "hidden", window.onload = function () {
            setTimeout(function () {
                a.html.siteDiv.style.overflow = "";
                R.redrawElement(document.body)
            }, 32)
        }), 0 < R.scrollbarWidth && (this.html.pageBodyDivs[this.pageIndex].style.paddingRight = R.scrollbarWidth + "px", 0 == this.pageIndex && this.adjustStudioHeader()), this.nav.setForegroundColor(this.getPrimaryColor()), this
    };
    this.adjustStudioHeader = function () {
        R.qs("#studio header").style.marginRight = -R.scrollbarWidth + "px"
    };
    this.loadPages = function () {
        new Ajax({
            method: "GET",
            path: "/surrounding/" + PAGE_DATA[this.pageIndex].slug + "/", onComplete: this.onPagesLoaded.bind(this)
        })
    };
    this.onPagesLoaded = function (a) {
        var c = this.html.pageBodyDivs[this.pageIndex];
        c.insertAdjacentHTML("beforebegin", a.html_before);
        c.insertAdjacentHTML("afterend", a.html_after);
        c = this.html.pageHeadDivs[this.pageIndex];
        c.insertAdjacentHTML("beforebegin", a.header_html_before);
        c.insertAdjacentHTML("afterend", a.header_html_after);
        this.html.pageBodyDivs = R.qsa(".page-body");
        this.html.pageHeadDivs = R.qsa(".page-head");
        this.html.pageContentDivs = R.qsa(".page-content");
        this.pagesLoaded = !0;
        0 < R.scrollbarWidth && this.adjustStudioHeader();
        this.findInternalLinks();
        this.setupDribbbleShots();
        if (R.touch) {
            a = this.html.pageContentDivs[0].getElementsByClassName("person");
            new TapBios(a);
            c = this.html.pageContentDivs[0].getElementsByClassName("client");
            for (a = c.length - 1; 0 <= a; a--)new TapNonHoverable(c[a]);
            c = this.html.pageContentDivs[0].getElementsByClassName("award");
            for (a = c.length - 1; 0 <= a; a--)new TapNonHoverable(c[a])
        }
        var f = this, c =
            R.qsa(".page-head-actions a");
        for (a = 0; a < c.length; a++)c[a].onclick = function (a) {
            a = f.getPageIndexForPath(this.pathname);
            var c = a > f.pageIndex ? 1 : -1;
            a == f.pageIndex ? f.animateToContent() : f.animateToHeaderIndex(a, c, !0);
            return !1
        };
        this.enableDragging();
        this.addListeners()
    };
    this.resizeRibbon = function () {
        768 > window.innerWidth ? (this.ribbonWidth = 60, this.navHeight = 40) : (this.ribbonWidth = 136, this.navHeight = 60);
        var a = R.id("ribbon");
        a.width = window.innerWidth * R.scale;
        a.height = window.innerHeight * R.scale;
        a.style.width = window.innerWidth +
            "px";
        a.style.height = window.innerHeight + this.navHeight + "px";
        this.ribbon && (this.ribbon.setWidth(this.ribbonWidth, this.navHeight), this.ribbon.straighten(), this.ribbon.resetSize())
    };
    this.createRibbon = function () {
        this.ribbon = new Ribbon(R.id("ribbon"), PAGE_DATA[this.pageIndex].colors.ribbonPrimary, PAGE_DATA[this.pageIndex].colors.ribbonSecondary, R.scale);
        this.resizeRibbon();
        this.ribbonManager = new RibbonInteractionManager(this.ribbon)
    };
    this.addListeners = function () {
        GlobalEvents.addListener(GlobalEvent.WINDOW_RESIZE,
            this.onResize.bind(this));
        GlobalEvents.addListener(GlobalEvent.WINDOW_SCROLL, this.onScroll.bind(this));
        this.html.siteHeadDownArrowLink.onclick = this.downArrowClick.bind(this);
        window.onkeydown = this.onKeyDown.bind(this);
        if (!R.touch) {
            var a = document.documentElement;
            a.addEventListener("mousewheel", this.onMouseWheel.bind(this), !1);
            a.addEventListener("wheel", this.onMouseWheel.bind(this), !1);
            window.onunload = function () {
                window.scrollTo(0, 0)
            }
        }
        window.onpopstate = this.onPopState.bind(this);
        window.history.state ||
        (a = {count: 0}, R.Site.historyState = a, window.history.replaceState(a, document.title, window.location.pathname));
        R.Site.historyCount = window.history.state.count;
        this.onResize()
    };
    this.downArrowClick = function () {
        this.animateToContent();
        return !1
    };
    this.upArrowClick = function () {
        this.animateToMasthead();
        return !1
    };
    this.onScroll = function () {
        if (this.contentMode == d) {
            for (var a = 0; a < this.icons.length; a++) {
                var c = this.icons[a];
                R.visible(c, !0) && R.addClass(c, "case-study-icon-anim")
            }
            !this.footerShowing && window.innerHeight > this.currentFooter.getBoundingClientRect().top ?
                (this.footerShowing = !0, R.startRendering(), this.dribbbleShots[this.pageIndex] && this.dribbbleShots[this.pageIndex].setOnscreen(!0)) : this.footerShowing && window.innerHeight < this.currentFooter.getBoundingClientRect().top && (this.footerShowing = !1, R.stopRendering(), this.dribbbleShots[this.pageIndex] && this.dribbbleShots[this.pageIndex].setOnscreen(!1))
        }
        this.loadVisibleImages();
        this.loadVisibleBgDivs()
    };
    this.onResize = function () {
        !this.mobileSize && 768 > window.innerWidth ? (this.mobileSize = !0, this.updateDownArrow()) :
            this.mobileSize && 768 <= window.innerWidth && (this.mobileSize = !1, this.updateDownArrow());
        this.contentMode == f && this.resizeRibbon();
        this.currentFooter = this.html.pageBodyDivs[this.pageIndex].getElementsByTagName("footer")[0]
    };
    this.onFontsReady = function () {
    };
    this.getRealIndex = function (a) {
        a %= this.pagesLength;
        0 > a && (a += this.html.pageBodyDivs.length);
        return a
    };
    this.getBackgroundColor = function (a) {
        void 0 === a && (a = this.pageIndex);
        a = this.getRealIndex(a);
        return PAGE_DATA[a].colors.background
    };
    this.getPrimaryColor = function (a) {
        void 0 ===
        a && (a = this.pageIndex);
        a = this.getRealIndex(a);
        return PAGE_DATA[a].colors.ribbonPrimary
    };
    this.getSecondaryColor = function (a) {
        void 0 === a && (a = this.pageIndex);
        a = this.getRealIndex(a);
        return PAGE_DATA[a].colors.ribbonSecondary
    };
    this.updateHeaders = function () {
        var a = this.html.pageHeadDivs[this.pageIndex];
        a.style.display = "block";
        a.style.right = "";
        a.style.left = "";
        for (a = 0; a < this.html.pageHeadDivs.length; a++)if (a != this.pageIndex) {
            var c = this.html.pageHeadDivs[a];
            c.style.display = "none";
            c.style.right = "";
            c.style.left =
                ""
        }
        this.updateDownArrow()
    };
    this.activateIcons = function () {
        this.icons = this.html.pageBodyDivs[this.pageIndex].querySelectorAll(".case-study-icon");
        for (var a = 0; a < this.icons.length; a++)R.addClass(this.icons[a], "case-study-icon-ready")
    };
    this.activateSlideshows = function () {
        for (var a = this.html.pageBodyDivs[this.pageIndex], c = a.querySelectorAll(".slideshow"), f = a.querySelectorAll(".device-slideshow"), d = a.querySelectorAll(".simple-slideshow"), l = a.querySelectorAll(".slideshow, .device-slideshow, .simple-slideshow"),
                 n = 0; n < l.length; n++)a = l[n], a.slideshow && a.slideshow.deactivate();
        for (l = 0; l < c.length; l++)a = c[l], a.slideshow || (a.slideshow = (new R.Slideshow).init(a)), a.slideshow.activate();
        for (c = 0; c < f.length; c++)a = f[c], a.slideshow || (a.slideshow = (new R.DeviceSlider).init(a)), a.slideshow.activate();
        for (f = 0; f < d.length; f++)c = d[f], c.slideshow || (c.slideshow = (new R.SimpleSlider).init(c)), c.slideshow.activate()
    };
    this.activateVideoPlayers = function () {
        for (var a = this.html.pageBodyDivs[this.pageIndex].querySelectorAll(".device-screen > .video-player"),
                 c = 0; c < a.length; c++) {
            var f = a[c];
            f.videoPlayer || (f.videoPlayer = (new R.VideoPlayer).init(f))
        }
    };
    this.activateCodeSnippets = function () {
        for (var a = this.html.pageBodyDivs[this.pageIndex], c = a.querySelectorAll(".code-collection"), f = a.querySelectorAll(".code-sample"), d = a.querySelectorAll(".code-sample code"), l = a.querySelectorAll(".code-sample pre"), a = a.querySelectorAll(".code-expand-button"), n = a.length; n--;) {
            var p = a[n];
            p.collection = c[n];
            p.sample = f[n];
            p.code = d[n];
            p.pre = l[n];
            p.code.style.top = R.scrollbarWidth + "px";
            p.code.style.marginTop = "-" + R.scrollbarWidth + "px";
            p.addEventListener("click", function () {
                R.hasClass(this.collection, "expanded") ? (R.removeClass(this.collection, "expanded"), this.sample.style.height = "") : (R.addClass(this.collection, "expanded"), this.sample.style.height = this.pre.clientHeight + "px")
            })
        }
    };
    this.updateContent = function () {
        for (var a = 0; a < this.html.pageBodyDivs.length; a++) {
            var c = this.html.pageBodyDivs[a];
            c.style.display = "none"
        }
        c = this.html.pageBodyDivs[this.pageIndex];
        c.style.display = "block";
        0 < R.scrollbarWidth &&
        (c.style.paddingRight = R.scrollbarWidth + "px");
        c = c.querySelectorAll(".page-section");
        for (a = 0; a < c.length; a++)c[a].style.display = "none";
        c[0].style.display = "";
        c[1].style.display = "";
        this.nav.setForegroundColor(this.getPrimaryColor());
        this.html.siteBodyDiv.style.backgroundColor = this.getBackgroundColor();
        this.updateImages()
    };
    this.animateToContent = function () {
        if (!(this.animating || this.menuOpen || this.dragging)) {
            this.animating = !0;
            var f = this.ribbon.getCurrentVerticalPosition();
            this.ribbon.verticalPosition = f;
            this.ribbon.positionDamping =
                1;
            this.ribbon.canDestruct = !1;
            var c = window.innerHeight, h = (c - a.navHeight) / c, k = !1, l = {value: 0};
            new Tween(l, 860, {
                value: window.innerHeight, ease: Ease.easeInOut.sine, onUpdate: function () {
                    R.setTransform(a.html.siteDiv, "translate3d(0," + -l.value + "px,0)");
                    var d = l.value / c, p = Math.min(d, 1);
                    a.ribbon.straightenStrength = Math.min(p, 1);
                    a.ribbon.verticalPosition = f - f * p;
                    a.ribbon.straighten();
                    d >= h && (0 < R.scrollbarWidth && (d = R.normalize(d, h, 1, 0, 1), R.setTransform(a.html.navMenuLink, "translate3d(" + d * -R.scrollbarWidth + "px,0,0)")),
                    k || (a.nav.enterContentMode(), k = !0))
                }, onComplete: function () {
                    R.onNextFrame(function () {
                        a.setContentMode(d);
                        a.ribbon.canDestruct = !0;
                        a.animating = !1
                    })
                }
            })
        }
    };
    this.prepareToAnimateToMasthead = function () {
        for (var a = this.html.pageBodyDivs[this.pageIndex].querySelectorAll(".page-section"), c = 2; c < a.length; c++)a[c].style.display = "none";
        R.setTransform(this.html.siteDiv, "translate3d(0,-100%,0)");
        this.html.siteDiv.style.top = "";
        R.touch || (document.body.style.overflow = "hidden");
        0 < R.scrollbarWidth && (this.html.pageBodyDivs[this.pageIndex].style.paddingRight =
            R.scrollbarWidth + "px", R.setTransform(this.html.navMenuLink, "translate3d(" + -R.scrollbarWidth + "px,0,0)"));
        0 < R.scrollbarWidth && (this.html.siteBodyDiv.style.backgroundColor = this.getBackgroundColor(), document.body.style.backgroundColor = this.getBackgroundColor());
        this.ribbon.setColors(new Color(PAGE_DATA[this.pageIndex].colors.ribbonPrimary), new Color(PAGE_DATA[this.pageIndex].colors.ribbonSecondary));
        R.startRendering();
        this.resizeRibbon();
        this.ribbonManager.attachToRenderFrame();
        this.nav.hidePagination(!0);
        this.nav.hideBg()
    };
    this.animateToMasthead = function () {
        if (!(this.animating || this.menuOpen || this.dragging)) {
            this.animating = !0;
            0 < R.scrollbarWidth && R.setTransform(this.html.navMenuLink, "translate3d(" + -R.scrollbarWidth + "px,0,0)");
            this.prepareToAnimateToMasthead();
            var g = this.ribbon.getCurrentVerticalPosition();
            this.ribbon.verticalPosition = g;
            this.ribbon.positionDamping = 1;
            this.ribbon.canDestruct = !1;
            var c = window.innerHeight, d = (c - a.navHeight) / c, k = !1, l = {value: c};
            new Tween(l, 860, {
                value: 0, ease: Ease.easeInOut.sine,
                onUpdate: function () {
                    R.setTransform(a.html.siteDiv, "translate3d(0," + -l.value + "px,0)");
                    var f = l.value / c, g = Math.min(f, 1);
                    a.ribbon.verticalPosition = 0.5 * (1 - g);
                    a.ribbon.positionDamping = g;
                    a.ribbon.straightenStrength = g;
                    a.ribbon.straighten();
                    f <= d && (0 < R.scrollbarWidth && (f = R.normalize(f, d, 1, 0, 1), f = 1 - Math.min(-f, 1), R.setTransform(a.html.navMenuLink, "translate3d(" + f * -R.scrollbarWidth + "px,0,0)")), k || (a.nav.exitContentMode(), k = !0))
                }, onComplete: function () {
                    a.setContentMode(f);
                    a.ribbon.canDestruct = !0;
                    a.animating = !1
                }
            })
        }
    };
    this.animateToHeaderIndex = function (f, c, d) {
        if (!(this.animating || this.dragging || this.menuOpen || f == this.pageIndex)) {
            this.animating = !0;
            var k = this.pageIndex;
            this.pageIndex = f = this.getRealIndex(f);
            this.setPage(f, c);
            d && this.updateHistory(c);
            this.ribbon.speed = 0;
            d = this.html.pageHeadDivs[f];
            d.style.display = "block";
            d.style.left = 100 * c + "%";
            d.style.right = -100 * c + "%";
            768 > window.innerWidth && (0 == f ? this.hideDownArrow(400, 0) : this.showDownArrow(400, 400));
            var l = this.getColorTransitions(k, f), n = window.innerWidth, p = 0, r = {value: 0};
            new Tween(r, 860, {
                value: 1, ease: Ease.easeInOut.sine, onUpdate: function () {
                    R.setTransform(a.html.siteHeadPageAreaDiv, "translate3d(" + 100 * -r.value * c + "%,0,0)");
                    a.ribbon.setColors(l.primary.getColorAtValue(r.value), l.secondary.getColorAtValue(r.value));
                    a.ribbon.move(1.2 * (r.value - p) * c * n);
                    p = r.value
                }, onComplete: function () {
                    R.setTransform(a.html.siteHeadPageAreaDiv, "");
                    a.ribbon.speed = 0.3 * c;
                    a.ribbon.setPullPoint(0.5);
                    a.animating = !1;
                    a.updateContent();
                    a.updateHeaders()
                }
            })
        }
    };
    this.getVisiblePageSectionDivs = function (a) {
        a =
            this.html.pageBodyDivs[a].querySelectorAll(".page-section");
        for (var c = [], f = 0; f < a.length; f++) {
            var d = a[f];
            R.visible(d, !0) && c.push(d)
        }
        return c
    };
    this.animateToPageIndex = function (f, c, d) {
        if (!(this.animating || this.dragging || this.menuOpen || f == this.pageIndex)) {
            this.animating = !0;
            var k = this.pageIndex, l = this.getRealIndex(f);
            this.pageIndex = l;
            this.setPage(l, c);
            d && this.updateHistory(c);
            f = this.getBackgroundColor(l);
            d = this.getPrimaryColor(l);
            this.html.siteBodyDiv.style.backgroundColor = f;
            this.nav.setBackgroundColor(d);
            var n = a.getVisiblePageSectionDivs(k);
            for (f = 0; f < n.length; f++)d = n[f], R.setTransition(d, "transform 860ms ease-in-out"), R.setTransform(d, "translate3d(" + 100 * -c + "%,0,0)");
            R.setTransition(a.html.navBarBgDiv, "transform 860ms ease-in-out");
            R.setTransform(a.html.navBarBgDiv, "translate3d(" + 100 * -c + "%,0,0)");
            R.onTransitionEnd(a.html.navBarBgDiv, function () {
                a.html.pageBodyDivs[k].style.display = "none";
                for (var f = 0; f < n.length; f++) {
                    var d = n[f];
                    R.setTransition(d, "");
                    R.setTransform(d, "")
                }
                a.showPageContent(l, c)
            })
        }
    };
    this.showPageContent =
        function (f, c) {
            var d = a.html.pageBodyDivs[a.pageIndex];
            d.style.display = "block";
            0 < R.scrollbarWidth && (d.style.paddingRight = "");
            for (var k = d.querySelectorAll(".page-section"), l = Array.prototype.slice.call(k, 0, 2), d = 0; d < l.length; d++) {
                var n = l[d];
                n.style.display = "";
                R.setTransform(n, "translate3d(" + 90 * c + "px,0,0)");
                n.style.opacity = "0"
            }
            R.onNextFrame(function () {
                window.scrollTo(0, R.touch ? 1 : 0);
                for (var c = 0; c < l.length; c++) {
                    var f = l[c];
                    R.setTransition(f, "opacity .4s linear, transform .4s ease-out");
                    R.setTransform(f, "translate3d(0,0,0)");
                    f.style.opacity = "1"
                }
                R.onTransitionEnd(l[0], function () {
                    for (var c = 0; c < l.length; c++) {
                        var f = l[c];
                        R.setTransition(f, "");
                        R.setTransform(f, "")
                    }
                    R.onNextFrame(function () {
                        for (var c = 0; c < k.length; c++)k[c].style.display = "";
                        a.nav.setForegroundColor(a.getPrimaryColor());
                        a.nav.setBackgroundColor("");
                        R.setTransition(a.html.navBarBgDiv, "");
                        R.setTransform(a.html.navBarBgDiv, "");
                        a.updateHeaders();
                        a.animating = !1;
                        a.activateIcons();
                        a.activateSlideshows();
                        a.activateCodeSnippets();
                        a.activateVideoPlayers();
                        a.loadCurrentDribbleShots();
                        R.onNextFrame(function () {
                            a.updateImages()
                        })
                    })
                })
            })
        };
    this.setPage = function (a, c, f, d) {
        f = this.contentMode == R.Site.CONTENT_MODE_MASTHEAD;
        this.headerPagination.setPage(a, f);
        this.navPagination.setPage(a, !f);
        this.badge.setPage(a, c, f, d);
        this.currentFooter = this.html.pageBodyDivs[this.pageIndex].getElementsByTagName("footer")[0]
    };
    this.showAllPageSections = function (a) {
        a = this.html.pageBodyDivs[a].querySelectorAll(".page-section");
        for (var c = 0; c < a.length; c++)a[c].style.display = ""
    };
    this.setContentMode = function (g) {
        switch (g) {
            case d:
                this.animating = !0;
                R.touch || (document.body.style.overflow = "");
                0 < R.scrollbarWidth && (R.setTransform(a.html.navMenuLink, ""), a.html.pageBodyDivs[a.pageIndex].style.paddingRight = "");
                this.nav.showBg();
                this.nav.showPagination();
                0 < R.scrollbarWidth && this.nav.resize();
                R.stopRendering();
                a.ribbon.setPullPoint(0.5);
                a.ribbon.clearCanvas();
                a.ribbonManager.detachFromRenderFrame();
                R.onNextFrame(function () {
                    a.activateIcons();
                    a.activateSlideshows();
                    a.activateCodeSnippets();
                    a.activateVideoPlayers();
                    a.loadCurrentDribbleShots();
                    a.updateImages();
                    R.setTransform(a.html.siteDiv, "");
                    a.html.siteDiv.style.top = "-100%";
                    R.onNextFrame(function () {
                        a.showAllPageSections(a.pageIndex);
                        a.animating = !1
                    })
                });
                this.contentMode = d;
                break;
            case f:
                R.touch || (document.body.style.overflow = "hidden"), R.setTransform(this.html.siteDiv, ""), this.nav.resize(), R.redrawElement(this.html.siteNavDiv), this.contentMode = f
        }
    };
    this.badgeNextClick = function () {
        this.animating || this.dragging || this.menuOpen || this.animateToHeaderIndex(this.pageIndex + 1, 1, !0)
    };
    this.badgeBackClick = function () {
        this.animating ||
        this.dragging || this.menuOpen || this.animateToHeaderIndex(this.pageIndex - 1, -1, !0)
    };
    this.paginationClick = function (a) {
        if (!(this.animating || this.dragging || this.menuOpen)) {
            var c = a > this.pageIndex ? 1 : -1;
            this.contentMode == f ? this.animateToHeaderIndex(a, c, !0) : this.animateToPageIndex(a, c, !0)
        }
    };
    this.navLogoClick = function () {
        if (this.contentMode == d) {
            if (2 > window.pageYOffset) {
                window.scrollTo(0, 0);
                a.animateToMasthead();
                return
            }
            R.startRendering();
            this.animating = !0;
            var f = {value: window.pageYOffset};
            new Tween(f, 460, {
                value: 0,
                ease: Ease.easeInOut.sine, onUpdate: function () {
                    window.scrollTo(0, f.value)
                }, onComplete: function () {
                    setTimeout(function () {
                        a.animating = !1;
                        a.animateToMasthead()
                    }, 36)
                }
            })
        }
        return !1
    };
    this.navArrowClick = function () {
    };
    this.getColorTransitions = function (a, c) {
        a = this.getRealIndex(a);
        var f = this.getRealIndex(c);
        return {
            primary: new ColorTransition(new Color(PAGE_DATA[a].colors.ribbonPrimary), new Color(PAGE_DATA[f].colors.ribbonPrimary)),
            secondary: new ColorTransition(new Color(PAGE_DATA[a].colors.ribbonSecondary), new Color(PAGE_DATA[f].colors.ribbonSecondary))
        }
    }
};
R.Site.CONTENT_MODE_CONTENT = 1;
R.Site.CONTENT_MODE_MASTHEAD = 0;
R.Site.prototype.menuLinkClick = function (a) {
    if (!this.animating) {
        var d = this.getPageIndexForPath(a.pathname);
        if (-1 == d)return !0;
        var f = this, g = d > this.pageIndex ? 1 : -1;
        this.contentMode == R.Site.CONTENT_MODE_MASTHEAD ? (this.nav.menuWillClose(), this.nav.closeMenu(function () {
                f.menuOpen = !1;
                R.startRendering();
                f.ribbonManager.attachToRenderFrame();
                f.nav.setBackgroundColor("");
                f.ribbon.clearCanvas();
                d != f.pageIndex && f.animateToHeaderIndex(d, g, !0);
                var a = window.innerHeight, h = !1, k = {val: 1};
                new Tween(k, 860, {
                    val: 0, ease: Ease.easeOut.sine,
                    onUpdate: function () {
                        !h && k.val * a > f.navHeight && (f.nav.useDarkIcons(), h = !0);
                        f.ribbon.verticalPosition = 0.5 * (1 - k.val);
                        f.ribbon.positionDamping = k.val;
                        f.ribbon.straightenStrength = k.val;
                        f.ribbon.straighten()
                    }, onComplete: function () {
                    }
                })
            })) : (this.nav.menuWillClose(), this.nav.closeMenu(function () {
                f.menuOpen = !1;
                d != f.pageIndex && f.animateToPageIndex(d, g, !0)
            }));
        return !1
    }
};
R.Site.prototype.menuClick = function () {
    if (!this.animating) {
        this.animating = !0;
        var a = this;
        this.menuOpen ? (this.nav.menuWillClose(), this.nav.closeMenu(function () {
                a.menuClosed()
            })) : (this.contentMode == R.Site.CONTENT_MODE_MASTHEAD ? this.animateRibbonToTop(function () {
                    R.stopRendering();
                    a.ribbonManager.detachFromRenderFrame();
                    a.nav.setBackgroundColor(a.getPrimaryColor());
                    a.ribbon.clearCanvas();
                    a.nav.openMenu(function () {
                        a.menuOpened()
                    })
                }) : (R.stopRendering(), this.ribbonManager.detachFromRenderFrame(), this.nav.openMenu(function () {
                    a.menuOpened()
                })),
                this.nav.menuWillOpen(), this.menuOpen = !0)
    }
};
R.Site.prototype.menuOpened = function () {
    this.dragging = !1;
    this.dragHelper.stop();
    this.animating = !1
};
R.Site.prototype.menuClosed = function () {
    var a = this;
    this.contentMode == R.Site.CONTENT_MODE_MASTHEAD ? (R.startRendering(), this.ribbonManager.attachToRenderFrame(), a.nav.setBackgroundColor(""), this.animateRibbonToCenter(function () {
            a.animating = !1;
            a.menuOpen = !1
        })) : this.menuOpen = this.animating = !1
};
R.Site.prototype.animateRibbonToCenter = function (a) {
    this.ribbon.canDestruct = !1;
    this.animating = !0;
    var d = this, f = window.innerHeight, g = !1, c = {val: 1};
    new Tween(c, 400, {
        val: 0, onUpdate: function () {
            var a = c.val;
            !g && a * f > d.navHeight && (d.nav.useDarkIcons(), g = !0);
            a = Math.min(a, 1);
            d.ribbon.verticalPosition = 0.5 * (1 - a);
            d.ribbon.positionDamping = a;
            d.ribbon.straightenStrength = a;
            d.ribbon.straighten()
        }, onComplete: function () {
            d.ribbon.canDestruct = !0;
            d.animating = !1;
            a && a()
        }
    })
};
R.Site.prototype.animateRibbonToTop = function (a) {
    this.ribbon.canDestruct = !1;
    this.animating = !0;
    var d = this, f = window.innerHeight, g = !1, c = {val: 0};
    new Tween(c, 400, {
        val: 1, onUpdate: function () {
            var a = c.val;
            !g && (1 - a) * f < d.navHeight && (d.nav.useLightIcons(), g = !0);
            a = Math.min(a, 1);
            d.ribbon.verticalPosition = 0.5 * (1 - a);
            d.ribbon.positionDamping = a;
            d.ribbon.straightenStrength = a;
            d.ribbon.straighten()
        }, onComplete: function () {
            d.ribbon.canDestruct = !0;
            d.animating = !1;
            a && a()
        }
    })
};
R.Site.prototype.findInternalLinks = function () {
    for (var a = document.getElementsByClassName("internal-link"), d = this, f = a.length - 1; 0 <= f; f--)a[f].onclick = function () {
        return d.internalLinkClick(this)
    }
};
R.Site.prototype.internalLinkClick = function (a) {
    a = this.getPageIndexForPath(a.pathname);
    if (-1 == a)return !0;
    var d = a > this.pageIndex ? 1 : -1;
    a != this.pageIndex && this.animateToPageIndex(a, d, !0);
    return !1
};
R.Site.historyCount = 0;
R.Site.historyState = null;
R.Site.historyDirInit = 0;
R.Site.prototype.getPageIndexForPath = function (a) {
    for (var d = 0; d < PAGE_DATA.length; d++)if (a == PAGE_DATA[d].path)return d;
    return -1
};
R.Site.prototype.onPopState = function (a) {
    if (a.state) {
        var d = this.getPageIndexForPath(window.location.pathname), f;
        a.state.count < R.Site.historyCount ? (f = -R.Site.historyState.dir) || (f = -R.Site.historyDirInit) : f = a.state.dir;
        this.contentMode == R.Site.CONTENT_MODE_CONTENT ? this.animateToPageIndex(d, f, !1) : this.animateToHeaderIndex(d, f, !1);
        R.Site.historyDirInit || (R.Site.historyDirInit = f);
        a.state.dir || (R.Site.historyDirInit = 0);
        R.Site.historyState = a.state;
        R.Site.historyCount = a.state.count;
        this.nav.updateMenuStatus()
    }
};
R.Site.prototype.updateHistory = function (a) {
    R.Site.historyDirInit || (R.Site.historyDirInit = a);
    var d = PAGE_DATA[this.pageIndex];
    a = {dir: a, count: ++R.Site.historyCount};
    window.history.pushState(a, d.title, d.path);
    R.Site.historyState = a;
    this.nav.updateMenuStatus()
};
R.Site.prototype.enableDragging = function () {
    var a = this, d = function (f) {
        if (a.dragging || a.animating)return !1;
        if (a.menuOpen)return !0;
        a.dragging = !0;
        a.dragHelper.start(f);
        a.dragHelper.onIntentClear = a.dragIntentClear.bind(a);
        a.dragHelper.onDrag = function (f, c, d, k, l, n) {
            return a.contentMode == R.Site.CONTENT_MODE_MASTHEAD || 0 < n && 0 == window.pageYOffset ? !1 : !0
        };
        a.dragHelper.onComplete = function () {
            a.dragging = !1
        }
    };
    R.touch ? window.ontouchstart = d : document.body.onmousedown = d
};
R.Site.prototype.dragIntentClear = function (a, d, f, g, c, h, k) {
    this.dragHelper.onComplete = void 0;
    a == DragHelper.DRAG_DIRECTION_X ? this.startHorizontalDrag(h) : this.startVerticalDrag(k)
};
R.Site.prototype.startVerticalDrag = function (a) {
    this.contentMode == R.Site.CONTENT_MODE_MASTHEAD ? this.startVerticalDragMasthead() : 0 < a && 0 == window.pageYOffset ? this.startVerticalDragContent() : (this.dragHelper.onIntentClear = void 0, this.dragHelper.onComplete = void 0, this.dragHelper.onDrag = void 0, this.dragHelper.stop(), this.dragging = !1)
};
R.Site.prototype.startVerticalDragContent = function () {
    var a = this;
    this.prepareToAnimateToMasthead();
    var d = this.ribbon.getCurrentVerticalPosition();
    this.ribbon.verticalPosition = d;
    this.ribbon.positionDamping = 1;
    this.ribbon.canDestruct = !1;
    this.ribbon.speed = 0;
    var f = window.innerHeight, g = !0, c = 0;
    this.dragHelper.onDrag = function (d, k, l, n, p, r) {
        R.setTransform(a.html.siteDiv, "translate3d(0," + (-f + k) + "px,0)");
        a.ribbonDragVertical(1 - k / f, 0.5, 0);
        g && 0 > k / f ? (g = !1, a.nav.showBg()) : !g && 0 < k / f && (g = !0, a.nav.hideBg());
        c = k;
        return !1
    };
    this.dragHelper.onComplete = function (d, g) {
        a.dragHelper.onIntentClear = void 0;
        a.dragHelper.onComplete = void 0;
        a.dragHelper.onDrag = void 0;
        a.dragging = !1;
        a.animating = !0;
        var l;
        switch (g) {
            case DragHelper.OUTCOME_CLICK:
            case DragHelper.OUTCOME_NEXT:
            case DragHelper.OUTCOME_NONE:
                l = !1;
                break;
            case DragHelper.OUTCOME_BACK:
                l = !0
        }
        var n = {value: -f + c};
        l ? new Tween(n, 460, {
                value: 0, percent: 1, ease: Ease.easeInOut.sine, onUpdate: function () {
                    R.setTransform(a.html.siteDiv, "translate3d(0," + n.value + "px,0)");
                    a.ribbonDragVertical(-n.value /
                        f, 0.5, 0, !0)
                }, onComplete: function () {
                    a.setContentMode(R.Site.CONTENT_MODE_MASTHEAD);
                    a.ribbon.speed = 0.5 < Math.random() ? -0.3 : 0.3;
                    a.ribbon.canDestruct = !0;
                    a.animating = !1
                }
            }) : new Tween(n, 460, {
                value: -window.innerHeight, ease: Ease.easeInOut.sine, onUpdate: function () {
                    R.setTransform(a.html.siteDiv, "translate3d(0," + n.value + "px,0)");
                    a.ribbonDragVertical(-n.value / f, 0.5, 0)
                }, onComplete: function () {
                    a.setContentMode(R.Site.CONTENT_MODE_CONTENT);
                    a.ribbon.canDestruct = !0;
                    a.animating = !1
                }
            })
    }
};
R.Site.prototype.startVerticalDragMasthead = function () {
    var a = this, d = window.innerHeight, f = 0, g = this.ribbon.getCurrentVerticalPosition();
    this.ribbon.verticalPosition = g;
    this.ribbon.positionDamping = 1;
    this.ribbon.canDestruct = !1;
    this.ribbon.speed = 0;
    this.dragHelper.onDrag = function (c, h, k, l, n, p) {
        R.setTransform(a.html.siteDiv, "translate3d(0," + h + "px,0)");
        a.ribbonDragVertical(-h / d, g, 0, !1);
        f = h;
        return !1
    };
    this.dragHelper.onComplete = function (c, h) {
        a.dragHelper.onIntentClear = void 0;
        a.dragHelper.onComplete = void 0;
        a.dragHelper.onDrag = void 0;
        a.dragging = !1;
        a.animating = !0;
        var k;
        switch (h) {
            case DragHelper.OUTCOME_CLICK:
            case DragHelper.OUTCOME_BACK:
            case DragHelper.OUTCOME_NONE:
                k = !1;
                break;
            case DragHelper.OUTCOME_NEXT:
                k = !0
        }
        var l = {value: f};
        k ? new Tween(l, 460, {
                value: -window.innerHeight, ease: Ease.easeInOut.sine, onUpdate: function () {
                    R.setTransform(a.html.siteDiv, "translate3d(0," + l.value + "px,0)");
                    a.ribbonDragVertical(-l.value / d, g, 0)
                }, onComplete: function () {
                    R.onNextFrame(function () {
                        a.setContentMode(R.Site.CONTENT_MODE_CONTENT);
                        a.ribbon.canDestruct = !1;
                        a.animating = !1
                    })
                }
            }) : new Tween(l, 460, {
                value: 0, ease: Ease.easeInOut.sine, onUpdate: function () {
                    R.setTransform(a.html.siteDiv, "translate3d(0," + l.value + "px,0)");
                    a.ribbonDragVertical(-l.value / d, g, 0, !0)
                }, onComplete: function () {
                    R.setTransform(a.html.siteDiv, "");
                    a.ribbon.speed = 0.5 < Math.random() ? -0.3 : 0.3;
                    a.ribbon.canDestruct = !1;
                    a.animating = !1
                }
            })
    }
};
R.Site.prototype.ribbonDragVertical = function (a, d, f, g) {
    var c = window.innerHeight, h = (c - this.navHeight) / c, c = R.normalize(a, 0, h, 0, 1), c = Math.min(c, 1);
    a < h && this.nav.contentMode ? this.nav.exitContentMode() : a > h && !this.nav.contentMode && this.nav.enterContentMode();
    0 < R.scrollbarWidth && (h = R.normalize(a, h, 1, 0, 1), h = Math.max(h, 0), h = Math.min(h, 1), R.setTransform(this.html.navMenuLink, "translate3d(" + h * -R.scrollbarWidth + "px,0,0)"));
    this.ribbon.straightenStrength = c;
    this.ribbon.verticalPosition = (f - d) * a / 1 + d;
    g && (this.ribbon.positionDamping =
        a);
    this.ribbon.straighten()
};
R.Site.prototype.startHorizontalDrag = function (a) {
    this.contentMode == R.Site.CONTENT_MODE_MASTHEAD ? this.startHorizontalDragMasthead() : this.startHorizontalDragContent()
};
R.Site.prototype.ribbonDragHorizontal = function (a, d) {
    var f = 0 < a ? 0 : 1, g = Math.abs(a);
    this.ribbon.setPullPoint(f);
    this.ribbon.pullStrength = 0.5 * g;
    this.ribbon.straighten();
    this.ribbon.move(d)
};
R.Site.prototype.startHorizontalDragMasthead = function () {
    var a = this, d = this.getRealIndex(this.pageIndex - 1), f = this.getRealIndex(this.pageIndex + 1), g = this.html.pageHeadDivs[f], c = this.html.pageHeadDivs[d];
    g.style.display = "block";
    g.style.right = "-100%";
    g.style.left = "100%";
    c.style.display = "block";
    c.style.right = "100%";
    c.style.left = "-100%";
    this.colorTransitionNext = this.getColorTransitions(this.pageIndex, f);
    this.colorTransitionPrev = this.getColorTransitions(this.pageIndex, d);
    this.ribbon.canDestruct = !1;
    var h = window.innerWidth,
        k = 0;
    this.dragHelper.onDrag = function (c, f, d, g, q, s) {
        R.setTransform(a.html.siteHeadPageAreaDiv, "translate3d(" + c + "px,0,0)");
        f = -c / h;
        a.ribbon.pullStrength = 0.5 * Math.abs(f);
        a.ribbonDragHorizontal(f, c - k);
        a.adjustDownArrowOpacity(f);
        k = c;
        return !1
    };
    this.adjustDownArrowOpacity = function (c) {
        768 < window.innerWidth || (0 == a.pageIndex % 4 ? (c = Math.abs(c), a.html.siteHeadDownArrowLink.style.opacity = c) : 0 == (a.pageIndex + 1) % 4 ? 0 < c && (c = R.normalize(c, 0, 0.5, 1, 0), a.html.siteHeadDownArrowLink.style.opacity = Math.max(c, 0)) : 0 == (a.pageIndex -
                1) % 4 && 0 > c && (c = R.normalize(c, 0, -0.5, 1, 0), a.html.siteHeadDownArrowLink.style.opacity = Math.max(c, 0)))
    };
    this.dragHelper.onComplete = function (c, f) {
        a.dragHelper.onIntentClear = void 0;
        a.dragHelper.onComplete = void 0;
        a.dragHelper.onDrag = void 0;
        a.dragging = !1;
        a.animating = !0;
        var d = a.pageIndex, g = 0;
        switch (c) {
            case DragHelper.OUTCOME_NEXT:
                d += 1;
                g = 1;
                break;
            case DragHelper.OUTCOME_BACK:
                d -= 1, g = -1
        }
        d = a.getRealIndex(d);
        768 > window.innerWidth && (0 == d ? a.hideDownArrow(400, 0) : a.showDownArrow(400, 0));
        var q = {value: k, percent: 0}, s =
            a.ribbon.pullStrength;
        a.pageIndex != d ? (a.pageIndex = d, a.setPage(d, g, !0, !0), a.updateHistory(g), new Tween(q, 460, {
                value: h * -g, percent: 1, ease: Ease.easeOut.sine, onUpdate: function () {
                    R.setTransform(a.html.siteHeadPageAreaDiv, "translate3d(" + q.value + "px,0,0)");
                    var c = -q.value / h;
                    a.ribbon.pullStrength = s - s * q.percent;
                    a.ribbonDragHorizontal(c, q.value - k);
                    k = q.value
                }, onComplete: function () {
                    R.setTransform(a.html.siteHeadPageAreaDiv, "");
                    a.ribbon.canDestruct = !0;
                    a.animating = !1;
                    a.updateContent();
                    a.updateHeaders();
                    a.ribbon.setPullPoint(0.5);
                    g && (a.ribbon.speed = 0.3 * g)
                }
            })) : new Tween(q, 460, {
                value: 0, percent: 1, ease: Ease.easeOut.sine, onUpdate: function () {
                    R.setTransform(a.html.siteHeadPageAreaDiv, "translate3d(" + q.value + "px,0,0)");
                    var c = -q.value / h;
                    a.ribbon.pullStrength = s - s * q.percent;
                    a.ribbonDragHorizontal(c, q.value - k);
                    k = q.value
                }, onComplete: function () {
                    R.setTransform(a.html.siteHeadPageAreaDiv, "");
                    a.ribbon.canDestruct = !0;
                    a.animating = !1;
                    a.updateHeaders();
                    a.ribbon.setPullPoint(0.5);
                    g && (a.ribbon.speed = 0.3 * g)
                }
            })
    }
};
R.Site.prototype.startHorizontalDragContent = function () {
    var a = this, d = 0, f = this.getVisiblePageSectionDivs(this.pageIndex);
    this.dragHelper.onDrag = function (g, c, h, k, l, n) {
        0 < g && 0 >= d ? (c = a.getBackgroundColor(a.pageIndex - 1), h = a.getPrimaryColor(a.pageIndex - 1), a.html.siteBodyDiv.style.backgroundColor = c, a.nav.setBackgroundColor(h), a.html.siteBodyDiv.style.webkitTransform = "scale(1)") : 0 > g && 0 <= d && (c = a.getBackgroundColor(a.pageIndex + 1), h = a.getPrimaryColor(a.pageIndex + 1), a.html.siteBodyDiv.style.backgroundColor = c, a.nav.setBackgroundColor(h),
                a.html.siteBodyDiv.style.webkitTransform = "scale(1)");
        R.setTransform(a.html.navBarBgDiv, "translate3d(" + g + "px,0,0)");
        for (c = 0; c < f.length; c++)R.setTransform(f[c], "translate3d(" + g + "px,0,0)");
        d = g;
        return !1
    };
    this.dragHelper.onComplete = function (d, c) {
        a.dragHelper.onIntentClear = void 0;
        a.dragHelper.onComplete = void 0;
        a.dragHelper.onDrag = void 0;
        a.dragging = !1;
        a.animating = !0;
        var h = a.pageIndex, k = a.pageIndex, l;
        switch (d) {
            case DragHelper.OUTCOME_NEXT:
                k += 1;
                l = 1;
                break;
            case DragHelper.OUTCOME_BACK:
                k -= 1, l = -1
        }
        k = a.getRealIndex(k);
        if (h != k) {
            var n = 460;
            a.pageIndex = k;
            a.setPage(k, l, !0, !0);
            a.updateHistory(l);
            for (var p = 0; p < f.length; p++) {
                var r = f[p];
                R.setTransition(r, "transform " + n + "ms ease-out");
                R.setTransform(r, "translate3d(" + 100 * -l + "%,0,0)")
            }
            R.setTransition(a.html.navBarBgDiv, "transform " + n + "ms ease-out");
            R.setTransform(a.html.navBarBgDiv, "translate3d(" + 100 * -l + "%,0,0)");
            R.onTransitionEnd(a.html.navBarBgDiv, function () {
                a.html.pageBodyDivs[h].style.display = "none";
                for (var c = 0; c < f.length; c++) {
                    var d = f[c];
                    R.setTransition(d, "");
                    R.setTransform(d,
                        "")
                }
                a.showPageContent(k, l)
            })
        } else {
            n = 460;
            for (p = 0; p < f.length; p++)r = f[p], R.setTransition(r, "transform " + n + "ms ease-out"), R.setTransform(r, "translate3d(0,0,0)");
            R.setTransition(a.html.navBarBgDiv, "transform " + n + "ms ease-out");
            R.setTransform(a.html.navBarBgDiv, "translate3d(0,0,0)");
            R.onTransitionEnd(a.html.navBarBgDiv, function () {
                for (var c = 0; c < f.length; c++) {
                    var d = f[c];
                    R.setTransition(d, "");
                    R.setTransform(d, "")
                }
                R.setTransition(a.html.navBarBgDiv, "");
                R.setTransform(a.html.navBarBgDiv, "");
                a.nav.setBackgroundColor("");
                a.animating = !1
            })
        }
    }
};
R.Site.prototype.ribbonDragHorizontal = function (a, d) {
    var f = Math.abs(a), f = Math.min(1, f), g, c;
    0 < a ? (g = 0, c = this.colorTransitionNext) : (g = 1, c = this.colorTransitionPrev);
    c && this.ribbon.setColors(c.primary.getColorAtValue(f), c.secondary.getColorAtValue(f));
    this.ribbon.setPullPoint(g);
    this.ribbon.straighten();
    this.ribbon.move(1.2 * -d)
};
R.Site.prototype.setupDribbbleShots = function () {
    for (var a = PAGE_DATA.length - 1; 0 <= a; a--)PAGE_DATA[a].dribbbleProject && (this.dribbbleShots[a] = new DribbbleShots(this.html.pageContentDivs[a].getElementsByClassName("dribbble-shots-inner")[0], PAGE_DATA[a].dribbbleProject, PAGE_DATA[a].colors.dribbble, PAGE_DATA[a].colors.dribbbleCTA, R.scale))
};
R.Site.prototype.loadCurrentDribbleShots = function () {
    this.dribbbleShots[this.pageIndex] && this.dribbbleShots[this.pageIndex].load()
};
R.Site.prototype.onMouseWheel = function (a) {
    var d = a.wheelDeltaX || -a.deltaX, f = a.wheelDeltaY || -a.deltaY, g = Math.abs(d), c = Math.abs(f);
    this.clearMouseWheelSuspension();
    if (0 > this.mouseWheelLastY && f < this.mouseWheelLastY || 0 < this.mouseWheelLastY && f > this.mouseWheelLastY) clearTimeout(this.mouseWheelTimeout), this.mouseWheelSuspended = !1;
    if (0 > this.mouseWheelLastX && d < this.mouseWheelLastX || 0 < this.mouseWheelLastX && d > this.mouseWheelLastX) clearTimeout(this.mouseWheelTimeout), this.mouseWheelSuspended = !1;
    if (0 < f && 0 > this.mouseWheelLastY ||
        0 > f && 0 < this.mouseWheelLastY) clearTimeout(this.mouseWheelTimeout), this.mouseWheelSuspended = !1;
    if (0 < d && 0 > this.mouseWheelLastX || 0 > d && 0 < this.mouseWheelLastX) clearTimeout(this.mouseWheelTimeout), this.mouseWheelSuspended = !1;
    this.mouseWheelLastX = d;
    this.mouseWheelLastY = f;
    0 >= window.pageYOffset && 0 < f && a.preventDefault();
    if (this.animating || this.mouseWheelSuspended)return !0;
    -50 > d && g > c || 50 < d && g > c || (0 > f && c > g && this.contentMode == R.Site.CONTENT_MODE_MASTHEAD && 0 >= window.pageYOffset ? (this.animateToContent(), this.mouseWheelSuspended = !0, this.mouseWheelSpeed = 0) : 0 < f && c > g && this.contentMode == R.Site.CONTENT_MODE_CONTENT && 0 >= window.pageYOffset && (this.animateToMasthead(), this.mouseWheelSuspended = !0, this.mouseWheelSpeed = 0));
    this.mouseWheelSuspended && this.clearMouseWheelSuspension()
};
R.Site.prototype.clearMouseWheelSuspension = function () {
    var a = this;
    clearTimeout(this.mouseWheelTimeout);
    this.mouseWheelTimeout = setTimeout(function () {
        a.mouseWheelSuspended = !1;
        a.mouseWheelSpeed = 0
    }, 60)
};
R.Site.prototype.onKeyDown = function (a) {
    if (!this.animating)if (38 == a.keyCode && this.contentMode == R.Site.CONTENT_MODE_CONTENT && 0 == window.pageYOffset) this.animateToMasthead(); else if (40 == a.keyCode && this.contentMode == R.Site.CONTENT_MODE_MASTHEAD && 0 == window.pageYOffset) this.animateToContent(); else if (39 == a.keyCode && this.pagesLoaded)switch (this.contentMode) {
        case R.Site.CONTENT_MODE_CONTENT:
            this.animateToPageIndex(this.pageIndex + 1, 1, !0);
            break;
        case R.Site.CONTENT_MODE_MASTHEAD:
            this.animateToHeaderIndex(this.pageIndex +
                1, 1, !0)
    } else if (37 == a.keyCode && this.pagesLoaded)switch (this.contentMode) {
        case R.Site.CONTENT_MODE_CONTENT:
            this.animateToPageIndex(this.pageIndex - 1, -1, !0);
            break;
        case R.Site.CONTENT_MODE_MASTHEAD:
            this.animateToHeaderIndex(this.pageIndex - 1, -1, !0)
    }
};
R.Site.prototype.teaseNext = function () {
    var a = this.getSidebarWidth();
    this.nav.teaseNext(a);
    R.setTransition(this.html.siteBodyPageAreaDiv, "transform 300ms ease-out");
    R.setTransform(this.html.siteBodyPageAreaDiv, "translate3d(" + -a + "px,0,0)");
    var a = this.getRealIndex(this.pageIndex + 1), d = PAGE_DATA[a].colors.ribbonPrimary;
    this.html.siteBgDiv.style.backgroundColor = PAGE_DATA[a].colors.primary;
    this.nav.setBackgroundColor(d)
};
R.Site.prototype.teasePrev = function () {
    var a = this.getSidebarWidth();
    this.nav.teasePrev(a);
    R.setTransition(this.html.siteBodyPageAreaDiv, "transform 300ms ease-out");
    R.setTransform(this.html.siteBodyPageAreaDiv, "translate3d(" + a + "px,0,0)");
    var a = this.getRealIndex(this.pageIndex - 1), d = PAGE_DATA[a].colors.ribbonPrimary || "white";
    this.html.siteBgDiv.style.backgroundColor = PAGE_DATA[a].colors.primary || "white";
    this.nav.setBackgroundColor(d)
};
R.Site.prototype.teaseNone = function () {
    R.setTransition(this.html.siteBodyPageAreaDiv, "transform 300ms ease-out");
    R.setTransform(this.html.siteBodyPageAreaDiv, "translate3d(0,0,0)");
    this.nav.teaseNone()
};
R.Site.prototype.nextMouseOver = function (a) {
    this.dragging || this.animating || (this.dragSuspended && (this.dragSuspended = !1), this.teaseNext())
};
R.Site.prototype.nextMouseDown = function (a) {
    this.dragging || this.dragSuspended || this.animating || this.dragContentStart(-this.getSidebarWidth(), a)
};
R.Site.prototype.nextMouseOut = function (a) {
    this.dragging || this.dragSuspended || this.animating || this.teaseNone()
};
R.Site.prototype.prevMouseOver = function (a) {
    this.dragging || this.animating || (this.dragSuspended && (this.dragSuspended = !1), this.teasePrev())
};
R.Site.prototype.prevMouseDown = function (a) {
    this.dragging || this.dragSuspended || this.animating || this.dragContentStart(this.getSidebarWidth(), a)
};
R.Site.prototype.prevMouseOut = function (a) {
    this.dragging || this.dragSuspended || this.animating || this.teaseNone()
};
R.Site.prototype.updateDownArrow = function () {
    this.downArrowTween && this.downArrowTween.stop();
    var a = this.getRealIndex(this.pageIndex);
    768 > window.innerWidth && 0 == a ? (this.html.siteHeadDownArrowLink.style.opacity = 0, this.html.siteHeadDownArrowLink.style.visibility = "hidden", this.downArrowShowing = !1) : (768 > window.innerWidth && 0 != a ? (this.html.siteHeadDownArrowLink.style.opacity = 1, this.html.siteHeadDownArrowLink.style.visibility = "visible") : (this.html.siteHeadDownArrowLink.style.opacity = 1, this.html.siteHeadDownArrowLink.style.visibility =
                ""), this.downArrowShowing = !0)
};
R.Site.prototype.showDownArrow = function (a, d) {
    if (!this.downArrowShowing) {
        this.downArrowShowing = !0;
        this.html.siteHeadDownArrowLink.style.visibility = "visible";
        var f = {val: parseFloat(this.html.siteHeadDownArrowLink.style.opacity)}, g = this;
        this.downArrowTween && this.downArrowTween.stop();
        this.downArrowTween = new Tween(f, a, {
            val: 1, delay: d, onUpdate: function () {
                g.html.siteHeadDownArrowLink.style.opacity = f.val
            }, onComplete: function () {
            }
        })
    }
};
R.Site.prototype.hideDownArrow = function (a, d) {
    if (this.downArrowShowing) {
        this.downArrowShowing = !1;
        var f = {val: parseFloat(this.html.siteHeadDownArrowLink.style.opacity)}, g = this;
        this.downArrowTween && this.downArrowTween.stop();
        this.downArrowTween = new Tween(f, 400, {
            val: 0, delay: d, onUpdate: function () {
                g.html.siteHeadDownArrowLink.style.opacity = f.val
            }, onComplete: function () {
                g.html.siteHeadDownArrowLink.style.visibility = "hidden"
            }
        })
    }
};
R.Site.prototype.updateImages = function () {
    var a = this.html.pageBodyDivs[this.pageIndex];
    this.html.pageBodyImages[this.pageIndex] = a.querySelectorAll("img[data-src]");
    this.html.pageBodyBgDivs[this.pageIndex] = a.querySelectorAll("div[data-src]");
    for (a = 0; a < this.html.pageBodyImages.length; a++)if (a != this.pageIndex) {
        var d = this.html.pageBodyImages[a];
        if (d)for (var f = 0; f < d.length; f++)this.unloadImage(d[f])
    }
    for (a = 0; a < this.html.pageBodyBgDivs.length; a++)if (a != this.pageIndex && (d = this.html.pageBodyBgDivs[a]))for (f =
                                                                                                                               0; f < d.length; f++)this.unloadBgDiv(d[f]);
    this.loadVisibleBgDivs();
    this.loadVisibleImages()
};
R.Site.prototype.unloadImagesForPageIndex = function (a) {
};
R.Site.prototype.loadVisibleImages = function (a) {
    if (a = this.html.pageBodyImages[this.pageIndex])for (var d = 0; d < a.length; d++) {
        var f = a[d];
        if (R.visiblePlus(f, !0)) {
            if (!f.loaded) {
                f.style.opacity = "0";
                var g = f.getAttribute("data-src"), c = f.getAttribute("data-mobile-src");
                768 > window.innerWidth && c && (g = c);
                f.src = g;
                f.onload = function () {
                    R.setTransition(this, "opacity .2s linear");
                    this.style.opacity = "1"
                };
                f.loaded = !0
            }
        } else f.loaded && !f.getAttribute("data-no-unload") && this.unloadImage(f)
    }
};
R.Site.prototype.loadVisibleBgDivs = function (a) {
    if (a = this.html.pageBodyBgDivs[this.pageIndex])for (var d = 0; d < a.length; d++) {
        var f = a[d];
        if (R.visiblePlus(f, !0)) {
            if (!f.loaded) {
                f.style.opacity = "0";
                f.image = new Image;
                f.image.div = f;
                var g = f.getAttribute("data-src"), c = f.getAttribute("data-mobile-src");
                768 > window.innerWidth && c && (g = c);
                f.image.src = g;
                f.image.onload = function () {
                    R.setTransition(this.div, "opacity .2s linear");
                    this.div.style.backgroundImage = "url(" + this.src + ")";
                    this.div.style.opacity = "1"
                };
                f.loaded = !0
            }
        } else f.loaded && !f.getAttribute("data-no-unload") && this.unloadBgDiv(f)
    }
};
R.Site.prototype.unloadImage = function (a) {
    R.setTransition(a, "");
    a.style.opacity = "0";
    a.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    a.loaded = !1;
    a.onload = void 0
};
R.Site.prototype.unloadBgDiv = function (a) {
    R.setTransition(a, "");
    a.style.opacity = "0";
    a.style.backgroundImage = "";
    a.loaded = !1;
    a.image && (a.image.onload = void 0, delete a.image)
};
var SimplexNoise = function (a) {
    void 0 == a && (a = Math);
    this.grad3 = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1], [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]];
    this.p = [];
    for (var d = 0; 256 > d; d++)this.p[d] = Math.floor(256 * a.random());
    this.perm = [];
    for (d = 0; 512 > d; d++)this.perm[d] = this.p[d & 255];
    this.simplex = [[0, 1, 2, 3], [0, 1, 3, 2], [0, 0, 0, 0], [0, 2, 3, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 2, 3, 0], [0, 2, 1, 3], [0, 0, 0, 0], [0, 3, 1, 2], [0, 3, 2, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 3, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
        [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 2, 0, 3], [0, 0, 0, 0], [1, 3, 0, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 3, 0, 1], [2, 3, 1, 0], [1, 0, 2, 3], [1, 0, 3, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 3, 1], [0, 0, 0, 0], [2, 1, 3, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 1, 3], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [3, 0, 1, 2], [3, 0, 2, 1], [0, 0, 0, 0], [3, 1, 2, 0], [2, 1, 0, 3], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [3, 1, 0, 2], [0, 0, 0, 0], [3, 2, 0, 1], [3, 2, 1, 0]]
};
SimplexNoise.prototype.dot = function (a, d, f) {
    return a[0] * d + a[1] * f
};
SimplexNoise.prototype.noise = function (a, d) {
    var f, g, c;
    c = 0.5 * (Math.sqrt(3) - 1);
    c *= a + d;
    var h = Math.floor(a + c), k = Math.floor(d + c), l = (3 - Math.sqrt(3)) / 6;
    c = (h + k) * l;
    f = a - (h - c);
    var n = d - (k - c), p, r;
    f > n ? (p = 1, r = 0) : (p = 0, r = 1);
    g = f - p + l;
    var q = n - r + l;
    c = f - 1 + 2 * l;
    var l = n - 1 + 2 * l, s = h & 255, k = k & 255, h = this.perm[s + this.perm[k]] % 12;
    p = this.perm[s + p + this.perm[k + r]] % 12;
    r = this.perm[s + 1 + this.perm[k + 1]] % 12;
    k = 0.5 - f * f - n * n;
    0 > k ? f = 0 : (k *= k, f = k * k * this.dot(this.grad3[h], f, n));
    n = 0.5 - g * g - q * q;
    0 > n ? g = 0 : (n *= n, g = n * n * this.dot(this.grad3[p], g, q));
    q = 0.5 - c *
        c - l * l;
    0 > q ? c = 0 : (q *= q, c = q * q * this.dot(this.grad3[r], c, l));
    return 70 * (f + g + c)
};
SimplexNoise.prototype.noise3d = function (a, d, f) {
    var g, c, h, k = (a + d + f) * (1 / 3), l = Math.floor(a + k), n = Math.floor(d + k), p = Math.floor(f + k), k = 1 / 6;
    h = (l + n + p) * k;
    g = a - (l - h);
    c = d - (n - h);
    var r = f - (p - h), q, s, w, t, u, v;
    g >= c ? c >= r ? (q = 1, w = s = 0, u = t = 1, v = 0) : (g >= r ? (q = 1, w = s = 0) : (s = q = 0, w = 1), t = 1, u = 0, v = 1) : c < r ? (s = q = 0, w = 1, t = 0, v = u = 1) : g < r ? (q = 0, s = 1, t = w = 0, v = u = 1) : (q = 0, s = 1, w = 0, u = t = 1, v = 0);
    var z = g - q + k, C = c - s + k, D = r - w + k;
    h = g - t + 2 * k;
    a = c - u + 2 * k;
    var F = r - v + 2 * k;
    f = g - 1 + 3 * k;
    d = c - 1 + 3 * k;
    var k = r - 1 + 3 * k, l = l & 255, B = n & 255, G = p & 255, n = this.perm[l + this.perm[B + this.perm[G]]] %
        12, p = this.perm[l + q + this.perm[B + s + this.perm[G + w]]] % 12;
    t = this.perm[l + t + this.perm[B + u + this.perm[G + v]]] % 12;
    l = this.perm[l + 1 + this.perm[B + 1 + this.perm[G + 1]]] % 12;
    u = 0.6 - g * g - c * c - r * r;
    0 > u ? g = 0 : (u *= u, g = u * u * this.dot(this.grad3[n], g, c, r));
    c = 0.6 - z * z - C * C - D * D;
    0 > c ? c = 0 : (c *= c, c = c * c * this.dot(this.grad3[p], z, C, D));
    z = 0.6 - h * h - a * a - F * F;
    0 > z ? h = 0 : (z *= z, h = z * z * this.dot(this.grad3[t], h, a, F));
    a = 0.6 - f * f - d * d - k * k;
    0 > a ? f = 0 : (a *= a, f = a * a * this.dot(this.grad3[l], f, d, k));
    return 32 * (g + c + h + f)
};
var SimplexStepper = function (a) {
    new SimplexNoise;
    var d = new SimplexNoise, f = 0, g = 0, c = 1, h, k = !1;
    this.__construct__ = function (a) {
        a && (c = a)
    };
    this.advance = function () {
        f++;
        g += 0.5 * c * (d.noise(0, f / 100) + 1);
        k = !1
    };
    this.getValue = function () {
        k || (h = 0.5 * (d.noise(1, g / 500) + 1), k = !0);
        return h
    };
    this.__construct__(a)
};
var WeightOption = {STRONGER: 1, NEUTRAL: 0, WEAKER: -1}, WeightedRandom = function (a, d, f) {
    var g = this;
    this.power = 1;
    this.rightModifier = this.leftModifier = WeightOption.NEUTRAL;
    this.random = function () {
        var a = Math.random();
        return g.weightedValue(a)
    };
    this.weightedValue = function (a) {
        if (g.leftModifier == WeightOption.NEUTRAL)return g.rightModifier == WeightOption.NEUTRAL ? a : g.rightModifier == WeightOption.STRONGER ? 1 - Math.pow(1 - a, g.power) : 1 - Math.pow(1 - a, 1 / g.power);
        if (g.rightModifier == WeightOption.NEUTRAL)return g.leftModifier ==
        WeightOption.STRONGER ? Math.pow(a, g.power) : Math.pow(a, 1 / g.power);
        if (0.5 > a)return a *= 2, g.leftModifier == WeightOption.STRONGER ? Math.pow(a, g.power) / 2 : Math.pow(a, 1 / g.power) / 2;
        a = 2 * (a - 0.5);
        a = 1 - a;
        return g.rightModifier == WeightOption.STRONGER ? (1 - Math.pow(a, g.power)) / 2 + 0.5 : (1 - Math.pow(a, 1 / g.power)) / 2 + 0.5
    };
    (function (a, f, d) {
        a && (g.power = a);
        f && (g.leftModifier = f);
        d && (g.rightModifier = d)
    })(a, d, f)
};
var ColorMode = {RGB: 0, HSV: 1, CIELCh: 2}, Color = function (a, d, f, g) {
    var c = this, h = !0, k = !0, l = !0, n = !0, p = !0, r = 0, q = 0, s = 0, w = 0, t = 0, u = 0, v = 0, z = 0, C = 0, D = 0, F = 0, B = 0, G = 0, J = 0, E = 0, M = 1, N, H, P;
    this.logRGB = function () {
        console.log({red: c.getRed(), green: c.getGreen(), blue: c.getBlue()})
    };
    this.logHSV = function () {
        console.log({hue: c.getHue(), saturation: c.getSaturation(), value: c.getValue()})
    };
    this.logCIELCh = function () {
        console.log({l: c.getCIELCh_L(), c: c.getCIELCh_C(), h: c.getCIELCh_H()})
    };
    this.clone = function () {
        p && I();
        return new Color(r,
            q, s, ColorMode.RGB)
    };
    this.getRGBA = function () {
        if (p) {
            I();
            var a = Math.round(r), c = Math.round(q), f = Math.round(s), d = Math.round(1E3 * M) / 1E3;
            N = "rgba(" + a + ", " + c + ", " + f + ", " + d + ")";
            p = !1
        }
        return N
    };
    this.getHex = function () {
        if (n) {
            I();
            var a = Math.round(r), c = Math.round(q), f = Math.round(s);
            P = a = (a << 16) + (c << 8) + f;
            for (a = a.toString(16); 6 > a.length;)a = "0" + a;
            H = "#" + a;
            n = !1
        }
        return H
    };
    this.getHexValue = function () {
        if (n) {
            I();
            var a = Math.round(r), c = Math.round(q), f = Math.round(s);
            P = a = (a << 16) + (c << 8) + f;
            for (a = a.toString(16); 6 > a.length;)a = "0" +
                a;
            H = "#" + a;
            n = !1
        }
        return P
    };
    this.setHex = function (a) {
        I();
        a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, f, d) {
            return c + c + f + f + d + d
        });
        a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        r = parseInt(a[1], 16);
        q = parseInt(a[2], 16);
        s = parseInt(a[3], 16);
        O()
    };
    this.getRed = function () {
        I();
        return r
    };
    this.setRed = function (a) {
        I();
        r = A(a, 0, 255);
        O()
    };
    this.getGreen = function () {
        I();
        return q
    };
    this.setGreen = function (a) {
        I();
        q = A(a, 0, 255);
        O()
    };
    this.getBlue = function () {
        I();
        return s
    };
    this.setBlue = function (a) {
        I();
        s = A(a,
            0, 255);
        O()
    };
    this.getAlpha = function () {
        return M
    };
    this.setAlpha = function (a) {
        M = a;
        p = !0
    };
    this.getHue = function () {
        L();
        return w
    };
    this.setHue = function (a) {
        L();
        w = A(a, 0, 360);
        Q()
    };
    this.getSaturation = function () {
        L();
        return t
    };
    this.setSaturation = function (a) {
        L();
        t = A(a, 0, 100);
        Q()
    };
    this.getValue = function () {
        L();
        return u
    };
    this.setValue = function (a) {
        L();
        u = A(a, 0, 100);
        Q()
    };
    this.getCIELCh_L = function () {
        K();
        return G
    };
    this.setCIELCH_L = function (a) {
        K();
        G = A(a, 0, 100);
        S()
    };
    this.getCIELCh_C = function () {
        K();
        return J
    };
    this.setCIELCH_C =
        function (a) {
            K();
            J = A(a, 0, 100);
            S()
        };
    this.getCIELCh_H = function () {
        K();
        return E
    };
    this.setCIELCH_H = function (a) {
        K();
        E = 360 > a ? a : a - 360;
        S()
    };
    var T = function () {
        var a = w, c = t, f = u, d, g, h, c = c / 100, f = f / 100;
        if (0 == c) d = c = f; else switch (a /= 60, d = Math.floor(a), g = a - d, a = f * (1 - c), h = f * (1 - c * g), g = f * (1 - c * (1 - g)), d) {
            case 0:
                d = f;
                c = g;
                f = a;
                break;
            case 1:
                d = h;
                c = f;
                f = a;
                break;
            case 2:
                d = a;
                c = f;
                f = g;
                break;
            case 3:
                d = a;
                c = h;
                break;
            case 4:
                d = g;
                c = a;
                break;
            default:
                d = f, c = a, f = h
        }
        r = A(255 * d, 0, 255);
        q = A(255 * c, 0, 255);
        s = A(255 * f, 0, 255)
    }, U = function () {
        var a = r, c = q, f = s, d = Math.min(a,
            c, f), g = Math.max(a, c, f), d = g - d, h = g, k = g;
        0 != g && (k = 100 * (d / g), h = 60 * (a == g ? (c - f) / d : c == g ? 2 + (f - a) / d : 4 + (a - c) / d), 0 > h && (h += 360));
        w = h;
        t = k;
        u = 100 * (g / 255)
    }, V = function () {
        var a = r / 255, c = q / 255, f = s / 255, a = 0.04045 < a ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92, c = 0.04045 < c ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92, f = 0.04045 < f ? Math.pow((f + 0.055) / 1.055, 2.4) : f / 12.92, a = 100 * a, c = 100 * c, f = 100 * f;
        v = 0.4124 * a + 0.3576 * c + 0.1805 * f;
        z = 0.2126 * a + 0.7152 * c + 0.0722 * f;
        C = 0.0193 * a + 0.1192 * c + 0.9505 * f
    }, W = function () {
        var a = v / 95.047, c = z / 100, f = C / 108.883, a = 0.008856 <
        a ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, c = 0.008856 < c ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, f = 0.008856 < f ? Math.pow(f, 1 / 3) : 7.787 * f + 16 / 116;
        D = 0.008856 < c ? 116 * c - 16 : 903.3 * c;
        F = 500 * (a - c);
        B = 200 * (c - f)
    }, X = function () {
        var a = Math.atan2(B, F), a = 0 < a ? 180 * (a / Math.PI) : 360 - 180 * (Math.abs(a) / Math.PI);
        G = D;
        J = Math.sqrt(Math.pow(F, 2) + Math.pow(B, 2));
        E = 360 > a ? a : a - 360
    }, Y = function () {
        var a = G, c = E * (Math.PI / 180), f = Math.cos(c) * J, c = Math.sin(c) * J;
        D = a;
        F = f;
        B = c
    }, Z = function () {
        var a = (D + 16) / 116, c = F / 500 + a, f = a - B / 200, a = 0.008856 < Math.pow(a, 3) ? Math.pow(a, 3) : (a -
            16 / 116) / 7.787, c = 0.008856 < Math.pow(c, 3) ? Math.pow(c, 3) : (c - 16 / 116) / 7.787, f = 0.008856 < Math.pow(f, 3) ? Math.pow(f, 3) : (f - 16 / 116) / 7.787;
        v = 95.047 * c;
        z = 100 * a;
        C = 108.883 * f
    }, $ = function () {
        var a = v / 100, c = z / 100, f = C / 100, d = 3.2406 * a + -1.5372 * c + -0.4986 * f, g = -0.9689 * a + 1.8758 * c + 0.0415 * f, a = 0.0557 * a + -0.204 * c + 1.057 * f, d = 0.0031308 < d ? 1.055 * Math.pow(d, 1 / 2.4) - 0.055 : 12.92 * d, g = 0.0031308 < g ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : 12.92 * g, a = 0.0031308 < a ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : 12.92 * a;
        r = A(255 * d, 0, 255);
        q = A(255 * g, 0, 255);
        s = A(255 * a, 0, 255)
    }, I = function () {
        h &&
        (k ? l || (Y(), Z(), $()) : T(), h = !1)
    }, L = function () {
        k && (h ? l || (Y(), Z(), $(), U()) : U(), k = !1)
    }, K = function () {
        l && (k ? h || (V(), W(), X()) : (T(), V(), W(), X()), l = !1)
    }, O = function () {
        p = n = l = k = !0
    }, Q = function () {
        p = n = l = h = !0
    }, S = function () {
        p = n = k = h = !0
    }, A = function (a, c, f) {
        return Math.min(f, Math.max(c, a))
    };
    (function (a, f, d, g) {
        g || (g = ColorMode.RGB);
        "string" == typeof a ? c.setHex(a) : g == ColorMode.RGB ? (a && (r = A(a, 0, 255)), f && (q = A(f, 0, 255)), d && (s = A(d, 0, 255)), h = !1) : g == ColorMode.HSV ? (a && (w = A(a, 0, 360)), f && (t = A(f, 0, 100)), d && (u = A(d, 0, 100)), k = !1) : g == ColorMode.CIELCh &&
                    (a && (G = a), f && (J = f), d && (E = 360 > d ? d : d - 360), l = !1)
    })(a, d, f, g)
};
var ColorTransition = function (a, d, f) {
    var g = [], c;
    this.getColorAtValue = function (a) {
        var f = 1 / (c + 1), d = Math.floor(a / f), n = Math.ceil(a / f);
        if (d == n)return a = g[d], new Color(a.getRed(), a.getGreen(), a.getBlue());
        a = (a - d * f) / f;
        var d = g[d], p = g[n], n = d.getRed() + (p.getRed() - d.getRed()) * a, f = d.getGreen() + (p.getGreen() - d.getGreen()) * a;
        a = d.getBlue() + (p.getBlue() - d.getBlue()) * a;
        return new Color(n, f, a)
    };
    (function (a, f, d) {
        a || (a = new Color);
        f || (f = new Color);
        d || (d = 5);
        c = d;
        g.push(a);
        d = f.getCIELCh_H();
        var n = a.getCIELCh_H(), p = d - n;
        180 <
        Math.abs(p) && (0 < p ? n += 360 : d += 360);
        for (var p = 1 / (c + 1), r = 0; r < c; r++) {
            var q = (r + 1) * p, s = a.getCIELCh_L() + (f.getCIELCh_L() - a.getCIELCh_L()) * q, w = a.getCIELCh_C() + (f.getCIELCh_C() - a.getCIELCh_C()) * q, q = new Color(s, w, n + (d - n) * q, ColorMode.CIELCh);
            g.push(q)
        }
        g.push(f)
    })(a, d, f)
};
var Point2D = function (a, d) {
    this.x = a ? a : 0;
    this.y = d ? d : 0;
    this.rotate = function (a) {
        var d = this.x * Math.cos(a) - this.y * Math.sin(a);
        a = this.x * Math.sin(a) + this.y * Math.cos(a);
        this.x = d;
        this.y = a
    };
    this.rotateAround = function (a, d) {
        d = d || {x: 0, y: 0};
        var c = Math.cos, h = Math.sin;
        this.x = c(a) * (this.x - d.x) - h(a) * (this.y - d.y) + d.x;
        this.y = h(a) * (this.x - d.x) + c(a) * (this.y - d.y) + d.y
    };
    this.translate = function (a, d) {
        this.x += a;
        this.y += d
    };
    this.scaleX = function (a) {
        this.x *= a
    };
    this.scaleY = function (a) {
        this.y *= a
    };
    this.scale = function (a) {
        this.x *= a;
        this.y *=
            a
    }
};
var Point3D = function () {
    this.z = this.y = this.x = 0
};
var Polygon3D = function () {
    var a = this, d = 4;
    this.color = null;
    this.__construct__ = function () {
        a.points = [new Point3D, new Point3D, new Point3D, new Point3D]
    };
    this.setVerticesLength = function (f) {
        for (; d < f;)a.points.push(new Point3D), d++;
        for (; d > f;)a.points.pop(), d--
    };
    this.getVerticesLength = function () {
        return d
    };
    this.__construct__()
};
var Flat3dSetup = function (a, d) {
    var f = this, g = [], c, h, k, l, n = 0;
    this.yOffset = 0;
    this.scale = 1;
    this.shouldClear = !0;
    this.__construct__ = function (a, d) {
        c = a;
        h = c.getContext("2d");
        d || (d = 1);
        f.scale = d;
        k = c.clientWidth * d;
        l = c.clientHeight * d;
        Math.max(k, l);
        Math.tan(62.5 / 180 * Math.PI);
        new Point2D(k / 2, 0)
    };
    this.addPolygonAtDepth = function (a, c) {
        a && (c || (c = 0), n = Math.max(n, c), g[c] || (g[c] = []), g[c].push(a))
    };
    this.removePolygon = function (a) {
        for (var c = n; 0 <= c; c--)if (g[c]) {
            var f = g[c].indexOf(a);
            -1 != f && g[c].splice(f, 1)
        }
    };
    this.clear = function () {
        f.shouldClear &&
        h.clearRect(0, 0, k, l)
    };
    this.draw = function () {
        f.shouldClear && h.clearRect(0, 0, k, l);
        for (var a = n; 0 <= a; a--)if (g[a])for (var c = 0; c < g[a].length; c++) {
            var d = g[a][c], s = d.points;
            h.fillStyle = d.color.getRGBA();
            h.beginPath();
            h.moveTo(s[0].x * f.scale, s[0].y * f.scale + l / 2 - f.yOffset * f.scale);
            for (var d = d.getVerticesLength(), w = 1; w < d; w++)h.lineTo(s[w].x * f.scale, s[w].y * f.scale + l / 2 - f.yOffset * f.scale);
            h.lineTo(s[0].x * f.scale, s[0].y * f.scale + l / 2 - f.yOffset * f.scale);
            h.fill();
            h.closePath()
        }
    };
    this.resetSize = function () {
        k = c.clientWidth *
            f.scale;
        l = c.clientHeight * f.scale
    };
    this.__construct__(a, d)
};
var DrawStyle = {LINE: 0, CANVAS_RIBBON: 1, DOM_RIBBON: 2}, Ribbon = function (a, d, f, g) {
    var c = this;
    c.drawStyle = DrawStyle.CANVAS_RIBBON;
    c.fullRibbonWidth = 136;
    c.collapsedRibbonWidth = 70;
    c.width = c.fullRibbonWidth;
    c.pullStrength = 0;
    c.pullSpread = 0;
    c.drivePoint = 0.5;
    c.straightenStrength = 0;
    c.verticalPosition = 0.5;
    c.positionDamping = 0;
    c.canDestruct = !0;
    c.idleSpeed = 0.3;
    c.speed = c.idleSpeed;
    var h, k, l = {}, n = null, p = null, r = 0, q = 1, s = null, w = 0;
    this.yOffsetForce = this.yOffset = 0;
    c.primaryColor = null;
    var t = c.secondaryColor = null, u = null;
    c.setShouldClear =
        function (a) {
            t && (t.shouldClear = a)
        };
    c.clearCanvas = function () {
        t.clear()
    };
    c.setWidth = function (a, f) {
        c.fullRibbonWidth = a;
        c.collapsedRibbonWidth = f;
        c.width = a;
        q = a / 136;
        for (var d = n; d;)d.setLengthMultiplier(q), d = d.nextSegment
    };
    c.advance = function () {
        c.move(c.speed);
        var a = z(c.drivePoint), f = function (a, c) {
            a.setColor();
            a.advance();
            a.applyForces(c)
        };
        f(a, SegmentAnchorPoint.CENTER);
        for (var d = a.previousSegment; d;)f(d, SegmentAnchorPoint.END), d = d.previousSegment;
        for (d = a.nextSegment; d;)f(d, SegmentAnchorPoint.START), d = d.nextSegment;
        if (c.drawStyle == DrawStyle.CANVAS_RIBBON)for (d = n; d;)d.resetPolygon(), d = d.nextSegment
    };
    c.draw = function () {
        var a = C(), f = 5E-4 * (a - c.yOffset);
        c.yOffsetForce *= 0.95;
        c.yOffsetForce += f;
        var f = l.height * Math.pow(1 - c.positionDamping, 2), d = c.yOffset + c.yOffsetForce;
        Math.abs(a - d) > f / 2 && (d += ((0 < a - d ? a - f / 2 : a + f / 2) - d) * Math.max((c.positionDamping - 0.1) / 0.9, 0), c.yOffsetForce = d - c.yOffset);
        c.yOffset = d;
        if (c.drawStyle == DrawStyle.LINE) {
            k.clearRect(0, 0, l.width, l.height);
            k.strokeStyle = "#000000";
            k.beginPath();
            a = n;
            for (k.moveTo(a.startPoint.x,
                l.height / 2 + a.startPoint.y - c.yOffset); a;)k.lineTo(a.endPoint.x, l.height / 2 + a.endPoint.y - c.yOffset), a = a.nextSegment;
            k.stroke();
            k.closePath();
            for (a = n; a;)k.fillStyle = "#FF0000", k.beginPath(), k.arc(a.endPoint.x, l.height / 2 + a.endPoint.y - c.yOffset, 5, 0, 2 * Math.PI), k.fill(), k.closePath(), a = a.nextSegment
        } else c.drawStyle == DrawStyle.CANVAS_RIBBON ? (t.yOffset = c.yOffset, t.draw()) : c.drawStyle == DrawStyle.DOM_RIBBON && (u.yOffset = -c.yOffset + l.height / 2, u.update())
    };
    c.move = function (a) {
        for (var f = n; f;)f.move(a), f = f.nextSegment;
        c.canDestruct && c.destroySegments();
        c.createSegments()
    };
    c.straighten = function () {
        c.straightenStrength = Math.max(Math.min(c.straightenStrength, 1), 0);
        c.width = c.collapsedRibbonWidth + (c.fullRibbonWidth - c.collapsedRibbonWidth) * (1 - c.straightenStrength);
        var a;
        a = s ? s : z(0.5);
        a.width = c.width;
        a.straightenStrength = Math.min(c.straightenStrength + c.pullStrength, 1);
        a.applyForces(SegmentAnchorPoint.CENTER);
        for (var f = a.nextSegment, d; f;) {
            f.width = c.width;
            d = 1;
            if (0 < c.pullSpread) {
                d = f.distanceFromSegment(a, SearchDirection.LEFT) /
                    (1 * w);
                var g = 2 * c.pullSpread, h = 2 * g;
                d = d < g ? 1 : d > h ? 0 : 1 - (d - g) / (h - g)
            }
            d *= c.pullStrength;
            f.straightenStrength = Math.min(c.straightenStrength + d, 1);
            f.applyForces(SegmentAnchorPoint.START);
            f = f.nextSegment
        }
        for (f = a.previousSegment; f;)f.width = c.width, d = 1, 0 < c.pullSpread && (d = f.distanceFromSegment(a, SearchDirection.RIGHT) / (1 * w), g = 2 * c.pullSpread, h = 2 * g, d = d < g ? 1 : d > h ? 0 : 1 - (d - g) / (h - g)), d *= c.pullStrength, f.straightenStrength = Math.min(c.straightenStrength + d, 1), f.applyForces(SegmentAnchorPoint.END), f = f.previousSegment
    };
    c.setPullPoint =
        function (a) {
            s = z(a);
            w = r
        };
    c.clearPullPoint = function () {
        s = null
    };
    c.destroySegments = function () {
        for (; -800 > n.endPoint.x;)t && t.removePolygon(n.polygon), u && u.removeSegment(n), r -= n.segmentLength, n = n.nextSegment, n.previousSegment = null;
        for (; p.startPoint.x > l.width + 800;)t && t.removePolygon(p.polygon), u && u.removeSegment(p), r -= p.segmentLength, p = p.previousSegment, p.nextSegment = null
    };
    c.createSegments = function () {
        for (var a = [], f = !1; -600 < n.startPoint.x;) {
            n = new RibbonSegment(n, c.primaryColor, c.secondaryColor, f);
            n.setLengthMultiplier(q);
            a.push(n);
            for (var d = 0; D(n) && 5 > d;) {
                d++;
                n = a[0].nextSegment;
                n.previousSegment = null;
                if (t)for (var g = a.length, h = 0; h < g; h++)t.removePolygon(a[h].polygon);
                if (u)for (g = a.length, h = 0; h < g; h++)u.removeSegment(a[h]);
                a = [];
                n = new RibbonSegment(n, c.primaryColor, c.secondaryColor, !0);
                n.setLengthMultiplier(q);
                a.push(n)
            }
            r += n.segmentLength;
            n.width = c.width;
            n.straightenStrength = Math.max(n.nextSegment.straightenStrength, c.pullStrength);
            n.applyForces(SegmentAnchorPoint.END);
            t && v(n);
            u && u.addSegment(n)
        }
        a = [];
        for (f = !1; p.endPoint.x <
        l.width + 600;) {
            p = new RibbonSegment(p, c.primaryColor, c.secondaryColor, f);
            p.setLengthMultiplier(q);
            a.push(p);
            for (d = 0; D(p) && 5 > d;) {
                d++;
                p = a[0].previousSegment;
                p.nextSegment = null;
                if (t)for (g = a.length, h = 0; h < g; h++)t.removePolygon(a[h].polygon);
                if (u)for (g = a.length, h = 0; h < g; h++)u.removeSegment(a[h]);
                a = [];
                p = new RibbonSegment(p, c.primaryColor, c.secondaryColor, !0);
                p.setLengthMultiplier(q);
                a.push(p)
            }
            r += p.segmentLength;
            p.width = c.width;
            p.straightenStrength = Math.max(p.previousSegment.straightenStrength, c.pullStrength);
            p.applyForces(SegmentAnchorPoint.START);
            t && v(p);
            u && u.addSegment(p)
        }
    };
    c.resetSize = function () {
        l.width = h.clientWidth;
        l.height = h.clientHeight;
        t && t.resetSize()
    };
    c.setColors = function (a, f) {
        c.primaryColor.setRed(a.getRed());
        c.primaryColor.setGreen(a.getGreen());
        c.primaryColor.setBlue(a.getBlue());
        c.secondaryColor.setRed(f.getRed());
        c.secondaryColor.setGreen(f.getGreen());
        c.secondaryColor.setBlue(f.getBlue())
    };
    c.secondaryColorFromPrimaryColor = function (a) {
        return new Color(a.getHue(), a.getSaturation() + 7, a.getValue() -
            19, ColorMode.HSV)
    };
    c.getCurrentVerticalPosition = function () {
        for (var a = 0, f = 0, d = n; d;)a++, f += d.startPoint.y, f += d.endPoint.y, d = d.nextSegment;
        return (f / (2 * a) - c.yOffset + l.height / 2 - c.width / 2) / (l.height - c.width)
    };
    var v = function (a) {
        a.backface ? t.addPolygonAtDepth(a.polygon, 1) : t.addPolygonAtDepth(a.polygon, 0)
    }, z = function (a) {
        for (var c = n; c;) {
            if (c.endPoint.x / l.width > a || !c.nextSegment)return c;
            c = c.nextSegment
        }
    }, C = function () {
        for (var a = 0, f = 0, d = n; d;)a++, f += d.startPoint.y, f += d.endPoint.y, d = d.nextSegment;
        return f / (2 * a) +
            (0.5 - c.verticalPosition) * (l.height - c.width)
    }, D = function (a) {
        var c;
        c = a.nextSegment ? 0 : 1;
        var f;
        f = 0 == c ? a.nextSegment.nextSegment : a.previousSegment.previousSegment;
        for (var d = 0; f && 6 > d;) {
            var g;
            g = a.originalStartPoint;
            var h = a.originalEndPoint, k = f.originalStartPoint, n = f.originalEndPoint, p = B(h, g), l = B(n, k), r = F(B(k, g), p), p = F(p, l);
            0 == r && 0 == p ? g = 0 > k.x - g.x != 0 > k.x - h.x != 0 > n.x - g.x != 0 > n.x - h.x || 0 > k.y - g.y != 0 > k.y - h.y != 0 > n.y - g.y != 0 > n.y - h.y : 0 == p ? g = !1 : (h = r / p, g = F(B(k, g), l) / p, g = 0 <= g && 1 >= g && 0 <= h && 1 >= h);
            if (g)return !0;
            f = 0 == c ? f.nextSegment :
                f.previousSegment;
            d++
        }
        return !1
    }, F = function (a, c) {
        return a.x * c.y - a.y * c.x
    }, B = function (a, c) {
        var f = {};
        f.x = a.x - c.x;
        f.y = a.y - c.y;
        return f
    };
    (function (a, f, d, g) {
        h = a;
        h.getContext && (k = h.getContext("2d"));
        g || (g = 1);
        l.width = h.clientWidth;
        l.height = h.clientHeight;
        f && f.substr ? c.primaryColor = new Color(f) : f ? c.primaryColor = f : (c.primaryColor = new Color(255 * Math.random(), 255 * Math.random(), 255 * Math.random()), 20 > c.primaryColor.getValue() && c.primaryColor.setValue(20));
        c.secondaryColor = d && d.substr ? new Color(d) : d ? d : c.secondaryColorFromPrimaryColor(c.primaryColor);
        c.drawStyle == DrawStyle.CANVAS_RIBBON && (t = new Flat3dSetup(h, g));
        c.drawStyle == DrawStyle.DOM_RIBBON && (u = new RibbonDOMHolder(h));
        n = new RibbonSegment(null, c.primaryColor, c.secondaryColor);
        n.setLengthMultiplier(q);
        p = n;
        r += n.segmentLength;
        a = n;
        t && v(a);
        u && u.addSegment(a);
        c.createSegments();
        c.yOffset = C();
        0.5 < Math.random() && (c.speed *= -1)
    })(a, d, f, g)
};
var segmentMinimumLength = 300, segmentMaximumLength = 700, AllowedDirection = {
    ANY: 0,
    UP: 1,
    DOWN: 2
}, SegmentAnchorPoint = {START: 0, CENTER: 1, END: 2}, SearchDirection = {
    LEFT: 0,
    RIGHT: 1
}, oneSidedWeightedRandom = new WeightedRandom(1.5, WeightOption.NEUTRAL, WeightOption.STRONGER), twoSidedWeightedRandom = new WeightedRandom(1.5, WeightOption.STRONGER, WeightOption.STRONGER), degToRad = Math.PI / 180, RibbonSegment = function (a, d, f, g) {
    var c = this;
    c.previousSegment = null;
    c.nextSegment = null;
    c.backface = !1;
    c.startPoint = {};
    c.endPoint = {};
    c.width =
        136;
    c.segmentLength = 0;
    c.originalStartPoint = {};
    c.originalEndPoint = {};
    c.straightenStrength = 0;
    c.simplexStepper = new SimplexStepper(0.6);
    c.polygon = new Polygon3D;
    c.primaryColor = d;
    c.secondaryColor = f;
    c.color = d;
    var h = 20, k = 1;
    this.move = function (a) {
        c.startPoint.x -= a;
        c.endPoint.x -= a
    };
    this.advance = function () {
        c.simplexStepper.advance()
    };
    this.applyForces = function (a) {
        var f = c.getCurrentAngle(), d = Math.cos(f * degToRad), f = Math.sin(f * degToRad);
        if (a == SegmentAnchorPoint.CENTER) {
            var g;
            a = (c.startPoint.x + c.endPoint.x) / 2;
            g = (c.startPoint.y +
                c.endPoint.y) / 2;
            c.endPoint.x = a + c.segmentLength / 2 * d;
            c.endPoint.y = g + c.segmentLength / 2 * f;
            c.startPoint.x = a - c.segmentLength / 2 * d;
            c.startPoint.y = g - c.segmentLength / 2 * f
        } else a == SegmentAnchorPoint.START ? (c.previousSegment && (c.startPoint.x = c.previousSegment.endPoint.x, c.startPoint.y = c.previousSegment.endPoint.y), c.endPoint.x = c.startPoint.x + c.segmentLength * d, c.endPoint.y = c.startPoint.y + c.segmentLength * f) : (c.nextSegment && (c.endPoint.x = c.nextSegment.startPoint.x, c.endPoint.y = c.nextSegment.startPoint.y), c.startPoint.x =
                c.endPoint.x - c.segmentLength * d, c.startPoint.y = c.endPoint.y - c.segmentLength * f)
    };
    c.setColor = function () {
        if (c.backface) {
            var a = 360, f = c.getCurrentAngle();
            c.previousSegment && (a = Math.min(a, Math.abs(f - c.previousSegment.getCurrentAngle())));
            c.nextSegment && (a = Math.min(a, Math.abs(c.nextSegment.getCurrentAngle() - f)));
            a = Math.min(Math.max(a - 30, 0) / 10, 1);
            c.color.setRed(c.primaryColor.getRed() + (c.secondaryColor.getRed() - c.primaryColor.getRed()) * a);
            c.color.setGreen(c.primaryColor.getGreen() + (c.secondaryColor.getGreen() -
                c.primaryColor.getGreen()) * a);
            c.color.setBlue(c.primaryColor.getBlue() + (c.secondaryColor.getBlue() - c.primaryColor.getBlue()) * a)
        }
    };
    c.getCurrentAngle = function () {
        var a = -(h / 2) + h * c.simplexStepper.getValue();
        return (c.primaryAngle + a) * (1 - c.straightenStrength)
    };
    c.resetPolygon = function () {
        var a = c.getCurrentAngle(), f = a - 180;
        -180 > f && (f += 360);
        var d = f - 90, g = f + 90, h = a - 90, k = a + 90, l = 0;
        if (c.previousSegment) {
            var u = c.previousSegment.getCurrentAngle(), g = a - u, v = Math.abs(g);
            45 < v ? (l = (u + a) / 2, f = a - 180, -180 > f && (f += 360), d = c.width /
                    2 / Math.cos((f + 90 - l) * degToRad), c.polygon.points[0].x = c.startPoint.x - d * Math.cos(l * degToRad), c.polygon.points[0].y = c.startPoint.y - d * Math.sin(l * degToRad), c.polygon.points[0].z = c.startPoint.z, c.polygon.points[1].x = c.startPoint.x + d * Math.cos(l * degToRad), c.polygon.points[1].y = c.startPoint.y + d * Math.sin(l * degToRad), c.polygon.points[1].z = c.startPoint.z, l = 2) : 30 < v ? (l = (u + a) / 2, f = a - 180, -180 > f && (f += 360), d = c.width / 2 / Math.cos((f + 90 - l) * degToRad), c.polygon.points[0].x = c.startPoint.x - d * Math.cos(l * degToRad), c.polygon.points[0].y =
                        c.startPoint.y - d * Math.sin(l * degToRad), c.polygon.points[0].z = c.startPoint.z, c.polygon.points[2].x = c.startPoint.x + d * Math.cos(l * degToRad), c.polygon.points[2].y = c.startPoint.y + d * Math.sin(l * degToRad), c.polygon.points[2].z = c.startPoint.z, d = 1 - (v - 30) / 15, l = (a + u) / 2 + 90, 180 < l && (l -= 360), f = a - 180, -180 > f && (f += 360), d *= c.width / 2 / Math.cos((l - (f + 90)) * degToRad), 0 < g ? (c.polygon.points[1].x = c.startPoint.x + d * Math.cos(l * degToRad), c.polygon.points[1].y = c.startPoint.y + d * Math.sin(l * degToRad)) : (c.polygon.points[1].x = c.startPoint.x -
                            d * Math.cos(l * degToRad), c.polygon.points[1].y = c.startPoint.y - d * Math.sin(l * degToRad)), c.polygon.points[1].z = c.startPoint.z, l = 3) : (l = (a + u) / 2 + 90, 180 < l && (l -= 360), f = a - 180, -180 > f && (f += 360), d = c.width / 2 / Math.cos((l - (f + 90)) * degToRad), g = c.startPoint.x - 0.5 * Math.cos(a * degToRad), v = c.startPoint.y - 0.5 * Math.sin(a * degToRad), f = c.startPoint.z, c.polygon.points[0].x = g - d * Math.cos(l * degToRad), c.polygon.points[0].y = v - d * Math.sin(l * degToRad), c.polygon.points[0].z = f, c.polygon.points[1].x = g + d * Math.cos(l * degToRad), c.polygon.points[1].y =
                        v + d * Math.sin(l * degToRad), c.polygon.points[1].z = f, l = 2)
        } else c.polygon.points[0].x = c.startPoint.x + c.width / 2 * Math.cos(d * degToRad), c.polygon.points[0].y = c.startPoint.y + c.width / 2 * Math.sin(d * degToRad), c.polygon.points[0].z = c.startPoint.z, c.polygon.points[1].x = c.startPoint.x + c.width / 2 * Math.cos(g * degToRad), c.polygon.points[1].y = c.startPoint.y + c.width / 2 * Math.sin(g * degToRad), c.polygon.points[1].z = c.startPoint.z, l = 2;
        c.nextSegment ? (k = c.nextSegment.getCurrentAngle(), g = k - a, v = Math.abs(g), 45 < v ? (c.polygon.setVerticesLength(l +
                    2), h = (a + k) / 2, d = c.width / 2 / Math.cos((a + 90 - h) * degToRad), c.polygon.points[l].x = c.endPoint.x - d * Math.cos(h * degToRad), c.polygon.points[l].y = c.endPoint.y - d * Math.sin(h * degToRad), c.polygon.points[l].z = c.endPoint.z, c.polygon.points[l + 1].x = c.endPoint.x + d * Math.cos(h * degToRad), c.polygon.points[l + 1].y = c.endPoint.y + d * Math.sin(h * degToRad), c.polygon.points[l + 1].z = c.endPoint.z) : 30 < v ? (c.polygon.setVerticesLength(l + 3), h = (a + k) / 2, d = c.width / 2 / Math.cos((a + 90 - h) * degToRad), c.polygon.points[l].x = c.endPoint.x - d * Math.cos(h * degToRad),
                        c.polygon.points[l].y = c.endPoint.y - d * Math.sin(h * degToRad), c.polygon.points[l].z = c.endPoint.z, c.polygon.points[l + 2].x = c.endPoint.x + d * Math.cos(h * degToRad), c.polygon.points[l + 2].y = c.endPoint.y + d * Math.sin(h * degToRad), c.polygon.points[l + 2].z = c.endPoint.z, d = 1 - (v - 30) / 15, h = (a + k) / 2 + 90, 180 < h && (h -= 360), d *= c.width / 2 / Math.cos((h - (a + 90)) * degToRad), 0 < g ? (c.polygon.points[l + 1].x = c.endPoint.x - d * Math.cos(h * degToRad), c.polygon.points[l + 1].y = c.endPoint.y - d * Math.sin(h * degToRad)) : (c.polygon.points[l + 1].x = c.endPoint.x + d *
                            Math.cos(h * degToRad), c.polygon.points[l + 1].y = c.endPoint.y + d * Math.sin(h * degToRad)), c.polygon.points[l + 1].z = c.startPoint.z) : (c.polygon.setVerticesLength(l + 2), h = (a + k) / 2 + 90, 180 < h && (h -= 360), d = c.width / 2 / Math.cos((h - (a + 90)) * degToRad), k = c.endPoint.x + 0.5 * Math.cos(a * degToRad), a = c.endPoint.y + 0.5 * Math.sin(a * degToRad), g = c.endPoint.z, c.polygon.points[l].x = k - d * Math.cos(h * degToRad), c.polygon.points[l].y = a - d * Math.sin(h * degToRad), c.polygon.points[l].z = g, c.polygon.points[l + 1].x = k + d * Math.cos(h * degToRad), c.polygon.points[l +
                    1].y = a + d * Math.sin(h * degToRad), c.polygon.points[l + 1].z = g)) : (c.polygon.setVerticesLength(l + 2), c.polygon.points[l].x = c.endPoint.x + c.width / 2 * Math.cos(h * degToRad), c.polygon.points[l].y = c.endPoint.y + c.width / 2 * Math.sin(h * degToRad), c.polygon.points[l].z = c.endPoint.z, c.polygon.points[l + 1].x = c.endPoint.x + c.width / 2 * Math.cos(k * degToRad), c.polygon.points[l + 1].y = c.endPoint.y + c.width / 2 * Math.sin(k * degToRad), c.polygon.points[l + 1].z = c.endPoint.z)
    };
    c.distanceFromSegment = function (a, f) {
        var d = 0;
        if (a == c)return d;
        var g;
        if (f == SearchDirection.LEFT)for (g = c.previousSegment; g && g != a;)d += g.segmentLength, g = g.previousSegment; else for (g = c.nextSegment; g && g != a;)d += g.segmentLength, g = g.nextSegment;
        return d += a.segmentLength / 2
    };
    c.getStartEndCapLength = function () {
        if (c.previousSegment) {
            var a = c.getCurrentAngle(), f = c.previousSegment.getCurrentAngle();
            if (45 < Math.abs(a - f)) {
                var d = a - 180;
                -180 > d && (d += 360);
                return Math.abs(Math.tan((d + 90 - (f + a) / 2) * degToRad) * (c.width / 2))
            }
        }
        return 0
    };
    c.getEndEndCapLength = function () {
        if (c.nextSegment) {
            var a = c.getCurrentAngle(),
                f = c.nextSegment.getCurrentAngle();
            if (45 < Math.abs(f - a))return Math.abs(Math.tan((a + 90 - (a + f) / 2) * degToRad) * (c.width / 2))
        }
        return 0
    };
    c.setLengthMultiplier = function (a) {
        newMultiplier = a / k;
        k = a;
        c.segmentLength *= newMultiplier
    };
    var l = function (a, c, f) {
        return f == AllowedDirection.UP ? -Math.abs(oneSidedWeightedRandom.random() * a) : f == AllowedDirection.DOWN ? Math.abs(oneSidedWeightedRandom.random() * c) : a + twoSidedWeightedRandom.random() * (c - a)
    };
    (function (a, f) {
        for (var d = "", g = 32; 0 < g; --g)d += "0123456789abcdefghijklmnopqrstuvwxyz"[Math.round(35 *
            Math.random())];
        c.identifier = d;
        a && (c.backface = !a.backface, c.backface && (c.color = new Color(0, 0, 0), h /= 2));
        c.polygon.color = c.color;
        a && a.nextSegment && !a.previousSegment ? (c.nextSegment = a, c.nextSegment.previousSegment = c, c.endPoint.x = c.nextSegment.startPoint.x, c.endPoint.y = c.nextSegment.startPoint.y, c.endPoint.z = c.nextSegment.startPoint.z, c.originalEndPoint.x = c.nextSegment.originalStartPoint.x, c.originalEndPoint.y = c.nextSegment.originalStartPoint.y, c.originalEndPoint.z = c.nextSegment.originalStartPoint.z) :
            a ? (c.previousSegment = a, c.previousSegment.nextSegment = c, c.startPoint.x = c.previousSegment.endPoint.x, c.startPoint.y = c.previousSegment.endPoint.y, c.startPoint.z = c.previousSegment.endPoint.z, c.originalStartPoint.x = c.previousSegment.originalEndPoint.x, c.originalStartPoint.y = c.previousSegment.originalEndPoint.y, c.originalStartPoint.z = c.previousSegment.originalEndPoint.z) : (c.startPoint.x = -700, c.startPoint.y = 0, c.startPoint.z = 0, c.originalStartPoint.x = c.startPoint.x, c.originalStartPoint.y = c.startPoint.y, c.originalStartPoint.z =
                    c.startPoint.z);
        d = AllowedDirection.ANY;
        f || (c.previousSegment ? (100 <= c.originalStartPoint.y && (d = AllowedDirection.UP), -100 >= c.originalStartPoint.y && (d = AllowedDirection.DOWN)) : c.nextSegment && (100 <= c.originalEndPoint.y && (d = AllowedDirection.DOWN), -100 >= c.originalEndPoint.y && (d = AllowedDirection.UP)));
        c.previousSegment ? (c.primaryAngle = -30 < c.previousSegment.primaryAngle && 30 > c.previousSegment.primaryAngle ? l(-130, 130, d) : -90 < c.previousSegment.primaryAngle && 90 > c.previousSegment.primaryAngle ? l(-60, 60, d) : -90 >= c.previousSegment.primaryAngle ?
                        l(c.previousSegment.primaryAngle + 90 - 45, c.previousSegment.primaryAngle + 90 + 45, d) : l(c.previousSegment.primaryAngle - 90 - 45, c.previousSegment.primaryAngle - 90 + 45, d), d = c.primaryAngle - c.previousSegment.primaryAngle, 55 > d && -55 < d && (c.primaryAngle = 0 < d ? c.previousSegment.primaryAngle + 55.55 : c.previousSegment.primaryAngle - 55.55)) : c.nextSegment ? (c.primaryAngle = -30 < c.nextSegment.primaryAngle && 30 > c.nextSegment.primaryAngle ? l(-130, 130, d) : -90 < c.nextSegment.primaryAngle && 90 > c.nextSegment.primaryAngle ? l(-60, 60, d) : -90 >= c.nextSegment.primaryAngle ?
                            l(c.nextSegment.primaryAngle + 90 - 45, c.nextSegment.primaryAngle + 90 + 45, d) : l(c.nextSegment.primaryAngle - 90 - 45, c.nextSegment.primaryAngle - 90 + 45, d), d = c.nextSegment.primaryAngle - c.primaryAngle, 55 > d && -55 < d && (c.primaryAngle = 0 < d ? c.nextSegment.primaryAngle + 55.55 : c.nextSegment.primaryAngle - 55.55)) : c.primaryAngle = l(-130, 130, d);
        d = Math.random();
        d = c.previousSegment && 90 < Math.abs(c.previousSegment.primaryAngle) && 90 > Math.abs(c.primaryAngle) ? 0.6 + 0.4 * d : c.nextSegment && 90 < Math.abs(c.nextSegment.primaryAngle) && 90 > Math.abs(c.primaryAngle) ?
                0.6 + 0.4 * d : -90 < c.primaryAngle && 90 > c.primaryAngle ? 0.3 + 0.7 * d : 0.3 * d;
        c.segmentLength = segmentMinimumLength + d * (segmentMaximumLength - segmentMinimumLength);
        c.nextSegment ? (c.startPoint.x = c.endPoint.x - c.segmentLength * Math.cos(c.primaryAngle * degToRad), c.startPoint.y = c.endPoint.y - c.segmentLength * Math.sin(c.primaryAngle * degToRad), c.startPoint.z = 0, c.originalStartPoint.x = c.originalEndPoint.x - c.segmentLength * Math.cos(c.primaryAngle * degToRad), c.originalStartPoint.y = c.originalEndPoint.y - c.segmentLength * Math.sin(c.primaryAngle *
                    degToRad), c.originalStartPoint.z = 0) : (c.endPoint.x = c.startPoint.x + c.segmentLength * Math.cos(c.primaryAngle * degToRad), c.endPoint.y = c.startPoint.y + c.segmentLength * Math.sin(c.primaryAngle * degToRad), c.endPoint.z = 0, c.originalEndPoint.x = c.originalStartPoint.x + c.segmentLength * Math.cos(c.primaryAngle * degToRad), c.originalEndPoint.y = c.originalStartPoint.y + c.segmentLength * Math.sin(c.primaryAngle * degToRad), c.originalEndPoint.z = 0)
    })(a, g)
};
var RibbonDOMHolder = function (a) {
    var d = this;
    d.holder = null;
    d.yOffset = 0;
    var f = [], g = [];
    d.addSegment = function (a) {
        console.log("addSegment", a.identifier);
        f.push(new RibbonDOMSegment(a, c()))
    };
    d.removeSegment = function (a) {
        console.log("removeSegment", a.identifier);
        for (var c = f.length, d = 0; d < c; d++)if (f[d].segment === a) {
            a = f[d].element;
            a.style.display = "none";
            g.push(a);
            f.splice(d, 1);
            break
        }
    };
    d.update = function () {
        for (var a = f.length, c = 0; c < a; c++)f[c].yOffset = d.yOffset, f[c].update()
    };
    var c = function () {
        if (g.length)return g.pop();
        var a = document.createElement("div");
        a.className = "ribbon-segment";
        a.style.width = "300px";
        a.style.height = "100px";
        a.style.display = "none";
        a.style.position = "absolute";
        a.style.top = "-50px";
        a.style.left = "-150px";
        a.style.webkitTransformOrigin = "50% 50% 0";
        d.holder.appendChild(a);
        var c = document.createElement("div");
        c.className = "start-triangle";
        c.style.width = "0";
        c.style.height = "0";
        c.style.borderStyle = "solid";
        c.style.borderWidth = "0 0 100px 100px";
        c.style.borderColor = "transparent transparent #007bff transparent";
        c.style.position = "absolute";
        c.style.left = "0";
        c.style.webkitTransformOrigin = "0% 50% 0";
        a.appendChild(c);
        c = document.createElement("div");
        c.className = "end-triangle";
        c.style.width = "0";
        c.style.height = "0";
        c.style.borderStyle = "solid";
        c.style.borderWidth = "100px 100px 0 0";
        c.style.borderColor = "#007bff transparent transparent transparent";
        c.style.position = "absolute";
        c.style.right = "0";
        c.style.webkitTransformOrigin = "100% 50% 0";
        a.appendChild(c);
        c = document.createElement("div");
        c.className = "center-fill";
        c.style.width =
            "100px";
        c.style.height = "100px";
        c.style.backgroundColor = "red";
        c.style.webkitTransformOrigin = "0% 50% 0";
        a.appendChild(c);
        return a
    };
    d.holder = a
};
var RibbonDOMSegment = function (a, d) {
    var f = this;
    f.segment = null;
    f.element = null;
    f.centerFill = null;
    f.startTriangle = null;
    f.endTriangle = null;
    f.yOffset = 0;
    f.update = function () {
        var a = f.segment.getStartEndCapLength(), c = f.segment.getEndEndCapLength(), d = (f.segment.segmentLength + a + c) / 300, k = f.segment.width / 100, l = (c - a) / 2, n = (f.segment.startPoint.x + f.segment.endPoint.x) / 2 + Math.cos(f.segment.getCurrentAngle() * Math.PI / 180) * l, l = (f.segment.startPoint.y + f.segment.endPoint.y) / 2 + f.yOffset + Math.sin(f.segment.getCurrentAngle() *
                Math.PI / 180) * l, p = f.segment.getCurrentAngle();
        f.element.style.webkitTransform = "translate3d(" + n + "px," + l + "px, 0px) rotate3d(0,0,1," + p * Math.PI / 180 + "rad) scale3d(" + d + "," + k + ",1)";
        f.element.style.zIndex = f.segment.backface ? 0 : 1;
        d = 2 * a / (f.segment.segmentLength + a + c);
        k = 1;
        f.segment.previousSegment && f.segment.previousSegment.getCurrentAngle() > f.segment.getCurrentAngle() && (k = -1);
        f.startTriangle.style.webkitTransform = "scale3d(" + 3 * d + ", " + k + ", 1)";
        k = 2 * c / (f.segment.segmentLength + a + c);
        n = 1;
        f.segment.nextSegment && f.segment.getCurrentAngle() <
        f.segment.nextSegment.getCurrentAngle() && (n = -1);
        f.endTriangle.style.webkitTransform = "scale3d(" + 3 * k + ", " + n + ", 1)";
        a = 0.5 / (f.segment.segmentLength + a + c);
        f.centerFill.style.webkitTransform = "translate3d(" + 300 * (d - a) + "%, 0px, 0px) scale3d(" + 3 * (1 - (d + k) + a + a) + ", 1, 1)"
    };
    (function (a, c) {
        f.segment = a;
        f.element = c;
        f.element.style.display = "block";
        f.centerFill = f.element.getElementsByClassName("center-fill")[0];
        f.startTriangle = f.element.getElementsByClassName("start-triangle")[0];
        f.endTriangle = f.element.getElementsByClassName("end-triangle")[0];
        f.update()
    })(a, d)
};
var RibbonPullDirection = {RIGHT: 0, LEFT: 1}, RibbonInteractionManager = function (a) {
    this.ribbon = a;
    var d = function () {
        a.advance();
        a.draw()
    };
    this.attachToRenderFrame = function () {
        GlobalEvents.addListener(GlobalEvent.RENDER_FRAME, d)
    };
    this.detachFromRenderFrame = function () {
        GlobalEvents.removeListener(GlobalEvent.RENDER_FRAME, d)
    };
    this.animateToTop = function (d) {
        var g = {value: 0};
        new Tween(g, 860, {
            value: 1, ease: Ease.easeIn.sine, onUpdate: function (c) {
                a.verticalPosition = 0.5 - 0.5 * g.value;
                a.positionDamping = g.value;
                a.straightenStrength =
                    Math.min(g.value / 0.85, 1);
                a.straighten()
            }, onComplete: function (a) {
                d && d()
            }
        })
    };
    this.releaseFromTop = function () {
        var d = {value: 1};
        new Tween(d, 860, {
            value: 0, ease: Ease.easeOut.sine, onUpdate: function (g) {
                a.verticalPosition = 0.5 - 0.5 * d.value;
                a.positionDamping = d.value;
                a.straightenStrength = Math.min(d.value / 0.85, 1);
                a.straighten()
            }, onComplete: function (a) {
            }
        })
    };
    this.animatePull = function (d, g) {
        g || (g = new Color(255 * Math.random(), 255 * Math.random(), 255 * Math.random()));
        var c, h, k;
        d == RibbonPullDirection.RIGHT ? (c = 0, h = 50, k = Math.abs(a.idleSpeed)) :
            (c = 1, h = -50, k = -Math.abs(a.idleSpeed));
        var l = new ColorTransition(a.primaryColor.clone(), g), n = new ColorTransition(a.secondaryColor.clone(), a.secondaryColorFromPrimaryColor(g));
        a.canDestruct = !1;
        a.setPullPoint(c);
        var p = a.speed, r = {value: 0};
        new Tween(r, 750, {
            value: 1, ease: Ease.easeInOut.sine, onUpdate: function (c) {
                a.pullStrength = 0.3 * r.value;
                a.pullSpread = r.value;
                a.straighten();
                a.speed = (h - p) * Math.min(r.value / 0.3, 1) + p
            }, onComplete: function (c) {
                a.destroySegments();
                a.setPullPoint(0.5);
                new Tween(r, 1150, {
                    delay: 50, value: 0,
                    ease: Ease.easeOut.back, onUpdate: function (c) {
                        a.pullStrength = 0.3 * r.value;
                        a.pullSpread = r.value;
                        a.straighten()
                    }
                });
                var d = {value: 1};
                new Tween(d, 1250, {
                    delay: 50, value: 0, ease: Ease.easeOut.cubic, onUpdate: function (c) {
                        a.speed = (h - k) * d.value + k
                    }, onComplete: function (c) {
                        a.canDestruct = !0;
                        a.clearPullPoint()
                    }
                })
            }
        });
        var q = {value: 0};
        new Tween(q, 2050, {
            value: 1, ease: Ease.easeInOut.cubic, onUpdate: function (c) {
                a.setColors(l.getColorAtValue(q.value), n.getColorAtValue(q.value))
            }
        })
    };
    this.attachToRenderFrame()
};
var DribbbleShots = function (a, d, f, g, c) {
    var h = this, k = !1, l = !1, n = !1, p = 0;
    h.scale = c;
    this.load = function () {
        k || (k = !0, new Ajax({
            method: "GET",
            path: "/dribbble-project/" + d + "/",
            onComplete: r,
            onFailure: function () {
                k = !1
            }
        }))
    };
    this.setOnscreen = function (a) {
        n = a;
        for (var c = 0; c < p; c++)h.shots[c].setOnscreen(a);
        n && !l && q()
    };
    var r = function (a) {
        h.shots = [];
        h.loadIndex = 0;
        for (var c = a.length, d = [], f = 0; f < Math.min(6, c);) {
            var g = Math.floor(Math.random() * (c - f));
            d.push(a[g]);
            a.splice(g, 1);
            f++
        }
        p = Math.min(c, 6);
        for (a = 0; a < p; a++)c = d[a], f = document.createElement("canvas"),
            f.id = "canvas" + a, f.width = 300 * h.scale, f.height = 300 * h.scale, c = new Triangle(f, c, h.primaryColor, h.ctaColor, h.scale, n), h.shots.push(c), h.container.appendChild(c.stage.canvas);
        n && q();
        GlobalEvents.addListener("TriangleToggleIn", w);
        GlobalEvents.addListener("TriangleToggleOut", t)
    }, q = function () {
        h.shots && h.shots.length && (l = !0, GlobalEvents.addListener("TriangleLoad", s), h.shots[0].load())
    }, s = function () {
        var a = h.shots[++h.loadIndex];
        a && a.load()
    }, w = function (a) {
        a.triangle != h.activeTriangle && h.activeTriangle && h.activeTriangle.triangleMorph();
        h.activeTriangle = a.triangle
    }, t = function (a) {
        a.triangle == h.activeTriangle && (h.activeTriangle = null)
    };
    (function (a, c, d, f) {
        h.container = a;
        h.project = c;
        h.primaryColor = d;
        h.ctaColor = f
    })(a, d, f, g)
};
Events = {
    registry: {}, dispatch: function (a, d) {
        var f = a.uid;
        this.register(f, d.name);
        for (var f = this.registry[f][d.name], g = 0; g < f.length; g++)f[g](d)
    }, addListener: function (a, d, f) {
        f && (a = a.uid, this.register(a, d), this.registry[a][d].push(f))
    }, removeListener: function (a, d, f) {
        a = this.registry[a.uid][d];
        for (d = 0; d < a.length; d++)f == a[d] && a.splice(d, 1)
    }, register: function (a, d) {
        this.registry[a] || (this.registry[a] = {});
        this.registry[a][d] || (this.registry[a][d] = [])
    }, destroy: function (a, d) {
        this.registry[a.uid][d] = !1
    }, showRegistry: function (a,
                               d) {
        console.log(this.registry)
    }
};
var Sprite = function () {
    this.stage = null;
    this.height = this.width = this.y = this.x = 0;
    this.scaleY = this.scaleX = this.scale = 1;
    this.rotation = 0;
    this.alpha = 1;
    this.visible = !0;
    this.uid = Stage.getUniqueID();
    this.mouseColor = Stage.getMouseColor();
    this.mouseString = this.mouseColor.getHex();
    this.mouseEnabled = !1;
    this.children = [];
    this.mother = null;
    this.render = function (a, d) {
        if (this.stage && this.visible) {
            a.save();
            a.translate(this.x, this.y);
            a.scale(this.scaleX, this.scaleY);
            a.rotate(this.rotation * (Math.PI / 180));
            if (d) {
                this.mouseEnabled &&
                this.mouseDraw(a);
                for (var f = 0; f < this.children.length; f++)this.children[f].render(a, d)
            } else {
                a.globalAlpha *= this.alpha;
                this.draw(a);
                for (f = 0; f < this.children.length; f++)this.children[f].render(a, d);
                this.afterDraw(a)
            }
            a.restore()
        }
    };
    this.setStage = function (a) {
        a && !this.stage ? a.addMouseColor(this) : !a && this.stage && this.stage.removeMouseColor(this);
        this.stage = a;
        for (var d = 0; d < this.children.length; d++)this.children[d].setStage(a)
    };
    this.dispatchEvent = function (a) {
        Events.dispatch(this, a)
    };
    this.addEventListener = function (a,
                                      d) {
        Events.addListener(this, a, d)
    };
    this.removeEventListener = function (a, d) {
        Events.removeListener(this, a, d)
    };
    this.dispatchRollOver = function () {
        !this.mouseOver && this.mouseEnabled && (this.dispatchEvent(new MouseEvent(MouseEvent.ROLL_OVER)), this.mouseOver = !0)
    };
    this.dispatchRollOut = function () {
        this.mouseOver && this.mouseEnabled && (this.dispatchEvent(new MouseEvent(MouseEvent.ROLL_OUT)), this.mouseOver = !1)
    };
    this.resetMouse = function () {
        this.mouseOver = !1;
        for (var a = 0; a < this.children.length; a++)this.children[a].resetMouse()
    };
    this.addChild = function (a) {
        this.children.push(a);
        a.setStage(this.stage);
        a.mother = this
    };
    this.removeChild = function (a) {
        var d = this.getChildIndex(a);
        this.children.splice(d, 1);
        a.setStage(null);
        a.mother = null;
        a.resetMouse()
    };
    this.setChildIndex = function (a, d) {
        var f = this.getChildIndex(a);
        this.children.splice(f, 1);
        this.children.splice(d, 0, a)
    };
    this.getChildIndex = function (a) {
        var d = this.children.indexOf(a);
        if (-1 == d)throw a + " is not a child of " + this;
        return d
    };
    this.isChildOf = function (a) {
        return a ? a == this.mother ? !0 :
                this.isChildOf(a.mother) : !1
    };
    this.getAncestry = function () {
        for (var a = this, d = [this]; a.mother;)d.push(a.mother), a = a.mother;
        return d
    };
    this.getProgeny = function () {
        for (var a = [this], d = 0; d < this.children.length; d++)a.concat(this.children[d].getProgeny());
        return a
    };
    this.getUncommonAncestors = function (a) {
        if (!a)return this.getAncestry();
        var d = this.getAncestry();
        a = a.getAncestry();
        for (var f = 0; f < a.length; f++) {
            var g = d.indexOf(a[f]);
            -1 != g && d.splice(g, 1)
        }
        return d
    };
    this.draw = function (a) {
    };
    this.mouseDraw = function (a) {
    };
    this.afterDraw = function (a) {
    };
    this.toString = function () {
        return "[object Sprite]"
    }
};
var Stage = function (a, d) {
    var f = this;
    this.scale = 1;
    this.canvas = a;
    this.children = this.context = null;
    this.mouseColors = {};
    this.mouseContext = this.mouseCanvas = null;
    this.mouseOver = !1;
    this.mouseFocus = void 0;
    this.mouseEnabled = !1;
    this.layerY = this.layerX = 0;
    this.__construct__ = function () {
        this.children = [];
        this.uid = Stage.getUniqueID();
        this.context = this.canvas.getContext("2d");
        this.mouseCanvas = document.createElement("canvas");
        this.mouseContext = this.mouseCanvas.getContext("2d");
        this.mouseCanvas.width = this.canvas.width;
        this.mouseCanvas.height = this.canvas.height;
        Stage.globalContext = this.context
    };
    this.enableMouse = function () {
        if (this.mouseEnabled)return !1;
        this.canvas.onmousemove = this.onMouseMove;
        this.canvas.onmouseover = this.onMouseOver;
        this.canvas.onmouseout = this.onMouseOut;
        this.canvas.onmousedown = this.onMouseDown;
        this.canvas.onmouseup = this.onMouseUp;
        this.canvas.onclick = this.onMouseClick;
        this.mouseEnabled = !0
    };
    this.disableMouse = function () {
        if (!this.mouseEnabled)return !1;
        this.canvas.onmousemove = void 0;
        this.canvas.onmouseover = void 0;
        this.canvas.onmouseout = void 0;
        this.canvas.onmousedown = void 0;
        this.canvas.onmouseup = void 0;
        this.canvas.onclick = void 0;
        this.mouseEnabled = !1;
        this.mouseFocus = void 0;
        this.mouseOver = !1;
        for (var a = 0; a < this.children.length; a++)this.children[a].resetMouse()
    };
    this.refreshCanvas = function (a, c) {
        f.context.clearRect(0, 0, f.canvas.width, f.canvas.height)
    };
    this.refreshMouseCanvas = function (a, c) {
    };
    this.startRendering = function () {
        f.rendering || (GlobalEvents.addListener(GlobalEvent.RENDER_FRAME, this.render), GlobalEvents.addListener(GlobalEvent.MOUSE_EVAL,
            this.evaluateMouse), f.rendering = !0)
    };
    this.stopRendering = function () {
        f.rendering && (GlobalEvents.removeListener(GlobalEvent.RENDER_FRAME, this.render), GlobalEvents.removeListener(GlobalEvent.MOUSE_EVAL, this.evaluateMouse), f.rendering = !1)
    };
    this.render = function () {
        f.refreshCanvas();
        f.mouseEnabled && f.refreshMouseCanvas();
        for (var a = 0; a < f.children.length; a++) {
            var c = f.children[a];
            c.render(f.context);
            f.mouseEnabled && (c.render(f.mouseContext, !0), f.dispatchMouseEvents())
        }
    };
    this.dispatchMouseEvents = function () {
        if (this.mouseOver) {
            try {
                var a =
                    this.mouseContext.getImageData(this.layerX * this.scale, this.layerY * this.scale, 1, 1).data
            } catch (c) {
                return !1
            }
            a = new Color(a[0], a[1], a[2]);
            a = this.mouseColors[a.getHexValue()];
            if (a != this.mouseFocus) {
                if (this.mouseFocus)for (var d = this.mouseFocus.getUncommonAncestors(a), f = 0; f < d.length; f++)d[f].dispatchRollOut();
                if (a)for (d = a.getAncestry(), f = 0; f < d.length; f++)d[f].dispatchRollOver();
                this.mouseFocus = a;
                this.evaluateMouse()
            }
        }
    };
    this.evaluateMouse = function () {
        for (var a = "", c = f.mouseFocus; c;) {
            if (c.buttonMode) {
                a = "pointer";
                break
            }
            c = c.mother
        }
        this.canvas && (this.canvas.style.cursor = a);
        window.blur();
        window.focus()
    };
    this.onMouseDown = function (a) {
        f.mouseFocus && f.mouseFocus.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_DOWN))
    };
    this.onMouseUp = function (a) {
        f.mouseFocus && f.mouseFocus.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_UP))
    };
    this.onMouseClick = function (a) {
        f.mouseFocus && f.mouseFocus.dispatchEvent(new MouseEvent(MouseEvent.CLICK))
    };
    this.onMouseOver = function (a) {
        f.canvas.onmousemove = f.onMouseMove;
        f.mouseOver = !0
    };
    this.onMouseOut =
        function (a) {
            if (f.mouseFocus) {
                a = f.mouseFocus.getAncestry();
                for (var c = 0; c < a.length; c++)a[c].dispatchRollOut()
            }
            f.canvas.onmousemove = void 0;
            f.mouseFocus = !1;
            f.mouseOver = !1
        };
    this.onMouseMove = function (a) {
        f.layerX = void 0 == a.offsetX ? a.layerX : a.offsetX;
        f.layerY = void 0 == a.offsetY ? a.layerY : a.offsetY
    };
    this.addChild = function (a) {
        this.children.push(a);
        a.setStage(this);
        a.mother = this
    };
    this.removeChild = function (a) {
        var c = this.children.indexOf(a);
        if (-1 == c)throw a + " is not a child of " + this;
        this.children.splice(c, 1);
        a.setStage(null);
        a.mother = null
    };
    this.addMouseColor = function (a) {
        this.mouseColors[a.mouseColor.getHexValue()] = a
    };
    this.removeMouseColor = function (a) {
        delete this.mouseColors[a.mouseColor.getHexValue()]
    };
    this.dispatchEvent = function (a) {
        Events.dispatch(this, a)
    };
    this.addEventListener = function (a, c) {
        Events.addListener(this, a, c)
    };
    this.removeEventListener = function (a, c) {
        Events.removeListener(this, a, c)
    };
    this.dispatchRollOver = function () {
        !this.over && this.mouseEnabled && (this.dispatchEvent(new MouseEvent(MouseEvent.ROLL_OVER)), this.over = !0)
    };
    this.dispatchRollOut = function () {
        this.over && this.mouseEnabled && (this.dispatchEvent(new MouseEvent(MouseEvent.ROLL_OUT)), this.over = !1)
    };
    this.toString = function () {
        return "[object Stage]"
    };
    this.__construct__()
};
Stage.r = 0;
Stage.g = 0;
Stage.b = 0;
Stage.uid = 0;
Stage.renderEvent = new GlobalEvent(GlobalEvent.RENDER_FRAME);
Stage.getUniqueID = function () {
    return ++Stage.uid
};
Stage.getMouseColor = function () {
    Stage.r += 1;
    255 < Stage.r && (Stage.r = 0, Stage.g++);
    255 < Stage.g && (Stage.r = 0, Stage.g = 0, Stage.b++);
    return new Color(Stage.r, Stage.g, Stage.b)
};
Stage.init = function (a) {
    Stage.framerate = a;
    a = Math.round(1E3 * (1 / a));
    Stage.renderInterval = setInterval(Stage.renderFrame, a)
};
Stage.renderFrame = function () {
    GlobalEvents.dispatch(Stage.renderEvent)
};
Stage.suspend = function () {
    clearInterval(Stage.renderInterval)
};
var Triangle = function (a, d, f, g, c, h) {
    var k = this;
    this.onscreen = h;
    this.shot = d;
    this.primaryColor = f;
    this.ctaColor = g;
    this.scale = c;
    this.img = new Image;
    this.stage = new Stage(a);
    this.triangleMask = null;
    this.isTapping = !1;
    this.touchStartPoint = {x: 0, y: 0};
    this.touchScreenPoint = {x: 0, y: 0};
    this.isLoaded = this.isAnimated = !1;
    this.__construct__ = function () {
        this.triangleMask = new TriangleMask(this.img, this.shot, this.primaryColor, this.ctaColor, this.scale);
        this.stage.scale = this.scale;
        this.stage.addChild(this.triangleMask);
        this.stage.render()
    };
    this.load = function () {
        this.img.src = this.shot.images.hidpi || this.shot.images.normal || this.shot.images.teaser;
        this.img.onload = this.onload;
        this.isAnimated = /.gif/g.test(this.img.src)
    };
    this.setOnscreen = function (a) {
        k.onscreen = a;
        k.isLoaded && (k.onscreen ? k.isAnimated && k.stage.startRendering() : k.stage.stopRendering())
    };
    this.onload = function () {
        k.onscreen ? (R.startRendering(), setTimeout(function () {
                    k.stage.startRendering();
                    k.triangleMask.addEventListener("triangle_ready", k.triangleReady);
                    k.triangleMask.fadeIn()
                },
                250)) : (k.triangleMask.drawImage = !0, k.triangleMask.scaleX = 1, k.triangleMask.scaleY = 1, k.triangleMask.blackAlpha = 0, k.stage.render(), k.finishLoad())
    };
    this.triangleReady = function () {
        k.isAnimated || k.stage.stopRendering();
        k.finishLoad()
    };
    this.finishLoad = function () {
        k.isLoaded = !0;
        GlobalEvents.dispatch({name: "TriangleLoad", triangle: this});
        k.triangleMask.addEventListener(TriangleMask.STOP_RENDERING, k.stopTriangle);
        k.triangleMask.addEventListener(TriangleMask.START_RENDERING, k.startTriangle);
        k.stage.canvas.addEventListener("touchstart",
            function (a) {
                k.isTapping = !0;
                k.touchStartPoint.x = a.touches[0].pageX;
                k.touchStartPoint.y = a.touches[0].pageY;
                k.touchScreenPoint.x = a.touches[0].clientX;
                k.touchScreenPoint.y = a.touches[0].clientY
            }, !1);
        k.stage.canvas.addEventListener("touchmove", function (a) {
            5 < Math.abs(a.touches[0].pageX - k.touchStartPoint.x) && (k.isTapping = !1);
            5 < Math.abs(a.touches[0].pageY - k.touchStartPoint.y) && (k.isTapping = !1);
            k.touchScreenPoint.x = a.touches[0].clientX;
            k.touchScreenPoint.y = a.touches[0].clientY
        }, !1);
        k.stage.canvas.addEventListener("touchend",
            function (a) {
                k.isTapping && (k.triangleMask.isTriangle ? k.triangleMask.toggle() : 180 < k.touchScreenPoint.y - k.stage.canvas.getBoundingClientRect().top ? (a.preventDefault(), window.open(k.shot.html_url)) : k.triangleMask.toggle());
                k.isTapping = !1
            }, !1);
        k.stage.canvas.addEventListener("mouseover", k.mouseOver, !1);
        k.stage.canvas.addEventListener("mouseout", k.mouseOut, !1);
        k.isAnimated && k.stage.startRendering()
    };
    this.mouseOver = function () {
        k.over = !0;
        k.stopped = !1;
        k.stage.enableMouse();
        k.stage.startRendering();
        k.stage.mouseOver = !0
    };
    this.mouseOut = function () {
        k.over = !1;
        k.stopped ? (k.stage.disableMouse(), k.isAnimated || k.stage.stopRendering(), k.stage.mouseOver = !1) : k.triangleMask.rollOut()
    };
    this.startTriangle = function (a) {
        k.stopped = !1;
        k.stage.enableMouse();
        k.stage.startRendering();
        k.stage.mouseOver = !0
    };
    this.stopTriangle = function (a) {
        k.stopped = !0;
        !1 == k.over && (k.stage.disableMouse(), k.isAnimated || k.stage.stopRendering(), k.stage.mouseOver = !1)
    };
    this.__construct__()
};
TriangleMask.prototype = new Sprite;
TriangleMask.prototype.constructor = TriangleMask;
TriangleMask.START_RENDERING = "triangle_start_rendering";
TriangleMask.STOP_RENDERING = "triangle_stop_rendering";
TriangleMask.READY = "triangle_ready";
function TriangleMask(a, d, f, g, c) {
    Sprite.call(this);
    var h = this;
    this.scale = c;
    this.img = a;
    this.shot = d;
    this.primaryColor = new Color(f);
    this.ctaColor = new Color(g);
    var k = 400 * c, l = 300 * c, n = 150 * c, p = 178 * c, r = 165 * c, q = 145 * c, s = 15 * c, w = 25 * c, t = 80.5 * c, u = -254 * c, v = -148 * c;
    this.__construct__ = function () {
        this.x = n;
        this.y = p;
        this.scaleY = this.scaleX = 0.8;
        this.width = 282 * c;
        this.height = 244 * c;
        this.buttonMode = this.mouseEnabled = !0;
        this.imageX = u;
        this.imageY = -p;
        this.maskAngle = 0;
        this.blackAlpha = this.maskScale = 1;
        this.cornerRadius = s;
        this.noTilt = !1;
        this.isTriangle = !0;
        this.rolledOver = this.toggling = this.drawImage = !1;
        this.icons = new Icons(this.shot, this.primaryColor, this.ctaColor, h.scale);
        this.icons.visible = !1;
        this.bottomBar = new BottomBar(this.primaryColor.getHex(), h.scale);
        this.bottomBar.visible = !1;
        this.bottomBar.x = -159 * this.scale;
        this.bottomBar.y = 100 * this.scale;
        this.addChild(this.icons);
        this.addChild(this.bottomBar);
        this.addListeners()
    };
    this.addListeners = function () {
        this.addEventListener(MouseEvent.ROLL_OUT, this.rollOut);
        this.addEventListener(MouseEvent.ROLL_OVER,
            this.rollOver);
        this.addEventListener(MouseEvent.CLICK, this.toggle)
    };
    this.getDistance = function (a, c) {
        var d = Math.pow;
        return Math.sqrt(d(c.x - a.x, 2) + d(c.y - a.y, 2))
    };
    this.getPointOnLine = function (a, c, d) {
        return new Point2D((1 - d) * a.x + d * c.x, (1 - d) * a.y + d * c.y)
    };
    this.getPointOnCircle = function (a, c, d) {
        x = a.x + c * Math.cos(d);
        y = a.y + c * Math.sin(d);
        return {x: x, y: y}
    };
    this.fadeIn = function () {
        this.drawImage = !0;
        new Tween(h, 300, {
            scaleX: 1, scaleY: 1, blackAlpha: 0, ease: Ease.easeOut.expo, onComplete: function () {
                h.dispatchEvent({
                    name: TriangleMask.READY,
                    triangle: h
                });
                h.blackAlpha = 0
            }
        })
    };
    this.draw = function (a) {
        var c = this.width, d = this.height, f = this.cornerRadius;
        this.c2 = new Point2D(0, 0);
        this.c5 = new Point2D(c / 2, d);
        this.c8 = new Point2D(-c / 2, d);
        var c = this.c2, d = this.c5, g = this.c8;
        this.center = new Point2D((c.x + d.x + g.x) / 3, (c.y + d.y + g.y) / 3);
        c.y -= this.center.y;
        c.x -= this.center.x;
        d.y -= this.center.y;
        d.x -= this.center.x;
        g.y -= this.center.y;
        g.x -= this.center.x;
        var p = this.getDistance(c, d), n = this.getDistance(d, g), q = this.getDistance(g, c);
        this.c1 = this.getPointOnLine(g, c, (q -
            1.75 * f) / q);
        this.c3 = this.getPointOnLine(d, c, (p - 1.75 * f) / p);
        this.c4 = this.getPointOnLine(c, d, (p - 1.75 * f) / p);
        this.c6 = this.getPointOnLine(g, d, (n - 1.75 * f) / n);
        this.c7 = this.getPointOnLine(d, g, (n - 1.75 * f) / n);
        this.c9 = this.getPointOnLine(c, g, (q - 1.75 * f) / q);
        this.rotateMask(this.maskAngle);
        h.drawTriangle(a);
        a.save();
        a.clip();
        h.drawImage && a.drawImage(this.img, this.imageX, this.imageY, k, l);
        a.fillStyle = "rgba(40,41,44," + this.blackAlpha + ")";
        a.fillRect(-200 * h.scale, -180 * h.scale, 400 * h.scale, 300 * h.scale)
    };
    this.afterDraw = function (a) {
        a.restore();
        a.strokeStyle = "#eeeeee";
        a.lineWidth = 1 * h.scale;
        a.stroke()
    };
    this.drawPoints = function (a) {
        a.fillStyle = "#ff0000";
        a.beginPath();
        a.arc(this.c1.x, this.c1.y, 3 * this.scale, 0, 2 * Math.PI);
        a.closePath();
        a.fill();
        a.beginPath();
        a.arc(this.c4.x, this.c4.y, 3 * this.scale, 0, 2 * Math.PI);
        a.closePath();
        a.fill();
        a.beginPath();
        a.arc(this.c7.x, this.c7.y, 3 * this.scale, 0, 2 * Math.PI);
        a.closePath();
        a.fill();
        a.fillStyle = "#00ff00";
        a.beginPath();
        a.arc(this.c2.x, this.c2.y, 3 * this.scale, 0, 2 * Math.PI);
        a.closePath();
        a.fill();
        a.beginPath();
        a.arc(this.c5.x,
            this.c5.y, 3 * this.scale, 0, 2 * Math.PI);
        a.closePath();
        a.fill();
        a.beginPath();
        a.arc(this.c8.x, this.c8.y, 3 * this.scale, 0, 2 * Math.PI);
        a.closePath();
        a.fill();
        a.fillStyle = "#0000ff";
        a.beginPath();
        a.arc(this.c3.x, this.c3.y, 3 * this.scale, 0, 2 * Math.PI);
        a.closePath();
        a.fill();
        a.beginPath();
        a.arc(this.c6.x, this.c6.y, 3 * this.scale, 0, 2 * Math.PI);
        a.closePath();
        a.fill();
        a.beginPath();
        a.arc(this.c9.x, this.c9.y, 3 * this.scale, 0, 2 * Math.PI);
        a.closePath();
        a.fill()
    };
    this.drawTriangle = function (a) {
        var c = this.cornerRadius;
        a.beginPath();
        a.moveTo(this.c1.x, this.c1.y);
        a.arcTo(this.c2.x, this.c2.y, this.c3.x, this.c3.y, c);
        a.lineTo(this.c4.x, this.c4.y);
        a.arcTo(this.c5.x, this.c5.y, this.c6.x, this.c6.y, c);
        a.lineTo(this.c7.x, this.c7.y);
        a.arcTo(this.c8.x, this.c8.y, this.c9.x, this.c9.y, c);
        a.lineTo(this.c1.x, this.c1.y);
        a.closePath()
    };
    this.mouseDraw = function (a) {
        a.beginPath();
        a.fillStyle = "#00ff00";
        a.rect(-h.x, -h.y, 300 * this.scale, 300 * this.scale);
        a.closePath();
        a.fill();
        h.rolledOver && h.isTriangle && (a.lineWidth = 25 * this.scale);
        a.fillStyle = this.mouseString;
        a.strokeStyle = this.mouseString;
        this.drawTriangle(a);
        a.fill();
        a.stroke();
        a.lineWidth = 0
    };
    this.rotateMask = function (a) {
        a = a * Math.PI / 180;
        this.c1.rotate(a);
        this.c2.rotate(a);
        this.c3.rotate(a);
        this.c4.rotate(a);
        this.c5.rotate(a);
        this.c6.rotate(a);
        this.c7.rotate(a);
        this.c8.rotate(a);
        this.c9.rotate(a)
    };
    this.circleMorph = function () {
        h.cornerTween && h.cornerTween.stop();
        h.spinTween && h.spinTween.stop();
        h.tiltTween && h.tiltTween.stop();
        h.icons.show();
        h.icons.visible = !0;
        h.isTriangle = !1;
        h.cornerTween = new Tween(h, 800,
            {cornerRadius: t, ease: Ease.easeInOut.expo});
        h.spinTween = new Tween(h, 800, {
            y: q,
            scaleX: 1.5,
            scaleY: 1.5,
            blackAlpha: 1,
            rotation: 90,
            ease: Ease.easeInOut.back,
            onComplete: function () {
                h.y = q;
                h.scaleX = 1.5;
                h.scaleY = 1.5;
                h.imageX = u;
                h.imageY = -q;
                h.rotation = 90;
                h.maskAngle = 0;
                h.blackAlpha = 1;
                h.drawImage = !1;
                h.toggling = !1
            }
        })
    };
    this.triangleMorph = function () {
        h.tiltTween && h.tiltTween.stop();
        h.cornerTween && h.cornerTween.stop();
        h.spinTween && h.spinTween.stop();
        h.maskAngle = 0;
        h.imageX = u;
        h.imageY = -p;
        h.cornerTween = new Tween(h, 800, {
            delay: 200,
            cornerRadius: s, ease: Ease.easeInOut.expo
        });
        h.spinTween = new Tween(h, 800, {
            y: p,
            scaleX: 1,
            scaleY: 1,
            delay: 200,
            blackAlpha: 0,
            rotation: 0,
            ease: Ease.easeInOut.back,
            onComplete: function () {
                h.y = p;
                h.rotation = 0;
                h.blackAlpha = 0;
                h.scaleX = 1;
                h.scaleY = 1;
                h.dispatchEvent({name: TriangleMask.STOP_RENDERING, triangle: h});
                h.icons.visible = !1;
                h.isTriangle = !0;
                h.toggling = !1
            }
        });
        h.icons.hide();
        h.drawImage = !0
    };
    this.toggle = function () {
        if (h.toggling)return !1;
        h.toggling = !0;
        h.dispatchEvent({name: TriangleMask.START_RENDERING, triangle: h});
        h.isTriangle ?
            (h.circleMorph(), h.buttonMode = !1, GlobalEvents.dispatch(new GlobalEvent(GlobalEvent.EVAL_MOUSE)), GlobalEvents.dispatch({
                name: "TriangleToggleIn",
                triangle: h
            })) : (h.triangleMorph(), h.buttonMode = !0, GlobalEvents.dispatch(new GlobalEvent(GlobalEvent.EVAL_MOUSE)), GlobalEvents.dispatch({
                name: "TriangleToggleOut",
                triangle: h
            }));
        h.barTween && h.barTween.stop();
        h.barTween = new Tween(h.bottomBar, 400, {rotation: 20, y: 100 * h.scale, ease: Ease.easeOut.quint});
        h.bottomBar.hide()
    };
    this.rollOver = function () {
        if (!h.isTriangle || h.toggling)return !1;
        h.out = !1;
        h.rolledOver = !0;
        h.dispatchEvent({name: TriangleMask.START_RENDERING, triangle: h});
        h.tiltTween && h.tiltTween.stop();
        h.tiltTween = new Tween(h, 600, {
            maskAngle: 10,
            cornerRadius: w,
            y: r,
            imageY: -r,
            ease: Ease.easeOut.quint,
            onComplete: function () {
            }
        });
        h.imageTween && h.imageTween.stop();
        h.imageTween = new Tween(h, 800, {
            imageX: v, ease: Ease.easeOut.quint, onComplete: function () {
            }
        });
        h.barTween && h.barTween.stop();
        h.barTween = new Tween(h.bottomBar, 400, {rotation: 0, y: 30 * h.scale, ease: Ease.easeOut.quint});
        h.bottomBar.visible = !0;
        h.bottomBar.show()
    };
    this.rollOut = function () {
        if (!h.isTriangle || h.toggling || h.out)return !1;
        h.out = !0;
        h.rolledOver = !1;
        h.dispatchEvent({name: TriangleMask.START_RENDERING, triangle: h});
        h.tiltTween && h.tiltTween.stop();
        h.tiltTween = new Tween(h, 600, {
            maskAngle: 0,
            cornerRadius: s,
            y: p,
            imageY: -p,
            ease: Ease.easeOut.quint,
            onUpdate: function () {
            },
            onComplete: function () {
            }
        });
        h.imageTween && h.imageTween.stop();
        h.imageTween = new Tween(h, 800, {
            imageX: u, ease: Ease.easeOut.quint, onComplete: function () {
                h.dispatchEvent({
                    name: TriangleMask.STOP_RENDERING,
                    triangle: h
                });
                h.bottomBar.visible = !1;
                h.out = !1
            }
        });
        h.barTween && h.barTween.stop();
        h.barTween = new Tween(h.bottomBar, 400, {rotation: 20, y: 100 * h.scale, ease: Ease.easeIn.quint});
        h.bottomBar.hide()
    };
    this.toString = function () {
        return "[Sprite TriangleMask]"
    };
    this.__construct__()
};Icons.prototype = new Sprite;
Icons.prototype.constructor = Icons;
function Icons(a, d, f, g) {
    Sprite.call(this);
    var c = this;
    this.scale = g;
    this.shot = a;
    this.primaryColor = d;
    this.ctaColor = f;
    this.viewTotal = a.views_count;
    this.likeTotal = a.likes_count;
    var h = 71 * g, k = 136 * g, l = -89 * g, n = -154 * g, p = 28 * g, r = -16 * g, q = 44 * g, s = 8 * g, w = -74 * g, t = -16 * g, u = 48 * g, v = 8 * g, z = -21 * g, C = 43 * g, D = 35 * g;
    this.count = {likes: 0, views: 0};
    this.__construct__ = function () {
        this.alpha = 0;
        this.iconsY = n;
        this.rotation = -180;
        this.scaleX = 1 / 1.5;
        this.scaleY = 1 / 1.5;
        this.views = new Image;
        this.likes = new Image;
        this.statsIcons = new Image;
        1 < c.scale ?
            (this.views.src = STATIC_URL + "img/case-studies/common/dribbble-views@2x.png", this.likes.src = STATIC_URL + "img/case-studies/common/dribbble-likes@2x.png", this.statsIcons.src = STATIC_URL + "img/case-studies/common/dribbble-stats-icons@2x.png") : (this.views.src = STATIC_URL + "img/case-studies/common/dribbble-views.png", this.likes.src = STATIC_URL + "img/case-studies/common/dribbble-likes.png", this.statsIcons.src = STATIC_URL + "img/case-studies/common/dribbble-stats-icons.png");
        this.likeCount = new CountText("0", "center",
            g);
        this.likeCount.x = 50 * c.scale;
        this.likeCount.y = 24 * c.scale;
        this.viewCount = new CountText("0", "center", g);
        this.viewCount.x = -50 * c.scale;
        this.viewCount.y = 24 * c.scale;
        this.dribbbleLink = new DribbbleLink(this.shot, this.primaryColor, this.ctaColor, this.scale);
        this.dribbbleLink.x = -123 * c.scale;
        this.dribbbleLink.y = k;
        this.addChild(this.likeCount);
        this.addChild(this.viewCount);
        this.addChild(this.dribbbleLink)
    };
    this.addListeners = function () {
    };
    this.draw = function (a) {
        a.drawImage(this.likes, p, r, q, s);
        a.drawImage(this.views,
            w, t, u, v);
        a.drawImage(this.statsIcons, z, this.iconsY, C, D)
    };
    this.mouseDraw = function (a) {
    };
    this.countUp = function () {
        c.countTween && c.countTween.stop();
        c.count = {likes: 0, feedback: 0, views: 0};
        c.likeCount.text = "0";
        c.viewCount.text = "0";
        c.countTween = new Tween(c.count, 800, {
            delay: 400,
            likes: c.likeTotal,
            feedback: c.feedbackTotal,
            views: c.viewTotal,
            ease: Ease.easeOut.sine,
            onUpdate: function () {
                c.likeCount.text = Math.round(c.count.likes) + "";
                c.viewCount.text = Math.round(c.count.views) + ""
            }
        })
    };
    this.show = function () {
        c.showTween &&
        c.showTween.stop();
        c.dribbbleLink.show();
        c.showTween = new Tween(c, 800, {
            rotation: -90,
            alpha: 1,
            iconsY: l,
            ease: Ease.easeOut.quint,
            delay: 600,
            onUpdate: function () {
                c.likeCount.textAlpha = c.alpha;
                c.viewCount.textAlpha = c.alpha;
                c.dribbbleLink.y = k + (h - k) * c.alpha
            },
            onComplete: function () {
            }
        });
        c.countUp()
    };
    this.hide = function () {
        c.showTween && c.showTween.stop();
        c.dribbbleLink.hide();
        c.showTween = new Tween(c, 800, {
            alpha: 0, rotation: -180, iconsY: n, ease: Ease.easeOut.quint, onUpdate: function () {
                c.likeCount.textAlpha = c.alpha;
                c.viewCount.textAlpha =
                    c.alpha;
                c.dribbbleLink.y = k + (h - k) * c.alpha
            }, onComplete: function () {
                c.alpha = 0
            }
        })
    };
    this.toString = function () {
        return "[Sprite Icons]"
    };
    this.__construct__()
};CountText.prototype = new Sprite;
CountText.prototype.constructor = CountText;
function CountText(a, d, f) {
    Sprite.call(this);
    this.scale = f;
    this.text = a;
    this.align = d;
    this.textAlpha = 0;
    var g = 26 * f;
    this.__construct__ = function () {
    };
    this.addListeners = function () {
    };
    this.draw = function (a) {
        a.font = "bold " + g + "px 'Futura Bold'";
        var d = a.measureText(this.text).width, f = 0;
        "left" == this.align ? f = 0 : "right" == this.align ? f = -d : "center" == this.align && (f = -d / 2);
        a.fillStyle = "rgba(255,255,255," + Math.round(100 * this.textAlpha) / 100 + ")";
        a.fillText(this.text, f, 0)
    };
    this.mouseDraw = function (a) {
    };
    this.show = function () {
    };
    this.hide = function () {
    };
    this.toString = function () {
        return "[sprite CountText]"
    };
    this.__construct__()
};DribbbleLink.prototype = new Sprite;
DribbbleLink.prototype.constructor = DribbbleLink;
function DribbbleLink(a, d, f, g) {
    Sprite.call(this);
    var c = this;
    this.scale = g;
    this.shot = a;
    this.buttonMode = !0;
    this.ctaAlpha = 0;
    var h = 113 * g, k = 17 * g, l = 20 * g, n = 12 * g;
    this.__construct__ = function () {
        this.mouseEnabled = !0;
        this.cta = new Image;
        this.cta.src = 1 < c.scale ? STATIC_URL + "img/case-studies/common/dribbble-arrow@2x.png" : STATIC_URL + "img/case-studies/common/dribbble-arrow.png"
    };
    this.addListeners = function () {
        this.addEventListener(MouseEvent.ROLL_OVER, this.rollOver);
        this.addEventListener(MouseEvent.ROLL_OUT, this.rollOut);
        this.addEventListener(MouseEvent.CLICK, this.click)
    };
    this.removeListeners = function () {
        this.removeEventListener(MouseEvent.ROLL_OVER, this.rollOver);
        this.removeEventListener(MouseEvent.ROLL_OUT, this.rollOut);
        this.removeEventListener(MouseEvent.CLICK, this.click)
    };
    this.draw = function (a) {
        a.fillStyle = "rgba(60, 61, 64, " + Math.round(100 * Math.min(c.ctaAlpha / 0.4, 1)) / 100 + ")";
        a.fillRect(0, 0, 246 * c.scale, 1 * c.scale);
        a.fillStyle = "rgba(32, 33, 35, " + Math.round(100 * Math.max((c.ctaAlpha - 0.4) / 0.6, 0)) / 100 + ")";
        a.fillRect(0,
            1 * c.scale, 246 * c.scale, 54 * c.scale);
        a.save();
        a.globalAlpha = c.ctaAlpha;
        a.drawImage(this.cta, h, k, l, n);
        a.restore()
    };
    this.mouseDraw = function (a) {
        a.fillStyle = c.mouseString;
        a.beginPath();
        a.arc(123 * c.scale, -71 * c.scale, 125 * c.scale, 34.1 * Math.PI / 180, 145.9 * Math.PI / 180);
        a.closePath();
        a.fill()
    };
    this.show = function () {
        c.showTween && c.showTween.stop();
        c.showTween = new Tween(c, 400, {
            ctaAlpha: 0.4, delay: 300, ease: Ease.easeOut.sine, onComplete: function () {
                c.addListeners()
            }
        })
    };
    this.hide = function () {
        c.removeListeners();
        c.showTween &&
        c.showTween.stop();
        c.showTween = new Tween(c, 400, {ctaAlpha: 0, ease: Ease.easeOut.sine})
    };
    this.rollOver = function () {
        c.showTween && c.showTween.stop();
        c.showTween = new Tween(c, 400, {ctaAlpha: 1, ease: Ease.easeOut.sine})
    };
    this.rollOut = function () {
        c.showTween && c.showTween.stop();
        c.showTween = new Tween(c, 400, {ctaAlpha: 0.4, ease: Ease.easeOut.sine})
    };
    this.click = function () {
        window.open(c.shot.html_url)
    };
    this.toString = function () {
        return "[Sprite DribbleLink]"
    };
    this.__construct__()
};BottomBar.prototype = new Sprite;
BottomBar.prototype.constructor = BottomBar;
function BottomBar(a, d) {
    Sprite.call(this);
    var f = this;
    this.scale = d;
    this.__construct__ = function (a) {
        this.color = a;
        this.rotation = 20;
        var c = new Image;
        c.src = 1 < f.scale ? STATIC_URL + "img/case-studies/common/dribbble-stats-cta@2x.png" : STATIC_URL + "img/case-studies/common/dribbble-stats-cta.png";
        this.explore = new Sprite;
        this.explore.draw = function (a) {
            a.drawImage(c, 0, 0, 131 * f.scale, 12 * f.scale)
        };
        this.addChild(this.explore);
        this.explore.x = 114 * f.scale;
        this.explore.y = 17 * f.scale
    };
    this.addListeners = function () {
    };
    this.draw =
        function (a) {
            a.fillStyle = this.color;
            a.fillRect(0, 0, 318 * f.scale, 67 * f.scale)
        };
    this.mouseDraw = function (a) {
        a.fillStyle = f.mouseString;
        a.fillRect(0, 0, 318 * f.scale, 67 * f.scale)
    };
    this.show = function () {
        this.showTween && this.showTween.stop();
        this.showTween = new Tween(this.explore, 400, {alpha: 1, ease: Ease.easeOut.sine})
    };
    this.hide = function () {
        this.showTween && this.showTween.stop();
        this.showTween = new Tween(this.explore, 400, {alpha: 0, ease: Ease.easeOut.sine})
    };
    this.toString = function () {
        return "[Sprite BottomBar]"
    };
    this.__construct__(a)
}
;var TapBio = function (a) {
    var d = this;
    this.element = a;
    this.touchStartPoint = {x: 0, y: 0};
    this.isTouchMoving = this.isTapping = !1;
    this.toggleOn = function () {
        R.addClass(d.element, "toggled")
    };
    this.toggleOff = function () {
        R.removeClass(d.element, "toggled")
    };
    (function () {
        d.element.addEventListener("touchstart", function (a) {
            d.isTouchMoving = !0;
            d.isTapping = !0;
            d.touchStartPoint.x = a.touches[0].pageX;
            d.touchStartPoint.y = a.touches[0].pageY;
            R.addClass(d.element.parentNode, "no-hover")
        }, !1);
        d.element.addEventListener("touchmove",
            function (a) {
                d.isTouchMoving = !0;
                5 < Math.abs(a.touches[0].pageX - d.touchStartPoint.x) && (d.isTapping = !1);
                5 < Math.abs(a.touches[0].pageY - d.touchStartPoint.y) && (d.isTapping = !1)
            }, !1);
        d.element.addEventListener("touchend", function (a) {
            d.isTapping && (R.hasClass(d.element, "toggled") ? (R.removeClass(d.element, "toggled"), GlobalEvents.dispatch({
                    name: "bio_toggled_off",
                    bio: d
                })) : (R.addClass(d.element, "toggled"), GlobalEvents.dispatch({name: "bio_toggled_on", bio: d})));
            d.isTapping = !1
        }, !1);
        d.element.addEventListener("mousemove",
            function (a) {
                d.isTouchMoving || R.removeClass(d.element.parentNode, "no-hover");
                d.isTouchMoving = !1
            }, !1)
    })()
};
var TapBios = function (a) {
    var d = this;
    this.elements = a;
    this.currentBio = null;
    (function () {
        for (var a = d.elements.length - 1; 0 <= a; a--)new TapBio(d.elements[a]);
        GlobalEvents.addListener("bio_toggled_on", function (a) {
            d.currentBio && d.currentBio != a.bio && d.currentBio.toggleOff();
            d.currentBio = a.bio
        });
        GlobalEvents.addListener("bio_toggled_off", function (a) {
            d.currentBio = null
        })
    })()
};
var TapNonHoverable = function (a) {
    var d = this;
    this.element = a;
    this.isTouchMoving = !1;
    (function () {
        d.element.addEventListener("touchstart", function (a) {
            d.isTouchMoving = !0;
            R.addClass(d.element.parentNode, "no-hover")
        }, !1);
        d.element.addEventListener("touchmove", function (a) {
            d.isTouchMoving = !0
        }, !1);
        d.element.addEventListener("mousemove", function (a) {
            d.isTouchMoving || R.removeClass(d.element.parentNode, "no-hover");
            d.isTouchMoving = !1
        }, !1)
    })()
};
R.Slideshow = function () {
    var a = this;
    this.html = {};
    this.dragHelper = null;
    this.animating = !1;
    this.videoPlayers = [];
    var d = 0, f = 0, g = 0, c = void 0, h = !1, k = !1, l = !1, n = 768 < window.innerWidth;
    this.init = function (a) {
        this.html.containerDiv = a;
        this.html.containerDiv.slideshow = this;
        this.html.screenshotsDiv = a.querySelector(".screenshots");
        this.html.screenshotDivs = a.querySelectorAll(".screenshot");
        this.html.screenshotCaptionDivs = a.querySelectorAll(".screenshot-caption");
        for (var c = 0; c < this.html.screenshotDivs.length; c++) {
            var d =
                this.html.screenshotDivs[c].querySelector(".video-player");
            d ? this.videoPlayers.push((new R.VideoPlayer).init(d, this)) : this.videoPlayers.push(null)
        }
        var f = a.querySelector(".device-aux-content .device-screen");
        f.innerHTML = this.html.screenshotsDiv.outerHTML;
        this.html.bgScreenshotsDiv = f.querySelector(".screenshots");
        this.html.slideshowControlsDiv = a.querySelector(".slideshow-controls");
        this.html.slideshowCaptionDiv = a.querySelector(".slideshow-caption");
        this.html.slideshowCaptionOuterDiv = a.querySelector(".slideshow-caption-outer");
        this.html.slideshowCaptionInnerDiv = a.querySelector(".slideshow-caption-inner");
        this.html.slideshowCaptionContentDiv = a.querySelector(".slideshow-caption-content");
        this.html.slideshowCaptionContinueSpan = a.querySelector(".slideshow-caption-continue");
        this.html.slideshowCaptionContinueSpan.innerHTML = "...continue";
        this.html.paginationBarDiv = a.querySelector(".pagination-bar");
        this.html.paginationBarOuterDiv = a.querySelector(".pagination-bar-outer");
        this.html.paginationBarInnerDiv = a.querySelector(".pagination-bar-inner");
        this.html.paginationBarContentDiv = a.querySelector(".pagination-bar-content");
        this.html.paginationBarHandleDiv = a.querySelector(".pagination-bar-handle");
        this.html.slideshowCaptionContentDiv.innerHTML = this.html.screenshotCaptionDivs[0].innerHTML;
        this.html.slideshowCaptionContentDiv.querySelector(".caption-text p").appendChild(this.html.slideshowCaptionContinueSpan);
        this.dragHelper = (new DragHelper).init();
        this.dragHelper.getDimensionX = function () {
            return f.clientWidth
        };
        return this
    };
    this.onDrag = function (c,
                            g, h, k, n, t) {
        d = c;
        (!l && 5 < c || -5 > c) && a.hideCaption();
        k = f - c / a.html.screenshotsDiv.clientWidth;
        c = 1 - 1 / a.html.screenshotDivs.length;
        g = 1 - 1 / a.html.screenshotDivs.length / 3;
        h = -1 / a.html.screenshotDivs.length / 1.5;
        k > c ? (k = (k - c) * a.html.screenshotsDiv.clientWidth, k = Math.min(k / (window.innerWidth / 2), 1), k = c + (g - c) * k): 0
        >
        k && (k = (0 - k) * a.html.screenshotsDiv.clientWidth, k = Math.min(k / (window.innerWidth / 2), 1), k *= h);
        R.setTransform(a.html.screenshotsDiv, "translate3d(" + -100 * k + "%,0,0)");
        R.setTransform(a.html.bgScreenshotsDiv, "translate3d(" +
            -100 * k + "%,0,0)");
        R.setTransform(a.html.paginationBarContentDiv, "translate3d(" + 100 * k + "%,0,0)");
        return !1
    };
    this.onDragComplete = function (c, h) {
        if (c != DragHelper.OUTCOME_CLICK) {
            var k = this.html.screenshotDivs.length, l = Math.ceil((f - d / this.html.screenshotsDiv.clientWidth) * k);
            switch (c) {
                case DragHelper.OUTCOME_BACK:
                    l -= 1
            }
            g = l = Math.max(Math.min(l, k - 1), 0);
            k = g / k;
            f - d / a.html.screenshotsDiv.clientWidth != k && (R.setTransition(a.html.screenshotsDiv, "transform .2s ease-out"), R.setTransform(a.html.screenshotsDiv, "translate3d(" +
                -100 * k + "%,0,0)"), R.setTransition(a.html.bgScreenshotsDiv, "transform .2s ease-out"), R.setTransform(a.html.bgScreenshotsDiv, "translate3d(" + -100 * k + "%,0,0)"), R.setTransition(a.html.paginationBarContentDiv, "transform .2s ease-out"), R.setTransform(a.html.paginationBarContentDiv, "translate3d(" + 100 * k + "%,0,0)"), this.animating = !0, R.onTransitionEnd(a.html.paginationBarContentDiv, function () {
                a.animating = !1
            }));
            a.hideCaption(function () {
                a.html.slideshowCaptionContentDiv.innerHTML = a.html.screenshotCaptionDivs[g].innerHTML;
                a.html.slideshowCaptionContentDiv.querySelector(".caption-text p").appendChild(a.html.slideshowCaptionContinueSpan);
                a.showCaption()
            });
            f = k
        }
    };
    this.activate = function () {
        this.addListeners()
    };
    this.deactivate = function () {
        this.removeListeners()
    };
    this.addListeners = function () {
        this.html.containerDiv[R.touch ? "ontouchstart" : "onmousedown"] = function (c) {
            a.dragHelper.start(c);
            a.dragHelper.onDrag = void 0;
            a.dragHelper.onComplete = void 0;
            a.dragHelper.onIntentClear = a.dragIntentClear;
            c.stopPropagation()
        };
        this.html.slideshowCaptionDiv.onclick =
            this.captionClick.bind(this);
        GlobalEvents.addListener(GlobalEvent.WINDOW_RESIZE, this.onResize.bind(this))
    };
    this.removeListeners = function () {
        this.html.containerDiv[R.touch ? "ontouchstart" : "onmousedown"] = void 0;
        this.html.slideshowCaptionDiv.onclick = void 0;
        GlobalEvents.removeListener(GlobalEvent.WINDOW_RESIZE, this.onResize.bind(this))
    };
    this.showCaption = function (d) {
        c = void 0;
        l = k = !1;
        a.html.slideshowCaptionDiv.style.opacity = "1"
    };
    this.hideCaption = function (d) {
        l ? d && d() : (c = d, k || (k = !0, R.setTransition(a.html.slideshowCaptionDiv,
                "opacity .2s linear"), a.html.slideshowCaptionDiv.style.opacity = 0, R.onTransitionEnd(a.html.slideshowCaptionDiv, function () {
                k = !1;
                l = !0;
                h = !1;
                R.setTransition(a.html.slideshowCaptionInnerDiv, "");
                R.setTransform(a.html.slideshowCaptionInnerDiv, "");
                n || (R.setTransition(a.html.slideshowCaptionContinueSpan, ""), a.html.slideshowCaptionContinueSpan.style.display = "block", a.html.slideshowCaptionContinueSpan.style.opacity = "1");
                c && (c(), c = void 0)
            })))
    };
    this.expandCaption = function () {
        var c = a.html.slideshowCaptionContentDiv.querySelector(".caption-text");
        a.html.slideshowCaptionContentDiv.querySelector(".caption-text-content");
        c = c.scrollHeight - c.clientHeight;
        R.setTransition(this.html.slideshowCaptionInnerDiv, "transform .25s ease-out");
        R.setTransform(this.html.slideshowCaptionInnerDiv, "translate3d(0," + -c + "px,0)");
        a.html.slideshowControlsDiv.style.zIndex = "1";
        R.setTransition(a.html.slideshowCaptionContinueSpan, "");
        a.html.slideshowCaptionContinueSpan.style.display = "none";
        a.html.slideshowCaptionContinueSpan.style.opacity = "0"
    };
    this.collapseCaption = function () {
        R.setTransition(this.html.slideshowCaptionInnerDiv,
            "transform .25s ease-out");
        R.setTransform(this.html.slideshowCaptionInnerDiv, "translate3d(0,0,0)");
        R.onTransitionEnd(this.html.slideshowCaptionInnerDiv, function () {
            h || (a.html.slideshowCaptionContinueSpan.style.display = "", R.setTransition(a.html.slideshowCaptionContinueSpan, "opacity .15s linear"), a.html.slideshowCaptionContinueSpan.style.opacity = "1", a.html.slideshowControlsDiv.style.zIndex = "")
        })
    };
    this.captionClick = function (a) {
        n || (h ? this.collapseCaption() : this.expandCaption(), h = !h)
    };
    this.stopVideoPlayers =
        function () {
            for (var a = 0; a < this.videoPlayers.length; a++) {
                var c = this.videoPlayers[a];
                c && c.stop()
            }
        };
    this.dragIntentClear = function (c) {
        a.animating || (a.stopVideoPlayers(), c == DragHelper.DRAG_DIRECTION_X ? (R.setTransition(a.html.screenshotsDiv, ""), R.setTransition(a.html.bgScreenshotsDiv, ""), R.setTransition(a.html.paginationBarContentDiv, ""), a.dragHelper.onDrag = a.onDrag.bind(a), a.dragHelper.onComplete = a.onDragComplete.bind(a), a.dragHelper.onIntentClear = void 0) : (a.dragHelper.onDrag = void 0, a.dragHelper.onComplete = void 0, a.dragHelper.onIntentClear = void 0, a.dragHelper.stop()))
    };
    this.onResize = function () {
        768 > window.innerWidth && n ? (n = !1, this.reset()) : 768 < window.innerWidth && !n && (n = !0, this.reset())
    };
    this.reset = function () {
        h = l = k = !1;
        c = void 0;
        a.html.slideshowCaptionContinueSpan.style.display = "";
        a.html.slideshowCaptionContinueSpan.style.opacity = "1";
        R.setTransition(this.html.slideshowCaptionInnerDiv, "");
        R.setTransform(this.html.slideshowCaptionInnerDiv, "")
    }
};
R.VideoPlayer = function () {
    var a = this;
    this.html = {};
    this.loaded = this.loading = this.playing = !1;
    this.init = function (a, f) {
        this.delegate = f;
        a.videoPlayer = this;
        this.html.containerDiv = a;
        this.html.overlayDiv = a.querySelector(".video-player-overlay");
        this.html.playLink = this.html.overlayDiv.querySelector("a");
        this.videoUrl = a.getAttribute("data-video-url");
        this.html.videoElement = document.createElement("video");
        this.html.videoImg = a.querySelector("img");
        this.addListeners();
        return this
    };
    this.addListeners = function () {
        this.html.playLink.onclick =
            this.playLinkClick.bind(this);
        this.delegate || (this.html.overlayDiv.ontouchstart = function (a) {
            a.stopPropagation()
        });
        R.touch ? this.html.videoElement.addEventListener("webkitendfullscreen", this.videoEnded, !1) : this.html.videoElement.onended = this.videoEnded
    };
    this.playLinkClick = function (a) {
        this.toggle();
        return !1
    };
    this.videoEnded = function (d) {
        a.stop()
    };
    this.loadVideo = function (a) {
        this.html.videoElement.canPlayType("video/mp4") || (this.videoUrl = this.videoUrl.replace(/\.mov$/, ".ogg"));
        this.html.videoElement.src =
            this.videoUrl;
        this.html.videoElement.load();
        this.html.videoElement.onloadeddata = function () {
            a && a()
        }
    };
    this.stop = function () {
        R.removeClass(this.html.overlayDiv, "playing");
        R.removeClass(this.html.overlayDiv, "loading");
        this.html.videoImg.style.display = "";
        this.html.videoElement.onloadeddata = void 0;
        this.html.videoElement.removeEventListener("webkitendfullscreen", this.videoEnded);
        this.html.videoElement.parentNode && this.html.videoElement.parentNode.removeChild(this.html.videoElement);
        this.html.videoElement.pause();
        this.html.videoElement.currentTime = 0;
        this.playing = !1
    };
    this.play = function () {
        this.playing || (R.addClass(a.html.overlayDiv, "loading"), this.loadVideo(function () {
            R.removeClass(a.html.overlayDiv, "loading");
            R.addClass(a.html.overlayDiv, "playing");
            a.html.containerDiv.appendChild(a.html.videoElement);
            a.html.videoImg.style.display = "none";
            a.html.videoElement.play();
            a.playing = !0
        }))
    };
    this.toggle = function () {
        this.playing ? this.stop() : this.play()
    }
};
R.DeviceSlider = function () {
    var a = this;
    this.html = {};
    this.dragHelper = null;
    this.animating = !1;
    var d = 0, f = 0, g = 0, c = !1;
    this.init = function (a) {
        this.html.containerDiv = a;
        this.html.deviceDivs = a.querySelectorAll(".device");
        this.html.deviceGroupDiv = a.querySelector(".device-group");
        this.html.deviceGroupContentDiv = a.querySelector(".device-group-content");
        this.html.paginationBarDiv = a.querySelector(".pagination-bar");
        this.html.paginationBarOuterDiv = a.querySelector(".pagination-bar-outer");
        this.html.paginationBarInnerDiv =
            a.querySelector(".pagination-bar-inner");
        this.html.paginationBarContentDiv = a.querySelector(".pagination-bar-content");
        this.html.paginationBarHandleDiv = a.querySelector(".pagination-bar-handle");
        var c = this.html.deviceDivs[0].offsetWidth;
        this.dragHelper = (new DragHelper).init();
        this.dragHelper.getDimensionX = function () {
            return c
        };
        return this
    };
    this.activate = function () {
        (c = this.html.containerDiv.offsetWidth < this.html.deviceGroupContentDiv.offsetWidth) && this.enableSlideshow();
        this.addListeners()
    };
    this.deactivate =
        function () {
            this.removeListeners()
        };
    this.enableSlideshow = function () {
        this.html.paginationBarDiv.style.display = "block";
        this.calculateBounds();
        R.addClass(this.html.containerDiv, "device-slideshow-enabled");
        var a = R.normalize(0, -this.rightBoundP, this.leftBoundP, 1, 0);
        g = Math.round(a * (this.html.deviceDivs.length - 1));
        this.updateElements()
    };
    this.disableSlideshow = function () {
        R.removeClass(this.html.containerDiv, "device-slideshow-enabled");
        R.setTransform(this.html.deviceGroupDiv, "");
        this.html.paginationBarDiv.style.display =
            "none"
    };
    this.onDrag = function (c, g, l, n, p, r) {
        c = f + c / a.html.deviceGroupDiv.offsetWidth;
        g = R.normalize(c, -a.rightBoundP, a.leftBoundP, 1 - a.handleWidthP, 0);
        R.setTransform(a.html.deviceGroupDiv, "translate3d(" + 100 * c + "%,0,0)");
        R.setTransform(a.html.paginationBarContentDiv, "translate3d(" + 100 * g + "%,0,0)");
        d = c;
        return !1
    };
    this.onDragComplete = function (c, k) {
        if (c != DragHelper.OUTCOME_CLICK) {
            var l = R.normalize(d, -this.rightBoundP, this.leftBoundP, 1, 0), l = Math.ceil(l * (this.html.deviceDivs.length - 1));
            switch (c) {
                case DragHelper.OUTCOME_BACK:
                    l -=
                        1
            }
            g = l = Math.max(Math.min(l, this.html.deviceDivs.length - 1), 0);
            var n = g / (this.html.deviceDivs.length - 1), l = R.normalize(n, 1, 0, -this.rightBoundP, this.leftBoundP), n = R.normalize(n, 1, 0, 1 - this.handleWidthP, 0);
            d != l && (R.setTransition(this.html.deviceGroupDiv, "transform .2s ease-out"), R.setTransform(this.html.deviceGroupDiv, "translate3d(" + 100 * l + "%,0,0)"), R.setTransition(this.html.paginationBarContentDiv, "transform .2s ease-out"), R.setTransform(this.html.paginationBarContentDiv, "translate3d(" + 100 * n + "%,0,0)"), this.animating = !0, R.onTransitionEnd(this.html.paginationBarContentDiv, function () {
                R.setTransition(a.html.deviceGroupDiv, "");
                R.setTransition(a.html.paginationBarContentDiv, "");
                a.animating = !1
            }));
            f = l
        }
    };
    this.addListeners = function () {
        this.html.containerDiv[R.touch ? "ontouchstart" : "onmousedown"] = function (d) {
            if (!c)return !0;
            d.stopPropagation();
            a.dragHelper.start(d);
            a.dragHelper.onDrag = void 0;
            a.dragHelper.onComplete = void 0;
            a.dragHelper.onIntentClear = a.dragIntentClear
        };
        GlobalEvents.addListener(GlobalEvent.WINDOW_RESIZE, this.onResize.bind(this))
    };
    this.removeListeners = function () {
        this.html.containerDiv[R.touch ? "ontouchstart" : "onmousedown"] = void 0;
        GlobalEvents.removeListener(GlobalEvent.WINDOW_RESIZE, this.onResize.bind(this))
    };
    this.dragIntentClear = function (c) {
        a.animating || (c == DragHelper.DRAG_DIRECTION_X ? (R.setTransition(a.html.deviceGroupDiv, ""), R.setTransition(a.html.paginationBarContentDiv, ""), a.dragHelper.onDrag = a.onDrag.bind(a), a.dragHelper.onComplete = a.onDragComplete.bind(a), a.dragHelper.onIntentClear = void 0) : (a.dragHelper.onDrag = void 0,
                a.dragHelper.onComplete = void 0, a.dragHelper.onIntentClear = void 0, a.dragHelper.stop()))
    };
    this.onResize = function () {
        !c && this.html.containerDiv.offsetWidth < this.html.deviceGroupContentDiv.offsetWidth ? (this.enableSlideshow(), c = !0) : c && this.html.containerDiv.offsetWidth > this.html.deviceGroupContentDiv.offsetWidth ? (this.disableSlideshow(), c = !1) : c && (this.calculateBounds(), this.updateElements())
    };
    this.calculateBounds = function () {
        var a = (this.html.deviceGroupContentDiv.offsetWidth - this.html.containerDiv.offsetWidth) /
            2, c = this.html.deviceDivs[0];
        this.leftBound = a - c.offsetLeft + this.html.containerDiv.offsetWidth / 2 - c.offsetWidth / 2;
        this.leftBoundP = this.leftBound / this.html.deviceGroupDiv.offsetWidth;
        c = this.html.deviceDivs[this.html.deviceDivs.length - 1];
        this.rightBound = a - (this.html.deviceGroupContentDiv.offsetWidth - (c.offsetLeft + c.offsetWidth)) + this.html.containerDiv.offsetWidth / 2 - c.offsetWidth / 2;
        this.rightBoundP = this.rightBound / this.html.deviceGroupDiv.offsetWidth;
        this.handleWidthP = this.html.paginationBarHandleDiv.offsetWidth /
            this.html.paginationBarContentDiv.offsetWidth
    };
    this.updateElements = function () {
        var c = g / (this.html.deviceDivs.length - 1), d = R.normalize(c, 1, 0, -this.rightBoundP, this.leftBoundP), c = R.normalize(c, 1, 0, 1 - this.handleWidthP, 0);
        R.setTransition(a.html.deviceGroupDiv, "");
        R.setTransform(a.html.deviceGroupDiv, "translate3d(" + 100 * d + "%,0,0)");
        R.setTransition(a.html.paginationBarContentDiv, "");
        R.setTransform(a.html.paginationBarContentDiv, "translate3d(" + 100 * c + "%,0,0)");
        f = d
    }
};
R.SimpleSlider = function () {
    var a = this;
    this.html = {};
    this.dragHelper = null;
    this.animating = !1;
    var d = 0, f = 0;
    this.init = function (a) {
        this.html.containerDiv = a;
        this.html.containerDiv.simpleSlider = this;
        this.html.stampImagesDiv = a.querySelector(".stamp-images");
        this.html.stampImagesOverflowDiv = a.querySelector(".stamp-images-overflow");
        this.html.paginationBarDiv = a.querySelector(".pagination-bar");
        this.html.paginationBarOuterDiv = a.querySelector(".pagination-bar-outer");
        this.html.paginationBarInnerDiv = a.querySelector(".pagination-bar-inner");
        this.html.paginationBarContentDiv = a.querySelector(".pagination-bar-content");
        this.html.paginationBarHandleDiv = a.querySelector(".pagination-bar-handle");
        this.handleWidthP = this.html.paginationBarHandleDiv.offsetWidth / this.html.paginationBarContentDiv.offsetWidth;
        this.dragHelper = (new DragHelper).init();
        this.dragHelper.getDimensionX = function () {
            return 600
        };
        a = this.html.stampImagesDiv.offsetWidth;
        var c = this.html.stampImagesOverflowDiv.offsetWidth;
        this.leftBoundP = 0;
        this.rightBoundP = (c - a) / c;
        return this
    };
    this.activate =
        function () {
            this.addListeners()
        };
    this.deactivate = function () {
        this.removeListeners()
    };
    this.updateScrollIndicator = function () {
        var d = this.html.stampImagesOverflowDiv.offsetWidth, d = R.normalize(this.html.stampImagesDiv.scrollLeft / d, 0, (d - this.html.stampImagesDiv.offsetWidth) / d, 0, 1 - a.handleWidthP);
        R.setTransform(this.html.paginationBarContentDiv, "translate3d(" + 100 * d + "%,0,0)")
    };
    this.addListeners = function () {
        R.touch && (this.html.stampImagesDiv.onscroll = function () {
            a.updateScrollIndicator()
        });
        this.html.containerDiv[R.touch ?
            "ontouchstart" : "onmousedown"] = function (d) {
            d.stopPropagation();
            R.touch || a.animating || (a.dragHelper.start(d), a.dragHelper.onDrag = a.onDrag, a.dragHelper.onComplete = a.onDragComplete)
        }
    };
    this.removeListeners = function () {
        R.touch && (this.html.stampImagesDiv.onscroll = void 0);
        this.html.containerDiv[R.touch ? "ontouchstart" : "onmousedown"] = void 0
    };
    this.onDrag = function (g, c, h, k, l, n) {
        g = f + g / a.html.stampImagesOverflowDiv.offsetWidth;
        c = R.normalize(g, a.leftBoundP, a.rightBoundP, 0, 1 - a.handleWidthP);
        R.setTransform(a.html.stampImagesOverflowDiv,
            "translate3d(" + 100 * g + "%,0,0)");
        R.setTransform(a.html.paginationBarContentDiv, "translate3d(" + 100 * -c + "%,0,0)");
        d = g;
        return !1
    };
    this.onDragComplete = function (g, c) {
        if (g != DragHelper.OUTCOME_CLICK) {
            var h = !1;
            d > a.leftBoundP ? (d = a.leftBoundP, h = !0) : d < -a.rightBoundP && (d = -a.rightBoundP, h = !0);
            h && (R.setTransition(a.html.stampImagesOverflowDiv, "transform .2s ease-out"), R.setTransform(a.html.stampImagesOverflowDiv, "translate3d(" + 100 * d + "%,0,0)"), h = R.normalize(d, a.leftBoundP, a.rightBoundP, 0, 1 - a.handleWidthP), R.setTransition(a.html.paginationBarContentDiv,
                "transform .2s ease-out"), R.setTransform(a.html.paginationBarContentDiv, "translate3d(" + 100 * -h + "%,0,0)"), a.animating = !0, R.onTransitionEnd(a.html.paginationBarContentDiv, function () {
                R.setTransition(a.html.stampImagesOverflowDiv, "");
                R.setTransition(a.html.paginationBarContentDiv, "");
                a.animating = !1
            }));
            f = d
        }
    }
};
R.Fonts = function () {
    GlobalEvent.FONTS_READY = "global_event_fonts_ready";
    this.init = function () {
        window.WebFontConfig = {
            fontdeck: {id: "46186"}, typekit: {id: "djg5lpq"}, timeout: 5E3, loading: function () {
                GlobalEvents.dispatch(new GlobalEvent(GlobalEvent.FONTS_READY))
            }
        };
        (function () {
            var a = document.createElement("script");
            a.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1.5.6/webfont.js";
            a.type = "text/javascript";
            a.async = "true";
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(a, d)
        })();
        return this
    }
};
