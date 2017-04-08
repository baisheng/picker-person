<template>

    <div class="col-md-4 col-lg-3" v-if="isForm == true">
        <div class="panel panel-body">
            <form class="">

                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="获奖时间" v-model="award.date">
                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="奖项名称" v-model="award.title">

                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="所获奖项" v-model="award.awarder">

                </div>
                <div class="form-group">
                    <textarea rows="5" cols="5" class="form-control " placeholder="工作描述"
                              v-model="award.summary"></textarea>
                </div>

            </form>
        </div>
        <div class="row">
            <div class="col-md-6">
                <a class="btn btn-default btn-block" @click="cancel('award')">返回</a>
            </div>
            <div class="col-md-6">
                <a class="btn btn-primary btn-block" @click="save()" :class="!done ? 'disabled': ''">保存</a>
            </div>
        </div>

    </div>
    <div class="sidebar-content" v-else>
        <!-- Title -->
        <div class="category-title h6">
            <a class="btn btn-default btn-block" @click="add()"><i class="icon-plus22 position-left text-teal"></i>添加奖项</a>
        </div>
        <div class="category-content">


            <ul class="media-list media-list-container" id="media-list-target-left">
                <draggable :list="resume.awards">

                    <li class="media" v-for="item, index in resume.awards">
                        <div class="media-body">
                            <div class="media-heading text-muted">{{ item.title }}</div>
                            {{item.awarder}}


                        </div>

                        <div class="controls">
                            <div class="edit"><a @click="edit(item)" class="edit-project"><i
                                    class="icon-pencil"></i></a></div>
                            <!--<div class="del"><a class="icon delete ajax "><i class="text-danger-400 icon-trash"></i></a></div>-->
                            <div class="del"><a @click="remove(index)"><i
                                    class="text-danger-400 icon-trash"></i></a></div>

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
        name: 'AwardsForm',
        props: ['resume'],
        data() {
            return {
                status: "",// edit | new | cancel
                form: "",
                enable: true,
                done: false,
                active: false,
                award: {
                    "title": "",
                    "date": "",
                    "awarder": "",
                    "summary": ""
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
                this.award = {
                    "title": "",
                    "date": "",
                    "awarder": "",
                    "summary": ""
                }
            },
            cancel: function () {
                this.status = "cancel";
//                this.$emit('cancel', 'award')
            },
            edit: function (award) {
                this.status = "edit";
                this.award = award;
            },

            add: function () {
                this.status = 'add';
            },

            save: function () {

                if (this.status !== "edit") {
                    this.resume.awards.unshift(this.award);
                }
                this.status = "";
                this.reset();

            },
            remove: function (index) {
                this.resume.awards.splice(index, 1);

            }

        },
        watch: {
            award: {
                handler: function (val, oldVal) {
                    if (val.title !== '' && val.awarder !== '') {
                        this.done = true;
                    }

                },
                deep: true

            },

        }

    }

</script>