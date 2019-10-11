import React from "react";
import "./App.css";
import { Button } from "reactstrap";
import axios from "axios";
import { trackPromise } from "react-promise-tracker"; // for loading

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.setState({
      users: []
    });
    // performing a GET request
    trackPromise(
      axios // axios is same thing as ajax in jquery
        .get("https://insta.nextacademy.com/api/v1/users")
        .then(result => {
          // If successful, we do stuffs with 'result'
          this.setState({ users: result.data });
          console.log(result.data);
        })
        .catch(error => {
          // If unsuccessful, we notify users what went wrong
          console.log("ERROR: ", error);
        })
    );
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          {this.state.users.map(user => (
            <li>
              {user.id}: {user.username}{" "}
              <img src={user.profileImage} alt="user profile pic" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
