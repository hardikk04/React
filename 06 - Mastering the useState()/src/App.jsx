import React, { useState } from "react";

function App() {
  const [value, setValue] = useState([
    { name: "Hardik", age: 21 },
    { name: "Anuj", age: 23 },
    { name: "Prateek", age: 24 },
  ]);
  return (
    <div className="p-8">
      {value.map((item, index) => {
        return (
          <div className="card" key={index}>
            <h1 className="text-3xl">{item.name}</h1>
            <h3>{item.age}</h3>
          </div>
        );
      })}
      <button
        onClick={() => {
          setValue((prev) => {
            return prev.map((item, index) => {
              return { ...item, age: item.age + 1 };
            });
          });
        }}
        className="px-4 py-2 rounded-md text-white bg-blue-500 text-sm mt-4"
      >
        Change
      </button>
    </div>
  );
}

export default App;
