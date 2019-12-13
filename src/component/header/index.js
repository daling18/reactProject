import React, { Component } from 'react'
import cssobj from'./header.less'
import Left from './item/left'
import Right from './item/right'
export default class Header extends Component {
    render() {
        return (
            <div className={cssobj.header}>
                <Left />
                <Right />
            </div>
        )
    }
}
