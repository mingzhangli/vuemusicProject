<template>
  <div class="home">
    <top-bar></top-bar>
    <div class="main">
      <left-aslide></left-aslide>
      <div class="right">
        <ul class="top-nav">
          <li
            @click="toLink('/Home/gx')"
            :class="{ isActive: isShow('/Home/gx') }"
          >
            个性推荐
          </li>
          <li
            @click="toLink('/Home/zs')"
            :class="{ isActive: isShow('/Home/zs') }"
          >
            专属定制
          </li>
          <li
            @click="toLink('/Home/gd')"
            :class="{ isActive: isShow('/Home/gd') }"
          >
            歌单
          </li>
          <li>排行榜</li>
          <li>歌手</li>
          <li>最新音乐</li>
        </ul>
        <div class="place">
          <router-view> </router-view>
        </div>
      </div>
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
      isPath: "",
    };
  },
  components: {
    topBar,
    leftAslide,
    bottomBar,
  },
  mounted() {},
  methods: {
    toLink(url) {
      this.$router.push(url);
    },
    isShow(url) {
      return this.$route.path == url; //判断是否是当前子路由，然后返回boolean值然后显示样式
    },
  },
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
.place {
  width: 960px;
}
</style>
