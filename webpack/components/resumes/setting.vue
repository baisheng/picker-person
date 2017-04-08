<template>
    <!-- Switchery group -->
    <div class="sidebar-category">
        <div class="category-title">
            <span>简历模块</span>
            <ul class="icons-list">
                <li><a href="#" data-action="collapse"></a></li>
            </ul>
        </div>


        <div class="category-content">
            <form action="#">
                <div class="form-group">
                    <div class="checkbox checkbox-switchery checkbox-right switchery-xs">
                        <label class="display-block">
                            <input type="checkbox" class="switchery" v-model="section.work">
                            工作经历
                        </label>
                    </div>

                    <div class="checkbox checkbox-switchery checkbox-right switchery-xs">
                        <label class="display-block">
                            <input type="checkbox" class="switchery" v-model="section.education">
                            教育背景
                        </label>
                    </div>

                    <div class="checkbox checkbox-switchery checkbox-right switchery-xs">
                        <label class="display-block">
                            <input type="checkbox" class="switchery" v-model="section.project">
                            项目经验
                        </label>
                    </div>

                    <div class="checkbox checkbox-switchery checkbox-right switchery-xs">
                        <label class="display-block">
                            <input type="checkbox" class="switchery">
                            擅长技能
                       </label>
                    </div>

                    <div class="checkbox checkbox-switchery checkbox-right switchery-xs">
                        <label class="display-block">
                            <input type="checkbox" class="switchery" v-model="section.language">
                            语言能力
                        </label>
                    </div>


                    <div class="checkbox checkbox-switchery checkbox-right switchery-xs">
                        <label class="display-block">
                            <input type="checkbox" class="switchery" v-model="section.award">
                            所获奖项
                        </label>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- /switchery group -->
</template>

<script>
    export default {
        name: 'setting',
        props: ['resume'],
        data () {
            return {
//                enabled: !!this.selected
                section: {
                    award: true,
                    education: true,
                    interest: true,
                    language: true,
                    project: true,
                    reference: true,
                    skill: true,
                    work: true
                }
            }
        },
    }

</script>