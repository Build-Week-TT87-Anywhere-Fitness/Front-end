import React, { useState, useContext, useEffect } from "react";
import { UserContext } from '../contexts/UserContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: "",
  time: "",
  date: "",
  duration: "",
  type: "",
  level: "",
  location: "",
  numberOfAttendance: "",
  maxAttendance: "",
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
    numberOfAttendance: "",
    maxAttendance: "",
  });

  const [newClass, setNewClass] = useState(form);
  const [createNewClass, setCreateNewClass] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [buttonText, setButtonText] = useState();
  const [editingId, setEditingId] = useState('');
  const [formVaules, setFormValues] = useState();
  const {user} = useContext(UserContext);

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

  useEffect(() => {
    
  })

//create initial form for a new class
  const handleCreateForm = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:3000", form)
      .then((response) => console.log("form submitted", response))
      .catch((err) => console.log(err));
  };

//edit functionality
  const handleEdit = (id) => {
    setIsEditing(true);
    setButtonText('update instructor form');
    setEditingId(id);
    setFormValues(createNewClass.filter(MemberForm => MemberForm.id === id)[0]);
  }

//delete functionality
  const handleDelete = (id) => {
    axiosWithauth().delete(`${id}`)
    .then(res => {
      console.log('delete new class form from server', res.data);
      axiosWithAuth().get('https://localhost:3000')
      .then(res => {
        console.log('reset state after delete', res.data);
        const createNewClass = res.data.filter(MemberForm => MemberForm.newClass_id === newClass_id)
      })
    })
    .catch(err => console.log(err));
  }

//update funtionality
  const handleUpdate = () => {
    console.log('intructor wants to update class')
    setIsAdding(true);
    setIsEditing(false);
  }



  return (
    <form>
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
        <label htmlFor="attendance">
          Attendance
          <input
            type="text"
            name="attendance"
            value={form.attendance}
            onChange={inputchange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="maxAttendance">
          Max Attendance
          <input
            type="number"
            name="maxAttendance"
            value={form.maxAttendance}
            onChange={inputchange}
          />
        </label>
      </div>
    </form>
  );
};
export default InstuctorForm;
