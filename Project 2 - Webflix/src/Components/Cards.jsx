import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  return (
    <div className=" w-full h-full bg-[#1F1E24] overflow-hidden flex flex-wrap justify-center gap-[3vw]">
      {data.map((d, i) => {
        return (
          <Link
            to={`/${title}/details/${d.id}`}
            key={i}
            className="w-[20%] h-[55vh]"
          >
            <img
              className="w-full h-[90%] object-cover shadow-lg"
              src={
                d.backdrop_path || d.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.poster_path || d.backdrop_path || d.profile_path
                    }`
                  : "/noImg.png"
              }
              alt=""
            />
            <div className="text-white text-2xl mt-2 font-semibold">
              {d.name || d.title || d.original_name || d.original_title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
