<template>
  <div class="container">
    <div class="content">
      <ul>
        <li v-for="item in videoList" :key="item.vid" @click="toLink(item.vid)">
          <img :src="item.coverUrl" />
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoList: [],
    };
  },
  components: {},
  methods: {
    toLink(id) {
      this.$router.push({ name: "playVideo", query: { vid: id } });
    },
  },
  mounted() {
    this.$request({
      url: "/search",
      params: {
        keywords: this.$route.query.keywords,
        type: 1014,
      },
    }).then((res) => {
      this.videoList = res.data.result.videos;
      console.log(this.videoList);
    });
  },
};
</script>

<style scoped >
.content ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.content ul li {
  width: 250px;
  height: 200px;
}
.content ul li img {
  width: 250px;
  height: 150px;
}
</style>
