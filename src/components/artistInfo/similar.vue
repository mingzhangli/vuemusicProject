<template>
  <div>
    <ul>
      <li v-for="i in list" :key="i.id" @click="toArtist(i.id)">
        <div><img :src="i.img1v1Url" alt="" /></div>
        <div class="name">{{ i.name }}</div>
      </li>
    </ul>
    <div class="no" v-if="list.length == 0">暂无数据</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    toArtist(id) {
      this.$router.push({ name: "zhuanji", query: { id: id } });
      this.$emit("toArtist");
    },
  },
  mounted() {
    this.$request({
      url: "/simi/artist",
      params: {
        id: this.$route.query.id,
      },
    }).then((success) => {
      this.list = success.data.artists;
    });
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul li {
  width: 180px;
  margin-bottom: 20px;
}
img {
  width: 180px;
  border-radius: 10px;
}
.name {
  padding: 10px 0;
}
.no {
  color: gray;
  line-height: 2.5em;
}
</style>