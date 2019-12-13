import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import App from './App'
import {mainRoute} from "./routes"
import "./rem"
render((
    <Router>
        <Switch>
            <Route path="/home" render={()=><App />} />
            {
                mainRoute.map(router=>{
                    return <Route path={router.pathname} component={router.component} key={router.pathname}/>
                })
                // mainRoute[3].children.map(router=>{
                //     return <Route path={router.pathname} component={router.component} key={router.pathname}/>
                // })
            }   
            <Redirect to="/home" from="/" exact/>
        </Switch>
    </Router>
),document.getElementById('root'))
// import {BrowserRouter as Router, Route,Switch,Redirect} from "react-router-dom"
// import App from './App'
// import '@/assets/css/App.css'
// import './assets/setRem'
// render(<App />,document.getElementById('root'))
// import Classify from './pages/Classify'
// import {mainRoute} from "./routes"
// render(
//     (<Router>
//         <Switch>
//             <Route  path="/home" component={ App } exact/>
//                 {
//                     // console.log(mainRoute),
//                     mainRoute.map(item=>{
//                         // console.log(item.pathname)
//                         return <Route exact key={item.pathname} path={item.pathname} component={Classify} />
//                             // render={(routerProps)=>this.props.login.uid ? <item.component {...routerProps}/> : <Redirect to="/home" />}/>
//                     })
//                 }
//              <Redirect to={mainRoute[0].pathname} from="/home" exact/>
//         </Switch>
//     </Router>
//         )
//     ,document.getElementById('root'))