<template>

    <div id="editor_holder"></div>
</template>

<script>

    import JsonEditor from 'json-editor'
    export default {
        props: {
            schema:{
                required: true
            }
            //传入的Object对象
            //{content:""}//至少包含content属性 用于保存富文本编辑器的CODE内容
//            model: {
//                required: true
//            }
        },
        data: function () {
            return {
            }
        },
        mounted: function () {
            let me = this;

// Set the icon lib during initialization
            me.editor = new JSONEditor(this.$el, {
                schema: this.schema,
                iconlib: "fontawesome4"
            });


            JSONEditor.defaults.options.theme = 'bootstrap3';
            eventHub.$on('reload', (model) => {

                me.editor.destroy();
                me.editor = new JSONEditor(this.$el, {
                    schema: model,
                    iconlib: "fontawesome4"
                });
                me.editor.on('change', function () {
                    console.log(me.editor.getValue())
                })
            })


//            JSONEditor.defaults.options.iconlib = "bootstrap2";
            //  initialize the summernote
//            this.control = $(this.$el);


        },
        methods: {},
        watch: {}
    }

</script>