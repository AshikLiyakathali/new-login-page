import React from "react";

class Form extends React.Component {
  state = {
    userName: "",
    Password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      userName: "",
      Password: ""
    });
    this.props.onChange({
      userName: "",
      Password: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="userName"
          placeholder="User name"
          value={this.state.userName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Password"
          placeholder="Password"
          value={this.state.Password}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
