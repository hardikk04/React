import React from "react";

function Card({ item, index, handleClick }) {
  const { song, artist, img, cart } = item;
  return (
    <div className="p-3 w-[13vw] rounded-md flex gap-4 bg-white">
      <div className="img h-[10vh] w-1/2 overflow-hidden rounded-md">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div>
        <h1 className="whitespace-nowrap text-2xl">{song}</h1>
        <p>{artist}</p>
        <button
          onClick={() => {
            handleClick(index);
          }}
          className={`px-4 py-2 rounded-full ${
            !cart ? "bg-orange-500" : "bg-red-500"
          } text-white mt-2 text-xs`}
        >
          {cart ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default Card;
