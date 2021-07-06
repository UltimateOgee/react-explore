import React from "react";
import ReactDOM from "react-dom";
//Counter:
//import Counter from "./Counter";
//GetRequest:
import GetRequest from "./GetRequest";

function App() {
  return (
    <>
      <GetRequest />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
