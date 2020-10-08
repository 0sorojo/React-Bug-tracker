import React from "react";
import ViewSection from "./component/bugViewSection";
import BugModel from "../../../Models/bugModel";
import "./bugView.css";
import { useDispatch } from "react-redux";
import { markComplete } from "../../../Controllers/Redux/bugSlice";

export default (props) => {
  const dispatch = useDispatch();
  const bug = new BugModel(props.bug);

  return (
    <div className="bug-view">
      <h1 className="bug-title">{bug.name}</h1>
      <div className="info-view">
        <ViewSection title="Details" info={bug.details} />
        <ViewSection title="Steps" info={bug.steps} />
        <ViewSection title="Priority" info={bug.priority} />
        <ViewSection title="Creator" info={bug.creator} />
        <ViewSection title="version" info={bug.version} />
        <ViewSection title="Created" info={bug.time} />
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            dispatch(markComplete());
          }}
          className="button-complete"
        >
          Complete
        </button>
        <button onClick={props.clicked} className="button-close">
          Close
        </button>
      </div>
    </div>
  );
};
