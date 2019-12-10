import React, { Component } from 'react'
import {getFindSortDrinksData} from '../../../../api/api'
import PubSon from '../../pubilcCom/pubSon'
export default class SoftDrinks extends Component {
  state = {
    data : []
  }
  render() {
    return (
      <div>
        <PubSon  data = {this.state.data}/>
      </div>
    )
  }
  componentDidMount(){
    getFindSortDrinksData()
    .then(res => {
      console.log(res)
      this.setState({
        data: res.data
      })
    })
  }
}



