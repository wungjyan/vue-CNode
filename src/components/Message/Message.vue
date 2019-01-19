<template>
  <div class="message">
    <div class="header">
      <i class="iconfont icon-back" @click="goBack"></i>
      <h1>我的消息</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {},
  methods: {
    goBack () {
      this.$emit('hideMessage')
    }
  },
  mounted () {}
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
}
</style>
