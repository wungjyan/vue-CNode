export default {
  // 正在请求数据
  LOADING (state) {
    state.loading = true
  },
  // 获取主题列表
  GETTOPICS (state, data) {
    state.topicsList = data
    state.loading = false
  }
}
