import React from "react";

const Member = (props) => {
  const { detail } = props;

  return (
    <div>
      <h2>{detail.name}</h2>
      <p>{detail.time}</p>
      <p>{detail.date}</p>
      <p>{detail.duration}</p>
      <p>{detail.type}</p>
      <p>{detail.level}</p>
      <p>{detail.location}</p>
      <p>{detail.numberOfAttendance}</p>
      <p>{detail.maxAttendance}</p>
    </div>
  );
};
export default Member;
