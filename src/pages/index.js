// 添加 loading效果
import Loabable from 'react-loadable'
// 引入loading的组件
import Loading from "../component/Loading"

const NotFound = Loabable ({
  loader : () => import('需要加效果的组件'),
  loading:Loading
})

// 将组件暴露
export {
  NotFound 
}