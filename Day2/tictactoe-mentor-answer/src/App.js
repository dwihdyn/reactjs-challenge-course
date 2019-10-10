import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      currentPlayer: "X"
    };
    this.aksiSaatKlik = this.aksiSaatKlik.bind(this);
  }
  aksiSaatKlik(indexOfArray) {
    const { board, currentPlayer } = this.state;
    let newBoard = [...board];
    newBoard[indexOfArray] = currentPlayer;
    this.setState(
      {
        board: newBoard
      },
      () => {
        // Check for a winner in the callback function (This only gets invoked after the state has been updated)
      }
    );

    // If there is a winner, end the game

    // change player
  }

  render() {
    return (
      <div id="board">
        {this.state.board.map((val, indexOfSmallBoxes) => {
          return (
            <div
              id="smallSquare"
              key={indexOfSmallBoxes}
              onClick={() => this.aksiSaatKlik(indexOfSmallBoxes)}
            >
              {val}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

//==================================================================================

// ===== Faris code

// import React from 'react';
// import ReactDOM from 'react-dom'
// import './App.css';
// ​
// ​
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       board: [
//         '-', '-', '-',
//         '-', '-', '-',
//         '-', '-', '-'
//       ],
//       currentPlayer: "O",
// ​
// ​
//     }
//   }
// ​
// ​
//   handleClick = pos => {
//     const { board, currentPlayer, nextPlayer } = this.state
//     let newBoard = [...board];
//     newBoard[pos] = currentPlayer
//     this.setState({
//       board: newBoard
//     })
// ​
// ​
//     if (currentPlayer === "X") {
//       this.state.currentPlayer = "O";
//     } else {
//       this.state.currentPlayer = "X";
//     }
// ​
//     let playerSymbols = ['X', 'O']
// ​
//     if ((newBoard[0] && newBoard[1] && newBoard[2] == "X" || "O") ||
//       (newBoard[3] && newBoard[4] && newBoard[5] == ["X", "X", "X"] || ["O", "O", "O"]) ||
//       (newBoard[6] && newBoard[7] && newBoard[8] == ["X", "X", "X"] || ["O", "O", "O"]) ||
//       (newBoard[0] && newBoard[3] && newBoard[6] == ["X", "X", "X"] || ["O", "O", "O"]) ||
//       (newBoard[1] && newBoard[4] && newBoard[7] == ["X", "X", "X"] || ["O", "O", "O"]) ||
//       (newBoard[2] && newBoard[5] && newBoard[8] == ["X", "X", "X"] || ["O", "O", "O"]) ||
//       (newBoard[0] && newBoard[4] && newBoard[8] == ["X", "X", "X"] || ["O", "O", "O"]) ||
//       (newBoard[2] && newBoard[4] && newBoard[6] == ["X", "X", "X"] || ["O", "O", "O"])) {
//       alert('win')
//     }
//   }
// ​
// ​
//   render() {
// ​
//     const bodyStyle = {
//       maxWidth: "500px",
//       margin: "auto",
//       justifyContent: "auto"
//     }
// ​
//     const gridStyle = {
//       border: "2px solid black",
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "space-around",
//       backgroundColor: "peachpuff",
//     }
// ​
//     const cellStyle = {
//       border: "1px solid black",
//       flex: "0 0 calc(100%/3)",
//       height: "calc(100%/3)",
//       backgroundColor: "lightskyblue",
//       textAlign: "center",
//       lineHeight: "60px",
//       boxSizing: "border-box",
//       margin: 0,
//     }
// ​
//     const headerStyle = {
//       border: "2px solid black",
//       textAlign: "center",
//       backgroundColor: "peachpuff"
//     }
// ​
//     const ui = {
//       border: "2px solid black",
//       display: "flex",
//       justifyContent: "space-around",
//       backgrounColor: "peachpuff",
//     }
// ​
//     const cellUi = {
//       flex: "0 0 32%",
//       height: "50px",
//       marginBottom: "10px",
//       marginTop: "10px",
//       backgroundColor: "Pink",
//       textAlign: "center",
//       alignItems: "center",
//       lineHeight: "50px",
//       border: "1px solid black"
//     }
// ​
// ​
// ​
//     return (
//       <body style={bodyStyle}>
// ​
// ​
//         <header style={headerStyle}>
//           Tic Tac Toe
//         </header>
// ​
//         <div style={gridStyle}>
//           {
//             this.state.board.map((value, pos) => {
//               return (
//                 <div style={cellStyle} key={pos} onClick={() => this.handleClick(pos)} id={pos}>{value}</div>
//               )
//             })
//           }
//         </div>
// ​
//         <div class="ui" style={ui}>
// ​
//           <div class="cellui" style={cellUi}>Player's 1 Turn</div>
//           <div class="cellui" style={cellUi}>New Game</div>
//         </div>
//       </body >
// ​
// ​
//     )
//   }
// }
// ​
// export default App;
// Collapse

// Message Faris Malik
