import React from "react";
import Search from "./Search";
import "./Applied.css";
import BoardApplied from "./BoardApplied";

function Applied() {
  return (
    <div className="applied">
      <Search placeholder="Search Application" />
      <BoardApplied />
    </div>
  );
}

export default Applied;
