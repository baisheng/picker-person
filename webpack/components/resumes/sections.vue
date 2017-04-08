<template>
    <education :resume="resume" id="education" v-if="section.name == 'education'"></education>

    <work :resume="resume" id="work" v-else-if="section.name == 'work'"></work>

    <additional-work :resume="resume" v-else-if="section.name == 'additionalWork'" id="additionalWork"></additional-work>

    <awards :resume="resume" id="awards" v-else-if="section.name == 'awards'"></awards>

    <skills :resume="resume" id="skills" v-else-if="section.name == 'skills'"></skills>

    <languages :resume="resume" id="languages" v-else-if="section.name == 'languages'"></languages>
    <interests :resume="resume" :id="section.name" v-else-if="section.name == 'interests'"></interests>
</template>

<script>
//    import draggable from 'vuedraggable'
    import Work from './work.vue'
    import Education from './education.vue'
    import AdditionalWork from './additional-work.vue'
    import Skills from './skills.vue'
    import Languages from './languages.vue'
    import Awards from './awards.vue'
    import Interests from './interests.vue'

    export default {
        name: 'sections',
        props: ['resume', 'section'],
        components: {
            Work,
            AdditionalWork,
            Education,
            Skills,
            Languages,
            Awards,
            Interests
        },
    }

</script>