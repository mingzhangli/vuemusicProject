<template>
  <div class="container">
    <div class="banner">
      <el-carousel :interval="4000" type="card" width="1000px" height="250px">
        <el-carousel-item v-for="item in banner" :key="item">
          <img
            :src="item.imageUrl"
            alt=""
            style="width: 480px; height: 250px"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="song-order">
      <h3>推荐歌单<i class="el-icon-arrow-right"></i></h3>
      <ul>
        <li v-for="(item, key) in recommendList" :key="key">
          <span class="track"
            ><i class="el-icon-caret-right"></i>
            {{ getplayCount(item.playCount) }}</span
          >
          <img :src="item.picUrl" alt="" style="width: 170px; height: 170px" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <div class="release">
      <h3>独家放送<i class="el-icon-arrow-right"></i></h3>
      <ul>
        <li v-for="(item, id) in exclusiveList" :key="id">
          <div>
            <img
              :src="item.picUrl"
              alt=""
              style="width: 300px; height: 110px"
            />
          </div>
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </div>
    <div class="latest">
      <h3>最新音乐<i class="el-icon-arrow-right"></i></h3>
      <ul>
        <li v-for="(item, id) in newSong" :key="id">
          <div>
            <img
              :src="item.picUrl"
              alt=""
              style="width: 170px; height: 170px"
            />
          </div>
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </div>
    <div class="MV">
      <h3>最新音乐<i class="el-icon-arrow-right"></i></h3>
      <ul>
        <li v-for="(item, id) in MV" :key="id">
          <div>
            <img
              :src="item.picUrl"
              alt=""
              style="width: 220px; height: 170px"
            />
          </div>
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [],
      recommendList: [],
      exclusiveList: [],
      newSong: [],
      MV: [],
    };
  },
  components: {},
  mounted() {
    this.$request({
      url: "/banner?type=0", //取首页个性推荐的轮播图
    }).then((success) => {
      this.banner = success.data.banners;
    });

    this.$request({
      url: "/personalized", //取首页个性推荐 推荐歌单
      params: {
        limit: 10,
      },
    })
      .then((res) => {
        this.recommendList = res.data.result; //
      })
      .catch((err) => {
        console.log(err);
      });

    this.$request({
      url: "personalized/privatecontent", //取首页 独家放送
    })
      .then((res) => {
        this.exclusiveList = res.data.result;
      })
      .catch((err) => {
        console.log(err);
      });

    this.$request({
      url: "/personalized/newsong",
    })
      .then((res) => {
        this.newSong = res.data.result;
      })
      .catch((err) => {
        console.log(err);
      });

    this.$request({
      url: "/personalized/mv",
    }).then((res) => {
      this.MV = res.data.result;
    });
  },
  methods: {
    getplayCount(num) {
      return num / 10000 > 0 ? parseInt(num / 10000) + "万" : num;
    },
  },
};
</script>

<style scoped >
.container {
  padding-left: 20px;
}

img {
  border-radius: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.song-order {
  margin-top: 20px;
}
.song-order img {
  border-radius: 15px;
}
.song-order ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.song-order ul li {
  position: relative;
  margin-top: 20px;
  height: 230px;
  width: 170px;
  overflow: hidden;
}
.track {
  position: absolute;
  top: 5px;
  right: 10px;
  color: whitesmoke;
}
.release {
  margin-top: 20px;
}
.release ul {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.release ul li {
  width: 300px;
  height: 150px;
}
.latest {
  margin-top: 20px;
}
.latest ul {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.latest ul li {
  width: 170px;
  height: 210px;
  margin-bottom: 10px;
}
.MV ul {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
}
.MV ul li {
  width: 230px;
}
</style>