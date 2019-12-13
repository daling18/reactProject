// 添加 loading效果
import Loabable from 'react-loadable'
// 引入loading的组件
import Loading from "../component/Loading"
import Shopcar from "./shopcar"
import My from "./my"

const NotFound = Loabable ({
  loader : () => import('../component/Loading'),
  loading:Loading
})

// 将组件暴露
export {
  NotFound,
  Shopcar,
  My
}