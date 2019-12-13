import React, { Component } from 'react'
import img from '@/assets/img/search.png'
import cssobj from '../header.less'
import cssObj,{right as cssright,box} from '../header.less'
export default class right extends Component {
    render() {
        return (
            <div className={cssright}>
                <div className={cssObj['search-nav']}>
                    <div className={box}>
                        <img src={img}/>
                        <div>车厘子</div>
                    </div>
                </div>
            </div>
        )
    }
}
