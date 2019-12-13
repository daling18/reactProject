import React, { Component } from 'react'
import Item from './item'
import firstUrl from '../../assets/img/homeIcon.png'
import classUrl from '../../assets/img/classIcon.png'
import findUrl from '../../assets/img/findIcon.png'
import myUrl from '../../assets/img/myIcon.png'
import carUrl  from '../../assets/img/carIcon.png'
import { tabber } from './tabber.less'
export default class Tabbar extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[
                {
                    url:firstUrl,
                    mag:'首页',
                    path:'home'
                },
                {
                    url:classUrl,
                    mag:'分类',
                    path:'classify'
                },
                {
                    url:findUrl,
                    mag:'发现',
                    path:'find'
                },
                {
                    url:carUrl,
                    mag:'购物车',
                    path:'shopcar'
                },
                {
                    url:myUrl,
                    mag:'我的',
                    path:'my'
                }
            ]
        }
    }
    render() {
        return (
            <div className={tabber}>
                {
                    this.state.data.map((item,index)=>{
                        return <Item itemData = {item} key={index}/>
                    })
                }
            </div>
        )
    }
}
