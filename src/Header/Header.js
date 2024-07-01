// Header.js
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="crdb_logo.png" alt="" />
      </div>
      <div className="header_right">
        <div className="avatar">
          <img src="avatar.png" alt="" className="img" />
        </div>
        <div className="user">
          <h4>toscarjnr@gmail.com</h4>
          <p>Candidate</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
