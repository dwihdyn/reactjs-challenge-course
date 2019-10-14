import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePromiseTracker } from "react-promise-tracker"; // for loading
import Loader from "react-loader-spinner";

// challenge2 : https://code.nextacademy.com/lessons/stateless-functional-component/25
const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

  // load using manual style (NOT using .svg picture). https://www.basefactor.com/react-how-to-display-a-loading-indicator-on-fetch-calls
  return (
    promiseInProgress && (
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Loader type="Bars" color="#808080" height="100" width="100" />
      </div>
    )
  );
};
//-----

ReactDOM.render(
  <div>
    <App />
    <LoadingIndicator />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
