<template>


    <div class="sidebar-content" v-if="isForm == true">
        <div class="category-content">

            <form class="">

                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="职位" v-model="work.position">
                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="公司名" v-model="work.company">

                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="公司网站" v-model="work.website">

                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="开始日期" v-model="work.startDate">

                </div>

                <div class="form-group mb-5" v-if="work.startDate">
                    <!--<input type="text" class="form-control " placeholder="结束日期" v-model="work.endDate">-->
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="结束日期" v-model="work.endDate">
                        <span class="input-group-btn">
                            <button class="btn btn-xs btn-default legitRipple" type="button">至今</button>
                        </span>
                    </div>
                </div>
                <!--<div class=" form-group mb-5" v-if="work.startDate">-->
                    <!--<a class="btn btn-default btn-block">至今</a>-->
                <!--</div>-->
                <div class="form-group">
                <textarea rows="5" cols="5" class="form-control " placeholder="工作描述"
                      v-model="work.summary"></textarea>

                </div>

                <div class="row">
                    <div class="col-md-6">
                        <a class="btn btn-default btn-block" @click="cancel('work')">返回</a>
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
            <a class="btn btn-default btn-block" @click="add()"><i class="icon-plus22 position-left text-primary"></i>工作经历</a>

        </div>
        <!-- /title -->
        <div class="category-content">
            <ul class="media-list media-list-container" id="media-list-target-left">
                <draggable :list="resume.work">

                    <li class="media" v-for="item, index in resume.work">

                        <div class="media-body">
                            <div class="media-heading text-muted">{{item.position }}</div>
                            {{item.company}}

                        </div>

                        <div class="controls">
                            <div class="edit"><a @click="edit(item)" class="edit-project"><i class="icon-pencil"></i></a>
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
        data() {
            return {
                status: "",// edit | new | cancel
                form: "",
                enable: true,
                done: false,
                active: false,
                work: {
                    "company": "",
                    "position": "",
                    "website": "",
                    "startDate": "",
                    "endDate": "",
                    "summary": "",
                    "highlights": []
                },

            }
        },
        computed: {
            isForm: function () {
                return this.status === 'edit' || this.status === 'add';

            }
        },
        methods: {
            reset: function () {
                this.work = {
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
                this.status = "cancel";
//                this.$emit('cancel', 'work')
            },
            edit: function (work) {
                this.status = "edit";
                this.work = work;
            },

            add: function () {
                this.status = 'add';
            },

            save: function () {

                if (this.status !== "edit") {
                    this.resume.work.unshift(this.work);
                }
                this.status = "";
                this.reset();

            },
            remove: function (index) {
                this.resume.work.splice(index, 1);

            }

        },
        watch: {
            work: {
                handler: function (val, oldVal) {
                    if (val.position !== '' && val.startDate !== '') {
                        this.done = true;
                    }

                },
                deep: true

            },

        }

    }

</script>