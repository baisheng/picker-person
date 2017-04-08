// import FileUpload from 'vue-upload-component'
import axios from 'axios'
Vue.prototype.$http = axios;

// const $ = require("jquery")
// const jquery = require("jquery")
// import Multiselect from 'vue-multiselect'
// import Switches from '../ui/switches.vue';
// import Switch from '../ui/switch.vue'
import VueMarkdown from 'vue-markdown'
// import { markdownEditor } from 'vue-simplemde'

import Basics from './basics.vue'
import BasicsForm from './basics-form.vue'
import draggable from 'vuedraggable'

import VueDND from '../js/vue-dragging'
Vue.use(VueDND)

import Sections from './sections.vue'
import SectionsForm from './sections-form.vue'


Vue.component('draggable',draggable);
Vue.component('VueMarkdown',VueMarkdown);
// Vue.component('markdownEditor', markdownEditor);

new Vue({

    el: '#app',
    components: {
        // draggable,
        // Multiselect,
        Basics,
        BasicsForm,

        Sections,
        SectionsForm
        // FileUpload
    },
    data: {
        id: ID,
        image: {
            guid: ''
        },
        enabled: false,
        imageDefault: '/static/assets/images/avatar.png',
        isImage: false,
        form: 'basics', // basics| works| skills| refrences| interests
        temp: {},
        value: false,
        text: '',
        imageFiles: [],
        // src: '/static/assets/images/demo/users/face1.jpg',
        headline: '菜单管理',
        status: "init",
        resume: _RESUME_DATA,
        name: '',
        title: TITLE,
        type: 'person',
        options: [
            { name: 'person', title: '个人简历' },
            { name: 'team', title: '团队简历' },
            { name: 'about', title: '关于我们' },
        ],
        menus: [],
        sectionMenu: false,
        done: false,
        iframe: {
            src: '/admin/resumes/preview',
            loaded: false
        },

        section: SECION,
        meta: {
            _resume_section: {}

        },
    },
    events: {
        new_work(){
            // console.log('newWork lllll')
        },

    },
    mounted: function () {
        this.meta._resume_section = this.section;

        if (this.resume.basics.picture === ""){
           this.resume.basics.picture = this.imageDefault;
        }
        var vue = this;

        // vue.fetch();


        eventHub.$on("new_work", function(){
            vue.form = 'new_work'

        })
        // $(document).on("fetch", function (data) {
        //     console.log('alala')
        //     console.log(JSON.stringify(data))
        // });
        eventHub.$on("frame_loaded", function () {
            console.log("snippet")
//                    vue.$mount(vue.$refs.frame);
//                    console.log(JSON.stringify(main.$refs.frame))

        });
        // vue.resume.basics.picture = vue.image.guid;

        // Vue.nextTick(function(){
        //     vue.resume.basics.picture = vue.image.guid;
        //
        // })
        eventHub.$on('fetch-avatar', function (data) {
                // console.log(JSON.stringify(data))
            // Vue.nextTick(function(){
                vue.image = data;
                vue.resume.basics.picture = vue.image.guid;
                vue.isImage = true;
            // })
        })
        // $(function(){
        //     $('.sidebar-fixed').on('activate.bs.scrollspy', function () {
        //         // do something…
        //         console.log("--------")
        //     })
        // })
        Vue.nextTick(function(){

        })
        eventHub.$on('section', function(section){
            vue.form = section;
            // console.log(vue.form);

        })
        this.$nextTick(function () {



            // vue.resume.basics.picture = vue.image.guid;

            // console.log('Main nextTick');

            // code that assumes this.$el is in-document
        })

    },
    created: function(){
    //

    },

    methods: {
        // imageuploaded(res) {
        //     if (res.errcode == 0) {
        //         this.src = '/static/assets/images/demo/users/face1.jpg';
        //     }
        // },
        removeAvatar: function(){
            // this.image =
            this.resume.basics.picture = this.imageDefault;
        },
        showSection: function(){
            this.sectionMenu = true;
            this.form = 'works';
        },

        cancel: function(from){
            // console.log("---" + from);
            // console.log("cancel ===")
            // if (from === 'work') {
            //     this.form = 'works';
            //     this.work = {};
            // }
            switch(from){
                case 'work':
                    this.form = 'works';
                    // this.work = {};
                    break;
                case 'education':
                    this.form = 'education';
                    // this.education = this.temp;
                    break;
            }
        },
        basics: function(){
            this.sectionMenu = false;
            this.form = 'basics';
        },

        load: function () {
//                    this.iframe.loaded = true;
//                    eventHub.$emit("frame_loaded")
        },
        autoSave: function(){

        },
        save: function(){
            console.log("post data ");
            this.status = 'saving';
            this.post();

        },
        fetch(){
            let vue = this;
            this.$http.get('/admin/api/resume/' + vue.id)
                .then(function(response) {
                    // vue.resume = response.data.data.content_json;
                    let content = JSON.parse(response.data.data.content_json)
                    vue.resume = content.resume;
                    // console.log(content['resume'].basics.name);
                    // console.log(response.status);
                    // console.log(response.statusText);
                    // console.log(response.headers);
                    // console.log(response.config);
                })
                .catch(function (error) {
                    if (error.response) {
                        // The request was made, but the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });

        },
        post: function(){
            console.log("POST -----")
            let vue = this;

            let post_data = {
                // id: vue.id,
                title: this.title,
                name: this.name,
                meta: this.meta,
                // type: this.type,
                content_json:'{"resume":' + JSON.stringify(vue.resume) + '}'
            }
            if (vue.id !== 0){
                console.log(vue.id + "----------")
                post_data.id = vue.id;
            }
            // console.log(JSON.stringify(post_data));
            // /admin/posts/article
            // this.$http.post('/admin/resume', post_data)
            this.$http.post('/admin/posts/resume', post_data)

                .then(function (response) {
                    // console.log(response.data);
                    let data = response.data;
                    if (data._id != null){
                        vue.id = data._id;
                        History.pushState({state: 1}, "State 1", vue.id.toString());
                        vue.status = 'success';
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        // errorhandle(err) {
        //     console.error(err);
        // },
        // onFileChange(e) {
        //     var files = e.target.files || e.dataTransfer.files;
        //     if (!files.length)
        //         return;
        //     this.createImage(files[0]);
        // },
        // createImage(file) {
        //     var image = new Image();
        //     var reader = new FileReader();
        //     var vm = this;
        //
        //     reader.onload = (e) => {
        //         vm.image = e.target.result;
        //     };
        //     reader.readAsDataURL(file);
        // },
        // removeImage: function (e) {
        //     this.image = '';
        // }

    },
    watch: {
        resume: {
            handler: function (val, oldVal) {
                this.resume = val;
                this.save();
            },
            deep: true
        },
        title: {
            handler: function(val, oldVal) {
                this.save();

            }
        },
        section: {
            handler: function (val, oldVal) {
                this.meta._resume_section = val;
                this.save();
            },
            deep: true
        },
        value(val) {
            // console.log(val)
            this.text = val ? 'Yes' : 'No'
        }
        // title(newVal){
        //    if (newVal) {
               // console.log(newVal)
               // this.post();
           // }
        // }
/*        work: {
            handler: function(val, oldVal){
                if (val.position !== '' && val.startDate !== ''){
                    this.done = true;
                }
            },
            deep: true

        },
        education: {
            handler: function(val, oldVal){
                if (val.institution !== '' && val.startDate !== ''){
                    this.done = true;
                }
            },
            deep: true
        }*/
    },
});


