import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { InstructorContext } from './contexts/InstructorContext';
import PrivateRoute from './utils/PrivateRoute';

import SignUp from "./components/SignUp";
import Home from "./components/Home";
import InstructorLogin from "./components/InstructorLogin";
import MemberLogin from "./components/MemberLogin";
import MemberForm from "./components/MemberForm";
import InstructorForm from "./components/InstructorForm";

import "./App.css";

const initialUser = [{
  id: '',
  username: '',
}]

function App() {
  const [user, setUser] = useState(initialUser);
  const value = {user: user, setUser: setUser};

  return (
      <div className="App">
        <div className="nav-bar">
          <nav>
            <Link to="/Home">Home</Link>
            <Link to="/SignUp">Sign-Up</Link>
            <Link to="/InstructorLogin">Instructor Login</Link>
            <Link to="/MemberLogin">Member Login</Link>
          </nav>
        </div>


          <InstructorContext.Provider>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/InstructorLogin" component={InstructorLogin} />
          <Route exact path="/MemberLogin" component={MemberLogin} />

          <PrivateRoute path="/InstructorForm" component={InstructorForm}>Instructors</PrivateRoute>
          <PrivateRoute path="/MemberForm" component={MemberForm}>Members</PrivateRoute>

          </InstructorContext.Provider>
       
      </div>
  );
}

export default App;
