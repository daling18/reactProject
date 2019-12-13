// 添加 loading效果
import Loabable from 'react-loadable'
// 引入loading的组件
// import Loading from "../component/Loading"
// import Shopcar from "./shopcar"
// import My from "./my"
// import Login from "./login"
// import addressSelect from "./shopcar/sonRoute/addressSelect"
// import AddressAdd from "./shopcar/sonRoute/addressAdd"

const NotFound = Loabable ({
  loader : () => import('../component/Loading')
})
const Home = Loabable ({
  loader : () => import('./home'),
  loading:Loading
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
  NotFound,
  Shopcar,
  My,
  addressSelect,
  AddressAdd,
  Login,
  Classify,
  Home,
  Find
}