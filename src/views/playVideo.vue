<template>
  <div class="playbox">
    <div class="videoInfo">
      <h3><i class="el-icon-arrow-left"></i> 视频详情</h3>
      <video :src="vdata.url" controls autoplay></video>
      <div class="author">
        <img :src="vdata.authorIcon" alt="" />
        <span>{{ vdata.authorName }}</span>
      </div>
      <div class="info">
        <h2>{{ vdata.title }}</h2>
        <span class="time">发布：{{ getDate(vdata.publishTime) }}</span>
        <span class="playcount">播放：{{ vdata.playTime }}次</span>
        <div class="buttons">
          <span>
            <i class="el-icon-thumb"></i> 点赞({{ vdata.goodCount }})</span
          >
          <span>
            <i class="el-icon-folder-add"></i> 收藏({{
              vdata.collectCount
            }})</span
          >
          <span>
            <i class="el-icon-share"></i> 分享({{ vdata.shareCount }})</span
          >
        </div>
      </div>
      <div class="commentbox">
        <el-input type="textarea" :rows="4" v-model="textarea"> </el-input>
        <span class="comment">评论</span>
      </div>
      <div class="commentlist">
        <h4>精彩评论</h4>
        <ul>
          <li v-for="i in vdata.comment" :key="i.commentId">
            <div class="icon">
              <img :src="i.user.avatarUrl" alt="" />
            </div>
            <div class="detail">
              <span>{{ i.user.nickname }}：</span>
              <span class="content">{{ i.content }}</span>
              <div class="rep">
                <ul>
                  <li v-for="k in i.beReplied" :key="k.beRepliedCommentId">
                    <span>@{{ k.user.nickname }}：</span>
                    <span class="content">{{ k.content }}</span>
                  </li>
                </ul>
                <div class="bottom">
                  <span class="time">{{ getDate(i.time) }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="videoList">
      <h3>相关推荐</h3>
      <ul>
        <li v-for="i in vdata.related" :key="i.vid" @click="toVideo(i.vid)">
          <div class="vimg">
            <img :src="i.coverUrl" alt="" />
            <span class="count">
              <i class="el-icon-caret-right"></i
              >{{ getPlayCount(i.playTime) }}</span
            >
            <span class="vtime">{{ getTime(i.durationms) }}</span>
          </div>
          <div class="vtitle">
            <span>{{ i.title }}</span>
            <span class="vauthor">by{{ i.creator[0].userName }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vdata: {
        url: "",
        authorName: "",
        authorIcon: "",
        title: "",
        publishTime: "",
        playCount: "",
        goodCount: "",
        collectCount: "",
        shareCount: "",
        comment: [],
        related: [],
      },
      textarea: "",
    };
  },
  methods: {
    toVideo(id) {
      this.$router.push({ name: "playVideo", query: { vid: id } });
      this.getVideodata();
    },
    getVideodata() {
      this.$request({
        url: "/video/url",
        params: {
          id: this.$route.query.vid,
        },
      }).then((success) => {
        this.vdata.url = success.data.urls[0].url;
      });
      this.$request({
        url: "/video/detail",
        params: {
          id: this.$route.query.vid,
        },
      }).then((success) => {
        this.vdata.authorName = success.data.data.creator.nickname;
        this.vdata.authorIcon = success.data.data.creator.avatarUrl;
        this.vdata.title = success.data.data.title;
        this.vdata.playTime = success.data.data.playTime;
        this.vdata.goodCount = success.data.data.praisedCount;
        this.vdata.collectCount = success.data.data.subscribeCount;
        this.vdata.shareCount = success.data.data.shareCount;
        this.vdata.publishTime = success.data.data.publishTime;
      });

      this.$request({
        url: "/comment/video",
        params: {
          id: this.$route.query.vid,
        },
      }).then((success) => {
        this.vdata.comment = success.data.comments;
      });

      this.$request({
        url: "/related/allvideo",
        params: {
          id: this.$route.query.vid,
        },
      }).then((success) => {
        this.vdata.related = success.data.data;
      });
    },
    getMVdata() {
      this.$request({
        url: "/mv/url",
        params: {
          id: this.$route.query.vid,
        },
      }).then((success) => {
        this.vdata.url = success.data.data.url;
      });

      this.$request({
        url: "/mv/detail",
        params: {
          mvid: this.$route.query.vid,
        },
      }).then((success) => {
        this.vdata.authorName = success.data.data.artistName;
        this.vdata.title = success.data.data.name;
        this.vdata.publishTime = success.data.data.publishTime;
        this.vdata.playTime = success.data.data.playCount;
        this.vdata.goodCount = success.data.data.praisedCount;
        this.vdata.shareCount = success.data.data.shareCount;
        this.vdata.collectCount = success.data.data.subCount;
      });

      this.$request({
        url: "/comment/mv",
        params: {
          id: this.$route.query.vid,
        },
      }).then((success) => {
        this.vdata.comment = success.data.comments;
      });

      this.$request({
        url: "/related/allvideo",
        params: {
          id: this.$route.query.vid,
        },
      }).then((success) => {
        this.vdata.related = success.data.data;
      });
    },
  },
  computed: {
    getDate() {
      return function (t) {
        let date = new Date(t);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        if (d < 10) {
          d = "0" + d;
        }
        if (m < 10) {
          m = "0" + m;
        }
        return y + "-" + m + "-" + d;
      };
    },
    getTime() {
      return function (time) {
        let min = Math.floor(time / 60000).toString()[1]
          ? Math.floor(time / 60000).toString()
          : "0" + Math.floor(time / 60000).toString();
        let sec = Math.floor(time % 60000)
          .toString()
          .slice(0, 2);
        return min + ":" + sec;
      };
    },
    getPlayCount() {
      return function (count) {
        if (count >= 10000) {
          count = parseInt(count / 10000);
          return count + "万";
        } else {
          return count;
        }
      };
    },
  },
  mounted() {
    if (isNaN(Number(this.$route.query.vid))) {
      this.getVideodata();
    } else {
      this.getMVdata();
    }
  },
};
</script>

<style scoped>
h3 {
  margin-bottom: 20px;
}
h2 {
  margin-bottom: 20px;
}
.playbox {
  display: flex;
}
.videoInfo {
  width: 600px;
}
video {
  width: 600px;
  height: 300px;
  background-color: black;
}
.author {
  margin-top: 20px;
}
.author img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  vertical-align: middle;
  margin-right: 10px;
}
.info {
  margin-top: 20px;
}
.info span {
  color: gray;
  font-size: 14px;
}
.time {
  margin-right: 20px;
}
.buttons {
  margin-top: 20px;
}
.info .buttons span {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 18px;
  margin-right: 10px;
}
.comment {
  margin-top: 10px;
  display: inline-block;
  width: 60px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
  line-height: 30px;
  text-align: center;
}
.commentlist {
  margin-top: 40px;
}
.commentlist ul li {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #f6f6f6;
}
.commentbox {
  margin-top: 20px;
}
.icon {
  margin-right: 10px;
}
.icon img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.detail {
  flex: 1;
}
.detail .content {
  font-size: 14px;
  color: gray;
}
.rep ul li {
  border: none;
  padding: 0 10px;
  background-color: #f6f6f7;
  line-height: 30px;
}
.bottom {
  color: gray;
  font-size: 14px;
  margin-top: 10px;
}
.videoList {
  padding-left: 20px;
}
.videoList ul li {
  display: flex;

  margin-bottom: 20px;
}
.videoList ul li img {
  width: 160px;
  border-radius: 5px;
  margin-right: 10px;
}
.vtitle {
  position: relative;
}
.vimg {
  position: relative;
}
.vauthor {
  position: absolute;
  bottom: 0;
  left: 10px;
  color: gray;
}
.vtime {
  position: absolute;
  right: 15px;
  bottom: 10px;
  color: white;
  font-size: 14px;
}
.count {
  position: absolute;
  right: 20px;
  top: 5px;
  color: white;
  font-size: 14px;
}
</style>