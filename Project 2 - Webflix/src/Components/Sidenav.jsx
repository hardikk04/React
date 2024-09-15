import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[25%] h-full border-r border-gray-600 p-10 text-white">
      <div className="flex gap-3 text-3xl">
        <i className="ri-tv-fill text-[#6556cd]"></i>
        <h1 className="font-bold">WebFlix</h1>
      </div>
      <nav className="mt-[2.5vw] text-2xl flex flex-col">
        <h1 className="font-[500] mb-[2.5vw]">New Feeds</h1>
        <Link
          to="/trending"
          className="inline-block p-5 text-zinc-400 hover:bg-[#6556cd] hover:text-white duration-500"
        >
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="inline-block p-5 text-zinc-400 hover:bg-[#6556cd] hover:text-white duration-500"
        >
          <i className="ri-sparkling-fill mr-2"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="inline-block p-5 text-zinc-400 hover:bg-[#6556cd] hover:text-white duration-500"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to="/tvshow"
          className="inline-block p-5 text-zinc-400 hover:bg-[#6556cd] hover:text-white duration-500"
        >
          <i className="mr-2 ri-tv-2-fill"></i>Tv Shows
        </Link>
        <Link
          to="/people"
          className="inline-block p-5 text-zinc-400 hover:bg-[#6556cd] hover:text-white duration-500"
        >
          <i className="mr-2 ri-team-fill"></i>People
        </Link>
      </nav>
      <hr className="border-gray-600" />
      <nav className="mt-[2vw] text-2xl flex flex-col">
        <h1 className="font-[500] mb-[1vw]">Website Informations</h1>
        <Link
          to="/about"
          className="inline-block p-5 text-zinc-400 hover:bg-[#6556cd] hover:text-white duration-500"
        >
          <i className="ri-information-fill mr-2"></i>
          About WebFlix
        </Link>
        <Link
          to="/contact"
          className="inline-block p-5 text-zinc-400 hover:bg-[#6556cd] hover:text-white duration-500"
        >
          <i className="ri-phone-fill mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
