<template>
  <div class="container">
    <div class="textarea">
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="30"
        :rows="5"
      >
      </el-input>
    </div>
    <div class="commet">
      <h3>精彩评论</h3>
      <ul>
        <li v-for="item in commet" :key="item.commentId">
          <div class="icon">
            <img :src="item.user.avatarUrl" />
          </div>
          <div class="detail">
            <div class="detail-top">
              <span>{{ item.user.nickname }}：</span>
              <span class="content-font">{{ item.content }}</span>
            </div>
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
      commet: [],
    };
  },
  components: {},
  mounted() {
    this.$request({
      url: "/comment/playlist",
      params: {
        id: this.$route.query.id,
      },
    }).then((res) => {
      this.commet = res.data.comments;
      console.log(this.commet);
      console.log(res);
    });
  },
};
</script>

<style scoped >
.textarea {
  margin: 20px 0 20px 0;
}
.commet ul li {
  display: flex;
  height: 70px;
}
.icon {
  margin-right: 10px;
}
.icon img {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 50%;
}
.detail {
  height: 50px;
  line-height: 50px;
}
.content-font {
  font-size: 15px;
  color: gray;
}
</style>
