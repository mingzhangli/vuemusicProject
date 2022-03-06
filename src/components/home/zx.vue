<template>
  <div class="container">
    <div class="newsongClassify">
      <div
        class="xgsd"
        :class="{ isShow: showCurrent('/Home/zx/xgsd') }"
        @click="toLink('/Home/zx/xgsd')"
      >
        <span>新歌速递</span>
      </div>
      <div
        class="xdsj"
        :class="{ isShow: showCurrent('/Home/zx/xdsj') }"
        @click="toLink('/Home/zx/xdsj')"
      >
        <span>新碟上架</span>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentShow: false,
    };
  },
  components: {},
  methods: {
    showCurrent(url) {
      return this.$route.path == url;
    },
    toLink(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style scoped >
.container {
  padding: 10px 0 40px 20px;
}
.newsongClassify {
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 15px;
  display: flex;
  width: 220px;
  height: 30px;
}
.xgsd {
  width: 110px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
}
.xdsj {
  width: 110px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
}
.isShow {
  background: #ccc;
  color: white;
}
</style>
