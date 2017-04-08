<template>

    <div class="col-md-4 col-lg-3" v-if="isForm">
        <div class="panel panel-body">
            <div class="form-group mb-5">
                <input type="text" class="form-control " placeholder="职位" v-model="project.position">
            </div>
            <div class="form-group mb-5">
                <input type="text" class="form-control " placeholder="公司名" v-model="project.company">

            </div>
            <div class="form-group mb-5">
                <input type="text" class="form-control " placeholder="公司网站" v-model="project.website">

            </div>
            <div class="form-group mb-5">
                <input type="text" class="form-control " placeholder="开始日期" v-model="project.startDate">

            </div>
            <div class="form-group mb-5" v-if="project.startDate">
                <input type="text" class="form-control " placeholder="结束日期" v-model="project.endDate">
            </div>
            <div class=" no-margin-bottom mb-5" v-if="project.startDate">
                <a class="btn btn-default btn-block">我目前在这里工作</a>
            </div>
            <div class="form-group">
            <textarea rows="5" cols="5" class="form-control " placeholder="工作描述"
                      v-model="project.summary"></textarea>
            </div>

        </div>
        <div class="row">
            <div class="col-md-6">
                <a class="btn btn-default btn-block" @click="cancel('project')">返回</a>
            </div>
            <div class="col-md-6">
                <a class="btn btn-primary btn-block" @click="save()" :class="!done ? 'disabled': ''">保存</a>
            </div>
        </div>

    </div>
    <div class="sidebar-content" v-else>
        <!-- Title -->
        <div class="category-title h6">

            <a class="btn btn-default btn-block" @click="add"><i class="icon-plus22 position-left text-teal"></i>添加项目经验</a>

        </div>
        <div class="category-content">

            <ul class="media-list media-list-container">
                <draggable :list="resume.additionalWork">

                    <li class="media" v-for="project, index in resume.additionalWork">
                        <div class="media-body">
                            <div class="media-heading text-muted">{{ project.position }}</div>
                            {{project.company}}
                        </div>

                        <div class="controls">
                            <div class="edit"><a @click="edit(project)" class="edit-project"><i
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
        name: 'projectsForm',
        props: ['resume'],
        data: function () {
            return {
                status: "",// edit | add | cancel
                form: "",
                enable: true,
                done: false,
                project: {
                    "company": "",
                    "position": "",
                    "website": "",
                    "startDate": "",
                    "endDate": "",
                    "summary": "",
                    "highlights": []
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
                this.project = {
                    "company": "",
                    "position": "",
                    "website": "",
                    "startDate": "",
                    "endDate": "",
                    "summary": "",
                    "highlights": []
                }
            },
            cancel: function () {
                this.reset();
                this.status = "cancel";
//                this.$emit('cancel', 'project')
            },
            edit: function (obj, index) {
                this.status = "edit";
                this.project = obj;
            },

            add: function () {
                this.reset();
                this.status = 'add';
            },
            remove: function (index) {
                this.resume.additionalWork.splice(index, 1);

            },

            save: function () {
                if (this.status !== "edit") {
                    this.resume.additionalWork.unshift(this.project);

                }
                this.status = "";
                this.reset();
            }
        },
        watch: {
            project: {
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