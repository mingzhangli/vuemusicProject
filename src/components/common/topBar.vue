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
      <div :class="{ topList: isShow }">
        <p class="hot-song">热搜榜单</p>
        <ul>
          <li v-for="(item, key) in searchList" :key="key">
            <span class="pm">{{ key + 1 }}</span>
            {{ item.searchWord }}
          </li>
        </ul>
      </div>
    </div>
    <div class="right-logo">
      <el-dropdown @command="handleCommand">
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
      isShow: false,
      searchList: [],
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
    search() {
      console.log("bbb");
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
