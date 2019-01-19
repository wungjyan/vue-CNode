<template>
  <div class="create_topic">
    <div class="header">
      <i class="iconfont icon-back" @click="goBack"></i>
      <h1>发布主题</h1>
    </div>
    <div class="select">
      <span>选择板块</span>
      <select v-model="tab">
        <option disabled value="">请选择</option>
        <option value="ask">问答</option>
        <option value="share">分享</option>
        <option value="job">招聘</option>
        <option value="dev">客户端测试</option>
      </select>
    </div>
    <div class="input_title">
      <input v-model="title" type="text" placeholder="请输入标题">
    </div>
    <div class="input_msg">
      <textarea v-model="content" placeholder="请输入内容"></textarea>
    </div>
    <div class="commit" @click="commit">发布</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data () {
    return {
      tab: '',
      title: '',
      content: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    commit () {
      if (this.tab && this.title && this.content) {
        this.$store.dispatch('newTopic', { tab: this.tab, title: this.title, content: this.content, accesstoken: this.user.accesstoken })
      }
    },
    goBack () {
      this.$emit('hideCreate')
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.create_topic{
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
  .select{
    text-align: center;
    >span{
      font-size: 32px;
      margin-right: 10px;
    }
  }
  .input_title{
    width: 90%;
    margin: 20px auto;
    padding: 10px 0;
    border-bottom: 1px solid #444;
    input{
      width: 100%;
      padding: 10px 0;
      font-size: 36px;
    }
  }
  .input_msg{
    width: 90%;
    border: 1px solid #444;
    padding: 10px;
    margin: 0 auto 30px;
    textarea{
      width: 100%;
      height: 600px;
      resize: none;
    }
  }
  .commit{
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
    background: #444;
    font-size: 40px;
    color: #ffffff;
    text-align: center;
    &:active{
      background: #666;
    }
  }
}
</style>
