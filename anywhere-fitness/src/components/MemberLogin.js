import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup.string().required("Username is required "),
  password: yup.string().required(" password is required "),
});

const initialUserCredentials = {
  username: "",
  password: "",
  authCode: "",
};

export default function InstructorLogin() {
  const [userCredentials, setUserCredentials] = useState(initialUserCredentials)
  const [error, setError] = useState("");
  const history = useHistory();

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setError({ ...error, [e.target.name]: "" });
      })
      .catch((err) => {
        setError({
          ...error,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const handleChange = (e) => {
    e.persist();
    validate(e);
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const loginMember = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:3000", userCredentials)
      .then((response) => {
        console.log("form submitted", response.data);
        const token = response.data.token;
        localStorage.setItem("token",token);
        setError("");
        history.push("/MemberLogin");
      })
      .catch((err) => {
        console.log(err);
        setError('User not found. Please signup.')
      });
  }


  return (
    <form onSubmit={loginMember}>
      <h2> Welecome, Please Sign In </h2>
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={userCredentials.username}
          />
          {error.username ? <p>{error.username}</p> : null}
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
            value={userCredentials.password}
          />
          {error.password ? <p>{error.password}</p> : null}
        </label>
      </div>
      <div>
        <button> login </button>
      </div>
    </form>
  );
}
