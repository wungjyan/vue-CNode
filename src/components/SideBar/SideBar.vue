<template>
  <div class="side_bar">
    <div class="menu">
      <div class="user_info">
        <div v-if="user.avatar_url" class="avatar">
          <img :src="user.avatar_url">
        </div>
        <div v-if="user.loginname" class="name">{{user.loginname}}</div>
        <div v-if="!user.loginname" class="login_btn" @click="handleLogin">点击登录</div>
      </div>
      <div class="nav">
        <div class="nav_item" @click="handleMessage">
          <i class="iconfont icon-xiaoxi"></i>我的消息
        </div>
        <div class="nav_item" @click="handleCreate">
          <i class="iconfont icon-xinjian"></i>新建主题
        </div>
        <div class="nav_item" @click="handleLoginOut">
          <i class="iconfont icon-tuichu"></i>退出登录
        </div>
        <div class="nav_item" @click="handleAbout">
          <i class="iconfont icon-about"></i>关于
        </div>
      </div>
    </div>
    <div class="mask" @click="handleClose"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { local } from '../../config/util.js'
export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    handleClose () {
      this.$emit('hideMenu')
    },
    handleLogin () {
      this.$emit('openLogin')
    },
    handleCreate () {
      this.$emit('openCreate')
    },
    handleMessage () {
      this.$emit('openMessage')
    },
    handleLoginOut () {
      // 退出登录 => 清空本地信息 => 清空vuex数据
      local.clear()
      this.$store.dispatch('loginOut')
    },
    handleAbout () {
      this.$emit('openAbout')
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.side_bar{
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  .menu{
    width: 55%;
    height: 100%;
    background: #ffffff;
    box-shadow: 0 0 12px grey;
    .user_info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 280px;
      border-bottom: 1px solid #666;
      .avatar{
        width: 150px;
        height: 150px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .name{
        margin-top: 10px;
        font-size: 32px;
        font-weight: 700;
      }
      .login_btn{
        font-size: 40px;
        color: #333;
        text-decoration: underline;
      }
    }
    .nav{
      .nav_item{
        font-size: 30px;
        padding: 30px 0 30px 110px;
        border-bottom: 1px solid #eee;
        i{
          font-size: 32px;
          margin-right: 10px;
        }
      }
    }
  }
  .mask{
    width: 45%;
    height: 100%;
  }
}
</style>
