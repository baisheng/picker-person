<template>
    <div class="panel panel-flat" v-if="resume.education">
        <div class="well no-border">
            <h6 class=" text-semibold">
                <i class=" icon-graduation2 position-left"></i>教育背景
            </h6>
        </div>
        <div class="table-responsive">
            <table class="table table-md">
                <tbody>
                <template  v-for="edu in resume.education">
                    <tr>
                        <th colspan="3" class="text-muted">
                            <em>{{ edu.startDate }} - {{ edu.endDate }}</em>

                        </th>
                    </tr>
                    <tr class="text-slate">
                        <td>
                            <span>{{  edu.institution }}</span>
                        </td>
                        <td>
                            {{ edu.area }} ・{{ edu.studyType }}
                                </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    export default {
        name : 'Education',
        props: ['resume'],
    }

</script>