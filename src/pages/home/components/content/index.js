import React, { Component } from 'react'
import Recommend from './recommend'
import Category from './category'
import Products from './products'
import BScroll  from 'better-scroll'
import {connect} from 'react-redux'
import {startLoading} from './actions'
class index extends Component {
    constructor(props){
        super(props)
        this.state={
            betterScroll:null,
        }
    }
    bscroll=()=>{
        if (!this.state.betterScroll) {
            // this.scroll = new Bscroll(this.$refs.wrapper, {})
            
            const betterScroll=new BScroll(this.refs.content,{
                click:true,
                scrollY:true,
                pullUpLoad:{
                    threshold:-100
                }
            })
            betterScroll.on('pullingUp', () => {
                
                this.props.startLoading()
                
              })
            this.setState({
                betterScroll:betterScroll
            })
          } else {
            this.state.betterScroll.refresh()
          }
        
    }
    componentDidMount(){
        this.bscroll()
    }  
    componentWillReceiveProps(props){
     
        if(!props.scrollUp.loading&&props.scrollUp.page!==1){
            this.state.betterScroll.refresh()
           this.state.betterScroll.finishPullUp()
            console.log(props.scrollUp)
        }
    }
    render() {
        return (
            <div ref="content" style={{
                height:'calc(100% - 2.625rem)'
            }}>
                <div>
                    <Recommend />
                    <Category />
                    <Products />
                    <div style={{
                        display:this.props.scrollUp.loading?'block':'none',
                        textAlign:'center'
                    }}>加载中</div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{

    return {
        scrollUp:state.scrollUp
    }
}
export default connect(mapStateToProps,{startLoading})(index)