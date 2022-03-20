<template>
  <div class="container">
    <div class="item-left"></div>
    <div class="song-list">
      <h3>热门50首</h3>
      <ul>
        <li
          v-for="(item, index) in songlist"
          :key="item.id"
          @click="sendId(item.id)"
        >
          <span>{{ index + 1 }}</span>
          <span>{{ item.name }}</span>
        </li>
        <li v-if="show"><span class="all" @click="getAll">查看全部</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all: [],
      songlist: [],
      show: true,
    };
  },
  props: ["tableList"],
  components: {},
  methods: {
    getAll() {
      this.songlist = this.all;
      this.show = false;
    },
    sendId(id) {
      this.$store.state.mid = id;
      this.$EventBus.$emit("play");
    },
  },
  mounted() {
    this.$request({
      url: "/artists",
      params: {
        id: this.$route.query.id,
      },
    }).then((res) => {
      this.all = res.data.hotSongs;
      console.log(this.all);
      this.songlist = this.all.slice(0, 10);
    });
  },
};
</script>

<style scoped >
.container {
  display: flex;
}
.item-left {
  width: 200px;
  height: 200px;
  background: #7fffd4;
  margin-right: 80px;
}
.song-list ul li {
  padding-left: 20px;
  line-height: 40px;
  height: 40px;
  width: 650px;
}
.song-list ul li:nth-child(2n) {
  background: #f6f6f7;
}
.song-list ul li:hover {
  background: #f6f6f7;
}
.song-list ul li span {
  margin-left: 10px;
}
.all {
  display: block;
  text-align: center;
}
</style>
