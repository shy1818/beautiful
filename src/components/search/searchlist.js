import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import SearchNav from "./searchnav";
import Fire from "@As/img/fire.png";
import uuid from "uuid"
import Jsonp from "jsonp";
import Searchitem from "./searchitem";
 
const Searchstyle=styled.div`
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
const Itemlist = styled.div`
  padding-left: 0.3rem;
  background:white;
`
const List = styled.div`
 .item {
    line-height: 1rem;
    overflow: hidden;
    height: 1rem;
    border-bottom: 1px solid #e6e5e6;
    list-style:none;
}
.left {
    color: #333;
    float: left;
    font-size: 0.35rem;
}
.right {
    float: right;
    padding-right: 0.3rem;
}
.tags {
    font-size: 0.24rem;
    background-color: #F8F8F8;
    border-radius: 0.4rem;
    padding: .08rem .2rem;
    margin-left: 0.1rem;
    color:#666;
}
`
 

class SearchList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          items: []
        };
       // console.log(this )
      }
   
      
 
  render(){
    //console.log(this.props.keylist)
    if(this.props.keylist!=''){
    return(
      <Itemlist>
       
              { 
                this.props.keylist.map(
                ( item,index)=>{
                 return <List key={index}>
                         
                         <Link to='/shoptype'> <li className="item">
                           <span className="left">{ item.title} </span>
                           <span className="right">{(item.props?item.props:[]).map(
                              ( items,i)=>{
                                return <i className="tags" key={i}>{items.title}</i>
                          } )
                           
                        }
                           </span>
                         </li> </Link>
                         </List>
                          
                })
               
              }
              </Itemlist>
          )
      }
      else{
               
     return(
    
      <Searchstyle>
         
         
          <div className='box'>
           <span className="tit-icon"></span>
           <h3 className="title">热门搜索</h3>
          </div>
          <ul className='list'>
        <Searchitem/>
          </ul>
          </Searchstyle>
        
       
       )  
      }
  }
  
}
export default SearchList;
