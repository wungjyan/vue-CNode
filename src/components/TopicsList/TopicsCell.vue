<template>
  <div class="cell">
    <div class="avatar">
      <img :src="article.author.avatar_url">
    </div>
    <div class="title">
      <div class="line1">
        <span v-if="article.top" class="put_top">置顶</span>
        <span v-else-if="article.good" class="put_good">精华</span>
        <span v-else class="put_tab">{{getTab(article.tab)}}</span>
        <div class="article_title">{{article.title}}</div>
      </div>
      <div class="line2">
          <span class="read">
            <span class="count_of_replies">{{article.reply_count}}</span>
            <span class="count_seperator">/</span>
            <span class="count_of_visits">{{article.visit_count}}</span>
          </span>
          <span class="time">{{formatTime(article.last_reply_at)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    getTab (tab) {
      switch (tab) {
        case 'share':
          return '分享'
        case 'ask':
          return '问答'
        case 'job':
          return '招聘'
        default:
          return '分享'
      }
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.cell {
  display: flex;
  align-items: center;
  width: 100%;
  height: 140px;
  border-bottom: 1px solid #eee;
  .avatar {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 90px;
      height: 90px;
    }
  }
  .title {
    width: 80%;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    color: #333;
    .line1 {
      display: flex;
      flex-wrap: nowrap;
      white-space: nowrap;
      word-break: keep-all;
      .put_top,
      .put_good {
        display: block;
        background: #80bd01;
        padding: 4px 8px;
        border-radius: 6px;
        color: #fff;
        font-size: 24px;
      }
      .put_tab {
        display: block;
        background-color: #e5e5e5;
        color: #999;
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 24px;
      }
      .article_title {
        font-size: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 10px;
      }
    }
    .line2 {
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      color: #333;
      padding: 0 20px 0 80px;
      .count_of_replies{
        color: #9e78c0;
      }
      .count_of_visits{
        color: #b4b4b4;
      }
      .time{
        color: #778087;
      }
    }
  }
}
</style>
