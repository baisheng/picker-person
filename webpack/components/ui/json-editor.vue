<template>

    <div id="editor_holder"></div>
</template>

<script>

    import JsonEditor from 'json-editor'
    export default {
        props: {
            //传入的Object对象
            //{content:""}//至少包含content属性 用于保存富文本编辑器的CODE内容
//            model: {
//                required: true
//            }
        },
        data: function () {
            return {
                schema: {
                    "type": "object",
                    "title": "站点配置",
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "properties": {
                        "icp": {"type": "string", "description": "ICP 备案号", "default":"京ICP备16048884号-1"},
                        "lang": {"type": "string", "description": "站点语言"},
                        "keywords": {"type": "array", "items": {"type": "string"}, "description": "关键词"},
                        "site_url": {"type": "string", "description": "站点地址"},
                        "copyright": {"type": "string", "description": "版权信息"},
                        "stylesheet": {"type": "string", "description": "站点样式"},
                        "theme_path": {"type": "string", "description": "网站主题路径"},
                        "default_app": {"type": "string", "description": "默认应用"},
                        "description": {"type": "string", "description": "站点描述"},
                        "analyze_code": {"type": "string", "description": "统计代码"},
                        "current_theme": {"type": "string", "description": "当前主题"},
                        "default_index": {"type": "string", "description": "默认首页"},
                        "password_salt": {"type": "string", "description": "密码盐"},
                        "profile_cover": {"type": "object", "description": "个性化封面图"}
                    },
                    "description": "推荐内容"
                }
            }
        },
        mounted: function () {
//            JSONEditor.defaults.options.iconlib = "bootstrap2";
            JSONEditor.defaults.options.theme = 'bootstrap3';
            //  initialize the summernote
            let me = this;
            this.control = $(this.$el);


// Set the icon lib during initialization
            me.editor = new JSONEditor(this.$el, {
                schema: this.schema,
                iconlib: "fontawesome4"
            });

            me.editor.on('change', function () {
                console.log(me.editor.getValue())
            })
        },
        methods: {},
        watch: {}
    }

</script>