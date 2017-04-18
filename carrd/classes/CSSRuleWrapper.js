[function(dataAndEvents, module, deepDataAndEvents) {
    /**
     * @param {DirectoryEntry} parent
     * @param {Object} rule
     * @return {undefined}
     */
    function $(parent, rule) {
        /** @type {DirectoryEntry} */
        this.parent = parent;
        /** @type {Object} */
        this.rule = rule;
        this.properties = {};
    }
    /** @type {Array} */
    $.prototype.vendors = ["-moz-", "-webkit-", "-ms-", ""];
    /**
     * @param {string} name
     * @param {string} value
     * @return {undefined}
     */
    $.prototype.setProperty = function(name, value) {
        /** @type {string} */
        this.rule.style[name] = value;
        /** @type {boolean} */
        this.properties[name] = true;
    };
    /**
     * @param {string} property
     * @return {undefined}
     */
    $.prototype.unsetProperty = function(property) {
        /** @type {string} */
        this.rule.style[property] = "";
        if (property in this.properties) {
            delete this.properties[property];
        }
    };
    /**
     * @return {undefined}
     */
    $.prototype.unsetAllProperties = function() {
        var i;
        var style;
        /** @type {Array.<string>} */
        style = Object.keys(this.properties);
        for (i in style) {
            /** @type {string} */
            this.rule.style[style[i]] = "";
        }
        this.properties = {};
    };
    /**
     * @param {string} field
     * @return {?}
     */
    $.prototype.get = function(field) {
        return this.rule.style[field];
    };
    /**
     * @param {string} key
     * @param {string} value
     * @return {?}
     */
    $.prototype.set = function(key, value) {
        var i;
        if (value instanceof $) {
            var path = value.get(key);
            if ("object" == typeof path) {
                for (i in path) {
                    this.set(key, path[i]);
                }
            } else {
                this.set(key, path);
            }
        } else {
            if ("object" == typeof key) {
                for (i in key) {
                    this.set(i, key[i]);
                }
            } else {
                var prefixes;
                if ("string" == typeof value && (prefixes = value.match(/(#[a-fA-F0-9]{8})\b/g))) {
                    var prefix;
                    var rxhtmlTag;
                    var parentName;
                    for (i in prefixes) {
                        /** @type {string} */
                        prefix = prefixes[i];
                        /** @type {string} */
                        rxhtmlTag = prefix;
                        /** @type {string} */
                        parentName = (parseInt(prefix.substr(-2, 2), 16) / 255).toFixed(3);
                        /** @type {string} */
                        prefix = prefix.substr(0, 7);
                        if (0 == parentName) {
                            /** @type {string} */
                            prefix = "transparent";
                        } else {
                            if (parentName < 1) {
                                prefix = app.build.htmlTorgb(prefix, parentName);
                            }
                        }
                        /** @type {string} */
                        value = value.replace(rxhtmlTag, prefix);
                    }
                }
                if (~key.indexOf("-vendor-") && ("string" == typeof value && ~value.indexOf("-vendor-"))) {
                    for (i in this.vendors) {
                        this.setProperty(key.replace(/-vendor-/g, this.vendors[i]), value.replace(/-vendor-/g, this.vendors[i]));
                    }
                } else {
                    if (~key.indexOf("-vendor-")) {
                        for (i in this.vendors) {
                            this.setProperty(key.replace(/-vendor-/g, this.vendors[i]), value);
                        }
                    } else {
                        if ("string" == typeof value && ~value.indexOf("-vendor-")) {
                            for (i in this.vendors) {
                                this.setProperty(key, value.replace(/-vendor-/g, this.vendors[i]));
                            }
                        } else {
                            this.setProperty(key, value);
                        }
                    }
                }
            }
        }
        return true;
    };
    /**
     * @param {string} prop
     * @return {undefined}
     */
    $.prototype.unset = function(prop) {
        var i;
        if ("undefined" == typeof prop) {
            this.unsetAllProperties();
        } else {
            if ("object" == typeof prop) {
                for (i in prop) {
                    this.unset(prop[i]);
                }
            } else {
                if (~prop.indexOf("-vendor-")) {
                    for (i in this.vendors) {
                        this.unsetProperty(prop.replace("-vendor-", this.vendors[i]));
                    }
                } else {
                    this.unsetProperty(prop);
                }
            }
        }
    };
    if ("undefined" != typeof module) {
        /** @type {function (DirectoryEntry, Object): undefined} */
        module.exports = $;
    }
}, {}];
