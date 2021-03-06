import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'amfe-flexible'
import router from './router'
import moment from 'moment'
import './assets/iconfont.css'
import infiniteScroll from 'vue-infinite-scroll'
import Toast from './components/Toast/'
Vue.use(infiniteScroll)
Vue.use(Toast)
Vue.config.productionTip = false

Vue.prototype.formatTime = time => moment(time).startOf('minute').fromNow().replace(/hours?/, '小时').replace('ago', '前').replace(/days?/, '天').replace(/minutes?/, '分钟').replace(/\ban?/, '1').replace(/months?/, '个月').replace(/\byears?/, '年').replace(/\s/g, '').replace('fewseconds', '分钟')
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
