import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';

import Navigation from './components/Navigation';
import Home from "./components/Home";

import SignUp from "./components/SignUp";
import InstructorLogin from "./components/InstructorLogin";
import MemberLogin from "./components/MemberLogin";

import InstructorForm from "./components/InstructorForm";
import ClassList from "./components/ClassList";

import "./App.css";
import { Body } from './styles/styled-components';


function App() {
  
  return (
    <Body>
      <div className="App">
        <Navigation />
          <Switch>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/InstructorLogin" component={InstructorLogin} />
              <Route exact path="/MemberLogin" component={MemberLogin} />

            <PrivateRoute>
              <Route path="/InstructorForm" component={InstructorForm}>Instructors</Route>
              <Route path="/ClassList" component={ClassList}>Classes</Route>
            </PrivateRoute>
          </Switch>
      </div>
    </Body>
  );
}

export default App;
