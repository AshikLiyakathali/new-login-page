import React from "react";

const mylist = [
  {
    firstname: "Dinesh",
    lastname: "Kumar"
  },
  {
    firstname: "Ashik",
    lastname: "Liyakathali"
  },
  {
    firstname: "Rahul",
    lastname: "Chellappa"
  },
  {
    firstname: "Errick",
    lastname: "Joel"
  }
];

const Abc = () => <SampleList list={mylist} />;
export default Abc;

const SampleList = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.firstname}>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <br />
      </li>
    ))}
  </ul>
);
