<template>

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
            return {
            };
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
