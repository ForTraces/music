
<template>
    <div class="goods">
        <good-list-item v-for="item in goods" :goods-item="item"></good-list-item>
    </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue';
export default {
    name: "GoodList",
    props: {
        // goods: {
        //     type: Array,
        //     default() {
        //         return []
        //     }
        // }
    },
    data() {
        return {
            goods: [
                {
                    'title': '商品标题', 'price': '100', 'cfav': '已收藏', 'show': { 'img': 'yifu.jpg' },
                },
                {
                    'title': '商品标题', 'price': '100', 'cfav': '已收藏', 'show': { 'img': 'yifu.jpg' },
                },
                {
                    'title': '商品标题', 'price': '100', 'cfav': '已收藏', 'show': { 'img': 'yifu.jpg' },
                },
                {
                    'title': '商品标题', 'price': '100', 'cfav': '已收藏', 'show': { 'img': 'yifu.jpg' },
                },
                {
                    'title': '商品标题', 'price': '100', 'cfav': '已收藏', 'show': { 'img': 'yifu.jpg' },
                },
                {
                    'title': '商品标题', 'price': '100', 'cfav': '已收藏', 'show': { 'img': 'yifu.jpg' },
                },
                {
                    'title': '商品标题', 'price': '100', 'cfav': '已收藏', 'show': { 'img': 'yifu.jpg' },
                },
                {
                    'title': '商品标题', 'price': '100', 'cfav': '已收藏', 'show': { 'img': 'yifu.jpg' },
                }
            ]
        }
    },
    components: {
        GoodListItem

    }

}
</script>

<style>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>