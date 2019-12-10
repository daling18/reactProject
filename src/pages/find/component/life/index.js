import React, { Component } from 'react'
import PubSon from '../../pubilcCom/pubSon'
import {getFindLifedata} from '../../../../api/api'
export default class Life extends Component {
  state={
    data:[]
  }
  render() {
    return (
      <div>
        <PubSon data={this.state.data}/>
      </div>
    )
  }
  componentDidMount(){
    getFindLifedata()
    .then(res => {
      // console.log(res)
      this.setState({
        data: res.data
      })
    })
  }
}
