import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import styled from 'styled-components'
import Flower from '@As/img/flower.png'
 
 import Search from "@C/Home/search"
const Searchstyle=styled.div`
    height: 1.2rem;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 0rem .24rem;
    width: 100%;
    background:white
    .left{
    width: .8rem;
    height: 1rem;
    margin: 0 .3rem;
    background: url(${Flower})  no-repeat center;
    background-size: contain;
    text-align: center;
    
    } 
    .right{
     
    width: 0.98rem;
    height: 0.56rem;
    line-height: 0.56rem;
    text-align: center;
    color: #666;
    
}
   
`

  class Searchnav extends Component {
   
    render() {
       
      return (
        < Searchstyle>
        <div className="left">
       
        </div>
        <div className="center"><Search/></div>
        <Link to='/home' className="right">取消</Link>
         
      </ Searchstyle>
      )
    }
  }
  
  export default Searchnav;
  