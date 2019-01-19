<template>
  <div class="topic_detail">
    <c-header/>
    <div class="content_wrap">
      <c-loading v-if="showLoading"/>
      <div v-else class="content">
        <div class="topic_header">
          <div class="title">
            <span v-if="topicDetail.top" class="put_top">置顶</span>
            <span v-if="topicDetail.good" class="put_good">精华</span>
            <span class="full_title">{{topicDetail.title}}</span>
          </div>
          <div class="changes">
            <span>发布于 {{formatTime(topicDetail.create_at)}} </span>
            <span>作者 {{topicDetail.author.loginname}} </span>
            <span>{{topicDetail.visit_count}} 次浏览 </span>
            <span>来自 {{getTab(topicDetail.tab)}}</span>
          </div>
          <div class="btn" v-if="user.accesstoken">
            <span v-if="!isCollect" class="span_collect" @click="collect">收藏</span>
            <span v-else class="span_cancel" @click="cancel">取消收藏</span>
          </div>
        </div>
        <div class="topic_main" v-html="topicDetail.content"></div>
        <div class="reply_header">
            {{topicDetail.reply_count}}回复
        </div>
        <c-reply v-for="(item,index) in topicDetail.replies" :key="item.id" :info="item" :idx="index"/>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import cLoading from '../components/Loading/Loading'
import cHeader from '../components/Header/Header'
import cReply from '../components/Reply/Reply'
export default {
  components: {
    cLoading,
    cHeader,
    cReply
  },
  data () {
    return {
      topic_id: ''
    }
  },
  computed: {
    ...mapState(['showLoading', 'topicDetail', 'user', 'isCollect'])
  },
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
    },
    collect () {
      this.$store.dispatch('collectTopic', { accesstoken: this.user.accesstoken, topic_id: this.topic_id })
    },
    cancel () {
      this.$store.dispatch('cancelTopic', { accesstoken: this.user.accesstoken, topic_id: this.topic_id })
    }
  },
  mounted () {
    let id = this.$route.params.id
    this.topic_id = id
    let accesstoken = this.user.accesstoken ? this.user.accesstoken : ''
    this.$store.dispatch('getTopicDetail', { accesstoken, id })
  }
}
</script>
<style lang="scss" scoped>
.topic_detail{
  padding:10px;
  background-color: rgba(0,0,0,0.2);
  min-height: 100vh;
  .content_wrap{
    margin-top: 280px;
    .topic_header{
      padding: 10px;
      border-bottom: 1px solid #838383;
      .btn{
        text-align: right;
        span{
          padding: 6px 20px;
          color: #fff;
          font-size: 28px;
          border-radius: 6px;
          &.span_collect{
            background-color: #80bd01;
          }
          &.span_cancel{
            background-color: #909090;
          }
        }
      }
    }
    .content{
      background: #fff;
      .title{
        .put_top,
        .put_good {
          display: inline-block;
          background: #80bd01;
          padding: 4px 8px;
          border-radius: 6px;
          color: #fff;
          font-size: 32px;
          margin-right: 10px;
        }
        .full_title{
          font-size: 40px;
          font-weight: 700;
        }
      }
      .changes{
        font-size: 24px;
        color: #838383;
        >span::before{
          content: "•";
        }
      }
      .topic_main{
        padding: 10px;
        font-size: 30px;
        color: #333;
      }
      .reply_header{
        color: #444;
        font-size: 28px;
        padding: 10px;
        background-color: #f6f6f6;
      }
    }
  }
}
</style>
