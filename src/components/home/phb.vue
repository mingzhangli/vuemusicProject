<template>
  <div class="container">
    <div class="top-list">
      <ul>
        <li
          v-for="(item, index) in paylistLists"
          :key="index"
          @click="togd(item.id)"
        >
          <img :src="item.coverImgUrl" alt="" width="170px" height="170px" />
          <p>{{ item.name }}</p>
          <span>{{ getCount(item.playCount) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paylistLists: [],
    };
  },
  components: {},
  methods: {
    async init() {
      //异步函数
      const res = await this.$request({
        url: "/toplist",
      });
      this.paylistLists = res.data.list;
      console.log(this.paylistLists);
    },
    getCount(num) {
      return num / 10000 > 0 ? parseInt(num / 10000) + "万" : num;
    },
    togd(id) {
      this.$router.push({ name: "gdpage", query: { id: id } });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped >
.container {
  padding: 20px 0 80px 20px;
}
.top-list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.top-list ul li {
  position: relative;
  text-align: center;
  width: 170px;
  height: 200px;
}
.top-list ul li span {
  position: absolute;
  top: 2px;
  right: 5px;
  color: aliceblue;
}
</style>
