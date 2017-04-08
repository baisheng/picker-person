<template>
    <div class="panel panel-body">

        <h6 class=" text-semibold">
            <i class=" icon-briefcase3 position-left"></i> {{ resume.workLabel }}

            <!--<small class="display-block">（工作经历按逆序排列，最新的在最前边，按公司做一级分组，公司内按二级分组）</small>-->

        </h6>

        <ul class="list-feed media-list">

            <li class="media border-teal-400" v-for="work in resume.work">
                <div class="media-body">
                    <a :href="work.website">{{ work.company }}</a>
                    <strong>{{ work.position }}</strong>
                    <p>
                        <vue-markdown :source="work.summary"></vue-markdown>

                    </p>

                    <ol>
                        <li v-for="item in work.highlights" v-html="item"></li>
                    </ol>
                </div>

                <div class="media-right text-nowrap text-muted text-size-small">{{ work.startDate }} — {{ work.endDate }}
                </div>
            </li>
        </ul>

    </div>

</template>

<script>
    export default {
        name: 'Works',
        props: ['resume'],
    }

</script>