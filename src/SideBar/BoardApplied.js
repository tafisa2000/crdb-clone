import React from "react";
import AppliedJob from "../AppliedJob";
import "./BoardApplied.css";

function BoardApplied() {
  return (
    <div className="boardApplied">
      <AppliedJob
        post={"Zonal Business Support - Coastal Zone"}
        status={"on Review"}
      />
      <AppliedJob post={"IT Support Officer"} status={"on Review"} />
    </div>
  );
}

export default BoardApplied;
