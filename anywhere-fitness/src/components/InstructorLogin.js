import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup.string().required("Username is required "),
  password: yup.string().required(" password is required "),
});

export default function Instructor() {
  const [instuctorForm, setInstuctorForm] = useState({
    username: "",
    password: "",
    authCode: "",
  });

  const [errorState, setErrorState] = useState({
    username: "",
    password: "",
    authCode: "",
  });

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({ ...errorState, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputchange = (e) => {
    e.persist();
    validate(e);
    setInstuctorForm({ ...instuctorForm, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/Membership", instuctorForm)
      .then((response) => console.log("form submitted", response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitForm}>
      <h2> Welecome, Please Sign In </h2>
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            onChange={inputchange}
            value={instuctorForm.username}
          />
          {errorState.password ? <p>{errorState.username}</p> : null}
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="text"
            id="passowrd"
            name="password"
            onChange={inputchange}
            value={instuctorForm.password}
          />
          {errorState.password ? <p>{errorState.password}</p> : null}
        </label>
      </div>
      <div>
        <label htmlFor="authCode">
          Authorization:
          <input
            type="text"
            id="authCode"
            name="authCode"
            onChange={inputchange}
            value={instuctorForm.authCode}
          />
          {errorState.password ? <p>{errorState.authCode}</p> : null}
        </label>
      </div>
      <div>
        <button> Login </button>
      </div>
    </form>
  );
}
