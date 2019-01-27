# vue 开发的 CNode社区
> vue-cli3 + vuex + vue-router + axios + localStorage

## 浏览地址 
[http://120.78.167.54:8080/#/](http://120.78.167.54:8080/#/)

## 特点
- 移动端自适应，采用方案 [amfe-flexible](https://github.com/amfe/lib-flexible) + postcss-px2rem
- 充分利用 vuex 进行数据管理

## 使用 vuex 管理数据
如果你不知道需不需要使用vuex，那就不必使用它，因为你自会知道什么时候需要它。     
我在本项目中充分利用了 vuex 进行数据管理。项目中所有的异步请求都在 **Action** 中进行（`src/store/actions.js`），然后在 **Mutation** 中修改数据（`src/store/mutations.js`）。    
如下是验证登录的示例：    
actions.js
```
  // 验证登录
  validaLogin ({ commit }, accesstoken) {
    post('/accesstoken', { accesstoken }).then(res => {
      if (res.data.success) {
        const { avatar_url, id, loginname } = res.data // eslint-disable-line
        commit('VALIDA_LOGIN', { avatar_url, id, loginname, accesstoken })
      }
    }).catch(() => {
      commit('VALIDA_FAIL')
    })
  },
```

mutations.js
```
  // 验证登录
  VALIDA_LOGIN (state, data) {
    state.user = data
    // 存到本地
    local.set(data)
  },

  // 验证登录失败
  VALIDA_FAIL (state) {
    state.loginFail = true
  }

```