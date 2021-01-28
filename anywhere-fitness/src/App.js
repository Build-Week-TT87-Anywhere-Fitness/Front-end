import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";

import './App.css';

function App() {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
            
      </div>
    </Router>
  );
}

export default App;
