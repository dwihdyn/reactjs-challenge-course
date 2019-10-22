import React from "react";
import "../App.css";

const ToDoList = ({ toDoList }) => {
  return (
    <>
      <ul className="listBox">
        {toDoList.map((eachTodo, index) => {
          return <li key={index}> {eachTodo.initialTask}</li>;
        })}
      </ul>
    </>
  );
};

export default ToDoList;
