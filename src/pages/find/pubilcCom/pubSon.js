import React, { Component } from 'react'
import { Icon } from 'antd';
import Player from '../../../assets/img/player.png'
import '../../../assets/css/discover.less'
export default class PubSon extends Component {
  constructor(props){
    super(props)
    this.showInfo = this.showInfo.bind(this)
  }
  showInfo(){
    this.setState({
      show : true 
    },()=>{
      setTimeout(()=>{
        this.setState({
          show : false 
        })
      },2000)
    })
  }
  state={
    show:false
  }
  render() {
    return (
        <div className="list-wrap">
          {/* 提示弹窗 */}
          <div className= {this.state.show ? "showInfo alert" : "hideInfo alert"}>
            <p className="alertTxt">
            请复制链接在微信分享
            </p>
          </div>
        {
         this.props.data.map((item,i)=>{
          let newArr = item.articles
          return (
            <div className="module-wrap" key={i}>
              {/* 判断有无大标题 */}
            {item.module ? 
              <div className="list-header">
                <p className="list-title">{item.module.name}</p>
                <p className="list-desc list-desc-before"> <span>| {item.module.subtitle}</span></p>
              </div>
              :
              ""
              // <p style={{height:'0px',marginTop:"-30px"}}></p>  
            }
              <p className="line-1px"></p>
              <div className="article-list-wrap">
                <div className="article-big">{
                  // 判断是那种数据结构
                  newArr ? newArr.map(item=>{
                  return (
                    <div key={item.articleId} id={item.articleId}>
                      {/* 判断是那种样式结构 */}
                    {item.format  ? 
                    // 大图结构
                      <div className="big-wrap" >
                        <div className="article-card">
                         <div className="follow-user-item article__author">
                          <img src={item.authorPhoto} style={{width:"24px",height:"24px"}} /> 
                          <span className="user__name overflow-ellipsis">{item.nickname}</span>
                         </div>
                         <div className="article__cover" style={{position:'relative'}}>
                           <img src = {item.titlePic}  />
                           {
                            // 判断有无播放img
                            item.titleVideo ? 
                            
                             <a href={item.detailsUrl}>
                               <img src= {Player} className="player" style={{
                                position:'absolute',
                                top:"50%",
                                left:"50%",
                                width:48,
                                height:48,
                                transform: "translate(-50%)"
                              }}/> 
                            </a>
                            :
                            ''
                           }
                         </div>
                         <h3 className="article__title overflow-ellipsis-line2">{item.title}</h3>
                         <div className="article__controls">
                           <div className="control-item article__reading">
                           浏览 {item.fontReadNo}
                           </div>  
                           <div className="control-btn-area">
                             <div className="control-item article__btn-share" onClick={this.showInfo}>
                               <Icon type="wechat" />
                               {item.format ? <span className="share">分享</span> : ''}
                               
                             </div>
                           </div>
                         </div> 
                       </div>
                       <p className="line-1px"></p>
                     </div>  
                      :                    

                    /* 小图结构 */
                    <div className="big-wrap1" >
                     <div className="asc-wrap flex">
                       <div className="article-image">
                         <div className=" article-img image-loaded" style={{position:'relative'}}>
                           <img src={item.titlePic} className="titlePic"/>
                           {
                             item.titleVideo ? 
                             <a href={item.detailsUrl}>
                               <img src= {Player} className="player" style={{
                                position:'absolute',
                                top:30,
                                left:50,
                                width:48,
                                height:48
                              }}/> 
                            </a>
                            :
                            ''
                           }
                           
                         </div>
                       </div>
                       <div className="article-info">
                         <div className="follow-user-item">
                           <img src={item.authorPhoto} className="authorPhoto"/>
                           <span className="user__name overflow-ellipsis format-small__name">
                           {item.nickname}
                           </span>
                         </div>
                         <p className="article-title overflow-ellipsis-line2">
                         {item.title}
                         </p>
                         <div className="article-tool flex">
                           <div className="tool-left">
                             <span className="article-tool-view overflow-ellipsis flex">
                             浏览 {item.fontReadNo}
                             </span>
                           </div>
                           <div className="tool-right" onClick={this.showInfo}>
                            <Icon type="wechat" />
                           </div>
                         </div>
                       </div>
                     </div>
                    </div>}
                  </div>
                  )
                })

                :

                <div key={item.articleId} id={item.articleId}>
                    {/* 判断是哪种样式结构 */}
                  {item.format  ? 
                  // 大图结构
                    <div className="big-wrap">
                      <div className="article-card">
                       <div className="follow-user-item article__author">
                        <img src={item.authorPhoto} style={{width:"24px",height:"24px"}} /> 
                        <span className="user__name overflow-ellipsis">{item.nickname}</span>
                       </div>
                       <div className="article__cover" style={{position:'relative'}}>
                         <img src = {item.titlePic}  />
                         {
                          // 判断有无播放img
                          item.titleVideo ? 
                          
                           <a href={item.detailsUrl}>
                             <img src= {Player} className="player" style={{
                              position:'absolute',
                              top:"50%",
                              left:"50%",
                              width:48,
                              height:48,
                              transform: "translate(-50%)"
                            }}/> 
                          </a>
                          :
                          ''
                         }
                       </div>
                       <h3 className="article__title overflow-ellipsis-line2">{item.title}</h3>
                       <div className="article__controls">
                         <div className="control-item article__reading">
                         浏览 {item.fontReadNo}
                         </div>  
                         <div className="control-btn-area">
                           <div className="control-item article__btn-share" onClick={this.showInfo}>
                             <Icon type="wechat" />
                             {item.format ? <span className="share">分享</span> : ''}
                             
                           </div>
                         </div>
                       </div> 
                     </div>
                     <p className="line-1px"></p>
                   </div>  
                    :                    

                  /* 小图结构 */
                  <div className="big-wrap1">
                   <div className="asc-wrap flex">
                     <div className="article-image">
                       <div className=" article-img image-loaded" style={{position:'relative'}}>
                         <img src={item.titlePic} className="titlePic"/>
                         {
                           item.titleVideo ? 
                           <a href={item.detailsUrl}>
                             <img src= {Player} className="player" style={{
                              position:'absolute',
                              top:30,
                              left:50,
                              width:48,
                              height:48
                            }}/> 
                          </a>
                          :
                          ''
                         }
                         
                       </div>
                     </div>
                     <div className="article-info">
                       <div className="follow-user-item">
                         <img src={item.authorPhoto} className="authorPhoto"/>
                         <span className="user__name overflow-ellipsis format-small__name">
                         {item.nickname}
                         </span>
                       </div>
                       <p className="article-title overflow-ellipsis-line2">
                       {item.title}
                       </p>
                       <div className="article-tool flex">
                         <div className="tool-left">
                           <span className="article-tool-view overflow-ellipsis flex">
                           浏览 {item.fontReadNo}
                           </span>
                         </div>
                         <div className="tool-right" onClick={this.showInfo}>
                          <Icon type="wechat" />
                         </div>
                       </div>
                     </div>
                   </div>
                  </div>}
                </div>
              
              }   
                </div>
              </div>
            </div>
          )
        
      })
      }
    </div>
    )
  }
}
