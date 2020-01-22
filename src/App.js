import React, { Component } from "react";
import "./App.css";
import User from "./components/User";
import UserItem from "./components/UserItem";

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
        <User onChange={fields => this.onChange(fields)} />
        <UserItem />
      </div>
    );
  }
}

export default App;
