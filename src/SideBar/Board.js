import React from "react";
import "./Board.css";
import Job from "./Job"; // Ensure correct import path

function Board() {
  return (
    <div className="board">
      <Job
        post={"Data scientist"}
        location={"Tanzania Head office"}
        deadline={"2024-07-05"}
      />
      <Job
        post={"Senior Specialist Corporate - Bancassurance"}
        location={"Tanzania Head office"}
        deadline={"2024-07-05"}
      />
      <Job
        post={"Senior Specialist Environmental and Social Management"}
        location={"Tanzania Head office"}
        deadline={"2024-07-05"}
      />
    </div>
  );
}

export default Board;
