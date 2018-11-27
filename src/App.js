import React, { Component } from 'react';
 
import Home from './pages/Home'
import Classify from './pages/Classify'
import Car from './pages/car'
import Detail from './components/detail'
import Profile from './pages/profile'
import Search from './pages/search'
import {Route,Redirect,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
         
          <Route path="/home" component={Home}/>
          <Route path="/classify" component={Classify}/>
          <Route path="/Car" component={Car}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/search" component={Search}/>
           <Redirect from='/' to='/home'/>
        </Switch>
      </div>
        
    );
  }
}

export default App;
