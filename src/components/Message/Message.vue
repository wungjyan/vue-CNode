<template>
  <div class="message">
    <div class="header">
      <i class="iconfont icon-back" @click="goBack"></i>
      <h1>我的消息</h1>
    </div>
    <div class="hasnot_read msg">
      <div class="title">未读消息</div>
      <div class="list" v-if="!hasNotRead.length">无消息</div>
      <div class="list" v-else>
        <p v-for="(item,index) in hasNotRead" :key="index">
          <span v-if="item.type==='reply'">
            {{item.author.loginname}} 回复了你的话题 <a href="javascript:;" @click="gotoTopic('n',item.topic.id,item.id)">{{item.topic.title}}</a>
          </span>
        </p>
      </div>
    </div>
    <div class="has_read msg">
      <div class="title">已读消息</div>
      <div class="list" v-if="!hasRead.length">无消息</div>
      <div class="list" v-else>
        <p v-for="(item,index) in hasRead" :key="index">
          <span v-if="item.type==='reply'">
            {{item.author.loginname}} 回复了你的话题 <a href="javascript:;" @click="gotoTopic('y',item.topic.id)">{{item.topic.title}}</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['user', 'hasNotRead', 'hasRead'])
  },
  methods: {
    goBack () {
      this.$emit('hideMessage')
    },
    gotoTopic (key, id, msg_id) { // eslint-disable-line
      if (key === 'n') {
        this.$store.dispatch('markOne', { id: msg_id, accesstoken: this.user.accesstoken })
      }
      this.$router.push({ name: 'topic', params: { id } })
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.message{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #ffffff;
  z-index: 20;
  .header{
    position: relative;
    width: 100%;
    height: 100px;
    background: #444444;
    color: #ffffff;
    i{
      position: absolute;
      left: 10px;
      top: 30px;
      width: 40px;
      height: 40px;
      font-size: 40px;
    }
    h1{
      height: 100%;
      line-height: 100px;
      font-size: 40px;
      text-align: center;
    }
  }
  .msg{
    margin:0 10px 20px 10px;
    font-size: 28px;
    .title{
      padding: 10px;
      background: #f6f6f6;
      color: #333;
    }
    .list{
      background: #fff;
      padding: 10px;
    }
  }
}
</style>
