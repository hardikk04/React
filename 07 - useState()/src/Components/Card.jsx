import React, { useState } from "react";

function Card() {
  const [value, setValue] = useState(false);
  return (
    <div
      onClick={() => {
        setValue(() => !value);
      }}
      className="card w-[26vw] h-[30vh] overflow-hidden rounded-md  bg-red-500 relative flex"
    >
      <img
        className={`w-full h-full object-cover relative ${
          value ? "-translate-x-[100%]" : "-translate-x-[0%]"
        }`}
        src="https://images.unsplash.com/photo-1720329461017-d6ed9f66beb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        className={`w-full h-full object-cover relative ${
          value ? "-translate-x-[100%]" : "-translate-x-[0%]"
        }`}
        src="https://images.unsplash.com/photo-1718976142386-e9ebe34d3aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}

export default Card;
