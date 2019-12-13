import React, { Component } from 'react'
export default class Loading extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <img 
        style = {{width: '60px',height:"60px",marginTop:"200px"}}
        src="//static-as.missfresh.cn/frontend/mfs3/web/static/img/loading-gif.0ea1e7d.gif"/>
      </div>
    )
  }
}

