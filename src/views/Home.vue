<template>
  <div class="home">
    <span class="iconfont icon-menu" @click="openMenu"></span>
    <c-header/>
    <c-list/>
    <transition name="side">
      <side-bar @hideMenu="closeMenu" @openLogin="goLogin" @openCreate="goCreate" @openMessage="goMessage" v-show="showSide"/>
    </transition>
    <transition name="login">
      <c-login @hideLogin="closeLogin" v-show="showLogin"/>
    </transition>
    <transition name="right">
      <c-message @hideMessage="closeMessage" v-show="showMessage"/>
    </transition>
    <transition name="right">
      <create-topic @hideCreate="closeCreate" v-show="showCreateTopic"/>
    </transition>
  </div>
</template>

<script>
import cHeader from '../components/Header/Header'
import cList from '../components/TopicsList/TopicsList'
import sideBar from '../components/SideBar/SideBar'
import cLogin from '../components/Login/Login'
import createTopic from '../components/CreateTopic/CreateTopic'
import cMessage from '../components/Message/Message'
import { mapState } from 'vuex'
export default {
  components: {
    cHeader,
    cList,
    sideBar,
    cLogin,
    cMessage,
    createTopic
  },
  data () {
    return {
      busy: false,
      showSide: false,
      showLogin: false,
      showCreateTopic: false,
      showMessage: false
    }
  },
  computed: {
    ...mapState(['tab', 'current', 'user'])
  },
  watch: {
    // 监听用户是否登录以关闭登录框
    user (n) {
      if (n.loginname) {
        this.showLogin = false
      }
    }
  },
  methods: {
    openMenu () {
      this.showSide = true
    },
    closeMenu () {
      this.showSide = false
    },
    goLogin () {
      this.showLogin = true
    },
    closeLogin () {
      this.showLogin = false
    },
    goCreate () {
      if (!this.user.id) {
        this.showLogin = true
        return
      }
      this.showCreateTopic = true
    },
    closeCreate () {
      this.showCreateTopic = false
    },
    goMessage () {
      if (!this.user.id) {
        this.showLogin = true
        return
      }
      this.showMessage = true
      this.$store.dispatch('getMessage', { accesstoken: this.user.accesstoken })
    },
    closeMessage () {
      this.showMessage = false
    }
  },
  mounted () {
    // 首次加载到首页，获取此数据
    this.$store.dispatch('firstGetTopics', { tab: this.tab, idx: this.current })
  }
}
</script>
<style lang="scss" scoped>
.home{
  .icon-menu{
    position: fixed;
    top: 20px;
    left: 40px;
    font-size: 50px;
    font-weight: 700;
    color: #ffffff;
    z-index: 20;
  }
}
.side-enter,
.side-leave-to{
  opacity: 0;
  transform: translateX(-100%);
}
.side-enter-to,
.side-leave{
  opacity: 1;
  transform: translateX(0);
}
.side-enter-active,
.side-leave-active{
  transition:all 0.5s;
}

.login-enter,
.login-leave-to{
  opacity: 0;
}
.login-enter-to,
.login-leave{
  opacity: 1;
}
.login-enter-active,
.login-leave-active{
    transition:all 0.5s;
}

.right-enter,
.right-leave-to{
  opacity: 0;
  transform: translateX(100%);
}
.right-enter-to,
.right-leave{
  opacity: 1;
   transform: translateX(0);
}
.right-enter-active,
.right-leave-active{
    transition:all 0.5s;
}

</style>
