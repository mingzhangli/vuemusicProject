<template>
  <div class="container">
    <div class="content">
      <ul>
        <li v-for="item in songList" :key="item.id">
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
    getTime(dateTime) {
      let min = Math.floor(dateTime / 60000);
      let sec = Math.floor((dateTime - min * 60000) / 1000);
      sec < 10 ? "0" + sec : sec;
      return `${min}:${sec}`;
    },
  },
  mounted() {
    this.$request({
      url: "/top/song",
    }).then((res) => {
      this.songList = res.data.data;
      console.log(this.songList);
    });
  },
};
</script>

<style scoped >
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
.time {
  display: flex;
  justify-content: flex-start;
}
</style>
