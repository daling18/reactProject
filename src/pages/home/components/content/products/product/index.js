import React, { Component } from 'react'
import Item from './item'
import {connect} from 'react-redux'
import {endLoading} from '../../actions'
class index extends Component {
    constructor(props){
        super(props)
        this.state={
            produtShowlist:[],
            nowpage:''
        }
        
    }
    componentDidMount(){
        if(!this.props.product_list){
            return
        }
        this.handerData(this.props)
    }
    handerData=(props)=>{
        
        if(props.scrollUp.page===this.state.nowpage){
            return
        }
        console.log(props.scrollUp.page)
        const produlist=props.product_list
        const {produtShowlist}=this.state
        const produlistItem=produlist?produlist.products.slice((props.scrollUp.page-1)*10+1,props.scrollUp.page*10+1):[]
        this.setState({
            produtShowlist:[...produtShowlist,...produlistItem],
            nowpage:props.scrollUp.page
        },()=>{
            this.props.endLoading()
        })
    }
    componentWillReceiveProps(props){
        this.handerData(props)
    }
    shouldComponentUpdate(props){
        if(props.scrollUp.page===this.state.nowpage){
            return false
        }
        return true
    }
    render() {
        return (
            <div>
                {
                    this.state.produtShowlist.map((item,index)=>{
                        const {image,name,subtitle,vip_price_pro}=item;
                        if(!vip_price_pro){
                            return ''
                        }
                        return <Item key={image} image={image} name={name} subtitle={subtitle} vip_price_pro={vip_price_pro}/>
                    })
                }
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        product_list:state.homeData.homeData.product_list,
        scrollUp:state.scrollUp
    }
}
export default connect(mapStateToProps,{endLoading})(index)
