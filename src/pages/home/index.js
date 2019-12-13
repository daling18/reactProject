import React, { Component } from 'react'
import Nav from './components/nav'
import Hot from './components/content'
import {Switch,Route} from 'react-router-dom'
import Other from './components/content/other'
export default class index extends Component {
      
    render() {
        return (
            <div className="content" ref="content" style={{
                overflow:'hidden'
            }} >
                
                    <Nav />
                    <Switch>
                        <Route path="/home/:id" exact render={(routerProps)=>{
                            if(this.props.location.pathname==='/home/rexiaobaokuan'){
                                return <Hot {...routerProps} />
                            }
                            return <Other {...routerProps} />
                        }} />
                    </Switch>
                
            </div>
        )
    }
}
