// 这里做请求响应的拦截，请注释
import axios from 'axios'

const service = axios.create({
  //购物车数据
  // baseURl : "https://as-vip.missfresh.cn/"
})

// 请求拦截
service.interceptors.request.use(config => {

  config.headers={
    ...config.headers,
    cookie:'smidV2=20191209112032faa1abdfccf5059fd7b1d6e56da2a6d0009859f82d80b1e30; Hm_lvt_51a658ada96744c28c5f70b69aedf8a7=1575861582,1575864883; Hm_lpvt_51a658ada96744c28c5f70b69aedf8a7=1575864896; _fmdata=Oc7YYHtIvDfvLW4Y7IuzvKfwoAgDUXpyMLRcAj04BnfXnCSs6nxb1MAH8Tfbk5SJdeRSsOmEmlBNWgYv%2BY8KBOn7hyKeLwVDBmDJ1y28LuQ%3D',
    "sec-fetch-mode": "cors",
    "x-region": `{"station_code":"MRYX|mryx_bj_cpbjs","delivery_type":1,"chrome_type":0,"address_code":110114}`
  }
  console.log(config.headers)
  return config
})
// 响应拦截
service.interceptors.response.use(res => {
  return res
})
// service({
//   url:'/api2/product/home/index?device_id=03a4aa90-1a3a-11ea-b603-fd7a38eefba8&env=web&platform=web&uuid=03a4aa90-1a3a-11ea-b603-fd7a38eefba8&access_token=null&version=8.5.0&fromSource=zhuye&screen_height=375&screen_width=667',
//   method:'post',
//   data:{"lat":40.22077,"lng":116.23128,"is_manual":0}
// }).then((res)=>{
//   console.log(res)
// })
export default service