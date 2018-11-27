 
import React, { Component } from "react";
import {Link,withRouter} from 'react-router-dom';
import styled from 'styled-components'
import SearchNav from "./searchnav";
import Fire from '@As/img/fire.png'
 
import Jsonp from 'jsonp'
import Searchitem from "./searchitem";
const Searchstyle=styled.div`
  
 .box{
  color: #666;
    
    position: relative;
    margin-left: 0.5rem;
    padding-top: 0.3rem;
    
 }
 .tit-icon {
    position: absolute;
    left: -0.07rem;
    display: inline-block;
    width: 0.3rem;
    height: 0.4rem;
    background: url(${Fire}) no-repeat;
    background-size: contain;
}
.title {
    font-size: 0.4rem;
    font-weight: normal;
    padding-left: 0.3rem;
    margin-bottom: 0.05rem;
    
}
 .list{
   height:600px;
   background:white;
 }
 .list li {
    float: left;
    padding: .08rem .22rem;
    margin-top: 0.25rem;
    background-color: #F4F4F4;
    margin-left: 0.4rem;
    border-radius: 0.4rem;
}
.red {
    color: #f36;
 
}
`

 
class searchcontainer extends Component {
  
 render(){
     
      
     return(
    
     <div className="body">
       <SearchNav/>
       <Searchstyle>
       <div className='box'>
        <span className="tit-icon"></span>
        <h3 className="title">热门搜索</h3>
       </div>
       <ul className='list'>
       <Searchitem></Searchitem>
       </ul>
       </Searchstyle>
    </div>
    
    )  
     
    
    }
    
    
}
  export default searchcontainer
 