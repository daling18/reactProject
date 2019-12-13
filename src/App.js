import React, { Component } from 'react'
import Tabbar from './component/tabbar'
import Header from './component/header'
import {mainRoute} from './routes/index'
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store/index'
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="app">
                        <Header />
                        <Switch>
                            <Redirect to="/home/rexiaobaokuan" from="/" exact/>
                            <Redirect to="/home/rexiaobaokuan" from="/home" exact/>
                            {
                                mainRoute.map((item,index)=>{
                                    return <Route path={item.pathname} key={item.pathname} component={item.component} />
                                })
                            }

                        </Switch>
                        <Tabbar />
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
   
}

// export default App