import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import User from "./components/User";

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

  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Component did mount!");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component update", nextProps, nextState);
    // if (nextState.status === 1) {
    //     return false;
    // }
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        <User />
      </div>
    );
  }
}

export default App;
