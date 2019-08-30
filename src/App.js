import React from 'react';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from'./pages/ErrorPage';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
import './App.css';
import Rooms from './pages/Rooms';
function App() {
  return (
  <div>
    <Navbar/>
     <Switch>
     <Route exact path = "/"component = {Home}/> 
     <Route exact path = "/rooms/" component = {Rooms}/> 
     <Route exact path = "/rooms/:slug" component = {SingleRoom}/>
     <Route component={ErrorPage}/>>
     </Switch>
  </div>   
  );
}

export default App;
