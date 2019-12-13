const IF_SHOW = "IF_SHOW"
const WHAT_ID = "WHAT_ID"
const GET_USER_LIST = "GET_USER_LIST"

const datas={
    ifShow : true
}
export default ( state=datas,action)=>{
    let newState = JSON.parse(JSON.stringify( state ))
  
    switch( action.type ){
        case IF_SHOW:
            newState.ifShow  = action.ifShow 
            return newState
        case WHAT_ID:
            newState.id  = action.id 
            return newState
        case GET_USER_LIST:
                newState.data = action.data
                return newState
        default:
            return state
    }
}


