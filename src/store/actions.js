import { get } from '../config/request'

export default {
  // 每一次切换类型都是第一次请求对应数据
  firstGetTopics ({ commit }, { tab, idx }) {
    console.log('切换:', { tab, idx })
    // 通知正在请求
    commit('LOADING', { tab, idx })
    // 获取主题列表，更新数据
    get('/topics', { tab, page: 1, limit: 20 }).then(res => {
      if (res.data.success) {
        commit('FIRST_GET_TOPICS', res.data.data)
      }
    })
  },

  // 加载更多数据
  loadMore ({ commit }, payload) {
    get('/topics', { tab: payload.tab, page: payload.page + 1, limit: 20 }).then(res => {
      if (res.data.success) {
        commit('LOAD_MORE', res.data.data)
      }
    })
  },

  // 获取主题详情
  getTopicDetail ({ commit }, id) {
    get('/topic/' + id).then(res => {
      console.log(res)
      if (res.data.success) {
        commit('GET_TOPIC_DETAIL', res.data.data)
      }
    })
  }
}
