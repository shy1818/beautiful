import { Grid } from 'antd-mobile';
import React, { Component } from "react";
 
import axios from 'axios';
import styled from 'styled-components'
 import Detail from '../detail'
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
       componentDidMount(){
        axios.get( 'ml/api/getGoods?page=1&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp').then((res)=>{
           //console.log(res.data.data.goods);
            this.setState({
             items:res.data.data.goods
            })
             
            
        }).catch((err)=>{
            console.log('数据获取失败');
        })
    }
 render(){
   /*  console.log(this) */
  return (
      <Link to="/detail"> 
   
    <Gridstyle>
      
    
  <Grid data={this.state.items} key={this.state.items.goods_id}
  columnNum={2} hasLine={false} 
  square={false}
  activeStyle={false}
  renderItem={dataItem => (
    <div >
       {/*  <a href={dataItem.link}> */}
      <img src={dataItem.pic_url} style={{ width: '180px', height: '233px' }} alt=""/>
      <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
        <span>{dataItem.title}</span>
        <br/>
        <span className="price_info">￥{dataItem.cprice}</span>
        <span className="fav_num"><em className="no_collect_icon"></em>{dataItem.oprice}</span>
      </div> 
      {/*  </a> */}
    </div>
  )}
/> 
  
 </Gridstyle>
 
 </Link>  
    )    
     
      }
    }
  export default withRouter(Chloth)
 