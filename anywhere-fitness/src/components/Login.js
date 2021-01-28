import React from "react";
import axios from 'axios';

  class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
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

    login = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/BubblePage");
            })
            .catch(err => console.log(err));
    };

    render() {
      return (
         <div>
             <h1>Anywhere Fitness</h1>
                <h3>Get Your Workout In Anywhere</h3>
                <form onSubmit={this.login}>
                    <div className="login-page">

                <div className="username-field">
                    <label>
                        Username: &nbsp;
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
                        Password: &nbsp;
                        <input
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>

                <div className="login-button">
                    <button>Login</button>
                </div>

                    </div>
                </form>
            </div>
      );
    }
};

export default Login;