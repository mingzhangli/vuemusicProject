<template>
  <div class="container">
    <div class="left-song">
      <ul>
        <li :class="{ active: isActive() }">发现音乐</li>
        <li>博客</li>
        <li>视频</li>
        <li>朋友</li>
        <li>直播</li>
        <li>私人FM</li>
        <li class="title">我的音乐</li>
        <li><img src="../../assets/img/音乐.png" alt="" />本地音乐</li>
        <li><img src="../../assets/img/下载.png" alt="" />下载管理</li>
        <li><img src="../../assets/img/历史播放.png" alt="" />最近播放</li>
        <li><img src="../../assets/img/云.png" alt="" />我的音乐云盘</li>
        <li><img src="../../assets/img/用户.png" alt="" />我的收藏</li>
      </ul>
      <div class="login">
        <el-button type="primary" @click="login" v-if="!hadlogin"
          >登录</el-button
        >
        <el-button type="danger" @click="loginOut" v-else>退出</el-button>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <h2>请扫描下方二维码登录</h2>
          <div class="img">
            <img :src="code" />
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="user-songlist" v-if="hadlogin">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="我的歌单" name="1">
            <ul>
              <li v-for="item in gdlist" :key="item.id" @click="togd(item.id)">
                {{ item.name }}
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      dialogVisible: false,
      hadlogin: false,
      uesr: {},
      gdlist: [],
    };
  },
  components: {},
  methods: {
    togd(id) {
      this.$router.push({ name: "gdpage", query: { id: id } });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    handleChange(val) {
      console.log(val);
    },
    initData() {
      this.$request({
        url: "/user/playlist",
        params: {
          uid: this.$store.state.userId,
        },
        withCredentials: true,
      }).then((success) => {
        if (success.data.code == 200) {
          this.hadlogin = true;
          this.gdlist = success.data.playlist;
          console.log(this.gdlist);
        }
      });
    },
    isActive() {
      return this.$route.path == "/Home";
    },
    setCookie(cname) {
      let date = new Date();
      date.setTime(date.getTime() - 10000);
      document.cookie = cname + "=a; expires=" + date.toGMTString();
    },

    async checkStatus(key) {
      const res = await this.$request({
        url: `/login/qr/check?key=${key}&timerstamp=${Date.now()}`,
        withCredentials: true, //关键
      });
      console.log(res.data.code);
      return res.data;
    },

    async getLoginStatus() {
      const res = await this.$request({
        url: `/login/status?timerstamp=${Date.now()}`,
        withCredentials: true, //关键
      });

      if (res.data.data.profile) {
        this.user = res.data.data.profile;
        localStorage.setItem("userId", this.user.userId); //设置本地cookie
      }
    },

    async login() {
      this.dialogVisible = true;
      let timer;
      const res = await this.$request({
        url: `/login/qr/key?timerstamp=${Date.now()}`,
        withCredentials: true, //关键
      });
      const key = res.data.data.unikey;
      const res2 = await this.$request({
        url: `/login/qr/create?key=${key}&qrimg=true&timerstamp=${Date.now()}`,
        withCredentials: true, //关键
      });
      this.code = res2.data.data.qrimg;
      timer = setInterval(async () => {
        const statusRes = await this.checkStatus(key);
        console.log(statusRes);
        if (statusRes.code === 800) {
          alert("二维码已经过期");
          clearInterval(timer);
        }
        if (statusRes.code === 803) {
          this.dialogVisible = false;
          clearInterval(timer);
          alert("登录成功");
          this.getLoginStatus();
          location.reload(); //页面重新刷新
        }
      }, 5000);
    },
    loginOut() {
      this.$request({
        url: "/logout",
      }).then((res) => {
        console.log(res.data);
        this.setCookie("MUSIC_U");
        localStorage.setItem("userId", "");
        this.hadlogin = false;
        this.$router.push({ name: "gx" });
        console.log(this.hadlogin);
      });
    },
  },
  mounted() {
    this.initData();
  },
};
</script>

<style scoped >
.container {
  width: 200px;
  height: 1000px;
  padding-top: 10px;
  border-right: 1px solid rgb(226, 223, 223);
  border-bottom: 1px solid rgb(226, 223, 223);
}
.active {
  font-weight: bold;
  font-size: 20px;
  background-color: #f6f6f7;
}
li {
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  margin-left: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 5px;
  font-size: 17px;
  margin-bottom: 2px;
}
li:hover {
  background: #f6f6f7;
}
li img {
  vertical-align: middle;
  margin-right: 5px;
}
.title {
  color: #999999;
  font-weight: 100;
}
.title:hover {
  background: white;
}
.login {
  margin-top: 20px;
  text-align: center;
}

.user-songlist ul li {
  color: rgb(116, 116, 116);
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
