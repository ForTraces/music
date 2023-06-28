<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 内容 -->
    <tab-control class="tab-control-top" :titles="['流行', '新款', '精选']" @tabItemClick="tabItemClick" ref="tabControl1"
      v-show="isTabShow" />
    <scroll class="content1" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadMore">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <!-- 推荐页 -->
      <recomment-view :recomments="recommends" />
      <feture-view />
      <tab-control v-show="!isTabShow" class="tab-control-bot" :titles="['流行', '新款', '精选']" @tabItemClick="tabItemClick"
        ref="tabControl2" />
      <good-list :goods="showGoods" />
      <!-- <ul>
        <li class="testPic" v-for="i in 20" @click="goodClick">我是商品 第 {{ i }} 个</li>
      </ul> -->
    </scroll>

  </div>
</template>
<script>
//view 组件
import NavBar from "components/common/navBar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommentView from "./childComps/RecommentView.vue";
import FetureView from "./childComps/FetureView.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodList from "@/components/content/goods/GoodList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";

//网络请求
import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommentView,
    FetureView,
    TabControl,
    GoodList,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        "pop": { page: 0, list: [] },
        "new": { page: 0, list: [] },
        "sell": { page: 0, list: [] },
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabShow: false,
      saveY: 0,
      itemImgLister: null
    }
  },
  created() {
    // 请求轮播图
    this.getHomeMultidata();
    // 请求商品数据
    // this.getHomeGoods("pop");
    // this.getHomeGoods("new");
    // this.getHomeGoods("sell");
    // this.$bus.$on('itemImageLoad', () => {
    //   this.$refs.refresh();

    // })

  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },

  methods: {
    goodClick() {
      this.$router.push('/detail/' + "1123")

    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        // this.goods[type].list.push(...res.data.list)
        // this.goods[type].page += 1
      })
    },
    // 实践监听
    tabItemClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 滚动
    contentScroll(position) {
      // this.isShowBackTop = (-position.y) > 500;
      this.isTabShow = (-position.y) > this.tabOffsetTop - 44;
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    }

  }
};
</script>

<style>
#home {
  padding-top: 44px;
  /* margin-top: 44px; */
  /* position: relative; */
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control-top {
  position: relative;
  /* top: 44px; */
  z-index: 9;
}

.content1 {
  /* background: rebeccapurple; */
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
  /* overflow: hidden;
  /* height: 500px; */
  height: calc(100% - 49px);
  /* height: 500px; */
  overflow: hidden;

}

.testPic {
  height: 44px;
  line-height: 44px;
  /* background: red; */
  width: 100%;
  border-bottom: 1px solid #eee;
}
</style>