import React from "react";

const TodoItem = props => (
  <ul>
    {props.allToDo.map((eachTask, index) => (
      <li key={index}>
        <span
          style={{
            textDecoration: eachTask.done ? "line-through" : "none",
            cursor: "pointer"
          }}
          onClick={() => props.completeTask(index)}
        >
          {eachTask.task}
        </span>
        <button
          style={{
            marginLeft: "10px",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            fontSize: "1.2rem",
            cursor: "pointer"
          }}
          onClick={() => props.deleteItem(index)}
        >
          &times;
        </button>
      </li>
    ))}
  </ul>
);
export default TodoItem;
