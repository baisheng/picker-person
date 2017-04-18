[function(dataAndEvents, module, deepDataAndEvents) {
    /**
     * @param {CSSStyleSheet} index
     * @param {?} value
     * @return {undefined}
     */
    function Element(index, value) {
        var o;
        var k;
        var i;
        /** @type {CSSStyleSheet} */
        this.styleSheet = index;
        this.breakpoints = value;
        this.ruleWrappers = {};
        this.breakpointMap = {};
        for (k in this.styleSheet.cssRules) {
            if (o = this.styleSheet.cssRules[k], 4 == o.type) {
                for (i in this.breakpoints) {
                    if (this.breakpoints[i].replace(/\s+/g, "") == o.media.mediaText.replace(/\s+/g, "")) {
                        this.breakpointMap[i] = o;
                        break;
                    }
                }
            }
        }
        this.breakpointMap.global = this.styleSheet;
    }
    /**
     * @param {string} wait
     * @param {string} callback
     * @return {?}
     */
    Element.prototype.getId = function(wait, callback) {
        return("undefined" == typeof callback ? "global" : callback) + ":" + wait;
    };
    /**
     * @param {string} selector
     * @param {string} args
     * @return {?}
     */
    Element.prototype.r = function(selector, args) {
        selector = selector.replace(/\.\-/g, ".\\-");
        selector = selector.replace(/#\-/g, "#\\-");
        var result = this.getId(selector, args);
        if (!(result in this.ruleWrappers)) {
            var rule;
            var i;
            var stylesheet = this.breakpointMap[args ? args : "global"];
            var rules = stylesheet.cssRules;
            for (i in rules) {
                if (1 == rules[i].type && rules[i].selectorText == selector) {
                    rule = rules[i];
                    break;
                }
            }
            if (!rule) {
                rule = rules[stylesheet.insertRule(selector + " {}", 0)];
            }
            this.ruleWrappers[result] = new CSSRuleWrapper(this, rule);
        }
        return this.ruleWrappers[result];
    };
    /**
     * @param {string} selector
     * @param {string} elems
     * @return {undefined}
     */
    Element.prototype.unsetAll = function(selector, elems) {
        selector = selector.replace(/\.\-/g, ".\\-");
        selector = selector.replace(/#\-/g, "#\\-");
        var segment;
        var ret = this.getId(selector, elems);
        for (segment in this.ruleWrappers) {
            if (segment.match("^" + ret.replace("\\", "\\\\") + "\\b")) {
                this.ruleWrappers[segment].unsetAllProperties();
            }
        }
    };
    if ("undefined" != typeof module) {
        /** @type {function (CSSStyleSheet, ?): undefined} */
        module.exports = Element;
    }
}, {}];
