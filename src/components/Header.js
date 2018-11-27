import React, { Component } from 'react';
 
import styled from 'styled-components'
import Flower from '@As/img/flower.png'
import Message from '@As/img/message.png'
 import Search from "@C/Home/search"
const Headerstyle=styled.div`
    height: 1.2rem;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 0rem .24rem;
    width: 100%;
    background:white
    .left{
    width: .56rem;
    height: .98rem;
    margin: 0 .3rem;
    background: url(${Flower})  no-repeat center;
    background-size: contain;
    text-align: center;
    color: #666;
    } 
    .right{
     
    width: 0.98rem;
    height: 0.56rem;
    line-height: 0.56rem;
    text-align: center;
    background: url(${Message})  no-repeat center center;
    background-size: .48rem .45rem;
}
   
`

  class Header extends Component {
   
    render() {
       
      return (
        <Headerstyle>
        <div className="left">
       
        </div>
        <div className="center"><Search/></div>
        <div className="right"></div>
         
      </Headerstyle>
      )
    }
  }
  
  export default Header;
  