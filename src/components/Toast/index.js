import Toast from './Toast.vue'

let myToast = {}

myToast.install = (Vue, options) => {
  // 默认配置
  let opt = {
    duration: 2000
  }
  // 全局配置覆盖默认配置
  for (let property in options) {
    opt[property] = options[property]
  }
  Vue.prototype.$toast = (msg, config) => {
    let options = JSON.parse(JSON.stringify(opt))
    if (typeof config === 'object') {
      // 局部配置覆盖默认配置
      for (let property in config) {
        options[property] = config[property]
      }
    } else if (typeof config === 'string') {
      options.duration = config
    }

    let MyToast = Vue.extend(Toast)
    let instance = new MyToast().$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    instance.showToast = true
    instance.msg = msg
    setTimeout(() => {
      instance.showToast = false
      document.body.removeChild(instance.$el)
    }, options.duration)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(myToast)
}
export default myToast
