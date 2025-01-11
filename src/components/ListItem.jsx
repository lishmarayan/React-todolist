import React from "react";

const ListItem = (props) => {
  return (
    <ul className="task-list">
      {props.tasks.map((ele, index) => {
        return (
          <li key={index} className="task-row">
            <input
              type="checkbox"
              checked={props.isCompletedList} 
              onChange={() =>
                props.moveToCompleted(index, props.isCompletedList)
              }
            />
            <span>{ele.text}</span>
            {!props.isCompletedList && (
              <button onClick={() => props.handleDelete(index)}>Remove</button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
