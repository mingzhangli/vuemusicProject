<template>
  <div class="container">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="音乐标题" width="180">
      </el-table-column>
      <el-table-column prop="artists[0].name" label="歌手" width="180">
      </el-table-column>
      <el-table-column prop="album.name" label="专辑"> </el-table-column>
      <el-table-column prop="duration" label="时长"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  components: {},
  computed: {
    getTime() {
      return function (dateTime) {
        let min = Math.floor(dateTime / 60000);
        let sec = Math.floor((dateTime - min * 60000) / 1000);
        sec < 10 ? "0" + sec : sec;
        return `${min}:${sec}`;
      };
    },
  },
  mounted() {
    console.log(this.getTime(10000000));
    this.$request({
      url: "/search",
      params: {
        keywords: this.$route.query.keywords,
      },
    }).then((res) => {
      this.tableData = res.data.result.songs;
      this.tableData.forEach((item) => {
        item.duration = this.getTime(item.duration);
      });
    });

    this.$EventBus.$on("search", () => {
      this.$request({
        url: "/search",
        params: {
          keywords: this.$route.query.keywords,
        },
      }).then((res) => {
        res.foreach((item) => {
          item.duration = this.getTime(item.duration);
        });
      });
    });
  },
};
</script>

<style scoped >
</style>
