<template>
  <div class="about">
    <h1>
      Vue.js 开发的移动端CNode社区
    </h1>
    <div class="row">
      <span>源码地址: </span>
      <a href="https://github.com/wungjyan/vue-CNode">GitHub</a>
    </div>
    <div class="row">
      <span>我的博客: </span>
      <a href="https://wungjyan.github.io/">Blog</a>
    </div>
    <div class="row">
      <span class="warn">【声明】</span>
      <span>本项目所使用 API 均由 CNode 社区提供，感谢！项目仅供学习交流使用，如有疑问可联系作者：<a href="mailto:wungjyan@gmail.com">wungjyan@gmail.com</a></span>
    </div>
    <span class="back" @click="goBack">点此返回</span>
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$emit('hideAbout')
    }
  }
}
</script>
<style lang="scss" scoped>
.about{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #ffffff;
  z-index: 20;
  h1{
    font-size: 40px;
    padding: 20px 0;
    text-align: center;
  }
  .row{
    margin: 20px 0 20px 20px;
    font-size: 30px;
    .warn{
      font-weight: 600;
    }
  }
  .back{
    padding: 10px 20px;
    background: #b7b7b7;
    color: #333;
    font-size: 28px;
    margin-left: 20px;
  }
}
</style>
