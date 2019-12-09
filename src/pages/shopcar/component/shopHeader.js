import React, { Component } from 'react'
import "../../../assets/css/shopcar.css" 
import { Icon } from 'antd';
export default class shopHeader extends Component {
    render() {
        return (
            <div className="shopheader">
                <div className="shopheader_top">
                    <Icon type="environment" />
                    北京市昌平区人民政府
                    <Icon type="down" />
                </div>  
            </div>
        )
    }
}
