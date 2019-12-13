import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class Item extends Component {
    render() {
        const {url,mag}=this.props.itemData
        return (
            <a onClick={this.handerClick} >
                <img src={url}/>
                <p>{ mag }</p>
            </a>
        )
    }
    handerClick=()=>{
        this.props.history.push('/'+this.props.itemData.path)
    }
}
export default withRouter(Item)
