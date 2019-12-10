import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const {url,mag}=this.props.itemData
        return (
            <a >
                <img src={url}/>
                <p>{ mag }</p>
            </a>
        )
    }
}
