<template>
  <div>
    <div v-for="(i, index) in desc" :key="index">
      <h3>{{ i.ti }}</h3>
      <p>{{ i.txt }}</p>
    </div>
    <div class="no" v-if="desc.length == 0">暂无数据</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: [],
    };
  },
  mounted() {
    this.$request({
      url: "/artist/desc",
      params: {
        id: this.$route.query.id,
      },
    }).then((success) => {
      this.desc = success.data.introduction;
    });
  },
};
</script>

<style scoped>
h6 {
  margin: 10px 0;
}
.no,
p {
  color: gray;
  line-height: 2.5em;
}
</style>