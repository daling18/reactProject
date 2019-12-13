const deState={
    homeData:{}
}
export const homeData=(state=deState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    switch (action.type){
        case 'SUBMIT_HOME_DATA':
            newState.homeData=action.data
            return newState
        default :
            return state
    }
}