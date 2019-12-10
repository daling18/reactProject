import React, { Component } from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import '../../assets/css/discover.less'
import {
  CarefullyChosen,
  Cookbook,
  Life,
  SoftDrinks
} from './component'
import Loading from '../../component/Loading'
export default class Find extends Component {

  render() {
    return (
      <div>
      <Tabs defaultActiveKey="1" className='tabs'>
        <TabPane className='aTab'
          tab={
            <div>
            <img src="http://static-as.missfresh.cn/frontend/discovery/static/img/author-default.3af07f7.png"/>
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
          <Life/>
        </TabPane>
        <TabPane
          tab={
            <span>
              生活百科
            </span>
          }
          key="4"
        >
          <SoftDrinks/>
        </TabPane>
      </Tabs>
    </div>
    )
  }
}

