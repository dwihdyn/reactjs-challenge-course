import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 1st class : Square - 1 small square
class Kotak extends React.Component {
  // converts whatever inside render() to be display to website
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}

// 2nd class : Board - 9 small squares
class Board extends React.Component {
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
