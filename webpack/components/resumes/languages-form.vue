<template>

    <div class="sidebar-content" v-if="isForm">
        <div class="category-content">

            <form>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="语言" v-model="lang.language">
                </div>
                <div class="form-group mb-5">
                    <select class="form-control" v-model="lang.level">
                        <option disabled value="">选择语言级别</option>
                        <option value="advanced">★★★★★ - 母语级</option>
                        <option value="upper_intermediate">★★★★☆ - 高级口语、写作能力</option>
                        <option value="low_intermediate">★★★☆☆ - 流畅的使用</option>
                        <option value="pre_intermediate">★★☆☆☆ - 日常使用</option>
                        <option value="elementary">★☆☆☆☆ - 初级使用</option>
                        <option value="c2">★★★★★ - C2</option>
                        <option value="c1">★★★★★ - C1</option>
                        <option value="b2">★★★★☆ - B2</option>
                        <option value="b1">★★★☆☆ - B1</option>
                        <option value="a2">★★☆☆☆ - A2</option>
                        <option value="a1">★☆☆☆☆ - A1</option>
                    </select>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <a class="btn btn-default btn-block" @click="cancel('language')">返回</a>
                    </div>
                    <div class="col-md-6">
                        <a class="btn btn-primary btn-block" @click="save()" :class="!done ? 'disabled': ''">保存</a>
                    </div>
                </div>
            </form>
        </div>

    </div>

    <div class="sidebar-content" v-else>
        <!-- Title -->
        <div class="category-title h6">
            <a class="btn btn-default btn-block" @click="add"><i
                    class="icon-plus22 position-left text-primary"></i>添加语言</a>

        </div>
        <div class="category-content">

            <ul class="media-list media-list-container">
                <draggable :list="resume.languages">

                    <li class="media" v-for="lang, index in resume.languages">

                        <div class="media-body">
                            <div class="media-heading text-muted">{{ lang.language }}</div>
                            {{ lang.level | lang}}





                        </div>

                        <div class="controls">
                            <div class="edit"><a @click="edit(lang)" class="edit-project"><i
                                    class="icon-pencil"></i></a></div>
                            <div class="del"><a @click="remove(index)"><i
                                    class="text-danger-400 icon-trash"></i></a>
                            </div>
                            <div class="reorder">
                                <i class="icon-move reorder dragula-handle"></i>

                            </div>
                        </div>
                    </li>

                </draggable>

            </ul>

        </div>
    </div>

</template>

<script>

    export default {
        name: 'LanguagesForm',
        props: ['resume'],
        data: function () {
            return {
                status: "",// edit | add | cancel
                form: "",
                enable: true,
                done: false,
                lang: {
                    "language": "",
                    "level": ""
                }
            }
        },
        computed: {
            isForm: function () {
                return this.status === 'edit' || this.status === 'add';

            }
        },
        methods: {
            reset: function () {
                this.lang = {
                    "language": "",
                    "level": ""
                }
            },
            cancel: function () {
                this.reset();
                this.status = "cancel";
//                this.$emit('cancel', 'language')
            },
            edit: function (obj, index) {
                this.status = "edit";
                this.lang = obj;
            },

            add: function () {
                this.reset();
                this.status = 'add';
            },
            remove: function (index) {
                this.resume.languages.splice(index, 1);

            },

            save: function () {
                if (this.status !== "edit") {
                    this.resume.languages.unshift(this.lang);

                }
                this.status = "";
                this.reset();
            }
        },
        watch: {
            lang: {
                handler: function (val, oldVal) {
                    console.log(val)
                    if (val.language !== '' && val.level !== '') {
                        this.done = true;
                    }
                },
                deep: true
            }
        }
    }

</script>