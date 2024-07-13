import React from "react";

function Card() {
  return (
    <div className="card rounded-md w-[20vw] overflow-hidden bg-white">
      <div className="img bg-red-400 h-[25vh]">
        <img
          src="https://plus.unsplash.com/premium_photo-1719850361637-b9514dfbee5b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="content p-3 mt-2">
        <h1 className="text-3xl font-[500]">Name</h1>
        <p className="mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere in
          saepe reiciendis.
        </p>
      </div>
    </div>
  );
}

export default Card;
