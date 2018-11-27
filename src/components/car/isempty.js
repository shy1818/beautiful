 
import React, { Component } from "react";
 
import {Link} from 'react-router-dom';
import styled from 'styled-components'
 
 const Isemptystyle=styled.div`
  .none_info {
    text-align: center;
    padding-top: 2.34rem;
   
}
.none_info p {
    line-height: .5rem;
     color: #666;
}
.btn {
    display: block;
    width: 1.52rem;
    margin-left: auto;
    margin-right: auto;
    padding: .18rem 0;
    margin-top: .4rem;
    border-radius: .03rem;
    background-color: #f66;
    color: #fff;
}
 `
 
class Isempty extends Component {
   
 render(){
    
  return (
      <Isemptystyle>
    <div className="none_info">
     <p>您的购物车还空着呢，</p>
      <p>美物这么多，快去看看吧～</p>
       <Link to="/" className="btn">去逛逛</Link>
        </div>
        </Isemptystyle>
    )    
     
    
    }
}
  export default Isempty
 