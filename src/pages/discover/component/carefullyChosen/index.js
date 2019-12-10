import React, { Component } from 'react'

export default class carefullyChosen extends Component {
  render() {
    return (
      <div>
        <div className="module-wrap">
          <div className="list-header">
            <p className="list-title">一周吃什么</p>
            <p className="list-desc list-desc-before">轻松解决一日三餐的世纪难题</p>
          </div>
          <p className="line-1px"></p>
          
          <div className="article-list-wrap">
            <div className="article-big">
              <div className="big-wrap">
                <div className="article-card">
                  <div className="follow-user-item article__author">
                    <img src="https://j-image.missfresh.cn/img_20180705193539136.jpg"/> 
                    <span className="user__name overflow-ellipsis">上班族的便当</span>
                  </div>
                  <div className="article__cover"></div>
                  <h3>【早餐·北非蛋】别说没时间做早餐！给我一个蛋，好吃还不长胖！</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
