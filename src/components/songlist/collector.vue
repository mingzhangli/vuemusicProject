<template>
  <div class="container">
    <ul>
      <li v-for="item in subscribers" :key="item.avatarImgId">
        <img :src="item.avatarUrl" />
        <span>{{ item.nickname }}</span>
      </li>
    </ul>
    <div class="no" v-if="subscribers.length == 0">暂无收藏者</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subscribers: [],
    };
  },
  components: {},
  mounted() {
    this.$request({
      url: "/playlist/subscribers",
      params: {
        id: this.$route.query.id,
      },
    }).then((res) => {
      this.subscribers = res.data.subscribers;
      console.log(this.subscribers);
    });
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
ul li {
  width: 400px;
  height: 100px;
}
ul li img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 50px;
  vertical-align: middle;
}
.no {
  color: gray;
  line-height: 2.5em;
}
</style>
