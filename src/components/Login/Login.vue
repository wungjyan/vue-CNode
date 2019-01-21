<template>
  <div class="login_wrap" @click="handleClose($event)">
    <div class="login_box">
      <div class="input">
        <input type="text" v-model="token" placeholder="请输入Access Token">
      </div>
      <div class="btn" @click="login">验证登录</div>
      <div class="fail" v-show="loginFail">验证失败，请刷新token重试</div>
      <div class="tip">
        <p>登录后可以体验完整功能</p>
        <p>Access Token 可在CNode登录后，设置里面拿到</p>
        <p>API 来自官方，不用担心隐私</p>
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
      token: ''
    }
  },
  computed: {
    ...mapState(['loginFail'])
  },
  methods: {
    handleClose (e) {
      if (e.target.getAttribute('class') === 'login_wrap') {
        this.$emit('hideLogin')
      }
    },
    login () {
      if (this.token) {
        this.$store.dispatch('validaLogin', this.token)
      } else {
        this.$toast('输入不能为空')
      }
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.login_wrap{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  z-index: 20;
  .login_box{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 90%;
    padding: 20px;
    background: #ffffff;
    .input{
      border-bottom: 1px solid #444;
      padding: 6px;
      input{
        width: 80%;
        padding: 10px 0;
        font-size: 40px;
      }
    }
    .btn{
      padding: 10px;
      font-size: 36px;
      border-radius: 6px;
      background: #444;
      color: #ffffff;
      text-align: center;
      margin-top: 30px;
      &:active{
        background: #666;
      }
    }
    .fail{
      font-size: 24px;
      color: red;
    }
    .tip{
      margin-top: 30px;
      p{
        font-size: 24px;
        color: #666;
      }
    }
  }
}
</style>
