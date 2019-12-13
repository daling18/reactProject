import React, { Component } from 'react'
import ShopHeader from "./component/shopHeader"
import ShopConent from "./component/shopConent"
import ShopRecommend from "./component/shopRecommend" 
import "../../assets/css/shopcar.css"  

export default class Shopcar extends Component {
    render() {
        return (
                <div style={{background:"#eee" ,overflow:"hidden",}}>
                    <ShopHeader />
                    <ShopConent />
                    <ShopRecommend />
                </div>
        )
    }
}
