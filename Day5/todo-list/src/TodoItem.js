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

// class TodoItem extends React.Component {
//   createTasks(allToDo) {
//     return <li key={allToDo.key}>{allToDo.text}</li>;
//   }
//   render() {
//     const todoEntries = this.props.allToDo;
//     const listItems = todoEntries.map(this.createTasks);
//     return <ul className="theList">{listItems}</ul>;
//   }
// }

// class TodoItem extends React.Component{
// render(){

// }
// }

// createTasks = item => {
//     return (
//       <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
//         {item.text}
//       </li>
//     )
//   }

/* <TodoItems entries={this.state.items}deleteItem={this.deleteItem}/> */
