!function e(t, i, o) {
    function n(s, r) {
        if (!i[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!r && l)return l(s, !0);
                if (a)return a(s, !0);
                var p = new Error("Cannot find module '" + s + "'");
                throw p.code = "MODULE_NOT_FOUND", p
            }
            var d = i[s] = {exports: {}};
            t[s][0].call(d.exports, function (e) {
                var i = t[s][1][e];
                return n(i ? i : e)
            }, d, d.exports, e, t, i, o)
        }
        return i[s].exports
    }

    for (var a = "function" == typeof require && require, s = 0; s < o.length; s++)n(o[s]);
    return n
}({
    1: [function (e, t, i) {
        window.app.build = function () {
            var t = app, i = e("./classes/site.js"), o = (e("./classes/component.js"), e("./classes/pageComponent.js")),
                n = e("./classes/contentComponent.js"), a = e("./classes/iconsComponent.js"),
                s = e("./classes/imageComponent.js"), r = e("./classes/textComponent.js"),
                l = e("./classes/dividerComponent.js"), p = e("./classes/linksComponent.js"),
                d = e("./classes/buttonsComponent.js"), c = e("./classes/videoComponent.js"),
                u = e("./classes/formComponent.js"), h = e("./classes/tableComponent.js"),
                m = e("./classes/galleryComponent.js"), g = e("./classes/widgetComponent.js"),
                f = e("./classes/audioComponent.js"), y = e("./classes/controlComponent.js"),
                v = e("./classes/timerComponent.js"), b = e("./classes/gridComponent.js"),
                w = e("./classes/columnsComponent.js");
            CSSRuleWrapper = e("./classes/CSSRuleWrapper.js"), CSSStyleSheetWrapper = e("./classes/CSSStyleSheetWrapper.js");
            var x = {
                components: {
                    page: o,
                    content: n,
                    icons: a,
                    image: s,
                    text: r,
                    divider: l,
                    links: p,
                    buttons: d,
                    video: c,
                    form: u,
                    table: h,
                    gallery: m,
                    widget: g,
                    audio: f,
                    control: y,
                    timer: v,
                    grid: b,
                    columns: w
                },
                messages: {
                    mobileLayout: "Optional settings for mobile displays.",
                    linkURLs: "Accepts all valid URL prefixes (eg. <code>http</code>, <code>tel</code>, <code>mailto</code>) and section break names (eg. <code>#about</code>). Append <code>@blank</code> to URLs to open them in new tabs.",
                    markdown: 'Supports the following subset of <a href="https://daringfireball.net/projects/markdown/" target="_blank">Markdown</a>:',
                    markdownSyntax: "<ul><li>**Bold** or __Bold__</li><li>*Italic* or _Italic_</li><li>[Link text](http://domain.tld)</li><li>[Link text](http://domain.tld@blank)</li><li>[Link text](#sectionBreakName)</li><li>`Code`</li><li>~~Strike~~</li><li>==Highlight==</li><li>- List Item</li></ul>",
                    markdownLiteSyntax: "<ul><li>**Bold** or __Bold__</li><li>*Italic* or _Italic_</li><li>[Link text](http://domain.tld)</li><li>[Link text](http://domain.tld@blank)</li><li>[Link text](#sectionBreakName)</li><li>`Code`</li><li>~~Strike~~</li><li>==Highlight==</li></ul>"
                },
                canvas: {
                    $layer: null,
                    styleSheet: null,
                    $componentPlaceholder: $('<div class="component-placeholder"></div>'),
                    hasDropTarget: !1,
                    isDragging: !1,
                    autoscrollIntervalId: null,
                    autoscrollThreshold: {top: 0, bottom: 0},
                    init: function () {
                        var e, i = this;
                        this.$layer = $('<div id="canvas" />').appendTo(t.$body), $("<style>@media screen and (max-width: 1920px) { }@media screen and (max-width: 1680px) { }@media screen and (max-width: 1280px) { }@media screen and (max-width: 1024px) { }@media screen and (max-width: 980px) { }@media screen and (max-width: 736px) { }@media screen and (max-width: 480px) { }@media screen and (max-width: 360px) { }@media screen and (orientation: portrait) { }</style>").insertBefore(this.$layer), this.styleSheet = new CSSStyleSheetWrapper(document.styleSheets[document.styleSheets.length - 1], {
                            xxsmall: "screen and (max-width: 360px)",
                            xsmall: "screen and (max-width: 480px)",
                            small: "screen and (max-width: 736px)",
                            medium: "screen and (max-width: 980px)",
                            xmedium: "screen and (max-width: 1024px)",
                            large: "screen and (max-width: 1280px)",
                            xlarge: "screen and (max-width: 1680px)",
                            xxlarge: "screen and (max-width: 1920px)",
                            portrait: "screen and (orientation: portrait)"
                        });
                        for (e in x.components)x.components[e].prototype.cssBase(this.styleSheet);
                        this.$layer.on("click", function (e) {
                            return e.stopPropagation(), e.preventDefault(), x.ui.hideFloating(), skel.breakpoint("xsmall").active ? void x.ui.hideActivePanel() : void x.ui.propertiesPanel.show(x.site.page)
                        }), this.$layer.on("click", "#--main", function (e) {
                            return e.stopPropagation(), e.preventDefault(), x.ui.hideFloating(), skel.breakpoint("xsmall").active ? void x.ui.hideActivePanel() : void x.ui.propertiesPanel.show(x.site.content)
                        }), this.$layer.touch({
                            useTouch: app.touch.useTouch,
                            useMouse: app.touch.useMouse,
                            dragThreshold: 0,
                            dragDelay: 0,
                            tapAndHoldDelay: 300,
                            trackDocument: !0,
                            delegateSelector: ".component-wrapper, .component",
                            dropFilter: ".component-wrapper, .placeholder[data-columns-index]",
                            preventDefault: {drag: app.touch.dragPreventDefault}
                        }).on("click", ".component", function (e) {
                            e.stopPropagation()
                        }).on("tap", ".component", function (e) {
                            var t = $(this), i = t.parent(), o = x.site.components[i.data("id")];
                            e.stopPropagation(), x.ui.propertiesPanel.show(o)
                        }).on(app.touch.dragStartEvents, ".component", function (e, o) {
                            if (!i.isDragging) {
                                var n = $(this), a = n.children().first(), s = n.parent(),
                                    r = (x.site.components[s.data("id")], t.$document.scrollLeft()),
                                    l = t.$document.scrollTop(), p = this.getBoundingClientRect().width,
                                    d = this.getBoundingClientRect().height;
                                if (s.data("id") != o.touch.$element.parent().data("id")) {
                                    var c = n.offset();
                                    o.touch.$element = n, o.touch.ex = o.touch.x - c.left, o.touch.ey = o.touch.y - c.top, o.ex = o.touch.ex, o.ey = o.touch.ey
                                }
                                e.stopPropagation(), i.isDragging = !0, t.$body.addClass("is-dragging"), "android" == skel.vars.os && t.$body.css("overflow", "hidden"), i.$componentPlaceholder.css("width", p + "px").css("height", d + "px").css("margin-top", a.css("margin-top")).css("margin-bottom", a.css("margin-bottom")).insertBefore(n), n.css("width", p + "px").css("height", d + "px").addClass("is-dragging").css("left", o.x - o.ex - r + "px").css("top", o.y - o.ey - l + "px"), i.hasDropTarget = !0, s.addClass("is-dropTarget"), o.ey < Math.ceil(s.outerHeight() / 2) ? s.addClass("before").removeClass("after") : s.addClass("after").removeClass("before")
                            }
                        }).on("drag", ".component.is-dragging", function (e, o) {
                            var n = $(this), a = n.parent(),
                                s = (x.site.components[a.data("id")], t.$document.scrollLeft()),
                                r = t.$document.scrollTop(), l = o.y - r;
                            e.stopPropagation(), i.isDragging && (l <= i.autoscrollThreshold.top ? (i.autoscrollThreshold.speed = Math.pow((i.autoscrollThreshold.top - l) / i.autoscrollThreshold.top * 7, 2), null === i.autoscrollIntervalId && (i.autoscrollIntervalId = setInterval(function () {
                                t.$document.scrollTop(t.$document.scrollTop() - i.autoscrollThreshold.speed)
                            }, 25))) : l >= i.autoscrollThreshold.bottom ? (i.autoscrollThreshold.speed = Math.pow((l - i.autoscrollThreshold.bottom) / (window.innerHeight - i.autoscrollThreshold.bottom) * 7, 2), null === i.autoscrollIntervalId && (i.autoscrollIntervalId = setInterval(function () {
                                t.$document.scrollTop(t.$document.scrollTop() + i.autoscrollThreshold.speed)
                            }, 25))) : (clearInterval(i.autoscrollIntervalId), i.autoscrollIntervalId = null), n.css("left", o.x - o.start.ex - s + "px").css("top", o.y - o.start.ey - r + "px"))
                        }).on("dragEnd tapAndHoldEnd", ".component.is-dragging", function (e, o) {
                            var n = $(this), a = n.parent();
                            x.site.components[a.data("id")];
                            e.stopPropagation(), i.isDragging = !1, clearInterval(i.autoscrollIntervalId), i.autoscrollIntervalId = null, t.$body.removeClass("is-dragging"), "android" == skel.vars.os && t.$body.css("overflow", ""), i.$componentPlaceholder.detach().css("width", "").css("height", ""), n.removeClass("is-dragging").css("left", "").css("top", "").css("width", "").css("height", ""), i.hasDropTarget = !1, a.removeClass("is-dropTarget").removeClass("after").removeClass("before")
                        }).on("dragEnter", ".component.is-dragging", function (e, t) {
                            var o = $(this), n = $(t.element), a = o.parent();
                            x.site.components[a.data("id")];
                            i.hasDropTarget || (e.stopPropagation(), i.hasDropTarget = !0, n.add(n.siblings()).add(n.parents()).removeClass("is-dropTarget").removeClass("after").removeClass("before"), n.addClass("is-dropTarget"))
                        }).on("dragOver", ".component.is-dragging", function (e, t) {
                            var i = $(this), o = $(t.element), n = i.parent();
                            x.site.components[n.data("id")];
                            e.stopPropagation(), t.ey < Math.ceil(o.outerHeight() / 2) ? o.addClass("before").removeClass("after") : o.addClass("after").removeClass("before")
                        }).on("dragLeave", ".component.is-dragging", function (e, t) {
                            var o = $(this), n = $(t.element), a = o.parent();
                            x.site.components[a.data("id")];
                            e.stopPropagation(), i.hasDropTarget = !1, n.removeClass("is-dropTarget").removeClass("after").removeClass("before")
                        }).on("drop", ".component.is-dragging", function (e, t) {
                            var o, n, a, s, r, l = $(this), p = l.parent(), d = x.site.components[p.data("id")];
                            i.hasDropTarget && (e.stopPropagation(), i.hasDropTarget = !1, a = $(t.element), r = a.hasClass("after") ? 1 : -1, a.removeClass("is-dropTarget").removeClass("after").removeClass("before"), a.hasClass("component-wrapper") ? (s = x.site.components[a.data("id")], a.data("id") != p.data("id") && x.site.move(d, s, r)) : (n = a.parents(".component-wrapper").first(), n.length > 0 && (o = x.site.components[n.data("id")], o.handleDrop(d, a))))
                        }), this.$layer.on("mouseenter.hover", ".component, #--main", function (e) {
                            var t = $(this);
                            i.$layer.find(".hover").removeClass("hover"), t.addClass("hover")
                        }).on("mouseleave.hover", ".component, #--main", function (e) {
                            var t = $(this);
                            t.removeClass("hover")
                        }).on("mouseenter.hover", ".component-wrapper", function (e) {
                            var t = $(this);
                            e.stopPropagation(), t.parents(".component, #--main").removeClass("hover")
                        }).on("mouseleave.hover", ".component-wrapper", function (e) {
                            var t = $(this);
                            t.parents(".component, #--main").first().addClass("hover")
                        });
                        var o;
                        t.$window.on("resize.site-refresh", function (e) {
                            window.clearTimeout(o), o = window.setTimeout(function () {
                                x.site.refresh()
                            }, 10)
                        });
                        var n;
                        if (t.$window.on("resize.autoscroll-threshold", function (e) {
                                window.clearTimeout(n), n = window.setTimeout(function () {
                                    var e = Math.max(20, Math.floor(.075 * window.innerHeight));
                                    i.autoscrollThreshold.top = e, i.autoscrollThreshold.bottom = window.innerHeight - e, skel.breakpoint("xsmall").active && (i.autoscrollThreshold.top += x.ui.menu.$wrapper.outerHeight())
                                }, 10)
                            }).triggerHandler("resize.autoscroll-threshold"), skel.vars.IEVersion <= 11) {
                            var a;
                            t.$window.on("resize.ie-flexbox-fix", function () {
                                var e = $("#--wrapper"), i = x.canvas.$layer.hasClass("backgroundFriendly");
                                window.clearTimeout(a), a = window.setTimeout(function () {
                                    var o = t.$window.height();
                                    e.css("height", ""), skel.breakpoint("medium").active && i || window.setTimeout(function () {
                                        var t = $("#--main").height();
                                        e.css("height", o > t ? o + "px" : "auto")
                                    }, 0)
                                }, 50)
                            }), window.setTimeout(function () {
                                t.$window.triggerHandler("resize.ie-flexbox-fix")
                            }, 0)
                        }
                    }
                },
                ui: {
                    $layer: null,
                    activePanel: null,
                    keys: {
                        27: function () {
                            x.ui.hideActivePanel(), x.ui.hideFloating()
                        }, s80: function () {
                            x.ui.activePanel || (x.ui.publishPanel.$wrapper.find('input[type="submit"][form="publish-form"]').prop("disabled") ? x.ui.publishPanel.show() : x.ui.publishPanel.$form.submit())
                        }
                    },
                    imageLibraryDialog: {
                        $wrapper: null,
                        $thumbnails: null,
                        $targetImage: null,
                        targetComponent: null,
                        loaded: !1,
                        initThumbnails: function () {
                            var e, t = this;
                            for (e in x.imageLibrary.list)!function (e) {
                                var i, o = x.imageLibrary.list[e];
                                i = $('<div class="thumbnail" data-id="' + e + '"><img src="' + o.imageThumbnailURL + '" /><div class="caption"><a href="' + o.authorURL + '" class="author" target="_blank">' + o.author + "</a>" + (o.source ? ' @ <a href="' + o.sourceURL + '" class="source"  target="_blank">' + o.source + "</a>" : "") + "</div></div>").css("background-image", 'url("' + o.imageThumbnailURL + '")').appendTo(t.$thumbnails), i.find("img").on("load", function () {
                                    i.addClass("loaded")
                                })
                            }(e)
                        },
                        init: function () {
                            var e = this;
                            this.$wrapper = $('<div id="imageLibraryDialog" class="modal" tabindex="-1"><section class="content"><div class="thumbnails"></div><span class="close do-close"></span></section></div>').on("mousedown", function (t) {
                                t.preventDefault(), t.stopPropagation(), e.hide()
                            }).on("click mousedown", ".content", function (e) {
                                e.stopPropagation()
                            }).on("click", ".do-close", function (t) {
                                t.preventDefault(), t.stopPropagation(), e.hide()
                            }).on("keydown", function (t) {
                                switch (t.keyCode) {
                                    case 27:
                                        t.stopPropagation(), e.hide()
                                }
                            }).on("click", ".thumbnail > .caption > a", function (e) {
                                e.stopPropagation()
                            }).on("click", ".thumbnail", function (t) {
                                x.imageLibrary.apply($(this).data("id"), e.$targetImage, e.targetComponent), e.hide()
                            }), this.$thumbnails = this.$wrapper.find(".thumbnails")
                        },
                        show: function (e, i) {
                            var o = this;
                            "undefined" != typeof e && (this.$targetImage = e, "undefined" != typeof i && (this.targetComponent = i), this.$wrapper.appendTo(t.$body), this.$thumbnails.scrollTop(0), this.loaded === !1 && (this.initThumbnails(), this.loaded = !0), window.setTimeout(function () {
                                o.$wrapper.addClass("visible")
                            }, 100), window.setTimeout(function () {
                                o.$wrapper.focus()
                            }, 250))
                        },
                        hide: function () {
                            var e = this;
                            this.$targetImage = null, this.$wrapper.removeClass("visible"), window.setTimeout(function () {
                                e.$wrapper.detach(), x.ui.$layer.focus()
                            }, 250)
                        }
                    },
                    help: {
                        $wrapper: null, init: function () {
                            this.$wrapper = $('<div id="help" tabindex="-1"><h2 class="title">Useful Instructions!</h2><div class="menu"><div data-name="add"><span><span class="label">Add <span class="extra">new</span> elements <span class="extra">(text, images, etc.)</span></span><span class="arrow"></span></span></div><div data-name="undo"><span><span class="label">Undo <span class="extra">the</span> previous action</span><span class="arrow"></span></span></div><div data-name="redo"><span><span class="label">Redo <span class="extra">the</span> next action</span><span class="arrow"></span></span></div><div data-name="play"><span><span class="label">Preview animations <span class="extra">(if you\'ve added any)</span></span><span class="arrow"></span></span></div><div data-name="publish"><span><span class="label">Publish your <span class="extra">kickass new</span> site</span><span class="arrow"></span></span></div><div data-name="page-properties"><span><span class="label"><span class="extra">Show </span>Background properties</span><span class="arrow"></span></span></div><div data-name="content-properties"><span><span class="label"><span class="extra">Show </span>Content properties</span><span class="arrow"></span></span></div><div data-name="menu"><span><span class="label">Bring up the menu <span class="extra">with additional actions</span></span><span class="arrow"></span></span></div></div><div class="dragging"><span class="label">Drag and drop elements to arrange <span class="extra">them</span></span><span class="arrow"></span></div><div class="clicking"><span class="label">Click <span class="extra">on</span> an element to bring up <span class="extra">its</span> properties</span><span class="arrow"></span></div><div class="footer"><span class="button special">Okay, got it!</span><p>(PS: Go to Menu &gt; Help to bring up this screen again)</p></div></div>').hide().appendTo(x.ui.$layer).on("keydown", function (e) {
                                switch (e.keyCode) {
                                    case 13:
                                    case 27:
                                        x.ui.help.hide()
                                }
                            }).on("click", function () {
                                x.ui.help.hide()
                            });
                            var e = this.$wrapper.find(".menu > *"), t = {};
                            e.each(function () {
                                var e = $(this);
                                t[e.data("name")] = e
                            }), skel.on("+xsmall", function () {
                                t.add.attr("data-pos", "1"), t.undo.removeAttr("data-pos"), t.redo.removeAttr("data-pos"), t.play.attr("data-pos", "2"), t.publish.removeAttr("data-pos"), t["page-properties"].attr("data-pos", "3"), t["content-properties"].attr("data-pos", "4"), t.menu.attr("data-pos", "5")
                            }).on("-xsmall !xsmall", function () {
                                t.add.attr("data-pos", "1"), t.undo.attr("data-pos", "2"), t.redo.attr("data-pos", "3"), t.play.attr("data-pos", "4"), t.publish.attr("data-pos", "5"), t["page-properties"].removeAttr("data-pos"), t["content-properties"].removeAttr("data-pos"), t.menu.attr("data-pos", "6")
                            })
                        }, show: function () {
                            var e = this;
                            switch (e.$wrapper.removeClass("ui-left").removeClass("ui-right").removeClass("content-center").removeClass("content-left").removeClass("content-right"), x.ui.$layer.hasClass("is-reversed") ? e.$wrapper.addClass("ui-left") : e.$wrapper.addClass("ui-right"), x.site.content.position) {
                                case"top-left":
                                case"bottom-left":
                                case"left":
                                    e.$wrapper.addClass("content-left");
                                    break;
                                case"top-right":
                                case"bottom-right":
                                case"right":
                                    e.$wrapper.addClass("content-right");
                                    break;
                                case"top":
                                case"bottom":
                                case"center":
                                default:
                                    e.$wrapper.addClass("content-center")
                            }
                            e.$wrapper.show(), window.setTimeout(function () {
                                e.$wrapper.addClass("visible")
                            }, 100), window.setTimeout(function () {
                                e.$wrapper.focus()
                            }, 250)
                        }, hide: function () {
                            var e = this;
                            e.$wrapper.removeClass("visible"), window.setTimeout(function () {
                                e.$wrapper.hide()
                            }, 350)
                        }
                    },
                    menu: {
                        $wrapper: null, $menus: null, menus: {}, actions: {
                            "add-text": function () {
                                var e = x.add("text");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-image": function () {
                                var e = x.add("image");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-icons": function () {
                                var e = x.add("icons");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-divider": function () {
                                var e = x.add("divider");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-links": function () {
                                var e = x.add("links");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-buttons": function () {
                                var e = x.add("buttons");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-video": function () {
                                var e = x.add("video");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-form": function () {
                                if (x.perks.has("use-form-components")) {
                                    var e = x.add("form");
                                    e && (window.setTimeout(function () {
                                        web.scrollTo(e.$wrapper)
                                    }, 0), x.ui.propertiesPanel.show(e))
                                }
                            }, "add-table": function () {
                                var e = x.add("table");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-gallery": function () {
                                var e = x.add("gallery");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-widget": function () {
                                if (x.perks.has("use-widget-components")) {
                                    var e = x.add("widget");
                                    e && (window.setTimeout(function () {
                                        web.scrollTo(e.$wrapper)
                                    }, 0), x.ui.propertiesPanel.show(e))
                                }
                            }, "add-audio": function () {
                                var e = x.add("audio");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-control": function () {
                                var e = x.add("control");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-timer": function () {
                                var e = x.add("timer");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-grid": function () {
                                var e = x.add("grid");
                                e && (e.prop("cells", "element01\nelement02\n\nelement03\nelement04\n\nelement05\nelement06\n\nelement07\nelement08"), window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, "add-columns": function () {
                                var e = x.add("columns");
                                e && (window.setTimeout(function () {
                                    web.scrollTo(e.$wrapper)
                                }, 0), x.ui.propertiesPanel.show(e))
                            }, publish: function () {
                                x.ui.publishPanel.show()
                            }, play: function () {
                                var e = x.canvas.$layer.find("#--body"), t = 0;
                                e.hasClass("is-playing") || (t = x.site.animationDuration(), e.removeClass("is-stopped"), e.addClass("is-playing").addClass("is-loading"), window.setTimeout(function () {
                                    e.removeClass("is-loading"), window.setTimeout(function () {
                                        e.removeClass("is-playing")
                                    }, t), window.setTimeout(function () {
                                        e.addClass("is-stopped")
                                    }, t)
                                }, 100))
                            }, "start-over": function () {
                                x.exit("Start Over", function () {
                                    x.history.clear(), window.location.href = window.location.href.replace(/[&\?]welcome=1/, "")
                                })
                            }, "view-site": function (e) {
                                window.open(e)
                            }, help: function () {
                                x.ui.help.show()
                            }, dashboard: function () {
                                x.exit("Exit", function () {
                                    x.history.clear(), window.location.href = "/dashboard"
                                })
                            }, "page-properties": function () {
                                x.ui.propertiesPanel.show(x.site.page)
                            }, "content-properties": function () {
                                x.ui.propertiesPanel.show(x.site.content)
                            }, undo: function () {
                                x.history.undo()
                            }, redo: function () {
                                x.history.redo()
                            }
                        }, init: function () {
                            this.$wrapper = $('<div id="menu"><div data-name="add" class="floating" title="Add"><div class="items columned"><div class="column"><a href="" data-action="add-text" title="">Text</a><a href="" data-action="add-image" title="">Image</a><a href="" data-action="add-video" title="">Video</a><a href="" data-action="add-audio" title="">Audio</a><a href="" data-action="add-gallery" title="">Gallery</a><a href="" data-action="add-timer" title="">Timer</a><a href="" data-action="add-widget" title="">Widget</a><a href="" data-action="add-columns" title="">Columns</a></div><div class="column"><a href="" data-action="add-buttons" title="">Buttons</a><a href="" data-action="add-links" title="">Links</a><a href="" data-action="add-icons" title="">Icons</a><a href="" data-action="add-divider" title="">Divider</a><a href="" data-action="add-table" title="">Table</a><a href="" data-action="add-form" title="">Form</a><a href="" data-action="add-control" title="">Control</a>' + (x.perks.has("use-beta-features") ? '<a href="" data-action="add-grid" title="">Grid</a>' : "") + '</div></div></div><div data-name="undo" data-action="undo" class="link disabled" title="Undo"></div><div data-name="redo" data-action="redo" class="link disabled" title="Redo"></div><div data-name="play" data-action="play" class="link' + (x.site.isAnimated() ? "" : " disabled") + '" title="Preview Animation"></div><div data-name="publish" data-action="publish" class="link" title="Publish"></div><div data-name="page-properties" data-action="page-properties" class="link" title="Page Properties"></div><div data-name="content-properties" data-action="content-properties" class="link" title="Content Properties"></div><div data-name="menu" class="floating"><div class="items"><a href="" data-action="undo" class="disabled">Undo</a><a href="" data-action="redo" class="disabled break-after">Redo</a><a href="" data-action="publish">Publish ...</a><a href="" data-action="start-over">Start Over</a><a href="" data-action="view-site">View Site</a><a href="" data-action="help">Help</a><a href="" data-action="dashboard" class="break-before">Dashboard</a><a href="/" data-action="exit" class="break-before">Exit</a></div></div></div>').appendTo(x.ui.$layer), this.$menus = this.$wrapper.children(), this.$menus.each(function () {
                                var e = $(this), t = e.data("name");
                                x.ui.menu.menus[t] = e, e._update = function () {
                                    var t, i = x.publishedURL();
                                    t = e.find('[data-action="view-site"]'), t.length > 0 && (i ? t.attr("data-arg", i).data("arg", i).show() : t.removeAttr("data-arg").removeData("arg").hide()), t = e.find('[data-action="dashboard"]'), t.length > 0 && (x.isLoggedIn() ? t.show() : t.hide()), t = e.find('[data-action="exit"]'), t.length > 0 && (x.isLoggedIn() ? t.hide() : t.show())
                                }, e._show = function () {
                                    e.hasClass("floating") && (e._update(), skel.breakpoint("small").active && x.ui.hideActivePanel(), x.ui.hideFloating(e), e.addClass("visible"))
                                }, e._hide = function () {
                                    x.ui.hideFloating(e), e.removeClass("visible")
                                }, e._toggle = function () {
                                    x.ui.hideFloating(e), e.hasClass("visible") ? e._hide() : e._show()
                                }, e.on("click", function (t) {
                                    t.preventDefault(), t.stopPropagation(), e._toggle()
                                })
                            }), this.$wrapper.find("a, .link").on("click", function (e) {
                                var t = $(this), i = t.data("action"), o = t.data("arg"), n = t.attr("href");
                                return t.hasClass("disabled") ? void x.ui.hideFloating() : (e.preventDefault(), e.stopPropagation(), n ? void("_blank" == t.attr("target") ? window.open(n) : window.location.href = n) : (x.ui.hideFloating(), void(i in x.ui.menu.actions && x.ui.menu.actions[i](o))))
                            }), x.perks.addDependency({
                                perk: "use-form-components",
                                target: this.$wrapper.find('[data-action="add-form"]'),
                                disable: function (e) {
                                    this.on("click.pro", e).addClass("disabled").attr("title", "Upgrade to use form elements.").append('<span class="upgrade-icon">Upgrade</span>')
                                },
                                enable: function () {
                                    this.off("click.pro").removeClass("disabled").removeAttr("title").find(".upgrade-icon").remove()
                                }
                            }), x.perks.addDependency({
                                perk: "use-widget-components",
                                target: this.$wrapper.find('[data-action="add-widget"]'),
                                disable: function (e) {
                                    this.on("click.pro", e).addClass("disabled").attr("title", "Upgrade to use widget elements.").append('<span class="upgrade-icon">Upgrade</span>')
                                },
                                enable: function () {
                                    this.off("click.pro").removeClass("disabled").removeAttr("title").find(".upgrade-icon").remove()
                                }
                            })
                        }, toggle: function (e) {
                            x.ui.menu.menus[e]._toggle()
                        }, show: function (e) {
                            x.ui.menu.menus[e]._show()
                        }, hide: function (e) {
                            x.ui.menu.menus[e]._hide()
                        }, refresh: function () {
                            var e;
                            e = this.$menus.filter('[data-action="publish"]'), x.history.unpublished() ? e.addClass("alert") : e.removeClass("alert"), e = this.$wrapper.find('[data-action="play"]'), x.site.isAnimated() ? e.removeClass("disabled") : e.addClass("disabled"), e = this.$wrapper.find('[data-action="undo"]'), x.history.canUndo() ? e.removeClass("disabled") : e.addClass("disabled"), e = this.$wrapper.find('[data-action="redo"]'), x.history.canRedo() ? e.removeClass("disabled") : e.addClass("disabled")
                        }
                    },
                    publishPanel: {
                        $form: null, $wrapper: null, $inner: null, init: function () {
                            var e, i = this;
                            this.$wrapper = $('<div id="publishPanel" class="panel"><div class="inner"><h2>Settings</h2><div class="form-wrapper"><form id="publish-form"><section data-title="Settings"><div class="field"><label for="title">Title</label><div class="textarea-wrapper"><textarea name="title" id="title" data-type="utf8text" maxlength="96" data-autosize></textarea></div><p class="note">Your site\'s title (and what goes in your &lt;title&gt; tag).</p></div><div class="field"><label for="description">Description</label><div class="textarea-wrapper"><textarea name="description" id="description" data-type="utf8text" maxlength="160" data-autosize></textarea></div><p class="note">Your site\'s description (and what goes in your "description" &lt;meta&gt; tag).</div><div class="field"><label for="urlType">URL</label><input type="radio" name="urlType" id="urlType-name" value="name"><label for="urlType-name">Use a .carrd.co URL</label><br /><input type="radio" name="urlType" id="urlType-domain" value="domain"><label for="urlType-domain">Use my own domain</label><br /><input type="radio" name="urlType" id="urlType-draft" value="draft"><label for="urlType-draft">None (publish as a draft)</label><br /><div data-requires="urlType=name"><div class="input-wrapper suffix domain"><input type="text" name="name" id="name" autocorrect="off" autocapitalize="off" data-type="sitename" maxlength="32" /></div><p class="note">Publishes your site using a .carrd.co URL. Lowercase letters, numbers, and hyphens only. Must be at least 3 characters long.</p></div><div data-requires="urlType=domain"><input type="text" name="domain" id="domain" autocorrect="off" autocapitalize="off" data-type="sitedomain" maxlength="64" /><p class="note">Publishes your site using a domain name or subdomain. Enter your domain (or subdomain) above, then <a href="#dns-record-setup">follow these instructions</a>.</p></div><div data-requires="urlType=draft"><p class="note">Publishes your site as a draft. Useful if you\'re not quite ready to share your site with the world.</p></div></div></section><section data-title="Advanced"><div class="field"><label for="icon" class="optional">Icon</label><div class="image-cropper favicon" data-minWidth="128" data-minHeight="128" data-crop="1" data-forceSquare="1" data-forceCanvas="1" data-forceType="image/png"><input class="id" type="text" name="faviconAssetId" id="faviconAssetId" autocomplete="off" data-optional="1" /><textarea class="data" type="text" name="faviconAssetData" id="faviconAssetData" data-optional="1"></textarea><p class="note">Your optional site icon (popularly referred to as a "favicon").</p><div class="inner"><span class="button small special do-upload">Upload Image</span><span class="button small do-clear">Clear Image</span></div></div></div><div class="field"><label for="trackingId" class="optional">Google Analytics ID</label><input type="text" name="trackingId" id="trackingId" autocorrect="off" autocapitalize="off" data-type="word" data-optional="1" placeholder="UA-XXXXX-Y" maxlength="128" /><p class="note">Your Google Analytics tracking ID (including the "UA-" prefix). Follow <a href="https://support.google.com/analytics/answer/1032385?" target="_blank">these steps</a> to find yours.</p></div></section></form></div></div><footer><div class="buttons"><div class="submit-wrapper"><input form="publish-form" type="submit" class="special" value="Publish" /><span></span></div></div></footer><div class="close"></div></div>').appendTo(x.ui.$layer), x.isNewUser() && this.$wrapper.find('[data-title="Settings"]').prepend('<div class="field"><label for="email">Your Account</label><p class="note">Enter an email and a password for your new Carrd account (which you\'ll use to manage your site once it\'s published).</p><input type="text" name="newUser-name" id="newUser-name" data-type="utf8text" placeholder="Name" maxlength="64" /></div><div class="field"><input type="email" name="newUser-email" id="newUser-email" data-type="email" placeholder="Email" maxlength="128" /></div><div class="field"><input type="password" name="newUser-password" id="newUser-password" data-type="text" placeholder="Password" maxlength="128" /></div><div class="field"><input type="password" name="newUser-passwordConfirm" id="newUser-passwordConfirm" data-type="text" placeholder="Confirm password" maxlength="128" /></div><div class="field"><input type="checkbox" name="terms" id="terms"><label for="terms">I agree to the <a href="/terms" target="_blank">Terms of Use</a>.</label></div><hr />'), this.$inner = this.$wrapper.children(".inner"), e = {
                                validation: !0,
                                types: {sitename: x.nameValid, sitedomain: x.domainValid},
                                verify: {name: x.nameAvailable, domain: x.domainAvailable},
                                fields: {
                                    terms: {},
                                    urlType: {},
                                    name: {
                                        value: x.siteProperties.name, change: function (e) {
                                            x.siteProperties.name = e
                                        }
                                    },
                                    domain: {
                                        value: x.siteProperties.domain, change: function (e) {
                                            x.siteProperties.domain = e
                                        }
                                    },
                                    title: {
                                        value: x.siteProperties.title, change: function (e) {
                                            x.siteProperties.title = e
                                        }
                                    },
                                    description: {
                                        value: x.siteProperties.description, change: function (e) {
                                            x.siteProperties.description = e
                                        }
                                    },
                                    trackingId: {
                                        value: x.siteProperties.trackingId, change: function (e) {
                                            x.siteProperties.trackingId = e
                                        }
                                    },
                                    faviconAssetId: {
                                        value: x.siteProperties.faviconAssetId, change: function (e) {
                                            var t = i.$form.find('[name="faviconAssetId"]').val(),
                                                o = i.$form.find('[name="faviconAssetData"]').val();
                                            o && o.match(/^data:/) ? (x.siteProperties.faviconAssetId = t, x.siteProperties.faviconAssetData = o) : (x.siteProperties.faviconAssetId = "", x.siteProperties.faviconAssetData = "")
                                        }
                                    },
                                    faviconAssetData: {value: x.siteProperties.faviconAssetData}
                                },
                                submitHandler: function (e) {
                                    var o = i.$form.find('input[name="urlType"]:checked').val(),
                                        n = i.$form.find('input[name="name"]'),
                                        a = i.$form.find('input[name="domain"]');
                                    switch (o) {
                                        case"name":
                                            a.val(""), x.siteProperties.domain = null;
                                            break;
                                        case"domain":
                                            n.val(""), x.siteProperties.name = null;
                                            break;
                                        case"draft":
                                        default:
                                            n.val(""), x.siteProperties.name = null, a.val(""), x.siteProperties.domain = null
                                    }
                                    t.dialog.preshow(), x.publish(function () {
                                        x.ui.publishPanel.hide(), x.ui.publishPanel.$form.find("input,select,textarea").trigger("--refresh"), x.publishedURL() ? t.dialog.show({
                                            title: "Done!",
                                            message: 'Site successfully published to <a href="' + x.publishedURL() + '" target="_blank"><strong>' + x.publishedURL(!1) + "</strong></a>",
                                            actions: {
                                                Okay: function () {
                                                    this.hide()
                                                }, "View Site": function () {
                                                    window.open(x.publishedURL())
                                                }
                                            }
                                        }) : t.dialog.show({
                                            title: "Done!",
                                            message: "Site successfully published as a draft.",
                                            actions: {
                                                Okay: function () {
                                                    this.hide()
                                                }
                                            }
                                        }), e()
                                    }, function (i, o) {
                                        t.dialog.show({
                                            title: i ? i : "Error",
                                            message: o ? o : "Hmm, something went wrong. Try again later."
                                        }), e()
                                    })
                                }
                            }, x.isNewUser() && (e.fields["newUser-name"] = {
                                value: x.newUserProperties.name,
                                change: function (e) {
                                    x.newUserProperties.name = e
                                }
                            }, e.fields["newUser-email"] = {
                                value: x.newUserProperties.email, change: function (e) {
                                    x.newUserProperties.email = e
                                }
                            }, e.fields["newUser-password"] = {
                                value: x.newUserProperties.password,
                                change: function (e) {
                                    x.newUserProperties.password = e
                                }
                            }, e.fields["newUser-passwordConfirm"] = {
                                value: x.newUserProperties.passwordConfirm,
                                change: function (e) {
                                    x.newUserProperties.passwordConfirm = e
                                }
                            }, e.verify["newUser-email"] = x.emailAvailable), this.$form = this.$wrapper.find("form").form(e), this.$form.find('[name="faviconAssetId"]').trigger("--refresh-image"), x.perks.addDependency({
                                perk: "use-custom-domains",
                                target: this.$form.find('input[id="urlType-domain"]'),
                                disable: function (e) {
                                    this.prop("disabled", !0), $('<a class="upgrade-icon">Upgrade</a>').on("click.pro", e).insertAfter(this.next("label")).attr("title", "Upgrade to use a custom domain.")
                                },
                                enable: function () {
                                    this.prop("disabled", !1), this.siblings(".upgrade-icon").remove()
                                }
                            }), x.perks.addDependency({
                                perk: "use-tracking",
                                target: this.$form.find('input[id="trackingId"]'),
                                disable: function (e) {
                                    this.prop("disabled", !0), $('<a class="upgrade-icon">Upgrade</a>').on("click.pro", e).insertAfter(this).attr("title", "Upgrade to use tracking.");
                                },
                                enable: function () {
                                    this.prop("disabled", !1), this.siblings(".upgrade-icon").remove()
                                }
                            }), x.perks.addDependency({
                                perk: "use-favicons",
                                target: this.$form.find('[id="faviconAssetId"]').parent(),
                                disable: function (e) {
                                    var t = this.find("input"), i = this.find(".thumbnail"), o = this.find(".button");
                                    t.prop("disabled", !0), i.addClass("disabled"), o.addClass("disabled"), $('<a class="upgrade-icon">Upgrade</a>').on("click.pro", e).insertAfter(this).attr("title", "Upgrade to set a site icon.")
                                },
                                enable: function () {
                                    var e = this.find("input"), t = this.find(".thumbnail"), i = this.find(".button");
                                    e.prop("disabled", !1), t.removeClass("disabled"), i.removeClass("disabled"), this.siblings(".upgrade-icon").remove()
                                }
                            });
                            var o = "draft";
                            x.siteProperties.domain && x.perks.has("use-custom-domains") ? o = "domain" : x.siteProperties.name ? o = "name" : x.isNew() && (o = "name"), this.$form.find('input[id="urlType-' + o + '"]').prop("checked", !0), this.$wrapper.on("click", '[href="#dns-record-setup"]', function (e) {
                                e.stopPropagation(), e.preventDefault(), i.dnsDialog()
                            }), x.isNewUser() && !skel.vars.mobile && this.$form.on("change", function (e) {
                                var t = i.$form.data("has-scrolled");
                                if (!t && i.$form.find('input[id="terms"]').prop("checked") && x.newUserProperties.name && x.newUserProperties.email && x.newUserProperties.password && x.newUserProperties.passwordConfirm) {
                                    i.$form.data("has-scrolled", "1");
                                    var o = i.$form.find('textarea[id="title"]');
                                    web.scrollTo(o, function () {
                                        o.focus()
                                    }, i.$inner)
                                }
                            }), this.$form.tabs(), this.$close = this.$wrapper.children(".close").on("click", function () {
                                i.hide()
                            });
                            var n = this.$wrapper.children("footer");
                            skel.on("+short", function () {
                                n.appendTo(i.$inner)
                            }).on("-short !short", function () {
                                n.appendTo(i.$wrapper)
                            })
                        }, show: function () {
                            var e = this;
                            if (x.ui.activePanel === this)return void this.hide();
                            x.ui.hideActivePanel();
                            var t = "Publish" + (x.isNew() ? "" : " Changes");
                            this.$wrapper.find("h2").text(t), this.$wrapper.find('input[type="submit"]').val(t), this.$wrapper.addClass("visible"), this.$wrapper.find("input,select,textarea").trigger("input"), window.setTimeout(function () {
                                e.$wrapper.trigger("--refresh")
                            }, 150), x.ui.activePanel = this
                        }, hide: function () {
                            this.$wrapper.removeClass("visible"), x.ui.activePanel === this && (x.ui.activePanel = null)
                        }, dnsDialog: function () {
                            t.dialog.show({
                                title: "DNS Record Setup",
                                html: !0,
                                alt: !0,
                                message: '<p>Add the following DNS record(s) to the domain at either your domain registrar or DNS provider:</p><ul class="checklist special"><li>An <strong>A</strong> record pointing the bare domain or subdomain to <code>' + x.settings.domainIP + '</code></li><li>(Domains only) A <strong>CNAME</strong> record pointing the <code>www</code> subdomain to the bare domain</li></ul><p>Not entirely sure how to do this? View DNS instructions for <a href="https://support.google.com/domains/answer/3290350?hl=en&ref_topic=3251230" target="_blank">Google Domains</a>, <a href="https://www.godaddy.com/help/manage-dns-680" target="_blank">GoDaddy</a>, <a href="https://www.namecheap.com/support/knowledgebase/article.aspx/434/2237/how-do-i-set-up-host-records-for-a-domain" target="_blank">Namecheap</a>, <a href="http://www.enom.com/help/faq_hostrecords.aspx" target="_blank">eNom</a>, <a href="https://help.hover.com/hc/en-us/articles/217282457-How-to-Edit-DNS-records-A-CNAME-MX-TXT-and-SRV-Updated-Aug-2015-" target="_blank">Hover</a>, <a href="https://www.name.com/support/articles/205516858-DNS-Record-Types" target="_blank">Name.com</a>, <a href="https://wiki.gandi.net/en/dns/zone/edit" target="_blank">Gandi</a>, or just <a href="https://carrd.co/contact" target="_blank">get in touch</a>.</p>'
                            })
                        }
                    },
                    propertiesPanel: {
                        component: null,
                        $wrapper: null,
                        $inner: null,
                        $heading: null,
                        $formWrapper: null,
                        init: function () {
                            var e = this;
                            this.$wrapper = $('<div id="propertiesPanel" class="panel"><div class="inner"><h2></h2><div class="form-wrapper"></div></div><footer><div class="actions"><div class="do-clone" title="Make a copy of this element"></div><div class="do-remove" title="Delete this element"></div></div><div class="buttons"><span class="button special close">Done</span></div></footer><div class="close"></div></div>').appendTo(x.ui.$layer), this.$inner = this.$wrapper.children(".inner"), this.$heading = this.$inner.children("h2"), this.$formWrapper = this.$inner.children(".form-wrapper"), skel.vars.mobile || (this.$formWrapper.on("--refresh", function (t) {
                                e.$formWrapper.find("textarea[data-autosize]").data("autosizeLimit", e.$inner.height() - 200).each(function () {
                                    $(this).triggerHandler("--refresh")
                                })
                            }), t.$window.on("resize", function (t) {
                                e.$formWrapper.triggerHandler("--refresh")
                            })), this.$wrapper.on("click", "footer > .actions > .do-remove", function (t) {
                                var i = e.component;
                                "page" != i.type && "content" != i.type && i.remove()
                            }), this.$wrapper.on("click", "footer > .actions > .do-clone", function (t) {
                                var i = e.component;
                                "page" != i.type && "content" != i.type && i.clone()
                            }), this.$close = this.$wrapper.find(".close").on("click", function () {
                                e.hide()
                            });
                            var i = this.$wrapper.children("footer");
                            skel.on("+short", function () {
                                i.appendTo(e.$inner)
                            }).on("-short !short", function () {
                                i.appendTo(e.$wrapper)
                            })
                        },
                        attach: function (e) {
                            this.component = e, this.component.$canvas.addClass("active"), this.$wrapper.addClass(this.component.type)
                        },
                        detach: function (e) {
                            var t = this;
                            if (this.component) {
                                if (e) {
                                    var i = this.component.type;
                                    window.setTimeout(function () {
                                        t.$wrapper.removeClass(i)
                                    }, 250)
                                } else this.$wrapper.removeClass(this.component.type);
                                this.component.$canvas.removeClass("active"), this.component = null
                            }
                        },
                        show: function (e) {
                            var t = this;
                            return this.component === e ? void this.hide() : (x.ui.hideFloating(), x.ui.activePanel === this ? (this.detach(), this.attach(e), this.refresh(!0), this.autofocus(), window.setTimeout(function () {
                                t.$wrapper.trigger("--refresh")
                            }, 150)) : (x.ui.hideActivePanel(), this.detach(), this.attach(e), this.refresh(), this.$wrapper.addClass("visible"), this.autofocus(), window.setTimeout(function () {
                                t.$wrapper.trigger("--refresh")
                            }, 150), x.ui.activePanel = this), void x.site.lastComponent(e))
                        },
                        hide: function () {
                            this.detach(!0), this.refresh(), this.$wrapper.removeClass("visible"), x.ui.activePanel === this && (x.ui.activePanel = null)
                        },
                        reload: function () {
                            var e = null;
                            "page" == this.component.type ? e = x.site.page : "content" == this.component.type ? e = x.site.content : this.component.id in x.site.components && (e = x.site.components[this.component.id]), e ? (this.detach(), this.attach(e), this.$formWrapper.children().detach(), this.component.attachForm(this.$formWrapper), this.$formWrapper.find("input,select,textarea").trigger("--refresh")) : this.hide()
                        },
                        refresh: function (e) {
                            var t = this, i = function () {
                                if (t.$heading.text(""), t.$formWrapper.children().detach(), t.$inner.scrollTop(0), t.component) {
                                    if (null === t.component.id)return x.ui.activePanel === t && x.ui.hideActivePanel(), t.component = null, t.$wrapper.removeClass("visible"), void t.$wrapper.removeClass("is-changing");
                                    var e;
                                    e = "page" == t.component.type ? "Background" : t.component.type.capitalize(), t.$heading.text(e), t.component.attachForm(t.$formWrapper), t.$formWrapper.find("input,select,textarea").trigger("--refresh"), t.$wrapper.removeClass("is-changing")
                                } else t.$wrapper.removeClass("visible"), t.$wrapper.removeClass("is-changing")
                            };
                            e ? (t.$wrapper.addClass("is-changing"), window.setTimeout(i, 125)) : i()
                        },
                        autofocus: function () {
                            var e = this;
                            skel.vars.mobile || window.setTimeout(function () {
                                var t, i;
                                t = e.$wrapper.find("[data-autofocus]").first(), 0 != t.length && (t.focus(), i = t.val().length, t[0].setSelectionRange(i, i))
                            }, 250)
                        }
                    },
                    init: function () {
                        this.$layer = $('<div id="ui" tabindex="-1" />').appendTo(t.$body), this.propertiesPanel.init(), this.publishPanel.init(), this.menu.init(), this.help.init(), this.imageLibraryDialog.init(), this.$layer.on("click", function (e) {
                            e.stopPropagation(), x.ui.hideFloating()
                        }), t.$window.on("beforeunload", function (e) {
                            if (x.history.unpublished())return "You have unpublished changes!"
                        }), t.$body.on("wheel", ".panel select:focus", function (e) {
                            $(this).find("option:hover").length > 0 && e.stopPropagation()
                        }), t.$body.on("wheel", "textarea[data-autosize-limited]:focus", function (e) {
                            e.stopPropagation()
                        }), t.$body.on("wheel", ".panel, .panel > .inner", function (e) {
                            var t = $(this), i = app.normalizeWheel(e.originalEvent), o = i.pixelY;
                            e.preventDefault(), e.stopPropagation(), t.scrollTop(t.scrollTop() + o)
                        }), app.touch.scrollbars && t.$body.find(".panel").each(function () {
                            var e = $(this), i = e.children(".inner"),
                                o = $('<div class="track"><div class="cursor"></div></div>').appendTo(e),
                                n = o.children(".cursor");
                            o.touch({
                                trackDocument: !0,
                                trackDocumentNormalize: !0,
                                dragThreshold: 0,
                                dragDelay: 0,
                                preventDefault: {drag: !0}
                            }).on("tap dragStart", function (e, t) {
                                var n = o.height(), a = i.prop("scrollHeight"), s = n / a * n, r = i.scrollTop(),
                                    l = r / a * n;
                                i._ey = t.ey - l, (i._ey < 0 || i._ey > s) && (i._ey = .5 * s), o.addClass("is-dragging")
                            }).on("mouseup touchend dragEnd", function (e, t) {
                                delete i._ey, o.removeClass("is-dragging")
                            }).on("tap dragStart drag", function (e, t) {
                                var n = o.height(), a = i.prop("scrollHeight");
                                i.scrollTop();
                                i.scrollTop((t.ey - i._ey) / n * a), o.addClass("is-dragging")
                            }), n.css("position", "absolute").css("top", 0).css("right", 0), i.on("resize.scrollbar", function () {
                                var t = o.height(), a = i.prop("scrollHeight");
                                return t >= a ? void e.addClass("no-scrollbar") : (e.removeClass("no-scrollbar"), void n.css("height", t / a * t + "px"))
                            }).on("scroll.scrollbar", function () {
                                var e = o.height(), t = i.prop("scrollHeight"), a = i.scrollTop();
                                n.css("top", a / t * e + "px")
                            });
                            var a;
                            e.on("--refresh", function () {
                                window.clearTimeout(a), a = window.setTimeout(function () {
                                    i.triggerHandler("resize.scrollbar"), i.triggerHandler("scroll.scrollbar")
                                }, 0)
                            }).on("click keydown", function (t) {
                                e.triggerHandler("--refresh")
                            }), t.$window.on("resize", function () {
                                e.triggerHandler("-refresh")
                            }), i.triggerHandler("resize.scrollbar"), i.triggerHandler("scroll.scrollbar")
                        }), t.$body.on("keydown", "input,select,textarea", function (e) {
                            e.stopPropagation()
                        }), t.$window.on("keydown", function (e) {
                            var t = (e.ctrlKey ? "c" : "") + (e.altKey ? "a" : "") + (e.shiftKey ? "s" : "") + String(e.keyCode);
                            t in x.ui.keys && (e.stopPropagation(), e.preventDefault(), x.ui.keys[t]())
                        }), skel.vars.IEVersion < 11 && (this.$layer.children().insertBefore(this.$layer), this.$layer.hide())
                    },
                    refresh: function () {
                        this.propertiesPanel.refresh()
                    },
                    hideActivePanel: function () {
                        this.activePanel && (this.activePanel.hide(), this.activePanel = null)
                    },
                    hideFloating: function (e) {
                        $(".floating").not(e).removeClass("visible")
                    }
                },
                icons: {
                    list: [], map: {}, init: function (e) {
                        var t;
                        this.list = e;
                        for (t in e)x.icons.map[e[t].name] = e[t]
                    }, get: function (e) {
                        return e in x.icons.map ? x.icons.map[e] : null
                    }
                },
                fonts: {
                    list: [], map: {}, loaders: {}, active: [], init: function (e) {
                        var t;
                        this.list = e;
                        for (t in e)x.fonts.map[e[t].name] = e[t]
                    }, initField: function (e) {
                        e.on("change", function () {
                            x.fonts.refresh()
                        }).on("keydown", function (t) {
                            var i = e.find("option"), o = i.filter(":selected"), n = i.length - 1, a = null;
                            switch (t.keyCode) {
                                case 38:
                                case 37:
                                case 33:
                                    a = o.index() <= 0 ? o.val() : o.prev().val();
                                    break;
                                case 40:
                                case 39:
                                case 34:
                                    a = o.index() >= n ? o.val() : o.next().val();
                                    break;
                                case 36:
                                    a = i.first().val();
                                    break;
                                case 35:
                                    a = i.last().val()
                            }
                            a && x.fonts.refresh(a)
                        })
                    }, get: function (e) {
                        return e in x.fonts.map ? x.fonts.map[e] : null
                    }, load: function (e) {
                        var i, o, n = x.fonts.get(e);
                        switch (n.source) {
                            case 1:
                            default:
                                break;
                            case 2:
                                n.name in x.fonts.loaders || (i = "//fonts.googleapis.com/css?family=" + encodeURIComponent(n.name) + (n.weights.length > 1 ? ":" + n.weights.join(",") : ""), x.fonts.loaders[n.name] = $('<link rel="stylesheet" href="' + i + '" />'))
                        }
                        n.name in x.fonts.loaders && (o = x.fonts.loaders[n.name], t.$head.append(o))
                    }, unload: function (e) {
                        var t = x.fonts.get(e);
                        t.name in x.fonts.loaders && (loader = x.fonts.loaders[t.name], loader.detach())
                    }, update: function (e) {
                        var t;
                        for (t in x.fonts.active)e.indexOf(x.fonts.active[t]) == -1 && x.fonts.unload(x.fonts.active[t]);
                        for (t in e)x.fonts.active.indexOf(e[t]) == -1 && x.fonts.load(e[t]);
                        x.fonts.active = e
                    }, refresh: function (e) {
                        var t, i, o = [];
                        e && o.push(e);
                        for (t in x.site.components)if (i = x.site.components[t], "font" in i) o.push(i.property("font")); else switch (i.type) {
                            case"form":
                                o.push(i.property("input_font")), o.push(i.property("button_font"));
                                break;
                            case"timer":
                                o.push(i.property("digits_font")), o.push(i.property("labels_font"))
                        }
                        x.fonts.update(o)
                    }, optimizeWeight: function (e, t) {
                        var i = x.fonts.get(e);
                        if (!i)return t;
                        if (i.weights.indexOf(t) != -1)return t;
                        if (1 == i.weights.length)return i.weights[0];
                        var o, n = Math.max.apply(Math, i.weights), a = Math.min.apply(Math, i.weights), s = t;
                        if (s > 500 || 400 == s && i.weights.indexOf(500) == -1)if (s < n) {
                            for (o = s; o <= n && i.weights.indexOf(o) == -1; o += 100);
                            s = o
                        } else {
                            for (o = s; o >= a && i.weights.indexOf(o) == -1; o -= 100);
                            s = o
                        } else if (s < 400 || 500 == s && i.weights.indexOf(400) == -1)if (s > a) {
                            for (o = s; o >= a && i.weights.indexOf(o) == -1; o -= 100);
                            s = o
                        } else {
                            for (o = s; o <= n && i.weights.indexOf(o) == -1; o += 100);
                            s = o
                        } else 400 == s ? s = 500 : 500 == s && (s = 400);
                        return t = s
                    }
                },
                imageLibrary: {
                    list: [], init: function (e) {
                        this.list = e
                    }, apply: function (e, i, o) {
                        var n;
                        e in this.list && (n = this.list[e], t.toDataURL(app.cleanBaseHref() + this.list[e].imageURL, function (e) {
                            x.history.disable(), i.data("type", n.type).data("size", n.size).attr("src", e).on("load.imageLibrary", function () {
                                i.off("load.imageLibrary"), o && "component" in n && ("size" in n.component && o.prop("size", n.component.size), "sizeValue" in n.component && o.prop("sizeValue", n.component.sizeValue), "position" in n.component && o.prop("position", n.component.position), "tile" in n.component && o.prop("tile", n.component.tile)), x.history.enable(), x.history.add()
                            })
                        }))
                    }
                },
                perks: {
                    list: [], dependencies: {}, has: function (e) {
                        return this.list.indexOf(e) !== -1
                    }, proDialog: function (e) {
                        var i;
                        i = x.isNewUser() ? {
                            title: "undefined" != typeof e ? e : "Available with Pro",
                            message: "Get this and many more cool features by upgrading to Pro for just <strong>$19/year</strong>. Finish publishing this site, then click <strong>Upgrade</strong> on your dashboard to learn more.",
                            actions: {
                                Okay: function () {
                                    this.hide()
                                }
                            }
                        } : {
                            title: "undefined" != typeof e ? e : "Go Pro!",
                            message: "Upgrade to Pro and get access to cool new features like form elements, custom domains and much more for just <strong>$19/year</strong>.",
                            actions: {
                                "Learn More": function () {
                                    window.open("/dashboard/plan")
                                }, "Maybe Later": function () {
                                    this.hide()
                                }
                            }
                        }, t.dialog.show(i)
                    }, proDialogAlt: function (e) {
                        var i;
                        i = x.isNewUser() ? {
                            title: "undefined" != typeof e ? e : "Available with Pro",
                            message: "Get access to this template and cool new features by upgrading to Pro for just <strong>$19/year</strong>. Publish a site using a different template, then click <strong>Upgrade</strong> on your dashboard to learn more.",
                            actions: {
                                Okay: function () {
                                    this.hide()
                                }
                            }
                        } : {
                            title: "undefined" != typeof e ? e : "Go Pro!",
                            message: "Upgrade to Pro and get access to this template and cool new features (like form elements and custom domains) for just <strong>$19/year</strong>.",
                            actions: {
                                "Learn More": function () {
                                    window.open("/dashboard/plan")
                                }, "Maybe Later": function () {
                                    this.hide()
                                }
                            }
                        }, t.dialog.show(i)
                    }, addDependency: function (e) {
                        e.enabled = !0, e.perk in this.dependencies || (this.dependencies[e.perk] = []), this.dependencies[e.perk].push(e)
                    }, enableDependencies: function (e) {
                        var t, i;
                        for (t in this.dependencies[e])i = this.dependencies[e][t], i.enabled || (i.enable.apply(i.target), i.enabled = !0)
                    }, disableDependencies: function (e) {
                        var t, i, o = this;
                        for (t in this.dependencies[e])i = this.dependencies[e][t], i.enabled && (i.disable.apply(i.target, [function (e) {
                            e.preventDefault(), e.stopPropagation(), o.proDialog()
                        }]), i.enabled = !1)
                    }, refresh: function () {
                        var e;
                        for (e in this.dependencies)this.has(e) ? this.enableDependencies(e) : this.disableDependencies(e)
                    }
                },
                site: null,
                siteProperties: {
                    name: null,
                    domain: null,
                    title: null,
                    description: null,
                    trackingId: null,
                    faviconAssetId: null,
                    faviconAssetData: null,
                    publishedId: null,
                    publishedName: null,
                    publishedAssetIds: []
                },
                assetCache: {
                    list: {}, add: function (e, t) {
                        this.exists(e) || (this.list[e] = t, this.purge())
                    }, exists: function (e) {
                        return e in this.list
                    }, get: function (e) {
                        return e in this.list ? this.list[e] : null
                    }, purge: function () {
                        var e, t, i = {};
                        if (x.site) {
                            e = x.site.assets();
                            for (t in e)i[t] = !0;
                            e = x.history.assetIds();
                            for (t in e)i[e[t]] = !0;
                            for (t in this.list)t in i || delete this.list[t]
                        }
                    }, purgePublished: function (e) {
                        var t, i = {};
                        for (t in e)i[e[t]] = !0;
                        for (t in x.siteProperties.publishedAssetIds)x.siteProperties.publishedAssetIds[t] in i || x.siteProperties.publishedAssetIds.splice(t, 1)
                    }, dataUrlify: function (e) {
                        var t, i = this, o = {};
                        if ("undefined" != typeof e)for (t in e)o[e[t]] = !0;
                        for (t in this.list)this.list[t].match(/^data:/) || t in o || !function (e) {
                            app.toDataURL(i.list[e], function (t) {
                                i.list[e] = t
                            })
                        }(t)
                    }
                },
                history: {
                    active: !1, states: [], pos: 0, limit: 15, locked: !1, timeoutId: null, add: function (e) {
                        var t = this;
                        t.active && (window.clearTimeout(this.timeoutId), this.timeoutId = window.setTimeout(function () {
                            var i, o;
                            if (o = $(":focus").first(), "text" != o.attr("type") && "range" != o.attr("type") && "TEXTAREA" != o.prop("tagName") && (o = x.site.jsonObject(), i = {
                                    config: o,
                                    hash: md5(JSON.stringify(o)),
                                    published: !!e
                                }, !(t.states.length > 0 && i.hash == t.states[t.pos].hash))) {
                                for (t.states = t.states.slice(0, t.pos + 1); t.states.length >= t.limit;)t.states.shift();
                                t.states.push(i), t.pos = t.states.length - 1, x.assetCache.purge(), x.assetCache.dataUrlify(t.assetIds(t.pos)), x.assetCache.purgePublished(t.assetIds(t.pos)), x.ui.menu.refresh()
                            }
                        }, 25))
                    }, clear: function () {
                        this.states = []
                    }, dump: function () {
                        var e = 0;
                        for (e = 0; e < this.states.length; e++);
                    }, switchTo: function (e) {
                        var t, i = this;
                        this.locked || (this.locked = !0, x.history.disable(), this.pos = e, t = this.states[e], x.site.init(t.config), x.assetCache.purgePublished(this.assetIds(this.pos)), window.setTimeout(function () {
                            x.history.enable(), x.ui.activePanel === x.ui.propertiesPanel && x.ui.activePanel.reload(), x.ui.menu.refresh(), window.setTimeout(function () {
                                i.locked = !1
                            }, 100)
                        }, 0))
                    }, assetIds: function (e) {
                        var t, i, o = [];
                        if (i = function (e) {
                                var t = [];
                                for (k in e)"object" == typeof e[k] ? t = t.concat(i(e[k])) : "assetId" == k && t.push(e[k]);
                                return t
                            }, "undefined" != typeof e) o = i(this.states[e]); else for (t = 0; t < this.states.length; t++)o = o.concat(i(this.states[t]));
                        return o
                    }, undo: function () {
                        var e = this;
                        this.canUndo() && e.switchTo(e.pos - 1)
                    }, redo: function () {
                        var e = this;
                        this.canRedo() && e.switchTo(e.pos + 1)
                    }, canUndo: function () {
                        return this.pos > 0
                    }, canRedo: function () {
                        return this.pos < this.states.length - 1
                    }, enable: function () {
                        this.active = !0
                    }, disable: function (e) {
                        var t = this;
                        this.active = !1, e && (clearTimeout(this.timeoutId), this.timeoutId = setTimeout(function () {
                            t.enable()
                        }, 500))
                    }, unpublished: function () {
                        return 0 != this.states.length && !this.states[this.pos].published
                    }, markPublished: function () {
                        var e;
                        if (0 == this.states.length)return !1;
                        for (e = 0; e < this.states.length; e++)this.states[e].published = !1;
                        this.states[this.pos].published = !0, x.ui.menu.refresh()
                    }, init: function () {
                        skel.vars.mobile && (this.limit = 5)
                    }
                },
                loggedIn: !1,
                loggedInRefreshDelay: 3e5,
                newUserProperties: {name: null, email: null, password: null, passwordConfirm: null},
                ready: !1,
                componentDefaults: {},
                settings: {screenshotURL: null, componentLimit: null},
                supportedVersions: {
                    browser: {ie: 10, firefox: 30, safari: 6, chrome: 30, edge: 10},
                    os: {android: 4.4, ios: 8}
                },
                supportedBrowser: function () {
                    var e = skel.vars.browser, t = skel.vars.os;
                    return !(e in x.supportedVersions.browser && skel.vars.browserVersion < x.supportedVersions.browser[e]) && !(t in x.supportedVersions.os && skel.vars.osVersion < x.supportedVersions.os[t])
                },
                init: function (e) {
                    if (!this.supportedBrowser())return void $(function () {
                        t.$body.append('<div id="failbox"><h1>Browser not supported!</h1><p>Woops! Looks like your browser isn\'t up to date enough to work with Carrd :( Please upgrade to the latest version of your browser or to one of the following alternatives:</p><ul class="checklist"><li><a href="http://google.com/chrome">Chrome ' + x.supportedVersions.browser.chrome + '+</a></li><li><a href="http://getfirefox.com">Firefox ' + x.supportedVersions.browser.firefox + '+</a></li><li><a href="http://apple.com/safari">Safari ' + x.supportedVersions.browser.safari + '+</a></li><li><a href="http://microsoft.com/edge">Edge ' + x.supportedVersions.browser.edge + '+</a></li><li><a href="http://microsoft.com/ie">IE ' + x.supportedVersions.browser.ie + "+</a></li></ul></div>")
                    });
                    var i, o = window.location.href.indexOf("#");
                    if (o != -1 && (i = window.location.href.substring(0, o), history.replaceState(null, null, i)), "loggedIn" in e && "perks" in e && "site" in e && "config" in e.site && "defaults" in e && "fonts" in e && "icons" in e && "imageLibrary" in e && "settings" in e) {
                        if (e.loggedIn === !0 && x.initLoggedIn(), x.perks.list = e.perks, "id" in e.site) {
                            if (e.loggedIn === !1)return;
                            x.siteProperties.name = e.site.name, x.siteProperties.domain = e.site.domain, x.siteProperties.title = e.site.title, x.siteProperties.description = e.site.description, x.siteProperties.trackingId = e.site.trackingId, x.siteProperties.faviconAssetId = e.site.faviconAssetId, x.siteProperties.faviconAssetId && (x.siteProperties.faviconAssetData = app.cleanHref() + "/asset/" + x.siteProperties.faviconAssetId), x.siteProperties.publishedId = e.site.id, x.siteProperties.publishedName = e.site.name, x.siteProperties.publishedDomain = e.site.domain
                        }
                        x.componentDefaults = e.defaults, x.fonts.init(e.fonts), x.icons.init(e.icons), x.imageLibrary.init(e.imageLibrary), x.history.init(), x.settings = e.settings, $(function () {
                            x.canvas.init(), x.load(e.site.config), x.perks.refresh(), t.$window.on("load", function () {
                                window.setTimeout(function () {
                                    x.ready = !0, window.setTimeout(function () {
                                        x.history.enable(), x.history.add(!0)
                                    }, 0), "1" != app.registry.get("build.help.initial") && (x.ui.help.show(), app.registry.set("build.help.initial", "1")), window.location.search.match("[&?]welcome=1") && setTimeout(function () {
                                        app.dialog.show({
                                            title: "Welcome to Carrd!",
                                            html: !0,
                                            message: '<p><strong><a href="' + app.cleanBaseHref() + '" target="_blank">Carrd</a></strong> is a free platform for building simple, fully responsive one-page sites. It features an easy to use drag and drop interface, more than a dozen elements to work with (like text, images, and galleries), and built-in hosting using a <code>.carrd.co</code> address. You can also optionally upgrade to a <strong>Pro</strong> plan to access even more features like custom domain support, contact and signup forms, third party widgets and much more.</p><p>To get started, follow the on-screen instructions to build your site, then click <strong>Publish</strong> to publish it to the <code>.carrd.co</code> address of your choice <em>and</em> automatically create an account (no separate signup required :)</p>'
                                        })
                                    }, 500)
                                }, 250)
                            })
                        })
                    }
                },
                preinit: function (e) {
                    "loggedIn" in e && "perks" in e && (e.loggedIn === !0 && x.initLoggedIn(), x.perks.list = e.perks, $(function () {
                        var e = $("#templates"), i = e.find(".templates"), o = e.find(".categories"),
                            n = o.children("li"), a = e.find(".categories-alt select"),
                            s = (a.children(".option"), i.find("article")), r = !1, l = 350, p = 0, d = function () {
                                var e = 1;
                                s.removeData("index").removeAttr("data-index"), s.not(".inactive").each(function () {
                                    $(this).data("index", e).attr("data-index", e), e++
                                }), p = 25 * Math.min(16, e)
                            };
                        e.find(".do-use-blank").on("click", function (t) {
                            var i = $(this), o = i.attr("href");
                            t.stopPropagation(), t.preventDefault(), e.addClass("clicked"), window.setTimeout(function () {
                                window.location.href = o
                            }, 250)
                        }), n.each(function () {
                            var o = $(this), c = o.data("category");
                            o.on("click", function (u, h) {
                                var m, g, f, y, v = 0;
                                o.hasClass("active") && h !== !0 || r || (r = !0, e.removeClass("active"), n.removeClass("active"), o.addClass("active"), a.val(c), m = i.height(), g = t.$body.prop("scrollHeight") > t.$window.height(), window.setTimeout(function () {
                                    e.addClass("switching"), s.addClass("inactive"), c ? s.filter('[data-category="' + c + '"]').removeClass("inactive") : s.removeClass("inactive"), d(), f = i.height(), y = t.$body.prop("scrollHeight") > t.$window.height(), skel.breakpoint("small").active || "ie" == skel.vars.browser || y == g && y || (v = 400, i.css("transition", "none"), f > m ? i.css("maxHeight", m + "px").css("minHeight", "0px") : i.css("maxHeight", "").css("minHeight", m + "px"), window.setTimeout(function () {
                                        i.css("transition", "").css("minHeight", f + "px").css("maxHeight", f + "px"), window.setTimeout(function () {
                                            i.css("transition", "none").css("max-height", "").css("min-height", ""), window.setTimeout(function () {
                                                i.css("transition", "")
                                            }, 75)
                                        }, 500)
                                    }, 25)), window.setTimeout(function () {
                                        e.removeClass("switching"), e.addClass("active"), window.setTimeout(function () {
                                            r = !1
                                        }, l + p)
                                    }, h === !0 ? 100 : 100 + v)
                                }, h === !0 ? 0 : l + p))
                            })
                        }), a.on("change", function () {
                            n.filter('[data-category="' + a.val() + '"]').triggerHandler("click")
                        }), s.each(function () {
                            var t = $(this), i = t.find(".do-use"), o = t.find(".do-upgrade"), n = i.attr("href");
                            i.on("click", function (i) {
                                i.stopPropagation(), i.preventDefault(), t.addClass("active"), e.addClass("clicked"), window.setTimeout(function () {
                                    window.location.href = n
                                }, 250)
                            }), o.on("click", function (e) {
                                e.stopPropagation(), e.preventDefault(), x.perks.proDialogAlt()
                            })
                        });
                        var c, u;
                        t.$window.on("load pageshow", function () {
                            window.clearTimeout(c), c = window.setTimeout(function () {
                                n.first().triggerHandler("click", [!0])
                            }, 150)
                        }).on("unload pagehide", function () {
                            window.clearTimeout(u), u = window.setTimeout(function () {
                                s.removeClass("active"), e.removeClass("clicked")
                            }, 250)
                        })
                    }))
                },
                exit: function (e, i) {
                    if (x.history.unpublished()) {
                        var o = {};
                        o[e] = i, o.Cancel = function () {
                            this.hide()
                        }, t.dialog.show({
                            title: "Are you sure?",
                            message: "All unpublished changes will be lost.",
                            actions: o
                        })
                    } else i()
                },
                load: function (e) {
                    x.site = new i(e, x), x.fonts.refresh(), x.ui.init()
                },
                add: function (e) {
                    var t;
                    return x.ui.propertiesPanel.component && "page" != x.ui.propertiesPanel.component.type && "content" != x.ui.propertiesPanel.component.type && (t = x.ui.propertiesPanel.component), this.site.add(e, void 0, void 0, t, "after")
                },
                get: function (e) {
                    return this.site.get(e)
                },
                htmlTorgb: function (e, t) {
                    var i, o;
                    if ("string" != typeof e)return "rgba(0,0,0," + ("undefined" != typeof t ? t : "") + ")";
                    "#" == e.charAt(0) && (e = e.substr(1)), i = [e.substr(0, 2), e.substr(2, 2), e.substr(4, 2)];
                    for (o in i)i[o] = parseInt(i[o], 16);
                    return i = i.join(","), "undefined" != typeof t ? "rgba(" + i + "," + t + ")" : "rgb(" + i + ")"
                },
                nameValid: function (e) {
                    return !!web.is("id", e) && (e === $.trim(e.toLowerCase()) && ("-" != e.charAt(0) && !(e.length < 3 || e.length > 32)))
                },
                nameAvailable: function (e, t) {
                    var i;
                    i = app.cleanHref() + "/checkName", $.ajax({
                        url: i,
                        type: "POST",
                        data: {name: e},
                        dataType: "json",
                        success: function (e) {
                            return t(e.result, e.message)
                        },
                        error: function (e, i) {
                            t(!1, "Error occurred! Try again later.")
                        }
                    })
                },
                domainValid: function (e) {
                    return !!web.is("domain", e) && (e === $.trim(e.toLowerCase()) && !(e.length < 4 || e.length > 64))
                },
                domainAvailable: function (e, t) {
                    var i;
                    i = app.cleanHref() + "/checkDomain", $.ajax({
                        url: i,
                        type: "POST",
                        data: {domain: e, publishedDomain: x.siteProperties.publishedDomain},
                        dataType: "json",
                        success: function (e) {
                            return t(e.result, e.message)
                        },
                        error: function (e, i) {
                            t(!1, "Error occurred! Try again later.")
                        }
                    })
                },
                emailAvailable: function (e, t) {
                    var i;
                    i = app.cleanHref() + "/checkEmail", $.ajax({
                        url: i,
                        type: "POST",
                        data: {email: e},
                        dataType: "json",
                        success: function (e) {
                            return t(e.result, e.message)
                        },
                        error: function (e, i) {
                            t(!1, "Error occurred! Try again later.")
                        }
                    })
                },
                isLoggedIn: function () {
                    return x.loggedIn === !0
                },
                isNewUser: function () {
                    return x.loggedIn === !1
                },
                isNew: function () {
                    return null === x.siteProperties.publishedId
                },
                initLoggedIn: function () {
                    var e;
                    x.loggedIn = !0, e = app.cleanHref() + "/refresh", window.setInterval(function () {
                        $.ajax({url: e, type: "GET"})
                    }, x.loggedInRefreshDelay)
                },
                publishedURL: function (e) {
                    return x.isNew() ? null : x.siteProperties.domain ? (e === !1 ? "" : "http://") + x.siteProperties.publishedDomain : x.siteProperties.name ? (e === !1 ? "" : "http://") + x.siteProperties.publishedName + "." + window.location.host : null
                },
                URL: function () {
                    return x.siteProperties.domain ? "http://" + x.siteProperties.domain : x.siteProperties.name ? "http://" + x.siteProperties.name + "." + window.location.host : null
                },
                syncPageTitle: function () {
                    var e, t = " - ";
                    e = document.title.split(t), e[0] = x.siteProperties.title, document.title = e.join(t)
                },
                publish: function (e, t) {
                    var i, o, n, a, s, r, l = [];
                    if (r = !1, x.siteProperties.name && !x.nameValid(x.siteProperties.name) && (r = !0), x.siteProperties.domain && !x.domainValid(x.siteProperties.domain) && (r = !0), x.siteProperties.title && web.is("utf8text", x.siteProperties.title) || (r = !0), x.siteProperties.description && web.is("utf8text", x.siteProperties.description) || (r = !0), x.siteProperties.trackingId && !web.is("word", x.siteProperties.trackingId) && (r = !0), x.siteProperties.faviconAssetId && !web.is("alnum", x.siteProperties.faviconAssetId) && (r = !0), r)return t("Site Settings Problem", "Hmm, there's a problem with your title, description, and/or name. Please try again.");
                    if (x.isNewUser()) {
                        if (r = !1, x.newUserProperties.name && web.is("utf8text", x.newUserProperties.name) || (r = !0), x.newUserProperties.email && web.is("email", x.newUserProperties.email) || (r = !0), x.newUserProperties.password && web.is("text", x.newUserProperties.password) || (r = !0), x.newUserProperties.passwordConfirm && web.is("text", x.newUserProperties.passwordConfirm) || (r = !0), r)return t("Account Settings Problem", "Hmm, there's a problem with your name, email and/or password. Please try again.");
                        if (x.newUserProperties.password != x.newUserProperties.passwordConfirm)return t("Passwords don't match", "Your passwords don't match. Please try again.")
                    }
                    if ((x.site.hasControl("header-marker") || x.site.hasControl("footer-marker") || x.site.hasControl("section-break")) && !x.site.isSectioned())return t("Misconfigured Control Elements", "Woops! Looks like you've included one or more control elements but they aren't properly configured. Please try again.");
                    r = !1;
                    for (a in x.site.components)if (n = x.site.components[a], "audio" == n.type && !n.url) {
                        r = !0;
                        break
                    }
                    if (r)return t("Missing Audio URL", "Woops! Looks like you haven't assigned a URL to one or more of your audio elements. Please try again.");
                    r = !1;
                    for (a in x.site.components)if (n = x.site.components[a], "video" == n.type && !n.url) {
                        r = !0;
                        break
                    }
                    if (r)return t("Missing Video URL", "Woops! Looks like you haven't assigned a URL to one or more of your video elements. Please try again.");
                    r = {
                        background: !1,
                        images: !1
                    }, "image" == x.site.page.style && null == x.site.page.assetId && (r.background = !0);
                    for (a in x.site.components)switch (n = x.site.components[a], n.type) {
                        case"image":
                            n.assetId || (r.images = !0);
                            break;
                        case"gallery":
                            for (s in n.images)n.images[s].assetId || (r.images = !0)
                    }
                    if (r.background && r.images)return t("Missing Images", "Woops! Looks like you haven't assigned images to your page background and some of your elements. Please try again.");
                    if (r.images)return t("Missing Element Images", "Woops! Looks like you haven't assigned images to one or more of your elements. Please try again.");
                    if (r.background)return t("Missing Background Image", "Woops! Looks like you haven't assigned an image to your page background. Please try again.");
                    i = app.cleanHref() + "/publish", o = new FormData, x.siteProperties.name && o.append("name", x.siteProperties.name), x.siteProperties.domain && x.perks.has("use-custom-domains") && o.append("domain", x.siteProperties.domain), o.append("title", x.siteProperties.title), o.append("description", x.siteProperties.description), x.siteProperties.trackingId && x.perks.has("use-tracking") && o.append("trackingId", x.siteProperties.trackingId), x.siteProperties.faviconAssetId && x.perks.has("use-favicons") && o.append("faviconAssetId", x.siteProperties.faviconAssetId), o.append("config", x.site.json());
                    var a, p;
                    p = x.site.assets(), x.siteProperties.faviconAssetId && (p[x.siteProperties.faviconAssetId] = x.siteProperties.faviconAssetData);
                    for (a in p)p[a].match(/^data:/) && x.siteProperties.publishedAssetIds.indexOf(a) == -1 && (l.push(a), o.append("asset_" + a, p[a]));
                    x.isNewUser() && (o.append("newUser-name", x.newUserProperties.name), o.append("newUser-email", x.newUserProperties.email), o.append("newUser-password", x.newUserProperties.password)), window.setTimeout(function () {
                        $.ajax({
                            url: i,
                            type: "POST",
                            data: o,
                            processData: !1,
                            contentType: !1,
                            dataType: "json",
                            success: function (t) {
                                if (x.isNewUser())return app.registry.set("dashboard.alert", JSON.stringify({
                                    title: "Check your email!",
                                    message: "You're almost done! Check your email and click the verification link we just sent to verify your account and publish your new site."
                                })), x.history.markPublished(), void window.location.replace("/dashboard");
                                x.isNew() ? (x.siteProperties.publishedId = t.id, x.siteProperties.publishedName = t.name, x.siteProperties.publishedDomain = t.domain, x.siteProperties.name = t.name, x.siteProperties.domain = t.domain, x.siteProperties.title = t.title, x.siteProperties.description = t.description, x.siteProperties.trackingId = t.trackingId, x.siteProperties.faviconAssetId = t.faviconAssetId, x.initLoggedIn(), x.syncPageTitle(), history.replaceState(null, null, "/dashboard/" + x.siteProperties.publishedId)) : (x.siteProperties.publishedName = t.name, x.siteProperties.publishedDomain = t.domain, x.siteProperties.name = t.name, x.siteProperties.domain = t.domain, x.siteProperties.title = t.title, x.siteProperties.description = t.description, x.siteProperties.trackingId = t.trackingId, x.siteProperties.faviconAssetId = t.faviconAssetId,
                                    x.syncPageTitle());
                                for (var i = 0; i < l.length; i++)x.siteProperties.publishedAssetIds.push(l[i]);
                                x.history.markPublished(), e()
                            },
                            error: function (e, i) {
                                t()
                            }
                        })
                    }, 1e3)
                }
            };
            return x
        }()
    }, {
        "./classes/CSSRuleWrapper.js": 2,
        "./classes/CSSStyleSheetWrapper.js": 3,
        "./classes/audioComponent.js": 4,
        "./classes/buttonsComponent.js": 5,
        "./classes/columnsComponent.js": 6,
        "./classes/component.js": 7,
        "./classes/contentComponent.js": 8,
        "./classes/controlComponent.js": 9,
        "./classes/dividerComponent.js": 10,
        "./classes/formComponent.js": 11,
        "./classes/galleryComponent.js": 12,
        "./classes/gridComponent.js": 13,
        "./classes/iconsComponent.js": 14,
        "./classes/imageComponent.js": 15,
        "./classes/linksComponent.js": 16,
        "./classes/pageComponent.js": 17,
        "./classes/site.js": 18,
        "./classes/tableComponent.js": 19,
        "./classes/textComponent.js": 20,
        "./classes/timerComponent.js": 21,
        "./classes/videoComponent.js": 22,
        "./classes/widgetComponent.js": 23
    }], 2: [function (e, t, i) {
        function o(e, t) {
            this.parent = e, this.rule = t, this.properties = {}
        }

        o.prototype.vendors = ["-moz-", "-webkit-", "-ms-", ""], o.prototype.setProperty = function (e, t) {
            this.rule.style[e] = t, this.properties[e] = !0
        }, o.prototype.unsetProperty = function (e) {
            this.rule.style[e] = "", e in this.properties && delete this.properties[e]
        }, o.prototype.unsetAllProperties = function () {
            var e, t;
            t = Object.keys(this.properties);
            for (e in t)this.rule.style[t[e]] = "";
            this.properties = {}
        }, o.prototype.get = function (e) {
            return this.rule.style[e]
        }, o.prototype.set = function (e, t) {
            var i;
            if (t instanceof o) {
                var n = t.get(e);
                if ("object" == typeof n)for (i in n)this.set(e, n[i]); else this.set(e, n)
            } else if ("object" == typeof e)for (i in e)this.set(i, e[i]); else {
                var a;
                if ("string" == typeof t && (a = t.match(/(#[a-fA-F0-9]{8})\b/g))) {
                    var i, s, r, l;
                    for (i in a)s = a[i], r = s, l = (parseInt(s.substr(-2, 2), 16) / 255).toFixed(3), s = s.substr(0, 7), 0 == l ? s = "transparent" : l < 1 && (s = app.build.htmlTorgb(s, l)), t = t.replace(r, s)
                }
                if (~e.indexOf("-vendor-") && "string" == typeof t && ~t.indexOf("-vendor-"))for (i in this.vendors)this.setProperty(e.replace(/-vendor-/g, this.vendors[i]), t.replace(/-vendor-/g, this.vendors[i])); else if (~e.indexOf("-vendor-"))for (i in this.vendors)this.setProperty(e.replace(/-vendor-/g, this.vendors[i]), t); else if ("string" == typeof t && ~t.indexOf("-vendor-"))for (i in this.vendors)this.setProperty(e, t.replace(/-vendor-/g, this.vendors[i])); else this.setProperty(e, t)
            }
            return !0
        }, o.prototype.unset = function (e) {
            var t;
            if ("undefined" == typeof e) this.unsetAllProperties(); else if ("object" == typeof e)for (t in e)this.unset(e[t]); else if (~e.indexOf("-vendor-"))for (t in this.vendors)this.unsetProperty(e.replace("-vendor-", this.vendors[t])); else this.unsetProperty(e)
        }, "undefined" != typeof t && (t.exports = o)
    }, {}], 3: [function (e, t, i) {
        function o(e, t) {
            var i, o, n;
            this.styleSheet = e, this.breakpoints = t, this.ruleWrappers = {}, this.breakpointMap = {};
            for (o in this.styleSheet.cssRules)if (i = this.styleSheet.cssRules[o], 4 == i.type)for (n in this.breakpoints)if (this.breakpoints[n].replace(/\s+/g, "") == i.media.mediaText.replace(/\s+/g, "")) {
                this.breakpointMap[n] = i;
                break
            }
            this.breakpointMap.global = this.styleSheet
        }

        o.prototype.getId = function (e, t) {
            return ("undefined" == typeof t ? "global" : t) + ":" + e
        }, o.prototype.r = function (e, t) {
            e = e.replace(/\.\-/g, ".\\-"), e = e.replace(/#\-/g, "#\\-");
            var i = this.getId(e, t);
            if (!(i in this.ruleWrappers)) {
                var o, n, a = this.breakpointMap[t ? t : "global"], s = a.cssRules;
                for (n in s)if (1 == s[n].type && s[n].selectorText == e) {
                    o = s[n];
                    break
                }
                o || (o = s[a.insertRule(e + " {}", 0)]), this.ruleWrappers[i] = new CSSRuleWrapper(this, o)
            }
            return this.ruleWrappers[i]
        }, o.prototype.unsetAll = function (e, t) {
            e = e.replace(/\.\-/g, ".\\-"), e = e.replace(/#\-/g, "#\\-");
            var i, o = this.getId(e, t);
            for (i in this.ruleWrappers)i.match("^" + o.replace("\\", "\\\\") + "\\b") && this.ruleWrappers[i].unsetAllProperties()
        }, "undefined" != typeof t && (t.exports = o)
    }, {}], 4: [function (e, t, i) {
        function o(e, t) {
            this.url = null, this.soundcloud = {
                style: null,
                width: null,
                height: null,
                autoplay: null,
                showArtwork: null,
                showBuying: null,
                showComments: null,
                showDownload: null,
                showLiking: null,
                showPlaycount: null,
                showSharing: null,
                showUser: null
            }, this.gumroadOverlay = {
                style: null,
                width: null,
                height: null,
                colorBG: null,
                colorLink: null
            }, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><div class="field"><label ' + o("url") + '>URL</label><input type="text" ' + a("url") + ' maxlength="1024" /><div class="note"><p>Supports URLs in the following formats:</p><ul><li>SoundCloud (<em>https://soundcloud.com/xxxxxx/yyyyyy</em> or <em>https://soundcloud.com/xxxxxx/sets/yyyyyy</em>)</li><li>Bandcamp (<em>https://bandcamp.com/album/xxxxxx</em> or <em>https://bandcamp.com/track/yyyyyy</em>)</li></ul></div><input type="hidden" ' + a("mode") + ' value="" /></div><section ' + s("mode", "soundcloud") + '><div class="field"><label>Style</label><div class="select-wrapper"><select ' + a("soundcloud_style") + '><option value="standard">Standard</option><option value="visual">Visual</option></select></div></div><div class="field"><label ' + o("soundcloud_width") + '>Width</label><input type="range" ' + a("soundcloud_width") + ' min="20" max="100" step="1" data-status /></div><div class="field" ' + s("soundcloud_style", "visual") + "><label " + o("soundcloud_height") + '>Height</label><input type="range" ' + a("soundcloud_height") + ' min="7" max="30" step="1" data-status /></div><label>Options</label><div class="field"><input type="checkbox" ' + a("soundcloud_autoplay") + " /><label " + o("soundcloud_autoplay") + '>Autoplay</label></div><div class="field" ' + s("soundcloud_style", "!visual") + '><input type="checkbox" ' + a("soundcloud_showArtwork") + " /><label " + o("soundcloud_showArtwork") + '>Show artwork</label></div><div class="field"><input type="checkbox" ' + a("soundcloud_showBuying") + " /><label " + o("soundcloud_showBuying") + '>Show buy buttons</label></div><div class="field"><input type="checkbox" ' + a("soundcloud_showComments") + " /><label " + o("soundcloud_showComments") + '>Show comments</label></div><div class="field"><input type="checkbox" ' + a("soundcloud_showDownload") + " /><label " + o("soundcloud_showDownload") + '>Show download buttons</label></div><div class="field"><input type="checkbox" ' + a("soundcloud_showLiking") + " /><label " + o("soundcloud_showLiking") + '>Show like buttons</label></div><div class="field"><input type="checkbox" ' + a("soundcloud_showPlaycount") + " /><label " + o("soundcloud_showPlaycount") + '>Show play counts</label></div><div class="field"><input type="checkbox" ' + a("soundcloud_showSharing") + " /><label " + o("soundcloud_showSharing") + '>Show share buttons</label></div><div class="field"><input type="checkbox" ' + a("soundcloud_showUser") + " /><label " + o("soundcloud_showUser") + ">Show uploader name</label></div></section><section " + s("mode", "bandcamp") + '><div class="field"><label>Style</label><div class="select-wrapper"><select ' + a("bandcamp_style") + '><option value="slim">Slim</option><option value="minimal">Artwork Only</option><option value="standard">Standard</option></select></div></div><div class="field"><label ' + o("bandcamp_width") + '>Width</label><input type="range" ' + a("bandcamp_width") + ' min="20" max="40" step="1" data-status /></div><div class="field" ' + s("bandcamp_style", "!slim") + "><label " + o("bandcamp_height") + '>Height</label><input type="range" ' + a("bandcamp_height") + ' min="7" max="30" step="1" data-status /></div><div class="field"><label ' + o("bandcamp_colorBG") + '>Background Color</label><div class="select-wrapper"><select ' + a("bandcamp_colorBG") + '><option value="#ffffff" style="background-color:#ffffff;color:#000000">White</option><option value="#333333" style="background-color:#333333;color:#ffffff">Gray</option></select></div></div><div class="field"><label ' + o("bandcamp_colorLink") + '>Link Color</label><div class="select-wrapper"><select ' + a("bandcamp_colorLink") + '><option value="#0687f5" style="background-color:#0687f5;color:#ffffff">Blue</option><option value="#e99708" style="background-color:#e99708;color:#ffffff">Orange</option><option value="#2ebd35" style="background-color:#2ebd35;color:#ffffff">Green</option><option value="#7137dc" style="background-color:#7137dc;color:#ffffff">Purple</option><option value="#f171a2" style="background-color:#f171a2;color:#ffffff">Pink</option><option value="#63b2cc" style="background-color:#63b2cc;color:#ffffff">Cyan</option><option value="#de270f" style="background-color:#de270f;color:#ffffff">Red</option><option value="#333333" style="background-color:#333333;color:#ffffff">Gray</option></select></div></div></section></form>'), this.registerProperty("url", {
                input: "text",
                type: function (e) {
                    return !!web.is("uri", e) && !!i.mode(e)
                },
                live: !0
            }), this.registerProperty("soundcloud_style", {
                input: "text",
                type: "word",
                allowed: ["standard", "visual"]
            }), this.registerProperty("soundcloud_width", {
                input: "text",
                type: "float"
            }), this.registerProperty("soundcloud_height", {
                input: "text",
                type: "float"
            }), this.registerProperty("soundcloud_autoplay", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("soundcloud_showArtwork", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("soundcloud_showBuying", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("soundcloud_showComments", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("soundcloud_showDownload", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("soundcloud_showLiking", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("soundcloud_showPlaycount", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("soundcloud_showSharing", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("soundcloud_showUser", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("bandcamp_style", {
                input: "text",
                type: "word",
                allowed: ["slim", "minimal", "standard"]
            }), this.registerProperty("bandcamp_width", {
                input: "text",
                type: "float"
            }), this.registerProperty("bandcamp_height", {
                input: "text",
                type: "float"
            }), this.registerProperty("bandcamp_colorBG", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("bandcamp_colorLink", {
                input: "text",
                type: "htmlacolor"
            }), this.properties.url.$field.on("change input", function () {
                var e = $(this), t = i.mode(e.val());
                i.$form.find('input[name="mode"]').val(t ? t.split("-")[0] : "").trigger("change")
            }).on("blur", function () {
                var e = $(this);
                window.setTimeout(function () {
                    e.triggerHandler("change")
                }, 0)
            }), window.setTimeout(function () {
                i.properties.url.$field.triggerHandler("change")
            }, 0)
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "audio", o.prototype.contentDependencies = {}, o.prototype.mode = function (e) {
            return !!web.is("url", e) && (e.match(/^https?:\/\/soundcloud\.com\/[a-z0-9\-\_]+\/[a-z0-9\-\_]+\/?$/) ? "soundcloud-track" : e.match(/^https?:\/\/soundcloud\.com\/[a-z0-9\-\_]+\/sets\/[a-z0-9\-\_]+\/?$/) ? "soundcloud-playlist" : e.match(/^https?:\/\/[a-z0-9\-]+\.bandcamp\.com\/album\/[a-z0-9\-\_]+\/?$/) ? "bandcamp-album" : e.match(/^https?:\/\/[a-z0-9\-]+\.bandcamp\.com\/track\/[a-z0-9\-\_]+\/?$/) ? "bandcamp-track" : null)
        }, o.prototype.import = function (e) {
            var t = this.importValue;
            this.url = t(e, "url"), this.soundcloud = $.extend(this.soundcloud, e.soundcloud), this.bandcamp = $.extend(this.bandcamp, e.bandcamp)
        }, o.prototype.export = function (e) {
            e.soundcloud = JSON.parse(JSON.stringify(this.soundcloud)), e.bandcamp = JSON.parse(JSON.stringify(this.bandcamp)), e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.url = this.url, i.soundcloud = JSON.parse(JSON.stringify(this.soundcloud)), i.bandcamp = JSON.parse(JSON.stringify(this.bandcamp)), i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--audio").set({position: "relative"}), e.r(".--audio .--frame").set({
                position: "relative",
                overflow: "hidden",
                "max-width": "100%",
                display: "inline-block"
            }), e.r(".--audio .--frame .--iframe").set({
                position: "absolute",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }), e.r(".--audio .--frame .--iframe").set({
                display: "-vendor-flex",
                "-vendor-align-items": "center",
                "-vendor-justify-content": "center",
                "text-align": "center"
            }), e.r(".--audio.placeholder .--frame .--iframe").set({overflow: "hidden"})
        }, o.prototype.redraw = function (e) {
            var t, i = this.styleSheet, o = this, n = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            }, a = this.mode(this.url);
            if (!this.url)return n(["url"], function () {
                o.$canvas.html('<div class="--audio placeholder" id="--' + o.id + '"><div class="--frame"><div class="--iframe"><span>No Audio URL</span></div></div></div>')
            }), t = this.selector(), void i.unsetAll(t);
            switch (n(["url", "soundcloud_style", "bandcamp_style"], function () {
                var e = "";
                switch (a) {
                    case"soundcloud-track":
                    case"soundcloud-playlist":
                        e = o.soundcloud.style;
                        break;
                    case"bandcamp-track":
                    case"bandcamp-album":
                        e = o.bandcamp.style
                }
                o.$canvas.html('<div class="--audio ' + (a ? a.split("-")[0] : "") + " " + e + '" id="--' + o.id + '"><div class="--frame"><div class="--iframe"><span>' + o.url.replace(/https?:\/\/(www\.)?/, "") + "</span></div></div></div>")
            }), t = this.selector(), i.unsetAll(t), a) {
                case"soundcloud-track":
                case"soundcloud-playlist":
                    i.r(t + " .--frame").set("width", this.soundcloud.width + "rem"), "visual" == this.soundcloud.style ? i.r(t + " .--frame").set("height", this.soundcloud.height + "rem") : i.r(t + " .--frame").set("height", "119px");
                    break;
                case"bandcamp-track":
                case"bandcamp-album":
                    i.r(t + " .--frame").set("width", this.bandcamp.width + "rem"), "slim" != this.bandcamp.style ? i.r(t + " .--frame").set("height", this.bandcamp.height <= 7 ? "120px" : this.bandcamp.height + "rem") : i.r(t + " .--frame").set("height", "42px")
            }
        }, t.exports = o
    }, {"./component": 7}], 5: [function (e, t, i) {
        function o(e, t) {
            this.orientation = null, this.mobileLayout = {
                mode: null,
                width: null
            }, this.width = null, this.height = null, this.cornerRadius = null, this.spacing = null, this.style = null, this.colorFG = null, this.colorBG = null, this.colorHover = null, this.appearance = null, this.font = null, this.kerning = null, this.size = null, this.weight = null, this.buttons = [], a.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, n = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><section data-title="Appearance"><div class="field"><label ' + o("orientation") + '>Orientation</label><div class="select-wrapper"><select ' + n("orientation") + '><option value="horizontal">Horizontal</option><option value="vertical">Vertical</option></select></div></div><div class="field"><label ' + o("style") + '>Style</label><div class="select-wrapper"><select ' + n("style") + '><option value="solid">Solid</option><option value="outline">Outline</option></select></div></div><div class="field"><label for="colorFG">Label Color</label><input type="hexcolor" data-alpha="1" name="colorFG" id="colorFG" value="#FFFFFF" maxlength="9" /></div><div class="field"><label for="colorBG"><span ' + s("style", "solid") + ">Background Color</span><span " + s("style", "outline") + '>Outline Color</span></label><input type="hexcolor" data-alpha="1" name="colorBG" id="colorBG" value="#000000" maxlength="9" /></div><div class="field"><label for="colorHover">Hover Color (Optional)</label><input type="hexcolor" data-alpha="1" name="colorHover" id="colorHover" value="" maxlength="9" data-optional="1" /></div><div class="field"><label ' + o("cornerRadius") + '>Corner Radius</label><input type="range" ' + n("cornerRadius") + ' min="0" max="2" step="0.125" data-status /></div><div class="field"><label ' + o("width") + '>Width</label><input type="range" ' + n("width") + ' min="1.875" max="30" step="0.125" data-status="rename" data-status-args="' + this.WIDTH_AUTO + '=Auto" /></div><div class="field"><label ' + o("height") + '>Height</label><input type="range" ' + n("height") + ' min="1.5" max="5" step="0.125" data-status /></div><div class="field"><label ' + o("spacing") + '>Spacing</label><input type="range" ' + n("spacing") + ' min="0" max="2" step="0.125" data-status /></div><hr /><div class="field"><label ' + o("font") + '>Font</label><div class="select-wrapper"><select ' + n("font") + ">" + function () {
                    var e, t = app.build.fonts.list, i = "";
                    for (e in t)i += '<option value="' + t[e].name + '">' + t[e].name + "</option>";
                    return i
                }() + '</select></div></div><div class="field"><label ' + o("weight") + '>Weight</label><input type="range" ' + n("weight") + ' min="100" max="900" step="100" data-status="font-weight" /></div><div class="field"><label ' + o("size") + '>Size</label><input type="range" ' + n("size") + ' min="0.5" max="4" step="0.125" data-status /></div><div class="field"><label ' + o("kerning") + '>Letter Spacing</label><input type="range" ' + n("kerning") + ' min="-0.5" max="1.5" step="0.025" data-status /></div><div class="field"><label ' + o("appearance") + '>Appearance</label><div class="select-wrapper"><select ' + n("appearance") + '><option value="normal">Normal</option><option value="lowercase">Lowercase</option><option value="uppercase">Uppercase</option><option value="smallcaps">Small Caps</option></select></div></div><hr /><div class="field-group"><label class="big">Mobile Layout</label><p class="note">' + app.build.messages.mobileLayout + '</p><div class="field"><label ' + o("mobileLayout_mode") + '>Mode</label><div class="select-wrapper"><select ' + n("mobileLayout_mode") + '><option value="normal">Normal</option><option value="force-vertical">Force Vertical</option></select></div></div><div class="field"><label ' + o("mobileLayout_width") + '>Width</label><input type="range" ' + n("mobileLayout_width") + ' min="1.875" max="30" step="0.125" data-status="rename" data-status-args="' + this.MOBILELAYOUT_WIDTH_AUTO + '=Auto" /></div></div></section><section data-title="Buttons"><div class="group" id="buttons" name="buttons" data-collapse="1" data-collapse-singular="1" data-min="1" data-max="10" data-title="label" data-value="[{}]"><div class="field"><label for="label">Label</label><input type="text" name="label" id="label" maxlength="64" value="Button" /></div><div class="field"><label for="url">URL</label><input type="text" name="url" id="url" maxlength="1024" value="' + app.URL_PLACEHOLDER + '" /><p class="note">' + app.build.messages.linkURLs + '</p></div><div class="field"><label for="colorFG">Label Color (Optional)</label><input type="hexcolor" data-alpha="1" name="colorFG" id="colorFG" value="" maxlength="9" data-optional="1" /></div><div class="field"><label for="colorBG"><span ' + s("style", "solid") + ">Background Color (Optional)</span><span " + s("style", "outline") + '>Outline Color (Optional)</span></label><input type="hexcolor" data-alpha="1" name="colorBG" id="colorBG" value="" maxlength="9" data-optional="1" /></div><div class="field"><label for="colorHover">Hover Color (Optional)</label><input type="hexcolor" data-alpha="1" name="colorHover" id="colorHover" value="" maxlength="9" data-optional="1" /></div></div></section></form>'), this.registerProperty("orientation", {
                input: "select",
                type: "word",
                allowed: ["horizontal", "vertical"]
            }), this.registerProperty("mobileLayout_mode", {
                input: "select",
                type: "word",
                allowed: ["normal", "force-vertical"]
            }), this.registerProperty("mobileLayout_width", {
                input: "range",
                type: "float"
            }), this.registerProperty("width", {
                input: "range",
                type: "float",
                map: [{type: "form", property: "button_width"}]
            }), this.registerProperty("height", {
                input: "range",
                type: "float",
                map: [{type: "form", property: "button_height"}]
            }), this.registerProperty("cornerRadius", {
                input: "range",
                type: "float",
                map: [{type: "form", property: "button_cornerRadius"}, {
                    type: "icons",
                    property: "cornerRadius",
                    condition: function (e) {
                        return ("solid" == e.style || "outline" == e.style) && "rectangle" == e.shape
                    }
                }]
            }), this.registerProperty("spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("style", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["solid", "outline"],
                map: [{type: "form", property: "button_style"}]
            }), this.registerProperty("colorFG", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "form", property: "button_colorFG"}, {
                    type: "text",
                    property: "color",
                    condition: function (e) {
                        return "outline" == this.style
                    }
                }, {
                    type: "*", property: "color", condition: function (e) {
                        return "outline" == this.style
                    }
                }]
            }), this.registerProperty("colorBG", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "form", property: "button_colorBG"}, {
                    type: "icons",
                    property: "colorBG",
                    condition: function (e) {
                        return "outline" == e.style && "outline" == this.style
                    }
                }, {
                    type: "divider", property: "color", condition: function (e) {
                        return "outline" == this.style
                    }
                }, {type: "columns", property: "colorBorder"}]
            }), this.registerProperty("colorHover", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "form", property: "button_colorHover"}]
            }), this.registerProperty("appearance", {
                input: "range",
                type: "word",
                allowed: ["normal", "uppercase", "lowercase", "smallcaps"],
                map: [{type: "form", property: "button_appearance"}, {type: "text", property: "appearance"}, {
                    type: "*",
                    property: "appearance"
                }]
            }), this.registerProperty("font", {
                input: "select",
                live: !0,
                map: [{type: "form", property: "button_font"}, {type: "text", property: "font"}, {
                    type: "*",
                    property: "font"
                }]
            }), this.registerProperty("kerning", {
                input: "range",
                type: "float",
                map: [{type: "form", property: "button_kerning"}, {type: "text", property: "kerning"}, {
                    type: "*",
                    property: "kerning"
                }]
            }), this.registerProperty("size", {
                input: "range",
                type: "float",
                map: [{type: "form", property: "button_size"}, {type: "text", property: "size"}, {
                    type: "*",
                    property: "size"
                }]
            }), this.registerProperty("weight", {
                input: "range",
                type: "int",
                map: [{type: "form", property: "button_weight"}, {type: "text", property: "weight"}, {
                    type: "*",
                    property: "weight"
                }]
            }), this.registerProperty("buttons", {
                input: "group",
                type: {
                    label: "utf8text",
                    url: "href",
                    colorFG: "htmlacolor?",
                    colorBG: "htmlacolor?",
                    colorHover: "htmlacolor?"
                }
            });
            var i = this;
            app.build.fonts.initField(this.properties.font.$field)
        }

        var a = e("./component");
        o.prototype = new a, o.prototype.constructor = o, o.prototype.type = "buttons", o.prototype.contentDependencies = {}, o.prototype.WIDTH_AUTO = 1.875, o.prototype.MOBILELAYOUT_WIDTH_AUTO = 1.875, o.prototype.isTextual = function () {
            return !0
        }, o.prototype.import = function (e) {
            var t = this.importValue;
            this.orientation = t(e, "orientation"), this.mobileLayout = $.extend(this.mobileLayout, e.mobileLayout), this.width = t(e, "width"), this.height = t(e, "height"), this.cornerRadius = t(e, "cornerRadius"), this.spacing = t(e, "spacing"), this.style = t(e, "style"), this.colorFG = t(e, "colorFG"), this.colorBG = t(e, "colorBG"), this.colorHover = t(e, "colorHover"), this.appearance = t(e, "appearance"), this.font = t(e, "font"), this.kerning = t(e, "kerning"), this.size = t(e, "size"), this.weight = t(e, "weight"), this.buttons = $.extend(this.buttons, e.buttons)
        }, o.prototype.export = function (e) {
            e.orientation = this.orientation, e.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), e.width = this.width, e.height = this.height, e.cornerRadius = this.cornerRadius, e.spacing = this.spacing, e.style = this.style, e.colorFG = this.colorFG, e.colorBG = this.colorBG, e.colorHover = this.colorHover, e.appearance = this.appearance, e.font = this.font, e.kerning = this.kerning, e.size = this.size, e.weight = this.weight, e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.orientation = this.orientation, i.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), i.width = this.width, i.height = this.height, i.cornerRadius = this.cornerRadius, i.spacing = this.spacing, i.style = this.style, i.colorFG = this.colorFG, i.colorBG = this.colorBG, i.colorHover = this.colorHover, i.appearance = this.appearance, i.font = this.font, i.kerning = this.kerning, i.size = this.size, i.weight = this.weight, i.buttons = JSON.parse(JSON.stringify(this.buttons)), i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--buttons").set({
                cursor: "default",
                padding: "0",
                "letter-spacing": "0"
            }), e.r(".--buttons-li-a").set({
                "text-decoration": "none",
                "text-align": "center",
                "white-space": "nowrap",
                "max-width": "100%"
            })
        }, o.prototype.redraw = function (e) {
            var t, i, o, a, s, r = this.styleSheet, l = this, p = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (p(["buttons"], function () {
                if (i = '<div class="--buttons" id="--' + l.id + '">', o = 1, a = l.buttons.length, 0 == a) i += "(no buttons???)"; else for (o = 1; o <= a; o++)s = l.buttons[o - 1], 1 == o && (i += "\t"), i += '<div class="--buttons-li"><span class="--buttons-li-a --buttons-li-n' + o + '" data-href="' + s.url + '">' + s.label + "</span></div>";
                i += "</div>", l.$canvas.html(i)
            }), t = this.selector(), r.unsetAll(t), r.unsetAll(t, "xsmall"), r.unsetAll(t, "xxsmall"), this.orientation) {
                case"horizontal":
                default:
                    r.r(t).set("width", "calc(100% + " + this.spacing + "rem)"), r.r(t).set("margin-left", this.spacing * -.5 + "rem"), r.r(t, "xxsmall").set("width", "calc(100% + " + .75 * this.spacing + "rem)"), r.r(t, "xxsmall").set("margin-left", .75 * this.spacing * -.5 + "rem"), "force-vertical" == this.mobileLayout.mode && (r.r(t, "xsmall").set("margin-left", "0"), r.r(t, "xxsmall").set("width", "100%"), r.r(t, "xxsmall").set("margin-left", "0"), r.r(t, "xsmall").set("width", "100%"), r.r(t, "xsmall").set("padding", .5 * this.spacing + "rem 0"), r.r(t, "xxsmall").set("padding", .75 * this.spacing * .5 + "rem 0"));
                    break;
                case"vertical":
                    r.r(t).set("width", "100%"), r.r(t).set("padding", .5 * this.spacing + "rem 0"), r.r(t, "xxsmall").set("padding", .75 * this.spacing * .5 + "rem 0")
            }
            switch (this.orientation) {
                case"horizontal":
                default:
                    r.r(t + " .--buttons-li").set("display", "inline-block"), r.r(t + " .--buttons-li").set("vertical-align", "middle"), r.r(t + " .--buttons-li").set("max-width", "calc(100% - " + this.spacing + "rem)"), r.r(t + " .--buttons-li", "xxsmall").set("max-width", "calc(100% - " + .75 * this.spacing + "rem)"), r.r(t + " .--buttons-li").set("margin", .5 * this.spacing + "rem"), r.r(t + " .--buttons-li", "xxsmall").set("margin", .75 * this.spacing * .5 + "rem"), "force-vertical" == this.mobileLayout.mode && (r.r(t + " .--buttons-li", "xsmall").set("max-width", "100%"), r.r(t + " .--buttons-li", "xxsmall").set("max-width", "100%"), r.r(t + " .--buttons-li", "xsmall").set("display", "block"), r.r(t + " .--buttons-li", "xsmall").set("margin", this.spacing + "rem 0"), r.r(t + " .--buttons-li", "xxsmall").set("margin", .75 * this.spacing + "rem 0"), r.r(t + " .--buttons-li:first-child", "xsmall").set("margin-top", "0"), r.r(t + " .--buttons-li:last-child", "xsmall").set("margin-bottom", "0"));
                    break;
                case"vertical":
                    r.r(t + " .--buttons-li").set("display", "block"), r.r(t + " .--buttons-li").set("margin", this.spacing + "rem 0"), r.r(t + " .--buttons-li", "xxsmall").set("margin", .75 * this.spacing + "rem 0"), r.r(t + " .--buttons-li:first-child").set("margin-top", "0"), r.r(t + " .--buttons-li:last-child").set("margin-bottom", "0")
            }
            switch (this.orientation) {
                case"horizontal":
                default:
                    r.r(t + " .--buttons-li-a").set("display", "block"), "force-vertical" == this.mobileLayout.mode && r.r(t + " .--buttons-li-a", "xsmall").set("display", "inline-block");
                    break;
                case"vertical":
                    r.r(t + " .--buttons-li-a").set("display", "inline-block")
            }
            switch (this.width != this.WIDTH_AUTO ? r.r(t + " .--buttons-li-a").set("width", this.width + "rem") : r.r(t + " .--buttons-li-a").set("width", "auto"), this.mobileLayout.width != this.MOBILELAYOUT_WIDTH_AUTO ? r.r(t + " .--buttons-li-a", "xsmall").set("width", this.mobileLayout.width + "rem") : r.r(t + " .--buttons-li-a", "xsmall").set("width", "auto"), r.r(t + " .--buttons-li-a").set("height", this.height + "rem"), r.r(t + " .--buttons-li-a").set("line-height", this.height + "rem"), r.r(t + " .--buttons-li-a").set("padding", "0 " + .5 * this.height + "rem"), r.r(t + " .--buttons-li-a").set("border-radius", this.cornerRadius + "rem"), this.appearance) {
                case"uppercase":
                    r.r(t + " .--buttons-li-a").set("text-transform", "uppercase");
                    break;
                case"lowercase":
                    r.r(t + " .--buttons-li-a").set("text-transform", "lowercase");
                    break;
                case"smallcaps":
                    r.r(t + " .--buttons-li-a").set("font-variant", "small-caps");
                    break;
                case"normal":
            }
            for (r.r(t + " .--buttons-li-a").set("font-family", "'" + this.font + "'"), 0 != this.kerning && (r.r(t + " .--buttons-li-a").set("letter-spacing", this.kerning + "rem"), this.kerning > 0 && r.r(t + " .--buttons-li-a").set("padding-left", "calc(" + this.kerning + "rem + " + .5 * this.height + "rem)")), r.r(t + " .--buttons-li-a").set("font-size", this.size + "em"), r.r(t + " .--buttons-li-a").set("font-weight", app.build.fonts.optimizeWeight(this.font, this.weight)), o = 1, a = this.buttons.length, o = 1; o <= a; o++)switch (s = this.buttons[o - 1], n = o, this.style) {
                default:
                case"solid":
                    s.colorBG ? r.r(t + " .--buttons-li-n" + n).set("background-color", s.colorBG) : r.r(t + " .--buttons-li-n" + n).set("background-color", this.colorBG), s.colorFG ? r.r(t + " .--buttons-li-n" + n).set("color", s.colorFG) : r.r(t + " .--buttons-li-n" + n).set("color", this.colorFG), s.colorHover ? r.r(t + " .--buttons-li-n" + n + ":hover").set("background-color", s.colorHover) : this.colorHover && r.r(t + " .--buttons-li-n" + n + ":hover").set("background-color", this.colorHover);
                    break;
                case"outline":
                    s.colorFG ? r.r(t + " .--buttons-li-n" + n).set("color", s.colorFG) : r.r(t + " .--buttons-li-n" + n).set("color", this.colorFG), s.colorBG ? r.r(t + " .--buttons-li-n" + n).set("border", "solid 1px " + s.colorBG) : r.r(t + " .--buttons-li-n" + n).set("border", "solid 1px " + this.colorBG), s.colorHover ? r.r(t + " .--buttons-li-n" + n + ":hover").set({
                        color: s.colorHover,
                        "border-color": s.colorHover
                    }) : this.colorHover && r.r(t + " .--buttons-li-n" + n + ":hover").set({
                            color: this.colorHover,
                            "border-color": this.colorHover
                        })
            }
        }, t.exports = o
    }, {"./component": 7}], 6: [function (e, t, o) {
        function n(e, t) {
            this.width = null, this.paddingHorizontal = null, this.paddingVertical = null, this.alignHorizontal = null, this.alignVertical = null, this.spacing = null, this.style = null, this.colorBorder = null, this.mobileLayout = {
                mode: null,
                alignHorizontal: null
            }, this.columns = [], this.xcolumns = [], a.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, n = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><section data-title="General"><div class="field"><label ' + o("width") + '>Width</label><input type="range" ' + n("width") + ' min="15" max="100" step="1" data-status /></div><hr /><div class="field-group"><label>Padding</label><div class="field half first"><label class="small" ' + o("paddingHorizontal") + '>Horizontal</label><input type="range" ' + n("paddingHorizontal") + ' min="0" max="8" step="0.125" data-status /></div><div class="field half"><label class="small" ' + o("paddingVertical") + '>Vertical</label><input type="range" ' + n("paddingVertical") + ' min="0" max="8" step="0.125" data-status /></div></div><div class="field-group"><label>Alignment</label><div class="field half first"><label class="small" ' + o("alignHorizontal") + '>Horizontal</label><div class="select-wrapper"><select ' + n("alignHorizontal") + '><option value="auto">Auto</option><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select></div></div><div class="field half"><label class="small" ' + o("alignVertical") + '>Vertical</label><div class="select-wrapper"><select ' + n("alignVertical") + '><option value="top">Top</option><option value="center">Center</option><option value="bottom">Bottom</option></select></div></div></div><div class="field"><label ' + o("spacing") + '>Element Spacing</label><input type="range" ' + n("spacing") + ' min="0" max="3" step="0.125" data-status /></div><hr /><div class="field"><label ' + o("style") + '>Style</label><div class="select-wrapper"><select ' + n("style") + '><option value="default">Default</option><option value="divided">Divided</option></select></div></div><div class="field" ' + s("style", "!default") + "><label " + o("colorBorder") + '>Border Color</label><input type="hexcolor" data-alpha="1" ' + n("colorBorder") + ' maxlength="9" /></div><hr /><div class="field-group"><label class="big">Mobile Layout</label><p class="note">' + app.build.messages.mobileLayout + '</p><div class="field"><label ' + o("mobileLayout_mode") + '>Mode</label><div class="select-wrapper"><select ' + n("mobileLayout_mode") + '><option value="stack">Stack</option><option value="stack-reverse">Stack (reverse)</option></select></div></div><div class="field"><label ' + o("mobileLayout_alignHorizontal") + '>Horizontal Alignment</label><div class="select-wrapper"><select ' + n("mobileLayout_alignHorizontal") + '><option value="auto">Auto</option><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select></div></div></div></section><section data-title="Columns"><div class="group" id="xcolumns" name="xcolumns" data-collapse="1" data-collapse-singular="1" data-min="1" data-max="4" data-title="title" data-value="[{}]"><div class="field half first"><label for="width">Width</label><div class="input-wrapper suffix percent"><input type="text" name="width" id="width" value="25" /></div><input type="hidden" name="index" id="index" /><input type="hidden" name="lastWidth" id="lastWidth" value="25" /><input type="hidden" name="title" id="title" /></div><div class="field half"><label for="align">Alignment</label><div class="select-wrapper"><select name="align" id="align"><option value="auto">Auto</option><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select></div></div></div></section></form>'),
                this.registerProperty("width", {
                    input: "range",
                    type: "int"
                }), this.registerProperty("paddingHorizontal", {
                input: "range",
                type: "float"
            }), this.registerProperty("paddingVertical", {
                input: "range",
                type: "float"
            }), this.registerProperty("alignHorizontal", {
                input: "select",
                type: "word",
                optional: !0,
                allowed: ["auto", "left", "center", "right"]
            }), this.registerProperty("alignVertical", {
                input: "select",
                type: "word",
                allowed: ["top", "center", "bottom"]
            }), this.registerProperty("spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("style", {
                input: "select",
                type: "word",
                allowed: ["default", "divided"]
            }), this.registerProperty("colorBorder", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "divider", property: "color"}, {
                    type: "buttons",
                    property: "colorBG",
                    condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorBG", condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorFG", condition: function (e) {
                        return "default" == e.style
                    }
                }, {type: "text", property: "color"}, {type: "*", property: "color"}]
            }), this.registerProperty("mobileLayout_mode", {
                input: "select",
                type: "word",
                allowed: ["stack", "stack-reverse"]
            }), this.registerProperty("mobileLayout_alignHorizontal", {
                input: "select",
                type: "word",
                optional: !0,
                allowed: ["auto", "left", "center", "right"]
            }), this.registerProperty("xcolumns", {
                input: "group",
                type: {width: "int", align: "word", index: "int?", lastWidth: "int?", title: "text?"},
                change: function () {
                    var e, t, o, n, a = [], s = !1;
                    for (e = null, t = 0, n = 0; n < i.xcolumns.length; n++)i.xcolumns[n].width = parseInt(i.xcolumns[n].width), i.xcolumns[n].lastWidth = parseInt(i.xcolumns[n].lastWidth), i.xcolumns[n].width = Math.min(100, Math.max(25, i.xcolumns[n].width)), i.xcolumns[n].width != i.xcolumns[n].lastWidth && (e = n), t += i.xcolumns[n].width;
                    if (100 != t) {
                        var r, l, p, d = 100 - t, c = 0;
                        for (null !== e && (t -= i.xcolumns[e].width), n = 0; n < i.xcolumns.length; n++)r = n === e ? 0 : i.xcolumns[n].width / t, o = Math.round(d * r), i.xcolumns[n].width = Math.max(25, i.xcolumns[n].width + o), c += i.xcolumns[n].width;
                        if (c > 100)if (null !== e) i.xcolumns[e].width -= c - 100, c = 100; else for (d = c - 100; d > 0;) {
                            for (l = 0, p = null, n = 0; n < i.xcolumns.length; n++)i.xcolumns[n].width >= l && (p = n, l = i.xcolumns[n].width);
                            if (null === p)break;
                            i.xcolumns[p].width -= d, c -= d, d = 0, i.xcolumns[p].width < 25 && (d = 25 - i.xcolumns[p].width, i.xcolumns[p].width = 25, c += d)
                        }
                        if (c < 100)if (null !== e) i.xcolumns[e].width += 100 - c, c = 100; else for (d = 100 - c; d > 0;)for (n = 0; n < i.xcolumns.length && d > 0; n++)i.xcolumns[n].width += 1, c += 1, d -= 1
                    }
                    for (n = 0; n < i.xcolumns.length; n++)o = {
                        width: i.xcolumns[n].width,
                        align: i.xcolumns[n].align,
                        componentIds: []
                    }, i.xcolumns[n].index in i.columns ? (o.componentIds = i.columns[i.xcolumns[n].index].componentIds, i.columns[i.xcolumns[n].index].componentIds = null, i.xcolumns[n].index != n && (s = !0)) : s = !0, a.push(o);
                    for (n = 0; n < i.columns.length; n++)null !== i.columns[n].componentIds && (a[a.length - 1].componentIds = a[a.length - 1].componentIds.concat(i.columns[n].componentIds), i.columns[n].componentIds = null, s = !0);
                    for (i.columns = a, n = 0; n < i.xcolumns.length; n++)i.xcolumns[n].index = n, i.xcolumns[n].lastWidth = i.xcolumns[n].width, i.xcolumns[n].title = i.xcolumns[n].width + "%";
                    "_formGroup" in this.$field[0] && this.$field[0]._formGroup.val(i.xcolumns, !0), i.redraw(s ? "columns" : "xcolumns"), app.$window.triggerHandler("resize.ie-flexbox-fix")
                }
            })
        }

        var a = e("./component");
        n.prototype = new a, n.prototype.constructor = n, n.prototype.type = "columns", n.prototype.contentDependencies = {spacing: ["spacing"]}, n.prototype.DEBUG = !1, n.prototype.columnIndex = function (e) {
            var t = this.columns;
            for (i = 0; i < t.length; i++)for (j = 0; j < t[i].componentIds.length; j++)if (t[i].componentIds[j] == e)return i;
            return !1
        }, n.prototype.handleDrop = function (e, t) {
            var i, o = t;
            void 0 != typeof o.data("columns-index") && $.contains(this.$wrapper[0], o[0]) && this.canAddChild(e) && (i = parseInt(o.data("columns-index")), e.$wrapper.appendTo(o), setTimeout(function () {
                e.refresh()
            }, 0), e.hasParent() && e.parent === this ? this.updateChild(e, i) : this.addChild(e, i), this.site.markChanged())
        }, n.prototype.hasChildren = function () {
            return Object.keys(this.children).length > 0
        }, n.prototype.canAddChild = function (e) {
            return "columns" != e.type && "grid" != e.type && "control" != e.type
        }, n.prototype.addChild = function (e, t) {
            var i, o = this.columns;
            e.hasParent() && e.parent.removeChild(e), e.parent = this, this.children[e.id] = e, i = "object" == typeof t ? this.columnIndex(t.id) : t, i !== !1 && o[i].componentIds.push(e.id), this.$canvas.find('[data-columns-index="' + i + '"]').removeClass("placeholder")
        }, n.prototype.removeChild = function (e) {
            var t, i = this.columns;
            e.parent = null, delete this.children[e.id], t = this.columnIndex(e.id), t !== !1 && i[t].componentIds.splice(i[t].componentIds.indexOf(e.id), 1), 0 == i[t].componentIds.length && this.$canvas.find('[data-columns-index="' + t + '"]').addClass("placeholder")
        }, n.prototype.updateChild = function (e, t) {
            var i, o = this.columns;
            i = this.columnIndex(e.id), i !== !1 && o[i].componentIds.splice(o[i].componentIds.indexOf(e.id), 1), 0 == o[i].componentIds.length && this.$canvas.find('[data-columns-index="' + i + '"]').addClass("placeholder"), i = "object" == typeof t ? this.columnIndex(t.id) : t, i !== !1 && o[i].componentIds.push(e.id), this.$canvas.find('[data-columns-index="' + i + '"]').removeClass("placeholder")
        }, n.prototype.claimChildren = function () {
            var e, t, i, o, n, a = this.columns;
            for (this.children = {}, o = 0; o < a.length; o++)for (e = a[o], n = 0; n < e.componentIds.length; n++)i = e.componentIds[n], t = i in this.site.components ? this.site.components[i] : null, t && (t.parent = this, this.children[i] = t);
            return !0
        }, n.prototype.jsonObject = function () {
            var e = a.prototype.jsonObject.apply(this);
            return delete e.xcolumns, e
        }, n.prototype.import = function (e) {
            var t, i = this.importValue;
            if (2 == e.columns.length && 100 == e.columns[0].width && e.columns.splice(1, 1), this.width = i(e, "width"), this.paddingHorizontal = i(e, "paddingHorizontal"), this.paddingVertical = i(e, "paddingVertical"), this.alignHorizontal = i(e, "alignHorizontal"), this.alignVertical = i(e, "alignVertical"), this.spacing = i(e, "spacing"), this.style = i(e, "style"), this.colorBorder = i(e, "colorBorder"), this.mobileLayout = $.extend(this.mobileLayout, e.mobileLayout), this.columns = $.extend(this.columns, e.columns), this.xcolumns = [], this.columns.length > 0)for (t = 0; t < this.columns.length; t++)"componentIds" in this.columns[t] && null !== this.columns[t].componentIds || (this.columns[t].componentIds = []), this.xcolumns.push({
                width: this.columns[t].width,
                align: this.columns[t].align,
                index: t,
                lastWidth: this.columns[t].width,
                title: this.columns[t].width + "%"
            })
        }, n.prototype.export = function (e) {
            e.width = this.width, e.paddingHorizontal = this.paddingHorizontal, e.paddingVertical = this.paddingVertical, e.alignHorizontal = this.alignHorizontal, e.alignVertical = this.alignVertical, e.spacing = this.spacing, e.style = this.style, e.colorBorder = this.colorBorder, e.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), e.syncAll()
        }, n.prototype.createClone = function (e, t) {
            var o;
            if (o = new n(e), o.width = this.width, o.paddingHorizontal = this.paddingHorizontal, o.paddingVertical = this.paddingVertical, o.alignHorizontal = this.alignHorizontal, o.alignVertical = this.alignVertical, o.spacing = this.spacing, o.style = this.style, o.colorBorder = this.colorBorder, o.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), o.columns = JSON.parse(JSON.stringify(this.columns, function (e, t) {
                    return "componentIds" == e ? [] : t
                })), o.xcolumns = [], o.columns.length > 0)for (i = 0; i < o.columns.length; i++)"componentIds" in o.columns[i] && null !== o.columns[i].componentIds || (o.columns[i].componentIds = []), o.xcolumns.push({
                width: o.columns[i].width,
                align: o.columns[i].align,
                index: i,
                lastWidth: o.columns[i].width,
                title: o.columns[i].width + "%"
            });
            o.syncAll(), t(o)
        }, n.prototype.cssBase = function (e) {
            e.r(".--columns > .--columns-inner").set({
                display: "-vendor-inline-flex",
                "-vendor-flex-wrap": "wrap",
                position: "relative",
                "max-width": "100%"
            }), this.DEBUG && e.r(".--columns > .--columns-inner").set({"box-shadow": "0 0 0 1px red"}), e.r(".--columns > .--columns-inner > *").set({
                "-vendor-flex-shrink": "0",
                "-vendor-flex-grow": "0",
                "max-width": "100%"
            })
        }, n.prototype.redraw = function (e) {
            var t, i, o, n, a = this.styleSheet, s = this, r = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            }, l = this.columns;
            switch (r(["columns", "style"], function () {
                var e, t, i, o, n, a, r, p, d, c, u = "";
                switch (u += '<div class="--columns" id="--' + s.id + '"><div class="--columns-inner">', s.style) {
                    case"default":
                    default:
                        a = '<div data-columns-index="#">', r = "</div>", p = 3;
                        break;
                    case"divided":
                        a = '<div><div data-columns-index="#">', r = "</div></div>", p = 4
                }
                for (o = 0; o < l.length; o++)u += a.replace("#", o), u += r;
                if (u += "</div></div>", s.$canvas.html(u), s.hasChildren())for (o = 0; o < l.length; o++) {
                    for (d = l[o], e = [], n = 0; n < d.componentIds.length; n++)i = s.children[d.componentIds[n]], i && (e[s.site.index(i)] = i);
                    for (t = [], n = 0; n < e.length; n++)e[n] && t.push(e[n]);
                    e = t, c = s.$canvas.find('[data-columns-index="' + o + '"]'), 0 == e.length ? c.addClass("placeholder") : c.removeClass("placeholder");
                    for (n in e)e[n] && c.append(e[n].$wrapper)
                } else s.$canvas.find("[data-columns-index]").addClass("placeholder")
            }), t = this.selector(), a.unsetAll(t), a.unsetAll(t, "small"), a.unsetAll(t + ".--columns"), a.unsetAll(t + ".--columns", "small"), n = this.site.content.spacing, a.r(t + " > .--columns-inner").set({width: this.width + "rem"}), this.alignHorizontal && "auto" != this.alignHorizontal && a.r(t + " > .--columns-inner").set({"text-align": this.alignHorizontal}), this.mobileLayout.mode) {
                case"stack":
                default:
                    a.r(t + " > .--columns-inner", "small").set({
                        "-vendor-flex-direction": "column",
                        "-vendor-flex-wrap": "nowrap"
                    }), this.mobileLayout.alignHorizontal && "auto" != this.mobileLayout.alignHorizontal && a.r(t + " > .--columns-inner", "small").set({"text-align": this.mobileLayout.alignHorizontal});
                    break;
                case"stack-reverse":
                    a.r(t + " > .--columns-inner", "small").set({
                        "-vendor-flex-direction": "column-reverse",
                        "-vendor-flex-wrap": "nowrap"
                    }), this.mobileLayout.alignHorizontal && "auto" != this.mobileLayout.alignHorizontal && a.r(t + " > .--columns-inner", "small").set({"text-align": this.mobileLayout.alignHorizontal})
            }
            var p = null, d = [];
            for (i = 0; i < l.length; i++)d.push(l[i].width);
            for (3 == d.length && d.indexOf(33) !== -1 && d.indexOf(34) !== -1 && (p = 33.33333), i = 1; i <= l.length; i++)switch (o = l[i - 1], a.r(t + " > .--columns-inner > :nth-child(" + i + ")").set({width: (null !== p ? p : o.width) + "%"}), o.align && "auto" != o.align && a.r(t + " > .--columns-inner > :nth-child(" + i + ")").set({"text-align": o.align}), this.mobileLayout.mode) {
                case"stack":
                case"stack-reverse":
                default:
                    a.r(t + " > .--columns-inner > :nth-child(" + i + ")", "small").set({
                        width: "100%",
                        "min-height": "100%",
                        "text-align": "inherit"
                    })
            }
            switch (this.style) {
                case"default":
                default:
                    switch (this.paddingVertical > 0 && (a.r(t + ".--columns").set({
                        "margin-top": Math.max(0, this.paddingVertical - n) + "rem",
                        "margin-bottom": Math.max(0, this.paddingVertical - n) + "rem"
                    }), a.r(t + ".--columns", "small").set({
                        "margin-top": Math.max(0, .875 * this.paddingVertical - n) + "rem",
                        "margin-bottom": Math.max(0, .875 * this.paddingVertical - n) + "rem"
                    })), this.alignVertical) {
                        case"top":
                        default:
                            a.r(t + " > .--columns-inner").set({"-vendor-align-items": "flex-start"});
                            break;
                        case"bottom":
                            a.r(t + " > .--columns-inner").set({"-vendor-align-items": "flex-end"});
                            break;
                        case"center":
                            a.r(t + " > .--columns-inner").set({"-vendor-align-items": "center"})
                    }
                    (this.paddingHorizontal > 0 || this.paddingVertical > 0) && (this.paddingHorizontal > 0 && a.r(t + " > .--columns-inner").set({
                        "margin-left": this.paddingHorizontal * -.5 + "rem",
                        "max-width": "calc(100% + " + this.paddingHorizontal + "rem)"
                    }), this.paddingVertical > 0 && this.paddingHorizontal > 0 ? a.r(t + " > .--columns-inner > *").set({padding: .5 * this.paddingVertical + "rem " + .5 * this.paddingHorizontal + "rem"}) : this.paddingVertical > 0 ? a.r(t + " > .--columns-inner > *").set({padding: .5 * this.paddingVertical + "rem 0"}) : this.paddingHorizontal > 0 && a.r(t + " > .--columns-inner > *").set({padding: "0 " + .5 * this.paddingHorizontal + "rem"}), this.paddingHorizontal > 0 ? (a.r(t + " > .--columns-inner > *", "small").set({padding: .5 * Math.min(3, this.paddingHorizontal) + "rem 0"}), a.r(t + " > .--columns-inner > div:" + ("stack-reverse" == this.mobileLayout.mode ? "last" : "first") + "-child", "small").set({"padding-top": "0"}), a.r(t + " > .--columns-inner > div:" + ("stack-reverse" == this.mobileLayout.mode ? "first" : "last") + "-child", "small").set({"padding-bottom": "0"})) : a.r(t + " > .--columns-inner > *", "small").set({padding: "0"}), a.r(t + " > .--columns-inner", "small").set({
                        "margin-left": "0",
                        "max-width": "100%"
                    })), this.DEBUG && a.r(t + " > .--columns-inner > *").set({"box-shadow": "inset 0 0 0 1px green"}), a.r(t + " > .--columns-inner > * > *").set({
                        "padding-top": .5 * this.spacing + "rem",
                        "padding-bottom": .5 * this.spacing + "rem"
                    }), a.r(t + " > .--columns-inner > * > *:first-child").set({"padding-top": "0"}), a.r(t + " > .--columns-inner > * > *:last-child").set({"padding-bottom": "0"}), a.r(t + " > .--columns-inner > * > *:first-child > * > *").set("margin-top", "0"), a.r(t + " > .--columns-inner > * > *:last-child > * > *").set("margin-bottom", "0");
                    break;
                case"divided":
                    switch (this.paddingVertical > 0 && (a.r(t + ".--columns").set({
                        "margin-top": Math.max(0, .75 * this.paddingVertical - n) + "rem",
                        "margin-bottom": Math.max(0, .75 * this.paddingVertical - n) + "rem"
                    }), a.r(t + ".--columns", "small").set({
                        "margin-top": Math.max(0, Math.min(3, this.paddingVertical) - n) + "rem",
                        "margin-bottom": Math.max(0, Math.min(3, this.paddingVertical) - n) + "rem"
                    })), a.r(t + " > .--columns-inner").set({"-vendor-align-items": "stretch"}), a.r(t + " > .--columns-inner > *").set({display: "-vendor-flex"}), (this.paddingHorizontal > 0 || this.paddingVertical > 0) && (this.paddingHorizontal > 0 && a.r(t + " > .--columns-inner").set({
                        "margin-left": this.paddingHorizontal * -.5 + "rem",
                        "max-width": "calc(100% + " + this.paddingHorizontal + "rem)"
                    }), this.paddingVertical > 0 && this.paddingHorizontal > 0 ? a.r(t + " > .--columns-inner > *").set({padding: .75 * this.paddingVertical + "rem " + .5 * this.paddingHorizontal + "rem"}) : this.paddingVertical > 0 ? a.r(t + " > .--columns-inner > *").set({padding: .75 * this.paddingVertical + "rem 0"}) : this.paddingHorizontal > 0 && a.r(t + " > .--columns-inner > *").set({padding: "0 " + .5 * this.paddingHorizontal + "rem"}), this.paddingHorizontal > 0 ? (a.r(t + " > .--columns-inner > *", "small").set({padding: .5 * Math.min(4.5, this.paddingHorizontal) + "rem 0"}), a.r(t + " > .--columns-inner > div:" + ("stack-reverse" == this.mobileLayout.mode ? "last" : "first") + "-child", "small").set({"padding-top": "0"}), a.r(t + " > .--columns-inner > div:" + ("stack-reverse" == this.mobileLayout.mode ? "first" : "last") + "-child", "small").set({"padding-bottom": "0"})) : a.r(t + " > .--columns-inner > *", "small").set({padding: "0"}), a.r(t + " > .--columns-inner", "small").set({
                        "margin-left": "0",
                        "max-width": "100%"
                    })), this.alignVertical) {
                        case"top":
                        default:
                            a.r(t + " > .--columns-inner > *").set({"-vendor-align-items": "flex-start"});
                            break;
                        case"bottom":
                            a.r(t + " > .--columns-inner > *").set({"-vendor-align-items": "flex-end"});
                            break;
                        case"center":
                            a.r(t + " > .--columns-inner > *").set({"-vendor-align-items": "center"})
                    }
                    switch (a.r(t + " > .--columns-inner > *").set({"border-left": "solid 1px " + this.colorBorder}), a.r(t + " > .--columns-inner > div:first-child").set({"border-left": 0}), this.mobileLayout.mode) {
                        case"stack":
                        default:
                            a.r(t + " > .--columns-inner > *", "small").set({
                                "border-left": 0,
                                "border-top": "solid 1px " + this.colorBorder
                            }), a.r(t + " > .--columns-inner > div:first-child", "small").set({"border-top": 0});
                            break;
                        case"stack-reverse":
                            a.r(t + " > .--columns-inner > *", "small").set({
                                "border-left": 0,
                                "border-top": "solid 1px " + this.colorBorder
                            }), a.r(t + " > .--columns-inner > div:last-child", "small").set({"border-top": 0})
                    }
                    this.DEBUG && (a.r(t + " > .--columns-inner > *").set({"box-shadow": "inset 0 0 0 1px green"}), a.r(t + " > .--columns-inner > * > *").set({"box-shadow": "0 0 0 1px orange"})), a.r(t + " > .--columns-inner > * > *").set({width: "100%"}), a.r(t + " > .--columns-inner > * > * > *").set({
                        "padding-top": .5 * this.spacing + "rem",
                        "padding-bottom": .5 * this.spacing + "rem"
                    }), a.r(t + " > .--columns-inner > * > * > *:first-child").set({"padding-top": "0"}), a.r(t + " > .--columns-inner > * > * > *:last-child").set({"padding-bottom": "0"}), a.r(t + " > .--columns-inner > * > * > *:first-child > * > *").set("margin-top", "0"), a.r(t + " > .--columns-inner > * > * > *:last-child > * > *").set("margin-bottom", "0")
            }
            if (this.hasChildren())for (i in s.children)s.children[i].refresh()
        }, t.exports = n
    }, {"./component": 7}], 7: [function (e, t, o) {
        function n(e, t) {
            this.id = e, this.parent = null, this.children = {}, this.site = null, this.styleSheet = null, this.formInitialized = !1, this.$canvas = null, this.$wrapper = null, this.$form = $(), this.properties = {}, this.propertyHandlers = {}, t && this.import(t)
        }

        e("form"), e("tabs");
        n.prototype.handleDrop = function (e, t) {
        }, n.prototype.hasChildren = function () {
            return !1
        }, n.prototype.canAddChild = function (e) {
            return !1
        }, n.prototype.addChild = function (e, t) {
        }, n.prototype.removeChild = function (e) {
        }, n.prototype.updateChild = function (e, t) {
        }, n.prototype.claimChildren = function () {
        }, n.prototype.isTextual = function () {
            return !1
        }, n.prototype.preprocess = function (e, t) {
            var i, o, n, a;
            if ("object" == typeof t) {
                for (o in t) {
                    a = t[o];
                    for (n in e)if (i = n.split("."), 1 == i.length) {
                        if (!(i[0] in a))continue;
                        a[i[0]] = this.preprocess(e[n], a[i[0]])
                    } else {
                        if (!(i[0] in a) || !i[1] in a[i[0]])continue;
                        a[i[0]][i[1]] = this.preprocess(e[n], a[i[0]][i[1]])
                    }
                }
                return t
            }
            switch (e) {
                case"id":
                    t = t.toLowerCase();
                    break;
                case"url":
                case"uri":
                    t = $.trim(t), web.is("email", t) && (t = "mailto:" + t), t = encodeURIComponent(t).replace(/%40/g, "@").replace(/%23/g, "#").replace(/%24/g, "$").replace(/%25/g, "%").replace(/%26/g, "&").replace(/%2B/g, "+").replace(/%3D/g, "=").replace(/%3B/g, ";").replace(/%2C/g, ",").replace(/%3F/g, "?").replace(/%2F/g, "/").replace(/%3A/g, ":"), t = t.replace(/%3C/g, "<").replace(/%3E/g, ">")
            }
            return t
        }, n.prototype.is = function (e, t) {
            var i, o, n, a, s, r, l = !0, p = !1;
            if ("object" != typeof t)return web.is(e, t);
            if ("any" == e)return !0;
            for (o in t) {
                s = t[o];
                for (n in e) {
                    if (i = n.split("."), 1 == i.length) {
                        if (!(i[0] in s))continue;
                        a = s[i[0]]
                    } else {
                        if (!(i[0] in s) || !i[1] in s[i[0]])continue;
                        a = s[i[0]][i[1]]
                    }
                    "?" == e[n].slice(-1) ? (p = !0, r = e[n].slice(0, -1)) : (p = !1, r = e[n]), p || null !== a && ("string" != typeof a || "" !== $.trim(a)) || (l = !1), web.is(r, a) || (l = !1)
                }
            }
            return l
        }, n.prototype.registerPropertyHandler = function (e, t) {
            var i = $.extend({
                name: null, type: "any", property: null, get: function () {
                    return null
                }, set: function (e) {
                }
            }, t);
            i.name = e, this.propertyHandlers[e] = i
        }, n.prototype.registerProperty = function (e, t) {
            var i = this, o = $.extend({
                name: null,
                type: "any",
                $field: null,
                allowed: null,
                live: !1,
                input: "text",
                optional: !1,
                change: null,
                map: []
            }, t);
            o.name = e, o.$field = this.$form.find('[name="' + e + '"]'), o.$field.on(o.live ? "change keyup" : "change", function () {
                var t;
                return t = "checkbox" == o.input ? !!o.$field.prop("checked") : o.$field.val(), o.$field.prop("disabled") && (t = null), null === t || "string" == typeof t && "" === $.trim(t) ? void(o.optional && i.property(e, "")) : (t = i.preprocess(o.type, t), void(i.is(o.type, t) ? (o.$field.removeAttr("data-invalid").removeData("invalid"), i.property(e) != t && i.property(e, t)) : o.$field.attr("data-invalid", "1").data("invalid", "1")))
            }).on("focus", function () {
                o.live && ("text" != o.$field.attr("type") && "range" != o.$field.attr("type") && "TEXTAREA" != o.$field.prop("tagName") || o.$field.data("currentValue", i.property(e)))
            }).on("blur", function () {
                if (!o.$field.prop("disabled")) {
                    var t = i.property(e);
                    if ("string" == typeof t) {
                        var n;
                        n = t.replace(/^\s*/, "").replace(/\s*$/, "").replace(/[ \t]+/g, " "), n != t && (i.property(e, n), t = n)
                    }
                    "checkbox" == o.input ? o.$field.prop("checked", t) : o.$field.val(t), o.$field.removeAttr("data-invalid").removeData("invalid"), "text" != o.$field.attr("type") && "range" != o.$field.attr("type") && "TEXTAREA" != o.$field.prop("tagName") || (o.$field.data("currentValue") != t && app.build.history.add(), o.$field.removeData("currentValue"))
                }
            }), o.change && o.$field.on("group" == o.input ? "groupChange" : "change", function () {
                o.change.apply(o)
            }), o.map.splice(0, 0, {type: this.type, property: e}), this.properties[e] = o, this.sync(e)
        }, n.prototype.prop = function (e, t) {
            var i = this.property(e, t);
            return "undefined" != typeof t && e in this.properties && this.properties[e].$field.trigger("change"), i
        }, n.prototype.property = function (e, t) {
            var o, n;
            if (e in this.propertyHandlers)return o = this.propertyHandlers[e], "undefined" == typeof t ? o.get.apply(this) : (o.set.apply(this, [t]), void(this.site && "property" in o && (this.site.markChanged(), this.sync(o.property, !0))));
            if (o = this.properties[e], "undefined" == typeof t) {
                var a, n = e.split("_");
                if (n.length > 1) {
                    for (a = this, i = 0; i < n.length; i++) {
                        if (!(n[i] in a))return null;
                        if (!(n[i] in a))return null;
                        a = a[n[i]]
                    }
                    return a
                }
                return e in this ? this[e] : null
            }
            if ("group" == o.input) this[e] = t; else {
                switch (o.type) {
                    case"xy":
                        if (n = t.split(","), n[0] = parseInt(n[0]), n[1] = parseInt(n[1]), isNaN(n[0]) || isNaN(n[1]) || n[0] < 0 || n[1] < 0)return;
                        t = n;
                        break;
                    case"float":
                        if (o.live && t.match(/\-?0(.0*)?/))break;
                        t = parseFloat(t), isNaN(t) && (t = "");
                        break;
                    case"int":
                        t = parseInt(t), isNaN(t) && (t = "")
                }
                if (o.allowed && null !== t && o.allowed.indexOf(t) === -1)return;
                var a, s, n = e.split("_");
                if (n.length > 1) {
                    for (a = this, i = 0; i < n.length - 1; i++)s = a, n[i] in a || (a[n[i]] = {}), a = a[n[i]];
                    "object" == typeof a && (null === t || "" === t ? a[n[n.length - 1]] = null : a[n[n.length - 1]] = t)
                } else null === t || "" === t ? this[e] = null : this[e] = t
            }
            this.site && (this.site.markChanged(), this.sync(e, !0))
        }, n.prototype.form_for = function (e) {
            return 'for="' + this.id + "-" + e + '"'
        }, n.prototype.form_id = function (e) {
            return 'id="' + this.id + "-" + e + '" name="' + e + '"'
        }, n.prototype.form_req = function (e, t) {
            var i, o = [], n = "";
            if ("object" == typeof e) {
                for (i in e)n = Array.isArray(e[i]) ? e[i].join(",") : e[i], o.push(i + "=" + n);
                return 'data-requires="' + o.join("&") + '"'
            }
            return "!" == t.charAt(0) ? 'data-requires="' + e + "!=" + t.substr(1) + '"' : 'data-requires="' + e + "=" + t + '"'
        }, n.prototype.form = function (e) {
            this.$form = $(e)
        }, n.prototype.attachForm = function (e) {
            this.$form && (app.build.history.disable(!0), this.formInitialized || (this.$form.on("keydown", "input, textarea", function (e) {
                13 == e.keyCode && $(this).blur()
            }), this.$form.on("keydown", "input, textarea, select", function (e) {
                27 == e.keyCode && $(this).blur()
            }), this.$form.form(), this.$form.children("section[data-title]").length > 0 && this.$form.tabs(), this.formInitialized = !0), e.append(this.$form))
        }, n.prototype.selector = function () {
            return "#--" + this.id
        }, n.prototype.sync = function (e, t) {
            var i;
            e in this.propertyHandlers && (e = this.propertyHandlers[e].property), i = this.properties[e], i.$field.prop("disabled") || ("group" == i.input ? i.$field.data("value", JSON.stringify(this.property(e))) : "checkbox" == i.input ? i.$field.prop("checked") != this.property(e) && i.$field.prop("checked", this.property(e)) : i.$field.val() != this.property(e) && i.$field.val(this.property(e))), t && this.redraw(e)
        }, n.prototype.syncAll = function (e) {
            var t, i;
            t = Object.keys(this.properties);
            for (i in t)this.sync(t[i], e)
        }, n.prototype.assets = function () {
            return {}
        }, n.prototype.json = function (e) {
            var t, i;
            return t = this.jsonObject(), i = JSON.stringify(t, null, e ? 4 : null), i = i.replace(/:\s*\"(\-?[0-9]+\.[0-9]+)\"\s*/gm, ":$1")
        }, n.prototype.jsonObject = function () {
            var e, t, i, o = this;
            return e = JSON.stringify(this, function (e, t) {
                if ("string" != typeof e)return t;
                if ("site" != e && "properties" != e && "propertyHandlers" != e && "styleSheet" != e && "formInitialized" != e && "parent" != e && "children" != e && "$" != e.charAt(0) && "_" != e.charAt(0))return t
            }), t = JSON.parse(e), i = function (e, t) {
                var n;
                for (n in e)if (null === e[n]) delete e[n]; else if ("object" == typeof e[n]) i(e[n], n), 0 === Object.keys(e[n]).length && delete e[n]; else {
                    var a = (t ? t + "_" : "") + n, s = o.properties[a];
                    if (s)switch (s.type) {
                        case"float":
                            e[n] = parseFloat(e[n]).toFixed(3);
                            break;
                        case"int":
                            e[n] = parseInt(e[n])
                    }
                }
            }, i(t), t.id = this.id, t.type = this.type, t
        }, n.prototype.import = function (e) {
        }, n.prototype.export = function (e) {
        }, n.prototype.importValue = function (e, t) {
            return t in e && "undefined" != typeof e[t] && null !== e[t] ? e[t] : null
        }, n.prototype.createClone = function (e, t) {
        }, n.prototype.moveTo = function (e) {
            this.site.move(this, e)
        }, n.prototype.pos = function () {
            return this.site.pos(this)
        }, n.prototype.cssBase = function (e) {
        }, n.prototype.redraw = function (e) {
        }, n.prototype.refresh = function () {
        }, n.prototype.remove = function () {
            this.site.remove(this)
        }, n.prototype.clone = function () {
            this.site.clone(this)
        }, n.prototype.hasParent = function () {
            return null !== this.parent
        }, n.prototype.isAnimated = function () {
            return !1
        }, n.prototype.applyMap = function (e) {
            var t, i, o, n, a, s, r, l, p = $.extend({}, this.properties, this.propertyHandlers);
            for (t in p) {
                i = p[t].map, o = null;
                for (r in i) {
                    n = i[r];
                    for (l in e)if (a = e[l], s = a.property(n.property), ("*" == n.type && "page" != a.type && "content" != a.type || a.type == n.type) && null !== s && (!("condition" in n) || n.condition.apply(this, [a]))) {
                        o = s;
                        break
                    }
                    if (null !== o)break
                }
                null !== o && (this.property(t, o), this.sync(t))
            }
        }, n.prototype.isUniform = function (e, t) {
            var i, o, n = {};
            if (!(e in this))return !1;
            for (i = 0; i < this[e].length; i++) {
                if (!(t in this[e][i]))return !1;
                o = this[e][i][t], o in n ? n[o]++ : n[o] = 1
            }
            return 1 == Object.keys(n).length
        }, n.prototype.optimize = function (e, t) {
        }, t.exports = n
    }, {form: "form", tabs: "tabs"}], 8: [function (e, t, i) {
        function o(e, t) {
            this.align = null, this.padding = {
                vertical: null,
                horizontal: null
            }, this.margin = null, this.position = null, this.cornerRadius = null, this.spacing = null, this.style = null, this.width = null, this.overlap = null, this.constrain = null, this.background = {
                style: null,
                color: null,
                angle: null,
                stop1: {color: null, position: null},
                stop2: {color: null, position: null}
            }, this.shadow = {
                color: null,
                angle: null,
                distance: null,
                size: null,
                blur: null
            }, this.mobileLayout = {
                mode: null,
                padding: {vertical: null, horizontal: null},
                margin: null,
                backgroundFriendly: {hideOverlay: null, centerAlign: null}
            }, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><section data-title="Appearance"><div class="field half first"><label ' + o("align") + '>Alignment</label><div class="select-wrapper"><select ' + a("align") + '><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select></div></div><div class="field half"><label ' + o("position") + '>Position</label><div class="select-wrapper"><select ' + a("position") + '><option value="center">Center</option><option value="top-left">Top Left</option><option value="top">Top</option><option value="top-right">Top right</option><option value="right">Right</option><option value="bottom-right">Bottom Right</option><option value="bottom">Bottom</option><option value="bottom-left">Bottom Left</option><option value="left">Left</option></select></div></div><div class="field"><label ' + o("width") + '>Width</label><input type="range" ' + a("width") + ' min="20" max="100" step="1" data-status /></div><div class="field-group"><label>Padding</label><div class="field half first"><label class="small" ' + o("padding_vertical") + '>Vertical</label><input class="small" type="range" ' + a("padding_vertical") + ' min="1" max="5" step="0.125" data-status /></div><div class="field half"><label class="small" ' + o("padding_horizontal") + '>Horizontal</label><input class="small" type="range" ' + a("padding_horizontal") + ' min="1" max="5" step="0.125" data-status /></div></div><div class="field"><label ' + o("spacing") + '>Element Spacing</label><input type="range" ' + a("spacing") + ' min="0.25" max="3" step="0.125" data-status /></div><hr /><div class="field"><label ' + o("style") + '>Style</label><div class="select-wrapper"><select ' + a("style") + '><option value="default">None</option><option value="box">Box</option><option value="wide-box">Wide Box</option><option value="tall-box">Tall Box</option></select></div></div><div class="field-group" ' + s("style", "!default") + '><div class="field-group" ' + s({
                    style: "tall-box",
                    "position!": ["top", "center", "bottom"]
                }) + '><div class="field half first"><input type="checkbox" ' + a("overlap") + " /><label " + o("overlap") + '>Overlap</label></div><div class="field half"><input type="checkbox" ' + a("constrain") + " /><label " + o("constrain") + '>Constrain</label></div></div><div class="field"><label ' + o("margin") + '>Margin</label><input type="range" ' + a("margin") + ' min="-0.125" max="5" step="0.125" data-status="rename" data-status-args="' + this.MARGIN_AUTO + '=Auto" /></div><div class="field" ' + s("style", "box") + "><label " + o("cornerRadius") + '>Corner Radius</label><input type="range" ' + a("cornerRadius") + ' min="0" max="2" step="0.125" data-status /></div><div class="field"><label ' + o("background_style") + '>Background Style</label><div class="select-wrapper"><select ' + a("background_style") + '><option value="color">Color</option><option value="gradient">Gradient</option></select></div></div><div class="field-group" ' + s("background_style", "color") + '><div class="field"><label ' + o("background_color") + '>Color</label><input type="hexcolor" data-alpha="1" ' + a("background_color") + ' maxlength="9" /></div></div><div class="field-group" ' + s("background_style", "gradient") + '><div class="field"><label ' + o("background_angle") + '>Angle</label><input type="range" ' + a("background_angle") + ' min="0" max="360" step="1" data-status="degrees" /></div><label>Stop #1</label><div class="field"><input type="hexcolor" data-alpha="1" ' + a("background_stop1_color") + ' maxlength="9" /></div><div class="field"><input type="range" ' + a("background_stop1_position") + ' min="0" max="100" step="1" /></div><label>Stop #2</label><div class="field"><input type="hexcolor" data-alpha="1" ' + a("background_stop2_color") + ' maxlength="9" /></div><div class="field"><input type="range" ' + a("background_stop2_position") + ' min="0" max="100" step="1" /></div></div><div class="field"><label class="optional">Drop Shadow</label><input type="hexcolor" ' + a("shadow_color") + ' data-alpha="1" maxlength="9" data-optional="1" /></div><div class="field-group" ' + s("shadow_color", "!") + '><div class="field half first"><label class="small">Angle</label><input class="small" type="range" ' + a("shadow_angle") + ' min="0" max="360" step="1" data-status="degrees" /></div><div class="field half"><label class="small">Distance</label><input class="small" type="range" ' + a("shadow_distance") + ' min="0" max="10" step="0.125" data-status /></div><div class="field half first"><label class="small">Size</label><input class="small" type="range" ' + a("shadow_size") + ' min="0" max="10" step="0.125" data-status /></div><div class="field half"><label class="small">Blur</label><input class="small" type="range" ' + a("shadow_blur") + ' min="0" max="10" step="0.125" data-status /></div></div></div><hr /><div class="field-group"><label class="big">Mobile Layout</label><p class="note">' + app.build.messages.mobileLayout + '</p><div class="field" ' + s("style", "!default") + "><label " + o("mobileLayout_mode") + '>Mode</label><div class="select-wrapper"><select ' + a("mobileLayout_mode") + '><option value="normal">Normal</option><option value="background-friendly">Background Friendly</option></select></div><p class="note">Set this to "Background Friendly" if you\'re using a photo as your page background and you don\'t want it obscured by your content.</p></div><div class="field" ' + s({
                    "style!": "default",
                    mobileLayout_mode: "background-friendly"
                }) + '><input type="checkbox" ' + a("mobileLayout_backgroundFriendly_hideOverlay") + " /><label " + o("mobileLayout_backgroundFriendly_hideOverlay") + '>Hide background overlay</label></div><div class="field" ' + s({
                    "style!": "default",
                    mobileLayout_mode: "background-friendly"
                }) + '><input type="checkbox" ' + a("mobileLayout_backgroundFriendly_centerAlign") + " /><label " + o("mobileLayout_backgroundFriendly_centerAlign") + '>Force center alignment</label></div><div class="field-group"><label>Padding</label><div class="field half first"><label class="small" ' + o("mobileLayout_padding_vertical") + '>Vertical</label><input class="small" type="range" ' + a("mobileLayout_padding_vertical") + ' min="0.875" max="5" step="0.125" data-status="rename" data-status-args="' + this.MOBILELAYOUT_PADDING_AUTO + '=Auto" /></div><div class="field half"><label class="small" ' + o("mobileLayout_padding_horizontal") + '>Horizontal</label><input class="small" type="range" ' + a("mobileLayout_padding_horizontal") + ' min="0.875" max="5" step="0.125" data-status="rename" data-status-args="' + this.MOBILELAYOUT_PADDING_AUTO + '=Auto" /></div></div><div class="field" ' + s("style", "!default") + "><label " + o("mobileLayout_margin") + '>Margin</label><input type="range" ' + a("mobileLayout_margin") + ' min="-0.125" max="3" step="0.125" data-status="rename" data-status-args="' + this.MOBILELAYOUT_MARGIN_AUTO + '=Auto" /></div></div></section><section data-title="Animation"><div class="field"><label ' + o("onload_style") + '>On Load</label><p class="note">Performed on the content element (ie. this thing) when your site finishes loading.</p><div class="select-wrapper"><select ' + a("onload_style") + '><option value="none">None</option><option value="fade-in">Fade In</option><option value="fade-up">Fade Up</option><option value="fade-down">Fade Down</option><option value="fade-left">Fade Left</option><option value="fade-right">Fade Right</option><option value="tilt-up">Tilt Up</option><option value="tilt-down">Tilt Down</option><option value="tilt-left">Tilt Left</option><option value="tilt-right">Tilt Right</option><option value="blur-in">Blur In</option><option value="zoom-in">Zoom In</option><option value="zoom-out">Zoom Out</option></select></div></div><div class="field" ' + s("onload_style", "!none") + "><label " + o("onload_delay") + '>Delay</label><input type="range" ' + a("onload_delay") + ' min="0" max="5000" step="125" data-status="seconds" /></div><div class="field" ' + s("onload_style", "!none") + "><label " + o("onload_speed") + '>Duration</label><input type="range" ' + a("onload_speed") + ' min="0" max="5000" step="125" data-status="seconds" /></div><hr /><div class="field"><label ' + o("onloadComponents_style") + '>On Load (elements)</label><p class="note">Performed on each of your elements when your site finishes loading.</p><div class="select-wrapper"><select ' + a("onloadComponents_style") + '><option value="none">None</option><option value="fade-in">Fade In</option><option value="blur-in">Blur In</option><option value="zoom-in">Zoom In</option><option value="zoom-out">Zoom Out</option></select></div></div><div class="field" ' + s("onloadComponents_style", "!none") + "><label " + o("onloadComponents_delay") + '>Delay</label><input type="range" ' + a("onloadComponents_delay") + ' min="0" max="5000" step="125" data-status="seconds" /></div><div class="field" ' + s("onloadComponents_style", "!none") + "><label " + o("onloadComponents_speed") + '>Duration</label><input type="range" ' + a("onloadComponents_speed") + ' min="0" max="5000" step="125" data-status="seconds" /></div><div class="field" ' + s("onloadComponents_style", "!none") + "><label " + o("onloadComponents_stagger") + '>Stagger</label><input type="range" ' + a("onloadComponents_stagger") + ' min="0" max="5000" step="125" data-status="seconds" /></div><hr /><div class="field"><label ' + o("onchangeSections_style") + '>On Section Change</label><p class="note">Performed when changing between sections.</p><div class="select-wrapper"><select ' + a("onchangeSections_style") + '><option value="none">None</option><option value="fade-in">Fade In</option><option value="blur-in">Blur In</option><option value="zoom-in">Zoom In</option><option value="zoom-out">Zoom Out</option></select></div></div><div class="field" ' + s("onchangeSections_style", "!none") + "><label " + o("onchangeSections_speed") + '>Duration</label><input type="range" ' + a("onchangeSections_speed") + ' min="0" max="5000" step="125" data-status="seconds" /></div></section></form>'),
                this.registerProperty("align", {
                    input: "select",
                    live: !0,
                    type: "alpha",
                    allowed: ["left", "center", "right"]
                }), this.registerProperty("padding_vertical", {
                input: "range",
                type: "float"
            }), this.registerProperty("padding_horizontal", {
                input: "range",
                type: "float"
            }), this.registerProperty("margin", {
                input: "range",
                type: "float"
            }), this.registerProperty("position", {
                input: "select",
                type: "word",
                allowed: ["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "center"]
            }), this.registerProperty("cornerRadius", {
                input: "range",
                type: "float"
            }), this.registerProperty("spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("style", {
                input: "select",
                type: "word",
                allowed: ["default", "box", "wide-box", "tall-box"]
            }), this.registerProperty("width", {
                input: "range",
                type: "int"
            }), this.registerProperty("overlap", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("constrain", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("background_style", {
                input: "select",
                type: "word",
                allowed: ["none", "color", "gradient"]
            }), this.registerProperty("background_color", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("background_angle", {
                input: "range",
                type: "int"
            }), this.registerProperty("background_stop1_color", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("background_stop1_position", {
                input: "range",
                type: "int"
            }), this.registerProperty("background_stop2_color", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("background_stop2_position", {
                input: "range",
                type: "int"
            }), this.registerProperty("shadow_color", {
                input: "text",
                type: "htmlacolor",
                optional: !0
            }), this.registerProperty("shadow_angle", {
                input: "range",
                type: "int"
            }), this.registerProperty("shadow_distance", {
                input: "range",
                type: "float"
            }), this.registerProperty("shadow_size", {
                input: "range",
                type: "float"
            }), this.registerProperty("shadow_blur", {
                input: "range",
                type: "float"
            }), this.registerProperty("mobileLayout_mode", {
                input: "select",
                type: "word",
                allowed: ["normal", "background-friendly"]
            }), this.registerProperty("mobileLayout_padding_vertical", {
                input: "range",
                type: "float"
            }), this.registerProperty("mobileLayout_padding_horizontal", {
                input: "range",
                type: "float"
            }), this.registerProperty("mobileLayout_margin", {
                input: "range",
                type: "float"
            }), this.registerProperty("mobileLayout_backgroundFriendly_hideOverlay", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("mobileLayout_backgroundFriendly_centerAlign", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("onload_style", {
                input: "select",
                live: !0,
                allowed: ["none", "fade-in", "fade-up", "fade-down", "fade-left", "fade-right", "tilt-up", "tilt-down", "tilt-left", "tilt-right", "blur-in", "zoom-in", "zoom-out"]
            }), this.registerProperty("onload_delay", {
                input: "range",
                type: "int"
            }), this.registerProperty("onload_speed", {
                input: "range",
                type: "int"
            }), this.registerProperty("onloadComponents_style", {
                input: "select",
                live: !0,
                allowed: ["none", "fade-in", "blur-in", "zoom-in", "zoom-out"]
            }), this.registerProperty("onloadComponents_delay", {
                input: "range",
                type: "int"
            }), this.registerProperty("onloadComponents_speed", {
                input: "range",
                type: "int"
            }), this.registerProperty("onloadComponents_stagger", {
                input: "range",
                type: "int"
            }), this.registerProperty("onchangeSections_style", {
                input: "select",
                live: !0,
                allowed: ["none", "fade-in", "blur-in", "zoom-in", "zoom-out"]
            }), this.registerProperty("onchangeSections_speed", {input: "range", type: "int"})
        }

        var n = e("./component");
        e("./CSSRuleWrapper.js"), e("./CSSStyleSheetWrapper.js");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "content", o.prototype.BASE_SIZE = 18, o.prototype.BASE_SIZE_MIN = 11, o.prototype.MARGIN_AUTO = -.125, o.prototype.MOBILELAYOUT_PADDING_AUTO = .875, o.prototype.MOBILELAYOUT_MARGIN_AUTO = -.125, o.prototype.flexData = {
            default: {
                "top-left": ["column", "flex-start", "flex-start", "center", "center"],
                top: ["column", "center", "flex-start", "center", "center"],
                "top-right": ["column", "flex-end", "flex-start", "center", "center"],
                right: ["column", "flex-end", "center", "center", "center"],
                "bottom-right": ["column", "flex-end", "flex-end", "center", "center"],
                bottom: ["column", "center", "flex-end", "center", "center"],
                "bottom-left": ["column", "flex-start", "flex-end", "center", "center"],
                left: ["column", "flex-start", "center", "center", "center"],
                center: ["column", "center", "center", "center", "center"]
            },
            "wide-box": {
                "top-left": ["column", "stretch", "flex-start", "center", "flex-start"],
                top: ["column", "stretch", "flex-start", "center", "center"],
                "top-right": ["column", "stretch", "flex-start", "center", "flex-end"],
                right: ["column", "stretch", "center", "center", "flex-end"],
                "bottom-right": ["column", "stretch", "flex-end", "center", "flex-end"],
                bottom: ["column", "stretch", "flex-end", "center", "center"],
                "bottom-left": ["column", "stretch", "flex-end", "center", "flex-start"],
                left: ["column", "stretch", "center", "center", "flex-start"],
                center: ["column", "stretch", "center", "center", "center"]
            },
            "tall-box": {
                "top-left": ["row", "stretch", "flex-start", "flex-start", "center"],
                top: ["row", "stretch", "center", "flex-start", "center"],
                "top-right": ["row", "stretch", "flex-end", "flex-start", "center"],
                right: ["row", "stretch", "flex-end", "center", "center"],
                "bottom-right": ["row", "stretch", "flex-end", "flex-end", "center"],
                bottom: ["row", "stretch", "center", "flex-end", "center"],
                "bottom-left": ["row", "stretch", "flex-start", "flex-end", "center"],
                left: ["row", "stretch", "flex-start", "center", "center"],
                center: ["row", "stretch", "center", "center", "center"]
            }
        }, o.prototype.flexValues = function (e, t, i) {
            if (t in this.flexData || (t = "default"), !(i in this.flexData[t]))return {};
            var o = this.flexData[t][i];
            switch (e) {
                case"#wrapper":
                    return {"flex-direction": o[0], "align-items": o[1], "justify-content": o[2]};
                case"#main":
                    return {"align-items": o[3], "justify-content": o[4]}
            }
            return {}
        }, o.prototype.import = function (e) {
            var t = this.importValue;
            this.align = t(e, "align"), this.padding = $.extend(this.padding, e.padding), this.margin = t(e, "margin"), this.position = t(e, "position"), this.cornerRadius = t(e, "cornerRadius"), this.spacing = t(e, "spacing"), this.style = t(e, "style"), this.width = t(e, "width"), this.overlap = t(e, "overlap"), this.constrain = t(e, "constrain"), this.background = $.extend(this.background, e.background), this.shadow = $.extend(this.shadow, e.shadow), this.mobileLayout = $.extend(this.mobileLayout, e.mobileLayout), this.onload = $.extend(this.onload, e.onload), this.onloadComponents = $.extend(this.onloadComponents, e.onloadComponents), this.onchangeSections = $.extend(this.onchangeSections, e.onchangeSections)
        }, o.prototype.cssBase = function (e) {
        }, o.prototype.redraw = function (e) {
            var t, i, o, n, a, s, r = (this.$canvas, this.styleSheet), l = this, p = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (window.setTimeout(function () {
                switch (l.position) {
                    case"left":
                    case"top-left":
                    case"bottom-left":
                        l.site.app.ui.$layer.addClass("is-reversed");
                        break;
                    default:
                        l.site.app.ui.$layer.removeClass("is-reversed")
                }
            }, 0), r.r("#canvas, html").set("font-size", this.BASE_SIZE + "pt"), r.r("#canvas, html", "xlarge").set("font-size", Math.max(this.BASE_SIZE_MIN, Math.floor(.75 * this.BASE_SIZE)) + "pt"), r.r("#canvas, html", "large").set("font-size", Math.max(this.BASE_SIZE_MIN, Math.floor(.75 * this.BASE_SIZE)) + "pt"), r.r("#canvas, html", "medium").set("font-size", Math.max(this.BASE_SIZE_MIN, Math.floor(.65 * this.BASE_SIZE)) + "pt"), r.r("#canvas, html", "small").set("font-size", Math.max(this.BASE_SIZE_MIN, Math.floor(.6 * this.BASE_SIZE)) + "pt"), t = this.flexValues("#wrapper", this.style, this.position), r.r("#--wrapper").set({
                "-webkit-overflow-scrolling": "touch",
                display: "-vendor-flex",
                "-vendor-flex-direction": t["flex-direction"],
                "-vendor-align-items": t["align-items"],
                "-vendor-justify-content": t["justify-content"],
                "min-height": "100vh",
                position: "relative",
                "z-index": "2"
            }), t = this.flexValues("#main", this.style, this.position), r.r("#--main").set({
                display: "-vendor-flex",
                position: "relative",
                "max-width": "100%",
                "z-index": "1",
                "-vendor-align-items": t["align-items"],
                "-vendor-justify-content": t["justify-content"],
                overflow: "hidden"
            }), this.align) {
                case"right":
                    r.r("#--main").set("text-align", "right");
                    break;
                case"left":
                    r.r("#--main").set("text-align", "left");
                    break;
                default:
                case"center":
                    r.r("#--main").set("text-align", "center")
            }
            switch (r.r("#--wrapper").unset(["padding"]), r.r("#--wrapper", "small").unset(["padding", "-vendor-justify-content"]), r.r("#--wrapper", "xsmall").unset(["padding"]), r.r("#--wrapper", "xxsmall").unset(["padding"]), r.r("#--main").unset(["background-color", "background-image", "background-position", "background-repeat", "background-size", "border-radius", "box-shadow"]), r.r("#--main > .--inner").unset(["background-color", "background-image", "background-position", "background-repeat", "background-size", "border-radius", "box-shadow"]), r.r("#--main", "small").unset(["text-align", "-vendor-align-items"]), this.style) {
                case"box":
                    switch (this.background.style) {
                        case"color":
                            r.r("#--main > .--inner").set({"background-color": this.background.color});
                            break;
                        case"gradient":
                            r.r("#--main > .--inner").set({
                                "background-position": "0% 0%",
                                "background-repeat": "repeat",
                                "background-size": "cover",
                                "background-image": "linear-gradient(" + this.background.angle + "deg, " + this.background.stop1.color + " " + this.background.stop1.position + "%, " + this.background.stop2.color + " " + this.background.stop2.position + "%)"
                            })
                    }
                    this.shadow.color && r.r("#--main").set("box-shadow", (Math.cos(this.shadow.angle * Math.PI / 180) * this.shadow.distance).toFixed(2) + "rem " + (Math.sin(this.shadow.angle * Math.PI / 180) * this.shadow.distance).toFixed(2) + "rem " + this.shadow.blur + "rem " + this.shadow.size + "rem " + this.shadow.color);
                    break;
                case"wide-box":
                case"tall-box":
                    switch (this.background.style) {
                        case"color":
                            this.overlapsBackground() ? r.r("#--main").set({"background-color": this.background.color}) : r.r("#--main").set({"background-color": app.htmlaToHtml(this.background.color)});
                            break;
                        case"gradient":
                            r.r("#--main").set({
                                "background-position": "0% 0%",
                                "background-repeat": "repeat",
                                "background-size": "cover"
                            }), this.overlapsBackground() ? r.r("#--main").set({"background-image": "linear-gradient(" + this.background.angle + "deg, " + this.background.stop1.color + " " + this.background.stop1.position + "%, " + this.background.stop2.color + " " + this.background.stop2.position + "%)"}) : r.r("#--main").set({"background-image": "linear-gradient(" + this.background.angle + "deg, " + app.htmlaToHtml(this.background.stop1.color) + " " + this.background.stop1.position + "%, " + app.htmlaToHtml(this.background.stop2.color) + " " + this.background.stop2.position + "%)"})
                    }
                    this.shadow.color && r.r("#--main").set("box-shadow", (Math.cos(this.shadow.angle * Math.PI / 180) * this.shadow.distance).toFixed(2) + "rem " + (Math.sin(this.shadow.angle * Math.PI / 180) * this.shadow.distance).toFixed(2) + "rem " + this.shadow.blur + "rem " + this.shadow.size + "rem " + this.shadow.color)
            }
            switch (this.style) {
                case"box":
                    switch (o = {top: !1, right: !1, bottom: !1, left: !1}, this.position) {
                        case"top-left":
                            o.right = !0, o.bottom = !0;
                            break;
                        case"top":
                            o.left = !0, o.bottom = !0, o.right = !0;
                            break;
                        case"top-right":
                            o.left = !0, o.bottom = !0;
                            break;
                        case"right":
                            o.top = !0, o.left = !0, o.bottom = !0;
                            break;
                        case"bottom-right":
                            o.top = !0, o.left = !0;
                            break;
                        case"bottom":
                            o.left = !0, o.top = !0, o.right = !0;
                            break;
                        case"bottom-left":
                            o.top = !0, o.right = !0;
                            break;
                        case"left":
                            o.top = !0, o.right = !0, o.bottom = !0;
                            break;
                        case"center":
                            o.top = !0, o.right = !0, o.bottom = !0, o.left = !0
                    }
                    a = this.margin != this.MARGIN_AUTO ? this.margin + "rem" : Math.max(.5 * Math.max(this.padding.vertical, this.padding.horizontal), 1) + "rem", t = [];
                    for (i in o)t.push(o[i] ? a : 0);
                    if (r.r("#--wrapper").set("padding", t.join(" ")), this.mobileLayout.margin != this.MOBILELAYOUT_MARGIN_AUTO) {
                        a = (0 == this.mobileLayout.margin ? 0 : Math.min(3, this.mobileLayout.margin + 1)) + "rem", t = [];
                        for (i in o)t.push(o[i] ? a : 0);
                        r.r("#--wrapper", "small").set("padding", t.join(" ")), a = (0 == this.mobileLayout.margin ? 0 : this.mobileLayout.margin) + "rem", t = [];
                        for (i in o)t.push(o[i] ? a : 0);
                        r.r("#--wrapper", "xsmall").set("padding", t.join(" ")), a = (0 == this.mobileLayout.margin ? 0 : Math.max(.5, this.mobileLayout.margin - .5)) + "rem", t = [];
                        for (i in o)t.push(o[i] ? a : 0);
                        r.r("#--wrapper", "xxsmall").set("padding", t.join(" "))
                    }
                    if (this.cornerRadius > 0) {
                        s = this.cornerRadius + "rem", n = {
                            tl: o.top && o.left,
                            tr: o.top && o.right,
                            br: o.bottom && o.right,
                            bl: o.bottom && o.left
                        }, t = [];
                        for (i in n)t.push(n[i] ? s : 0);
                        r.r("#--main").set("border-radius", t.join(" "))
                    }
                    break;
                case"wide-box":
                    switch (o = {top: !1, right: !1, bottom: !1, left: !1}, this.position) {
                        case"top-left":
                        case"top":
                        case"top-right":
                            o.bottom = !0;
                            break;
                        case"left":
                        case"center":
                        case"right":
                            o.top = !0, o.bottom = !0;
                            break;
                        case"bottom-right":
                        case"bottom":
                        case"bottom-left":
                            o.top = !0
                    }
                    a = this.margin != this.MARGIN_AUTO ? this.margin + "rem" : Math.max(.75 * Math.max(this.padding.vertical, this.padding.horizontal), 1) + "rem", t = [];
                    for (i in o)t.push(o[i] ? a : 0);
                    if (r.r("#--wrapper").set("padding", t.join(" ")), this.mobileLayout.margin != this.MOBILELAYOUT_MARGIN_AUTO) {
                        a = (0 == this.mobileLayout.margin ? 0 : Math.min(3, this.mobileLayout.margin + 1)) + "rem", t = [];
                        for (i in o)t.push(o[i] ? a : 0);
                        r.r("#--wrapper", "small").set("padding", t.join(" ")), a = (0 == this.mobileLayout.margin ? 0 : this.mobileLayout.margin) + "rem", t = [];
                        for (i in o)t.push(o[i] ? a : 0);
                        r.r("#--wrapper", "xsmall").set("padding", t.join(" ")), a = (0 == this.mobileLayout.margin ? 0 : Math.max(.5, this.mobileLayout.margin - .5)) + "rem", t = [];
                        for (i in o)t.push(o[i] ? a : 0);
                        r.r("#--wrapper", "xxsmall").set("padding", t.join(" "))
                    }
                    break;
                case"tall-box":
                    switch (o = {top: !1, right: !1, bottom: !1, left: !1}, this.position) {
                        case"top-right":
                        case"right":
                        case"bottom-right":
                            o.left = !0;
                            break;
                        case"top-left":
                        case"left":
                        case"bottom-left":
                            o.right = !0;
                            break;
                        case"top":
                        case"center":
                        case"bottom":
                            o.left = !0, o.right = !0
                    }
                    a = this.margin != this.MARGIN_AUTO ? this.margin + "rem" : Math.max(.75 * Math.max(this.padding.vertical, this.padding.horizontal), 1) + "rem", t = [];
                    for (i in o)t.push(o[i] ? a : 0);
                    if (r.r("#--wrapper").set("padding", t.join(" ")), this.mobileLayout.margin != this.MOBILELAYOUT_MARGIN_AUTO) {
                        a = (0 == this.mobileLayout.margin ? 0 : Math.min(3, this.mobileLayout.margin + 1)) + "rem", t = [];
                        for (i in o)t.push(o[i] ? a : 0);
                        r.r("#--wrapper", "small").set("padding", t.join(" ")), a = (0 == this.mobileLayout.margin ? 0 : this.mobileLayout.margin) + "rem", t = [];
                        for (i in o)t.push(o[i] ? a : 0);
                        r.r("#--wrapper", "xsmall").set("padding", t.join(" ")), a = (0 == this.mobileLayout.margin ? 0 : Math.max(.5, this.mobileLayout.margin - .5)) + "rem", t = [];
                        for (i in o)t.push(o[i] ? a : 0);
                        r.r("#--wrapper", "xxsmall").set("padding", t.join(" "))
                    }
                    break;
                case"default":
            }
            var d, c, u, h, m, g;
            switch (d = this.padding.vertical, this.mobileLayout.padding.vertical != this.MOBILELAYOUT_PADDING_AUTO ? (u = this.mobileLayout.padding.vertical, m = .75 * this.mobileLayout.padding.vertical) : (u = Math.min(3.5, this.padding.vertical), m = .75 * Math.min(3.5, this.padding.vertical)), c = this.padding.horizontal, this.mobileLayout.padding.horizontal != this.MOBILELAYOUT_PADDING_AUTO ? (h = this.mobileLayout.padding.horizontal, g = .75 * this.mobileLayout.padding.horizontal) : (h = Math.min(2, this.padding.horizontal), g = .75 * Math.min(2, this.padding.horizontal)), r.r("#--main > .--inner", "xxlarge").unset("width"), r.r("#--main > .--inner", "large").unset("width"), r.r("#--main > .--inner", "xmedium").unset("width"), r.r("#--main > .--inner .placeholder span", "xxlarge").unset("max-height"), r.r("#--main > .--inner .placeholder span", "large").unset("max-height"), r.r("#--main > .--inner .placeholder span", "xmedium").unset("max-height"), r.r("#--main > .--inner").set("overflow", "hidden"), r.r("#--main > .--inner").set("position", "relative"), r.r("#--main > .--inner").set("z-index", "1"), r.r("#--main > .--inner").set("padding", d + "rem " + c + "rem"), r.r("#--main > .--inner", "small").set("padding", u + "rem " + h + "rem"), r.r("#--main > .--inner", "xxsmall").set("padding", m + "rem " + g + "rem"), r.r("#--main > .--inner").set("max-width", "100%"), this.style) {
                case"tall-box":
                    r.r("#--main > .--inner").set("width", this.normalizedWidth() + "rem"), r.r("#--main > .--inner", "xxlarge").set("width", this.normalizedWidth("xxlarge") + "rem"), r.r("#--main > .--inner", "large").set("width", this.normalizedWidth("large") + "rem"), r.r("#--main > .--inner", "xmedium").set("width", this.normalizedWidth("xmedium") + "rem"), r.r("#--main > .--inner .placeholder span").set("max-height", Math.min(30, this.normalizedWidth() - 2 * c) + "rem"), r.r("#--main > .--inner .placeholder span", "xxlarge").set("max-height", Math.min(30, this.normalizedWidth("xxlarge") - 2 * c) + "rem"), r.r("#--main > .--inner .placeholder span", "large").set("max-height", Math.min(30, this.normalizedWidth("large") - 2 * c) + "rem"), r.r("#--main > .--inner .placeholder span", "xmedium").set("max-height", Math.min(30, this.normalizedWidth("xmedium") - 2 * c) + "rem"), r.r("#--main > .--inner .placeholder span", "small").set("max-height", Math.min(20, this.normalizedWidth("small") - 2 * h) + "rem"), r.r("#--main > .--inner .placeholder span", "xxsmall").set("max-height", Math.min(15, this.normalizedWidth("xxsmall") - 2 * g) + "rem");
                    break;
                default:
                    r.r("#--main > .--inner").set("width", 100 == this.width ? "100vw" : this.width + "rem"), r.r("#--main > .--inner .placeholder span").set("max-height", Math.min(30, this.width - 2 * c) + "rem"), r.r("#--main > .--inner .placeholder span", "small").set("max-height", Math.min(20, this.width - 2 * h) + "rem"), r.r("#--main > .--inner .placeholder span", "xxsmall").set("max-height", Math.min(15, this.width - 2 * g) + "rem")
            }
            switch (r.r("#--main > .--inner > .flush").set({
                "margin-left": "calc(" + c * -1 + "rem - 1px)",
                width: "calc(100% + " + 2 * c + "rem + 2px)",
                "max-width": "calc(100% + " + 2 * c + "rem + 2px)"
            }), r.r("#--main > .--inner > .flush:first-child").set({"margin-top": d * -1 + "rem"}), r.r("#--main > .--inner > .flush:last-child").set({"margin-bottom": d * -1 + "rem"}), r.r("#--main > .--inner > .flush", "small").set({
                "margin-left": "calc(" + h * -1 + "rem - 1px)",
                width: "calc(100% + " + 2 * h + "rem + 2px)",
                "max-width": "calc(100% + " + 2 * h + "rem + 2px)"
            }), r.r("#--main > .--inner > .flush:first-child", "small").set({"margin-top": u * -1 + "rem"}), r.r("#--main > .--inner > .flush:last-child", "small").set({"margin-bottom": u * -1 + "rem"}), r.r("#--main > .--inner > .flush", "xxsmall").set({
                "margin-left": "calc(" + g * -1 + "rem - 1px)",
                width: "calc(100% + " + 2 * g + "rem + 2px)",
                "max-width": "calc(100% + " + 2 * g + "rem + 2px)"
            }), r.r("#--main > .--inner > .flush:first-child", "xxsmall").set({"margin-top": m * -1 + "rem"}), r.r("#--main > .--inner > .flush:last-child", "xxsmall").set({"margin-bottom": m * -1 + "rem"}), r.r("#--main > .--inner > *").set("padding-top", .5 * this.spacing + "rem"), r.r("#--main > .--inner > *").set("padding-bottom", .5 * this.spacing + "rem"), r.r("#--main > .--inner > :first-child").set("margin-top", this.spacing * -.5 + "rem"), r.r("#--main > .--inner > :last-child").set("margin-bottom", this.spacing * -.5 + "rem"), r.r("#--main > .--inner > .flush:first-child").set({"margin-top": this.spacing * -.5 - d + "rem"}), r.r("#--main > .--inner > .flush:last-child").set({"margin-bottom": this.spacing * -.5 - d + "rem"}), r.r("#--main > .--inner > .flush:first-child", "small").set({"margin-top": this.spacing * -.5 - u + "rem"}), r.r("#--main > .--inner > .flush:last-child", "small").set({"margin-bottom": this.spacing * -.5 - u + "rem"}), r.r("#--main > .--inner > .flush:first-child", "xxsmall").set({"margin-top": this.spacing * -.5 - m + "rem"}), r.r("#--main > .--inner > .flush:last-child", "xxsmall").set({"margin-bottom": this.spacing * -.5 - m + "rem"}), r.r("#--main > .--inner > :first-child > * > *").set("margin-top", "0"), r.r("#--main > .--inner > :last-child > * > *").set("margin-bottom", "0"), r.unsetAll("#canvas.backgroundFriendly #--body", "medium"), r.unsetAll("#canvas.backgroundFriendly #--body:before", "medium"), r.unsetAll("#canvas.backgroundFriendly.centerAlign #--main", "medium"), r.unsetAll("#canvas.backgroundFriendly #--main", "medium"), r.unsetAll("#canvas.backgroundFriendly #--main", "small"), r.unsetAll("#canvas.backgroundFriendly #--wrapper", "medium"), "default" != this.style && "background-friendly" == this.mobileLayout.mode ? (this.site.app.canvas.$layer.addClass("backgroundFriendly"), this.mobileLayout.backgroundFriendly.hideOverlay ? this.site.app.canvas.$layer.addClass("hideOverlay") : this.site.app.canvas.$layer.removeClass("hideOverlay"), this.mobileLayout.backgroundFriendly.centerAlign ? this.site.app.canvas.$layer.addClass("centerAlign") : this.site.app.canvas.$layer.removeClass("centerAlign")) : this.site.app.canvas.$layer.removeClass("backgroundFriendly").removeClass("hideOverlay").removeClass("centerAlign"), r.r("#canvas.backgroundFriendly #--body", "medium").set({
                display: "-vendor-flex",
                "-vendor-flex-direction": "column"
            }), r.r("#canvas.backgroundFriendly #--body:before", "medium").set({
                position: "relative",
                width: "100%",
                height: "45vh",
                "-vendor-flex-grow": "1",
                "-vendor-flex-shrink": "0"
            }), r.r("#canvas.backgroundFriendly #--main", "medium").set({
                width: "100%",
                "border-radius": "0",
                "box-shadow": "none"
            }), r.r("#canvas.backgroundFriendly #--main > .--inner", "medium").set({
                width: "auto",
                "max-width": "75%"
            }), r.r("#canvas.backgroundFriendly #--main > .--inner", "small").set({"max-width": "100%"}), r.r("#canvas.backgroundFriendly.centerAlign #--main", "medium").set({
                "text-align": "center",
                "-vendor-align-items": "center",
                "-vendor-justify-content": "center"
            }), this.background.style) {
                case"color":
                    r.r("#canvas.backgroundFriendly #--main", "medium").set({"background-color": app.htmlaToHtml(this.background.color)}), r.r("#canvas.backgroundFriendly #--body", "medium").set({"background-color": app.htmlaToHtml(this.background.color)});
                    break;
                case"gradient":
                    r.r("#canvas.backgroundFriendly #--main", "medium").set({"background-image": "linear-gradient(" + this.background.angle + "deg, " + app.htmlaToHtml(this.background.stop1.color) + " " + this.background.stop1.position + "%, " + app.htmlaToHtml(this.background.stop2.color) + " " + this.background.stop2.position + "%)"}), r.r("#canvas.backgroundFriendly #--body", "medium").set({"background-color": this.background.angle >= 235 || this.background.angle <= 90 ? app.htmlaToHtml(this.background.stop1.color) : app.htmlaToHtml(this.background.stop2.color)})
            }
            r.r("#canvas.backgroundFriendly #--wrapper", "medium").set({
                height: "auto",
                "min-height": "0",
                padding: "0"
            }), r.r("#--main").unset(["-vendor-transition", "-vendor-transform", "-vendor-transform-origin"]), r.r("#--body.is-loading #--main").unset(["opacity", "-vendor-transform", "-vendor-filter"]), r.r("#canvas.backgroundFriendly #--body.is-loading #--main", "medium").unset(["-vendor-transform", "opacity"]), r.r("#canvas.backgroundFriendly #--main > .--inner", "medium").unset(["-vendor-transition"]), r.r("#canvas.backgroundFriendly #--body.is-loading #--main > .--inner", "medium").unset(["opacity"]), r.r("#--body.is-loading #--main").set({
                "-vendor-animation": "none",
                "-vendor-transition": "none"
            }), r.r("#--body:not(.is-playing) #--main").set({
                "-vendor-transition": "none",
                "-vendor-transform": "none",
                "-vendor-transform-origin": "50% 50% 0"
            }), r.r("#canvas.backgroundFriendly #--body.is-loading #--main > .--inner", "medium").set({
                "-vendor-transition": "none",
                "-vendor-transform": "none",
                "-vendor-transform-origin": "50% 50% 0"
            });
            var f = this.onload.speed / 1e3, y = this.onload.delay / 1e3, v = 15, b = "1000px";
            switch (this.onload.style) {
                case"fade-in":
                    r.r("#--main").set({"-vendor-transition": "opacity " + f + "s ease-in-out " + y + "s"}), r.r("#--body.is-loading #--main").set({opacity: "0"});
                    break;
                case"fade-up":
                    r.r("#--main").set({"-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-transform " + f + "s ease " + y + "s"}), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-transform": "translateY(1.5rem)"
                    });
                    break;
                case"fade-down":
                    r.r("#--main").set({"-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-transform " + f + "s ease " + y + "s"}), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-transform": "translateY(-1.5rem)"
                    });
                    break;
                case"fade-left":
                    r.r("#--main").set({"-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-transform " + f + "s ease " + y + "s"}), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-transform": "translateX(1.5rem)"
                    });
                    break;
                case"fade-right":
                    r.r("#--main").set({"-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-transform " + f + "s ease " + y + "s"}), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-transform": "translateX(-1.5rem)"
                    });
                    break;
                case"tilt-up":
                    r.r("#--main").set({
                        "-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-transform " + f + "s ease " + y + "s",
                        "-vendor-transform": "perspective(" + b + ") rotateX(0deg)",
                        "-vendor-transform-origin": "50% 50%"
                    }), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-transform": "perspective(" + b + ") rotateX(" + v + "deg)"
                    });
                    break;
                case"tilt-down":
                    r.r("#--main").set({
                        "-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-transform " + f + "s ease " + y + "s",
                        "-vendor-transform": "perspective(" + b + ") rotateX(0deg)",
                        "-vendor-transform-origin": "50% 50%"
                    }), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-transform": "perspective(" + b + ") rotateX(-" + v + "deg)"
                    });
                    break;
                case"tilt-left":
                    r.r("#--main").set({
                        "-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-transform " + f + "s ease " + y + "s",
                        "-vendor-transform": "perspective(" + b + ") rotateY(0deg)",
                        "-vendor-transform-origin": "50% 50%"
                    }), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-transform": "perspective(" + b + ") rotateY(-" + v + "deg)"
                    });
                    break;
                case"tilt-right":
                    r.r("#--main").set({
                        "-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-transform " + f + "s ease " + y + "s",
                        "-vendor-transform": "perspective(" + b + ") rotateY(0deg)",
                        "-vendor-transform-origin": "50% 50%"
                    }), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-transform": "perspective(" + b + ") rotateY(" + v + "deg)"
                    });
                    break;
                case"blur-in":
                    r.r("#--main").set({"-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-filter " + f + "s ease " + y + "s"}), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-filter": "blur(2px)"
                    });
                    break;
                case"zoom-in":
                    r.r("#--main").set({"-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-transform " + f + "s ease " + y + "s"}), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-transform": "scale(0.975)"
                    });
                    break;
                case"zoom-out":
                    r.r("#--main").set({"-vendor-transition": "opacity " + f + "s ease " + y + "s,-vendor-transform " + f + "s ease " + y + "s"}), r.r("#--body.is-loading #--main").set({
                        opacity: "0",
                        "-vendor-transform": "scale(1.075)"
                    });
                    break;
                case"none":
            }
            switch (this.onload.style) {
                case"fade-up":
                case"fade-down":
                case"fade-left":
                case"fade-right":
                case"tilt-up":
                case"tilt-down":
                case"tilt-left":
                case"tilt-right":
                case"blur-in":
                case"zoom-in":
                case"zoom-out":
                    r.r("#canvas.backgroundFriendly #--body.is-loading #--main", "medium").set({
                        "-vendor-transform": "none",
                        opacity: "1"
                    }), r.r("#canvas.backgroundFriendly #--main > .--inner", "medium").set({"-vendor-transition": "opacity " + f + "s ease-in-out " + y + "s"}), r.r("#canvas.backgroundFriendly #--body.is-loading #--main > .--inner", "medium").set({opacity: "0"});
                    break;
                case"none":
            }
            r.r("#--body.is-loading #--main > .--inner > *").set({
                "-vendor-animation": "none",
                "-vendor-transition": "none"
            });
            var w, x = 30;
            for (r.r("#--main > .--inner > *").unset(["-vendor-transition"]), r.r("#--body.is-loading #--main > .--inner > *").unset(["opacity", "-vendor-transform", "-vendor-filter"]), w = 0; w < x; w += 2)r.r("#--main > .--inner > :nth-child(" + w + ")").unset(["-vendor-transition-delay"]);
            var f = this.onloadComponents.speed / 1e3, y = this.onloadComponents.delay / 1e3,
                k = this.onloadComponents.stagger / 1e3;
            switch (this.onloadComponents.style) {
                case"fade-in":
                    r.r("#--main > .--inner > *").set({"-vendor-transition": "opacity " + f + "s ease-in-out " + y + "s"}), r.r("#--body.is-loading #--main > .--inner > *").set({opacity: "0"});
                    break;
                case"blur-in":
                    r.r("#--main > .--inner > *").set({"-vendor-transition": "opacity " + f + "s ease-in-out " + y + "s,-vendor-filter " + f + "s ease-in-out " + y + "s"}), r.r("#--body.is-loading #--main > .--inner > *").set({
                        opacity: "0",
                        "-vendor-filter": "blur(2px)"
                    });
                    break;
                case"zoom-in":
                    r.r("#--main > .--inner > *").set({"-vendor-transition": "opacity " + f + "s ease-in-out " + y + "s,-vendor-transform " + f + "s ease-in-out " + y + "s"}), r.r("#--body.is-loading #--main > .--inner > *").set({
                        opacity: "0",
                        "-vendor-transform": "scale(0.975)"
                    });
                    break;
                case"zoom-out":
                    r.r("#--main > .--inner > *").set({"-vendor-transition": "opacity " + f + "s ease-in-out " + y + "s,-vendor-transform " + f + "s ease-in-out " + y + "s"}), r.r("#--body.is-loading #--main > .--inner > *").set({
                        opacity: "0",
                        "-vendor-transform": "scale(1.075)"
                    });
                    break;
                case"none":
            }
            if ("none" != this.onloadComponents.style && this.onloadComponents.stagger > 0)for (w = 0; w < x; w += 2)r.r("#--main > .--inner > :nth-child(" + w + ")").set("-vendor-transition-delay", y + k * ((w - 2) / 2) + "s");
            var _, w, C;
            if (!e || "style" == e || "position" == e || "overlap" == e || "constrain" == e || "width" == e)if (r.r("#--body:before").unset("width"), r.r("#--body:before", "xxlarge").unset("width"), r.r("#--body:before", "large").unset("width"), r.r("#--body:before", "xmedium").unset("width"), this.overlapsBackground()) r.r("#--body:before").set({
                width: "100vw",
                left: "0",
                right: "auto"
            }); else switch (r.r("#--body:before").set("width", "calc(100vw - " + this.normalizedWidth() + "rem)"), r.r("#--body:before", "xxlarge").set("width", "calc(100vw - " + this.normalizedWidth("xxlarge") + "rem)"), r.r("#--body:before", "large").set("width", "calc(100vw - " + this.normalizedWidth("large") + "rem)"), r.r("#--body:before", "xmedium").set("width", "calc(100vw - " + this.normalizedWidth("xmedium") + "rem)"), this.position) {
                case"top-left":
                case"left":
                case"bottom-left":
                    r.r("#--body:before").set({left: "auto", right: "0"});
                    break;
                case"top-right":
                case"right":
                case"bottom-right":
                    r.r("#--body:before").set({left: "0", right: "auto"})
            }
            for (w in this.site.components) {
                _ = this.site.components[w];
                for (C in _.contentDependencies)p([C], function () {
                    var e;
                    for (e in _.contentDependencies[C])_.redraw(_.contentDependencies[C][e])
                })
            }
        }, o.prototype.isAnimated = function () {
            return this.onload && this.onload.style && "none" != this.onload.style || this.onloadComponents && this.onloadComponents.style && "none" != this.onloadComponents.style
        }, o.prototype.overlapsBackground = function () {
            return "tall-box" != this.style || "top" == this.position || "center" == this.position || "bottom" == this.position || 0 != this.overlap
        }, o.prototype.constrainsWidth = function () {
            return "tall-box" == this.style && "top" != this.position && "center" != this.position && "bottom" != this.position && 1 == this.constrain
        }, o.prototype.normalizedWidth = function (e) {
            if (this.constrainsWidth())switch (e) {
                default:
                    return Math.min(50, this.width);
                case"xxlarge":
                    return Math.min(40, this.width);
                case"large":
                    return Math.min(30, this.width);
                case"xmedium":
                    return Math.min(25, this.width)
            }
            return this.width
        }, t.exports = o
    }, {"./CSSRuleWrapper.js": 2, "./CSSStyleSheetWrapper.js": 3, "./component": 7}], 9: [function (e, t, i) {
        function o(e, t) {
            this.mode = null, this.margin = null, this.sectionBreak = {name: null}, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><div class="field"><label ' + o("mode") + '>Type</label><div class="select-wrapper"><select ' + a("mode") + '><option value="section-break">Section Break</option><option value="header-marker">Header Marker</option><option value="footer-marker">Footer Marker</option></select></div><p class="note" ' + s("mode", "section-break") + '>Sets a section break. Everything <em>after</em> this point (up to either another break, a footer marker, or the end of the site) will be treated as a hidden section you can link to using a named anchor, eg. <code>#contact</code>.</p><p class="note" ' + s("mode", "section-break") + '>Note: when using section breaks, everything <em>before</em> your first break will be auto-assigned to a special section named <code>#home</code> that is visible by default.</p><p class="note" ' + s("mode", "header-marker") + '>Marks where the header ends. When used with section breaks, everything <em>before</em> this point will remain visible regardless of which section is visible.</p><p class="note" ' + s("mode", "footer-marker") + '>Marks where the footer begins. When used with section breaks, everything <em>after</em> this point will remain visible regardless of which section is visible.</p></div><hr /><div class="field-group" ' + s({mode: ["header-marker", "footer-marker"]}) + '><div class="field"><label ' + o("margin") + '>Margin</label><input type="range" ' + a("margin") + ' min="0" max="5" step="0.125" data-status /></div></div><div class="field-group" ' + s("mode", "section-break") + '><div class="field"><label>Name</label><div class="input-wrapper prefix hash"><input type="text" ' + a("sectionBreak_name") + ' maxlength="32" /></div><p class="note">The name of the section below this break. Once set, you can link to it anywhere URLs are permitted using its hash-prefixed name, eg. <code>#about</code>.</p></div></div></form>'), this.registerProperty("mode", {
                input: "text",
                type: "word",
                allowed: ["section-break", "header-marker", "footer-marker"]
            }), this.registerProperty("margin", {
                input: "range",
                type: "float"
            }), this.registerProperty("sectionBreak_name", {
                input: "text",
                type: "id"
            })
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "control", o.prototype.contentDependencies = {}, o.prototype.import = function (e) {
            var t = this.importValue;
            this.mode = t(e, "mode"), this.margin = t(e, "margin"), this.sectionBreak = $.extend(this.sectionBreak, e.sectionBreak)
        }, o.prototype.export = function (e) {
            e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.mode = this.mode, i.margin = this.margin, i.sectionBreak = JSON.parse(JSON.stringify(this.sectionBreak)), i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
        }, o.prototype.redraw = function (e) {
            var t, i, o = this.styleSheet;
            switch (this.mode) {
                case"section-break":
                    i = this.sectionBreak.name ? "#" + this.sectionBreak.name : "(untitled)";
                    break;
                case"header-marker":
                    i = "Header";
                    break;
                case"footer-marker":
                    i = "Footer";
                    break;
                default:
                    i = "???"
            }
            switch (this.$canvas.html('<div class="--control ' + this.mode + '" id="--' + this.id + '"><span class="x">&nbsp;</span><span class="label">' + i + '</span><span class="y">&nbsp;</span></div>'), t = this.selector(), o.unsetAll(t), this.mode) {
                case"header-marker":
                    this.margin > 0 && o.r(t).set("margin-bottom", this.margin + "rem");
                    break;
                case"footer-marker":
                    this.margin > 0 && o.r(t).set("margin-top", this.margin + "rem")
            }
        }, t.exports = o
    }, {"./component": 7}], 10: [function (e, t, i) {
        function o(e, t) {
            this.color = null, this.thickness = null, this.spacing = null, this.width = null, this.style = null, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            };
            this.form('<form><div class="field"><label ' + o("color") + '>Color</label><input type="hexcolor" data-alpha="1" ' + a("color") + ' maxlength="9" /></div><div class="field"><label ' + o("style") + '>Style</label><div class="select-wrapper"><select ' + a("style") + '><option value="single">Single</option><option value="double">Double</option></select></div></div><div class="field"><label ' + o("width") + '>Width</label><input type="range" ' + a("width") + ' min="2" max="100" step="1" data-status /></div><div class="field"><label ' + o("thickness") + '>Thickness</label><input type="range" ' + a("thickness") + ' min="1" max="5" step="1" data-status /></div><div class="field"><label ' + o("spacing") + '>Spacing</label><input type="range" ' + a("spacing") + ' min="0.5" max="8" step="0.125" data-status /></div></form>'), this.registerProperty("color", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "columns", property: "colorBorder"}, {
                    type: "form",
                    property: "input_colorBG",
                    condition: function (e) {
                        return "outline" == e.input.style
                    }
                }, {
                    type: "buttons", property: "colorBG", condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorBG", condition: function (e) {
                        return "outline" == e.style
                    }
                }, {type: "text", property: "color"}, {type: "*", property: "color"}, {
                    type: "icons",
                    property: "colorFG",
                    condition: function (e) {
                        return "default" == e.style || "outline" == e.style
                    }
                }]
            }), this.registerProperty("thickness", {
                input: "range",
                type: "int"
            }), this.registerProperty("spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("width", {
                input: "range",
                type: "int"
            }), this.registerProperty("style", {input: "select", live: !0, type: "word", allowed: ["single", "double"]})
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "divider", o.prototype.contentDependencies = {}, o.prototype.import = function (e) {
            var t = this.importValue;
            this.color = t(e, "color"), this.thickness = t(e, "thickness"), this.spacing = t(e, "spacing"), this.width = t(e, "width"), this.style = t(e, "style")
        }, o.prototype.export = function (e) {
            e.color = this.color, e.thickness = this.thickness, e.spacing = this.spacing, e.width = this.width, e.style = this.style, e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.color = this.color, i.thickness = this.thickness, i.spacing = this.spacing, i.width = this.width, i.style = this.style, i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--hr").set("width", "100%"), e.r(".--hr").set("position", "relative"), e.r(".--hr").set("padding", "0"), e.r(".--hr").set("border", "0"), e.r(".--hr:before").set("content", "''"), e.r(".--hr:before").set("display", "inline-block"), e.r(".--hr:before").set("vertical-align", "middle")
        }, o.prototype.redraw = function (e) {
            var t, i = this.styleSheet, o = this, n = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (n(["content"], function () {
                o.$canvas.html('<div class="--hr" id="--' + o.id + '"></div>')
            }), t = this.selector(), i.unsetAll(t), i.r(t).set("height", this.spacing + "rem"), i.r(t).set("line-height", this.spacing + "rem"), i.r(t, "small").set("height", Math.min(2, this.spacing) + "rem"), i.r(t, "small").set("line-height", Math.min(2, this.spacing) + "rem"), i.r(t + ":before").set("width", this.width + "%"), this.style) {
                case"double":
                    i.r(t + ":before").set("border-top", "solid " + this.thickness + "px " + this.color), i.r(t + ":before").set("border-bottom", "solid " + this.thickness + "px " + this.color), i.r(t + ":before").set("height", 4 * this.thickness + "px");
                    break;
                case"single":
                default:
                    i.r(t + ":before").set("background-color", this.color), i.r(t + ":before").set("height", this.thickness + "px")
            }
        }, t.exports = o
    }, {"./component": 7}], 11: [function (e, t, i) {
        function o(e, t) {
            this.width = null, this.successMessage = null, this.mode = null, this.input = {
                style: null,
                cornerRadius: null,
                height: null,
                textareaHeight: null,
                appearance: null,
                colorFG: null,
                colorBG: null,
                colorFocus: null,
                font: null,
                kerning: null,
                size: null,
                weight: null
            }, this.button = {
                label: null,
                style: null,
                cornerRadius: null,
                height: null,
                appearance: null,
                colorFG: null,
                colorBG: null,
                colorHover: null,
                font: null,
                kerning: null,
                size: null,
                weight: null
            }, this.contact = {
                email: null,
                showPhone: null,
                showSubject: null,
                nameLabel: null,
                emailLabel: null,
                phoneLabel: null,
                subjectLabel: null,
                messageLabel: null
            }, this.mailchimpSignup = {
                style: null,
                APIKey: null,
                listId: null,
                nameLabel: null,
                firstnameLabel: null,
                lastnameLabel: null,
                emailLabel: null,
                doubleOptIn: null
            }, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><section data-title="General"><div class="field"><label ' + o("mode") + '>Type</label><div class="select-wrapper"><select ' + a("mode") + '><option value="contact">Contact</option><option value="mailchimp-signup">MailChimp Signup</option></select></div></div><hr /><div class="field-group" ' + s("mode", "contact") + '><div class="field"><label ' + o("contact_email") + ' class="optional">Recipient Email</label><input type="text" ' + a("contact_email") + ' maxlength="128" /><p class="note">The recipient email for this form\'s messages. Leave blank to use your Carrd account email.</p></div><label>Extra Fields</label><div class="field"><input type="checkbox" ' + a("contact_showPhone") + " /><label " + o("contact_showPhone") + '>Phone Number</label></div><div class="field"><input type="checkbox" ' + a("contact_showSubject") + " /><label " + o("contact_showSubject") + '>Subject</label></div></div><div class="field-group" ' + s("mode", "mailchimp-signup") + '><div class="field"><label ' + o("mailchimpSignup_style") + '>Style</label><div class="select-wrapper"><select ' + a("mailchimpSignup_style") + '><option value="minimal">Email (Minimal)</option><option value="simple">Email</option><option value="standard">Name + Email</option><option value="full">First, Last Name + Email</option></select></div></div><div class="field"><label ' + o("mailchimpSignup_APIKey") + '>API Key</label><input type="text" ' + a("mailchimpSignup_APIKey") + ' maxlength="128" /><p class="note">Your MailChimp account\'s <a href="http://kb.mailchimp.com/accounts/management/about-api-keys" target="_blank">API key</a>.</p></div><div class="field"><label ' + o("mailchimpSignup_listId") + '>List ID</label><input type="text" ' + a("mailchimpSignup_listId") + ' maxlength="128" /><p class="note">The <a href="http://kb.mailchimp.com/lists/managing-subscribers/find-your-list-id" target="_blank">unique ID</a> of your MailChimp mailing list.</p></div><div class="field"><input type="checkbox" ' + a("mailchimpSignup_doubleOptIn") + " /><label " + o("mailchimpSignup_doubleOptIn") + '>Require double opt-in</label><p class="note"><a href="http://kb.mailchimp.com/lists/signup-forms/understanding-the-double-opt-in-process" target="_blank">Recommended</a> by MailChimp. Improves open rates and lowers bounce and unsubscribe rates.</p></div></div><hr /><div class="field"><label ' + o("width") + '>Width</label><input type="range" ' + a("width") + ' min="15" max="100" step="1" data-status /></div><div class="field"><label ' + o("successMessage") + '>Completion Message</label><div class="textarea-wrapper"><textarea ' + a("successMessage") + ' maxlength="1024" data-autosize></textarea></div><p class="note">Tip: Set this to a valid URL or section break name to redirect the user to another page or section on completion.</p></div></section><section data-title="Fields"><div class="field"><label ' + o("input_style") + '>Style</label><div class="select-wrapper"><select ' + a("input_style") + '><option value="outline">Outline</option><option value="solid">Solid</option></select></div></div><div class="field"><label ' + o("input_cornerRadius") + '>Corner Radius</label><input type="range" ' + a("input_cornerRadius") + ' min="0" max="2" step="0.125" data-status /></div><div class="field"><label ' + o("input_height") + '>Height</label><input type="range" ' + a("input_height") + ' min="1.5" max="5" step="0.125" data-status /></div><div class="field"><label ' + o("input_textareaHeight") + '>Textarea Height</label><input type="range" ' + a("input_textareaHeight") + ' min="8" max="20" step="1" data-status /></div><div class="field"><label ' + o("input_spacing") + '>Spacing</label><input type="range" ' + a("input_spacing") + ' min="0" max="2" step="0.125" data-status /></div><hr /><div class="field"><label ' + o("input_font") + '>Font</label><div class="select-wrapper"><select ' + a("input_font") + ">" + function () {
                    var e, t = app.build.fonts.list, i = "";
                    for (e in t)i += '<option value="' + t[e].name + '">' + t[e].name + "</option>";
                    return i
                }() + '</select></div></div><div class="field"><label ' + o("input_colorFG") + '>Text Color</label><input type="hexcolor" data-alpha="1" ' + a("input_colorFG") + ' maxlength="9" /></div><div class="field"><label ' + o("input_colorBG") + '>Field Color</label><input type="hexcolor" data-alpha="1" ' + a("input_colorBG") + ' maxlength="9" /></div><div class="field"><label ' + o("input_colorFocus") + '>Focus Color</label><input type="hexcolor" data-alpha="1" ' + a("input_colorFocus") + ' maxlength="9" data-optional="1" /></div><div class="field"><label ' + o("input_weight") + '>Weight</label><input type="range" ' + a("input_weight") + ' min="100" max="900" step="100" data-status="font-weight" /></div><div class="field"><label ' + o("input_size") + '>Size</label><input type="range" ' + a("input_size") + ' min="0.5" max="4" step="0.125" data-status /></div><div class="field"><label ' + o("input_kerning") + '>Letter Spacing</label><input type="range" ' + a("input_kerning") + ' min="-0.5" max="1.5" step="0.025" data-status /></div><div class="field"><label ' + o("input_appearance") + '>Appearance</label><div class="select-wrapper"><select ' + a("input_appearance") + '><option value="normal">Normal</option><option value="lowercase">Lowercase</option><option value="uppercase">Uppercase</option><option value="smallcaps">Small Caps</option></select></div></div><hr /><div ' + s("mode", "contact") + '><div class="field"><label ' + o("contact_nameLabel") + '>Name Label</label><input type="text" ' + a("contact_nameLabel") + ' maxlength="64" /></div><div class="field"><label ' + o("contact_emailLabel") + '>Email Label</label><input type="text" ' + a("contact_emailLabel") + ' maxlength="64" /></div><div class="field" ' + s("contact_showPhone", "on") + "><label " + o("contact_phoneLabel") + '>Phone Number Label</label><input type="text" ' + a("contact_phoneLabel") + ' maxlength="64" /></div><div class="field" ' + s("contact_showSubject", "on") + "><label " + o("contact_subjectLabel") + '>Subject Label</label><input type="text" ' + a("contact_subjectLabel") + ' maxlength="64" /></div><div class="field"><label ' + o("contact_messageLabel") + '>Message Label</label><input type="text" ' + a("contact_messageLabel") + ' maxlength="64" /></div></div><div ' + s("mode", "mailchimp-signup") + '><div class="field" ' + s("mailchimpSignup_style", "standard") + "><label " + o("mailchimpSignup_nameLabel") + '>Name Label</label><input type="text" ' + a("mailchimpSignup_nameLabel") + ' maxlength="64" /></div><div class="field" ' + s("mailchimpSignup_style", "full") + "><label " + o("mailchimpSignup_firstnameLabel") + '>First Name Label</label><input type="text" ' + a("mailchimpSignup_firstnameLabel") + ' maxlength="64" /></div><div class="field" ' + s("mailchimpSignup_style", "full") + "><label " + o("mailchimpSignup_lastnameLabel") + '>Last Name Label</label><input type="text" ' + a("mailchimpSignup_lastnameLabel") + ' maxlength="64" /></div><div class="field"><label ' + o("mailchimpSignup_emailLabel") + '>Email Label</label><input type="text" ' + a("mailchimpSignup_emailLabel") + ' maxlength="64" /></div></div></section><section data-title="Button"><div class="field"><label ' + o("button_style") + '>Style</label><div class="select-wrapper"><select ' + a("button_style") + '><option value="outline">Outline</option><option value="solid">Solid</option></select></div></div><div class="field"><label ' + o("button_cornerRadius") + '>Corner Radius</label><input type="range" ' + a("button_cornerRadius") + ' min="0" max="2" step="0.125" data-status /></div><div class="field"><label ' + o("button_width") + '>Width</label><input type="range" ' + a("button_width") + ' min="1.875" max="30" step="0.125" data-status="rename" data-status-args="' + this.BUTTON_WIDTH_AUTO + '=Auto" /></div><div class="field"><label ' + o("button_height") + '>Height</label><input type="range" ' + a("button_height") + ' min="1.5" max="5" step="0.125" data-status /></div><hr /><div class="field"><label ' + o("button_font") + '>Font</label><div class="select-wrapper"><select ' + a("button_font") + ">" + function () {
                    var e, t = app.build.fonts.list, i = "";
                    for (e in t)i += '<option value="' + t[e].name + '">' + t[e].name + "</option>";
                    return i
                }() + '</select></div></div><div class="field"><label ' + o("button_colorFG") + '>Label Color</label><input type="hexcolor" data-alpha="1" ' + a("button_colorFG") + ' maxlength="9" /></div><div class="field"><label ' + o("button_colorBG") + '>Button Color</label><input type="hexcolor" data-alpha="1" ' + a("button_colorBG") + ' maxlength="9" /></div><div class="field"><label ' + o("button_colorHover") + '>Button Hover Color</label><input type="hexcolor" data-alpha="1" ' + a("button_colorHover") + ' maxlength="9" data-optional="1" /></div><div class="field"><label ' + o("button_weight") + '>Weight</label><input type="range" ' + a("button_weight") + ' min="100" max="900" step="100" data-status="font-weight" /></div><div class="field"><label ' + o("button_size") + '>Size</label><input type="range" ' + a("button_size") + ' min="0.5" max="4" step="0.125" data-status /></div><div class="field"><label ' + o("button_kerning") + '>Letter Spacing</label><input type="range" ' + a("button_kerning") + ' min="-0.5" max="1.5" step="0.025" data-status /></div><div class="field"><label ' + o("button_appearance") + '>Appearance</label><div class="select-wrapper"><select ' + a("button_appearance") + '><option value="normal">Normal</option><option value="lowercase">Lowercase</option><option value="uppercase">Uppercase</option><option value="smallcaps">Small Caps</option></select></div></div><hr /><div class="field"><label ' + o("button_label") + '>Label</label><input type="text" ' + a("button_label") + ' maxlength="64" /></div></section></form>'), this.registerProperty("width", {
                input: "range",
                type: "int"
            }), this.registerProperty("successMessage", {
                input: "text",
                live: !0,
                type: "utf8text"
            }), this.registerProperty("mode", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["contact", "mailchimp-signup"]
            }), this.registerProperty("input_style", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["solid", "outline"]
            }), this.registerProperty("input_cornerRadius", {
                input: "range",
                type: "float",
                map: [{type: "buttons", property: "cornerRadius"}, {
                    type: "icons",
                    property: "cornerRadius",
                    condition: function (e) {
                        return ("solid" == e.style || "outline" == e.style) && "rectangle" == e.shape
                    }
                }]
            }), this.registerProperty("input_height", {
                input: "range",
                type: "float",
                map: [{type: "buttons", property: "height"}]
            }), this.registerProperty("input_textareaHeight", {
                input: "range",
                type: "int"
            }), this.registerProperty("input_spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("input_appearance", {
                input: "range",
                type: "word",
                allowed: ["normal", "uppercase", "lowercase", "smallcaps"],
                map: [{
                    type: "text", property: "appearance", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "appearance"}]
            }), this.registerProperty("input_colorFG", {
                input: "text",
                type: "htmlacolor",
                map: [{
                    type: "text", property: "color", condition: function (e) {
                        return "outline" == this.input.style && "none" == e._role
                    }
                }, {
                    type: "buttons", property: "colorFG", condition: function (e) {
                        return "outline" == this.input.style && "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorFG", condition: function (e) {
                        return "outline" == this.input.style && ("default" == e.style || "outline" == e.style)
                    }
                }, {
                    type: "*", property: "color", condition: function (e) {
                        return "outline" == this.input.style
                    }
                }]
            }), this.registerProperty("input_colorBG", {
                input: "text",
                type: "htmlacolor",
                map: [{
                    type: "divider", property: "color", condition: function (e) {
                        return "outline" == this.input.style
                    }
                }, {type: "columns", property: "colorBorder"}, {
                    type: "buttons",
                    property: "colorBG",
                    condition: function (e) {
                        return "outline" == this.input.style && "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorBG", condition: function (e) {
                        return "outline" == this.input.style && "outline" == e.style
                    }
                }, {
                    type: "text", property: "color", condition: function (e) {
                        return "outline" == this.input.style && "none" == e._role
                    }
                }, {
                    type: "*", property: "color", condition: function (e) {
                        return "outline" == this.input.style
                    }
                }]
            }), this.registerProperty("input_colorFocus", {
                input: "text",
                type: "htmlacolor",
                optional: !0
            }), this.registerProperty("input_font", {
                input: "select",
                live: !0,
                map: [{
                    type: "text", property: "font", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "font"}]
            }), this.registerProperty("input_kerning", {
                input: "range",
                type: "float",
                map: [{
                    type: "text", property: "kerning", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "kerning"}]
            }), this.registerProperty("input_size", {
                input: "range",
                type: "float",
                map: [{
                    type: "text", property: "size", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "text", property: "size"}, {type: "*", property: "size"}]
            }), this.registerProperty("input_weight", {
                input: "range",
                type: "int",
                map: [{
                    type: "text", property: "weight", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "weight"}]
            }), this.registerProperty("button_label", {
                input: "text",
                live: !0,
                type: "utf8text"
            }), this.registerProperty("button_style", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["solid", "outline"],
                map: [{type: "buttons", property: "style"}]
            }), this.registerProperty("button_cornerRadius", {
                input: "range",
                type: "float",
                map: [{type: "buttons", property: "cornerRadius"}, {
                    type: "icons",
                    property: "cornerRadius",
                    condition: function (e) {
                        return ("solid" == e.style || "outline" == e.style) && "rectangle" == e.shape
                    }
                }]
            }), this.registerProperty("button_width", {
                input: "range",
                type: "float",
                map: [{type: "buttons", property: "width"}]
            }), this.registerProperty("button_height", {
                input: "range",
                type: "float",
                map: [{type: "buttons", property: "height"}]
            }), this.registerProperty("button_appearance", {
                input: "range",
                type: "word",
                allowed: ["normal", "uppercase", "lowercase", "smallcaps"],
                map: [{type: "buttons", property: "appearance"}, {
                    type: "text",
                    property: "appearance",
                    condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "appearance"}]
            }), this.registerProperty("button_colorFG", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "buttons", property: "colorFG"}, {
                    type: "text",
                    property: "color",
                    condition: function (e) {
                        return "outline" == this.style
                    }
                }, {
                    type: "*", property: "color", condition: function (e) {
                        return "outline" == this.style
                    }
                }]
            }), this.registerProperty("button_colorBG", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "buttons", property: "colorBG"}, {
                    type: "icons",
                    property: "colorBG",
                    condition: function (e) {
                        return "outline" == e.style && "outline" == this.style
                    }
                }, {
                    type: "divider", property: "color", condition: function (e) {
                        return "outline" == this.style
                    }
                }, {type: "columns", property: "colorBorder"}]
            }), this.registerProperty("button_colorHover", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "buttons", property: "colorHover"}, {
                    type: "icons",
                    property: "colorHover",
                    condition: function (e) {
                        return "outline" == e.style && "outline" == this.style
                    }
                }]
            }), this.registerProperty("button_font", {
                input: "select",
                live: !0,
                map: [{type: "buttons", property: "font"}, {
                    type: "text", property: "font", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "font"}]
            }), this.registerProperty("button_kerning", {
                input: "range",
                type: "float",
                map: [{type: "buttons", property: "kerning"}, {
                    type: "text",
                    property: "kerning",
                    condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "kerning"}]
            }), this.registerProperty("button_size", {
                input: "range",
                type: "float",
                map: [{type: "buttons", property: "size"}, {
                    type: "text", property: "size", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "text", property: "size"}, {type: "*", property: "size"}]
            }), this.registerProperty("button_weight", {
                input: "range",
                type: "int",
                map: [{type: "buttons", property: "weight"}, {
                    type: "text",
                    property: "weight",
                    condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "weight"}]
            }), this.registerProperty("contact_email", {
                input: "text",
                type: "email",
                optional: !0
            }), this.registerProperty("contact_showPhone", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("contact_showSubject", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("contact_nameLabel", {
                input: "text",
                live: !0,
                type: "utf8text"
            }), this.registerProperty("contact_emailLabel", {
                input: "text",
                live: !0,
                type: "utf8text"
            }), this.registerProperty("contact_phoneLabel", {
                input: "text",
                live: !0,
                type: "utf8text"
            }), this.registerProperty("contact_subjectLabel", {
                input: "text",
                live: !0,
                type: "utf8text"
            }), this.registerProperty("contact_messageLabel", {
                input: "text",
                live: !0,
                type: "utf8text"
            }), this.registerProperty("mailchimpSignup_style", {
                input: "select",
                type: "word",
                allowed: ["minimal", "simple", "standard", "full"],
                optional: !0
            }), this.registerProperty("mailchimpSignup_APIKey", {
                input: "text",
                type: "id",
                optional: !0
            }), this.registerProperty("mailchimpSignup_listId", {
                input: "text",
                type: "id",
                optional: !0
            }), this.registerProperty("mailchimpSignup_doubleOptIn", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("mailchimpSignup_nameLabel", {
                input: "text",
                live: !0,
                type: "utf8text"
            }), this.registerProperty("mailchimpSignup_firstnameLabel", {
                input: "text",
                live: !0,
                type: "utf8text"
            }), this.registerProperty("mailchimpSignup_lastnameLabel", {
                input: "text",
                live: !0,
                type: "utf8text"
            }), this.registerProperty("mailchimpSignup_emailLabel", {input: "text", live: !0, type: "utf8text"});
            var i = this;
            app.build.fonts.initField(this.properties.input_font.$field), app.build.fonts.initField(this.properties.button_font.$field)
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "form", o.prototype.contentDependencies = {}, o.prototype.BUTTON_WIDTH_AUTO = 1.875, o.prototype.isTextual = function () {
            return !0
        }, o.prototype.import = function (e) {
            var t = this.importValue;
            this.width = t(e, "width"), this.successMessage = t(e, "successMessage"), this.mode = t(e, "mode"), this.input = $.extend(this.input, e.input), this.button = $.extend(this.button, e.button), this.contact = $.extend(this.contact, e.contact), this.mailchimpSignup = $.extend(this.mailchimpSignup, e.mailchimpSignup)
        }, o.prototype.export = function (e) {
            e.width = this.width, e.successMessage = this.successMessage, e.mode = this.mode, e.input = JSON.parse(JSON.stringify(this.input)), e.button = JSON.parse(JSON.stringify(this.button)), e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.width = this.width, i.successMessage = this.successMessage, i.mode = this.mode, i.input = JSON.parse(JSON.stringify(this.input)), i.button = JSON.parse(JSON.stringify(this.button)), i.contact = JSON.parse(JSON.stringify(this.contact)), i.mailchimpSignup = JSON.parse(JSON.stringify(this.mailchimpSignup)), i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--form").set({}), e.r(".--form .--form-inner").set({
                display: "-vendor-inline-flex",
                "max-width": "100%",
                "-vendor-flex-wrap": "wrap",
                "-vendor-flex-direction": "column"
            }), e.r(".--form .--form-inner > *").set({}), e.r(".--form .--form-inner > :first-child").set({}), e.r(".--form.--form-alt .--form-inner").set({
                "-vendor-flex-wrap": "nowrap",
                "-vendor-flex-direction": "row"
            }), e.r(".--form.--form-alt .--form-inner .--form-field").set({"-vendor-flex-grow": "1"}), e.r(".--form.--form-alt .--form-inner > *").set({}), e.r(".--form.--form-alt .--form-inner > :first-child").set({}), e.r(".--form.--form-alt .--form-inner", "xsmall").set({"-vendor-flex-direction": "column"}), e.r(".--form.--form-alt .--form-inner .--form-field", "xsmall").set({"-vendor-flex-grow": "0"}), e.r(".--form .--input-text, .--form .--input-email, .--form .--textarea").set({
                "text-align": "left",
                display: "block",
                "background-color": "transparent",
                border: "0",
                width: "100%",
                outline: "0"
            }), e.r(".--form .--input-text, .--form .--input-email").set({}), e.r(".--form .--textarea").set({height: "10rem"}), e.r(".--form .--form-actions").set({"max-width": "100%"}), e.r(".--form .--input-submit").set({
                display: "inline-block",
                "background-color": "transparent",
                border: "0",
                cursor: "pointer",
                "text-align": "center",
                "max-width": "100%",
                "white-space": "nowrap",
                "-vendor-transition": "opacity 0.35s ease, color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease"
            }), e.r(".--form .--input-submit-disabled").set({opacity: "0.35", cursor: "default"})
        }, o.prototype.redraw = function (e) {
            var t, i, o, n, a = this.styleSheet, s = this, r = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (r(["mode", "button_label", "contact_showPhone", "contact_showSubject", "contact_nameLabel", "contact_emailLabel", "contact_phoneLabel", "contact_subjectLabel", "contact_messageLabel", "mailchimpSignup_style", "mailchimpSignup_nameLabel", "mailchimpSignup_firstnameLabel", "mailchimpSignup_lastnameLabel", "mailchimpSignup_emailLabel"], function () {
                var e = "";
                switch (s.mode) {
                    case"contact":
                        e += '<div class="--form" id="--' + s.id + '"><div class="--form-inner"><div class="--form-field"><div class="--input-text">' + s.contact.nameLabel + '</div></div><div class="--form-field"><div class="--input-email">' + s.contact.emailLabel + "</div></div>", s.contact.showPhone && (e += '<div class="--form-field"><div class="--input-text">' + s.contact.phoneLabel + "</div></div>"), s.contact.showSubject && (e += '<div class="--form-field"><div class="--input-text">' + s.contact.subjectLabel + "</div></div>"), e += '<div class="--form-field"><div class="--textarea">' + s.contact.messageLabel + '</div></div><div class="--form-actions"><span class="--input-submit">' + s.button.label + "</span></div></div></div>";
                        break;
                    case"mailchimp-signup":
                        switch (s.mailchimpSignup.style) {
                            default:
                            case"minimal":
                                e += '<div class="--form --form-alt" id="--' + s.id + '"><div class="--form-inner"><div class="--form-field"><div class="--input-email">' + s.mailchimpSignup.emailLabel + '</div></div><div class="--form-actions"><span class="--input-submit">' + s.button.label + "</span></div></div></div>";
                                break;
                            case"simple":
                                e += '<div class="--form" id="--' + s.id + '"><div class="--form-inner"><div class="--form-field"><div class="--input-email">' + s.mailchimpSignup.emailLabel + '</div></div><div class="--form-actions"><span class="--input-submit">' + s.button.label + "</span></div></div></div>";
                                break;
                            case"standard":
                                e += '<div class="--form" id="--' + s.id + '"><div class="--form-inner"><div class="--form-field"><div class="--input-text">' + s.mailchimpSignup.nameLabel + '</div></div><div class="--form-field"><div class="--input-email">' + s.mailchimpSignup.emailLabel + '</div></div><div class="--form-actions"><span class="--input-submit">' + s.button.label + "</span></div></div></div>";
                                break;
                            case"full":
                                e += '<div class="--form" id="--' + s.id + '"><div class="--form-inner"><div class="--form-field"><div class="--input-text">' + s.mailchimpSignup.firstnameLabel + '</div></div><div class="--form-field"><div class="--input-text">' + s.mailchimpSignup.lastnameLabel + '</div></div><div class="--form-field"><div class="--input-email">' + s.mailchimpSignup.emailLabel + '</div></div><div class="--form-actions"><span class="--input-submit">' + s.button.label + "</span></div></div></div>"
                        }
                }
                s.$canvas.html(e)
            }), n = this.selector(), a.unsetAll(n), a.r(n + " .--form-inner > *").set({margin: this.input.spacing + "rem 0 0 0"}), a.r(n + " .--form-inner > :first-child").set({margin: "0"}), a.r(n + " .--form-inner").set({width: this.width + "rem"}), a.r(n + ".--form-alt .--form-inner > *").set({margin: "0 0 0 " + this.input.spacing + "rem"}), a.r(n + ".--form-alt .--form-inner > :first-child").set({margin: "0"}), a.r(n + ".--form-alt .--form-inner > *", "xsmall").set({margin: this.input.spacing + "rem 0 0 0"}), a.r(n + ".--form-alt .--form-inner > :first-child", "xsmall").set({margin: "0"}), t = a.r(n + " .--input-text, " + n + " .--input-email, " + n + " .--textarea"), i = a.r(n + " .--input-text:hover, " + n + " .--input-email:hover, " + n + " .--textarea:hover"), t.set("font-size", this.input.size + "em"), t.set("font-family", "'" + this.input.font + "'"), 0 != this.input.kerning && (t.set("letter-spacing", this.input.kerning + "rem"), this.input.kerning > 0 && t.set("padding-left", "calc(" + this.input.kerning + "rem + " + .35 * this.input.height + "rem)")), t.set("font-weight", app.build.fonts.optimizeWeight(this.input.font, this.input.weight)), this.input.appearance) {
                case"uppercase":
                    t.set("text-transform", "uppercase");
                    break;
                case"lowercase":
                    t.set("text-transform", "lowercase");
                    break;
                case"smallcaps":
                    t.set("font-variant", "small-caps");
                    break;
                case"normal":
            }
            switch (t.set("border-radius", this.input.cornerRadius + "rem"), this.input.style) {
                case"solid":
                    t.set("background-color", this.input.colorBG), t.set("color", this.input.colorFG), this.input.colorFocus && i.set("box-shadow", "0 0 0 1px " + this.input.colorFocus + ", inset 0 0 0 1px " + this.input.colorFocus);
                    break;
                default:
                case"outline":
                    t.set("color", this.input.colorFG), t.set("border", "solid 1px " + this.input.colorBG), this.input.colorFocus && i.set({
                        "border-color": this.input.colorFocus,
                        "box-shadow": "0 0 0 1px " + this.input.colorFocus
                    })
            }
            switch (t = a.r(n + " .--input-text, " + n + " .--input-email"), t.set({
                height: this.input.height + "rem",
                "line-height": this.input.height + "rem",
                padding: "0 " + .35 * this.input.height + "rem"
            }), t = a.r(n + " .--textarea"), t.set({padding: .35 * this.input.height + "rem"}), t.set({height: this.input.textareaHeight + "rem"}), t = a.r(n + " .--input-submit"), o = a.r(n + " .--input-submit:hover"), this.button.width != this.BUTTON_WIDTH_AUTO && t.set("width", this.button.width + "rem"), t.set({
                height: this.button.height + "rem",
                "line-height": this.button.height + "rem",
                padding: "0 " + .5 * this.button.height + "rem"
            }), t.set("font-size", this.button.size + "em"), t.set("font-family", "'" + this.button.font + "'"), 0 != this.button.kerning && (t.set("letter-spacing", this.button.kerning + "rem"), this.button.kerning > 0 && t.set("padding-left", "calc(" + this.button.kerning + "rem + " + .5 * this.button.height + "rem)")), t.set("font-weight", app.build.fonts.optimizeWeight(this.button.font, this.button.weight)), this.button.appearance) {
                case"uppercase":
                    t.set("text-transform", "uppercase");
                    break;
                case"lowercase":
                    t.set("text-transform", "lowercase");
                    break;
                case"smallcaps":
                    t.set("font-variant", "small-caps");
                    break;
                case"normal":
            }
            switch (t.set("border-radius", this.button.cornerRadius + "rem"), this.button.style) {
                default:
                case"solid":
                    t.set("background-color", this.button.colorBG), t.set("color", this.button.colorFG), this.button.colorHover && o.set("background-color", this.button.colorHover);
                    break;
                case"outline":
                    t.set("color", this.button.colorFG), t.set("border", "solid 1px " + this.button.colorBG), this.button.colorHover && o.set({
                        color: this.button.colorHover,
                        "border-color": this.button.colorHover
                    })
            }
        }, t.exports = o
    }, {"./component": 7}], 12: [function (e, t, i) {
        function o(e, t) {
            this.mode = null, this.cornerRadius = null, this.size = null, this.spacing = null, this.width = null, this.mobileLayout = {mode: null}, this.images = [], n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            };
            this.form('<form><section data-title="Appearance"><div class="field"><label ' + o("mode") + '>Type</label><div class="select-wrapper"><select ' + a("mode") + '><option value="default">Default</option><option value="lightbox">Lightbox</option></select></div><p class="note" data-requires="mode=lightbox">Images can be clicked to show larger versions.</p></div><div class="field"><label ' + o("width") + '>Width</label><input type="range" ' + a("width") + ' min="15" max="100" step="1" data-status /></div><div class="field"><label ' + o("size") + '>Size</label><input type="range" ' + a("size") + ' min="2" max="24" step="0.125" data-status /></div><div class="field"><label ' + o("cornerRadius") + '>Corner Radius</label><input type="range" ' + a("cornerRadius") + ' min="0" max="12" step="0.125" data-status /></div><div class="field"><label ' + o("spacing") + '>Spacing</label><input type="range" ' + a("spacing") + ' min="0" max="2" step="0.125" data-status /></div><hr /><div class="field-group"><label class="big">Mobile Layout</label><p class="note">' + app.build.messages.mobileLayout + '</p><div class="field"><label ' + o("mobileLayout_mode") + '>Mode</label><div class="select-wrapper"><select ' + a("mobileLayout_mode") + '><option value="normal">Normal</option><option value="stretch">Stretch</option></select></div><p class="note" data-requires="mobileLayout_mode=stretch">Images will stretch to fit the page on mobile.</p></div></div></section><section data-title="Images"><div class="group" id="images" name="images" data-collapse="1" data-collapse-singular="1" data-min="1" data-max="10" data-title="caption" data-value="[{}]"><div class="field"><div class="image-cropper" data-maxSize="' + app.build.settings.assetSizeLimit + '" data-maxWH="' + app.build.settings.assetWHLimit + '"><input class="id" type="text" name="assetId" id="assetId" autocomplete="off" /><textarea class="data" name="assetData" id="assetData"></textarea><div class="inner"><span class="button small special do-upload">Upload Image</span></div></div></div><div class="field"><label for="caption">Caption</label><input type="text" name="caption" id="caption" maxlength="64" value="Untitled" /><p class="note">Used as this image\'s alternate text.</p></div><div class="field"><label for="linkUrl" class="optional">Link URL</label><input type="text" name="linkUrl" id="linkUrl" maxlength="1024" value="" /><p class="note">' + app.build.messages.linkURLs + "</p></div></div></section></form>"),
                this.registerProperty("mode", {
                    input: "select",
                    type: "word",
                    allowed: ["default", "lightbox"]
                }), this.registerProperty("cornerRadius", {
                input: "range",
                type: "float"
            }), this.registerProperty("size", {
                input: "range",
                type: "float"
            }), this.registerProperty("spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("width", {
                input: "range",
                type: "float"
            }), this.registerProperty("mobileLayout_mode", {
                input: "select",
                type: "word",
                allowed: ["normal", "stretch"]
            }), this.registerProperty("images", {
                input: "group",
                type: {assetId: "alnum?", assetData: "any?", caption: "utf8text", linkUrl: "href?"},
                change: function () {
                    var e;
                    for (e in i.images)"assetId" in i.images[e] && i.images[e].assetId && app.build.assetCache.add(i.images[e].assetId, i.images[e].assetData)
                }
            })
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "gallery", o.prototype.contentDependencies = {}, o.prototype.assets = function () {
            var e, t = {};
            for (e in this.images)"assetId" in this.images[e] && this.images[e].assetId && (t[this.images[e].assetId] = this.images[e].assetData);
            return t
        }, o.prototype.jsonObject = function () {
            var e, t;
            e = n.prototype.jsonObject.apply(this);
            for (t in e.images)delete e.images[t].assetData;
            return e
        }, o.prototype.isTextual = function () {
            return !1
        }, o.prototype.import = function (e) {
            var t, i = this.importValue;
            this.mode = i(e, "mode"), this.cornerRadius = i(e, "cornerRadius"), this.size = i(e, "size"), this.spacing = i(e, "spacing"), this.width = i(e, "width"), this.mobileLayout = $.extend(this.mobileLayout, e.mobileLayout), this.images = $.extend(this.images, e.images);
            for (t in this.images)"assetId" in this.images[t] && this.images[t].assetId && (app.build.assetCache.exists(this.images[t].assetId) || app.build.assetCache.add(this.images[t].assetId, app.cleanHref() + "/asset/" + this.images[t].assetId), this.images[t].assetData = app.build.assetCache.get(this.images[t].assetId))
        }, o.prototype.export = function (e) {
            e.mode = this.mode, e.cornerRadius = this.cornerRadius, e.size = this.size, e.spacing = this.spacing, e.width = this.width, e.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i, n, a;
            i = new o(e), i.mode = this.mode, i.cornerRadius = this.cornerRadius, i.size = this.size, i.spacing = this.spacing, i.width = this.width, i.images = JSON.parse(JSON.stringify(this.images)), i.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout));
            for (a in i.images)n = i.images[a], n.assetData && (n.assetData.match(/^data:/) ? (n.assetId = md5(String(Date.now()) + n.assetData), app.build.assetCache.add(n.assetId, n.assetData)) : !function (e) {
                app.toDataURL(e.assetData, function (t) {
                    e.assetData = t, e.assetId = md5(String(Date.now()) + e.assetData), app.build.assetCache.add(e.assetId, e.assetData)
                })
            }(n));
            i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--gallery-inner").set({
                display: "inline-block",
                "max-width": "100%"
            }), e.r(".--gallery-ul-li").set({display: "inline-block"}), e.r(".--gallery-ul-li-a, .--gallery-ul-li-span").set({
                display: "inline-block",
                position: "relative"
            }), e.r(".--gallery-ul-li img").set({
                display: "inline-block",
                width: "auto",
                "max-width": "100%",
                margin: "0",
                "vertical-align": "top"
            }), e.r(".--gallery-ul-li .placeholder span").set({display: "inline-block", "vertical-align": "top"})
        }, o.prototype.redraw = function (e) {
            var t, i, o, n, a, s = this.styleSheet, r = this, l = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (l(["images"], function () {
                for (i = "", i += '<div class="--gallery" id="--' + r.id + '"><div class="--gallery-inner"><div class="--gallery-ul">', o = 1, n = r.images.length, o = 1; o <= n; o++)a = r.images[o - 1], 1 == o && (i += "\t"), i += a.assetId ? '<div class="--gallery-ul-li"><div data-href="' + (a.linkUrl ? a.linkUrl : "") + '"><img src="' + a.assetData + '" data-alt="' + a.caption + '" draggable="false" /></div></div>' : '<div class="--gallery-ul-li"><div class="placeholder" data-href="' + (a.linkUrl ? a.linkUrl : "") + '"><span></span></div></div>';
                i += "</div></div></div>", r.$canvas.html(i)
            }), t = this.selector(), s.unsetAll(t), s.unsetAll(t, "xsmall"), s.unsetAll(t, "xxsmall"), s.r(t + " .--gallery-inner").set("max-width", this.width + "rem"), s.r(t + " .--gallery-ul").set("padding", .0875 * this.size + "rem 0"), s.r(t + " .--gallery-ul").set("width", "calc(100% + " + 2 * this.spacing + "rem)"), s.r(t + " .--gallery-ul").set("margin-left", this.spacing * -1 + "rem"), s.r(t + " .--gallery-ul", "xxsmall").set("width", "calc(100% + " + .75 * this.spacing * 2 + "rem)"), s.r(t + " .--gallery-ul", "xxsmall").set("margin-left", .75 * this.spacing * -1 + "rem"), s.r(t + " .--gallery-ul-li").set("margin", this.spacing + "rem"), s.r(t + " .--gallery-ul-li", "xxsmall").set("margin", .75 * this.spacing + "rem"), s.r(t + " .--gallery-ul-li-a, " + t + " .--gallery-ul-li-span").set({"border-radius": this.cornerRadius + "rem"}), s.r(t + " .--gallery-ul-li img").set({
                height: "auto",
                "max-height": this.size + "rem"
            }), s.r(t + " .--gallery-ul-li img").set({"border-radius": this.cornerRadius + "rem"}), s.r(t + " .--gallery-ul-li .placeholder span").set({
                width: this.size + "rem",
                height: this.size + "rem"
            }), s.r(t + " .--gallery-ul-li .placeholder span").set({"border-radius": this.cornerRadius + "rem"}), this.mobileLayout.mode) {
                case"normal":
                default:
                    break;
                case"stretch":
                    s.r(t + " .--gallery-inner", "xsmall").set({"max-width": "100%"}), s.r(t + " .--gallery-ul", "xsmall").set({
                        "margin-left": "0",
                        "margin-right": "0",
                        width: "100%"
                    }), s.r(t + " .--gallery-ul-li", "xsmall").set({
                        margin: this.spacing + "rem 0",
                        width: "100%"
                    }), s.r(t + " .--gallery-ul-li img", "xsmall").set({
                        "max-height": "none",
                        width: "100%"
                    }), s.r(t + " .--gallery-inner", "xxsmall").set({"max-width": "100%"}), s.r(t + " .--gallery-ul", "xxsmall").set({
                        "margin-left": "0",
                        "margin-right": "0",
                        width: "100%"
                    }), s.r(t + " .--gallery-ul-li", "xxsmall").set({
                        margin: this.spacing + "rem 0",
                        width: "100%"
                    }), s.r(t + " .--gallery-ul-li .placeholder span", "xsmall").set({width: "100%"})
            }
        }, t.exports = o
    }, {"./component": 7}], 13: [function (e, t, i) {
        function o(e, t) {
            this.width = null, this.rows = null, this.columns = null, this.paddingHorizontal = null, this.paddingVertical = null, this.alignHorizontal = null, this.alignVertical = null, this.spacing = null, this.style = null, this.colorBorder = null, this.cornerRadius = null, this.mobileLayout = {
                mode: null,
                alignHorizontal: null
            }, this.cells = null, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><section data-title="General"><div class="field"><label ' + o("width") + '>Width</label><input type="range" ' + a("width") + ' min="15" max="100" step="1" data-status /></div><div class="field-group"><label>Size</label><div class="field half first"><label class="small" ' + o("rows") + '>Rows</label><input type="range" ' + a("rows") + ' min="1" max="8" step="1" data-status /></div><div class="field half"><label class="small" ' + o("columns") + '>Columns</label><input type="range" ' + a("columns") + ' min="1" max="8" step="1" data-status /></div></div><hr /><div class="field-group"><label>Padding</label><div class="field half first"><label class="small" ' + o("paddingHorizontal") + '>Horizontal</label><input type="range" ' + a("paddingHorizontal") + ' min="0" max="5" step="0.125" data-status /></div><div class="field half"><label class="small" ' + o("paddingVertical") + '>Vertical</label><input type="range" ' + a("paddingVertical") + ' min="0" max="5" step="0.125" data-status /></div></div><div class="field-group"><label>Alignment</label><div class="field half first"><label class="small" ' + o("alignHorizontal") + '>Horizontal</label><div class="select-wrapper"><select ' + a("alignHorizontal") + '><option value="">Auto</option><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select></div></div><div class="field half"><label class="small" ' + o("alignVertical") + '>Vertical</label><div class="select-wrapper"><select ' + a("alignVertical") + '><option value="top">Top</option><option value="center">Center</option><option value="bottom">Bottom</option></select></div></div></div><div class="field"><label ' + o("spacing") + '>Element Spacing</label><input type="range" ' + a("spacing") + ' min="0" max="3" step="0.125" data-status /></div><hr /><div class="field"><label ' + o("style") + '>Style</label><div class="select-wrapper"><select ' + a("style") + '><option value="default">Default</option><option value="divided">Divided</option><option value="outlined">Outlined</option></select></div></div><div class="field" ' + s("style", "!default") + "><label " + o("colorBorder") + '>Border Color</label><input type="hexcolor" data-alpha="1" ' + a("colorBorder") + ' maxlength="9" /></div><div class="field" ' + s("style", "outlined") + "><label " + o("cornerRadius") + '>Corner Radius</label><input type="range" ' + a("cornerRadius") + ' min="0" max="3" step="0.125" data-status /></div><hr /><div class="field-group"><label class="big">Mobile Layout</label><p class="note">' + app.build.messages.mobileLayout + '</p><div class="field"><label ' + o("mobileLayout_mode") + '>Mode</label><div class="select-wrapper"><select ' + a("mobileLayout_mode") + '><option value="stack">Stack</option><option value="stack-reverse">Stack (reverse)</option><option value="normal">Normal</option></select></div></div><div class="field" ' + s("mobileLayout_mode", "!normal") + "><label " + o("mobileLayout_alignHorizontal") + '>Horizontal Alignment</label><div class="select-wrapper"><select ' + a("mobileLayout_alignHorizontal") + '><option value="">Auto</option><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select></div></div></div></section><section data-title="Cells"><div class="field"><div class="textarea-wrapper"><textarea ' + a("cells") + ' maxlength="16384" data-autosize data-autosize-newline data-optional="1"></textarea></div><div class="note"><p>Contents of each cell (from left to right, top to bottom). Each line defines an element (by ID*, eg. <code>text01</code>) to go in the current cell. Skip a line to move to the next cell.</p><p><em>* Hover over an element to show its ID.</em></p></div></div></section></form>'), this.registerProperty("width", {
                input: "range",
                type: "int"
            }), this.registerProperty("rows", {
                input: "range",
                type: "int"
            }), this.registerProperty("columns", {
                input: "range",
                type: "int"
            }), this.registerProperty("paddingHorizontal", {
                input: "range",
                type: "float"
            }), this.registerProperty("paddingVertical", {
                input: "range",
                type: "float"
            }), this.registerProperty("alignHorizontal", {
                input: "select",
                type: "word",
                optional: !0,
                allowed: ["", "left", "center", "right"]
            }), this.registerProperty("alignVertical", {
                input: "select",
                type: "word",
                allowed: ["top", "center", "bottom"]
            }), this.registerProperty("spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("style", {
                input: "select",
                type: "word",
                allowed: ["default", "divided", "outlined"]
            }), this.registerProperty("colorBorder", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("cornerRadius", {
                input: "range",
                type: "float"
            }), this.registerProperty("mobileLayout_mode", {
                input: "select",
                type: "word",
                allowed: ["stack", "stack-reverse", "normal"]
            }), this.registerProperty("mobileLayout_alignHorizontal", {
                input: "select",
                type: "word",
                optional: !0,
                allowed: ["", "left", "center", "right"]
            }), this.registerProperty("cells", {input: "text", type: "utf8text", optional: !0})
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "grid", o.prototype.contentDependencies = {spacing: ["spacing"]}, o.prototype.DEBUG = !1, o.prototype.cellsToText = function (e) {
            var t, i, o, n = "", a = "";
            for (t = 0; t < e.length; t++) {
                for (n = "", i = 0; i < e[t].componentIds.length; i++)n += e[t].componentIds[i] + "\n";
                "" != n && (a += n + "\n")
            }
            return o = $.trim(a)
        }, o.prototype.cellsToObjects = function (e) {
            var t, i, o, n = [];
            if ("" != $.trim(e)) {
                t = e.replace(/\n\n+/, "\n\n").split("\n\n");
                for (o in t)i = "" == $.trim(t[o]) ? [] : t[o].split("\n"), n.push({componentIds: i})
            }
            return n
        }, o.prototype.padding = function (e) {
            var t, i, o, n = e.stylesheet, a = e.selector, s = "breakpoint" in e ? e.breakpoint : void 0,
                r = "columns" in e ? e.columns : 1, l = "prevColumns" in e ? e.prevColumns : null,
                p = "paddingHorizontal" in e ? e.paddingHorizontal : 0,
                d = "paddingVertical" in e ? e.paddingVertical : 0, c = "flushHorizontal" in e && e.flushHorizontal,
                u = "flushVertical" in e && e.flushVertical, h = "reverse" in e && e.reverse;
            if (t = app.round(100 / r, 6) - .025, c || u) {
                if (p > 0 && (i = app.round(p / r, 2), n.r(a + " > .--grid-inner > *", s).set({width: "calc(" + t + "% + " + i + "rem)"})), d > 0 && p > 0 ? d == p ? n.r(a + " > .--grid-inner > *", s).set({padding: .5 * d + "rem"}) : n.r(a + " > .--grid-inner > *", s).set({padding: .5 * d + "rem " + .5 * p + "rem"}) : d > 0 ? n.r(a + " > .--grid-inner > *", s).set({
                        "padding-top": .5 * d + "rem",
                        "padding-bottom": .5 * d + "rem"
                    }) : p > 0 && n.r(a + " > .--grid-inner > *", s).set({
                            "padding-left": .5 * p + "rem",
                            "padding-right": .5 * p + "rem"
                        }), d > 0 && u && (n.r(a + " > .--grid-inner > :nth-" + (h ? "last-" : "") + "child(-n + " + r + ")", s).set({"padding-top": 0}), n.r(a + " > .--grid-inner > :nth-" + (h ? "" : "last-") + "child(-n + " + r + ")", s).set({"padding-bottom": 0})), 1 == r && d > 0 && !u && (n.r(a + " > .--grid-inner > :nth-" + (h ? "last-" : "") + "child(-n + " + r + ")", s).set({"padding-top": 0}), n.r(a + " > .--grid-inner > :nth-" + (h ? "" : "last-") + "child(-n + " + r + ")", s).set({"padding-bottom": 0})), p > 0 && c && (n.r(a + " > .--grid-inner > :nth-child(" + r + "n + 1)", s).set({"padding-left": 0}), n.r(a + " > .--grid-inner > :nth-child(" + r + "n)", s).set({"padding-right": 0}), i = app.round(p / r - p / 2, 2), n.r(a + " > .--grid-inner > :nth-child(" + r + "n + 1), " + a + " > .--grid-inner > :nth-child(" + r + "n)", s).set({width: 0 != i ? "calc(" + t + "% + " + i + "rem)" : t + "%"})), l) {
                    Array.isArray(l) || (l = [l]);
                    for (o in l)this.paddingReset(e, l[o])
                }
            } else d > 0 && p > 0 ? d == p ? n.r(a + " > .--grid-inner > *", s).set({padding: .5 * d + "rem"}) : n.r(a + " > .--grid-inner > *", s).set({padding: .5 * d + "rem " + .5 * p + "rem"}) : d > 0 ? n.r(a + " > .--grid-inner > *", s).set({
                "padding-top": .5 * d + "rem",
                "padding-bottom": .5 * d + "rem"
            }) : p > 0 && n.r(a + " > .--grid-inner > *", s).set({
                    "padding-left": .5 * p + "rem",
                    "padding-right": .5 * p + "rem"
                })
        }, o.prototype.paddingReset = function (e, t) {
            var i, o, n = e.stylesheet, a = e.selector, s = "breakpoint" in e ? e.breakpoint : void 0,
                r = "columns" in e ? e.columns : 1, l = "paddingHorizontal" in e ? e.paddingHorizontal : 0,
                p = "paddingVertical" in e ? e.paddingVertical : 0, d = "flushHorizontal" in e && e.flushHorizontal,
                c = "flushVertical" in e && e.flushVertical;
            (d || c) && (i = app.round(100 / t, 6) - .025, l > 0 && (o = app.round(l / t, 2), n.r(a + " > .--grid-inner > *", s).set({width: "calc(" + i + "% + " + o + "rem)"})), p > 0 && l > 0 ? p == l ? n.r(a + " > .--grid-inner > *", s).set({padding: .5 * p + "rem"}) : n.r(a + " > .--grid-inner > *", s).set({padding: .5 * p + "rem " + .5 * l + "rem"}) : p > 0 ? n.r(a + " > .--grid-inner > *", s).set({
                "padding-top": .5 * p + "rem",
                "padding-bottom": .5 * p + "rem"
            }) : l > 0 && n.r(a + " > .--grid-inner > *", s).set({
                    "padding-left": .5 * l + "rem",
                    "padding-right": .5 * l + "rem"
                }), p > 0 && (n.r(a + " > .--grid-inner > :nth-child(-n + " + t + ")", s).set({"padding-top": .5 * p + "rem"}), n.r(a + " > .--grid-inner > :nth-last-child(-n + " + t + ")", s).set({"padding-bottom": .5 * p + "rem"})), l > 0 && (n.r(a + " > .--grid-inner > :nth-child(" + t + "n + 1)", s).set({"padding-left": .5 * l + "rem"}), n.r(a + " > .--grid-inner > :nth-child(" + t + "n)", s).set({"padding-right": .5 * l + "rem"}), i = app.round(100 / r, 6) - .025, o = app.round(l / r - l / 2, 2), n.r(a + " > .--grid-inner > :nth-child(" + t + "n + 1), " + a + " > .--grid-inner > :nth-child(" + t + "n)", s).set({width: 0 != o ? "calc(" + i + "% + " + o + "rem)" : i + "%"})))
        }, o.prototype.claimChildren = function () {
            var e, t, i, o, n, a;
            for (o = this.cellsToObjects(this.cells), this.children = {}, n = 0; n < o.length; n++)for (e = o[n], a = 0; a < e.componentIds.length; a++)i = e.componentIds[a], t = i in this.site.components ? this.site.components[i] : null, t && (t.parent = this, this.children[i] = t);
            return !0
        }, o.prototype.jsonObject = function () {
            var e = n.prototype.jsonObject.apply(this);
            return e.cells = this.cellsToObjects(e.cells), e
        }, o.prototype.import = function (e) {
            var t = this.importValue;
            this.width = t(e, "width"), this.rows = t(e, "rows"), this.columns = t(e, "columns"), this.paddingHorizontal = t(e, "paddingHorizontal"), this.paddingVertical = t(e, "paddingVertical"), this.alignHorizontal = t(e, "alignHorizontal"), this.alignVertical = t(e, "alignVertical"), this.spacing = t(e, "spacing"), this.style = t(e, "style"), this.colorBorder = t(e, "colorBorder"), this.cornerRadius = t(e, "cornerRadius"), this.mobileLayout = $.extend(this.mobileLayout, e.mobileLayout), this.cells = this.cellsToText(e.cells)
        }, o.prototype.export = function (e) {
            e.width = this.width, e.rows = this.rows, e.columns = this.columns, e.paddingHorizontal = this.paddingHorizontal, e.paddingVertical = this.paddingVertical, e.alignHorizontal = this.alignHorizontal, e.alignVertical = this.alignVertical, e.spacing = this.spacing, e.style = this.style, e.colorBorder = this.colorBorder, e.cornerRadius = this.cornerRadius, e.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.width = this.width, i.rows = this.rows, i.columns = this.columns, i.paddingHorizontal = this.paddingHorizontal, i.paddingVertical = this.paddingVertical, i.alignHorizontal = this.alignHorizontal, i.alignVertical = this.alignVertical, i.spacing = this.spacing, i.style = this.style, i.colorBorder = this.colorBorder, i.cornerRadius = this.cornerRadius, i.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), i.cells = this.cells, i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--grid > .--grid-inner").set({
                display: "-vendor-inline-flex",
                "-vendor-flex-wrap": "wrap",
                position: "relative",
                "max-width": "100%"
            }), this.DEBUG && e.r(".--grid > .--grid-inner").set({"box-shadow": "0 0 0 1px red"}), e.r(".--grid > .--grid-inner > *").set({
                "-vendor-flex-shrink": "1",
                "-vendor-flex-grow": "0",
                "max-width": "100%"
            })
        }, o.prototype.redraw = function (e) {
            var t, i, o, n, a = this.styleSheet, s = this, r = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (i = s.cellsToObjects(s.cells), r(["rows", "columns", "cells", "style"], function () {
                var e, t, o, n, a, r, l = "";
                switch (l += '<div class="--grid" id="--' + s.id + '"><div class="--grid-inner">', s.style) {
                    case"default":
                    default:
                        n = "<div>", a = "</div>", r = 3;
                        break;
                    case"divided":
                    case"outlined":
                        n = "<div><div>", a = "</div></div>", r = 4
                }
                for (e = 0; e < i.length; e++) {
                    for (o = i[e], l += n, t = 0; t < o.componentIds.length; t++)l += '<div class="cell-component">' + o.componentIds[t] + "</div>";
                    l += a
                }
                l += "</div></div>", s.$canvas.html(l)
            }), t = this.selector(), a.unsetAll(t), a.unsetAll(t, "small"), a.unsetAll(t + ".--grid"), a.unsetAll(t + ".--grid", "small"), n = this.site.content.spacing, a.r(t + " > .--grid-inner").set({width: this.width + "rem"}), this.alignHorizontal && a.r(t + " > .--grid-inner").set({"text-align": this.alignHorizontal}), this.mobileLayout.mode) {
                case"stack":
                default:
                    a.r(t + " > .--grid-inner", "small").set({
                        "-vendor-flex-direction": "column",
                        "-vendor-flex-wrap": "nowrap"
                    }), this.mobileLayout.alignHorizontal && a.r(t + " > .--grid-inner", "small").set({"text-align": this.mobileLayout.alignHorizontal});
                    break;
                case"stack-reverse":
                    a.r(t + " > .--grid-inner", "small").set({
                        "-vendor-flex-direction": "column-reverse",
                        "-vendor-flex-wrap": "nowrap"
                    }), this.mobileLayout.alignHorizontal && a.r(t + " > .--grid-inner", "small").set({"text-align": this.mobileLayout.alignHorizontal});
                    break;
                case"normal":
            }
            switch (o = app.round(100 / this.columns, 6) - .025, a.r(t + " > .--grid-inner > *").set({width: o + "%"}), this.mobileLayout.mode) {
                case"stack":
                case"stack-reverse":
                default:
                    a.r(t + " > .--grid-inner > *", "small").set({width: "100%", "min-height": "100%"});
                    break;
                case"normal":
            }
            switch (this.style) {
                case"default":
                default:
                    switch (this.paddingVertical > 0 && (a.r(t + ".--grid").set({
                        "margin-top": Math.max(0, this.paddingVertical - n) + "rem",
                        "margin-bottom": Math.max(0, this.paddingVertical - n) + "rem"
                    }), a.r(t + ".--grid", "small").set({
                        "margin-top": Math.max(0, Math.min(1.5, this.paddingVertical) - n) + "rem",
                        "margin-bottom": Math.max(0, Math.min(1.5, this.paddingVertical) - n) + "rem"
                    })), this.alignVertical) {
                        case"top":
                        default:
                            a.r(t + " > .--grid-inner").set({"-vendor-align-items": "flex-start"});
                            break;
                        case"bottom":
                            a.r(t + " > .--grid-inner").set({"-vendor-align-items": "flex-end"});
                            break;
                        case"center":
                            a.r(t + " > .--grid-inner").set({"-vendor-align-items": "center"})
                    }
                    if (this.paddingHorizontal > 0 || this.paddingVertical > 0)switch (this.padding({
                        stylesheet: a,
                        selector: t,
                        columns: this.columns,
                        paddingHorizontal: this.paddingHorizontal,
                        paddingVertical: this.paddingVertical,
                        flushHorizontal: !0,
                        flushVertical: !0
                    }), this.mobileLayout.mode) {
                        case"stack":
                        case"stack-reverse":
                        default:
                            this.padding({
                                stylesheet: a,
                                selector: t,
                                breakpoint: "small",
                                columns: 1,
                                prevColumns: this.columns,
                                paddingHorizontal: Math.min(3, this.paddingHorizontal),
                                paddingVertical: Math.min(3, this.paddingHorizontal),
                                flushHorizontal: !0,
                                flushVertical: !0,
                                reverse: "stack-reverse" == this.mobileLayout.mode
                            });
                            break;
                        case"normal":
                    }
                    this.DEBUG && a.r(t + " > .--grid-inner > *").set({"box-shadow": "inset 0 0 0 1px green"}), a.r(t + " > .--grid-inner > * > *").set({
                        "margin-top": this.spacing + "rem",
                        "margin-bottom": this.spacing + "rem"
                    }), a.r(t + " > .--grid-inner > * > *:first-child").set({"margin-top": "0"}), a.r(t + " > .--grid-inner > * > *:last-child").set({"margin-bottom": "0"});
                    break;
                case"divided":
                    if (this.paddingVertical > 0 && (a.r(t + ".--grid").set({
                            "margin-top": Math.max(0, Math.min(3, this.paddingVertical) - n) + "rem",
                            "margin-bottom": Math.max(0, Math.min(3, this.paddingVertical) - n) + "rem"
                        }), a.r(t + ".--grid", "small").set({
                            "margin-top": Math.max(0, Math.min(2, this.paddingVertical) - n) + "rem",
                            "margin-bottom": Math.max(0, Math.min(2, this.paddingVertical) - n) + "rem"
                        })), a.r(t + " > .--grid-inner").set({"-vendor-align-items": "stretch"}), a.r(t + " > .--grid-inner > *").set({display: "-vendor-flex"}), this.paddingHorizontal > 0 || this.paddingVertical > 0)switch (this.padding({
                        stylesheet: a,
                        selector: t,
                        columns: this.columns,
                        paddingHorizontal: this.paddingHorizontal,
                        paddingVertical: this.paddingVertical,
                        flushHorizontal: !0,
                        flushVertical: !1
                    }), this.mobileLayout.mode) {
                        case"stack":
                        case"stack-reverse":
                        default:
                            this.padding({
                                stylesheet: a,
                                selector: t,
                                breakpoint: "small",
                                columns: 1,
                                prevColumns: this.columns,
                                paddingHorizontal: Math.min(3.5, this.paddingHorizontal),
                                paddingVertical: Math.min(3.5, this.paddingHorizontal),
                                flushHorizontal: !0,
                                flushVertical: !1,
                                reverse: "stack-reverse" == this.mobileLayout.mode
                            });
                            break;
                        case"normal":
                    }
                    switch (this.alignVertical) {
                        case"top":
                        default:
                            a.r(t + " > .--grid-inner > *").set({"-vendor-align-items": "flex-start"});
                            break;
                        case"bottom":
                            a.r(t + " > .--grid-inner > *").set({"-vendor-align-items": "flex-end"});
                            break;
                        case"center":
                            a.r(t + " > .--grid-inner > *").set({"-vendor-align-items": "center"})
                    }
                    switch (a.r(t + " > .--grid-inner > *").set({
                        "border-top": "solid 1px " + this.colorBorder,
                        "border-left": "solid 1px " + this.colorBorder
                    }), a.r(t + " > .--grid-inner > :nth-child(-n + " + this.columns + ")").set({"border-top": 0}), a.r(t + " > .--grid-inner > :nth-child(" + this.columns + "n + 1)").set({"border-left": 0}), this.mobileLayout.mode) {
                        case"stack":
                        default:
                            a.r(t + " > .--grid-inner > :nth-child(-n + " + this.columns + ")", "small").set({"border-top": "solid 1px " + this.colorBorder}), a.r(t + " > .--grid-inner > *", "small").set({"border-left": 0}), a.r(t + " > .--grid-inner > div:first-child", "small").set({"border-top": 0});
                            break;
                        case"stack-reverse":
                            a.r(t + " > .--grid-inner > :nth-child(-n + " + this.columns + ")", "small").set({"border-top": "solid 1px " + this.colorBorder}), a.r(t + " > .--grid-inner > *", "small").set({"border-left": 0}), a.r(t + " > .--grid-inner > div:last-child", "small").set({"border-top": 0});
                            break;
                        case"normal":
                    }
                    this.DEBUG && (a.r(t + " > .--grid-inner > *").set({"box-shadow": "inset 0 0 0 1px green"}), a.r(t + " > .--grid-inner > * > *").set({"box-shadow": "0 0 0 1px orange"})), a.r(t + " > .--grid-inner > * > *").set({width: "100%"}), a.r(t + " > .--grid-inner > * > * > *").set({
                        "margin-top": this.spacing + "rem",
                        "margin-bottom": this.spacing + "rem"
                    }), a.r(t + " > .--grid-inner > * > * > *:first-child").set({"margin-top": "0"}), a.r(t + " > .--grid-inner > * > * > *:last-child").set({"margin-bottom": "0"});
                    break;
                case"outlined":
                    if (this.paddingVertical > 0 && (a.r(t + ".--grid").set({
                            "margin-top": Math.max(0, Math.min(3, this.paddingVertical) - n) + "rem",
                            "margin-bottom": Math.max(0, Math.min(3, this.paddingVertical) - n) + "rem"
                        }), a.r(t + ".--grid", "small").set({
                            "margin-top": Math.max(0, Math.min(2, this.paddingVertical) - n) + "rem",
                            "margin-bottom": Math.max(0, Math.min(2, this.paddingVertical) - n) + "rem"
                        })), a.r(t + " > .--grid-inner").set({"-vendor-align-items": "stretch"}), this.cornerRadius > 0 && a.r(t + " > .--grid-inner").set({"border-radius": this.cornerRadius + "rem"}), a.r(t + " > .--grid-inner").set({border: "solid 1px " + this.colorBorder}), a.r(t + " > .--grid-inner > *").set({display: "-vendor-flex"}), this.paddingVertical > 0 || this.paddingHorizontal > 0)switch (this.padding({
                        stylesheet: a,
                        selector: t,
                        columns: this.columns,
                        paddingHorizontal: this.paddingHorizontal,
                        paddingVertical: this.paddingVertical
                    }), this.mobileLayout.mode) {
                        case"stack":
                        case"stack-reverse":
                        default:
                            this.padding({
                                stylesheet: a,
                                selector: t,
                                breakpoint: "small",
                                columns: 1,
                                paddingHorizontal: Math.min(3.5, this.paddingHorizontal),
                                paddingVertical: Math.min(3.5, this.paddingHorizontal)
                            });
                            break;
                        case"normal":
                    }
                    switch (this.alignVertical) {
                        case"top":
                        default:
                            a.r(t + " > .--grid-inner > *").set({"-vendor-align-items": "flex-start"});
                            break;
                        case"bottom":
                            a.r(t + " > .--grid-inner > *").set({"-vendor-align-items": "flex-end"});
                            break;
                        case"center":
                            a.r(t + " > .--grid-inner > *").set({"-vendor-align-items": "center"})
                    }
                    switch (a.r(t + " > .--grid-inner > *").set({
                        "border-top": "solid 1px " + this.colorBorder,
                        "border-left": "solid 1px " + this.colorBorder
                    }), a.r(t + " > .--grid-inner > :nth-child(-n + " + this.columns + ")").set({"border-top": 0}), a.r(t + " > .--grid-inner > :nth-child(" + this.columns + "n + 1)").set({"border-left": 0}), this.mobileLayout.mode) {
                        case"stack":
                        default:
                            a.r(t + " > .--grid-inner > :nth-child(-n + " + this.columns + ")", "small").set({"border-top": "solid 1px " + this.colorBorder}), a.r(t + " > .--grid-inner > *", "small").set({"border-left": 0}), a.r(t + " > .--grid-inner > div:first-child", "small").set({"border-top": 0});
                            break;
                        case"stack-reverse":
                            a.r(t + " > .--grid-inner > :nth-child(-n + " + this.columns + ")", "small").set({"border-top": "solid 1px " + this.colorBorder}), a.r(t + " > .--grid-inner > *", "small").set({"border-left": 0}), a.r(t + " > .--grid-inner > div:last-child", "small").set({"border-top": 0});
                            break;
                        case"normal":
                    }
                    this.DEBUG && (a.r(t + " > .--grid-inner > *").set({"box-shadow": "inset 0 0 0 1px green"}), a.r(t + " > .--grid-inner > * > *").set({"box-shadow": "0 0 0 1px orange"})), a.r(t + " > .--grid-inner > * > *").set({width: "100%"}), a.r(t + " > .--grid-inner > * > * > *").set({
                        "margin-top": this.spacing + "rem",
                        "margin-bottom": this.spacing + "rem"
                    }), a.r(t + " > .--grid-inner > * > * > *:first-child").set({"margin-top": "0"}), a.r(t + " > .--grid-inner > * > * > *:last-child").set({"margin-bottom": "0"})
            }
        }, t.exports = o
    }, {"./component": 7}], 14: [function (e, t, i) {
        function o(e, t) {
            this.icons = [], this.shape = null, this.cornerRadius = null, this.size = null, this.spacing = null, this.style = null, this.colorFG = null, this.colorBG = null, this.colorHover = null, a.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, n = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><section data-title="Appearance"><div class="field"><label ' + o("style") + '>Style</label><div class="select-wrapper"><select ' + n("style") + '><option value="default">Default</option><option value="solid">Solid</option><option value="outline">Outline</option></select></div></div><div class="field"><label for="colorFG">Icon Color</label><input type="hexcolor" data-alpha="1" name="colorFG" id="colorFG" value="#000000" class="small" maxlength="9" /></div><div class="field" ' + s("style", "!default") + '><label for="colorBG"><span ' + s("style", "solid") + ">Background Color</span><span " + s("style", "outline") + '>Outline Color</span></label><input type="hexcolor" data-alpha="1" name="colorBG" id="colorBG" value="#FFFFFF" class="small" maxlength="9" /></div><div class="field"><label for="colorHover" class="optional">Hover Color</label><input type="hexcolor" data-alpha="1" name="colorHover" id="colorHover" value="" class="small" maxlength="9" data-optional="1" /></div><div class="field"><label ' + o("size") + '>Size</label><input type="range" ' + n("size") + ' min="0.5" max="4" step="0.125" data-status /></div><div class="field-group" ' + s("style", "!default") + '><div class="field"><label ' + o("shape") + '>Shape</label><div class="select-wrapper"><select ' + n("shape") + '><option value="rectangle">Rectangle</option><option value="circle">Circle</option></select></div></div><div class="field" ' + s("shape", "rectangle") + "><label " + o("cornerRadius") + '>Corner Radius</label><input type="range" ' + n("cornerRadius") + ' min="0" max="2" step="0.125" data-status /></div></div><div class="field"><label ' + o("spacing") + '>Spacing</label><input type="range" ' + n("spacing") + ' min="0" max="2" step="0.125" data-status /></div></section><section data-title="Icons"><div class="group" id="icons" name="icons" data-collapse="1" data-collapse-singular="1" data-min="1" data-max="20" data-title="type" data-value="[{}]"><div class="field"><label for="type">Type</label><div class="select-wrapper"><select name="type" id="type">' + function () {
                    var e, t = app.build.icons.list, i = "";
                    for (e in t)i += '<option value="' + t[e].name + '">' + t[e].title + "</option>";
                    return i
                }() + '</select></div></div><div class="field"><label for="url">URL</label><input type="text" name="url" id="url" value="' + app.URL_PLACEHOLDER + '" maxlength="1024" /><p class="note">' + app.build.messages.linkURLs + '</p></div><div class="field"><label for="colorFG" class="optional">Icon Color</label><input type="hexcolor" data-alpha="1" name="colorFG" id="colorFG" value="" class="small" maxlength="9" data-optional="1" /></div><div class="field" ' + s("style", "!default") + '><label for="colorBG"><span ' + s("style", "solid") + ' class="optional">Background Color</span><span ' + s("style", "outline") + ' class="optional">Outline Color</span></label><input type="hexcolor" data-alpha="1" name="colorBG" id="colorBG" value="" class="small" maxlength="9" data-optional="1" /></div><div class="field"><label for="colorHover" class="optional">Hover Color</label><input type="hexcolor" data-alpha="1" name="colorHover" id="colorHover" value="" class="small" maxlength="9" data-optional="1" /></div></div></section></form>'), this.registerProperty("style", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["solid", "outline", "default"]
            }), this.registerProperty("size", {
                input: "range",
                type: "float"
            }), this.registerProperty("spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("shape", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["rectangle", "circle"]
            }), this.registerProperty("cornerRadius", {
                input: "range",
                type: "float",
                map: [{
                    type: "buttons", property: "cornerRadius", condition: function (e) {
                        return "rectangle" == this.shape && ("outline" == this.style || "solid" == this.style)
                    }
                }]
            }), this.registerProperty("colorFG", {
                input: "text",
                type: "htmlacolor",
                map: [{
                    type: "text", property: "color", condition: function (e) {
                        return ("default" == this.style || "outline" == this.style) && "none" == e._role
                    }
                }, {
                    type: "form", property: "input_colorFG", condition: function (e) {
                        return "default" == this.style || "outline" == this.style
                    }
                }, {
                    type: "*", property: "color", condition: function (e) {
                        return "default" == this.style || "outline" == this.style
                    }
                }, {
                    type: "buttons", property: "colorFG", condition: function (e) {
                        return "outline" == e.style
                    }
                }]
            }), this.registerProperty("colorBG", {
                input: "text",
                type: "htmlacolor",
                map: [{
                    type: "form", property: "button_colorBG", condition: function (e) {
                        return "outline" == this.style && "outline" == e.button.style
                    }
                }, {
                    type: "form", property: "input_colorBG", condition: function (e) {
                        return "outline" == this.style && "outline" == e.input.style
                    }
                }, {
                    type: "divider", property: "color", condition: function (e) {
                        return "outline" == this.style
                    }
                }, {
                    type: "text", property: "color", condition: function (e) {
                        return "outline" == this.style && "none" == e._role
                    }
                }, {
                    type: "*", property: "color", condition: function (e) {
                        return "outline" == this.style
                    }
                }]
            }), this.registerProperty("colorHover", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{
                    type: "form", property: "button_colorHover", condition: function (e) {
                        return "outline" == this.style && "outline" == e.button.style
                    }
                }]
            }), this.registerProperty("icons", {
                input: "group",
                type: {
                    type: "word",
                    url: "href",
                    colorFG: "htmlacolor?",
                    colorBG: "htmlacolor?",
                    colorHover: "htmlacolor?"
                }
            })
        }

        var a = e("./component");
        o.prototype = new a, o.prototype.constructor = o, o.prototype.type = "icons", o.prototype.contentDependencies = {}, o.prototype.import = function (e) {
            var t = this.importValue;
            this.shape = t(e, "shape"), this.cornerRadius = t(e, "cornerRadius"), this.size = t(e, "size"), this.spacing = t(e, "spacing"), this.style = t(e, "style"), this.colorFG = t(e, "colorFG"), this.colorBG = t(e, "colorBG"), this.colorHover = t(e, "colorHover"), this.icons = $.extend(this.icons, e.icons)
        }, o.prototype.export = function (e) {
            e.shape = this.shape, e.cornerRadius = this.cornerRadius, e.size = this.size, e.spacing = this.spacing, e.style = this.style, e.colorFG = this.colorFG, e.colorBG = this.colorBG, e.colorHover = this.colorHover, e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.shape = this.shape, i.cornerRadius = this.cornerRadius, i.size = this.size, i.spacing = this.spacing, i.style = this.style, i.colorFG = this.colorFG, i.colorBG = this.colorBG, i.colorHover = this.colorHover, i.icons = JSON.parse(JSON.stringify(this.icons)), i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--icons").set("padding", "0"), e.r(".--icons").set("letter-spacing", "0"), e.r(".--icons-li").set("display", "inline-block"), e.r(".--icons-li").set("vertical-align", "middle"), e.r(".--icons-li-a").set("display", "block"), e.r(".--icons-li-a").set("color", "inherit"), e.r(".--icons-li-a").set("text-decoration", "none"), e.r(".--icons-li-a").set("text-align", "center"), e.r(".--icons-li-a").set("letter-spacing", "0"), e.r(".--icons-li-a-label").set("display", "none")
        }, o.prototype.redraw = function (e) {
            var t, i, o, a, s, r, l = this.styleSheet, p = this, d = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (d(["icons"], function () {
                if (i = '<div class="--icons" id="--' + p.id + '">', o = 1, a = p.icons.length, 0 == a) i += "(no icons???)"; else for (o = 1; o <= a; o++)s = p.icons[o - 1], r = app.build.icons.get(s.type), r && (1 == o && (i += "\t"), i += '<div class="--icons-li"><span class="--icons-li-a icon icon-' + r.code + " --icons-li-n" + o + '" data-href="' + s.url + '"><span class="--icons-li-a-label">' + s.type + "</span></span></div>");
                i += "</div>", p.$canvas.html(i)
            }), t = this.selector(), l.unsetAll(t), l.unsetAll(t, "xxsmall"), l.r(t).set("font-size", this.size + "em"), l.r(t).set("width", "calc(100% + " + this.spacing + "rem)"), l.r(t).set("margin-left", this.spacing * -.5 + "rem"), l.r(t, "xxsmall").set("width", "calc(100% + " + .75 * this.spacing + "rem)"), l.r(t, "xxsmall").set("margin-left", .75 * this.spacing * -.5 + "rem"), l.r(t + " .--icons-li").set("margin", .5 * this.spacing + "rem"), l.r(t + " .--icons-li", "xxsmall").set("margin", .75 * this.spacing * .5 + "rem"), this.shape) {
                case"circle":
                    l.r(t + " .--icons-li-a").set("border-radius", "100%");
                    break;
                case"rectangle":
                default:
                    this.cornerRadius > 0 && l.r(t + " .--icons-li-a").set("border-radius", this.cornerRadius + "rem")
            }
            for ("default" != this.style && (l.r(t + " .--icons-li-a").set("width", "2em"), l.r(t + " .--icons-li-a").set("height", "2em"), l.r(t + " .--icons-li-a").set("line-height", "2em")), o = 1, a = this.icons.length, o = 1; o <= a; o++)switch (s = this.icons[o - 1], n = o, this.style) {
                case"solid":
                    s.colorBG ? l.r(t + " .--icons-li-n" + n).set("background-color", s.colorBG) : l.r(t + " .--icons-li-n" + n).set("background-color", this.colorBG), s.colorFG ? l.r(t + " .--icons-li-n" + n).set("color", s.colorFG) : l.r(t + " .--icons-li-n" + n).set("color", this.colorFG), s.colorHover ? l.r(t + " .--icons-li-n" + n + ":hover").set("background-color", s.colorHover) : this.colorHover && l.r(t + " .--icons-li-n" + n + ":hover").set("background-color", this.colorHover);
                    break;
                case"outline":
                    s.colorFG ? l.r(t + " .--icons-li-n" + n).set("color", s.colorFG) : l.r(t + " .--icons-li-n" + n).set("color", this.colorFG), s.colorBG ? l.r(t + " .--icons-li-n" + n).set("border", "solid 1px " + s.colorBG) : l.r(t + " .--icons-li-n" + n).set("border", "solid 1px " + this.colorBG), s.colorHover ? l.r(t + " .--icons-li-n" + n + ":hover").set({
                        color: s.colorHover,
                        "border-color": s.colorHover
                    }) : this.colorHover && l.r(t + " .--icons-li-n" + n + ":hover").set({
                            color: this.colorHover,
                            "border-color": this.colorHover
                        });
                    break;
                case"default":
                default:
                    s.colorFG ? l.r(t + " .--icons-li-n" + n).set("color", s.colorFG) : l.r(t + " .--icons-li-n" + n).set("color", this.colorFG), s.colorHover ? l.r(t + " .--icons-li-n" + n + ":hover").set("color", s.colorHover) : this.colorHover && l.r(t + " .--icons-li-n" + n + ":hover").set("color", this.colorHover)
            }
        }, t.exports = o
    }, {"./component": 7}], 15: [function (e, t, i) {
        function o(e, t) {
            this.assetId = null, this.assetData = null, this.shape = null, this.cornerRadius = null, this.size = null, this.margins = null, this.altText = null, this.linkUrl = null, this.mobileLayout = {
                size: null,
                margins: null
            }, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><div class="field"><div class="image-cropper" data-maxSize="' + app.build.settings.assetSizeLimit + '" data-maxWH="' + app.build.settings.assetWHLimit + '"><input class="id" type="text" ' + a("assetId") + ' autocomplete="off" /><textarea class="data" ' + a("assetData") + '></textarea><div class="inner"><span class="button small special do-upload">Upload Image</span></div></div></div><div class="field"><label ' + o("size") + '>Size</label><input type="range" ' + a("size") + ' min="1" max="101" step="1" data-status="rename" data-status-args="' + this.SIZE_FLUSH + '=Flush" /></div><div class="field"><label ' + o("margins") + '>Margins</label><input type="range" ' + a("margins") + ' min="0" max="5" step="0.125" data-status /></div><div class="field" ' + s("size", "!" + this.SIZE_FLUSH) + "><label " + o("shape") + '>Shape</label><div class="select-wrapper"><select ' + a("shape") + '><option value="rectangle">Rectangle</option><option value="circle">Circle</option></select></div></div><div class="field" ' + s({
                    shape: "rectangle",
                    "size!": this.SIZE_FLUSH
                }) + "><label " + o("cornerRadius") + '>Corner Radius</label><input type="range" ' + a("cornerRadius") + ' min="0" max="3" step="0.125" data-status /></div><div class="field"><label ' + o("altText") + ' class="optional">Alt Text</label><input type="text" ' + a("altText") + ' maxlength="64" /><p class="note">This image\'s alternate text (if applicable).</p></div><div class="field"><label ' + o("linkUrl") + ' class="optional">Link URL</label><input type="text" ' + a("linkUrl") + ' maxlength="1024" /><p class="note">' + app.build.messages.linkURLs + '</p></div><hr /><div class="field-group"><label class="big">Mobile Layout</label><p class="note">' + app.build.messages.mobileLayout + '</p><div class="field" ' + s("size", "!" + this.SIZE_FLUSH) + "><label " + o("mobileLayout_size") + '>Size</label><input type="range" ' + a("mobileLayout_size") + ' min="0" max="100" step="1" data-status="rename" data-status-args="' + this.MOBILELAYOUT_SIZE_AUTO + '=Auto" /></div><div class="field"><label ' + o("mobileLayout_margins") + '>Margins</label><input type="range" ' + a("mobileLayout_margins") + ' min="-0.125" max="5" step="0.125" data-status="rename" data-status-args="' + this.MOBILELAYOUT_MARGINS_AUTO + '=Auto" /></div></div></form>'), this.registerProperty("assetId", {
                input: "text",
                type: "alnum",
                change: function () {
                    app.build.assetCache.add(i.assetId, i.assetData)
                }
            }), this.registerProperty("assetData", {input: "text"}), this.registerProperty("size", {
                input: "range",
                type: "int"
            }), this.registerProperty("margins", {
                input: "range",
                type: "float"
            }), this.registerProperty("shape", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["rectangle", "circle"]
            }), this.registerProperty("cornerRadius", {
                input: "range",
                type: "float"
            }), this.registerProperty("altText", {
                input: "text",
                type: "utf8text",
                optional: !0
            }), this.registerProperty("linkUrl", {
                input: "text",
                type: "href",
                optional: !0
            }), this.registerProperty("mobileLayout_size", {
                input: "range",
                type: "int"
            }), this.registerProperty("mobileLayout_margins", {input: "range", type: "float"});
            var i = this
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "image", o.prototype.contentDependencies = {}, o.prototype.SIZE_FLUSH = 101, o.prototype.MOBILELAYOUT_SIZE_AUTO = 0, o.prototype.MOBILELAYOUT_MARGINS_AUTO = -.125, o.prototype.assets = function () {
            var e = {};
            return this.assetId && (e[this.assetId] = this.assetData), e
        }, o.prototype.jsonObject = function () {
            var e = n.prototype.jsonObject.apply(this);
            return delete e.assetData, e
        }, o.prototype.import = function (e) {
            var t = this.importValue;
            this.assetId = t(e, "assetId"), this.shape = t(e, "shape"), this.cornerRadius = t(e, "cornerRadius"), this.size = t(e, "size"), this.margins = t(e, "margins"), this.altText = t(e, "altText"), this.linkUrl = t(e, "linkUrl"), this.mobileLayout = $.extend(this.mobileLayout, e.mobileLayout), this.assetId && (app.build.assetCache.exists(this.assetId) || app.build.assetCache.add(this.assetId, app.cleanHref() + "/asset/" + this.assetId), this.assetData = app.build.assetCache.get(this.assetId))
        }, o.prototype.export = function (e) {
            e.shape = this.shape, e.cornerRadius = this.cornerRadius, e.size = this.size, e.margins = this.margins, e.altText = this.altText, e.linkUrl = this.linkUrl, e.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.shape = this.shape, i.cornerRadius = this.cornerRadius, i.size = this.size, i.margins = this.margins, i.altText = this.altText, i.linkUrl = this.linkUrl, i.assetId = this.assetId, i.assetData = this.assetData, i.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), i.assetData ? i.assetData.match(/^data:/) ? (i.assetId = md5(String(Date.now()) + i.assetData), i.syncAll(), t(i), app.build.assetCache.add(i.assetId, i.assetData)) : app.toDataURL(i.assetData, function (e) {
                i.assetData = e, i.assetId = md5(String(Date.now()) + i.assetData), i.syncAll(), t(i), app.build.assetCache.add(i.assetId, i.assetData)
            }) : (i.syncAll(), t(i))
        }, o.prototype.cssBase = function (e) {
            e.r(".--image").set({
                position: "relative",
                overflow: "hidden",
                "max-width": "100%",
                display: "block"
            }), e.r(".--image.placeholder span").set({
                width: "100%",
                "max-width": "100%",
                position: "relative",
                overflow: "hidden",
                display: "block"
            }), e.r("#--main .component-wrapper.is-first > .component > .--image").set({"padding-top": "0"}), e.r("#--main .component-wrapper.is-last > .component > .--image").set({"padding-bottom": "0"}), e.r(".--image img").set({
                width: "100%",
                "max-width": "100%",
                display: "inline-block",
                "-vendor-pointer-events": "none"
            }), e.r("#--main .component-wrapper.flush > .component > .--image img").set({display: "block"}), e.r("#--main .component-wrapper.flush > .component > .--image span").set({display: "block"})
        }, o.prototype.redraw = function (e) {
            var t, i = this.styleSheet, o = this, n = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            if (this.assetId) {
                if (n(["assetId"], function () {
                        o.$canvas.html('<div class="--image" id="--' + o.id + '" data-href="' + o.linkUrl + '"><img src="' + o.assetData + '" data-alt="' + o.altText + '" draggable="false" /></div>')
                    }), t = this.selector(), i.unsetAll(t), i.unsetAll(t, "small"), this.margins > 0 && i.r(t).set("padding", this.margins + "rem 0"), this.mobileLayout.margins != this.MOBILELAYOUT_MARGINS_AUTO && i.r(t, "small").set("padding", this.mobileLayout.margins + "rem 0"), this.size == this.SIZE_FLUSH ? (i.r(t + " img").set("width", "100vw"), this.$wrapper.addClass("flush")) : (i.r(t + " img").set("width", 100 == this.size ? "100vw" : this.size + "rem"), this.mobileLayout.size != this.MOBILELAYOUT_SIZE_AUTO && i.r(t + " img", "small").set("width", 100 == this.mobileLayout.size ? "100vw" : this.mobileLayout.size + "rem"), this.$wrapper.removeClass("flush")), this.size != this.SIZE_FLUSH)switch (this.shape) {
                    case"circle":
                        i.r(t + " img").set("border-radius", "100%");
                        break;
                    case"rectangle":
                    default:
                        this.cornerRadius > 0 && i.r(t + " img").set("border-radius", this.cornerRadius + "rem")
                }
            } else if (n(["assetId"], function () {
                    o.$canvas.html('<div class="--image placeholder" id="--' + o.id + '" data-href="' + o.linkUrl + '"><span data-alt="' + o.altText + '"></span></div>')
                }), t = this.selector(), i.unsetAll(t), i.unsetAll(t, "small"), this.margins > 0 && i.r(t).set("padding", this.margins + "rem 0"), this.mobileLayout.margins != this.MOBILELAYOUT_MARGINS_AUTO && i.r(t, "small").set("padding", this.mobileLayout.margins + "rem 0"), this.size == this.SIZE_FLUSH ? (i.r(t + " span").set("width", "100vw"), i.r(t + " span").set("height", "100rem"), this.$wrapper.addClass("flush")) : (i.r(t + " span").set("width", 100 == this.size ? "100vw" : this.size + "rem"), i.r(t + " span").set("height", this.size + "rem"), this.mobileLayout.size != this.MOBILELAYOUT_SIZE_AUTO && (i.r(t + " span", "small").set("width", 100 == this.mobileLayout.size ? "100vw" : this.mobileLayout.size + "rem"), i.r(t + " span", "small").set("height", this.mobileLayout.size + "rem")), this.$wrapper.removeClass("flush")), this.size != this.SIZE_FLUSH)switch (this.shape) {
                case"circle":
                    i.r(t + " span").set("border-radius", "100%");
                    break;
                case"rectangle":
                    this.cornerRadius > 0 && i.r(t + " span").set("border-radius", this.cornerRadius + "rem")
            }
        }, t.exports = o
    }, {"./component": 7}], 16: [function (e, t, i) {
        function o(e, t) {
            this.style = null, this.spacing = null, this.appearance = null, this.color = null, this.colorHover = null, this.font = null, this.kerning = null, this.size = null, this.weight = null, this.links = [], n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            };
            this.form('<form><section data-title="Appearance"><div class="field"><label ' + o("style") + '>Style</label><div class="select-wrapper"><select ' + a("style") + '><option value="underlined">Underlined</option><option value="plain">Plain</option></select></div></div><div class="field"><label ' + o("spacing") + '>Spacing</label><input type="range" ' + a("spacing") + ' min="0" max="3" step="0.125" data-status /></div><hr /><div class="field"><label ' + o("font") + '>Font</label><div class="select-wrapper"><select ' + a("font") + ">" + function () {
                    var e, t = app.build.fonts.list, i = "";
                    for (e in t)i += '<option value="' + t[e].name + '">' + t[e].name + "</option>";
                    return i
                }() + '</select></div></div><div class="field"><label ' + o("color") + '>Color</label><input type="hexcolor" data-alpha="1" ' + a("color") + ' maxlength="9" /></div><div class="field"><label ' + o("colorHover") + '>Hover Color</label><input type="hexcolor" data-alpha="1" ' + a("colorHover") + ' maxlength="9" data-optional="1" /></div><div class="field"><label ' + o("weight") + '>Weight</label><input type="range" ' + a("weight") + ' min="100" max="900" step="100" data-status="font-weight" /></div><div class="field"><label ' + o("size") + '>Size</label><input type="range" ' + a("size") + ' min="0.5" max="4" step="0.125" data-status /></div><div class="field"><label ' + o("kerning") + '>Letter Spacing</label><input type="range" ' + a("kerning") + ' min="-0.5" max="1.5" step="0.025" data-status /></div><div class="field"><label ' + o("appearance") + '>Appearance</label><div class="select-wrapper"><select ' + a("appearance") + '><option value="normal">Normal</option><option value="lowercase">Lowercase</option><option value="uppercase">Uppercase</option><option value="smallcaps">Small Caps</option></select></div></div></section><section data-title="Links"><div class="group" id="links" name="links" data-collapse="1" data-min="1" data-max="10" data-title="label" data-value="[{}]"><div class="field"><label for="label">Label</label><input type="text" name="label" id="label" value="Link" maxlength="256" /></div><div class="field"><label for="url">URL</label><input type="text" name="url" id="url" value="' + app.URL_PLACEHOLDER + '" maxlength="1024" /><p class="note">' + app.build.messages.linkURLs + "</p></div></div></section></form>"), this.registerProperty("spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("style", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["underlined", "plain"],
                map: [{type: "text", property: "styleLink"}]
            }), this.registerProperty("appearance", {
                input: "range",
                type: "word",
                allowed: ["normal", "uppercase", "lowercase", "smallcaps"],
                map: [{type: "text", property: "appearance"}, {type: "form", property: "input_appearance"}, {
                    type: "*",
                    property: "appearance"
                }]
            }), this.registerProperty("color", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "text", property: "colorLink"}, {type: "text", property: "color"}, {
                    type: "form",
                    property: "input_colorFG",
                    condition: function (e) {
                        return "outline" == e.input.style
                    }
                }, {type: "*", property: "color"}, {
                    type: "buttons", property: "colorFG", condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorFG", condition: function (e) {
                        return "default" == e.style || "outline" == e.style
                    }
                }]
            }), this.registerProperty("colorHover", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "text", property: "colorLinkHover"}]
            }), this.registerProperty("font", {
                input: "select",
                live: !0,
                map: [{type: "text", property: "font"}, {type: "form", property: "input_font"}, {
                    type: "*",
                    property: "font"
                }]
            }), this.registerProperty("kerning", {
                input: "range",
                type: "float",
                map: [{type: "text", property: "kerning"}, {type: "form", property: "input_kerning"}, {
                    type: "*",
                    property: "kerning"
                }]
            }), this.registerProperty("size", {
                input: "range",
                type: "float",
                map: [{type: "text", property: "size"}, {type: "form", property: "input_size"}, {
                    type: "*",
                    property: "size"
                }]
            }), this.registerProperty("weight", {
                input: "range",
                type: "int",
                map: [{type: "text", property: "weight"}, {type: "form", property: "input_weight"}, {
                    type: "*",
                    property: "weight"
                }]
            }), this.registerProperty("links", {input: "group", type: {label: "utf8text", url: "href"}});
            var i = this;
            app.build.fonts.initField(this.properties.font.$field)
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "links", o.prototype.contentDependencies = {}, o.prototype.isTextual = function () {
            return !0
        }, o.prototype.import = function (e) {
            var t = this.importValue;
            this.spacing = t(e, "spacing"), this.style = t(e, "style"), this.appearance = t(e, "appearance"), this.color = t(e, "color"), this.colorHover = t(e, "colorHover"), this.font = t(e, "font"), this.kerning = t(e, "kerning"), this.size = t(e, "size"), this.weight = t(e, "weight"), this.links = $.extend(this.links, e.links)
        }, o.prototype.export = function (e) {
            e.spacing = this.spacing, e.style = this.style, e.appearance = this.appearance, e.color = this.color, e.colorHover = this.colorHover, e.font = this.font, e.kerning = this.kerning, e.size = this.size, e.weight = this.weight, e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.spacing = this.spacing, i.style = this.style, i.appearance = this.appearance, i.color = this.color, i.colorHover = this.colorHover, i.font = this.font, i.kerning = this.kerning, i.size = this.size, i.weight = this.weight, i.links = JSON.parse(JSON.stringify(this.links)), i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--links").set("padding", "0"), e.r(".--links").set("letter-spacing", "0"), e.r(".--links").set("line-height", "1.5"), e.r(".--links-li").set("display", "inline-block"), e.r(".--links-li").set("vertical-align", "middle"), e.r(".--links-li-a").set("display", "block")
        }, o.prototype.redraw = function (e) {
            var t, i, o, n, a, s = this.styleSheet, r = this, l = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (l(["links"], function () {
                if (i = '<div class="--links" id="--' + r.id + '">', o = 1, n = r.links.length, 0 == n) i += "(no links???)"; else for (o = 1; o <= n; o++)a = r.links[o - 1], 1 == o && (i += "\t"), i += '<div class="--links-li"><span class="--links-li-a" data-href="' + a.url + '">' + a.label + "</span></div>";
                i += "</div>", r.$canvas.html(i)
            }), t = this.selector(), s.unsetAll(t), s.unsetAll(t, "xxsmall"), this.appearance) {
                case"uppercase":
                    s.r(t).set("text-transform", "uppercase");
                    break;
                case"lowercase":
                    s.r(t).set("text-transform", "lowercase");
                    break;
                case"smallcaps":
                    s.r(t).set("font-variant", "small-caps");
                    break;
                case"normal":
            }
            switch (s.r(t).set("font-family", "'" + this.font + "'"), 0 != this.kerning && s.r(t).set("letter-spacing", this.kerning + "rem"), s.r(t).set("font-size", this.size + "em"), s.r(t).set("font-weight", app.build.fonts.optimizeWeight(this.font, this.weight)), s.r(t).set("margin-left", this.spacing * -.5 + "rem"), s.r(t).set("width", "calc(100% + " + (this.spacing + Math.max(0, this.kerning)) + "rem)"), s.r(t, "xxsmall").set("margin-left", .75 * this.spacing * -.5 + "rem"), s.r(t, "xxsmall").set("width", "calc(100% + " + (.75 * this.spacing + Math.max(0, this.kerning)) + "rem)"), s.r(t + " .--links-li").set("margin", .5 * this.spacing + "rem"), s.r(t + " .--links-li", "xxsmall").set("margin", .75 * this.spacing * .5 + "rem"), s.r(t + " .--links-li-a").set("color", this.color), this.colorHover && this.colorHover != this.color && s.r(t + " .--links-li-a:hover").set("color", this.colorHover), this.style) {
                default:
                case"underlined":
                    s.r(t + " .--links-li-a").set("text-decoration", "underline"), this.colorHover || s.r(t + " .--links-li-a:hover").set("text-decoration", "none");
                    break;
                case"plain":
                    s.r(t + " .--links-li-a").set("text-decoration", "none"), this.colorHover || s.r(t + " .--links-li-a:hover").set("text-decoration", "underline")
            }
        }, t.exports = o
    }, {"./component": 7}], 17: [function (e, t, i) {
        function o(e, t) {
            this.style = null, this.color = null, this.angle = null, this.stop1 = {
                color: null,
                position: null
            }, this.stop2 = {
                color: null,
                position: null
            }, this.assetId = null, this.assetData = null, this.size = null, this.sizeValue = null, this.position = null, this.tile = null, this.colorBG = null, this.overlay = {
                style: null,
                color: null,
                angle: null,
                stop1: {color: null, position: null},
                stop2: {color: null, position: null}
            }, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><section data-title="Appearance"><div class="field"><label ' + o("style") + '>Style</label><div class="select-wrapper"><select ' + a("style") + '><option value="color">Color</option><option value="gradient">Gradient</option><option value="image">Image</option></select></div></div><hr /><div class="field-group" ' + s("style", "color") + '><div class="field"><label ' + o("color") + '>Color</label><input type="hexcolor" ' + a("color") + ' maxlength="9" /></div></div><div class="field-group" ' + s("style", "gradient") + '><div class="field"><label ' + o("angle") + '>Angle</label><input type="range" ' + a("angle") + ' min="0" max="360" step="1" data-status="degrees" /></div><label>Stop #1</label><div class="field"><input type="hexcolor" ' + a("stop1_color") + ' maxlength="9" /></div><div class="field"><input type="range" ' + a("stop1_position") + ' min="0" max="100" step="1" /></div><label>Stop #2</label><div class="field"><input type="hexcolor" ' + a("stop2_color") + ' maxlength="9" /></div><div class="field"><input type="range" ' + a("stop2_position") + ' min="0" max="100" step="1" /></div></div><div class="field-group" ' + s("style", "image") + '><div class="field"><div class="image-cropper" data-maxSize="' + app.build.settings.assetSizeLimit + '" data-maxWH="' + app.build.settings.assetBGWHLimit + '"><input class="id" type="text" ' + a("assetId") + ' autocomplete="off" /><textarea class="data" ' + a("assetData") + '></textarea><div class="inner"><span class="button small special do-upload">Upload Image</span><span class="button small do-imageLibrary">Pick from library</span></div></div><p class="note">Note: If you\'re not planning to tile your background, pick an image in landscape orientation and set "Size" to "Fill" for best results.</p></div><div class="field half first"><label ' + o("position") + '>Position</label><div class="select-wrapper"><select ' + a("position") + '><option value="center">Center</option><option value="top-left">Top Left</option><option value="top">Top</option><option value="top-right">Top right</option><option value="right">Right</option><option value="bottom-right">Bottom Right</option><option value="bottom">Bottom</option><option value="bottom-left">Bottom Left</option><option value="left">Left</option></select></div></div><div class="field half"><label ' + o("tile") + '>Tile</label><div class="select-wrapper"><select ' + a("tile") + '><option value="off">Off</option><option value="horizontal">Horizontally</option><option value="vertical">Vertically</option><option value="both">Both</option></select></div></div><div class="field"><label ' + o("size") + '>Size</label><div class="select-wrapper"><select ' + a("size") + '><option value="fill">Fill</option><option value="fit">Fit</option><option value="stretch">Stretch</option><option value="default">Default</option><option value="custom">Custom</option></select></div></div><div class="field" ' + s("size", "custom") + '><input type="range" ' + a("sizeValue") + ' min="10" max="100" step="1" /></div><div class="field"><label ' + o("colorBG") + '>Transparency Color</label><input type="hexcolor" ' + a("colorBG") + ' maxlength="9" /><p class="note">Sets the color of any transparent regions in your background image.</p></div><hr /><div class="field"><label ' + o("overlay_style") + '>Overlay</label><div class="select-wrapper"><select ' + a("overlay_style") + '><option value="none">None</option><option value="color">Color</option><option value="gradient">Gradient</option></select></div></div><div class="field-group" ' + s("overlay_style", "color") + '><div class="field"><label ' + o("overlay_color") + '>Color</label><input type="hexcolor" data-alpha="1" ' + a("overlay_color") + ' maxlength="9" /></div></div><div class="field-group" ' + s("overlay_style", "gradient") + '><div class="field"><label ' + o("overlay_angle") + '>Angle</label><input type="range" ' + a("overlay_angle") + ' min="0" max="360" step="1" data-status="degrees" /></div><label>Stop #1</label><div class="field"><input type="hexcolor" data-alpha="1" ' + a("overlay_stop1_color") + ' maxlength="9" /></div><div class="field"><input type="range" ' + a("overlay_stop1_position") + ' min="0" max="100" step="1" /></div><label>Stop #2</label><div class="field"><input type="hexcolor" data-alpha="1" ' + a("overlay_stop2_color") + ' maxlength="9" /></div><div class="field"><input type="range" ' + a("overlay_stop2_position") + ' min="0" max="100" step="1" /></div></div></div></section><section data-title="Animation"><div class="field"><label ' + o("onload_style") + '>On Load</label><p class="note">Performed when your site finishes loading.</p><div class="select-wrapper"><select ' + a("onload_style") + '><option value="none">None</option><option value="fade-in">Fade In</option></select></div></div><div class="field" ' + s("onload_style", "!none") + "><label " + o("onload_delay") + '>Delay</label><input type="range" ' + a("onload_delay") + ' min="0" max="5000" step="125" data-status="seconds" /></div><div class="field" ' + s("onload_style", "!none") + "><label " + o("onload_speed") + '>Duration</label><input type="range" ' + a("onload_speed") + ' min="0" max="5000" step="125" data-status="seconds" /></div><div class="field" ' + s("onload_style", "!none") + "><label " + o("onload_color") + '>Color</label><input type="hexcolor" ' + a("onload_color") + ' maxlength="9" /></div></section></form>'), this.registerProperty("style", {
                input: "select",
                live: !0,
                allowed: ["color", "gradient", "image"]
            }), this.registerProperty("onload_style", {
                input: "select",
                live: !0,
                allowed: ["none", "fade-in"]
            }), this.registerProperty("onload_delay", {
                input: "range",
                type: "int"
            }), this.registerProperty("onload_speed", {
                input: "range",
                type: "int"
            }), this.registerProperty("onload_color", {
                input: "text",
                type: "htmlcolor"
            }), this.registerProperty("color", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("angle", {
                input: "range",
                type: "int"
            }), this.registerProperty("stop1_color", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("stop1_position", {
                input: "range",
                type: "int"
            }), this.registerProperty("stop2_color", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("stop2_position", {
                input: "range",
                type: "int"
            }), this.registerProperty("assetId", {
                input: "text", type: "alnum", change: function () {
                    app.build.assetCache.add(i.assetId, i.assetData)
                }
            }), this.registerProperty("assetData", {input: "text"}), this.registerProperty("position", {
                input: "select",
                type: "word",
                allowed: ["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "center"]
            }), this.registerProperty("size", {
                input: "select",
                type: "word",
                allowed: ["stretch", "fit", "fill", "default", "custom"]
            }), this.registerProperty("sizeValue", {
                input: "range",
                type: "int"
            }), this.registerProperty("tile", {
                input: "select",
                type: "word",
                allowed: ["off", "horizontal", "vertical", "both"]
            }), this.registerProperty("colorBG", {
                input: "text",
                type: "htmlcolor"
            }), this.registerProperty("overlay_style", {
                input: "select",
                type: "word",
                allowed: ["none", "color", "gradient"]
            }), this.registerProperty("overlay_color", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("overlay_angle", {
                input: "range",
                type: "int"
            }), this.registerProperty("overlay_stop1_color", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("overlay_stop1_position", {
                input: "range",
                type: "int"
            }), this.registerProperty("overlay_stop2_color", {
                input: "text",
                type: "htmlacolor"
            }), this.registerProperty("overlay_stop2_position", {input: "range", type: "int"});
            var i = this;
            this.$form.on("click", ".do-imageLibrary", function (e) {
                e.preventDefault(), e.stopPropagation(), app.build.ui.imageLibraryDialog.show(i.properties.assetId.$field.parent().get(0)._formImageCropper.$image, i)
            })
        }

        var n = e("./component");
        e("./CSSRuleWrapper.js"), e("./CSSStyleSheetWrapper.js");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "page", o.prototype.assets = function () {
            var e = {};
            return "image" == this.style && this.assetId && (e[this.assetId] = this.assetData), e
        }, o.prototype.jsonObject = function () {
            var e = n.prototype.jsonObject.apply(this);
            return delete e.assetData, "image" != e.style && delete e.assetId, e
        }, o.prototype.import = function (e) {
            var t = this.importValue;
            this.style = t(e, "style"), this.onload = $.extend(this.onload, e.onload), this.color = t(e, "color"), this.angle = t(e, "angle"), this.stop1 = $.extend(this.stop1, e.stop1), this.stop2 = $.extend(this.stop2, e.stop2), this.assetId = t(e, "assetId"), this.position = t(e, "position"), this.size = t(e, "size"), this.sizeValue = t(e, "sizeValue"), this.tile = t(e, "tile"), this.colorBG = t(e, "colorBG"), this.overlay = $.extend(this.overlay, e.overlay), "image" == this.style && this.assetId && (app.build.assetCache.exists(this.assetId) || app.build.assetCache.add(this.assetId, app.cleanHref() + "/asset/" + this.assetId), this.assetData = app.build.assetCache.get(this.assetId))
        }, o.prototype.cssBase = function (e) {
        }, o.prototype.redraw = function (e) {
            var t, i, o = this.$canvas, n = this.styleSheet, a = this, s = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            if (s([], function () {
                    a.$canvas.html('<div id="--body" class="is-stopped"><div id="--wrapper"><div id="--main"><div class="--inner"></div></div></div></div>')
                }), n.r("#canvas").set("min-height", "100vh"), n.r("#--body").set({
                    "min-width": "320px",
                    "min-height": "100vh",
                    "line-height": "1.0",
                    "word-wrap": "break-word",
                    "overflow-x": "hidden"
                }), n.r("#--body .--strong").set({
                    color: "inherit",
                    "font-weight": "bolder"
                }), n.r("#--body .--em").set({"font-style": "italic"}), n.r("#--body .--code").set({
                    "font-family": '"Lucida Console", "Courier New", monospace',
                    "font-weight": "normal",
                    "text-indent": 0,
                    "letter-spacing": 0,
                    "font-size": "0.9em",
                    margin: "0 0.25em",
                    padding: "0.25em 0.5em",
                    "background-color": "rgba(144,144,144,0.25)",
                    "border-radius": "0.25em"
                }), n.r("#--body .--mark").set({"background-color": "rgba(144,144,144,0.25)"}), n.r("#--body .--a").set({
                    "-vendor-transition": "color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease",
                    color: "inherit",
                    "text-decoration": "underline"
                }), n.r("#--body .--s").set({"text-decoration": "line-through"}), n.r("#--body:before").unset("width"), n.r("#--body:before", "xxlarge").unset("width"), n.r("#--body:before", "large").unset("width"), n.r("#--body:before", "xmedium").unset("width"), n.r("#--body:before").set({
                    content: "''",
                    position: "fixed",
                    display: "block",
                    top: "0",
                    left: "0",
                    right: "auto",
                    width: "100vw",
                    height: "100vh",
                    "z-index": "0",
                    "-vendor-pointer-events": "none",
                    "-vendor-transform": "scale(1)",
                    "background-attachment": "scroll"
                }), this.site.content && !this.site.content.overlapsBackground())switch (n.r("#--body:before").set("width", "calc(100vw - " + this.site.content.normalizedWidth() + "rem)"), n.r("#--body:before", "xxlarge").set("width", "calc(100vw - " + this.site.content.normalizedWidth("xxlarge") + "rem)"), n.r("#--body:before", "large").set("width", "calc(100vw - " + this.site.content.normalizedWidth("large") + "rem)"), n.r("#--body:before", "xmedium").set("width", "calc(100vw - " + this.site.content.normalizedWidth("xmedium") + "rem)"), this.site.content.position) {
                case"top-left":
                case"left":
                case"bottom-left":
                    n.r("#--body:before").set({left: "auto", right: "0"});
                    break;
                case"top-right":
                case"right":
                case"bottom-right":
                    n.r("#--body:before").set({left: "0", right: "auto"})
            } else n.r("#--body:before").set({width: "100vw", left: "0", right: "auto"});
            var r = {image: [], position: [], repeat: [], size: []};
            if ("image" == this.style)switch (this.overlay.style) {
                case"color":
                    r.image.push("linear-gradient(to top, " + this.overlay.color + ", " + this.overlay.color + ")"), r.position.push("0% 0%"), r.repeat.push("repeat"), r.size.push("auto");
                    break;
                case"gradient":
                    t = this.overlay.stop1.color + " " + this.overlay.stop1.position + "%", i = this.overlay.stop2.color + " " + this.overlay.stop2.position + "%", r.image.push("linear-gradient(" + this.overlay.angle + "deg, " + t + ", " + i + ")"), r.position.push("0% 0%"), r.repeat.push("repeat"), r.size.push("cover")
            }
            switch (this.style) {
                case"color":
                    o.removeClass("placeholder"), r.image.push("linear-gradient(to top, " + this.color + ", " + this.color + ")"), r.position.push("0% 0%"), r.repeat.push("repeat"), r.size.push("auto");
                    break;
                case"gradient":
                    o.removeClass("placeholder"), t = this.stop1.color + " " + this.stop1.position + "%", i = this.stop2.color + " " + this.stop2.position + "%", r.image.push("linear-gradient(" + this.angle + "deg, " + t + ", " + i + ")"), r.position.push("0% 0%"), r.repeat.push("repeat"), r.size.push("cover");
                    break;
                case"image":
                    if (!this.assetId) {
                        o.addClass("placeholder");
                        break
                    }
                    switch (o.removeClass("placeholder"), r.image.push("url(" + this.assetData + ")"), this.position) {
                        case"top-left":
                            t = "top left";
                            break;
                        case"top":
                            t = "top";
                            break;
                        case"top-right":
                            t = "top right";
                            break;
                        case"right":
                            t = "right";
                            break;
                        case"bottom-right":
                            t = "bottom right";
                            break;
                        case"bottom":
                            t = "bottom";
                            break;
                        case"bottom-left":
                            t = "bottom left";
                            break;
                        case"left":
                            t = "left";
                            break;
                        case"center":
                        default:
                            t = "center"
                    }
                    switch (r.position.push(t), this.tile) {
                        case"horizontal":
                            t = "repeat-x";
                            break;
                        case"vertical":
                            t = "repeat-y";
                            break;
                        case"both":
                            t = "repeat";
                            break;
                        default:
                        case"off":
                            t = "no-repeat"
                    }
                    switch (r.repeat.push(t), this.size) {
                        case"stretch":
                            t = "100% 100%";
                            break;
                        case"fit":
                            t = "contain";
                            break;
                        case"fill":
                            t = "cover";
                            break;
                        case"custom":
                            t = this.sizeValue + "rem";
                            break;
                        case"default":
                        default:
                            t = "auto"
                    }
                    r.size.push(t), r.image.push("linear-gradient(to top, " + this.colorBG + ", " + this.colorBG + ")"), r.position.push("0% 0%"), r.repeat.push("repeat"), r.size.push("auto")
            }
            n.r("#--body:before").set("background-image", r.image.join(", ")), n.r("#--body:before").set("background-position", r.position.join(", ")), n.r("#--body:before").set("background-repeat", r.repeat.join(", ")), n.r("#--body:before").set("background-size", r.size.join(", ")), n.r("#canvas.backgroundFriendly.hideOverlay #--body:before", "medium").set({"background-image": n.r("#--body:before").get("background-image").replace(/rgba?\(.+?\)/g, "rgba(0,0,0,0)")}), n.r("#--body").unset(["overflow"]), n.r("#--body.is-playing").unset(["overflow"]), n.r("#--body:after").unset(["display", "content", "position", "top", "left", "width", "height", "background-color", "z-index", "opacity", "visibility", "-vendor-transition"]), n.r("#--body.is-loading:after").unset(["opacity", "visibility"]), n.r("#--body:after").set({
                display: "none",
                content: "''"
            }), n.r("#--body.is-loading").set({
                "-vendor-animation": "none",
                "-vendor-transition": "none"
            }), n.r("#--body.is-loading:after").set({
                "-vendor-animation": "none",
                "-vendor-transition": "none"
            }), n.r("#--body.is-playing:before").set({display: "block"}), n.r("#--body.is-stopped").set({
                "-vendor-animation": "none",
                "-vendor-transition": "none"
            }), n.r("#--body.is-stopped:before").set({
                "-vendor-animation": "none",
                "-vendor-transition": "none"
            }), n.r("#--body.is-stopped *").set({
                "-vendor-animation": "none",
                "-vendor-transition": "none"
            }), n.r("#--body").set({overflow: "visible"}), n.r("#--body.is-playing").set({overflow: "hidden"});
            var l = this.onload.speed / 1e3, p = this.onload.delay / 1e3;
            switch (this.onload.style) {
                case"fade-in":
                    n.r("#--body:after").set({
                        display: "block",
                        content: "''",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        "background-color": this.onload.color,
                        "z-index": "1",
                        opacity: "0",
                        visibility: "hidden",
                        "-vendor-transition": "opacity " + l + "s ease-in-out " + p + "s, visibility " + l + "s " + p + "s"
                    }), n.r("#--body.is-loading:after").set({opacity: "1", visibility: "visible"});
                    break;
                case"none":
            }
        }, o.prototype.isAnimated = function () {
            return this.onload && this.onload.style && "none" != this.onload.style
        }, t.exports = o
    }, {"./CSSRuleWrapper.js": 2, "./CSSStyleSheetWrapper.js": 3, "./component": 7}], 18: [function (e, t, i) {
        function o(e, t) {
            this.app = t, this.config = null, this.components = {}, this.componentsIndex = [], this.lastComponents = {}, this.page = null, this.content = null, this.isDragging = !1, this.$canvas = t.canvas.$layer, e && this.init(e)
        }

        var n = (e("./component.js"), e("./pageComponent.js")), a = e("./contentComponent.js"),
            s = e("./iconsComponent.js"), r = e("./imageComponent.js"), l = e("./textComponent.js"),
            p = e("./dividerComponent.js"), d = e("./linksComponent.js"), c = e("./buttonsComponent.js"),
            u = e("./videoComponent.js"), h = e("./formComponent.js"), m = e("./tableComponent.js"),
            g = e("./galleryComponent.js"), f = e("./widgetComponent.js"), y = e("./audioComponent.js"),
            v = e("./controlComponent.js"), b = e("./timerComponent.js"), w = e("./gridComponent.js"),
            x = e("./columnsComponent.js");
        e("./CSSRuleWrapper.js"), e("./CSSStyleSheetWrapper.js");
        o.prototype.init = function (e) {
            var t, i, o;
            this.config = null, this.components = {}, this.componentsIndex = [], this.lastComponents = {}, this.page = null, this.content = null, this.config = e;
            for (t in e.components)i = e.components[t], o = this.add(i.type, i, i.id);
            this.refreshLastComponents();
            for (t in this.components)this.components[t].claimChildren(), this.components[t].redraw();
            this.syncCanvas()
        }, o.prototype.componentsByType = function (e) {
            var t, i = [];
            for (t = 0; t < this.componentsIndex.length; t++)this.componentsIndex[t].type == e && i.push(this.componentsIndex[t]);
            return i
        }, o.prototype.generateId = function (e) {
            var t, i;
            for (t = 1; i = e + (t < 10 ? "0" + t : t), i in this.components; t++);
            return i
        }, o.prototype.componentIndex = function (e) {
            return this.$canvas.find(".component-wrapper").index(e)
        }, o.prototype.checkComponentLimit = function () {
            return !(this.componentsIndex.length >= this.app.settings.componentLimit) || (this.app.settings.componentLimit >= this.app.settings.componentMax ? window.app.dialog.show({
                    title: "Too many elements",
                    message: "Sorry, you can only have up to <strong>" + this.app.settings.componentLimit + "</strong> elements per site.",
                    actions: {
                        Okay: function () {
                            this.hide()
                        }
                    }
                }) : this.app.perks.proDialog("Add more elements with Pro!"), !1)
        }, o.prototype.add = function (e, t, i, o, k) {
            var _, C, P = !1;
            if (("undefined" == typeof t || "undefined" == typeof i) && (P = !0, i = this.generateId(e), t = {}, !this.checkComponentLimit()))return null;
            if (e in this.app.componentDefaults) {
                var L = $.extend(!0, {}, this.app.componentDefaults[e], t);
                t = L
            }
            switch (e) {
                case"page":
                    _ = new n(i, t);
                    break;
                case"content":
                    _ = new a(i, t);
                    break;
                case"icons":
                    _ = new s(i, t);
                    break;
                case"image":
                    _ = new r(i, t);
                    break;
                case"text":
                    _ = new l(i, t);
                    break;
                case"divider":
                    _ = new p(i, t);
                    break;
                case"links":
                    _ = new d(i, t);
                    break;
                case"buttons":
                    _ = new c(i, t);
                    break;
                case"video":
                    _ = new u(i, t);
                    break;
                case"form":
                    _ = new h(i, t);
                    break;
                case"table":
                    _ = new m(i, t);
                    break;
                case"gallery":
                    _ = new g(i, t);
                    break;
                case"widget":
                    _ = new f(i, t);
                    break;
                case"audio":
                    _ = new y(i, t);
                    break;
                case"control":
                    _ = new v(i, t);
                    break;
                case"timer":
                    _ = new b(i, t);
                    break;
                case"grid":
                    _ = new w(i, t);
                    break;
                case"columns":
                    _ = new x(i, t);
                    break;
                default:
                    return null
            }
            if (P) {
                for (C in this.app.components)this.app.components[C].prototype.optimize(this, this.componentsByType(C));
                if (e in this.lastComponents) this.lastComponents[e].export(_); else {
                    var S, T = [], z = this.componentsIndex.slice().reverse();
                    for (S in this.lastComponents)T.push(this.lastComponents[S]);
                    for (S = 0; S < z.length; S++)z[S].type in this.lastComponents && this.lastComponents[z[S].type] == z[S] || T.push(z[S]);
                    _.applyMap(T)
                }
                this.markChanged(), this.syncCanvas()
            }
            return this.insert(_, o, k), _
        }, o.prototype.insert = function (e, t, i) {
            var o;
            e.site = this, "page" == e.type ? (this.page = e, e.$wrapper = this.app.canvas.$layer, e.$canvas = this.app.canvas.$layer, e.styleSheet = this.app.canvas.styleSheet) : "content" == e.type ? (this.content = e, e.$wrapper = this.app.canvas.$layer.find("#--main"), e.$canvas = this.app.canvas.$layer.find("#--main"), e.styleSheet = this.app.canvas.styleSheet) : (this.componentsIndex.push(e), this.components[e.id] = e, e.$wrapper = $('<div class="component-wrapper" ' + (this.app.perks.has("use-beta-features") ? ' title="' + e.id + '"' : "") + ' data-type="' + e.type + '" data-id="' + e.id + '"><div class="component"></div></div>').appendTo(this.app.canvas.$layer.find(".--inner")), e.$canvas = e.$wrapper.children(".component"), e.styleSheet = this.app.canvas.styleSheet), "undefined" != typeof t && this.move(e, t, "after" == i ? 1 : -1), e.redraw();
            for (o in e.properties)e.properties[o].$field.triggerHandler("--insert");
            return window.app.$window.triggerHandler("resize.ie-flexbox-fix"), e
        }, o.prototype.get = function (e) {
            return this.page && e == this.page.id ? this.page : this.content && e == this.content.id ? this.content : e in this.components ? this.components[e] : null
        }, o.prototype.move = function (e, t, i) {
            var o, n, a, s, e, r, l, p;
            if ("object" == typeof e ? (o = e, a = this.index(e)) : (o = this.componentsIndex[e], a = e), "object" == typeof t ? (n = t, s = this.index(t)) : (n = this.componentsIndex[t], s = t), a === !1 || a == s || s < 0 || s > this.componentsIndex.length - 1)return !1;
            if (n.hasParent() && !n.parent.canAddChild(o) && (n = n.parent, s = this.index(n)), i == -1) o.$wrapper.insertBefore(n.$wrapper); else {
                if (1 != i)return !1;
                o.$wrapper.insertAfter(n.$wrapper)
            }
            setTimeout(function () {
                o.refresh()
            }, 0), e = this.componentsIndex, p = e.length, e.splice(a, 1), 1 == i && s == p - 1 ? e.push(o) : i == -1 && 0 == s ? e.unshift(o) : (a < s && s--, 1 == i && s++, r = e.slice(0, s), l = e.slice(s), r.push(o), this.componentsIndex = r.concat(l)), !o.hasParent() && n.hasParent() ? n.parent.addChild(o, n) : o.hasParent() && !n.hasParent() ? o.parent.removeChild(o) : o.hasParent() && n.hasParent() && o.parent !== n.parent ? n.parent.addChild(o, n) : o.hasParent() && n.hasParent() && o.parent.updateChild(o, n), this.markChanged(), this.syncCanvas(), this.dump()
        }, o.prototype.index = function (e) {
            var t;
            for (t in this.componentsIndex)if (this.componentsIndex[t] === e)return parseInt(t);
            return !1
        }, o.prototype.remove = function (e) {
            var t, i = e.id, o = this.index(e), n = e.type, a = e.$wrapper, s = e.$form;
            if (o === !1)return !1;
            if (e.hasChildren()) {
                for (t in e.children)this.move(e.children[t], e, -1);
                o = this.index(e)
            }
            e.hasParent() && e.parent.removeChild(e), a.remove(), s.remove(), this.lastComponents[n] === e && delete this.lastComponents[n], delete this.components[i], this.componentsIndex.splice(o, 1), e.id = null, this.app.ui.refresh(), window.app.$window.triggerHandler("resize.ie-flexbox-fix"), this.refreshLastComponents(), this.markChanged(), this.syncCanvas()
        }, o.prototype.clone = function (e, t) {
            var i = this;
            return this.checkComponentLimit() ? (t || (t = this.generateId(e.type)), void e.createClone(t, function (t) {
                i.insert(t, e), i.markChanged()
            })) : null
        }, o.prototype.redraw = function () {
            var e;
            this.page && this.page.redraw(), this.content && this.content.redraw();
            for (e in this.components)this.components[e].redraw()
        }, o.prototype.refresh = function () {
            var e;
            this.page && this.page.refresh(), this.content && this.content.refresh();
            for (e in this.components)this.components[e].refresh()
        }, o.prototype.syncCanvas = function () {
            this.$canvas.find(".component-wrapper").removeClass("is-first").removeClass("is-last"), this.$canvas.find(".component-wrapper:first-child").addClass("is-first"), this.$canvas.find(".component-wrapper:last-child").addClass("is-last"), this.$canvas.find('.component-wrapper[data-type="control"]').next(".component-wrapper").addClass("is-first"), this.$canvas.find('.component-wrapper[data-type="control"]').prev(".component-wrapper").addClass("is-last")
        }, o.prototype.dump = function () {
            var e, t;
            for (e in this.componentsIndex)t = this.componentsIndex[e]
        }, o.prototype.assets = function () {
            var e, t = {};
            t = $.extend(t, this.page.assets()), t = $.extend(t, this.content.assets());
            for (e in this.componentsIndex)t = $.extend(t, this.componentsIndex[e].assets());
            return t
        }, o.prototype.json = function (e) {
            var t, i;
            return t = this.jsonObject(), i = JSON.stringify(t, null, e ? 2 : null), i = i.replace(/:\s*\"(\-?[0-9]+\.[0-9]+)\"\s*/gm, ":$1")
        }, o.prototype.jsonObject = function () {
            var e, t;
            e = {components: []}, this.page && e.components.push(this.page.jsonObject()), this.content && e.components.push(this.content.jsonObject());
            for (t in this.componentsIndex)e.components.push(this.componentsIndex[t].jsonObject());
            return e
        }, o.prototype.refreshLastComponents = function () {
            var e, t;
            for (e = this.componentsIndex.length - 1; e >= 0; e--)t = this.componentsIndex[e], t.type in this.lastComponents || (this.lastComponents[t.type] = t)
        }, o.prototype.lastComponent = function (e) {
            this.lastComponents[e.type] = e
        }, o.prototype.markChanged = function () {
            var e = this;
            e.app.history.add()
        }, o.prototype.isAnimated = function () {
            var e;
            if (this.page.isAnimated())return !0;
            if (this.content.isAnimated())return !0;
            for (e in this.componentsIndex)if (this.componentsIndex[e].isAnimated())return !0;
            return !1
        }, o.prototype.isSectioned = function () {
            var e, t, i, o, n, a = [], s = ["section-break", "header-marker", "footer-marker"], r = function (e) {
                var t, i = {};
                for (t = 0; t < e.length; t++)e[t] in i || (i[e[t]] = 0), i[e[t]]++;
                return i
            };
            for (t in this.componentsIndex)if (e = this.componentsIndex[t], "control" == e.type && s.indexOf(e.mode) != -1) {
                if (a.push(e.mode), "section-break" == e.mode && !e.sectionBreak.name)return !1
            } else a.push("component");
            return i = 0, o = a.length - 1, n = function () {
                var e, t, n, s, l, p, d = ["s", "hs", "sf", "hsf"];
                if (e = r(a), !("section-break" in e))return "No section breaks";
                if ("header-marker" in e && e["header-marker"] > 1 || "footer-marker" in e && e["footer-marker"] > 1)return "Multiple header and/or footer markers";
                if ("header-marker" == a[i])return "Empty header";
                if ("footer-marker" == a[o])return "Empty footer";
                if ("section-break" == a[i])return "Empty first section";
                if ("section-break" == a[o])return "Empty last section";
                for (t = [], n = i; n <= o; n++)"component" != a[n] && (s = a[n].charAt(0), 0 != t.length && t[t.length - 1] == s || t.push(s));
                if (l = t.join(""), d.indexOf(l) == -1)return "Invalid order (" + l + ")";
                for (p = !1, n = i; n <= o; n++)if ("component" == a[n]) p = !1; else {
                    if (p)return "Empty section";
                    p = !0
                }
                return !0
            }(), n === !0
        }, o.prototype.hasControl = function (e) {
            var t;
            for (t in this.componentsIndex)if ("control" == this.componentsIndex[t].type && this.componentsIndex[t].mode == e)return !0;
            return !1
        }, o.prototype.animationDuration = function () {
            var e = 0;
            return this.isAnimated() ? (this.page && "none" != this.page.onload.style && (e = Math.max(e, this.page.onload.delay + this.page.onload.speed)), this.content && "none" != this.content.onload.style && (e = Math.max(e, this.content.onload.delay + this.content.onload.speed)), this.content && "none" != this.content.onloadComponents.style && (e = Math.max(e, this.content.onloadComponents.delay + this.content.onloadComponents.speed + (this.componentsIndex.length - 1) * this.content.onloadComponents.stagger)), e) : 0
        }, t.exports = o
    }, {
        "./CSSRuleWrapper.js": 2,
        "./CSSStyleSheetWrapper.js": 3,
        "./audioComponent.js": 4,
        "./buttonsComponent.js": 5,
        "./columnsComponent.js": 6,
        "./component.js": 7,
        "./contentComponent.js": 8,
        "./controlComponent.js": 9,
        "./dividerComponent.js": 10,
        "./formComponent.js": 11,
        "./galleryComponent.js": 12,
        "./gridComponent.js": 13,
        "./iconsComponent.js": 14,
        "./imageComponent.js": 15,
        "./linksComponent.js": 16,
        "./pageComponent.js": 17,
        "./tableComponent.js": 19,
        "./textComponent.js": 20,
        "./timerComponent.js": 21,
        "./videoComponent.js": 22,
        "./widgetComponent.js": 23
    }], 19: [function (e, t, i) {
        function o(e, t) {
            this.style = null, this.colorBorder = null, this.padding = null, this.width = null, this.appearance = null, this.color = null, this.colorLink = null, this.colorLinkHover = null, this.styleLink = null, this.colorCode = null, this.colorCodeBG = null, this.colorHighlight = null, this.colorHighlightBG = null, this.font = null, this.kerning = null, this.size = null, this.spacing = null, this.weight = null, this.headings = null, this.rows = null, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><section data-title="Appearance"><div class="field"><label ' + o("style") + '>Style</label><div class="select-wrapper"><select ' + a("style") + '><option value="minimal">Minimal</option><option value="grid">Grid</option></select></div></div><div class="field"><label ' + o("width") + '>Width</label><input type="range" ' + a("width") + ' min="15" max="100" step="1" data-status /></div><div class="field"><label ' + o("colorBorder") + '>Border Color</label><input type="hexcolor" maxlength="9" data-alpha="1" ' + a("colorBorder") + ' /></div><div class="field"><label ' + o("padding") + '>Padding</label><input type="range" ' + a("padding") + ' min="0" max="1" step="0.125" data-status /></div><hr /><div class="field"><label ' + o("font") + '>Font</label><div class="select-wrapper"><select ' + a("font") + ">" + function () {
                    var e, t = app.build.fonts.list, i = "";
                    for (e in t)i += '<option value="' + t[e].name + '">' + t[e].name + "</option>";
                    return i
                }() + '</select></div></div><div class="field"><label ' + o("color") + '>Color</label><input type="hexcolor" maxlength="9" data-alpha="1" ' + a("color") + ' /></div><div class="field" ' + s("hasHighlight", "1") + "><label " + o("colorHighlight") + '>Highlight Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + a("colorHighlight") + ' /></div><div class="field" ' + s("hasHighlight", "1") + "><label " + o("colorHighlightBG") + '>Highlight Background Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + a("colorHighlightBG") + ' /></div><div class="field" ' + s("hasCode", "1") + "><label " + o("colorCode") + '>Code Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + a("colorCode") + ' /></div><div class="field" ' + s("hasCode", "1") + "><label " + o("colorCodeBG") + '>Code Background Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + a("colorCodeBG") + ' /></div><div class="field" ' + s("hasLinks", "1") + "><label " + o("colorLink") + '>Link Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + a("colorLink") + ' /></div><div class="field" ' + s("hasLinks", "1") + "><label " + o("colorLinkHover") + '>Link Hover Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + a("colorLinkHover") + ' /></div><div class="field" ' + s("hasLinks", "1") + "><label " + o("styleLink") + '>Link Style</label><div class="select-wrapper"><select ' + a("styleLink") + '><option value="underlined">Underlined</option><option value="plain">Plain</option></select></div></div><div class="field"><label ' + o("weight") + '>Weight</label><input type="range" ' + a("weight") + ' min="100" max="900" step="100" data-status="font-weight" /></div><div class="field"><label ' + o("size") + '>Size</label><input type="range" ' + a("size") + ' min="0.5" max="7" step="0.125" data-status /></div><div class="field"><label ' + o("spacing") + '>Line Spacing</label><input type="range" ' + a("spacing") + ' min="0.75" max="2.5" step="0.125" data-status /></div><div class="field"><label ' + o("kerning") + '>Letter Spacing</label><input type="range" ' + a("kerning") + ' min="-0.5" max="1.5" step="0.025" data-status /></div><div class="field"><label ' + o("appearance") + '>Appearance</label><div class="select-wrapper"><select ' + a("appearance") + '><option value="normal">Normal</option><option value="lowercase">Lowercase</option><option value="uppercase">Uppercase</option><option value="smallcaps">Small Caps</option></select></div></div></section><section data-title="Content"><div class="field"><label ' + o("headings") + ' class="optional">Headings</label><div class="textarea-wrapper"><textarea ' + a("headings") + ' maxlength="16384" data-autosize data-autosize-newline data-optional="1"></textarea></div><p class="note">One heading per line (up to 10). Prefix with \'-\' to right-align column. Prefix and suffix with \'-\' to center-align column.</p></div><div class="field"><label ' + o("rows") + '>Rows</label><div class="textarea-wrapper"><textarea ' + a("rows") + ' maxlength="16384" data-autosize data-autosize-newline data-optional="1"></textarea></div><div class="note"><p>One cell per line. Skip a line to start a new row. ' + app.build.messages.markdown + "</p>" + app.build.messages.markdownLiteSyntax + '</div><input type="hidden" ' + a("hasLinks") + ' value="0" /><input type="hidden" ' + a("hasCode") + ' value="0" /><input type="hidden" ' + a("hasHighlight") + ' value="0" /></div></section></form>'), this.registerProperty("style", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["minimal", "grid"]
            }), this.registerProperty("colorBorder", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "divider", property: "color"}, {
                    type: "columns",
                    property: "colorBorder"
                }, {
                    type: "buttons", property: "colorBG", condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorBG", condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "text", property: "color", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "color"}]
            }), this.registerProperty("padding", {
                input: "range",
                type: "float"
            }), this.registerProperty("width", {
                input: "range",
                type: "float"
            }), this.registerProperty("appearance", {
                input: "range",
                type: "word",
                allowed: ["normal", "uppercase", "lowercase", "smallcaps"],
                map: [{type: "text", property: "appearance"}, {type: "form", property: "input_appearance"}, {
                    type: "*",
                    property: "appearance"
                }]
            }), this.registerProperty("color", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "text", property: "color"}, {
                    type: "form",
                    property: "input_colorFG",
                    condition: function (e) {
                        return "outline" == e.input.style
                    }
                }, {type: "*", property: "color"}, {
                    type: "buttons", property: "colorFG", condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorFG", condition: function (e) {
                        return "default" == e.style || "outline" == e.style
                    }
                }]
            }), this.registerProperty("colorLink", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "text", property: "colorLink"}, {type: "links", property: "color"}]
            }), this.registerProperty("colorLinkHover", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "text", property: "colorLinkHover"}, {type: "links", property: "colorHover"}]
            }), this.registerProperty("styleLink", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["underlined", "plain"],
                map: [{type: "text", property: "styleLink"}, {type: "links", property: "style"}]
            }), this.registerProperty("colorCode", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "text", property: "colorCode"}, {type: "*", property: "color"}]
            }), this.registerProperty("colorCodeBG", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "text", property: "colorCodeBG"}]
            }), this.registerProperty("colorHighlight", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "text", property: "colorHighlight"}, {type: "*", property: "color"}]
            }), this.registerProperty("colorHighlightBG", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "text", property: "colorHighlightBG"}]
            }), this.registerProperty("font", {
                input: "select",
                live: !0,
                map: [{type: "text", property: "font"}, {type: "form", property: "input_font"}, {
                    type: "*",
                    property: "font"
                }]
            }), this.registerProperty("kerning", {
                input: "range",
                type: "float",
                map: [{type: "text", property: "kerning"}, {type: "form", property: "input_kerning"}, {
                    type: "*",
                    property: "kerning"
                }]
            }), this.registerProperty("size", {
                input: "range",
                type: "float",
                map: [{type: "text", property: "size"}, {type: "form", property: "input_size"}, {
                    type: "*",
                    property: "size"
                }]
            }), this.registerProperty("spacing", {
                input: "range",
                type: "float",
                map: [{type: "text", property: "spacing"}]
            }), this.registerProperty("weight", {
                input: "range",
                type: "int",
                map: [{type: "text", property: "weight"}, {type: "form", property: "input_weight"}, {
                    type: "*",
                    property: "weight"
                }]
            }), this.registerProperty("headings", {
                input: "text",
                live: !0,
                type: "utf8text",
                optional: !0
            }), this.registerProperty("rows", {input: "text", live: !0, type: "utf8text", optional: !0});
            var i = this;
            app.build.fonts.initField(this.properties.font.$field), this.properties.rows.$field.on("change input", function () {
                var e, t, o, n = $(this);
                e = i.$form.find('input[name="hasLinks"]'), t = "1" == e.val(), o = app.hasMarkdown("link", n.val()), o != t && e.val(o ? "1" : "0").trigger("change"), e = i.$form.find('input[name="hasCode"]'), t = "1" == e.val(), o = app.hasMarkdown("code", n.val()), o != t && e.val(o ? "1" : "0").trigger("change"), e = i.$form.find('input[name="hasHighlight"]'), t = "1" == e.val(), o = app.hasMarkdown("highlight", n.val()), o != t && e.val(o ? "1" : "0").trigger("change")
            }), window.setTimeout(function () {
                i.properties.rows.$field.triggerHandler("change")
            }, 0)
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "table", o.prototype.contentDependencies = {}, o.prototype.import = function (e) {
            var t = this.importValue;
            this.style = t(e, "style"), this.colorBorder = t(e, "colorBorder"), this.padding = t(e, "padding"), this.width = t(e, "width"), this.appearance = t(e, "appearance"), this.color = t(e, "color"), this.colorLink = t(e, "colorLink"), this.colorLinkHover = t(e, "colorLinkHover"), this.styleLink = t(e, "styleLink"), this.colorCode = t(e, "colorCode"), this.colorCodeBG = t(e, "colorCodeBG"), this.colorHighlight = t(e, "colorHighlight"), this.colorHighlightBG = t(e, "colorHighlightBG"), this.font = t(e, "font"), this.kerning = t(e, "kerning"), this.size = t(e, "size"), this.spacing = t(e, "spacing"), this.weight = t(e, "weight"), this.headings = t(e, "headings"), this.rows = t(e, "rows")
        }, o.prototype.export = function (e) {
            e.style = this.style, e.colorBorder = this.colorBorder, e.padding = this.padding, e.width = this.width, e.appearance = this.appearance, e.color = this.color, e.colorLink = this.colorLink, e.colorLinkHover = this.colorLinkHover, e.styleLink = this.styleLink, e.colorCode = this.colorCode, e.colorCodeBG = this.colorCodeBG, e.colorHighlight = this.colorHighlight, e.colorHighlightBG = this.colorHighlightBG, e.font = this.font, e.kerning = this.kerning, e.size = this.size, e.spacing = this.spacing, e.weight = this.weight, e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.style = this.style, i.colorBorder = this.colorBorder, i.padding = this.padding, i.width = this.width, i.appearance = this.appearance, i.color = this.color, i.colorLink = this.colorLink, i.colorLinkHover = this.colorLinkHover, i.styleLink = this.styleLink, i.colorCode = this.colorCode, i.colorCodeBG = this.colorCodeBG, i.colorHighlight = this.colorHighlight, i.colorHighlightBG = this.colorHighlightBG, i.font = this.font, i.kerning = this.kerning, i.size = this.size, i.spacing = this.spacing, i.weight = this.weight, i.headings = this.headings, i.rows = this.rows, i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--table").set({
                display: "table",
                "border-collapse": "collapse"
            }), e.r(".--tr").set({
                display: "table-row",
                width: "100%"
            }), e.r(".--td").set({display: "table-cell"}), e.r(".--th").set({
                display: "table-cell",
                "text-align": "center"
            }), e.r(".--thead").set({
                display: "table-header-group",
                width: "100%"
            }), e.r(".--tbody").set({
                display: "table-row-group",
                width: "100%"
            }), e.r(".--table-wrapper").set({
                "max-width": "100%",
                "overflow-x": "hidden"
            }), e.r(".--table-inner").set({
                display: "inline-block",
                "max-width": "100%"
            }), e.r(".--table").set({"text-align": "left", width: "100%"}), e.r(".--th").set({
                "text-align": "left",
                "font-weight": "bolder"
            })
        }, o.prototype.redraw = function (e) {
            var t, i, o, n, a, s, r, l = this.styleSheet, p = 10, d = this, c = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (c(["headings", "rows"], function () {
                var e, t, i, o, n, a = [], s = [], r = 0, l = "";
                if (d.headings && (a = d.headings.split("\n"), r = a.length), d.rows) {
                    e = d.rows.replace(/\n\n+/, "\n\n").split("\n\n");
                    for (o in e)i = e[o].split("\n"), s.push(i), r = Math.min(p, Math.max(r, i.length))
                }
                if (0 == s.length && (s = [["(no rows)"]], 0 == a.length && (a = ["(no headings)"])), l += '<div class="--table-wrapper" id="--' + d.id + '"><div class="--table-inner"><div class="--table">', a.length > 0) {
                    l += '<div class="--thead"><div class="--tr">';
                    for (o in a) {
                        if (o >= p)break;
                        t = a[o], "-" == t.charAt(0) && (t = t.substring(1)), "-" == t.slice(-1) && (t = t.substring(0, t.length - 1)), l += '<div class="--th">' + t + "</div>"
                    }
                    for (o = a.length; o < r && o <= p; o++)l += '<div class="--th">&nbsp;</div>';
                    l += "</div></div>"
                }
                if (s.length > 0) {
                    l += '<div class="--tbody">';
                    for (o in s) {
                        l += '<div class="--tr">';
                        for (n in s[o]) {
                            if (n >= p)break;
                            l += '<div class="--td">' + app.markdownify(s[o][n]) + "</div>"
                        }
                        for (o = s[o].length; o < r && o <= p; o++)l += '<div class="--td">&nbsp;</div>';
                        l += "</div>"
                    }
                    l += "</div>"
                }
                l += "</div></div></div>", d.$canvas.html(l)
            }), t = this.selector(), l.unsetAll(t), l.unsetAll(t, "small"), l.unsetAll(t, "xxsmall"), this.appearance) {
                case"uppercase":
                    l.r(t).set("text-transform", "uppercase");
                    break;
                case"lowercase":
                    l.r(t).set("text-transform", "lowercase");
                    break;
                case"smallcaps":
                    l.r(t).set("font-variant", "small-caps");
                    break;
                case"normal":
            }
            switch (l.r(t).set("color", this.color), this.colorLink && this.colorLink != this.color ? (l.r(t + " span.--a").set("color", this.colorLink), this.colorLinkHover && this.colorLinkHover != this.colorLink && l.r(t + " span.--a:hover").set("color", this.colorLinkHover)) : this.colorLinkHover && this.colorLinkHover != this.color && l.r(t + " span.--a:hover").set("color", this.colorLinkHover), this.colorCode && this.colorCode != this.color && l.r(t + " span.--code").set("color", this.colorCode), this.colorCodeBG && l.r(t + " span.--code").set("background-color", this.colorCodeBG), this.colorHighlight && this.colorHighlight != this.color && l.r(t + " span.--mark").set("color", this.colorHighlight), this.colorHighlightBG && l.r(t + " span.--mark").set("background-color", this.colorHighlightBG), this.styleLink) {
                default:
                case"underlined":
                    l.r(t + " span.--a").set("text-decoration", "underline"), this.colorLinkHover || l.r(t + " span.--a:hover").set("text-decoration", "none");
                    break;
                case"plain":
                    l.r(t + " span.--a").set("text-decoration", "none"), this.colorLinkHover || l.r(t + " span.--a:hover").set("text-decoration", "underline")
            }
            if (l.r(t).set("font-family", "'" + this.font + "'"), 0 != this.kerning && l.r(t).set("letter-spacing", this.kerning + "rem"), l.r(t).set("font-size", this.size + "em"), this.size > 3.5 ? l.r(t, "small").set("font-size", "3.5em") : this.size > 3 ? l.r(t, "small").set("font-size", "3em") : this.size > 2 ? l.r(t, "xxsmall").set("font-size", "2em") : this.size > 1.5 && l.r(t, "xxsmall").set("font-size", "1.5em"), l.r(t).set("line-height", this.spacing), l.r(t).set("font-weight", app.build.fonts.optimizeWeight(this.font, this.weight)), a = l.r(t + " .--table-inner"), a.set("width", this.width + "rem"), d.headings)for (o = d.headings.split("\n"), i = 0; i < o.length && i < p; i++)n = "-" == o[i].charAt(0) && "-" == o[i].slice(-1) ? "center" : "-" == o[i].charAt(0) ? "right" : null, n && l.r(t + " .--th:nth-child(" + (i + 1) + "), " + t + " .--td:nth-child(" + (i + 1) + ")").set("text-align", n);
            switch (this.style) {
                default:
                case"grid":
                    a = l.r(t + " .--thead"), a.set("background-color", app.transparentize(this.colorBorder, .1875)), a = l.r(t + " .--th, " + t + " .--td"), a.set("border", "solid 1px " + this.colorBorder), a.set("padding", this.padding + "rem " + 1.375 * this.padding + "rem");
                    break;
                case"minimal":
                    a = l.r(t + " .--thead"), a.set("border-bottom", "solid 2px " + this.colorBorder), a = l.r(t + " .--tbody .--tr"), s = l.r(t + " .--tbody .--tr:first-child"), s.set("border-top", "0"), this.headings ? a.set("border-top", "solid 1px " + app.transparentize(this.colorBorder, .375)) : a.set("border-top", "solid 1px " + this.colorBorder), a = l.r(t + " .--th, " + t + " .--td"), s = l.r(t + " .--th:first-child, " + t + " .--td:first-child"), r = l.r(t + " .--th:last-child, " + t + " .--td:last-child"), a.set("padding", this.padding + "rem " + 1.375 * this.padding + "rem"), s.set("padding-left", "0"), r.set("padding-right", "0")
            }
        }, t.exports = o
    }, {"./component": 7}], 20: [function (e, t, o) {
        function n(e, t) {
            this.content = null, this.appearance = null, this.color = null, this.colorLink = null, this.colorLinkHover = null, this.styleLink = null, this.colorCode = null, this.colorCodeBG = null, this.colorHighlight = null, this.colorHighlightBG = null, this.font = null, this.kerning = null, this.size = null, this.spacing = null, this.weight = null, a.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, n = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><div class="field"><label ' + o("content") + '>Content</label><div class="textarea-wrapper"><textarea ' + n("content") + ' maxlength="16384" data-autosize data-autosize-newline data-autofocus></textarea></div><div class="note"><p>' + app.build.messages.markdown + "</p>" + app.build.messages.markdownSyntax + '</div><input type="hidden" ' + n("hasLinks") + ' value="0" /><input type="hidden" ' + n("hasCode") + ' value="0" /><input type="hidden" ' + n("hasHighlight") + ' value="0" /></div><hr /><div class="field"><label ' + o("font") + '>Font</label><div class="select-wrapper"><select ' + n("font") + ">" + function () {
                    var e, t = app.build.fonts.list, i = "";
                    for (e in t)i += '<option value="' + t[e].name + '">' + t[e].name + "</option>";
                    return i
                }() + '</select></div></div><div class="field"><label ' + o("color") + '>Color</label><input type="hexcolor" maxlength="9" data-alpha="1" ' + n("color") + ' /></div><div class="field" ' + s("hasHighlight", "1") + "><label " + o("colorHighlight") + '>Highlight Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + n("colorHighlight") + ' /></div><div class="field" ' + s("hasHighlight", "1") + "><label " + o("colorHighlightBG") + '>Highlight Background Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + n("colorHighlightBG") + ' /></div><div class="field" ' + s("hasCode", "1") + "><label " + o("colorCode") + '>Code Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + n("colorCode") + ' /></div><div class="field" ' + s("hasCode", "1") + "><label " + o("colorCodeBG") + '>Code Background Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + n("colorCodeBG") + ' /></div><div class="field" ' + s("hasLinks", "1") + "><label " + o("colorLink") + '>Link Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + n("colorLink") + ' /></div><div class="field" ' + s("hasLinks", "1") + "><label " + o("colorLinkHover") + '>Link Hover Color</label><input type="hexcolor" maxlength="9" data-optional="1" data-alpha="1" ' + n("colorLinkHover") + ' /></div><div class="field" ' + s("hasLinks", "1") + "><label " + o("styleLink") + '>Link Style</label><div class="select-wrapper"><select ' + n("styleLink") + '><option value="underlined">Underlined</option><option value="plain">Plain</option></select></div></div><div class="field"><label ' + o("weight") + '>Weight</label><input type="range" ' + n("weight") + ' min="100" max="900" step="100" data-status="font-weight" /></div><div class="field"><label ' + o("size") + '>Size</label><input type="range" ' + n("size") + ' min="0.5" max="7" step="0.125" data-status /></div><div class="field"><label ' + o("spacing") + '>Line Spacing</label><input type="range" ' + n("spacing") + ' min="0.75" max="2.5" step="0.125" data-status /></div><div class="field"><label ' + o("kerning") + '>Letter Spacing</label><input type="range" ' + n("kerning") + ' min="-0.5" max="1.5" step="0.025" data-status /></div><div class="field"><label ' + o("appearance") + '>Appearance</label><div class="select-wrapper"><select ' + n("appearance") + '><option value="normal">Normal</option><option value="lowercase">Lowercase</option><option value="uppercase">Uppercase</option><option value="smallcaps">Small Caps</option></select></div></div></form>'),
                this.registerProperty("content", {
                    input: "text",
                    live: !0,
                    type: "utf8text"
                }), this.registerProperty("appearance", {
                input: "range",
                type: "word",
                allowed: ["normal", "uppercase", "lowercase", "smallcaps"],
                map: [{type: "form", property: "input_appearance"}, {type: "*", property: "appearance"}]
            }), this.registerProperty("color", {
                input: "text",
                type: "htmlacolor",
                map: [{
                    type: "form", property: "input_colorFG", condition: function (e) {
                        return "outline" == e.input.style
                    }
                }, {type: "*", property: "color"}, {
                    type: "buttons", property: "colorFG", condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorFG", condition: function (e) {
                        return "default" == e.style || "outline" == e.style
                    }
                }]
            }), this.registerProperty("colorLink", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "table", property: "colorLink"}, {type: "links", property: "color"}]
            }), this.registerProperty("colorLinkHover", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "table", property: "colorLinkHover"}, {type: "links", property: "colorHover"}]
            }), this.registerProperty("styleLink", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["underlined", "plain"],
                map: [{type: "table", property: "styleLink"}, {type: "links", property: "style"}]
            }), this.registerProperty("colorCode", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "table", property: "colorCode"}, {type: "text", property: "colorCode"}, {
                    type: "*",
                    property: "color"
                }]
            }), this.registerProperty("colorCodeBG", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "table", property: "colorCodeBG"}, {type: "text", property: "colorCode"}]
            }), this.registerProperty("colorHighlight", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "table", property: "colorHighlight"}, {
                    type: "text",
                    property: "colorHighlight"
                }, {type: "*", property: "color"}]
            }), this.registerProperty("colorHighlightBG", {
                input: "text",
                type: "htmlacolor",
                optional: !0,
                map: [{type: "table", property: "colorHighlightBG"}, {type: "text", property: "colorHighlight"}]
            }), this.registerProperty("font", {
                input: "select",
                live: !0,
                map: [{type: "form", property: "input_font"}, {type: "*", property: "font"}]
            }), this.registerProperty("kerning", {
                input: "range",
                type: "float",
                map: [{type: "form", property: "input_kerning"}, {type: "*", property: "kerning"}]
            }), this.registerProperty("size", {
                input: "range",
                type: "float",
                map: [{type: "form", property: "input_size"}, {type: "*", property: "size"}]
            }), this.registerProperty("spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("weight", {
                input: "range",
                type: "int",
                map: [{type: "form", property: "input_weight"}, {type: "*", property: "weight"}]
            });
            var i = this;
            app.build.fonts.initField(this.properties.font.$field), this.properties.content.$field.on("change input", function () {
                var e, t, o, n = $(this);
                e = i.$form.find('input[name="hasLinks"]'), t = "1" == e.val(), o = app.hasMarkdown("link", n.val()), o != t && e.val(o ? "1" : "0").trigger("change"), e = i.$form.find('input[name="hasCode"]'), t = "1" == e.val(), o = app.hasMarkdown("code", n.val()), o != t && e.val(o ? "1" : "0").trigger("change"), e = i.$form.find('input[name="hasHighlight"]'), t = "1" == e.val(), o = app.hasMarkdown("highlight", n.val()), o != t && e.val(o ? "1" : "0").trigger("change")
            }), window.setTimeout(function () {
                i.properties.content.$field.triggerHandler("change")
            }, 0)
        }

        var a = e("./component");
        n.prototype = new a, n.prototype.constructor = n, n.prototype.type = "text", n.prototype.contentDependencies = {}, n.prototype.isTextual = function () {
            return !0
        }, n.prototype.import = function (e) {
            var t = this.importValue;
            this.content = t(e, "content"), this.appearance = t(e, "appearance"), this.color = t(e, "color"), this.colorLink = t(e, "colorLink"), this.colorLinkHover = t(e, "colorLinkHover"), this.styleLink = t(e, "styleLink"), this.colorCode = t(e, "colorCode"), this.colorCodeBG = t(e, "colorCodeBG"), this.colorHighlight = t(e, "colorHighlight"), this.colorHighlightBG = t(e, "colorHighlightBG"), this.font = t(e, "font"), this.kerning = t(e, "kerning"), this.size = t(e, "size"), this.spacing = t(e, "spacing"), this.weight = t(e, "weight")
        }, n.prototype.export = function (e) {
            e.appearance = this.appearance, e.color = this.color, e.colorLink = this.colorLink, e.colorLinkHover = this.colorLinkHover, e.styleLink = this.styleLink, e.colorCode = this.colorCode, e.colorCodeBG = this.colorCodeBG, e.colorHighlight = this.colorHighlight, e.colorHighlightBG = this.colorHighlightBG, e.font = this.font, e.kerning = this.kerning, e.size = this.size, e.spacing = this.spacing, e.weight = this.weight, e.syncAll()
        }, n.prototype.createClone = function (e, t) {
            var i;
            i = new n(e), i.content = this.content, i.appearance = this.appearance, i.color = this.color, i.colorLink = this.colorLink, i.colorLinkHover = this.colorLinkHover, i.styleLink = this.styleLink, i.colorCode = this.colorCode, i.colorCodeBG = this.colorCodeBG, i.colorHighlight = this.colorHighlight, i.colorHighlightBG = this.colorHighlightBG, i.font = this.font, i.kerning = this.kerning, i.size = this.size, i.spacing = this.spacing, i.weight = this.weight, i.syncAll(), t(i)
        }, n.prototype.cssBase = function (e) {
            e.r(".--text br + br").set({
                display: "block",
                content: "' '"
            }), e.r(".--text .--li").set({display: "list-item", "padding-left": "0.5em", margin: "0.75em 0 0 1em"})
        }, n.prototype.redraw = function (e) {
            var t, i = this.styleSheet, o = this, n = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (n(["content"], function () {
                var e, t = "";
                t += '<div class="--text" id="--' + o.id + '">', o.content ? (e = app.markdownify(o.content, !0), e.indexOf("\n") != -1 && (e = "<span>" + e.replace(/(\n+)/g, "</span>$1<span>").replace(/\n/g, "<br />") + "</span>"), e.indexOf('<span class="--li">') != -1 && (e = e.replace(/<span>(<span class="--li">.+?<\/span>)<\/span><br \/>/g, "$1")), t += e) : t += "(empty)", t += "</div>", o.$canvas.html(t)
            }), t = this.selector(), i.unsetAll(t), i.unsetAll(t, "small"), i.unsetAll(t, "xxsmall"), i.r(t + " br + br").set("margin-top", .6 * this.spacing + "rem"), this.appearance) {
                case"uppercase":
                    i.r(t).set("text-transform", "uppercase");
                    break;
                case"lowercase":
                    i.r(t).set("text-transform", "lowercase");
                    break;
                case"smallcaps":
                    i.r(t).set("font-variant", "small-caps");
                    break;
                case"normal":
            }
            switch (i.r(t).set("color", this.color), this.colorLink && this.colorLink != this.color ? (i.r(t + " span.--a").set("color", this.colorLink), this.colorLinkHover && this.colorLinkHover != this.colorLink && i.r(t + " span.--a:hover").set("color", this.colorLinkHover)) : this.colorLinkHover && this.colorLinkHover != this.color && i.r(t + " span.--a:hover").set("color", this.colorLinkHover), this.colorCode && this.colorCode != this.color && i.r(t + " span.--code").set("color", this.colorCode), this.colorCodeBG && i.r(t + " span.--code").set("background-color", this.colorCodeBG), this.colorHighlight && this.colorHighlight != this.color && i.r(t + " span.--mark").set("color", this.colorHighlight), this.colorHighlightBG && i.r(t + " span.--mark").set("background-color", this.colorHighlightBG), this.styleLink) {
                default:
                case"underlined":
                    i.r(t + " span.--a").set("text-decoration", "underline"), this.colorLinkHover || i.r(t + " span.--a:hover").set("text-decoration", "none");
                    break;
                case"plain":
                    i.r(t + " span.--a").set("text-decoration", "none"), this.colorLinkHover || i.r(t + " span.--a:hover").set("text-decoration", "underline")
            }
            i.r(t).set("font-family", "'" + this.font + "'"), 0 != this.kerning && (i.r(t).set("letter-spacing", this.kerning + "rem"), this.kerning > 0 ? i.r(t).set("width", "calc(100% + " + this.kerning + "rem)") : i.r(t).set("width", "100%")), i.r(t).set("font-size", this.size + "em"), this.size > 3.5 ? i.r(t, "small").set("font-size", "3.5em") : this.size > 3 ? i.r(t, "small").set("font-size", "3em") : this.size > 2 ? i.r(t, "xxsmall").set("font-size", "2em") : this.size > 1.5 && i.r(t, "xxsmall").set("font-size", "1.5em"), i.r(t).set("line-height", this.spacing), i.r(t).set("font-weight", app.build.fonts.optimizeWeight(this.font, this.weight))
        }, n.prototype.optimize = function (e, t) {
            n.prototype.optimize_roles(t)
        }, n.prototype.optimize_roles = function (e) {
            var t = function () {
                var t, i, o, n = {};
                for (t in e)i = e[t], o = i.size.toString(), o in n || (n[o] = 0), n[o]++;
                return n
            }, o = function (t, i) {
                e[t]._role = i
            }, n = function (t, o) {
                for (i in e)c = e[i], c.size.toString() == t && (c._role = o)
            };
            for (i in e)c = e[i], c._role = "none";
            var a = e.length, s = t(), r = Object.keys(s).length, l = Object.keys(s).sort().reverse();
            switch (a) {
                case 0:
                    break;
                case 1:
                    o(0, "main-heading");
                    break;
                case 2:
                    1 == r || n(l[0], "main-heading");
                    break;
                default:
                    1 == s[l[0]] && s[l[1]] > 1 && r > 3 ? (n(l[0], "main-heading"), n(l[1], "heading")) : 1 == s[l[0]] && r > 2 ? n(l[0], "main-heading") : s[l[0]] > 1 && r > 2 ? n(l[0], "heading") : n(l[0], "main-heading")
            }
        }, t.exports = n
    }, {"./component": 7}], 21: [function (e, t, i) {
        function o(e, t) {
            this.mode = null, this.completeUrl = null, this.precision = null, this.width = null, this.spacing = null, this.time = {
                year: null,
                month: null,
                day: null,
                hour: null,
                minute: null,
                second: null,
                zone: null
            }, this.digits = {
                style: null,
                shape: null,
                cornerRadius: null,
                delimiters: null,
                colorDelimiters: null,
                font: null,
                colorFG: null,
                colorBG: null,
                weight: null
            }, this.labels = {
                style: null,
                font: null,
                color: null,
                weight: null,
                size: null,
                kerning: null,
                appearance: null
            }, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><section data-title="General"><div class="field"><label ' + o("mode") + '>Type</label><div class="select-wrapper"><select ' + a("mode") + '><option value="default">Default</option><option value="countdown">Countdown Only</option></select></div><p class="note" ' + s("mode", "default") + '>Counts down to date/time, then counts up from it.</p><p class="note" ' + s("mode", "countdown") + '>Counts down to date/time, then stops at zero.</p></div><div class="field" ' + s("mode", "countdown") + "><label " + o("completeUrl") + ' class="optional">Complete URL</label><input type="text" ' + a("completeUrl") + ' maxlength="1024" /><p class="note">Redirect here when the count hits zero.</p></div><hr /><label>Date</label><div class="field third first"><div class="select-wrapper alt"><select ' + a("time_month") + '><option value="1">Jan</option><option value="2">Feb</option><option value="3">Mar</option><option value="4">Apr</option><option value="5">May</option><option value="6">Jun</option><option value="7">Jul</option><option value="8">Aug</option><option value="9">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option></select></div></div><div class="field third"><div class="select-wrapper alt"><select ' + a("time_day") + ">" + function () {
                    var e, t = "";
                    for (e = 1; e <= 31; e++)t += '<option value="' + e + '">' + (e < 10 ? "0" : "") + e + "</option>";
                    return t
                }() + '</select></div></div><div class="field third"><div class="select-wrapper alt"><select ' + a("time_year") + ">" + function () {
                    var e, t = "";
                    for (e = 1900; e <= 2100; e++)t += '<option value="' + e + '">' + e + "</option>";
                    return t
                }() + '</select></div></div><label>Time</label><div class="field third first"><div class="select-wrapper alt"><select ' + a("time_hour") + ">" + function () {
                    var e, t = "";
                    for (e = 0; e <= 23; e++)t += '<option value="' + e + '">' + (e < 10 ? "0" : "") + e + "</option>";
                    return t
                }() + '</select></div></div><div class="field third"><div class="select-wrapper alt"><select ' + a("time_minute") + ">" + function () {
                    var e, t = "";
                    for (e = 0; e <= 59; e++)t += '<option value="' + e + '">' + (e < 10 ? "0" : "") + e + "</option>";
                    return t
                }() + '</select></div></div><div class="field third"><div class="select-wrapper alt"><select ' + a("time_second") + ">" + function () {
                    var e, t = "";
                    for (e = 0; e <= 59; e++)t += '<option value="' + e + '">' + (e < 10 ? "0" : "") + e + "</option>";
                    return t
                }() + '</select></div></div><div class="field"><label ' + o("time_zone") + '>Zone</label><div class="select-wrapper"><select ' + a("time_zone") + '><option value="001">(UTC-11:00) Midway Island, American Samoa</option><option value="002">(UTC-10:00) Aleutian Islands</option><option value="003">(UTC-10:00) Hawaii</option><option value="004">(UTC-09:30) Marquesas Islands</option><option value="005">(UTC-09:00) Alaska</option><option value="006">(UTC-08:00) Baja California</option><option value="007">(UTC-08:00) Pacific Time (US and Canada)</option><option value="008">(UTC-07:00) Arizona</option><option value="009">(UTC-07:00) Chihuahua, La Paz, Mazatlan</option><option value="010">(UTC-07:00) Mountain Time (US and Canada)</option><option value="011">(UTC-06:00) Central America</option><option value="012">(UTC-06:00) Central Time (US and Canada)</option><option value="013">(UTC-06:00) Easter Island</option><option value="014">(UTC-06:00) Guadalajara, Mexico City, Monterrey</option><option value="015">(UTC-06:00) Saskatchewan</option><option value="016">(UTC-05:00) Bogota, Lima, Quito</option><option value="017">(UTC-05:00) Chetumal</option><option value="018">(UTC-05:00) Eastern Time (US and Canada)</option><option value="019">(UTC-05:00) Haiti</option><option value="020">(UTC-05:00) Havana</option><option value="021">(UTC-05:00) Indiana (East)</option><option value="022">(UTC-04:00) Asuncion</option><option value="023">(UTC-04:00) Atlantic Time (Canada)</option><option value="024">(UTC-04:00) Caracas</option><option value="025">(UTC-04:00) Cuiaba</option><option value="026">(UTC-04:00) Georgetown, La Paz, Manaus, San Juan</option><option value="027">(UTC-04:00) Santiago</option><option value="028">(UTC-04:00) Turks and Caicos</option><option value="029">(UTC-03:30) Newfoundland</option><option value="030">(UTC-03:00) Araguaina</option><option value="031">(UTC-03:00) Brasilia</option><option value="032">(UTC-03:00) Cayenne, Fortaleza</option><option value="033">(UTC-03:00) City of Buenos Aires</option><option value="034">(UTC-03:00) Greenland</option><option value="035">(UTC-03:00) Montevideo</option><option value="036">(UTC-03:00) Saint Pierre and Miquelon</option><option value="037">(UTC-03:00) Salvador</option><option value="038">(UTC-01:00) Azores</option><option value="039">(UTC-01:00) Cabo Verde Islands</option><option value="040">(UTC) Casablanca</option><option value="041">(UTC) Dublin, Edinburgh, Lisbon, London</option><option value="042">(UTC) Monrovia, Reykjavik</option><option value="043">(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option><option value="044">(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option><option value="045">(UTC+01:00) Brussels, Copenhagen, Madrid, Paris</option><option value="046">(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option><option value="047">(UTC+01:00) West Central Africa</option><option value="048">(UTC+01:00) Windhoek</option><option value="049">(UTC+02:00) Amman</option><option value="050">(UTC+02:00) Athens, Bucharest</option><option value="051">(UTC+02:00) Beirut</option><option value="052">(UTC+02:00) Cairo</option><option value="053">(UTC+02:00) Damascus</option><option value="054">(UTC+02:00) Gaza, Hebron</option><option value="055">(UTC+02:00) Harare, Pretoria</option><option value="056">(UTC+02:00) Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius</option><option value="057">(UTC+02:00) Istanbul</option><option value="058">(UTC+02:00) Jerusalem</option><option value="059">(UTC+02:00) Kaliningrad</option><option value="060">(UTC+02:00) Tripoli</option><option value="061">(UTC+03:00) Baghdad</option><option value="062">(UTC+03:00) Kuwait, Riyadh</option><option value="063">(UTC+03:00) Minsk</option><option value="064">(UTC+03:00) Moscow, St. Petersburg, Volgograd</option><option value="065">(UTC+03:00) Nairobi</option><option value="066">(UTC+03:30) Tehran</option><option value="067">(UTC+04:00) Abu Dhabi, Muscat</option><option value="068">(UTC+04:00) Astrakhan, Ulyanovsk</option><option value="069">(UTC+04:00) Baku</option><option value="070">(UTC+04:00) Izhevsk, Samara</option><option value="071">(UTC+04:00) Port Louis</option><option value="072">(UTC+04:00) Tbilisi</option><option value="073">(UTC+04:00) Yerevan</option><option value="074">(UTC+04:30) Kabul</option><option value="075">(UTC+05:00) Tashkent, Ashgabat</option><option value="076">(UTC+05:00) Ekaterinburg</option><option value="077">(UTC+05:00) Islamabad, Karachi</option><option value="078">(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi</option><option value="079">(UTC+05:30) Sri Jayawardenepura</option><option value="080">(UTC+05:45) Kathmandu</option><option value="081">(UTC+06:00) Astana</option><option value="082">(UTC+06:00) Dhaka</option><option value="083">(UTC+06:00) Novosibirsk</option><option value="084">(UTC+06:30) Yangon (Rangoon)</option><option value="085">(UTC+07:00) Bangkok, Hanoi, Jakarta</option><option value="086">(UTC+07:00) Barnaul, Gorno-Altaysk</option><option value="087">(UTC+07:00) Hovd</option><option value="088">(UTC+07:00) Krasnoyarsk</option><option value="089">(UTC+07:00) Tomsk</option><option value="090">(UTC+08:00) Beijing, Chongqing, Hong Kong SAR, Urumqi</option><option value="091">(UTC+08:00) Irkutsk</option><option value="092">(UTC+08:00) Kuala Lumpur, Singapore</option><option value="093">(UTC+08:00) Perth</option><option value="094">(UTC+08:00) Taipei</option><option value="095">(UTC+08:00) Ulaanbaatar</option><option value="096">(UTC+08:30) Pyongyang</option><option value="097">(UTC+08:45) Eucla</option><option value="098">(UTC+09:00) Chita</option><option value="099">(UTC+09:00) Osaka, Sapporo, Tokyo</option><option value="100">(UTC+09:00) Seoul</option><option value="101">(UTC+09:00) Yakutsk</option><option value="102">(UTC+09:30) Adelaide</option><option value="103">(UTC+09:30) Darwin</option><option value="104">(UTC+10:00) Brisbane</option><option value="105">(UTC+10:00) Canberra, Melbourne, Sydney</option><option value="106">(UTC+10:00) Guam, Port Moresby</option><option value="107">(UTC+10:00) Hobart</option><option value="108">(UTC+10:00) Vladivostok</option><option value="109">(UTC+10:30) Lord Howe Island</option><option value="110">(UTC+11:00) Bougainville Island</option><option value="111">(UTC+11:00) Chokirdakh</option><option value="112">(UTC+11:00) Magadan</option><option value="113">(UTC+11:00) Norfolk Island</option><option value="114">(UTC+11:00) Sakhalin</option><option value="115">(UTC+11:00) Solomon Islands, New Caledonia</option><option value="116">(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky</option><option value="117">(UTC+12:00) Auckland, Wellington</option><option value="118">(UTC+12:00) Fiji Islands</option><option value="119">(UTC+12:45) Chatham Islands</option><option value="120">(UTC+13:00) Nuku&#039;alofa</option><option value="121">(UTC+13:00) Samoa</option><option value="122">(UTC+14:00) Kiritimati Island</option></select></div></div><hr /><div class="field"><label ' + o("precision") + '>Precision</label><input type="range" ' + a("precision") + ' min="1" max="4" step="1" data-status /><p class="note">Number of digits to show. Lower precisions will intelligently prune digits when necessary.</p></div><div class="field"><label ' + o("width") + '>Width</label><input type="range" ' + a("width") + ' min="10" max="100" step="1" data-status /></div><div class="field"><label ' + o("spacing") + '>Spacing</label><input type="range" ' + a("spacing") + ' min="0" max="8" step="0.125" data-status /></div></section><section data-title="Digits"><div class="field"><label ' + o("digits_style") + '>Style</label><div class="select-wrapper"><select ' + a("digits_style") + '><option value="default">Default</option><option value="outline">Outline</option><option value="solid">Solid</option></select></div></div><div class="field-group" ' + s("digits_style", "!default") + '><div class="field"><label ' + o("digits_shape") + '>Shape</label><div class="select-wrapper"><select ' + a("digits_shape") + '><option value="rectangle">Rectangle</option><option value="circle">Circle</option></select></div></div><div class="field" ' + s("digits_shape", "rectangle") + "><label " + o("digits_cornerRadius") + '>Corner Radius</label><input type="range" ' + a("digits_cornerRadius") + ' min="0" max="2" step="0.125" data-status /></div></div><div class="field-group"><div class="field"><label ' + o("digits_delimiters") + '>Delimiters</label><div class="select-wrapper"><select ' + a("digits_delimiters") + '><option value="none">None</option><option value="colon">Colons</option><option value="line">Lines</option></select></div></div><div class="field" ' + s("digits_delimiters", "!none") + '><input type="hexcolor" data-alpha="1" ' + a("digits_colorDelimiters") + ' maxlength="9" /></div></div><hr /><div class="field"><label ' + o("digits_font") + '>Font</label><div class="select-wrapper"><select ' + a("digits_font") + ">" + function () {
                    var e, t = app.build.fonts.list, i = "";
                    for (e in t)i += '<option value="' + t[e].name + '">' + t[e].name + "</option>";
                    return i
                }() + '</select></div></div><div class="field"><label ' + o("digits_colorFG") + '>Color</label><input type="hexcolor" data-alpha="1" ' + a("digits_colorFG") + ' maxlength="9" /></div><div class="field"><label ' + o("digits_colorBG") + '>Background Color</label><input type="hexcolor" data-alpha="1" ' + a("digits_colorBG") + ' maxlength="9" /></div><div class="field"><label ' + o("digits_weight") + '>Weight</label><input type="range" ' + a("digits_weight") + ' min="100" max="900" step="100" data-status="font-weight" /></div></section><section data-title="Labels"><div class="field"><label ' + o("labels_style") + '>Style</label><div class="select-wrapper"><select ' + a("labels_style") + '><option value="none">None</option><option value="full">Full</option><option value="abbreviated">Abbreviated</option><option value="initialed">Initialed</option></select></div><p class="note" ' + s("labels_style", "!none") + '>Note: Labels will automatically step down to the next "size" (eg. Full &rarr; Abbreviated) if there isn\'t enough space below each digit.</p></div><div class="field-group" ' + s("labels_style", "!none") + '"><hr /><div class="field"><label ' + o("labels_font") + '>Font</label><div class="select-wrapper"><select ' + a("labels_font") + ">" + function () {
                    var e, t = app.build.fonts.list, i = "";
                    for (e in t)i += '<option value="' + t[e].name + '">' + t[e].name + "</option>";
                    return i
                }() + '</select></div></div><div class="field"><label ' + o("labels_color") + '>Color</label><input type="hexcolor" data-alpha="1" ' + a("labels_color") + ' maxlength="9" /></div><div class="field"><label ' + o("labels_weight") + '>Weight</label><input type="range" ' + a("labels_weight") + ' min="100" max="900" step="100" data-status="font-weight" /></div><div class="field"><label ' + o("labels_size") + '>Size</label><input type="range" ' + a("labels_size") + ' min="0.5" max="4" step="0.125" data-status /></div><div class="field"><label ' + o("labels_kerning") + '>Letter Spacing</label><input type="range" ' + a("labels_kerning") + ' min="-0.5" max="1.5" step="0.025" data-status /></div><div class="field"><label ' + o("labels_appearance") + '>Appearance</label><div class="select-wrapper"><select ' + a("labels_appearance") + '><option value="normal">Normal</option><option value="lowercase">Lowercase</option><option value="uppercase">Uppercase</option><option value="smallcaps">Small Caps</option></select></div></div></div></section></form>'), this.registerProperty("mode", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["default", "countdown"]
            }), this.registerProperty("completeUrl", {
                input: "text",
                type: "href",
                optional: !0
            }), this.registerProperty("precision", {
                input: "range",
                type: "int"
            }), this.registerProperty("width", {
                input: "range",
                type: "int"
            }), this.registerProperty("spacing", {
                input: "range",
                type: "float"
            }), this.registerProperty("time_year", {
                input: "select",
                live: !0,
                type: "int"
            }), this.registerProperty("time_month", {
                input: "select",
                live: !0,
                type: "int"
            }), this.registerProperty("time_day", {
                input: "select",
                live: !0,
                type: "int"
            }), this.registerProperty("time_hour", {
                input: "select",
                live: !0,
                type: "int"
            }), this.registerProperty("time_minute", {
                input: "select",
                live: !0,
                type: "int"
            }), this.registerProperty("time_second", {
                input: "select",
                live: !0,
                type: "int"
            }), this.registerProperty("time_zone", {
                input: "select",
                live: !0,
                type: "word"
            }), this.registerProperty("digits_style", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["default", "solid", "outline"]
            }), this.registerProperty("digits_shape", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["rectangle", "circle"]
            }), this.registerProperty("digits_cornerRadius", {
                input: "range",
                type: "float",
                map: [{type: "buttons", property: "cornerRadius"}, {
                    type: "icons",
                    property: "cornerRadius",
                    condition: function (e) {
                        return ("solid" == e.style || "outline" == e.style) && "rectangle" == e.shape
                    }
                }]
            }), this.registerProperty("digits_delimiters", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["none", "colon", "line"]
            }), this.registerProperty("digits_colorDelimiters", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "divider", property: "color"}, {
                    type: "columns",
                    property: "colorBorder"
                }, {
                    type: "buttons", property: "colorBG", condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorBG", condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorFG", condition: function (e) {
                        return "default" == e.style
                    }
                }, {type: "text", property: "color"}, {type: "*", property: "color"}]
            }), this.registerProperty("digits_font", {
                input: "select",
                live: !0,
                map: [{
                    type: "text", property: "font", condition: function (e) {
                        return "heading" == e._role
                    }
                }, {type: "*", property: "font"}]
            }), this.registerProperty("digits_colorFG", {
                input: "text",
                type: "htmlacolor",
                map: [{type: "text", property: "color"}, {
                    type: "buttons",
                    property: "colorFG",
                    condition: function (e) {
                        return "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorFG", condition: function (e) {
                        return "default" == e.style || "outline" == e.style
                    }
                }, {type: "*", property: "color"}]
            }), this.registerProperty("digits_colorBG", {
                input: "text",
                type: "htmlacolor",
                map: [{
                    type: "divider", property: "color", condition: function (e) {
                        return "outline" == this.digits.style
                    }
                }, {
                    type: "buttons", property: "colorBG", condition: function (e) {
                        return "outline" == this.digits.style && "outline" == e.style
                    }
                }, {
                    type: "icons", property: "colorBG", condition: function (e) {
                        return "outline" == this.digits.style && "outline" == e.style
                    }
                }, {
                    type: "text", property: "color", condition: function (e) {
                        return "outline" == this.digits.style && "heading" == e._role
                    }
                }, {
                    type: "*", property: "color", condition: function (e) {
                        return "outline" == this.digits.style
                    }
                }]
            }), this.registerProperty("digits_weight", {
                input: "range",
                type: "int",
                map: [{
                    type: "text", property: "weight", condition: function (e) {
                        return "heading" == e._role
                    }
                }, {type: "*", property: "weight"}]
            }), this.registerProperty("labels_style", {
                input: "select",
                live: !0,
                type: "word",
                allowed: ["none", "abbreviated", "initialed", "full"]
            }), this.registerProperty("labels_font", {
                input: "select",
                live: !0,
                map: [{
                    type: "text", property: "font", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "font"}]
            }), this.registerProperty("labels_color", {
                input: "text",
                type: "htmlacolor",
                map: [{
                    type: "text", property: "color", condition: function (e) {
                        return "none" == e._role
                    }
                }, {
                    type: "buttons", property: "colorFG", condition: function (e) {
                        return "outline" == e.style || "default" == e.style
                    }
                }, {
                    type: "icons", property: "colorFG", condition: function (e) {
                        return "default" == e.style || "outline" == e.style
                    }
                }, {type: "*", property: "color"}]
            }), this.registerProperty("labels_weight", {
                input: "range",
                type: "int",
                map: [{
                    type: "text", property: "weight", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "weight"}]
            }), this.registerProperty("labels_size", {
                input: "range",
                type: "float",
                map: [{
                    type: "text", property: "size", condition: function (e) {
                        return "none" == e._role
                    }
                }]
            }), this.registerProperty("labels_kerning", {
                input: "range",
                type: "float",
                map: [{
                    type: "text", property: "kerning", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "kerning"}]
            }), this.registerProperty("labels_appearance", {
                input: "range",
                type: "word",
                allowed: ["normal", "uppercase", "lowercase", "smallcaps"],
                map: [{
                    type: "text", property: "appearance", condition: function (e) {
                        return "none" == e._role
                    }
                }, {type: "*", property: "appearance"}]
            });
            var i = this;
            app.build.fonts.initField(this.properties.digits_font.$field), app.build.fonts.initField(this.properties.labels_font.$field)
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "timer", o.prototype.contentDependencies = {
            width: ["width"],
            padding: ["width"]
        }, o.prototype.isTextual = function () {
            return !0
        }, o.prototype.import = function (e) {
            var t = this.importValue;
            this.mode = t(e, "mode"), this.completeUrl = t(e, "completeUrl"), this.precision = t(e, "precision"), this.width = t(e, "width"), this.spacing = t(e, "spacing"), this.time = $.extend(this.time, e.time), this.digits = $.extend(this.digits, e.digits), this.labels = $.extend(this.labels, e.labels)
        }, o.prototype.export = function (e) {
            e.mode = this.mode, e.precision = this.precision, e.width = this.width, e.spacing = this.spacing, e.digits = JSON.parse(JSON.stringify(this.digits)), e.labels = JSON.parse(JSON.stringify(this.labels)), e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.mode = this.mode, i.completeUrl = this.completeUrl, i.precision = this.precision, i.width = this.width, i.spacing = this.spacing, i.time = JSON.parse(JSON.stringify(this.time)), i.digits = JSON.parse(JSON.stringify(this.digits)), i.labels = JSON.parse(JSON.stringify(this.labels)), i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--timer").set({"line-height": "1"}), e.r(".--timer-ul").set({
                display: "-vendor-inline-flex",
                "-vendor-flex-direction": "row",
                "list-style": "none",
                "max-width": "100%"
            }), e.r(".--timer-ul-li").set({position: "relative"}), e.r(".--timer-ul-li-delimiter").set({"-vendor-flex": "0 1 auto"}), e.r(".--timer-ul-li-delimiter-symbol").set({
                display: "block",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                "text-align": "center"
            }), e.r(".--timer-ul-li-number").set({
                "-vendor-flex": "1",
                "min-width": "2rem"
            }), e.r(".--timer-ul-li-number-item").set({position: "relative"}), e.r(".--timer-ul-li-number-item-digit").set({
                display: "block",
                position: "relative",
                "white-space": "nowrap"
            }), e.r(".--timer-ul-li-number-item-digit-component").set({
                display: "inline-block",
                width: "50%"
            }), e.r(".--timer-ul-li-number-item-digit-count2 .--timer-ul-li-number-item-digit-component").set({width: "50%"}), e.r(".--timer-ul-li-number-item-digit-count3 .--timer-ul-li-number-item-digit-component").set({width: "33.3333%"}), e.r(".--timer-ul-li-number-item-digit-count4 .--timer-ul-li-number-item-digit-component").set({width: "25%"}), e.r(".--timer-ul-li-number-item-digit-count5 .--timer-ul-li-number-item-digit-component").set({width: "20%"}), e.r(".--timer-ul-li-number-item-label").set({
                display: "block",
                "white-space": "nowrap"
            }), e.r(".--timer-ul-li-number-item-label > *").set({display: "inline-block"}), e.r(".--timer-ul-li-number-item-label-full").set({width: "5em"}), e.r(".--timer-ul-li-number-item-label-abbreviated").set({width: "3em"}), e.r(".--timer-ul-li-number-item-label-initialed").set({width: "1em"})
        }, o.prototype.redraw = function (e) {
            var t, i = this.styleSheet, o = this, n = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (n(["precision", "labels_style"], function () {
                var e, t, i, n, a, s = "";
                for (s = '<div class="--timer" id="--' + o.id + '"><div class="--timer-ul">', i = [{
                    class: "days",
                    digit: 0,
                    label: {full: "Days", abbreviated: "Days", initialed: "D"}
                }, {
                    class: "hours",
                    digit: 3,
                    label: {full: "Hours", abbreviated: "Hrs", initialed: "H"}
                }, {
                    class: "minutes",
                    digit: 13,
                    label: {full: "Minutes", abbreviated: "Mins", initialed: "M"}
                }, {
                    class: "seconds",
                    digit: 37,
                    label: {full: "Seconds", abbreviated: "Secs", initialed: "S"}
                }], zeros = 0, n = 0; n < i.length && 0 == i[n].digit; n++)zeros++;
                for (; zeros > 0 && i.length > o.precision;)i.shift(), zeros--;
                for (n = 0; n < i.length && n < o.precision; n++) {
                    if (t = [], e = String(i[n].digit), i[n].digit < 10) t.push("0"), t.push(e); else for (a = 0; a < e.length; a++)t.push(e.substr(a, 1));
                    for (n > 0 && (s += '<div class="--timer-ul-li --timer-ul-li-delimiter"><span class="--timer-ul-li-delimiter-symbol">:</span></div>'), s += '<div class="--timer-ul-li --timer-ul-li-number --timer-ul-li-number-' + i[n].class + '"><div class="--timer-ul-li-number-item">', s += '<span class="--timer-ul-li-number-item-digit --timer-ul-li-number-item-digit-count' + e.length + '">', a = 0; a < t.length; a++)s += '<span class="--timer-ul-li-number-item-digit-component">' + t[a] + "</span>";
                    switch (s += "</span>", o.labels.style) {
                        default:
                        case"full":
                            s += '<span class="--timer-ul-li-number-item-label"><span class="--timer-ul-li-number-item-label-full">' + i[n].label.full + '</span><span class="--timer-ul-li-number-item-label-abbreviated">' + i[n].label.abbreviated + '</span><span class="--timer-ul-li-number-item-label-initialed">' + i[n].label.initialed + "</span></span>";
                            break;
                        case"abbreviated":
                            s += '<span class="--timer-ul-li-number-item-label"><span class="--timer-ul-li-number-item-label-abbreviated">' + i[n].label.abbreviated + '</span><span class="--timer-ul-li-number-item-label-initialed">' + i[n].label.initialed + "</span></span>";
                            break;
                        case"initialed":
                            s += '<span class="--timer-ul-li-number-item-label"><span class="--timer-ul-li-number-item-label-initialed">' + i[n].label.initialed + "</span></span>";
                            break;
                        case"none":
                    }
                    s += "</div></div>"
                }
                s += "</div></div>", o.$canvas.html(s)
            }), t = this.selector(), i.unsetAll(t), i.unsetAll(t, "xsmall"), i.r(t + " .--timer-ul").set({width: this.width + "rem"}), i.r(t + " .--timer-ul-li-delimiter").set({width: this.spacing + "rem"}),
                i.r(t + " .--timer-ul-li-delimiter", "xsmall").set({width: .625 * this.spacing + "rem"}), this.digits.delimiters) {
                default:
                case"none":
                    i.r(t + " .--timer-ul-li-delimiter-symbol").set({display: "none"});
                    break;
                case"colon":
                    i.r(t + " .--timer-ul-li-delimiter").set({"min-width": "1rem"}), i.r(t + " .--timer-ul-li-delimiter-symbol").set({color: this.digits.colorDelimiters});
                    break;
                case"line":
                    i.r(t + " .--timer-ul-li").set({padding: .375 * this.spacing + "rem 0"}), i.r(t + " .--timer-ul-li-delimiter").set({"min-width": "1rem"}), i.r(t + " .--timer-ul-li-delimiter:before").set({
                        content: "''",
                        display: "block",
                        position: "absolute",
                        top: "0",
                        left: "50%",
                        width: "1px",
                        height: "100%",
                        "background-color": this.digits.colorDelimiters
                    }), i.r(t + " .--timer-ul-li-delimiter-symbol").set({display: "none"})
            }
            switch (i.r(t + " .--timer-ul-li-number-item-digit").set({"font-family": "'" + this.digits.font + "'"}), i.r(t + " .--timer-ul-li-number-item-digit").set({"font-weight": app.build.fonts.optimizeWeight(this.digits.font, this.digits.weight)}), i.r(t + " .--timer-ul-li-number-item-digit").set({color: this.digits.colorFG}), this.digits.style) {
                default:
                case"default":
                    i.r(t + " .--timer-ul-li-number-item-digit").set({
                        "line-height": "1em",
                        "text-align": "inherit"
                    }), i.r(t + " .--timer-ul-li-number-item-label > *").set({"margin-top": "calc(0.5rem + 0.25em)"}), i.r(t + " .--timer-ul-li-number-item-label > *", "xsmall").set({"margin-top": "calc(0.5rem + 0.25em)"});
                    break;
                case"solid":
                case"outline":
                    switch (i.r(t + " .--timer-ul-li-number-item-digit").set({
                        "line-height": "1.325em",
                        margin: "20%",
                        "text-align": "center"
                    }), i.r(t + " .--timer-ul-li-number-item-digit:after").set({
                        content: "''",
                        position: "absolute",
                        top: "0%",
                        left: "0%",
                        width: "160%",
                        height: "0",
                        "padding-bottom": "160%",
                        "margin-left": "-30%",
                        "margin-top": "-25%",
                        "z-index": "-1"
                    }), i.r(t + " .--timer-ul-li-number-item-label > *").set({"margin-top": "calc(0.625rem + 0.25em)"}), i.r(t + " .--timer-ul-li-number-item-label > *", "xsmall").set({"margin-top": "calc(0.5rem + 0.25em)"}), i.r(t + " .--timer-ul-li-delimiter-symbol").set({"margin-top": "0.675em"}), this.digits.style) {
                        case"solid":
                            i.r(t + " .--timer-ul-li-number-item-digit:after").set({"background-color": this.digits.colorBG});
                            break;
                        case"outline":
                            i.r(t + " .--timer-ul-li-number-item-digit:after").set({"box-shadow": "inset 0 0 0 1px " + this.digits.colorBG})
                    }
                    switch (this.digits.shape) {
                        case"rectangle":
                            i.r(t + " .--timer-ul-li-number-item-digit:after").set({"border-radius": this.digits.cornerRadius + "rem"});
                            break;
                        case"circle":
                            i.r(t + " .--timer-ul-li-number-item-digit:after").set({"border-radius": "100%"})
                    }
            }
            switch (i.r(t + " .--timer-ul-li-number-item-label").set({"font-family": "'" + this.labels.font + "'"}), i.r(t + " .--timer-ul-li-number-item-label").set({"font-size": this.labels.size + "rem"}), i.r(t + " .--timer-ul-li-number-item-label").set({"font-weight": app.build.fonts.optimizeWeight(this.labels.font, this.labels.weight)}), 0 != this.labels.kerning && (this.labels.kerning > 0 ? i.r(t + " .--timer-ul-li-number-item-label").set("width", "calc(100% + " + this.labels.kerning + "rem)") : i.r(t + " .--timer-ul-li-number-item-label").set("width", "100%"), i.r(t + " .--timer-ul-li-number-item-label > *").set("letter-spacing", this.labels.kerning + "rem"), i.r(t + " .--timer-ul-li-number-item-label-full").set({width: "calc(5em + " + 6 * this.labels.kerning + "rem)"}), i.r(t + " .--timer-ul-li-number-item-label-abbreviated").set({width: "calc(3em + " + 4 * this.labels.kerning + "rem)"}), i.r(t + " .--timer-ul-li-number-item-label-initialed").set({width: "calc(2em + " + 3 * this.labels.kerning + "rem)"})), i.r(t + " .--timer-ul-li-number-item-label").set({color: this.labels.color}), this.labels.appearance) {
                case"uppercase":
                    i.r(t + " .--timer-ul-li-number-item-label").set("text-transform", "uppercase");
                    break;
                case"lowercase":
                    i.r(t + " .--timer-ul-li-number-item-label").set("text-transform", "lowercase");
                    break;
                case"smallcaps":
                    i.r(t + " .--timer-ul-li-number-item-label").set("font-variant", "small-caps");
                    break;
                case"normal":
            }
            this.refresh()
        }, o.prototype.refresh = function () {
            var e, t, i, o, n, a, s, r, l, p, d, c, u, h = this.selector(), m = $(h);
            e = m.find(".--timer-ul-li-number-item"), r = m.find(".--timer-ul-li-delimiter-symbol"), o = m.find(".--timer-ul-li-number-item-digit-component"), d = 0, c = 0, o.css("line-height", "").css("height", ""), r.css("font-size", "").css("line-height", "").css("height", ""), e.each(function () {
                t = $(this), n = t.find(".--timer-ul-li-number-item-digit-component").first(), l = n.width(), p = t.width(), i = t.children().eq(0), i.css("font-size", ""), i.css("font-size", 1.65 * l + "px"), d = Math.max(d, i.height()), c = Math.max(c, 1.65 * l), t.children().length > 1 && (a = t.children().eq(1), u = !1, a.children().each(function () {
                    s = $(this), s.css("display", "none"), !u && s.width() < p ? (u = !0, s.css("display", "")) : s.css("display", "none")
                }))
            }), o.css("line-height", d + "px").css("height", d + "px"), r.css("font-size", .5 * c + "px").css("line-height", d + "px").css("height", d + "px")
        }, t.exports = o
    }, {"./component": 7}], 22: [function (e, t, i) {
        function o(e, t) {
            this.url = null, this.size = null, this.margins = null, this.aspectRatio = null, this.autoplay = null, this.mobileLayout = {
                size: null,
                margins: null
            }, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };

            this.form('<form><div class="field"><label ' + o("url") + '>URL</label><input type="text" ' + a("url") + ' maxlength="1024" /><div class="note"><p>Supports URLs in the following formats:</p><ul><li>YouTube (<em>https://youtu.be/xxxxxx</em>)</li><li>Vimeo (<em>https://vimeo.com/xxxxxx</em>)</li><li>Twitch (<em>http://www.twitch.tv/username</em> or <em>http://www.twitch.tv/username/v/xxxxxx</em>)</li></ul></div></div><div class="field"><label ' + o("size") + '>Size</label><input type="range" ' + a("size") + ' min="20" max="101" step="1" data-status="rename" data-status-args="' + this.SIZE_FLUSH + '=Flush" /></div><div class="field"><label ' + o("margins") + '>Margins</label><input type="range" ' + a("margins") + ' min="0" max="5" step="0.125" data-status /></div><div class="field"><label ' + o("autoplay") + '>Autoplay</label><div class="select-wrapper"><select ' + a("autoplay") + '><option value="off">Off</option><option value="on">On</option></select></div></div><hr /><div class="field-group"><label class="big">Mobile Layout</label><p class="note">' + app.build.messages.mobileLayout + '</p><div class="field" ' + s("size", "!" + this.SIZE_FLUSH) + "><label " + o("mobileLayout_size") + '>Size</label><input type="range" ' + a("mobileLayout_size") + ' min="9" max="100" step="1" data-status="rename" data-status-args="' + this.MOBILELAYOUT_SIZE_AUTO + '=Auto"  /></div><div class="field"><label ' + o("mobileLayout_margins") + '>Margins</label><input type="range" ' + a("mobileLayout_margins") + ' min="-0.125" max="5" step="0.125" data-status="rename" data-status-args="' + this.MOBILELAYOUT_MARGINS_AUTO + '=Auto"  /></div></div></form>'), this.registerProperty("url", {
                input: "text",
                type: function (e) {
                    return !!i.videoType(e)
                }
            }), this.registerProperty("size", {
                input: "range",
                type: "int"
            }), this.registerProperty("margins", {
                input: "range",
                type: "float"
            }), this.registerProperty("aspectRatio", {
                input: "select",
                type: "text",
                allowed: ["16:9"]
            }), this.registerProperty("autoplay", {
                input: "select",
                type: "word",
                allowed: ["on", "off"]
            }), this.registerProperty("mobileLayout_size", {
                input: "range",
                type: "int"
            }), this.registerProperty("mobileLayout_margins", {input: "range", type: "float"})
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "video", o.prototype.contentDependencies = {}, o.prototype.SIZE_FLUSH = 101, o.prototype.MOBILELAYOUT_SIZE_AUTO = 9, o.prototype.MOBILELAYOUT_MARGINS_AUTO = -.125, o.prototype.videoType = function (e) {
            return !!web.is("url", e) && (e.match(/\/\/youtu\.be\/([a-zA-Z0-9\_\-]+)$/) ? "youtube" : e.match(/\/\/vimeo\.com\/([a-zA-Z0-9\_\-]+)$/) ? "vimeo" : e.match(/\/\/www\.twitch\.tv\/([a-zA-Z0-9\_\-]+)$/) ? "twitch" : e.match(/\/\/www\.twitch\.tv\/[a-zA-Z0-9\_\-]+\/v\/([0-9]+)$/) ? "twitch" : null)
        }, o.prototype.import = function (e) {
            var t = this.importValue;
            this.url = t(e, "url"), this.size = t(e, "size"), this.margins = t(e, "margins"), this.aspectRatio = t(e, "aspectRatio"), this.autoplay = t(e, "autoplay"), this.mobileLayout = $.extend(this.mobileLayout, e.mobileLayout)
        }, o.prototype.export = function (e) {
            e.size = this.size, e.margins = this.margins, e.aspectRatio = this.aspectRatio, e.autoplay = this.autoplay, e.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.url = this.url, i.size = this.size, i.margins = this.margins, i.aspectRatio = this.aspectRatio, i.autoplay = this.autoplay, i.mobileLayout = JSON.parse(JSON.stringify(this.mobileLayout)), i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
            e.r(".--video").set({position: "relative"}), e.r("#--main .component-wrapper.is-first > .component > .--video").set({"padding-top": "0"}), e.r("#--main .component-wrapper.is-last > .component > .--video").set({"padding-bottom": "0"}), e.r(".--video .--frame").set({
                position: "relative",
                overflow: "hidden",
                "max-width": "100%",
                display: "inline-block"
            }), e.r(".--video .--frame:before").set({
                content: "''",
                display: "block",
                width: "100%"
            }), e.r(".--video .--frame .--iframe").set({
                position: "absolute",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }), e.r(".--video .--frame .--iframe").set({
                display: "-vendor-flex",
                "-vendor-align-items": "center",
                "-vendor-justify-content": "center",
                "text-align": "center"
            }), e.r(".--video.placeholder .--frame .--iframe").set({overflow: "hidden"}), e.r("#--main .component-wrapper.flush > .component > .--video .--frame").set({display: "block"}), e.r("#--main .component-wrapper.flush > .component > .--video .--frame span").set({display: "block"})
        }, o.prototype.redraw = function (e) {
            var t, i, o = this.styleSheet, n = this, a = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            if (!this.url) {
                switch (a(["url"], function () {
                    n.$canvas.html('<div class="--video placeholder" id="--' + n.id + '"><div class="--frame"><div class="--iframe"><span>No Video URL</span></div></div></div>')
                }), t = this.selector(), o.unsetAll(t), o.unsetAll(t, "small"), this.margins > 0 && o.r(t).set("padding", this.margins + "rem 0"), this.mobileLayout.margins != this.MOBILELAYOUT_MARGINS_AUTO && o.r(t, "small").set("padding", this.mobileLayout.margins + "rem 0"), this.size == this.SIZE_FLUSH ? (o.r(t + " .--frame").set("width", "100vw"), this.$wrapper.addClass("flush")) : (o.r(t + " .--frame").set("width", 100 == this.size ? "100vw" : this.size + "rem"), this.mobileLayout.size != this.MOBILELAYOUT_SIZE_AUTO && o.r(t + " .--frame", "small").set("width", 100 == this.mobileLayout.size ? "100vw" : this.mobileLayout.size + "rem"), this.$wrapper.removeClass("flush")), i = null, this.aspectRatio) {
                    default:
                    case"16x9":
                        i = 9 / 16
                }
                return void(i && o.r(t + " .--frame:before").set("padding-top", 100 * i + "%"))
            }
            switch (a(["url"], function () {
                var e = n.videoType(n.url);
                n.$canvas.html('<div class="--video ' + e + '" id="--' + n.id + '"><div class="--frame"><div class="--iframe"><span>' + n.url.replace(/https?:\/\/(www\.)?/, "") + "</span></div></div></div>")
            }), t = this.selector(), o.unsetAll(t), o.unsetAll(t, "small"), this.margins > 0 && o.r(t).set("padding", this.margins + "rem 0"), this.mobileLayout.margins != this.MOBILELAYOUT_MARGINS_AUTO && o.r(t, "small").set("padding", this.mobileLayout.margins + "rem 0"), this.size == this.SIZE_FLUSH ? (o.r(t + " .--frame").set("width", "100vw"), this.$wrapper.addClass("flush")) : (o.r(t + " .--frame").set("width", 100 == this.size ? "100vw" : this.size + "rem"), this.mobileLayout.size != this.MOBILELAYOUT_SIZE_AUTO && o.r(t + " .--frame", "small").set("width", 100 == this.mobileLayout.size ? "100vw" : this.mobileLayout.size + "rem"), this.$wrapper.removeClass("flush")), i = null, this.aspectRatio) {
                default:
                case"16:9":
                    i = 9 / 16
            }
            i && o.r(t + " .--frame:before").set("padding-top", 100 * i + "%")
        }, t.exports = o
    }, {"./component": 7}], 23: [function (e, t, i) {
        function o(e, t) {
            this.mode = null, this.stripeCheckout = {
                publishableKey: null,
                secretKey: null,
                currency: null,
                amount: null,
                name: null,
                description: null,
                buttonLabel: null,
                successMessage: null,
                zipCode: null,
                billingAddress: null,
                allowRememberMe: null,
                bitcoin: null,
                alipay: null
            }, this.gumroadOverlay = {
                productUrl: null,
                buttonLabel: null,
                paymentForm: null,
                singleProduct: null
            }, this.facebookLike = {
                url: null,
                layout: null,
                action: null,
                faces: null,
                shareButton: null
            }, this.paypalButton = {
                merchant: null,
                button: null,
                name: null,
                amount: null,
                currency: null,
                sandbox: null,
                returnUrl: null,
                quantity: null,
                shipping: null,
                tax: null,
                recurrence: null,
                period: null
            }, this.typeform = {
                url: null,
                style: null,
                width: null,
                height: null,
                label: null
            }, this.customIframe = {
                url: null,
                width: null,
                height: null,
                aspectRatio: null
            }, this.customCode = {label: null, content: null, style: null}, n.apply(this, [e, t]);
            var i = this, o = function (e) {
                return i.form_for(e)
            }, a = function (e) {
                return i.form_id(e)
            }, s = function (e, t) {
                return i.form_req(e, t)
            };
            this.form('<form><div class="field"><label ' + o("mode") + '>Type</label><div class="select-wrapper"><select ' + a("mode") + '><option value="stripe-checkout">Stripe Checkout Button</option><option value="gumroad-overlay">Gumroad Buy Button</option><option value="facebook-like">Facebook Like Button</option><option value="paypal-button">PayPal Button</option><option value="typeform">Typeform</option><option value="custom-iframe">Custom (IFRAME)</option><option value="custom-code">Custom (Code)</option></select></div><p class="note" ' + s("mode", "stripe-checkout") + '>Opens a <a href="https://stripe.com/checkout" target="_blank">Stripe Checkout</a> payment modal.</p><p class="note" ' + s("mode", "gumroad-overlay") + '>Opens a <a href="https://gumroad.com" target="_blank">Gumroad</a> purchase modal.</p><p class="note" ' + s("mode", "facebook-like") + '>Likes a URL on <a href="https://facebook.com" target="_blank">Facebook</a>.</p><p class="note" ' + s("mode", "paypal-button") + '>Opens a <a href="https://paypal.com" target="_blank">PayPal</a> payment page.</p><p class="note" ' + s("mode", "typeform") + '>Opens a <a href="https://typeform.com" target="_blank">Typeform</a> (or embeds it using an IFRAME).</p><p class="note" ' + s("mode", "custom-iframe") + '>Embeds the contents of another page using an IFRAME (inline frame).</p><p class="note" ' + s("mode", "custom-code") + '>Embeds a block of custom HTML code.</p></div><hr /><div class="field-group" ' + s("mode", "stripe-checkout") + '><div class="field"><label>API Keys</label><input type="text" ' + a("stripeCheckout_publishableKey") + ' placeholder="Publishable Key" /></div><div class="field"><input type="text" ' + a("stripeCheckout_secretKey") + ' placeholder="Secret Key" /><p class="note">Your <a href="https://support.stripe.com/questions/where-do-i-find-my-api-keys" target="_blank">Stripe API keys</a>. Be sure to use your test keys to ensure the widget is working properly <em>before</em> using your live keys.</p></div><div class="field"><label>Currency</label><div class="select-wrapper"><select ' + a("stripeCheckout_currency") + '><option value="USD">USD - United States Dollar</option><option value="AED">AED - UAE Dirham</option><option value="AFN">AFN - Afghan Afghani</option><option value="ALL">ALL - Albanian Lek</option><option value="AMD">AMD - Armenian Dram</option><option value="ANG">ANG - Netherlands Guilder</option><option value="AOA">AOA - Angolan Kwanza</option><option value="ARS">ARS - Argentine Peso</option><option value="AUD">AUD - Australian Dollar</option><option value="AWG">AWG - Aruban Florin</option><option value="AZN">AZN - Azerbaijani Manat</option><option value="BAM">BAM - Bosnian Mark</option><option value="BBD">BBD - Barbadian Dollar</option><option value="BDT">BDT - Bangladeshi Taka</option><option value="BGN">BGN - Bulgarian Lev</option><option value="BIF">BIF - Burundian Franc</option><option value="BMD">BMD - Bermudian Dollar</option><option value="BND">BND - Brunei Dollar</option><option value="BOB">BOB - Bolivian Boliviano</option><option value="BRL">BRL - Brazilian Real</option><option value="BSD">BSD - Bahamian Dollar</option><option value="BWP">BWP - Botswana Pula</option><option value="BZD">BZD - Belize Dollar</option><option value="CAD">CAD - Canadian Dollar</option><option value="CDF">CDF - Congolese Franc</option><option value="CHF">CHF - Swiss Franc</option><option value="CLP">CLP - Chilean Peso</option><option value="CNY">CNY - Chinese Yuan</option><option value="COP">COP - Colombian Peso</option><option value="CRC">CRC - Costa Rican Colón</option><option value="CVE">CVE - Cape Verdean Escudo</option><option value="CZK">CZK - Czech Koruna</option><option value="DJF">DJF - Djiboutian Franc</option><option value="DKK">DKK - Danish Krone</option><option value="DOP">DOP - Dominican Peso</option><option value="DZD">DZD - Algerian Dinar</option><option value="EGP">EGP - Egyptian Pound</option><option value="ETB">ETB - Ethiopian Birr</option><option value="EUR">EUR - Euro</option><option value="FJD">FJD - Fijian Dollar</option><option value="FKP">FKP - Falkland Pound</option><option value="GBP">GBP - British Pound</option><option value="GEL">GEL - Georgian Lari</option><option value="GIP">GIP - Gibraltar Pound</option><option value="GMD">GMD - Gambian Dalasi</option><option value="GNF">GNF - Guinean Franc</option><option value="GTQ">GTQ - Guatemalan Quetzal</option><option value="GYD">GYD - Guyanese Dollar</option><option value="HKD">HKD - Hong Kong Dollar</option><option value="HNL">HNL - Honduran Lempira</option><option value="HRK">HRK - Croatian Kuna</option><option value="HTG">HTG - Haitian Gourde</option><option value="HUF">HUF - Hungarian Forint</option><option value="IDR">IDR - Indonesian Rupiah</option><option value="ILS">ILS - Israeli New Sheqel</option><option value="INR">INR - Indian Rupee</option><option value="ISK">ISK - Icelandic Króna</option><option value="JMD">JMD - Jamaican Dollar</option><option value="JPY">JPY - Japanese Yen</option><option value="KES">KES - Kenyan Shilling</option><option value="KGS">KGS - Kyrgyzstani Som</option><option value="KHR">KHR - Cambodian Riel</option><option value="KMF">KMF - Comorian Franc</option><option value="KRW">KRW - South Korean Won</option><option value="KYD">KYD - Cayman Dollar</option><option value="KZT">KZT - Kazakhstani Tenge</option><option value="LAK">LAK - Lao Kip</option><option value="LBP">LBP - Lebanese Pound</option><option value="LKR">LKR - Sri Lankan Rupee</option><option value="LRD">LRD - Liberian Dollar</option><option value="LSL">LSL - Lesotho Loti</option><option value="MAD">MAD - Moroccan Dirham</option><option value="MDL">MDL - Moldovan Leu</option><option value="MGA">MGA - Malagasy Ariary</option><option value="MKD">MKD - Macedonian Denar</option><option value="MNT">MNT - Mongolian Tögrög</option><option value="MOP">MOP - Macanese Pataca</option><option value="MRO">MRO - Mauritanian Ouguiya</option><option value="MUR">MUR - Mauritian Rupee</option><option value="MVR">MVR - Maldivian Rufiyaa</option><option value="MWK">MWK - Malawian Kwacha</option><option value="MXN">MXN - Mexican Peso</option><option value="MYR">MYR - Malaysian Ringgit</option><option value="MZN">MZN - Mozambican Metical</option><option value="NAD">NAD - Namibian Dollar</option><option value="NGN">NGN - Nigerian Naira</option><option value="NIO">NIO - Nicaraguan Córdoba</option><option value="NOK">NOK - Norwegian Krone</option><option value="NPR">NPR - Nepalese Rupee</option><option value="NZD">NZD - New Zealand Dollar</option><option value="PAB">PAB - Panamanian Balboa</option><option value="PEN">PEN - Peruvian Nuevo Sol</option><option value="PGK">PGK - Papua New Guinean Kina</option><option value="PHP">PHP - Philippine Peso</option><option value="PKR">PKR - Pakistani Rupee</option><option value="PLN">PLN - Polish Złoty</option><option value="PYG">PYG - Paraguayan Guaraní</option><option value="QAR">QAR - Qatari Riyal</option><option value="RON">RON - Romanian Leu</option><option value="RSD">RSD - Serbian Dinar</option><option value="RUB">RUB - Russian Ruble</option><option value="RWF">RWF - Rwandan Franc<</option><option value="SAR">SAR - Saudi Riyal</option><option value="SBD">SBD - Solomon Islands Dollar</option><option value="SCR">SCR - Seychellois Rupee</option><option value="SEK">SEK - Swedish Krona</option><option value="SGD">SGD - Singapore Dollar</option><option value="SHP">SHP - Saint Helenian Pound</option><option value="SLL">SLL - Sierra Leonean Leone</option><option value="SOS">SOS - Somali Shilling</option><option value="SRD">SRD - Surinamese Dollar</option><option value="STD">STD - São Tomé Dobra</option><option value="SVC">SVC - Salvadoran Colón</option><option value="SZL">SZL - Swazi Lilangeni</option><option value="THB">THB - Thai Baht</option><option value="TJS">TJS - Tajikistani Somoni</option><option value="TOP">TOP - Tongan Paʻanga</option><option value="TRY">TRY - Turkish Lira</option><option value="TTD">TTD - Trinidad Dollar</option><option value="TWD">TWD - New Taiwan Dollar</option><option value="TZS">TZS - Tanzanian Shilling</option><option value="UAH">UAH - Ukrainian Hryvnia</option><option value="UGX">UGX - Ugandan Shilling</option><option value="UYU">UYU - Uruguayan Peso</option><option value="UZS">UZS - Uzbekistani Som</option><option value="VND">VND - Vietnamese Đồng</option><option value="VUV">VUV - Vanuatu Vatu</option><option value="WST">WST - Samoan Tala</option><option value="XAF">XAF - Central African Franc</option><option value="XCD">XCD - East Caribbean Dollar</option><option value="XOF">XOF - West African Franc</option><option value="XPF">XPF - Cfp Franc</option><option value="YER">YER - Yemeni Rial</option><option value="ZAR">ZAR - South African Rand</option><option value="ZMW">ZMW - Zambian Kwacha</option></select></div><p class="note">Note: Make sure your Stripe account <a href="https://support.stripe.com/questions/which-currencies-does-stripe-support" target="_blank">supports</a> your selected currency.</p></div><div class="field"><label ' + o("stripeCheckout_amount") + '>Amount</label><input type="text" ' + a("stripeCheckout_amount") + ' /></div><div class="field"><label ' + o("stripeCheckout_name") + '>Name</label><input type="text" ' + a("stripeCheckout_name") + ' /></div><div class="field"><label ' + o("stripeCheckout_description") + ' class="optional">Description</label><input type="text" ' + a("stripeCheckout_description") + ' /></div><div class="field"><label ' + o("stripeCheckout_buttonLabel") + '>Button Label</label><input type="text" ' + a("stripeCheckout_buttonLabel") + ' /></div><div class="field"><label ' + o("stripeCheckout_successMessage") + '>Success Message</label><input type="text" ' + a("stripeCheckout_successMessage") + ' /><p class="note">Tip: Set this to a valid URL to redirect the user to another site or page on completion.</p></div><label>Options</label><div class="field"><input type="checkbox" ' + a("stripeCheckout_zipCode") + " /><label " + o("stripeCheckout_zipCode") + '>Require postal code</label></div><div class="field"><input type="checkbox" ' + a("stripeCheckout_billingAddress") + " /><label " + o("stripeCheckout_billingAddress") + '>Require billing address</label></div><div class="field"><input type="checkbox" ' + a("stripeCheckout_allowRememberMe") + " /><label " + o("stripeCheckout_allowRememberMe") + '>Allow "Remember Me"</label></div><div class="field"><input type="checkbox" ' + a("stripeCheckout_bitcoin") + " /><label " + o("stripeCheckout_bitcoin") + '>Allow Bitcoin</label></div><div class="field"><input type="checkbox" ' + a("stripeCheckout_alipay") + " /><label " + o("stripeCheckout_alipay") + '>Allow Alipay</label></div></div><div class="field-group" ' + s("mode", "gumroad-overlay") + '><div class="field"><label ' + o("gumroadOverlay_productUrl") + '>Product URL</label><input type="text" ' + a("gumroadOverlay_productUrl") + ' /><p class="note">The <a href="https://help.gumroad.com/11164-Payments/what-is-my-products-url" target="_blank">unique URL</a> to your product on Gumroad.</p></div><div class="field"><label ' + o("gumroadOverlay_buttonLabel") + '>Button Label</label><input type="text" ' + a("gumroadOverlay_buttonLabel") + ' /></div><label>Options</label><div class="field"><input type="checkbox" ' + a("gumroadOverlay_paymentForm") + " /><label " + o("gumroadOverlay_paymentForm") + '>Auto-trigger payment form</label></div><div class="field"><input type="checkbox" ' + a("gumroadOverlay_singleProduct") + " /><label " + o("gumroadOverlay_singleProduct") + '>Single-product purchases only</label></div></div><div class="field-group" ' + s("mode", "facebook-like") + '><div class="field"><label ' + o("facebookLike_url") + ' class="optional">URL to Like</label><input type="text" ' + a("facebookLike_url") + ' /><p class="note">Leave blank to use this site\'s URL.</p></div><div class="field"><label>Layout</label><div class="select-wrapper"><select ' + a("facebookLike_layout") + '><option value="box_count">Box (with count)</option><option value="button_count">Button (with count)</option><option value="button">Button</option></select></div></div><div class="field"><label>Action</label><div class="select-wrapper"><select ' + a("facebookLike_action") + '><option value="like">Like</option><option value="recommend">Recommend</option></select></div></div><label>Options</label><div class="field"><input type="checkbox" ' + a("facebookLike_faces") + " /><label " + o("facebookLike_faces") + '>Show friends\' faces</label></div><div class="field"><input type="checkbox" ' + a("facebookLike_shareButton") + " /><label " + o("facebookLike_shareButton") + '>Include "Share" button</label></div></div><div class="field-group" ' + s("mode", "paypal-button") + '><div class="field"><label ' + o("paypalButton_merchant") + '>Merchant ID</label><input type="text" ' + a("paypalButton_merchant") + ' /><p class="note">Your PayPal email or your <a href="https://www.paypal.com/webapps/customerprofile/summary.view" target="_blank">Merchant ID</a>.</p></div><div class="field"><label ' + o("paypalButton_button") + '>Action</label><div class="select-wrapper"><select ' + a("paypalButton_button") + '><option value="buynow">Buy</option><option value="cart">Cart</option><option value="donate">Donate</option><option value="subscribe">Subscribe</option></select></div></div><div class="field"><label ' + o("paypalButton_name") + "><span " + s("paypalButton_button", "buynow,cart") + ">Item</span><span " + s("paypalButton_button", "subscribe") + ">Subscription</span><span " + s("paypalButton_button", "donate") + '>Donation</span> Name</label><input type="text" ' + a("paypalButton_name") + ' /></div><div class="field"><label ' + o("paypalButton_currency") + '>Currency</label><div class="select-wrapper"><select ' + a("paypalButton_currency") + '><option value="USD">USD - United States Dollar</option><option value="AUD">AUD - Australian Dollar</option><option value="BRL">BRL - Brazilian Real</option><option value="CAD">CAD - Canadian Dollar</option><option value="CHF">CHF - Swiss Franc</option><option value="CZK">CZK - Czech Koruna</option><option value="DKK">DKK - Danish Krone</option><option value="EUR">EUR - Euro</option><option value="GBP">GBP - British Pound</option><option value="HKD">HKD - Hong Kong Dollar</option><option value="HUF">HUF - Hungarian Forint</option><option value="ILS">ILS - Israeli New Sheqel</option><option value="JPY">JPY - Japanese Yen</option><option value="MXN">MXN - Mexican Peso</option><option value="MYR">MYR - Malaysian Ringgit</option><option value="NOK">NOK - Norwegian Krone</option><option value="NZD">NZD - New Zealand Dollar</option><option value="PHP">PHP - Philippine Peso</option><option value="PLN">PLN - Polish Złoty</option><option value="RUB">RUB - Russian Ruble</option><option value="SEK">SEK - Swedish Krona</option><option value="SGD">SGD - Singapore Dollar</option><option value="THB">THB - Thai Baht</option><option value="TRY">TRY - Turkish Lira</option><option value="TWD">TWD - New Taiwan Dollar</option></select></div></div><div class="field"><label ' + o("paypalButton_amount") + ">Amount <span " + s("paypalButton_button", "subscribe") + '>Per Period</span></label><input type="text" ' + a("paypalButton_amount") + ' /><p class="note" ' + s("paypalButton_button", "donate") + '>Tip: Set this to "0" to let users pick their own donation amount.</p></div><div class="field" ' + s("paypalButton_button", "buynow,cart") + "><label " + o("paypalButton_quantity") + '>Quantity</label><input type="text" ' + a("paypalButton_quantity") + ' /></div><div class="field" ' + s("paypalButton_button", "buynow,cart") + "><label " + o("paypalButton_shipping") + ' class="optional">Shipping</label><input type="text" ' + a("paypalButton_shipping") + ' placeholder="0.00" /></div><div class="field" ' + s("paypalButton_button", "buynow,cart") + "><label " + o("paypalButton_tax") + ' class="optional">Tax</label><input type="text" ' + a("paypalButton_tax") + ' placeholder="0.00" /></div><div class="field half first" ' + s("paypalButton_button", "subscribe") + "><label " + o("paypalButton_recurrence") + '>Period Length</label><input type="text" ' + a("paypalButton_recurrence") + ' /></div><div class="field half" ' + s("paypalButton_button", "subscribe") + "><label " + o("paypalButton_period") + '>&nbsp;</label><div class="select-wrapper"><select ' + a("paypalButton_period") + '><option value="d">Day</option><option value="w">Week</option><option value="m">Month</option><option value="y">Year</option></select></div></div><div class="field"><label ' + o("paypalButton_returnUrl") + ' class="optional">Return URL</label><input type="text" ' + a("paypalButton_returnUrl") + ' /><p class="note">Where to send the user upon completion. Leave blank to use this site\'s URL.</p></div></div><div class="field-group" ' + s("mode", "typeform") + '><div class="field"><label ' + o("typeform_url") + '>URL</label><input type="text" ' + a("typeform_url") + '><p class="note">The <a href="https://www.typeform.com/help/share-your-typeform-to-collect-data/" target="_blank">full URL</a> to your typeform.</p></div><div class="field"><label ' + o("typeform_style") + '>Style</label><div class="select-wrapper"><select ' + a("typeform_style") + '><option value="popup-classic">Popup (Classic)</option><option value="popup-drawer">Popup (Drawer)</option><option value="embed">Embed</option></select></div></div><div class="field" ' + s("typeform_style", "embed") + "><label " + o("typeform_width") + '>Width</label><input type="range" ' + a("typeform_width") + ' min="10" max="100" step="1" data-status /></div><div class="field" ' + s("typeform_style", "embed") + "><label " + o("typeform_height") + '>Height</label><input type="range" ' + a("typeform_height") + ' min="10" max="30" step="1" data-status /></div><div class="field" ' + s("typeform_style", "!embed") + "><label " + o("typeform_label") + '>Button Label</label><input type="text" ' + a("typeform_label") + ' /></div></div><div class="field-group" ' + s("mode", "custom-iframe") + '><div class="field"><label ' + o("customIframe_url") + '>URL</label><input type="text" ' + a("customIframe_url") + ' /><p class="note">The URL of the page to embed.</p></div><div class="field"><label ' + o("customIframe_width") + '>Width</label><input type="range" ' + a("customIframe_width") + ' min="10" max="100" step="1" data-status /></div><div class="field"><label ' + o("customIframe_height") + '>Height</label><input type="range" ' + a("customIframe_height") + ' min="10" max="30" step="1" data-status /></div><div class="field"><label>Aspect Ratio</label><div class="select-wrapper"><select ' + a("customIframe_aspectRatio") + '><option value="ignore">Ignore</option><option value="strict">Strict</option><option value="flexible">Flexible</option></select></div><p class="note" ' + s("customIframe_aspectRatio", "ignore") + '>Ignores the IFRAME\'s aspect ratio.</p><p class="note" ' + s("customIframe_aspectRatio", "strict") + '>Strictly maintains the IFRAME\'s aspect ratio.</p><p class="note" ' + s("customIframe_aspectRatio", "flexible") + '>Maintains the IFRAME\'s aspect ratio when possible, but makes minor adjustments to improve the viewing experience on smaller displays.</p></div></div><div class="field-group" ' + s("mode", "custom-code") + '><div class="field"><label ' + o("customCode_label") + ' class="optional">Label</label><input type="text" ' + a("customCode_label") + ' maxlength="64" /><p class="note">For reference only.</p></div><div class="field"><label ' + o("customCode_content") + '>Code</label><div class="textarea-wrapper"><textarea ' + a("customCode_content") + ' maxlength="16384" data-autosize data-autosize-newline></textarea></div><p class="note">Code to embed. Must be valid HTML.</p></div><div class="field"><label>Style</label><div class="select-wrapper"><select ' + a("customCode_style") + '><option value="inline">Inline</option><option value="hidden">Hidden</option></select></div><p class="note" ' + s("customCode_style", "inline") + '>Default behavior. Use this if your widget produces output exactly where it\'s placed on the page (eg. an <a href="https://www.instagram.com/developer/embedding/" target="_blank">Instagram embed</a>).</p><p class="note" ' + s("customCode_style", "hidden") + '>Use this if your widget doesn\'t produce output, or produces output that isn\'t linked to where it\'s placed on the page (eg. an <a href="https://docs.intercom.com/install-on-your-product-or-site/quick-install/install-intercom-on-your-web-app" target="_blank">Intercom embed</a>).</p></div></div></form>'),
                this.registerProperty("mode", {
                    input: "text",
                    type: "word",
                    allowed: ["stripe-checkout", "gumroad-overlay", "facebook-like", "paypal-button", "typeform", "custom-iframe", "custom-code"]
                }), this.registerProperty("stripeCheckout_publishableKey", {
                input: "text",
                type: "word"
            }), this.registerProperty("stripeCheckout_secretKey", {
                input: "text",
                type: "word"
            }), this.registerProperty("stripeCheckout_currency", {
                input: "text",
                type: "word"
            }), this.registerProperty("stripeCheckout_amount", {
                input: "text",
                type: "float"
            }), this.registerProperty("stripeCheckout_name", {
                input: "text",
                type: "utf8text"
            }), this.registerProperty("stripeCheckout_description", {
                input: "text",
                type: "utf8text",
                optional: !0
            }), this.registerProperty("stripeCheckout_buttonLabel", {
                input: "text",
                type: "utf8text",
                live: !0
            }), this.registerProperty("stripeCheckout_successMessage", {
                input: "text",
                type: "utf8text"
            }), this.registerProperty("stripeCheckout_zipCode", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("stripeCheckout_billingAddress", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("stripeCheckout_allowRememberMe", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("stripeCheckout_bitcoin", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("stripeCheckout_alipay", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("gumroadOverlay_productUrl", {
                input: "text",
                type: "url"
            }), this.registerProperty("gumroadOverlay_buttonLabel", {
                input: "text",
                type: "utf8text",
                live: !0
            }), this.registerProperty("gumroadOverlay_paymentForm", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("gumroadOverlay_singleProduct", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("facebookLike_url", {
                input: "text",
                type: "url",
                optional: !0
            }), this.registerProperty("facebookLike_layout", {
                input: "text",
                type: "word",
                allowed: ["box_count", "button_count", "button"]
            }), this.registerProperty("facebookLike_action", {
                input: "text",
                type: "word",
                allowed: ["like", "recommend"]
            }), this.registerProperty("facebookLike_faces", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("facebookLike_shareButton", {
                input: "checkbox",
                type: "bool"
            }), this.registerProperty("paypalButton_merchant", {
                input: "text", type: function (e) {
                    return web.is("email", e) || web.is("word", e)
                }
            }), this.registerProperty("paypalButton_button", {
                input: "text",
                type: "word",
                allowed: ["buynow", "cart", "donate", "subscribe"]
            }), this.registerProperty("paypalButton_name", {
                input: "text",
                type: "utf8text"
            }), this.registerProperty("paypalButton_amount", {
                input: "text",
                type: "float"
            }), this.registerProperty("paypalButton_currency", {
                input: "text",
                type: "word"
            }), this.registerProperty("paypalButton_returnUrl", {
                input: "text",
                type: "url",
                optional: !0
            }), this.registerProperty("paypalButton_quantity", {
                input: "text",
                type: "int"
            }), this.registerProperty("paypalButton_shipping", {
                input: "text",
                type: "float",
                optional: !0
            }), this.registerProperty("paypalButton_tax", {
                input: "text",
                type: "float",
                optional: !0
            }), this.registerProperty("paypalButton_recurrence", {
                input: "text",
                type: "int"
            }), this.registerProperty("paypalButton_period", {
                input: "text",
                type: "word",
                allowed: ["d", "w", "m", "y"]
            }), this.registerProperty("typeform_url", {
                input: "text",
                type: "url",
                optional: !0
            }), this.registerProperty("typeform_style", {
                input: "text",
                type: "word",
                allowed: ["popup-classic", "popup-drawer", "embed"]
            }), this.registerProperty("typeform_width", {
                input: "text",
                type: "int"
            }), this.registerProperty("typeform_height", {
                input: "text",
                type: "int"
            }), this.registerProperty("typeform_label", {
                input: "text",
                type: "utf8text",
                live: !0
            }), this.registerProperty("customIframe_url", {
                input: "text",
                type: "url",
                live: !0
            }), this.registerProperty("customIframe_width", {
                input: "text",
                type: "int"
            }), this.registerProperty("customIframe_height", {
                input: "text",
                type: "int"
            }), this.registerProperty("customIframe_aspectRatio", {
                input: "text",
                type: "word",
                allowed: ["strict", "flexible", "ignore"]
            }), this.registerProperty("customCode_label", {
                input: "text",
                type: "utf8text",
                live: !0,
                optional: !0
            }), this.registerProperty("customCode_content", {
                input: "text",
                type: "any",
                live: !0
            }), this.registerProperty("customCode_style", {
                input: "select",
                type: "word",
                allowed: ["inline", "hidden"]
            })
        }

        var n = e("./component");
        o.prototype = new n, o.prototype.constructor = o, o.prototype.type = "widget", o.prototype.contentDependencies = {}, o.prototype.import = function (e) {
            var t = this.importValue;
            this.mode = t(e, "mode"), this.stripeCheckout = $.extend(this.stripeCheckout, e.stripeCheckout), this.gumroadOverlay = $.extend(this.gumroadOverlay, e.gumroadOverlay), this.facebookLike = $.extend(this.facebookLike, e.facebookLike), this.paypalButton = $.extend(this.paypalButton, e.paypalButton), this.typeform = $.extend(this.typeform, e.typeform), this.customIframe = $.extend(this.customIframe, e.customIframe), this.customCode = $.extend(this.customCode, e.customCode), 0 === this.paypalButton.amount && (this.paypalButton.amount = "0")
        }, o.prototype.export = function (e) {
            e.syncAll()
        }, o.prototype.createClone = function (e, t) {
            var i;
            i = new o(e), i.mode = this.mode, i.stripeCheckout = JSON.parse(JSON.stringify(this.stripeCheckout)), i.gumroadOverlay = JSON.parse(JSON.stringify(this.gumroadOverlay)), i.facebookLike = JSON.parse(JSON.stringify(this.facebookLike)), i.paypalButton = JSON.parse(JSON.stringify(this.paypalButton)), i.typeform = JSON.parse(JSON.stringify(this.typeform)), i.customIframe = JSON.parse(JSON.stringify(this.customIframe)), i.customCode = JSON.parse(JSON.stringify(this.customCode)), i.syncAll(), t(i)
        }, o.prototype.cssBase = function (e) {
        }, o.prototype.redraw = function (e) {
            var t, i = this.styleSheet, o = this, n = function (t, i) {
                (!e || t.indexOf(e) > -1) && i()
            };
            switch (n(["mode", "stripeCheckout_buttonLabel", "gumroadOverlay_buttonLabel", "facebookLike_layout", "facebookLike_action", "facebookLike_shareButton", "paypalButton_button", "typeform_url", "typeform_style", "typeform_label", "customIframe_url", "customCode_content", "customCode_style", "customCode_label"], function () {
                var e = "";
                switch (e += '<div class="--widget ' + o.mode + '" id="--' + o.id + '">', o.mode) {
                    case"stripe-checkout":
                        e += '<span class="stripe-button-el"><span>' + o.stripeCheckout.buttonLabel + "</span></span>";
                        break;
                    case"gumroad-overlay":
                        e += '<span class="gumroad-button"><span class="gumroad-button-logo"></span>' + o.gumroadOverlay.buttonLabel + "</span>";
                        break;
                    case"facebook-like":
                        var t = "", i = "", n = "", a = "";
                        switch (t = '<div class="pluginButton"><div class="pluginButtonContainer"><div class="pluginButtonImage"><span class="--button"><span class="pluginButtonIcon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" class="pluginButtonIconSVG"><path fill="white" d="M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9 11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1 11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2 15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3 11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z"></path></svg></span></span></div><span class="pluginButtonLabel">' + o.facebookLike.action.charAt(0).toUpperCase() + o.facebookLike.action.substr(1) + "</span></div></div>", a = '<div class="pluginButton share"><div class="pluginButtonContainer"><div class="pluginButtonImage"><span class="--button"><span class="pluginButtonIconPlaceholder"></span></span></div><span class="pluginButtonLabel">Share</span></div></div>', i = '<div><div class="pluginCountButton"><span><span>2.5M</span></span></div><div class="pluginCountButtonNub"><span class="--s"></span><span class="--i"></span></div></div>', n = '<div><div class="pluginCountBox"><div class="pluginCountBoxTextOnly"><span><span>2.5M</span></span></div></div><div class="pluginCountBoxNub"><span class="--s"></span><span class="--i"></span></div></div>', e += '<div class="layout --' + o.facebookLike.layout + '">', o.facebookLike.layout) {
                            case"box_count":
                                e += n + t + (o.facebookLike.shareButton ? a : "");
                                break;
                            case"button_count":
                                e += t + (o.facebookLike.shareButton ? a : "") + i;
                                break;
                            case"button":
                                e += t + (o.facebookLike.shareButton ? a : "");
                                break;
                            default:
                                e += "(" + o.facebookLike.layout + ")"
                        }
                        e += "</div>";
                        break;
                    case"paypal-button":
                        switch (e += '<span class="--button large">', o.paypalButton.button) {
                            case"buynow":
                                e += "Buy Now";
                                break;
                            case"cart":
                                e += "Add to Cart";
                                break;
                            case"donate":
                                e += "Donate";
                                break;
                            case"subscribe":
                                e += "Subscribe"
                        }
                        e += "</span>";
                        break;
                    case"typeform":
                        switch (o.typeform.style) {
                            case"embed":
                                e += o.typeform.url ? '<div class="typeform-widget"><span>' + o.typeform.url.replace(/https?:\/\/(www\.)?/, "") + "</span></div>" : '<div class="typeform-widget placeholder"><span>No URL</span></div>';
                                break;
                            case"popup-classic":
                            case"popup-drawer":
                                e += '<span class="typeform-share-button">' + o.typeform.label + "</span>"
                        }
                        break;
                    case"custom-iframe":
                        o.customIframe.url ? e += '<div class="frame"><div class="--iframe"><span>' + o.customIframe.url.replace(/https?:\/\/(www\.)?/, "") + "</span></div></div>" : (e = e.replace(o.mode, o.mode + " placeholder"), e += '<div class="frame"><div class="--iframe"><span>No URL</span></div></div>');
                        break;
                    case"custom-code":
                        o.customCode.content ? ("hidden" == o.customCode.style && (e = e.replace(o.mode, o.mode + " hidden")), e += '<div class="frame"><div class="--content"><span>' + (o.customCode.label ? o.customCode.label : "(Untitled)") + "</span></div></div>") : (e = e.replace(o.mode, o.mode + " placeholder"), e += '<div class="frame"><div class="--content"><span>No Code</span></div></div>');
                        break;
                    default:
                        e += "(" + o.mode + ")"
                }
                e += "</div>", o.$canvas.html(e)
            }), t = o.selector(), i.unsetAll(t), o.mode) {
                case"typeform":
                    switch (o.typeform.style) {
                        case"embed":
                            i.r(t + " .typeform-widget").set("max-width", "100%"), o.typeform.width && i.r(t + " .typeform-widget").set("width", o.typeform.width + "rem"), o.typeform.height && i.r(t + " .typeform-widget").set("height", o.typeform.height + "rem")
                    }
                    break;
                case"custom-iframe":
                    switch (o.customIframe.aspectRatio) {
                        case"ignore":
                            i.r(t + " .frame .--iframe").set("max-width", "100%"), o.customIframe.width && i.r(t + " .frame .--iframe").set("width", o.customIframe.width + "rem"), o.customIframe.height && i.r(t + " .frame .--iframe").set("height", o.customIframe.height + "rem");
                            break;
                        case"strict":
                            i.r(t).set("max-width", "100%"), o.customIframe.width && i.r(t).set("width", o.customIframe.width + "rem"), i.r(t + " .frame").set({
                                position: "relative",
                                height: "0",
                                overflow: "hidden",
                                "padding-bottom": o.customIframe.height / o.customIframe.width * 100 + "%",
                                "min-height": "10rem"
                            }), i.r(t + " .frame .--iframe").set({
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%"
                            });
                            break;
                        case"flexible":
                            i.r(t).set("max-width", "100%"), o.customIframe.width && i.r(t).set("width", o.customIframe.width + "rem"), i.r(t + " .frame").set({
                                position: "relative",
                                height: "0",
                                overflow: "hidden",
                                "padding-bottom": o.customIframe.height / o.customIframe.width * 100 + "%",
                                "min-height": "10rem"
                            }), o.customIframe.width > o.customIframe.height && i.r(t + " .frame", "portrait").set({"padding-bottom": o.customIframe.height / Math.max(.625 * o.customIframe.width, o.customIframe.height) * 100 + "%"}), i.r(t + " .frame .--iframe").set({
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%"
                            })
                    }
                    break;
                case"custom-code":
            }
        }, t.exports = o
    }, {"./component": 7}]
}, {}, [1]);