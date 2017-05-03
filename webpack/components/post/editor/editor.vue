<template>
    <div class="panel panel-default note-editor" :class="{ 'codeview': !isView, 'fullscreen': isFullScreen}">

        <div class="panel-heading">
            <input type="text"
                   placeholder="无标题"
                   name="title"
                   style="width: 300px;"
                   class="no-border text-semibold" v-model="model.title">

            <div class="heading-elements">
                <ul class="list-inline list-inline-separate heading-text">
                    <!--<li>Rating: <span class="text-semibold">4.85</span></li>-->
                    <li class="active">
                        <i class=" position-left text-muted"
                           :class="classObject"></i></li>
                    <li>
                        <i class="icon-bookmark2 text-size-base text-warning-300"></i>
                        <!--<span class="text-muted position-right">(439)</span>-->
                    </li>
                </ul>
            </div>
        </div>

        <ul class="nav nav-lg nav-tabs nav-tabs-bottom nav-tabs-toolbar no-margin">
            <li title="" data-original-title="全屏">
                <a @click="undo">
                    <i class="note-icon-undo"></i>
                </a>
            </li>

            <li
                    data-original-title="帮助">
                <a @click="redo">
                    <i class="note-icon-redo"></i>
                </a>
            </li>

            <li
                    title="" data-original-title="粗体 (⌘+B)">
                <a @click="toggleBold">
                    <i class="note-icon-bold"></i>
                </a>
            </li>
            <li
                    title="" data-original-title="下划线 (⌘+U)">
                <a @click="toggleItalic"><i
                        class="note-icon-italic"></i>
                </a>
            </li>

            <li
                    data-original-title="删除线 (⌘+\)">
                <a @click="toggleStrikethrough"><i class="note-icon-strikethrough"></i></a>
            </li>

            <li
                    data-original-title="段落 (⌘+\)">
                <a @click="toggleHeadingSmaller">
                    H
                </a>
            </li>


            <li
                    data-original-title="Unordered list (⌘+⇧+NUM7)">
                <a @click="toggleUnorderedList">
                    <i class="note-icon-unorderedlist"></i>
                </a>
            </li>
            <li
                    data-original-title="Ordered list (⌘+⇧+NUM8)">
                <a @click="toggleOrderedList">
                    <i class="note-icon-orderedlist"></i>
                </a>
            </li>
            <li
                    data-original-title="链接 (⌘+K)">
                <a @click="drawLink"><i class="note-icon-link"></i></a></li>
            <li
                    data-original-title="图片">
                <a @click="drawImage"><i class="note-icon-picture"></i></a>
            </li>
            <li
                    data-original-title="代码">
                <a @click="toggleCodeBlock"><i class="note-icon-code"></i></a>
            </li>
            <li
                    data-original-title="表格">
                <a @click="drawTable"><i
                        class="note-icon-table"></i>
                </a>
            </li>

            <li
                    title="" data-original-title="分隔线">
                <a @click="drawHorizontalRule">—</a>
            </li>

            <li>
                <a @click="togglePreview"
                   title="" data-original-title=""><i
                        class="fa fa-eye"></i></a>
            </li>
            <li
                    title="" data-original-title="全屏">
                <a @click="toggleFullScreen">
                    <i class="note-icon-arrows-alt"></i>
                </a>
            </li>
            <li
                    data-original-title="帮助"><a><i class="note-icon-question"></i></a></li>
        </ul>
        <textarea id="_editor" class="note-codable  "></textarea>
    </div>


</template>

<style>
    .snippet--content {
        font-family: -apple-system, BlinkMacSystemFont, PingFang SC, Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;
        max-height: 220px;
        overflow: auto;
    }

    .snippet--panel {
        /*position: relative;*/
        /*right: calc(10% - 0px);*/
        /*margin-right: -125px;*/
        /*top: 100px;*/
        /*width: 280px;*/
        color: #898989;
        opacity: 1;
        /*z-index: 11;*/
        /*z-index: 9999;*/
        background-color: #fafafa;
        /*border-radius: 4px;*/

        /*-webkit-border-radius: 4px;*/
        /*-moz-border-radius: 4px;*/

        transition: all .2s ease-in;

        /*-ms-box-shadow: 0 2px 8px hsla(0, 0%, 50%, .8);*/
        /*-o-box-shadow: 0 2px 8px hsla(0, 0%, 50%, .8);*/
        /*box-shadow: 0 2px 8px hsla(0, 0%, 50%, .8);*/
        transition-property: right;
    }

    .snippet--panel.fadeout {
        opacity: 0;
        transition: all .5s ease-in;
    }

    .note-editor .note-codable {
        display: none;
        width: 100%;
        overflow: auto;

        padding: 20px;
        margin-bottom: 0;
        font-family: -apple-system, BlinkMacSystemFont, PingFang SC, Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;
        line-height: 1.7;
        font-size: 16px;
        color: #333;
        background-color: #fff;
        border: 0;
        border-radius: 0;
        resize: none;
        -webkit-box-shadow: none;
        box-shadow: none;
    }



</style>

<script>
    import CodeMirror from 'codemirror';
    require('codemirror/addon/edit/continuelist.js')
    require("./codemirror/tablist");
    require("codemirror/addon/display/fullscreen.js");
    require("codemirror/mode/markdown/markdown.js");
    require("codemirror/mode/css/css.js");
    require("codemirror/mode/clike/clike.js");
    require("codemirror/mode/javascript/javascript.js");
    require("codemirror/mode/meta.js");
    require("codemirror/addon/mode/overlay.js");
    require("codemirror/addon/display/placeholder.js");
    require("codemirror/addon/selection/mark-selection.js");
    require("codemirror/mode/gfm/gfm.js");
    require("codemirror/mode/xml/xml.js");
    import markdownIt from 'markdown-it'
    import emoji from 'markdown-it-emoji'
    import subscript from 'markdown-it-sub'
    import superscript from 'markdown-it-sup'
    import footnote from 'markdown-it-footnote'
    import deflist from 'markdown-it-deflist'
    //import abbreviation from 'markdown-it-abbr'
    //import insert from 'markdown-it-ins'
    import mark from 'markdown-it-mark'
    //import toc from 'markdown-it-toc-and-anchor'
    //import katex from 'markdown-it-katex'
    // 获取选中文字
    function getSelectText() {
        var userSelection, text;
        if (window.getSelection) {
            // Firefox support
            userSelection = window.getSelection();
        } else if (document.selection) {
            // IE Support
            userSelection = document.selection.createRange();
        }
        if (!(text = userSelection.text)) {
            text = userSelection;
        }
        return text;
    }
    let isMac = /Mac/.test(navigator.platform);
    /**
     * Fix shortcut. Mac use Command, others use Ctrl.
     */
    function fixShortcut(name) {
        if (isMac) {
            name = name.replace("Ctrl", "Cmd");
        } else {
            name = name.replace("Cmd", "Ctrl");
        }
        return name;
    }
    /**
     * The state of CodeMirror at the given position.
     */
    function getState(cm, pos) {
        pos = pos || cm.getCursor("start");
        let stat = cm.getTokenAt(pos);
        if (!stat.type) return {};

        let types = stat.type.split(" ");

        let ret = {},
            data, text;
        for (let i = 0; i < types.length; i++) {
            data = types[i];
            if (data === "strong") {
                ret.bold = true;
            } else if (data === "letiable-2") {
                text = cm.getLine(pos.line);
                if (/^\s*\d+\.\s/.test(text)) {
                    ret["ordered-list"] = true;
                } else {
                    ret["unordered-list"] = true;
                }
            } else if (data === "atom") {
                ret.quote = true;
            } else if (data === "em") {
                ret.italic = true;
            } else if (data === "quote") {
                ret.quote = true;
            } else if (data === "strikethrough") {
                ret.strikethrough = true;
            } else if (data === "comment") {
                ret.code = true;
            } else if (data === "link") {
                ret.link = true;
            } else if (data === "tag") {
                ret.image = true;
            } else if (data.match(/^header(\-[1-6])?$/)) {
                ret[data.replace("header", "heading")] = true;
            }
        }
        return ret;
    }
    export default {
        name: 'Editor',
        md: new markdownIt(),
        props: {
            status: {
                type: String,
                default: 'init'
            },
            watches: {
                type: Array,
                default: () => ['source', 'show', 'toc'],
            },
//            source: {
//                type: String,
//                default: ``,
//            },
            model: {
                required: true
            },
            show: {
                type: Boolean,
                default: true,
            },
            html: {
                type: Boolean,
                default: true,
            },
            xhtmlOut: {
                type: Boolean,
                default: true,
            },
            breaks: {
                type: Boolean,
                default: true,
            },
            linkify: {
                type: Boolean,
                default: true,
            },
            emoji: {
                type: Boolean,
                default: true,
            },
            typographer: {
                type: Boolean,
                default: true,
            },
            langPrefix: {
                type: String,
                default: 'language-',
            },
            quotes: {
                type: String,
                default: '“”‘’',
            },
            tableClass: {
                type: String,
                default: 'table',
            },
            toc: {
                type: Boolean,
                default: false,
            },
            tocId: {
                type: String,
            },
            tocClass: {
                type: String,
                default: 'table-of-contents',
            },
            tocFirstLevel: {
                type: Number,
                default: 2,
            },
            tocLastLevel: {
                type: Number,
            },
            tocAnchorLink: {
                type: Boolean,
                default: true,
            },
            tocAnchorClass: {
                type: String,
                default: 'toc-anchor',
            },
            tocAnchorLinkSymbol: {
                type: String,
                default: '#',
            },
            tocAnchorLinkSpace: {
                type: Boolean,
                default: true,
            },
            tocAnchorLinkClass: {
                type: String,
                default: 'toc-anchor-link',
            },
        },
        data(){
            return {

                sourceData: this.model.content,
//                toc: false,
                isView: false,
                isFullScreen: false,
                keyMaps: {},
//                selectedWordCount: 0,
//                selectedText: '',
//                selectedWord: '',

                selected: {
                    word: '',
                    wordHtml: '',
                    wordCount: 0
                },
                options: {
                    tabSize: 2,
                    indentUnit: 2,
                    indentWithTabs: false,
                    lineNumbers: false,
                    autofocus: true,
                    lineWrapping: true,
                    placeholder: "输入入内容",
                    styleSelectedText: true,
                    shortcuts: {
                        "toggleBold": "Cmd-B",
                        "toggleItalic": "Cmd-I",
                        "drawLink": "Cmd-K",
                        "toggleHeadingSmaller": "Cmd-H",
                        "toggleHeadingBigger": "Shift-Cmd-H",
                        "cleanBlock": "Cmd-E",
                        "drawImage": "Cmd-Alt-I",
                        "toggleBlockquote": "Cmd-'",
                        "toggleOrderedList": "Cmd-Alt-L",
                        "toggleUnorderedList": "Cmd-L",
                        "toggleCodeBlock": "Cmd-Alt-C",
                        "togglePreview": "Cmd-P",
                        "toggleSideBySide": "F9",
                        "toggleFullScreen": "F11"
                    },
                },

                editor: {
                    options: {
                        toolbar: true,
                        promptTexts: {
                            link: "URL for the link:",
                            image: "URL of the image:"
                        },
                        insertTexts: {
                            link: ["[", "](#url#)"],
                            image: ["![](", "#url#)"],
                            table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n"],
                            horizontalRule: ["", "\n\n-----\n\n"]
                        },
                        blockStyles: {
                            "bold": "**",
                            "code": "```",
                            "italic": "*"
                        }
                    },
                    codemirror: {}
                },
                stats: {
                    words: 0,
                    chars: 0
                },

            }
        },
        components: {
//            VueMarkdown,

        },
        created: function () {
            this.md = new markdownIt()
                .use(subscript)
                .use(superscript)
                .use(footnote)
                //                .use(deflist)
                //                                .use(abbreviation)
                //                                .use(insert)
                .use(mark)
//                .use(katex, {"throwOnError" : false, "errorColor" : " #cc0000"})

            if (this.emoji) {
                this.md.use(emoji)
            }


            this.md.set({
                html: this.html,
                xhtmlOut: this.xhtmlOut,
                breaks: this.breaks,
                linkify: this.linkify,
                typographer: this.typographer,
                langPrefix: this.langPrefix,
                quotes: this.quotes,
            })

            this.md.renderer.rules.table_open = () => `<table class="${this.tableClass}">\n`
//            const outHtml = this.show ? this.md.render(this.sourceData) :
            this.bindings = {
                "toggleBold": this.toggleBold,
                "toggleItalic": this.toggleItalic,
                "drawLink": this.drawLink,
                "toggleHeadingSmaller": this.toggleHeadingSmaller,
                "toggleHeadingBigger": this.toggleHeadingBigger,
                "drawImage": this.drawImage,
                "toggleBlockquote": this.toggleBlockquote,
                "toggleOrderedList": this.toggleOrderedList,
                "toggleUnorderedList": this.toggleUnorderedList,
                "toggleCodeBlock": this.toggleCodeBlock,
                "togglePreview": this.togglePreview,
                "toggleStrikethrough": this.toggleStrikethrough,
                "toggleHeading1": this.toggleHeading1,
                "toggleHeading2": this.toggleHeading2,
                "toggleHeading3": this.toggleHeading3,
                "cleanBlock": this.cleanBlock,
                "drawTable": this.drawTable,
                "drawHorizontalRule": this.drawHorizontalRule,
                "undo": this.undo,
                "redo": this.redo,
                "toggleSideBySide": this.toggleSideBySide,
                "toggleFullScreen": this.toggleFullScreen
            }

            let self = this;
            for (let key in this.options.shortcuts) {
                // null stands for "do not bind this command"
                if (this.options.shortcuts[key] !== null && this.bindings[key] !== null) {
                    (function (key) {
                        self.keyMaps[fixShortcut(self.options.shortcuts[key])] = function () {
                            self.bindings[key](self);
                        };
                    })(key);
                }
            }

            this.keyMaps["Enter"] = "newlineAndIndentContinueMarkdownList";
            this.keyMaps["Tab"] = "tabAndIndentMarkdownList";
            this.keyMaps["Shift-Tab"] = "shiftTabAndUnindentMarkdownList";
//            this.keyMaps["Esc"] = function(cm) {
//                if(cm.getOption("fullScreen")) toggleFullScreen(self);
//            };
        },
        mounted: function () {

            eventHub.$on('init', (content) => {
                this.sourceData = content;
                this.value(this.sourceData);

            })

            eventHub.$on('update', (content) => {
                this.sourceData = content;
                this.value(this.sourceData);

            })
            eventHub.$on('replaceSelection', (content) => {
                this.clearAndSnippet(content)
            })
//            this.$nextTick(() => {
//                this._w = this.$el.offsetWidth
//                this._h = this.$el.offsetHeight
//
//                console.log(this._w + ":" + this._h)
//            })

            let scope = this;
            let mode = {}
            mode.name = "gfm";

            this.editor.codemirror = CodeMirror.fromTextArea(document.getElementById("_editor"), {
                mode: 'gfm',
//                backdrop: backdrop,
                theme: "default",
                tabSize: (this.options.tabSize != undefined) ? this.options.tabSize : 2,
                indentUnit: (this.options.tabSize != undefined) ? this.options.tabSize : 2,
                indentWithTabs: (this.options.indentWithTabs === false) ? false : true,
                lineNumbers: false,
                autofocus: (this.options.autofocus === true) ? true : false,
                extraKeys: this.keyMaps,
                lineWrapping: (this.options.lineWrapping === false) ? false : true,
                allowDropFileTypes: ["text/plain"],
//                placeholder: this.options.placeholder || el.getAttribute("placeholder") || "",
                styleSelectedText: (this.options.styleSelectedText != undefined) ? this.options.styleSelectedText : true
            })

            this.editor.codemirror.on('change', function (cm) {
                scope.sourceData = cm.getValue();

                scope.$emit('change', cm.getValue())
            });


            this.editor.codemirror.on('cursorActivity', function (cm) {

                scope.selected.word = cm.getSelection();
                scope.selected.wordCount = scope._wordCount(cm.getSelection());
                scope.selected.wordHtml = scope.md.render(cm.getSelection());

                scope.$emit('selection', scope.selected);
            });


            // 初始化值
        },


        computed: {
            wordCount() {
                return this._wordCount(this.sourceData);
            },
            words: function () {
                return this.sourceData.split(' ').length - 1;
            },
//
            chars: function () {
                return this.sourceData.length;
            },
            classObject: function () {

                if (this.status === 'saving') {
                    return 'icon-sync spinner text-primary'
                } else if (this.status === 'success') {
                    this.loadingText = '更换完成';
                    return 'icon-check text-success';
                } else if (this.status === 'error') {
                    this.loadingText = '更换失败';
                    return 'icon-warning22 text-warning'
                }

                return 'icon-sync';

            }
//
//            lastChar: function () {
//                return this.sourceData[this.model.text.length - 1];
//            }
        },
        methods: {
            _wordCount(data) {
                let pattern = /[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;

                let m = data.match(pattern);
                let count = 0;
                if (m === null) return count;
                for (let i = 0; i < m.length; i++) {
                    if (m[i].charCodeAt(0) >= 0x4E00) {
                        count += m[i].length;
                    } else {
                        count += 1;
                    }
                }
                return count;
            },
            copyAndSnippet(){
            },
            clearAndSnippet(){
//                this._replaceSelection("");
                let cm = this.editor.codemirror;
                let doc = cm.getDoc();
                doc.replaceSelection("");
            },

            toggleBtn: function () {
                let el = document.querySelectorAll('.note-btn-group button');
                for (let x of el) {
                    x.setAttribute('disabled', 'disabled')
                }

//                $btn.toggleClass('disabled', !isEnable);
//                $btn.attr('disabled', !isEnable);
            },
            toggleBtnActive(){
                let el = document.querySelectorAll('.note-btn-group button');
                for (let x of el) {

                    x.removeAttribute('disabled')
                }
            },
//            toggleBtnActive: function ($btn, isActive) {
//                $btn.toggleClass('active', isActive);
//            },
//            this.updateBtnStates = function (infos) {
//            $.each(infos, function (selector, pred) {
//                ui.toggleBtnActive($toolbar.find(selector), pred());
//            });
//        },
            resize(){
                this._w = this.$el.offsetWidth
                this._h = this.$el.offsetHeight
            },

            addSnippet(){
                alert("lalala")
                let cm = this.editor.codemirror;
                let selectionText = cm.getSelection();

                console.log(selectionText);
            },
            toggleBold(){

                this._toggleBlock(this.editor, "bold", this.editor.options.blockStyles.bold);
            },
            toggleItalic() {
                this._toggleBlock(this.editor, "italic", this.editor.options.blockStyles.italic);
            },
            toggleFullScreen(){
                this.isFullScreen = !this.isFullScreen;
            },

            togglePreview() {
                let cm = this.editor.codemirror;

                let wrapper = cm.getWrapperElement();
                let toolbar_div = wrapper.previousSibling;
//                let toolbar = this.editor.options.toolbar ? this.editor.toolbarElements.preview : false;
                let preview = wrapper.lastChild;
                if (!preview || !/editor-preview/.test(preview.className)) {
                    preview = document.createElement("div");
                    preview.className = "editor-preview";
                    wrapper.appendChild(preview);
                }
                if (/editor-preview-active/.test(preview.className)) {
                    preview.className = preview.className.replace(
                        /\s*editor-preview-active\s*/g, ""
                    );
                    if (toolbar) {
                        this.toggleBtnActive();

//                        toolbar.className = toolbar.className.replace(/\s*active\s*/g, "");
//                        toolbar_div.className = toolbar_div.className.replace(/\s*disabled-for-preview*/g, "");
                    }
                } else {
                    // When the preview button is clicked for the first time,
                    // give some time for the transition from editor.css to fire and the view to slide from right to left,
                    // instead of just appearing.
                    setTimeout(function () {
                        preview.className += " editor-preview-active";
                    }, 1);
                    if (toolbar) {
                        this.toggleBtn();

//                        toolbar.className += " active";
//                        toolbar_div.className += " disabled-for-preview";
                    }
                }
//                preview.innerHTML = this.editor.options.previewRender(cm.getValue(), preview);

                preview.innerHTML = this.md.render(this.sourceData)
                // Turn off side by side if needed
//                let sidebyside = cm.getWrapperElement().nextSibling;
//                if(/editor-preview-active-side/.test(sidebyside.className))
//                    toggleSideBySide(editor);
            },
            /**
             * Action for toggling code block.
             */
            toggleCodeBlock() {
                let vue = this;
                let fenceCharsToInsert = this.editor.options.blockStyles.code;

                function fencing_line(line) {
                    /* return true, if this is a ``` or ~~~ line */
                    if (typeof line !== "object") {
                        throw "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " + typeof line + ": " + line;
                    }
                    return line.styles && line.styles[2] && line.styles[2].indexOf("formatting-code-block") !== -1;
                }

                function token_state(token) {
                    // base goes an extra level deep when mode backdrops are used, e.g. spellchecker on
                    return token.state.base.base || token.state.base;
                }

                function code_type(cm, line_num, line, firstTok, lastTok) {
                    /*
                     * Return "single", "indented", "fenced" or false
                     *
                     * cm and line_num are required.  Others are optional for efficiency
                     *   To check in the middle of a line, pass in firstTok yourself.
                     */
                    line = line || cm.getLineHandle(line_num);
                    firstTok = firstTok || cm.getTokenAt({
                            line: line_num,
                            ch: 1
                        });
                    lastTok = lastTok || (!!line.text && cm.getTokenAt({
                            line: line_num,
                            ch: line.text.length - 1
                        }));
                    let types = firstTok.type ? firstTok.type.split(" ") : [];
                    if (lastTok && token_state(lastTok).indentedCode) {
                        // have to check last char, since first chars of first line aren"t marked as indented
                        return "indented";
                    } else if (types.indexOf("comment") === -1) {
                        // has to be after "indented" check, since first chars of first indented line aren"t marked as such
                        return false;
                    } else if (token_state(firstTok).fencedChars || token_state(lastTok).fencedChars || fencing_line(line)) {
                        return "fenced";
                    } else {
                        return "single";
                    }
                }

                function insertFencingAtSelection(cm, cur_start, cur_end, fenceCharsToInsert) {
                    let start_line_sel = cur_start.line + 1,
                        end_line_sel = cur_end.line + 1,
                        sel_multi = cur_start.line !== cur_end.line,
                        repl_start = fenceCharsToInsert + "\n",
                        repl_end = "\n" + fenceCharsToInsert;
                    if (sel_multi) {
                        end_line_sel++;
                    }
                    // handle last char including \n or not
                    if (sel_multi && cur_end.ch === 0) {
                        repl_end = fenceCharsToInsert + "\n";
                        end_line_sel--;
                    }
                    vue._replaceSelection(cm, false, [repl_start, repl_end]);
                    cm.setSelection({
                        line: start_line_sel,
                        ch: 0
                    }, {
                        line: end_line_sel,
                        ch: 0
                    });
                }

                let cm = vue.editor.codemirror,
                    cur_start = cm.getCursor("start"),
                    cur_end = cm.getCursor("end"),
                    tok = cm.getTokenAt({
                        line: cur_start.line,
                        ch: cur_start.ch || 1
                    }), // avoid ch 0 which is a cursor pos but not token
                    line = cm.getLineHandle(cur_start.line),
                    is_code = code_type(cm, cur_start.line, line, tok);

                console.log(is_code)

                let block_start, block_end, lineCount;


                if (is_code === "single") {
                    // similar to some SimpleMDE _toggleBlock logic
                    let start = line.text.slice(0, cur_start.ch).replace("`", ""),
                        end = line.text.slice(cur_start.ch).replace("`", "");
                    cm.replaceRange(start + end, {
                        line: cur_start.line,
                        ch: 0
                    }, {
                        line: cur_start.line,
                        ch: 99999999999999
                    });
                    cur_start.ch--;
                    if (cur_start !== cur_end) {
                        cur_end.ch--;
                    }
                    cm.setSelection(cur_start, cur_end);
                    cm.focus();
                } else if (is_code === "fenced") {
                    if (cur_start.line !== cur_end.line || cur_start.ch !== cur_end.ch) {
                        // use selection

                        // find the fenced line so we know what type it is (tilde, backticks, number of them)
                        for (block_start = cur_start.line; block_start >= 0; block_start--) {
                            line = cm.getLineHandle(block_start);
                            if (fencing_line(line)) {
                                break;
                            }
                        }
                        let fencedTok = cm.getTokenAt({
                            line: block_start,
                            ch: 1
                        });
                        let fence_chars = token_state(fencedTok).fencedChars;
                        let start_text, start_line;
                        let end_text, end_line;
                        // check for selection going up against fenced lines, in which case we don't want to add more fencing
                        if (fencing_line(cm.getLineHandle(cur_start.line))) {
                            start_text = "";
                            start_line = cur_start.line;
                        } else if (fencing_line(cm.getLineHandle(cur_start.line - 1))) {
                            start_text = "";
                            start_line = cur_start.line - 1;
                        } else {
                            start_text = fence_chars + "\n";
                            start_line = cur_start.line;
                        }
                        if (fencing_line(cm.getLineHandle(cur_end.line))) {
                            end_text = "";
                            end_line = cur_end.line;
                            if (cur_end.ch === 0) {
                                end_line += 1;
                            }
                        } else if (cur_end.ch !== 0 && fencing_line(cm.getLineHandle(cur_end.line + 1))) {
                            end_text = "";
                            end_line = cur_end.line + 1;
                        } else {
                            end_text = fence_chars + "\n";
                            end_line = cur_end.line + 1;
                        }
                        if (cur_end.ch === 0) {
                            // full last line selected, putting cursor at beginning of next
                            end_line -= 1;
                        }
                        cm.operation(function () {
                            // end line first, so that line numbers don't change
                            cm.replaceRange(end_text, {
                                line: end_line,
                                ch: 0
                            }, {
                                line: end_line + (end_text ? 0 : 1),
                                ch: 0
                            });
                            cm.replaceRange(start_text, {
                                line: start_line,
                                ch: 0
                            }, {
                                line: start_line + (start_text ? 0 : 1),
                                ch: 0
                            });
                        });
                        cm.setSelection({
                            line: start_line + (start_text ? 1 : 0),
                            ch: 0
                        }, {
                            line: end_line + (start_text ? 1 : -1),
                            ch: 0
                        });
                        cm.focus();
                    } else {
                        // no selection, search for ends of this fenced block
                        let search_from = cur_start.line;
                        if (fencing_line(cm.getLineHandle(cur_start.line))) { // gets a little tricky if cursor is right on a fenced line
                            if (code_type(cm, cur_start.line + 1) === "fenced") {
                                block_start = cur_start.line;
                                search_from = cur_start.line + 1; // for searching for "end"
                            } else {
                                block_end = cur_start.line;
                                search_from = cur_start.line - 1; // for searching for "start"
                            }
                        }
                        if (block_start === undefined) {
                            for (block_start = search_from; block_start >= 0; block_start--) {
                                line = cm.getLineHandle(block_start);
                                if (fencing_line(line)) {
                                    break;
                                }
                            }
                        }
                        if (block_end === undefined) {
                            lineCount = cm.lineCount();
                            for (block_end = search_from; block_end < lineCount; block_end++) {
                                line = cm.getLineHandle(block_end);
                                if (fencing_line(line)) {
                                    break;
                                }
                            }
                        }
                        cm.operation(function () {
                            cm.replaceRange("", {
                                line: block_start,
                                ch: 0
                            }, {
                                line: block_start + 1,
                                ch: 0
                            });
                            cm.replaceRange("", {
                                line: block_end - 1,
                                ch: 0
                            }, {
                                line: block_end,
                                ch: 0
                            });
                        });
                        cm.focus();
                    }
                } else if (is_code === "indented") {
                    if (cur_start.line !== cur_end.line || cur_start.ch !== cur_end.ch) {
                        // use selection
                        block_start = cur_start.line;
                        block_end = cur_end.line;
                        if (cur_end.ch === 0) {
                            block_end--;
                        }
                    } else {
                        // no selection, search for ends of this indented block
                        for (block_start = cur_start.line; block_start >= 0; block_start--) {
                            line = cm.getLineHandle(block_start);
                            if (line.text.match(/^\s*$/)) {
                                // empty or all whitespace - keep going
                                continue;
                            } else {
                                if (code_type(cm, block_start, line) !== "indented") {
                                    block_start += 1;
                                    break;
                                }
                            }
                        }
                        lineCount = cm.lineCount();
                        for (block_end = cur_start.line; block_end < lineCount; block_end++) {
                            line = cm.getLineHandle(block_end);
                            if (line.text.match(/^\s*$/)) {
                                // empty or all whitespace - keep going
                                continue;
                            } else {
                                if (code_type(cm, block_end, line) !== "indented") {
                                    block_end -= 1;
                                    break;
                                }
                            }
                        }
                    }
                    // if we are going to un-indent based on a selected set of lines, and the next line is indented too, we need to
                    // insert a blank line so that the next line(s) continue to be indented code
                    let next_line = cm.getLineHandle(block_end + 1),
                        next_line_last_tok = next_line && cm.getTokenAt({
                                line: block_end + 1,
                                ch: next_line.text.length - 1
                            }),
                        next_line_indented = next_line_last_tok && token_state(next_line_last_tok).indentedCode;
                    if (next_line_indented) {
                        cm.replaceRange("\n", {
                            line: block_end + 1,
                            ch: 0
                        });
                    }

                    for (let i = block_start; i <= block_end; i++) {
                        cm.indentLine(i, "subtract"); // TODO: this doesn't get tracked in the history, so can't be undone :(
                    }
                    cm.focus();
                } else {
                    // insert code formatting
                    let no_sel_and_starting_of_line = (cur_start.line === cur_end.line && cur_start.ch === cur_end.ch && cur_start.ch === 0);
                    let sel_multi = cur_start.line !== cur_end.line;
                    if (no_sel_and_starting_of_line || sel_multi) {
                        insertFencingAtSelection(cm, cur_start, cur_end, fenceCharsToInsert);
                    } else {
                        vue._replaceSelection(cm, false, ["`", "`"]);
                    }
                }
            },


            toggleStrikethrough() {
                this._toggleBlock(this.editor, "strikethrough", "~~");
            },
            toggleBlockquote() {
                let cm = this.editor.codemirror;
                this._toggleLine(cm, "quote");
            },
            /**
             * Action for toggling heading size: normal -> h1 -> h2 -> h3 -> h4 -> h5 -> h6 -> normal
             */
            toggleHeadingSmaller() {
                let cm = this.editor.codemirror;
                this._toggleHeading(cm, "smaller");
            },

            /**
             * Action for toggling heading size: normal -> h6 -> h5 -> h4 -> h3 -> h2 -> h1 -> normal
             */
            toggleHeadingBigger() {
                let cm = this.editor.codemirror;
                this._toggleHeading(cm, "bigger");
            },

            /**
             * Action for toggling heading size 1
             */
            toggleHeading1() {
                let cm = this.editor.codemirror;
                _toggleHeading(cm, undefined, 1);
            },

            /**
             * Action for toggling heading size 2
             */
            toggleHeading2() {
                let cm = this.editor.codemirror;
                _toggleHeading(cm, undefined, 2);
            },

            /**
             * Action for toggling heading size 3
             */
            toggleHeading3() {
                let cm = this.editor.codemirror;
                _toggleHeading(cm, undefined, 3);
            },

            /**
             * Action for toggling ul.
             */
            toggleUnorderedList() {
                let cm = this.editor.codemirror;
                this._toggleLine(cm, "unordered-list");
            },
            /**
             * Action for toggling ol.
             */
            toggleOrderedList() {
                let cm = this.editor.codemirror;
                this._toggleLine(cm, "ordered-list");
            },


            /**
             * Action for clean block (remove headline, list, blockquote code, markers)
             */
//            cleanBlock(editor) {
//                let cm = this.editor.codemirror;
//                _cleanBlock(cm);
//            },

            /**
             * Action for drawing a link.
             */
            drawLink() {
                let cm = this.editor.codemirror;
                let stat = getState(cm);
                let options = this.editor.options;
                let url = "http://";
                if (options.promptURLs) {
                    url = prompt(options.promptTexts.link);
                    if (!url) {
                        return false;
                    }
                }
                this._replaceSelection(cm, stat.link, options.insertTexts.link, url);
            },
            drawImage() {
                let cm = this.editor.codemirror;
                let stat = getState(cm);
                let options = this.editor.options;
                let url = "http://";
                if (options.promptURLs) {
                    url = prompt(options.promptTexts.image);
                    if (!url) {
                        return false;
                    }
                }
                this._replaceSelection(cm, stat.image, options.insertTexts.image, url);
            },
            /**
             * Action for drawing a table.
             */
            drawTable() {
                let cm = this.editor.codemirror;
                let stat = getState(cm);
                let options = this.editor.options;
                this._replaceSelection(cm, stat.table, options.insertTexts.table);
            },
            /**
             * Action for drawing a horizontal rule.
             */
            drawHorizontalRule() {
                let cm = this.editor.codemirror;
                let stat = getState(cm);
                let options = this.editor.options;
                this._replaceSelection(cm, stat.image, options.insertTexts.horizontalRule);
            },


            /**
             * Undo action.
             */
            undo(editor) {
                let cm = this.editor.codemirror;
                cm.undo();
                cm.focus();
            },
            /**
             * Redo action.
             */
            redo(editor) {
                let cm = this.editor.codemirror;
                cm.redo();
                cm.focus();
            },
            _replaceSelection(cm, active, startEnd, url) {
                if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className))
                    return;

                let text;
                let start = startEnd[0];
                let end = startEnd[1];
                let startPoint = cm.getCursor("start");
                let endPoint = cm.getCursor("end");
                if (url) {
                    end = end.replace("#url#", url);
                }
                if (active) {
                    text = cm.getLine(startPoint.line);
                    start = text.slice(0, startPoint.ch);
                    end = text.slice(startPoint.ch);
                    cm.replaceRange(start + end, {
                        line: startPoint.line,
                        ch: 0
                    });
                } else {
                    text = cm.getSelection();
                    cm.replaceSelection(start + text + end);

                    startPoint.ch += start.length;
                    if (startPoint !== endPoint) {
                        endPoint.ch += start.length;
                    }
                }
                cm.setSelection(startPoint, endPoint);
                cm.focus();
            },
            _toggleHeading(cm, direction, size) {
                if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className))
                    return;

                let startPoint = cm.getCursor("start");
                let endPoint = cm.getCursor("end");
                for (let i = startPoint.line; i <= endPoint.line; i++) {
                    (function (i) {
                        let text = cm.getLine(i);
                        let currHeadingLevel = text.search(/[^#]/);

                        if (direction !== undefined) {
                            if (currHeadingLevel <= 0) {
                                if (direction == "bigger") {
                                    text = "###### " + text;
                                } else {
                                    text = "# " + text;
                                }
                            } else if (currHeadingLevel == 6 && direction == "smaller") {
                                text = text.substr(7);
                            } else if (currHeadingLevel == 1 && direction == "bigger") {
                                text = text.substr(2);
                            } else {
                                if (direction == "bigger") {
                                    text = text.substr(1);
                                } else {
                                    text = "#" + text;
                                }
                            }
                        } else {
                            if (size == 1) {
                                if (currHeadingLevel <= 0) {
                                    text = "# " + text;
                                } else if (currHeadingLevel == size) {
                                    text = text.substr(currHeadingLevel + 1);
                                } else {
                                    text = "# " + text.substr(currHeadingLevel + 1);
                                }
                            } else if (size == 2) {
                                if (currHeadingLevel <= 0) {
                                    text = "## " + text;
                                } else if (currHeadingLevel == size) {
                                    text = text.substr(currHeadingLevel + 1);
                                } else {
                                    text = "## " + text.substr(currHeadingLevel + 1);
                                }
                            } else {
                                if (currHeadingLevel <= 0) {
                                    text = "### " + text;
                                } else if (currHeadingLevel == size) {
                                    text = text.substr(currHeadingLevel + 1);
                                } else {
                                    text = "### " + text.substr(currHeadingLevel + 1);
                                }
                            }
                        }

                        cm.replaceRange(text, {
                            line: i,
                            ch: 0
                        }, {
                            line: i,
                            ch: 99999999999999
                        });
                    })(i);
                }
                cm.focus();
            },

            _toggleLine(cm, name) {
                if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className))
                    return;


                let stat = getState(cm);
                let startPoint = cm.getCursor("start");
                let endPoint = cm.getCursor("end");
                let repl = {
                    "quote": /^(\s*)\>\s+/,
                    "unordered-list": /^(\s*)(\*|\-|\+)\s+/,
                    "ordered-list": /^(\s*)\d+\.\s+/
                };
                let map = {
                    "quote": "> ",
                    "unordered-list": "* ",
                    "ordered-list": "1. "
                };
                for (let i = startPoint.line; i <= endPoint.line; i++) {
                    (function (i) {
                        let text = cm.getLine(i);
                        if (stat[name]) {
                            text = text.replace(repl[name], "$1");
                        } else {
                            text = map[name] + text;
                        }
                        cm.replaceRange(text, {
                            line: i,
                            ch: 0
                        }, {
                            line: i,
                            ch: 99999999999999
                        });
                    })(i);
                }
                cm.focus();
            },

            _toggleBlock(editor, type, start_chars, end_chars) {
                if (/editor-preview-active/.test(editor.codemirror.getWrapperElement().lastChild.className))
                    return;

                end_chars = (typeof end_chars === "undefined") ? start_chars : end_chars;
                let cm = editor.codemirror;
                let stat = getState(cm);

                let text;
                let start = start_chars;
                let end = end_chars;

                let startPoint = cm.getCursor("start");
                let endPoint = cm.getCursor("end");

                if (stat[type]) {
                    text = cm.getLine(startPoint.line);
                    start = text.slice(0, startPoint.ch);
                    end = text.slice(startPoint.ch);
                    if (type == "bold") {
                        start = start.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, "");
                        end = end.replace(/(\*\*|__)/, "");
                    } else if (type == "italic") {
                        start = start.replace(/(\*|_)(?![\s\S]*(\*|_))/, "");
                        end = end.replace(/(\*|_)/, "");
                    } else if (type == "strikethrough") {
                        start = start.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, "");
                        end = end.replace(/(\*\*|~~)/, "");
                    }
                    cm.replaceRange(start + end, {
                        line: startPoint.line,
                        ch: 0
                    }, {
                        line: startPoint.line,
                        ch: 99999999999999
                    });

                    if (type == "bold" || type == "strikethrough") {
                        startPoint.ch -= 2;
                        if (startPoint !== endPoint) {
                            endPoint.ch -= 2;
                        }
                    } else if (type == "italic") {
                        startPoint.ch -= 1;
                        if (startPoint !== endPoint) {
                            endPoint.ch -= 1;
                        }
                    }
                } else {
                    text = cm.getSelection();
                    if (type == "bold") {
                        text = text.split("**").join("");
                        text = text.split("__").join("");
                    } else if (type == "italic") {
                        text = text.split("*").join("");
                        text = text.split("_").join("");
                    } else if (type == "strikethrough") {
                        text = text.split("~~").join("");
                    }
                    cm.replaceSelection(start + text + end);

                    startPoint.ch += start_chars.length;
                    endPoint.ch = startPoint.ch + text.length;
                }

                cm.setSelection(startPoint, endPoint);
                cm.focus();
            },

            value(val){
                if (val === undefined) {
                    return this.editor.codemirror.getValue();
                } else {
                    this.editor.codemirror.getDoc().setValue(val);
                    return this;
                }
            },

            toggle(){
                Prism.highlightAll();
                this.isView = !this.isView
            },
            allRight: function (htmlStr) {
                console.log("markdown is parsed !");
            },
            tocAllRight: function (tocHtmlStr) {
                console.log("toc is parsed :", tocHtmlStr);
            },

            addImage: function (evt) {
                insertContent("![Vue](https://cn.vuejs.org/images/logo.png)", this);
            },

        },
        watch: {}
    }

</script>
