import React, { Component } from 'react'
import BScroll from 'better-scroll'
import {getFindSortDrinksData} from '../../../../api/api'
import PubSon from '../../pubilcCom/pubSon'
export default class SoftDrinks extends Component {
  constructor(props){
    super(props)
    this.scroll = this.scroll.bind(this)
  }
  state = {
    data : [],
    index: 1,
    scroll:''
  }
  render() {
    return (
      <div id="bigBox" style={{height:"100%"}} ref="bigBox">
        <PubSon  data = {this.state.data} />
      </div>
    )
  }
  scroll(){
    console.log(document.querySelector('.content').scrollTop)
  }
  componentDidMount(){
    getFindSortDrinksData(this.state.index)
    .then(res => { 
      this.setState({
        data: res.data,
        scroll:null
      })
    }) 
      window.addEventListener('scroll',this.scroll())
      
      
      const scroll =  new BScroll(this.refs.bigBox, {
        click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
        scrollY: true, //开启竖向滚动
        // mouseWheel: true,//开启鼠标滚轮
        // disableMouse: true,//启用鼠标拖动
        disableTouch: true,//启用手指触摸
        bounce: true, //是否启用回弹动画效果
        pullUpLoad: {
        threshold:-100,
        probeType:3
        }
      })
      scroll.on('pullingUp',()=>{
        console.log('dadad')
      })
      this.setState({
        scroll
      })
  }
}



