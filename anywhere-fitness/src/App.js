import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { UserContext } from './contexts/UserContexts';
import PrivateRoute from './utils/PrivateRoute';

import SignUp from "./components/SignUp";
import Home from "./components/Home";
import InstructorLogin from "./components/InstructorLogin";
import MemberLogin from "./components/MemberLogin";
import Membership from "./components/Membership";
import Instructor from "./components/Instructor";


import "./App.css";

const initialUser = {
  id:'',
  username:''
}

function App() {
  const [user, setUser] = useState(initialUser);  
  // const [isOpen, setIsopen] = useState(false);
  // const toggle = () => setIsopen(!isOpen);
  // const value = {user: user, setUser: setUser};

  return (
    <Router>
      <div className="App">
        <div className="nav-bar">
          <nav>
            <Link to="/Home">Home</Link>
            <Link to="/SignUp">Sign-Up</Link>
            <Link to="/InstructorLogin">Instructor</Link>
            <Link to="/MemberLogin">Members</Link>
          </nav>
        </div>

        <Switch>
          {/* <UserContext.Provider> */}
            <Route exact path="/Home" component={Home} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/InstructorLogin" component={InstructorLogin} />
            <Route exact path="/MemberLogin" component={MemberLogin} />

            <PrivateRoute path="/Instructor" component={Instructor}>Instructors</PrivateRoute>
            <PrivateRoute path="/Membership" component={Membership}>Members</PrivateRoute>

          {/* </UserContext.Provider> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
