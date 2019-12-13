import {getUserList} from "../api/api"


export const id=()=>{
    return{
        type : "WHAT_ID",
        // id:id
    }
}
export const bool=()=>{
    return{
        type : "IF_SHOW",
        ifShow: false
    }
}
export const bool2=()=>{
    return{
        type : "IF_SHOW",
        ifShow: true
    }
}
const setlistData = (data)=>{
    // console.log(data)
    return {
        type : "GET_USER_LIST",
        data
    }
}

export const getUseList = ()=>{
    return (dispatch)=>{
        getUserList().then(res=>{
            // console.log(res.data)
            dispatch(setlistData( res.data ))
        })
    }
}