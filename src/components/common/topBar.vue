<template>
  <div class="container">
    <div class="top-logo"></div>
    <div class="top-search">
      <el-input
        v-model="input"
        placeholder="搜索"
        prefix-icon="el-icon-search"
        @change="search"
        @focus="select"
        @blur="notShow"
        class="search-change"
      ></el-input>
      <div class="topList" :class="{ show: isShow }">
        <p class="hot-song">热搜榜单</p>
        <ul>
          <li
            class="toplist-show"
            v-for="(item, index) in searchList"
            :key="item.Score"
          >
            <span class="pm">{{ index + 1 }}</span>
            {{ item.searchWord }}
          </li>
        </ul>
      </div>
    </div>
    <div class="right-logo">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: require("../../assets/img/user.png"),
      isShow: true,
      searchList: [],
      input: "",
    };
  },
  methods: {
    select() {
      this.isShow = !this.isShow;
      this.$request({
        url: "/search/hot/detail",
      }).then((res) => {
        this.searchList = res.data.data;
      });
    },
    search(key) {
      if (!key) {
        this.$router.push({ name: "song", query: { keywords: this.input } });
        this.$EventBus.$on("search");
      } else {
        this.$router.push({ name: "song", query: { keywords: key } });
        this.$EventBus.$on("search");
      }
    },
    notShow() {
      this.isShow = !this.isShow;
    },
  },
  components: {},
};
</script>

<style scoped >
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ec4141;
}
.top-logo {
  height: 66px;
  width: 180px;
  background: url("../../assets/img/topbar.png");
}
.search-change {
  border-radius: 17.5px;
}
.top-search {
  position: relative;
}
.topList {
  position: absolute;
  z-index: 999;
  width: 400px;
  height: 500px;
  padding: 20px 0;
  left: -50%;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  overflow: auto;
}
.show {
  display: none;
}
.topList ul {
  margin-top: 20px;
}
.topList ul li {
  display: flex;
  padding-left: 20px;
  line-height: 50px;
  height: 50px;
}
.topList ul li span {
  margin-right: 10px;
}
.topList ul li:hover {
  background-color: #f6f6f7;
}
.right-logo img {
  margin-right: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
}
.hot-song {
  padding: 0 20px;
}
</style>
