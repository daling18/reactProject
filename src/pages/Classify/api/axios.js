import axios from "axios"

const service = axios.create({
    baseURL : "http://rap2api.taobao.org/app/mock/239560"
})

service.interceptors.request.use(config=>{
    return config
})

service.interceptors.response.use(res=>{
    return res
   
})


export default service
