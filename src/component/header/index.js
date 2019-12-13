import React, { Component } from 'react'
import './header.less'

import Left from './item/left'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Left />
            </div>
        )
    }
}
