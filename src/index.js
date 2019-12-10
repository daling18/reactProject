import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import App from './App'
import './rem'
import {mainRoute} from './routes'

render(
(<Router>
  <Switch>
    <Route path='/home' component={App}/>
  {
    mainRoute.map(router => {
      return <Route exact key={router.pathname} path={router.pathname} component={router.component}/>
    })
  }
  </Switch>
</Router>)

,document.getElementById('root'))

