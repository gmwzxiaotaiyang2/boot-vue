import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_MOCK === 'true' ? '/mock' : '',
  timeout: 1000 * 10,
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // console.log(response.data)
  if (response.data.code !== 200) {
    Promise.reject(response.data)
  }

  return Promise.resolve(response.data)
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  console.log(error)
  return Promise.reject(error)
})

export default instance
