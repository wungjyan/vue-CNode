<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { local } from './config/util.js'
export default {
  name: 'app',
  mounted () {
    // 每次加载时检查本地是否有登录信息
    const user = local.get()

    if (user.id) {
      this.$store.dispatch('initUser', user)
    }
  }
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
}
.markdown-text{
  img{
    width: 95%;
  }
  a{
    width: 100%;
    word-wrap: break-word;
  }
  p{
    font-size: 28px;
    color: #333;
  }
  code,pre{
    display: block;
    overflow: auto;
    background: #f4f4f4;
    padding: 5px 10px;
    border: 1px solid #eee;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
}
#app {
  width: 100%;
  font-family: "PingFangSC-Regular","Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
