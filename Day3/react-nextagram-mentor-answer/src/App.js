import React from "react";
import axios from "axios";
import "./App.css";
import { ReactComponent as Loader } from "./Spinner-1s-200px.svg";
import HomePage from "./HomePage";

class App extends React.Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(result => {
        this.setState({
          users: [...result.data],
          loading: false
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    let { users, loading } = this.state;
    return (
      <div>
        <h1>Home Page</h1>

        {loading ? (
          <>
            <Loader alt="loading gif" />
          </>
        ) : (
          // Below has been moved to Homepage.js to make things tidier
          // <>
          //   <ul>
          //     {this.state.users.map(user => (
          //       <li>
          //         {user.id}: {user.username}{" "}
          //         <img src={user.profileImage} alt="user profile pic" />
          //       </li>
          //     ))}
          //   </ul>
          // </>
          <HomePage childUsers={users} />
        )}
      </div>
    );
  }
}

export default App;
