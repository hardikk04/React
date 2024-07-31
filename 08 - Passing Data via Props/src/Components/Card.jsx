import React from "react";

function Card({ item, handleClick, index }) {
  const { name, img, description, isFriends } = item;
  return (
    <div className="w-[20vw] overflow-hidden rounded-md bg-white">
      <div
        className="img h-[28vh] w-full bg-red-400
      "
      >
        <img className="h-full w-full object-cover" src={img} alt="" />
      </div>
      <div className="p-2">
        <h1 className="text-2xl mt-2">{name}</h1>
        <p className="my-2">{description}</p>
        <button
          onClick={() => {
            handleClick(index);
          }}
          className={`text-white px-5 py-2 rounded-md ${
            !isFriends ? "bg-blue-500" : "bg-red-500"
          } text-sm`}
        >
          {isFriends ? "Remove Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default Card;
