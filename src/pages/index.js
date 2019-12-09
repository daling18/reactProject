// 添加 loading效果
import Loabable from 'react-loadable'
// 引入loading的组件
import Loading from "../component/Loading"
const Find = Loabable ({
  loader : () => import('./find'),
  loading:Loading
})

// 将组件暴露
export {
  Find 
}