import React,{Component} from 'react'
import Lis from './Lis'
import { connect } from 'react-redux'
class List extends Component {
    render(h) {
        const show = !this.props.ifShow
        return(
            <div className={show ? 'list':'no-show'}>
                <Lis/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return state
}
export default connect( mapStateToProps,null )(List)