import {gethomeData} from '@/api/api.js'
const homeData=(data)=>{
    return {
        type:'SUBMIT_HOME_DATA',
        data
    }
}

export const getHomeRequset=(data)=>{
    return (depatch)=>{
        gethomeData().then((res)=>{
            depatch(homeData(res))
        }).catch((error)=>{
            console.log(error)
        })
    }
}