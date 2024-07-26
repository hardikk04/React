import React from "react";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({ name: "Hardik", isBannded: false });
  return (
    <div className="p-6">
      <h1>{value.name}</h1>
      <h1>Banned : {value.isBannded.toString()}</h1>
      <button
        onClick={() => {
          setValue({ ...value, isBannded: !value.isBannded });
        }}
        className="px-8 py-2 bg-blue-500 rounded-md text-white text-sm mt-4"
      >
        Set
      </button>
    </div>
  );
};

export default App;
