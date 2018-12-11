import { Grid } from 'antd-mobile';
import React, { Component } from "react";
import BScroll from 'better-scroll'
import axios from 'axios';
import styled from 'styled-components'
import Jsonp from 'jsonp'
import star from '@As/img/star.png'
import {withRouter, Route,Router,Link } from 'react-router-dom';
const Gridstyle=styled.div`
.price_info{
  color: #FF3366;
    text-align: center;
    font-size: 0.26rem;
    margin-right: 0.2rem;
    line-height: 1;
}
.fav_num {
    color: #999999;
    font-size: 0.26rem;
    line-height: 1;
}
  .no_collect_icon {
    display: inline-block;
    background: url(${star}) no-repeat;
    background-size: contain;
    width: .23rem;
    height: .22rem;
    margin-right: 0.07rem;
    vertical-align: -0.01rem;
}
`
class Chloth extends Component {
    constructor(props) {
        super(props);
         
        this.state = {
         items:[]
        };
        
      }
      componentDidMount() {
   
        //获取数据
        Jsonp("clothes/wap/search?keyword="+`${this.props.items}`+"%90&ptp=m1._mf80_1067_11423.0.0.VuDD9UV&scroll=0&frame=0&page=1&height=4599&remember=1",(err,data)=>{
   //console.log(data.data[5868].list )   
            this.setState({
              items:data 
            })
        })
      }
 render(){
   /*  console.log(this) */
  return (
     
   
    <Gridstyle>
       
       {/* <Link to="/detail"> 
    
  <Grid data={this.state.items} key={this.state.items.goods_id}
  columnNum={2} hasLine={false} 
  square={false}
  activeStyle={false}
  renderItem={dataItem => (
    <div>
       
      <img src={dataItem.pic_url} style={{ width: '180px', height: '233px' }} alt=""/>
      <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
        <span>{dataItem.title}</span>
        <br/>
        <span className="price_info">￥{dataItem.cprice}</span>
        <span className="fav_num"><em className="no_collect_icon"></em>{dataItem.oprice}</span>
      </div> 
    
    </div>
  )}
/>  
  </Link>   */}
 </Gridstyle>
 
 
    )    
     
      }
      compoentDidMount () {
        // 获取实例
         
      }
    }
  export default Chloth
 