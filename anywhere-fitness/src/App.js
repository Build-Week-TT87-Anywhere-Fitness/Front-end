import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import Membership from "./components/Membership";

import './App.css';

function App() {

  return (
    <Router>
       <div className="App">
        <div className="nav-bar">
            <nav>
              <Link to="/Home">Home</Link>
              <Link to="/SignUp">Sign-Up</Link>
              <Link to="/Login">Login</Link>
              <Link to="/Instructor">Instructor</Link>
              <Link to="/Membership">Membership</Link>
            </nav>
          </div>
          
        <Switch>
          <Route exact path="/Home"component={Home} />
          <Route exact path="/SignUp"component={SignUp} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Instructor"component={Instructor} />
          <Route exact path="/Membership"component={Membership} />
        </Switch>
            
      </div>
    </Router>
  );
}

export default App;
