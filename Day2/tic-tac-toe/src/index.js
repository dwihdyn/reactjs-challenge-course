/* Steps to build tictactoe game : `https://reactjs.org/tutorial/tutorial.html`
  > create 9 boxes manually using JSX & CSS on separate file 
  > name each boxes and actually print out the index number (0 - 8) on each boxes using renderSquare() self build function & this.props.value (result : 9 boxes with numbering 0 to 8)
  > put onClick on every squares, and shows alert() messages when clicked on any of them (result : 9 boxes with numbering 0 to 8 & alert pop up everytime i click any of the small boxes)
  > clear each boxes from displaying the index number by defining `this.state = {value: null}`
  > put X on selected box by setting `OnClick={() => this.setState({value: "X"})}`
  > set 'board' component to start game with 9 null spaces using `this.state = {squares: Array(9).fill(null),};`
  
  
  */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 1st class : Square - 1 small square
class Kotak extends React.Component {
  // converts whatever inside render() to be display to website

  // // method1 : contructor & super can be ignored, even on large scale project
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null // tell react to start the game with empty boxes, NOT number of each array
  //   };
  // }

  // method2 (tidier & give EXACT same result with method1)
  state = {
    value: null
  };

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: "X" }); // onClick used to update the clicked squares with the new state using setState()
        }}
      >
        {this.state.value}
      </button>
    );
  }
}

// 2nd class : Board - 9 small squares
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null) // create new state here called `squares` set 'board' component to start game with 9 null spaces
    };
  }

  renderKotak(i) {
    return <Kotak value={i} />; // putting number on each box
  }

  render() {
    const status = "Next player: X"; // show whos turn is it now

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderKotak(0)}
          {this.renderKotak(1)}
          {this.renderKotak(2)}
        </div>
        <div className="board-row">
          {this.renderKotak(3)}
          {this.renderKotak(4)}
          {this.renderKotak(5)}
        </div>
        <div className="board-row">
          {this.renderKotak(6)}
          {this.renderKotak(7)}
          {this.renderKotak(8)}
        </div>
      </div>
    );
  }
}

// 3rd class : Game : logic of the game
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board /> {/* connect 2nd class */}
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
