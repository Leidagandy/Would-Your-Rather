import React from "react";
import "./Leaderboard.css"

function UserSummary(props) {
  const { name } = props;
  return (
    <div key={name.id} className="container">
      <div>
        <img className="user-img" src={name.avatar} alt={`${name.name}'s avatar`} />
      </div>
      <div>
        <h3>{name.name}</h3>
        <p className ="scores">
          <span>Questions Answered</span>
          <span>{name.answered}</span>
        </p>
        <p className="scores">
          <span>Questions Created</span>
          <span>{name.asked}</span>
        </p>
      </div>
      <div>
        <p>Score</p>
        <div>{name.total}</div>
      </div>
    </div>
  );
}

export default UserSummary;
