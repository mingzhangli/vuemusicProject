<template>
  <div class="container">
    <div class="left-song">
      <ul>
        <li :class="{ active: isActive() }">发现音乐</li>
        <li>博客</li>
        <li>视频</li>
        <li>朋友</li>
        <li>直播</li>
        <li>私人FM</li>
        <li class="title">我的音乐</li>
        <li><img src="../../assets/img/音乐.png" alt="" />本地音乐</li>
        <li><img src="../../assets/img/下载.png" alt="" />下载管理</li>
        <li><img src="../../assets/img/历史播放.png" alt="" />最近播放</li>
        <li><img src="../../assets/img/云.png" alt="" />我的音乐云盘</li>
        <li><img src="../../assets/img/用户.png" alt="" />我的收藏</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    isActive() {
      return this.$route.path == "/Home";
    },
  },
};
</script>

<style scoped >
.container {
  width: 200px;
  height: 100vh;
  padding-top: 10px;
  border-right: 1px solid rgb(226, 223, 223);
  border-bottom: 1px solid rgb(226, 223, 223);
}
.active {
  font-weight: bold;
  font-size: 20px;
  background-color: #f6f6f7;
}
li {
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  margin-left: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 5px;
  font-size: 17px;
  margin-bottom: 2px;
}
li:hover {
  background: #f6f6f7;
}
li img {
  vertical-align: middle;
  margin-right: 5px;
}
.title {
  color: #999999;
  font-weight: 100;
}
.title:hover {
  background: white;
}
</style>
