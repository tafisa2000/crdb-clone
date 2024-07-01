import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Bottom.css"; // assuming you have Bottom.css for styles

function Bottom() {
  return (
    <div className="bottom">
      <span className="Arrow">
        <ArrowBackIosIcon />
      </span>
      <span className="page">1</span>
    </div>
  );
}

export default Bottom;
