import { get, post } from '../config/request'

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
  getTopicDetail ({ commit }, { accesstoken, id }) {
    if (accesstoken) {
      // 登录状态下获取
      get('/topic/' + id, { accesstoken }).then(res => {
        console.log('登陆过:', res)
        if (res.data.success) {
          commit('GET_TOPIC_DETAIL', res.data.data)
        }
      })
    } else {
      // 未登录状态下获取
      get('/topic/' + id).then(res => {
        console.log('未登陆过:', res)
        if (res.data.success) {
          commit('GET_TOPIC_DETAIL', res.data.data)
        }
      })
    }
  },

  // 验证登录
  validaLogin ({ commit }, accesstoken) {
    post('/accesstoken', { accesstoken }).then(res => {
      console.log(res)
      if (res.data.success) {
        const { avatar_url, id, loginname } = res.data // eslint-disable-line
        commit('VALIDA_LOGIN', { avatar_url, id, loginname, accesstoken })
      }
    }).catch(() => {
      commit('VALIDA_FAIL')
    })
  },

  // 初始化时从本地读取用户信息存进state
  initUser ({ commit }, data) {
    commit('INIT_USER', data)
  },

  // 新建主题
  newTopic ({ commit }, data) {
    post('/topics', data).then(res => {
      console.log(res)
      if (res.data.success) {
        this.$toast('发布成功')
      }
    }).catch(() => {

    })
  },

  // 收藏主题
  collectTopic({ commit }, { accesstoken, topic_id }){ // eslint-disable-line
    post('/topic_collect/collect', { accesstoken, topic_id }).then(res => {
      console.log(res)
      if (res.data.success) {
        commit('COLLECT_TOPIC')
      }
    })
  },

  // 取消收藏
  cancelTopic ({ commit }, { accesstoken, topic_id }) { // eslint-disable-line
    post('/topic_collect/de_collect', { accesstoken, topic_id }).then(res => {
      console.log(res)
      if (res.data.success) {
        commit('CANCEL_TOPIC')
      }
    })
  }
}
