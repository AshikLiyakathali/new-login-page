import React from "react";
import UserList from "./UserList";

class User extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    //this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
        <br />
        <h1>Sample User List</h1>
        <UserList />
      </form>
    );
  }
}

export default User;
