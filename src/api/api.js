// 这里写各种接口 ，不同接口请注释说明
import axios from './axios'
export const gethomeData=()=>{
    return axios({
        url:'/api/v2/product/home/index?device_id=03a4aa90-1a3a-11ea-b603-fd7a38eefba8&env=web&platform=web&uuid=03a4aa90-1a3a-11ea-b603-fd7a38eefba8&access_token=null&version=8.5.0&fromSource=zhuye&screen_height=375&screen_width=667',
        method:'post',
        data:{"lat":40.22077,"lng":116.23128,"is_manual":0}
    })
}
export const gethomeotherData=(id)=>{
    return axios({
        url:`/api/v3/product/category/${id}?device_id=03a4aa90-1a3a-11ea-b603-fd7a38eefba8&env=web&platform=web&uuid=03a4aa90-1a3a-11ea-b603-fd7a38eefba8&access_token=null&version=8.5.0&fromSource=zhuye&screen_height=414&screen_width=736`,
        method:'get'
    })
}
