import React from "react";
import "./App.css"; // call .css file in javascript
import styled from "styled-components"; // call styled-components

// StyledButton are components. hence its capital. passing props method | PROPS is build-in by styled-components
const StyledButton = styled.button`
  background-color: ${props => (props.blabla > 5 ? "blue" : "red")};
  color: white;
`;

class App extends React.Component {
  // constructor is the initialisation, in a class can have multiple function, but only ONE constructor
  constructor(props) {
    super(props);
    // here is the init begin
    this.state = {
      count: Math.floor(Math.random() * 11)
    };
    this.increaseClick = this.increaseClick.bind(this);
  }

  // for increaseClick(), if we use normal function, we need to use .bind to fix it. to make sure `this` refer to the `this.state.count`, not the whole windows
  increaseClick() {
    // setState() is to update the new state. we MUST put .setState() first, then call render()
    this.setState({
      count: this.state.count + 1
    });
  }

  decreaseClick = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  resetCount = () => {
    this.setState({
      count: 0
    });
  };

  // Only called ONCE after mounting (after it is shown on the screen)
  componentDidMount() {
    console.log("componentDidMount");
  }

  // called when we want to perform something that is dependent on the new state
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // render() is where html convert to js happen. | Whatever returned from render() function will get display on the website
  render() {
    console.log("render");
    let { count } = this.state; // destructure this.state object
    let enableButton = count > 0; // gotta call by `let`, you cant just go disable, without defining the function and the rule
    return (
      // best to use tertary function inside html
      // compares below html with the new updated state, and autmatically update when there is an update
      <div>
        <h1>
          {count < 1
            ? `dude stop, youre going negative`
            : `You have pressed the button ${count} time${
                count > 1 ? `s` : ``
              } !`}
        </h1>
        <StyledButton
          blabla={count} // background-color: ${props => (props.blabla > 5 ? "blue" : "red")};
          style={
            count > 10 ? { backgroundColor: "yellow", color: "black" } : null
          }
          onClick={this.increaseClick}
        >
          INCREASE ME
        </StyledButton>
        <StyledButton
          blabla={count}
          onClick={this.decreaseClick}
          disabled={!enableButton} // method1
        >
          DECREASE ME
        </StyledButton>
        <StyledButton
          blabla={count}
          onClick={this.resetCount}
          disabled={count === 0 ? true : false} // method2
        >
          Reset
        </StyledButton>
      </div>
    );
  }
}

// style={count > 5 ? background-color= blue : background-color= red}

export default App;

// ============================================================================================

//== Default main page
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
