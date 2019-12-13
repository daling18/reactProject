import {getUserList} from "../api/api"

const GET_USER_LIST = "GET_USER_LIST"

const defaultState = {
    listData : []
}

export default (state=defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify( state ))
    switch( action.type ){
        case GET_USER_LIST:
                newState.listData = [...newState.listData,...action.data ]
                console.log(state)
            return newState;
        default:
            return state    
            
    }
}

const setlistData = (data)=>{
    console.log(data)
    return {
        type : GET_USER_LIST,
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