import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Icon,Button } from "antd"
class addressSelect extends Component {
    constructor(props){
        super(props)
        this.newAdress = this.newAdress.bind(this)
        this.selAderss = this.selAderss.bind(this)
        this.addAdrss = this.addAdrss.bind(this)
        this.shang=this.shang.bind(this)
    }
    state = {
        newAdd : true,
        selAdd:true,
        aderss:true,
        city:["北京","上海","广州","深圳","杭州","天津","南京","苏州","无锡","合肥","济南","石家庄","武汉","青岛","太原","南通",],
        cityN:["重庆","陕西","山东","山西","内蒙古","辽宁","吉林","西藏","甘肃","青海","宁夏","新疆","河南","河北","黑龙江","晋中",],
        cityS:["东莞","惠州","汕头","珠海","中山","佛山","四川","贵州","云南","福建","广东","广西","海南"],
        cityW:["常州","宁波","安徽","江苏","浙江","台湾"],
        cityE:["孝感市","江西","湖北","湖南"]
    }
    render() {
        return (
            <div className="addre">
                <div className="first">
                    <div className="addre_head">
                        <Icon type="arrow-left" /> 
                        <div style={{color:"#4b4b4b"}}>选择收货地址</div>
                        {/*  */}
                        <div onClick={this.newAdress} >新增地址</div>
                    </div>
                    <div className="add_bog">
                        <div className="add_sou">
                            <div onClick={this.selAderss}>
                                <span>北京市</span>
                                <Icon type="caret-down" />
                            </div>
                            <div onClick={this.addAdrss}>
                                <Icon type="search" />
                                <span>请输入要收货的小区/写字楼</span>
                            </div>
                        </div>
                    </div>
                    <div className="add_shi">因各地区商品和配送服务不同，请您选择准确收货地址</div>
                    <div className="add_ding">
                        <div style={{display:"flex",alignItems: "center"}}>
                            <Icon className="shua" type="environment" style={{color:"red"}}/> 
                            <span className="add_span" style={{color:"#000"}}>北京市</span>
                            <sapn className="add_span" style={{color:"#969696"}}>当前地址</sapn>
                        </div>
                        <Icon className="shua" type="redo" />
                    </div>
                </div>
                <div className={ this.state.newAdd ? "shoehead " : "show"}>
                    <div className="addre_head">
                        <Icon type="arrow-left" onClick={this.shang} /> 
                        <div style={{color:"#4b4b4b"}}>新增收货地址</div>
                        <div></div>
                    </div>
                    <div className="from_add">
                        <ul className="add_ul">
                            <li>
                                <span>收货人</span>
                                <input type="text" placeholder="收货人姓名" />
                            </li>
                            <li>
                                <span>手机号码</span>
                                <input type="text" placeholder="配送员联系你的电话" />
                            </li>
                            <li>
                                <span>收货地址</span>
                                <input type="text" placeholder="小区/写字楼" />
                            </li>
                            <li>
                                <span>楼号门牌</span>
                                <input type="text" placeholder="楼号/门牌号/单元" />
                            </li>
                            <li>
                                <span>地址类型</span>
                                <div className="addType">
                                    <a>住宅</a><a>公司</a><a>学校</a><a>其他</a>
                                </div>
                            </li>
                        </ul>
                        <div className="btn">
                            <button>保存收货地址</button>
                        </div>
                    </div>
                </div>
                <div className={ this.state.selAdd ? "selectAdd " : "selshow"}>
                    <div className="selec_head">
                        <Icon type="arrow-left" onClick={this.shang} /> 
                        <div className="sel_sou">
                            <Icon type="search" />
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className={ this.state.aderss ? "addshoe " : "addshow"}>
                    <div className="city_head">--极速达(配送时效以自动定位为准)--</div>
                    <div className="city">
                    {
                        this.state.city.map(item=>{
                            return <div>{item}</div>
                        })
                    }
                    </div>
                    <div className="city_head">--华北--</div>
                    <div className="city">
                    {
                        this.state.cityN.map(item=>{
                            return <div>{item}</div>
                        })
                    }
                    </div> <div className="city_head">--华南--</div>
                    <div className="city">
                    {
                        this.state.cityS.map(item=>{
                            return <div>{item}</div>
                        })
                    }
                    </div>
                    <div className="city_head">--华东--</div>
                    <div className="city">
                    {
                        this.state.cityW.map(item=>{
                            return <div>{item}</div>
                        })
                    }
                    </div>
                    <div className="city_head">--华中--</div>
                    <div className="city">
                    {
                        this.state.cityE.map(item=>{
                            return <div>{item}</div>
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
    newAdress(){
        this.setState({
            newAdd : false
        })
    }
    selAderss(){
        this.setState({
            aderss : false
        })
    }
    addAdrss(){
        this.setState({
            selAdd : false
        })
    }
    shang(){
        this.setState({
            newAdd : true,
            selAdd:true
        })
    }
}

export default withRouter(addressSelect)
