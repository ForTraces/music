<template>
    <div class="detail">
        <detail-tab-bar class="top-nav" @titleClick="titleClick" ref="nav"></detail-tab-bar>
        <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
            <detail-swiper :banners="topBnner" />
            <detail-base-info :goods="topGoods" />
            <detail-shop-info :shop="shop" />
            <detail-goods-info :detailInfo="detailInfo" @imgLoad="goodsImgLoad"></detail-goods-info>
            <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
            <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
            <good-list ref="recommend" />
        </scroll>
        <detail-bot-bar @addCart="addCart"></detail-bot-bar>
    </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue';
import DetailSwiper from './childCopm/DetailSwiper.vue'
import DetailTabBar from './childCopm/DetailTabBar.vue'
import DetailShopInfo from './childCopm/DetailShopInfo.vue';
import DetailBotBar from './childCopm/DetailBotBar.vue';
import DetailBaseInfo from './childCopm/DetailBaseInfo.vue';
import DetailGoodsInfo from './childCopm/DetailGoodsInfo.vue';
import DetailParamInfo from './childCopm/DetailParamInfo.vue';
import GoodList from '@/components/content/goods/GoodList.vue';
import DetailCommentInfo from './childCopm/DetailCommentInfo.vue';
export default {
    name: 'Detail',
    components: {
        Scroll,
        DetailTabBar,
        DetailSwiper,
        DetailShopInfo,
        DetailBotBar,
        DetailBaseInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodList
    },
    props: {

    },
    //数据源
    data() {
        return {
            themeTopY: [],
            currentIndex: 0,
            //数据源
            topBnner: [
                'https://img.zcool.cn/community/016bdc56e95f426ac7255885d7f337.png@1280w_1l_2o_100sh.png',
                'https://img.zcool.cn/community/016bdc56e95f426ac7255885d7f337.png@1280w_1l_2o_100sh.png'
            ],
            topGoods: {
                'title': '2023新款衣服2023新款衣服2023新款衣服2023新款衣服2023新款衣服',
                'price': '500',
                'oldPrice': "1500",
                'discountDesc': '3折',
                'columns': ['销量218', '收藏97', '72小时发货'],
                'services': ['退货补运费', '全国包邮', '7天无理由退货']
            },
            shop: {
                'shopLogo': 'iconImg.png',
                'name': '森马服饰',
                'cSells': '58000',
                'cGoods': '99',
                'score': [
                    {
                        'name': '描述相符',
                        'score': '5.0',
                        'isBetter': true
                    },
                    {
                        'name': '价格合理',
                        'score': '5.0',
                        'isBetter': true
                    },
                    {
                        'name': '质量满意',
                        'score': '5.0',
                        'isBetter': true
                    }
                ]


            },
            detailInfo: {
                'desc': '威觉【两件装】港风新款夏季短袖t恤男宽松学生潮流韩版上衣男打底衫 E508白',
                'detailImage': [
                    {
                        'key': '港风新款',
                        'list': [
                            'https://img0.baidu.com/it/u=34243821,60477667&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
                            'https://img0.baidu.com/it/u=34243821,60477667&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
                        ]
                    }
                ]

            },
            paramInfo: {
                'rule':
                    [
                        [
                            ['尺码', 'S', 'M', 'L', 'XL'],
                            ['肩宽', 'S', 'M', 'L', 'XL'],
                            ['腰围', '-', '-', '-', '-'],
                            ['衣长', '75', '76', '77', '78'],
                            ['胸围', '0', '-', '-', '-'],
                            ['领围', '75', '76', '77', '78']
                        ]
                    ],
                'info': [
                    { 'key': '图案', 'value': '字母文字/数字' },
                    { 'key': '厂名', 'value': '北京科技有限公司' },
                    { 'key': '季节', 'value': '夏季' },
                    { 'key': '颜色', 'value': '714白色,715黄色，718橙色，719绿色' },
                    { 'key': '厂址', 'value': '北京朝阳区国贸测试地址' },
                    { 'key': '材质', 'value': '棉' },
                    { 'key': '领型', 'value': '圆领' },
                    { 'key': '袖长', 'value': '短袖' },
                ]


            },
            commentInfo: [
                { 'user': { 'uname': '我是测试名字', 'avatar': 'iconImg.png' }, 'content': '我是评论哈哈哈', 'created': '2023-08-01 09:00', 'style': '颜色:绿色 尺码:M', 'images': ['https://img0.baidu.com/it/u=34243821,60477667&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750', 'https://img0.baidu.com/it/u=34243821,60477667&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750', 'https://img0.baidu.com/it/u=34243821,60477667&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'] }
            ]
        }
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
        },
        contentScroll(position) {
            const positionY = -(position.y);
            let _lenth = this.themeTopY.length;
            for (let i = 0; i < _lenth; i++) {
                if (this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1])) {
                    this.currentIndex = i;
                    this.$refs.nav.currentIndex = this.currentIndex;
                }
            }


        },
        goodsImgLoad() {
            this.$refs.scroll.refresh();
            this.themeTopY = [];
            this.themeTopY.push(0);
            this.themeTopY.push(this.$refs.param.$el.offsetTop);
            this.themeTopY.push(this.$refs.comment.$el.offsetTop);
            this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
            this.themeTopY.push(Number.MAX_VALUE);

        },
        titleClick(index) {
            this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200)
            console.log('111');
        },
    },
    created() {
        setTimeout(() => {
            this.$refs.scroll.refresh();
            // console.log(111111111111);
            this.goodsImgLoad();
        }, 2000);
    },
    destroyed() {
        this.$bus.$off('itemImgLoad', this.itemImgLister)
    }

}
</script>

<style scoped>
.detail {
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 10;
}

.top-nav {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 11;
}

.content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>