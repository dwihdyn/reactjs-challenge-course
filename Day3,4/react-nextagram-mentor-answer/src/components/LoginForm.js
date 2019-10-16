import React from "react";

class LoginForm extends React.Component {
  state = {
    userName: ``,
    passWord: ``
  };

  handleTypedInData = (name, value) => {
    console.log(name);
    this.setState({
      [name]: value // [name] will change to `userName` when user entering data in username, and same idea for `passWord`
    });
  };

  render() {
    const { userName, passWord } = this.state;
    return (
      <>
        <h1 className="text-center">Login Form : Your Account</h1>
        <form>
          <input
            className="form-control"
            type="text"
            name="userName" // must be same as your state name. to let computer know, that this input is the `userName`
            placeholder="Enter username ...."
            value={userName}
            onChange={e => {
              this.handleTypedInData(e.target.name, e.target.value); // update to state when event is happening (user typing input)
              console.log(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="password"
            name="passWord" // must be same as your state name. to let computer know, that this input is the `passWord`
            placeholder="Enter password ...."
            value={passWord}
            onChange={e => {
              this.handleTypedInData(e.target.name, e.target.value); // update to state when event is happening (user typing input)
              console.log(e.target.value);
            }}
          />
        </form>

        {/* want to direct user to SignUpForm page when clicked the link below  */}
        <button className="btn btn-link" onClick={this.props.handleLogin}>
          {" "}
          No account ? sign up now!{" "}
        </button>
      </>
    );
  }
}

export default LoginForm;
