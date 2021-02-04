import React, { useState } from "react";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import { UserContext } from "../contexts/UserContext";
=======
>>>>>>> 6ae2c7da39147747a0f3b946cb6526faf723f1fe
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
  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );
  const [error, setError] = useState("");
<<<<<<< HEAD
  const { setUser } = useContext(UserContext);
=======
>>>>>>> 6ae2c7da39147747a0f3b946cb6526faf723f1fe
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

  const loginInstructor = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:3000", userCredentials)
      .then((response) => {
        console.log("form submitted", response.data);
        const token = response.data.token;
<<<<<<< HEAD
        localStorage.setItem("token", token);
        setUser({ username: userCredentials.username, id: response.data.id });
=======
        localStorage.setItem("token",token);
>>>>>>> 6ae2c7da39147747a0f3b946cb6526faf723f1fe
        setError("");
        history.push("/InstructorLogin");
      })
      .catch((err) => {
        console.log(err);
        setError("User not found. Please signup.");
      });
  };

  return (
    <form onSubmit={loginInstructor}>
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
          {error.password ? <p>{error.username}</p> : null}
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
        <label htmlFor="authCode">
          Authorization:
          <input
            type="text"
            id="authCode"
            name="authCode"
            onChange={handleChange}
            value={userCredentials.authCode}
          />
          {error.password ? <p>{error.authCode}</p> : null}
        </label>
      </div>
      <div>
        <button> Login </button>
      </div>
    </form>
  );
}
