// Dont need anymore 

// import React, { useState, useEffect } from "react";
// import * as yup from "yup";

// const formSchema = yup.object().shape({
//   time: "",
//   date: "",
//   duration: "",
//   type: "",
//   level: "",
//   location: ""
// });

// const MemberForm = () => {
//   const [form, setForm] = useState({
//     search: "",
//     time: "",
//     date: "",
//     duration: "",
//     type: "",
//     level: "",
//     location: "",
//   });

//   const [errorState, setErrorState] = useState({
//     search: "",
//     time: "",
//     date: "",
//     duration: "",
//     type: "",
//     level: "",
//     location: "",
//   });

//   const validate = (e) => {
//     yup
//       .reach(formSchema, e.target.name)
//       .validate(e.target.value)
//       .then((valid) => {
//         setErrorState({ ...errorState, [e.target.name]: "" });
//       })
//       .catch((err) => {
//         setErrorState({
//           ...errorState,
//           [e.target.name]: err.errors[0],
//         });
//       });
//   };

//   const inputchange = (e) => {
//     e.persist();
//     validate(e);
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   //Search for a class inputs that can be submitted
//   const searchForm = (e) => {
//     e.preventDefault();
//   };



//   return (
//     <form onSubmit={searchForm}>
//       <div>
//         <label htmlFor="time">
//           Time:
//           <input
//             type="text"
//             name="time"
//             value={form.time}
//             onChange={inputchange}
//           />
//         </label>
//       </div>
//       <div>
//         <label htmlFor="date">
//           Date:
//           <input
//             type="date"
//             name="date"
//             value={form.date}
//             onChange={inputchange}
//           />
//         </label>
//       </div>
//       <div>
//         <label htmlFor="duration">
//           Duration:
//           <input
//             type="duration'"
//             name="duration"
//             value={form.duration}
//             onChange={inputchange}
//           />
//         </label>
//       </div>
//       <div>
//         <label htmlFor="type">
//           Type:
//           <input
//             type="text"
//             name="type"
//             value={form.type}
//             onChange={inputchange}
//           />
//         </label>
//       </div>
//       <div>
//         <label htmlFor="level'">
//           Intensity Level:
//           <input
//             type="text"
//             name="level"
//             value={form.level}
//             onChange={inputchange}
//           />
//         </label>
//       </div>
//       <div>
//         <label htmlFor="location">
//           Location:
//           <input
//             type="text"
//             name="loaction"
//             value={form.location}
//             onChange={inputchange}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           <input
//             type="search"
//             name="search"
//             placeholder="search"
//             value={form.search}
//             onChange={inputchange}
//           />
//           <button onClick={searchForm}> Search </button>
//         </label>
//       </div>
//     </form>
//   );
// };
// export default MemberForm;
