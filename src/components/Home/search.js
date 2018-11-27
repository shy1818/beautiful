import { SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";
import React, { Component } from "react";
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
  state = {
    value: "套装"
  };

  render() {
    return (
        <Searchstyle>
      
        
        <input type="search" className="am-search-value" placeholder="套装" />
        <a className="am-search-clear" />
       
      </Searchstyle>
    );
  }
}

export default Search;
