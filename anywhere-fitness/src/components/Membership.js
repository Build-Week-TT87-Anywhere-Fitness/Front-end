import React, { useState } from "react";

const formSchema = yup.object().shape({
  username: yup.string().required("Username is required "),
  password: yup.string().required(" password is required "),
});

export default function Membership() {
  const [memberForm, setMemberForm] = userState({
    username: "",
    password: "",
  });

  const [memberForm, setMemberForm] = userState({
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
        setErrorState({ ...errotState, [e.target.name]: "" });
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
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          name="username"
          onChange={inputchange}
          value={memberForm.username}
        />
        {errorState.name ? <p>{errorState.username}</p> : null}
      </label>
      <label htmlFor="password">
        <input
          type="text"
          id="passowrd"
          name="password"
          onChange={inputchange}
          value={memberForm.password}
        />
        {errorState.name ? <p>{errorState.password}</p> : null}
      </label>
    </form>
  );
}

{
  /* <form onSubmit={submitForm}>
<div>
  <label htmlFor="name">
    <h2> name </h2>
    <input
      type="text"
      id="name"
      name="name"
      onChange={inputChange}
      value={pizzaForm.name}
    />
    {errorState.name ? <p>{errorState.name}</p> : null}
  </label>
</div>
<div>
  <label htmlFor="size">
    <h2> select a size</h2>
    <select
      name="size"
      id="size"
      value={pizzaForm.size}
      onChange={inputChange}
    >
      <option value="">pick a size</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="xlarge">Extra Large</option>
    </select>
    {errorState.size ? <p>{errorState.size}</p> : null}
  </label> */
}
