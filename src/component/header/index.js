import React, { Component } from 'react'
import cssobj from'./header.less'
import Left from './item/left'
import Right from './item/right'
import {withRouter} from 'react-router-dom'
class Header extends Component {
    render() {
        console.log(this.props)
        return (
                <div className={cssobj.header} style={{
                    display:this.props.location.pathname==='/my'?'none':'flex'
                }} >
                    <Left />
                    <Right />
                </div>
            
        )
    }
}
export default withRouter(Header) 
