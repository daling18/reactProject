import React,{Component} from 'react'
import { Tabs, Select } from 'antd';
import {connect} from "react-redux"

import {getUseList} from '@/pages/Classify/action'
const { TabPane } = Tabs;
// const { Option } = Select;
import ATab from '../Tabs'
import LIst from '../List'
import Content from '../Content'
class Demo  extends Component {
      state = {
        tabPosition: 'left',
      };
      changeTabPosition = tabPosition => {
        this.setState({ tabPosition });
      };
      render() {
        const datas = this.props.state.data ? this.props.state.data :''
        const datas1 = datas.data ? datas.data :''
        // console.log(datas1.data_header)
        return (
          <div className="demo_left">
            <Tabs tabPosition={this.state.tabPosition} tabBarStyle={{"fontWeight":"blord" }}>
            {
              datas1.data_header?datas1.data_header.map((item)=>{
                // console.log(item)
                return(
                <TabPane tab={item.head_name} key={item.id} >
                  <div className="tabPane">
                    <ATab />
                    <LIst/>
                    <Content id={item.id} />
                  </div>
                </TabPane>
                )
              }):''
            }
            </Tabs>
          </div>
        );
      }
      componentDidMount(){
        this.props.getUseList()
        console.log(this.props.getUseList())
    }
  
}
const mapStateToProps = state =>{
  // console.log(state)
  return{
      state
  }
}

export default connect(mapStateToProps,{getUseList})(Demo)