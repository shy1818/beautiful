 
import React, { Component } from "react";
import {Link,withRouter} from 'react-router-dom';
import styled from 'styled-components'
import SearchNav from "./searchnav";
import Fire from '@As/img/fire.png'

import Jsonp from 'jsonp'
const Itemlist=styled.div`
 
  
    margin-left: 0.3rem;
 `
const Searchstyle=styled.div`
 
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
    font-size: 0.3rem;
}
.color{
    color:#666;
    font-size: 0.3rem;
}
`

 
class searchitem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }
  componentDidMount() {
   
      //获取数据
      Jsonp("/mg/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730",(err,data)=>{
 //console.log(data.data[5868].list )   
          this.setState({
            items:data.data[5868].list
          })
      })
    }
 render(){
     let items= this.state.items 
      
     return items.map(item => (
    
      
      
       <Searchstyle key={Math.random()}>
       
       <Link to='/shoptype'> <li className={item.is_red==1?"red":"color"}>{item.words}</li></Link>
      
      
  </Searchstyle>
    
    ) )   
     
    
    }
    
    
}
  export default searchitem
 