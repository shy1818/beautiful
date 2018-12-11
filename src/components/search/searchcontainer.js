 
import React, { Component } from "react";
import {Link,withRouter} from 'react-router-dom';
import styled from 'styled-components'
 
//import SearchHot from "./searchhot";
import SearchNav from "./searchnav";
import SearchList from "./searchlist";
const Searchstyle=styled.div`
  
 .box{
  color: #666;
    
    position: relative;
    margin-left: 0.5rem;
    padding-top: 0.3rem;
    
 }
 .showFlag{
    display: none;
}
  
`

 
class Searchcontainer extends Component {
  constructor(props){
      super(props)
          this.state={
             items:''
          
      }
  }
  onChange=(items)=> {
    this.setState({items});
  }
  componentDidMount(){
     
  }
 render(){
    //console.log(this.state.items)
     return(
    <Searchstyle>
      <SearchNav onChange={this.onChange}/>
     <div className="body">
   
       <SearchList keylist={this.state.items||[]}/>
        </div>
    </Searchstyle>
   
    )  
     
    
    }
    
    
}
  export default Searchcontainer
 