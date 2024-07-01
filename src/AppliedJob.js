import React from "react";
import "./AppliedJob.css";
import { useDispatch } from "react-redux";
import { reviewed, notReviewed } from "./Redux/review";

function AppliedJob({ post, status }) {
  const dispatch = useDispatch();
  const selectJob = (e) => {
    dispatch(reviewed());
  };

  return (
    <div className="job" onClick={selectJob}>
      <h4>{post}</h4>
      <p className="status">
        <span>Status</span> : {status}
      </p>
    </div>
  );
}

export default AppliedJob;
