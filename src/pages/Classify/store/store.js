//创建一个store
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'//解决异步加载的情况
import reducer from './reducer'

//reducer来管理我们的store的state数据
let store = createStore(reducer,applyMiddleware(thunk))

export default store