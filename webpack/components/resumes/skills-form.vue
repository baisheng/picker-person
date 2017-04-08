<template>

    <div class="sidebar-content" v-if="isForm">
        <div class="category-content">

            <form>
                <div class="form-group">
                    <input type="text" class="form-control text-semibold text-teal" placeholder="技能类别"
                           v-model="skill.name">
                </div>
                <draggable :list="skill.keywords">

                    <div class="form-group  mb-5" v-for="keyword, index in skill.keywords">
                        <input class="form-control" type="text" placeholder="技能项" v-model="skill.keywords[index]">

                        <div class="controls">
                            <a class="delete ajax"><i class="del text-danger-400 icon-trash"></i></a>
                            <a><i class="reorder icon-move"></i></a>
                        </div>
                    </div>

                    <div class="form-group" v-if="skill.name">

                        <input type="text" class="form-control border border-teal-400" placeholder="新技能项"
                               @change="change"
                               v-model="new_keyword">
                    </div>
                </draggable>


                <div class="row">
                    <div class="col-md-6">
                        <a class="btn btn-default btn-block" @click="cancel('education')">返回</a>

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
            <a class="btn btn-default btn-block" @click="add()"><i class="icon-plus22 position-left text-primary"></i>添加技能</a>
        </div>
        <div class="category-content">

            <ul class="media-list media-list-container" id="media-list-target-left">
                <!--                <draggable :list="resume.skills">

                                    <li class="media" v-for="item, index in resume.skills">

                                        <div class="media-body">
                                            <div class="media-heading text-muted">
                                                {{item.name }}
                                            </div>
                                            <small>{{ item.keywords.length }} 技能项</small>

                                        </div>

                                        <div class="controls">
                                            <div class="edit"><a @click="edit(item)" class="edit-project"><i
                                                    class="icon-pencil"></i></a></div>
                                            <div class="del"><a @click="remove(index)"><i
                                                    class="text-danger-400 icon-trash"></i></a>
                                            </div>
                                            <div class="reorder">
                                                <i class="icon-move reorder dragula-handle"></i>

                                            </div>
                                        </div>
                                    </li>

                                </draggable>-->



                <li class="media" v-for="item, index in resume.skills"

                    v-dragging="{item: item, list: resume.skills}" :key="item.name">

                    <div class="media-body">
                        <div class="media-heading text-muted">
                            {{item.name }}
                            </div>
                        <small>{{ item.keywords.length }} 技能项</small>

                    </div>

                    <div class="controls">
                        <div class="edit"><a @click="edit(item)" class="edit-project"><i
                                class="icon-pencil"></i></a></div>
                        <div class="del"><a @click="remove(index)"><i
                                class="text-danger-400 icon-trash"></i></a>
                        </div>
                        <div class="reorder">
                            <i class="icon-move reorder dragula-handle"></i>

                        </div>
                    </div>
                </li>


            </ul>

        </div>
    </div>

</template>
<script>

    export default {
        name: 'SkillsForm',
        props: ['resume'],
        data: function () {
            return {
                status: "",// edit | new | cancel
                form: "",
                enable: true,
                done: false,
                active: false,
                new_keyword: "",
                skill: {
                    "name": "",
                    "level": "",
                    "keywords": []
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
                this.skill = {
                    "name": "",
                    "level": "",
                    "keywords": []
                }
            },
            cancel: function () {
                this.reset();
                this.status = "cancel";
//                this.$emit('cancel', 'skill')
            },
            edit: function (skill) {
                this.status = "edit";
                this.skill = skill;
            },

            add: function () {
                this.status = 'add';
            },

            save: function () {
                this.resume.skills.push(this.skill);
                this.status = "";
                this.reset();
            },
            removeKeyword: function (index) {
                this.skill.keywords.splice(index, 1);

            },
            remove: function (index) {
                this.resume.skills.splice(index, 1);

            },
            change: function () {
                this.skill.keywords.push(this.new_keyword)
                this.new_keyword = "";

            }
        },
        watch: {
            skill: {
                handler: function (val, oldVal) {
//                    this.resume.skills.push(val);
                    this.done = true;
                },
                deep: true

            },
            new_keyword(val){
//               this.skill.keywords.push(val) ;
            }
        }
    }

</script>