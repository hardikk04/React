import React from "react";

function Home() {
  const data = "Hello";
  const arr = ["1", "2", "3"];
  const obj = {
    name: "Hardik",
    age: 21,
  };
  return (
    <>
      <h1>{data}</h1>
      <h1>{arr}</h1>
      <h1>{obj.name}</h1>
    </>
  );
}

export default Home;
