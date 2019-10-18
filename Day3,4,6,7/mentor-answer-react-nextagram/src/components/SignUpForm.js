import React from "react";
import { Input } from "reactstrap";

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

  handleTypedInData = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  // check whether the username entered is taken or not
  handleUsernameAvailable = e => {
    let newUserName = ``;
    console.log(e);
    // if (e.target.name === )
  };

  render() {
    const { userName, email, passWord } = this.state;
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
              }}
              valid={
                userName.length > 6
                  ? (this.state.usernameValid = true)
                  : (this.state.usernameValid = false)
              }
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
