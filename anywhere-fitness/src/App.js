import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import InstructorLogin from "./components/InstructorLogin";
import MemberLogin from "./components/MemberLogin";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-bar">
          <nav>
            <Link to="/Home">Home</Link>
            <Link to="/SignUp">Sign-Up</Link>
            {/* <Link to="/Login">Login</Link> */}
            <Link to="/InstructorLogin">Instructor</Link>
            <Link to="/MemberLogin">Members</Link>
          </nav>
        </div>

        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
          {/* <Route exact path="/Login" component={Login} /> */}
          <Route exact path="/InstructorLogin" component={InstructorLogin} />
          <Route exact path="/MemberLogin" component={MemberLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
