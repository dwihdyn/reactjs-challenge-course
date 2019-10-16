import React from "react";

class SignUpForm extends React.Component {
  state = {
    userName: ``,
    email: ``,
    passWord: ``
  };

  handleSubmitNewUserData = e => {
    e.preventDefault();
    const { userName, email, passWord } = this.state;

    // upload new user data into the current state to LoginPage.js, and then from LoginPage.js(parent) send to App.js(grandparent)
    this.props.signUpNewUser(userName, email, passWord);
  };

  handleTypedInData = (name, value) => {
    console.log(name); // keep track that this is username/email/password
    console.log(value); // keep track what the user has entered
    this.setState({
      [name]: value
    });
  };

  render() {
    const { userName, email, passWord } = this.state;
    return (
      <>
        <h1 className="text-center">Sign Up Form</h1>
        <div className="w-50 mx-auto d-block">
          {/* below onsubmit is to avoid auto refresh & delete the new user data, and update the new user data using signUpNewUser() function from App.js */}
          <form onSubmit={e => this.handleSubmitNewUserData(e)}>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your username"
              name="userName" // must be same as your state name. to let computer know, that this input is the `userName`
              value={userName}
              onChange={e => {
                this.handleTypedInData(e.target.name, e.target.value);
              }}
            />
            <input
              className="form-control"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => {
                this.handleTypedInData(e.target.name, e.target.value);
              }}
              name="email"
            />
            <input
              className="form-control"
              type="password"
              placeholder="Enter your password"
              value={passWord}
              onChange={e => {
                this.handleTypedInData(e.target.name, e.target.value);
              }}
              name="passWord"
            />
          </form>
        </div>
      </>
    );
  }
}

export default SignUpForm;
