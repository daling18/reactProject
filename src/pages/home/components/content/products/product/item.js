import React, { Component } from 'react'
import {newren,itemPrice} from './item.less'
export default class item extends Component {
    render() {
        const {image,name,subtitle,vip_price_pro}=this.props
        return (
            <div style={{
                backgroundColor: 'rgb(255, 255, 255)'
            }}>
                <div style={{
                    padding: "0px 1%",
                    width: '100%',
                    boxSizing:' border-box'
                }}>
                    <div style={{
                        borderTopLeftRadius:' 0.625rem',
                        borderTopRightRadius: '0.625rem',
                        padding: '0 0.625rem',
                        backgroundColor: '#fff'
                    }}>
                        <div style={{
                            background: '#fff',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            flex: '1 1 0',
                            position: 'relative',
                            boxSizing: 'border-box',
                            padding: '1.375rem 0',
                            borderBottom: '0.0625rem solid #f5f5f5'
                        }}>
                            <div style={{
                                width: '7.5rem',
                                height: '7.5rem',
                                marginRight: '0.9375rem',
                                marginLeft: '0.3125rem',
                                position: 'relative'
                            }}>
                                 <div>
                                     <img style={{
                                         width: '120PX',
                                         background: 'url(https://static-as.missfresh.cn/frontend/mfs3/web/static/img/default-image-product.2031e18.png) no-repeat center center',
                                         backgroundSize: '100% 100%',
                                         maxWidth: '100%',
                                     }} src={image} />
                                 </div>
                            </div>
                            <div style={{
                                flex: '1',
                                position: 'relative',
                            }}>
                                <div style={{
                                    marginTop: '0.625rem',
                                }} >

                                    <div>
                                        <p style={{
                                            fontSize: '1rem',
                                            color: '#474245',
                                            width: '12.5rem',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden'
                                            
                                            }} >{name}</p>
                                        <p style={{
                                            fontSize: '0.875rem',
                                            color: '#969696',
                                            width: '12.5rem',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden'
                                            
                                            }} >{subtitle}</p>
                                    </div>
                                </div>
                                <div style={{
                                    lineHeight: '1.3125rem',
                                    height: '1.625rem',
                                    marginBottom: '1.25rem',
                                }} >
                                    <span id={newren}>
                                        <p>
                                            <span>新人专享</span>
                                        </p>
                                    </span>
                                </div>
                                <div style={{
                                    marginBottom: '0.625rem',
                                }} > 
                                    <div className={itemPrice}>
                                        <div>
                                            <span className="sign">￥</span>
                            <span className="price">{(vip_price_pro.price_down.price)/100}</span>
                                            <span className="has-line-through">
                                                ￥
                            <span className="has-line">{(vip_price_pro.price_up.price)/100}</span>
                                            </span>
                                        </div>
                                    </div>

                                 </div>
                                <div style={{
                                    position: 'absolute',
                                    right: '0',
                                    bottom: '0.3125rem',
                                }}> 
                                
                                    <img style={{
                                        width: '45PX',
                                        display: 'block',
                                        transform: 'translateY(18%)'
                                    }} src={'https://j-image.missfresh.cn/img_20170425134548759.png'} />

                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
