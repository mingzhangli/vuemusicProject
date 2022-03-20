<template>
  <div class="container">
    <div class="title">
      <span>根据你的红心收藏为你推荐更多的宝藏歌曲</span>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, id) in collectList" :key="id" @click="togd(item.id)">
          <img :src="item.picUrl" alt="" style="width: 170px; height: 170px" />
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
      collectList: [],
    };
  },
  components: {},
  methods: {
    togd(id) {
      this.$router.push({ name: "gdpage", query: { id: id } });
    },
  },
  mounted() {
    this.$request({
      url: "/personalized?limit=20",
      withCredentials: true,
    }).then((res) => {
      this.collectList = res.data.result;
    });
  },
};
</script>

<style scoped >
.container {
  padding-left: 20px;
}
.title {
  margin-top: 15px;
}
.content ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content ul li {
  margin-top: 20px;
  width: 180px;
  height: 220px;
}
</style>
