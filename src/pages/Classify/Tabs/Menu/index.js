import React,{Component} from 'react'
import { connect } from 'react-redux'
import {bool} from '@/pages/Classify/action'
class Fold extends Component {
    noShow(){
        // this.props.noShow = false
    }
    render(h) {
        // console.log(this.props)
        return(
            <div style={{position:"absolute",zIndex:1,right:0,top:0,}} className="fold">
                <p className="bg_tran"></p>
                <img src="https://static-as.missfresh.cn/frontend/item/static/img/arrow-down.06f44e1.png" onClick={ this.props.bool }  />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}
export default connect( mapStateToProps,{bool})(Fold)