<template>
  <h2>分类</h2>
  <h5>局部滚动练习</h5>

  <div class="ca-wrapper" ref="wrapper">
    <div class="test">
      <ul class="content">
        <li>text 1</li>
        <li>text 2</li>
        <li>text 3</li>
        <li>text 4</li>
        <li>text 5</li>
        <li>text 6</li>
        <li>text 7</li>
        <li>text 8</li>
        <li>text 9</li>
        <li>text 10</li>
        <li>text 11</li>
        <li>text 12</li>
        <li>text 13</li>
        <li>text 14</li>
        <li>text 15</li>
        <li>text 16</li>
        <li>text 17</li>
        <li>text 18</li>
        <li>text 19</li>
        <li>text 20</li>
        <li>text 21</li>
        <li>text 22</li>
        <li>text 23</li>
        <li>text 24</li>
        <li>text 25</li>
        <li>text 26</li>
        <li>text 27</li>
        <li>text 28</li>
        <li>text 29</li>
        <li>text 30</li>
        <li>text 1</li>
        <li>text 2</li>
        <li>text 3</li>
        <li>text 4</li>
        <li>text 5</li>
        <li>text 6</li>
        <li>text 7</li>
        <li>text 8</li>
        <li>text 9</li>
        <li>text 10</li>
        <li>text 11</li>
        <li>text 12</li>
        <li>text 13</li>
        <li>text 14</li>
        <li>text 15</li>
        <li>text 16</li>
        <li>text 17</li>
        <li>text 18</li>
        <li>text 19</li>
        <li>text 20</li>
        <li>text 21</li>
        <li>text 22</li>
        <li>text 23</li>
        <li>text 24</li>
        <li>text 25</li>
        <li>text 26</li>
        <li>text 27</li>
        <li>text 28</li>
        <li>text 29</li>
        <li>text 30</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    }
  },
  created() {

  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, { probeType: 3 })
    this.scroll.on('scroll', (position) => {
      console.log(position);
    })
  }

};
</script>

<style>
.ca-wrapper {
  background: red;
  height: 150px;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>