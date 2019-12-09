// 这里写各种接口 ，不同接口请注释说明
import axios from './axios'

export const getShopCar=()=>{
    return axios({
        url:"/api/as/item/getReSkus?device_id=94b00390-1a3a-11ea-846d-171a9013c20a&env=web&platform=web&uuid=94b00390-1a3a-11ea-846d-171a9013c20a&version=8.8.0&fromSource=zhuye&screen_height=414&screen_width=736",
        method:"post",
        data:{"from":"cart"}
    })
}