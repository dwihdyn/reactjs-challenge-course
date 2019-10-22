import React, { useState } from "react";

const NewTask = ({ addNewTask }) => {
  const [newTask, handleNewTask] = useState(""); // [state, function]

  // // handleNewTask() looks like under the hood
  // handleNewTask = value => {
  //   this.setState({
  //     newTask: value
  //   });
  // };

  // function to make sure task more than 3 letter
  const handleNewTaskValidation = e => {
    e.preventDefault();

    if (newTask.length > 3) {
      addNewTask(newTask);
      handleNewTask(``);
    } else {
      alert(`more specific pls`);
    }
  };

  return (
    <>
      <form
        onSubmit={e => {
          handleNewTaskValidation(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter new task.."
          value={newTask}
          onChange={e => handleNewTask(e.target.value)}
        />
        <button type="submit">Add new task</button>
      </form>
    </>
  );
};

export default NewTask;
