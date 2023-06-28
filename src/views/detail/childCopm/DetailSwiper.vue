<template>
    <swiper class="banner">
        <swiper-item v-for="item in banners">
            <a :href="item">
                <img :src="item" alt="">
            </a>
        </swiper-item>

    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index';
export default {
    name: 'DetailSwiper',
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            default: []
        }
    }

}
</script>

<style>
.banner {
    height: 300px;
    overflow: hidden;
}
</style>