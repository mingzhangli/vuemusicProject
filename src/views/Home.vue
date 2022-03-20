<template>
  <div class="home">
    <top-bar></top-bar>
    <div class="main">
      <left-aslide></left-aslide>
      <ul class="top-nav">
        <li>aaaay个性推荐</li>
        <li>专属定制</li>
        <li>歌单</li>
        <li>排行榜</li>
        <li>歌手</li>
        <li>最新音乐</li>
      </ul>
    </div>

    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import topBar from ".././components/common/topBar.vue";
import leftAslide from ".././components/common/leftAslide.vue";
import bottomBar from ".././components/common/bottomBar.vue";

export default {
  data() {
    return {
      property: "value",
    };
  },
  components: {
    topBar,
    leftAslide,
    bottomBar,
  },
  mounted() {
    this.$request({
      method: "get",
      url: "/artist/top/song?id=6452",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>

<style scoped>
.main {
  display: flex;
}
.top-nav {
  display: flex;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
}
.top-nav li {
  font-size: 20px;
  margin-right: 20px;
}
.isActive {
  font-weight: bold;
  border-bottom: 4px solid #ec4141;
}
</style>
