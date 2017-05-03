// import PageButton from './page-button.vue'
import axios from 'axios'
Vue.prototype.$http = axios;
import Posts from './posts.vue'
import Editor from './editor/editor.vue';
import Pager from '../ui/pager.vue';

//数组删除某项功能
// Array.prototype.remove = function (dx) {
//     if (isNaN(dx) || dx > this.length) {
//         return false;
//     }
//     for (var i = 0, n = 0; i < this.length; i++) {
//         if (this[i] != this[dx]) {
//             this[n++] = this[i]
//         }
//     }
//     this.length -= 1
// }
// Vue.component('Datepicker',Datepicker);

new Vue({
    el: "#app",
    components: {
        Posts,
        Editor,
        Pager

        // PageButton
        // Datepicker
    },
    data: {
        oldHeadline: '内容管理',
        headline: '内容管理',
//                headline: lang["pages"],
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
        current: 1,
        pagedata: {},
        isToolbar: false,
        checkboxModel: [],
        checked: [],

        autoExcerpt: true,

        post: {
            id: '',
            title: '',
            content: '',
            terms: []
        },
        selected: {
            wordHtml: '',
            wordCount: 0,
            word: ''
        },
        status: 'init',
        isActive: true,
        is_cover: false,
        checkedCates: [],
        isManagePosts: false
    },
    created: function () {
        var vue = this;
        eventHub.$on("setHeadline", function (data) {
            vue.headline = data.headline;
//                    vue.showSearch = data.showSearch;
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

        vue.render();


    },
    methods: {
        managePosts(){
           this.isManagePosts = true;
        },
        editPost(post){
            let _url = "/admin/post/" + post.id;
            this.$http.get(_url).then( (response) => {
               this.post = response.data;
               eventHub.$emit('update', this.post.content)
               // console.log(JSON.stringify(this.post))
                // vue.pageAll = response.data.data;
                // vue.allpage = response.data.totalPages;
                // vue.pagedata = response.data;

                // console.log(JSON.stringify(response))
                // vue.resume = response.data.data.content_json;
                // let content = JSON.parse(response.data.data.conten)
                // vue.resume = content.resume;
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
        modelChangeEvent: function (model, code) {
            model.content = code;
            this.save();
        },
        publish: function () {
            this.save('publish');
        },
        _saving(){
            this.status = 'saving';
        },
        _editing(){
            this.status = 'editing';
        },
        _success(){
            this.status = 'success';

        },
        save: function (post_status) {
            this.status = 'saving';

            let vue = this;

            if (!vue.post.id && vue.post.content === null) return;
            vue.post.autoExcerpt = this.autoExcerpt;
            // vue.post.categorys = this.checkedCates;
            // vue.terms = this.checkedCates;

            this.$http.post('/admin/post', vue.post)

                .then(function (response) {
                    let data = response.data;
                    if (data._id !== null) {
                        vue.post.id = data._id;
                        vue._success();

                        History.pushState({state: 1}, "State 1", '/admin/post/' + vue.post.id.toString());
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });


        },

        saveTerm(term){

            let post_id = this.post.id;

            if (post_id === '' || post_id === null) return;

            let post_data = {
                term_id: term.id,
                object_id: post_id,
                terms: this.post.terms
            }

            this.$http.post('/admin/post/relation', post_data)

                .then(function (response) {
                    let data = response.data;
                    // if (data._id !== null) {
                    //     vue.post.id = data._id;
                    //     vue._success();
                    //
                    //     History.pushState({state: 1}, "State 1", '/admin/post/' + vue.post.id.toString());
                    // }

                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        check: function (cate) {

            for (let _cate of this.post.terms) {
                if (_cate === cate) {
                    console.log(cate.id + "减少")
                } else {
                    console.log(cate.id + "添加")
                }
            }
            // console.log(JSON.stringify(cate))
        },


        render: function () {
            var vue = this;

            // Grab first letter and insert to the icon
            $(".table-inbox tr").each(function (i) {

                // Title
                var $title = $(this).find('.letter-icon-title'),
                    letter = $title.eq(0).text().charAt(0).toUpperCase();

                // Icon
                var $icon = $(this).find('.letter-icon');
                $icon.eq(0).text(letter);
            });


            // Initialize Row link plugin
            // $('tbody.rowlink').rowlink();
        },
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
            let _url = "/admin/posts/";
            if (!type) {
                _url += 'listgroup'
            }
            else {
                _url += type;
            }
            if (this.page != 0 && Number.parseInt(this.page)) {
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
        },

        onChange(content){
            console.log(JSON.stringify(content))
            this.post.content = content;
            this._editing();
            this.save();
        },
        onSelection(selected){
            this.selected = selected;
        },
        clearAndSnippet(){
            eventHub.$emit('replaceSelection', "")
        },
        copyAndSnippet(){
            eventHub.$emit('replaceSelection', "")
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

        },
        'post.title': function () {
            this._editing();
            this.save();
        },
        'post.terms': function (val, oldVal) {
            // 在 JavaScript 中，如何求出两个数组的交集和差集？
            // https://www.zhihu.com/question/19863166
            // ES7 Array.prototype.includes (stage 2 proposal)

            // 当有新值变化时进行处理
            if (oldVal.length > 0) {
                // 获得变化的值
                let difference = oldVal.concat(val).filter(v => !oldVal.includes(v) || !val.includes(v));
                // console.log(JSON.stringify(difference))

                this.saveTerm(difference[0]);

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
        },
        btnStatus: function () {
            if (this.status === 'loading') {
                return 'disabled'

            } else if (this.status === 'success') {
                return ''
            }
            return '';
        },
        classObject: function () {

            if (this.status === 'saving') {
                return 'icon-sync spinner text-primary'
            } else if (this.status === 'success') {
                this.loadingText = '更换完成';
                return 'icon-sync text-success';
            } else if (this.status === 'error') {
                this.loadingText = '更换失败';
                return 'icon-warning22 text-warning'
            }

            return 'icon-sync';

        }
    }
});
