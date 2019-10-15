import React from "react";
import "./App.css";
import TodoItem from "./TodoItem";

class App extends React.Component {
  state = {
    newToDo: ``,
    allToDo: []
  };

  handleInputNewTask = event => {
    console.log(event.target.value);
    this.setState({
      newToDo: event.target.value
    });
  };

  // when clicked submit, we want insert `newToDo` to `allToDo`
  handleSubmitButton = event => {
    event.preventDefault();

    if (this.state.newToDo.length > 1) {
      this.setState({
        allToDo: [
          ...this.state.allToDo,
          { task: this.state.newToDo, done: false }
        ],
        newToDo: ""
      });
      console.log(this.state.newToDo);
      console.log(this.state.allToDo);
    } else {
      alert(`you gotta be more specific`);
    }
  };

  deleteItem = key => {
    const copyAllToDo = [...this.state.allToDo];
    copyAllToDo.splice(key, 1); // if we `const newNewToDo = copcopyAllToDo.splice(key, 1);` it keep the one we select and delete the rest. Why ?  splice nature is to show the selected things that you want to keep, NOT delete
    this.setState({
      allToDo: [...copyAllToDo]
    });
  };

  completeTask = key => {
    // Logic here
    const copyAllToDo = [...this.state.allToDo];
    copyAllToDo[key].done = true;
    this.setState({
      allToDo: [...copyAllToDo]
    });
  };

  render() {
    return (
      <div className="App-header">
        <h1>Enter your task</h1>

        <form>
          <input
            type="text"
            placeholder="Enter new task"
            value={this.state.newToDo}
            onChange={this.handleInputNewTask}
          />
          <input
            type="submit"
            value="send now!"
            onClick={this.handleSubmitButton}
          />
        </form>

        <TodoItem
          allToDo={this.state.allToDo}
          deleteItem={this.deleteItem}
          completeTask={this.completeTask}
        />
      </div>
    );
  }
}
export default App;
