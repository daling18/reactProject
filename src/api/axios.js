// 这里做请求响应的拦截，请注释
import axios from 'axios'

const service = axios.create({
  // baseURl : "xxx "
})

// 请求拦截
service.interceptors.request.use(config => {
  config.headers={
    ...config.headers,
    "x-region": `{"station_code":"MRYX|mryx_bj_cpbjs","delivery_type":1,"address_code":110114}`
  }
  return config
})
// 响应拦截
service.interceptors.response.use(res => {
  return res.data
})

export default service