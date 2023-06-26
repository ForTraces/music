<template>
    <div class="detail">
        <detail-tab-bar @tilteClick="tilteClick" ref="nav"></detail-tab-bar>
        <detail-swiper></detail-swiper>
        <detail-shop-info />
        <detail-bot-bar @addCart="addCart"></detail-bot-bar>
    </div>
</template>

<script>
import DetailSwiper from './childCopm/DetailSwiper.vue'
import DetailTabBar from './childCopm/DetailTabBar.vue'
import DetailShopInfo from './childCopm/DetailShopInfo.vue';
import DetailBotBar from './childCopm/DetailBotBar.vue';
export default {
    name: 'Detail',
    props: {

    },
    components: {
        DetailTabBar,
        DetailSwiper,
        DetailShopInfo,
        DetailBotBar
    },
    methods: {
        addCart() {
            const product = {}
            product.image = this.topBnner[0];
            product.title = this.goods.title;
            product.desc = this.goods.discountDesc;
            product.price = this.goods.lowNowPrice;
            product.iid = this.iid;
            this.$store.commit('addCar', product);
        }
    },
    destroyed() {
        this.$bus.$off('itemImgLoad', this.itemImgLister)
    }

}
</script>

<style></style>