// import PageButton from './page-button.vue'
import axios from 'axios'
Vue.prototype.$http = axios;
// import Select2 from '../ui/select2.vue'
// import Snippet from './snippet.vue';

new Vue({
    el: "#snippet-bar",
    components: {
        // Select2,
        // MarkdownEditor,
        // Snippet
    },
    data: {
        content: '',
        configs: {
            spellChecker: false // 禁用拼写检查
        },
        oldHeadline: '内容管理',
        headline: '内容管理',
        isOpen: false,
        status: 'init',
        snippet_id: 0,
        snippet: '',
        snippet_type: 'text',
        query_type: '',
        isSave: false,
        isOpenSubject: false
    },
    mounted: function () {

        let vue = this;
        $(document).on("message", function () {
            vue.message();
        });
    },
    computed: {
        isActive: function () {

            if (this.isOpen === false) {
                return true;
            }
            else if (this.isOpen === true) {

                return !(this.content.replace(/(^\s*)|(\s*$)/g, "").length === 0);
            }
        }
    },

    methods: {
        openOrSave: function (type) {
            if (type === 'subject'){
                this.isOpenSubject = true;
            }else {
                this.isOpen = true;
            }

            if (this.isOpen === true && this.isActive === true) {
                this._post();
                // console.log('save is ok!')
            }
        },
        cancel(){
            this.isOpenSubject = false;
            this.isOpen = false;
        },
        // save: function (_snippet) {
        //     this._post(_snippet);
        // },

        _post: function () {

            var self = this;
            self.status = 'saving';
//             "meta_type":this.meta_type,
//             var postData = {
//                 "id": _snippet.id,
//                 "status": _snippet.status,
// //                        "title": this.title,
// //                        "name": this.name,
// //                        "date": this.date,
// //                        "content": this.content,
//                 "content": _snippet.content,
//                 "meta_type":this.meta_type,
// //                        "meta_type":'link',
//                 "meta": this.meta
//             }
            this.$http.post('/admin/posts/snippet', {"content": self.content})

                .then(function (response) {
                    let data = response.data;
                    self.status = 'success';

                    eventHub.$emit('new_snippet', data);

                    self.isOpen = false;
                    self.isActive = false;
                    self.content = "";

                    // console.log(JSON.stringify(data))
                    // if (data._id !== null) {
                    //     vue.post.id = data._id;
                    //     vue._success();
                    //
                    //     History.pushState({state: 1}, "State 1", '/admin/post/' + vue.post.id.toString());
                    // }

                })
                .catch(function (error) {
                    self.status = 'error';

                    console.log(error);
                });

        },

        urlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            // decodeURIComponent()
            if (r != null)return decodeURI(r[2]);
            return null;
        },
        _fetch(){
            this.checked = [];
            let vue = this;
            let _url = "/admin/posts/list?type" + this.type;
            // if (!type) {
            //     _url += 'list'
            // }
            // else {
            //     _url += type;
            // }
            if (this.page != 0 && Number.parseInt(this.page)) {
                _url += "?page=" + this.page;
            }

            this.$http.get(_url)
                .then(function (response) {
                    vue.pageAll = response.data.data;
                    vue.allpage = response.data.totalPages;
                    vue.pagedata = response.data;

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

    },
    watch: {
        content(val, oldVal){
            console.log(val)
        }
    }
});
