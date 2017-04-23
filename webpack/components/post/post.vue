<template>

    <div class="panel panel-flat">

        <div class="profile-cover" style="display: none;">
            <!--<div id="cover" class="profile-cover-img"-->
            <!--style="background-image: url(&quot;/static/assets/images/demo/blog/2.jpg&quot;);"></div>-->
            <div class="media">
                <div class="media-body"><h1>
                    <!--${ post.title }-->
                    {{ post.title }}
                </h1></div>
                <div class="media-right media-middle">
                    <ul class="list-inline list-inline-condensed no-margin-bottom text-nowrap">
                        <li><a href="#" class="btn btn-icon btn-xs btn-primary   btn-rounded legitRipple"><i
                                class=" icon-cross"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!--<div class="shadowBox"></div>-->
        <div class="panel panel-white  snippet--panel" :class="{'fadeout' : selected.wordCount === 0 }">
            <div class="panel-heading ">
                <mark class="">生成内容碎片？</mark>

            </div>


            <div class="panel-body">
                <div class="content-group snippet--content" v-html="selected.wordHtml"></div>
            </div>
            <div class="panel-footer panel-footer-condensed "><a class="heading-elements-toggle"><i class="icon-more"></i></a>
                <div class="heading-elements">
                    <span class="heading-text"><small>选中了 {{ selected.wordCount }} 个字</small></span>
                    <ul class="list-inline list-inline-separate heading-text pull-right">
                        <li><a @click="clearAndSnippet" class="" data-popup="tooltip" data-placement="top" data-container="body" title="" data-original-title="剪切成碎片"><i class="fa fa-cut"></i></a></li>
                        <li><a @click="copyAndSnippet" class="" data-popup="tooltip" data-placement="top" data-container="body" title="" data-original-title="复制成碎片"><i class="fa fa-copy"></i></a></li>
                        <!--<li><a href="#">Generate</a></li>-->
                    </ul>
                </div>
            </div>

        </div>

        <div class="table-responsive mail-details-write">
            <table class="table">
                <tbody>
                <tr>
                    <td colspan="2" class="p-5 no-border">
                        <input type="text"
                               placeholder="无标题"
                               name="title"
                               class="form-control text-semibold" v-model="post.title"></td>
                </tr>
                </tbody>
            </table>
        </div>

        <Editor :model="post" v-on:selection="onSelection"></Editor>

    </div>

</template>

<script>
    import Editor from './editor/editor.vue';
    export default {
//        props: ['post'],
        data: function () {
            return {
                post: {
                    id: '',
                    title: '',
                    content: '',
                    terms:[]
                },
                selected: {
                    wordHtml:'',
                    wordCount: 0,
                    word: ''
                }
            }
        },
        mounted:function () {
            Vue.nextTick(function(){
                Prism.highlightAll();

            })
        },
        components: {
            Editor
        },
        methods: {
            onSelection(selected){
                this.selected = selected;
            },
            clearAndSnippet(){
                eventHub.$emit('replaceSelection', "")
            },
            copyAndSnippet(){
                eventHub.$emit('replaceSelection', "")
            }
        }
    }

</script>