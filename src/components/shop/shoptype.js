import { Grid } from 'antd-mobile';
import React, { Component } from "react";
 import Shopclothes from "./shopclothes"
import axios from 'axios';
import styled from 'styled-components'
import uuid from "uuid"
import SearchNav from "../search/searchnav";
import Jsonp from 'jsonp'

const Shopstyle=styled.div`
    .nav-wrap{
    background-color: #fff;
    height:1.1rem;
    line-height: 1.1rem;
    overflow: hidden;
    font-size: 0.4rem;
    width: 100%;
    border-bottom: .02rem solid #eee;
  }
  .nav-wrap a{
    width: 33.333333333333%;
    display: inline-block;
    text-align: center;
    color: #666;
    text-decoration: none;
  }
    .show-arrow {
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.08rem 0.1rem 0.08rem 0.1rem;
    border-left: 1px solid #c3c3c3;
    border-bottom: 1px solid #c3c3c3;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);  
    }
    .show-arrow-wrap {
      top: 1.4rem; 
    right: 0.18rem;
    position: absolute;
    display: inline-block;
    height: 0.5rem;
    line-height: 0.5rem;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    }
`
class Detail extends Component {
    constructor(props) {
        super(props);
         
      
    }
 render(){
    
  return (
      <Shopstyle>
   <SearchNav></SearchNav>
   <div className="nav-wrap" >
   <a className="nav-item fl" href="javascript:void(0);">
       <span>流行</span>
    </a>
     <a className="nav-item fl" href="javascript:void(0);" >
     <span>新款</span>
    </a>
   <a className="nav-item fl" href="javascript:void(0);">
     <span>价格<div className="show-arrow-wrap flip-off">
                        <div className="show-arrow"></div>
                    </div></span>
   </a>    
 </div>
 <Shopclothes></Shopclothes>
</Shopstyle>
    )    
     
    
    }
}
  export default Detail 
 