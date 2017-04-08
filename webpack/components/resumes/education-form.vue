<template>

    <div class="sidebar-content" v-if="isForm">
        <div class="category-content">

            <form>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="学校" v-model="education.institution">
                </div>
                <div class="form-group mb-5" v-if="education.institution">
                    <input type="text" class="form-control " placeholder="所学专业" v-model="education.area">
                </div>
                <div class="form-group mb-5" v-if="education.institution">
                    <input type="text" class="form-control " placeholder="学位" v-model="education.studyType">
                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="开始日期" v-model="education.startDate">

                </div>
                <div class="form-group mb-5" v-if="education.startDate">
                    <input type="text" class="form-control " placeholder="结束日期" v-model="education.endDate">
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <a class="btn btn-default btn-block" @click="cancel('education')">取消</a>

                    </div>
                    <div class="col-md-6">
                        <a class="btn btn-primary btn-block" @click="save('education')"
                           :class="!done ? 'disabled': ''">保存</a>
                    </div>
                </div>
            </form>
        </div>

    </div>

    <div class="sidebar-content" v-else>
        <!-- Title -->
        <div class="category-title h6">

            <a class="btn btn-default btn-block" @click="add"><i
                    class="icon-plus22 position-left text-primary"></i>添加教育背景</a>
        </div>
        <div class="category-content">

            <ul class="media-list media-list-container" id="media-list-target-left">
                <draggable :list="resume.education">

                    <li class="media" v-for="edu, index in resume.education">
                        <div class="media-body">
                            <div class="media-heading text-muted">{{ edu.institution }}</div>
                            {{edu.area}} - {{ edu.studyType }}

                        </div>

                        <div class="controls">
                            <div class="edit"><a @click="edit(edu)" class="edit-project"><i class="icon-pencil"></i></a>
                            </div>
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
        name: 'WorksForm',
        props: ['resume'],
        data: function () {
            return {
                status: "",// edit | add | cancel
                form: "",
                enable: true,
                done: false,
                education: {
                    "institution": "",
                    "area": "",
                    "studyType": "",
                    "startDate": "",
                    "endDate": "",
                    "gpa": "",
                    "courses": []
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
                this.education = {
                    "institution": "",
                    "area": "",
                    "studyType": "",
                    "startDate": "",
                    "endDate": "",
                    "gpa": "",
                    "courses": []
                }
            },
            cancel: function () {
                this.status = "cancel";
//                this.$emit('cancel', 'edu')
                this.reset();
            },
            edit: function (edu, index) {
                this.status = "edit";
                this.education = edu;
            },

            remove: function (index) {
                this.resume.education.splice(index, 1);
            },
            add: function () {
                this.reset();
                this.status = 'add';
            },
            save: function () {
                if (this.status !== "edit") {
                    this.resume.education.unshift(this.education);
                }
                this.status = "";
                this.reset();
//                this.form = 'works';
            }
        },
        watch: {
            education: {
                handler: function (val, oldVal) {
                    if (val.institution !== '' && val.startDate !== '') {
                        this.done = true;
                    }
                },
                deep: true
            }
        }
    }

</script>