import React,{Component} from 'react'
import { Provider} from "react-redux";

import store from './store/store'
import TabLeft from './TabLeft'
import '@/assets/css/classify/classify.css'
class Classify extends Component{  
    render() {
        return(
            <Provider store = {store}> 
                <div className="content" >
                    <TabLeft/>
                </div>
            </Provider>
        )
    }
   
}

export default Classify
