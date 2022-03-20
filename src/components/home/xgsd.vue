<template>
  <div class="container">
    <div class="classify">
      <ul>
        <li @click="getList(null)">全部</li>
        <li @click="getList(0)">华语</li>
        <li @click="getList(96)">欧美</li>
        <li @click="getList(16)">韩国</li>
        <li @click="getList(8)">日本</li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in songList" :key="item.id" @click="sendId(item.id)">
          <img :src="item.album.picUrl" alt="" width="80px" height="80px" />
          <div class="song-name">
            <p>{{ item.name }}</p>
            <span v-if="item.alias.length" class="origin">{{
              item.alias[0]
            }}</span>
          </div>

          <div class="author">{{ item.artists[0].name }}</div>
          <div class="time">{{ getTime(item.duration) }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songList: [],
    };
  },
  components: {},
  methods: {
    sendId(id) {
      this.$store.state.mid = id;
      this.$EventBus.$emit("play");
    },

    getTime(dateTime) {
      let min = Math.floor(dateTime / 60000);
      let sec = Math.floor((dateTime - min * 60000) / 1000);
      sec < 10 ? "0" + sec : sec;
      return `${min}:${sec}`;
    },
    getList(url) {
      if (url) {
        this.$request({
          url: "/top/song",
          params: {
            type: url,
          },
        }).then((res) => {
          this.songList = res.data.data;
        });
      }
    },
  },
  mounted() {
    this.$request({
      url: "/top/song",
    }).then((res) => {
      this.songList = res.data.data;
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
.content ul li {
  display: flex;
  align-items: center;
  height: 100px;
}
.content ul li:hover {
  background: rgb(230, 228, 228);
}
.content ul li img {
  margin-right: 10px;
}
.content ul li:nth-child(2n) {
  background: rgb(230, 228, 228);
}
.song-name {
  margin-right: 20px;
  width: 300px;
}
.origin {
  color: rgb(165, 163, 161);
  width: 120px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 40px;
}
.song-name {
  display: flex;
  justify-content: space-between;
}
.author {
  width: 400px;
}
.time {
  font-size: 12px;
  color: gray;
}
</style>
