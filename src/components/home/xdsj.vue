<template>
  <div class="container">
    <div class="classify">
      <ul>
        <li @click="getList('ALL')">全部</li>
        <li @click="getList('ZH')">华语</li>
        <li @click="getList('EA')">欧美</li>
        <li @click="getList('KR')">韩国</li>
        <li @click="getList('JP')">日本</li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in albumList" :key="item.id" @click="sendId(id)">
          <img :src="item.blurPicUrl" alt="" width="150px" height="150px" />
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
      albumList: [],
    };
  },
  components: {},
  methods: {
    sendId(id) {
      this.$store.state.mid = id;
      this.$EventBus.$emit("play");
    },
    getList(url) {
      this.$request({
        url: "/album/new",
        params: {
          area: url,
        },
      }).then((res) => {
        this.albumList = res.data.albums;
      });
    },
  },
  mounted() {
    this.$request({
      url: "/album/new",
    }).then((res) => {
      this.albumList = res.data.albums;
    });
  },
};
</script>

<style scoped >
.classify ul {
  margin-top: 10px;
  display: flex;
}
.classify ul li {
  width: 70px;
  height: 30px;
  text-align: center;
}
.content ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content ul li {
  width: 170px;
  height: 200px;
}
.content ul li p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
