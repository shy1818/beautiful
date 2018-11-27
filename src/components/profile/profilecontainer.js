 
import React, { Component } from "react";
import {Link,withRouter} from 'react-router-dom';
//import Isempty from './isempty'
import ProNav from "./pronav";
import styled from 'styled-components'
import login from "@As/img/login.png"
const Procontainerstyle=styled.div`
 .login-content{
    padding: 1rem .3rem 0;
    background:white;
 }
 .userinput-title{
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.28rem;
    color: #666;
    margin-bottom: 0.7rem;
    
}
input::-webkit-input-placeholder {
       /* placeholder颜色  */
         color: #aab2bd;
}
.userinput-input{
    margin-bottom: 0.49rem;
    height: 0.63rem;
    line-height: 0.63rem;
    width: 100%;
    display: block;
    text-align: center;
    padding-bottom: 0.15rem;
    font-size: 0.48rem;
    border: none;
    border-bottom: 1px solid #ededed;
    color: #333;
    background: #fff;
    }
    .login-captcha{
    margin-bottom: .2rem;
}
.confirm_button{
    width: 100%;
    font-size: 0.36rem;
    height: 1rem;
    line-height: 1rem;
    display: inline-block;
    background: #ff1877;
    color: #fff;
    border: none;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    background-color: rgb(255, 70, 80);
}
.login-ways{
    margin-top: .3rem;
    text-align: center;
}
.login--clearfix{
    content: "";
    display: block;
    clear: both;
}
.login-ways-idea{
    color: #999;
    font-size: .28rem;
    float:left;
    text-decoration: none;
}
.login-ways-register{
    color: #ff4650;
    font-size: .28rem;
    float:right;
}
.login-thirdline {
    margin-top: .08rem;
    padding: 1.08rem .3rem .24rem;
    width: 100%;
}
.login-thirdline-line{
    display: inline-block;
    width: 2.67rem;
    height: .2rem;
    border-bottom: .01rem solid #f1f1f1;
}
.login-thirdline-or{
    display: inline-block;
    text-align: center;
    width: .8rem;
    font-size: .2rem;
    height: .2rem;
    line-height: .2rem;
    color: #f1f1f1;
}
.thirdlogin {
    width: 100%;
    text-align: center;
}
.thirdlogin-normal{
    display: inline-block;
    width: 1.03rem;
    
    
    background: url(${login}) center center  no-repeat;
    background-size: contain;
    width: 3rem;
    margin: 0px auto;
    height: 3rem;

}
`
class Procontainer extends Component {
     
 render(){
    
  return (
     <div>
       <ProNav/>
       <Procontainerstyle>
       <div className="login-content">
       <div className="userinput">
       <p className="userinput-title">美丽说帐号</p>
        <input type="text" placeholder="输入用户名/邮箱/手机" maxLength="32"className="userinput-input"/>
          </div>
           <div className="userinput">
           <p className="userinput-title">密码</p>
            <input type="password" placeholder="输入密码" maxLength="32"className="userinput-input"/>
              </div>
               <div id="login-captcha" className="login-captcha">
               </div>
                <div className="confirm_button">
  登录
</div> 
<p className="login-ways login--clearfix">
<a href="javascript:void;" className="login-ways-idea">免密登录</a>
 <a href="javascript:void;" className="login-ways-register">注册帐号</a></p>
  <div className="login-thirdline"><span className="login-thirdline-line"></span>
   <span className="login-thirdline-or">Or</span>
    <span className="login-thirdline-line"></span></div>
     <div className="meili-mgj-vue-base-thirdlogin thirdlogin" > 
     <a href="javascript:void(0);" className="thirdlogin-qq thirdlogin-normal" ></a>
     </div></div>
       </Procontainerstyle>
    </div>
    
    )    
     
    
    }
}
  export default withRouter(Procontainer)
 