import Header from "./Header";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import HorizontalCards from "./HorizontalCards";
import axios from "../utils/axios";
import Loading from "./Loading";

import { useEffect, useState } from "react";

function Home() {
  document.title = "WebFlix | Home";
  const [trendingMoviePoster, setTrendingMoviePoster] = useState(null);
  const [trendingMovies, settrendingMovies] = useState([]);
  const [caterogies, setCaterogies] = useState("all");

  const getTrendingMoviePoster = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      const random = Math.floor(Math.random() * data.results.length);
      setTrendingMoviePoster(data.results[random]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTrendingMovie = async () => {
    try {
      const { data } = await axios.get(`trending/${caterogies}/day`);
      settrendingMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTrendingMoviePoster();
    getTrendingMovie();
  }, [caterogies]);

  return trendingMoviePoster ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-x-hidden">
        <Topnav />
        <Header data={trendingMoviePoster} />
        <div className="text-white flex justify-between p-5 items-center">
          <h1 className="text-3xl font-semibold">Treding</h1>
          <Dropdown
            handleCategory={(e) => setCaterogies(e.target.value.toLowerCase())}
            title={["all", "movie", "person", "tv"]}
          />
        </div>
        <HorizontalCards data={trendingMovies} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
