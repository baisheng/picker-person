<template>
    <div class="panel panel-white">
        <div class="profile-cover" style="display: none;">
            <div id="cover" class="profile-cover-img"
                 style="background-image: url(&quot;/static/assets/images/demo/blog/2.jpg&quot;);"></div>
            <div class="media">
                <div class="media-body"><h1>
                    ${ title }

                </h1></div>
                <div class="media-right media-middle">
                    <ul class="list-inline list-inline-condensed no-margin-bottom text-nowrap">
                        <li><a href="#" class="btn btn-icon btn-xs btn-primary   btn-rounded legitRipple"><i
                                class=" icon-cross"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <input type="hidden" name="cover">
        <div class="table-responsive mail-details-write">
            <table class="table">
                <tbody>
                <tr>
                    <td colspan="2" class="p-5 no-border"><input type="text" placeholder="无标题" name="title"
                                                                 class="form-control text-semibold"></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="mail-container-write">
            <div contenteditable="true" name="" class="form-control" style="display: none;">1</div>
            <div class="note-editor note-frame panel panel-default " :class="{ 'codeview': !isView}">
                <div class="note-dropzone">
                    <div class="note-dropzone-message"></div>
                </div>
                <div class="note-toolbar panel-heading">
                    <div class="note-btn-group btn-group note-style">
                        <div class="note-btn-group btn-group">
                            <button type="button" class="note-btn btn btn-default btn-sm dropdown-toggle legitRipple"
                                    tabindex="-1" data-toggle="dropdown" title="" data-original-title="样式"><i
                                    class="note-icon-magic"></i> <span class="note-icon-caret"></span></button>
                            <div class="dropdown-menu dropdown-style">
                                <li><a href="#" data-value="p"><p>p</p></a></li>
                                <li><a @click="addQuote" href="#" data-value="blockquote">
                                    <blockquote>引用</blockquote>
                                </a></li>
                                <li><a @click="addCode" href="#" data-value="pre">
                                    <pre>代码</pre>
                                </a></li>
                                <li><a @click="addHTitle(1)" href="#" data-value="h1"><h1>标题 1</h1></a></li>
                                <li><a @click="addHTitle(2)" href="#" data-value="h2"><h2>标题 2</h2></a></li>
                                <li><a @click="addHTitle(3)" href="#" data-value="h3"><h3>标题 3</h3></a></li>
                                <li><a @click="addHTitle(4)" href="#" data-value="h4"><h4>标题 4</h4></a></li>
                                <li><a @click="addHTitle(5)" href="#" data-value="h5"><h5>标题 5</h5></a></li>
                                <li><a @click="addHTitle(6)" href="#" data-value="h6"><h6>标题 6</h6></a></li>
                            </div>
                        </div>
                    </div>
                    <div class="note-btn-group btn-group note-font">
                        <button @click="addStrong" type="button" class="note-btn btn btn-default btn-sm note-btn-bold legitRipple"
                                tabindex="-1" title="" data-original-title="粗体 (⌘+B)"><i class="note-icon-bold"></i>
                        </button>
                        <button @click="addItalic" type="button" class="note-btn btn btn-default btn-sm note-btn-underline legitRipple"
                                tabindex="-1" title="" data-original-title="下划线 (⌘+I)"><i
                                class="note-icon-italic"></i></button>

                        <button @click="addStrikethrough" type="button" class="note-btn btn btn-default btn-sm legitRipple" tabindex="-1" title=""
                                data-original-title="清除格式 (⌘+\)"><i class="note-icon-strikethrough"></i></button>
                    </div>

                    <div class="note-btn-group btn-group note-insert">
                        <button @click="addLink" type="button" class="note-btn btn btn-default btn-sm legitRipple" tabindex="-1" title=""
                                data-original-title="链接 (⌘+K)"><i class="note-icon-link"></i></button>
                        <button @click="addImage" type="button" class="note-btn btn btn-default btn-sm legitRipple" tabindex="-1" title=""
                                data-original-title="图片"><i class="note-icon-picture"></i></button>
                        <button type="button" class="note-btn btn btn-default btn-sm legitRipple" tabindex="-1" title=""
                                data-original-title="视频"><i class="note-icon-video"></i></button>
                    </div>
                    <div class="note-btn-group btn-group note-table">
                        <div class="note-btn-group btn-group">
                            <button @click="addTable" type="button" class="note-btn btn btn-default btn-sm legitRipple"
                                    tabindex="-1" title="" data-original-title="表格"><i
                                    class="note-icon-table"></i> </button>

                        </div>
                    </div>
                    <div class="note-btn-group btn-group note-view">
                        <button type="button" class="note-btn btn btn-default btn-sm btn-fullscreen legitRipple"
                                tabindex="-1" title="" data-original-title="全屏"><i class="note-icon-arrows-alt"></i>
                        </button>
                        <button type="button" class="note-btn btn btn-default btn-sm btn-codeview legitRipple"
                                tabindex="-1" title="" data-original-title="源代码" @click="toggle"><i
                                class="note-icon-circle"></i></button>
                        <button type="button" class="note-btn btn btn-default btn-sm legitRipple" tabindex="-1" title=""
                                data-original-title="帮助"><i class="note-icon-question"></i></button>
                    </div>
                </div>
                <div class="note-editing-area">
                    <div class="note-handle">
                        <div class="note-control-selection" style="display: none;">
                            <div class="note-control-selection-bg"></div>
                            <div class="note-control-holder note-control-nw"></div>
                            <div class="note-control-holder note-control-ne"></div>
                            <div class="note-control-holder note-control-sw"></div>
                            <div class="note-control-sizing note-control-se"></div>
                            <div class="note-control-selection-info"></div>
                        </div>
                    </div>

                    <textarea class="note-codable" style="height:380px" @keydown.9="tabFn" v-model="source"></textarea>

                    <div class="note-editable panel-body"
                         style="height: 360px; max-height: 1000px; min-height: 360px;" contenteditable="true">

                        <vue-markdown class="result-html full-height"
                                      :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
                                      :source="source" :show="show" :html="html" :breaks="breaks" :linkify="linkify"
                                      :emoji="emoji" :typographer="typographer" :toc="toc" v-on:rendered="allRight"
                                      v-on:toc-rendered="tocAllRight" toc-id="toc"></vue-markdown>
                    </div>
                </div>
                <div class="note-statusbar">
                    <div class="note-resizebar">
                        <div class="note-icon-bar"></div>
                        <div class="note-icon-bar"></div>
                        <div class="note-icon-bar"></div>
                    </div>
                </div>
                <div class="modal link-dialog" aria-hidden="false" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                        aria-hidden="true">×</span></button>
                                <h4 class="modal-title">插入链接</h4></div>
                            <div class="modal-body">
                                <div class="form-group"><label>显示文本</label><input class="note-link-text form-control"
                                                                                  type="text"></div>
                                <div class="form-group"><label>链接地址</label><input class="note-link-url form-control"
                                                                                  type="text" value="http://"></div>
                                <div class="checkbox"><label><input type="checkbox" checked=""> 在新窗口打开</label></div>
                            </div>
                            <div class="modal-footer">
                                <button href="#" class="btn btn-primary note-link-btn disabled" disabled="">插入链接
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal" aria-hidden="false" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                        aria-hidden="true">×</span></button>
                                <h4 class="modal-title">插入图片</h4></div>
                            <div class="modal-body">
                                <div class="form-group note-group-select-from-files"><label>从本地上传</label><input
                                        class="note-image-input form-control" type="file" name="files" accept="image/*"
                                        multiple="multiple"></div>
                                <div class="form-group note-group-image-url" style="overflow:auto;">
                                    <label>图片地址</label><input class="note-image-url form-control col-md-12" type="text">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button href="#" class="btn btn-primary note-image-btn disabled" disabled="">插入图片
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal" aria-hidden="false" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                        aria-hidden="true">×</span></button>
                                <h4 class="modal-title">插入视频</h4></div>
                            <div class="modal-body">
                                <div class="form-group row-fluid"><label>视频地址
                                    <small class="text-muted">(优酷, Instagram, Youtube等)</small>
                                </label><input class="note-video-url form-control span12" type="text"></div>
                            </div>
                            <div class="modal-footer">
                                <button href="#" class="btn btn-primary note-video-btn disabled" disabled="">插入视频
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal" aria-hidden="false" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                        aria-hidden="true">×</span></button>
                                <h4 class="modal-title">帮助</h4></div>
                            <div class="modal-body" style="max-height: 300px; overflow: scroll;">
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>ENTER</kbd></label><span>Insert Paragraph</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+Z</kbd></label><span>Undoes the last command</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+Z</kbd></label><span>Redoes the last command</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>TAB</kbd></label><span>Tab</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>SHIFT+TAB</kbd></label><span>Untab</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+B</kbd></label><span>Set a bold style</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+I</kbd></label><span>Set a italic style</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+U</kbd></label><span>Set a underline style</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+S</kbd></label><span>Set a strikethrough style</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+BACKSLASH</kbd></label><span>Clean a style</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+L</kbd></label><span>Set left align</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+E</kbd></label><span>Set center align</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+R</kbd></label><span>Set right align</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+J</kbd></label><span>Set full align</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+NUM7</kbd></label><span>Toggle unordered list</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+NUM8</kbd></label><span>Toggle ordered list</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+LEFTBRACKET</kbd></label><span>Outdent on current paragraph</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+RIGHTBRACKET</kbd></label><span>Indent on current paragraph</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM0</kbd></label><span>Change current block's format as a paragraph(P tag)</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM1</kbd></label><span>Change current block's format as H1</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM2</kbd></label><span>Change current block's format as H2</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM3</kbd></label><span>Change current block's format as H3</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM4</kbd></label><span>Change current block's format as H4</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM5</kbd></label><span>Change current block's format as H5</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM6</kbd></label><span>Change current block's format as H6</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+ENTER</kbd></label><span>Insert horizontal rule</span>
                                <div class="help-list-item"></div>
                                <label style="width: 180px; margin-right: 10px;"><kbd>CMD+K</kbd></label><span>Show Link Dialog</span>
                            </div>
                            <div class="modal-footer"><p class="text-center"><a href="http://summernote.org/"
                                                                                target="_blank">Summernote 0.8.2</a>
                                · <a href="https://github.com/summernote/summernote" target="_blank">Project</a> · <a
                                        href="https://github.com/summernote/summernote/issues"
                                        target="_blank">Issues</a></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--<div class="doc-comment-box active" style="top: 165px;">-->

        <!--</div>-->
    </div>


</template>

<style>

    .note-editor .note-codable {
        display: none;
        width: 100%;
        padding: 20px;
        margin-bottom: 0;
        font-family: -apple-system, BlinkMacSystemFont, PingFang SC, Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;
        line-height: 1.7;
        font-size: 14px;
        color: #333;
        background-color: #fff;
        border: 0;
        border-radius: 0;
        resize: none;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .doc-comment-box {
        width: 260px;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
        border-radius: 2px;
        position: absolute;
        right: 0;
        bottom: 0;
        margin-left: 0;
        cursor: pointer;
        transition: opacity .3s ease-out, margin-left .3s ease, top .3s ease;
    }

    .doc-comment-box.active {
        cursor: default;
        box-shadow: 0 0 20px #c8c8c8;
        margin-left: -30px;
        width: 290px;
    }
</style>

<script>
    import VueMarkdown from 'vue-markdown'
    import range from '../js/rangeFn'

    function insertContent(val, that) {
        let textareaDom = document.querySelector('.note-codable');
        let value = textareaDom.value;
        let point = range.getCursortPosition(textareaDom);
        let lastChart = value.substring(point - 1, point);
        let lastFourCharts = value.substring(point - 4, point);
        if (lastChart != '\n' && value != '' && lastFourCharts != '    ') {
            val = '\n' + val;
            range.insertAfterText(textareaDom, val);
        } else {
            range.insertAfterText(textareaDom, val);
        }
        that.source = document.querySelector('.note-codable').value;
    }

    export default {
        name: 'Editor',
        props: ['config'],
        data(){
            return {
                source: "",
                show: true,
                html: false,
                breaks: true,
                linkify: false,
                emoji: true,
                typographer: true,
                toc: false,
                isView: false
            }
        },
        components: {
            VueMarkdown,

        },
        computed: {},
        methods: {
            tabFn: function(evt) {
                insertContent("    ", this);
                // 屏蔽屌tab切换事件
                if (evt.preventDefault) {
                    evt.preventDefault();
                } else {
                    evt.returnValue = false;
                }
            },
            toggle(){
                Prism.highlightAll();
                this.isView = !this.isView
            },
            allRight: function (htmlStr) {
                console.log(htmlStr)
                console.log("markdown is parsed !");
            },
            tocAllRight: function (tocHtmlStr) {
                console.log("toc is parsed :", tocHtmlStr);
            },

            tabFn: function(evt) {
                insertContent("    ", this);
                // 屏蔽屌tab切换事件
                if (evt.preventDefault) {
                    evt.preventDefault();
                } else {
                    evt.returnValue = false;
                }
            },
            addImage: function(evt) {
                insertContent("![Vue](https://cn.vuejs.org/images/logo.png)", this);
            },

            addHTitle: function(index) {
                let tmp = '';
                switch (index) {
                    case 1:
                        tmp = '# ';
                        break;
                    case 2:
                        tmp = '## ';
                        break;
                    case 3:
                        tmp = '### ';
                        break;
                    case 4:
                        tmp = '#### ';
                        break;
                    case 5:
                        tmp = '##### ';
                        break;
                    case 6:
                        tmp = '###### ';
                        break;
                    default:
                        break;
                }
                insertContent(tmp, this);
            },
            addItalic: function() {
                let textareaDom = document.querySelector('.note-codable');
                let value = textareaDom.value;
                let point = range.getCursortPosition(textareaDom);
                let lastChart = value.substring(point - 1, point);
                insertContent('**', this);
                if (lastChart != '\n' && value != '') {
                    range.setCaretPosition(textareaDom, point + 2);
                } else {
                    range.setCaretPosition(textareaDom, point + 1);
                }
            },
            addStrong: function() {
                let textareaDom = document.querySelector('.note-codable');
                let value = textareaDom.value;
                let point = range.getCursortPosition(textareaDom);
                let lastChart = value.substring(point - 1, point);
                insertContent('****', this);
                if (lastChart != '\n' && value != '') {
                    range.setCaretPosition(textareaDom, point + 3);
                } else {
                    range.setCaretPosition(textareaDom, point + 2);
                }
            },
            addCode: function() {
                let textareaDom = document.querySelector('.note-codable');
                let value = textareaDom.value;
                let point = range.getCursortPosition(textareaDom);
                let lastChart = value.substring(point - 1, point);
                insertContent('```\n\n```', this);
//                <pre :class="'language-' + snippet.meta['_snippet_code']['lang']">
//                    <code>{{ snippet.content }}</code>
//                </pre>
                if (lastChart !== '\n' && value !== '') {
                    range.setCaretPosition(textareaDom, point + 5);
                } else {
                    range.setCaretPosition(textareaDom, point + 4);
                }
            },
            addStrikethrough: function() {
                let textareaDom = document.querySelector('.note-codable');
                let value = textareaDom.value;
                let point = range.getCursortPosition(textareaDom);
                let lastChart = value.substring(point - 1, point);
                insertContent('~~~~', this);
                if (lastChart != '\n' && value != '') {
                    range.setCaretPosition(textareaDom, point + 3);
                } else {
                    range.setCaretPosition(textareaDom, point + 2);
                }
            },
            setStrong: function() {
                let textareaDom = document.querySelector('.note-codable');
                let point = range.getCursortPosition(textareaDom);
            },
            addLine: function() {
                insertContent('\n----\n', this);
            },
            addLink: function() {
                insertContent("[Vue](https://cn.vuejs.org/images/logo.png)", this);
            },
            addQuote: function() {
                let textareaDom = document.querySelector('.note-codable');
                let value = textareaDom.value;
                let point = range.getCursortPosition(textareaDom);
                let lastChart = value.substring(point - 1, point);
                insertContent('> ', this);
                if (lastChart != '\n' && value != '') {
                    range.setCaretPosition(textareaDom, point + 3);
                } else {
                    range.setCaretPosition(textareaDom, point + 2);
                }
            },
            addTable: function() {
                insertContent('\nheader 1 | header 2\n', this);
                insertContent('---|---\n', this);
                insertContent('row 1 col 1 | row 1 col 2\n', this);
                insertContent('row 2 col 1 | row 2 col 2\n\n', this);
            },
            addUl: function() {
                insertContent('* ', this);
            },
            addOl: function() {
                insertContent('1. ', this);
            },

        },
        watch: {
//            source() {
//                if (this.source === this.$refs.element.innerHTML) {
//                     if the change is done by this same component, do not update the contents to prevent
//                     caret from resetting to the beginning of the editor
//                    return;
//                }
//                this.$refs.element.innerHTML = this.source
//            }
        }
    }

</script>
