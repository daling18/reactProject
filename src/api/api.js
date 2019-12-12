// 这里写各种接口 ，不同接口请注释说明
import axios from './axios'

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
/* 
https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&env=web&platform=web&uuid=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&version=8.2.0&fromSource=zhuye&screen_height=375&screen_width=667&category=5 
https://as-vip.missfresh.cn/as/disc/index/category?device_id=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&env=web&platform=web&uuid=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&version=8.2.0&fromSource=zhuye&screen_height=375&screen_width=667&category=5&module=&pageNo=2&pageSize=10
https://as-vip.missfresh.cn/as/disc/index/category?device_id=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&env=web&platform=web&uuid=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&version=8.2.0&fromSource=zhuye&screen_height=375&screen_width=667&category=5&module=&pageNo=3&pageSize=10 

*/


// 获取 find 页 生活百科的数据接口

export const getFindLifedata = () => {
  return axios ({
    url: 'https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&env=web&platform=web&uuid=33fb84f0-1a32-11ea-bf2f-c3458848f4bc&version=8.2.0&screen_height=375&screen_width=667&category=6',
    method: 'GET'
  })
}