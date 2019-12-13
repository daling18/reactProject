import React, { Component , createRef} from 'react'
import cssobj ,{nav} from './nav.less'
import Item from './item'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
import {getHomeRequset} from '../../action/index'
class index extends Component{
    componentDidMount(){
        new BScroll(this.refs.wrapper,{
            scrollX: true,
            click: true
        })
        this.props.getHomeRequset()
    }
    render() {
        const {category_list}=this.props.homeData
        return (
            <div className={cssobj['nav-out']}>
                <div className={nav} ref="wrapper">
                    
                    <div>
                        {
                            category_list?category_list.map((item)=>{
                                return <Item mag={item.name} path={item.internal_id} key={item.internal_id} />
                            }):''
                        }
                        
                    </div>
                    
                </div>
                <div className={cssobj['nav-right-btn']}></div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        homeData:state.homeData.homeData
    }
}
export default connect(mapStateToProps,{getHomeRequset})(index)
