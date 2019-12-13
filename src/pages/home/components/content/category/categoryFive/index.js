import React, { Component } from 'react'
import Item from './item'
import {connect} from 'react-redux'
// import {Button} from 'antd'
class index extends Component {
    render() {
        const {product_list}=this.props.homeData
        return (
            <div style={{
                display:'flex',
                lineHeight:' 1.25rem',
                marginBottom:'1.3rem'
            }}>
                
                {
                    product_list?product_list.categoryAreaV2.lanternArea.map((item)=>{
                        return <Item imgurl={item.image} mag={item.name} key={item.image}/>
                    }):''
                }
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        homeData:state.homeData.homeData
    }
}
export default connect(mapStateToProps,null)(index)
