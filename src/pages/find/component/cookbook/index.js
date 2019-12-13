import React, { Component } from 'react'
import {getFindCookbookData} from '../../../../api/api'
// import '../../../../assets/css/discover.less'
import PubSon from '../../pubilcCom/pubSon'
export default class Cookbok extends Component {
  state = {
    data : []
  }
  render() {
    return (
      <div>
        <PubSon data = {this.state.data} />
      </div>
    )
  }
  componentDidMount () {
    getFindCookbookData()
    .then(res =>{
      this.setState({
        data: res.data
      })
    } )
  }
  
}
