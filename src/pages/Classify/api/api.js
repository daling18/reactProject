// 这里写各种接口 ，不同接口请注释说明
import axios from "./axios"

export const getUserList = ()=>{
   return axios.get("/api/header")
}