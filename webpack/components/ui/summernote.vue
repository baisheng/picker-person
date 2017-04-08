<template>
    <textarea class='form-control' :name='name'>1</textarea>
</template>


<script>

    export default {
        props: {
            //传入的Object对象
            //{content:""}//至少包含content属性 用于保存富文本编辑器的CODE内容
            model: {
                required: true
            },
            airMode: {
                type: Boolean,
                required: false,
                default: true
            },
            language: {
                type: String,
                required: false,
                default: "zh-CN"
            },
            height: {
                type: Number,
                required: false,
                default: 360
            },
            minHeight: {
                type: Number,
                required: false,
                default: 360
            },
            maxHeight: {
                type: Number,
                required: false,
                default: 1000
            },
            name: {
                type: String,
                required: false,
                default: ""
            },
            toolbar: {
                type: Array,
                required: false,
                default: function () {
                    return [
                        ["font", ["bold", "italic", "underline", "clear"]],
                        ["fontsize", ["fontsize"]],
                        ["para", ["ul", "ol", "paragraph"]],
                        ["color", ["color"]],
                        ["insert", ["link", "picture", "hr"]],
                        ['view', ['fullscreen', 'codeview']],
                    ];
                }
            }
        },
        created: function () {
        },
        destroyed: function () {

        },
        data: function () {
            return {
                control: "",
            }
        },
        mounted: function () {
            //  initialize the summernote
            if (this.minHeight > this.height) {
                this.minHeight = this.height;
            }
            if (this.maxHeight < this.height) {
                this.maxHeight = this.height;
            }
            let me = this;
            this.control = $(this.$el);

            this.control.summernote({
                codemirror: { // codemirror options
                    theme: 'monokai'
                },
//                                placeholder: "在这里输入内容...",

                airMode: this.ariMode,
                lang: this.language,
                height: this.height,
                minHeight: this.minHeight,
                maxHeight: this.maxHeight,
                // toolbar: this.toolbar,
                callbacks: {
                    onInit: function () {
                        me.control.summernote("code", me.model.content);
                    },
                    onImageUpload: function (files) {
                        //上传图片到服务器，使用了formData对象
                        let formData;
                        formData = new FormData();
                        formData.append('file', files[0]);
                        formData.append("param", '{"fileid":' + Math.random() + ',"filetype":"head","filenum":"04' + Math.random() + '"}');
                        $.ajax({
                            url: '/upload/partfile',
                            type: 'POST',
                            data: formData,
                            cache: false,
                            contentType: false,
                            processData: false
                        }).then((res) => {
                            console.log('上传图片成功', res);
                            var resdata = res.data;
                            var newInfo = JSON.parse(resdata);
                            newInfo.url += '?t' + Math.random();
                            me.control.summernote('insertImage', newInfo.url, 'img');
                        })

                    }
                }
            }).on("summernote.change", function () {
                // Note that we do not use the "onChange" options of the summernote
                // constructor. Instead, we use a event handler of "summernote.change"
                // event because that I don't know how to trigger the "onChange" event
                // handler after changing the code of summernote via ".summernote('code')" function.
                let content = me.control.summernote("code");
                me.$nextTick(function () {
                    me.isChanging = false;
                    //时间名称只能是小写
                    me.$emit('modelchange', me.model, content);
                });
            });
        },
        methods: {},
        watch: {}
    }

</script>