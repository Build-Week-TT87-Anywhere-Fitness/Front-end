import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  firstname: yup.string().required("Must a include First Name"),
  lastname: yup.string().required("Must a include Last Name"),
  birthdate: yup.date().required("Must include a valid Birthdate"),
  number: yup
    .number()
    .required(" Must include a valid Phone Number")
    .max(10)
    .min(10),
  email: yup.email().required("Must include a valid Email address"),
  password: yup.string().required("Must include a valid password"),
});

export default function Signup() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    number: "",
    email: "",
    password: "",
  });

  const [errorState, setErrorState] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    number: "",
    email: "",
    password: "",
  });

  const validate = (e) => {
    yup
      .reach(formScheme, e.target.name)
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

  return (
    <form>
      <div>
        <label htmlfor="firstName">
          <h2> First Name: </h2>
          <input type="name" id="firstName" name="firstName" />
        </label>

        <label htmlfor="lastName">
          <h2> Last Name: </h2>
          <input type="name" id="lastName" name="lastName" />
        </label>

        <label htmlfor="birthdate">
          <h2> Last Name: </h2>
          <input type="date" id="birthdate" name="birthdate" />
        </label>

        <label htmlfor="number">
          <h2> Phone Number: </h2>
          <input type="number" id="number" name="number" />
        </label>

        <label htmlfor="email">
          <h2> Email: </h2>
          <input type="email" id="email" name="email" />
        </label>

        <label htmlfor="password">
          <h2> Password: </h2>
          <input type="text" id="password" name="password" />
        </label>

        <button> submit </button>
      </div>
    </form>
  );
}
