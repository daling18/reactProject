import React, { Component } from 'react'
import BScroll from 'better-scroll'
import {getFindSortDrinksData} from '../../../../api/api'
import PubSon from '../../pubilcCom/pubSon'
export default class SoftDrinks extends Component {
  constructor(props){
    super(props)
  }
  state = {
    data : [],
    index: 1,
  }
  render() {
    return (
      <div id="bigBox" style={{height:"calc(100% - 25)"}}>
        <PubSon  data = {this.state.data} />
      </div>
    )
  }
  componentDidMount(){
    getFindSortDrinksData(this.state.index)
    .then(res => { 
      this.setState({
        data: res.data
      })
    }) 
      
      const wrapper = document.querySelector('.ant-tabs-tabpane-active')
       new BScroll(wrapper, {
        click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
        scrollY: true, //开启竖向滚动
        mouseWheel: true,//开启鼠标滚轮
        disableMouse: true,//启用鼠标拖动
        disableTouch: true,//启用手指触摸
        momentum: false ,//当快速滑动时是否开启滑动惯性
        bounce: true //是否启用回弹动画效果
      })
  }


  
  
}



