import React from "react";

function Marque({ item }) {
  return (
    <div className="shrink-0 w-[16.66%] border-t-[1px] border-r-[1px] border-b-[1px] px-4 py-6 border-zinc-700 flex justify-center items-center">
      <span className="font-semibold text-2xl">{item}</span>
    </div>
  );
}

export default Marque;
