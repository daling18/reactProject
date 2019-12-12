import React, { Component } from 'react'
import Tabbar from './component/tabbar'
import Header from './component/header'
import {mainRoute} from './routes/index'
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header />
                    <Switch>
                        <Redirect to="/home" from="/" exact/>
                        {
                            mainRoute.map((item,index)=>{
                                return <Route path={item.pathname} key={item.pathname} component={item.component} />
                            })
                        }

                    </Switch>
                    <Tabbar />
                </div>
            </BrowserRouter>
            
        )
    }
   
}
