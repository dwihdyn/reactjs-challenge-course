import React from "react";
import axios from "axios";
import "./App.css";
import { ReactComponent as Loader } from "./Spinner-1s-200px.svg";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import UserProfilePage from "./pages/UserProfilePage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";

class App extends React.Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    // get users
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(result => {
        console.log(result); // good practice, to help visualise the output
        this.setState({
          users: [...result.data],
          loading: false
        });
        // console.log(this.users);
      })
      .catch(error => console.log(error));
  }

  // to save new user data & token to API backend. data source comes ALL the way to SignUpUser.js(grandchild)
  signUpNewUser = (newUserName, newEmail, newPassWord) => {
    axios.post("https://insta.nextacademy.com/api/v1/users/").then(result => {
      console.log(result);
    });
  };

  // localStorage.setItem() save the new user token

  render() {
    let { users, loading } = this.state;
    return (
      <div className="App-header">
        {/* <h1>Home Page</h1> */}

        {loading ? (
          <>
            <Loader alt="loading gif" />
          </>
        ) : (
          <>
            {/* method1 : separate file (good practice) */}
            <Navbar />

            {/* method2 : direct  */}
            {/* <Link to="/">Home</Link>
            <Link to="/users/2">My Profile</Link> */}

            {/* for <Switch>, the arrangement <Route> list matters when one of the path has a wildcard (:) eg path="/:username"  */}
            <Switch>
              {/* Path to mainpage, need to load ALL users data using `childUsers={users} `*/}
              <Route
                exact
                path="/"
                component={() => {
                  return <HomePage childUsers={users} />; // parent(app.js) send users data to child(HomePage.js), and child can use data by calling `props`
                }}
              />
              {/* {...props} path to selected user, no need to load all user data, BUT we need to send the user data to UserProfilePage using 'props' */}
              <Route
                path="/users/:id"
                component={props => (
                  // {users} below connect username database to UserProfilePage.js
                  <UserProfilePage childUsers={users} {...props} /> // parent(app.js) send users & ...props data to child(UserProfilePage.js), and child can use data by calling `props` . {...props} comes from grandfather(axios all user data line 17-28)
                )}
              />

              <Route
                path="/login"
                component={props => <LoginPage {...props} />} // {...props} to take in all user database
              />
            </Switch>
          </>
        )}
      </div>
    );
  }
}

export default App;
