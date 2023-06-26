<template>
    <nav-bar class="nav-bar">
        <template v-slot:left>
            <div @click="backFn">
                <img src="~assets/img/common/back.svg" alt="" class="back-icon" />
            </div>
        </template>

        <template v-slot:center>
            <div class="nav-center-content">
                <div v-for="(item, index) in titles" @click="itemClick(index)" class="nav-center-item"
                    :class="{ active: currentIndex === index }">{{
                        item }}</div>
            </div>
        </template>

    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar.vue'

export default {
    name: 'DetailTabBar',
    components: {
        NavBar
    },
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    methods: {
        backFn() {
            this.$router.back()
        },
        itemClick(index) {
            this.currentIndex = index
            this.$emit('titleClick', index)
        }
    }

}
</script>

<style>
.nav-bar {
    /* background: rebeccapurple; */
    border-bottom: 1px solid #eee;
}

.nav-bar .back-icon {
    width: 28px;
    height: 28px;
    vertical-align: middle;
}

.nav-center-content {
    display: flex;
    color: black;

}

.nav-center-content .nav-center-item {
    flex: 1;
    font-size: 15px;
}

.active {
    color: red
}
</style>