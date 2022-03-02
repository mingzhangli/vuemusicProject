<template>
  <div class="container">
    <div class="top">
      <div class="top-img">
        <img
          src="http://p1.music.126.net/lOdqEbPagBUGf547BjmCMQ==/109951164840594920.jpg"
          alt=""
          width="130px"
          height="150px"
        />
      </div>
      <div class="top-info">
        <div class="bestsongList"><p>精品歌单</p></div>
        <div>
          <p>{{ heighQuality.name }}</p>
        </div>
        <div>
          <p>{{ heighQuality.copywriter }}</p>
        </div>
      </div>
    </div>
    <div class="songList">
      <div class="allSong">
        <p @click="isShow">全部歌单<i class="el-icon-arrow-right"></i></p>
        <div class="song-classify" :class="{ isShow: showsongList }">
          <div class="title">音乐分类</div>
          <ul class="clasify-left">
            <li v-for="(item, encodeId) in all" :key="encodeId">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="clasify-right">
        <ul>
          <li v-for="(Item, index) in tags" :key="index">{{ Item.name }}</li>
        </ul>
      </div>
    </div>
    <div class="content-list">
      <ul>
        <li v-for="item in list" :key="item.id + Math.random()">
          <img :src="item.coverImgUrl" alt="" width="170px" height="170px" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100"
          @current-change="update"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heighQuality: [],
      tags: [],
      all: [],
      list: [],
      showsongList: true,
    };
  },
  components: {},
  mounted() {
    this.$request({
      url: "/top/playlist/highquality?limit=1",
    }).then((res) => {
      this.heighQuality = res.data.playlists[0];
      console.log(res);
    });

    this.$request({
      url: "/playlist/catlist",
    }).then((success) => {
      this.tags = success.data.sub.slice(0, 10);
      this.all = success.data.sub;
      console.log(this.tags);
    });

    this.$request({
      url: "/top/playlist?limit=40",
    }).then((success) => {
      this.list = success.data.playlists;
      console.log(this.list);
    });
  },
  methods: {
    isShow() {
      this.showsongList = !this.showsongList;
    },
    update(page) {
      this.$request({
        url: "/top/playlist?limit=40&offset=" + 40 * (page - 1),
      }).then((res) => {
        this.list = res.data.playlists;
        console.log(this.list);
      });
    },
  },
};
</script>

<style scoped >
.container {
  padding-left: 20px;
}
.top {
  display: flex;
  align-items: center;
  height: 200px;
  border-radius: 10px;
  padding: 0 20px;
  background: linear-gradient(
    to right,
    rgb(207, 133, 35),
    rgba(16, 16, 212, 0.342)
  );
}
.bestsongList {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
  border: 1px solid #ffb700;
  color: #ffb700;
}
.top-info {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin-left: 25px;
  height: 150px;
}
.songList {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.allSong {
  position: relative;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
  border: 1px solid rgb(161, 157, 157);
}
.title {
  padding: 10px 0 10px 20px;
  text-align: left;
  border-bottom: 1px solid rgb(145, 143, 143);
}
.song-classify {
  position: absolute;
  top: 35px;
  width: 900px;
  height: 440px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgb(197, 194, 194);
}
.allSong ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;
}
.allSong ul li {
  width: 80px;
  height: 40px;
}
.allSong ul li:hover {
  color: #fd7c26;
}
.isShow {
  display: none;
}
.clasify-left {
  display: flex;
  justify-content: space-between;
}
.clasify-right ul {
  display: flex;
  justify-content: space-between;
}
.clasify-right ul li {
  width: 80px;
  height: 20px;
  border-radius: 10px;
  text-align: center;
}
.clasify-right ul li:hover {
  color: #ec4141;
  background: #f0dede;
}
.content-list {
  margin: 20px 0 50px 0;
}
.content-list ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content-list ul li {
  width: 180px;
  height: 240px;
}
.pagination {
  margin: 0 auto;
}
</style>
