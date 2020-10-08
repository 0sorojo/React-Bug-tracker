import React from "react";
import "./bugViewSection.css";

const ViewSection = (props) => {
  const valueInfo = props.info;
  return (
    <div className="view-section">
      <h2 className="view-info">{props.title}</h2>
      {!props.status ? (
        <p className="words">{props.info}</p>
      ) : (
        <input onChange={props.editChange} placeholder={valueInfo} />
      )}
    </div>
  );
};

export default ViewSection;
