import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { formInstructor } from '../actions/actions';
import { instructorEdit } from '../actions/actions';
import { instructorDelete } from '../actions/actions';
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

function InstructorForm({ formInstructor, useHistory }) {
  const [state, setState] = useState({
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

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({
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


  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => setError({ ...error, [e.target.name]: "" }))
      .catch((err) => setError({...error,[e.target.name]: err.errors[0],}));
  };

  useEffect(() => {
    formSchema.isValid(state).then(valid => setDisabled(!valid));
  }, [state]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    validate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formInstructor(state, useHistory);
    setState({
      username:'',
      password:''
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2> Welecome, Please Sign In </h2>
      <div>
        <label htmlFor="username">
          Class Name:
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={state.name}
          />
          <div>{error.username}</div>
        </label>
      </div>
      <div>
      <label htmlFor="time">
        Time:
           <input
            type="text"
            name="time"
            value={state.time}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="date">
          Date:
          <input
            type="date"
            name="date"
            value={state.date}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="duration">
          Duration:
          <input
            type="duration'"
            name="duration"
            value={state.duration}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="type">
          Type:
          <input
            type="text"
            name="type"
            value={state.type}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="level'">
          Intensity Level:
          <input
            type="text"
            name="level"
            value={state.level}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            name="loaction"
            value={state.location}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="attendance">
          Attendance
          <input
            type="text"
            name="attendance"
            value={state.attendance}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="maxAttendance">
          Max Attendance
          <input
            type="number"
            name="maxAttendance"
            value={state.maxAttendance}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <button onClick={instructorEdit}> Edit </button>
        <button onClick={instructorDelete}> Delete </button>
        <button disabled={disabled}> Submit </button>
      </div>
    </form>
  );
}

const mapStateToProps = state => {
	return {
		state
	};
};

const mapDispatchToProps = { formInstructor };

export default connect(mapStateToProps, mapDispatchToProps)(InstructorForm);

