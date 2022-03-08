<template>
  <div class="container">
    <div class="head">
      <ul>
        <li @click="getSong" :class="{ isShow: show('/song') }">单曲</li>
        <li @click="getArtist" :class="{ isShow: show('/artist') }">歌手</li>
        <li>专辑</li>
        <li @click="getVideo" :class="{ isShow: show('/video') }">视频</li>
        <li @click="getsongList" :class="{ isShow: show('/gcs') }">歌单</li>
        <li>歌词</li>
        <li>博客</li>
        <li>用户</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    show(url) {
      return this.$route.path.includes(url);
    },
    getSong() {
      this.$router.push({
        name: "song",
        query: { keywords: this.$route.query.keywords },
      });
    },
    getArtist() {
      this.$router.push({
        name: "artist",
        query: { keywords: this.$route.query.keywords },
      });
    },
    getVideo() {
      this.$router.push({
        name: "video",
        query: { keywords: this.$route.query.keywords },
      });
    },
    getsongList() {
      this.$router.push({
        name: "gcs",
        query: { keywords: this.$route.query.keywords },
      });
    },
  },
};
</script>

<style scoped >
.container {
  padding: 0 20px 40px 20px;
}
.head {
  margin-bottom: 20px;
}
.head ul {
  display: flex;
}
.head ul li {
  width: 60px;
  height: 30px;
  text-align: center;
}
.isShow {
  border-bottom: 3px solid #ec4141;
}
</style>
