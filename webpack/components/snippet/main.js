import axios from 'axios'
Vue.prototype.$http = axios;
import Select2 from '../ui/select2.vue'

new Vue({
    el: "#app",
    components: {
        Select2,
    },
    data: {
        content: '',
        configs: {
            spellChecker: false // 禁用拼写检查
        },
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
        current: 1,
        pagedata: {},
        snippet_code_lang: 'markup',
        status: '',
        isActive: false,
        isToolbar: false,
        checkboxModel: [],
        checked: [],
        type: "snippet",
        meta_type: '',
        selected: 0,
        options: {
            data: TERMS,
            icon: true,
            placeholder: '选择内容类型'

        },
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

        eventHub.$on("snippet_id", function (id) {

            vue.snippet_id = id;
            vue.reLayout();
        });

        eventHub.$on("new_snippet", function () {
            vue.fetch();
        });

    },
    methods: {
        setting: function (id) {
            eventHub.$emit('snippet_id', id)
        },
        changeStatus: function (_snippet, status) {
            _snippet.status = status;

            this.post(_snippet);
        },
        active: function () {
            this.isActive = true;
        },
        cancel(){
            this.isActive = false;
        },
        save: function (_snippet) {

            this.post(_snippet);
        },
        post: function (_snippet) {

            var self = this;
            self.status = 'saving';

            var postData = {
                "id": _snippet.id,
                "status": _snippet.status,
                "content": _snippet.content,
                "meta_type": this.meta_type,
                "meta": this.meta
            }

            fetch('/admin/posts/snippet', {
                credentials: 'include',
                method: 'POST',
//                        mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)

            }).then(function (response) {

                if (response.ok) {

                    return response.json();

                } else {
                    self.status = 'error';

                    var error = new Error(response.statusText)
                    error.response = response
                    throw error
                }
            }).then(function (json) {
                fetch('/admin/posts/snippet?id=' + json._id, {
                    credentials: 'include',
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },

                }).then(function (response) {

                    if (response.ok) {
                        return response.json();

                    } else {
                        self.status = 'error';

                        var error = new Error(response.statusText)
                        error.response = response
                        throw error
                    }
                }).then(function (json) {
                    _snippet.meta = json.meta;
                    // console.log(json.meta)
                    self.selected = '';

                    self.status = 'success';
                    self.setting(0);
                })
            })
        },
        renderSelect2: function () {
            function iconFormat(icon) {
                var originalOption = icon.element;
                if (!icon.id) {
                    return icon.text;
                }
                var $icon = "<i class='icon-" + $(icon.element).data('icon') + "'></i>" + icon.text;

                return $icon;
            }

            // Initialize with options
            $(".select-icons").select2({
                templateResult: iconFormat,
                minimumResultsForSearch: Infinity,
                templateSelection: iconFormat,
                escapeMarkup: function (m) {
                    return m;
                }
            });

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

        fetch(){

            let vue = this;
            let _url = "/admin/snippets/list";

            // if (meta_type !== null && meta_type !== undefined) {
            //     _url += "?meta_type=" + meta_type + "&";
            //
            //     History.pushState({state: meta_type}, "State", "?meta_type=" + meta_type);
            //
            // }

            if (this.page !== 0 && Number.parseInt(this.page)) {
                _url += "?page=" + this.page;
            }

            $.ajax({
                method: "GET",
                url: _url,
                dataType: "json",
                success: function (data) {
                    vue.pageAll = data.data;
                    vue.allpage = data.totalPages;
//                            vue.pageTree = data.tree;
//                            vue.setDrag();
//                            delete data.data;
                    vue.pagedata = data;

                    vue.reLayout();
                }
            });
        },
        reLayout: function () {

            let vue = this;

            Vue.nextTick(function () {
                // 渲染 select2 样式
//                        vue.renderSelect2();

                vue.render();
                Prism.highlightAll();
                // DOM updated
                let $grid = $('[data-plugin="masonry"]');
                $grid.masonry();
                $grid.masonry('reloadItems')
                $grid.masonry('layout');
            })
        },
        renderSelect2: function () {
            function iconFormat(icon) {
                var originalOption = icon.element;
                if (!icon.id) {
                    return icon.text;
                }
                var $icon = "<i class='icon-" + $(icon.element).data('icon') + "'></i>" + icon.text;

                return $icon;
            }

            // Initialize with options
            $(".select-icons").select2({
                templateResult: iconFormat,
                minimumResultsForSearch: Infinity,
                templateSelection: iconFormat,
                escapeMarkup: function (m) {
                    return m;
                }
            });

        },
        urlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            // decodeURIComponent()
            if (r !== null)return decodeURI(r[2]);
            return null;
        },
        statusStyle: function (item) {
            if (item.status === 'publish') {
                return "text-success-400"
            }
            if (item.status === 'private') {
                return "text-grey-400"
            }
            if (item.status === 'draft') {
                return "text-indigo-400"
            }
            if (item.status === 'pending') {
                return "text-info-600"
            }
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
            if (this.page !== 0 && Number.parseInt(this.page)) {
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

        },
        selected: function (val) {
            var vue = this;

            Vue.nextTick(function () {
                // 渲染 select2 样式
//                        vue.renderSelect2();

                vue.render();
                Prism.highlightAll();
                // DOM updated
                let $grid = $('[data-plugin="masonry"]');
                $grid.masonry();
                $grid.masonry('reloadItems')
                $grid.masonry('layout');
            })
            this.meta = {};

            switch (val) {
                case 'quote':
                    this.meta['_snippet_quote'] = "";
                    this.meta['_snippet_quote_style'] = "style_quote";
                    break;
                case 'link':
                    this.meta_type = 'link';
                    this.meta['_snippet_link'] = "";
                    break;
                case 'chat':
                    this.meta['_snippet_chat'] = "";
                    break;
                case 'note':
                    this.meta['_snippet_note'] = "";
                    break;
                case 'vcard':
                    this.meta['_snippet_vcard'] = "";
                    break;
                case 'idea':
                    this.meta['_snippet_idea'] = "";
                    break;
                case 'status':
                    this.meta['_snippet_status'] = "";
//                            this.meta['_snippet_status_weibo'] = ""
                    break;
                case 'code':
                    this.meta_type = 'code';
                    this.meta['_snippet_code'] = "";
                    this.snippet_code_lang = 'markup';
//                            this.meta['_snippet_code_lang'] = 'markup';
                    this.meta['_snippet_code_lang'] = this.snippet_code_lang;

                    break;
                default:
                    this.meta['_snippet_standard'] = "";
//                            break;
            }
        },
        snippet_code_lang: function(val, oldVal){

//                    console.log(val + "_-------------")
            this.meta['_snippet_code_lang'] = val;

        },
    },
    computed: {
        selectAll: {
            get: function () {

                return this.pageAll ? this.checked.length === this.pageAll.length : false;
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
