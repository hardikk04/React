import React from "react";

function Card({ data, handleRemove }) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[12vw] h-[30vh] bg-white rounded-md text-center flex flex-col items-center p-2"
          >
            <div className="img h-[8vh] w-[8vh] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={item.img}
                alt=""
              />
            </div>
            <h1 className="text-2xl mt-2 font-[500]">{item.name}</h1>
            <small className="mt-2 text-zinc-400">{item.email}</small>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
              iusto!
            </p>
            <button
              onClick={() => {
                handleRemove(index);
              }}
              className="mt-3 px-4 py-2 rounded-md bg-red-500 text-white text-sm"
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Card;
