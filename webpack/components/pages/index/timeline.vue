<template>
    <!-- Timeline -->
    <div class="timeline timeline-left content-group">
        <div class="timeline-container">


            <div class="timeline-row" v-for="post in posts">
                <div class="timeline-icon">
                    <div class="bg-primary-400">
                        <i class="icon-file-text2"></i>
                    </div>
                </div>

                <div class="panel panel-flat timeline-content">
                    <div class="panel-heading">
                        <h6 class="panel-title"><a :href="'/admin/post/'+post.id">{{ post.title }}</a></h6>
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
                            <p v-html="post.excerpt"></p>
                            <!--<footer>Jason, <cite title="Source Title">10:39 am</cite></footer>-->
                        </blockquote>
                    </div>

                    <div class="panel-footer panel-footer-transparent">
                        <div class="heading-elements">
                            <ul class="list-inline list-inline-condensed heading-text">
                                <li><a href="#" class="text-default"><i class="icon-eye4 position-left"></i> 438</a></li>
                                <li><a href="#" class="text-default"><i class="icon-comment-discussion position-left"></i> 71</a></li>
                            </ul>

                            <span class="heading-btn pull-right">
																<a href="#" class="btn btn-link">更新文章 <i class="icon-arrow-right14 position-right"></i></a>
															</span>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Date stamp -->
            <div class="timeline-date text-muted">
                <i class="icon-history position-left"></i> <span class="text-semibold">Monday</span>, April 18
            </div>
            <!-- /date stamp -->


            <!-- Invoices -->
            <div class="timeline-row">
                <div class="timeline-icon">
                    <div class="bg-warning-400">
                        <i class="icon-cash3"></i>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div class="panel border-left-lg border-left-danger invoice-grid timeline-content">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <h6 class="text-semibold no-margin-top">Leonardo Fellini</h6>
                                        <ul class="list list-unstyled">
                                            <li>Invoice #: &nbsp;0028</li>
                                            <li>Issued on: <span class="text-semibold">2015/01/25</span></li>
                                        </ul>
                                    </div>

                                    <div class="col-sm-6">
                                        <h6 class="text-semibold text-right no-margin-top">$8,750</h6>
                                        <ul class="list list-unstyled text-right">
                                            <li>Method: <span class="text-semibold">SWIFT</span></li>
                                            <li class="dropdown">
                                                Status: &nbsp;
                                                <a href="#" class="label bg-danger-400 dropdown-toggle" data-toggle="dropdown">Overdue <span class="caret"></span></a>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li class="active"><a href="#"><i class="icon-alert"></i> Overdue</a></li>
                                                    <li><a href="#"><i class="icon-alarm"></i> Pending</a></li>
                                                    <li><a href="#"><i class="icon-checkmark3"></i> Paid</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#"><i class="icon-spinner2 spinner"></i> On hold</a></li>
                                                    <li><a href="#"><i class="icon-cross2"></i> Canceled</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="panel-footer panel-footer-condensed">
                                <div class="heading-elements">
																	<span class="heading-text">
																		<span class="status-mark border-danger position-left"></span> Due: <span class="text-semibold">2015/02/25</span>
																	</span>

                                    <ul class="list-inline list-inline-condensed heading-text pull-right">
                                        <li><a href="#" class="text-default" data-toggle="modal" data-target="#invoice"><i class="icon-eye8"></i></a></li>
                                        <li class="dropdown">
                                            <a href="#" class="text-default dropdown-toggle" data-toggle="dropdown"><i class="icon-menu7"></i> <span class="caret"></span></a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li><a href="#"><i class="icon-printer"></i> Print invoice</a></li>
                                                <li><a href="#"><i class="icon-file-download"></i> Download invoice</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#"><i class="icon-file-plus"></i> Edit invoice</a></li>
                                                <li><a href="#"><i class="icon-cross2"></i> Remove invoice</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="panel border-left-lg border-left-success invoice-grid timeline-content">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <h6 class="text-semibold no-margin-top">Rebecca Manes</h6>
                                        <ul class="list list-unstyled">
                                            <li>Invoice #: &nbsp;0027</li>
                                            <li>Issued on: <span class="text-semibold">2015/02/24</span></li>
                                        </ul>
                                    </div>

                                    <div class="col-sm-6">
                                        <h6 class="text-semibold text-right no-margin-top">$5,100</h6>
                                        <ul class="list list-unstyled text-right">
                                            <li>Method: <span class="text-semibold">Paypal</span></li>
                                            <li class="dropdown">
                                                Status: &nbsp;
                                                <a href="#" class="label bg-success-400 dropdown-toggle" data-toggle="dropdown">Paid <span class="caret"></span></a>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li><a href="#"><i class="icon-alert"></i> Overdue</a></li>
                                                    <li><a href="#"><i class="icon-alarm"></i> Pending</a></li>
                                                    <li class="active"><a href="#"><i class="icon-checkmark3"></i> Paid</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#"><i class="icon-spinner2 spinner"></i> On hold</a></li>
                                                    <li><a href="#"><i class="icon-cross2"></i> Canceled</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="panel-footer panel-footer-condensed">
                                <div class="heading-elements">
																	<span class="heading-text">
																		<span class="status-mark border-success position-left"></span> Due: <span class="text-semibold">2015/03/24</span>
																	</span>

                                    <ul class="list-inline list-inline-condensed heading-text pull-right">
                                        <li><a href="#" class="text-default" data-toggle="modal" data-target="#invoice"><i class="icon-eye8"></i></a></li>
                                        <li class="dropdown">
                                            <a href="#" class="text-default dropdown-toggle" data-toggle="dropdown"><i class="icon-menu7"></i> <span class="caret"></span></a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li><a href="#"><i class="icon-printer"></i> Print invoice</a></li>
                                                <li><a href="#"><i class="icon-file-download"></i> Download invoice</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#"><i class="icon-file-plus"></i> Edit invoice</a></li>
                                                <li><a href="#"><i class="icon-cross2"></i> Remove invoice</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /invoices -->


            <!-- Messages -->
            <div class="timeline-row">
                <div class="timeline-icon">
                    <div class="bg-info-400">
                        <i class="icon-comment-discussion"></i>
                    </div>
                </div>

                <div class="panel panel-flat timeline-content">
                    <div class="panel-heading">
                        <h6 class="panel-title">Conversation with James</h6>
                        <div class="heading-elements">
                            <ul class="icons-list">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="icon-circle-down2"></i>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="#"><i class="icon-user-lock"></i> Hide user posts</a></li>
                                        <li><a href="#"><i class="icon-user-block"></i> Block user</a></li>
                                        <li><a href="#"><i class="icon-user-minus"></i> Unfollow user</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#"><i class="icon-embed"></i> Embed post</a></li>
                                        <li><a href="#"><i class="icon-blocked"></i> Report this post</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="panel-body">
                        <ul class="media-list chat-list content-group">
                            <li class="media date-step">
                                <span>Today</span>
                            </li>

                            <li class="media reversed">
                                <div class="media-body">
                                    <div class="media-content">Thus superb the tapir the wallaby blank frog execrably much since dalmatian by in hot. Uninspiringly arose mounted stared one curt safe</div>
                                    <span class="media-annotation display-block mt-10">Tue, 8:12 am <a href="#"><i class="icon-pin-alt position-right text-muted"></i></a></span>
                                </div>

                                <div class="media-right">
                                    <a href="assets/images/placeholder.jpg">
                                        <img src="assets/images/placeholder.jpg" class="img-circle img-md" alt="">
                                    </a>
                                </div>
                            </li>

                            <li class="media">
                                <div class="media-left">
                                    <a href="assets/images/placeholder.jpg">
                                        <img src="assets/images/placeholder.jpg" class="img-circle img-md" alt="">
                                    </a>
                                </div>

                                <div class="media-body">
                                    <div class="media-content">Tolerantly some understood this stubbornly after snarlingly frog far added insect into snorted more auspiciously heedless drunkenly jeez foolhardy oh.</div>
                                    <span class="media-annotation display-block mt-10">Wed, 4:20 pm <a href="#"><i class="icon-pin-alt position-right text-muted"></i></a></span>
                                </div>
                            </li>

                            <li class="media reversed">
                                <div class="media-body">
                                    <div class="media-content">Satisfactorily strenuously while sleazily dear frustratingly insect menially some shook far sardonic badger telepathic much jeepers immature much hey.</div>
                                    <span class="media-annotation display-block mt-10">2 hours ago <a href="#"><i class="icon-pin-alt position-right text-muted"></i></a></span>
                                </div>

                                <div class="media-right">
                                    <a href="assets/images/placeholder.jpg">
                                        <img src="assets/images/placeholder.jpg" class="img-circle img-md" alt="">
                                    </a>
                                </div>
                            </li>

                            <li class="media">
                                <div class="media-left">
                                    <a href="assets/images/placeholder.jpg">
                                        <img src="assets/images/placeholder.jpg" class="img-circle img-md" alt="">
                                    </a>
                                </div>

                                <div class="media-body">
                                    <div class="media-content">Grunted smirked and grew less but rewound much despite and impressive via alongside out and gosh easy manatee dear ineffective yikes.</div>
                                    <span class="media-annotation display-block mt-10">13 minutes ago <a href="#"><i class="icon-pin-alt position-right text-muted"></i></a></span>
                                </div>
                            </li>

                            <li class="media reversed">
                                <div class="media-body">
                                    <div class="media-content"><i class="icon-menu display-block"></i></div>
                                </div>

                                <div class="media-right">
                                    <a href="assets/images/placeholder.jpg">
                                        <img src="assets/images/placeholder.jpg" class="img-circle img-md" alt="">
                                    </a>
                                </div>
                            </li>
                        </ul>

                        <textarea name="enter-message" class="form-control content-group" rows="3" cols="1" placeholder="Enter your message..."></textarea>

                        <div class="row">
                            <div class="col-xs-6">
                                <ul class="icons-list icons-list-extended mt-10">
                                    <li><a href="#" data-popup="tooltip" title="Send photo" data-container="body"><i class="icon-file-picture"></i></a></li>
                                    <li><a href="#" data-popup="tooltip" title="Send video" data-container="body"><i class="icon-file-video"></i></a></li>
                                    <li><a href="#" data-popup="tooltip" title="Send file" data-container="body"><i class="icon-file-plus"></i></a></li>
                                </ul>
                            </div>

                            <div class="col-xs-6 text-right">
                                <button type="button" class="btn bg-teal-400 btn-labeled btn-labeled-right"><b><i class="icon-circle-right2"></i></b> Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /messages -->

        </div>
    </div>
    <!-- /timeline -->
</template>


<script>
//    import Article from './article.vue'

    export default {
        props: ['posts'],

        components: {
//            Article
        },
        data: function () {
            return {
            }
        },
        mounted:function () {
            Vue.nextTick(function(){
                Prism.highlightAll();

            })
        },
        components: {
        },
        methods: {
        }
    }

</script>