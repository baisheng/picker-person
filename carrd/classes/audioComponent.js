[function(format, module, dataAndEvents) {
    /**
     * @param {?} contentSize
     * @param {?} callbacks
     * @return {undefined}
     */
    function initialize(contentSize, callbacks) {
        /** @type {null} */
        this.url = null;
        this.soundcloud = {
            style : null,
            width : null,
            height : null,
            autoplay : null,
            showArtwork : null,
            showBuying : null,
            showComments : null,
            showDownload : null,
            showLiking : null,
            showPlaycount : null,
            showSharing : null,
            showUser : null
        };
        this.gumroadOverlay = {
            style : null,
            width : null,
            height : null,
            colorBG : null,
            colorLink : null
        };
        f.apply(this, [contentSize, callbacks]);
        var self = this;
        /**
         * @param {string} property
         * @return {?}
         */
        var render = function(property) {
            return self.form_for(property);
        };
        /**
         * @param {string} m
         * @return {?}
         */
        var update = function(m) {
            return self.form_id(m);
        };
        /**
         * @param {string} callback
         * @param {string} context
         * @return {?}
         */
        var close = function(callback, context) {
            return self.form_req(callback, context);
        };
        this.form('<form><div class="field"><label ' + render("url") + '>URL</label><input type="text" ' + update("url") + ' maxlength="1024" /><div class="note"><p>Supports URLs in the following formats:</p><ul><li>SoundCloud (<em>https://soundcloud.com/xxxxxx/yyyyyy</em> or <em>https://soundcloud.com/xxxxxx/sets/yyyyyy</em>)</li><li>Bandcamp (<em>https://bandcamp.com/album/xxxxxx</em> or <em>https://bandcamp.com/track/yyyyyy</em>)</li></ul></div><input type="hidden" ' + update("mode") + ' value="" /></div><section ' +
            close("mode", "soundcloud") + '><div class="field"><label>Style</label><div class="select-wrapper"><select ' + update("soundcloud_style") + '><option value="standard">Standard</option><option value="visual">Visual</option></select></div></div><div class="field"><label ' + render("soundcloud_width") + '>Width</label><input type="range" ' + update("soundcloud_width") + ' min="20" max="100" step="1" data-status /></div><div class="field" ' + close("soundcloud_style", "visual") + "><label " + render("soundcloud_height") +
            '>Height</label><input type="range" ' + update("soundcloud_height") + ' min="7" max="30" step="1" data-status /></div><label>Options</label><div class="field"><input type="checkbox" ' + update("soundcloud_autoplay") + " /><label " + render("soundcloud_autoplay") + '>Autoplay</label></div><div class="field" ' + close("soundcloud_style", "!visual") + '><input type="checkbox" ' + update("soundcloud_showArtwork") + " /><label " + render("soundcloud_showArtwork") + '>Show artwork</label></div><div class="field"><input type="checkbox" ' +
            update("soundcloud_showBuying") + " /><label " + render("soundcloud_showBuying") + '>Show buy buttons</label></div><div class="field"><input type="checkbox" ' + update("soundcloud_showComments") + " /><label " + render("soundcloud_showComments") + '>Show comments</label></div><div class="field"><input type="checkbox" ' + update("soundcloud_showDownload") + " /><label " + render("soundcloud_showDownload") + '>Show download buttons</label></div><div class="field"><input type="checkbox" ' + update("soundcloud_showLiking") +
            " /><label " + render("soundcloud_showLiking") + '>Show like buttons</label></div><div class="field"><input type="checkbox" ' + update("soundcloud_showPlaycount") + " /><label " + render("soundcloud_showPlaycount") + '>Show play counts</label></div><div class="field"><input type="checkbox" ' + update("soundcloud_showSharing") + " /><label " + render("soundcloud_showSharing") + '>Show share buttons</label></div><div class="field"><input type="checkbox" ' + update("soundcloud_showUser") + " /><label " +
            render("soundcloud_showUser") + ">Show uploader name</label></div></section><section " + close("mode", "bandcamp") + '><div class="field"><label>Style</label><div class="select-wrapper"><select ' + update("bandcamp_style") + '><option value="slim">Slim</option><option value="minimal">Artwork Only</option><option value="standard">Standard</option></select></div></div><div class="field"><label ' + render("bandcamp_width") + '>Width</label><input type="range" ' + update("bandcamp_width") + ' min="20" max="40" step="1" data-status /></div><div class="field" ' +
            close("bandcamp_style", "!slim") + "><label " + render("bandcamp_height") + '>Height</label><input type="range" ' + update("bandcamp_height") + ' min="7" max="30" step="1" data-status /></div><div class="field"><label ' + render("bandcamp_colorBG") + '>Background Color</label><div class="select-wrapper"><select ' + update("bandcamp_colorBG") + '><option value="#ffffff" style="background-color:#ffffff;color:#000000">White</option><option value="#333333" style="background-color:#333333;color:#ffffff">Gray</option></select></div></div><div class="field"><label ' +
            render("bandcamp_colorLink") + '>Link Color</label><div class="select-wrapper"><select ' + update("bandcamp_colorLink") + '><option value="#0687f5" style="background-color:#0687f5;color:#ffffff">Blue</option><option value="#e99708" style="background-color:#e99708;color:#ffffff">Orange</option><option value="#2ebd35" style="background-color:#2ebd35;color:#ffffff">Green</option><option value="#7137dc" style="background-color:#7137dc;color:#ffffff">Purple</option><option value="#f171a2" style="background-color:#f171a2;color:#ffffff">Pink</option><option value="#63b2cc" style="background-color:#63b2cc;color:#ffffff">Cyan</option><option value="#de270f" style="background-color:#de270f;color:#ffffff">Red</option><option value="#333333" style="background-color:#333333;color:#ffffff">Gray</option></select></div></div></section></form>');
        this.registerProperty("url", {
            input : "text",
            /**
             * @param {string} value
             * @return {?}
             */
            type : function(value) {
                return!!web.is("uri", value) && !!self.mode(value);
            },
            live : true
        });
        this.registerProperty("soundcloud_style", {
            input : "text",
            type : "word",
            allowed : ["standard", "visual"]
        });
        this.registerProperty("soundcloud_width", {
            input : "text",
            type : "float"
        });
        this.registerProperty("soundcloud_height", {
            input : "text",
            type : "float"
        });
        this.registerProperty("soundcloud_autoplay", {
            input : "checkbox",
            type : "bool"
        });
        this.registerProperty("soundcloud_showArtwork", {
            input : "checkbox",
            type : "bool"
        });
        this.registerProperty("soundcloud_showBuying", {
            input : "checkbox",
            type : "bool"
        });
        this.registerProperty("soundcloud_showComments", {
            input : "checkbox",
            type : "bool"
        });
        this.registerProperty("soundcloud_showDownload", {
            input : "checkbox",
            type : "bool"
        });
        this.registerProperty("soundcloud_showLiking", {
            input : "checkbox",
            type : "bool"
        });
        this.registerProperty("soundcloud_showPlaycount", {
            input : "checkbox",
            type : "bool"
        });
        this.registerProperty("soundcloud_showSharing", {
            input : "checkbox",
            type : "bool"
        });
        this.registerProperty("soundcloud_showUser", {
            input : "checkbox",
            type : "bool"
        });
        this.registerProperty("bandcamp_style", {
            input : "text",
            type : "word",
            allowed : ["slim", "minimal", "standard"]
        });
        this.registerProperty("bandcamp_width", {
            input : "text",
            type : "float"
        });
        this.registerProperty("bandcamp_height", {
            input : "text",
            type : "float"
        });
        this.registerProperty("bandcamp_colorBG", {
            input : "text",
            type : "htmlacolor"
        });
        this.registerProperty("bandcamp_colorLink", {
            input : "text",
            type : "htmlacolor"
        });
        this.properties.url.$field.on("change input", function() {
            var $radio = $(this);
            var date = self.mode($radio.val());
            self.$form.find('input[name="mode"]').val(date ? date.split("-")[0] : "").trigger("change");
        }).on("blur", function() {
            var input = $(this);
            window.setTimeout(function() {
                input.triggerHandler("change");
            }, 0);
        });
        window.setTimeout(function() {
            self.properties.url.$field.triggerHandler("change");
        }, 0);
    }
    var f = format("./component");
    initialize.prototype = new f;
    /** @type {function (?, ?): undefined} */
    initialize.prototype.constructor = initialize;
    /** @type {string} */
    initialize.prototype.type = "audio";
    initialize.prototype.contentDependencies = {};
    /**
     * @param {string} value
     * @return {?}
     */
    initialize.prototype.mode = function(value) {
        return!!web.is("url", value) && (value.match(/^https?:\/\/soundcloud\.com\/[a-z0-9\-\_]+\/[a-z0-9\-\_]+\/?$/) ? "soundcloud-track" : value.match(/^https?:\/\/soundcloud\.com\/[a-z0-9\-\_]+\/sets\/[a-z0-9\-\_]+\/?$/) ? "soundcloud-playlist" : value.match(/^https?:\/\/[a-z0-9\-]+\.bandcamp\.com\/album\/[a-z0-9\-\_]+\/?$/) ? "bandcamp-album" : value.match(/^https?:\/\/[a-z0-9\-]+\.bandcamp\.com\/track\/[a-z0-9\-\_]+\/?$/) ? "bandcamp-track" : null);
    };
    /**
     * @param {?} o
     * @return {undefined}
     */
    initialize.prototype.import = function(o) {
        var callback = this.importValue;
        this.url = callback(o, "url");
        this.soundcloud = $.extend(this.soundcloud, o.soundcloud);
        this.bandcamp = $.extend(this.bandcamp, o.bandcamp);
    };
    /**
     * @param {?} indent
     * @return {undefined}
     */
    initialize.prototype.export = function(indent) {
        /** @type {*} */
        indent.soundcloud = JSON.parse(JSON.stringify(this.soundcloud));
        /** @type {*} */
        indent.bandcamp = JSON.parse(JSON.stringify(this.bandcamp));
        indent.syncAll();
    };
    /**
     * @param {?} l
     * @param {?} fire
     * @return {undefined}
     */
    initialize.prototype.createClone = function(l, fire) {
        var args;
        args = new initialize(l);
        args.url = this.url;
        /** @type {*} */
        args.soundcloud = JSON.parse(JSON.stringify(this.soundcloud));
        /** @type {*} */
        args.bandcamp = JSON.parse(JSON.stringify(this.bandcamp));
        args.syncAll();
        fire(args);
    };
    /**
     * @param {Node} rgba
     * @return {undefined}
     */
    initialize.prototype.cssBase = function(rgba) {
        rgba.r(".--audio").set({
            position : "relative"
        });
        rgba.r(".--audio .--frame").set({
            position : "relative",
            overflow : "hidden",
            "max-width" : "100%",
            display : "inline-block"
        });
        rgba.r(".--audio .--frame .--iframe").set({
            position : "absolute",
            top : "0px",
            right : "0px",
            bottom : "0px",
            left : "0px",
            width : "100%",
            height : "100%"
        });
        rgba.r(".--audio .--frame .--iframe").set({
            display : "-vendor-flex",
            "-vendor-align-items" : "center",
            "-vendor-justify-content" : "center",
            "text-align" : "center"
        });
        rgba.r(".--audio.placeholder .--frame .--iframe").set({
            overflow : "hidden"
        });
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    initialize.prototype.redraw = function(filter) {
        var centerX;
        var path = this.styleSheet;
        var self = this;
        /**
         * @param {Array} fullName
         * @param {Function} a
         * @return {undefined}
         */
        var f = function(fullName, a) {
            if (!filter || fullName.indexOf(filter) > -1) {
                a();
            }
        };
        var parts = this.mode(this.url);
        if (!this.url) {
            return f(["url"], function() {
                self.$canvas.html('<div class="--audio placeholder" id="--' + self.id + '"><div class="--frame"><div class="--iframe"><span>No Audio URL</span></div></div></div>');
            }), centerX = this.selector(), void path.unsetAll(centerX);
        }
        switch(f(["url", "soundcloud_style", "bandcamp_style"], function() {
            /** @type {string} */
            var css = "";
            switch(parts) {
                case "soundcloud-track":
                    ;
                case "soundcloud-playlist":
                    css = self.soundcloud.style;
                    break;
                case "bandcamp-track":
                    ;
                case "bandcamp-album":
                    css = self.bandcamp.style;
            }
            self.$canvas.html('<div class="--audio ' + (parts ? parts.split("-")[0] : "") + " " + css + '" id="--' + self.id + '"><div class="--frame"><div class="--iframe"><span>' + self.url.replace(/https?:\/\/(www\.)?/, "") + "</span></div></div></div>");
        }), centerX = this.selector(), path.unsetAll(centerX), parts) {
            case "soundcloud-track":
                ;
            case "soundcloud-playlist":
                path.r(centerX + " .--frame").set("width", this.soundcloud.width + "rem");
                if ("visual" == this.soundcloud.style) {
                    path.r(centerX + " .--frame").set("height", this.soundcloud.height + "rem");
                } else {
                    path.r(centerX + " .--frame").set("height", "119px");
                }
                break;
            case "bandcamp-track":
                ;
            case "bandcamp-album":
                path.r(centerX + " .--frame").set("width", this.bandcamp.width + "rem");
                if ("slim" != this.bandcamp.style) {
                    path.r(centerX + " .--frame").set("height", this.bandcamp.height <= 7 ? "120px" : this.bandcamp.height + "rem");
                } else {
                    path.r(centerX + " .--frame").set("height", "42px");
                }
                ;
        }
    };
    /** @type {function (?, ?): undefined} */
    module.exports = initialize;
}, {
    "./component" : 7
}];
