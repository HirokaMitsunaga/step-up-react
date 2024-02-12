import React from "react";
import "./style.css";
import axios from "axios";
export default function App() {
  const onClickUser = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickUser1 = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickUser}>users</button>
      <br />
      <button onClick={onClickUser1}>id=1のusers</button>
    </div>
  );
}
