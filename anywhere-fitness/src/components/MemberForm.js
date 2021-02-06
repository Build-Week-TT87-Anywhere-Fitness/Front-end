import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import {
  FormContainer2,
  StyledInputs2,
  FormWrapper2,
  StyledHeader2,
} from "../styles/styled-components";

const formSchema = yup.object().shape({
  time: yup.number(),
  date: yup.string().required("please pick a date"),
  duration: yup.string(),
  type: yup.string(),
  level: yup.string(),
  location: yup.string(),
});

//Date and Location
// yup.string.required("Field required ")
// yup.string.required("Field required")

const MemberForm = () => {
  const [form, setForm] = useState({
    search: "",
    time: "",
    date: "",
    duration: "",
    type: "",
    level: "",
    location: "",
  });

  const [errorState, setErrorState] = useState({
    search: "",
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

  //Search for a class inputs that can be submitted
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/membership", form)
      .then((response) => console.log("form submitted", response))
      .catch((err) => console.log(err));
  };

  useEffect(() => {});

  return (
    <FormContainer2>
      <StyledHeader2> Hello, ...</StyledHeader2>
      <FormWrapper2>
        <form onSubmit={submitForm}>
          <StyledInputs2>
            <label htmlFor="time">
              Time:
              <input
                type="text"
                name="time"
                value={form.time}
                onChange={inputchange}
              />
            </label>
          </StyledInputs2>
          <StyledInputs2>
            <label htmlFor="date">
              Date:
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={inputchange}
              />
            </label>
          </StyledInputs2>
          <StyledInputs2>
            <label htmlFor="duration">
              Duration:
              <input
                type="text"
                name="duration"
                value={form.duration}
                onChange={inputchange}
              />
            </label>
          </StyledInputs2>
          <StyledInputs2>
            <label htmlFor="type">
              Type:
              <input
                type="text"
                name="type"
                value={form.type}
                onChange={inputchange}
              />
            </label>
          </StyledInputs2>
          <StyledInputs2>
            <label htmlFor="level'">
              Intensity Level:
              <input
                type="text"
                name="level"
                value={form.level}
                onChange={inputchange}
              />
            </label>
          </StyledInputs2>
          <StyledInputs2>
            <label htmlFor="location">
              Location:
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={inputchange}
              />
            </label>
          </StyledInputs2>
          <div>
            <label>
              <input
                type="search"
                name="search"
                placeholder="search"
                value={form.search}
                onChange={inputchange}
              />
              <button> Search </button>
            </label>
          </div>
        </form>
      </FormWrapper2>
    </FormContainer2>
  );
};
export default MemberForm;
