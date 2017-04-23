// import CodeMirror from 'codemirror';


// import CodeMirrorSpellChecker from 'codemirror-spell-checker';

import axios from 'axios'
Vue.prototype.$http = axios;

// import Editor from './editor/editor.vue';
// import PostEditor from './post.vue';
import Editor from './editor/editor.vue';


new Vue({
    el: "#app",
    data: {
        // id: '',
        // id: ID ? ID : '',
        autoExcerpt: true,

        post: {
            id: '',
            title: '',
            content: '',
            terms:[]
        },
        selected: {
            wordHtml:'',
            wordCount: 0,
            word: ''
        },
        status: 'init',
        isActive: true,
        is_cover: false,
        category: [],
        checkedCates: [],
        post_tag: [],
        // title: '',
        // dateId: '',
        // date: '',
        // _url: document.location.pathname + decodeURIComponent(document.location.search),
        // editorModel: {
        //     content: ""
        // }
    },
    created: function () {
        if (POST) {
            this.post = POST;
        }
    },
    mounted: function () {

        let vue = this;

        vue.taxonomy("category");
        vue.taxonomy("post_tag");

        Vue.nextTick(() => {
            Prism.highlightAll();
            // vue.reLayout();


        })

        // let currentLocation = document.location.pathname + decodeURIComponent(document.location.search);
        // if (currentLocation === this._url) {
        //     console.log("Refresh");
        //     $(window).trigger('statechange');
        // } else {
        //     History.pushState(null, "", this._url);
        // }
    },
    updated: function () {

    },
    components: {
        Editor,
        // Summernote,
        // Editable
        // Datepicker,
    },
    methods: {
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
        taxonomy(type){
            if (!type) {
                type = "category"
            }

            let _url = "/admin/taxonomy/list?taxonomy=" + type;
            this.$http.get(_url).then((response) => {
                // console.log(JSON.stringify(response))
                if (type === 'category') {
                    this.category = response.data;

                    // console.log(JSON.stringify(this.category))

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
                term_id : term.id,
                object_id : post_id,
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

        check: function(cate){

            for(let _cate of this.post.terms){
                if (_cate === cate) {
                    console.log(cate.id + "减少")
                }else {
                    console.log(cate.id + "添加")
                }
            }
            // console.log(JSON.stringify(cate))
        },

        onChange(content){
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
    watch: {
        // 'post.content': function(){
        //     this._editing();
        //     this.save();
        // },
        'post.title': function () {
            this._editing();
            this.save();
        },
        'post.terms': function(val, oldVal){
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
    }
});
