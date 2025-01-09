import React from "react";
import "../App.css";

const Input = (props) => {
  const handleInput = (e) => {
    const value = e.target.value;
    props.handleTaskInput(value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={props.taskInput}
        onChange={handleInput}
        placeholder="Enter a new task..."
      />
      <button type="submit" onClick={props.addTask}>
        Add
      </button>
    </div>
  );
};

export default Input;
