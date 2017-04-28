<template>
    <div class="row" v-masonry transition-duration="0.3s" item-selector=".item">


        <div class="col-lg-6 col-md-6 col-xs-12 item" v-masonry-tile v-for="_ in posts">

            <div class="panel panel-default" v-if="_.type == 'snippet'">

                <div class="panel-heading">
                                <span class="panel-title">
                            <a href="#" class="dropdown-toggle" :class="statusStyle(_)" data-toggle="dropdown"
                               aria-expanded="false">
                                <i class="fa fa-quote-left position-left"
                                   v-if="_.meta['_snippet_type'] === 'quote'"></i>
                            <i class="icon-codepen position-left" v-else-if="_.meta['_snippet_code']"></i>
                            <i class="fa fa-lightbulb-o position-left"
                               v-else-if="_.meta['_snippet_type'] === 'idea'"></i>
                            <i class="fa fa-comments-o position-left"
                               v-else-if="_.meta['_snippet_type'] === 'comment'"></i>
                            <i class="fa fa-history position-left" v-else-if="_.meta['_snippet_type'] === 'feed'"></i>
                            <i class="fa fa-smile-o position-left" v-else-if="_.meta['_snippet_type'] === 'person'"></i>
                            <i class="fa fa-file-text-o position-left" v-else></i>
                                {{ _.status | lang }} <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu active">
                                <li :class="{active: _.status === 'publish'}"><a
                                        @click="changeStatus(_, 'publish')"><span
                                        class="status-mark position-left bg-success-400"></span> {{ 'publish' | lang }}</a></li>

                                <li :class="{active: _.status === 'private'}"><a
                                        @click="changeStatus(_, 'private')"><span
                                        class="status-mark position-left bg-grey-300"></span> {{ 'private' | lang }}</a></li>
                                <li :class="{active: _.status === 'draft'}"><a @click="changeStatus(_, 'draft')"><span
                                        class="status-mark position-left bg-indigo-400"></span> {{ 'draft' | lang }}</a></li>
                                <li :class="{active: _.status === 'pending'}"><a
                                        @click="changeStatus(_, 'pending')"><span
                                        class="status-mark position-left bg-info-400"></span> {{ 'pending' | lang }}</a></li>

                            </ul>

                                </span>
                    <div class="heading-elements panel-nav">
                        <ul class="list-inline list-inline-separate heading-text">
                            <li v-if="snippet_id === _.id">
                                <a class="" @click="setting(0)"><i
                                        class="fa fa-long-arrow-left position-left"></i></a>
                            </li>

                            <li class="" v-else>
                                <a @click="setting(_.id)" aria-expanded="false">
                                    <i class=" icon-cog5 position-left"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="panel-tab-content tab-content">

                    <div class="tab-pane has-padding active animation fade-in"
                         v-if="snippet_id === _.id">

                        <div class="text-center">
                            <h6 class="text-semibold no-margin">内容转换</h6>
                            <p class="content-group-sm text-muted">每种内容类型都拥有不同的能力</p>
                        </div>
                        <div class="form-group">
                            <select2 :options="options" v-model="selected">
                            </select2>
                        </div>

                        <div class="form-group" v-if="selected === 'code'">
                            <p>选择的程序语言: <span class="text-primary">{{ snippet_code_lang }}</span></p>

                            <select2 :options="codelang" v-model="snippet_code_lang">
                            </select2>
                        </div>

                        <div class="content-group" v-else-if="selected === 'status'">
                            <div class="row row-seamless btn-block-group">
                                <div class="col-xs-6">
                                    <button type="button"
                                            class="btn btn-default btn-block btn-float btn-float-lg legitRipple">
                                        <i class=" icon-twitter text-info-600"></i>
                                        <span>Twitter</span>
                                    </button>

                                    <button type="button"
                                            class="btn btn-default btn-block btn-float btn-float-lg legitRipple">
                                        <i class="icon-facebook text-blue-800"></i>
                                        <span>facebook</span>
                                    </button>
                                </div>

                                <div class="col-xs-6">
                                    <button type="button"
                                            class="btn btn-default btn-block btn-float btn-float-lg legitRipple">
                                        <i class="fa fa-weibo text-warning-600"></i>
                                        <span>微博</span>
                                    </button>

                                    <button type="button"
                                            class="btn btn-default btn-block btn-float btn-float-lg legitRipple">
                                        <i class="fa fa-wechat text-success-400"></i>
                                        <span>微信</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="conteng-group" v-else-if="selected === 'quote'">
                            <div class="panel panel-body bg-info-300"
                                 style="background-image: url(http://demo.interface.club/limitless/assets/images/bg.png);">
                                <div class="media no-margin">
                                    <div class="media-left media-middle">
                                        <i class="icon-quotes-left text-white"></i>
                                    </div>

                                    <div class="media-body text-right">
                                        <span class="text-muted">{{ _.content }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-body">
                                <div class="media no-margin stack-media-on-mobile">
                                    <div class="media-left media-middle">
                                        <i class="icon-quotes-right2 icon-2x text-muted no-edge-top"></i>
                                    </div>

                                    <div class="media-body">
                                        <span class="text-muted">{{ _.content }}</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="panel panel-white " v-if="selected === 'link'">
                            <div class="panel-body text-center">
                            </div>
                        </div>


                    </div>
                    <div class="tab-pane has-padding active" v-else>

                        <blockquote
                                class="no-margin panel panel-body border-left-lg border-left-warning "
                                v-html="_.content"
                                v-if="_.meta['_snippet_type'] === 'quote'"></blockquote>

                        <pre class="content-group "
                             :class="'language-' + _.meta['_snippet_code']['lang']"
                             v-else-if="_.meta['_snippet_code']">
                                <code>{{ _.content }}</code>
                            </pre>
                        <div class="panel-body text-center"
                             v-else-if="typeof(_.meta['_snippet_link']) != 'undefined'">
                            <div class="content-group mt-5">
                                <h5 class="text-warning">{{ _.meta['_snippet_link']['og:site_name']
                                    }}</h5>
                            </div>

                            <h6 class="text-semibold"><a href="#"
                                                         class="text-default">{{ _.meta['_snippet_link']['title']
                                }}</a></h6>

                            <p class="mb-15">{{ _.meta['_snippet_link']['og:description'] }}</p>

                            <a :href="_.content" target="_blank">访问链接 →</a>
                        </div>
                        <div class="panel panel-body  text-center"
                             style="background-image: url(http://demo.interface.club/limitless/assets/images/bg.png);"
                             v-else-if="_.meta['_snippet_type'] === 'idea'">
                            <p class="mt-10 text-primary" v-html="_.content"></p>
                        </div>

                        <div class="" v-else-if="_.meta['_snippet_type'] === 'comment'">
                            <ul class="media-list chat-list content-group">
                                <li class="media reversed">
                                    <div class="media-body">
                                        <div class="media-content" v-html="_.content"></div>
                                        <span class="media-annotation display-block mt-10">{{ _.modified | moment
                                            }}</span>
                                    </div>

                                    <div class="media-right">
                                        <a href="/static/assets/images/demo/images/3.png">
                                            <img src="/static/assets/images/demo/users/face1.jpg"
                                                 class="img-circle"
                                                 alt="">
                                        </a>
                                    </div>
                                </li>


                            </ul>

                            <textarea name="enter-message" class="form-control content-group" rows="3"
                                      cols="1"
                                      placeholder="输入你的回复..."></textarea>

                            <div class="row">
                                <div class="col-xs-6">
                                    <ul class="icons-list icons-list-extended mt-10">
                                        <li><a href="#" data-popup="tooltip" data-container="body"
                                               title=""
                                               data-original-title="Send photo"><i
                                                class="icon-file-picture"></i></a>
                                        </li>
                                        <li><a href="#" data-popup="tooltip" data-container="body"
                                               title=""
                                               data-original-title="Send video"><i
                                                class="icon-file-video"></i></a></li>
                                        <li><a href="#" data-popup="tooltip" data-container="body"
                                               title=""
                                               data-original-title="Send file"><i
                                                class="icon-file-plus"></i></a></li>
                                    </ul>
                                </div>

                                <div class="col-xs-6 text-right">
                                    <button type="button"
                                            class="btn bg-teal-400 btn-labeled btn-labeled-right"><b><i
                                            class="icon-circle-right2"></i></b> 发送
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="" v-else-if="_.meta['_snippet_type'] === 'feed'">
                            <ul class="list-feed">
                                <li class="border-pink-400">
                                    <div class="text-muted text-size-small mb-5">{{ _.date | moment }}
                                    </div>
                                    开始
                                </li>
                                <li class="border-pink-400">
                                    <div class="text-muted text-size-small mb-5">{{ _.modified | moment
                                        }}
                                    </div>
                                    <a href="#">{{ _.author }}</a> {{ _.content }}
                                </li>


                            </ul>
                            <textarea name="enter-message" class="form-control content-group mt-10"
                                      rows="1" cols="1"
                                      placeholder="新进程..."></textarea>
                            <div class="row">
                                <div class="col-xs-6">
                                    <ul class="icons-list icons-list-extended mt-10">
                                        <li><a href="#"><i class="icon-file-plus"></i></a></li>
                                    </ul>
                                </div>

                                <div class="col-xs-6 text-right">
                                    <a type="button" class="btn btn-link">补充</a>
                                    <a type="button" class="btn btn-default">结束</a>

                                </div>
                            </div>
                        </div>

                        <div class="" v-else-if="_.meta['_snippet_type'] === 'person'">
                            <div class="media">
                                <div class="media-left">
                                    <a href="/static/assets/images/demo/images/3.png">
                                        <img src="/static/assets/images/demo/users/face1.jpg"
                                             class="img-circle img-lg"
                                             alt="">
                                    </a>
                                </div>

                                <div class="media-body">
                                    <h6 class="media-heading">{{ _.title }}</h6>
                                    <span class="text-muted">{{ _.content }}</span>
                                </div>

                                <div class="media-right media-middle">
                                    <ul class="icons-list">
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                                               aria-expanded="true">
                                                <i class="icon-menu7"></i>
                                            </a>

                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li><a href="#"><i
                                                        class="icon-comment-discussion pull-right"></i>
                                                    Start
                                                    chat</a></li>
                                                <li><a href="#"><i class="icon-phone2 pull-right"></i>
                                                    Make a call</a>
                                                </li>
                                                <li><a href="#"><i class="icon-mail5 pull-right"></i>
                                                    Send mail</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#"><i
                                                        class="icon-statistics pull-right"></i> 转换</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="content-group" v-else>{{ _.content }}</div>
                    </div>


                </div>


                <div class="panel-footer text-center no-padding" v-if="snippet_id === _.id">
                    <div class="row">
                        <div class="col-xs-4">
                            <a @click="save(_)" class="display-block p-10 text-muted">
                                <i class="icon-spinner2 spinner position-left text-primary"
                                   v-if="status === 'saving'"></i>
                                <i class="icon-check position-left text-success"
                                   v-else-if="status === 'success'"></i>
                                <i class=" icon-exclamation position-left text-danger"
                                   v-else-if="status === 'error'"></i>
                                <i class="icon-spinner2 position-left text-muted" v-else></i>
                                保存
                            </a>
                        </div>


                        <div class="col-xs-4">
                            <a href="#" class="display-block p-10 text-muted" data-popup="tooltip"
                               data-placement="top"
                               data-container="body" title="" data-original-title="下在成 MD 文件"><i
                                    class="icon-pencil position-left"></i>编辑</a>
                        </div>


                        <div class="col-xs-4">
                            <a :href="'/admin/posts/delete?ids=' + _.id"
                               class="display-block p-10 text-muted ajax delete"><i
                                    class=" icon-trash position-left"></i> 回收站</a>
                        </div>

                    </div>
                </div>
            </div>
            <div class="panel panel-flat" v-else-if="_.type == 'article'">
                <div class="panel-heading">
                    <h6 class="panel-title"><a :href="'/admin/post/'+_.id">{{ _.title }}</a></h6>
                    <div class="heading-elements">
                                <span class="heading-text"><i
                                        class="icon-checkmark-circle position-left text-success"></i> {{ _.modified | moment
                                    }}</span>
                        <ul class="icons-list">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="icon-arrow-down12"></i>
                                </a>

                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li><a href="#"><i class="icon-user-lock"></i> 私有</a></li>
                                    <!--<li><a href="#"><i class="icon-user-block"></i> Block user</a></li>-->
                                    <!--<li><a href="#"><i class="icon-user-minus"></i> Unfollow user</a></li>-->
                                    <li class="divider"></li>
                                    <li><a href="#"><i class="icon-embed"></i> 删除</a></li>
                                    <li><a href="#"><i class="icon-blocked"></i> Report this post</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="panel-body">
                    <!--<a href="#" class="display-block content-group">-->
                    <!--<img src="assets/images/cover.jpg" class="img-responsive content-group" alt="">-->
                    <!--</a>-->

                    <!--<h6 class="content-group">-->
                    <!--<i class="icon-comment-discussion position-left"></i>-->
                    <!--Comment from <a href="#">Jason Ansley</a>:-->
                    <!--</h6>-->

                    <blockquote>
                        <p v-html="_.excerpt" v-if="_.type == 'article'"></p>
                        <!--<footer>Jason, <cite title="Source Title">10:39 am</cite></footer>-->
                    </blockquote>
                </div>
                <div class="panel-footer text-center no-padding">
                    <div class="row">
                        <div class="col-xs-3">
                            <a :href="'/admin/post/'+_.id" class="display-block p-10 text-muted" data-popup="tooltip"
                               data-placement="top" data-container="body" title="" data-original-title="Google Drive"><i
                                    class="icon-pencil3 position-left"></i>修改</a>
                        </div>

                        <div class="col-xs-3">
                            <a href="#" class="display-block p-10 text-muted" data-popup="tooltip" data-placement="top"
                               data-container="body" title="" data-original-title="Twitter"><i
                                    class="icon-eye position-left"></i>查看</a>
                        </div>

                        <div class="col-xs-3">
                            <a href="#" class="display-block p-10 text-muted" data-popup="tooltip" data-placement="top"
                               data-container="body" title="" data-original-title="Github"><i
                                    class="icon-stats-growth2 position-left"></i>统计</a>
                        </div>

                        <div class="col-xs-3">
                            <a :href="'/admin/posts/delete?ids=' + _.id"
                               class="display-block p-10 text-muted ajax delete"><i
                                    class=" icon-trash position-left"></i> 回收站</a>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>


<script>
    //    import Article from './article.vue'
    import VueMasonryPlugin from 'vue-masonry';
    import Select2 from '../../ui/select2.vue'

    Vue.use(VueMasonryPlugin)
    export default {
        props: ['posts', 'position'],

        components: {
            Select2
//            Article
        },
        data: function () {
            return {
                status: '',
                snippet_code_lang: 'markup',
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
            }
        },
        mounted: function () {
            let scope = this;

            eventHub.$on("snippet_id", (id) => {
                this.snippet_id = id;
                this.reLayout();

            });

            eventHub.$on("new_snippet", function () {
//                vue.fetch();
            });

            Vue.nextTick(function () {
                Prism.highlightAll();
//                scope.reLayout();
                Vue.redrawVueMasonry()


            })
        },
        methods: {
            reLayout: function () {

                let vue = this;

                Vue.nextTick(function () {
                    Vue.redrawVueMasonry()

//                    vue.render();
                    Prism.highlightAll();
                    // DOM updated
                })
            },
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

                // console.log(JSON.stringify(postData))
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
        }
    }

</script>