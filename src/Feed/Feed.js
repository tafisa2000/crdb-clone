import React from "react";
import "./Feed.css";
import { useSelector } from "react-redux";
import Animation from "./Animation";
import Reviewing from "./reviewing.json";
import Lottie from "lottie-react";

function Feed() {
  const value = useSelector((state) => state.counter.value);
  const reviewed = useSelector((state) => state.review.value);
  return (
    <div className="feed">
      {reviewed === "reviewed" ? (
        <Animation />
      ) : (
        <div>
          <h4 className="headerFeed">Greetings!</h4>
          <p>
            {value === "1"
              ? "Select job item to view details"
              : 'You have no open application. Switch to "All" tab and apply for a job'}
          </p>
        </div>
      )}
    </div>
  );
}

export default Feed;
