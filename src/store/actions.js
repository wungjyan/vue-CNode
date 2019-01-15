import { get } from '../config/request'

export default {
  getTopics ({ commit }, tab) {
    // 通知正在请求
    commit('LOADING')
    // 获取主题列表，更新数据
    get('/topics', { tab, page: 1 }).then(res => {
      if (res.data.success) {
        commit('GETTOPICS', res.data.data)
      }
    })
  }
}
