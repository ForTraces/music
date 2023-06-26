<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar.vue";
import { getHomeMultidata } from "@/network/home";
export default {
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {
      result:null

    }
  },
  created() {
    getHomeMultidata().then(res => {
    //  console.log(res);
      this.result = res.data;
    })
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
}
</style>