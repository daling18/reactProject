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
