import React, { Component } from 'react'

export default class item extends Component {
    render() {
        return (
            <div style={{
                position: 'relative',
                paddingTop: '1.5rem',
                textAlign: 'center',
                flex:'1'
            }}>
                <div style={{
                    position: 'relative',
                    display: 'inline-block',
                }}>
                    <img src={this.props.imgurl} style={{
                        display: 'inline-block',
                        width: '2.5rem'
                    }} />
                </div>
                <p style={{
                    color: '#474245',
                    fontSize: '0.75rem',
                }}>
                    {this.props.mag}
                </p>
            </div>
        )
    }
}
