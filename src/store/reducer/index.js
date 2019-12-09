import {combineReducers} from 'redux'
// 引入各个组件的store文件
import reducerFormHome from '../../pages/home/reducer'
const reducer = combineReducers ({
  reducerFormHome,
})
export default reducer