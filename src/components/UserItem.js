import React from "react";
import User from "./User";

class UserItem extends User {
  render() {
    return (
      <div>
        <h1>UserItem</h1>
        <button
          onClick={console.log("We are passing data from child to parent")}
        >
          UserItem
        </button>
        <br />
      </div>
    );
  }
}

export default UserItem;
