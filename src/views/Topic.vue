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
            <div class="row1">
              <span>{{topicDetail.reply_count}}回复</span>
              <span @click="handleAddReply">添加评论</span>
            </div>
            <transition name="input">
              <div class="row2" v-show="showInput">
                <input placeholder="输入内容" v-model="reply"/>
                <span class="commit_reply" @click="commitReply">{{action}}</span>
                <span class="cancel_reply" @click="showInput = false">取消</span>
              </div>
            </transition>
        </div>
        <c-reply v-for="(item,index) in replies" :key="item.id" :info="item" :idx="index" :len="replies.length" :token="user.accesstoken"/>
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
      topic_id: '',
      showInput: false,
      reply: '',
      action: '回复'
    }
  },
  computed: {
    ...mapState(['showLoading', 'topicDetail', 'user', 'isCollect', 'replyStatus']),
    replies () {
      const replies = this.topicDetail.replies
      return replies.reverse()
    }
  },
  watch: {
    replyStatus () {
      this.action = '回复'
      this.$store.dispatch('getTopicDetail', { accesstoken: this.user.accesstoken, id: this.topic_id })
    }
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
    },
    handleAddReply () {
      if (!this.user.id) {
        this.$toast('评论前请登录')
        return
      }
      this.showInput = true
    },
    commitReply () {
      if (!this.reply) {
        this.$toast('回复内容不能为空')
        return
      }
      this.action = '回复中...'
      this.$store.dispatch('commitReply', { accesstoken: this.user.accesstoken, content: this.reply, id: this.topic_id })
      this.reply = ''
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
        font-size: 28px;
        padding: 10px;
        background-color: #f6f6f6;
        margin-top: 20px;
        .row1{
          display: flex;
          justify-content: space-between;
        }
        .row2{
          margin-top: 10px;
          input{
            width: 100%;
            padding: 10px 0;
          }
          span{
            display: inline-block;
            margin-top: 6px;
            padding: 4px 20px;
            color: #fff;
            border-radius: 6px;
            margin-right: 10px;
            &.commit_reply{
              background: #80bd01;
            }
            &.cancel_reply{
              background-color: #909090;
            }
          }
        }
      }
    }
  }
}
.input-enter,
.input-leave-to{
  opacity: 0;
  transform: translateY(-100%);
}
.input-enter-to,
.input-leave{
  opacity: 1;
  transform: translateY(0);
}
.input-enter-active,
.input-leave-active{
    transition:all 0.4s;
}
</style>
