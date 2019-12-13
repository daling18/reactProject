import React, { Component } from 'react'
import Item from './item'
import {recommend} from './recommend.less'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[
                {
                    imgurl:'https://j-image.missfresh.cn/img_20170627185311186.png',
                    mag:'优鲜严选'
                },
                {
                    imgurl:'https://j-image.missfresh.cn/img_20170627184654084.png',
                    mag:'安心检测'
                },
                {
                    imgurl:'https://j-image.missfresh.cn/img_20170718194948016.png',
                    mag:'赔付保障'
                }
            ]
        }
    }
    render() {

        return (
            <div className={recommend}>
                {
                    this.state.data.map((item,index)=>{
                        return <Item {...item} key={index}/>
                    })
                }
                
            </div>
        )
    }
}
