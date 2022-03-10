<template>
  <div class="container">
    <el-table
      :data="tableList"
      stripe
      style="width: 100%"
      @row-dblclick="transferMusic"
    >
      <el-table-column prop="name" label="音乐标题" width="180">
      </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" width="180">
      </el-table-column>
      <el-table-column prop="al.name" label="专辑"> </el-table-column>
      <el-table-column prop="getTime(dt)" label="时长"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: ["tableList"],

  mounted() {
    console.log(this.tableData);
  },
  methods: {
    getTime() {
      return function (dateTime) {
        let min = Math.floor(dateTime / 60000);
        let sec = Math.floor((dateTime - min * 60000) / 1000);
        sec < 10 ? "0" + sec : sec;
        return `${min}:${sec}`;
      };
    },
    transferMusic(item) {
      this.$store.state.mid = item.id;
      this.$EventBus.$emit("play");
    },
  },
};
</script>

<style scoped >
</style>
