<template>
    <div class="goods-item" @click="itemLink">
        <img :src="getImage(goodsItem.show.img)" alt="" @load="itemImageLoad">
        <div class="goods-info">
            <p>{{ goodsItem.title }}</p>
            <span class="price">{{ goodsItem.price }}</span>
            <span class="collect">{{ goodsItem.cfav }}</span>
        </div>
    </div>
</template>

<script>

export default {
    name: "GoodListItem",
    data() {
        return {}
    },
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        imageLoad() {
            this.$eventBus.$emit('imageItemLoad')
        },
        itemLink() {
            this.$router.push('/Detail/' + this.goodsItem.iid)
        },
        getImage(img) {
            return require('@/assets/img/home/' + img)

        }
    },
    created() {
        // console.log(this.goodsItem);
    }

}
</script>

<style>
.goods-item {
    padding-bottom: 40px;
    width: 48%;
    position: relative;
}

.goods-item img {
    width: 100%;
    border-radius: 5px;
}

.goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}

.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}

.goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
}

.goods-info .collect {
    position: relative;
}

.goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;

}
</style>