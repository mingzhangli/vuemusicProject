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
          <li
            @click="toLink('/Home/phb')"
            :class="{ isActive: isShow('/Home/phb') }"
          >
            排行榜
          </li>
          <li
            @click="toLink('/Home/gs')"
            :class="{ isActive: isShow('/Home/gs') }"
          >
            歌手
          </li>
          <li
            @click="toLink('/Home/zx')"
            :class="{ isActive: isShow('/Home/zx') }"
          >
            最新音乐
          </li>
        </ul>
        <div class="place">
          <router-view> </router-view>
        </div>
      </div>
    </div>

    <bottomBar
      :murl="musicUrl"
      :mpic="mpic"
      :mname="mname"
      :author="author"
    ></bottomBar>
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
      musicUrl: "",
      mpic: "",
      mname: "",
      author: "",
    };
  },
  components: {
    topBar,
    leftAslide,
    bottomBar,
  },
  mounted() {
    this.$EventBus.$on("play", () => {
      this.getsong();
    });
  },
  methods: {
    toLink(url) {
      this.$router.push(url);
    },
    isShow(url) {
      return this.$route.path == url; //判断是否是当前子路由，然后返回boolean值然后显示样式
    },
    getsong() {
      this.$request({
        url: "/song/url",
        params: {
          id: this.$store.state.mid,
        },
      }).then((res) => {
        this.musicUrl = res.data.data[0].url;
      });
      this.$request({
        url: "/song/detail",
        params: {
          ids: this.$store.state.mid,
        },
      }).then((res) => {
        this.mpic = res.data.songs[0].al.picUrl;
        this.author = res.data.songs[0].ar[0].name;
        this.mname = res.data.songs[0].name;
      });
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
.right {
  flex: 1;
  padding: 0 20px;
  height: 700px;
  overflow: auto;
}
</style>
