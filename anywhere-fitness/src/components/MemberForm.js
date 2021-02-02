import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  time: "",
  date: yup.string.required("Field required "),
  duration: "",
  type: "",
  level: "",
  location: yup.string.required("Field required"),
});

const MemberForm = (props) => {
  const [form, setForm] = useState({
    time: "",
    date: "",
    duration: "",
    type: "",
    level: "",
    location: "",
  });

  const [errorState, setErrorState] = useState({
    time: "",
    date: "",
    duration: "",
    type: "",
    level: "",
    location: "",
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/membership", form)
      .then((response) => console.log("form submitted", response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="time">
          Time:
          <input
            type="text"
            name="time"
            value={form.time}
            onChange={inputchange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="date">
          Date:
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={inputchange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="duration">
          Duration:
          <input
            type="duration'"
            name="duration"
            value={form.duration}
            onChange={inputchange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="type">
          Type:
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={inputchange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="level'">
          Intensity Level:
          <input
            type="text"
            name="level"
            value={form.level}
            onChange={inputchange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            name="loaction"
            value={form.location}
            onChange={inputchange}
          />
        </label>
      </div>
      <div>
        <button> search </button>
      </div>
    </form>
  );
};
export default MemberForm;
