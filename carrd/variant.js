function Variant() {
    function a() {
        f(), g()
    }

    function b() {
        mr_variant.wp.saveType = "manual", o(".viu"), J("all"), variant.wp.saveHTML(ca(Pb()), "manual")
    }

    function c() {
        t() || pageIsSaved || (mr_variant.wp.saveType = "auto", J("all"), variant.wp.saveHTML(ca(Pb()), "auto"))
    }

    function d(a) {
        var c = Ic(".vfj .vrv"), d = Ic(".vdm .vrv");
        window.localStorage.clear(), Eb(), Cb(a), mr_variant.wp.renderNavContainer(c.data("default").value), mr_variant.wp.renderFooter(d.data("default").value), g(wp_data.current_page.post_title), f(), interface.dropdown.resetToDefault(c), interface.dropdown.resetToDefault(d), wb(), b()
    }

    function e(a) {
        var b = a;
        xb(b.postId), Ic.modal.close(), window.localStorage.clear(), Eb(), mr_variant.wp.updateWpData(b.postId, mr_variant.wp.load), g(b.title)
    }

    function f() {
        history.replaceState(wp_data.current_page.post_id, wp_data.current_page.post_id, wp_data.current_page.variant_url)
    }

    function g(a) {
        a = he.decode(_.isUndefined(a) ? wp_data.current_page.post_title : a), window.document.title = a + " - Variant"
    }

    function h() {
        pageIsSaved = !1
    }

    function i() {
        pageIsSaved = !0
    }

    function j(a) {
        var b, c, d, e = "", f = "", g = ["class"];
        return b = a.get(0), c = _.pairs(_.reduce(b.attributes, function (a, b) {
            return a[b.name] = b.value, a
        }, {})), c.forEach(function (a) {
            var b = a[0], c = a[1];
            _.contains(b, g) || ("data-shortcode-name" === b && (d = c), 0 === b.indexOf("data-param") && (f = f + ("" !== f ? " " : "") + b.replace("data-param-", "") + '="' + c + '"'))
        }), e = "[" + d + ("" !== f ? " " : "") + f + "]"
    }

    function k(a) {
        var b, c, d, e;
        mc(a) && (b = j(a), c = Ic(a), variant.wp.renderShortcode(b, c.attr("vic"))), _.isUndefined(a.html) || _.isUndefined(a.target) || (d = Ic(".variant-shortcode." + a.target), e = d.closest("section, header, footer").attr("vic"), d.html(a.html).addClass("vru"), d.css("min-height", "auto"), Bb(), mr.documentReady(mr.setContext(".viu ." + e)), mr.windowLoad(mr.setContext(".viu  ." + e)))
    }

    function l(a, b) {
        return b = _.isUndefined(b) ? !1 : !0, a.find("div.variant-shortcode").each(function () {
            var a = j(Ic(this)), c = Ic(this);
            b && c.empty(), b ? c.append(a) : (c.before(a), c.remove())
        }), a
    }

    function m(a) {
        return a = Ic("<div>").append(a), a.find(".nav-container").remove(), a.find("footer").remove(), a = l(a, !0), a.html().replace(/(\n|\t)/g, "")
    }

    function n(a) {
        Array.isArray(a) ? vc.options = vc.options.concat(a) : _.isObject(a) && vc.options.push(a)
    }

    function o(a) {
        Ic(a).addClass("loading")
    }

    function p(a) {
        Ic(a).removeClass("loading")
    }

    function q() {
        _.isUndefined(wp_data.config.autosave_interval) || (_.isUndefined(this.wp.autoSaveTimer) || clearInterval(this.wp.autoSaveTimer), parseInt(wp_data.config.autosave_interval, 10) > 0 && (s(), this.wp.autoSaveTimer = setInterval(c, 1e4 * parseInt(wp_data.config.autosave_interval, 10))))
    }

    function r() {
        this.wp.pauseAutoSave = !0
    }

    function s() {
        this.wp.pauseAutoSave = !1
    }

    function t() {
        return this.wp.pauseAutoSave
    }

    function u() {
        Pb() ? (Ic(".vet span").html("Load " + Ic.localStorage(Ac + ".vhg")), Ic(".vhe").removeClass("vih")) : Ic.localStorage(Ac + ".state.veu") ? (Ic(".vet span").removeClass("vih"), Ic(".vhe").removeClass("vih")) : Ic(".vhd").removeClass("vih"), isSafari && Ic(".vah, .vdi, .vgy").remove()
    }

    function v() {
        var a = dc("demo");
        if (null !== a) {
            var b = new XMLHttpRequest;
            b.open("GET", "../demos/" + a + ".variant", !0), b.responseType = "blob", b.onload = function (a) {
                var c = [b.response];
                ya(c, !0)
            }, b.onerror = function (a) {
                Sb("Could not load specified demo file.")
            }, b.send()
        }
    }

    function w() {
        var a = Ic("body");
        xc = Ic("#blank-veu").html(), Ic(".viu").html(Ic("#veu").html()), yc = Ic("#veu"), zc = Ic(".viu"), Ac = "undefined" !== a.attr("mrv_namespace") ? a.attr("mrv_namespace") : "mrv_variant.default", Bc = a.attr("mrv_contentTarget") ? Ic("#veu " + a.attr("mrv_contentTarget")) : yc, Cc = a.attr("mrv_contentTarget") ? Ic(".viu " + a.attr("mrv_contentTarget")) : zc, Dc = a.attr("mrv_navTarget") ? Ic("#veu " + a.attr("mrv_navTarget")) : Bc, Ec = a.attr("mrv_navTarget") ? Ic(".viu " + a.attr("mrv_navTarget")) : Cc, Fc = a.attr("mrv_footerTarget") ? Ic("#veu " + a.attr("mrv_footerTarget")) : Bc, Gc = a.attr("mrv_footerTarget") ? Ic(".viu " + a.attr("mrv_footerTarget")) : Cc
    }

    function x() {
        var a = window.navigator.userAgent, b = a.indexOf("MSIE "), c = 0;
        (b > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && (Ic("#if-ie").removeClass("vih"), c = 1), 0 === c && setTimeout(function () {
            Ic(".vhc").addClass("vba"), Ic(".vhv").removeClass("vba"), setTimeout(function () {
                Ic(".vhc").remove(), u(), Qb()
            }, 300)
        }, 100)
    }

    function y(a) {
        Ic("head").append('<link class="viw" href="theme/css/' + a + '" rel="alternate stylesheet" type="text/css" media="all">')
    }

    function z() {
        var a;
        try {
            a = JSON.parse(Ic(".vaz").html()), Ic(".vho").eq(2).removeClass("vih"), A("Original", a.original.colours, "theme"), Ic(".vay").attr("viq", a.original.originalFileName + ".css").attr("vhx", a.original.originalFileName + ".css"), Ic(a.schemes).each(function () {
                A(this.name, this.colours, "theme-" + this.name), y("theme-" + this.name.toLowerCase() + ".css")
            }), Ic(".viw").remove(), Ic(".vnb").removeClass("empty-vmd")
        } catch (b) {
            return
        }
    }

    function A(a, b, c) {
        var d, e = "", f = a + ": ", g = 100 / b.length;
        Ic(b).each(function (a, b) {
            e += '<div class="vax" style="width: ' + g + "%; background-color: " + b + '"></div>', f += " " + b
        }), d = '<li title="' + f + '" class="vhu" viz="' + c.toLowerCase() + '.css">', Ic(".vay").append(d + e + "</li>")
    }

    function B(a, b) {
        try {
            var c = (JSON.parse(Ic(".vaz").html()), a), d = Ic('[href*="' + Ic(".vay").attr("vhx") + '"]').attr("href"),
                e = Ic(".vay").attr("vhx");
            c = d.replace(e, c), Ic('[href*="' + Ic(".vay").attr("vhx") + '"]').attr("href", c), Ic(".vay").attr("vhx", a), b === !0 && Bb()
        } catch (f) {
        }
    }

    function C(a) {
        var b, c, d, e, f = Ic(".viu ." + a), g = !1;
        return f.is(".medium-editor-element") && (g = !0, nc.removeElements(f.get(0)), f.removeClass("medium-editor-element").removeAttr("data-medium-editor-element").removeAttr("data-medium-editor-editor-index").removeAttr("medium-editor-index")), Ic("#veu ." + a).attr("vht") ? a = "parent" === Ic("#veu ." + a).attr("vht") ? Ic("#veu ." + a).parent().attr("vic") : Ic("#veu ." + a).closest(Ic("#veu ." + a).attr("vht")).attr("vic") : Ic("#veu ." + a).closest(".vpe").length && (a = Ic("#veu ." + a).closest(".vpe").attr("vic")), b = Ic(".viu ." + a).not("ul.slides .clone ." + a).clone(), c = Ic("#veu ." + a).clone(), d = (new Date).getTime(), e = "vjs-" + d, b.find(".vnw").remove(), b.attr("vic", e), c.attr("vic", e), b.alterClass("vjs-*", ""), c.alterClass("vjs-*", ""), b.addClass(e), c.addClass(e), b.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, iframe, blockquote, figcaption, tbody, tr, td, th, form, label, address").each(function (a) {
            var b = "vjs-" + d + "-" + a, c = Ic(this);
            c.attr("vic", b), c.alterClass("vjs-*", ""), c.addClass(b)
        }), c.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, iframe, blockquote, figcaption, tbody, tr, td, th, form, label, address").each(function (a) {
            var b = "vjs-" + d + "-" + a, c = Ic(this);
            c.attr("vic", b), c.alterClass("vjs-*", ""), c.addClass(b)
        }), b.addClass("vpf").insertAfter(Ic(".viu ." + a)), g === !0 && nc.addElements([b.get(0), f.get(0)]), c.insertAfter(Ic("#veu ." + a)), Bb(), Ic(".vhw").hide(), Ic("#veu ." + a).is(Mc) ? void Tc(a) : void Ic(".viu ." + a).parents().each(function () {
            return Ic(this).is(Nc) ? (Tc(a), !1) : void 0
        })
    }

    function D(a, b) {
        var c, d = "undefined" != typeof b ? b : !1, e = Ic(".viu ." + a).parents(),
            f = Ic("#veu ." + a).is(Mc) ? !0 : !1;
        Ic("#veu ." + a).attr("vht") ? a = "parent" === Ic("#veu ." + a).attr("vht") ? Ic("#veu ." + a).parent().attr("vic") : Ic("#veu ." + a).closest(Ic("#veu ." + a).attr("vht")).attr("vic") : Ic("#veu ." + a).closest(".vpe").length && (a = Ic("#veu ." + a).closest(".vpe").attr("vic")), c = Ic("#veu ." + a).attr("vjw") ? Ic("#veu ." + a).closest("nav, section, header, footer").find(Ic("#veu ." + a).attr("vjw")).attr("vic") : a, d === !0 && (Ic(".viu ." + a).remove(), Ic("#veu ." + a).remove()), Ic(".vdv").length ? (Ic(".viu ." + a + ", .viu ." + c).addClass("vjb").removeClass("vjm"), Ic("#veu ." + a + ", #veu ." + c).addClass("vjb").removeClass("vjm")) : (Ic(".viu ." + a + ", .viu ." + c).addClass("vib").removeClass("vjm"), Ic("#veu ." + a + ", #veu ." + c).addClass("vib").removeClass("vjm")), f ? Tc(a) : e.each(function () {
            return Ic(this).is(Nc) ? (Tc(a), !1) : void 0
        }), Bb(), Ic(".vhw").hide()
    }

    function E(a) {
        var b = Ic("#veu ." + a), c = Ic(".viu ." + a), d = Ic("#veu ." + gc(b)), e = Ic(".viu ." + gc(c));
        b.is(":first-child") || (b.detach().insertBefore(d), c.detach().find(".vnw").remove(), c.insertBefore(e), Bb(), b.is(Mc) ? Tc(a) : c.parents().each(function () {
            return Ic(this).is(Nc) ? (Tc(a), !1) : void 0
        }))
    }

    function F(a) {
        var b = Ic("#veu ." + a), c = Ic(".viu ." + a), d = b.next(), e = c.next();
        b.is(":last-child") || (b.detach().insertAfter(d), c.detach().find(".vnw").remove(), c.insertAfter(e), Bb(), b.is(Mc) ? Tc(a) : c.parents().each(function () {
            return Ic(this).is(Nc) ? (Tc(a), !1) : void 0
        }))
    }

    function G(a) {
        if (Ic(a).siblings().length)return void Ic(a).remove();
        if (Ic(a).parent().length) {
            var b = Ic(a).parent();
            return Ic(a).remove(), G(b)
        }
    }

    function H(a) {
        var b = Ic("." + a);
        if (Ic(b).is("p , div, span, figure, article, img"))if (Ic(b).is('[class*="medium-"]') || Ic(b).parent().is('div [class*="medium-"]')) {
            if (Ic(b).parent().is('div [class*="medium-"]') && (b = Ic(b).parent()), !Ic(b).hasClass("medium-12")) {
                if (b.hasClass("medium-11"))return void b.removeClass("medium-11").addClass("medium-12");
                if (b.hasClass("medium-10"))return void b.removeClass("medium-10").addClass("medium-11");
                if (b.hasClass("medium-9"))return void b.removeClass("medium-9").addClass("medium-10");
                if (b.hasClass("medium-8"))return void b.removeClass("medium-8").addClass("medium-9");
                if (b.hasClass("medium-7"))return void b.removeClass("medium-7").addClass("medium-8");
                if (b.hasClass("medium-6"))return void b.removeClass("medium-6").addClass("medium-7");
                if (b.hasClass("medium-5"))return void b.removeClass("medium-5").addClass("medium-6");
                if (b.hasClass("medium-4"))return void b.removeClass("medium-4").addClass("medium-5");
                if (b.hasClass("medium-3"))return void b.removeClass("medium-3").addClass("medium-4");
                if (b.hasClass("medium-2"))return void b.removeClass("medium-2").addClass("medium-3");
                if (b.hasClass("medium-1"))return void b.removeClass("medium-1").addClass("medium-2")
            }
        } else if (Ic(b).is('[class*="col-xs-"]:not([class*="col-md-"])') || Ic(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
            if (Ic(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (b = Ic(b).parent()), !Ic(b).hasClass("col-xs-12")) {
                if (b.hasClass("col-xs-11"))return void b.removeClass("col-xs-11").addClass("col-xs-12");
                if (b.hasClass("col-xs-10"))return void b.removeClass("col-xs-10").addClass("col-xs-11");
                if (b.hasClass("col-xs-9"))return void b.removeClass("col-xs-9").addClass("col-xs-10");
                if (b.hasClass("col-xs-8"))return void b.removeClass("col-xs-8").addClass("col-xs-9");
                if (b.hasClass("col-xs-7"))return void b.removeClass("col-xs-7").addClass("col-xs-8");
                if (b.hasClass("col-xs-6"))return void b.removeClass("col-xs-6").addClass("col-xs-7");
                if (b.hasClass("col-xs-5"))return void b.removeClass("col-xs-5").addClass("col-xs-6");
                if (b.hasClass("col-xs-4"))return void b.removeClass("col-xs-4").addClass("col-xs-5");
                if (b.hasClass("col-xs-3"))return void b.removeClass("col-xs-3").addClass("col-xs-4");
                if (b.hasClass("col-xs-2"))return void b.removeClass("col-xs-2").addClass("col-xs-3");
                if (b.hasClass("col-xs-1"))return void b.removeClass("col-xs-1").addClass("col-xs-2")
            }
        } else if (Ic(b).is('[class*="col-sm-"]:not([class*="col-md-"])') || Ic(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if (Ic(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (b = Ic(b).parent()), !Ic(b).hasClass("col-sm-12")) {
                if (b.hasClass("col-sm-11"))return void b.removeClass("col-sm-11").addClass("col-sm-12");
                if (b.hasClass("col-sm-10"))return void b.removeClass("col-sm-10").addClass("col-sm-11");
                if (b.hasClass("col-sm-9"))return void b.removeClass("col-sm-9").addClass("col-sm-10");
                if (b.hasClass("col-sm-8"))return void b.removeClass("col-sm-8").addClass("col-sm-9");
                if (b.hasClass("col-sm-7"))return void b.removeClass("col-sm-7").addClass("col-sm-8");
                if (b.hasClass("col-sm-6"))return void b.removeClass("col-sm-6").addClass("col-sm-7");
                if (b.hasClass("col-sm-5"))return void b.removeClass("col-sm-5").addClass("col-sm-6");
                if (b.hasClass("col-sm-4"))return void b.removeClass("col-sm-4").addClass("col-sm-5");
                if (b.hasClass("col-sm-3"))return void b.removeClass("col-sm-3").addClass("col-sm-4");
                if (b.hasClass("col-sm-2"))return void b.removeClass("col-sm-2").addClass("col-sm-3");
                if (b.hasClass("col-sm-1"))return void b.removeClass("col-sm-1").addClass("col-sm-2")
            }
        } else if ((Ic(b).is('[class*="col-md-"]') || Ic(b).parent().is('div [class*="col-md-"]')) && (Ic(b).parent().is('div [class*="col-md-"]') && (b = Ic(b).parent()), !Ic(b).hasClass("col-md-12"))) {
            if (b.hasClass("col-md-11"))return void b.removeClass("col-md-11").addClass("col-md-12");
            if (b.hasClass("col-md-10"))return void b.removeClass("col-md-10").addClass("col-md-11");
            if (b.hasClass("col-md-9"))return void b.removeClass("col-md-9").addClass("col-md-10");
            if (b.hasClass("col-md-8"))return void b.removeClass("col-md-8").addClass("col-md-9");
            if (b.hasClass("col-md-7"))return void b.removeClass("col-md-7").addClass("col-md-8");
            if (b.hasClass("col-md-6"))return void b.removeClass("col-md-6").addClass("col-md-7");
            if (b.hasClass("col-md-5"))return void b.removeClass("col-md-5").addClass("col-md-6");
            if (b.hasClass("col-md-4"))return void b.removeClass("col-md-4").addClass("col-md-5");
            if (b.hasClass("col-md-3"))return void b.removeClass("col-md-3").addClass("col-md-4");
            if (b.hasClass("col-md-2"))return void b.removeClass("col-md-2").addClass("col-md-3");
            if (b.hasClass("col-md-1"))return void b.removeClass("col-md-1").addClass("col-md-2")
        }
        Bb()
    }

    function I(a) {
        var b = Ic("." + a);
        if (Ic(b).is("p , div, span, figure, article, img"))if (Ic(b).is('[class*="medium-"]') || Ic(b).parent().is('div [class*="medium-"]')) {
            if (Ic(b).parent().is('div [class*="medium-"]') && (b = Ic(b).parent()), !Ic(b).hasClass("medium-1")) {
                if (b.hasClass("medium-12"))return void b.removeClass("medium-12").addClass("medium-11");
                if (b.hasClass("medium-11"))return void b.removeClass("medium-11").addClass("medium-10");
                if (b.hasClass("medium-10"))return void b.removeClass("medium-10").addClass("medium-9");
                if (b.hasClass("medium-9"))return void b.removeClass("medium-9").addClass("medium-8");
                if (b.hasClass("medium-8"))return void b.removeClass("medium-8").addClass("medium-7");
                if (b.hasClass("medium-7"))return void b.removeClass("medium-7").addClass("medium-6");
                if (b.hasClass("medium-6"))return void b.removeClass("medium-6").addClass("medium-5");
                if (b.hasClass("medium-5"))return void b.removeClass("medium-5").addClass("medium-4");
                if (b.hasClass("medium-4"))return void b.removeClass("medium-4").addClass("medium-3");
                if (b.hasClass("medium-3"))return void b.removeClass("medium-3").addClass("medium-2");
                if (b.hasClass("medium-2"))return void b.removeClass("medium-2").addClass("medium-1")
            }
        } else if (Ic(b).is('[class*="col-xs-"]:not([class*="col-md-"])') || Ic(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
            if (Ic(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (b = Ic(b).parent()), !Ic(b).hasClass("col-xs-1")) {
                if (b.hasClass("col-xs-12"))return void b.removeClass("col-xs-12").addClass("col-xs-11");
                if (b.hasClass("col-xs-11"))return void b.removeClass("col-xs-11").addClass("col-xs-10");
                if (b.hasClass("col-xs-10"))return void b.removeClass("col-xs-10").addClass("col-xs-9");
                if (b.hasClass("col-xs-9"))return void b.removeClass("col-xs-9").addClass("col-xs-8");
                if (b.hasClass("col-xs-8"))return void b.removeClass("col-xs-8").addClass("col-xs-7");
                if (b.hasClass("col-xs-7"))return void b.removeClass("col-xs-7").addClass("col-xs-6");
                if (b.hasClass("col-xs-6"))return void b.removeClass("col-xs-6").addClass("col-xs-5");
                if (b.hasClass("col-xs-5"))return void b.removeClass("col-xs-5").addClass("col-xs-4");
                if (b.hasClass("col-xs-4"))return void b.removeClass("col-xs-4").addClass("col-xs-3");
                if (b.hasClass("col-xs-3"))return void b.removeClass("col-xs-3").addClass("col-xs-2");
                if (b.hasClass("col-xs-2"))return void b.removeClass("col-xs-2").addClass("col-xs-1")
            }
        } else if (Ic(b).is('[class*="col-sm-"]:not([class*="col-md-"])') || Ic(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if (Ic(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (b = Ic(b).parent()), !Ic(b).hasClass("col-sm-1")) {
                if (b.hasClass("col-sm-12"))return void b.removeClass("col-sm-12").addClass("col-sm-11");
                if (b.hasClass("col-sm-11"))return void b.removeClass("col-sm-11").addClass("col-sm-10");
                if (b.hasClass("col-sm-10"))return void b.removeClass("col-sm-10").addClass("col-sm-9");
                if (b.hasClass("col-sm-9"))return void b.removeClass("col-sm-9").addClass("col-sm-8");
                if (b.hasClass("col-sm-8"))return void b.removeClass("col-sm-8").addClass("col-sm-7");
                if (b.hasClass("col-sm-7"))return void b.removeClass("col-sm-7").addClass("col-sm-6");
                if (b.hasClass("col-sm-6"))return void b.removeClass("col-sm-6").addClass("col-sm-5");
                if (b.hasClass("col-sm-5"))return void b.removeClass("col-sm-5").addClass("col-sm-4");
                if (b.hasClass("col-sm-4"))return void b.removeClass("col-sm-4").addClass("col-sm-3");
                if (b.hasClass("col-sm-3"))return void b.removeClass("col-sm-3").addClass("col-sm-2");
                if (b.hasClass("col-sm-2"))return void b.removeClass("col-sm-2").addClass("col-sm-1")
            }
        } else if ((Ic(b).is('[class*="col-md-"]') || Ic(b).parent().is('div [class*="col-md-"]')) && (Ic(b).parent().is('div [class*="col-md-"]') && (b = Ic(b).parent()), !Ic(b).hasClass("col-md-1"))) {
            if (b.hasClass("col-md-12"))return void b.removeClass("col-md-12").addClass("col-md-11");
            if (b.hasClass("col-md-11"))return void b.removeClass("col-md-11").addClass("col-md-10");
            if (b.hasClass("col-md-10"))return void b.removeClass("col-md-10").addClass("col-md-9");
            if (b.hasClass("col-md-9"))return void b.removeClass("col-md-9").addClass("col-md-8");
            if (b.hasClass("col-md-8"))return void b.removeClass("col-md-8").addClass("col-md-7");
            if (b.hasClass("col-md-7"))return void b.removeClass("col-md-7").addClass("col-md-6");
            if (b.hasClass("col-md-6"))return void b.removeClass("col-md-6").addClass("col-md-5");
            if (b.hasClass("col-md-5"))return void b.removeClass("col-md-5").addClass("col-md-4");
            if (b.hasClass("col-md-4"))return void b.removeClass("col-md-4").addClass("col-md-3");
            if (b.hasClass("col-md-3"))return void b.removeClass("col-md-3").addClass("col-md-2");
            if (b.hasClass("col-md-2"))return void b.removeClass("col-md-2").addClass("col-md-1")
        }
        Bb()
    }

    function J(a) {
        var b, c, d, e, f, g, h, i, j, k, l, n, o, p, q, r = [], s = new Date;
        return lc() || (b = new JSZip, Ic("#vhl .viy").length) ? ("all" === a ? (Ic("#vhl .viy").each(function () {
            r.push(Ic(this).attr("viy"))
        }), c = "variant-exported-" + cc(s.toDateString())) : r.push(a), r.forEach(function (a, c) {
            d = Ic.localStorage(Ac + ".state.veu." + a), g = Ic.localStorage(Ac + ".state.vem." + a) || "", h = Ic.localStorage(Ac + ".vhf." + a), i = Ic.localStorage(Ac + "vmp." + a), j = Ic.localStorage(Ac + ".vkp." + a) || "", k = Ic('#vhl [viy="' + a + '"]').attr("vjh") || "", l = Ic('#vhl [viy="' + a + '"]').attr("page-title"), l = "undefined" != typeof l ? l : "", e = Ic.localStorage(Ac + ".state.page-meta-description-mrv." + a) || "", f = Ic.localStorage(Ac + ".state.page-google-analytics-id-mrv." + a) || "", lc() && (d = m(d)), n = {
                stateID: a,
                templateName: Ac,
                pageName: k,
                pageTitle: l,
                colourScheme: h,
                fontOption: i,
                bodyClasses: j,
                layoutMap: g,
                masterHtml: d,
                metaDescription: e,
                googleAnalyticsID: f
            }, o = JSON.stringify(n), lc() || b.file(cc(k) + "-" + s.getTime() + ".page", o)
        }), void(lc() ? variant.wp.saveVariant(o, mr_variant.wp.saveType) : (b.file(Ac + ".navs", Ic("#vbn").html()), b.file(Ac + ".footers", Ic("#vbl").html()), "all" !== a && (c = cc(k)), isSafari && (q = b.generate({
            type: "base64",
            compression: "deflate"
        }), Ic.localStorage("allpages", q)), isSafari || (p = b.generate({
            type: "blob",
            compression: "deflate"
        }), saveAs(p, c + ".variant"))))) : void Sb("Export .variant file", "There is nothing to export.<br /><br />Save at least one page before exporting.")
    }

    function K() {
        var a;
        try {
            a = JSON.parse(Ic(".vmq").html()), Ic(".vmy").removeClass("vih"), Ic(".vmz").text(a.title), L(a.originalSet), Ic(a.optionalSets).each(function () {
                L(this)
            }), Ic(".vnb").removeClass("empty-vmd")
        } catch (b) {
            return
        }
    }

    function L(a) {
        var b = Ic("<li>").addClass("vmv").attr("vmw", a.setName);
        a.css.length > 0 ? b.attr("vmo", a.css) : b.attr("vmo", "vir"), Ic(a.fonts).each(function () {
            b.append(Ic("<img>").attr("src", "img/fonts/" + cc(this.fontName) + ".png"))
        }), Ic(".vms").append(b)
    }

    function M(a, b) {
        try {
            if (_.isString(a)) {
                var c = (JSON.parse(Ic(".vmq").html()), Ic("[vmw=" + a + "]").attr("vmo"));
                Ic("head link.vmx").remove(), Ic("head").append('<link class="vmx" href="' + c + '" rel="stylesheet" type="text/css">').append('<link class="vmx" href="../css/font-' + cc(a) + '.css" rel="stylesheet" type="text/css">'), Ic(".vms").attr("vmr", a), Ic(".vmv.vhr").removeClass("vhr"), Ic('.vmv[vmw="' + a + '"]').addClass("vhr"), b === !0 && Bb()
            }
        } catch (d) {
        }
    }

    function N() {
        var a = V(), b = a.attr("vhy");
        Ic("#veu ." + b).html(a.html()), Ic("#vbl ." + b).html(a.html()), Ic("#vbl .vjb").removeClass("vjb"), Ic.localStorage(Ac + ".vbm", Ic("#vbl").html())
    }

    function O(a) {
        Ic(".vfb").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                Ic(".vfy").val(""), setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function P() {
        var a, b = (new Date).getTime(), c = "vhy-" + b, d = Ic(".vfz").val();
        Ic(".vdm").closest(".vho").find(".vly").text(d), Ic(".vfz").val(""), Ic("#veu footer").removeClass("vir").addClass("vhz").addClass(c).attr("vhy", c).attr("vie", d), Ic(".viu footer").removeClass("vir").addClass("vhz").addClass(c).attr("vhy", c).attr("vie", d), Ic("#vbl").append(Ic("#veu footer").clone()), a = Ic("#vbl").html(), Ic.localStorage(Ac + ".vbm", a), Q(Ic("." + c))
    }

    function Q(a) {
        Ic(".vdm").append('<li class="vdl" vid="' + Ic(a).attr("vhy") + '" vdn="' + Ic(a).attr("vhy") + '" vit="vhz"><span>' + Ic(a).attr("vie") + '</span><span class="vbx oi" data-glyph="x"></span></li>')
    }

    function R() {
        if (lc()) {
            var a = interface.dropdown.render(wp_data.footer_layouts, wp_data.footer_layouts_default);
            Ic(".vdm").append(a)
        } else Ic("#vbl").append(Ic.localStorage(Ac + ".vbm")), Ic("#vbl footer").each(function () {
            Q(Ic(this))
        })
    }

    function S(a, b) {
        var c = (U(), V()), d = W(), e = X(), f = b === !0 ? !0 : !1, g = "";
        e.remove(), c.remove(), Ic("#vbl [vhy=" + a + "]").length ? (g = hc(Ic("#vbl [vhy=" + a + "]").get(0), !0), d.append(g), Z(Y(a))) : Ic("#vdk section#" + a).length ? (g = Ic("#vdk section#" + a).html(), d.append(g), d.find("footer").addClass("vir").attr("footer-id", a), pb(d.find("footer")), Z(Y(a))) : Z(defaults.ui.sidebar.footerOptionsListText), f && (Bb(), Tc())
    }

    function T() {
        Ic("#veu footer").remove(), Ic(".viu footer").remove(), Qb(), Rb(), Bb(), Tc()
    }

    function U() {
        return Ic(Gc.selector)
    }

    function V() {
        return U().find("footer").first()
    }

    function W() {
        return Ic(Fc.selector)
    }

    function X() {
        return W().find("footer").first()
    }

    function Y(a) {
        return Ic('[vhy="' + a + '"]').attr("vie") || Ic("#vdk #" + a).attr("vbr")
    }

    function Z(a) {
        var b = Ic(".vdm").siblings(".vly");
        _.isUndefined(a) ? b.text(defaults.ui.sidebar.footerOptionsListText) : b.text(a)
    }

    function $() {
        var a, b = Ic("<div>").append(Ic(".vpi").val()), c = Ic("#veu").find("." + Ic(".vpj").val()),
            d = c.closest("section"), e = "", f = null, g = null;
        return Ic(Oc).each(function (a, b) {
            e += (a > 0 ? ", " : " ") + b.name
        }), Ic(b).find("form[action]:first").length ? (g = Ic(b).find("form[action]:first"), Ic(Oc).each(function (a, b) {
            return g.attr("action").toLowerCase().includes(b.action) ? (f = b.handler, !1) : void 0
        }), f ? (a = f(b, c), a ? (a.insertBefore(c), D(c.attr("vic")), pb(d), Tc(c.attr("vic")), !0) : !1) : (Ub("Please use an embed code from: " + e + ".", "warning", null, 7e3), !1)) : (Ub("No valid form found in your embed code.", "warning"), !1)
    }

    function aa(a, b) {
        var c = Ic(a).find("form[action]:first"), d = Ic("<form></form>"), e = !1, f = !1, g = null, h = null, i = !1,
            j = null, k = null, l = null, m = null, n = null;
        return k = b.find('input[type="text"]:first').parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (l = !0, g = Ic("<div>").addClass(k.attr("class")).alterClass("vjs-*", "")), b.find('[class*="col-"] [type="submit"]').length && (m = !0, h = Ic("<div>").addClass(b.find('[type="submit"]').parent().attr("class")).alterClass("vjs-*", "")), b.find("div.input-with-icon").length && (f = Ic("<div>").addClass("input-with-icon"), k = b.find("div.input-with-icon").parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (n = !0, g = Ic("<div>").addClass(k.attr("class")).alterClass("vjs-*", ""), f.wrap(g)), j = b.find("div.input-with-icon:first i"), j.clone().appendTo(f), f.children().removeAttr("vic"), f.children().alterClass("vjs-*", ""), f.find("input").remove(), e = !0), b.is(".form--merge") && (i = !0, c.find('input[type="email"], input[type="text"]').not('[tabindex="-1"]').length > 1) ? (Ub('The form you are embedding will not fit. Use "Super Slim" form instead.', "warning"), null) : (d.attr("class", b.attr("class")), d.alterClass("vjs-*", ""), d.attr("action", c.attr("action")), c.find("input, textarea, select").length ? (c.find("label, input, textarea").each(function () {
            var a = Ic(this), j = null, k = null, o = null;
            if (a.parent().is('[aria-hidden="true"]')) a.removeAttr("id"), j = a.parent().clone(), j.appendTo(d), d.find('[aria-hidden="true"]').addClass("hidden"); else if (e === !0)if (a.is('input[type="text"], input[type="email"]')) j = f.clone(), k = j.find("i:first"), c.find('label[for="' + a.attr("id") + '"]').insertBefore(k), a.insertAfter(k), n === !0 ? g.clone().append(j).appendTo(d) : j.appendTo(d); else if (a.is("label")) {
                if (d.find('.input-with-icon input[id="' + a.attr("for") + '"]'))return !0
            } else a.is('[type="submit"]') && (o = a.clone(), i && (o.attr("class", b.find('[type="submit"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), m === !0 ? h.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d)); else o = a.clone(), i && (a.is('[type="submit"]') ? o.attr("class", b.find('[type="submit"]').attr("class")) : o.attr("class", b.find('input[type="' + o.attr("type") + '"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), l === !0 ? g.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d)
        }), d) : (Ub("No valid form elements found in the provided embed code.", "warning"), null))
    }

    function ba(a, b) {
        var c = Ic(a).find("form[action]:first"), d = Ic("<form></form>"), e = !1, f = !1, g = null, h = null, i = !1,
            j = null, k = null, l = null, m = null, n = null;
        return k = b.find('input[type="text"]:first').parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (l = !0, g = Ic("<div>").addClass(k.attr("class")).alterClass("vjs-*", "")), b.find('[class*="col-"] [type="submit"]').length && (m = !0, h = Ic("<div>").addClass(b.find('[type="submit"]').parent().attr("class")).alterClass("vjs-*", "")), b.find("div.input-with-icon").length && (f = Ic("<div>").addClass("input-with-icon"), k = b.find("div.input-with-icon").parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (n = !0, g = Ic("<div>").addClass(k.attr("class")).alterClass("vjs-*", ""), f.wrap(g)), j = b.find("div.input-with-icon:first i"), j.clone().appendTo(f), f.children().removeAttr("vic"), f.children().alterClass("vjs-*", ""), f.find("input").remove(), e = !0), b.is(".form--merge") && (i = !0, c.find('input[type="email"], input[type="text"]').not('[tabindex="-1"]').length > 1) ? (Ub("The form you are embedding will not fit. Use a single field instead.", "warning"), null) : (d.attr("class", b.attr("class")), d.alterClass("vjs-*", ""), d.removeAttr("vic"), d.attr("action", c.attr("action")), c.find("input, textarea, select").length ? (c.find('label, input, textarea, button[type="submit"]').each(function () {
            var a = Ic(this), j = null, k = null, o = null;
            if (a.parent().is('[aria-hidden="true"]')) a.removeAttr("id"), j = a.parent().clone(), j.appendTo(d), d.find('[aria-hidden="true"]').addClass("hidden"); else if (e === !0)if (a.is('input[type="text"], input[type="email"]')) j = f.clone(), k = j.find("i:first"), c.find('label[for="' + a.attr("id") + '"]').insertBefore(k), a.insertAfter(k), n === !0 ? g.clone().append(j).appendTo(d) : j.appendTo(d); else if (a.is("label")) {
                if (d.find('.input-with-icon input[id="' + a.attr("for") + '"]'))return !0
            } else a.is('[type="submit"]') && (o = a.clone(), i && (o.attr("class", b.find('[type="submit"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), m === !0 ? h.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d)); else o = a.clone(), i && (a.is('[type="submit"]') ? o.attr("class", b.find('[type="submit"]').attr("class")) : o.attr("class", b.find('input[type="' + o.attr("type") + '"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), l === !0 ? g.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d)
        }), d) : (Ub("No valid form elements found in the provided embed code.", "warning"), null))
    }

    function ca(a) {
        var b, c, d, e, f, g = Ic('<div id="vjk" />').html(Gb(a)), h = Hb(a), i = (Lb(a), Jb(a)), j = Kb(a), k = "",
            m = {
                indent_inner_html: !0,
                indent_size: 4,
                indent_char: " ",
                wrap_line_length: 0,
                brace_style: "expand",
                preserve_newlines: !1,
                max_preserve_newlines: 0,
                indent_handlebars: !1,
                extra_liners: ["/html", "/head", "/body"]
            };
        return tc.options && tc.options.forEach(function (a) {
            "undefined" != typeof a.disposableSelector && (k = k + " " + a.disposableSelector.replace(".", ""))
        }), lc() && (g = l(g)), g.find("h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, a:empty, p:empty, span:empty, li:empty, em:empty, strong:empty, blockquote:empty, figcaption:empty, table:empty, label:empty").not(".in-page-link").addClass("vib"), g.find(".vib, .vjb").each(function () {
            G(Ic(this))
        }), g.find("div.row:not(:has(>div, >p, >h1, >h2, >h3, >h4, >h5, >h6, >span, >ul, >li, >strong, >em, >a, >i, >img, >figure, >video, >iframe, >form, >input, >button, >textarea, >blockquote, >figcaption, >table, >form, >label, >address))").remove(), g.find(".vjd:not(:has(>div, >p, >h1, >h2, >h3, >h4, >h5, >h6, >span, >ul, >li, >strong, >em, >a, >i, >img, >figure, >video, >iframe, >form, >button, >input, >textarea, >blockquote, >figcaption, >table, >form, >label, >address))").remove(), Ic(g).find("p, span, li, ul, h1, h2, h3, h4, h5, h6, nav, header, footer, strong, em, a, section, div, i, img, figure, video, iframe, form, input, button, textarea, blockquote, figcaption, tbody, tr, td, th, label, address").removeAttr("vbq").removeClass("vrh").removeClass("vjm vjb").removeClass("vhz").removeClass("vir").alterClass("vjs-*", "").alterClass("variant-*", "").removeClass("vjd").removeClass("voz").removeClass("viv").removeClass("lightbox-gallery-mrv").removeClass("veo").removeClass("vlk").removeClass("ven").removeClass("vjy").removeClass("vdw").removeAttr("vic").removeClass("vjx").removeClass("vog").removeClass("voh").removeAttr("vij").removeAttr("vik").removeAttr("contenteditable").removeAttr("data-vip").removeAttr("vli").removeAttr("vht").removeAttr("vjw").removeAttr("vii").removeAttr("style").removeAttr("nav-id").removeAttr("footer-id").removeClass("ui-sortable").removeClass(k).removeClass("vns").removeClass("vnx").removeClass("vpd").removeClass("vnn").removeClass("vpe").removeAttr("vqj").removeClass("vru"), Ic(g).find("nav, header").alterClass("via-*", "").removeAttr("via").removeAttr("vio").removeAttr("style"), Ic(g).find("footer").alterClass("vhy-*", "").removeAttr("vhy").removeAttr("vie"), Ic(g).find('*[class=""]').removeAttr("class"), b = Ic("#vji").html(), b = String(b).replace("[title]", h), b = String(b).replace(Ob(), Lb(a)), f = ia(b, j), b = f ? f : b, b = ja(b, i), c = he.encode(Ic(g).html()), d = Ic("#vif").html(), b = da(b, c, d), b = ea(b, c, d), b = ka(a, b), d = fa(b, c, d), d = la(a, d), e = String(b + c + d), e = String(e).replace(/\.\.\/img\//g, "img/").replace(/\.\.\/video\//g, "video/").replace(/delay-src/g, "src").replace(/no-src/g, "src"), e = html_beautify(he.decode(e), m)
    }

    function da(a, b, c) {
        var d = a;
        return qc.forEach(function (a, e) {
            var f, g, h, i, j, k;
            f = he.decode(b + c), g = Ic("<div>").html(f), d = d.replace("\n        " + a.headString.replace(/&quot;/g, '"') + "\n", "\n"), d = d.replace(a.headString.replace(/&quot;/g, '"') + "\n", ""), j = "undefined" != typeof a.iconClass && "" !== a.iconClass ? 'i[class*="' + a.iconClass + '"]' : "", k = "undefined" != typeof a.iconPrefix && "" !== a.iconPrefix ? ("" !== j ? "," : "") + 'i[class*="' + a.iconPrefix + '"]' : "", h = "undefined" != typeof a.requiredBy && "" !== a.requiredBy ? (j + k !== "" ? "," : "") + a.requiredBy : "", i = "undefined" != typeof a.notRequiredBy && "" !== a.notRequiredBy ? a.notRequiredBy : "", Ic(g).find(j + k + h).not(i).length && (d = d.replace("\n        &lt;link ", "\n        " + a.headString + "\n        &lt;link "))
        }), d
    }

    function ea(a, b, c) {
        var d = a;
        return rc.forEach(function (a, e) {
            var f = he.decode(b + c), g = Ic("<div>").html(f);
            Ic(g).find(a.requiredBy).length || (d = d.replace(a.styleRef, "\n").replace(/\n[ ]+\n/g, ""))
        }), d
    }

    function fa(a, b, c) {
        var d = c;
        return sc.forEach(function (a, e) {
            var f = he.decode(b + c), g = Ic("<div>").html(f);
            Ic(g).find(a.requiredBy).length || (d = d.replace(a.scriptRef, "\n").replace(/\n[ ]+\n/g, ""))
        }), d
    }

    function ga() {
        var a;
        if (Ic("#vpb").length)try {
            return a = JSON.parse(Ic("#vpb").html()).dynamicCSS
        } catch (b) {
            return []
        }
    }

    function ha() {
        var a;
        if (Ic("#vpa").length)try {
            return a = JSON.parse(Ic("#vpa").html()).dynamicScripts
        } catch (b) {
            return []
        }
    }

    function ia(a, b) {
        var c = a.replace(/(\r\n|\n|\r)/gm, ","), d = c.split(","), e = !1, f = a;
        return b = " " === b ? "" : b, -1 === a.indexOf("[optional-body-classes]") ? a : (d.forEach(function (c) {
            -1 !== c.indexOf("[optional-body-classes]") && ("" !== b ? -1 !== c.indexOf('class="') ? (f = String(a).replace("[optional-body-classes]", b), e = !0) : (f = String(a).replace("[optional-body-classes]", 'class="' + b + '"'), e = !0) : (f = String(a).replace(" [optional-body-classes]", ""), f = String(f).replace("[optional-body-classes]", ""), e = !0))
        }), e ? f : void 0)
    }

    function ja(a, b) {
        var c, d = a, e = "";
        return !_.isUndefined(b) && b.length > 0 && "vir" !== Ic('.vmv[vmw="' + b + '"]').attr("vmo") && (e = Ic('.vmv[vmw="' + b + '"]').attr("vmo"), c = '&#13;&#10;        &lt;link href="' + e + '" rel="stylesheet" type="text/css"&gt;&#13;&#10;', c += '        &lt;link href="css/font-' + cc(b) + '.css" rel="stylesheet" type="text/css"&gt;&#13;&#10;    &lt;/head&gt;\n', d = d.replace(/\t\&lt;\/head\&gt;/g, c), d = d.replace(/[\s]*\&lt;\/head\&gt;/g, c)), d
    }

    function ka(a, b) {
        var c = b, d = Nb(a);
        return "string" == typeof d && "" !== d ? (d = "&lt;meta name=&quot;description&quot; content=&quot;" + he.escape(he.escape(d)) + "&quot;/&gt;", c.replace("&lt;/title&gt;", "&lt;/title&gt;&#13;&#10;        " + d)) : b
    }

    function la(a, b) {
        var c = "&lt;script&gt; (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', '{{TRACKING-ID}}', 'auto'); ga('send', 'pageview'); &lt;/script&gt;",
            d = Mb(a);
        return "string" == typeof d && "" !== d ? (c = c.replace("{{TRACKING-ID}}", d), b.replace("&lt;/body&gt;", "    " + c + "\n    &lt;/body&gt;")) : b
    }

    function ma() {
        var a, b = "", c = Ic('<ul class="voj">'), d = Ic('<ul class="vrj">');
        if (Ic("#voi").length)try {
            return a = JSON.parse(Ic("#voi").html()).iconPacks, a.forEach(function (a) {
                c.append(Ic("<li><span>" + a.name + "</span></li>")), b = '<li class="vou"><span class="vot">' + a.name + '</span> <span class="vom">' + a.icons.length + ' icons </span><span class="voo"><a target="_blank" href="' + a.url + '">more info</a></span></li>', b += '<li class="vov">', a.icons.forEach(function (c) {
                    b += '<div class="vam" von="' + c.toLowerCase().replace(a.iconPrefix, "") + '"><i class="icon ' + a.iconClass + " " + c + '" icon-class="' + a.iconClass + " " + c + '" title="' + c + '"></i></div>'
                }), b += "</li>", d.append(b)
            }), Ic(c).find("li:first").addClass("vhr"), Ic(d).find("li.vou:first, li.vov:first").addClass("vhr"), Ic(".vce").html("").append(c).append(d), a
        } catch (e) {
            return JSON.parse('{"iconPacks":[]}')
        }
    }

    function na(a, b, c, d) {
        var e, f = "string" == typeof c && "" !== c ? c : "div",
            g = "undefined" != typeof d && "string" == typeof d && "" !== d ? d + " " : "";
        return e = Ic("<" + f + ' data-glyph="' + a + '" class="' + g + 'oi vnv" title="' + b + '"></' + f + ">")
    }

    function oa(a) {
        Ic(".vcd").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            minHeight: 620,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                Ic("#vgo").val(a), setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), ra(), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function pa(a) {
        Ic(".vce").addClass("vri"), Ic(".vcd ul.vrj div.vam").addClass("vih"), Ic(".vcd ul.vrj div.vam span.vor").remove(), Ic('.vcd ul.vrj div.vam[von*="' + a + '"]').each(function () {
            var b = Ic(this);
            b.append('<span class="vor">' + b.attr("von").replace(a, "<strong>" + a + "</strong>") + "</span>"), b.removeClass("vih")
        }), ra()
    }

    function qa() {
        Ic(".vce").removeClass("vri"), Ic(".vcd .vrj li div.vam.vih").removeClass("vih"), Ic(".vok").val(""), Ic(".vcd .vol").addClass("vih"), Ic(".vcd ul.vrj div.vam span.vor").remove(), ra()
    }

    function ra() {
        var a, b = !0;
        Ic(".vow").remove(), Ic(".vcd ul.vrj li.vov").each(function (c, d) {
            a = Ic(this).find("div.vam:not(.vih)").length, 0 === a ? Ic(this).addClass("vih").prev().addClass("vih") : (a > 70 ? Ic(".vce").addClass("vrk") : Ic(".vce").removeClass("vrk"), Ic(this).removeClass("vih").prev().removeClass("vih"), b = !1), Ic(".vcd .vrj li span.vom").eq(c).text(a + " icon" + (a > 1 ? "s" : "") + " " + ("" !== Ic(".vok").val() ? "found" : "in this pack") + " ")
        }), b && (Ic(".vce").append('<span class="vow">None Found</span>'), Ic(".vce").removeClass("vrk"))
    }

    function sa(a) {
        if (lc()) {
            variant.wp.editImageID = a;
            var b = {}, c = Ic("#veu img." + a);
            b.imageID = a, b.imageElement = c.get(0), b.imageSrc = c.attr("src"), b.imageAlt = c.attr("alt"), variant.wp.editImage(b)
        } else Ic(".vcl").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                Ic(".vdx").html(Ic("#vdp").html()), Ic(".vcp").attr("src", Ic("." + a).attr("src")), Ic(".vcm .veb").text(Ic("." + a).get(0).naturalWidth + "x" + Ic("." + a).get(0).naturalHeight + " pixels"), Ic(".vco").val(Ic("." + a).attr("src").replace("../img/", "img/")), Ic(".vck").val(a), Ic(".vcf").val(Ic("." + a).attr("alt")), Ic(".vdx .vdy").each(function () {
                    var a = Ic(this).find("img").get(0), b = Ic(this).find(".vec");
                    b.text(a.naturalWidth + "x" + a.naturalHeight)
                }), setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    va(), Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function ta(a) {
        var b, c, d, e = a.target.files;
        for (d = Ic(".vdx .vmh").first(), d.children().length > d.next(".vdx .vmh").children().length && (d = d.next(".vdx .vmh")), d.children().length > d.next(".vdx .vmh").children().length && (d = d.next(".vdx .vmh")), b = 0, c = e[b]; b < e.length; b++)Ic('#vdp [vis="' + c.name + '"]').length || (Ic('#vdp [vis="' + c.name + '"]').remove(), Ic(d).append('<div class="vdy"><img class="vcj" src="../img/' + c.name + '" vis="' + c.name + '" onerror="window.mr_variant.chooserImageError(this)"/><span class="vjn"></span><span class="vec"></span></div>')), d = Ic(d).is(".vdx .vmh:last") ? Ic(".vdx .vmh:first") : Ic(d).next(".vdx .vmh");
        va()
    }

    function ua() {
        if (!lc()) {
            var a = Ic("<div />").addClass("vmh"), b = Ic("<div />").addClass("vmh"), c = Ic("<div />").addClass("vmh"),
                d = "";
            if (Ic.localStorage(Ac + ".gallery.images")) Ic("#vdp").html(Ic.localStorage(Ac + ".gallery.images")), Ic("#vdp div").each(function () {
                Ic(this).find("img").length || Ic(this).remove(), Ic(this).hasClass("no-image") && Ic(this).remove()
            }); else {
                var e = Ic(".vdz").attr("vbv").split(",");
                e.forEach(function (e, f) {
                    d = '<div class="vdy"><img class="vcj" delay-src="../img/' + e + '" vis="' + e + '" onerror="window.mr_variant.defaultImageError(this)"/><span class="vec"></span></div>', f % 3 === 0 ? c.append(d) : f % 2 === 0 ? b.append(d) : a.append(d), Ic("#vdp").append(a).append(b).append(c)
                })
            }
        }
    }

    function va() {
        Ic.localStorage(Ac + ".gallery.images", Ic(".vdx").html()), Ic("#vdp").html(Ic(".vdx").html())
    }

    function wa(a) {
        var b = Ic(a).find("img");
        b.attr("src", ""), b.attr("src", "../img/" + b.attr("vis")), b.css("display", "inline"), Ic(a).removeClass("no-image"), Ic(a).find(".vjn, .vec").html("")
    }

    function xa(a, b, c, d) {
        var e, f = "undefined" != typeof c && "string" == typeof c && "" !== c ? c : "div",
            g = "undefined" != typeof d && "string" == typeof d && "" !== d ? d : "",
            h = b !== !1 ? Ic(".viu ." + b) : !1, i = h ? h.outerWidth() : null, j = "10px",
            k = h && "img" === h.prop("tagName").toLowerCase() ? !0 : !1,
            l = h && "absolute" === h.css("position") ? !0 : !1, m = na("image", "Edit Image", f, g),
            n = Ic('<div class="vnu"></div>'), o = Ic('<div class="vnw"></div>');
        if (Ic(m).unbind("click").bind("click", function (b) {
                return sa(Ic("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
            }).attr("vof", Ic("." + a).attr("vic")), 100 >= i && (j = "2px"), b !== !1) {
            if (k)return l ? !0 : (e = h.parent(), h.parent().is(".vnu") || (e = n, "" !== h.css("float") && e.css("float", h.css("float")), "" !== h.css("padding") ? e.css("padding", h.css("padding")) : ("" !== h.css("padding-left") && (e.css("padding-left", h.css("padding-left")), h.css("padding-left", "0px")), "" !== h.css("padding-right") && (e.css("padding-right", h.css("padding-right")), h.css("padding-right", "0px"))), "" !== h.css("margin-right") && (e.css("margin-right", h.css("margin-right")), h.css("margin-right", "0px")), "" !== h.css("margin-left") && (e.css("margin-left", h.css("margin-left")), h.css("margin-left", "0px")), h.hasClass("pull-right") && e.addClass("pull-right"), h.hasClass("pull-left") && e.addClass("pull-left"), e.css("max-width", i), h.wrap(e)), Ic(o).css("padding", j).css("width", h.innerWidth()).append(m), h.parent().append(o), !0);
            Ic(o).css("padding", j).css("width", i).append(m), h.append(o)
        }
        return b === !1 ? m : void 0
    }

    function ya(a, b) {
        if (lc())return void za(a, b);
        var c = "undefined" != typeof a.target ? a.target.files : a, d = "";
        b = b === !0 ? !0 : !1;
        for (var e = 0; e < c.length; e++) {
            var f = new FileReader, g = c[e];
            f.onload = function (a) {
                return function (c) {
                    try {
                        var e = new JSZip(c.target.result), f = '<span class="vjl">Imported the following:</span>',
                            g = '<span class="vjl">Excluded these:</span>', h = "<ul>", i = "<ul>";
                        Ic.each(e.files, function (a, b) {
                            var c, e, f, g;
                            b.name === Ac + ".navs" ? (c = b.asText().trim(), c = Ic('<div id="vrl" />').html(c), Ic(c).children().each(function () {
                                Ic('#vbn [via="' + Ic(this).attr("via") + '"]').length ? i += "<li>Nav - " + Ic(this).attr("vio") + " (already exists)</li>" : (Ia(Ic(this)), Ic("#vbn").append(Ic(this)), Ic.localStorage(Ac + ".vbo", Ic("#vbn").html()), h += "<li>Nav - " + Ic(this).attr("vio") + "</li>")
                            })) : b.name === Ac + ".footers" ? (e = b.asText().trim(), e = Ic('<div id="vjj" />').html(e), Ic(e).find("footer").each(function () {
                                Ic('#vbl [vhy="' + Ic(this).attr("vhy") + '"]').length ? i += "<li>Footer - " + Ic(this).attr("vie") + " (already exists)</li>" : (Q(Ic(this)), Ic("#vbl").append(Ic(this)), Ic.localStorage(Ac + ".custom-footers", Ic("#vbl").html()), h += "<li>Footer - " + Ic(this).attr("vie") + "</li>")
                            })) : (g = JSON.parse(b.asText()), g.templateName === Ac ? Ic('#vhl [viy="' + g.stateID + '"]').length ? i += "<li>Page - " + g.pageName + " (already exists)</li>" : (h += "<li>Page - " + g.pageName + "</li>", f = g.stateID, Ic("#vhl").append('<li class="viy" viy="' + g.stateID + '" vjh="' + g.pageName + '" page-title="' + g.pageTitle + '"></li>'), eb(g.pageName, g.stateID), Ic.localStorage(Ac + ".state.veu." + f, g.masterHtml), Ic.localStorage(Ac + ".state.vem." + f, g.layoutMap), Ic.localStorage(Ac + ".vhf." + f, g.colourScheme), Ic.localStorage(Ac + "vmp." + f, g.fontOption), Ic.localStorage(Ac + ".vkp." + f, g.bodyClasses), Ic.localStorage(Ac + ".state.page-meta-description-mrv." + f, g.metaDescription), Ic.localStorage(Ac + ".state.page-google-analytics-id-mrv." + f, g.googleAnalyticsID), Ic.localStorage(Ac + ".vhj." + f, g.pageTitle)) : i += "<li>Page - " + g.pageName + " (not designed for this template)</li>", d = {
                                id: g.stateID,
                                name: g.pageName
                            })
                        }), Ic.localStorage(Ac + ".vhk", Ic("#vhl").html()), h += "</ul>", i += "</ul>", "<ul></ul>" !== h && (h = f + h), "<ul></ul>" !== i && (i = g + i), b ? (Ic(".vhe").remove(), Db(d.id)) : Sb("Import", h + "<br />" + i), setTimeout(function () {
                            Ic(".vfw").find(".ves").length ? Ic(".vfw").removeClass("empty-vfw") : Ic(".vfw").addClass("empty-vfw")
                        }, 100)
                    } catch (c) {
                        Sb("Page Import Error", "Error reading " + a.name + " : <br /><br />" + c.message)
                    }
                }
            }(g), f.readAsArrayBuffer(g)
        }
        Ic(".vef").val("")
    }

    function za(a, b) {
        b = b === !0 ? !0 : !1, _.isUndefined(a.newpage) ? (a.templateName === Ac && (Ic(".vhe").remove(), stateID = a.stateID, Ic('#vhl li[viy="' + a.stateID + '"]').remove(), Ic("#vhl").append('<li class="viy" viy="' + a.stateID + '" vjh="' + a.pageName + '" page-title="' + a.pageTitle + '"></li>'), xb(wp_data.post_id), Ic.localStorage(Ac + ".state.veu." + stateID, a.masterHtml), Ic.localStorage(Ac + ".state.vem." + stateID, a.layoutMap), Ic.localStorage(Ac + ".vhf." + stateID, a.colourScheme), Ic.localStorage(Ac + "vmp." + stateID, a.fontOption), Ic.localStorage(Ac + ".vkp." + stateID, a.bodyClasses), Ic.localStorage(Ac + ".state.page-meta-description-mrv." + stateID, a.metaDescription), Ic.localStorage(Ac + ".state.page-google-analytics-id-mrv." + stateID, a.googleAnalyticsID)), stateToLoadNow = {
            id: a.stateID,
            name: a.pageName
        }, Ic.localStorage(Ac + ".vhk", Ic("#vhl").html()), Db(stateToLoadNow.id), i()) : d(a.newpage)
    }

    function Aa(a) {
        var b = Ic("." + a);
        return lc() ? void mr_variant.wp.editLink(b.attr("href"), b.text(), b.attr("target"), b.attr("vic")) : void Ic(".vcw").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                Ic(".vgp").addClass("vih");
                var b = Ic("." + a);
                b.hasClass("ven") ? Ic(".vcq").text("for Lightbox Image") : Da(), Ic(".vcu").val(Ic("." + a).attr("href").replace("../img/", "img/")), Ic(".vcv").val(a), Ic(".vcz").removeAttr("selected"), "undefined" != typeof Ic("." + a).attr("target") ? Ic(".vcy").val(Ic("." + a).attr("target")) : Ic(".vcy").val("_self"), setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Ba() {
        var a = Ic("." + Ic(".vcv").val()), b = Ic(".vcu").val(), c = Ic(".vcy").val();
        a.hasClass("ven") && (a.find("img[alt]").length && a.attr("data-title", a.find("img").attr("alt")), "img/" === b.substring(0, 4) && (b = b.replace("img/", "../img/"))), a.removeClass("inner-link").attr("href", b).attr("target", c), -1 !== b.indexOf("#") && a.addClass("inner-link"), Bb()
    }

    function Ca(a) {
        var b, c, d;
        Ic("[vik=" + Ic(a).parent().parent().attr("vbq") + "]").length ? (c = Ic("[vik=" + Ic(a).parent().parent().attr("vbq") + "]").attr("id"), d = Ic('.viu[href="#' + Ic("[vik=" + Ic(a).parent().parent().attr("vbq") + "]").attr("id") + '"], #veu [href="#' + Ic("[vik=" + Ic(a).parent().parent().attr("vbq") + "]").attr("id") + '"]'), d.attr("href", "#" + cc(Ic(a).text())), Ja(), Ic("[vik=" + Ic(a).parent().parent().attr("vbq") + "]").attr("id", cc(Ic(a).text())).attr("vij", Ic(a).text())) : (b = Ic("." + Ic(a).parent().parent().attr("vbq")), b.before('<a id="' + cc(Ic(a).text()) + '" class="in-page-link" vij="' + Ic(a).text() + '" vik="' + Ic(a).parent().parent().attr("vbq") + '"></a>'))
    }

    function Da() {
        var a;
        Ic(".vgp").addClass("vih");
        var b = Ic(Bc).find(".in-page-link");
        b.length && (a = '<option value="">Select an in-page navigation link</option>', b.each(function () {
            var b = Ic(this);
            a += '<option value="#' + b.attr("id") + '">' + b.attr("vij") + "</option>"
        }), Ic(".veh").html(a), Ic(".vgp").removeClass("vih"))
    }

    function Ea() {
        _.isObject(nc) && nc.destroy(), Kc = [], Ic('.viu [contenteditable="true"]').filter(oc).not(pc).each(function (a, b) {
            Kc.push(Ic(this).get(0))
        }), nc = new MediumEditor(Kc, {
            paste: {
                cleanPastedHTML: !0,
                unwrapTags: ["span", "a", "div", "p", "h1", "h2", "h3", "h4", "h5", "h6", "address", "form", "iframe", "blockquote", "figure", "section", "header", "footer"]
            },
            toolbar: {
                allowMultiParagraphSelection: !0,
                buttons: ["bold", "italic", "underline", "strikethrough", "anchor"]
            }
        }), nc.subscribe("showToolbar", function (a, b) {
            var c = Ic(b);
            c.closest(".voh").addClass("medium-editor-active-mrv")
        }), nc.subscribe("hideToolbar", function (a, b) {
            var c = Ic(b);
            c.closest(".voh").removeClass("medium-editor-active-mrv")
        })
    }

    function Fa(a) {
        Ic(".vfc").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                Ic(".vga").val(""), setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Ga() {
        var a, b = (new Date).getTime(), c = "via-" + b, d = Ic(".vgb").val(), e = Ra(), f = Oa();
        Ic(".vfj").closest(".vho").find(".vly").text(d), Ic(".vgb").val(""), e.removeClass("vir").addClass("vhz").addClass(c).attr("via", c).attr("vio", d), f.removeClass("vir").addClass("vhz").addClass(c).attr("via", c).attr("vio", d), Ic("#vbn").append(e.clone()), a = Ic("#vbn").html(), Ic.localStorage(Ac + ".vbo", a), Ia(Ic("." + c))
    }

    function Ha() {
        if (lc()) {
            var a = interface.dropdown.render(wp_data.header_layouts, wp_data.header_layouts_default);
            Ic(".vfj").append(a)
        } else Ic("#vbn").append(Ic.localStorage(Ac + ".vbo")), Ic("#vbn").children().each(function () {
            Ia(Ic(this))
        })
    }

    function Ia(a) {
        Ic(".vfj").append('<li class="vfi" nav-id="' + Ic(a).attr("via") + '" vit="vhz"><span>' + Ic(a).attr("vio") + '</span><span class="vby oi" data-glyph="x"></span></li>')
    }

    function Ja() {
        var a = Oa(), b = a.attr("via"), c = Ic("#veu ." + b);
        c.attr("class", a.attr("class")), Ic("#vbn ." + b).html(c.html()).attr("class", a.attr("class")), Ic("#vbn .vjb").removeClass("vjb"), Ic.localStorage(Ac + ".vbo", Ic("#vbn").html())
    }

    function Ka(a, b) {
        var c, d, e = (Na(), Oa()), f = Qa(), g = Ra(), h = b === !0 ? !0 : !1;
        g.remove(), e.remove(), Ic("#vbn [via=" + a + "]").length ? (c = hc(Ic("#vbn [via=" + a + "]").get(0), !0), f.prepend(c), Ma(Ic("#vbn [via=" + a + "]").attr("nav-id")), Ta(Sa(a))) : Ic("section.vev#" + a).length ? (c = Ic("#" + a).clone(), Ic(c).find("script.options").remove(), f.prepend(c.html()), g = Ra(), g.addClass("vir").attr("nav-id", a), g.find(".modal-container, .notification-container").length && (d = (new Date).getTime(), g.find(".modal-container, .notification-container").attr("vqj", a + "-" + d).addClass("vir")), pb(g), Ma(a), Ta(Sa(a))) : Ta(defaults.ui.sidebar.navOptionsListText), h && (Bb(), Tc())
    }

    function La() {
        Ra().remove(), Oa().remove(), Qb(), Rb(), Bb(), Tc()
    }

    function Ma(a) {
        var b = Qa(), c = Na();
        arguments.length || (a = Ra().attr("nav-id")), Ic(".vmm").closest(".vkq").remove();
        try {
            var d = JSON.parse(Ic("#" + a + " script.options").html());
            Ic("<div>").addClass("vkq").append('<div class="vlq"><span>Nav Options</span></div>').append('<div class="vmd"><ul class="vmm"></ul></div>').appendTo(".vmb");
            if (Ic.isArray(d.options)) Ic(d.options).each(function (a, d) {
                var e = "undefined" != typeof d.target ? d.target : "";
                cb(d, ".vmm", c.selector + " nav " + e + ", " + b.selector + " nav " + e, !0)
            }); else {
                var e = "undefined" != typeof d.options.target ? d.options.target : "";
                cb(d.options, ".vmm", c.selector + " nav  " + e + ", " + b.selector + " nav  " + e, !0)
            }
        } catch (f) {
            return
        }
    }

    function Na() {
        return Ic(Ec.selector)
    }

    function Oa() {
        return Na().children().not("a").first()
    }

    function Pa() {
        return Oa().attr("vic")
    }

    function Qa() {
        return Ic(Dc.selector)
    }

    function Ra() {
        return Qa().children().not("a").first()
    }

    function Sa(a) {
        return Ic('[via="' + a + '"]').attr("vio") || Ic("#vgg .vev#" + a).attr("vbr")
    }

    function Ta(a) {
        Ic(".vfj").siblings(".vly").text(a)
    }

    function Ua() {
        try {
            return JSON.parse(Ic("#vnd").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function Va() {
        try {
            var a = JSON.parse(Ic("#vkk").html());
            Ic("<div>").addClass("vkq").append('<div class="vlq"><span>Page Options</span></div>').append('<div class="vmd"><ul class="vkx"></ul></div>').appendTo(".vmb");
            Ic.isArray(a.options) ? Ic(a.options).each(function () {
                cb(this, ".vkx", "body, #vkk", !0)
            }) : cb(a.options, ".vkx", "body, #vkk", !0)
        } catch (b) {
            return
        }
    }

    function Wa() {
        try {
            return JSON.parse(Ic("#voy").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function Xa(a, b) {
        var c, d = Ic("." + a), e = "";
        tc.options.forEach(function (a) {
            c = a.disposableSelector || a.selector, "undefined" != typeof a.closest && (d = Ic("." + Ic(d).closest(a.closest).attr("vic"))), "undefined" != typeof a.menu && (e = "." + a.menu), Ic(d).is(c) && (cb(a, ".vnc" + e, d.selector, !0), "undefined" != typeof b && b === !0 && Ic(".vnc" + e).removeClass("vih"))
        })
    }

    function Ya(a) {
        var b = Ic("." + a);
        Ic("ul.vnc li").remove(), Ic(uc.options).each(function () {
            b.is(this.selector) && $a(b, this)
        })
    }

    function Za(a) {
        a = "undefined" != typeof a ? a : "", Ic("#vkk").removeAttr("class").addClass(a), Ic("body").addClass(a), Ic(".vkx .vky").each(function () {
            Ic(this).find(".vks").removeClass("vkr"), -1 !== a.indexOf(Ic(this).attr("optionalclass")) ? Ic(this).find(".choice-button-on").addClass("vkr") : (Ic(this).find(".choice-button-off").addClass("vkr"), Ic("body").removeClass(Ic(this).attr("optionalclass")))
        }), Ic(".vkx .vkz").each(function () {
            Ic(this).find(".vkt").removeClass("vku"), -1 !== a.indexOf(Ic(this).attr("optionalclass")) ? Ic(this).find(".vkt").addClass("vku") : Ic("body").removeClass(Ic(this).attr("optionalclass"))
        }), Ic(".vkx .vkv").removeClass("vkw"), Ic('.vkx .vkv[optionalclass=" "]').addClass("vkw"), Ic(".vkx .vkv").each(function () {
            -1 !== a.indexOf(Ic(this).attr("optionalclass")) && " " !== Ic(this).attr("optionalclass") ? (Ic(this).addClass("vkw"), Ic('.vkx .vkv[optionalclass=" "]').removeClass("vkw")) : Ic("body").removeClass(Ic(this).attr("optionalclass"))
        })
    }

    function $a(a, b, c) {
        var d, e, f, g, h = b || a.data("vip");
        d = Ic(a).find(h.selector + "[" + h.attribute + "]").length ? Ic("#veu " + Ic(a).attr("vic")).find(h.selector + "[" + h.attribute + "]") : Ic("#veu ." + Ic(a).attr("vic")), f = "undefined" != typeof h.modalInputIcon ? h.modalInputIcon : "pencil", g = "undefined" != typeof h.refresh ? h.refresh : "false", e = d.attr(h.attribute), Ic(".vbk").text(h.modalTitle), Ic(".vbh").text(h.modalIntro), Ic(".vbf").text(h.modalInputLabel), Ic(".vkh").attr("data-glyph", f), Ic(".vbg").val(e), Ic(".vbe").val(Ic(d).attr("vic")).attr("vnn", g), Ic(".vbc").val(h.attribute), Ic(".vbk").text(h.modalTitle), "string" != typeof c && c === !0 ? _a() : Ic(a).is("section, header") ? Ic(".vgk").text(h.buttonText).attr("data-glyph", f).removeClass("vih") : Ic(".vdh").text(h.buttonText).attr("data-glyph", f).removeClass("vih")
    }

    function _a() {
        Ic(".vbi").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function ab() {
        var a = Ic("#veu ." + Ic(".vbe").val()), b = Ic(".vbg").val(), c = Ic(".vbc").val();
        Ic(a).closest("[data-vip]").data("vip");
        -1 !== b.indexOf("<") && (!Ic(b).is("iframe") || "src" !== c && "no-src" !== c && "data-src" !== c || (b = Ic(b).attr("src"), "//" === b.substring(0, 2) && (b = "https:" + b), -1 !== b.indexOf("youtube.com") && (b += "?showinfo=0&rel=0&modestbranding=1", a.hasClass("youtube-bg-iframe") && (b += "&enablejsapi=1&autoplay=1&controls=0&loop=1&iv_load_policy=3")), -1 !== b.indexOf("vimeo.com") && (b += "?badge=0&title=0&byline=0"))), Ic(a).is("iframe") && "no-src" === c ? (Ic(a).attr(c, b), Ic(".viu ." + Ic(".vbe").val()).attr("src", b)) : (Ic(a).attr(c, b), Ic(".viu ." + Ic(".vbe").val()).attr(c, b)), Bb(), "true" === Ic(".vbe").attr("vnn") && Tc(a.attr("vic")), Ic(".vbe").removeAttr("refresh")
    }

    function bb(a, b, c) {
        var d, e = a.modalInputIcon || "pencil";
        return d = Ic('<div data-glyph="' + e + '" class="oi vnv" title="' + a.buttonText + '"></div>'), d.addClass("vno"), d.data("vnq", a), d.attr("vnr", c), b === !1 ? d : void Ic(b).append(d)
    }

    function cb(a, b, c, d) {
        var e, f = "undefined" != typeof d ? d : !1, g = "on" === a.initial ? "on" : "off", h = Ic("<li>"),
            i = Ic("<div>"), j = "";
        return c = "undefined" != typeof c ? c : !1, e = "undefined" != typeof a.refresh && "true" === a.refresh ? "refresh" : "", h.addClass("vmk"), a.title && h.append("<span>" + a.title + "</span>"), "choice" === a.type && ("on" === g && f === !0 && Ic(c).addClass(a["class"]), i.addClass("vky").attr("optionalclass", a["class"]).attr("classtarget", c), i.append('<div class="vks choice-button-on ' + e + " " + ("on" === g && f === !0 ? "vkr" : "") + (Ic(c).hasClass(a["class"]) && f !== !0 ? "vkr" : "") + '">' + a.onText + "</div>"), i.append('<div class="vks choice-button-off ' + e + " " + ("off" === g && f === !0 ? "vkr" : "") + (Ic(c).hasClass(a["class"]) || f === !0 ? "" : "vkr") + '">' + a.offText + "</div>"), h.append(i)), "toggle" === a.type && ("on" === g && f === !0 && Ic(c).addClass(a["class"]), j = "on" === g && f === !0 ? " vku" : "", j = "auto" === a.initial && Ic(c).hasClass(a["class"]) ? " vku" : j, i.addClass("vkz").attr("optionalclass", a["class"]).attr("classtarget", c), i.append('<span class="oi" data-glyph="' + a.icon + '"></span><span>' + a.text + "</span>"), i.append('<div class="vkt' + j + " " + e + '"><div class="vmi"></div></div>'), h.append(i)), "multi" === a.type && (i.addClass("vmj").attr("classtarget", c), Ic.each(a.classes, function (b, c) {
            i.append('<div class="vkv ' + e + " " + (a.initial === b + 1 && f === !0 ? "vkw" : "") + '" optionalclass="' + ("" !== c["class"] ? c["class"] : " ") + '">' + c.text + "</div>")
        }), h.append(i)), "undefined" != typeof a.submenu && (Ic(b).find('li.vnk[submenu-name="' + a.submenu + '"]').length || Ic(b).append('<li class="vnk" submenu-name="' + a.submenu + '"><span class="vnl">' + a.submenu + "</span><ul></ul></li>"), b = Ic(b).find('li.vnk[submenu-name="' + a.submenu + '"] ul')), b === !1 ? h : void Ic(b).append(h)
    }

    function db(a) {
        "" !== a && (lc() ? (mr_variant.wp.newPage(a), mr_variant.wp.newPageName = a) : Cb(!0), Ic.modal.close())
    }

    function eb(a, b, c) {
        var d;
        lc() ? (d = Ic('<div class="ves" data-post-id="' + b + '"><span class="vfx">' + a + "</span></div>"), d.data(c), Ic(".vfw").append(d)) : (Ic(".vfw").prepend('<div class="ves" vjh="' + a + '" state-id="' + b + '"><span class="oi vdj" data-glyph="data-transfer-download"></span><span class="vfx">' + a + '</span><span class="vbz oi" data-glyph="x"></span><span class="vpy oi" data-glyph="pencil"></span></div>'), isSafari && Ic(".vdj").remove()), Ic(".vfw").removeClass("empty-vfw")
    }

    function fb(a) {
        "undefined" != typeof a && (Ic('.ves[state-id="' + a + '"]').remove(), setTimeout(function () {
            Ic(".vfw").find(".ves").length ? Ic(".vfw").removeClass("empty-vfw") : Ic(".vfw").addClass("empty-vfw")
        }, 50))
    }

    function gb(a) {
        var b = hb("Page");
        a && Eb(), Ic(".vhe").addClass("vih"), Cb(b)
    }

    function hb(a) {
        var b, c = [];
        return Ic("#vhl li").each(function () {
            c.push(Ic(this).attr("vjh"))
        }), b = a.split(" ").length > 1 ? parseInt(a.split(" ").pop()) : 0, _.contains(c, a) ? hb(a.split(" ")[0] + " " + (b + 1)) : a
    }

    function ib(a) {
        return a === Ic.localStorage(Ac + ".vhh")
    }

    function jb() {
        Zb(), Eb(), Ic(".vhe").removeClass("vih"), Ic(".vet").addClass("vih"), Ic.localStorage(Ac + ".vhh", ""), Ic.localStorage(Ac + ".vhg", "")
    }

    function kb() {
        Ic(".vqm").removeClass("vhr"), Ic(".viu, .viu .vrh").removeClass("vrh")
    }

    function lb() {
        try {
            return JSON.parse(Ic("#variant-section-vgu").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function mb(a) {
        var b, c = Ic(".viu ." + a), d = (Ic("#veu ." + a), c.attr("vic")), e = Ic(".vqm"), f = c.position(),
            g = c.offset(), h = Na(),
            i = Math.max(h.children().not(Qc).first().outerHeight(!0), h.find(".nav-bar:nth-of-type(1)").outerHeight(!0), Ic(".viu .nav-container:nth-of-type(1)").outerHeight(!0)),
            j = h.children().not(Qc).first().css("position"), k = Ic(".viu nav .nav-bar").css("position"),
            l = Ic(".viu"), m = c.width(),
            n = (Ic(".vqm").width(), Ic(window).width(), Ic(window).height(), Math.round(g.left + m));
        Ic.find('.section-vgw[vnt="' + d + '"]').length || (Ic(".viu .section-vgw").remove(), b = Ic("<div />").addClass("section-vgw").append('<span class="vnm oi" data-glyph="cog"></span>'), b.attr("vnt", d), c.is(":first-child") || "absolute" !== j && "fixed" !== j && "fixed" !== k && "absolute" !== k || (i = 0), b.css("top", Math.round(f.top + 10 + i)), b.appendTo(l), e.attr("vnt", d), b.css("left", n - b.width()))
    }

    function nb(a) {
        var b, c, d = Ic(".viu ." + a), e = Ic("#veu ." + a), f = d.attr("vbq"), g = Ic(".vhv .vqm"),
            h = g.find(".vqp"), i = g.find(".vqn span"), j = {
                title: "Visible On",
                type: "multi",
                selector: "section, header, footer",
                explainer: "Select the device sizes which this section should appear on.",
                required: !0,
                options: [{
                    html: '<span class="oi" data-glyph="phone"></span>',
                    onClass: "",
                    onTitle: "Shown on mobile",
                    offClass: "hidden-xs",
                    offTitle: "Hidden on mobile"
                }, {
                    html: '<span class="oi" data-glyph="tablet"></span>',
                    onClass: "",
                    onTitle: "Shown on tablet",
                    offClass: "hidden-sm",
                    offTitle: "Hidden on tablet"
                }, {
                    html: '<span class="oi" data-glyph="monitor"></span>',
                    onClass: "",
                    onTitle: "Shown on desktop",
                    offClass: "hidden-md hidden-lg",
                    offTitle: "Hidden on desktop"
                }],
                targetID: a,
                targetSelector: "." + a,
                target: d,
                masterTarget: Ic("#veu ." + a)
            };
        h.empty(), d.is("section") && (b = Ic('.vjc .vem .vaa[vbq="' + f + '"] div.vab span').text()), d.is("footer") && (b = d.is("[vhy]") ? Ic('.vdm li.vdl[vid="' + d.attr("vhy") + '"] span').text() : Ic('.vdm li.vdl[vid="' + d.attr("footer-id") + '"] ').text()), i.text(b), h.append(Lc.choice.render(j)), c = d.find("img[vic]").not(".voh img, .slider li img"), c.length && h.append(Lc.images.render(c)), Ic(vc.options).each(function (a, b) {
            var c, f, i, j, k, l;
            if (e.is(b.selector)) c = d; else {
                if (!e.find(b.selector).length)return;
                c = e.find(b.selector)
            }
            i = c.attr("vic"), j = "." + i, k = Ic(".viu " + j + ", #veu " + j), l = Ic("#veu " + j), "undefined" != typeof b.group ? (f = Ic("<div>").addClass("vqr"), f.append(Lc.controlTitle.render(b.title)), Ic(b.group).each(function (a, b) {
                b.targetID = i, b.targetSelector = j, b.target = k, b.masterTarget = l, f.append(Lc[b.type].render(b, c, g))
            }), h.append(f)) : (b.targetID = i, b.targetSelector = j, b.target = k, b.masterTarget = l, h.append(Lc[b.type].render(b, c, g)))
        }), g.find('input[type="text"]').each(function () {
            var a = g.data();
            a.focussedElementAttribute === Ic(this).data("attribute") && a.focussedElementValue === Ic(this).val() && (Ic(this).focus(), Ic(this).selectRange(a.cursorPosition))
        })
    }

    function ob(a) {
        var b = a.find(".vab span").text(), c = a.attr("vbq"), d = Ic('.viu [vbq="' + c + '"]'), e = d.attr("vic"),
            f = Ic('.vqm.vhr[vnt="' + e + '"] .vqn span');
        f.length && f.text(b)
    }

    function pb(a) {
        var b = (new Date).getTime(), c = Ic(a), d = "vjs-" + b;
        return c.is("section, nav, header, footer, .divider-background") && (c.is("[vic]") || (c.attr("vic", d), c.addClass(d))), c.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, section, header, figure, video, iframe, input, button, textarea, blockquote, figcaption, tbody, tr, td, th, form, label, address").not(".vog, [vic], .wysiwyg *").each(function (a) {
            var b = d + "-" + a, c = Ic(this);
            c.attr("vic", b), c.addClass(b), c.is("nav, nav li, .slides > li, .slides .owl-item > li, .slides .flickity-slider > li, ul, div, i, img, section, header, figure, .veo, video, iframe, input, textarea, form, tbody, tr, td, .vjx, .variant-shortcode, .variant-shortcode *") || (c.addClass("vir"), c.attr("contenteditable", "true")), c.is("span, a, strong, em, i") ? 0 === c.parent().text().replace(Ic(this).text(), "").replace(/\s/g, "").length && c.parent().removeAttr("contenteditable") : c.parent().removeAttr("contenteditable")
        }), b
    }

    function qb() {
        var a = Ic(".vgm"), b = "", c = Ic(".vgi"), d = "";
        thumbnailPath = "img/sections/", lc() && (thumbnailPath = wp_data.plugin_url + "img/sections/"), Ic("#vgg .vim").each(function (a) {
            var c, e = Ic(this), f = e.attr("vbp").split(","), g = "";
            f.forEach(function (a) {
                -1 === d.indexOf(a) && (d += '<div class="vgh" vbp="' + a + '">' + a + "</div>")
            }), c = e.attr("icons"), "undefined" != typeof c && c !== !1 && (c = e.attr("icons").split(","), c.forEach(function (a) {
                g += '<img class="vgj" src="img/' + a + '.png" />'
            })), b += '<div class="vgl" vbp="' + Ic(this).attr("vbp") + '" vgv="' + Ic(this).attr("id") + '"><img delay-src="' + thumbnailPath + Ic(this).attr("id") + '.jpg"/>' + g + '<span class="vjl">' + Ic(this).attr("vbr") + "</span></div>"
        }), a.html(b), c.append(d)
    }

    function rb(a) {
        var b, c, d, e, f = Ic("#" + a).find("section, header, footer").clone(), g = pb(Ic(f)), h = a + "-" + g;
        d = Ic(f).attr("vbq", h).addClass(h), Fc.selector != Bc.selector ? d.appendTo(Bc) : (b = Ic(Bc).find("footer"), b.length ? d.insertBefore(b) : d.appendTo(Bc)), Ic(".vem").append('<div class="vaa data-vfs="' + a + '" vbq="' + a + "-" + g + '"><div class="vab"><span class="vir" contenteditable="true">' + Ic("#" + a).attr("vbr") + '</span></div><i class="vca variant-icon variant-close-circle" vbq="' + a + "-" + g + '"></i></div>'), vb(), Bb(), Tc(a + "-" + g), Qb(), c = Ic(".vem"), e = c[0].scrollHeight, c.animate({scrollTop: e}, 480)
    }

    function sb() {
        var a = Ic(Cc.selector), b = Ic(Bc.selector), c = a.find("footer"), d = b.find("footer");
        Ic(".vem .vaa").each(function () {
            var e = Ic(this).attr("vbq"), f = b.find("." + e), g = f.clone(), h = b.find("[vik=" + e + "]"),
                i = h.clone();
            h.remove(), d.length ? i.insertBefore(d) : i.appendTo(b), f.remove(), d.length ? g.insertBefore(d) : g.appendTo(b), f = a.find("." + e), g = f.clone(), h = a.find("[vik=" + e + "]"), i = h.clone(), h.remove(), c.length ? i.insertBefore(c) : i.appendTo(a), f.remove(), c.length ? g.insertBefore(c) : g.appendTo(a)
        }), Bb(), Tc()
    }

    function tb() {
        Ic(".global-vfr").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function ub() {
        Ic(".vjq").removeClass("vgq"), Ic(".vad").toggleClass("vgq")
    }

    function vb() {
        Ic(".vem").sortable({
            items: "> .vaa",
            revert: !1,
            cursor: "move",
            opacity: .7,
            delay: 150,
            cancel: "[contenteditable]",
            update: function () {
                sb()
            }
        })
    }

    function wb() {
        Ic(".vkm").addClass("vjz"), Ic(".vlh").trigger("click"), Ic(".vlv").hasClass("vmf") || Ic(".vac").trigger("click")
    }

    function xb(a) {
        Ic(".ves.vqb").removeClass("vqb"), lc() ? Ic('.vfw [data-post-id="' + a + '"]').addClass("vqb") : Ic('.ves[state-id="' + a + '"]').addClass("vqb")
    }

    function yb(a) {
        var b, c, d, e, f = Ic(".viu ul.slides." + a), g = Ic(f).parents(".slider"),
            h = f.parents(".slider[data-items]").length ? f.parents(".slider[data-items]").attr("data-items") : 0,
            i = h > 1 ? f.find(".owl-item.active").length : 0, j = Na(), k = j.children().first().css("position"),
            l = j.children().first().find(".nav-bar").css("position"),
            m = f.find(" > li, .owl-item > li, .flickity-slider > li").not(".clone").length,
            n = g.length && i > 1 && m > i ? !0 : !1, o = 0;
        "absolute" !== k && "fixed" !== k && "absolute" !== l && "fixed" !== l || !f.closest("section").is(".viu section:nth-of-type(1), .viu header:nth-of-type(1)") || (o = Math.max(j.children().first().outerHeight(!0), Ic(".viu .nav-container").outerHeight(!0), j.children().first().find(".nav-bar").outerHeight(!0))), f.find(" > li, .owl-item > li, .flickity-slider > li").not(".clone").each(function (a) {
            var b, c, d = Ic(this), e = "", g = "", h = "", i = "", j = "";
            b = Ic('<div class="vnw"></div>'), b.css("top", o + 10), f.find("img").length || b.addClass("vny"), f.find("li > p, li > span").length && b.addClass("vny"), d.find(".vnv").length || (m > 1 && (e = na("arrow-thick-left", "Show Previous Slide"), Ic(e).unbind("click").bind("click", function (a) {
                try {
                    f.parent().flexslider("prev")
                } catch (b) {
                }
                try {
                    f.closest(".slider").flexslider("prev")
                } catch (b) {
                }
                try {
                    f.trigger("prev.owl.carousel")
                } catch (b) {
                }
                try {
                    f.flickity("previous")
                } catch (b) {
                }
                return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), g = na("arrow-thick-right", "Show next Slide"), Ic(g).unbind("click").bind("click", function (a) {
                try {
                    f.parent().flexslider("next")
                } catch (b) {
                }
                try {
                    f.closest(".slider").flexslider("next")
                } catch (b) {
                }
                try {
                    f.trigger("next.owl.carousel")
                } catch (b) {
                }
                try {
                    f.flickity("next")
                } catch (b) {
                }
                return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), h = na("minus", "Delete Slide"), Ic(h).unbind("click").bind("click", function (a) {
                return D(d.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            })), c = na("plus", "Clone Slide"), Ic(c).unbind("click").bind("click", function (a) {
                return C(d.attr("vic")), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), d.find(" > div.background-image-holder img").length && (i = xa(d.find(" > div.background-image-holder img").attr("vic"), !1)), 1 === d.find("img").length && (i = xa(d.find("img").attr("vic"), !1)), 1 === d.find("video").length && (j = _b(d.find("video").attr("vic"), !1)), b.append(e).append(h).append(i).append(j).append(c).append(g), d.prepend(b))
        }), n && (c = Ic('<div class="vob vnw"></div>'), e = na("arrow-thick-left", "Show Previous Slide"), Ic(e).unbind("click").bind("click", function (a) {
            try {
                f.trigger("prev.owl.carousel")
            } catch (b) {
            }
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }).appendTo(c), b = Ic('<div class="voc vnw"></div>'), d = na("arrow-thick-right", "Show next Slide"), Ic(d).unbind("click").bind("click", function (a) {
            try {
                f.trigger("next.owl.carousel")
            } catch (b) {
            }
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }).appendTo(b), g.prepend(b).prepend(c))
    }

    function zb() {
        lc() ? Ic(wp_data.all_pages).each(function (a, b) {
            eb(b.title, b.ID, b)
        }) : (Ic("#vhl").html(Ic.localStorage(Ac + ".vhk")), Ic("#vhl li").each(function () {
            eb(Ic(this).attr("vjh"), Ic(this).attr("viy"))
        }))
    }

    function Ab(a) {
        Ic(".vge").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                "undefined" != typeof a ? "vpz" === a ? Ic(".vgf").attr("vpz", "true") : "vhd" === a && Ic(".vgf").attr("vhd", "true") : Ic(".vgf").val(""), setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb(), Ic(".vgf").val(""), Ic(".vgf").removeAttr("viy").removeAttr("vqa")
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Bb() {
        pageLoaded || gb();
        var a = Pb(), b = Ic(".vei").val(), c = Ic(".vpp").val(), d = Ic(".vpq").val();
        Ic(".vhe").addClass("vih"), Ja(), N(), Ic.localStorage(Ac + ".vhh") ? (Ic.localStorage(Ac + ".state.veu." + a, Ic("#veu").html()), Ic.localStorage(Ac + ".state.vem." + a, Ic(".vem").html()), Ic.localStorage(Ac + ".vhj." + a, b), Ic.localStorage(Ac + ".state.page-meta-description-mrv." + a, c), Ic.localStorage(Ac + ".state.page-google-analytics-id-mrv." + a, d), Ic.localStorage(Ac + ".vhf." + a, Ic(".vay").attr("vhx")), Ic.localStorage(Ac + "vmp." + a, Ic(".vms").attr("vmr")), Ic.localStorage(Ac + ".vkp." + a, "undefined" != typeof Ic("#vkk").attr("class") ? Ic("#vkk").attr("class") : " ")) : (Ic.localStorage(Ac + ".state.veu", Ic("#veu").html()), Ic.localStorage(Ac + ".state.vem", Ic(".vem").html()), Ic.localStorage(Ac + ".vhj", b), Ic.localStorage(Ac + ".state.page-meta-description-mrv", c), Ic.localStorage(Ac + ".state.page-google-analytics-id-mrv", d), Ic.localStorage(Ac + ".vhf", Ic(".vay").attr("vhx")), Ic.localStorage(Ac + "vmp", Ic(".vms").attr("vmr")), Ic.localStorage(Ac + ".vkp", "undefined" != typeof Ic("#vkk").attr("class") ? Ic("#vkk").attr("class") : " ")), lc() && h()
    }

    function Cb(a) {
        var b, c, d = Ic(".vgf"), e = "string" == typeof a ? a : d.val();
        if ("true" === d.attr("vhd") && (Eb(), setTimeout(function () {
                var a = Ic(".vge .vjl");
                a.text(a.attr("vpx")).removeAttr("vpx");
                var b = Ic(".vge .vew p:first");
                b.text(b.attr("vpx")).removeAttr("vpx")
            }, 500), wb()), "true" === d.attr("vpz"))return b = d.attr("viy"), c = d.attr("vqa"), setTimeout(function () {
            var a = Ic(".vge .vjl");
            a.text(a.attr("vpx")).removeAttr("vpx");
            var b = Ic(".vge .vew p:first");
            b.text(b.attr("vpx")).removeAttr("vpx")
        }, 500), Ic('.ves[state-id="' + b + '"]').attr("vjh", e).find("span.vfx").text(e), d.removeAttr("viy"), Ub("Renamed page: " + c + " to <strong>" + e + "</strong>", "check", "success"), Ic('#vhl [viy="' + b + '"]').attr("vjh", e), Pb() === b && (Ic.localStorage(Ac + ".vhg", e), Ic(".vcr").text(e)), void Ic.localStorage(Ac + ".vhk", Ic("#vhl").html());
        var f = (new Date).getTime(), g = "undefined" != typeof Ic(".vei").val() ? Ic(".vei").val() : defaultPageTitle,
            h = "" !== Ic(".vpp").val() ? Ic(".vpp").val() : "", i = "" !== Ic(".vpq").val() ? Ic(".vpq").val() : "";
        b = "viy-" + f, Ic("#vhl").append('<li class="viy" viy="' + b + '" vjh="' + e + '" page-title="' + Ic(".vei").val() + '"></li>'), eb(e, b), Ic('#vhl [viy="' + Pb() + '"]').attr("page-title", Ic(".vei").val()), Ic.localStorage(Ac + ".vhk", Ic("#vhl").html()), Ic.localStorage(Ac + ".state.veu." + b, Ic("#veu").html()), Ic.localStorage(Ac + ".state.vem." + b, Ic(".vem").html()), Ic.localStorage(Ac + ".vhj." + b, g), Ic.localStorage(Ac + ".state.page-meta-description-mrv." + b, h), Ic.localStorage(Ac + ".state.page-google-analytics-id-mrv." + b, i), Ic.localStorage(Ac + ".vhf." + b, Ic(".vay").attr("vhx")), Ic.localStorage(Ac + "vmp." + b, Ic(".vms").attr("vmr")), Ic.localStorage(Ac + ".vkp." + b, Ic("#vkk").attr("class")), Ic.localStorage(Ac + ".vhh", b), Ic.localStorage(Ac + ".vhg", e), Ic(".vcr").text(e).removeClass("vih"), xb(b), Yb(), Ub("Created page: <strong>" + e + "</strong>", "check", "success")
    }

    function Db(b) {
        Ic(".vei").removeClass("vlx"), Ic(".vhe").addClass("vih");
        var c, d, e, f, g, h, i, j, k, l, m = _.isUndefined(b) ? Pb() : b, n = Ib(m);
        g = ".state.veu." + m, f = ".state.vem." + m, h = ".vhf." + m, i = "vmp." + m, j = ".vkp." + m, k = ".state.page-meta-description-mrv." + m, l = ".state.page-google-analytics-id-mrv." + m, c = Hb(m), "" === c && (Ic(".vei").val("Edit Title Tag"), document.title = "Variant HTML Builder by Medium Rare"), Ic.localStorage(Ac + g) && (Ic(".vcr").text(n).removeClass("vih"), Ic(".vei").val(c), document.title = c || defaultPageTitle, Ic(".vpp").val(Ic.localStorage(Ac + k)), Ic(".vpq").val(Ic.localStorage(Ac + l)), Ic("#veu").html(Ic.localStorage(Ac + g)), Ic(".vem").html(Ic.localStorage(Ac + f) || ""), d = _.isUndefined(Ra().attr("via")) ? Ra().attr("nav-id") : Ra().attr("via"), Ka(d), e = _.isUndefined(X().attr("vhy")) ? X().attr("footer-id") : X().attr("vhy"), S(e), Za(Ic.localStorage(Ac + j)), B(Ic.localStorage(Ac + h), !1), M(Ic.localStorage(Ac + i), !1), vb(), w(), Ma(), xb(lc() ? wp_data.post_id : m), Ic.localStorage(Ac + ".vhh", m), Ic.localStorage(Ac + ".vhg", n), lc() && (a(), q()), Yb(), Tc()), Ic(".vem").find(".vaa").length ? Ic(".vem").removeClass("empty-vem") : Ic(".vem").addClass("empty-vem")
    }

    function Eb() {
        Ic(".vhe").addClass("vih"), Ja(), N(), Ic("#veu").html(xc), Ic(".viu").html(xc), w(), Ic(".vem").html("").addClass("empty-vem"), Ic(".vei").val(""), Ic(".vpq").val(""), Ic(".vpp").val(""), Ic(".vfj").siblings(".vly").text("Navigation Type"), Ic(".vdm").siblings(".vly").text("Footer Type"), Ic(".vgf").removeAttr("vhd")
    }

    function Fb(a) {
        var b;
        ib(a) && jb(), Ic("#vhl [viy=" + a + "]").remove(), Ic.localStorage(Ac + ".vhk", Ic("#vhl").html()), b = Ic.localStorage.io(Ac + ".state.veu." + a), b.remove(), b = Ic.localStorage.io(Ac + ".state.vem." + a), b.remove(), fb(a)
    }

    function Gb(a) {
        return Ic.localStorage(Ac + ".state.veu." + a)
    }

    function Hb(a) {
        return Ic.localStorage(Ac + ".vhj." + a) || ""
    }

    function Ib(a) {
        return Ic('#vhl li.viy[viy="' + a + '"]').attr("vjh")
    }

    function Jb(a) {
        var b = Ic.localStorage(Ac + "vmp." + a);
        return _.isUndefined(b) ? "" : b
    }

    function Kb(a) {
        var b = Ic.localStorage(Ac + ".vkp." + a);
        return _.isUndefined(b) ? "" : b
    }

    function Lb(a) {
        var b = Ic.localStorage(Ac + ".vhf." + a);
        return _.isUndefined(b) ? Ob() : b
    }

    function Mb(a) {
        return Ic.localStorage(Ac + ".state.page-google-analytics-id-mrv." + a) || ""
    }

    function Nb(a) {
        return Ic.localStorage(Ac + ".state.page-meta-description-mrv." + a) || ""
    }

    function Ob() {
        return Ic("[viq]").attr("viq")
    }

    function Pb() {
        return Ic.localStorage(Ac + ".vhh")
    }

    function Qb() {
        var a;
        Ic(".vhv").css("height", Ic(window).height()), a = Ic(".vlv").height() - Ic(".vlv .vlq").height() - Ic(".vlv .vls").height() - Ic(".vlv .vlw").height() - 2 * Ic(".vlv .vho").height() - Ic(".vac").height() - 64, Ic(".vem").css("max-height", a);
        var b = Ic(window).height() - Ic(".vem").outerHeight(!1) - Ic(".vlv .vls").height() - Ic(".vlz").height() - 9;
        Ic(".vgm").css("height", b);
        var c = Ic(window).height() - Ic(".vlo .vls").height() - Ic(".vlo .vlq").height() - Ic(".vgc").height() - 32;
        Ic(".vfw").css("max-height", c), Vb()
    }

    function Rb() {
        void 0 !== window.mr_parallax && (setTimeout(window.mr_parallax.profileParallaxElements, 100), void 0 !== window.mr_parallax.callback && Ic(".viu .parallax").each(function () {
            window.mr_parallax.callback(this)
        }))
    }

    function Sb(a, b) {
        a = "undefined" != typeof a ? a : "", b = "undefined" != typeof b ? b : "", Ic(".vag").text(a), Ic(".vae").html(b), Ic(".vaf").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Tb(a, b, c, d, e) {
        "function" == typeof d && "undefined" != typeof c && (a = "undefined" != typeof a ? a : "", b = "undefined" != typeof b ? b : "", Ic(".vqe").text(a), Ic(".vqf").html(b), Ic(".vqc").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                Ic(".vqc .vqd").text(c).on("click", d), setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                _.isUndefined(e) || "function" != typeof e || e(), Ic(".vqc .vqd").off("click"), setTimeout(function () {
                    Ic.modal.close(), Qb(), Ic(".vqc .vqd").text("")
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        }))
    }

    function Ub(a, b, c, d) {
        var e, f = "undefined" != typeof a && "" !== a ? a : "", g = Ic("body div.vrn"),
            h = Ic("<div>").addClass("vrm"), i = (new Date).getTime(), j = "notification-" + i;
        b = "undefined" != typeof b ? b : !1, d = "undefined" != typeof d ? parseInt(d) : 5e3, c = "undefined" != typeof c ? c : "", Ic("div.vrn").length || (Ic("body").append(Ic('<div class="vrn"></div>')), g = "body div.vrn"), b && (e = Ic('<span class="oi">').attr("data-glyph", b), h.append(e)), h.append("<span>" + f + "</span>"), h.addClass(j).addClass("vhr"), h.addClass(c), Ic(g).append(h), setTimeout(function () {
            Ic(".vrm." + j).fadeOut(700, function () {
                Ic(this).remove()
            })
        }, d)
    }

    function Vb() {
        Ic("#simplemodal-container").draggable({handle: ".vfa"})
    }

    function Wb() {
        Ic(".vjy").unbind("click").click(function () {
            return !1
        })
    }

    function Xb() {
        Ic(".viu form").unbind("submit").bind("submit", function (a) {
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), Ic('.viu button[type="submit"]').unbind("click").bind("click", function (a) {
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        })
    }

    function Yb() {
        Ic(".vgc, .vlt, .vdq, .vah, .vdi").removeClass("vqg"), pageLoaded = !0
    }

    function Zb() {
        Ic(".vgc, .vlt, .vdq, .vah, .vdi").addClass("vqg"), pageLoaded = !1
    }

    function $b() {
        interface.tooltip = {}, interface.tooltip.element = null, Ic(document).on("mouseenter touchstart", "[data-mrv-tooltip]", function () {
            null === interface.tooltip.element && (interface.tooltip.element = Ic('<div class="mrv-tooltip"></div>').appendTo("body"));
            var a = Ic(this), b = Math.round(a.offset().top), c = Math.round(a.offset().left) + a.outerWidth(!0),
                d = a.attr("data-mrv-tooltip");
            interface.tooltip.trigger = a, interface.tooltip.element.css("top", b).css("left", c).addClass("mrv-active").text(d)
        }), Ic(document).on("mouseleave", "[data-mrv-tooltip]", function () {
            interface.tooltip.close()
        }), Ic(document).on("touchstart", function (a) {
            Ic(a.target).is(interface.tooltip.trigger) || interface.tooltip.close()
        }), interface.tooltip.close = function () {
            interface.tooltip.element.removeClass("mrv-active")
        }, interface.dropdown = {}, interface.dropdown.render = function (a, b) {
            var c = Ic("<div>"), d = Ic("<div>"), e = Ic("<span>"), f = Ic("<ul>");
            return c.addClass("vrv").addClass("vry"), d.addClass("vrw"), f.addClass("vrx").attr("vrf", a.length), Ic(a).each(function (a, d) {
                var g = Ic("<li>"), h = Ic("<span>"), i = "undefined" != typeof d.text ? d.text : "";
                "undefined" != typeof d.colourClass && (f.addClass("vqz"), g.addClass(d.colourClass)), "" !== i && (h.attr("data-mrv-tooltip", i), h.text(i)), c.data("value", b.value), e.text(b.text), c.data("default", b), g.data(d), g.on("click", interface.dropdown.handle), g.append(h), f.append(g)
            }), c.data(a), d.append(e), c.append(d), c.append(f), c
        }, interface.dropdown.active = null, interface.dropdown.handle = function (a) {
            _.isUndefined(a.type) || ("click" === a.type, a = Ic(this));
            var b = a.data();
            interface.dropdown.active && (interface.dropdown.active.find(".vrw span").text(b.text), interface.dropdown.closeActive()), "undefined" != typeof b.callback && kc(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && Tc(b.targetID)
        }, Ic(document).on("click touchstart", ".vrv", function (a) {
            var b = Ic(this), c = Ic(a.target);
            return interface.dropdown.active && interface.dropdown.active.is(b) && c.is(".vrw, .vrw *") ? interface.dropdown.closeActive() : interface.dropdown.open(b), !1
        }), Ic(document).on("click touchstart", function (a) {
            interface.dropdown.closeActive()
        }), interface.dropdown.open = function (a) {
            interface.dropdown.closeActive(), interface.dropdown.active = a, a.addClass("vhr")
        }, interface.dropdown.closeActive = function () {
            null !== interface.dropdown.active && (interface.dropdown.active.removeClass("vhr"), interface.dropdown.active = null)
        }, interface.dropdown.resetToDefault = function (a) {
            var b;
            a = Ic(a), b = a.data("default"), a.data("value", b.value), a.find(".vrw span").text(b.text)
        }
    }

    function _b(a, b) {
        var c, d = Ic(".viu ." + b);
        d.width();
        return c = na("video", "Edit Video"), Ic(c).unbind("click").bind("click", function (b) {
            return ac(Ic("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
        }).attr("vof", Ic("." + a).attr("vic")), b === !1 ? c : void 0
    }

    function ac(a) {
        Ic(".vde").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                Ic(".vdd").val(a), Ic(".vda").val(Ic("." + a + ' > source[type="video/mp4"]').attr("src").replace("../video/", "video/")), Ic(".vdg").val(Ic("." + a + ' > source[type="video/webm"]').attr("src").replace("../video/", "video/")), Ic(".vdb").val(Ic("." + a + ' > source[type="video/ogg"]').attr("src").replace("../video/", "video/")), setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function bc() {
        var a = Ic(".vda").val(), b = Ic(".vdg").val(), c = Ic(".vdb").val(), d = Ic("." + Ic(".vdd").val()),
            e = Ic(".vdd").val();
        a.length && "video/" === a.substring(0, 6) && (a = a.replace("video/", "../video/")), b.length && "video/" === b.substring(0, 6) && (b = b.replace("video/", "../video/")), c.length && "video/" === c.substring(0, 6) && (c = c.replace("video/", "../video/")), d.find('source[type="video/mp4"]').attr("src", a), d.find('source[type="video/webm"]').attr("src", b), d.find('source[type="video/ogg"]').attr("src", c), Tc(e), Bb()
    }

    function cc(a) {
        return a.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-")
    }

    function dc(a) {
        return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [void 0, ""])[1].replace(/\+/g, "%20")) || null
    }

    function ec(a, b) {
        var c = a.attr("vic"), d = "undefined" != typeof b ? b : "",
            e = a.parent().children(d).not(".vib, .vjb").first().attr("vic");
        return c === e ? !0 : !1
    }

    function fc(a, b) {
        var c = a.attr("vic"), d = "undefined" != typeof b ? b : "",
            e = a.parent().children(d).not(".vib, .vjb").last().attr("vic");
        return c === e ? !0 : !1
    }

    function gc(a) {
        var b = a.attr("vic"), c = a.parent().children().not(".vib, .vjb"), d = c.index(a),
            e = d > 0 ? c.eq(d - 1).attr("vic") : b;
        return e
    }

    function hc(a, b) {
        if (!a || !a.tagName)return "";
        var c, d, e = document.createElement("div");
        return e.appendChild(a.cloneNode(!1)), c = e.innerHTML, b && (d = c.indexOf(">") + 1, c = c.substring(0, d) + a.innerHTML + c.substring(d)), e = null, c
    }

    function ic(a) {
        if (window.getSelection) {
            a.stopPropagation();
            var b = window.getSelection(), c = b.getRangeAt(0), d = document.createElement("br");
            return c.deleteContents(), c.insertNode(d), c.setStartAfter(d), c.setEndAfter(d), c.collapse(!1), b.removeAllRanges(), b.addRange(c), !1
        }
        return !0
    }

    function jc(a) {
        if (window.getSelection) {
            a.stopPropagation();
            var b = window.getSelection(), c = b.getRangeAt(0), d = document.createTextNode(" ");
            return c.deleteContents(), c.insertNode(d), c.setStartAfter(d), c.setEndAfter(d), c.collapse(!1), b.removeAllRanges(), b.addRange(c), !1
        }
        return !0
    }

    function kc(a, b, c) {
        var d, e;
        c = [].slice.call(arguments).splice(2), d = a.split("."), e = d.pop();
        for (var f = 0; f < d.length; f++)b = b[d[f]];
        return b[e].apply(b, c)
    }

    function lc() {
        return "undefined" != typeof window.wp_data
    }

    function mc(a) {
        return "undefined" != typeof a.selector ? !0 : !1
    }

    var nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic = window.jQuery, Jc = "",
        Kc = [], Lc = {},
        Mc = ".vnn, ul.slides > li, ul.slides .owl-item > li, ul.slides .flickity-slider > li , .masonry .project, .accordion li, .accordion, .masonry__item, .variant-shortcode",
        Nc = ".vnn, .grid-layout, .tabbed-content, .tabs",
        Oc = [{name: "Campaign Monitor", action: "createsend.com", handler: ba}, {
            name: "MailChimp",
            action: "list-manage.com",
            handler: aa
        }],
        Pc = ".variant-disable-vjr, .flickity-prev-next-button, div.flickity-viewport, div.flickity-slider, li.slide *, .variant-shortcode *",
        Qc = '[class*="notification"]';
    defaultPageTitle = "Edit Page Title", isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, pageLoaded = !1, pageIsSaved = !0, wpTweaks = {}, interface = {}, variant = this, defaults = {
        ui: {
            sidebar: {
                navOptionsListText: "Nav Type",
                footerOptionsListText: "Footer Type"
            }
        }
    }, wc = new Date, this.removeIconButtons = !0, lc() && (variant.wp = {}), Ic(".vkg").text(wc.getFullYear()), $b(), lc() && (window.localStorage.clear(), Ic(".vhe").remove(), Ic(".vpn.vlp").remove(), Ic(".vlj, .vmb.vlp").remove(), Ic(".vpo").removeAttr("title").append('<i class="material-icons">&#xE161;</i>').find("span[data-glyph]").remove(), Ic(".vpo").attr("data-mrv-tooltip", "Save Page"), Ic(".vpo").off("click").on("click", b).on("click", function () {
        o(".viu")
    }).removeClass("vpo").addClass("vrr"), Ic('<li class="vrs">').append('<a class="vrt" data-mrv-tooltip="View page in new tab" target="_blank" href="' + wp_data.current_page.url + '">').find("a").append('<i class="material-icons">&#xE89E;</i>').end().insertAfter(".vrr"), Ic(".vlf > ul").append('<li data-mrv-tooltip="Exit to WordPress" class="vrz"><a href="' + wp_data.current_page.wp_edit_url + '"><i class="material-icons">&#xE879;</i></a></li>'), Ic(".vjc .vlt").remove(), Ic(".vjc .vdq").remove(), Ic(".vjc .vlm").remove(), Ic(".ved").remove(), Ic(".vpt").attr("data-mrv-tooltip", "Create New Page"), wpTweaks["interface"] = {}, wpTweaks["interface"].sidebarButtons = ".vrr, .vrs", variant.variantNotification = Ub, defaults.ui.sidebar.navOptionsListText = "Navigation:", defaults.ui.sidebar.footerOptionsListText = "Footer:", this.wpNewPage = d, this.wpSwitchPage = e, this.setUnsaved = h, this.setSaved = i, this.renderShortCode = k, this.loadShortcodeOptions = n, this.reloadShortcodes = function (a, b) {
        var c, d, e, f;
        c = _.isUndefined(a) ? "" : a, d = Ic("#veu .vru" + c), d.removeClass("vru"), e = Ic(".viu .vru" + c), f = e.outerHeight(!0), e.removeClass("vru"), b && b()
    }, Ic(window).on("load", function () {
        lc() && (variant.wp.saveImage = function (a, b) {
            variant.wp.newSrc = a, variant.wp.newAlt = b, setImageSrc()
        })
    }), variant.wp.saveImage = function (a) {
    }, Ic(document).on("click", ".vfj .vrx li", function () {
        mr_variant.wp.updateHeader(Ic(this).data("value"))
    }), Ic(document).on("click", ".vdm .vrx li", function () {
        mr_variant.wp.updateFooter(Ic(this).data("value"))
    }), this.renderNavContainer = function (a) {
        var b = (Na(), Qa(), Ic("#veu")), c = Ic(".viu");
        b.find(".nav-container").remove(), c.find(".nav-container").remove(), b.find(".main-container").before(a), c.find(".main-container").before(a), w(), Uc(), p(".nav-container")
    }, this.renderFooter = function (a) {
        var b = U(), c = V(), d = W(), e = X();
        e.remove(), d.append(a), c.remove(), b.append(a), Uc(), p(".main-container footer, .main-container, .viu")
    }, this.startLoading = o, this.stopLoading = p), Ic("#blank-veu").html(Ic("#veu").html()), w(), Ic(window).resize(Qb), Qb(), qb(), ua(), qc = ma(), rc = ga(), sc = ha(), zb(), Ha(), R(), z(), K(), Va(), tc = Wa(), uc = Ua(), vc = lb(), Ic(window).load(function () {
        x(), Ic("[delay-src]").each(function (a, b) {
            b = Ic(this), b.attr("src", b.attr("delay-src")).removeAttr("delay-src")
        }), qc.forEach(function (a) {
            var b = a.headString;
            b = b.replace("href=&quot;css/", 'href="theme/css/').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'), Ic("head").prepend(b)
        }), lc() || v()
    });
    try {
        Ic.isFunction(ca)
    } catch (Rc) {
        Ic(".vml").removeClass("vih"), Ic(".vdq, .vah, .vgy").click(function () {
            Sb("Demo Only", 'Getting HTML in the demo is disabled.<br /><br />You may export your page in a .variant file and import it when you <a href="#" target="_blank">purchase the full version</a>.')
        })
    }
    Ic(".vfw").find(".ves").length && Ic(".vfw").removeClass("empty-vfw"), Ic(document).on("click", ".vhu", function () {
        B(Ic(this).attr("viz"), !0)
    }), Ic(document).bind("mouseup", function (a) {
        Ic(a.target).closest(".vnc, .vnj").length || 1 === a.which && (a.ctrlKey || (Ic(".vhw").hide(), Ic(".vni").removeClass("vhr")))
    }), Ic(document).on("click", ".vav", function () {
        Ic(".vhw").hide()
    }), Ic(document).on("click", ".vkd", function () {
        Ic(".vkd").remove()
    }), Ic(document).on("contextmenu", "[vic]", function (a) {
        if (a.stopPropagation && a.stopPropagation(), a.shiftKey)return !0;
        if (Ic(this).is(Pc))return !1;
        Ic(".vaw").removeClass("vih"), Ic(".vcg").text("Edit Image"), Ic(".vct").text("Edit Link"), Ic(".vfq").addClass("vih");
        var b, c, d, e, f, g, h, i, j, k, l, m, n = Ic(this).attr("vic"), o = Ic("#veu ." + n),
            p = (Ic(o).closest("section"), {
                SECTION: "Section",
                LI: "List Item",
                H1: "Heading",
                H2: "Heading",
                H3: "Heading",
                H4: "Heading",
                H5: "Heading",
                H6: "Heading",
                P: "Paragraph",
                SPAN: "Span",
                UL: "Unordered List",
                DIV: "Div",
                IMG: "Image",
                STRONG: "Strong Text",
                EM: "Emphasised Text",
                I: "Icon",
                A: "Link",
                INPUT: "Input",
                BLOCKQUOTE: "Quote",
                FIGCAPTION: "Caption",
                TD: "Teble Cell",
                TH: "Table Heading",
                FORM: "Form",
                ADDRESS: "Address"
            });
        return Ic(".vau").text(p[o.get(0).tagName]).removeClass("vih"), Ic(o).data("vip") ? $a(o, !1, !1) : Ic(o).closest("[data-vip]").length && $a(Ic(o).closest("[data-vip]"), !1, !1), Ya(n), o.is("p , span, h1, h2, h3, h4, h5, h6, strong, em, li:not(ul.slides > li, ul.slides .owl-item > li, ul.slides .flickity-slider > li), ul, div, blockquote, figcaption, address") && (Ic(".var").unbind("click").bind("click", function () {
            C(o.attr("vic"))
        }), Ic(".vbw").unbind("click").bind("click", function () {
            D(o.attr("vic"))
        })), o.is("a") && (Ic(".vct").removeClass("vih"), Ic(".vct").unbind("click").bind("click", function () {
            Aa(o.attr("vic"))
        }), Ic(".var").unbind("click").bind("click", function () {
            C(o.attr("vic"))
        }), Ic(".vbw").unbind("click").bind("click", function () {
            D(o.attr("vic"))
        }), o.parent().is("nav li") && !o.parent().is("nav li:last-child") && (Ic(".vqh").removeClass("vih"), Ic(".vqh").unbind("click").bind("click", function () {
            F(o.parent().attr("vic"))
        })), o.parent().is("nav li") && !o.parent().is("nav li:first-child") && (Ic(".vqi").removeClass("vih"), Ic(".vqi").unbind("click").bind("click", function () {
            E(o.parent().attr("vic"))
        }))), o.closest("a:not(.vog)").length && (Ic(".vct").removeClass("vih"), o.closest("a").hasClass("ven") && (Ic(".vau").text("Lightbox Thumbnail"), Ic(".vct").text("Edit Lightbox Link"), Ic(".vcg").text("Edit Thumbnail Image")), i = o.closest("a").attr("vic"), Ic(".vct").unbind("click").bind("click", function () {
            Aa(i)
        })), o.closest("section, header").find(".video-wrapper").children("video").length && (o.is(".overlay") && (Ic(".vau").text("Video Background"), Ic(".var").addClass("vih"), Ic(".vbw").addClass("vih")), d = o.closest("section, header").find(".video-wrapper").children("video"), Ic(".vdc").removeClass("vih"), Ic(".vdc").unbind("click").bind("click", function () {
            ac(Ic(d).attr("vic"))
        }), o.closest("section, header").find(".background-image-holder").children(".background-image").length && (Ic(".vcg").text("Edit Poster Image"), Ic(".vcg").removeClass("vih"), Ic(".vcg").unbind("click").bind("click", function () {
            sa(o.closest("section, header").find(".background-image-holder").children(".background-image").attr("vic"))
        })), o.closest(".divider-background").find(".background-image").length && (Ic(".vcg").text("Edit Poster Image"), Ic(".vcg").removeClass("vih"), Ic(".vcg").unbind("click").bind("click", function () {
            sa(o.closest(".divider-background").find(".background-image").attr("vic"))
        }))), o.closest(".slides li").find(".video-wrapper").children("video").length && (o.is(".overlay") && (Ic(".vau").text("Video Slide Background"), Ic(".var").addClass("vih"), Ic(".vbw").addClass("vih")), d = o.closest(".slides li").find(".video-wrapper").children("video"), Ic(".vcg").text("Edit Poster Image"), Ic(".vdc").removeClass("vih"), Ic(".vdc").unbind("click").bind("click", function () {
            ac(Ic(d).attr("vic"))
        })), o.closest("video").length && (Ic(".vau").text("Video"), Ic(".var").addClass("vih"), Ic(".vbw").addClass("vih"), d = o.closest("video"), Ic(".vdc").removeClass("vih"), Ic(".vdc").unbind("click").bind("click", function () {
            ac(Ic(d).attr("vic"))
        })), o.closest(".slides li").find(".video-wrapper").children("video").length && o.closest(".slides li").find(".background-image-holder").children(".background-image").length && (Ic(".vcg").text("Edit Poster Image"), Ic(".vcg").removeClass("vih"), Ic(".vcg").unbind("click").bind("click", function () {
            sa(o.closest(".slides li").find(".background-image-holder").children(".background-image").attr("vic"))
        })), o.is("p , div, span, figure, article, img") && (o.closest('[class*="medium-"]').length && (h = o.closest('[class*="medium-"]'), h.hasClass("medium-12") || (Ic(".veg").removeClass("vih"), Ic(".veg").unbind("click").bind("click", function () {
            H(h.attr("vic"))
        })), h.hasClass("medium-1") || (Ic(".vbt").removeClass("vih"), Ic(".vbt").unbind("click").bind("click", function () {
            I(h.attr("vic"))
        }))), o.parent().is('div [class*="medium-"]') && (o.parent().hasClass("medium-1") || (Ic(".vbt").removeClass("vih"), Ic(".vbt").unbind("click").bind("click", function () {
            I(o.attr("vic"))
        })), o.parent().hasClass("medium-12") || (Ic(".veg").removeClass("vih"), Ic(".veg").unbind("click").bind("click", function () {
            H(o.attr("vic"))
        }))), o.closest('[class*="col-md-"]').length && (h = o.closest('[class*="col-md-"]'), h.hasClass("col-md-12") || (Ic(".veg").removeClass("vih"), Ic(".veg").unbind("click").bind("click", function () {
            H(h.attr("vic"))
        })), h.hasClass("col-md-1") || (Ic(".vbt").removeClass("vih"), Ic(".vbt").unbind("click").bind("click", function () {
            I(h.attr("vic"))
        }))), o.closest('[class*="col-sm-"]:not([class*="col-md-"])').length && (h = o.closest('[class*="col-sm-"]:not([class*="col-md-"])'), h.hasClass("col-sm-12") || (Ic(".veg").removeClass("vih"), Ic(".veg").unbind("click").bind("click", function () {
            H(h.attr("vic"))
        })), h.hasClass("col-sm-1") || (Ic(".vbt").removeClass("vih"), Ic(".vbt").unbind("click").bind("click", function () {
            I(h.attr("vic"))
        }))), o.closest('[class*="col-xs-"]:not([class*="col-md-"])').length && (h = o.closest('[class*="col-xs-"]:not([class*="col-md-"])'), h.hasClass("col-xs-12") || (Ic(".veg").removeClass("vih"), Ic(".veg").unbind("click").bind("click", function () {
            H(h.attr("vic"))
        })), h.hasClass("col-xs-1") || (Ic(".vbt").removeClass("vih"), Ic(".vbt").unbind("click").bind("click", function () {
            I(h.attr("vic"))
        })))), o.is(".cover-wrapper, .hover-state") && (b = o.closest("figure").find("img").get(0), c = o.closest("a").first(), Ic(b).is("img") && (Ic(".vcg").removeClass("vih"), Ic(".vcg").unbind("click").bind("click", function () {
            sa(Ic(b).attr("vic"))
        })), o.closest("figure").length && (j = o.closest("figure").attr("vic"), j.length && (Ic(".var").unbind("click").bind("click", function () {
            C(j)
        }), Ic(".vbw").unbind("click").bind("click", function () {
            D(j)
        })))), (o.parents("nav, header").length || o.is("nav") || o.is("header")) && (o.is("nav, header") ? (g = o.attr("nav-id"), Ic(".vau").text("Nav"), Ic(".vaw").addClass("vih")) : (g = o.closest("nav").attr("nav-id"), Ic(".vau").text("Nav > " + Ic(".vau").text())), Ic(".vfe").removeClass("vih"), Ic(".vfg[nav-id=" + g + "]").each(function () {
            Ic(".viu nav").hasClass(Ic(this).attr("nav-class")) || Ic(this).removeClass("vih")
        }), Ic(".vhw .vaw").not(".vih").length || Ic(".vfe .vfm").removeClass("vih")), o.closest(".hover-background").length && (b = o.closest("section").find(".hover-background .background-image").get(0), Ic(b).is("img") && (Ic(".vcg").text("Edit Background Image").removeClass("vih"), Ic(".vcg").unbind("click").bind("click", function () {
            sa(Ic(b).attr("vic"))
        })), Ic(o).closest(".hover-background").find(".foreground-image-holder .background-image").each(function (a) {
            var b = a + 1, c = Ic(this);
            e = Ic(".vcg").clone(), e.removeClass("vcg").addClass("vkd edit-foreground-" + b), e.text("Edit Layer " + b + " Image"), Ic(this).attr("src"), e.unbind("click").bind("click", function () {
                sa(c.attr("vic"))
            }), e.insertBefore(Ic(".vcg"))
        })), o.is("i") && (Ic(".vau").text("Icon"), Ic(".vcc").removeClass("vih"), Ic(".vcc").unbind("click").bind("click", function () {
            oa(o.attr("vic"))
        }), Ic(".var").unbind("click").bind("click", function () {
            C(o.attr("vic"))
        }), Ic(".vbw").unbind("click").bind("click", function () {
            D(o.attr("vic"))
        })), o.is("img") && (Ic(".vcg").removeClass("vih"), Ic(".vcg").unbind("click").bind("click", function () {
            sa(o.attr("vic"))
        }), Ic(".var").unbind("click").bind("click", function () {
            C(o.attr("vic"))
        }), Ic(".vbw").unbind("click").bind("click", function () {
            D(o.attr("vic"))
        })), o.is("section") && (Ic(".vau").text("Section"), Ic(".var").unbind("click").addClass("vih"), Ic(".vbw").unbind("click").addClass("vih")), o.is("header") && (Ic(".vau").text("Section"), Ic(".var").unbind("click").addClass("vih"), Ic(".vbw").unbind("click").addClass("vih")), o.closest(".veo").length && (f = Ic(o).closest(".veo"), b = Ic(o).closest(".veo").find("img"), Ic(".vcg").removeClass("vih"), Ic(".vcg").unbind("click").bind("click", function () {
            sa(b.attr("vic"))
        }), Ic(".var").removeClass("vih").unbind("click").bind("click", function () {
            C(f.attr("vic"))
        }), Ic(".vbw").removeClass("vih").unbind("click").bind("click", function () {
            D(f.attr("vic"))
        })), o.hasClass("vns") && Ic(".var").unbind("click").addClass("vih"), Xa(n, !0), k = Ic("body > .vhw"), k.find(".vaw:not(.vih)").length ? (l = Ic(window).width(), m = Ic(window).height(), a.pageX + k.outerWidth() > l ? k.css("left", l - k.outerWidth()) : k.css("left", a.pageX), a.pageY + k.outerHeight() > m ? k.css("top", m - k.outerHeight()) : k.css("top", a.pageY), Qb(), k.show()) : k.hide(), !1
    }), Ic(document).on("click", ".vdi:not(.vqg)", function () {
        J("all")
    }), Ic(document).on("click", ".vmv", function () {
        M(Ic(this).attr("vmw"), !0)
    }), Ic(".vfy").on("click", function () {
        "" !== Ic(".vfz").val() && (P(), Ic.modal.close())
    }), Ic(".vfz").keyup(function (a) {
        13 === a.keyCode && "" !== Ic(".vfz").val() && (P(), Ic.modal.close())
    }), Ic(document).on("keyup paste input", "footer.vir", function () {
        var a = Ic(this);
        O(a), a.removeClass("vir").addClass("vhz")
    }), Ic(document).on("keyup paste input", "footer.vhz", function () {
        N()
    }), Ic(document).on("keyup paste input", ".vfz", function () {
        "" !== Ic(this).val() ? Ic(".vfy").show() : Ic(".vfy").hide()
    }), Ic(".vfl").click(function () {
        Ic(this).closest(".vho").removeClass("vhr");
        var a = Ic(this).text();
        Ic(this).closest(".vho").find(".vly").text(a), T()
    }), Ic(document).on("click", ".vbx", function () {
        var a = Ic(this).parent().attr("vid");
        Ic(this).parent().remove(), Ic("." + a).remove(), N()
    }), Ic(document).on("click", ".vdl", function () {
        S(Ic(this).attr("vid"), !0), Ic(this).closest(".vho").removeClass("vhr"), Ic(".vhe").addClass("vih");
        var a = Ic(this).text();
        Ic(this).closest(".vho").find(".vly").text(a)
    }), Ic(".vpk").on("click", function () {
        $() === !0 && Ic.modal.close()
    });
    var Sc = function (a) {
        Ic(".vph").modal({
            autoResize: !0, overlayClose: !0,
            opacity: 0, overlayCss: {"background-color": "#3e3e3e"}, closeClass: "vex", onShow: function () {
                Ic(".vpj").val(a), setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            }, onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        })
    };
    variant.promptEditForm = Sc, Ic(document).on("click", ".vdq:not(.vqg)", function () {
        var a = Ic(".vfu"), b = ca(Pb());
        return a.html(he.encode(b)), lc() ? void variant.wp.saveHTML(Ic(".vfu").text()) : (Ic(".vdr").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {"background-color": "#3e3e3e"},
            closeClass: "vex",
            onShow: function () {
                switch (window.location.protocol) {
                    case"http:":
                    case"https:":
                    case"file:":
                        Ic(".vgn").click(function () {
                            Ic(".vfu").select()
                        }), Ic(".vgn").show(), Ic(".code-copy-simple").show(), Ic(".vfu").select()
                }
                setTimeout(function () {
                    Ic(".simplemodal-container").addClass("vko"), Ic(".simplemodal-overlay").addClass("vko")
                }, 100), Qb()
            },
            onClose: function () {
                setTimeout(function () {
                    Ic.modal.close(), Qb()
                }, 300), Ic(".simplemodal-container").removeClass("vko"), Ic(".simplemodal-overlay").removeClass("vko")
            }
        }), void("" !== Ic.localStorage(Ac + ".vbu") && Ic.localStorage(Ac + ".vbu", Ic("#image-edit-chooser").attr("vbv"))))
    }), Ic(".vgy").click(function () {
        var a, b = "", c = "";
        b = Ic.localStorage(Ac + ".vhg"), b = "undefined" != typeof Ic.localStorage(Ac + ".vhg") ? Ic.localStorage(Ac + ".vhg") : "page", c = ca(Pb()), a = new Blob([c], {type: "text/plain;charset=utf-8"}), saveAs(a, cc(b) + ".html")
    }), Ic(document).on("click", ".vah:not(.vqg)", function () {
        var a, b, c = new JSZip, d = [], e = new Date;
        return Ic("#vhl .viy").length ? (Ic("#vhl .viy").each(function () {
            d.push(Ic(this).attr("viy"))
        }), a = "variant-exported-" + cc(e.toDateString()), d.forEach(function (a, b) {
            var d;
            e = new Date, d = Ic('#vhl [viy="' + a + '"]').attr("vjh"), source = ca(a), d = 1 === Ic('#vhl [vjh="' + d + '"]').length ? cc(d) + ".html" : cc(d) + "-" + e.getTime() + ".html", c.file(d, source)
        }), b = c.generate({
            type: "blob",
            compression: "deflate"
        }), void saveAs(b, "html-pages-" + cc(e.toDateString()) + ".zip")) : void Sb("Export HTML", "There was nothing to export.<br /><br />Save at least one page before exporting.")
    }), Ic(document).on("keyup paste input", ".vcd .vok", function () {
        var a = Ic(".vcd .vok").val();
        "" !== a ? (pa(a), Ic(".vcd .vol").removeClass("vih")) : qa()
    }), Ic(document).on("click", ".voj li:not(.vhr)", function () {
        var a = Ic(this);
        Ic(".voj li.vhr, .vrj li.vhr").removeClass("vhr"), a.addClass("vhr"), Ic(".vrj li.vou").eq(a.index()).addClass("vhr"), Ic(".vrj li.vov").eq(a.index()).addClass("vhr")
    }), Ic(document).on("click", ".vcd .vol", function () {
        qa()
    }), Ic(document).on("click", ".viu i", function () {
        var a = Ic(this);
        a.hasClass("catch-double-click") ? oa(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function () {
            a.removeClass("catch-double-click")
        }, 300))
    }), Ic(document).on("click", "div.vam", function () {
        var a = Ic("." + Ic("#vgo").val()), b = Ic(this).find("i");
        a.hasClass("icon-large") && a.addClass("keep-large-icon").removeClass("icon-large"), a.hasClass("icon-lg") && a.addClass("keep-lg-icon").removeClass("icon-lg"), a.hasClass("icon--lg") && a.addClass("keep--lg-icon").removeClass("icon--lg"), a.hasClass("icon-sm") && a.addClass("keep-sm-icon").removeClass("icon-sm"), a.hasClass("icon--sm") && a.addClass("keep--sm-icon").removeClass("icon--sm"), a.hasClass("icon--xs") && a.addClass("keep--xs-icon").removeClass("icon--xs"), qc.forEach(function (b) {
            a.alterClass(b.iconPrefix + "*", ""), a.removeClass(b.iconClass)
        }), a.addClass(b.attr("icon-class")), a.hasClass("keep-large-icon") && a.removeClass("keep-large-icon").addClass("icon-large"), a.hasClass("keep-lg-icon") && a.removeClass("keep-lg-icon").addClass("icon-lg"), a.hasClass("keep--lg-icon") && a.removeClass("keep--lg-icon").addClass("icon--lg"), a.hasClass("keep-sm-icon") && a.removeClass("keep-sm-icon").addClass("icon-sm"), a.hasClass("keep--sm-icon") && a.removeClass("keep--sm-icon").addClass("icon--sm"), a.hasClass("keep--xs-icon") && a.removeClass("keep--xs-icon").addClass("icon--xs"), ra(), Bb()
    }), Ic(".vcn").on("click", function () {
        setImageSrc(), Ic.modal.close()
    }), Ic(".vco").get(0).addEventListener("drop", function (a) {
        a.stopPropagation(), a.preventDefault();
        var b = a.dataTransfer.getData("URL");
        Ic(".vco").val(b), Ic(".vcp").attr("src", b)
    }, !1), Ic(".vcp").get(0).addEventListener("drop", function (a) {
        a.stopPropagation(), a.preventDefault();
        var b = a.dataTransfer.getData("URL");
        Ic(".vco").val(b), Ic(".vcp").attr("src", b)
    }, !1), Ic(".vco").get(0).addEventListener("dragover", function (a) {
        a.preventDefault(), a.stopPropagation()
    }, !1), Ic(".vco, .vcf").keyup(function (a) {
        13 === a.keyCode && (setImageSrc(), Ic.modal.close())
    }), Ic(".vhp").click(function () {
        Ic(".vdz,.vcl").toggleClass("vhr")
    }), Ic(".vcp").click(function () {
        Ic(".vhp").trigger("click")
    }), Ic(".vch").change(function (a) {
        ta(a)
    }), Ic(".vee").click(function () {
        Ic(".vch").focus().trigger("click")
    }), Ic(document).on("click", ".vcj", function () {
        var a = Ic(this).get(0);
        Ic(".vco").val(Ic(this).attr("src").replace("../img/", "img/")), Ic(".vcp").attr("src", Ic(this).attr("src")), Ic(".veb").text(a.naturalWidth + "x" + a.naturalHeight + " pixels"), Ic(".vdz,.vcl").toggleClass("vhr")
    }), Ic(document).on("click", ".no-image", function () {
        wa(this)
    }), Ic(document).on("click", ".viu img", function () {
        var a = Ic(this);
        a.hasClass("catch-double-click") ? sa(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function () {
            a.removeClass("catch-double-click")
        }, 300))
    }), Ic(document).on("mouseenter", ".viu img[vic]:not(.viu ul.slides > li > img, .viu ul.slides .owl-item img, ul.slides .flickity-slider > li img, .voh img, ul.flickr-feed img )", function (a) {
        Ic('[vof="' + Ic(this).attr("vic") + '"]').length || xa(Ic(this).attr("vic"), Ic(this).attr("vic"))
    }), Ic(document).on("mouseenter", '.viu div[class*="col-"]', function (a) {
        var b = Ic(this);
        b.find(".image-holder, .background-image-holder:not(.voh .background-image-holder, .viu .slides > li > img, .viu .slides .owl-item img, ul.slides .flickity-slider > li img, .viu .slides > li > .background-image-holder, .viu .slides .owl-item > li > .background-image-holder, .viu ul.slides .flickity-slider > li > .background-image-holder, .viu section > .background-image-holder, .viu header > .background-image-holder, .viu footer > .background-image-holder)").filter("[vic]").each(function () {
            var a = Ic(this);
            a.closest('div[class*="col-"]').find("div.hover-state").length && !a.closest('div[class*="col-"]').find("div.hover-state").find(".vnv").length ? Ic('[vof="' + a.find("img").attr("vic") + '"]').length || xa(a.find("img").attr("vic"), a.closest('div[class*="col-"]').find(".hover-state").attr("vic")) : a.find(".vnv").length || Ic('[vof="' + a.find("img").attr("vic") + '"]').length || xa(a.find("img").attr("vic"), a.attr("vic"))
        })
    }), setImageSrc = function () {
        var a = lc(), b = a ? variant.wp.editImageID : Ic(".vck").val(), c = a ? variant.wp.newSrc : Ic(".vco").val(),
            d = a ? variant.wp.newAlt : Ic(".vcf").val(), e = Ic("." + b), f = b, g = a ? wp_data.imgPath : "../img/";
        "img/" === c.substring(0, 4) && (c = c.replace("img/", g)), e.attr("src", c), e.attr("alt", d), e.closest("a.ven").length && e.closest("a.ven").attr("data-title", e.attr("alt")).attr("href", c), e.is(".background-image, .background-image-holder img") ? Tc(f) : e.parents().find(Nc).length && Tc(f), lc() && (variant.wp.editImageID = null, variant.wp.newSrc = null, variant.wp.newAlt = null), Bb()
    }, this.chooserImageError = function (a) {
        Ic(a).parent().addClass("no-image"), Ic(a).parent().find(".vjn").html("Copy <strong>" + Ic(a).attr("vis") + "</strong> to your img folder then click here to refresh."), Ic(a).css("display", "none")
    }, this.defaultImageError = function (a) {
        Ic(a).parent().remove(), Ic(a).remove()
    }, Ic(".ved").click(function () {
        Ic(".vef").focus().trigger("click")
    }), Ic(".vef").change(function (a) {
        "variant" === Ic(this).val().split(".").pop() ? ya(a) : Sb("Please select a .variant file", "Variant cannot import plain HTML files. <br /><br />You can import .variant files that have been exported from Variant here, or by someone else.")
    }), Ic(".veh").change(function (a) {
        Ic(".vcu").val(Ic(this).val())
    }), Ic(".vcu").keyup(function (a) {
        13 === a.keyCode && "" !== Ic(".vcu").val() && (Ba(), Ic.modal.close())
    }), Ic(".vcx").on("click", function () {
        Ba(), Ic.modal.close()
    }), Ic(document).on("click", ".viu a, .viu nav a, .viu header a", function () {
        var a = Ic(this);
        return a.hasClass("catch-double-click") ? Aa(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function () {
            a.removeClass("catch-double-click")
        }, 300)), !1
    }), oc = "p,h1,h2,h3,h4,h5,h6,span.h1,span.h2,span.h3,span.h4,span.h5,span.h6", pc = "div, .typed-text, .countdown, .btn__text, .wysiwyg *", Ic(document).on("mouseenter", ".viu .voh:not(.vib, .vjb)", function (a) {
        var b, c, d, e, f, g, h = "", i = Ic(".viu ." + Ic(this).attr("vic")),
            j = i.parent().find(".voh").not(".vjb , .vib").length > 1 ? !0 : !1, k = ec(i, ".voh"), l = fc(i, ".voh");
        b = Ic('<div class="vnw"></div>'), j && !k && (e = na("arrow-thick-left", "Sort Previous"), Ic(e).unbind("click").bind("click", function (a) {
            return E(i.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(e)), j && (c = na("minus", "Delete"), Ic(c).unbind("click").bind("click", function (a) {
            return D(i.attr("vic"), i.is(".vrp")), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(c)), g = i.find("img:not(.vib)"), g.each(function () {
            var a = Ic(this);
            b.append(xa(a.attr("vic"), !1))
        }), uc.options.forEach(function (a) {
            i.is(a.selector) && (f = bb(a, !1, i.attr("vic")), b.append(f)), i.find(a.selector).length && (f = bb(a, !1, i.find(a.selector).first().attr("vic")), b.append(f))
        }), d = na("plus", "Clone"), Ic(d).unbind("click").bind("click", function (a) {
            return C(i.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(d), j && !l && (h = na("arrow-thick-right", "Sort Next"), Ic(h).unbind("click").bind("click", function (a) {
            return F(i.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(h)), i.append(b)
    }), Ic(document).on("keyup paste input", ".vgb", function () {
        "" !== Ic(this).val() ? Ic(".vga").removeClass("vih") : Ic(".vga").addClass("vih")
    }), Ic(".vgb").keyup(function (a) {
        13 === a.keyCode && "" !== Ic(".vgb").val() && (Ga(), Ic.modal.close())
    }), Ic(".vga").on("click", function () {
        Ga(), Ic.modal.close()
    }), Ic(document).on("keyup paste input", '.nav-container .vhz [contenteditable="true"], header.vhz [contenteditable], [vqj].modal-container.vhz [contenteditable]', function () {
        Ja()
    }), Ic(document).on("keyup paste input focus mousedown mouseup", ".nav-container .vir[nav-id] [contenteditable], header.vir, [vqj].modal-container.vir", function () {
        var a = Ic(this);
        a.is("[vqj]") && Ic('#veu [vqj="' + a.attr("vqj") + '"]').removeClass("vir").addClass("vhz"), Fa(Ic(this)), Ic(this).removeClass("vir").addClass("vhz")
    }), Ic(".vfo").click(function () {
        Ic(".vmm").closest(".vkq").remove(), Ic(this).closest(".vho").removeClass("vhr");
        var a = Ic(this).text();
        Ic(this).closest(".vho").find(".vly").text(a), La()
    }), Ic(document).on("click", ".vby", function () {
        var a = Ic(this).parent().attr("nav-id");
        Ic(this).parent().remove(), Ic("." + a).remove(), Ja()
    }), Ic(document).on("click", ".vfi", function () {
        Ka(Ic(this).attr("nav-id"), !0), Ic(this).closest(".vho").removeClass("vhr");
        var a = Ic(this).text();
        Ic(this).closest(".vho").find(".vly").text(a)
    }), Ic(document).on("click", ".vfg", function () {
        var a = Ic("." + Pa());
        Ic(".vev").each(function () {
            var b = Ic(this).data("vff");
            b.forEach(function (b) {
                a.removeClass(b.className)
            })
        }), a.addClass(Ic(this).attr("nav-class")), Bb(), Tc()
    }), Ic(".vgk").click(_a), Ic(".vdh").click(_a), Ic(document).on("click", ".vks", function () {
        var a = Ic(this).parent().attr("optionalclass"), b = Ic(this).parent().attr("classtarget");
        Ic(this).hasClass("vkr") || (Ic(this).parent().find(".vks").toggleClass("vkr"), Ic(this).hasClass("choice-button-on") ? Ic(b).addClass(a) : Ic(b).removeClass(a)), Ic(b).each(function () {
            "" === Ic(this).attr("class") && Ic(this).removeAttr("class")
        }), Ic(this).hasClass("refresh") && Tc(b), Bb()
    }), Ic(document).on("click", ".vkt", function (a) {
        var b = Ic(this).parent().attr("optionalClass"), c = Ic(this).parent().attr("classtarget"), d = "";
        a.stopPropagation(), Ic(this).hasClass("vku") ? (Ic(c).removeClass(b), d = !1) : (Ic(c).addClass(b), d = !0), Ic(this).toggleClass("vku"), Ic(c).each(function () {
            "" === Ic(this).attr("class") && Ic(this).removeAttr("class")
        }), Ic(this).hasClass("refresh") && Tc(Ic(c).attr("vic")), "parallax" === b && (Rb(), "undefined" != typeof window.mr_parallax && window.mr_parallax.callback(c)), "scroll-assist" === b && "undefined" != typeof window.mr_parallax && (window.mr_parallax.mr_scrollAssist = d), Bb()
    }), Ic(document).on("click", ".vkv", function () {
        var a, b = Ic(this).attr("optionalclass"), c = Ic(this).parent().attr("classtarget");
        Ic(this).hasClass("vkr") || (a = Ic(this).parent().find(".vkv.vkw").attr("optionalclass"), Ic(this).parent().find(".vkv").removeClass("vkw"), Ic(this).addClass("vkw"), Ic(c).removeClass(a).addClass(b)), Ic(c).each(function () {
            "" === Ic(this).attr("class") && Ic(this).removeAttr("class")
        }), Bb(), Ic(this).hasClass("refresh") && Tc(c)
    }), Ic(document).on("click", ".vno", function () {
        $a("." + Ic(this).attr("vnr"), Ic(this).data("vnq"), !0)
    }), Ic(".vbj").on("click", function () {
        ab(), Ic.modal.close()
    }), Ic(".vbg").keyup(function (a) {
        13 === a.keyCode && (ab(), Ic.modal.close())
    }), Ic(document).on("click", ".vgc:not(.vqg)", function () {
        Ab(), Ic(".vfw").removeClass("empty-vfw")
    }), Ic(".vpt").click(function () {
        pageLoaded === !0 && Bb();
        var a = Ic(".vge .vjl");
        a.attr("vpx", a.text()).text("New Page");
        var b = Ic(".vge .vew p:first");
        b.attr("vpx", b.text()).text("Give your new page a name."), Ab("vhd"), Ic(".vfw").removeClass("empty-vfw")
    }), Ic(document).on("keyup paste input", ".vgf", function () {
        "" !== Ic(this).val() ? Ic(".vgd").removeClass("vih") : Ic(".vgd").addClass("vih")
    }), Ic(".vgf").keyup(function (a) {
        var b = Ic(this).val();
        13 === a.keyCode && "" !== b && db(b)
    }), Ic(".vgd").on("click", function () {
        var a = Ic(".vgf").val();
        "" !== a && db(Ic(".vgf").val())
    }), Ic(document).on("click", ".ves", function () {
        var a;
        lc() ? (a = Ic(this).data(), a.postId !== wp_data.current_page.post_id && (pageIsSaved === !0 ? e(a) : (r(), Tb("You have unsaved changes.", "Proceed without saving?", "Proceed", function () {
            e(a)
        }, function () {
            s()
        })))) : Db(Ic(this).attr("state-id"))
    }), Ic(document).on("click", ".vdj", function () {
        return J(Ic(this).parent().attr("state-id")), !1
    }), Ic(document).on("click", ".vbz", function () {
        var a = Ic(this).parent(), b = a.attr("state-id"), c = a.attr("vjh");
        return Tb("Confirm Delete", "Are you sure you want to delete " + c + "?", "Delete", function () {
            Fb(b)
        }), !1
    }), Ic(document).on("click", ".vpy", function () {
        var a = Ic(this).parent().attr("state-id"), b = Ic(this).parent().attr("vjh"), c = Ic(".vge .vjl"),
            d = Ic(".vge .vew p:first"), e = Ic(".vge .vgf");
        return c.attr("vpx", c.text()).text("Rename " + b), d.attr("vpx", d.text()).text("Give your page a new name."), e.attr("viy", a), e.attr("vqa", b), e.val(b), Ab("vpz"), !1
    }), Ic(".vei").on("blur keyup paste input", function () {
        var a = "undefined" == typeof Ic(this).val() ? "" : Ic(this).val();
        document.title = "" !== a ? a : defaultPageTitle, Ic.localStorage(Ac + ".vhh") ? (Ic('#vhl [viy="' + Ic.localStorage(Ac + ".vhh") + '"]').attr("page-title", a), Ic.localStorage(Ac + ".vhk", Ic("#vhl").html())) : Ic.localStorage(Ac + ".vhj", a), Bb()
    }), Ic(document).on("click focus blur keyup paste input", ".vei.vlx", function () {
        Ic.localStorage(Ac + ".vhh", ""), Ic.localStorage(Ac + ".vhg", ""), Ic(".vhe").addClass("vih"), Ic(this).removeClass("vlx")
    }), Ic(".vpp").on("blur keyup paste input", function () {
        Bb()
    }), Ic(".vpq").on("blur keyup paste input", function () {
        Bb()
    });
    var Tc = function (a) {
        function b(a) {
            var b = ".viu";
            _.isUndefined(a) || (b = ".viu " + a), Ic(b).find("[no-src]").each(function () {
                Ic(this).attr("src", Ic(this).attr("no-src")).removeAttr("no-src")
            }), lc() && Ic(b).find(".variant-shortcode:not(.vru)").each(function () {
                k(Ic(this))
            })
        }

        var c, d = Ic(".viu").get(0).scrollTop;
        Ic(".viu " + Ic("body").attr("mrv_contentTarget"));
        Ic(".viu").empty().html(Ic("#veu").html()), c = Ic(".viu ." + a).closest("footer").length ? "footer" : "section", c = Ic(".viu ." + a).closest(c).attr("vic"), Ic('.vqm[vnt="' + c + '"]').length && nb(c), setTimeout(function () {
            "undefined" == typeof mr ? (b(), reInit(".viu")) : (b(), mr.documentReady(mr.setContext(".viu")), mr.windowLoad(mr.setContext(".viu"))), Wb(), Xb(), Ea(), Ic(".viu .embedded-video-holder").each(function () {
                Ic(this).addClass("vju")
            }), Rb(), Ic(".viu").get(0).scrollTop = d, Ic(".viu .vnx").trigger("mouseenter")
        }, 100)
    }, Uc = _.debounce(Tc, 1e3);
    Ic(".vhv").on("submit", ".vqm form", function () {
        return !1
    }), Lc.controlTitle = {}, Lc.controlTitle.render = function (a, b) {
        var c = Ic("<div>"), d = Ic("<span>"), e = "undefined" != typeof b ? Ic("<div>") : !1;
        return c.addClass("vqt"), d.addClass("vqu").text(a), c.append(d), e && (e.addClass("vqv").attr("vrg", b).text("?"), c.append(e)), c
    }, Lc.images = {}, Lc.images.render = function (a) {
        var b = Ic("<div>"),
            c = Lc.controlTitle.render("Images", "Images in the section are shown here, click a thumbnail to change the image."),
            d = Ic("<ul>");
        return b.addClass("vqq"), d.addClass("vqw").attr("vrf", a.length), Ic(a).each(function () {
            var a = Ic("<li>"), b = Ic("<img>"), c = Ic(this), e = c.attr("vic");
            b.attr("alt", "Image Thumbnail").attr("src", c.attr("src")).addClass(e).attr("vic", e), a.append(b), d.append(a)
        }), b.append(c).append(d), b
    }, Ic(document).on("click", ".vhv .vqm .vqw li img", function () {
        sa(Ic(this).attr("vic"))
    }), Lc["switch"] = {}, Lc["switch"].render = function (a, b) {
        var c = Lc.controlTitle.render(a.title, a.explainer), d = Ic("<div>"), e = Ic("<div>"), f = Ic("<div>"),
            g = _.isUndefined(a.attribute) ? b.hasClass(a.onClass) ? !0 : !1 : a.masterTarget.attr(a.attribute) === a.onProperty ? !0 : !1;
        return e.addClass("vqx").append(f), g && e.addClass("vhr"), d.addClass("vqq vqs").append(c).append(e), d.data(a), d
    }, Lc["switch"].handle = function (a) {
        var b = a.data();
        "undefined" != typeof b.attribute ? (b.target.attr(b.attribute, b.state ? b.onProperty : b.offProperty), "" === b.target.attr(b.attribute) && b.target.removeAttr(b.attribute)) : b.target.addClass(b.state ? b.onClass : b.offClass).removeClass(b.state ? b.offClass : b.onClass), Bb(), "undefined" != typeof b.callback && kc(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && Tc(b.targetID)
    }, Ic(document).on("click", ".vhv .vqm .vqx", function () {
        var a = Ic(this).closest(".vqq");
        Ic(this).toggleClass("vhr");
        var b = Ic(this).is(".vhr") ? !0 : !1;
        a.data("state", b), Lc["switch"].handle(a)
    }), Lc.slider = {}, Lc.slider.render = function (a, b) {
        var c, d, e, f = Lc.controlTitle.render(a.title, a.explainer), g = Ic("<div>"), h = Ic("<form>"),
            i = Ic("<input>"), j = Ic("<ul>"), k = !1, l = null;
        return i.addClass("vrd").attr("type", "range").attr("min", "0").attr("max", a.options.length - 1), h.append(i), _.isUndefined(a["default"]) || (l = a["default"]), j.addClass("vre").attr("vrf", a.labels.length), Ic(a.labels).each(function () {
            Ic("<li>").text(this).appendTo(j)
        }), "undefined" != typeof a.attribute ? (e = b.attr(a.attribute), i.attr("value", Ic.inArray(e, a.options)).attr("title", a.title + ": " + e)) : (Ic(a.options).each(function (a, e) {
            b.hasClass(e) && "" !== e && (k = !0, i.attr("value", a).attr("title", e.title + ": " + this)), e === l && (c = a, d = e)
        }), k || null === l || i.attr("value", c).attr("title", a.title + ": " + d)), g.addClass("vqq").append(f).append(h).append(j), g.data(a), g
    }, Lc.slider.handle = function (a) {
        var b = a.closest(".vqq"), c = b.data(), d = parseInt(a.val(), 10), e = c.options[d];
        "undefined" != typeof c.attribute ? "" === e ? c.target.removeAttr(c.attribute) : c.target.attr(c.attribute, e) : (Ic(c.options).each(function (a, b) {
            c.target.removeClass(b)
        }), c.target.addClass(e)), !_.isUndefined(c.titles) && _.isArray(c.titles) ? a.attr("title", c.title + ": " + c.titles[d]) : a.attr("title", c.title + ": " + e), "undefined" != typeof c.callback && kc(c.callback, window, c.targetSelector), "undefined" != typeof c.refresh && ("true" === c.refresh || c.refresh === !0) && Uc(c.targetID), Hc()
    }, Ic(".vhv").on("change, input", ".vqm .vrd", function (a) {
        Lc.slider.handle(Ic(this))
    }), Lc.text = {}, Lc.text.render = function (a, b, c) {
        var d = Lc.controlTitle.render(a.title, a.explainer), e = Ic("<div>"), f = Ic("<form>"), g = Ic("<input>");
        return e.addClass("vqq"), g.addClass("vrc").attr("type", "text").attr("placeholder", a.placeholder).attr("name", a.title), "undefined" != typeof a.masterTarget.attr(a.attribute) && g.val(a.masterTarget.attr(a.attribute)), f.append(g), e.append(d).append(f), g.data(a), e
    }, Lc.text.handle = _.debounce(function (a) {
        var b = a.data(), c = a.val(), d = a.getCursorPosition();
        a.closest(".vqm").data("focussedElementValue", a.val()).data("focussedElementAttribute", b.attribute).data("cursorPosition", d), "" !== c && (b.masterTarget.attr(b.attribute, c), Hc(), "undefined" != typeof b.callback && kc(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && Tc(b.targetID))
    }, 700), Ic(".vhv").on("keyup paste", ".vqm .vrc", function (a) {
        _.contains([37, 38, 39, 40], a.which) || Lc.text.handle(Ic(this))
    }), Lc.choice = {}, Lc.choice.render = function (a) {
        var b, c, d = Lc.controlTitle.render(a.title, a.explainer), e = Ic("<div>"), f = Ic("<ul>");
        return e.addClass("vqq"), f.addClass("vqy").attr("vrf", a.options.length), "multi" === a.type && f.addClass("vra"), "undefined" != typeof a.required && (a.required === !0 || "true" === a.required) && f.addClass("vrb"), Ic(a.options).each(function (d, e) {
            var g = Ic("<li>"), h = "";
            h = "undefined" != typeof e.onClass ? e.onClass : h, h = "undefined" != typeof e.onProperty ? e.onProperty : h, "undefined" != typeof e.colourClass && (f.addClass("vqz"), g.addClass(e.colourClass)), "undefined" != typeof e.html && g.html(e.html), "multi" === a.type ? "undefined" != typeof e.offClass && (a.masterTarget.hasClass(e.offClass) || a.masterTarget.hasClass(e.onClass) && (g.addClass("vhr"), c = !0), _.isUndefined(e.offClass) || "" === e.onClass && (a.masterTarget.hasClass(e.offClass) || (g.addClass("vhr"), c = !0))) : "" !== h ? "undefined" != typeof a.attribute ? a.masterTarget.attr(a.attribute, h) && (g.addClass("vhr"), c = !0) : (a.masterTarget.hasClass(h) && (g.addClass("vhr"), c = !0), _.isUndefined(e.offClass) || "" === e.onClass && (a.masterTarget.hasClass(e.offClass) || (g.addClass("vhr"), c = !0))) : b = g, g.data(a), g.data("subOption", e), f.append(g)
        }), c || b.addClass("vhr"), e.append(d).append(f), e
    }, Lc.choice.handle = function (a) {
        var b, c = a.data();
        b = _.pluck(c.options, "onClass"), _.each(b, function (a) {
            c.target.removeClass(a)
        }), c.target.addClass(c.subOption.onClass), Bb(), "undefined" != typeof c.callback && kc(c.callback, window, c.targetSelector), "undefined" != typeof c.refresh && ("true" === c.refresh || c.refresh === !0) && Tc(c.targetID)
    }, Ic(document).on("click", ".vhv .vqm .vqy li:not(.vra li)", function () {
        Ic(this).addClass("vhr"), Ic(this).siblings().removeClass("vhr");
        Ic(this).is(".vhr") ? !0 : !1;
        Lc.choice.handle(Ic(this))
    }), Lc.multi = {}, Lc.multi.render = Lc.choice.render, Ic(document).on("click", ".vhv .vqm .vqy.vra li", function () {
        var a = Ic(this), b = a.is(".vhr") ? !0 : !1;
        return a.closest(".vra").is(".vrb") && b && !a.siblings("li.vhr").length ? !1 : (Ic(this).toggleClass("vhr"), b = b ? !1 : !0, Ic(this).data("state", b), void Lc.multi.handle(Ic(this)))
    }), Lc.multi.handle = function (a) {
        var b = a.data();
        b.state ? (b.target.removeClass(b.subOption.offClass).addClass(b.subOption.onClass), a.attr("title", b.subOption.onTitle)) : (b.target.removeClass(b.subOption.onClass).addClass(b.subOption.offClass), a.attr("title", b.subOption.offTitle)), Bb(), "undefined" != typeof b.callback && kc(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && Tc(b.targetID)
    }, Lc.button = {}, Lc.button.render = function (a, b, c) {
        var d = Lc.controlTitle.render(a.title, a.explainer), e = Ic("<div>"), f = Ic("<div>");
        return f.addClass("vrq").text(a.buttonText), e.addClass("vqq vqs").append(d).append(f), f.data(a), e
    }, Ic(document).on("click", ".vhv .vqm div.vrq", function () {
        Lc.button.handle(Ic(this))
    }), Lc.button.handle = function (a) {
        var b = a.data();
        b.context = _.isUndefined(b.context) ? variant : b.context, "undefined" != typeof b.callback && kc(b.callback, b.context, b.targetID)
    }, Lc.dropdown = {}, Lc.dropdown.render = function (a) {
        var b = Lc.controlTitle.render(a.title, a.explainer), c = Ic("<div>"), d = Ic("<div>"), e = Ic("<div>"),
            f = Ic("<span>"), g = Ic("<ul>");
        return c.addClass("vqq"), d.addClass("vrv").addClass("vry"), e.addClass("vrw"), g.addClass("vrx").attr("vrf", a.options.length), Ic(a.options).each(function (b, c) {
            var d = Ic("<li>"), e = "undefined" != typeof c.text ? c.text : "";
            "undefined" != typeof c.colourClass && (g.addClass("vqz"), d.addClass(c.colourClass)), "" !== e && ("undefined" != typeof a.attribute ? a.masterTarget.attr(a.attribute) === c.value && (d.addClass("vhr"), f.text(e)) : a.masterTarget.hasClass(c.value) && (f.text(e), d.addClass("vhr")), e = Ic("<span>").text(e)), d.data(a), d.data("subOption", c), d.append(e), g.append(d)
        }), c.append(b).append(g), e.append(f), d.append(e), d.append(g), c.append(d), c
    }, Lc.dropdown.handle = function (a) {
        var b, c = a.data();
        _.isUndefined(c.attribute) ? (b = _.pluck(c.options, "onClass"), _.each(b, function (a) {
            c.target.removeClass(a)
        }), c.target.addClass(c.subOption.onClass)) : (c.target.attr(c.attribute, c.subOption.value), Lc.dropdown.active.find(".vrw").text(c.subOption.text)), Lc.dropdown.closeActive(), Bb(), "undefined" != typeof c.callback && kc(c.callback, window, c.targetSelector), "undefined" != typeof c.refresh && ("true" === c.refresh || c.refresh === !0) && Tc(c.targetID)
    }, Ic(document).on("click", ".vhv .vqm .vrx li:not(.vra li)", function () {
        return Ic(this).addClass("vhr"), Ic(this).siblings().removeClass("vhr"), Lc.dropdown.handle(Ic(this)), !1
    }), Lc.dropdown.active = null, Ic(document).on("click touchstart", ".vrv", function (a) {
        var b = Ic(this), c = Ic(a.target);
        return Lc.dropdown.active && Lc.dropdown.active.is(b) && c.is(".vrw, .vrw *") ? Lc.dropdown.closeActive() : Lc.dropdown.open(b), !1
    }), Ic(document).on("click touchstart", function (a) {
        Lc.dropdown.closeActive()
    }), Lc.dropdown.open = function (a) {
        Lc.dropdown.closeActive(), Lc.dropdown.active = a, a.addClass("vhr")
    }, Lc.dropdown.closeActive = function () {
        null !== Lc.dropdown.active && (Lc.dropdown.active.removeClass("vhr"), Lc.dropdown.active = null)
    }, Ic(document).on("click", ".section-vgw", function () {
        Ic(".vqm").addClass("vhr"), Ic(".section-vgw").remove();
        var a = Ic(this).attr("vnt");
        return Ic(".viu, .viu ." + a + ", #veu ." + a).addClass("vrh"), nb(a), !1
    }), Ic(document).on("click", ".close-vqm, .viu, .vjc", function () {
        kb()
    }), Ic(document).on("contextmenu", ".vqm, .vni", function (a) {
        a.stopPropagation(), Ic(this).trigger("click")
    }), Ic(document).on("click", ".vca", function () {
        var a = Ic(this).attr("vbq");
        Ic("#veu ." + a).remove(), Ic(".viu ." + a).remove(), Ic("[vik=" + a + "]").remove(), Ic(this).parent().remove(), Tc(), Ic(".vem").find(".vaa").length ? Ic(".vem").removeClass("empty-vem") : Ic(".vem").addClass("empty-vem"), Ic(".viu .vnj").remove(), Hc(), Qb(), Rb()
    }), Ic(document).on("keydown", ".vaa span", function (a) {
        return 13 === a.keyCode ? (a.stopPropagation(), !1) : void 0
    }), Ic(document).on("keyup paste input", ".vaa span", function (a) {
        return 13 === a.keyCode ? (a.stopPropagation(), !1) : (ob(Ic(this).closest(".vaa")), Ca(Ic(this)), Bb(), !0)
    }), Ic(".vap").click(function () {
        Ic('.vfj [vit="vhz"]').remove(), Ic("#vbn").html(""), Ic.localStorage(Ac + ".vbo", ""), Ic(".vap").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function () {
            Ic(".vap").html("Clear Navs").removeClass("vak").addClass("val")
        }, 1500)
    }), Ic(".vao").click(function () {
        Ic('.vdm [vit="vhz"]').remove(), Ic.localStorage(Ac + ".vbm", ""), Ic(".vao").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function () {
            Ic(".vao").html("Clear Footers").removeClass("vak").addClass("val")
        }, 1500)
    }), Ic(".vaq").click(function () {
        var a;
        Ic("#vhl li").each(function () {
            var a, b = Ic(this).attr("viy");
            a = Ic.localStorage.io(Ac + ".state.veu." + b), a.remove(), a = Ic.localStorage.io(Ac + ".state.vem." + b), a.remove(), Ic(this).remove()
        }), Ic(".vfw div").remove(), Ic(".vfw").addClass("empty-vfw"), a = Ic.localStorage.io(Ac + ".state.veu"), a.remove(), a = Ic.localStorage.io(Ac + ".state.vem"), a.remove(), a = Ic.localStorage.io(Ac + ".vhj"), a.remove(), a = Ic.localStorage.io(Ac + ".vhh"), a.remove(), a = Ic.localStorage.io(Ac + ".vhg"), a.remove(), a = Ic.localStorage.io(Ac + ".vhk"), a.remove(), Ic(".vaq").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function () {
            Ic(".vaq").html("Clear Pages").removeClass("vak").addClass("val")
        }, 1500)
    }), Ic(".vpc").click(function () {
        Ic.localStorage(Ac + ".gallery.images", ""), setTimeout(function () {
            Ic(".vpc").html("Rebooting").removeClass("vak").addClass("val"), window.location.reload()
        }, 1500)
    }), Ic(".van").click(function () {
        Ic(".vfw div").remove(), Ic("#vhl li").remove(), window.localStorage.clear(), Ic(".van").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function () {
            Ic(".van").html("Rebooting").removeClass("vak").addClass("val"), window.location.reload()
        }, 1500)
    }), Ic(".viu").click(function () {
        Ic(".vjq").removeClass("vgq")
    }), Ic(".vjq .vex").click(function () {
        Ic(this).closest(".vjq").removeClass("vgq")
    }), Ic(".vgw").click(function () {
        Ic(".vkm").toggleClass("vme"), Ic(".vgw").toggleClass("vmg")
    }), Ic(".vjc").mouseenter(function () {
        Ic(".vkm").removeClass("vjz")
    }), Ic(".vlf li").not(_.isUndefined(wpTweaks["interface"]) ? "" : wpTweaks["interface"].sidebarButtons).click(function () {
        Ic(".vlf li").removeClass("vhr"), Ic(this).addClass("vhr");
        var a = Ic(this).index() + 1;
        Ic(".vlp").removeClass("vhr"), Ic(".vlp:nth-child(" + a + ")").addClass("vhr")
    }), Ic(".vac").click(function () {
        ub(), Ic(".vgm").click(), Ic(".vlv").toggleClass("vmf"), Ic(".vlv").find(".vho").removeClass("vhr"), Qb()
    }), Ic(".vma").click(function () {
        Ic(".vgi").toggleClass("vhr"), Ic(this).toggleClass("vhr")
    }), Ic(".vgh").click(function () {
        Ic(".vgi").removeClass("vhr"), Ic(".vma").removeClass("vhr")
    }), Ic(".vlm").click(function () {
        tb()
    }), Ic(".vho span").click(function () {
        Ic(this).closest(".vho").toggleClass("vhr"), setTimeout(function () {
            Qb()
        }, 301)
    }), Ic(document).on("click", ".vgl", function () {
        var a = Ic(this);
        a.hasClass("catch-double-click") ? Ic(".vad").toggleClass("vhr") : (a.addClass("catch-double-click"), setTimeout(function () {
            a.removeClass("catch-double-click")
        }, 300), rb(Ic(this).attr("vgv"))), Ic(".vem").removeClass("empty-vem"), Qb()
    }), Ic(".vev").each(function () {
        var a = (Ic(this).data("vjt"), Ic(this).attr("id"));
        Ic(".vfj").append('<li class="vfi" nav-id="' + a + '" vit="vir">' + Ic(this).attr("data-vjt") + "</li>")
    }), Ic("#vdk .vim").each(function () {
        var a = Ic(this).attr("vbr"), b = Ic(this).attr("id");
        Ic(".vdm").append('<li class="vdl" vid="' + b + '" vit="vir">' + a + "</li>")
    }), Ic(document).on("click", ".vgr", function () {
        Ic(".vib").toggleClass("vib vjb"), Ic(this).toggleClass("vhr vdv vgr")
    }), Ic(document).on("click", ".vdv", function () {
        Ic(".vjb").toggleClass("vib vjb"), Ic(this).toggleClass("vgr vdv vhr")
    }), Ic(document).on("click", ".vgh", function () {
        if (Ic(".vgh").removeClass("vhr"), Ic(this).addClass("vhr"), "*" === Ic(this).attr("vbp"))return Ic(".vgl").removeClass("vih"), void Ic(".vma span").text("All");
        Ic(".vgl").addClass("vih"), Ic('.vgl[vbp*="' + Ic(this).attr("vbp") + '"]').removeClass("vih");
        var a = Ic(this).text();
        Ic(".vma span").text(a), Qb()
    }), this.showSectionsSelector = wb, Ic(document).on("mouseenter", ".viu ul.slides:not(.vjx)", function (a) {
        var b = Ic(this);
        try {
            b.parent().flexslider("pause")
        } catch (c) {
        }
        try {
            b.closest(".slider").flexslider("pause")
        } catch (c) {
        }
        try {
            b.trigger("stop.owl.autoplay")
        } catch (c) {
        }
        try {
            b.closest(".slider").length && b.flickity("pausePlayer")
        } catch (c) {
        }
        b.addClass("paused"), Ic("#veu .vnx").removeClass("vnx"), yb(b.attr("vic")), Ic("#veu ." + b.attr("vic")).addClass("vnx")
    }), Ic(document).on("mouseleave", ".viu ul.slides.paused:not(.vjx)", function (a) {
        var b = Ic(this);
        try {
            b.parent().flexslider("play")
        } catch (c) {
        }
        try {
            b.closest(".slider").flexslider("play")
        } catch (c) {
        }
        try {
            b.closest(".slider").length && b.flickity("unpausePlayer")
        } catch (c) {
        }
        b.removeClass("paused")
    }), Hc = _.debounce(Bb, 400), -1 !== navigator.userAgent.indexOf("NT 6.") && Ic("head").append("<style>::-webkit-scrollbar { width: 8px; background-color: rgba(0,0,0,0); -webkit-border-radius: 100px; } ::-webkit-scrollbar-thumb:vertical { background: rgba(0,0,0,0.3); -webkit-border-radius: 100px; } </style>"), Ic(".vet").click(function () {
        Ic(".vet").addClass("vih"), Db()
    }), Ic(".vhd").click(function () {
        gb(!0), wb()
    }), Ic(document).on("blur keyup paste input", ".viu [contenteditable], .viu strong", function (a) {
        var b, c = Ic(this);
        "paste" === a.type && (a.preventDefault(), b = (a.originalEvent || a).clipboardData.getData("text/plain").replace(/\n/g, "<br>"), document.execCommand("insertHtml", !1, b)), c.children().length ? "" === c.html() && c.html("&nbsp;") : "" === c.text() && c.text(" "), Ic("#veu ." + c.attr("vic")).html(c.html()), Bb()
    }), Ic(document).on("keydown", ".viu [contenteditable]", function (a) {
        return 13 === a.keyCode ? ic(a) ? !0 : !1 : void 0
    }), Ic(document).on("keydown", '.viu [type="submit"]', function (a) {
        return 32 === a.keyCode ? jc(a) ? !0 : !1 : void 0
    }), Ic(document).on("blur keyup paste input", ".vir:not(nav,header,footer,[vqj],[nav-id])", function () {
        Ic(this).removeClass("vir").addClass("vhz")
    }), Ic(".viu").on("mouseenter", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption, td, th, label, address", function () {
        Ic(this).addClass("vdw")
    }), Ic(".viu").on("mouseleave", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption, td, th, .vnu, label, address", function () {
        Ic(this).removeClass("vdw")
    }), Ic(".viu").on("mouseenter", "section, header, footer", function () {
        _.isUndefined(Ic(this).attr("vic")) || mb(Ic(this).attr("vic"))
    }), Ic(document).on("mouseenter", '[vic] [class*="medium-"]', function (a) {
        Jc = Ic(this).attr("vic")
    }), Ic(document).on("mouseenter", '[vic] [class*="col-md-"]', function (a) {
        Jc = Ic(this).attr("vic")
    }), Ic(document).on("mouseenter", '[vic] [class*="col-sm-"]:not([class*="col-md-"])', function (a) {
        Jc = Ic(this).attr("vic")
    }), Ic(document).on("mouseenter", '[vic] [class*="col-xs-"]:not([class*="col-md-"])', function (a) {
        Jc = Ic(this).attr("vic")
    }), Ic(document).on("keyup", document, function (a) {
        _.isString(Jc) && a.ctrlKey && (219 === a.keyCode && I(Jc), 221 === a.keyCode && H(Jc))
    }), Ic(document).on("click", "a.vjx", function (a) {
        return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
    }), Ic("img").on("dragstart", function (a) {
        a.preventDefault()
    }), Ic(document).on("submit", ".viu form", function (a) {
        return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
    }), Ic(document).on("click", ".vjb", function () {
        var a;
        Ic(this).removeClass("vjb vib").addClass("vjm"), Ic("#veu ." + Ic(this).attr("vic")).removeClass("vjb vib").addClass("vjm"), Ic(this).attr("vjw") && (a = Ic(this).closest("nav, header, section, footer").find(Ic(this).attr("vjw")).attr("vic"), Ic(".viu ." + a).removeClass("vjb vib").addClass("vjm"), Ic("#veu ." + a).removeClass("vjb vib").addClass("vjm")), Ja(), N(), Bb()
    }), Ic(document).on("mouseleave", '.viu .vnu, .viu div[class*="col-"], .viu .embed-video-container, .viu .local-video-container, .viu .media-embed-container, .viu ul.slides, .viu .slider, .viu .voh', function (a) {
        window.mr_variant.removeIconButtons === !0 && Ic(this).find(".vnw").remove()
    }), this.initSizes = Qb, Ic(".vdf").on("click", function () {
        bc(), Ic.modal.close()
    }), Ic(".vda, .vdg, .vdb").keyup(function (a) {
        13 === a.keyCode && (bc(), Ic.modal.close())
    }), Ic(document).on("mouseenter", ".viu .embed-video-container:not(.voh .embed-video-container, .viu .slides > li > .embed-video-container), .viu .media-embed-container:not(.voh .media-embed-container, .viu .slides > li > .media-embed-container)", function () {
        var a, b = Ic('<div class="vnw"></div>'), c = Ic(this).find("iframe");
        uc.options.forEach(function (d) {
            c.is(d.selector) && (a = bb(d, !1, c.attr("vic")), b.append(a))
        }), c.closest(".embed-video-container, .media-embed-container").append(b)
    }), Ic(document).on("mouseenter", ".viu .local-video-container video:not(.voh .local-video-container video, .viu .slides > li > .local-video-container video, .viu .slides .owl-item > li > .local-video-container video)", function () {
        var a,
            b = Ic(this).closest(".local-video-container").find(".vnw").length ? Ic(this).closest(".local-video-container").find(".vnw") : Ic('<div class="vnw"></div>'),
            c = Ic(this);
        b.find('[vof="' + c.attr("vic") + '"]').length || (a = _b(c.attr("vic"), !1), b.append(a), c.closest(".local-video-container").append(b))
    }), Ic.fn.focusEnd = function () {
        Ic(this).focus();
        var a = Ic("<span />").appendTo(Ic(this)), b = a.get(0), c = null, d = null;
        return document.selection ? (c = document.body.createTextRange(), c.moveToElementText(b), c.select()) : window.getSelection && (c = document.createRange(), c.selectNode(b), d = window.getSelection(), d.removeAllRanges(), d.addRange(c)), a.remove(), this
    }, function (a, b) {
        a.fn.selectRange = function (a, c) {
            return c === b && (c = a), this.each(function () {
                if ("selectionStart" in this) this.selectionStart = a, this.selectionEnd = c; else if (this.setSelectionRange) this.setSelectionRange(a, c); else if (this.createTextRange) {
                    var b = this.createTextRange();
                    b.collapse(!0), b.moveEnd("character", c), b.moveStart("character", a), b.select()
                }
            })
        }
    }(window.jQuery), function (a, b) {
        a.fn.getCursorPosition = function () {
            var b = a(this).get(0), c = 0;
            if ("selectionStart" in b) c = b.selectionStart; else if ("selection" in document) {
                b.focus();
                var d = document.selection.createRange(), e = document.selection.createRange().text.length;
                d.moveStart("character", -b.value.length), c = d.text.length - e
            }
            return c
        }
    }(window.jQuery), this.getURLParameter = dc, this.importState = ya, this.variantAlert = Sb
}
window.mr_variant = new Variant;