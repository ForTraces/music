<template>
    <div class="wrapper1" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: "Scroll",
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null,
            message: '哈哈哈'
        }
    },
    created() {
        this.$eventBus.on('imageItemLoad', this.imageItemLoad)

    },
    mounted() {
        // 1.创建BScroll对象
        // console.log(this.$refs.wrapper);
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })


        // 3.监听上拉事件
        // this.scroll.on('pullingUp', () => {
        //     this.$emit('pullingUp')
        // })
    },

    methods: {
        scrollTo(x, y, time = 300) {
            this.scroll && this.scrollTo && this.scroll.scrollTo(x, y, time)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        imageItemLoad() {
            this.refresh()
            // console.log(99999);
        }
    }
}
</script>

<style scoped>
/* .wrapper1 {
    height: 500px;
    overflow: hidden;
} */
</style>
