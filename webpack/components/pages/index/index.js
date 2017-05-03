import axios from 'axios'
Vue.prototype.$http = axios;

import ProfileCover from './profile-cover.vue';
// import Timeline from './timeline.vue';
import Posts from './posts.vue';
import Pager from '../../ui/pager.vue';

new Vue({
    el: "#app",
    components: {
        ProfileCover,
        Posts,
        Pager
        // Timeline,
        // Select2,

        // PageButton
        // Datepicker
    },
    data: {
        profile_cover: PROFILE_COVER,
        oldHeadline: '内容管理',
        headline: '内容管理',
        category: [],
        post_tag: [],
        addPageModal: false,
        pageName: "",
        pageParent: 0,
        pageGrid: 0,
        pageParentName: "",
        pageAll: '',
        searchBoxShow: false,
        searchBox: "",
        allpage: 0,
        total: 1,
        page: 0,
        status: '',
        current: 1,
        pagedata: {},
        isActive: false,
        isToolbar: false,
        checkboxModel: [],
        checked: [],

    },
    created: function () {
        var vue = this;
        eventHub.$on("setHeadline", function (data) {
            vue.headline = data.headline;
        });

    },
    mounted: function () {

        var vue = this;
        this.page = vue.urlParam("page");

        $(document).on("fetch", function () {
            vue.fetch();
        });
        $(document).on("message", function () {
            vue.message();
        });
        vue.taxonomy("category");
        vue.taxonomy("post_tag");
        vue.fetch();

        // Reverse last 3 dropdowns orientation
        $('.content > .row').slice(-1).find('.dropdown, .btn-group').addClass('dropup');

        // Multiple switchery toggles
        if (Array.prototype.forEach) {
            var elems = Array.prototype.slice.call(document.querySelectorAll('.switch-mode'));

            elems.forEach(function (html) {
                var switchery = new Switchery(html);
            });
        }
        else {
            var elems = document.querySelectorAll('.switch-mode');

            for (var i = 0; i < elems.length; i++) {
                var switchery = new Switchery(elems[i]);
            }
        }



    },
    methods: {


        incrementTotal: function (id) {
            this.total += 1
            History.pushState({state: id}, "State", '?page=' + id.toString());
            this.page = id;
            this.fetch();

        },
        pageTo: function (index) {
            if (index < 1) {
                this.current = 1;
                return;
            }
            if (index > this.pagedata.totalPages) {
                this.current = this.pagedata.totalPages;
                return;
            }
            this.current = index;
            this.page = index;
            History.pushState({state: index}, "State", '?page=' + index.toString());
            this.fetch();

        },

        taxonomy(type){
            if (!type) {
                type = "category"
            }

            let _url = "/admin/taxonomy/list?taxonomy=" + type;
            this.$http.get(_url).then((response) => {
                // console.log(JSON.stringify(response))
                if (type === 'category') {
                    this.category = response.data;

                } else if (type === 'post_tag') {
                    this.post_tag = response.data;

                }

                // console.log(JSON.stringify(this.category))
                // this.category = response.
                // vue.pageAll = response.data.data;
                // vue.allpage = response.data.totalPages;
                // vue.pagedata = response;

                eventHub.$emit("fetch")
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

        fetch(type){
            this.checked = [];
            let vue = this;
            let _url = "/admin/api/posts";
            // if (!type) {
            //     _url += 'listgroup'
            // }
            // else {
            //     _url += type;
            // }
            if (this.page !== 0 && Number.parseInt(this.page)) {
                _url += "?page=" + this.page;
            }

            this.$http.get(_url)
                .then(function (response) {
                    vue.pageAll = response.data.data;
                    vue.allpage = response.data.totalPages;
                    vue.pagedata = response.data;
                    eventHub.$emit("fetch")

                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });

        },


        urlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            // decodeURIComponent()
            if (r != null)return decodeURI(r[2]);
            return null;
        }

    },
    watch: {//深度 watcher
        'checked': function () {
            if (this.checked.length) {
                eventHub.$emit("setHeadline", {
                    headline: '<span class="text-semibold text-danger">' + this.checked.length + ' 内容被选中</span>',
                });
            } else {
                eventHub.$emit("setHeadline", {
                    headline: this.oldHeadline,
                    showSearch: true
                });
            }

        }
    },
    computed: {
        selectAll: {
            get: function () {

                return this.pageAll ? this.checked.length == this.pageAll.length : false;
            },
            set: function (value) {
                var checked = [];

                if (value) {
                    this.pageAll.forEach(function (item) {
                        checked.push(item.id);
                    });
                }

                this.checked = checked;
            }
        }
    }
});
