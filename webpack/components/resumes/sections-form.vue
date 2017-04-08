<template>


    <work-form :resume="resume" v-on:cancel="cancel" v-if="form == 'work' && section.name == 'work'"></work-form>

    <education-form :resume="resume" v-on:cancel="cancel" v-else-if="form == 'education' && section.name == 'education'"></education-form>

    <additional-work-form :resume="resume" v-on:cancel="cancel" v-else-if="form == 'additionalWork' && section.name == 'additionalWork'"></additional-work-form>

    <awards-form :resume="resume" v-on:cancel="cancel" v-else-if="form == 'awards' && section.name == 'awards'"></awards-form>

    <skills-form :resume="resume" v-on:cancel="cancel" v-else-if="form == 'skills' && section.name == 'skills'" ></skills-form>

    <languages-form :resume="resume" v-on:cancel="cancel" v-else-if="form == 'languages' && section.name == 'languages'"></languages-form>

    <!--:isImage="isImage" -->
</template>


<script>
//    import BasicsForm from './basics-form.vue'

    import WorkForm from './work-form.vue'
    import EducationForm from './education-form.vue'
    import AdditionalWorkForm from './additional-work-form.vue'
    import SkillsForm from './skills-form.vue'
    import LanguagesForm from './languages-form.vue'
    import AwardsForm from './awards-form.vue'

    export default {
        name: 'SectionsForm',
        props: ['resume', 'section', 'form', 'cancel'],
        components: {
//            BasicsForm,
            WorkForm,
            AdditionalWorkForm,
            EducationForm,
            SkillsForm,
            LanguagesForm,
            AwardsForm,
        },
    }

</script>