import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import NewTask from "./components/NewTask";

function App() {
  // toDoList : list of tasks | setToDoList : function build inside useState to add new state
  const [toDoList, handleToDoList] = useState([
    { initialTask: "walk the dog" },
    { initialTask: "feed the fish" }
  ]);

  // function to add new task to the list
  const addNewTask = newToDo => {
    let newToDoList = [...toDoList]; // clone tasks
    newToDoList.push({ initialTask: newToDo }); // add new task
    handleToDoList(newToDoList); // update state
  };

  useEffect(() => {
    console.log(`added new task`);
  }, [toDoList]);

  return (
    <div className="App-header">
      <h1>To Do List</h1>
      <NewTask addNewTask={addNewTask} />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
