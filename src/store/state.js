export default {
  user: {}, // 登录用户信息
  loginFail: false, // 验证失败
  current: 0, // 当前选中的下标
  tab: 'all', // 当前加载类型
  page: 1, // 用于加载更多数据的基数page
  loading: false, // 是否正在请求
  topicsList: [], // 对应分类下的数据列表
  showLoadMore: true, // 是否显示底部加载更多loading

  topicDetail: {}, // 主题详情
  isCollect: false, // 是否收藏了主题，单独作为一个状态，便于收藏或取消
  showLoading: true, // 控制主题页加载时显示loading
  replyStatus: false // 评论或点赞变化的状态
}
