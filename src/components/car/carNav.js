 
import React, { Component } from "react";
 
import {Link,withRouter} from 'react-router-dom';
import styled from 'styled-components'
 
 const CarNavstyle=styled.div`
   .page_head {
    height: 1.4rem;
    width: 100%;
    text-align: center;
    color: #333;
    line-height: 1.4rem;
    border-bottom: .02rem solid rgba(51,51,51,.15);
    background:white;
}
.back_icon {
    z-index: 5;
    float: left;
    text-align: left;
    vertical-align: middle;
    width: .8rem;
    padding-left: .3rem;
}
.back_icon img {
    width: .3rem;
    display: inline-block;
    margin-top: .08rem;
}
.right_btn {
    z-index: 5;
    font-size: .5rem;
    color: #666;
    text-decoration: none;
    float: right;
    padding-right: .3rem;
    height: .88rem;
}
.title {
    z-index: 1;
    text-align: center;
}
.page_head .title a {
    font-size: .5rem;
    color: #666;
    text-decoration: none;
}
 `
 
class CarNav extends Component {
    
 render(){
   
  return (
      <CarNavstyle>
   <header className="page_head">
   	<div className="back_icon" id="back_btn">
       <Link to='/home'><img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png"/></Link></div>
       			<Link to='/home' className="right_btn">首页</Link>
                   		<div className="title"><a href="javascript:;">购物车</a></div>
                           </header>
        </CarNavstyle>
    )    
     
    
    }
}
  export default CarNav
 