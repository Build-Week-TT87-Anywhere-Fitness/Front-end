import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {
  FormContainer,
  StyledInputs,
  StyledHeader,
  StyledP,
  FormWrapper,
  FormImage,
} from "../styles/styled-components";

const initialUserCredentials = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  authCode: "",
};

function SignUp() {
  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );
  const [loginError, setLoginError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("", userCredentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setLoginError("");
        history.push("/MemberForm");
      })
      .catch((err) => {
        console.log(err);
        setLoginError("Ooops! Something went wrong.");
      });
    setUserCredentials(initialUserCredentials);
  };

  //Toggle funtionaity for instructor code (still working on functionality)
  // ToggleButton = () => {
  //   initialUserCredentials((userCredentials) => ({
  //     textDisplay: userCredentials.textDisplay,
  //   }));
  // }

  return (
    <FormContainer>
      <div>
        <StyledHeader>Anywhere Fitness</StyledHeader>
        <StyledP>Get Your Workout In Anywhere</StyledP>
        <FormWrapper>
          <img src="download.jpg" alt="shoePic"></img>
          <form onSubmit={signup}>
            <div className="signup-page">
              <StyledInputs>
                <div className="firstName-field">
                  <label>
                    First Name: &nbsp;
                    <input
                      type="text"
                      name="firstName"
                      value={userCredentials.firstName}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </StyledInputs>
              <StyledInputs>
                <div className="lastName-field">
                  <label>
                    Last Name: &nbsp;
                    <input
                      type="text"
                      name="lastName"
                      value={userCredentials.lastName}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </StyledInputs>
              <StyledInputs>
                <div className="email-field">
                  <label>
                    Email: &nbsp;
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      value={userCredentials.email}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </StyledInputs>
              <StyledInputs>
                <div className="username-field">
                  <label>
                    Username: &nbsp;
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      value={userCredentials.username}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </StyledInputs>
              <StyledInputs>
                <div className="password-field">
                  <label>
                    Password: &nbsp;
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={userCredentials.password}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </StyledInputs>
              <StyledInputs>
                <div className="authCode-field">
                  <label>
                    Select Membership
                    <select>
                      <option value="instructor">Instructor</option>
                      <option value="member">Member</option>
                    </select>
                  </label>
                </div>
              </StyledInputs>
              <StyledInputs>
                <div className="signup-button">
                  <button>Sign Up</button>
                </div>
              </StyledInputs>
            </div>
          </form>
        </FormWrapper>
      </div>
    </FormContainer>
  );
}

export default SignUp;
