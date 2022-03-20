<template>
  <div class="container">
    <div class="artist">
      <ul>
        <li v-for="item in list" :key="item.fee">
          <img :src="item.img1v1Url" alt="" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <div class="no" v-if="list.length == 0">很抱歉，未能找到相关的歌手</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  components: {},
  mounted() {
    this.$request({
      url: "/search",
      params: {
        keywords: this.$route.query.keywords,
        type: 100,
      },
    }).then((res) => {
      this.list = res.data.result.artists;
      console.log(this.list);
    });
  },
};
</script>

<style scoped >
.artist ul li {
  display: flex;
  height: 80px;
  line-height: 80px;
}
.artist ul li:nth-child(2n) {
  background: #f6f6f7;
}
.artist ul li:hover {
  background: #f6f6f7;
}
img {
  margin-right: 20px;
  width: 60px;
  height: 60px;
  margin-top: 10px;
}
</style>
