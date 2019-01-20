<template>
  <div class="reply">
    <div class="top_info">
      <div class="user_info">
        <img :src="info.author.avatar_url">
        <span class="name">{{info.author.loginname}}</span>
        <span class="site">{{len-idx}}楼•{{formatTime(info.create_at)}}</span>
      </div>
      <div class="user_action">
        <i class="iconfont icon-dianzan" @click="up"></i>{{info.ups.length}}
      </div>
    </div>
    <div class="reply_content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    idx: {
      type: Number,
      default: 0
    },
    len: {
      type: Number,
      default: 0
    },
    token: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    up () {
      this.$store.dispatch('up', { accesstoken: this.token, id: this.info.id })
    }
  }
}
</script>
<style lang="scss" scoped>
.reply{
  padding: 20px;
  border-top: 1px solid #eee;
  margin-bottom: 20px;
  .top_info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user_info{
      font-size: 24px;
      display: flex;
      align-items: flex-start;
      img{
        width: 60px;
        height: 60px;
        border-radius: 4px;
      }
      .name{
        color: #333;
        margin: 0 10px;
      }
      .site{
        color: #08c;
      }
    }
    .user_action{
      color: gray;
      font-size: 30px;
      i{
        font-size: 30px;
        margin-right: 8px;
      }
    }
  }
}
</style>
