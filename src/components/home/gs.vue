<template>
  <div class="container">
    <div class="artist-classify">
      <ul>
        <li>全部</li>
        <li @click="getartistList(null)">语种</li>
        <li @click="getartistList(1)">华语</li>
        <li @click="getartistList(2)">欧美</li>
        <li @click="getartistList(3)">日本</li>
        <li @click="getartistList(4)">韩国</li>
      </ul>
    </div>
    <div class="artist-content">
      <ul>
        <li v-for="(item, id) in artistList" :key="id">
          <img :src="item.img1v1Url" alt="" width="170px" height="170px" />
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
      artistList: [],
    };
  },
  components: {},
  methods: {
    getartistList(type) {
      if (type) {
        this.$request({
          url: "/toplist/artist",
          params: {
            type: type,
          },
        }).then((res) => {
          this.artistList = res.data.list.artists;
        });
      }
    },
  },
  mounted() {
    this.$request({
      url: "/toplist/artist",
    }).then((res) => {
      this.artistList = res.data.list.artists;
    });
  },
};
</script>

<style scoped >
.container {
  padding: 10px 0 50px 20px;
}
.artist-classify ul {
  display: flex;
}
.artist-classify ul li {
  width: 70px;
  text-align: center;
  border-right: 1px solid rgb(146, 146, 146);
}
.artist-content {
  margin-top: 20px;
}
.artist-content ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.artist-content ul li {
  width: 170px;
  height: 190px;
}
.artist-content ul li p {
  text-align: center;
}
</style>
