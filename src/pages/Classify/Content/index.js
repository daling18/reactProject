import React,{Component} from 'react'
// import Datas from '../Datas'
import {connect} from "react-redux"

import {getUseList} from '@/pages/Classify/action'
class Content extends Component{
    
    render() {
        const datas = this.props.state.data ? this.props.state.data :''
        const datas1 = datas.data ? datas.data :''
        // console.log(datas1.data[0].content)
        return(
            <div className="contents" >
                <div className="head">金领事傻嘚</div>
                {
                    datas1.data[0].content.map((item)=>{
                        // console.log(item)
                        
                            return(
                                <div className="contents_li" key={ item.name  }>
                                    <img src={item.img} style={{ width:"6rem",height:"6rem" }}  />
                                    <div className="contents_li_data" >
                                        <div className="contents_li_data_1">
                                        { item.name }
                                        </div>
                                        <div className="contents_li_data_2">
                                        { item.test }
                                        </div>
                                        <div className="product-bottom">
                                            <p className="product-bottom-1">¥{item.price_new}</p>
                                            <p className="product-bottom-2">¥{item.price_ord}</p>
                                        </div>
                                        <div className="contents_img">
                                            <img src="https://static-as.missfresh.cn/frontend/item/static/img/new-cart.a16f026.png" />
                                        </div>
                                    </div>
                                </div>
                            )
                        
                    })
                }
            </div>
            )
        }
    
    componentDidMount(){
        this.props.getUseList()
        // console.log(this.props.getUseList())
    }
}

const mapStateToProps = state =>{
    return{
        state
    }
  }
  
export default connect(mapStateToProps,{getUseList})(Content)
// export default Content
