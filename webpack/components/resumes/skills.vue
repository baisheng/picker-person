<template>
    <div class="panel panel-body">
        <h6 class="content-group text-semibold">
            <i class=" icon-stats-bars3 position-left"></i>擅长技能
            <!--<small class="display-block">我常用的专业性技能</small>-->
        </h6>
        <dl>
            <template v-for="skill in resume.skills">
                <dt>{{skill.name}}</dt>
                <dd>
                <span class="label border-slate-300 label-striped mr-5 content-group"
                      v-for="keyword in skill.keywords">{{ keyword }}</span>
                </dd>
            </template>
        </dl>

    </div>

</template>

<script>
    export default {
        name: 'Skills',
        props: ['resume'],
    }

</script>