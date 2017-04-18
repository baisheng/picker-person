require = function t(val, n, format) {
    /**
     * @param {string} o
     * @param {?} context
     * @return {?}
     */
    function r(o, context) {
        if (!n[o]) {
            if (!val[o]) {
                var unfoldSoak = "function" == typeof require && require;
                if (!context && unfoldSoak) {
                    return unfoldSoak(o, true);
                }
                if (a) {
                    return a(o, true);
                }
                /** @type {Error} */
                var err = new Error("Cannot find module '" + o + "'");
                throw err.code = "MODULE_NOT_FOUND", err;
            }
            var module_ = n[o] = {
                exports : {}
            };
            val[o][0].call(module_.exports, function(id) {
                var name = val[o][1][id];
                return r(name ? name : id);
            }, module_, module_.exports, t, val, n, format);
        }
        return n[o].exports;
    }
    var a = "function" == typeof require && require;
    /** @type {number} */
    var i = 0;
    for (;i < format.length;i++) {
        r(format[i]);
    }
    return r;
}({
    1 : [function(require, dataAndEvents, deepDataAndEvents) {
        window.app = function() {
            window.skel = require("skel");
            window.$ = window.jQuery = require("jquery");
            window.md5 = require("md5");
            require("jquery.touch");
            require("web");
            var self = (require("form"), require("tabs"), {
                touch : {
                    useTouch : true,
                    useMouse : true,
                    dragStartEvents : "dragStart tapAndHold",
                    dragPreventDefault : false,
                    scrollbars : true
                },
                registry : {
                    /**
                     * @param {number} key
                     * @return {?}
                     */
                    get : function(key) {
                        return localStorage.getItem(key);
                    },
                    /**
                     * @param {?} key
                     * @param {?} value
                     * @return {?}
                     */
                    set : function(key, value) {
                        return localStorage.setItem(key, value);
                    },
                    /**
                     * @param {?} key
                     * @return {?}
                     */
                    unset : function(key) {
                        return localStorage.removeItem(key);
                    }
                },
                dialog : {
                    $wrapper : null,
                    $title : null,
                    $message : null,
                    $actions : null,
                    /**
                     * @return {undefined}
                     */
                    init : function() {
                        var self = this;
                        this.$wrapper = $('<div id="dialog" class="modal" tabindex="-1"><section class="content"><h2 class="title"></h2><div class="message"></div><ul class="actions"></ul><span class="close do-close"></span></section></div>').on("mousedown", function(event) {
                            event.preventDefault();
                            event.stopPropagation();
                            if (!self.inPreshow()) {
                                self.hide();
                            }
                        }).on("click mousedown", ".content", function(event) {
                            event.stopPropagation();
                        }).on("click", ".do-close", function(event) {
                            event.preventDefault();
                            event.stopPropagation();
                            self.hide();
                        }).on("keydown", function(event) {
                            switch(event.keyCode) {
                                case 13:
                                    if (self.inPreshow()) {
                                        return;
                                    }
                                    self.$actions.find("li > span").first().not(".disabled").trigger("click");
                                    break;
                                case 27:
                                    if (self.inPreshow()) {
                                        return;
                                    }
                                    self.hide();
                            }
                        });
                        this.$title = this.$wrapper.find(".title");
                        this.$message = this.$wrapper.find(".message");
                        this.$actions = this.$wrapper.find(".actions");
                    },
                    /**
                     * @param {?} opt_attributes
                     * @return {undefined}
                     */
                    show : function(opt_attributes) {
                        var data;
                        var base = this;
                        /** @type {number} */
                        var s = 0;
                        this.$wrapper.appendTo(self.$body);
                        data = $.extend({
                            title : "Alert",
                            message : "Something happened apparently.",
                            html : false,
                            alt : false,
                            confirmation : false,
                            actions : {
                                /**
                                 * @return {undefined}
                                 */
                                Okay : function() {
                                    this.hide();
                                }
                            }
                        }, opt_attributes);
                        if (null === data.title) {
                            this.$title.hide();
                        } else {
                            this.$title.show().html(data.title);
                        }
                        if (data.message) {
                            this.$message.html(data.html ? data.message : "<p>" + data.message + "</p>");
                        } else {
                            this.$message.html("");
                        }
                        /** @type {number} */
                        s = 0;
                        $.each(data.actions, function(dataAndEvents, matcherFunction) {
                            $('<li><span class="button' + (0 == s++ ? " special" : "") + '">' + dataAndEvents + "</span></li>").appendTo(base.$actions).on("click", ".button", function(event) {
                                var $btn = $(this);
                                event.preventDefault();
                                event.stopPropagation();
                                if (!$btn.hasClass("disabled")) {
                                    matcherFunction.apply(base);
                                }
                            });
                        });
                        if (data.confirmation) {
                            base.$actions.find("li > span").first().addClass("disabled");
                            this.$message.append('<div class="confirmation"><input type="checkbox" id="dialog-confirmation" /><label for="dialog-confirmation">' + data.confirmation + "</label></div>");
                            this.$message.find('input[type="checkbox"]').on("change", function() {
                                var inputsPlugin = $(this);
                                var $wrapper = base.$actions.find("li > span").first();
                                if (inputsPlugin.prop("checked")) {
                                    $wrapper.removeClass("disabled");
                                } else {
                                    $wrapper.addClass("disabled");
                                }
                            });
                        }
                        if (data.alt) {
                            this.$wrapper.addClass("alt");
                        } else {
                            this.$wrapper.removeClass("alt");
                        }
                        this.$wrapper.removeClass("preshow");
                        window.setTimeout(function() {
                            base.$wrapper.addClass("visible");
                        }, 100);
                        window.setTimeout(function() {
                            base.$wrapper.focus();
                        }, 250);
                    },
                    /**
                     * @return {undefined}
                     */
                    hide : function() {
                        var _this = this;
                        this.$wrapper.removeClass("visible");
                        window.setTimeout(function() {
                            _this.$title.text("");
                            _this.$message.text("");
                            _this.$actions.children().remove();
                        }, 500);
                    },
                    /**
                     * @return {undefined}
                     */
                    preshow : function() {
                        var base = this;
                        this.$wrapper.appendTo(self.$body);
                        this.$wrapper.addClass("preshow");
                        window.setTimeout(function() {
                            base.$wrapper.addClass("visible");
                        }, 100);
                        window.setTimeout(function() {
                            base.$wrapper.focus();
                        }, 250);
                    },
                    /**
                     * @return {?}
                     */
                    inPreshow : function() {
                        return this.$wrapper.hasClass("preshow");
                    }
                },
                $window : null,
                $document : null,
                $head : null,
                $body : null,
                URL_PLACEHOLDER : "http://domain.tld/path",
                /**
                 * @param {number} x
                 * @param {?} value
                 * @return {?}
                 */
                round : function(x, value) {
                    /** @type {number} */
                    var precision = "number" == typeof value ? Math.pow(10, value) : 1;
                    return Math.round(x * precision) / precision;
                },
                /**
                 * @param {?} value
                 * @param {(Object|null)} callback
                 * @return {undefined}
                 */
                toDataURL : function(value, callback) {
                    var req;
                    /** @type {XMLHttpRequest} */
                    req = new XMLHttpRequest;
                    req.open("GET", value, true);
                    /** @type {string} */
                    req.responseType = "blob";
                    /**
                     * @param {?} e
                     * @return {undefined}
                     */
                    req.onload = function(e) {
                        var reader;
                        /** @type {FileReader} */
                        reader = new FileReader;
                        /**
                         * @return {undefined}
                         */
                        reader.onloadend = function() {
                            callback(reader.result);
                        };
                        reader.readAsDataURL(this.response);
                    };
                    req.send();
                },
                /**
                 * @param {string} value
                 * @param {boolean} dataAndEvents
                 * @return {?}
                 */
                markdownify : function(value, dataAndEvents) {
                    var buf = {
                        "&" : "&amp;",
                        "<" : "&lt;",
                        ">" : "&gt;",
                        '"' : "&quot;",
                        "'" : "&#39;"
                    };
                    /** @type {string} */
                    value = value.replace(/[&<>"']/g, function(off) {
                        return buf[off];
                    });
                    var i;
                    /** @type {(Array.<string>|null)} */
                    var elems = value.match(/\[(.+?)\]\(([^\[\]]+?)\)/g);
                    if (elems && elems.length > 0) {
                        for (i in elems) {
                            /** @type {string} */
                            value = value.replace(elems[i], elems[i].replace(/_/g, "%5F"));
                        }
                    }
                    return value = value.replace(/\[(.+?)\]\(([^\[\]]+?)\)/g, '<span class="--a" data-href="$2">$1</span>'), value = value.replace(/\*\*([^\*]+?)\*\*/g, '<span class="--strong">$1</span>'), value = value.replace(/__([^_]+?)__/g, '<span class="--strong">$1</span>'), value = value.replace(/\*([^\*]+?)\*/g, '<span class="--em">$1</span>'), value = value.replace(/_([^_]+?)_/g, '<span class="--em">$1</span>'), value = value.replace(/`([^`]+?)`/g, '<span class="--code">$1</span>'), value = value.replace(/~~([^~]+?)~~/g,
                        '<span class="--s">$1</span>'), value = value.replace(/==([^=]+?)==/g, '<span class="--mark">$1</span>'), dataAndEvents === true && (value = value.replace(/(^|\n)- (.+)/g, '$1<span class="--li">$2</span>')), value = value.replace(/%5F/g, "_");
                },
                /**
                 * @param {?} type
                 * @param {string} $2
                 * @return {?}
                 */
                hasMarkdown : function(type, $2) {
                    switch(type) {
                        case "link":
                            return!!$2.match(/\[(.+?)\]\(([^\[\]]+?)\)/g);
                        case "strong":
                            return!!$2.match(/\*\*([^\*]+?)\*\*/g) || !!$2.match(/__([^_]+?)__/g);
                        case "emphasis":
                            return!!$2.match(/\*([^\*]+?)\*/g) || !!$2.match(/_([^_]+?)_/g);
                        case "code":
                            return!!$2.match(/`([^`]+?)`/g);
                        case "strike":
                            return!!$2.match(/~~([^~]+?)~~/g);
                        case "highlight":
                            return!!$2.match(/==([^=]+?)==/g);
                        case "list-item":
                            return!!$2.match(/(^|\n)- (.+)/g);
                    }
                    return false;
                },
                /**
                 * @param {string} tail
                 * @param {number} scale
                 * @return {?}
                 */
                transparentize : function(tail, scale) {
                    var a;
                    var b;
                    var s;
                    return 1 == scale || ("#" != tail.charAt(0) || 7 != tail.length && 9 != tail.length) ? tail : (a = tail.substr(0, 7), b = 9 == tail.length ? parseInt(tail.substr(7, 2), 16) : 255, b = parseInt(b * scale).toString(16), 1 == b.length && (b = "0" + b), s = (a + b).toUpperCase());
                },
                /**
                 * @param {string} headBuffer
                 * @return {?}
                 */
                htmlaToHtml : function(headBuffer) {
                    return 9 == headBuffer.length ? headBuffer.substr(0, 7) : headBuffer;
                },
                /**
                 * @return {?}
                 */
                cleanHref : function() {
                    /** @type {string} */
                    var myUrl = window.location.href;
                    return myUrl.indexOf("?") !== -1 && (myUrl = myUrl.split("?")[0]), myUrl;
                },
                /**
                 * @return {?}
                 */
                cleanBaseHref : function() {
                    return window.location.protocol + "//" + window.location.hostname;
                },
                /**
                 * @param {(Object|null)} orgEvent
                 * @return {?}
                 */
                normalizeWheel : function(orgEvent) {
                    /** @type {number} */
                    var speed = 10;
                    /** @type {number} */
                    var lineHeight = 40;
                    /** @type {number} */
                    var pageHeight = 800;
                    /** @type {number} */
                    var _ = 0;
                    /** @type {number} */
                    var i = 0;
                    /** @type {number} */
                    var deltaX = 0;
                    /** @type {number} */
                    var deltaY = 0;
                    return "detail" in orgEvent ? i = orgEvent.detail : "wheelDelta" in orgEvent ? i = orgEvent.wheelDelta / -120 : "wheelDeltaY" in orgEvent && (i = orgEvent.wheelDeltaY / -120), "wheelDeltaX" in orgEvent && (_ = orgEvent.wheelDeltaX / -120), "axis" in orgEvent && (orgEvent.axis === orgEvent.HORIZONTAL_AXIS && (_ = i, i = 0)), deltaX = _ * speed, deltaY = i * speed, "deltaY" in orgEvent && (deltaY = orgEvent.deltaY), "deltaX" in orgEvent && (deltaX = orgEvent.deltaX), (deltaX || deltaY) &&
                    (orgEvent.deltaMode && (1 == orgEvent.deltaMode ? (deltaX *= lineHeight, deltaY *= lineHeight) : (deltaX *= pageHeight, deltaY *= pageHeight))), deltaX && (!_ && (_ = deltaX < 1 ? -1 : 1)), deltaY && (!i && (i = deltaY < 1 ? -1 : 1)), {
                        spinX : _,
                        spinY : i,
                        pixelX : deltaX,
                        pixelY : deltaY
                    };
                },
                /**
                 * @param {?} target
                 * @param {?} allBindingsAccessor
                 * @return {undefined}
                 */
                init : function(target, allBindingsAccessor) {
                    $(function() {
                        self.$window = $(window);
                        self.$document = $(document);
                        self.$head = $("head");
                        self.$body = $("body");
                        skel.breakpoints({
                            xlarge : "(max-width: 1680px)",
                            large : "(max-width: 1280px)",
                            medium : "(max-width: 980px)",
                            small : "(max-width: 736px)",
                            xsmall : "(max-width: 480px)",
                            xxsmall : "(max-width: 360px)",
                            short : "(max-height: 768px)"
                        });
                        $.event.special.destroyed = {
                            /**
                             * @param {(Object|null|string)} handleObj
                             * @return {undefined}
                             */
                            remove : function(handleObj) {
                                if (handleObj.handler) {
                                    handleObj.handler();
                                }
                            }
                        };
                        if (skel.vars.mobile) {
                            self.$body.addClass("is-touch");
                            /** @type {boolean} */
                            self.touch.useTouch = true;
                            /** @type {boolean} */
                            self.touch.useMouse = false;
                            /** @type {string} */
                            self.touch.dragStartEvents = "tapAndHold";
                            /**
                             * @param {?} dataAndEvents
                             * @return {?}
                             */
                            self.touch.dragPreventDefault = function(dataAndEvents) {
                                return dataAndEvents.inTapAndHold;
                            };
                            /** @type {boolean} */
                            self.touch.scrollbars = false;
                        } else {
                            self.$body.addClass("is-nonTouch");
                        }
                        if (skel.vars.IEVersion < 12) {
                            self.$body.addClass("is-ie");
                            if (skel.vars.IEVersion < 11) {
                                self.$body.addClass("is-ie10");
                            }
                        }
                        self.$window.on("load", function() {
                            window.setTimeout(function() {
                                self.$body.removeClass("is-loading");
                            }, 100);
                        });
                        if ("admin" != self.$body.attr("id")) {
                            $("form").form();
                        }
                        self.dialog.init();
                        self.$body.on("click", "a.behavior-long-wait", function(event) {
                            var $link = $(this);
                            var link = $link.attr("href");
                            event.preventDefault();
                            event.stopPropagation();
                            self.dialog.preshow();
                            window.setTimeout(function() {
                                window.location.href = link;
                            }, 750);
                        });
                        self.$body.on("click", "a.behavior-download", function(event) {
                            var $link = $(this);
                            var link = $link.attr("href");
                            event.preventDefault();
                            event.stopPropagation();
                            self.dialog.preshow();
                            window.setTimeout(function() {
                                window.location.href = link;
                                self.dialog.show({
                                    title : "Downloading Zip",
                                    message : "Preparing your download. Please wait a moment.",
                                    actions : {
                                        /**
                                         * @return {undefined}
                                         */
                                        Dismiss : function() {
                                            this.hide();
                                        }
                                    }
                                });
                            }, 750);
                        });
                        self.$body.on("click", "a.behavior-requires-confirmation", function(event) {
                            var $elem = $(this);
                            var link = $elem.attr("href");
                            var action = $elem.text();
                            var actions = {};
                            event.preventDefault();
                            event.stopPropagation();
                            /**
                             * @return {undefined}
                             */
                            actions[action] = function() {
                                window.location.href = link;
                            };
                            /**
                             * @return {undefined}
                             */
                            actions.Cancel = function() {
                                this.hide();
                            };
                            self.dialog.show({
                                title : "Are you sure?",
                                message : null,
                                actions : actions
                            });
                        });
                        self.$body.on("click", "a.behavior-requires-double-confirmation", function(event) {
                            var $elem = $(this);
                            var link = $elem.attr("href");
                            var action = $elem.text();
                            var actions = {};
                            event.preventDefault();
                            event.stopPropagation();
                            /**
                             * @return {undefined}
                             */
                            actions[action] = function() {
                                window.location.href = link;
                            };
                            /**
                             * @return {undefined}
                             */
                            actions.Cancel = function() {
                                this.hide();
                            };
                            self.dialog.show({
                                title : "Are you sure?",
                                message : null,
                                confirmation : "Yes, I am sure I want to do this.",
                                actions : actions
                            });
                        });
                        self.$body.on("click", ".behavior-requires-pro-plus", function(event) {
                            $(this);
                            event.preventDefault();
                            event.stopPropagation();
                            self.dialog.show({
                                title : "Upgrade to Pro Plus",
                                message : "Upgrade to the <strong>Pro Plus</strong> plan and get access to this and many other awesome features.",
                                actions : {
                                    /**
                                     * @return {undefined}
                                     */
                                    "Learn More" : function() {
                                        this.hide();
                                        /** @type {string} */
                                        window.location.href = "/dashboard/plan";
                                    },
                                    /**
                                     * @return {undefined}
                                     */
                                    "Maybe Later" : function() {
                                        this.hide();
                                    }
                                }
                            });
                        });
                    });
                }
            });
            return self;
        }();
        app.init();
    }, {
        form : "form",
        jquery : "jquery",
        "jquery.touch" : "jquery.touch",
        md5 : "md5",
        skel : "skel",
        tabs : "tabs",
        web : "web"
    }],
    2 : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {(Object|null)} el
         * @return {undefined}
         */
        function init(el) {
            var element;
            var arg;
            var basePrototype;
            var curValue;
            var r;
            var that;
            var self;
            var a;
            var config;
            var color = this;
            /** @type {boolean} */
            this.alpha = "1" == el.data("alpha");
            el.removeData("alpha").removeAttr("data-alpha");
            /** @type {boolean} */
            this.optional = "1" == el.data("optional");
            if (this.optional) {
                el.attr("placeholder", "(none)");
            }
            el.attr("type", "text").attr("data-manual", "1").data("manual", "1").attr("autocomplete", "off").attr("autocorrect", "off").attr("autocapitalize", "off").attr("spellcheck", "false").attr("maxlength", this.alpha ? 9 : 7).on("focus", function() {
                element.addClass("focus");
            }).on("blur", function() {
                element.removeClass("focus");
            });
            that = {
                $input : null,
                $swatch : null,
                currentValue : "#FFFFFF",
                /**
                 * @param {(Object|null)} target
                 * @return {undefined}
                 */
                init : function(target) {
                    var data = this;
                    /** @type {(Object|null)} */
                    this.$input = target;
                    if (color.optional) {
                        /** @type {string} */
                        this.currentValue = "";
                    }
                    this.$swatch = $('<div class="swatch" />').insertBefore(this.$input);
                    this.$input.on("change input", function(dataAndEvents, deepDataAndEvents) {
                        if (!deepDataAndEvents) {
                            var e;
                            var hsv;
                            var key = data.$input.val();
                            if ("" == key && color.optional) {
                                /** @type {boolean} */
                                r = true;
                                /** @type {number} */
                                a.pos = 0;
                                /** @type {number} */
                                self.pos[0] = 100;
                                /** @type {number} */
                                self.pos[1] = 0;
                                if (color.alpha) {
                                    /** @type {number} */
                                    config.pos = 100;
                                }
                            } else {
                                if (r = false, e = color.hexaToRgba(key), !e) {
                                    return;
                                }
                                that.currentValue = key.toUpperCase();
                                hsv = color.rgbaToHsva(e.r, e.g, e.b, e.a);
                                /** @type {number} */
                                a.pos = 100 * hsv.h;
                                /** @type {number} */
                                self.pos[0] = 100 * hsv.s;
                                /** @type {number} */
                                self.pos[1] = 100 * (1 - hsv.v);
                                if (color.alpha) {
                                    /** @type {number} */
                                    config.pos = 100 * hsv.a;
                                } else {
                                    /** @type {number} */
                                    config.pos = 0;
                                }
                            }
                            if (color.alpha) {
                                config.sync();
                            }
                            a.sync();
                            self.sync();
                            data.sync();
                        }
                    }).on("blur", function() {
                        data.$input.val(that.currentValue);
                    });
                },
                /**
                 * @return {?}
                 */
                sync : function() {
                    if (r) {
                        return element.addClass("empty"), this.$swatch.css("background-color", ""), that.currentValue = "", this.$input.val("").trigger("change", true), void self.redraw();
                    }
                    element.removeClass("empty");
                    if (a.changed()) {
                        self.redraw();
                    }
                    var hsv = {
                        h : null,
                        s : null,
                        v : null,
                        a : null
                    };
                    /** @type {number} */
                    hsv.h = a.pos / 100;
                    /** @type {number} */
                    hsv.s = self.pos[0] / 100;
                    /** @type {number} */
                    hsv.v = 1 - self.pos[1] / 100;
                    if (color.alpha) {
                        /** @type {number} */
                        hsv.a = config.pos / 100;
                    } else {
                        /** @type {number} */
                        hsv.a = 1;
                    }
                    var swatch = color.hsvaToRgba(hsv.h, hsv.s, hsv.v, hsv.a);
                    var value = color.rgbaToHexa(swatch.r, swatch.g, swatch.b, swatch.a);
                    /** @type {string} */
                    var meterPos = "rgba(" + swatch.r + "," + swatch.g + "," + swatch.b + "," + swatch.a / 255 + ")";
                    this.$swatch.css("background-color", meterPos);
                    that.currentValue = value;
                    if (this.$input.val() != value) {
                        this.$input.val(value).trigger("change", true);
                    }
                }
            };
            element = $('<div class="form-color ' + (el.attr("class") ? el.attr("class") : "") + '"><div class="swatch"></div><div class="content"><div class="inner"><div class="hueSlider"><div class="cursor"></div><canvas></canvas></div><div class="picker"><div class="cursor"></div><canvas></canvas></div>' + function() {
                    return color.alpha ? '<div class="alphaSlider"><div class="cursor"></div><canvas></canvas></div>' : "";
                }() + "</div></div></div>").insertAfter(el);
            el.prependTo(element);
            element.find(".content").on("mousedown touchstart", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            arg = element.find(".picker");
            self = {
                $cursor : null,
                $wrapper : null,
                $canvas : null,
                canvas : null,
                context : null,
                imageData : null,
                pos : [0, 0],
                /**
                 * @return {undefined}
                 */
                sync : function() {
                    this.$cursor.css("left", this.pos[0] + "%").css("top", this.pos[1] + "%");
                },
                /**
                 * @param {(Object|null)} target
                 * @return {undefined}
                 */
                init : function(target) {
                    var self = this;
                    /** @type {(Object|null)} */
                    this.$wrapper = target;
                    this.$canvas = this.$wrapper.find("canvas").css("position", "absolute").css("top", 0).css("left", 0).css("width", "100%").css("height", "100%").css("cursor", "crosshair");
                    this.canvas = this.$canvas[0];
                    /** @type {number} */
                    this.canvas.width = 100;
                    /** @type {number} */
                    this.canvas.height = 100;
                    this.context = this.canvas.getContext("2d");
                    this.imageData = this.context.getImageData(0, 0, 100, 100);
                    this.$cursor = this.$wrapper.find(".cursor");
                    this.$canvas.touch({
                        useMouse : app.touch.useMouse,
                        useTouch : app.touch.useTouch,
                        trackDocument : true,
                        trackDocumentNormalize : true,
                        dragThreshold : 0,
                        dragDelay : 0,
                        preventDefault : {
                            drag : true
                        }
                    }).on("tap dragStart drag", function(dataAndEvents, evt) {
                        /** @type {number} */
                        self.pos[0] = Math.round(evt.ex / self.$canvas.width() * 100);
                        /** @type {number} */
                        self.pos[1] = Math.round(evt.ey / self.$canvas.height() * 100);
                        /** @type {boolean} */
                        r = false;
                        self.sync();
                        that.sync();
                    });
                    this.redraw();
                },
                /**
                 * @return {undefined}
                 */
                redraw : function() {
                    var aux;
                    var fn;
                    var bulk;
                    var diff;
                    var index;
                    var rgba;
                    /** @type {number} */
                    aux = 0;
                    for (;aux < 100;aux++) {
                        /** @type {number} */
                        fn = 0;
                        for (;fn < 100;fn++) {
                            /** @type {number} */
                            bulk = fn;
                            /** @type {number} */
                            diff = 99 - aux;
                            rgba = color.hsvaToRgba(a.pos / 100, fn / 100, aux / 100, 1);
                            /** @type {number} */
                            index = 4 * (bulk + 100 * diff);
                            this.imageData.data[index + 0] = rgba.r;
                            this.imageData.data[index + 1] = rgba.g;
                            this.imageData.data[index + 2] = rgba.b;
                            /** @type {number} */
                            this.imageData.data[index + 3] = 255;
                        }
                    }
                    this.context.putImageData(this.imageData, 0, 0);
                    this.sync();
                }
            };
            basePrototype = element.find(".hueSlider");
            a = {
                $cursor : null,
                $wrapper : null,
                $canvas : null,
                canvas : null,
                context : null,
                imageData : null,
                pos : 0,
                lastPos : 0,
                /**
                 * @return {?}
                 */
                changed : function() {
                    return this.pos != this.lastPos;
                },
                /**
                 * @return {undefined}
                 */
                sync : function() {
                    this.$cursor.css("top", this.pos + "%");
                },
                /**
                 * @param {(Object|null)} target
                 * @return {undefined}
                 */
                init : function(target) {
                    var self = this;
                    /** @type {(Object|null)} */
                    this.$wrapper = target;
                    this.$canvas = this.$wrapper.find("canvas").css("position", "absolute").css("top", 0).css("left", 0).css("width", "100%").css("height", "100%").css("cursor", "crosshair").appendTo(this.$wrapper);
                    this.canvas = this.$canvas[0];
                    /** @type {number} */
                    this.canvas.width = 1;
                    /** @type {number} */
                    this.canvas.height = 100;
                    this.context = this.canvas.getContext("2d");
                    this.imageData = this.context.getImageData(0, 0, 1, 100);
                    this.$cursor = this.$wrapper.find(".cursor");
                    this.$canvas.touch({
                        useMouse : app.touch.useMouse,
                        useTouch : app.touch.useTouch,
                        trackDocument : true,
                        trackDocumentNormalize : true,
                        dragThreshold : 0,
                        dragDelay : 0,
                        preventDefault : {
                            drag : true
                        }
                    }).on("tap dragStart drag", function(dataAndEvents, evt) {
                        /** @type {number} */
                        self.lastPos = self.pos;
                        /** @type {number} */
                        self.pos = Math.round(evt.ey / self.$canvas.height() * 100);
                        /** @type {boolean} */
                        r = false;
                        self.sync();
                        that.sync();
                    });
                    this.redraw();
                },
                /**
                 * @return {undefined}
                 */
                redraw : function() {
                    var mid;
                    var low;
                    var high;
                    var index;
                    var actual;
                    /** @type {number} */
                    mid = 0;
                    for (;mid < 100;mid++) {
                        actual = color.hsvaToRgba(mid / 100, 1, 1, 1);
                        /** @type {number} */
                        high = mid;
                        /** @type {number} */
                        low = 0;
                        for (;low < 1;low++) {
                            /** @type {number} */
                            index = 4 * (low + 1 * high);
                            this.imageData.data[index + 0] = actual.r;
                            this.imageData.data[index + 1] = actual.g;
                            this.imageData.data[index + 2] = actual.b;
                            this.imageData.data[index + 3] = actual.a;
                        }
                    }
                    this.context.putImageData(this.imageData, 0, 0);
                    this.sync();
                    this.lastPos = this.pos;
                }
            };
            curValue = element.find(".alphaSlider");
            config = {
                $cursor : null,
                $wrapper : null,
                $canvas : null,
                canvas : null,
                context : null,
                imageData : null,
                pos : 0,
                lastPos : 0,
                /**
                 * @return {?}
                 */
                changed : function() {
                    return this.pos != this.lastPos;
                },
                /**
                 * @return {undefined}
                 */
                sync : function() {
                    this.$cursor.css("left", this.pos + "%");
                },
                /**
                 * @param {(Object|null)} target
                 * @return {undefined}
                 */
                init : function(target) {
                    var self = this;
                    /** @type {(Object|null)} */
                    this.$wrapper = target;
                    this.$canvas = this.$wrapper.find("canvas").css("position", "absolute").css("top", 0).css("left", 0).css("width", "100%").css("height", "100%").css("cursor", "crosshair").appendTo(this.$wrapper);
                    this.canvas = this.$canvas[0];
                    /** @type {number} */
                    this.canvas.width = 100;
                    /** @type {number} */
                    this.canvas.height = 1;
                    this.context = this.canvas.getContext("2d");
                    this.imageData = this.context.getImageData(0, 0, 100, 1);
                    this.$cursor = this.$wrapper.find(".cursor");
                    this.$canvas.touch({
                        useMouse : app.touch.useMouse,
                        useTouch : app.touch.useTouch,
                        trackDocument : true,
                        trackDocumentNormalize : true,
                        dragThreshold : 0,
                        dragDelay : 0,
                        preventDefault : {
                            drag : true
                        }
                    }).on("tap dragStart drag", function(dataAndEvents, evt) {
                        /** @type {number} */
                        self.lastPos = self.pos;
                        /** @type {number} */
                        self.pos = Math.round(evt.ex / self.$canvas.width() * 100);
                        /** @type {boolean} */
                        r = false;
                        self.sync();
                        that.sync();
                    });
                    this.redraw();
                },
                /**
                 * @return {undefined}
                 */
                redraw : function() {
                    var thepicture;
                    var firstNum;
                    var p;
                    var index;
                    /** @type {number} */
                    thepicture = 0;
                    for (;thepicture < 100;thepicture++) {
                        /** @type {number} */
                        p = thepicture;
                        /** @type {number} */
                        firstNum = 0;
                        for (;firstNum < 1;firstNum++) {
                            /** @type {number} */
                            index = 4 * (firstNum + 1 * p);
                            /** @type {number} */
                            this.imageData.data[index + 0] = 255;
                            /** @type {number} */
                            this.imageData.data[index + 1] = 255;
                            /** @type {number} */
                            this.imageData.data[index + 2] = 255;
                            /** @type {number} */
                            this.imageData.data[index + 3] = p / 100 * 255;
                        }
                    }
                    this.context.putImageData(this.imageData, 0, 0);
                    this.sync();
                    this.lastPos = this.pos;
                }
            };
            that.init(el);
            self.init(arg);
            a.init(basePrototype);
            if (this.alpha) {
                config.init(curValue);
            }
            el.triggerHandler("change");
        }
        /**
         * @param {number} r
         * @param {number} g
         * @param {number} b
         * @param {number} a
         * @return {?}
         */
        init.prototype.rgbaToHsva = function(r, g, b, a) {
            var H;
            /** @type {number} */
            var max = Math.max(r, g, b);
            /** @type {number} */
            var min = Math.min(r, g, b);
            /** @type {number} */
            var d = max - min;
            /** @type {number} */
            var scale = 0 === max ? 0 : d / max;
            /** @type {number} */
            var v = max / 255;
            /** @type {number} */
            a = a / 255;
            switch(max) {
                case min:
                    /** @type {number} */
                    H = 0;
                    break;
                case r:
                    /** @type {number} */
                    H = g - b + d * (g < b ? 6 : 0);
                    H /= 6 * d;
                    break;
                case g:
                    /** @type {number} */
                    H = b - r + 2 * d;
                    H /= 6 * d;
                    break;
                case b:
                    /** @type {number} */
                    H = r - g + 4 * d;
                    H /= 6 * d;
            }
            return{
                h : H,
                s : scale,
                v : v,
                a : a
            };
        };
        /**
         * @param {string} propName
         * @return {?}
         */
        init.prototype.hexaToRgba = function(propName) {
            var j;
            var x;
            var y;
            /** @type {number} */
            var p1 = 255;
            if ("#" != propName.charAt(0)) {
                return null;
            }
            if (propName = propName.substr(1), 6 == propName.length) {
                if (j = parseInt(propName.substr(0, 2), 16), x = parseInt(propName.substr(2, 2), 16), y = parseInt(propName.substr(4, 2), 16), isNaN(j) || (isNaN(x) || isNaN(y))) {
                    return null;
                }
            } else {
                if (8 != propName.length || !this.alpha) {
                    return null;
                }
                if (j = parseInt(propName.substr(0, 2), 16), x = parseInt(propName.substr(2, 2), 16), y = parseInt(propName.substr(4, 2), 16), p1 = parseInt(propName.substr(6, 2), 16), isNaN(j) || (isNaN(x) || (isNaN(y) || isNaN(p1)))) {
                    return null;
                }
            }
            return{
                r : j,
                g : x,
                b : y,
                a : p1
            };
        };
        /**
         * @param {?} dstUri
         * @param {?} srcUri
         * @param {?} stringBuffer
         * @param {?} inError
         * @return {?}
         */
        init.prototype.rgbaToHexa = function(dstUri, srcUri, stringBuffer, inError) {
            var a;
            var b;
            var c;
            var min;
            return a = dstUri.toString(16), b = srcUri.toString(16), c = stringBuffer.toString(16), min = inError.toString(16), 1 == a.length && (a = "0" + a), 1 == b.length && (b = "0" + b), 1 == c.length && (c = "0" + c), 1 == min.length && (min = "0" + min), this.alpha && "ff" != min || (min = ""), "#" + (a + b + c + min).toUpperCase();
        };
        /**
         * @param {number} limit
         * @param {number} s
         * @param {number} v
         * @param {number} dataAndEvents
         * @return {?}
         */
        init.prototype.hsvaToRgba = function(limit, s, v, dataAndEvents) {
            var w;
            var n;
            var r;
            var i;
            var f;
            var p;
            var b;
            var tmp;
            switch(i = Math.floor(6 * limit), f = 6 * limit - i, p = v * (1 - s), b = v * (1 - f * s), tmp = v * (1 - (1 - f) * s), i % 6) {
                case 0:
                    /** @type {number} */
                    w = v;
                    /** @type {number} */
                    n = tmp;
                    /** @type {number} */
                    r = p;
                    break;
                case 1:
                    /** @type {number} */
                    w = b;
                    /** @type {number} */
                    n = v;
                    /** @type {number} */
                    r = p;
                    break;
                case 2:
                    /** @type {number} */
                    w = p;
                    /** @type {number} */
                    n = v;
                    /** @type {number} */
                    r = tmp;
                    break;
                case 3:
                    /** @type {number} */
                    w = p;
                    /** @type {number} */
                    n = b;
                    /** @type {number} */
                    r = v;
                    break;
                case 4:
                    /** @type {number} */
                    w = tmp;
                    /** @type {number} */
                    n = p;
                    /** @type {number} */
                    r = v;
                    break;
                case 5:
                    /** @type {number} */
                    w = v;
                    /** @type {number} */
                    n = p;
                    /** @type {number} */
                    r = b;
            }
            return{
                r : Math.round(255 * w),
                g : Math.round(255 * n),
                b : Math.round(255 * r),
                a : Math.round(255 * dataAndEvents)
            };
        };
        /**
         * @return {?}
         */
        $.fn.formColor = function() {
            var emptyJ = $(this);
            if (0 == this.length) {
                return emptyJ;
            }
            if (this.length > 1) {
                /** @type {number} */
                var i = 0;
                for (;i < this.length;i++) {
                    $(this[i]).formColor();
                }
                return emptyJ;
            }
            return "_formColor" in this[0] || (this[0]._formColor = new init(emptyJ)), emptyJ;
        };
        if ("undefined" != typeof module) {
            /** @type {function ((Object|null)): undefined} */
            module.exports = init;
        }
    }, {}],
    formGroup : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {(Object|null)} element
         * @param {(Object|null)} form
         * @return {undefined}
         */
        function init(element, form) {
            var objects;
            var self = this;
            /** @type {number} */
            this.count = 1E3;
            /** @type {Array} */
            this.states = [];
            /** @type {boolean} */
            this.isDragging = false;
            /** @type {boolean} */
            this.hasDropTarget = false;
            this.id = element.attr("id");
            element.removeAttr("id");
            this.name = element.attr("name");
            element.removeAttr("name");
            this.title = element.data("title");
            element.removeData("title").removeAttr("data-title");
            objects = element.data("value");
            element.removeData("value").removeAttr("data-value");
            /** @type {(Object|null)} */
            this.form = form;
            this.min = element.data("min");
            element.removeData("min").removeAttr("data-min");
            this.max = element.data("max");
            element.removeData("max").removeAttr("data-max");
            /** @type {boolean} */
            this.collapse = "1" == element.data("collapse");
            element.removeData("collapse").removeAttr("collapse");
            /** @type {boolean} */
            this.collapseSingular = "1" == element.data("collapse-singular");
            element.removeData("collapse-singular").removeAttr("collapse-singular");
            if (element.data("clone-fields")) {
                this.cloneFields = element.data("clone-fields").split(",");
                element.removeData("clone-fields").removeAttr("clone-fields");
            } else {
                /** @type {null} */
                this.cloneFields = null;
            }
            this.$template = $('<div class="item"><div class="header"><span class="title"></span><div class="do-delete"></div></div><div class="inner"></div></div>');
            element.children().appendTo(this.$template.children(".inner"));
            this.$placeholder = $('<div class="placeholder" />');
            /** @type {Object} */
            this.$wrapper = element;
            this.$wrapper.attr("id", this.id).attr("name", this.name).on("blur", "input, select, textarea", function(dataAndEvents) {
                self.$wrapper.trigger("blur");
            }).on("input", "select", function(dataAndEvents) {
                self.change();
            }).on("change.title", '[name^="' + this.title + '_"]', function() {
                var $e = $(this);
                var rule = $e.parents(".item");
                var pauseText = $e.val();
                if (pauseText) {
                    if ("SELECT" == this.tagName) {
                        pauseText = $e.find('option[value="' + pauseText + '"]').text();
                    }
                } else {
                    /** @type {string} */
                    pauseText = "(untitled)";
                }
                rule.find(".header .title").text(pauseText);
            }).on("click", ".item .footer .do-delete", function() {
                var submit = $(this);
                var model = submit.parents(".item");
                self.remove(self.itemIndex(model));
            });
            this.$items = $('<div class="items"></div>').appendTo(this.$wrapper).touch({
                useMouse : app.touch.useMouse,
                useTouch : app.touch.useTouch,
                dragThreshold : 0,
                dragDelay : 0,
                tapAndHoldDelay : 300,
                trackDocument : true,
                delegateSelector : ".item, .item > .inner",
                dropFilter : ".item",
                preventDefault : {
                    drag : app.touch.dragPreventDefault
                }
            }).on("click", ".item", function(event) {
                event.stopPropagation();
            }).on("tap dragStart tapAndHold", ".item > .inner", function(event, dataAndEvents) {
                event.stopPropagation();
            }).on("click", ".do-delete", function(event, dataAndEvents) {
                var submit = $(this);
                var model = submit.parents(".item");
                event.stopPropagation();
                self.remove(self.itemIndex(model));
            }).on("tap", ".item", function(event, dataAndEvents) {
                var def = $(this);
                event.stopPropagation();
                self.toggle(self.itemIndex(def));
                self.$items.trigger("click");
            }).on(app.touch.dragStartEvents, ".item", function(event, t) {
                var elem = $(this);
                var size = app.$document.scrollLeft();
                var parentTopPadding = app.$document.scrollTop();
                var left = elem[0].getBoundingClientRect().width;
                var maxHeight = elem[0].getBoundingClientRect().height;
                event.stopPropagation();
                /** @type {boolean} */
                self.isDragging = true;
                self.$wrapper.addClass("is-dragging");
                if ("android" == skel.vars.os) {
                    app.$body.css("overflow", "hidden");
                }
                self.$placeholder.css("width", left + "px").css("height", maxHeight + "px").insertBefore(elem);
                elem.css("width", left + "px").css("height", maxHeight + "px").addClass("is-dragging").css("left", t.x - t.ex - size + "px").css("top", t.y - t.ey - parentTopPadding + "px");
            }).on("drag", ".item", function(event, vars) {
                var activeView = $(this);
                var size = app.$document.scrollLeft();
                var parentLeftPadding = app.$document.scrollTop();
                if (activeView.hasClass("is-dragging")) {
                    if (self.isDragging) {
                        event.stopPropagation();
                        activeView.css("left", vars.x - vars.start.ex - size + "px").css("top", vars.y - vars.start.ey - parentLeftPadding + "px");
                    }
                }
            }).on("dragEnd tapAndHoldEnd", ".item", function(event, dataAndEvents) {
                var $checkbox = $(this);
                if ($checkbox.hasClass("is-dragging")) {
                    if (self.isDragging) {
                        event.stopPropagation();
                        /** @type {boolean} */
                        self.isDragging = false;
                        self.$wrapper.removeClass("is-dragging");
                        if ("android" == skel.vars.os) {
                            app.$body.css("overflow", "");
                        }
                        self.$placeholder.detach().css("width", "").css("height", "");
                        $checkbox.removeClass("is-dragging").css("left", "").css("top", "").css("width", "").css("height", "");
                        /** @type {boolean} */
                        self.hasDropTarget = false;
                        $checkbox.removeClass("is-dropTarget").removeClass("after").removeClass("before");
                    }
                }
            }).on("dragEnter", ".item", function(event, ev) {
                var divSpan = $(this);
                var $target = $(ev.element);
                if (divSpan.hasClass("is-dragging")) {
                    if (self.isDragging) {
                        event.stopPropagation();
                        /** @type {boolean} */
                        self.hasDropTarget = true;
                        $target.add($target.siblings()).removeClass("is-dropTarget").removeClass("after").removeClass("before");
                        $target.addClass("is-dropTarget");
                    }
                }
            }).on("dragOver", ".item", function(event, evt) {
                var divSpan = $(this);
                var that = $(evt.element);
                if (divSpan.hasClass("is-dragging")) {
                    if (self.isDragging) {
                        event.stopPropagation();
                        if (evt.ey < Math.ceil(that.outerHeight() / 2)) {
                            that.addClass("before").removeClass("after");
                        } else {
                            that.addClass("after").removeClass("before");
                        }
                    }
                }
            }).on("dragLeave", ".item", function(event, ev) {
                var divSpan = $(this);
                var $field = $(ev.element);
                if (divSpan.hasClass("is-dragging")) {
                    if (self.isDragging) {
                        event.stopPropagation();
                        /** @type {boolean} */
                        self.hasDropTarget = false;
                        $field.removeClass("is-dropTarget");
                    }
                }
            }).on("drop", ".item", function(event, ev) {
                var from;
                var e = $(this);
                var parent = $(ev.element);
                if (e.hasClass("is-dragging")) {
                    if (self.isDragging) {
                        if (self.hasDropTarget) {
                            event.stopPropagation();
                            /** @type {boolean} */
                            self.hasDropTarget = false;
                            /** @type {number} */
                            from = parent.hasClass("after") ? 1 : -1;
                            parent.removeClass("is-dropTarget").removeClass("after").removeClass("before");
                            self.move(e, parent, from);
                        }
                    }
                }
            });
            this.$footer = $('<div class="footer"><ul class="actions fit"><li><span class="button fit do-add">Add</span></li></ul></div>').appendTo(this.$wrapper);
            this.$footer.on("click", ".do-add", function(types) {
                types.preventDefault();
                self.add();
            }).on("click", ".do-dump", function(event) {
                event.stopPropagation();
                event.preventDefault();
            });
            this.sync();
            if (objects) {
                this.val(JSON.parse(objects));
            }
        }
        /**
         * @param {(Object|null)} item
         * @return {?}
         */
        init.prototype.itemIndex = function(item) {
            return this.$wrapper.find(".item").index(item);
        };
        /**
         * @param {number} key
         * @return {?}
         */
        init.prototype.get = function(key) {
            return this.$item.eq(key);
        };
        /**
         * @return {?}
         */
        init.prototype.length = function() {
            return this.$items.children(".item").length;
        };
        /**
         * @param {number} key
         * @return {undefined}
         */
        init.prototype.toggle = function(key) {
            if (this.states[key] === true) {
                this.get(key).removeClass("collapsed");
                /** @type {boolean} */
                this.states[key] = false;
                if (this.collapseSingular) {
                    this.collapseAll(key);
                }
            } else {
                this.get(key).addClass("collapsed");
                /** @type {boolean} */
                this.states[key] = true;
            }
        };
        /**
         * @param {number} y
         * @return {undefined}
         */
        init.prototype.collapseAll = function(y) {
            /** @type {number} */
            var key = 0;
            var len = this.length();
            /** @type {number} */
            key = 0;
            for (;key < len;key++) {
                if (!("undefined" != typeof y && key == y)) {
                    this.get(key).addClass("collapsed");
                    /** @type {boolean} */
                    this.states[key] = true;
                }
            }
        };
        /**
         * @param {(Object|null)} o
         * @param {number} item
         * @param {number} from
         * @return {undefined}
         */
        init.prototype.move = function(o, item, from) {
            var c;
            var n;
            var i;
            var index;
            if ("object" == typeof o ? (c = o, i = this.itemIndex(o)) : (c = this.get(o), i = o), "object" == typeof item ? (n = item, index = this.itemIndex(item)) : (n = this.get(item), index = item), !(i == index || (index < 0 || index >= this.length()))) {
                if (1 == from) {
                    c.insertAfter(n);
                } else {
                    c.insertBefore(n);
                }
                o = this.states[index];
                this.states[index] = this.states[i];
                this.states[i] = o;
                this.sync();
                this.change();
            }
        };
        /**
         * @param {number} classNames
         * @return {undefined}
         */
        init.prototype.remove = function(classNames) {
            this.removeBase(classNames);
            this.sync();
            this.change();
        };
        /**
         * @param {number} i
         * @return {undefined}
         */
        init.prototype.removeBase = function(i) {
            if (!(this.length() <= this.min)) {
                var all = this.get(i);
                all.remove();
                this.states.splice(i, 1);
            }
        };
        /**
         * @return {undefined}
         */
        init.prototype.add = function() {
            var enc;
            if (this.collapseSingular) {
                this.collapseAll();
            }
            enc = this.addBase();
            if (enc) {
                this.form.initType_Image(enc);
                this.form.initType_Color(enc);
                this.form.initModifiers(enc);
                this.form.initRequires(enc, this.form.$obj);
                this.sync();
                this.change();
            }
        };
        /**
         * @return {?}
         */
        init.prototype.addBase = function() {
            var $e = this.$template.clone(true);
            /** @type {number} */
            var i = this.count++;
            if (!(this.max > 0 && this.length() >= this.max)) {
                if ($e.data("id", i), $e.find("input, textarea, select").each(function() {
                        var $this = $(this);
                        var d = $this.attr("id");
                        var originalName = $this.attr("name");
                        var output = $e.find('label[for="' + d + '"]');
                        $this.attr("id", d + "_" + i).attr("name", originalName + "_" + i);
                        if (output.length > 0) {
                            output.attr("for", d + "_" + i);
                        }
                        $this.val($this.attr("value"));
                    }), this.cloneFields && this.length() > 0) {
                    var rule;
                    var inputEl;
                    var innerControl;
                    var token;
                    var _j;
                    rule = this.$item.last();
                    for (_j in this.cloneFields) {
                        token = this.cloneFields[_j];
                        inputEl = rule.find('[name^="' + token + '_"]').first();
                        innerControl = $e.find('[name^="' + token + '_"]').first();
                        innerControl.val(inputEl.val());
                    }
                }
                return $e.appendTo(this.$items), $e;
            }
        };
        /**
         * @param {?} value
         * @param {boolean} triggerChange
         * @return {?}
         */
        init.prototype.val = function(value, triggerChange) {
            if (value) {
                var k;
                var i;
                var val;
                var oid;
                var row;
                /** @type {number} */
                var n = Math.max(value.length, this.min);
                var len = this.length();
                if (0 == n) {
                    this.$item.remove();
                } else {
                    if (n > len) {
                        k = len;
                        for (;k < n;k++) {
                            this.addBase();
                        }
                        this.$item = this.$items.children(".item");
                    } else {
                        if (n < len) {
                            k = len;
                            for (;k > n;k--) {
                                this.removeBase(k - 1);
                            }
                            this.$item = this.$items.children(".item");
                        }
                    }
                }
                if (n > 0) {
                    this.$items.find("input, textarea, select").val("");
                    for (k in value) {
                        row = this.get(k);
                        oid = row.data("id");
                        for (i in value[k]) {
                            if ("object" == typeof value[k][i]) {
                                for (val in value[k][i]) {
                                    row.find('[name="' + i + "." + val + "_" + oid + '"]').val(value[k][i][val]);
                                }
                            } else {
                                row.find('[name="' + i + "_" + oid + '"]').val(value[k][i]).trigger("change");
                            }
                        }
                        if (k in this.states) {
                            if (this.states[k] === false) {
                                row.removeClass("collapsed");
                            } else {
                                row.addClass("collapsed");
                            }
                        } else {
                            if (this.collapse) {
                                row.addClass("collapsed");
                            } else {
                                row.removeClass("collapsed");
                            }
                        }
                    }
                }
                return this.sync(), triggerChange !== true && this.$wrapper.trigger("groupChange"), this.$wrapper;
            }
            /** @type {Array} */
            var received = [];
            return this.$item.each(function() {
                var $e = $(this);
                var data = {};
                $e.find("input, textarea, select").each(function() {
                    var $field = $(this);
                    var s = $field.attr("name").replace(/_[0-9]+$/, "").split(".");
                    var element = $field.val();
                    if (2 == s.length) {
                        if (!(s[0] in data)) {
                            data[s[0]] = {};
                        }
                        data[s[0]][s[1]] = element;
                    } else {
                        data[s[0]] = element;
                    }
                });
                received.push(data);
            }), received;
        };
        /**
         * @return {undefined}
         */
        init.prototype.change = function() {
            this.$wrapper.trigger("change").trigger("groupChange");
        };
        /**
         * @return {undefined}
         */
        init.prototype.sync = function() {
            var self = this;
            this.$item = this.$items.children(".item");
            if (0 == this.length()) {
                this.$wrapper.addClass("empty");
            } else {
                this.$wrapper.removeClass("empty");
                this.$items.find('[name^="' + this.title + '_"]').trigger("change.title");
            }
            /** @type {Array} */
            this.states = [];
            this.$item.each(function() {
                self.states.push($(this).hasClass("collapsed"));
            });
        };
        /**
         * @return {undefined}
         */
        init.prototype.dump = function() {
        };
        /**
         * @return {?}
         */
        init.prototype.scrollTop = function() {
            return $(window).scrollTop();
        };
        /**
         * @param {number} dataAndEvents
         * @return {?}
         */
        $.fn.formGroup = function(dataAndEvents) {
            var emptyJ = $(this);
            if (0 == this.length) {
                return emptyJ;
            }
            if (this.length > 1) {
                /** @type {number} */
                var i = 0;
                for (;i < this.length;i++) {
                    $(this[i]).formGroup(dataAndEvents);
                }
                return emptyJ;
            }
            return this[0]._formGroup = new init(emptyJ, dataAndEvents), emptyJ;
        };
        (function() {
            /** @type {function (?): ?} */
            var iterator = this.val = $.fn.val;
            /**
             * @param {?} value
             * @return {?}
             */
            $.fn.val = function(value) {
                return "_formGroup" in this ? this._formGroup.val(value) : this.length > 0 && "_formGroup" in this[0] ? this[0]._formGroup.val(value) : "undefined" == typeof value ? iterator.call(this) : iterator.call(this, value);
            };
        })();
        /** @type {function ((Object|null), (Object|null)): undefined} */
        module.exports = init;
    }, {}],
    formImageCropper : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {(Node|null)} markup
         * @return {undefined}
         */
        function init(markup) {
            var value;
            var self = this;
            /** @type {string} */
            this.inputPrefix = "";
            this.image = {
                canvas : null,
                width : 0,
                height : 0,
                type : null,
                size : 0,
                orientation : null,
                animated : false,
                cropAllowed : false
            };
            this.canvasWrapper = {
                width : 0,
                height : 0,
                zoom : 1
            };
            this.crop = {
                controlSize : 60,
                initialMargin : 40,
                square : false,
                minWidth : 150,
                minHeight : 150,
                topLeft : {
                    x : null,
                    y : null
                },
                bottomRight : {
                    x : null,
                    y : null
                },
                /**
                 * @return {?}
                 */
                width : function() {
                    return this.bottomRight.x - this.topLeft.x;
                },
                /**
                 * @return {?}
                 */
                height : function() {
                    return this.bottomRight.y - this.topLeft.y;
                }
            };
            this.settings = {
                crop : true,
                maxCanvasWH : 2560,
                maxWH : 1024,
                maxSize : 2048,
                forceCanvas : false,
                forceType : false,
                forceSquare : false,
                minWidth : 150,
                minHeight : 150
            };
            this.$window = $(window).on("resize", function() {
                if (self.modalVisible()) {
                    self.rescale();
                }
            });
            this.$obj = markup.addClass("form-image").on("destroyed", function() {
                self.$modal.remove();
            });
            if ("undefined" != typeof(value = this.$obj.attr("data-crop"))) {
                /** @type {boolean} */
                this.settings.crop = "1" == value;
            }
            if ("undefined" != typeof(value = this.$obj.attr("data-maxWH"))) {
                /** @type {number} */
                this.settings.maxWH = parseInt(value);
                /** @type {number} */
                this.settings.maxCanvasWH = 2.5 * this.settings.maxWH;
            }
            if ("undefined" != typeof(value = this.$obj.attr("data-maxCanvasWH"))) {
                /** @type {number} */
                this.settings.maxCanvasWH = parseInt(value);
            }
            if ("undefined" != typeof(value = this.$obj.attr("data-maxSize"))) {
                /** @type {number} */
                this.settings.maxSize = parseInt(value);
            }
            if ("undefined" != typeof(value = this.$obj.attr("data-forceCanvas"))) {
                /** @type {boolean} */
                this.settings.forceCanvas = "1" == value;
            }
            if ("undefined" != typeof(value = this.$obj.attr("data-forceType"))) {
                this.settings.forceType = value;
            }
            if ("undefined" != typeof(value = this.$obj.attr("data-forceSquare"))) {
                /** @type {boolean} */
                this.settings.forceSquare = "1" == value;
            }
            if ("undefined" != typeof(value = this.$obj.attr("data-minWidth"))) {
                /** @type {number} */
                this.crop.minWidth = this.settings.minWidth = parseInt(value);
            }
            if ("undefined" != typeof(value = this.$obj.attr("data-minHeight"))) {
                /** @type {number} */
                this.crop.minHeight = this.settings.minHeight = parseInt(value);
            }
            this.$idInput = this.$obj.find(".id").css("position", "absolute").css("width", "0px").css("height", "0px").css("visibility", "hidden").css("z-index", "-1").css("overflow", "hidden").css("-moz-pointer-events", "none").css("-webkit-pointer-events", "none").css("-ms-pointer-events", "none").css("pointer-events", "none").on("--refresh-image", function() {
                value = self.$dataInput.val();
                if (value) {
                    self.$thumbnail.css("background-image", "url(" + value + ")");
                    self.$obj.removeClass("new");
                } else {
                    self.$obj.addClass("new");
                }
            });
            this.$dataInput = this.$obj.find(".data").css("display", "none");
            this.$thumbnail = $('<div class="thumbnail"></div>').appendTo(this.$obj).css("background-size", "cover").css("background-position", "center").on("click", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if (!self.$idInput.prop("disabled")) {
                    self.$fileInput.trigger("click");
                }
            });
            this.$obj.on("click", ".do-upload", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if (!self.$idInput.prop("disabled")) {
                    self.$fileInput.trigger("click");
                }
            });
            this.$obj.on("click", ".do-clear", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if (!self.$idInput.prop("disabled")) {
                    url = self.$image.attr("src");
                    if (url) {
                        if (url.match(/^blob:/)) {
                            if (url != self.$idInput.val()) {
                                self.revokeObjectURL(url);
                            }
                        }
                    }
                    self.$image.attr("src", "");
                    self.$thumbnail.css("background-image", "");
                    self.$dataInput.val("").trigger("change");
                    self.$idInput.val("").trigger("change");
                    self.$obj.addClass("new");
                }
            });
            this.$modal = $('<div class="modal form-image-modal" tabindex="-1"><div class="content"><div class="wrapper"><div class="canvas-wrapper"><canvas /><div class="crop"><div class="controls" data-control="move"><div class="control top-left" data-control="topLeft"></div><div class="control top-right" data-control="topRight"></div><div class="control bottom-right" data-control="bottomRight"></div><div class="control bottom-left" data-control="bottomLeft"></div></div></div></div></div><ul class="options"><li><span class="square' +
                (this.settings.forceSquare ? " active disabled" : "") + '"><span class="label">Square</span></span></li><li><span class="expand"><span class="label">Expand</span></span></li></ul><ul class="actions"><li><a href="#" class="button special do-save"><span class="label">Accept</span></a></li><li><a href="#" class="button do-cancel"><span class="label">Cancel</span></a></li></ul></div></div>').appendTo($("body")).css("-moz-user-select", "none").css("-webkit-user-select", "none").css("-ms-user-select",
                "none").css("user-select", "none").on("mousedown", function(event) {
                event.preventDefault();
                event.stopPropagation();
                self.hideModal();
            }).on("keydown", function(event) {
                switch(event.keyCode) {
                    case 13:
                        event.preventDefault();
                        event.stopPropagation();
                        self.hideModal(true);
                        break;
                    case 27:
                        event.preventDefault();
                        event.stopPropagation();
                        self.hideModal();
                }
            });
            this.$modalContent = this.$modal.children(".content").on("click mousedown", function(event) {
                event.stopPropagation();
            }).on("click", ".do-save", function(event) {
                event.preventDefault();
                event.stopPropagation();
                self.hideModal(true);
            }).on("click", ".do-cancel", function(event) {
                event.preventDefault();
                event.stopPropagation();
                self.hideModal();
            });
            this.$canvas = this.$modalContent.find("canvas").css("position", "absolute").css("top", 0).css("left", 0);
            this.image.canvas = this.$canvas[0];
            this.$canvasWrapper = this.$modalContent.find(".canvas-wrapper").css("position", "relative").css("overflow", "hidden").css("max-width", "100%");
            this.$image = $("<img />").on("load", function() {
                self.completeLoad();
            });
            this.$crop = this.$modalContent.find(".crop").css("position", "absolute").css("z-index", 1).css("left", 0).css("top", 0);
            this.$cropControls = this.$modalContent.find(".controls").css("position", "absolute").css("top", 0).css("left", 0).css("width", "100%").css("height", "100%");
            /** @type {number} */
            value = -1 * (0.5 * this.crop.controlSize);
            this.$cropControls.find(".control").css("position", "absolute").css("width", this.crop.controlSize + "px").css("height", this.crop.controlSize + "px");
            this.$cropControls.find(".top-left").css("top", value).css("left", value);
            this.$cropControls.find(".top-right").css("top", value).css("right", value);
            this.$cropControls.find(".bottom-right").css("bottom", value).css("right", value);
            this.$cropControls.find(".bottom-left").css("bottom", value).css("left", value);
            this.$fileInput = $('<input type="file" name="image" autocomplete="off" />').on("change", function() {
                self.load(self.$fileInput.prop("files")[0]);
                self.$fileInput.val("");
            });
            this.$squareOption = this.$modalContent.find(".options .square").on("click", function() {
                var $next = $(this);
                if (!self.settings.forceSquare) {
                    if ($next.hasClass("active")) {
                        /** @type {boolean} */
                        self.crop.square = false;
                        $next.removeClass("active");
                    } else {
                        /** @type {boolean} */
                        self.crop.square = true;
                        self.squarifyCrop();
                        $next.addClass("active");
                    }
                    self.redrawCrop();
                }
            });
            this.$expandOption = this.$modalContent.find(".options .expand").on("click", function() {
                self.expandCrop();
                self.redrawCrop();
            });
            this.$canvasWrapper.touch({
                useMouse : app.touch.useMouse,
                useTouch : app.touch.useTouch,
                trackDocument : true,
                trackDocumentNormalize : true,
                dragThreshold : 0,
                dragDelay : 0,
                tapAndHoldDelay : 300,
                preventDefault : {
                    drag : true
                }
            }).on("dragStart tapAndHold", function(dataAndEvents, e) {
                /** @type {number} */
                var h = "scrollY" in window ? window.scrollY : window.pageYOffset;
                var dummy = $(document.elementFromPoint(e.x, e.y - h));
                var control = dummy.data("control");
                self.$crop.addClass("active");
                if (control) {
                    /** @type {string} */
                    this._control = "cropControl_" + control;
                    this._x = e.x;
                    this._y = e.y;
                }
            }).on("dragEnd", function(dataAndEvents, deepDataAndEvents) {
                if ("_control" in this) {
                    delete this._x;
                    delete this._y;
                    delete this._control;
                    self.$crop.removeClass("active");
                }
            }).on("drag", function(dataAndEvents, v) {
                if ("_control" in this) {
                    /** @type {number} */
                    var tempFile = v.x - this._x;
                    /** @type {number} */
                    var debug = v.y - this._y;
                    self[this._control](tempFile, debug);
                    self.redrawCrop();
                    this._x = v.x;
                    this._y = v.y;
                }
            });
            this.$idInput.triggerHandler("--refresh-image");
        }
        /**
         * @param {?} file
         * @return {?}
         */
        init.prototype.createObjectURL = function(file) {
            var i;
            return i = "undefined" != typeof window.webkitURL ? window.webkitURL.createObjectURL(file) : "undefined" != typeof window.URL ? window.URL.createObjectURL(file) : null;
        };
        /**
         * @param {?} value
         * @return {undefined}
         */
        init.prototype.revokeObjectURL = function(value) {
            if ("undefined" != typeof window.webkitURL) {
                window.webkitURL.revokeObjectURL(value);
            } else {
                if ("undefined" != typeof window.URL) {
                    window.URL.revokeObjectURL(value);
                }
            }
        };
        /**
         * @param {number} width
         * @param {number} height
         * @return {undefined}
         */
        init.prototype.moveCrop = function(width, height) {
            if (this.crop.topLeft.x + width < 0 || this.crop.bottomRight.x + width > this.image.width) {
                /** @type {number} */
                width = 0;
            }
            if (this.crop.topLeft.y + height < 0 || this.crop.bottomRight.y + height > this.image.height) {
                /** @type {number} */
                height = 0;
            }
            this.crop.topLeft.x += width;
            this.crop.topLeft.y += height;
            this.crop.bottomRight.x += width;
            this.crop.bottomRight.y += height;
        };
        /**
         * @param {number} delta
         * @param {number} deltaY
         * @param {number} offsetX
         * @param {number} height
         * @return {undefined}
         */
        init.prototype.resizeCrop = function(delta, deltaY, offsetX, height) {
            /** @type {number} */
            var x = this.crop.bottomRight.x - this.crop.topLeft.x;
            /** @type {number} */
            var top = this.crop.bottomRight.y - this.crop.topLeft.y;
            if (delta > 0 && (x - delta < this.crop.minWidth && (delta = 0)), offsetX < 0 && (x + offsetX < this.crop.minWidth && (offsetX = 0)), deltaY > 0 && (top - deltaY < this.crop.minHeight && (deltaY = 0)), height < 0 && (top + height < this.crop.minHeight && (height = 0)), this.crop.square) {
                if (delta < 0 && this.crop.topLeft.x + delta < 0) {
                    return;
                }
                if (offsetX > 0 && this.crop.bottomRight.x + offsetX > this.image.width) {
                    return;
                }
                if (deltaY < 0 && this.crop.topLeft.y + deltaY < 0) {
                    return;
                }
                if (height > 0 && this.crop.bottomRight.y + height > this.image.height) {
                    return;
                }
            }
            this.crop.topLeft.x += delta;
            this.crop.topLeft.y += deltaY;
            this.crop.bottomRight.x += offsetX;
            this.crop.bottomRight.y += height;
            /** @type {number} */
            this.crop.topLeft.x = Math.max(this.crop.topLeft.x, 0);
            /** @type {number} */
            this.crop.topLeft.y = Math.max(this.crop.topLeft.y, 0);
            /** @type {number} */
            this.crop.bottomRight.x = Math.min(this.crop.bottomRight.x, this.image.width);
            /** @type {number} */
            this.crop.bottomRight.y = Math.min(this.crop.bottomRight.y, this.image.height);
        };
        /**
         * @return {undefined}
         */
        init.prototype.squarifyCrop = function() {
            var val1;
            var val2;
            /** @type {number} */
            val1 = Math.floor(this.crop.bottomRight.x - this.crop.topLeft.x);
            /** @type {number} */
            val2 = Math.floor(this.crop.bottomRight.y - this.crop.topLeft.y);
            if (val1 != val2) {
                if (val2 < val1) {
                    this.crop.topLeft.x = this.crop.topLeft.x + (val1 - val2) / 2;
                    this.crop.bottomRight.x = this.crop.topLeft.x + val2;
                } else {
                    this.crop.topLeft.y = this.crop.topLeft.y + (val2 - val1) / 2;
                    this.crop.bottomRight.y = this.crop.topLeft.y + val1;
                }
            }
        };
        /**
         * @return {undefined}
         */
        init.prototype.expandCrop = function() {
            /** @type {number} */
            this.crop.topLeft.x = 0;
            /** @type {number} */
            this.crop.topLeft.y = 0;
            if (this.crop.square) {
                if (this.image.height > this.image.width) {
                    /** @type {number} */
                    this.crop.topLeft.y = (this.image.height - this.image.width) / 2;
                    this.crop.bottomRight.x = this.image.width;
                    this.crop.bottomRight.y = this.crop.topLeft.y + this.image.width;
                } else {
                    /** @type {number} */
                    this.crop.topLeft.x = (this.image.width - this.image.height) / 2;
                    this.crop.bottomRight.x = this.crop.topLeft.x + this.image.height;
                    this.crop.bottomRight.y = this.image.height;
                }
            } else {
                this.crop.bottomRight.x = this.image.width;
                this.crop.bottomRight.y = this.image.height;
            }
            if (this.crop.width() < this.crop.minWidth) {
                /** @type {number} */
                x = Math.ceil((this.crop.minWidth - this.crop.width()) / 2);
                /** @type {number} */
                this.crop.topLeft.x = Math.max(0, this.crop.topLeft.x - x);
                /** @type {number} */
                this.crop.bottomRight.x = Math.min(this.image.width, this.crop.bottomRight.x + x);
            }
            if (this.crop.height() < this.crop.minHeight) {
                /** @type {number} */
                x = Math.ceil((this.crop.minHeight - this.crop.height()) / 2);
                /** @type {number} */
                this.crop.topLeft.y = Math.max(0, this.crop.topLeft.y - x);
                /** @type {number} */
                this.crop.bottomRight.y = Math.min(this.image.height, this.crop.bottomRight.y + x);
            }
        };
        /**
         * @return {undefined}
         */
        init.prototype.redrawCrop = function() {
            this.$crop.css("left", this.canvasWrapper.zoom * this.crop.topLeft.x).css("top", this.canvasWrapper.zoom * this.crop.topLeft.y).width(this.canvasWrapper.zoom * (this.crop.bottomRight.x - this.crop.topLeft.x)).height(this.canvasWrapper.zoom * (this.crop.bottomRight.y - this.crop.topLeft.y));
        };
        /**
         * @param {string} value
         * @return {undefined}
         */
        init.prototype.sync = function(value) {
            var canvas;
            var context;
            var mimetype;
            var smooth;
            var ctx;
            var one_vw;
            var olen;
            var num;
            var _width;
            var _height;
            if ("undefined" == typeof value) {
                if (canvas = document.createElement("canvas"), context = canvas.getContext("2d"), canvas.width = this.crop.bottomRight.x - this.crop.topLeft.x, canvas.height = this.crop.bottomRight.y - this.crop.topLeft.y, context.drawImage(this.image.canvas, this.crop.topLeft.x * -1, this.crop.topLeft.y * -1), (canvas.width > this.settings.maxWH || canvas.height > this.settings.maxWH) && (one_vw = this.settings.maxWH / canvas.width, olen = this.settings.maxWH / canvas.height, num = Math.min(one_vw, olen),
                        _width = Math.floor(num * canvas.width), _height = Math.floor(num * canvas.height), smooth = document.createElement("canvas"), ctx = smooth.getContext("2d"), smooth.width = _width, smooth.height = _height, ctx.drawImage(canvas, 0, 0, _width, _height), delete canvas, canvas = smooth), "image/png" == this.image.type) {
                    var aData = context.getImageData(0, 0, canvas.width, canvas.height).data;
                    /** @type {boolean} */
                    var d = false;
                    /** @type {number} */
                    var i = 0;
                    for (;i < aData.length;i += 4) {
                        if (aData[i + 3] < 255) {
                            /** @type {boolean} */
                            d = true;
                            break;
                        }
                    }
                    if (!d) {
                        /** @type {string} */
                        this.image.type = "image/jpeg";
                    }
                }
                if (this.settings.forceType) {
                    mimetype = this.settings.forceType;
                } else {
                    switch(this.image.type) {
                        case "image/svg+xml":
                            /** @type {string} */
                            mimetype = "image/svg+xml";
                            break;
                        case "image/png":
                            ;
                        case "image/gif":
                            /** @type {string} */
                            mimetype = "image/png";
                            break;
                        default:
                            /** @type {string} */
                            mimetype = "image/jpeg";
                    }
                }
                value = canvas.toDataURL(mimetype, 75);
                delete canvas;
            }
            context = this.image.canvas.getContext("2d");
            context.clearRect(0, 0, this.image.canvas.width, this.image.canvas.height);
            this.$thumbnail.css("background-image", "url(" + value + ")");
            this.$dataInput.val(value).trigger("change");
            this.$idInput.val(md5(String(Date.now()) + value)).trigger("change");
            this.$obj.removeClass("new");
            /** @type {boolean} */
            this.image.animated = false;
            /** @type {boolean} */
            this.image.cropAllowed = false;
        };
        /**
         * @return {undefined}
         */
        init.prototype.showModal = function() {
            var modal = this;
            this.$modal.addClass("visible");
            window.setTimeout(function() {
                modal.$modal.focus();
            }, 250);
        };
        /**
         * @param {boolean} dataAndEvents
         * @return {undefined}
         */
        init.prototype.hideModal = function(dataAndEvents) {
            if (dataAndEvents) {
                this.sync();
            }
            this.$modal.removeClass("visible");
        };
        /**
         * @return {?}
         */
        init.prototype.modalVisible = function() {
            return!!this.$modal.hasClass("visible");
        };
        /**
         * @return {undefined}
         */
        init.prototype.rescale = function() {
            var cnl = this.$window.width();
            var origin_shift = this.$window.height();
            /** @type {number} */
            var x = cnl - (this.$modalContent.outerWidth() - this.$modalContent.width());
            /** @type {number} */
            var ymax = origin_shift - (this.$modalContent.outerHeight() - this.$modalContent.height());
            /** @type {number} */
            var delta = padHeight = cnl / 1440 * 100;
            if (cnl < 480) {
                /** @type {number} */
                delta = 0;
            } else {
                if (cnl < 736) {
                    /** @type {number} */
                    delta = 20;
                }
            }
            if (origin_shift < 480) {
                /** @type {number} */
                padHeight = 0;
            } else {
                if (origin_shift < 736) {
                    /** @type {number} */
                    padHeight = 20;
                }
            }
            /** @type {number} */
            this.canvasWrapper.width = x - delta;
            /** @type {number} */
            this.canvasWrapper.height = ymax - padHeight;
            if (this.image.width < this.canvasWrapper.width && this.image.height < this.canvasWrapper.height) {
                /** @type {number} */
                this.canvasWrapper.zoom = 1;
                this.canvasWrapper.width = this.image.width;
                this.canvasWrapper.height = this.image.height;
            } else {
                /** @type {number} */
                this.canvasWrapper.zoom = Math.min(this.canvasWrapper.height / this.image.height, this.canvasWrapper.width / this.image.width);
                /** @type {number} */
                this.canvasWrapper.width = this.canvasWrapper.zoom * this.image.width;
                /** @type {number} */
                this.canvasWrapper.height = this.canvasWrapper.zoom * this.image.height;
            }
            this.$canvasWrapper.width(this.canvasWrapper.width).height(this.canvasWrapper.height);
            this.$canvas.width(this.canvasWrapper.zoom * this.image.width).height(this.canvasWrapper.zoom * this.image.height);
            this.redrawCrop();
        };
        /**
         * @param {?} stream
         * @return {undefined}
         */
        init.prototype.load = function(stream) {
            var self = this;
            if (stream) {
                this.getImageProperties(stream, function(data) {
                    var r;
                    switch(self.image.type = data.type, self.image.size = data.size, self.image.orientation = data.orientation, self.image.animated = data.animated, self.image.type) {
                        case "image/svg+xml":
                            if (self.image.cropAllowed = false, Math.floor(self.image.size / 1024) > self.settings.maxSize) {
                                return void app.dialog.show({
                                    title : "SVG too large",
                                    message : "Sorry, SVGs cannot exceed " + self.settings.maxSize / 1024 + "MB in file size."
                                });
                            }
                            break;
                        case "image/jpeg":
                            ;
                        case "image/png":
                            /** @type {boolean} */
                            self.image.cropAllowed = true;
                            break;
                        case "image/gif":
                            if (self.image.animated && !self.settings.forceCanvas) {
                                if (self.image.cropAllowed = false, Math.floor(self.image.size / 1024) > self.settings.maxSize) {
                                    return void app.dialog.show({
                                        title : "Animated GIF too large",
                                        message : "Sorry, animated GIFs cannot exceed " + self.settings.maxSize / 1024 + "MB in file size."
                                    });
                                }
                            } else {
                                /** @type {boolean} */
                                self.image.cropAllowed = true;
                            }
                            break;
                        default:
                            return void app.dialog.show({
                                title : "Invalid image type",
                                message : "Sorry, images must be in either JPEG, PNG, GIF, or SVG format."
                            });
                    }
                    r = self.createObjectURL(stream);
                    self.$image.css("width", "").css("height", "").attr("src", "").attr("src", r);
                });
            }
        };
        /**
         * @return {?}
         */
        init.prototype.completeLoad = function() {
            var ctx;
            var pdataOld;
            var size;
            var height;
            var radius;
            var cells;
            var maxRows;
            var row;
            var self = this;
            /** @type {number} */
            var dx = 0;
            /** @type {boolean} */
            var p = false;
            if (!this.image.cropAllowed && !this.settings.forceCanvas) {
                return pdataOld = this.$image.attr("src"), void(pdataOld.match(/^data:/) ? this.sync(pdataOld) : app.toDataURL(pdataOld, function(method) {
                    self.sync(method);
                }));
            }
            switch(this.crop.topLeft.x = this.crop.topLeft.y = null, this.crop.bottomRight.x = this.crop.bottomRight.y = null, this.crop.square = false, this.$squareOption.hasClass("disabled") || this.$squareOption.removeClass("active"), this.image.orientation) {
                case 1:
                    ;
                default:
                    break;
                case 2:
                    /** @type {boolean} */
                    p = true;
                    break;
                case 3:
                    /** @type {number} */
                    dx = 180;
                    break;
                case 4:
                    /** @type {boolean} */
                    p = true;
                    /** @type {number} */
                    dx = 180;
                    break;
                case 5:
                    /** @type {boolean} */
                    p = true;
                    /** @type {number} */
                    dx = 270;
                    break;
                case 6:
                    /** @type {number} */
                    dx = 90;
                    break;
                case 7:
                    /** @type {boolean} */
                    p = true;
                    /** @type {number} */
                    dx = 90;
                    break;
                case 8:
                    /** @type {number} */
                    dx = -90;
            }
            return size = this.$image[0].width, height = this.$image[0].height, (size > this.settings.maxCanvasWH || height > this.settings.maxCanvasWH) && (cells = this.settings.maxCanvasWH / size, maxRows = this.settings.maxCanvasWH / height, row = Math.min(cells, maxRows), size = Math.floor(row * size), height = Math.floor(row * height)), ctx = this.image.canvas.getContext("2d"), dx >= 360 ? dx -= 360 : dx < 0 && (dx += 360), 0 == dx || 180 == Math.abs(dx) ? (this.image.canvas.width = size, this.image.canvas.height =
                height, ctx.translate(this.image.canvas.width / 2, this.image.canvas.height / 2), ctx.rotate(dx * (Math.PI / 180)), ctx.translate(this.image.canvas.width / -2, this.image.canvas.height / -2)) : (this.image.canvas.width = height, this.image.canvas.height = size, ctx.translate(this.image.canvas.width / 2, this.image.canvas.height / 2), ctx.rotate(dx * (Math.PI / 180)), ctx.translate(this.image.canvas.height / -2, this.image.canvas.width / -2)), p ? (ctx.scale(-1, 1), ctx.drawImage(this.$image[0],
                -size, 0, size, height)) : ctx.drawImage(this.$image[0], 0, 0, size, height), this.image.width = this.image.canvas.width, this.image.height = this.image.canvas.height, pdataOld = this.$image.attr("src"), pdataOld.match(/^blob:/) && (pdataOld != this.$idInput.val() && this.revokeObjectURL(pdataOld)), this.$image.attr("src", ""), this.settings.crop ? ((null === this.crop.topLeft.x || (isNaN(this.crop.topLeft.x) || (null === this.crop.topLeft.y || (isNaN(this.crop.topLeft.y) || (null === this.crop.bottomRight.x ||
            (isNaN(this.crop.bottomRight.x) || (null === this.crop.bottomRight.y || isNaN(this.crop.bottomRight.y)))))))) && (this.crop.topLeft.x = this.crop.initialMargin, this.crop.topLeft.y = this.crop.initialMargin, this.crop.square ? this.image.height > this.image.width ? (this.crop.topLeft.y = (this.image.height - this.image.width) / 2, this.crop.bottomRight.x = this.image.width - this.crop.initialMargin, this.crop.bottomRight.y = this.crop.topLeft.y + this.image.width - this.crop.initialMargin) :
                (this.crop.topLeft.x = (this.image.width - this.image.height) / 2, this.crop.bottomRight.x = this.crop.topLeft.x + this.image.height - this.crop.initialMargin, this.crop.bottomRight.y = this.image.height - this.crop.initialMargin) : (this.crop.bottomRight.x = this.image.width - this.crop.initialMargin, this.crop.bottomRight.y = this.image.height - this.crop.initialMargin), this.crop.width() < this.crop.minWidth && (radius = Math.ceil((this.crop.minWidth - this.crop.width()) / 2), this.crop.topLeft.x =
                Math.max(0, this.crop.topLeft.x - radius), this.crop.bottomRight.x = Math.min(this.image.width, this.crop.bottomRight.x + radius)), this.crop.height() < this.crop.minHeight && (radius = Math.ceil((this.crop.minHeight - this.crop.height()) / 2), this.crop.topLeft.y = Math.max(0, this.crop.topLeft.y - radius), this.crop.bottomRight.y = Math.min(this.image.height, this.crop.bottomRight.y + radius))), this.rescale(), this.modalVisible() || this.showModal(), this.image.orientation = null, void(self.settings.forceSquare &&
            (self.crop.square = true, self.squarifyCrop(), self.redrawCrop()))) : (this.crop.topLeft.x = 0, this.crop.topLeft.y = 0, this.crop.bottomRight.x = this.image.width, this.crop.bottomRight.y = this.image.height, this.sync(), void(this.image.orientation = null));
        };
        /**
         * @param {?} dataAndEvents
         * @param {?} deepDataAndEvents
         * @return {undefined}
         */
        init.prototype.cropControl_move = function(dataAndEvents, deepDataAndEvents) {
            this.moveCrop(dataAndEvents / this.canvasWrapper.zoom, deepDataAndEvents / this.canvasWrapper.zoom);
        };
        /**
         * @param {number} start
         * @param {number} stop
         * @return {undefined}
         */
        init.prototype.cropControl_topLeft = function(start, stop) {
            if (this.crop.square) {
                if (Math.abs(start) > Math.abs(stop)) {
                    /** @type {number} */
                    stop = start;
                } else {
                    /** @type {number} */
                    start = stop;
                }
            }
            this.resizeCrop(start / this.canvasWrapper.zoom, stop / this.canvasWrapper.zoom, 0, 0);
        };
        /**
         * @param {number} deltaX
         * @param {number} deltaY
         * @return {undefined}
         */
        init.prototype.cropControl_topRight = function(deltaX, deltaY) {
            if (this.crop.square) {
                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    /** @type {number} */
                    deltaY = deltaX * -1;
                } else {
                    /** @type {number} */
                    deltaX = deltaY * -1;
                }
            }
            this.resizeCrop(0, deltaY / this.canvasWrapper.zoom, deltaX / this.canvasWrapper.zoom, 0);
        };
        /**
         * @param {number} start
         * @param {number} stop
         * @return {undefined}
         */
        init.prototype.cropControl_bottomRight = function(start, stop) {
            if (this.crop.square) {
                if (Math.abs(start) > Math.abs(stop)) {
                    /** @type {number} */
                    stop = start;
                } else {
                    /** @type {number} */
                    start = stop;
                }
            }
            this.resizeCrop(0, 0, start / this.canvasWrapper.zoom, stop / this.canvasWrapper.zoom);
        };
        /**
         * @param {number} value
         * @param {number} max
         * @return {undefined}
         */
        init.prototype.cropControl_bottomLeft = function(value, max) {
            if (this.crop.square) {
                if (Math.abs(value) > Math.abs(max)) {
                    /** @type {number} */
                    max = -1 * value;
                } else {
                    /** @type {number} */
                    value = -1 * max;
                }
            }
            this.resizeCrop(value / this.canvasWrapper.zoom, 0, 0, max / this.canvasWrapper.zoom);
        };
        /**
         * @param {?} data
         * @return {?}
         */
        init.prototype.getImageProperties_orientation = function(data) {
            var buffer;
            var max_count;
            var index;
            var i;
            var littleEndian;
            var value;
            var upper;
            if (buffer = new DataView(data), 65496 != buffer.getUint16(0, false)) {
                return null;
            }
            /** @type {number} */
            max_count = Math.min(buffer.byteLength, 65536);
            /** @type {number} */
            index = 2;
            for (;index < max_count;) {
                if (i = buffer.getUint16(index, false), index += 2, 65505 == i) {
                    if (1165519206 != buffer.getUint32(index += 2, false)) {
                        return null;
                    }
                    /** @type {boolean} */
                    littleEndian = 18761 == buffer.getUint16(index += 6, false);
                    index += buffer.getUint32(index + 4, littleEndian);
                    /** @type {number} */
                    value = buffer.getUint16(index, littleEndian);
                    index += 2;
                    /** @type {number} */
                    upper = 0;
                    for (;upper < value;upper++) {
                        if (274 == buffer.getUint16(index + 12 * upper, littleEndian)) {
                            return buffer.getUint16(index + 12 * upper + 8, littleEndian);
                        }
                    }
                } else {
                    if (65280 != (65280 & i)) {
                        break;
                    }
                    index += buffer.getUint16(index, false);
                }
            }
            return null;
        };
        /**
         * @param {?} buffer
         * @return {?}
         */
        init.prototype.getImageProperties_animated = function(buffer) {
            var data;
            var i;
            var n;
            var len;
            var zip_deflate_pos;
            var Diff;
            var pos;
            if (zip_deflate_pos = 0, data = new DataView(buffer), len = data.byteLength, 71 !== data.getUint8(0) || (73 !== data.getUint8(1) || (70 !== data.getUint8(2) || 56 !== data.getUint8(3)))) {
                return false;
            }
            /** @type {number} */
            i = 0;
            /** @type {number} */
            n = len - 3;
            for (;i < n && zip_deflate_pos < 2;++i) {
                if (0 == data.getUint8(i)) {
                    if (33 === data.getUint8(i + 1)) {
                        if (249 === data.getUint8(i + 2)) {
                            /** @type {number} */
                            Diff = data.getUint8(i + 3);
                            /** @type {number} */
                            pos = i + 4 + Diff;
                            if (pos + 1 < len) {
                                if (0 === data.getUint8(pos)) {
                                    if (44 === data.getUint8(pos + 1) || data.getUint8(pos + 1 === 33)) {
                                        zip_deflate_pos++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return zip_deflate_pos > 1;
        };
        /**
         * @param {?} file
         * @param {(Function|null)} func
         * @return {undefined}
         */
        init.prototype.getImageProperties = function(file, func) {
            var callback = this;
            /** @type {FileReader} */
            var arrayBufferReader = new FileReader;
            /**
             * @param {(Event|null)} e
             * @return {undefined}
             */
            arrayBufferReader.onload = function(e) {
                var data = {};
                data.type = file.type;
                data.size = file.size;
                data.orientation = callback.getImageProperties_orientation(e.target.result);
                data.animated = callback.getImageProperties_animated(e.target.result);
                func(data);
            };
            arrayBufferReader.readAsArrayBuffer(file);
        };
        /**
         * @return {?}
         */
        $.fn.formImageCropper = function() {
            var emptyJ = $(this);
            if (0 == this.length) {
                return emptyJ;
            }
            if (this.length > 1) {
                /** @type {number} */
                var i = 0;
                for (;i < this.length;i++) {
                    $(this[i]).formImageCropper();
                }
                return emptyJ;
            }
            return "_formImageCropper" in this[0] || (this[0]._formImageCropper = new init(emptyJ)), emptyJ;
        };
        if ("undefined" != typeof module) {
            /** @type {function ((Node|null)): undefined} */
            module.exports = init;
        }
    }, {}],
    form : [function($sanitize, module, dataAndEvents) {
        /**
         * @param {?} options
         * @param {?} opts
         * @return {undefined}
         */
        function init(options, opts) {
            var jQuery = this;
            if (this.$obj = options, this.options = $.extend({
                    fields : {},
                    types : {},
                    verify : {},
                    preSubmitHandler : null,
                    /**
                     * @param {(Function|null)} scripts
                     * @return {undefined}
                     */
                    submitHandler : function(scripts) {
                        jQuery.submitHandler(scripts);
                    },
                    validation : !!options.is("[data-validation]")
                }, opts), this.$alert = $('<div class="alert">what what</div>').prependTo(this.$obj).hide(), this.alertTimers = [], "ie" != skel.vars.browser && ("edge" != skel.vars.browser && this.$obj.on("input", 'input[type="range"]', function() {
                    $(this).trigger("change");
                })), this.$obj.on("click", "label", function(types) {
                    var charset = $(this).prev().attr("type");
                    if ("checkbox" != charset) {
                        if ("radio" != charset) {
                            types.preventDefault();
                        }
                    }
                }), ("ie" == skel.vars.browser || "edge" == skel.vars.browser) && this.$obj.attr("id")) {
                jQuery = this;
                $('input[form="' + this.$obj.attr("id") + '"]').on("click", function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    jQuery.$obj.trigger("submit");
                });
            }
            this.initType_Group();
            this.initType_Image();
            this.initType_Color();
            this.initModifiers();
            this.initRequires();
            this.initFields();
            this.init();
        }
        $sanitize("./formColor.js");
        $sanitize("./formGroup.js");
        $sanitize("./formImageCropper.js");
        init.prototype.statusTables = {
            "font-weight" : {
                100 : "Thin",
                200 : "Extra Light",
                300 : "Light",
                400 : "Regular",
                500 : "Medium",
                600 : "Semi Bold",
                700 : "Bold",
                800 : "Extra Bold",
                900 : "Heavy"
            }
        };
        /**
         * @param {?} key
         * @param {string} value
         * @return {?}
         */
        init.prototype.option = function(key, value) {
            return key in this.options ? ("undefined" != typeof value && (this.options[key] = value), this.options[key]) : null;
        };
        /**
         * @param {string} newValue
         * @param {?} x
         * @return {?}
         */
        init.prototype.value = function(newValue, x) {
            var list = this.$obj.find("#" == newValue.charAt(0) ? 'input[id="' + newValue.substr(1) + '"],select[id="' + newValue.substr(1) + '"]' : 'input[name="' + newValue + '"],select[name="' + newValue + '"]');
            return 0 == list.length || list.prop("disabled") === true ? null : ("undefined" != typeof x && list.val(x), list.val());
        };
        /**
         * @param {string} status
         * @param {string} message
         * @return {undefined}
         */
        init.prototype.showAlert = function(status, message) {
            var self = this;
            /** @type {number} */
            var elementDelay = 25 * message.length;
            this.clearAlert();
            self.$alert.addClass(status).text(message);
            self.alertTimers.push(window.setTimeout(function() {
                self.$alert.show();
                web.scrollTo(self.$alert);
                self.alertTimers.push(window.setTimeout(function() {
                    self.$alert.addClass("visible");
                }, 100));
                self.alertTimers.push(window.setTimeout(function() {
                    self.$alert.removeClass("visible");
                }, 2E3 + elementDelay));
                self.alertTimers.push(window.setTimeout(function() {
                    self.clearAlert();
                }, 2250 + elementDelay));
            }, 0));
        };
        /**
         * @return {undefined}
         */
        init.prototype.clearAlert = function() {
            var i;
            for (i in this.alertTimers) {
                window.clearTimeout(this.alertTimers[i]);
            }
            /** @type {Array} */
            this.alertTimers = [];
            this.$alert.hide().text("").removeClass("visible").removeClass("error").removeClass("success");
        };
        /**
         * @param {(Object|null)} element
         * @param {string} key
         * @param {boolean} recurring
         * @return {undefined}
         */
        init.prototype.flag = function(element, key, recurring) {
            if (recurring) {
                element.attr("data-" + key, "1").data(key, "1");
            } else {
                element.removeAttr("data-" + key).removeData(key);
            }
        };
        /**
         * @param {string} name
         * @param {?} selector
         * @return {?}
         */
        init.prototype.is = function(name, selector) {
            return name in this.options.types ? this.options.types[name](selector) : web.is(name, selector);
        };
        /**
         * @return {?}
         */
        init.prototype.isValid = function() {
            return 0 === this.$obj.find("[data-invalid]:enabled,[data-missing]:enabled,[data-unverified]:enabled").length;
        };
        /**
         * @param {(Function|null)} callback
         * @return {undefined}
         */
        init.prototype.submitHandler = function(callback) {
            var next;
            var self = this;
            var val = this.$obj.data("action");
            if (val) {
                if ("#" != val) {
                    /**
                     * @return {undefined}
                     */
                    next = function() {
                        $.ajax({
                            type : "POST",
                            url : val + (val.indexOf("?") == -1 ? "?" : "&") + "ajax=1",
                            data : self.$obj.serialize(),
                            dataType : "json",
                            /**
                             * @param {(Object|null)} options
                             * @return {?}
                             */
                            success : function(options) {
                                switch(options.action) {
                                    case "alert":
                                        self.showAlert(options.type, options.message);
                                        break;
                                    case "redirect":
                                        return "dashboardAlert" in options && ("dashboard" in app && app.dashboard.setAlert(options.dashboardAlert)), void window.location.replace(options.url);
                                    default:
                                        self.showAlert("success", "Ok.");
                                }
                                if (self.$obj.find('input[name="' + options._key + '"]').val(options[options._key]), callback(), options.reset) {
                                    if (options.reset === true) {
                                        self.$obj.get(0).reset();
                                    } else {
                                        if ($.isArray(options.reset)) {
                                            for (k in options.reset) {
                                                self.$obj.find('input[name="' + options.reset[k] + '"],select[name="' + options.reset[k] + '"]').val("").removeProp("checked");
                                            }
                                        } else {
                                            self.$obj.find('input[name="' + options.reset + '"],select[name="' + options.reset + '"]').val("").removeProp("checked");
                                        }
                                    }
                                    self.$obj.find("input, select, textarea").trigger("change");
                                }
                                if (options.focus) {
                                    self.$obj.find('input[name="' + options.focus + '"]').focus();
                                }
                                if (options.callback) {
                                    window[options.callback]();
                                }
                            }
                        });
                    };
                    window.setTimeout(function() {
                        if (self.options.preSubmitHandler) {
                            self.options.preSubmitHandler.apply(self, [next]);
                        } else {
                            next();
                        }
                    }, 250);
                }
            }
        };
        /**
         * @param {(Object|null)} input
         * @return {undefined}
         */
        init.prototype.validate = function(input) {
            var name = input.data("type");
            /** @type {boolean} */
            var e = 1 == input.data("optional") || input.prop("disabled") === true;
            var key = input.val();
            if ("checkbox" == input.attr("type")) {
                /** @type {string} */
                key = input.prop("checked") ? "on" : "";
            }
            if (!name) {
                /** @type {string} */
                name = "any";
            }
            if ("" == key) {
                this.flag(input, "invalid", false);
                this.flag(input, "missing", !e);
            } else {
                this.flag(input, "missing", false);
                this.flag(input, "invalid", !this.is(name, key));
            }
            if (this.isValid()) {
                this.enableSubmits();
            } else {
                this.disableSubmits();
            }
        };
        /**
         * @return {?}
         */
        init.prototype.$submits = function() {
            return $('input[form="' + this.$obj.attr("id") + '"]').add(this.$obj.find('input[type="submit"]'));
        };
        /**
         * @return {undefined}
         */
        init.prototype.enableSubmits = function() {
            var $button = this.$submits();
            $button.prop("disabled", false);
            $button.removeClass("is-submitting");
        };
        /**
         * @param {boolean} dataAndEvents
         * @return {undefined}
         */
        init.prototype.disableSubmits = function(dataAndEvents) {
            var $button = this.$submits();
            $button.prop("disabled", true);
            if (dataAndEvents) {
                $button.addClass("is-submitting");
            }
        };
        /**
         * @return {undefined}
         */
        init.prototype.initFields = function() {
            var k;
            var item;
            var that;
            for (k in this.options.fields) {
                item = this.options.fields[k];
                that = this.$obj.find('[name="' + k + '"]');
                if ("value" in item) {
                    that.val(item.value);
                }
            }
        };
        /**
         * @return {undefined}
         */
        init.prototype.initType_Group = function() {
            this.$obj.find(".group").formGroup(this);
        };
        /**
         * @param {string} timeOutMillis
         * @param {Object} encoding
         * @return {undefined}
         */
        init.prototype.initRequiresOld = function(timeOutMillis, encoding) {
            var maxtimeOutMillis = timeOutMillis ? timeOutMillis : this.$obj;
            var enc = encoding ? encoding : this.$obj;
            maxtimeOutMillis.find("[data-requires]").each(function() {
                var update;
                var all;
                var uHostName;
                var $input;
                var $this = $(this);
                var match = $this.data("requires").split("=");
                var $button = $this.find("input,select,textarea").not("[data-requires-ignore]");
                all = match[0];
                uHostName = match[1];
                $input = enc.find('[name="' + all + '"]');
                /**
                 * @return {undefined}
                 */
                update = function() {
                    var value;
                    var thisp;
                    var match;
                    var key;
                    switch($input.attr("type")) {
                        case "radio":
                            value = $input.filter(":checked").val();
                            break;
                        case "checkbox":
                            /** @type {string} */
                            value = $input.prop("checked") ? "on" : "off";
                            break;
                        default:
                            value = $input.val();
                    }
                    /** @type {boolean} */
                    thisp = false;
                    match = uHostName.split(",");
                    for (key in match) {
                        /** @type {boolean} */
                        thisp = thisp || ("!" == match[key].charAt(0) ? value != match[key].substring(1) : value == match[key]);
                    }
                    if (thisp) {
                        $button.prop("disabled", false).trigger("change");
                        $this.removeClass("inactive");
                    } else {
                        $button.prop("disabled", true).trigger("change");
                        $this.addClass("inactive");
                    }
                };
                $input.on("change", update);
                window.setTimeout(function() {
                    update();
                }, 0);
            });
        };
        /**
         * @param {string} encoding
         * @param {string} timeOutMillis
         * @return {undefined}
         */
        init.prototype.initRequires = function(encoding, timeOutMillis) {
            var enc = encoding ? encoding : this.$obj;
            var maxtimeOutMillis = timeOutMillis ? timeOutMillis : this.$obj;
            enc.find("[data-requires]").each(function() {
                var update;
                var word;
                var main;
                var $input;
                var _build;
                var isEmpty;
                var invert;
                var words;
                var letter;
                var $this = $(this);
                var map = $this.data("requires").split("&");
                var $button = $this.find("input,select,textarea").not("[data-requires-ignore]");
                /** @type {Array} */
                var a = [];
                /**
                 * @return {undefined}
                 */
                update = function() {
                    var prefix;
                    /** @type {boolean} */
                    var rv = true;
                    for (prefix in a) {
                        rv = a[prefix].fTest() && rv;
                    }
                    if (rv) {
                        $button.prop("disabled", false).trigger("change");
                        $this.removeClass("inactive");
                    } else {
                        $button.prop("disabled", true).trigger("change");
                        $this.addClass("inactive");
                    }
                };
                for (letter in map) {
                    switch(words = map[letter].split("="), invert = false, word = words[0], "!" == word.substr(-1) && (word = word.substr(0, word.length - 1), invert = true), main = words[1].split(","), 1 == main.length && (main = [main]), $input = maxtimeOutMillis.find('[name="' + word + '"]').on("change", update), $input.attr("type")) {
                        case "radio":
                            /**
                             * @return {?}
                             */
                            _build = function() {
                                return this.$input.filter(":checked").val();
                            };
                            break;
                        case "checkbox":
                            /**
                             * @return {?}
                             */
                            _build = function() {
                                return this.$input.prop("checked") ? "on" : "off";
                            };
                            break;
                        default:
                            /**
                             * @return {?}
                             */
                            _build = function() {
                                return this.$input.val();
                            };
                    }
                    /**
                     * @return {?}
                     */
                    isEmpty = function() {
                        var k;
                        var j = this.fValue();
                        if (this.invert) {
                            for (k in this.value) {
                                if (j == this.value[k]) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        for (k in this.value) {
                            if (j == this.value[k]) {
                                return true;
                            }
                        }
                        return false;
                    };
                    a.push({
                        key : word,
                        value : main,
                        $input : $input,
                        /** @type {function (): ?} */
                        fValue : _build,
                        /** @type {function (): ?} */
                        fTest : isEmpty,
                        invert : invert
                    });
                }
                window.setTimeout(function() {
                    update();
                }, 0);
            });
        };
        /**
         * @param {string} encoding
         * @return {undefined}
         */
        init.prototype.initModifiers = function(encoding) {
            var enc = encoding ? encoding : this.$obj;
            var el = this;
            enc.find('input[type="range"][data-status]').each(function() {
                var codeSegments;
                var b;
                var a;
                var i;
                var cell = $(this);
                var content = $('<div class="status" />').insertAfter(cell);
                var field = cell.data("status");
                var names = cell.data("status-args");
                if (names) {
                    codeSegments = names.split("&");
                    a = {};
                    /** @type {number} */
                    i = 0;
                    for (;i < codeSegments.length;i++) {
                        b = codeSegments[i].split("=");
                        a[b[0].toString()] = b[1];
                    }
                    names = a;
                } else {
                    names = {};
                }
                cell.on("change.status", function(dataAndEvents) {
                    var r = cell.val();
                    switch(field) {
                        case "rename":
                            if (r.toString() in names) {
                                r = names[r.toString()];
                            }
                            break;
                        case "seconds":
                            /** @type {string} */
                            r = parseFloat(r) / 1E3 + "s";
                            break;
                        case "degrees":
                            r += "&deg;";
                            break;
                        case "font-weight":
                            if (r in el.statusTables["font-weight"]) {
                                r = el.statusTables["font-weight"][r];
                            }
                            ;
                    }
                    content.html(r);
                }).triggerHandler("change.status");
            });
            enc.find("textarea[data-autosize]").each(function() {
                var target = $(this);
                var topbar = target.parent();
                /** @type {boolean} */
                var callback = 1 == target.filter("[data-autosize-newline]").length;
                target.attr("rows", "1").css("overflow", "hidden").css("resize", "none").on("keydown", callback ? function(event) {
                    if (13 == event.keyCode) {
                        if (event.ctrlKey) {
                            event.preventDefault();
                            if (!el.$submits().prop("disabled")) {
                                el.$obj.trigger("submit");
                            }
                        } else {
                            event.stopPropagation();
                        }
                    }
                } : function(event) {
                    if (13 == event.keyCode) {
                        event.preventDefault();
                        if (!el.$submits().prop("disabled")) {
                            el.$obj.trigger("submit");
                        }
                    }
                }).on("--refresh", function(dataAndEvents) {
                    /** @type {boolean} */
                    var match = false;
                    /**
                     * @return {?}
                     */
                    var getValue = function() {
                        var top;
                        var y;
                        return top = target.prop("scrollHeight") - 4, isNaN(y = parseInt(target.data("autosizeLimit"))) || (top > y && (match = true), top = Math.min(y, top)), top + "px";
                    };
                    topbar.css("min-height", getValue());
                    target.css("height", "auto").css("height", getValue());
                    if (match) {
                        target.css("overflow-y", "scroll").attr("data-autosize-limited", "1");
                    } else {
                        target.css("overflow-y", "hidden").removeAttr("data-autosize-limited");
                    }
                    window.setTimeout(function() {
                        target.css("height", getValue());
                        topbar.css("min-height", getValue());
                    }, 100);
                }).on("input blur focus change", function(dataAndEvents) {
                    target.trigger("--refresh");
                }).on("keydown", function(event) {
                    if (9 == event.keyCode) {
                        target.select();
                    }
                }).trigger("--refresh");
            });
        };
        /**
         * @param {Object} encoding
         * @return {undefined}
         */
        init.prototype.initType_Color = function(encoding) {
            var enc = encoding ? encoding : this.$obj;
            enc.find('input[type="hexcolor"]').formColor();
        };
        /**
         * @param {Object} encoding
         * @return {undefined}
         */
        init.prototype.initType_Image = function(encoding) {
            var enc = encoding ? encoding : this.$obj;
            enc.find(".image-cropper").formImageCropper();
        };
        /**
         * @return {undefined}
         */
        init.prototype.init = function() {
            var self = this;
            if (this.options.validation && this.$obj.on("change blur keyup", "input,select,textarea", function() {
                    self.validate($(this));
                }), !$.isEmptyObject(this.options.verify)) {
                this.$obj.on("--refresh", "input,select,textarea", function(dataAndEvents) {
                    var input = $(this);
                    var quoteNeeded = input.attr("name");
                    var key = input.val();
                    if (quoteNeeded in self.options.verify) {
                        if (input.prop("disabled") !== true) {
                            if ("" == key) {
                                self.flag(input, "unverified", true);
                            } else {
                                input.data("verify-originalValue", key);
                            }
                        }
                    }
                }).on("keydown", "input,select,textarea", function(event) {
                    var $button = $(this);
                    var quoteNeeded = $button.attr("name");
                    if (quoteNeeded in self.options.verify) {
                        if ($button.prop("disabled") !== true) {
                            if (13 == event.keyCode) {
                                event.preventDefault();
                                event.stopPropagation();
                                $button.blur();
                            }
                        }
                    }
                }).on("input", "input,select,textarea", function(dataAndEvents) {
                    var input = $(this);
                    var curr = input.next(".message");
                    var i = input.attr("name");
                    var val = input.val();
                    if (i in self.options.verify) {
                        if (input.prop("disabled") !== true) {
                            self.flag(input, "unverified", true);
                            self.flag(input, "verifailed", false);
                            curr.text("").removeClass("positive").removeClass("negative").removeClass("visible");
                            self.$obj.parent().trigger("--refresh");
                            if ("_form_verifyTimeout" in this) {
                                window.clearTimeout(this._form_verifyTimeout);
                            }
                            /** @type {number} */
                            this._form_verifyTimeout = window.setTimeout(function() {
                                if ("1" != input.data("invalid") && ("" != val && (val = input.val(), "1" != input.data("invalid") && "" != val))) {
                                    if (val == input.data("verify-originalValue")) {
                                        return self.flag(input, "unverified", false), void self.validate(input);
                                    }
                                    curr.text("Checking ...").addClass("visible");
                                    self.$obj.parent().trigger("--refresh");
                                    self.options.verify[i](val, function(res, version) {
                                        self.flag(input, "unverified", !res);
                                        self.validate(input);
                                        if (res === false) {
                                            self.flag(input, "verifailed", true);
                                        }
                                        if (!input.is(":focus")) {
                                            input.trigger("change");
                                        }
                                        curr.addClass(res ? "positive" : "negative").text(version);
                                    });
                                }
                            }, 500);
                        }
                    }
                });
                var p;
                var footer;
                for (p in this.options.verify) {
                    footer = this.$obj.find('input[name="' + p + '"]');
                    if (0 != footer.length) {
                        $('<div class="message"></div>').insertAfter(footer);
                        footer.trigger("--refresh");
                    }
                }
            }
            if (this.$obj.attr("action")) {
                this.$obj.data("action", this.$obj.attr("action")).removeAttr("action");
            }
            this.$obj.on("change", "input,select,textarea", function() {
                var el = $(this);
                var i = el.attr("name");
                if ("name" in self.options.fields) {
                    if ("change" in self.options.fields[i]) {
                        self.options.fields[i].change(el.data("missing") || (el.data("invalid") || el.data("unverified")) ? "" : el.val());
                    }
                }
            });
            this.$obj.on("submit", function(event) {
                var inputs = self.$obj.find("input,select,textarea");
                if (self.options.validation) {
                    inputs.each(function() {
                        self.validate($(this));
                    });
                    if (!self.isValid()) {
                        event.stopPropagation();
                        event.preventDefault();
                    }
                }
                if (self.options.submitHandler) {
                    event.stopPropagation();
                    event.preventDefault();
                    inputs.blur();
                    self.disableSubmits(true);
                    inputs.filter(":disabled").removeData("verify-originalValue");
                    self.clearAlert();
                    self.options.submitHandler(function() {
                        self.enableSubmits();
                    });
                }
            });
            if (this.options.validation) {
                window.setTimeout(function() {
                    self.$obj.find("input,select,textarea").each(function() {
                        self.validate($(this));
                    });
                }, 0);
            }
        };
        /**
         * @param {number} form
         * @return {?}
         */
        $.fn.form = function(form) {
            var emptyJ = $(this);
            if (0 == this.length) {
                return emptyJ;
            }
            if (this.length > 1) {
                /** @type {number} */
                var i = 0;
                for (;i < this.length;i++) {
                    $(this[i]).form(form);
                }
                return emptyJ;
            }
            return this[0]._form = new init(emptyJ, form), emptyJ;
        };
        /** @type {function (?, ?): undefined} */
        module.exports = init;
    }, {
        "./formColor.js" : 2,
        "./formGroup.js" : "formGroup",
        "./formImageCropper.js" : "formImageCropper"
    }],
    tabs : [function(dataAndEvents, module, deepDataAndEvents) {
        /**
         * @param {(Object|null)} t
         * @return {undefined}
         */
        function run(t) {
            var self = this;
            var val = $('<ul class="tabs"></ul>').prependTo(t);
            /** @type {Array} */
            this.tabs = [];
            this.$tabs = $();
            this.$panes = $();
            t.children("section[data-title]").each(function(loc) {
                var data = {
                    $tab : null,
                    $pane : null,
                    title : null
                };
                data.$pane = $(this);
                data.$pane.hide();
                self.$panes = self.$panes.add(data.$pane);
                data.title = data.$pane.data("title");
                data.$tab = $("<li>" + data.title + "</li>").appendTo(val);
                data.$tab.on("click", function() {
                    self.switch(loc);
                });
                self.$tabs = self.$tabs.add(data.$tab);
                self.tabs.push(data);
            });
            this.switch(0);
        }
        /**
         * @param {number} idx
         * @return {undefined}
         */
        run.prototype.switch = function(idx) {
            var tab = this.tabs[idx];
            this.$tabs.removeClass("active");
            this.$panes.hide();
            tab.$tab.addClass("active");
            tab.$pane.show();
            tab.$pane.find("input,select,textarea").trigger("--refresh");
        };
        /**
         * @return {?}
         */
        $.fn.tabs = function() {
            var win = $(this);
            if (0 == this.length) {
                return win;
            }
            if (this.length > 1) {
                /** @type {number} */
                var i = 0;
                for (;i < this.length;i++) {
                    $(this[i]).tabs();
                }
                return win;
            }
            return this[0]._tabs = new run(win), win;
        };
        /** @type {function ((Object|null)): undefined} */
        module.exports = run;
    }, {}]
}, {}, [1]);
