import React from "react";

class Form extends React.Component {
  state = {
    username: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ username: "", password: "" });
    this.props.onChange({ username: "", password: "" });
  };

  render() {
    return (
      <form>
        <input
          name="username"
          placeholder="Enter your username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          placeholder="Enter your password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
export default Form;
