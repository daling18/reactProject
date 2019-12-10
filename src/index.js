import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route,Switch,Redirect} from "react-router-dom"
import App from './App'
<<<<<<< HEAD
import '@/assets/css/App.css'
import './assets/setRem'
render(<App />,document.getElementById('root'))
=======
import Classify from './pages/Classify'
import {mainRoute} from "./routes"
render(
    (<Router>
        <Switch>
            <Route  path="/home" component={ App } exact/>
                {
                    // console.log(mainRoute),
                    mainRoute.map(item=>{
                        // console.log(item.pathname)
                        return <Route exact key={item.pathname} path={item.pathname} component={Classify} />
                            // render={(routerProps)=>this.props.login.uid ? <item.component {...routerProps}/> : <Redirect to="/home" />}/>
                    })
                }
             <Redirect to={mainRoute[0].pathname} from="/home" exact/>
        </Switch>
    </Router>
        )
    ,document.getElementById('root'))
>>>>>>> classify
