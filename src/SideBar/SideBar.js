import React from "react";
import "./SideBar.css";
import Tabs from "./Tabs";
import Bottom from "./Bottom";

function SideBar() {
  return (
    <div className="SideBar">
      <Tabs />
      <Bottom />
    </div>
  );
}

export default SideBar;
