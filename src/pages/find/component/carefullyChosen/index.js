import React, { Component } from 'react'

import PubSon from '../../pubilcCom/pubSon'
import '../../../../assets/css/discover.less'
import {getFindCarefullyData} from '../../../../api/api'
export default class carefullyChosen extends Component {
  state={
    data: []
  }
  render() {
    return (
    <div>
      <PubSon data = {this.state.data}/>
    </div>
   
    )
  }
  componentDidMount(){
    getFindCarefullyData().then(res=>{
      // console.log(res)
      this.setState({
        data: res.data
      } )
    })
  }
}
