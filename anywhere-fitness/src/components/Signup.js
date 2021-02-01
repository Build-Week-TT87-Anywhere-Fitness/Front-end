import React from "react";
import axios from 'axios';

class SignUp extends React.Component {
    state = {
        credentials: {
            firstName: '',
            lastName: '',
            email: '',
            birthdate: '',
            username: '',
            password: '',
            authCode: '',
            isLoading: false
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    signup = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/signup", this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/");
            })
            .catch(err => console.log(err));
    };

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
                                First Name &nbsp;
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
                                Last Name &nbsp;
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
                            Email &nbsp;
                        <input
                                    type="text"
                                    name="email"
                                    value={this.state.credentials.email}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>

                        <div className="username-field">
                            <label>
                                Username &nbsp;
                        <input
                                    type="text"
                                    name="username"
                                    value={this.state.credentials.username}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>

                        <div className="password-field">
                            <label>
                                Password &nbsp;
                        <input
                                    type="password"
                                    name="password"
                                    value={this.state.credentials.password}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>

                        <div className="birthdate-field">
                            <label>
                            I am over 18 years old &nbsp;
                        <input
                                    type="checkbox"
                                    name="birthdate"
                                    value={this.state.credentials.birthdate}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>

                        <div className="authCode-field">
                            <label>
                                Instructor Code &nbsp;
                        <input
                                    type="checkbox"
                                    name="authCode"
                                    value={this.state.credentials.authCode}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>

                        <div className="signup-button">
                            <button>Sign Up</button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
};

export default SignUp;