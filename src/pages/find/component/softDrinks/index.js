import React, { Component } from 'react'
import {getFindSortDrinksData} from '../../../../api/api'
import PubSon from '../../pubilcCom/pubSon'
export default class SoftDrinks extends Component {
  constructor(props){
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }
  state = {
    data : [],
    index: 1
  }
  render() {
    return (
      <div id="bigBox" >
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
    window.addEventListener('scroll', () => this.handleScroll())
  }
  // handleScroll(){
  //   let clientHeight = document.querySelector(".app").clientHeight;//可视区域高度
  //   let scrollHeight = document.querySelector("#bigBox").offsetHeight;//元素总高度
  //   let scrollTop = document.querySelector("#bigBox").scrollTop;//滚动条卷去的高度
  //   console.log(clientHeight)
  //   console.log(scrollHeight)
  //   console.log(scrollTop)
  // }

  
  
}



