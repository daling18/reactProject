import React, { Component } from 'react'
import {left as csslefy,logo,adress} from '../header.less'
export default class left extends Component {
    render() {
        return (
            <div className={csslefy}>
                <div className={logo}>
                    <img src="https://j-image.missfresh.cn/img_20171106205437312.png?mryxw=110&mryxh=28" />
                </div>
                <div className={adress}>
                    <span>
                    北京市昌平区人民政府
                    </span>
                </div>
            </div>
        )
    }
}
