// 该文件是路由表的文件
// 将pages的index.js中的暴露的组件引入

import {Home , Classify , Find , Shopcar ,  My , NotFound,addressSelect,Login} from '../pages'
// 将主路由暴露出去
export const mainRoute = [
{
  pathname: '/home',
  component : Home
},
{
  pathname: '/classify',
  component : Login
},
{
  pathname: '/find',
  component : addressSelect
},

{
  pathname: '/shopcar',
  component : Shopcar,
  exact:true,
  children:[
    {
        pathname: '/shopcar/select',
        component : addressSelect
    }
  ]
},
{
  pathname: '/my',
  component : My
},
{
  pathname: '/notFound',
  component : NotFound
}
]
