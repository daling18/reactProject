<<<<<<< HEAD
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="content">
                class
            </div>
        )
    }
}
=======
import React,{Component} from 'react'
import TabLeft from './TabLeft'
class Classify extends Component{
    render() {
        console.log(this.props)
        return(
                <TabLeft/>
        )
    }
}


export default Classify
>>>>>>> classify
