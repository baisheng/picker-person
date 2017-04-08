<template>
    <div class="row" v-if="resume.awards">
        <div class="col-md-12">

            <div class="panel">

                <div class=" panel-body">
                    <h6 class=" text-semibold">
                        <i class="icon-trophy3 position-left"></i>所获奖项
                    </h6>
                    <ul class="list-feed">
                        <li v-for="award in resume.awards">
                            <div class="feed-time text-muted">{{ award.date }}</div>
                            <strong>{{ award.title }}</strong>
                            <span content="label label-default">{{ award.awarder }}</span>

                            <p>{{ award.summary }}</p>
                        </li>

                    </ul>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Awards',
        props: ['resume'],
    }

</script>