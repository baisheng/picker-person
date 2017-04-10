<template>
    <!--<div class="col-md-4 col-lg-3" id="basics">-->
    <div class="sidebar-content">

        <!-- Title -->
        <!--<div class="category-title h6">-->
        <!--<span>基本信息</span>-->
        <!--<a class="btn btn-default btn-block" @click="add()"><i class="icon-plus22 position-left"></i>工作经验</a>-->

        <!--<ul class="icons-list">-->
        <!--<li><a href="#"><i class="icon-gear"></i></a></li>-->
        <!--</ul>-->
        <!--</div>-->
        <div class="category-content">

            <form>

                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="姓名" v-model="resume.basics.name">

                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="当前职位"
                           v-model="resume.basics.label">
                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="所在城市" v-model="resume.basics.location.city">
                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="联系电话" v-model="resume.basics.phone">

                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="电子邮箱" v-model="resume.basics.email">

                </div>
                <div class="form-group mb-5">
                    <input type="text" class="form-control " placeholder="个人网站" v-model="resume.basics.website">

                </div>
                <div class="form-group mb-5">
                               <textarea rows="6" cols="6" class="form-control " placeholder="个人简介"
                                         v-model="resume.basics.summary"></textarea>
                </div>
                <div class="media">
                    <div class="media-left">
                        <a :href="resume.basics.picture">
                            <img :src="resume.basics.picture" style="width: 70px; height: 70px;" class="img-rounded"
                                 alt="">
                        </a>
                    </div>

                    <div class="media-body">
                        <form id="upload" class="upload " method="post" action=""
                              enctype="multipart/form-data">

                            <div class="button">
                                <a class="btn bg-primary-400 btn-block" @click="open">
                                    <span>上传头像</span>

                                    <svg class="load" version="1.1" x="0px" y="0px" width="30px" height="30px"
                                         viewBox="0 0 40 40" enable-background="new 0 0 40 40">
                                        <path opacity="0.8" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
            s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
            c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                                        <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
            C22.32,8.481,24.301,9.057,26.013,10.047z">
                                            <animateTransform attributeType="xml"
                                                              attributeName="transform"
                                                              type="rotate"
                                                              from="0 20 20"
                                                              to="360 20 20"
                                                              dur="0.5s"
                                                              repeatCount="indefinite"/>
                                        </path>
                                    </svg>
                                    <svg class="check" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </a>
                                <div>
                                    <span></span>
                                </div>
                            </div>
                            <input class="file" type="file" ref="fileinput" name="file" @change="onFileChange">
                            <input type="hidden" name="path">
                        </form>
                        <a @click="removeAvatar()"
                           class="btn btn-link btn-block mt-5 text-danger-300 text-semibold "
                           :class="!isImage ? 'disabled': '' ">删除头像</a>

                    </div>
                </div>
                <!--</div>-->
            </form>
        </div>
    </div>
</template>


<script>
    //    import '../js/form.js'
    export default {
        name: 'BasicsForm',
        props: ['resume', 'isImage'],

        methods: {
            open(e){
                this.$refs.fileinput.click()
//                e.preventDefault();
//                var files = this.$$.fileInput.files;
//                var data = new FormData();
                // for single file
//                data.append('avatar', files[0]);
                // Or for multiple files you can also do
                //  _.each(files, function(v, k){
                //    data.append('avatars['+k+']', v);
                // });

//                this.$http.post('/avatars/upload', data, function (data, status, request) {
                //handling
//                }).error(function (data, status, request) {
                //handling
//                });
            },
            onFileChange(e){
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;

                let vue = this;
                let data = new FormData();
//                data.append('action', 'ADD');
//                data.append('param', 0);
//                data.append('secondParam', 0);
                data.append('file', files[0]);
//                data.append('upload', new Blob(['test payload'], { type: 'text/csv' }));

                let upload = $(".upload");

                let btn = upload.children(".button");
                let loadSVG = btn.children("a").children(".load");
                let loadBar = btn.children("div").children("span");
                let checkSVG = btn.children("a").children(".check");
                btn.children("a").children("span").fadeOut(200, () => {
                    btn.children("a").animate({
                        width: 36
                    }, 100, () => {
                        loadSVG.fadeIn(300);
                        btn.animate({
                            width: '100%'
                        }, '100%', function () {
                            btn.children("div").fadeIn(200, () => {

                                let config = {
                                    onUploadProgress: function (progressEvent) {
                                        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                                        loadBar.width(percentCompleted + "%");

                                    },
                                };
                                vue.$http.post('/admin/posts/picture', data, config)
                                    .then((data) => {
                                        loadSVG.fadeOut(100, function () {
                                            checkSVG.fadeIn(100, function () {
                                                setTimeout(function () {
//                                                    jQuery.event.trigger("fetch");
//                                                    jQuery.event.trigger("fetch", data);
                                                    if (data !== null) {
//                                                        console.log(JSON.stringify(data))
                                                        eventHub.$emit("fetch-avatar", data.data.data);

                                                    }

                                                    btn.children("div").fadeOut(100, function () {
                                                        loadBar.width(0);
                                                        checkSVG.fadeOut(100, function () {
                                                            btn.children("a").animate({
                                                                width: '100%'
                                                            }, '100%');
                                                            btn.animate({
                                                                width: '100%'
                                                            }, '100%', function () {
                                                                btn.children("a").children("span").fadeIn(100);
                                                            });
                                                        });
                                                    });
                                                }, 1000);
                                            });
                                        });

                                    }).catch((err) => {
                                        console.log(err)
                                })
                               /*
                                upload.ajaxSubmit({
                                    uploadProgress: function (event, position, total, percentComplete) {
                                        loadBar.width(percentComplete + "%");
                                    },
                                    complete: function (data) {

                                        loadSVG.fadeOut(100, function () {
                                            checkSVG.fadeIn(100, function () {
                                                setTimeout(function () {
//                                                    jQuery.event.trigger("fetch");
//                                                    jQuery.event.trigger("fetch", data);
                                                    if (data != null) {
                                                        eventHub.$emit("fetch-avatar", data.responseJSON.data);

                                                    }

                                                    btn.children("div").fadeOut(100, function () {
                                                        loadBar.width(0);
                                                        checkSVG.fadeOut(100, function () {
                                                            btn.children("a").animate({
                                                                width: '100%'
                                                            }, '100%');
                                                            btn.animate({
                                                                width: '100%'
                                                            }, '100%', function () {
                                                                btn.children("a").children("span").fadeIn(100);
                                                            });
                                                        });
                                                    });
                                                }, 1000);
                                            });
                                        });
                                    }
                                });
                                */
                            });
                        });
                    });
                });

            }

        }
    }

</script>