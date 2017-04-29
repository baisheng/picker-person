<template>
    <ul class="pagination pagination-default pagination-xs" >
        <li v-show="current != 1" @click="current-- && goto(current)" >
            <a href="#">上一页</a>
        </li>
        <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
            <a href="javascript:void(0);" >{{ index }}</a>
        </li>
        <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)">
            <a href="#" >下一页</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'pager',
        data: function () {
            return {
                current: this.page || 1,
                showItem: 5,
            }
        },
        props: [
            "allpage",
            "page"
        ],
        computed: {
            pages: function () {
                var pag = [];
                if (this.current < this.showItem) { //如果当前的激活的项 小于要显示的条数
                    //总页数和要显示的条数那个大就显示多少条
                    var i = Math.min(this.showItem, this.allpage);
                    while (i) {
                        pag.unshift(i--);
                    }
                } else { //当前页数大于显示页数了
                    var middle = this.current - Math.floor(this.showItem / 2),//从哪里开始
                        i = this.showItem;
                    if (middle > (this.allpage - this.showItem)) {
                        middle = (this.allpage - this.showItem) + 1
                    }
                    while (i--) {
                        pag.push(middle++);
                    }
                }
                return pag
            }
        },
        methods: {
            goto: function (index) {

                if (index == this.current) return;
                this.current = index;
//                    $.event.trigger({
//                        type: "message"
//                    });
                this.$emit('increment', index)
                eventHub.$emit('page', index)

                //这里可以发送ajax请求
            }
        },
    }
</script>