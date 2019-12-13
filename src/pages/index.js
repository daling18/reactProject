// 将组件暴露
import Loading from "../component/Loading"
import Loabable from 'react-loadable'
const Home = Loabable ({
  loader : () => import('./home'),
  loading:Loading
})
const Classify = Loabable ({
  loader : () => import('./Classify'),
  loading:Loading
})
const Find = Loabable ({
  loader : () => import('./find'),
  loading:Loading
})
const My = Loabable ({
  loader : () => import('./my'),
  loading:Loading
})
const Shopcar = Loabable ({
  loader : () => import('./shopcar'),
  loading:Loading
})


// 将组件暴露
export {
  Home,
  Classify,
  Find,
  Shopcar,
  My
}