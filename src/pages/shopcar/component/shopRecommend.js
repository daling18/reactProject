import React, { Component } from 'react'
import {getShopCar} from "../../../api/api"
class shopRecommend extends Component {
    state={
        data:""
    }
    render() {
        return (
            <div className="shopRecommend">
                <p className="shop_p">推荐商品</p>
                <ul className="shop_ul">
                    {
                        // console.log(this.state.data)
                        this.state.data.map((item)=>{
                            console.log(item)
                         return (<li>
                                <img className="li_img" src="https://image.missfresh.cn/93c5753d66a042d88f72da85574c227a.jpg" />
                                <p className="li_p" style={{color:"#474245"}}>监控显cscdcdscdscdsscds示显示</p>
                                <p className="li_p" style={{color:"#969696"}}>xsaxsaxscdscdscdscdscdsaxsaxsax</p>
                                <div className="li_xia">
                                    <div>
                                        <div style={{color:"red",fontSize:".12rem"}}>￥6.9</div>
                                        <div style={{color:"#969696",fontSize:".16rem"}}>￥9.9</div>
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
