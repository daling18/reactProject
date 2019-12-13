import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div style={{
                padding: '0 0.9375rem',
                overflow: 'hidden'
            }}>
                <img style={{
                    display: 'inline-block',
                    width: '10.625rem',
                    height: '6.25rem',
                    float: 'left',
                }} src="https://j-image.missfresh.cn/img_20181213003703821.jpg" />
                <img style={{
                    display: 'inline-block',
                    width: '10.625rem',
                    height: '6.25rem',
                    float: 'right',
                }} src="https://j-image.missfresh.cn/img_20181213004855362.jpg" />
            </div>
        )
    }
}
