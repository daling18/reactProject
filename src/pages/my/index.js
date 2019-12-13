import React, { Component } from 'react'
<<<<<<< HEAD
import {Icon} from "antd"
import Imh from "../../assets/img/img_20191206003404111.jpg"
import Img from "../../assets/img/img_20191128143553558.jpg"
import "../../assets/css/my.css"
export default class My extends Component {
    render() {
        return (
            <div className="my">
                <div className="my_head">
                    <div>用户登录</div>
                </div>
                <div className="my_qian">
                    <img className="my_img" src="https://j-image.missfresh.cn/img_20180205201631182.gif" />
                    <div>
                        <div style={{marginBottom:".05rem",fontSize:".16rem"}}>0</div>
                        <div>余额</div>
                    </div>
                    <div>
                        <div style={{marginBottom:".05rem",fontSize:".16rem"}}>0</div>
                        <div>红包</div>
                    </div>
                    <div>
                        <div style={{marginBottom:".05rem",fontSize:".16rem"}}>0</div>
                        <div>商品券</div>
                    </div>
                    <div>
                        <div>积分兑换</div>
                    </div>

                </div>
                <div className="my_vip">
                    <div className="vip_head">
                        <h1>会员权益</h1>
                        <div>开通会员&nbsp;&nbsp;<Icon type="right" /></div>
                    </div>
                    <div className="vip_foot">成为优享会员，预计1年将为你&nbsp;<span>节省1121.30元 </span></div>
                </div>
                <div className="my_kefu">
                    <div>
                        <div><img src="https://j-image.missfresh.cn/img_20171103161358679.png"  /></div>
                        <div>会员专享价</div>
                    </div>
                    <div>
                        <div><img src="https://j-image.missfresh.cn/img_20171028202735028.png"  /></div>
                        <div>1小时送达</div>
                    </div>
                    <div>
                        <div><img src="https://j-image.missfresh.cn/img_20171028202909231.png"  /></div>
                        <div>专属客服</div>
                    </div>
                    <div>
                        <div><img src="https://j-image.missfresh.cn/img_20180105021607945.png"  /></div>
                        <div>敬请期待</div>
                    </div>
                </div>
                <div className="my_imgs">
                    <img style={{marginRight:"1%"}} src={Img} />
                    <img src={Imh} />
                </div>
                <ul className="my_function">
                    <li>
                        <span>我的订单</span>
                        <Icon type="right" />
                    </li>
                    <li>
                        <span>我的地址</span>
                        <Icon type="right" />
                    </li>
                    <li>
                        <span>账号与安全</span>
                        <Icon type="right" />
                    </li>
                    <li>
                        <span>客户与帮助</span>
                        <Icon type="right" />
                    </li>
                    <li>
                        <span>意见反馈</span>
                        <Icon type="right" />
                    </li>
                    <li>
                        <span>关于我们</span>
                        <Icon type="right" />
                    </li>
                </ul>
=======

export default class index extends Component {
    render() {
        return (
            <div className="content">
                my
>>>>>>> 2fcae67e3a9cbb9240d03bb0f2f654ef7be339df
            </div>
        )
    }
}
