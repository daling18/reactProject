import React, { Component } from 'react'
import Item from './item'
import firstUrl from '../../assets/img/homeIcon.png'
import classUrl from '../../assets/img/classIcon.png'
import findUrl from '../../assets/img/findIcon.png'
import myUrl from '../../assets/img/myIcon.png'
import carUrl  from '../../assets/img/carIcon.png'
import './tabber.less'
export default class Tabbar extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[
                {
                    url:firstUrl,
                    mag:'首页'
                },
                {
                    url:classUrl,
                    mag:'分类'
                },
                {
                    url:findUrl,
                    mag:'发现'
                },
                {
                    url:carUrl,
                    mag:'购物车'
                },
                {
                    url:myUrl,
                    mag:'我的'
                }
            ]
        }
    }
    render() {
        return (
            <div className="tabber">
                {
                    this.state.data.map((item,index)=>{
                        return <Item itemData = {item} key={index}/>
                    })
                }
            </div>
        )
    }
}
