<template>
    <p class="navbar-text">共 <span class="text-semibold"> {{pagedata.totalPages }} </span> 页 <span
            class="text-semibold">{{ pagedata.count }} 条记录</span></p>
    <div class="btn-group navbar-left navbar-btn">
        <button type="button" class="btn btn-default btn-icon " :class="disabled: pagedata.currentPage == 1"><i
                class="icon-arrow-left12"></i></button>
        <button type="button" class="btn btn-default btn-icon"><i class="icon-arrow-right13"></i></button>
    </div>
</template>


<script>
    export default {
        name: 'PageButton',
        props: ['pagedata'],
        data(){
            return {
                current: this.page || 1
            }
        },
        computed: {
            pageIndex: function () {
                let num = 5;
                let pageIndex = []
            },
            pages: function () {
                let pag = [];
                if (this.current < this.showItem) { //如果当前的激活的项 小于要显示的条数
                    //总页数和要显示的条数那个大就显示多少条
                    let i = Math.min(this.showItem, this.allpage);
                    while (i) {
                        pag.unshift(i--);
                    }
                } else { //当前页数大于显示页数了
                    let middle = this.current - Math.floor(this.showItem / 2),//从哪里开始
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
        }
    }

</script>

