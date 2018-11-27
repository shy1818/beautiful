 
import React, { Component } from "react";
import Shopitem from "./Shopitem";
import Header from "../Header";
import styled from 'styled-components'
const Classifystyle=styled.div`
 .title{
  padding: .3rem;
  background:white
 }
.title h3{
  color: #333;
    font-size: .4rem;
    font-weight: normal;
   
}
`
class Classifycontainer extends Component { 
    
    render(){
        return (
          <Classifystyle>
          <Header/>
          <div className="title">
					<h3>本周流行</h3>
					<p></p>
				</div>
       <Shopitem/>
          </Classifystyle>
        )
     
      }
    }
  export default Classifycontainer