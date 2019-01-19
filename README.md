# vue 开发的 CNode社区
> vue-cli3 + vuex + vue-router + localStorage

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


## 使用自定义事件通信
组件化的开发模式，使用 vuex 给我带来很大的便利，但也不是所有的通信都需要使用 vuex，在父子组件中的通信，使用`$emit`自定义事件有时更方便。

比如项目中的侧边栏组件（`src/components/SideBar`）与登录组件（`src/components/Login`），它们不是父子关系而是兄弟关系，有一个共同的父组件（`src/views/Home.vue`）SideBar 通过发送自定义事件给父组件，来控制登录组件的显示，登录组件也可以发送自定义事件来隐藏自身。在侧边栏里的相关交互都是采用这种方式来实现，可见 SideBar 组件也绑定了不止一个自定义事件，代码如下：
```
<transition name="side">
    <side-bar @hideMenu="closeMenu" @openLogin="goLogin" @openCreate="goCreate" @openMessage="goMessage" v-show="showSide"/>
</transition>
```

## 待续。。。