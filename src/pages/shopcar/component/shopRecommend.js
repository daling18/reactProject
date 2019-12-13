import React, { Component } from 'react'
import {getShopCar} from "../../../api/api"
class shopRecommend extends Component {
    state={
        data:[]
    }
    render() {
        return (
            <div className="shopRecommend">
                <p className="shop_p">推荐商品</p>
                <ul className="shop_ul">
                    {
                        // console.log(this.state.data)
                        this.state.data.map((item,index)=>{
                            // console.log(item)
                           
                         return (<li key={index}>
                                <img className="li_img" src={item.image} />
                                <p className="li_p" style={{color:"#474245"}}>{item.name}</p>
                                <p className="li_p" style={{color:"#969696"}}>{item.subtitle}</p>
                                <div className="li_xia">
                                    <div>
                                        <div style={{color:"red",fontSize:".12rem"}}>￥{item.pricePro.noVip.price/100}</div>
                                        <div style={{color:"#969696",fontSize:".16rem"}}>￥{item.pricePro.vip ? item.pricePro.vip.price/100:item.pricePro.noVip.price/100}</div>
                                    </div>
                                    <img src="https://static-as.missfresh.cn/frontend/cart/static/img/new-cart.a16f026.png" />
                                </div>
                            </li>)
                        })
                    }
                    
                </ul>
            </div>
        )
    }
    componentDidMount(){
        
        getShopCar().then(res=>{
            console.log(res.data.data.products)
            this.setState({
                data:res.data.data.products
            })
            
        })
    }
}

export default shopRecommend
