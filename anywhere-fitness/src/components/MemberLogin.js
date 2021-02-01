import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup.string().required("Username is required "),
  password: yup.string().required(" password is required "),
});

export default function Membership() {
  const [memberForm, setMemberForm] = useState({
    username: "",
    password: "",
  });

  const [errorState, setErrorState] = useState({
    username: "",
    password: "",
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
    setMemberForm({ ...memberForm, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/membership", memberForm)
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
            value={memberForm.username}
          />
          {errorState.username ? <p>{errorState.username}</p> : null}
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
            value={memberForm.password}
          />
          {errorState.password ? <p>{errorState.password}</p> : null}
        </label>
      </div>
      <div>
        <button> login </button>
      </div>
    </form>
  );
}
