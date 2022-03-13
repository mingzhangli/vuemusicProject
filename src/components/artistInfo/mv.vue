<template>
  <div class="container">
    <ul>
      <li v-for="item in list" :key="item.id">
        <div>
          <img :src="item.imgurl16v9" alt="" />
          <span class="count"
            ><i class="el-icon-caret-right"></i>
            {{ getPlayCount(item.playCount) }}</span
          >
          <span class="time">{{ getTime(item.duration) }}</span>
        </div>
        <div class="name">{{ item.name }}</div>
      </li>
    </ul>
    <div class="no" v-if="list.length == 0">暂无数据</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  components: {},
  mounted() {
    this.$request({
      url: "/artist/mv",
      params: {
        id: this.$route.query.id,
        limit: 40,
      },
    }).then((res) => {
      this.list = res.data.mvs;
      console.log(res.playCount);
    });
  },
  methods: {
    getPlayCount(count) {
      if (count >= 10000) {
        count = parseInt(count / 10000);
        return count + "万";
      } else {
        return count;
      }
    },
    getTime(dateTime) {
      let min = Math.floor(dateTime / 60000);
      let sec = Math.floor((dateTime - min * 60000) / 1000);
      sec < 10 ? "0" + sec : sec;
      return `${min}:${sec}`;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul li {
  position: relative;
  width: 230px;
  margin-bottom: 20px;
}
img {
  width: 235px;
  height: 132px;
  border-radius: 10px;
}
.name {
  padding: 10px 0;
}
.count {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
}
.time {
  position: absolute;
  right: 10px;
  top: 110px;
  color: white;
}
.no {
  color: gray;
  line-height: 2.5em;
}
</style>
