import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

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
              <Link to="/Login">Login</Link>
              <Link onClick={logout}>Logout</Link>
              <Link to="/SignUp">Sign Up</Link>
            </nav>
          </div>
        <Route exact path="/" component={Login} />
        <Route component={SignUp} />
            
      </div>
    </Router>
  );
}

export default App;
