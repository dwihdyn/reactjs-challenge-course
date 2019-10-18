import React from "react";
import { Input } from "reactstrap";
import axios from "axios";

class SignUpForm extends React.Component {
  state = {
    userName: ``,
    email: ``,
    passWord: ``,
    usernameValid: null
  };

  // function to submit new user credentials to app.js
  handleSubmitNewUser = e => {
    e.preventDefault();
    const { userName, email, passWord } = this.state;

    // upload new user data into the current state to LoginPage.js, and then from LoginPage.js(parent) send to App.js(grandparent)
    this.props.signUpNewUser(userName, email, passWord);
  };

  // check whether the username entered is taken or not
  handleUsernameAvailable = e => {
    if (e.target.value.length >= 6) {
      // console.log(e.target.value); // triggers when 6 letter or more only
      axios
        .get(
          `https://insta.nextacademy.com/api/v1/users/check_name?username=${e.target.value}`
        )
        .then(response => {
          console.log(response.data);
          console.log(`username exist ? ${response.data.exists}`);
          console.log(`username can be used ? ${response.data.valid}`);
          if (response.data.exists === false && response.data.valid === true) {
            this.setState({
              usernameValid: true
            });
            console.log(this.state.usernameValid);
          } else {
            this.setState({
              usernameValid: false
            });
          }
        });
    }
  };

  // function to let user finish typing first before checking the usename availability. (reduce backend work)
  handleTypingDelay = e => {
    let enterredData = { ...e };

    // use setTimeout() to give delay on every username check
    let delay = setTimeout(
      () => this.handleUsernameAvailable(enterredData),
      5000
    );
    // implement the delay
    this.setState({
      [e.target.name]: e.target.value,
      delay
    });
  };

  handleTypedInData = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { userName, email, passWord, usernameValid } = this.state;
    return (
      <>
        <h1 className="text-center">Sign Up Form</h1>
        <div className="w-50 mx-auto d-block">
          {/* below onsubmit is to avoid auto refresh & delete the new user data, and update the new user data using signUpNewUser() function from App.js */}
          <form onSubmit={e => this.handleSubmitNewUser(e)}>
            <Input
              className="form-control"
              type="text"
              placeholder="Enter your username"
              name="userName" // must be same as your state name. to let computer know, that this input is the `userName`
              value={userName}
              onChange={e => {
                this.handleTypedInData(e.target.name, e.target.value);
                // this.handleUsernameAvailable(e);
                // combine handletypedindata & typingdelay together
                this.handleTypingDelay(e);
              }}
              valid={usernameValid}
              invalid={!usernameValid}
            />
            <Input
              className="form-control"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => {
                this.handleTypedInData(e.target.name, e.target.value);
              }}
              name="email"
              valid
            />
            <Input
              className="form-control"
              type="password"
              placeholder="Enter your password"
              value={passWord}
              onChange={e => {
                this.handleTypedInData(e.target.name, e.target.value);
              }}
              name="passWord"
              valid
            />
            <button>Sign Up</button>
          </form>

          {/* direct user who has account already to login page  */}
          <button className="btn btn-link" onClick={this.props.handleLogin}>
            {" "}
            already have an account ? login now!{" "}
          </button>
        </div>
      </>
    );
  }
}

export default SignUpForm;
