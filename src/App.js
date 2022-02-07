
import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home'
import Navbar from './components/Header/Navbar'
import SignUpPage from './components/Signup/SignUpPage'
import LoginPage from './components/Login/LoginPage'
import IsAuthenticated from './components/Auth/IsAuthenticated'
import Dashboard from './components/Dashboard/UserDashBoard'

function App() {
  
 return (

    <React.Fragment>
      <Navbar />
      <Switch>

        <Route path="/" exact component={Home}/>
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <IsAuthenticated path="/dashboard" component={Dashboard} />
      </Switch>
    </React.Fragment>


  );
}

export default App;
