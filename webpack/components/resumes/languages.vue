<template>
    <div class="panel panel-body">
        <h6 class="content-group text-semibold">
            <i class=" icon-sphere position-left"></i>语言能力
        </h6>
        <dl>
            <template v-for="lang in resume.languages">
                <dt>{{lang.language}}</dt>
                <dd>
                    {{ lang.level | lang }}

                </dd>
            </template>
        </dl>

    </div>

</template>

<script>
    export default {
        name: 'Languages',
        props: ['resume'],
    }

</script>


