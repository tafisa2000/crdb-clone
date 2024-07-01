import React from "react";
import "./Animation.css";
import Reviewing from "./reviewing.json";
import Lottie from "lottie-react";

function Animation() {
  return (
    <div className="lottie">
      <Lottie animationData={Reviewing} />
      <p className="animationBottom">
        We are currently working on this application. You will be notified for
        further procedures.
      </p>
    </div>
  );
}

export default Animation;
