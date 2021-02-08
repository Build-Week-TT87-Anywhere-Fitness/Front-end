import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { loginInstructor } from '../actions/actions';
import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup.string().required("Username is required "),
  password: yup.string().required(" password is required "),
});

function InstructorLogin({ loginInstructor, useHistory }) {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({
    username: "",
    password: ""
  });


  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => setError({ ...error, [e.target.name]: "" }))
      .catch((err) => setError({...error,[e.target.name]: err.errors[0],}));
  };

  useEffect(() => {
    formSchema.isValid(login).then(valid => setDisabled(!valid));
  }, [login]);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    validate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginInstructor(login, useHistory);
    setLogin({
      username:'',
      password:''
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2> Welecome, Please Sign In </h2>
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={login.username}
          />
          <div>{error.username}</div>
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="text"
            id="passowrd"
            name="password"
            onChange={handleChange}
            value={login.password}
          />
          <div>{error.password}</div>
        </label>
      </div>
      <div>
        <button disabled={disabled}> login </button>
      </div>
    </form>
  );
}

const mapStateToProps = state => {
	return {
		state
	};
};

const mapDispatchToProps = { loginInstructor };

export default connect(mapStateToProps, mapDispatchToProps)(InstructorLogin);