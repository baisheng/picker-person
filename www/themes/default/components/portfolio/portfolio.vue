<template>
    <!--<div :id="id">-->
    <!--<slot></slot>-->
    <!--</div>-->
    <div :id="snippet.id" class="card card-1 boxed boxed--border box-shadow "
         v-if="typeof(snippet.meta['_snippet_link']) != 'undefined'">

        <div class="card__top">

            <div class="card__avatar">
                <a href="#" v-if="snippet.meta['_snippet_link']['og:image']">
                    <img alt="Image" v-lazy="snippet.meta['_snippet_link']['og:image']">
                </a>

                <span>
                                    <strong>
                                        <a :href="snippet.content"
                                           v-if="typeof(snippet.meta['_snippet_link']['og:title']) != 'undefined' ">{{ snippet.meta['_snippet_link']['og:title']
                                            }}</a>
                                        <a :href="snippet.content"
                                           v-else-if="typeof(snippet.meta['_snippet_link']['twitter:title']) != 'undefined'">
                                            {{ snippet.meta['_snippet_link']['twitter:title'] }}
                                        </a>
                                    </strong>
                                </span>
            </div>
            <div class="card__meta">
                <span>{{ snippet.modified | moment }}</span>
            </div>
        </div>
        <div class="card__body">
            <p>
                {{ snippet.meta['_snippet_link']['og:description'] }}
                <a :href="snippet.content" target="_blank">#</a>
            </p>
        </div>
        <div class="card__bottom">
            <ul class="list-inline">
                <li v-if="snippet.meta['_snippet_link']['hostname'] == 'github.com'">
                    <div class="card__action">
                        <a href="#">
                            <i class="socicon-github"></i>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="card__action">
                        <a href="#">
                            <i class="material-icons">comment</i>
                            <span>4</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="card__action">
                        <a href="#">
                            <i class="material-icons">favorite</i>
                            <span>7</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="card__action">
                        <a href="#">
                            <i class="material-icons">share</i>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!--<div :id="snippet.id" class="boxed boxed&#45;&#45;border box-shadow" v-else-if="typeof(snippet.meta['_snippet_code']) != 'undefined'">-->
    <!--{{ _.}} -->
    <!--</div>-->
    <div :id="snippet.id" class="snippet-card share hover-shadow " v-else-if="snippet.meta['_snippet_code']">

        <div class="card-description ">
            <pre :class="'language-' + snippet.meta['_snippet_code']['lang']">
                <code>{{ snippet.content }}</code>
            </pre>
        </div>
        <div class="card-footer clearfix">
            <div class="pull-left">@ <span class="text-primary">Brain</span>
            </div>
            <div class="pull-right hint-text">
                <span>{{ snippet.modified | moment }}</span>

            </div>
            <div class="clearfix"></div>
        </div>
    </div>

    <div :id="snippet.id" class="snippet-card share  hover-shadow" v-else>
        <!--<div class="circle" data-toggle="tooltip" title="Label" data-container="body">-->
        <!--</div>-->
        <!--<div class="card-header clearfix">-->
        <!--<h5>Andy Young</h5>-->
        <!--<h6>Updated his status-->
        <!--<span class="location semi-bold"><i class="icon-map"></i> NYC, New York</span>-->
        <!--</h6>-->
        <!--</div>-->
        <!--<div class="card-header clearfix">-->
        <!--<div class="user-pic">-->
        <!--<img alt="Profile Image" width="33" height="33" data-src-retina="assets/img/profiles/4x.jpg" data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg">-->
        <!--</div>-->
        <!--<h5>Andy Young</h5>-->
        <!--<h6>Updated his status-->
        <!--<span class="location semi-bold"><i class="icon-map"></i> NYC, New York</span>-->
        <!--</h6>-->
        <!--</div>-->
        <div class="card-description">
            <p>
                {{ snippet.content }}
            </p>
        </div>
        <div class="card-footer clearfix">
            <div class="pull-left">@ <span class="text-primary">Brain</span>
            </div>
            <div class="pull-right hint-text">
                <span>{{ snippet.modified | moment }}</span>

            </div>
            <div class="clearfix"></div>
        </div>
        <!--<p>-->
        <!--{{ snippet.content }}-->
        <!--</p>-->
        <!--<a class="btn btn&#45;&#45;primary" href="#">-->
        <!--<span class="btn__text">-->
        <!--Build Now-->
        <!--</span>-->
        <!--</a>-->
    </div>


</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                default: 'snippet__container',
            },
            options: {
                type: Object,
                default: () => ({}),
            },
            snippet: {
                type: Object,
                default: () => ({})
            }
        },
        data() {
            return {};
        },
        mounted() {
//            EmbedJS.setOptions(this.options);
//            this.vEmbed = new EmbedJS({
//                input: document.querySelector(`#${this.id}`),
//            });
//            this.vEmbed.render();
        },
        beforeDestroy() {
//            this.vEmbed.destroy();
        }
    };
</script>