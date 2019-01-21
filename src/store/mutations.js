import { local } from '../config/util'
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
    state.isCollect = data.is_collect
    state.showLoading = false
    state.replyStatus = false
  },

  // 验证登录
  VALIDA_LOGIN (state, data) {
    state.user = data
    // 存到本地
    local.set(data)
  },

  // 验证登录失败
  VALIDA_FAIL (state) {
    state.loginFail = true
  },

  // 初始化用户信息
  INIT_USER (state, data) {
    state.user = data
  },

  // 收藏主题
  COLLECT_TOPIC (state) {
    state.isCollect = true
  },

  // 取消主题
  CANCEL_TOPIC (state) {
    state.isCollect = false
  },

  // 评论成功
  REPLY_SUCCESS (state) {
    state.replyStatus = true
  },
  // 点赞成功
  UP_SUCCESS (state) {
    state.replyStatus = true
  },

  // 成功获取消息
  GET_MSG_SUCCESS (state, data) {
    state.hasNotRead = data.hasnot_read_messages
    state.hasRead = data.has_read_messages
  }
}
