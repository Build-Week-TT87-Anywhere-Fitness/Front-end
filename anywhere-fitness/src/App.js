import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import LoginInstructor from "./components/LoginInstructor";
import LoginMembership from "./components/LoginMembership";

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-bar">
            <Link to="/Home">Home</Link>
            <Link to="/SignUp">Sign-Up</Link>
            <Link to="/LoginInstructor">Instructor</Link>
            <Link to="/LoginMembership">Membership</Link>
          </div>
        </nav>


        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/LoginInstructor" component={LoginInstructor} />
          <Route exact path="/LoginMembership" component={LoginMembership} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
