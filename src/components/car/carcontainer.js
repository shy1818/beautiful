 
import React, { Component } from "react";
import {Link,withRouter} from 'react-router-dom';
import Isempty from './isempty'
import CarNav from "./carNav";

class Carcontainer extends Component {
     
 render(){
    
  return (
     <div>
       <CarNav/>
       <Isempty/>
    </div>
    
    )    
     
    
    }
}
  export default withRouter(Carcontainer)
 