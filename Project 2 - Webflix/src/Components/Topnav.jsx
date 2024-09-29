import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";

function Topnav() {
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);

  const getSearchQuery = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);

      setQueryResult(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSearchQuery();
  }, [query]);

  return (
    <div className="w-full h-[10vh] text-zinc-400 text-2xl flex items-center gap-[2vw] pl-[15%] relative">
      <i className="ri-search-line"></i>
      <input
        onChange={(i) => {
          setQuery(i.target.value);
        }}
        value={query}
        className="bg-transparent text-white outline-none border-none w-[50%]"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-fill cursor-pointer"
        ></i>
      )}
      <div className="search-box absolute top-[100%] max-h-[50vh] w-[50%] bg-zinc-200 overflow-auto">
        {queryResult.map((q, i) => {
          return (
            <Link
              to={`/${q.media_type}/details/${q.id}`}
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10 flex justt items-center border-b-2 border-zinc-100 gap-[2vw]"
            >
              <img
                className="h-[10vh] w-[10vw] object-cover"
                src={
                  q.backdrop_path || q.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        q.backdrop_path || q.profile_path
                      }`
                    : "/noImg.png"
                }
                alt="Not found"
              />
              <span>
                {q.name || q.title || q.original_name || q.original_title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Topnav;
