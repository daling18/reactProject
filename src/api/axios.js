// 这里做请求响应的拦截，请注释
import axios from 'axios'

const service = axios.create({
  baseURl : "xxx "
})

// 请求拦截
service.interceptors.request.use(config => {
  return config
})
// 响应拦截
service.interceptors.response.use(res => {
  return res
})
export default service