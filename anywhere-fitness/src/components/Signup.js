import React from "react";
import { UserContext } from '../contexts/UserContext';
import axios from "axios";

// const initialUserCredentials = {
//   username: "",
//   password: "",
// };

class SignUp extends React.Component {
  state = {
    credentials: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      authCode: "",
      isLoading: false,
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  signup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/signup", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  //Toggle funtionaity for instructor code   
  ToggleButton() {
    this.setState((currentState) => ({
      textDisplay: currentState.textDisplay,
    }));
  }

  render() {
    return (
      <div>
        <h1>Anywhere Fitness</h1>
        <h3>Get Your Workout In Anywhere</h3>
        <form onSubmit={this.signup}>
          <div className="signup-page">
            <div className="firstName-field">
              <label>
                First Name: &nbsp;
                <input
                  type="text"
                  name="firstName"
                  value={this.state.credentials.firstName}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="lastName-field">
              <label>
                Last Name: &nbsp;
                <input
                  type="text"
                  name="lastName"
                  value={this.state.credentials.lastName}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="email-field">
              <label>
                Email: &nbsp;
                <input
                  type="text"
                  name="email"
                  placeholder='email'
                  value={this.state.credentials.email}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="username-field">
              <label>
                Username: &nbsp;
                <input
                  type="text"
                  name="username"
                  placeholder='username'
                  value={this.state.credentials.username}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="password-field">
              <label>
                Password: &nbsp;
                <input
                  type="password"
                  name="password"
                  placeholder='password'
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="authCode-field">
            <label>Select</label>
              <input type="select" value={this.state.credentials.authCode} onChange={this.handleChange}>
                <option value='instructor'>Instructor</option>
                <option value='member'>Member</option>
            </input>
      
            </div>

            <div className="signup-button">
              <button onClick={() => this.ToggleButton()}>Sign Up</button>
              {!this.state.textDisplay && this.props.text}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;