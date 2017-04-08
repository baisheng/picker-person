<template>

    <div class="panel panel-body">
        <h6 class="content-group text-semibold">
            <i class=" icon-interests position-left"></i>兴趣爱好
        </h6>
        <dl>
            <template v-for="interest in resume.interests">
                <dt class="text-muted">{{interest.name}}</dt>
                <dd>
                    <ul class="list-inline list-inline-separate no-margin-bottom">
                        <li v-for="keyword in interest.keywords">{{ keyword }}</li>
                    </ul>
                </dd>
            </template>
        </dl>

    </div>
</template>

<script>
    export default {
        name: 'Interests',
        props: ['resume'],
    }

</script>


