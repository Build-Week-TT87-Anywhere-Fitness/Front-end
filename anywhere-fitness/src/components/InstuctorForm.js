import React, { useState } from "react";

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

const InstuctorForm = (props) => {
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
      <div>
        <button> Edit </button>
        <button> Delete </button>
        <button> Submit </button>
      </div>
    </form>
  );
};
export default InstuctorForm;
