<template>
    <swiper class="sw">
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgaeLoad">
            </a>
        </swiper-item>

    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
    name: "HomeSwiper",
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }

    },
    data() {
        return {
            isLoad: false
        }
    },
    methods: {
        imgaeLoad() {
            if (!this.isLoad) {
                this.$emit('swiperImgLoad')
                this.$eventBus.emit('imageItemLoad')
                this.isLoad = true
            }


        }
    }

}
</script>

<style>
.sw img {
    width: 100%;
    height: 100%;
}
</style>