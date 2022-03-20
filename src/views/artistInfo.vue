<template>
  <div>
    <div class="container">
      <div class="top">
        <div class="singer">
          <img :src="artistImg.cover" />
        </div>
        <div class="singer-right">
          <h2>{{ artistImg.name }}</h2>
          <div class="buttons">
            <span> <i class="el-icon-folder-add"></i> 收藏</span
            ><span> <i class="el-icon-user"></i> 个人主页</span>
          </div>
          <div class="nums">
            <span>单曲数:{{ artistImg.musicSize }}</span>
            <span>专辑数:{{ artistImg.albumSize }}</span>
            <span>MV数:{{ artistImg.mvSize }}</span>
          </div>
        </div>
      </div>
      <div class="bar">
        <span @click="toLink('album')" :class="{ isShow: show('album') }"
          >专辑</span
        >
        <span @click="toLink('mv')" :class="{ isShow: show('mv') }">MV</span>
        <span @click="toLink('Infos')" :class="{ isShow: show('Infos') }"
          >歌手详情</span
        >
        <span @click="toLink('similar')" :class="{ isShow: show('similar') }"
          >相似歌手</span
        >
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artistImg: {},
    };
  },
  components: {},
  mounted() {
    this.$request({
      url: "/artist/detail",
      params: {
        id: this.$route.query.id,
      },
    }).then((res) => {
      this.artistImg = res.data.data.artist;
    });
  },
  methods: {
    toLink(url) {
      this.$router.push({ name: url, query: { id: this.$route.query.id } });
    },
    show(url) {
      return this.$route.path.includes(url);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px 0 30px 15px;
}
.top {
  display: flex;
}

.singer img {
  width: 200px;
  height: 160px;
}
.singer-right {
  margin-left: 20px;
}
.buttons span {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 18px;
  margin: 10px 15px 15px 0;
}
.nums span {
  margin-right: 15px;
}
.bar {
  margin-top: 30px;
}
.bar span {
  margin-right: 10px;
}
.isShow {
  border-bottom: 3px solid #ec4141;
}
</style>

