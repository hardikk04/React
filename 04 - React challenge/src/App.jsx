import React from "react";
import Nav from "./Components/Nav";
import Left from "./Components/Left";
import Right from "./Components/Right";

function App() {
  return (
    <div className="h-screen w-full flex">
      <Nav></Nav>
      <Left></Left>
      <Right></Right>
    </div>
  );
}

export default App;
