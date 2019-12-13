import React, { Component } from 'react'

export default class item extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imgurl} />
        <em>{this.props.mag}</em>
            </div>
        )
    }
}
