import React, { useState } from "react";
import "./Tabs.css";
import All from "./All";
import Applied from "./Applied";
import { useDispatch } from "react-redux";
import { all, applied } from "../Redux/counter";
import { reviewed, notReviewed } from "../Redux/review";

function Tabs() {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "All",
      content: <All />,
    },
    {
      id: 2,
      tabTitle: "Applied",
      content: <Applied />,
    },
  ];

  const handleClick = (e) => {
    const tabId = e.target.id;
    setCurrentTab(tabId);
    if (tabId === "1") {
      dispatch(all());
      dispatch(notReviewed());
    } else if (tabId === "2") {
      dispatch(applied());
      dispatch(notReviewed());
    }
  };

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            className="button"
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && <div>{tab.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
