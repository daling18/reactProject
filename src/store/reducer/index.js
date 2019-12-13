import {combineReducers} from 'redux'
// 引入各个组件的store文件
import {homeData} from '../../pages/home/reducer'
import {scrollUp} from '../../pages/home/components/content/ruduers'
const reducer = combineReducers ({
  homeData,
  scrollUp
})
export default reducer