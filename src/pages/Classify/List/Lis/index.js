import React,{Component} from 'react'
import { connect } from 'react-redux'
import {bool2} from '@/pages/Classify/action'
class Lis extends Component {
    render(h) {
        // console.log(this.props)
        return(
            
            <div className="lis">
                <div className="li"></div>
                <div className="li"></div>
                <div className="li"></div>
                <div className="li"></div>
                <div className="li"></div>
                <div className="li"></div>
                <div className="li"></div>
                <div className="li"></div>
                <div className="li"></div>
                <div className="li"></div>
                <div className="li"></div>
                <div className="li"></div>
                <p>
                <img src="https://static-as.missfresh.cn/frontend/item/static/img/arrow-down.06f44e1.png" onClick={ this.props.bool2 }  />
                </p>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return state
}
export default connect( mapStateToProps,{bool2})(Lis)