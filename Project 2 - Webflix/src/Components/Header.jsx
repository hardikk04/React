import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(1.0,0.0,0.0,.3),rgba(1.0,0.0,0.0,.5),rgba(1.0,0.0,0.0,.6)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] p-[5%] flex flex-col justify-end items-start bg-center bg-cover"
    >
      <div className="text-white w-[70%]">
        <h1 className="text-5xl font-bold text-zinc-100">
          {data.name || data.title || data.original_name || data.original_title}
        </h1>
        <p className="mt-3 text-zinc-300 text-xl">
          {data.overview.slice(0, 200)}{" "}
          <Link className="text-blue-500 text-sm">more...</Link>
        </p>
        <div className="flex gap-4 mt-3 text-zinc-300">
          <p className="flex gap-2">
            <i className="ri-megaphone-fill text-yellow-500"></i>
            {data.release_date}
          </p>
          <p className="flex gap-2">
            <i className="ri-album-fill text-yellow-500"></i>
            {data.media_type.toUpperCase()}
          </p>
        </div>
        <Link className="inline-block mt-5 px-5 py-3 rounded-md bg-[#6556CD]">
          Watch Trailer
        </Link>
      </div>
    </div>
  );
}

export default Header;
