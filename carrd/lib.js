require = function e(t, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u)return u(a, !0);
                if (o)return o(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = n[a] = {exports: {}};
            t[a][0].call(c.exports, function (e) {
                var n = t[a][1][e];
                return i(n ? n : e)
            }, c, c.exports, e, t, n, r)
        }
        return n[a].exports
    }

    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++)i(r[a]);
    return i
}({
    "jquery.touch": [function (e, t, n) {
        !function (e) {
            function t(e, t, n) {
                var r = this;
                r.settings = n, r.$element = e, r.$sourceElement = t, r.inTap = !1, r.inTapAndHold = !1, r.inDrag = !1, r.tapStart = null, r.dragStart = null, r.timerTap = null, r.timerTapAndHold = null, r.mouseDown = !1, r.x = null, r.y = null, r.ex = null, r.ey = null, r.xStart = null, r.yStart = null, r.exStart = null, r.eyStart = null, r.taps = 0, r.started = !1, r.ended = !1
            }

            function n(e, n, r) {
                var i = e[0];
                return "undefined" == typeof i._touch && (i._touch = new t(e, n, r)), i._touch
            }

            function r(e, t, n) {
                var r, i, o, a, s;
                return r = e.$element.offset(), i = e.$element.width(), o = e.$element.height(), a = Math.min(Math.max(t, r.left), r.left + i), s = Math.min(Math.max(n, r.top), r.top + o), {
                    x: a,
                    y: s
                }
            }

            var i = e(document), o = null, a = null, s = {
                useTouch: !0,
                useMouse: !0,
                trackDocument: !1,
                trackDocumentNormalize: !1,
                noClick: !1,
                dragThreshold: 10,
                dragDelay: 200,
                swipeThreshold: 30,
                tapDelay: 250,
                tapAndHoldDelay: 500,
                delegateSelector: null,
                dropFilter: !1,
                dropFilterTraversal: !0,
                coordinates: "page",
                preventDefault: {drag: !1, swipe: !1, tap: !1}
            };
            t.prototype.uses = function (t) {
                var n = e._data(this.$sourceElement[0], "events");
                switch (t) {
                    case"swipe":
                        return n.hasOwnProperty(t) || n.hasOwnProperty("swipeUp") || n.hasOwnProperty("swipeDown") || n.hasOwnProperty("swipeLeft") || n.hasOwnProperty("swipeRight");
                    case"drag":
                        return n.hasOwnProperty(t) || n.hasOwnProperty("dragStart") || n.hasOwnProperty("dragEnd");
                    case"tapAndHold":
                    case"doubleTap":
                        return n.hasOwnProperty(t);
                    case"tap":
                        return n.hasOwnProperty(t) || n.hasOwnProperty("doubleTap") || n.hasOwnProperty("tapAndHold")
                }
                return !1
            }, t.prototype.cancel = function (e) {
                var t = this;
                t.taps = 0, t.inTap = !1, t.inTapAndHold = !1, t.inDrag = !1, t.tapStart = null, t.dragStart = null, t.xStart = null, t.yStart = null, t.exStart = null, t.eyStart = null, e && (t.mouseDown = !1)
            }, t.prototype.doStart = function (e, t, n) {
                var r = this, i = r.$element.offset();
                e.stopPropagation(), (r.uses("drag") && r.settings.preventDefault.drag(r) || r.uses("swipe") && r.settings.preventDefault.swipe(r) || r.uses("tap") && r.settings.preventDefault.tap(r)) && e.preventDefault(), r.uses("tapAndHold") && r.$element.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)").css("-webkit-touch-callout", "none").css("-webkit-user-select", "none"), r.x = t, r.y = n, r.ex = t - i.left, r.ey = n - i.top, r.tapStart = Date.now(), clearTimeout(r.timerTap), r.timerTap = setTimeout(function () {
                    r.inTap && r.taps > 0 && (r.$element.trigger(2 == r.taps ? "doubleTap" : "tap", {
                        taps: r.taps,
                        x: r.x,
                        y: r.y,
                        ex: r.ex,
                        ey: r.ey,
                        duration: Date.now() - r.tapStart,
                        event: e,
                        touch: r
                    }), r.cancel()), r.timerTap = null
                }, r.settings.tapDelay), r.uses("tapAndHold") && (clearTimeout(r.timerTapAndHold), r.timerTapAndHold = setTimeout(function () {
                    r.inTap && (r.$element.trigger("tapAndHold", {
                        x: r.x,
                        y: r.y,
                        ex: r.ex,
                        ey: r.ey,
                        duration: Date.now() - r.tapStart,
                        event: e,
                        touch: r
                    }), r.cancel()), r.timerTapAndHold = null, r.inTapAndHold = !0
                }, r.settings.tapAndHoldDelay)), r.inTap = !0
            }, t.prototype.doMove = function (t, n, r) {
                var s, u, l = this, c = l.$element.offset(), f = (Math.abs(l.x - n) + Math.abs(l.y - r)) / 2;
                if (t.stopPropagation(), (l.uses("swipe") && l.settings.preventDefault.swipe(l) || l.uses("drag") && l.settings.preventDefault.drag(l)) && t.preventDefault(), f > 2 && clearTimeout(l.timerTapAndHold), l.inDrag && o == l) {
                    if (l.$element.trigger("drag", {
                            x: n,
                            y: r,
                            ex: n - c.left,
                            ey: r - c.top,
                            start: {x: l.xStart, y: l.yStart, ex: l.exStart, ey: l.eyStart},
                            event: t,
                            touch: l,
                            exStart: l.exStart,
                            eyStart: l.eyStart
                        }), l.$element.css("pointer-events", "none"), s = "fixed" == l.$element.css("position") ? document.elementFromPoint(n - i.scrollLeft(), r - i.scrollTop()) : document.elementFromPoint(n, r), l.$element.css("pointer-events", ""), s) {
                        if (l.settings.dropFilter !== !1)switch (u = typeof l.settings.dropFilter) {
                            case"string":
                                if (l.settings.dropFilterTraversal)for (; s && !e(s).is(l.settings.dropFilter);)s = s.parentElement; else e(s).is(l.settings.dropFilter) || (s = null);
                                break;
                            case"function":
                                if (l.settings.dropFilterTraversal)for (; s && l.settings.dropFilter(l.$element[0], s) !== !0;)s = s.parentElement; else l.settings.dropFilter(l.$element[0], s) === !1 && (s = null);
                                break;
                            default:
                            case"boolean":
                                if (l.settings.dropFilter === !0)for (; s.parentElement != l.$element[0].parentElement;)if (s = s.parentElement, !s) {
                                    s = null;
                                    break
                                }
                        }
                        s === l.$element[0] && (s = null)
                    }
                    a && a !== s && (l.$element.trigger("dragLeave", {
                        element: a,
                        event: t,
                        touch: l
                    }), a = null), !a && s && (a = s, l.$element.trigger("dragEnter", {
                        element: a,
                        event: t,
                        touch: l
                    })), a && (c = e(a).offset(), l.$element.trigger("dragOver", {
                        element: a,
                        event: t,
                        touch: l,
                        x: n,
                        y: r,
                        ex: n - c.left,
                        ey: r - c.top
                    }))
                } else if (f > l.settings.dragThreshold) {
                    if (Date.now() - l.tapStart < l.settings.dragDelay)return void l.cancel();
                    l.cancel(), l.inDrag = !0, l.dragStart = Date.now(), l.xStart = n, l.yStart = r, l.exStart = n - c.left, l.eyStart = r - c.top, l.uses("drag") && l.settings.preventDefault.drag(l) && t.preventDefault(), l.$element.trigger("dragStart", {
                        x: l.xStart,
                        y: l.yStart,
                        ex: l.exStart,
                        ey: l.eyStart,
                        event: t,
                        touch: l
                    }), o = l
                }
            }, t.prototype.doEnd = function (t, n, r) {
                var i, s, u, l = this, c = l.$element.offset(), f = Math.abs(l.x - n), d = Math.abs(l.y - r);
                t.stopPropagation(), l.inTap ? (clearTimeout(l.timerTapAndHold), l.taps++, (!l.timerTap || 1 == l.taps && !l.uses("doubleTap") || 2 == l.taps && l.uses("doubleTap")) && (l.$element.trigger(2 == l.taps ? "doubleTap" : "tap", {
                    taps: l.taps,
                    x: l.x,
                    y: l.y,
                    ex: l.ex,
                    ey: l.ey,
                    duration: Date.now() - l.tapStart,
                    event: t,
                    touch: l
                }), l.cancel())) : l.inDrag ? (a && (c = e(a).offset(), l.$element.trigger("drop", {
                    element: a,
                    event: t,
                    touch: l,
                    x: n,
                    y: r,
                    ex: n - c.left,
                    ey: r - c.top
                }), a = null), u = Date.now() - l.dragStart, i = Math.sqrt(Math.pow(Math.abs(l.x - n), 2) + Math.pow(Math.abs(l.y - r), 2)), s = i / u, l.$element.trigger("dragEnd", {
                    start: {
                        x: l.x,
                        y: l.y,
                        ex: l.ex,
                        ey: l.ey
                    },
                    end: {x: n, y: r, ex: n - c.left, ey: r - c.top},
                    distance: i,
                    duration: u,
                    velocity: s,
                    event: t,
                    touch: l
                }), o = null, (f > l.settings.swipeThreshold || d > l.settings.swipeThreshold) && (l.$element.trigger("swipe", {
                    distance: i,
                    duration: u,
                    velocity: s,
                    event: t,
                    touch: l
                }), f > d ? (s = f / u, n < l.x ? l.$element.trigger("swipeLeft", {
                    distance: f,
                    duration: u,
                    velocity: s,
                    event: t,
                    touch: l
                }) : l.$element.trigger("swipeRight", {
                    distance: f,
                    duration: u,
                    velocity: s,
                    event: t,
                    touch: l
                })) : d > f && (s = d / u, r < l.y ? l.$element.trigger("swipeUp", {
                        distance: d,
                        duration: u,
                        velocity: s,
                        event: t,
                        touch: l
                    }) : l.$element.trigger("swipeDown", {
                        distance: d,
                        duration: u,
                        velocity: s,
                        event: t,
                        touch: l
                    }))), l.inDrag = !1) : l.inTapAndHold && (clearTimeout(l.timerTapAndHold), l.$element.trigger("tapAndHoldEnd", {
                        x: l.x,
                        y: l.y,
                        event: t,
                        touch: l
                    }), l.inTapAndHold = !1)
            }, e.fn.touch = function (t) {
                var n = e(this);
                if (this.length > 1)for (var r = 0; r < this.length; r++)e.touch(e(this[r]), t); else 1 == this.length && e.touch(n, t);
                return n
            }, e.fn.enableTouch = function (t) {
                return e(this).touch(t)
            }, e.touch = function (t, o) {
                var a = {};
                if (a = e.extend(a, s), a = e.extend(a, o), "function" != typeof a.preventDefault.drag && (a.preventDefault.drag = a.preventDefault.drag === !0 ? function (e) {
                        return !0
                    } : function (e) {
                        return !1
                    }), "function" != typeof a.preventDefault.swipe && (a.preventDefault.swipe = a.preventDefault.swipe === !0 ? function (e) {
                        return !0
                    } : function (e) {
                        return !1
                    }), "function" != typeof a.preventDefault.tap && (a.preventDefault.tap = a.preventDefault.tap === !0 ? function (e) {
                        return !0
                    } : function (e) {
                        return !1
                    }), a.noClick && t.on("click", function (e) {
                        e.preventDefault()
                    }), a.useTouch) {
                    var u = function (r) {
                        var i = e(this), o = n(i, t, a);
                        o.started = !0, o.doStart(r, r.originalEvent.touches[0][a.coordinates + "X"], r.originalEvent.touches[0][a.coordinates + "Y"]), setTimeout(function () {
                            o.started = !1
                        }, 1e3)
                    };
                    t.on("touchstart", u), a.delegateSelector && t.on("touchstart", a.delegateSelector, u);
                    var l = function (i) {
                        var o = e(this), s = n(o, t, a), u = i.originalEvent.touches[0][a.coordinates + "X"],
                            l = i.originalEvent.touches[0][a.coordinates + "Y"];
                        if (s.settings.trackDocument && s.settings.trackDocumentNormalize) {
                            var c = r(s, u, l);
                            u = c.x, l = c.y
                        }
                        s.doMove(i, u, l)
                    };
                    t.on("touchmove", l), a.delegateSelector && t.on("touchmove", a.delegateSelector, l);
                    var c = function (i) {
                        var o = e(this), s = n(o, t, a);
                        s.ended = !0;
                        var u = r(s, i.originalEvent.changedTouches[0][a.coordinates + "X"], i.originalEvent.changedTouches[0][a.coordinates + "Y"]);
                        s.doEnd(i, u.x, u.y), setTimeout(function () {
                            s.ended = !1
                        }, 1e3)
                    };
                    t.on("touchend", c), a.delegateSelector && t.on("touchend", a.delegateSelector, c)
                }
                if (a.useMouse) {
                    var f = function (r) {
                        var i = e(this), o = n(i, t, a);
                        return !o.started && (o.mouseDown = !0, void o.doStart(r, r[a.coordinates + "X"], r[a.coordinates + "Y"]))
                    };
                    t.on("mousedown", f), a.delegateSelector && t.on("mousedown", a.delegateSelector, f);
                    var d = function (r) {
                        var i = e(this), o = n(i, t, a);
                        o.mouseDown && o.doMove(r, r[a.coordinates + "X"], r[a.coordinates + "Y"])
                    };
                    t.on("mousemove", d), a.delegateSelector && t.on("mousemove", a.delegateSelector, d);
                    var p = function (r) {
                        var o = e(this), s = n(o, t, a);
                        return !s.ended && (i.triggerHandler("mouseup", r), s.doEnd(r, r[a.coordinates + "X"], r[a.coordinates + "Y"]), void(s.mouseDown = !1))
                    };
                    t.on("mouseup", p), a.delegateSelector && t.on("mouseup", a.delegateSelector, p)
                }
                a.trackDocument || t.on("mouseleave", function (r) {
                    var i = e(this), o = n(i, t, a);
                    o.doEnd(r, r[a.coordinates + "X"], r[a.coordinates + "Y"]), o.mouseDown = !1
                })
            }, i.on("mousemove", function (e) {
                var t = o;
                if (t && t.settings.useMouse && t.mouseDown && t.settings.trackDocument) {
                    var n = e[t.settings.coordinates + "X"], i = e[t.settings.coordinates + "Y"];
                    if (t.settings.trackDocumentNormalize) {
                        var a = r(t, n, i);
                        n = a.x, i = a.y
                    }
                    t.doMove(e, n, i)
                }
            }).on("mouseup", function (e, t) {
                var n = o;
                if (n && n.settings.useMouse && n.settings.trackDocument) {
                    if ("undefined" != typeof t && (e = t), !(n.settings.coordinates + "X" in e))return;
                    var i = e[n.settings.coordinates + "X"], a = e[n.settings.coordinates + "Y"];
                    if (n.settings.trackDocumentNormalize) {
                        var s = r(n, i, a);
                        i = s.x, a = s.y
                    }
                    n.doEnd(e, i, a), n.mouseDown = !1
                }
            })
        }(jQuery)
    }, {}], jquery: [function (e, t, n) {
        !function (e, n) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (e) {
                if (!e.document)throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(e)
        }("undefined" != typeof window ? window : this, function (e, t) {
            function n(e) {
                var t = "length" in e && e.length, n = K.type(e);
                return "function" !== n && !K.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
            }

            function r(e, t, n) {
                if (K.isFunction(t))return K.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType)return K.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (se.test(t))return K.filter(t, e, n);
                    t = K.filter(t, e)
                }
                return K.grep(e, function (e) {
                    return U.call(t, e) >= 0 !== n
                })
            }

            function i(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function o(e) {
                var t = he[e] = {};
                return K.each(e.match(pe) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function a() {
                J.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), K.ready()
            }

            function s() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function () {
                        return {}
                    }
                }), this.expando = K.expando + s.uid++
            }

            function u(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : xe.test(n) ? K.parseJSON(n) : n)
                    } catch (e) {
                    }
                    ye.set(e, t, n)
                } else n = void 0;
                return n
            }

            function l() {
                return !0
            }

            function c() {
                return !1
            }

            function f() {
                try {
                    return J.activeElement
                } catch (e) {
                }
            }

            function d(e, t) {
                return K.nodeName(e, "table") && K.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function p(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function h(e) {
                var t = qe.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function g(e, t) {
                for (var n = 0, r = e.length; n < r; n++)ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
            }

            function m(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (ve.hasData(e) && (o = ve.access(e), a = ve.set(t, o), l = o.events)) {
                        delete a.handle, a.events = {};
                        for (i in l)for (n = 0, r = l[i].length; n < r; n++)K.event.add(t, i, l[i][n])
                    }
                    ye.hasData(e) && (s = ye.access(e), u = K.extend({}, s), ye.set(t, u))
                }
            }

            function v(e, t) {
                var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && K.nodeName(e, t) ? K.merge([e], n) : n
            }

            function y(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Se.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function x(t, n) {
                var r, i = K(n.createElement(t)).appendTo(n.body),
                    o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : K.css(i[0], "display");
                return i.detach(), o
            }

            function b(e) {
                var t = J, n = Ie[e];
                return n || (n = x(e, t), "none" !== n && n || (Re = (Re || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Re[0].contentDocument, t.write(), t.close(), n = x(e, t), Re.detach()), Ie[e] = n), n
            }

            function w(e, t, n) {
                var r, i, o, a, s = e.style;
                return n = n || We(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || K.contains(e.ownerDocument, e) || (a = K.style(e, t)), ze.test(a) && _e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function T(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function C(e, t) {
                if (t in e)return t;
                for (var n = t[0].toUpperCase() + t.slice(1), r = t,
                         i = Ze.length; i--;)if (t = Ze[i] + n, t in e)return t;
                return r
            }

            function S(e, t, n) {
                var r = Xe.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function k(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
                         a = 0; o < 4; o += 2)"margin" === n && (a += K.css(e, n + Te[o], !0, i)), r ? ("content" === n && (a -= K.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (a -= K.css(e, "border" + Te[o] + "Width", !0, i))) : (a += K.css(e, "padding" + Te[o], !0, i), "padding" !== n && (a += K.css(e, "border" + Te[o] + "Width", !0, i)));
                return a
            }

            function D(e, t, n) {
                var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = We(e),
                    a = "border-box" === K.css(e, "boxSizing", !1, o);
                if (i <= 0 || null == i) {
                    if (i = w(e, t, o), (i < 0 || null == i) && (i = e.style[t]), ze.test(i))return i;
                    r = a && (G.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
            }

            function E(e, t) {
                for (var n, r, i, o = [], a = 0,
                         s = e.length; a < s; a++)r = e[a], r.style && (o[a] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[a] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : K.css(r, "display"))));
                for (a = 0; a < s; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
                return e
            }

            function A(e, t, n, r, i) {
                return new A.prototype.init(e, t, n, r, i)
            }

            function N() {
                return setTimeout(function () {
                    Ge = void 0
                }), Ge = K.now()
            }

            function j(e, t) {
                var n, r = 0, i = {height: e};
                for (t = t ? 1 : 0; r < 4; r += 2 - t)n = Te[r], i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function M(e, t, n) {
                for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0,
                         a = i.length; o < a; o++)if (r = i[o].call(n, t, e))return r
            }

            function H(e, t, n) {
                var r, i, o, a, s, u, l, c, f = this, d = {}, p = e.style, h = e.nodeType && Ce(e),
                    g = ve.get(e, "fxshow");
                n.queue || (s = K._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || u()
                }), s.unqueued++, f.always(function () {
                    f.always(function () {
                        s.unqueued--, K.queue(e, "fx").length || s.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = K.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === K.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                }));
                for (r in t)if (i = t[r], Qe.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r])continue;
                        h = !0
                    }
                    d[r] = g && g[r] || K.style(e, r)
                } else l = void 0;
                if (K.isEmptyObject(d)) "inline" === ("none" === l ? b(e.nodeName) : l) && (p.display = l); else {
                    g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? K(e).show() : f.done(function () {
                        K(e).hide()
                    }), f.done(function () {
                        var t;
                        ve.remove(e, "fxshow");
                        for (t in d)K.style(e, t, d[t])
                    });
                    for (r in d)a = M(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function $(e, t) {
                var n, r, i, o, a;
                for (n in e)if (r = K.camelCase(n), i = t[r], o = e[n], K.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = K.cssHooks[r], a && "expand" in a) {
                    o = a.expand(o), delete e[r];
                    for (n in o)n in e || (e[n] = o[n], t[n] = i)
                } else t[r] = i
            }

            function L(e, t, n) {
                var r, i, o = 0, a = tt.length, s = K.Deferred().always(function () {
                    delete u.elem
                }), u = function () {
                    if (i)return !1;
                    for (var t = Ge || N(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0,
                             o = 1 - r, a = 0, u = l.tweens.length; a < u; a++)l.tweens[a].run(o);
                    return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
                }, l = s.promise({
                    elem: e,
                    props: K.extend({}, t),
                    opts: K.extend(!0, {specialEasing: {}}, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Ge || N(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = K.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0, r = t ? l.tweens.length : 0;
                        if (i)return this;
                        for (i = !0; n < r; n++)l.tweens[n].run(1);
                        return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                    }
                }), c = l.props;
                for ($(c, l.opts.specialEasing); o < a; o++)if (r = tt[o].call(l, e, c, l.opts))return r;
                return K.map(c, M, l), K.isFunction(l.opts.start) && l.opts.start.call(e, l), K.fx.timer(K.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }

            function O(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0, o = t.toLowerCase().match(pe) || [];
                    if (K.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function q(e, t, n, r) {
                function i(s) {
                    var u;
                    return o[s] = !0, K.each(e[s] || [], function (e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                    }), u
                }

                var o = {}, a = e === xt;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }

            function F(e, t) {
                var n, r, i = K.ajaxSettings.flatOptions || {};
                for (n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && K.extend(!0, e, r), e
            }

            function P(e, t, n) {
                for (var r, i, o, a, s = e.contents,
                         u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)for (i in s)if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
                if (u[0] in n) o = u[0]; else {
                    for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break
                        }
                        a || (a = i)
                    }
                    o = o || a
                }
                if (o)return o !== u[0] && u.unshift(o), n[o]
            }

            function R(e, t, n, r) {
                var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                if (c[1])for (a in e.converters)l[a.toLowerCase()] = e.converters[a];
                for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o], !a)for (i in l)if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
                    if (a !== !0)if (a && e.throws) t = a(t); else try {
                        t = a(t)
                    } catch (e) {
                        return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
                    }
                }
                return {state: "success", data: t}
            }

            function I(e, t, n, r) {
                var i;
                if (K.isArray(t)) K.each(t, function (t, i) {
                    n || St.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                }); else if (n || "object" !== K.type(t)) r(e, t); else for (i in t)I(e + "[" + i + "]", t[i], n, r)
            }

            function _(e) {
                return K.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }

            var z = [], W = z.slice, B = z.concat, X = z.push, U = z.indexOf, V = {}, Y = V.toString,
                Z = V.hasOwnProperty, G = {}, J = e.document, Q = "2.1.4", K = function (e, t) {
                    return new K.fn.init(e, t)
                }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, re = function (e, t) {
                    return t.toUpperCase()
                };
            K.fn = K.prototype = {
                jquery: Q, constructor: K, selector: "", length: 0, toArray: function () {
                    return W.call(this)
                }, get: function (e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : W.call(this)
                }, pushStack: function (e) {
                    var t = K.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                }, each: function (e, t) {
                    return K.each(this, e, t)
                }, map: function (e) {
                    return this.pushStack(K.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                }, slice: function () {
                    return this.pushStack(W.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: X, sort: z.sort, splice: z.splice
            }, K.extend = K.fn.extend = function () {
                var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || K.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s]))for (t in e)n = a[t], r = e[t], a !== r && (l && r && (K.isPlainObject(r) || (i = K.isArray(r))) ? (i ? (i = !1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, a[t] = K.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, K.extend({
                expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                    throw new Error(e)
                }, noop: function () {
                }, isFunction: function (e) {
                    return "function" === K.type(e)
                }, isArray: Array.isArray, isWindow: function (e) {
                    return null != e && e === e.window
                }, isNumeric: function (e) {
                    return !K.isArray(e) && e - parseFloat(e) + 1 >= 0
                }, isPlainObject: function (e) {
                    return "object" === K.type(e) && !e.nodeType && !K.isWindow(e) && !(e.constructor && !Z.call(e.constructor.prototype, "isPrototypeOf"))
                }, isEmptyObject: function (e) {
                    var t;
                    for (t in e)return !1;
                    return !0
                }, type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
                }, globalEval: function (e) {
                    var t, n = eval;
                    e = K.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                }, camelCase: function (e) {
                    return e.replace(te, "ms-").replace(ne, re)
                }, nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }, each: function (e, t, r) {
                    var i, o = 0, a = e.length, s = n(e);
                    if (r) {
                        if (s)for (; o < a && (i = t.apply(e[o], r), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], r), i === !1)break
                    } else if (s)for (; o < a && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
                    return e
                }, trim: function (e) {
                    return null == e ? "" : (e + "").replace(ee, "")
                }, makeArray: function (e, t) {
                    var r = t || [];
                    return null != e && (n(Object(e)) ? K.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
                }, inArray: function (e, t, n) {
                    return null == t ? -1 : U.call(t, e, n)
                }, merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r];
                    return e.length = i, e
                }, grep: function (e, t, n) {
                    for (var r, i = [], o = 0, a = e.length,
                             s = !n; o < a; o++)r = !t(e[o], o), r !== s && i.push(e[o]);
                    return i
                }, map: function (e, t, r) {
                    var i, o = 0, a = e.length, s = n(e), u = [];
                    if (s)for (; o < a; o++)i = t(e[o], o, r), null != i && u.push(i); else for (o in e)i = t(e[o], o, r), null != i && u.push(i);
                    return B.apply([], u)
                }, guid: 1, proxy: function (e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), K.isFunction(e))return r = W.call(arguments, 2), i = function () {
                        return e.apply(t || this, r.concat(W.call(arguments)))
                    }, i.guid = e.guid = e.guid || K.guid++, i
                }, now: Date.now, support: G
            }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                V["[object " + t + "]"] = t.toLowerCase()
            });
            var ie = function (e) {
                function t(e, t, n, r) {
                    var i, o, a, s, u, l, f, p, h, g;
                    if ((t ? t.ownerDocument || t : I) !== H && M(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)return n;
                    if (!r && L) {
                        if (11 !== s && (i = ye.exec(e)))if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode)return n;
                                if (o.id === a)return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && P(t, o) && o.id === a)return n.push(o), n
                        } else {
                            if (i[2])return Q.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && w.getElementsByClassName)return Q.apply(n, t.getElementsByClassName(a)), n
                        }
                        if (w.qsa && (!O || !O.test(e))) {
                            if (p = f = R, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (l = k(e), (f = t.getAttribute("id")) ? p = f.replace(be, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;)l[u] = p + d(l[u]);
                                h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
                            }
                            if (g)try {
                                return Q.apply(n, h.querySelectorAll(g)), n
                            } catch (e) {
                            } finally {
                                f || t.removeAttribute("id")
                            }
                        }
                    }
                    return E(e.replace(ue, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }

                    var t = [];
                    return e
                }

                function r(e) {
                    return e[R] = !0, e
                }

                function i(e) {
                    var t = H.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;)T.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                    if (r)return r;
                    if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function l(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, r) {
                            for (var i, o = e([], n.length, t),
                                     a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function f() {
                }

                function d(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
                    return r
                }

                function p(e, t, n) {
                    var r = t.dir, i = n && "parentNode" === r, o = z++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
                    } : function (t, n, a) {
                        var s, u, l = [_, o];
                        if (a) {
                            for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
                        } else for (; t = t[r];)if (1 === t.nodeType || i) {
                            if (u = t[R] || (t[R] = {}), (s = u[r]) && s[0] === _ && s[1] === o)return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a))return !0
                        }
                    }
                }

                function h(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                        return !0
                    } : e[0]
                }

                function g(e, n, r) {
                    for (var i = 0, o = n.length; i < o; i++)t(e, n[i], r);
                    return r
                }

                function m(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length,
                             l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }

                function v(e, t, n, i, o, a) {
                    return i && !i[R] && (i = v(i)), o && !o[R] && (o = v(o, a)), r(function (r, a, s, u) {
                        var l, c, f, d = [], p = [], h = a.length, v = r || g(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !r && t ? v : m(v, d, e, s, u), x = n ? o || (r ? e : h || i) ? [] : a : y;
                        if (n && n(y, x, s, u), i)for (l = m(x, p), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[p[c]] = !(y[p[c]] = f));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                                    o(null, x = [], l, u)
                                }
                                for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                            }
                        } else x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x)
                    })
                }

                function y(e) {
                    for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0,
                             u = p(function (e) {
                                 return e === t
                             }, a, !0), l = p(function (e) {
                            return ee(t, e) > -1
                        }, a, !0), c = [function (e, n, r) {
                            var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                            return t = null, i
                        }]; s < i; s++)if (n = T.relative[e[s].type]) c = [p(h(c), n)]; else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                            for (r = ++s; r < i && !T.relative[e[r].type]; r++);
                            return v(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ue, "$1"), n, s < r && y(e.slice(s, r)), r < i && y(e = e.slice(r)), r < i && d(e))
                        }
                        c.push(n)
                    }
                    return h(c)
                }

                function x(e, n) {
                    var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) {
                        var c, f, d, p = 0, h = "0", g = r && [], v = [], y = A, x = r || o && T.find.TAG("*", l),
                            b = _ += null == y ? 1 : Math.random() || .1, w = x.length;
                        for (l && (A = a !== H && a); h !== w && null != (c = x[h]); h++) {
                            if (o && c) {
                                for (f = 0; d = e[f++];)if (d(c, a, s)) {
                                    u.push(c);
                                    break
                                }
                                l && (_ = b)
                            }
                            i && ((c = !d && c) && p--, r && g.push(c))
                        }
                        if (p += h, i && h !== p) {
                            for (f = 0; d = n[f++];)d(g, v, a, s);
                            if (r) {
                                if (p > 0)for (; h--;)g[h] || v[h] || (v[h] = G.call(u));
                                v = m(v)
                            }
                            Q.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                        }
                        return l && (_ = b, A = y), g
                    };
                    return i ? r(a) : a
                }

                var b, w, T, C, S, k, D, E, A, N, j, M, H, $, L, O, q, F, P, R = "sizzle" + 1 * new Date,
                    I = e.document, _ = 0, z = 0, W = n(), B = n(), X = n(), U = function (e, t) {
                        return e === t && (j = !0), 0
                    }, V = 1 << 31, Y = {}.hasOwnProperty, Z = [], G = Z.pop, J = Z.push, Q = Z.push, K = Z.slice,
                    ee = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++)if (e[n] === t)return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = re.replace("w", "w#"),
                    oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                    ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                    se = new RegExp(ne + "+", "g"),
                    ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    le = new RegExp("^" + ne + "*," + ne + "*"),
                    ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(ae),
                    pe = new RegExp("^" + ie + "$"), he = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g,
                    we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Te = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, Ce = function () {
                        M()
                    };
                try {
                    Q.apply(Z = K.call(I.childNodes), I.childNodes), Z[I.childNodes.length].nodeType
                } catch (e) {
                    Q = {
                        apply: Z.length ? function (e, t) {
                            J.apply(e, K.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, S = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, M = t.setDocument = function (e) {
                    var t, n, r = e ? e.ownerDocument || e : I;
                    return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, $ = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), L = !S(r), w.attributes = i(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = i(function (e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function (e) {
                        return $.appendChild(e).id = R, !r.getElementsByName || !r.getElementsByName(R).length
                    }), w.getById ? (T.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && L) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, T.filter.ID = function (e) {
                        var t = e.replace(we, Te);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete T.find.ID, T.filter.ID = function (e) {
                        var t = e.replace(we, Te);
                        return function (e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];)1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                            if (L)return t.getElementsByClassName(e)
                        }, q = [], O = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function (e) {
                        $.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || O.push(".#.+[+~]")
                    }), i(function (e) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (w.matchesSelector = ve.test(F = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && i(function (e) {
                        w.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), q.push("!=", ae)
                    }), O = O.length && new RegExp(O.join("|")), q = q.length && new RegExp(q.join("|")), t = ve.test($.compareDocumentPosition), P = t || ve.test($.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)for (; t = t.parentNode;)if (t === e)return !0;
                        return !1
                    }, U = t ? function (e, t) {
                        if (e === t)return j = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === I && P(I, e) ? -1 : t === r || t.ownerDocument === I && P(I, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t)return j = !0, 0;
                        var n, i = 0, o = e.parentNode, s = t.parentNode, u = [e], l = [t];
                        if (!o || !s)return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                        if (o === s)return a(e, t);
                        for (n = e; n = n.parentNode;)u.unshift(n);
                        for (n = t; n = n.parentNode;)l.unshift(n);
                        for (; u[i] === l[i];)i++;
                        return i ? a(u[i], l[i]) : u[i] === I ? -1 : l[i] === I ? 1 : 0
                    }, r) : H
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== H && M(e), n = n.replace(fe, "='$1']"), w.matchesSelector && L && (!q || !q.test(n)) && (!O || !O.test(n)))try {
                        var r = F.call(e, n);
                        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
                    } catch (e) {
                    }
                    return t(n, H, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== H && M(e), P(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== H && M(e);
                    var n = T.attrHandle[t.toLowerCase()],
                        r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
                    return void 0 !== r ? r : w.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [], r = 0, i = 0;
                    if (j = !w.detectDuplicates, N = !w.sortStable && e.slice(0), e.sort(U), j) {
                        for (; t = e[i++];)t === e[i] && (r = n.push(i));
                        for (; r--;)e.splice(n[r], 1)
                    }
                    return N = null, e
                }, C = t.getText = function (e) {
                    var t, n = "", r = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent)return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
                        } else if (3 === i || 4 === i)return e.nodeValue
                    } else for (; t = e[r++];)n += C(t);
                    return n
                }, T = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: he,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(we, Te).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = W[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                        }, ATTR: function (e, n, r) {
                            return function (i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                            }
                        }, CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === r && 0 === i ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, u) {
                                var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(), y = !u && !s;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = t; f = f[g];)if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (c = m[R] || (m[R] = {}), l = c[e] || [], p = l[0] === _ && l[1], d = l[0] === _ && l[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (d = p = 0) || h.pop();)if (1 === f.nodeType && ++d && f === t) {
                                            c[e] = [_, p, d];
                                            break
                                        }
                                    } else if (y && (l = (t[R] || (t[R] = {}))[e]) && l[0] === _) d = l[1]; else for (; (f = ++p && f && f[g] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[R] || (f[R] = {}))[e] = [_, d]), f !== t)););
                                    return d -= i, d === r || d % r === 0 && d / r >= 0
                                }
                            }
                        }, PSEUDO: function (e, n) {
                            var i,
                                o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                for (var r, i = o(e, n), a = i.length; a--;)r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                            }) : function (e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [], n = [], i = D(e.replace(ue, "$1"));
                            return i[R] ? r(function (e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function (e, r, o) {
                                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }), has: r(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }), contains: r(function (e) {
                            return e = e.replace(we, Te), function (t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                        }), lang: r(function (e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(), function (t) {
                                var n;
                                do if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === $
                        }, focus: function (e) {
                            return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return e.disabled === !1
                        }, disabled: function (e) {
                            return e.disabled === !0
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                            return !0
                        }, parent: function (e) {
                            return !T.pseudos.empty(e)
                        }, header: function (e) {
                            return me.test(e.nodeName)
                        }, input: function (e) {
                            return ge.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: l(function () {
                            return [0]
                        }), last: l(function (e, t) {
                            return [t - 1]
                        }), eq: l(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }), even: l(function (e, t) {
                            for (var n = 0; n < t; n += 2)e.push(n);
                            return e
                        }), odd: l(function (e, t) {
                            for (var n = 1; n < t; n += 2)e.push(n);
                            return e
                        }), lt: l(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
                            return e
                        }), gt: l(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                            return e
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[b] = s(b);
                for (b in{submit: !0, reset: !0})T.pseudos[b] = u(b);
                return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function (e, n) {
                    var r, i, o, a, s, u, l, c = B[e + " "];
                    if (c)return n ? 0 : c.slice(0);
                    for (s = e, u = [], l = T.preFilter; s;) {
                        r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(ue, " ")
                        }), s = s.slice(r.length));
                        for (a in T.filter)!(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r)break
                    }
                    return n ? s.length : s ? t.error(e) : B(e, u).slice(0)
                }, D = t.compile = function (e, t) {
                    var n, r = [], i = [], o = X[e + " "];
                    if (!o) {
                        for (t || (t = k(e)), n = t.length; n--;)o = y(t[n]), o[R] ? r.push(o) : i.push(o);
                        o = X(e, x(i, r)), o.selector = e
                    }
                    return o
                }, E = t.select = function (e, t, n, r) {
                    var i, o, a, s, u, l = "function" == typeof e && e, f = !r && k(e = l.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && L && T.relative[o[1].type]) {
                            if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t)return n;
                            l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && d(o), !e)return Q.apply(n, r), n;
                            break
                        }
                    }
                    return (l || D(e, f))(r, t, !L, n, xe.test(e) && c(t.parentNode) || t), n
                }, w.sortStable = R.split("").sort(U).join("") === R, w.detectDuplicates = !!j, M(), w.sortDetached = i(function (e) {
                    return 1 & e.compareDocumentPosition(H.createElement("div"))
                }), i(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (e, t, n) {
                    if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && i(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
                }), i(function (e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function (e, t, n) {
                    var r;
                    if (!n)return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(e);
            K.find = ie, K.expr = ie.selectors, K.expr[":"] = K.expr.pseudos, K.unique = ie.uniqueSort, K.text = ie.getText, K.isXMLDoc = ie.isXML, K.contains = ie.contains;
            var oe = K.expr.match.needsContext, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, se = /^.[^:#\[\.,]*$/;
            K.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? K.find.matchesSelector(r, e) ? [r] : [] : K.find.matches(e, K.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, K.fn.extend({
                find: function (e) {
                    var t, n = this.length, r = [], i = this;
                    if ("string" != typeof e)return this.pushStack(K(e).filter(function () {
                        for (t = 0; t < n; t++)if (K.contains(i[t], this))return !0
                    }));
                    for (t = 0; t < n; t++)K.find(e, i[t], r);
                    return r = this.pushStack(n > 1 ? K.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
                }, filter: function (e) {
                    return this.pushStack(r(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(r(this, e || [], !0))
                }, is: function (e) {
                    return !!r(this, "string" == typeof e && oe.test(e) ? K(e) : e || [], !1).length
                }
            });
            var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = K.fn.init = function (e, t) {
                var n, r;
                if (!e)return this;
                if ("string" == typeof e) {
                    if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof K ? t[0] : t, K.merge(this, K.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), ae.test(n[1]) && K.isPlainObject(t))for (n in t)K.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : K.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(K) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
            };
            ce.prototype = K.fn, ue = K(J);
            var fe = /^(?:parents|prev(?:Until|All))/, de = {children: !0, contents: !0, next: !0, prev: !0};
            K.extend({
                dir: function (e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                        if (i && K(e).is(n))break;
                        r.push(e)
                    }
                    return r
                }, sibling: function (e, t) {
                    for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            }), K.fn.extend({
                has: function (e) {
                    var t = K(e, this), n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++)if (K.contains(this, t[e]))return !0
                    })
                }, closest: function (e, t) {
                    for (var n, r = 0, i = this.length, o = [],
                             a = oe.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? K.unique(o) : o)
                }, index: function (e) {
                    return e ? "string" == typeof e ? U.call(K(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(K.unique(K.merge(this.get(), K(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), K.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return K.dir(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return K.dir(e, "parentNode", n)
                }, next: function (e) {
                    return i(e, "nextSibling")
                }, prev: function (e) {
                    return i(e, "previousSibling")
                }, nextAll: function (e) {
                    return K.dir(e, "nextSibling")
                }, prevAll: function (e) {
                    return K.dir(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return K.dir(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return K.dir(e, "previousSibling", n)
                }, siblings: function (e) {
                    return K.sibling((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return K.sibling(e.firstChild)
                }, contents: function (e) {
                    return e.contentDocument || K.merge([], e.childNodes)
                }
            }, function (e, t) {
                K.fn[e] = function (n, r) {
                    var i = K.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = K.filter(r, i)), this.length > 1 && (de[e] || K.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var pe = /\S+/g, he = {};
            K.Callbacks = function (e) {
                e = "string" == typeof e ? he[e] || o(e) : K.extend({}, e);
                var t, n, r, i, a, s, u = [], l = !e.once && [], c = function (o) {
                    for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && s < a; s++)if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                    r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
                }, f = {
                    add: function () {
                        if (u) {
                            var n = u.length;
                            !function t(n) {
                                K.each(n, function (n, r) {
                                    var i = K.type(r);
                                    "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
                                })
                            }(arguments), r ? a = u.length : t && (i = n, c(t))
                        }
                        return this
                    }, remove: function () {
                        return u && K.each(arguments, function (e, t) {
                            for (var n; (n = K.inArray(t, u, n)) > -1;)u.splice(n, 1), r && (n <= a && a--, n <= s && s--)
                        }), this
                    }, has: function (e) {
                        return e ? K.inArray(e, u) > -1 : !(!u || !u.length)
                    }, empty: function () {
                        return u = [], a = 0, this
                    }, disable: function () {
                        return u = l = t = void 0, this
                    }, disabled: function () {
                        return !u
                    }, lock: function () {
                        return l = void 0, t || f.disable(), this
                    }, locked: function () {
                        return !l
                    }, fireWith: function (e, t) {
                        return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                    }, fire: function () {
                        return f.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!n
                    }
                };
                return f
            }, K.extend({
                Deferred: function (e) {
                    var t = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]],
                        n = "pending", r = {
                            state: function () {
                                return n
                            }, always: function () {
                                return i.done(arguments).fail(arguments), this
                            }, then: function () {
                                var e = arguments;
                                return K.Deferred(function (n) {
                                    K.each(t, function (t, o) {
                                        var a = K.isFunction(e[t]) && e[t];
                                        i[o[1]](function () {
                                            var e = a && a.apply(this, arguments);
                                            e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            }, promise: function (e) {
                                return null != e ? K.extend(e, r) : r
                            }
                        }, i = {};
                    return r.pipe = r.then, K.each(t, function (e, o) {
                        var a = o[2], s = o[3];
                        r[o[1]] = a.add, s && a.add(function () {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                            return i[o[0] + "With"](this === i ? r : this, arguments), this
                        }, i[o[0] + "With"] = a.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                }, when: function (e) {
                    var t, n, r, i = 0, o = W.call(arguments), a = o.length,
                        s = 1 !== a || e && K.isFunction(e.promise) ? a : 0, u = 1 === s ? e : K.Deferred(),
                        l = function (e, n, r) {
                            return function (i) {
                                n[e] = this, r[e] = arguments.length > 1 ? W.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                            }
                        };
                    if (a > 1)for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
                    return s || u.resolveWith(r, o), u.promise()
                }
            });
            var ge;
            K.fn.ready = function (e) {
                return K.ready.promise().done(e), this
            }, K.extend({
                isReady: !1, readyWait: 1, holdReady: function (e) {
                    e ? K.readyWait++ : K.ready(!0)
                }, ready: function (e) {
                    (e === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, e !== !0 && --K.readyWait > 0 || (ge.resolveWith(J, [K]), K.fn.triggerHandler && (K(J).triggerHandler("ready"), K(J).off("ready"))))
                }
            }), K.ready.promise = function (t) {
                return ge || (ge = K.Deferred(), "complete" === J.readyState ? setTimeout(K.ready) : (J.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ge.promise(t)
            }, K.ready.promise();
            var me = K.access = function (e, t, n, r, i, o, a) {
                var s = 0, u = e.length, l = null == n;
                if ("object" === K.type(n)) {
                    i = !0;
                    for (s in n)K.access(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== r && (i = !0, K.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                        return l.call(K(e), n)
                    })), t))for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            };
            K.acceptData = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }, s.uid = 1, s.accepts = K.acceptData, s.prototype = {
                key: function (e) {
                    if (!s.accepts(e))return 0;
                    var t = {}, n = e[this.expando];
                    if (!n) {
                        n = s.uid++;
                        try {
                            t[this.expando] = {value: n}, Object.defineProperties(e, t)
                        } catch (r) {
                            t[this.expando] = n, K.extend(e, t)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                }, set: function (e, t, n) {
                    var r, i = this.key(e), o = this.cache[i];
                    if ("string" == typeof t) o[t] = n; else if (K.isEmptyObject(o)) K.extend(this.cache[i], t); else for (r in t)o[r] = t[r];
                    return o
                }, get: function (e, t) {
                    var n = this.cache[this.key(e)];
                    return void 0 === t ? n : n[t]
                }, access: function (e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, K.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
                }, remove: function (e, t) {
                    var n, r, i, o = this.key(e), a = this.cache[o];
                    if (void 0 === t) this.cache[o] = {}; else {
                        K.isArray(t) ? r = t.concat(t.map(K.camelCase)) : (i = K.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(pe) || [])), n = r.length;
                        for (; n--;)delete a[r[n]]
                    }
                }, hasData: function (e) {
                    return !K.isEmptyObject(this.cache[e[this.expando]] || {})
                }, discard: function (e) {
                    e[this.expando] && delete this.cache[e[this.expando]]
                }
            };
            var ve = new s, ye = new s, xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
            K.extend({
                hasData: function (e) {
                    return ye.hasData(e) || ve.hasData(e)
                }, data: function (e, t, n) {
                    return ye.access(e, t, n)
                }, removeData: function (e, t) {
                    ye.remove(e, t)
                }, _data: function (e, t, n) {
                    return ve.access(e, t, n)
                }, _removeData: function (e, t) {
                    ve.remove(e, t)
                }
            }), K.fn.extend({
                data: function (e, t) {
                    var n, r, i, o = this[0], a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;)a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = K.camelCase(r.slice(5)), u(o, r, i[r])));
                            ve.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function () {
                        ye.set(this, e)
                    }) : me(this, function (t) {
                        var n, r = K.camelCase(e);
                        if (o && void 0 === t) {
                            if (n = ye.get(o, e), void 0 !== n)return n;
                            if (n = ye.get(o, r), void 0 !== n)return n;
                            if (n = u(o, r, void 0), void 0 !== n)return n
                        } else this.each(function () {
                            var n = ye.get(this, r);
                            ye.set(this, r, t), e.indexOf("-") !== -1 && void 0 !== n && ye.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                }, removeData: function (e) {
                    return this.each(function () {
                        ye.remove(this, e)
                    })
                }
            }), K.extend({
                queue: function (e, t, n) {
                    var r;
                    if (e)return t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || K.isArray(n) ? r = ve.access(e, t, K.makeArray(n)) : r.push(n)), r || []
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = K.queue(e, t), r = n.length, i = n.shift(), o = K._queueHooks(e, t), a = function () {
                        K.dequeue(e, t)
                    };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return ve.get(e, n) || ve.access(e, n, {
                            empty: K.Callbacks("once memory").add(function () {
                                ve.remove(e, [t + "queue", n])
                            })
                        })
                }
            }), K.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? K.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = K.queue(this, e, t);
                        K._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && K.dequeue(this, e)
                    })
                }, dequeue: function (e) {
                    return this.each(function () {
                        K.dequeue(this, e)
                    })
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, r = 1, i = K.Deferred(), o = this, a = this.length, s = function () {
                        --r || i.resolveWith(o, [o])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)n = ve.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Te = ["Top", "Right", "Bottom", "Left"],
                Ce = function (e, t) {
                    return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
                }, Se = /^(?:checkbox|radio)$/i;
            !function () {
                var e = J.createDocumentFragment(), t = e.appendChild(J.createElement("div")),
                    n = J.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var ke = "undefined";
            G.focusinBubbles = "onfocusin" in e;
            var De = /^key/, Ee = /^(?:mouse|pointer|contextmenu)|click/, Ae = /^(?:focusinfocus|focusoutblur)$/,
                Ne = /^([^.]*)(?:\.(.+)|)$/;
            K.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var o, a, s, u, l, c, f, d, p, h, g, m = ve.get(e);
                    if (m)for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = K.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                        return typeof K !== ke && K.event.triggered !== t.type ? K.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(pe) || [""], l = t.length; l--;)s = Ne.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (f = K.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = K.event.special[p] || {}, c = K.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && K.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), K.event.global[p] = !0)
                },
                remove: function (e, t, n, r, i) {
                    var o, a, s, u, l, c, f, d, p, h, g, m = ve.hasData(e) && ve.get(e);
                    if (m && (u = m.events)) {
                        for (t = (t || "").match(pe) || [""], l = t.length; l--;)if (s = Ne.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (f = K.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;)c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || K.removeEvent(e, p, m.handle), delete u[p])
                        } else for (p in u)K.event.remove(e, p + t[l], n, r, !0);
                        K.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
                    }
                },
                trigger: function (t, n, r, i) {
                    var o, a, s, u, l, c, f, d = [r || J], p = Z.call(t, "type") ? t.type : t,
                        h = Z.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = s = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Ae.test(p + K.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[K.expando] ? t : new K.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : K.makeArray(n, [t]), f = K.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                        if (!i && !f.noBubble && !K.isWindow(r)) {
                            for (u = f.delegateType || p, Ae.test(u + p) || (a = a.parentNode); a; a = a.parentNode)d.push(a), s = a;
                            s === (r.ownerDocument || J) && d.push(s.defaultView || s.parentWindow || e)
                        }
                        for (o = 0; (a = d[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? u : f.bindType || p, c = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && K.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                        return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !K.acceptData(r) || l && K.isFunction(r[p]) && !K.isWindow(r) && (s = r[l], s && (r[l] = null), K.event.triggered = p, r[p](), K.event.triggered = void 0, s && (r[l] = s)), t.result
                    }
                },
                dispatch: function (e) {
                    e = K.event.fix(e);
                    var t, n, r, i, o, a = [], s = W.call(arguments), u = (ve.get(this, "events") || {})[e.type] || [],
                        l = K.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                        for (a = K.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((K.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
                    if (s && u.nodeType && (!e.button || "click" !== e.type))for (; u !== this; u = u.parentNode || this)if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; n < s; n++)o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? K(i, this).index(u) >= 0 : K.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({elem: u, handlers: r})
                    }
                    return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var n, r, i, o = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                    }
                },
                fix: function (e) {
                    if (e[K.expando])return e;
                    var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = Ee.test(i) ? this.mouseHooks : De.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new K.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
                    return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            if (this !== f() && this.focus)return this.focus(), !1
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            if (this === f() && this.blur)return this.blur(), !1
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && K.nodeName(this, "input"))return this.click(), !1
                        }, _default: function (e) {
                            return K.nodeName(e.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n, r) {
                    var i = K.extend(new K.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                    r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, K.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }, K.Event = function (e, t) {
                return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(e, t)
            }, K.Event.prototype = {
                isDefaultPrevented: c,
                isPropagationStopped: c,
                isImmediatePropagationStopped: c,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, K.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                K.event.special[e] = {
                    delegateType: t, bindType: t, handle: function (e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return i && (i === r || K.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), G.focusinBubbles || K.each({focus: "focusin", blur: "focusout"}, function (e, t) {
                var n = function (e) {
                    K.event.simulate(t, e.target, K.event.fix(e), !0)
                };
                K.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this, i = ve.access(r, t);
                        i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
                    }, teardown: function () {
                        var r = this.ownerDocument || this, i = ve.access(r, t) - 1;
                        i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
                    }
                }
            }), K.fn.extend({
                on: function (e, t, n, r, i) {
                    var o, a;
                    if ("object" == typeof e) {
                        "string" != typeof t && (n = n || t, t = void 0);
                        for (a in e)this.on(a, t, n, e[a], i);
                        return this
                    }
                    if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c; else if (!r)return this;
                    return 1 === i && (o = r, r = function (e) {
                        return K().off(e), o.apply(this, arguments)
                    }, r.guid = o.guid || (o.guid = K.guid++)), this.each(function () {
                        K.event.add(this, e, r, n, t)
                    })
                }, one: function (e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                }, off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj)return r = e.handleObj, K(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e)this.off(i, t, e[i]);
                        return this
                    }
                    return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = c), this.each(function () {
                        K.event.remove(this, e, n, t)
                    })
                }, trigger: function (e, t) {
                    return this.each(function () {
                        K.event.trigger(e, t, this)
                    })
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n)return K.event.trigger(e, t, n, !0)
                }
            });
            var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Me = /<([\w:]+)/,
                He = /<|&#?\w+;/, $e = /<(?:script|style|link)/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Oe = /^$|\/(?:java|ecma)script/i, qe = /^true\/(.*)/, Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Pe = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td, K.extend({
                clone: function (e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0), u = K.contains(e.ownerDocument, e);
                    if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))for (a = v(s), o = v(e), r = 0, i = o.length; r < i; r++)y(o[r], a[r]);
                    if (t)if (n)for (o = o || v(e), a = a || v(s), r = 0, i = o.length; r < i; r++)m(o[r], a[r]); else m(e, s);
                    return a = v(s, "script"), a.length > 0 && g(a, !u && v(e, "script")), s
                }, buildFragment: function (e, t, n, r) {
                    for (var i, o, a, s, u, l, c = t.createDocumentFragment(), f = [], d = 0,
                             p = e.length; d < p; d++)if (i = e[d], i || 0 === i)if ("object" === K.type(i)) K.merge(f, i.nodeType ? [i] : i); else if (He.test(i)) {
                        for (o = o || c.appendChild(t.createElement("div")), a = (Me.exec(i) || ["", ""])[1].toLowerCase(), s = Pe[a] || Pe._default, o.innerHTML = s[1] + i.replace(je, "<$1></$2>") + s[2], l = s[0]; l--;)o = o.lastChild;
                        K.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
                    } else f.push(t.createTextNode(i));
                    for (c.textContent = "", d = 0; i = f[d++];)if ((!r || K.inArray(i, r) === -1) && (u = K.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))for (l = 0; i = o[l++];)Oe.test(i.type || "") && n.push(i);
                    return c
                }, cleanData: function (e) {
                    for (var t, n, r, i, o = K.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                        if (K.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                            if (t.events)for (r in t.events)o[r] ? K.event.remove(n, r) : K.removeEvent(n, r, t.handle);
                            ve.cache[i] && delete ve.cache[i]
                        }
                        delete ye.cache[n[ye.expando]]
                    }
                }
            }), K.fn.extend({
                text: function (e) {
                    return me(this, function (e) {
                        return void 0 === e ? K.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                }, append: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = d(this, e);
                            t.appendChild(e)
                        }
                    })
                }, prepend: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = d(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                }, before: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                }, after: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    })
                }, remove: function (e, t) {
                    for (var n, r = e ? K.filter(e, this) : this,
                             i = 0; null != (n = r[i]); i++)t || 1 !== n.nodeType || K.cleanData(v(n)), n.parentNode && (t && K.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
                    return this
                }, empty: function () {
                    for (var e,
                             t = 0; null != (e = this[t]); t++)1 === e.nodeType && (K.cleanData(v(e, !1)), e.textContent = "");
                    return this
                }, clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return K.clone(this, e, t)
                    })
                }, html: function (e) {
                    return me(this, function (e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                        if ("string" == typeof e && !$e.test(e) && !Pe[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(je, "<$1></$2>");
                            try {
                                for (; n < r; n++)t = this[n] || {}, 1 === t.nodeType && (K.cleanData(v(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {
                            }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                }, replaceWith: function () {
                    var e = arguments[0];
                    return this.domManip(arguments, function (t) {
                        e = this.parentNode, K.cleanData(v(this)), e && e.replaceChild(t, this)
                    }), e && (e.length || e.nodeType) ? this : this.remove()
                }, detach: function (e) {
                    return this.remove(e, !0)
                }, domManip: function (e, t) {
                    e = B.apply([], e);
                    var n, r, i, o, a, s, u = 0, l = this.length, c = this, f = l - 1, d = e[0], g = K.isFunction(d);
                    if (g || l > 1 && "string" == typeof d && !G.checkClone && Le.test(d))return this.each(function (n) {
                        var r = c.eq(n);
                        g && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
                    });
                    if (l && (n = K.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                        for (i = K.map(v(n, "script"), p), o = i.length; u < l; u++)a = n, u !== f && (a = K.clone(a, !0, !0), o && K.merge(i, v(a, "script"))), t.call(this[u], a, u);
                        if (o)for (s = i[i.length - 1].ownerDocument, K.map(i, h), u = 0; u < o; u++)a = i[u], Oe.test(a.type || "") && !ve.access(a, "globalEval") && K.contains(s, a) && (a.src ? K._evalUrl && K._evalUrl(a.src) : K.globalEval(a.textContent.replace(Fe, "")))
                    }
                    return this
                }
            }), K.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                K.fn[e] = function (e) {
                    for (var n, r = [], i = K(e), o = i.length - 1,
                             a = 0; a <= o; a++)n = a === o ? this : this.clone(!0), K(i[a])[t](n), X.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Re, Ie = {}, _e = /^margin/, ze = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), We = function (t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
            !function () {
                function t() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
                    var t = e.getComputedStyle(a, null);
                    n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
                }

                var n, r, i = J.documentElement, o = J.createElement("div"), a = J.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && K.extend(G, {
                    pixelPosition: function () {
                        return t(), n
                    }, boxSizingReliable: function () {
                        return null == r && t(), r
                    }, reliableMarginRight: function () {
                        var t, n = a.appendChild(J.createElement("div"));
                        return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), t
                    }
                }))
            }(), K.swap = function (e, t, n, r) {
                var i, o, a = {};
                for (o in t)a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t)e.style[o] = a[o];
                return i
            };
            var Be = /^(none|table(?!-c[ea]).+)/, Xe = new RegExp("^(" + we + ")(.*)$", "i"),
                Ue = new RegExp("^([+-])=(" + we + ")", "i"),
                Ve = {position: "absolute", visibility: "hidden", display: "block"},
                Ye = {letterSpacing: "0", fontWeight: "400"}, Ze = ["Webkit", "O", "Moz", "ms"];
            K.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = w(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {float: "cssFloat"},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = K.camelCase(t), u = e.style;
                        return t = K.cssProps[s] || (K.cssProps[s] = C(u, s)), a = K.cssHooks[t] || K.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(K.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || K.cssNumber[s] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
                    }
                },
                css: function (e, t, n, r) {
                    var i, o, a, s = K.camelCase(t);
                    return t = K.cssProps[s] || (K.cssProps[s] = C(e.style, s)), a = K.cssHooks[t] || K.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || K.isNumeric(o) ? o || 0 : i) : i
                }
            }), K.each(["height", "width"], function (e, t) {
                K.cssHooks[t] = {
                    get: function (e, n, r) {
                        if (n)return Be.test(K.css(e, "display")) && 0 === e.offsetWidth ? K.swap(e, Ve, function () {
                            return D(e, t, r)
                        }) : D(e, t, r)
                    }, set: function (e, n, r) {
                        var i = r && We(e);
                        return S(e, n, r ? k(e, t, r, "border-box" === K.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), K.cssHooks.marginRight = T(G.reliableMarginRight, function (e, t) {
                if (t)return K.swap(e, {display: "inline-block"}, w, [e, "marginRight"])
            }), K.each({margin: "", padding: "", border: "Width"}, function (e, t) {
                K.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, i = {},
                                 o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, _e.test(e) || (K.cssHooks[e + t].set = S)
            }), K.fn.extend({
                css: function (e, t) {
                    return me(this, function (e, t, n) {
                        var r, i, o = {}, a = 0;
                        if (K.isArray(t)) {
                            for (r = We(e), i = t.length; a < i; a++)o[t[a]] = K.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? K.style(e, t, n) : K.css(e, t)
                    }, e, t, arguments.length > 1)
                }, show: function () {
                    return E(this, !0)
                }, hide: function () {
                    return E(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        Ce(this) ? K(this).show() : K(this).hide()
                    })
                }
            }), K.Tween = A, A.prototype = {
                constructor: A, init: function (e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = A.propHooks[this.prop];
                    return e && e.get ? e.get(this) : A.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = A.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
                }
            }, A.prototype.init.prototype = A.prototype, A.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    }, set: function (e) {
                        K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, K.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, K.fx = A.prototype.init, K.fx.step = {};
            var Ge, Je, Qe = /^(?:toggle|show|hide)$/, Ke = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
                et = /queueHooks$/, tt = [H], nt = {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t), r = n.cur(), i = Ke.exec(t),
                            o = i && i[3] || (K.cssNumber[e] ? "" : "px"),
                            a = (K.cssNumber[e] || "px" !== o && +r) && Ke.exec(K.css(n.elem, e)), s = 1, u = 20;
                        if (a && a[3] !== o) {
                            o = o || a[3], i = i || [], a = +r || 1;
                            do s = s || ".5", a /= s, K.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                        }
                        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                    }]
                };
            K.Animation = K.extend(L, {
                tweener: function (e, t) {
                    K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, i = e.length; r < i; r++)n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
                }, prefilter: function (e, t) {
                    t ? tt.unshift(e) : tt.push(e)
                }
            }), K.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? K.extend({}, e) : {
                    complete: n || !n && t || K.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !K.isFunction(t) && t
                };
                return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue)
                }, r
            }, K.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(Ce).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
                }, animate: function (e, t, n, r) {
                    var i = K.isEmptyObject(e), o = K.speed(t, n, r), a = function () {
                        var t = L(this, K.extend({}, e), o);
                        (i || ve.get(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                }, stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0, i = null != e && e + "queueHooks", o = K.timers, a = ve.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]); else for (i in a)a[i] && a[i].stop && et.test(i) && r(a[i]);
                        for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || K.dequeue(this, e)
                    })
                }, finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, n = ve.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = K.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, K.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++)r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), K.each(["toggle", "show", "hide"], function (e, t) {
                var n = K.fn[t];
                K.fn[t] = function (e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, r, i)
                }
            }), K.each({
                slideDown: j("show"),
                slideUp: j("hide"),
                slideToggle: j("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (e, t) {
                K.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), K.timers = [], K.fx.tick = function () {
                var e, t = 0, n = K.timers;
                for (Ge = K.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || K.fx.stop(), Ge = void 0
            }, K.fx.timer = function (e) {
                K.timers.push(e), e() ? K.fx.start() : K.timers.pop()
            }, K.fx.interval = 13, K.fx.start = function () {
                Je || (Je = setInterval(K.fx.tick, K.fx.interval))
            }, K.fx.stop = function () {
                clearInterval(Je), Je = null
            }, K.fx.speeds = {slow: 600, fast: 200, _default: 400}, K.fn.delay = function (e, t) {
                return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
            }, function () {
                var e = J.createElement("input"), t = J.createElement("select"),
                    n = t.appendChild(J.createElement("option"));
                e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
            }();
            var rt, it, ot = K.expr.attrHandle;
            K.fn.extend({
                attr: function (e, t) {
                    return me(this, K.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each(function () {
                        K.removeAttr(this, e)
                    })
                }
            }), K.extend({
                attr: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === ke ? K.prop(e, t, n) : (1 === o && K.isXMLDoc(e) || (t = t.toLowerCase(), r = K.attrHooks[t] || (K.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = K.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void K.removeAttr(e, t))
                }, removeAttr: function (e, t) {
                    var n, r, i = 0, o = t && t.match(pe);
                    if (o && 1 === e.nodeType)for (; n = o[i++];)r = K.propFix[n] || n, K.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!G.radioValue && "radio" === t && K.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }
            }), it = {
                set: function (e, t, n) {
                    return t === !1 ? K.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, K.each(K.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = ot[t] || K.find.attr;
                ot[t] = function (e, t, r) {
                    var i, o;
                    return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
                }
            });
            var at = /^(?:input|select|textarea|button)$/i;
            K.fn.extend({
                prop: function (e, t) {
                    return me(this, K.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return this.each(function () {
                        delete this[K.propFix[e] || e]
                    })
                }
            }), K.extend({
                propFix: {for: "htmlFor", class: "className"}, prop: function (e, t, n) {
                    var r, i, o, a = e.nodeType;
                    if (e && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !K.isXMLDoc(e), o && (t = K.propFix[t] || t, i = K.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                        }
                    }
                }
            }), G.optSelected || (K.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }
            }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                K.propFix[this.toLowerCase()] = this
            });
            var st = /[\t\r\n\f]/g;
            K.fn.extend({
                addClass: function (e) {
                    var t, n, r, i, o, a, s = "string" == typeof e && e, u = 0, l = this.length;
                    if (K.isFunction(e))return this.each(function (t) {
                        K(this).addClass(e.call(this, t, this.className))
                    });
                    if (s)for (t = (e || "").match(pe) || []; u < l; u++)if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = K.trim(r), n.className !== a && (n.className = a)
                    }
                    return this
                }, removeClass: function (e) {
                    var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e, u = 0,
                        l = this.length;
                    if (K.isFunction(e))return this.each(function (t) {
                        K(this).removeClass(e.call(this, t, this.className))
                    });
                    if (s)for (t = (e || "").match(pe) || []; u < l; u++)if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
                        a = e ? K.trim(r) : "", n.className !== a && (n.className = a)
                    }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : K.isFunction(e) ? this.each(function (n) {
                        K(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function () {
                        if ("string" === n)for (var t, r = 0, i = K(this),
                                                    o = e.match(pe) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else n !== ke && "boolean" !== n || (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
                    })
                }, hasClass: function (e) {
                    for (var t = " " + e + " ", n = 0,
                             r = this.length; n < r; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0)return !0;
                    return !1
                }
            });
            var ut = /\r/g;
            K.fn.extend({
                val: function (e) {
                    var t, n, r, i = this[0];
                    {
                        if (arguments.length)return r = K.isFunction(e), this.each(function (n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, K(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : K.isArray(i) && (i = K.map(i, function (e) {
                                    return null == e ? "" : e + ""
                                })), t = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                        if (i)return t = K.valHooks[i.type] || K.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
                    }
                }
            }), K.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = K.find.attr(e, "value");
                            return null != t ? t : K.trim(K.text(e))
                        }
                    }, select: {
                        get: function (e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0,
                                     a = o ? null : [], s = o ? i + 1 : r.length,
                                     u = i < 0 ? s : o ? i : 0; u < s; u++)if (n = r[u], (n.selected || u === i) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !K.nodeName(n.parentNode, "optgroup"))) {
                                if (t = K(n).val(), o)return t;
                                a.push(t)
                            }
                            return a
                        }, set: function (e, t) {
                            for (var n, r, i = e.options, o = K.makeArray(t),
                                     a = i.length; a--;)r = i[a], (r.selected = K.inArray(r.value, o) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), K.each(["radio", "checkbox"], function () {
                K.valHooks[this] = {
                    set: function (e, t) {
                        if (K.isArray(t))return e.checked = K.inArray(K(e).val(), t) >= 0
                    }
                }, G.checkOn || (K.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                K.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), K.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }, bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var lt = K.now(), ct = /\?/;
            K.parseJSON = function (e) {
                return JSON.parse(e + "")
            }, K.parseXML = function (e) {
                var t, n;
                if (!e || "string" != typeof e)return null;
                try {
                    n = new DOMParser, t = n.parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + e), t
            };
            var ft = /#.*$/, dt = /([?&])_=[^&]*/, pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, gt = /^(?:GET|HEAD)$/, mt = /^\/\//,
                vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yt = {}, xt = {},
                bt = "*/".concat("*"), wt = e.location.href, Tt = vt.exec(wt.toLowerCase()) || [];
            K.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt,
                    type: "GET",
                    isLocal: ht.test(Tt[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": bt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": K.parseJSON, "text xml": K.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? F(F(e, K.ajaxSettings), t) : F(K.ajaxSettings, e)
                },
                ajaxPrefilter: O(yt),
                ajaxTransport: O(xt),
                ajax: function (e, t) {
                    function n(e, t, n, a) {
                        var u, c, v, y, b, T = t;
                        2 !== x && (x = 2, s && clearTimeout(s), r = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (y = P(f, w, n)), y = R(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (K.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (K.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, !e && T || (T = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(d, [c, T, w]) : h.rejectWith(d, [w, T, v]), w.statusCode(m), m = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(d, [w, T]), l && (p.trigger("ajaxComplete", [w, f]), --K.active || K.event.trigger("ajaxStop")))
                    }

                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, i, o, a, s, u, l, c, f = K.ajaxSetup({}, t), d = f.context || f,
                        p = f.context && (d.nodeType || d.jquery) ? K(d) : K.event, h = K.Deferred(),
                        g = K.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled",
                        w = {
                            readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (2 === x) {
                                    if (!a)for (a = {}; t = pt.exec(o);)a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            }, getAllResponseHeaders: function () {
                                return 2 === x ? o : null
                            }, setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return x || (e = y[n] = y[n] || e, v[e] = t), this
                            }, overrideMimeType: function (e) {
                                return x || (f.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e)if (x < 2)for (t in e)m[t] = [m[t], e[t]]; else w.always(e[w.status]);
                                return this
                            }, abort: function (e) {
                                var t = e || b;
                                return r && r.abort(t), n(0, t), this
                            }
                        };
                    if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(mt, Tt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(pe) || [""], null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Tt[1] && u[2] === Tt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)), q(yt, f, t, w), 2 === x)return w;
                    l = K.event && f.global, l && 0 === K.active++ && K.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = dt.test(i) ? i.replace(dt, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (K.lastModified[i] && w.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && w.setRequestHeader("If-None-Match", K.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : f.accepts["*"]);
                    for (c in f.headers)w.setRequestHeader(c, f.headers[c]);
                    if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === x))return w.abort();
                    b = "abort";
                    for (c in{success: 1, error: 1, complete: 1})w[c](f[c]);
                    if (r = q(xt, f, t, w)) {
                        w.readyState = 1, l && p.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
                            w.abort("timeout")
                        }, f.timeout));
                        try {
                            x = 1, r.send(v, n)
                        } catch (e) {
                            if (!(x < 2))throw e;
                            n(-1, e)
                        }
                    } else n(-1, "No Transport");
                    return w
                },
                getJSON: function (e, t, n) {
                    return K.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return K.get(e, void 0, t, "script")
                }
            }), K.each(["get", "post"], function (e, t) {
                K[t] = function (e, n, r, i) {
                    return K.isFunction(n) && (i = i || r, r = n, n = void 0), K.ajax({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    })
                }
            }), K._evalUrl = function (e) {
                return K.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
            }, K.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return K.isFunction(e) ? this.each(function (t) {
                        K(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = K(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                }, wrapInner: function (e) {
                    return K.isFunction(e) ? this.each(function (t) {
                        K(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = K(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                }, wrap: function (e) {
                    var t = K.isFunction(e);
                    return this.each(function (n) {
                        K(this).wrapAll(t ? e.call(this, n) : e)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), K.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0
            }, K.expr.filters.visible = function (e) {
                return !K.expr.filters.hidden(e)
            };
            var Ct = /%20/g, St = /\[\]$/, kt = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i,
                Et = /^(?:input|select|textarea|keygen)/i;
            K.param = function (e, t) {
                var n, r = [], i = function (e, t) {
                    t = K.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function () {
                    i(this.name, this.value)
                }); else for (n in e)I(n, e[n], t, i);
                return r.join("&").replace(Ct, "+")
            }, K.fn.extend({
                serialize: function () {
                    return K.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var e = K.prop(this, "elements");
                        return e ? K.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !K(this).is(":disabled") && Et.test(this.nodeName) && !Dt.test(e) && (this.checked || !Se.test(e))
                    }).map(function (e, t) {
                        var n = K(this).val();
                        return null == n ? null : K.isArray(n) ? K.map(n, function (e) {
                            return {name: t.name, value: e.replace(kt, "\r\n")}
                        }) : {name: t.name, value: n.replace(kt, "\r\n")}
                    }).get()
                }
            }), K.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest
                } catch (e) {
                }
            };
            var At = 0, Nt = {}, jt = {0: 200, 1223: 204}, Mt = K.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function () {
                for (var e in Nt)Nt[e]()
            }), G.cors = !!Mt && "withCredentials" in Mt, G.ajax = Mt = !!Mt, K.ajaxTransport(function (e) {
                var t;
                if (G.cors || Mt && !e.crossDomain)return {
                    send: function (n, r) {
                        var i, o = e.xhr(), a = ++At;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (i in n)o.setRequestHeader(i, n[i]);
                        t = function (e) {
                            return function () {
                                t && (delete Nt[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(jt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                            }
                        }, o.onload = t(), o.onerror = t("error"), t = Nt[a] = t("abort");
                        try {
                            o.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)throw e
                        }
                    }, abort: function () {
                        t && t()
                    }
                }
            }), K.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function (e) {
                        return K.globalEval(e), e
                    }
                }
            }), K.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), K.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function (r, i) {
                            t = K("<script>").prop({
                                async: !0,
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function (e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), J.head.appendChild(t[0])
                        }, abort: function () {
                            n && n()
                        }
                    }
                }
            });
            var Ht = [], $t = /(=)\?(?=&|$)|\?\?/;
            K.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = Ht.pop() || K.expando + "_" + lt++;
                    return this[e] = !0, e
                }
            }), K.ajaxPrefilter("json jsonp", function (t, n, r) {
                var i, o, a,
                    s = t.jsonp !== !1 && ($t.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0])return i = t.jsonpCallback = K.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace($t, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                    return a || K.error(i + " was not called"), a[0]
                }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
                    a = arguments
                }, r.always(function () {
                    e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)), a && K.isFunction(o) && o(a[0]), a = o = void 0
                }), "script"
            }), K.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e)return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || J;
                var r = ae.exec(e), i = !n && [];
                return r ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, i), i && i.length && K(i).remove(), K.merge([], r.childNodes))
            };
            var Lt = K.fn.load;
            K.fn.load = function (e, t, n) {
                if ("string" != typeof e && Lt)return Lt.apply(this, arguments);
                var r, i, o, a = this, s = e.indexOf(" ");
                return s >= 0 && (r = K.trim(e.slice(s)), e = e.slice(0, s)), K.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && K.ajax({
                    url: e,
                    type: i,
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments, a.html(r ? K("<div>").append(K.parseHTML(e)).find(r) : e)
                }).complete(n && function (e, t) {
                        a.each(n, o || [e.responseText, t, e])
                    }), this
            }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                K.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), K.expr.filters.animated = function (e) {
                return K.grep(K.timers, function (t) {
                    return e === t.elem
                }).length
            };
            var Ot = e.document.documentElement;
            K.offset = {
                setOffset: function (e, t, n) {
                    var r, i, o, a, s, u, l, c = K.css(e, "position"), f = K(e), d = {};
                    "static" === c && (e.style.position = "relative"), s = f.offset(), o = K.css(e, "top"), u = K.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), K.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
                }
            }, K.fn.extend({
                offset: function (e) {
                    if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                        K.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
                    if (o)return t = o.documentElement, K.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = _(o), {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i
                }, position: function () {
                    if (this[0]) {
                        var e, t, n = this[0], r = {top: 0, left: 0};
                        return "fixed" === K.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), K.nodeName(e[0], "html") || (r = e.offset()), r.top += K.css(e[0], "borderTopWidth", !0), r.left += K.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - r.top - K.css(n, "marginTop", !0),
                            left: t.left - r.left - K.css(n, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent || Ot; e && !K.nodeName(e, "html") && "static" === K.css(e, "position");)e = e.offsetParent;
                        return e || Ot
                    })
                }
            }), K.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
                var r = "pageYOffset" === n;
                K.fn[t] = function (i) {
                    return me(this, function (t, i, o) {
                        var a = _(t);
                        return void 0 === o ? a ? a[n] : t[i] : void(a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
                    }, t, i, arguments.length, null)
                }
            }), K.each(["top", "left"], function (e, t) {
                K.cssHooks[t] = T(G.pixelPosition, function (e, n) {
                    if (n)return n = w(e, t), ze.test(n) ? K(e).position()[t] + "px" : n
                })
            }), K.each({Height: "height", Width: "width"}, function (e, t) {
                K.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                    K.fn[r] = function (r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r),
                            a = n || (r === !0 || i === !0 ? "margin" : "border");
                        return me(this, function (t, n, r) {
                            var i;
                            return K.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? K.css(t, n, a) : K.style(t, n, r, a)
                        }, t, o ? r : void 0, o, null)
                    }
                })
            }), K.fn.size = function () {
                return this.length
            }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return K
            });
            var qt = e.jQuery, Ft = e.$;
            return K.noConflict = function (t) {
                return e.$ === K && (e.$ = Ft), t && e.jQuery === K && (e.jQuery = qt), K
            }, typeof t === ke && (e.jQuery = e.$ = K), K
        })
    }, {}], md5: [function (e, t, n) {
        "use strict";
        function r(e, t) {
            var n = (65535 & e) + (65535 & t), r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | 65535 & n
        }

        function i(e, t) {
            return e << t | e >>> 32 - t
        }

        function o(e, t, n, o, a, s) {
            return r(i(r(r(t, e), r(o, s)), a), n)
        }

        function a(e, t, n, r, i, a, s) {
            return o(t & n | ~t & r, e, t, i, a, s)
        }

        function s(e, t, n, r, i, a, s) {
            return o(t & r | n & ~r, e, t, i, a, s)
        }

        function u(e, t, n, r, i, a, s) {
            return o(t ^ n ^ r, e, t, i, a, s)
        }

        function l(e, t, n, r, i, a, s) {
            return o(n ^ (t | ~r), e, t, i, a, s)
        }

        function c(e, t) {
            e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
            var n, i, o, c, f, d = 1732584193, p = -271733879, h = -1732584194, g = 271733878;
            for (n = 0; n < e.length; n += 16)i = d, o = p, c = h, f = g, d = a(d, p, h, g, e[n], 7, -680876936), g = a(g, d, p, h, e[n + 1], 12, -389564586), h = a(h, g, d, p, e[n + 2], 17, 606105819), p = a(p, h, g, d, e[n + 3], 22, -1044525330), d = a(d, p, h, g, e[n + 4], 7, -176418897), g = a(g, d, p, h, e[n + 5], 12, 1200080426), h = a(h, g, d, p, e[n + 6], 17, -1473231341), p = a(p, h, g, d, e[n + 7], 22, -45705983), d = a(d, p, h, g, e[n + 8], 7, 1770035416), g = a(g, d, p, h, e[n + 9], 12, -1958414417), h = a(h, g, d, p, e[n + 10], 17, -42063), p = a(p, h, g, d, e[n + 11], 22, -1990404162), d = a(d, p, h, g, e[n + 12], 7, 1804603682), g = a(g, d, p, h, e[n + 13], 12, -40341101), h = a(h, g, d, p, e[n + 14], 17, -1502002290), p = a(p, h, g, d, e[n + 15], 22, 1236535329), d = s(d, p, h, g, e[n + 1], 5, -165796510), g = s(g, d, p, h, e[n + 6], 9, -1069501632), h = s(h, g, d, p, e[n + 11], 14, 643717713), p = s(p, h, g, d, e[n], 20, -373897302), d = s(d, p, h, g, e[n + 5], 5, -701558691), g = s(g, d, p, h, e[n + 10], 9, 38016083), h = s(h, g, d, p, e[n + 15], 14, -660478335), p = s(p, h, g, d, e[n + 4], 20, -405537848), d = s(d, p, h, g, e[n + 9], 5, 568446438), g = s(g, d, p, h, e[n + 14], 9, -1019803690), h = s(h, g, d, p, e[n + 3], 14, -187363961), p = s(p, h, g, d, e[n + 8], 20, 1163531501), d = s(d, p, h, g, e[n + 13], 5, -1444681467), g = s(g, d, p, h, e[n + 2], 9, -51403784), h = s(h, g, d, p, e[n + 7], 14, 1735328473), p = s(p, h, g, d, e[n + 12], 20, -1926607734), d = u(d, p, h, g, e[n + 5], 4, -378558), g = u(g, d, p, h, e[n + 8], 11, -2022574463), h = u(h, g, d, p, e[n + 11], 16, 1839030562), p = u(p, h, g, d, e[n + 14], 23, -35309556), d = u(d, p, h, g, e[n + 1], 4, -1530992060), g = u(g, d, p, h, e[n + 4], 11, 1272893353), h = u(h, g, d, p, e[n + 7], 16, -155497632), p = u(p, h, g, d, e[n + 10], 23, -1094730640), d = u(d, p, h, g, e[n + 13], 4, 681279174), g = u(g, d, p, h, e[n], 11, -358537222), h = u(h, g, d, p, e[n + 3], 16, -722521979), p = u(p, h, g, d, e[n + 6], 23, 76029189), d = u(d, p, h, g, e[n + 9], 4, -640364487), g = u(g, d, p, h, e[n + 12], 11, -421815835), h = u(h, g, d, p, e[n + 15], 16, 530742520), p = u(p, h, g, d, e[n + 2], 23, -995338651), d = l(d, p, h, g, e[n], 6, -198630844), g = l(g, d, p, h, e[n + 7], 10, 1126891415),
                h = l(h, g, d, p, e[n + 14], 15, -1416354905), p = l(p, h, g, d, e[n + 5], 21, -57434055), d = l(d, p, h, g, e[n + 12], 6, 1700485571), g = l(g, d, p, h, e[n + 3], 10, -1894986606), h = l(h, g, d, p, e[n + 10], 15, -1051523), p = l(p, h, g, d, e[n + 1], 21, -2054922799), d = l(d, p, h, g, e[n + 8], 6, 1873313359), g = l(g, d, p, h, e[n + 15], 10, -30611744), h = l(h, g, d, p, e[n + 6], 15, -1560198380), p = l(p, h, g, d, e[n + 13], 21, 1309151649), d = l(d, p, h, g, e[n + 4], 6, -145523070), g = l(g, d, p, h, e[n + 11], 10, -1120210379), h = l(h, g, d, p, e[n + 2], 15, 718787259), p = l(p, h, g, d, e[n + 9], 21, -343485551), d = r(d, i), p = r(p, o), h = r(h, c), g = r(g, f);
            return [d, p, h, g]
        }

        function f(e) {
            var t, n = "";
            for (t = 0; t < 32 * e.length; t += 8)n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }

        function d(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)n[t] = 0;
            for (t = 0; t < 8 * e.length; t += 8)n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }

        function p(e) {
            return f(c(d(e), 8 * e.length))
        }

        function h(e, t) {
            var n, r, i = d(e), o = [], a = [];
            for (o[15] = a[15] = void 0, i.length > 16 && (i = c(i, 8 * e.length)), n = 0; n < 16; n += 1)o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
            return r = c(o.concat(d(t)), 512 + 8 * t.length), f(c(a.concat(r), 640))
        }

        function g(e) {
            var t, n, r = "0123456789abcdef", i = "";
            for (n = 0; n < e.length; n += 1)t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
            return i
        }

        function m(e) {
            return unescape(encodeURIComponent(e))
        }

        function v(e) {
            return p(m(e))
        }

        function y(e) {
            return g(v(e))
        }

        function x(e, t) {
            return h(m(e), m(t))
        }

        function b(e, t) {
            return g(x(e, t))
        }

        function w(e, t, n) {
            return t ? n ? x(t, e) : b(t, e) : n ? v(e) : y(e)
        }

        t.exports = w
    }, {}], skel: [function (e, t, n) {
        var r = function () {
            "use strict";
            var e = {
                breakpointIds: null,
                events: {},
                isInit: !1,
                obj: {attachments: {}, breakpoints: {}, head: null, states: {}},
                sd: "/",
                state: null,
                stateHandlers: {},
                stateId: "",
                vars: {},
                DOMReady: null,
                indexOf: null,
                isArray: null,
                iterate: null,
                matchesMedia: null,
                extend: function (t, n) {
                    e.iterate(n, function (r) {
                        e.isArray(n[r]) ? (e.isArray(t[r]) || (t[r] = []), e.extend(t[r], n[r])) : "object" == typeof n[r] ? ("object" != typeof t[r] && (t[r] = {}), e.extend(t[r], n[r])) : t[r] = n[r]
                    })
                },
                newStyle: function (e) {
                    var t = document.createElement("style");
                    return t.type = "text/css", t.innerHTML = e, t
                },
                _canUse: null,
                canUse: function (t) {
                    e._canUse || (e._canUse = document.createElement("div"));
                    var n = e._canUse.style, r = t.charAt(0).toUpperCase() + t.slice(1);
                    return t in n || "Moz" + r in n || "Webkit" + r in n || "O" + r in n || "ms" + r in n
                },
                on: function (t, n) {
                    var r = t.split(/[\s]+/);
                    return e.iterate(r, function (t) {
                        var i = r[t];
                        if (e.isInit) {
                            if ("init" == i)return void n();
                            if ("change" == i) n(); else {
                                var o = i.charAt(0);
                                if ("+" == o || "!" == o) {
                                    var a = i.substring(1);
                                    if (a in e.obj.breakpoints)if ("+" == o && e.obj.breakpoints[a].active) n(); else if ("!" == o && !e.obj.breakpoints[a].active)return void n()
                                }
                            }
                        }
                        e.events[i] || (e.events[i] = []), e.events[i].push(n)
                    }), e
                },
                trigger: function (t) {
                    if (e.events[t] && 0 != e.events[t].length)return e.iterate(e.events[t], function (n) {
                        e.events[t][n]()
                    }), e
                },
                breakpoint: function (t) {
                    return e.obj.breakpoints[t]
                },
                breakpoints: function (t) {
                    function n(e, t) {
                        this.name = this.id = e, this.media = t, this.active = !1, this.wasActive = !1
                    }

                    return n.prototype.matches = function () {
                        return e.matchesMedia(this.media)
                    }, n.prototype.sync = function () {
                        this.wasActive = this.active, this.active = this.matches()
                    }, e.iterate(t, function (r) {
                        e.obj.breakpoints[r] = new n(r, t[r])
                    }), window.setTimeout(function () {
                        e.poll()
                    }, 0), e
                },
                addStateHandler: function (t, n) {
                    e.stateHandlers[t] = n
                },
                callStateHandler: function (t) {
                    var n = e.stateHandlers[t]();
                    e.iterate(n, function (t) {
                        e.state.attachments.push(n[t])
                    })
                },
                changeState: function (t) {
                    e.iterate(e.obj.breakpoints, function (t) {
                        e.obj.breakpoints[t].sync()
                    }), e.vars.lastStateId = e.stateId, e.stateId = t, e.breakpointIds = e.stateId === e.sd ? [] : e.stateId.substring(1).split(e.sd), e.obj.states[e.stateId] ? e.state = e.obj.states[e.stateId] : (e.obj.states[e.stateId] = {attachments: []}, e.state = e.obj.states[e.stateId], e.iterate(e.stateHandlers, e.callStateHandler)), e.detachAll(e.state.attachments), e.attachAll(e.state.attachments), e.vars.stateId = e.stateId, e.vars.state = e.state, e.trigger("change"), e.iterate(e.obj.breakpoints, function (t) {
                        e.obj.breakpoints[t].active ? e.obj.breakpoints[t].wasActive || e.trigger("+" + t) : e.obj.breakpoints[t].wasActive && e.trigger("-" + t)
                    })
                },
                generateStateConfig: function (t, n) {
                    var r = {};
                    return e.extend(r, t), e.iterate(e.breakpointIds, function (t) {
                        e.extend(r, n[e.breakpointIds[t]])
                    }), r
                },
                getStateId: function () {
                    var t = "";
                    return e.iterate(e.obj.breakpoints, function (n) {
                        var r = e.obj.breakpoints[n];
                        r.matches() && (t += e.sd + r.id)
                    }), t
                },
                poll: function () {
                    var t = "";
                    t = e.getStateId(), "" === t && (t = e.sd), t !== e.stateId && e.changeState(t)
                },
                _attach: null,
                attach: function (t) {
                    var n = e.obj.head, r = t.element;
                    return (!r.parentNode || !r.parentNode.tagName) && (e._attach || (e._attach = n.firstChild), n.insertBefore(r, e._attach.nextSibling), t.permanent && (e._attach = r), !0)
                },
                attachAll: function (t) {
                    var n = [];
                    e.iterate(t, function (e) {
                        n[t[e].priority] || (n[t[e].priority] = []), n[t[e].priority].push(t[e])
                    }), n.reverse(), e.iterate(n, function (t) {
                        e.iterate(n[t], function (r) {
                            e.attach(n[t][r])
                        })
                    })
                },
                detach: function (e) {
                    var t = e.element;
                    return !(e.permanent || !t.parentNode || t.parentNode && !t.parentNode.tagName) && (t.parentNode.removeChild(t), !0)
                },
                detachAll: function (t) {
                    var n = {};
                    e.iterate(t, function (e) {
                        n[t[e].id] = !0
                    }), e.iterate(e.obj.attachments, function (t) {
                        t in n || e.detach(e.obj.attachments[t])
                    })
                },
                attachment: function (t) {
                    return t in e.obj.attachments ? e.obj.attachments[t] : null
                },
                newAttachment: function (t, n, r, i) {
                    return e.obj.attachments[t] = {id: t, element: n, priority: r, permanent: i}
                },
                init: function () {
                    e.initMethods(), e.initVars(), e.initEvents(), e.obj.head = document.getElementsByTagName("head")[0], e.isInit = !0, e.trigger("init")
                },
                initEvents: function () {
                    e.on("resize", function () {
                        e.poll()
                    }), e.on("orientationChange", function () {
                        e.poll()
                    }), e.DOMReady(function () {
                        e.trigger("ready")
                    }), window.onload && e.on("load", window.onload), window.onload = function () {
                        e.trigger("load")
                    }, window.onresize && e.on("resize", window.onresize), window.onresize = function () {
                        e.trigger("resize")
                    }, window.onorientationchange && e.on("orientationChange", window.onorientationchange), window.onorientationchange = function () {
                        e.trigger("orientationChange")
                    }
                },
                initMethods: function () {
                    document.addEventListener ? !function (t, n) {
                        e.DOMReady = n()
                    }("domready", function () {
                        function e(e) {
                            for (o = 1; e = n.shift();)e()
                        }

                        var t, n = [], r = document, i = "DOMContentLoaded", o = /^loaded|^c/.test(r.readyState);
                        return r.addEventListener(i, t = function () {
                            r.removeEventListener(i, t), e()
                        }), function (e) {
                            o ? e() : n.push(e)
                        }
                    }) : !function (t, n) {
                        e.DOMReady = n()
                    }("domready", function (e) {
                        function t(e) {
                            for (p = 1; e = r.shift();)e()
                        }

                        var n, r = [], i = !1, o = document, a = o.documentElement, s = a.doScroll,
                            u = "DOMContentLoaded", l = "addEventListener", c = "onreadystatechange", f = "readyState",
                            d = s ? /^loaded|^c/ : /^loaded|c/, p = d.test(o[f]);
                        return o[l] && o[l](u, n = function () {
                            o.removeEventListener(u, n, i), t()
                        }, i), s && o.attachEvent(c, n = function () {
                            /^c/.test(o[f]) && (o.detachEvent(c, n), t())
                        }), e = s ? function (t) {
                            self != top ? p ? t() : r.push(t) : function () {
                                try {
                                    a.doScroll("left")
                                } catch (n) {
                                    return setTimeout(function () {
                                        e(t)
                                    }, 50)
                                }
                                t()
                            }()
                        } : function (e) {
                            p ? e() : r.push(e)
                        }
                    }), Array.prototype.indexOf ? e.indexOf = function (e, t) {
                        return e.indexOf(t)
                    } : e.indexOf = function (e, t) {
                        if ("string" == typeof e)return e.indexOf(t);
                        var n, r, i = t ? t : 0;
                        if (!this)throw new TypeError;
                        if (r = this.length, 0 === r || i >= r)return -1;
                        for (i < 0 && (i = r - Math.abs(i)), n = i; n < r; n++)if (this[n] === e)return n;
                        return -1
                    }, Array.isArray ? e.isArray = function (e) {
                        return Array.isArray(e)
                    } : e.isArray = function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }, Object.keys ? e.iterate = function (e, t) {
                        if (!e)return [];
                        var n, r = Object.keys(e);
                        for (n = 0; r[n] && t(r[n], e[r[n]]) !== !1; n++);
                    } : e.iterate = function (e, t) {
                        if (!e)return [];
                        var n;
                        for (n in e)if (Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]) === !1)break
                    }, window.matchMedia ? e.matchesMedia = function (e) {
                        return "" == e || window.matchMedia(e).matches
                    } : window.styleMedia || window.media ? e.matchesMedia = function (e) {
                        if ("" == e)return !0;
                        var t = window.styleMedia || window.media;
                        return t.matchMedium(e || "all")
                    } : window.getComputedStyle ? e.matchesMedia = function (e) {
                        if ("" == e)return !0;
                        var t = document.createElement("style"), n = document.getElementsByTagName("script")[0],
                            r = null;
                        t.type = "text/css", t.id = "matchmediajs-test", n.parentNode.insertBefore(t, n), r = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle;
                        var i = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                        return t.styleSheet ? t.styleSheet.cssText = i : t.textContent = i, "1px" === r.width
                    } : e.matchesMedia = function (e) {
                        if ("" == e)return !0;
                        var t, n, r, i, o = {"min-width": null, "max-width": null}, a = !1;
                        for (r = e.split(/\s+and\s+/), t = 0; t < r.length; t++)n = r[t], "(" == n.charAt(0) && (n = n.substring(1, n.length - 1), i = n.split(/:\s+/), 2 == i.length && (o[i[0].replace(/^\s+|\s+$/g, "")] = parseInt(i[1]), a = !0));
                        if (!a)return !1;
                        var s = document.documentElement.clientWidth, u = document.documentElement.clientHeight;
                        return !(null !== o["min-width"] && s < o["min-width"] || null !== o["max-width"] && s > o["max-width"] || null !== o["min-height"] && u < o["min-height"] || null !== o["max-height"] && u > o["max-height"])
                    }, navigator.userAgent.match(/MSIE ([0-9]+)/) && RegExp.$1 < 9 && (e.newStyle = function (e) {
                        var t = document.createElement("span");
                        return t.innerHTML = '&nbsp;<style type="text/css">' + e + "</style>", t
                    })
                },
                initVars: function () {
                    var t, n, r, i = navigator.userAgent;
                    t = "other", n = 0, r = [["firefox", /Firefox\/([0-9\.]+)/], ["bb", /BlackBerry.+Version\/([0-9\.]+)/], ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/], ["opera", /OPR\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)/], ["edge", /Edge\/([0-9\.]+)/], ["safari", /Version\/([0-9\.]+).+Safari/], ["chrome", /Chrome\/([0-9\.]+)/], ["ie", /MSIE ([0-9]+)/], ["ie", /Trident\/.+rv:([0-9]+)/]], e.iterate(r, function (e, r) {
                        if (i.match(r[1]))return t = r[0], n = parseFloat(RegExp.$1), !1
                    }), e.vars.browser = t, e.vars.browserVersion = n, t = "other", n = 0, r = [["ios", /([0-9_]+) like Mac OS X/, function (e) {
                        return e.replace("_", ".").replace("_", "")
                    }], ["ios", /CPU like Mac OS X/, function (e) {
                        return 0
                    }], ["wp", /Windows Phone ([0-9\.]+)/, null], ["android", /Android ([0-9\.]+)/, null], ["mac", /Macintosh.+Mac OS X ([0-9_]+)/, function (e) {
                        return e.replace("_", ".").replace("_", "")
                    }], ["windows", /Windows NT ([0-9\.]+)/, null], ["bb", /BlackBerry.+Version\/([0-9\.]+)/, null], ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/, null]], e.iterate(r, function (e, r) {
                        if (i.match(r[1]))return t = r[0], n = parseFloat(r[2] ? r[2](RegExp.$1) : RegExp.$1), !1
                    }), e.vars.os = t, e.vars.osVersion = n, e.vars.IEVersion = "ie" == e.vars.browser ? e.vars.browserVersion : 99, e.vars.touch = "wp" == e.vars.os ? navigator.msMaxTouchPoints > 0 : !!("ontouchstart" in window), e.vars.mobile = "wp" == e.vars.os || "android" == e.vars.os || "ios" == e.vars.os || "bb" == e.vars.os
                }
            };
            return e.init(), e
        }();
        !function (e, r) {
            "function" == typeof define && define.amd ? define([], r) : "object" == typeof n ? t.exports = r() : e.skel = r()
        }(this, function () {
            return r
        })
    }, {}], web: [function (e, t, n) {
        var r = function () {
            String.prototype.capitalize = function () {
                return this.charAt(0).toUpperCase() + this.slice(1)
            };
            var e = {
                types: {
                    none: null,
                    any: "^[ -~\\tÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð\\n\\r]*$",
                    text: "^[a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð0-9\\_\\-\\\\\"\\'\\ \\?\\!\\.\\,\\:\\;\\(\\)\\/\\#\\&\\@\\$\\%\\*\\+\\=\\n\\r]+$",
                    utf8text: "^[^\\<\\>]+$",
                    alnum: "^[a-zA-Z0-9]+$",
                    alpha: "^[a-zA-Z]+$",
                    digits: "^[0-9]+$",
                    bool: null,
                    domain: "^[a-z0-9][a-z0-9\\-\\.]*\\.[a-z]+$",
                    email: "^([a-zA-Z0-9\\_\\-\\.\\+]+)@([a-zA-Z0-9\\-\\.]+)\\.([a-zA-Z]+)$",
                    float: "^-?([0-9]+)(\\.([0-9]+)){0,1}$",
                    id: "^[a-z0-9\\-]+$",
                    int: "^-?([0-9]+)$",
                    ip: "^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$",
                    name: "^([a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð\\-\\']+(?:\\.)?(?: [a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð\\-\\']+(?:\\.)?)*)$",
                    password: "^[ -~]+$",
                    request: "^([/!#$&-;=?-[]_a-z~]|%[0-9a-fA-F]{2})+$",
                    tel: "^[0-9\\-\\+\\(\\)\\s]+$",
                    title: "^[a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð0-9\\_\\-\\\\\"\\'\\ \\?\\!\\.\\,\\:\\;\\(\\)\\/\\#\\&\\@\\$\\%\\*\\+\\=]+$",
                    uri: "^[a-z0-9\\-\\.]+:[a-zA-Z0-9\\~\\!\\@\\#\\$\\%\\&\\-\\_\\+\\=\\;\\,\\.\\?\\/\\:]+$",
                    url: "^https?:\\/\\/[a-zA-Z0-9\\~\\!\\@\\#\\$\\%\\&\\-\\_\\+\\=\\;\\,\\.\\?\\/\\:]+$",
                    href: "^(#[a-zA-Z0-9\\_\\-]+|[a-z0-9\\-\\.]+:[a-zA-Z0-9\\~\\!\\@\\#\\$\\%\\&\\-\\_\\+\\=\\;\\,\\.\\?\\/\\:]+)$",
                    username: "^[a-zA-Z0-9\\_]+$",
                    word: "^[a-zA-Z0-9\\_\\-]+$",
                    htmlacolor: "(^#[a-fA-F0-9]{6}$|^#[a-fA-F0-9]{8}$)",
                    htmlcolor: "^#[a-fA-F0-9]{6}$",
                    rgbacolor: "rgba\\([0-9]+,\\s*[0-9]+,\\s*[0-9]+,\\s*[0-9\\.]+\\)",
                    rgbcolor: "rgb\\([0-9]+,\\s*[0-9]+,\\s*[0-9]+\\)"
                },
                typeNames: {
                    none: !1,
                    any: !1,
                    text: !1,
                    utf8text: !1,
                    alnum: "alphanumeric string",
                    alpha: "alphabetic string",
                    digits: "string of digits",
                    bool: "boolean",
                    email: "email address",
                    float: "decimal value",
                    id: !1,
                    int: "integer",
                    ip: "IP address",
                    name: !1,
                    tel: "telephone number",
                    title: !1,
                    url: "URL",
                    username: !1,
                    word: !1,
                    htmlacolor: "HTML color",
                    htmlcolor: "HTML color",
                    rgbacolor: "RGB color",
                    rgbcolor: "RGB color"
                },
                cookie: function (e, t, n, r) {
                    if ("" === t)return r || (r = "/"), document.cookie = e + "=; expires=Thu, 1 Jan 1970 12:00:00 UTC; path=" + r, null;
                    if (t) {
                        var i, o;
                        return n || (n = 0), i = new Date, i.setTime(i.getTime() + n), o = i.toGMTString(), r || (r = "/"), document.cookie = e + "=" + t + "; expires=" + o + "; path=" + r, t
                    }
                    var a, u = document.cookie.split(";");
                    for (s in u)if (a = u[s].split("="), a[0].trim() == e)return unescape(a[1]);
                    return null
                },
                is: function (t, n) {
                    return !n || ("function" == typeof t ? t(n) : !e.types[t] || !!n.match(new RegExp(e.types[t])))
                },
                typeName: function (t) {
                    return !!e.typeNames[t] && e.typeNames[t]
                },
                fieldValue: function (e, t, n) {
                    var r, i;
                    return r = "#" == t[0] ? e.find(t) : e.find('[name="' + t + '"]'), "checkbox" == r.attr("type") ? (n && r.prop("checked", n).trigger("change"), r.prop("checked")) : "radio" == r.attr("type") ? (n && r.filter('[value="' + n + '"]').prop("checked", !0).trigger("change"), i = r.filter(":checked").val(), "undefined" != typeof i && null !== i || (i = ""), i) : ((n || "" === n) && r.val(n).trigger("change"), i = r.val(), "undefined" != typeof i && null !== i || (i = ""), i)
                },
                scrollTo: function (e, t, n) {
                    var r, i, o = $(window);
                    return n || (n = $("body,html")), r = Math.max(0, e.offset().top - (o.height() - e.outerHeight()) / 2), i = Math.abs(r - o.scrollTop()), i < 50 ? (n.scrollTop(r), t && t()) : n.stop().animate({scrollTop: r}, 750, "swing", t), !0
                },
                date: {
                    offsetValue: 0,
                    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    offset: function (t) {
                        return "undefined" != typeof t && (e.date.offsetValue = parseInt(t)), e.date.offsetValue
                    },
                    timestamp: function () {
                        return parseInt(Date.now() / 1e3) - e.date.offset()
                    },
                    absolute: function (t, n) {
                        t || (t = e.date.timestamp()), n || (n = 1);
                        var r, i, o, a, s, u, l, c, f, d = new Date, p = "";
                        switch (d.setTime(1e3 * t), r = e.date.months[d.getMonth()], i = d.getDate(), o = d.getFullYear(), a = d.getHours(), s = d.getMinutes(), u = d.getSeconds(), l = e.date.days[d.getDay()], a > 12 ? (c = a - 12, f = "pm") : (c = a, f = "am"), n) {
                            case 1:
                                p = r + " " + i + ", " + o;
                                break;
                            case 2:
                                p = r + " " + i + ", " + o + " " + c + ":" + s + f;
                                break;
                            case 3:
                                p = l + ", " + r + " " + i + ", " + o + " " + a + ":" + s + ":" + u
                        }
                        return p
                    },
                    relative: function (t, n, r) {
                        t || (t = e.date.timestamp()), n || (n = 1), r || (r = 129600);
                        var i, o, a, s, u, l = e.date.timestamp(), c = "", f = !1;
                        if (t > l ? (i = t - l, f = !0) : (i = l - t, c = " ago"), r !== !1 && i > r)return e.date.absolute(t, n);
                        if (i < 60)switch (n) {
                            case 1:
                                if (i < 30)return "just now";
                                if (i < 60)return "about a minute" + c;
                            case 2:
                                return i + " second" + (1 != i ? "s" : "") + c;
                            case 3:
                            default:
                                return i + " secs" + c
                        }
                        if (i < 3600)switch (a = Math.floor(i / 60), i -= 60 * a, seconds = i, n) {
                            case 1:
                                if (a > 45)return "about an hour" + c;
                            case 2:
                                return a + " minute" + (1 != a ? "s" : "") + c;
                            case 3:
                            default:
                                return a + " mins " + seconds + " secs" + c
                        }
                        if (i < 86400) {
                            if (o = Math.floor(i / 3600), i -= 3600 * o, 0 === i)return o + " hrs" + c;
                            switch (a = Math.floor(i / 60), n) {
                                case 2:
                                    return o + " hour" + (1 != o ? "s" : "") + c;
                                case 1:
                                case 3:
                                default:
                                    return o + " hrs " + a + " mins" + c
                            }
                        }
                        if (i < 604800)switch (s = Math.floor(i / 86400), i -= 86400 * s, o = Math.floor(i / 3600), n) {
                            case 1:
                                if (1 == s && o < 6)return f ? "tomorrow" : "yesterday";
                            case 2:
                                return o > 12 && s++, s + " day" + (1 != s ? "s" : "") + c;
                            case 3:
                            default:
                                return s + " days " + o + " hrs" + c
                        }
                        switch (u = Math.floor(i / 604800), i -= 604800 * u, s = Math.floor(i / 86400), i -= 86400 * s, o = Math.floor(i / 3600), n) {
                            case 1:
                                if (1 == u && s < 2)return "about a week" + c;
                                if (4 == u)return "about a month" + c;
                            case 2:
                                return s > 4 && u++, u >= 4 ? (months = Math.floor(u / 4), months >= 12 ? (years = Math.floor(months / 12), years + " year" + (1 != years ? "s" : "") + c) : months + " month" + (1 != months ? "s" : "") + c) : u + " week" + (1 != u ? "s" : "") + c;
                            case 3:
                            default:
                                return u + " wks " + s + " days" + c
                        }
                        return ""
                    }
                }
            };
            return e
        }();
        !function (e, r) {
            "function" == typeof define && define.amd ? define([], r) : "object" == typeof n ? t.exports = r() : e.web = r()
        }(this, function () {
            return r
        }), window.web = r
    }, {}]
}, {}, []);