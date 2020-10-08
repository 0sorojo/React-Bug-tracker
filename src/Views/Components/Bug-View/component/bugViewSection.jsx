import React from "react";
import "./bugViewSection.css";

export default (props) => {
  return (
    <div className="view-section">
      <h2 className="view-info">{props.title}</h2>
      <p className="words">{props.info}</p>
    </div>
  );
};
