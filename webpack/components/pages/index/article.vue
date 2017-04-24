<template>
    <!-- Blog post -->
    <div class="timeline-row">
        <div class="timeline-icon">
            <img src="assets/images/placeholder.jpg" alt="">
        </div>

        <div class="panel panel-flat timeline-content">
            <div class="panel-heading">
                <h6 class="panel-title">{{ post.title }}</h6>
                <div class="heading-elements">
                    <span class="heading-text"><i class="icon-checkmark-circle position-left text-success"></i> {{ post.modified | moment }}</span>
                    <ul class="icons-list">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="icon-arrow-down12"></i>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a href="#"><i class="icon-user-lock"></i> 私有</a></li>
                                <!--<li><a href="#"><i class="icon-user-block"></i> Block user</a></li>-->
                                <!--<li><a href="#"><i class="icon-user-minus"></i> Unfollow user</a></li>-->
                                <!--<li class="divider"></li>-->
                                <!--<li><a href="#"><i class="icon-embed"></i> Embed post</a></li>-->
                                <!--<li><a href="#"><i class="icon-blocked"></i> Report this post</a></li>-->
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="panel-body">
                <a href="#" class="display-block content-group">
                    <img src="assets/images/cover.jpg" class="img-responsive content-group" alt="">
                </a>

                <h6 class="content-group">
                    <i class="icon-comment-discussion position-left"></i>
                    Comment from <a href="#">Jason Ansley</a>:
                </h6>

                <blockquote>
                    <p>{{ post.excerpt }}</p>
                    <footer>Jason, <cite title="Source Title">10:39 am</cite></footer>
                </blockquote>
            </div>

            <div class="panel-footer panel-footer-transparent">
                <div class="heading-elements">
                    <ul class="list-inline list-inline-condensed heading-text">
                        <li><a href="#" class="text-default"><i class="icon-eye4 position-left"></i> 438</a></li>
                        <li><a href="#" class="text-default"><i class="icon-comment-discussion position-left"></i> 71</a></li>
                    </ul>

                    <span class="heading-btn pull-right">
																<a href="#" class="btn btn-link">Read post <i class="icon-arrow-right14 position-right"></i></a>
															</span>
                </div>
            </div>
        </div>
    </div>
    <!-- /blog post -->
</template>


<script>
    export default {
        props: ['post'],
        data: function () {
            return {
            }
        },
        mounted:function () {
        },
        components: {
        },
        methods: {
        }
    }
</script>