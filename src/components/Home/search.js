import { SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";
import React, { Component } from "react";
import uuid from "uuid"
import Jsonp from "jsonp"
import styled from 'styled-components'
import Searchimg from '@As/img/search.png'
const Searchstyle=styled.div`
.am-search-value{
font-size: 0.24rem;
    color: #333;
    border: none;
    padding: .15rem .15rem .15rem .55rem;
    width: 7.066667rem;
    border-radius: 0.1rem;
    margin-bottom: 0.16rem;
    margin-top: 0.16rem;
    height: .746667rem;
    background: #F4F4F4 url(${Searchimg}) no-repeat 0.2rem center;
    background-size: auto .36rem;
    -webkit-appearance: none;
    outline: none;
}
`

class  Search extends Component {
  constructor(props){
    super(props)
   /*  this.handleText = this.handleText.bind(this) */
    this.searchHandler = this.searchHandler.bind(this)
   this.state={
     items:'',
     text:''
  
  }
  }
  /* handleText(e){
    this.props.onChange(e.target.value)
  } */
  
  searchHandler(e) {
    var text = e.target.value;
    //console.log(this.props.itemkey)
       //获取数据
       Jsonp("/sousuo/jsonp/searchTipsMLS/1?data=%7B%22"+`keyword":"${text}`+"%22%7D&_=1543835593407",(err,data)=>{
        
  //console.log(data.data.tips)   
       this.setState({
         items:data.data.tips,
         text:text
       })
       this.props.onChange(data.data.tips)
       })
     }
  render() {
      /* const value=this.props.value */
      console.log(this.state.text)
    return (
    
        <Searchstyle>
      
     {/*  value={value} onChange={this.handleChange} */}
        <input type="search" className="am-search-value" placeholder='套装' onChange={this.searchHandler} value={this.state.text}/>
     
       
      </Searchstyle>
    );
  }
}

export default Search;
