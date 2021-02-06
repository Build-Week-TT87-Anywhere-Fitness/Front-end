import React, { useState, useContext, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import * as yup from "yup";
import {
  FormContainer2,
  StyledInputs2,
  FormWrapper2,
  StyledHeader2,
} from "../styles/styled-components";
const formSchema = yup.object().shape({
  name: yup.string(),
  time: yup.string(),
  date: yup.date(),
  duration: yup.string(),
  type: yup.string(),
  level: yup.string(),
  location: yup.string(),
  attendance: yup.number(),
  maxAttendance: yup.number(),
});

const InstuctorForm = () => {
  const [form, setForm] = useState({
    name: "",
    time: "",
    date: "",
    duration: "",
    type: "",
    level: "",
    location: "",
    attendance: "",
    maxAttendance: "",
  });

  const [errorState, setErrorState] = useState({
    name: "",
    time: "",
    date: "",
    duration: "",
    type: "",
    level: "",
    location: "",
    attendance: "",
    maxAttendance: "",
  });

  const [newClass, setNewClass] = useState(form);
  const [createNewClass, setCreateNewClass] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [buttonText, setButtonText] = useState();
  const [editingId, setEditingId] = useState("");
  const [formVaules, setFormValues] = useState();

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

  //when component mounts
  useEffect(() => {});

  //create/submit initial form for a new class
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:3000", form)
      .then((response) => console.log("form submitted", response))
      .catch((err) => console.log(err));
  };

  //edit functionality
  const handleEdit = (id) => {
    setIsEditing(true);
    setButtonText("update instructor form");
    setEditingId(id);
    setFormValues(
      createNewClass.filter((MemberForm) => MemberForm.id === id)[0]
    );
  };

  //delete functionality
  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`${id}`)
      .then((res) => {
        console.log("delete new class form from server", res.data);
        axiosWithAuth()
          .get("https://localhost:3000")
          .then((res) => {
            console.log("reset state after delete", res.data);
            const createNewClass = res.data.filter(
              (MemberForm) => MemberForm.newClass_id === newClass.id
            );
          });
      })
      .catch((err) => console.log(err));
  };

  //update funtionality
  const handleUpdate = () => {
    console.log("intructor wants to update class");
    setIsAdding(true);
    setIsEditing(false);
  };

  return (
    <FormContainer2>
      <StyledHeader2>Hello, ....</StyledHeader2>
      <FormWrapper2>
        <form>
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
                type="duration'"
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
          <StyledInputs2>
            <label htmlFor="attendance">
              Attendance
              <input
                type="number"
                name="attendance"
                value={form.attendance}
                onChange={inputchange}
              />
            </label>
          </StyledInputs2>
          <StyledInputs2>
            <label htmlFor="maxAttendance">
              Max Attendance
              <input
                type="number"
                name="maxAttendance"
                value={form.maxAttendance}
                onChange={inputchange}
              />
            </label>
          </StyledInputs2>

          <div>
            <button onClick={handleEdit}> Edit </button>
            <button onClick={handleDelete}> Delete </button>
            <button onClick={handleSubmit}> Submit </button>
          </div>
        </form>
      </FormWrapper2>
    </FormContainer2>
  );
};
export default InstuctorForm;
