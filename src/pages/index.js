// 添加 loading效果
import Loabable from 'react-loadable'
// 引入loading的组件
// import Loading from "../component/Loading"
import classify from './Classify'

const Classify = Loabable ({
  loader : () => import('./Classify'),
  loading : classify
})

// 将组件暴露
export {
  // NotFound ,
  Classify
}