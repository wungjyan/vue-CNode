<template>
  <div class="reply">
    <div class="top_info">
      <div class="user_info">
        <img :src="info.author.avatar_url">
        <span class="name">{{info.author.loginname}}</span>
        <span class="site">{{idx+1}}楼•{{formatTime(info.create_at)}}</span>
      </div>
      <div class="user_action">
        <i class="iconfont icon-dianzan"></i>{{info.ups.length}}
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
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  methods: {},
  mounted () {}
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
