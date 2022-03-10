<template>
  <div class="container">
    <div class="content">
      <div class="header-img">
        <img :src="info.coverImgUrl" />
      </div>
      <div class="info">
        <h2><span class="type">歌单</span>{{ info.name }}</h2>
        <div class="creator">
          <img :src="info.creator.avatarUrl" />
          <div class="username">
            <p><span class="user">用户：</span>{{ info.creator.nickname }}</p>
          </div>
          <div class="create-time">
            <p>
              <span class="time">注册时间：</span>{{ getTime(info.createTime) }}
            </p>
          </div>
        </div>
        <div class="button">
          <span class="play"><i class="el-icon-caret-right"></i>播放全部</span>
          <span class="edit">收藏</span>
          <span class="edit">分享</span>
          <span class="edit">下载全部</span>
        </div>
        <div class="introduce">
          简历：<span class="dsec">{{ info.description }}</span>
        </div>
        <div class="count">
          <span>歌曲：{{ info.trackCount }}首</span>
          <span>播放：{{ info.playCount }}次</span>
        </div>
      </div>
    </div>
    <div class="bar">
      <div class="bar-left">
        <span @click="toLink('gdpage')" :class="{ isShow: show('/songlist') }"
          >歌曲列表</span
        >
        <span @click="toLink('commet')">评论</span>
        <span>收藏者</span>
      </div>
    </div>
    <router-view :tableList="tableList"></router-view>
  </div>
</template>




<script>
export default {
  data() {
    return {
      info: {},
      tableList: [],
    };
  },
  components: {},
  methods: {
    toLink(url) {
      this.$router.push({ name: url, query: { id: this.$route.query.id } });
    },
    show(url) {
      return this.$route.path.includes(url);
    },
    getTime(time) {
      let date = new Date(time);
      let Y = date.getFullYear();
      let M = this.formatZero(date.getMonth() + 1);
      let D = this.formatZero(date.getDay());
      let H = this.formatZero(date.getHours());
      let m = this.formatZero(date.getMinutes());
      let s = this.formatZero(date.getSeconds());
      return `${Y}-${M}-${D}  ${H}:${m}:${s}`;
    },
    formatZero(time) {
      return time < 10 ? "0" + time : time;
    },
  },
  mounted() {
    this.$request({
      url: "/playlist/detail",
      params: {
        id: this.$route.query.id,
      },
      withCredentials: true,
    }).then((res) => {
      this.info = res.data.playlist;
      this.tableList = res.data.playlist.tracks;
      console.log(this.tableList);
    });
  },
};
</script>

<style scoped >
.content {
  margin-top: 15px;
  display: flex;
}
.header-img img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
}
.info {
  margin-left: 20px;
}
.type {
  font-size: 16px;
  color: #ec4141;
  padding: 5px;
  border: 1px solid #ec4141;
  border-radius: 10px;
  margin: 0 10px 0 0;
}
.creator {
  margin: 20px 0 20px 0px;
  display: flex;
}
.creator img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.username {
  height: 50px;
  line-height: 50px;
  margin: 0 15px 0 15px;
}
.create-time {
  height: 50px;
  line-height: 50px;
}
.user {
  color: #ec4141;
}
.time {
  color: #ec4141;
}
.play {
  display: inline-block;
  line-height: 40px;
  width: 150px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
  background: #ec4141;
  font-size: 20px;
  color: white;
}
.edit {
  display: inline-block;
  line-height: 40px;
  width: 100px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
  font-size: 20px;
  color: rgb(0, 0, 0);
  margin-left: 10px;
  border: 1px solid gray;
}
.introduce {
  margin: 10px 0 10px 0;
}
.count span {
  margin-right: 10px;
}
.bar {
  margin: 20px 0 20px 0;
}
.bar span {
  margin-right: 15px;
}
.isShow {
  border-bottom: #ec4141;
}
</style>
