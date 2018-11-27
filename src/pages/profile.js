 
import React, { Component } from "react";
import {Link,withRouter} from 'react-router-dom';
//import Isempty from './isempty'
import Procontainer from "@C/profile/profilecontainer";

class Profile extends Component {
     
 render(){
    
  return (
     <div>
       <Procontainer/>
       
    </div>
    
    )    
     
    
    }
}
  export default withRouter(Profile)
 