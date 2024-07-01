import React from "react";
import "./All.css";
import Search from "./Search";
import Board from "./Board";

function All() {
  return (
    <div className="all">
      <Search placeholder="Search job" />
      <Board />
    </div>
  );
}

export default All;
