<template>
  <div class="container">
    <div class="content">
      <ul>
        <li v-for="item in list" :key="item.fee">
          <img :src="item.coverImgUrl" alt="" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
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
        type: 1000,
        keywords: this.$route.query.keywords,
      },
    }).then((res) => {
      this.list = res.data.result.playlists;
      console.log(this.list);
    });
  },
};
</script>

<style scoped>
.content ul li {
  display: flex;
  height: 80px;
  line-height: 80px;
}
.content ul li:nth-child(2n) {
  background: #f6f6f7;
}
.content ul li:hover {
  background: #f6f6f7;
}
.content ul li img {
  margin-top: 10px;
  margin-right: 50px;
  width: 60px;
  height: 60px;
}
</style>
