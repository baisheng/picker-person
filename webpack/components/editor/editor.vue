<template>

    <div class="panel panel-flat">

        <div class="profile-cover" style="display: none;">
            <!--<div id="cover" class="profile-cover-img"-->
            <!--style="background-image: url(&quot;/static/assets/images/demo/blog/2.jpg&quot;);"></div>-->
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
        <!--<input type="hidden" name="cover">-->

        <!--<div class="shadowBox"></div>-->
        <div class="panel panel-white  snippet--panel" :class="{'fadeout' : selectedWordCount === 0 }">
            <div class="panel-heading ">
                    <mark class="">生成内容碎片？</mark>

            </div>


            <div class="panel-body">
                <div class="content-group snippet--content" v-html="selectedWord"></div>
            </div>
            <div class="panel-footer panel-footer-condensed "><a class="heading-elements-toggle"><i class="icon-more"></i></a>
                <div class="heading-elements">
                    <span class="heading-text"><small>选中了 {{ selectedWordCount }} 个字</small></span>
                    <ul class="list-inline list-inline-separate heading-text pull-right">
                        <li><a href="#" class="" data-popup="tooltip" data-placement="top" data-container="body" title="" data-original-title="剪切成碎片"><i class="fa fa-cut"></i></a></li>
                        <li><a href="#" class="" data-popup="tooltip" data-placement="top" data-container="body" title="" data-original-title="复制成碎片"><i class="fa fa-copy"></i></a></li>
                        <!--<li><a href="#">Generate</a></li>-->
                    </ul>
                </div>
            </div>

        </div>

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
            <div class="note-editor note-frame panel panel-default "
                 :class="{ 'codeview': !isView, 'fullscreen': isFullScreen}">
                <div class="note-dropzone">
                    <div class="note-dropzone-message"></div>
                </div>
                <div class="note-toolbar panel-heading  ">
                    <div class="note-btn-group btn-group note-style">
                        <div class="note-btn-group btn-group">
                            <button type="button" class="note-btn btn btn-link btn-sm dropdown-toggle legitRipple"
                                    tabindex="-1" data-toggle="dropdown" title="" data-original-title="样式"><i
                                    class="note-icon-magic"></i> <span class="note-icon-caret"></span></button>
                            <div class="dropdown-menu dropdown-style">
                                <li><a @click="toggleBlockquote" href="#" data-value="blockquote">
                                    <blockquote>引用</blockquote>
                                </a></li>
                                <li><a href="#" data-value="pre">
                                    <pre>代码</pre>
                                </a></li>
                                <li><a @click="toggleHeadingSmaller()" href="#" data-value="h1"><h1>标题 1</h1></a></li>
                                <li><a @click="toggleHeadingSmaller()" href="#" data-value="h2"><h2>标题 2</h2></a></li>
                                <li><a @click="toggleHeadingSmaller()" href="#" data-value="h3"><h3>标题 3</h3></a></li>
                                <li><a @click="toggleHeadingSmaller()" href="#" data-value="h4"><h4>标题 4</h4></a></li>
                                <li><a @click="toggleHeadingSmaller()" href="#" data-value="h5"><h5>标题 5</h5></a></li>
                                <li><a @click="toggleHeadingSmaller()" href="#" data-value="h6"><h6>标题 6</h6></a></li>
                            </div>
                        </div>
                    </div>
                    <div class="note-btn-group btn-group note-font">
                        <button @click="toggleBold" type="button"
                                class="note-btn btn btn-link btn-sm note-btn-bold legitRipple "
                                tabindex="-1" title="" data-original-title="粗体 (⌘+B)"><i class="note-icon-bold"></i>
                        </button>
                        <button @click="toggleItalic" type="button"
                                class="note-btn btn btn-link btn-sm note-btn-underline legitRipple"
                                tabindex="-1" title="" data-original-title="下划线 (⌘+U)"><i
                                class="note-icon-italic"></i></button>

                        <button @click="toggleStrikethrough" type="button"
                                class="note-btn btn btn-link btn-sm legitRipple" tabindex="-1" title=""
                                data-original-title="删除线 (⌘+\)"><i class="note-icon-strikethrough"></i></button>

                        <button @click="toggleHeadingSmaller" type="button"
                                class="note-btn btn btn-link btn-sm legitRipple" tabindex="-1" title=""
                                data-original-title="段落 (⌘+\)">H
                        </button>


                        <button @click="toggleUnorderedList()" type="button"
                                class="note-btn btn btn-link btn-sm legitRipple" tabindex="-1" title=""
                                data-original-title="Unordered list (⌘+⇧+NUM7)"><i class="note-icon-unorderedlist"></i>
                        </button>
                        <button @click="toggleOrderedList()" type="button"
                                class="note-btn btn btn-link btn-sm legitRipple" tabindex="-1" title=""
                                data-original-title="Ordered list (⌘+⇧+NUM8)"><i class="note-icon-orderedlist"></i>
                        </button>
                        <!--
                        <div class="note-btn-group btn-group">
                            <button type="button" class="note-btn btn btn-link btn-sm dropdown-toggle legitRipple"
                                    tabindex="-1" data-toggle="dropdown" title="" data-original-title="Paragraph"><i
                                    class="note-icon-align-left"></i> <span class="note-icon-caret"></span></button>
                            <div class="dropdown-menu">
                                <div class="note-btn-group btn-group note-align">
                                    <button type="button" class="note-btn btn btn-link btn-sm legitRipple"
                                            tabindex="-1" title="" data-original-title="Align left (⌘+⇧+L)"><i
                                            class="note-icon-align-left"></i></button>
                                    <button type="button" class="note-btn btn btn-link btn-sm legitRipple"
                                            tabindex="-1" title="" data-original-title="Align center (⌘+⇧+E)"><i
                                            class="note-icon-align-center"></i></button>
                                    <button type="button" class="note-btn btn btn-link btn-sm legitRipple"
                                            tabindex="-1" title="" data-original-title="Align right (⌘+⇧+R)"><i
                                            class="note-icon-align-right"></i></button>
                                    <button type="button" class="note-btn btn btn-link btn-sm legitRipple"
                                            tabindex="-1" title="" data-original-title="Justify full (⌘+⇧+J)"><i
                                            class="note-icon-align-justify"></i></button>
                                </div>
                                <div class="note-btn-group btn-group note-list">
                                    <button type="button" class="note-btn btn btn-link btn-sm legitRipple"
                                            tabindex="-1" title="" data-original-title="Outdent (⌘+[)"><i
                                            class="note-icon-align-outdent"></i></button>
                                    <button type="button" class="note-btn btn btn-link btn-sm legitRipple"
                                            tabindex="-1" title="" data-original-title="Indent (⌘+])"><i
                                            class="note-icon-align-indent"></i></button>
                                </div>
                            </div>
                        </div>
                        -->
                        <button @click="drawLink" type="button" class="note-btn btn btn-link btn-sm legitRipple"
                                tabindex="-1" title=""
                                data-original-title="链接 (⌘+K)"><i class="note-icon-link"></i></button>
                        <button @click="drawImage" type="button" class="note-btn btn btn-link btn-sm legitRipple"
                                tabindex="-1" title=""
                                data-original-title="图片"><i class="note-icon-picture"></i></button>
                        <button @click="toggleCodeBlock" type="button"
                                class="note-btn btn btn-link btn-sm legitRipple" tabindex="-1" title=""
                                data-original-title="代码"><i class="note-icon-code"></i></button>
                        <div class="note-btn-group btn-group">
                            <button @click="drawTable" type="button" class="note-btn btn btn-link btn-sm legitRipple"
                                    tabindex="-1" title="" data-original-title="表格"><i
                                    class="note-icon-table"></i></button>

                            <button @click="drawHorizontalRule" type="button"
                                    class="note-btn btn btn-link btn-sm legitRipple"
                                    tabindex="-1" title="" data-original-title="分隔线">—
                            </button>

                        </div>
                    </div>
                    <div class="note-btn-group btn-group note-undo">
                        <button @click="undo" type="button"
                                class="note-btn btn btn-link btn-sm btn-fullscreen legitRipple"
                                tabindex="-1" title="" data-original-title="全屏"><i class="note-icon-undo"></i>
                        </button>

                        <button @click="redo" type="button" class="note-btn btn btn-link btn-sm legitRipple"
                                tabindex="-1" title=""
                                data-original-title="帮助"><i class="note-icon-redo"></i></button>
                    </div>

                    <div class="note-btn-group btn-group note-view">

                        <a @click="togglePreview" type="button"
                           class="btn btn-link note-btn btn btn-link btn-sm btn-codeview legitRipple"
                           tabindex="-1" title="" data-original-title=""><i
                                class="fa fa-eye"></i></a>
                        <button @click="toggleFullScreen" type="button"
                                class="note-btn btn btn-link btn-sm btn-fullscreen legitRipple"
                                tabindex="-1" title="" data-original-title="全屏"><i class="note-icon-arrows-alt"></i>
                        </button>
                        <button type="button" class="note-btn btn btn-link btn-sm legitRipple" tabindex="-1" title=""
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

                    <textarea
                            id="_editor"
                            class="note-codable  note-editable"></textarea>

                    <!--<div class="note-editable panel-body"-->
                    <!--style="height: 360px; max-height: 1000px; min-height: 360px;" contenteditable="true">-->
                    <!--</div>-->
                </div>
                <!--<div class="note-statusbar">-->
                    <!--<div class="note-resizebar">-->
                        <!--<div class="note-icon-bar"></div>-->
                        <!--<div class="note-icon-bar"></div>-->
                        <!--<div class="note-icon-bar"></div>-->
                    <!--</div>-->
                    <!--<div class="card card-block">-->
                        <!--<p>Total words: <b>{{words}}</b></p>-->
                        <!--<p>Total chars: <b>{{chars}}</b></p>-->
                        <!--<p>Last character: <b>{{lastChar}}</b></p>-->
                    <!--</div>-->
                <!--</div>-->
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
                <div class="modal modal-show" aria-hidden="false" tabindex="-1">
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
        <!--<div id="text-count" class="text-count" :class="{'fadeout' : selectedWordCount === 0 }" data-reactid=".2.2.2" style="bottom: 30px;"><span class="text-count-number" data-reactid=".2.2.2.0">{{ selectedWordCount }}</span><span data-reactid=".2.2.2.1">个字</span></div>-->


<!---->
<!--

        <div class="mail-attachments-container">
            <h6 class="mail-attachments-heading">附件： 2 字数：{{ wordCount }}  字符：{{ chars }}</h6>

            <ul class="mail-attachments">
                <li>
								<span class="mail-attachments-preview">
									<i class="icon-file-pdf icon-2x"></i>
								</span>

                    <div class="mail-attachments-content">
                        <span class="text-semibold">new_december_offers.pdf</span>

                        <ul class="list-inline list-inline-condensed no-margin">
                            <li class="text-muted">174 KB</li>
                            <li><a href="#">View</a></li>
                            <li><a href="#">Remove</a></li>
                        </ul>
                    </div>
                </li>

                <li>
								<span class="mail-attachments-preview">
									<i class="icon-file-pdf icon-2x"></i>
								</span>

                    <div class="mail-attachments-content">
                        <span class="text-semibold">assignment_letter.pdf</span>

                        <ul class="list-inline list-inline-condensed no-margin">
                            <li class="text-muted">736 KB</li>
                            <li><a href="#">View</a></li>
                            <li><a href="#">Remove</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        -->
        <!--<div class="snippet&#45;&#45;panel shadowBox" style="top: 165px;">-->
<!---->
        <!--</div>-->

    </div>


</template>

<style>
    /*.shadowBox {*/
        /*position: absolute;*/
        /*background: #ddd;*/
        /*width: 268px;*/
        /*height: 418px;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*margin-top: -180px;*/
        /*margin-left: -134px;*/
        /*border-radius: 16px;*/
        /*filter: blur(50px);*/
        /*-webkit-filter: blur(50px);*/
    /*}*/

    .shadowBox {
        background: #999;
        width: 250px;
        height: 158px;

        position: fixed;
        right: calc(10% - 0px);
        margin-right: -100px;
        top: 200px;
        border-radius: 16px;
        filter: blur(50px);
        /*z-index: 9998;*/
        z-index: 10;
        -webkit-filter: blur(50px);
    }

    .snippet--content{
        font-family: -apple-system, BlinkMacSystemFont, PingFang SC, Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;
        max-height: 300px;
        overflow: auto;
    }
    .snippet--panel {
        position: fixed;
        right: calc(10% - 0px);
        margin-right: -125px;
        top: 100px;
        width: 280px;
        color: #898989;
        opacity: 1;
        z-index: 11;
        /*z-index: 9999;*/
        background-color: #fafafa;
        /*border-radius: 4px;*/

        /*-webkit-border-radius: 4px;*/
        /*-moz-border-radius: 4px;*/

        transition: all .2s ease-in;

        -ms-box-shadow: 0 2px 8px hsla(0,0%,50%,.8);
        -o-box-shadow: 0 2px 8px hsla(0,0%,50%,.8);
        box-shadow: 0 2px 8px hsla(0,0%,50%,.8);
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
        font-size: 14px;
        color: #333;
        background-color: #fff;
        border: 0;
        border-radius: 0;
        resize: none;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    /*.doc-comment-box {*/
        /*width: 260px;*/
        /*background: #fff;*/
        /*box-shadow: 0 1px 4px rgba(0, 0, 0, .2);*/
        /*border-radius: 2px;*/
        /*position: absolute;*/
        /*right: 0;*/
        /*bottom: 0;*/
        /*margin-left: 0;*/
        /*cursor: pointer;*/
        /*transition: opacity .3s ease-out, margin-left .3s ease, top .3s ease;*/
    /*}*/

    /*.doc-comment-box.active {*/
        /*cursor: default;*/
        /*box-shadow: 0 0 20px #c8c8c8;*/
        /*margin-left: -30px;*/
        /*width: 290px;*/
    /*}*/


</style>

<script>
    import CodeMirror from 'codemirror';
    require('codemirror/addon/edit/continuelist.js')
    require("./codemirror/tablist");
    require("codemirror/addon/display/fullscreen.js");
    require("codemirror/mode/markdown/markdown.js");
    require("codemirror/addon/mode/overlay.js");
    require("codemirror/addon/display/placeholder.js");
    require("codemirror/addon/selection/mark-selection.js");
    require("codemirror/mode/gfm/gfm.js");
    require("codemirror/mode/xml/xml.js");
    import markdownIt from 'markdown-it'
    import emoji from 'markdown-it-emoji'
    //import subscript from 'markdown-it-sub'
    //import superscript from 'markdown-it-sup'
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
            watches: {
                type: Array,
                default: () => ['source', 'show', 'toc'],
            },
            source: {
                type: String,
                default: ``,
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
                sourceData: this.source,
//                toc: false,
                isView: false,
                isFullScreen: false,
                keyMaps: {},
                selectedWordCount: 0,
                selectedText:'',
                selectedWord: '',
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
            //                .use(subscript)
            //                .use(superscript)
                .use(footnote)
                //                .use(deflist)
                //                .use(abbreviation)
                //                .use(insert)
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


            this.$nextTick(() => {
                this._w = this.$el.offsetWidth
                this._h = this.$el.offsetHeight

                console.log(this._w + ":" + this._h)
            })

            let scope = this;
            let mode = {}
            mode.name = "gfm";

            this.editor.codemirror = CodeMirror.fromTextArea(document.getElementById("_editor"), {
                mode: mode,
//                backdrop: backdrop,
                theme: "paper",
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
            });


            this.editor.codemirror.on('cursorActivity', function (cm) {
//                let cm = this.editor.codemirror;
//                scope.selectedWord = cm.getSelection();
                scope.selectedWord = scope.md.render(cm.getSelection())
                scope.selectedWordCount = scope._wordCount(cm.getSelection());
//                scope.selectedText = cm.getSelection();

//                console.log(scope.selectedText);
            });
        },


        computed: {
            wordCount() {

                return this._wordCount(this.sourceData);
//                return (this.sourceData)
//                let pattern = /[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
//
//                let m = this.sourceData.match(pattern);
//                let count = 0;
//                if (m === null) return count;
//                for (let i = 0; i < m.length; i++) {
//                    if (m[i].charCodeAt(0) >= 0x4E00) {
//                        count += m[i].length;
//                    } else {
//                        count += 1;
//                    }
//                }
//                return count;
            },
            words: function () {
                return this.sourceData.split(' ').length - 1;
            },
//
            chars: function () {
                return this.sourceData.length;
            },
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


            tabFn: function (evt) {
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
//                console.log("markdown is parsed !");
            },
            tocAllRight: function (tocHtmlStr) {
                console.log("toc is parsed :", tocHtmlStr);
            },

            addImage: function (evt) {
                insertContent("![Vue](https://cn.vuejs.org/images/logo.png)", this);
            },

            addUl: function () {
                insertContent('* ', this);
            },
            addOl: function () {
                insertContent('1. ', this);
            },

        },
        watch: {}
    }

</script>
