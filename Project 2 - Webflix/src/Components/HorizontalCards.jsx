import React from "react";
import { Link } from "react-router-dom";

function HorizontalCards({ data }) {
  return (
    <div className="p-5 flex h-[55vh] gap-2 overflow-x-auto overflow-y-hidden mb-8">
      {data.map((d, i) => {
        return (
          <Link
            to={`${d.media_type}/details/${d.id}`}
            key={i}
            className="w-[16%] h-full bg-zinc-900 shrink-0"
          >
            <img
              className={"w-full object-cover opacity-[.9]"}
              src={`https://image.tmdb.org/t/p/original/${
                d.profile_path || d.poster_path
              }`}
              alt=""
            />
            <div className="text-white p-2 ">
              <h1 className="text-xl">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              {d.overview ? (
                <p className="leading-none mt-2">
                  {d.overview.slice(0, 100)} <span>more...</span>
                </p>
              ) : (
                <p className="leading-none mt-2">{d.known_for_department}</p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HorizontalCards;
