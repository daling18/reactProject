import React, { Component } from 'react'
import "../../assets/css/login.css"
import { Icon } from 'antd'
class Login extends Component {
    constructor(props){
        super(props)
        this.xian=this.xian.bind(this)
    }
    state={
        zhen:true
    }
    render() {
        return (
            <div className="login">
                <div id="box_name">
                    <input type="text" placeholder="请输入手机号"  /> <span className="video">语音验证码</span>
                </div>
                <div id="box_pass">
                    <input type="password" placeholder="输入验证码"  />  
                </div>
                <div className="form_hecked">
                    <div onClick={this.xian} className="play">
                        {
                            this.state.zhen?<i className="squer"  /> : <Icon className="sque_yi" type="check-circle" theme="twoTone" twoToneColor="#ff4891"/>
                        }
                    </div>
                    
                    <div>
                        我已认真阅读、理解并同意<span style={{color:"#ff4891"}}>《每日优鲜用户协议》</span>及<span style={{color:"#ff4891"}}>《每日优鲜隐私策略》</span>
                    </div>
                </div>                      
                <button className="btn">登录</button>
                <div className="tishi">为方便您及时查询订单信息，需要验证您的手机号来登录</div>
            </div>
        )
    }
    xian(){
        this.setState({
            zhen:!this.state.zhen
        })
    }
}

export default Login
