<template>
    <!-- Cover area -->
    <div class="profile-cover">
        <div class="profile-cover-img" :style="{ 'background-image': 'url(' + cover.guid + ')' }"></div>
        <div class="media">
            <!--<div class="media-left">-->
                <!--<a href="#" class="profile-thumb">-->
                    <!--<img src="/static/assets/images/placeholder.jpg" class="img-circle img-md" alt="">-->
                <!--</a>-->
            <!--</div>-->

            <div class="media-body">
                <!--<h1><$ user_info.user_login $> <small class="display-block">UX/UI designer</small></h1>-->
            </div>

            <div class="media-right media-middle">
                <ul class="list-inline list-inline-condensed no-margin-bottom text-nowrap">
                    <li><a @click="fetch('nature')" class="btn btn-default" :class="btnStatus"><i class=" position-left" :class="classObject"></i> {{ loadingText }}</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /cover area -->
</template>


<script>
    export default {
        props: ['cover'],
        data: function () {
            return {
                loadingText: '随机封面',
                status: 'init'
            }
        },
        mounted:function () {
        },
        computed: {
            btnStatus: function(){
                if (this.status === 'loading' ){
                    return 'disabled'

                }else if(this.status === 'success'){
                    return ''
                }
                return '';
            },
            classObject: function () {

                if (this.status === 'loading'){
                    this.loadingText = '更换中...';

                    return 'icon-sync spinner text-primary'
                }else if (this.status === 'success'){
                    this.loadingText = '更换完成';
                    return 'icon-sync text-success';
                }else if (this.status === 'error'){
                    this.loadingText = '更换失败';
                    return 'icon-warning22 text-warning'
                }

                return 'icon-sync';

            }
        },
        components: {
        },
        methods: {
            fetch(category){
                this.checked = [];
                let scope = this;
                let _url = "/admin/index/cover?category="+category;

                scope.status = 'loading';
                this.$http.get(_url)
                    .then(function (response) {
                        scope.cover = response.data.data;

                        console.log(JSON.stringify(response.data))
                        if (scope.cover.guid){
                            scope.status = 'success'
                        }
                    })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else {
                            console.log('Error', error.message);
                        }
                        scope.status = 'error';

                        console.log(error);
                    });

            },

        }
    }
</script>