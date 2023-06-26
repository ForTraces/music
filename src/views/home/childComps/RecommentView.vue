<template>
    <div class="recomment">
        <div v-for="item in recomments" class="recomment-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecommentView",
    props: {
        recomments: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {

    }


}
</script>

<style>
.recomment {
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}

.recomment-item {
    flex: 1;
}

.recomment img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
}
</style>