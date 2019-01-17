export default {
  // 切换数据类型前，初始化state
  LOADING (state, { tab, idx }) {
    state.topicsList = []
    state.loading = true
    state.tab = tab
    state.current = idx
    state.page = 1
    state.showLoading = true
  },
  // 获取主题列表
  FIRST_GET_TOPICS (state, data) {
    state.topicsList = data
    state.loading = false
    // 如果本次请求数据长度小于20，说明无更多数据
    if (data.length < 20) {
      state.showLoadMore = false
    }
  },
  // 加载更多主题列表
  LOAD_MORE (state, data) {
    state.page = state.page + 1
    state.topicsList = state.topicsList.concat(data)
    // 如果本次请求数据长度小于20，说明无更多数据
    if (data.length < 20) {
      state.showLoadMore = false
    }
  },

  // 获取topic详情
  GET_TOPIC_DETAIL (state, data) {
    state.topicDetail = data
    state.showLoading = false
  }
}
