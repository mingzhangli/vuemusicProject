<template>
  <div class="container">
    <div class="head">
      <ul>
        <li>单曲</li>
        <li>歌手</li>
        <li>专辑</li>
        <li>视频</li>
        <li>歌单</li>
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
}
</style>
