<template>
    <div class="row" v-if="resume.additionalWork">
        <div class="col-md-12">

            <div class="panel">

                <div class=" panel-body">

                    <h6 class=" text-semibold">
                        <i class="icon-thumbs-up3 position-left"></i>{{ resume.additionalWorkLabel }}
                            </h6>
                    <ul class="list-feed">
                        <li v-for="work in resume.additionalWork">
                            <div class="feed-time text-muted">{{ work.startDate }} — {{ work.endDate }}

                            </div>
                            <a :href="work.website">{{ work.company }}</a> <strong>{{ work.position }}</strong>

                            <p>{{ work.summary }}</p>
                            <ol v-if="work.highlights">
                                <li v-for="item in work.highlights" v-html="item"></li>
                            </ol>
                        </li>

                    </ul>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Project',
        props: ['resume'],
    }

</script>