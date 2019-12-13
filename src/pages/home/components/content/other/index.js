import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {gethomeotherData} from '@/api/api'
import Item from '../products/product/item'
import BScroll from 'better-scroll'
class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            dataArr:[],
            showDtatList:[],
            page:1,
            betterScroll:null
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
                this.HanderpullingUp()
              })
            this.setState({
                betterScroll
            })
          } else {
            this.state.betterScroll.refresh()
          }
        
    }
    HanderpullingUp=()=>{
        const {page,dataArr,showDtatList,betterScroll}=this.state
        this.setState({
            page:page+1,
            showDtatList:[...showDtatList,...dataArr.slice(page*10,(page+1)*10)]
        },()=>{
            betterScroll.refresh()
            betterScroll.finishPullUp()
        })
    }
    getData=(props)=>{
        gethomeotherData(props.match.params.id)
        .then((res)=>{

            
            this.setState({
                dataArr:res.products,
                showDtatList:res.products.slice(0,10)
            },()=>{
                // this.state.betterScroll.refresh()
                this.bscroll()
            })
        })
    }
    render() {
        return (
            <div style={{
                height:'calc(100% - 2.625rem)'
            }} ref="content" >
                <div>
                    {
                        this.state.showDtatList.map((item)=>{
                            const {image,name,subtitle,vip_price_pro}=item;
                            if(!vip_price_pro){
                                return ''
                            }
                            return <Item key={image} image={image} name={name} subtitle={subtitle} vip_price_pro={vip_price_pro}/>
                        })
                    }
                </div>
                
            </div>
        )
    }
    componentDidMount(){
        this.getData(this.props)
    }
    componentWillReceiveProps(props){
        console.log(props)
        this.getData(props)
        this.state.betterScroll.scrollTo(0, 0, 0)
    }
}
export default withRouter(Index) 
