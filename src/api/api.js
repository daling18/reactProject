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

// 获取find页的精选页数据的接口 
export const getFindCarefullyData = () => {
  return axios({
    url:'/api/as/disc/index/multiLis?device_id=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&env=web&platform=web&uuid=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&version=8.2.0&screen_height=375&screen_width=667&category=1',
    method:'GET',
  })
} 

// 获取find页 快手食谱的数据的接口
export const getFindCookbookData = () => {
  return axios ({
    url: 'https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&env=web&platform=web&uuid=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&version=8.2.0&screen_height=375&screen_width=667&category=21',
    method: 'GET'
  })
}
// 获取find页 甜点饮品的数据接口
export const getFindSortDrinksData = (index) => {
  return axios ({
    // url : "https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&env=web&platform=web&uuid=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&version=8.2.0&fromSource=zhuye&screen_height=375&screen_width=667&category=5 ",
    url : `https://as-vip.missfresh.cn/as/disc/index/category?device_id=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&env=web&platform=web&uuid=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&version=8.2.0&fromSource=zhuye&screen_height=375&screen_width=667&category=5&module=&pageNo=${index}&pageSize=10`,
    method: 'GET'
  })
}
