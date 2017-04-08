import VueCoreImageUpload  from 'vue-core-image-upload';

new Vue({
    el: '#app',
    components: {
        'vue-core-image-upload': VueCoreImageUpload
    },
    data: {
        src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
        headline: '菜单管理',
        status: "",
        resume: _RESUME_DATA,
        name: [],
        menus: [],
        sectionMenu: false,
        iframe: {
            src: '/admin/resumes/preview',
            loaded: false
        }
    },
    mounted: function () {
        var vue = this;
        // $(document).on("fetch", function () {
        //
        // });
        eventHub.$on("frame_loaded", function () {
            console.log("snippet")
//                    vue.$mount(vue.$refs.frame);
//                    console.log(JSON.stringify(main.$refs.frame))

        });

        console.log('Main Mounted')
        this.$nextTick(function () {
            console.log('Main nextTick');
            // code that assumes this.$el is in-document
        })

    },

    methods: {
        imageuploaded(res) {
            if (res.errcode == 0) {
                this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
            }
        },

        load: function () {
//                    this.iframe.loaded = true;
//                    eventHub.$emit("frame_loaded")
        }

    },
    watch: {
        resume: {
            handler: function (val, oldVal) {
                eventHub.$emit('resume_update', val)

            },
            deep: true
        },
    },
});


