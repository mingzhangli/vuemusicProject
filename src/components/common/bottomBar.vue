<template>
  <div class="container">
    <div class="music-info">
      <div class="img">
        <img :src="songinfoImg" />
      </div>
      <div class="introudce">
        <p class="title">{{ mname }}</p>
        <span>{{ author }}</span>
      </div>
    </div>
    <audio :src="murl" controls="controls" autoplay loop></audio>
    <i
      class="el-icon-s-fold"
      @click="drawer = true"
      style="font-size: 30px"
    ></i>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      :append-to-body="false"
      :modal="false"
      size="400px"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songinfoImg: require("../.././assets/img/user.png"),
      drawer: false,
      props: ["murl", "mpic", "mname", "author"],
    };
  },
  methods: {
    toSong() {
      this.$router.push({ name: "playSong" });
    },
  },
};
</script>

<style scoped >
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-top: 1px solid rgb(226, 223, 223);
}
.img img {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-left: 10px;
}
</style>
