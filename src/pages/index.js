// 添加 loading效果
import Loabable from 'react-loadable'
// 引入loading的组件
// import Loading from "../component/Loading"
import classify from './Classify'

<<<<<<< HEAD
const Home = Loabable ({
  loader : () => import('./home'),
  loading:Loading
=======
const Classify = Loabable ({
  loader : () => import('./Classify'),
  loading : classify
>>>>>>> classify
})
const Classify = Loabable ({
  loader : () => import('./classify'),
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
<<<<<<< HEAD
  Home,
  Classify,
  Find,
  Shopcar,
  My
=======
  // NotFound ,
  Classify
>>>>>>> classify
}