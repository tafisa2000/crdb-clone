import React from "react";
import "./App.css";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Feed from "./Feed/Feed";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
