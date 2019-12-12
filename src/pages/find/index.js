import React, { Component } from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import '../../assets/css/discover.less'
import logImg from '../../assets/img/find_head_logo.jpg'

import {
  CarefullyChosen,
  Cookbook,
  Life,
  SoftDrinks
} from './component'
  
export default class Find extends Component {
  
  render() {
    return (
      <div className="content" style={{paddingBottom: ".3rem"}}>
      <Tabs defaultActiveKey="1" className='tabs'>
        <TabPane className='aTab'
          tab={
            <div>
            <img src={logImg} className="logoImg" / >
            <span>
            精选
            </span>
            </div>
          }
          key="1"
        >
          
          <CarefullyChosen/>
        </TabPane>
        <TabPane 
          tab={
            <span>
              快手食谱
            </span>
          }
          key="2"
        >
          <Cookbook/>
        </TabPane>
        <TabPane 
          tab={
            <span>
              甜点饮品
            </span>
          }
          key="3"
        >
          <SoftDrinks/>
        </TabPane>
        <TabPane
          tab={
            <span>
              生活百科
            </span>
          }
          key="4"
        >
          <Life/>
        </TabPane>
      </Tabs>
    </div>
    )
  }
  
}

