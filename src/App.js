import React, { Component } from 'react'
import "./assets/css/global.css"
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
        )}        
     }
// import {connect} from "react-redux"
// import Classify from './pages/classify'
// import { start } from 'repl'
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <Switch>
//                     {
//                         // console.log(mainRoute),
//                         mainRoute.map(item=>{
//                             return <Route key={item.pathname} path={item.pathname} />
//                         })
//                     }
//                 </Switch> */}
//                 App
//                 {/* <Classify/> */}
//             </div>
//         )
//     }
// }
// const mapStateToProps = start =>({
//     classify : start.classify
// })
// export default App