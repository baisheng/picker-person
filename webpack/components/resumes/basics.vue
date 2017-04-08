<template>
    <div class="panel panel-flat">

        <div class="media panel-body no-border-top">
            <div class="media-left">
                <a href="#">
                    <img :src="resume.basics.picture"
                         style="width: 68px; height: 68px;" class="img-circle" alt="">
                </a>
            </div>

            <div class="media-body">
                <h6 class="media-heading text-semibold" v-html="resume.basics.name"></h6>
                <ul class="list-inline list-inline-separate">
                    <li v-html="resume.basics.location.city" v-if="resume.basics.location.city"></li>
                    <li v-html="resume.basics.label"></li>
                </ul>
                <!--<p class="text-muted" v-html="resume.basics.summary"></p>-->
                <p class="text-muted">
                    <vue-markdown :source="resume.basics.summary"></vue-markdown>
                </p>

            </div>

        </div>
        <div class="panel-footer text-center no-padding">
            <div class="row">
                <div class="col-xs-3">
                    <a href="#" class="display-block p-10 text-default" data-popup="tooltip"
                       data-placement="top" data-container="body" title=""
                       :data-original-title="resume.basics.location.region"><i
                            class="icon-pin position-left"></i><span class=""
                                                                     v-html="resume.basics.location.city"></span></a>
                </div>

                <div class="col-xs-3">
                    <a :href="resume.basics.website " class="display-block p-10 text-default" data-popup="tooltip"
                       data-placement="top" data-container="body" title="" data-original-title="个人网站">
                        <i class="icon-earth position-left"></i><span
                            class="">{{ resume.basics.website }}</span>
                    </a>
                </div>

                <div class="col-xs-3">
                    <a :href="'mailto:'+ resume.basics.email" class="display-block p-10 text-default"
                       data-popup="tooltip"
                       data-placement="top" data-container="body" title="" data-original-title="我的工作邮箱"><i
                            class="icon-mail5 position-left"></i><span class="">{{ resume.basics.email }}</span></a>

                </div>

                <div class="col-xs-3">
                    <a href="#" class="display-block p-10 text-default" data-popup="tooltip"
                       data-placement="top" data-container="body" title="" data-original-title="我的工作电话"><i
                            class="icon-mobile position-left"></i><span
                            class="">{{ resume.basics.phone }}</span></a>
                </div>
            </div>
        </div>


    </div>

</template>


<script>
    export default {
        name: 'Basics',
        props: ['resume'],
    }

</script>