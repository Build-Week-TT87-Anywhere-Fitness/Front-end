import React, { useState, useEffect } from "react";
import * as yup from "yup";


const formSchema = yup.object().shape({
  firstName: yup.string().required("firstName is required "),
  lastName: yup.string().required("lastName is required "),
  email: yup.string().required("email is required "),
  username: yup.string().required("Username is required "),
  password: yup.string().required(" password is required ")
});

export default function SignUp() {
  const [signup, setSignup] = useState({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      auth:'',
      member: "",
      instructor:''
  });

  const [signupComplete, setSignupComplete]  = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      auth:'',
      member: "",
      instructor:''
  });

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => setError({ ...error, [e.target.name]: "" }))
      .catch((err) => setError({...error,[e.target.name]: err.errors[0],}));
  };

  useEffect(() => {
    formSchema.isValid(signup).then(valid => setDisabled(!valid));
  }, [signup]);

  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    validate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const signupCompleted = {
      firstName: signup.firstName.trim(),
      lastName: signup.lastName,
      email: signup.email,
      username: signup.username,
      password:signup.password,
      auth: signup.auth,
      member: signup.member,
      instructor: signup.instructor
    };

    setSignupComplete([...signupComplete, signupCompleted]);

    setSignup({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      auth:'',
      member: "",
      instructor:''
    });
  };
  

    return (
      <div>
        <h3>Join Now</h3>
        <form onSubmit={handleSubmit}>
          <div className="signup-page">
            <div className="firstName-field">
              <label>
                First Name: &nbsp;
                <input
                  type="text"
                  name="firstName"
                  value={signup.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="lastName-field">
              <label>
                Last Name: &nbsp;
                <input
                  type="text"
                  name="lastName"
                  value={signup.lastName}
                  onChange={handleChange}
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
                  value={signup.email}
                  onChange={handleChange}
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
                  value={signup.username}
                  onChange={handleChange}
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
                  value={signup.password}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="authCode-field">
              <label value={signup.auth}>
                Select Membership
                <select>
                  <option value={signup.instructor} name='instructor'>Instructor</option>
                  <option value={signup.member} name='member'>Member</option>
                </select>
              </label>
            </div>

            <div className="signup-button">
              <button disabled={disabled}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
