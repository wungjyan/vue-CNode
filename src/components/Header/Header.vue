<template>
  <div class="header">
    <div class="title">CNode社区</div>
    <div class="navbar">
      <span class="tab" :class="{active:index===current}" v-for="(item,index) in tabs" :key="index" @click="switchTab(item.query,index)">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      tabs: [
        {
          name: '首页',
          query: 'all'
        },
        {
          name: '精华',
          query: 'good'
        },
        {
          name: '分享',
          query: 'share'
        },
        {
          name: '问答',
          query: 'ask'
        },
        {
          name: '招聘',
          query: 'job'
        }
      ]
    }
  },
  computed: {
    ...mapState(['current', 'tab'])
  },
  methods: {
    switchTab (tab, idx) {
      this.$router.push('/')
      this.$store.dispatch('firstGetTopics', { tab, idx })
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 280px;
  background: #444444;
  color: #fff;
  overflow: hidden;
  .title{
    text-align: center;
    margin-top: 30px;
    font-size: 40px;
  }
  .navbar{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-around;
    font-size: 32px;
    .tab{
      position: relative;
      width: 20%;
      box-sizing: border-box;
      display: block;
      line-height: 90px;
      text-align: center;
    }
    .tab.active{
      font-size: 36px;
      font-weight: 700;
    }
    .tab.active::after{
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      display: block;
      width: 100%;
      height: 6px;
      background: #fff;
    }
  }
}
</style>
