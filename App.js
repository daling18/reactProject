import React, {Component} from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import {connect} from "react-redux"
import Frame from "./components/Frame"
import {adminRoutes} from "./routes"
class App extends Component{
    render(){
        return(
            <Frame>
                <Switch>
                    {
                        adminRoutes.map(item=>{
                            return <Route key={item.pathname} path={item.pathname} render={(routerProps)=>this.props.login.uid ? <item.component {...routerProps}/> : <Redirect to="/login" />}/>
                        })
                    }
                    <Redirect to={adminRoutes[0].pathname} from="/admin" exact/>
                </Switch>
            </Frame>
        )
    }
}
const mapStateToProps = state => ({
    login : state.login
})
export default connect(mapStateToProps,null)(App)