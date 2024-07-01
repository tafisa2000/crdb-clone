import React from "react";
import "./Job.css";

function Job({ post, location, deadline }) {
  return (
    <div className="job">
      <h4>{post}</h4>
      <p>{location}</p>
      <h5>Deadline: {deadline}</h5>
    </div>
  );
}

export default Job;
