import React, { useState } from "react";
import "./bugForm.css";
import BugModel from "../../../Models/bugModel";

const BugForm = (props) => {
  const [bugObject, setBugObject] = useState(new BugModel(props.bug));

  const inputChanged = (event) => {
    setBugObject({
      ...bugObject,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="bug-create">
      <h1>{props.title}</h1>
      <form>
        <label>Name:</label>
        <input
          name="name"
          placehodler="Bug Name"
          onChange={inputChanged}
          value={bugObject.name}
          required
        />

        <label>Details:</label>
        <textarea
          name="details"
          placeholder="Detailed Description"
          onChange={inputChanged}
          value={bugObject.details}
          required
        ></textarea>

        <label>Steps:</label>
        <textarea
          name="steps"
          placeholder="Steps to Recreate the Bug"
          onChange={inputChanged}
          value={bugObject.steps}
          required
        ></textarea>

        <label>Priority:</label>
        <select
          name="priority"
          onChange={inputChanged}
          value={bugObject.priority}
          required
        >
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>

        <label>Assigned:</label>
        <select
          name="assigned"
          onChange={inputChanged}
          value={bugObject.assigned}
        >
          <option>D Goings</option>
        </select>

        <label>Application Version:</label>
        <input
          name="version"
          placeholder="Application Version"
          onChange={inputChanged}
          value={bugObject.version}
        />

        <button type="submit">{props.title}</button>
      </form>
    </div>
  );
};

export default BugForm;
