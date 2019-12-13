import React, { Component } from 'react'

export default class title extends Component {
    render() {
        return (
            <div style={{
                padding: '0 1.125rem'
            }}>
                <div style={{
                    marginBottom: '0',
                    paddingBottom:'0.625rem',
                    width: '100%',
                    textAlign: 'left',
                    paddingTop: '0.625rem'
                }}>
                    <p style={{
                        fontSize: '1.25rem',
                        height:' 1.875rem',
                        lineHeight: '1.875rem',
                        color: 'rgb(0, 0, 0)'
                    }}>新客首单全场包邮</p>
                    <p style={{
                        color: '#968D91',
                        fontSize: '0.75rem',
                        height: '1.25rem',
                        lineHeight: '1.25rem'
                    }}>新客专享</p>
                </div>
            </div>
        )
    }
}
