import React,{Component} from 'react'
import TabTop from './TabTop'
import Menu from './Menu'
class Tabs  extends Component {
      render() {
        return (
          <div  className="data_top">
           <TabTop/>
           <Menu />
          </div>
        );
      }
  
}
export default Tabs 