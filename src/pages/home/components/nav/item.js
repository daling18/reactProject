import React, { Component } from 'react'
import cssobj from './nav.less'
import {withRouter} from 'react-router-dom'
const style={
    color: '#ff4891',
    borderBottom: '2px solid #ff4891'
}

class item extends Component {
    pathDispose=()=>{
        const arr=this.props.location.pathname.split('/')
        const path=arr[arr.length-1]
        return path
    }
    render() {
        return (
            
            <div onClick={this.handerClick} className={cssobj['nav-item']}>
                <span style={this.pathDispose()===this.props.path?style:{}} >{this.props.mag}</span>
            </div>
        )
    }
    handerClick=()=>{
        this.props.history.push('/home/'+this.props.path)
    }
}
export default withRouter(item)
