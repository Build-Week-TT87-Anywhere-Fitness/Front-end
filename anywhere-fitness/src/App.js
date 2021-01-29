import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";


import './App.css';

function App() {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <div className="nav-bar">
            <nav>
              <Link to="/Home">Home</Link>
              <Link to="/SignUp">Sign Up</Link>
              <Link to="/Login">Login</Link>
              <Link onClick={logout}>Logout</Link>
            </nav>
          </div>
          
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp"component={SignUp} />
        </Switch>
            
      </div>
    </Router>
  );
}

export default App;
