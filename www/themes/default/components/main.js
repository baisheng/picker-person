// import Vue from 'vue'
// import VueMasonryPlugin from 'vue-masonry';
import axios from 'axios'

Vue.prototype.$http = axios;
// Vue.use(VueMasonryPlugin);
// const marked = require('marked');
import InfiniteLoading from 'vue-infinite-loading';
// import infiniteScroll from 'vue-infinite-scroll'
// Vue.use(infiniteScroll)

import Snippet from './snippets/snippet.vue';
//
new Vue({
    el: "#main",
    components: {
        Snippet,
        InfiniteLoading
    },
    data: {
        page: 1,
        busy: false,
        distance: 0,
        addPageModal: false,
        pageName: "",
        pageParent: 0,
        pageGrid: 0,
        pageParentName: "",
        pageAll: '',
        searchBoxShow: false,
        searchBox: "",
        allpage: 0,
        pager:{},
        total: 1,
        // page: 0,
        // current: this.page || 1,
        pagedata:{},
        meta: {
            _snippet_image: '',
            _snippet_audio: '',
            _snippet_quote: '',
            _snippet_link: '',
            _snippet_chat: '',
            _snippet_text: '',
            _snippet_status: '',
            _snippet_feed: '',
            _snippet_note: '',
            _snippet_person: '',
            _snippet_idea: '',
            _snippet_code:'markup',
        },
        post_meta: {},
        checked: [],
        selected: 0,
        codelang: {
            data: [
                {id: 'markup', text: 'markup'},
                {id: 'css', text: 'css'},
                {id: 'javascript', text: 'javascript'},
                {id: 'java', text: 'java'},
                {id: 'php', text: 'php'},
                {id: 'scss', text: 'scss'},
                {id: 'c', text: 'c'},
                {id: 'python', text: 'python'},
                {id: 'sql', text: 'sql'},
                {id: 'swift', text: 'swift'}
            ],
            icon: false
        },
        snippet_id: 0,
        snippet: '',
        snippet_type: 'text',
        query_type: '',
        isSave: false,
        isActive: true,
        status: false,
        list:[]
    },
    watch: {
        meta: {
            handler: function (val, oldVal) {

                if (val['_snippet_code'] !== null && val['_snippet_code'] !== undefined){
                    this.post_meta._snippet_code = val['_snippet_code'];
                }

            },
            deep: true

        },
        snippet_type: function(){
            console.log(this.snippet_id + ":" +this.snippet_type)
        }
    },
    mounted: function () {

        var vue = this;
        // this.page = vue.urlParam("page");

        $(document).on("fetch", function () {
            // vue.fetch();
        });
        $(document).on("message", function () {
            vue.message();
        });
        // vue.fetch();
        this.$Lazyload.$on('loaded', function(){
            vue.reLayout();

        })
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


        Vue.nextTick(() => {
            Prism.highlightAll();
            vue.reLayout();

        })
        vue.render();


    },
    methods: {
        setting: function(id){
            eventHub.$emit('snippet_id', id)
        },
        render:function(){
            // Custom code
            // ------------------------------

            // Highlight row when checkbox is checked
            $('.table-inbox').find('tr > td:first-child').find('input[type=checkbox]').on('change', function() {
                if($(this).is(':checked')) {
                    $(this).parents('tr').addClass('warning');
                }
                else {
                    $(this).parents('tr').removeClass('warning');
                }
            });

            // Grab first letter and insert to the icon
            $(".table-inbox tr").each(function (i) {

                // Title
                var $title = $(this).find('.letter-icon-title'),
                    letter = $title.eq(0).text().charAt(0).toUpperCase();

                // Icon
                var $icon = $(this).find('.letter-icon');
                $icon.eq(0).text(letter);
            });


        },
        onInfinite: function () {
            // console.log("laal")
            let api = '/snippets/list';
            // if (this.page != 0 && Number.parseInt(this.page)) {
            //     _url += "?page=" + this.page;
            // }
            let vue = this;
            // vue.page = 1;
            this.$http.get(api, {
                params: {
                    page: vue.page++
                }
            }).then((res) => {
                if (res.data.data.length) {
                    this.list = this.list.concat(res.data.data);
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                    vue.reLayout();

                    if (vue.page  === 5) {
                        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                        vue.reLayout();

                    }
                } else {
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                    vue.reLayout();

                }
            });

            // this.page = this.pager.data.length / 10 + 1;
            // this.fetch();
            // this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            // if (this.pager.data.length / 10 === 3){
            //     this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            //
            // }else {
            //     this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            //
            // }
            // if (this.page > this.pager.totalPages){
            //         this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            // }else {
            //     this.fetch();
            //             this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            //
            // }
            // if (this.list.length > 200) {
            //     this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            // } else {
            //     console.log(this.list.length)
            //     setTimeout(function () {
            //         var temp = [];
            //         for (var i = this.list.length; i <= this.list.length + 10; i++) {
            //             temp.push(i);
            //         }
            //         this.list = this.list.concat(temp);
            //         this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            //     }.bind(this), 1000);
            // }
        },
        loadMore: function() {
            // this.busy = true;
            //
            // this.page++;
            // this.fetch();
            // console.log(JSON.stringify(this.pageAll))

            // setTimeout(() => {
            //     console.log("lalal")
                // for (var i = 0, j = 10; i < j; i++) {
                //     this.data.push({ name: count++ });
                // }
                // this.busy = false;
            // }, 1000);
        },
        fetch: function (meta_type) {

            var vue = this;
            var _url = "/snippets/list";

            if (meta_type !== null && meta_type !== undefined) {
                _url += "?meta_type=" + meta_type + "&";

                History.pushState({state: meta_type}, "State", "?meta_type=" + meta_type);

            }

            if (this.page != 0 && Number.parseInt(this.page)) {
                _url += "?page=" + this.page;
            }

            $.ajax({
                method: "GET",
                url: _url,
                dataType: "json",
                success: function (data) {
                    // vue.pageAll = vue.pageAll.concat(data.data);
                    // vue.pageAll = data.data;

                    // vue.allpage = data.totalPages;
//                            vue.pageTree = data.tree;
//                            vue.setDrag();
//                            delete data.data;
                    vue.pager = data;

                    vue.pageAll = vue.pageAll.concat(data);



                    vue.reLayout();

                }
            });


        },

        reLayout: function () {

            var vue = this;

            Vue.nextTick(function () {
                // 渲染 select2 样式
//                        vue.renderSelect2();

                vue.render();
                Prism.highlightAll();
                // DOM updated
                var $grid = $('[data-plugin="masonry"]');
                $grid.masonry();
                $grid.masonry('reloadItems')
                $grid.masonry('layout');
            })
        },
        urlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            // decodeURIComponent()
            if (r != null)return decodeURI(r[2]);
            return null;
        }

    },
    computed: {
        pageTreeLength: function () {
            return !jQuery.isEmptyObject(this.pageTree);
        },

    }
});

