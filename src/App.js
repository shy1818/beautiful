import React, { Component } from 'react';
 
import Home from './pages/Home'
import Classify from './pages/Classify'
import Car from './pages/car'
import Shoptype from './components/shop/shoptype'
import Profile from './pages/profile'
import Search from './pages/search'
import Detail from './pages/detail'
import {Route,Redirect,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
         
          <Route path="/home" component={Home}/>
          <Route path="/classify" component={Classify}/>
          <Route path="/Car" component={Car}/>
          <Route path="/shoptype" component={Shoptype}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/search" component={Search}/>
          <Route path="/detail" component={Detail}/>
           <Redirect from='/' to='/home'/>
        </Switch>
      </div>
        
    );
  }
}

export default App;
