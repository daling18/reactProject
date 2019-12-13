const deState={
    loading:false,
    page:1
}
export const scrollUp=(state=deState,action)=>{
    switch (action.type){
        case 'START_LOADING' :
            return {loading:true,page:state.page+1}
        case 'END_LOADING':
            return {...state,loading:false}
        default :
            return state
    }
}