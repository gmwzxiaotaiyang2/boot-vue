import { defineStore } from 'pinia'
import userApi from '@/api/modules/user'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const userStore = defineStore('user', {
  // other options...
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      username: localStorage.getItem('username'),
      token: localStorage.getItem('token'),
      avatar: localStorage.getItem('avatar'),
    }
  },
  actions: {
    async login(data) {
      const result = await userApi.login(data)
      // console.log(result)

      localStorage.setItem('username', result.data.username)
      localStorage.setItem('token', result.data.token)
      localStorage.setItem('avatar', result.data.avatar)
      this.username = result.data.username
      this.token = result.data.token
      this.avatar = result.data.avatar
    },

    logout() {
      localStorage.removeItem('username')
      localStorage.removeItem('token')
      localStorage.removeItem('avatar')
      this.username = undefined
      this.token = undefined
      this.avatar = undefined
    },

  },
})
