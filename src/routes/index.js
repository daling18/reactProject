// 该文件是路由表的文件
// 将pages的index.js中的暴露的组件引入

import {Home , Classify , Find , Shopcar ,  My , NotFound} from '../pages'
// 将主路由暴露出去
export const mainRoute = [
{
  pathname: '/home',
  component : Home
},
{
  pathname: '/classify',
  component : Classify
},
{
  pathname: '/find',
  component : Find
},
{
  pathname: '/shopcar',
  component : Shopcar
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