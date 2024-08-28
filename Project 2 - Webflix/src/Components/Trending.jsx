import { useEffect, useState } from "react";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import Cards from "./Cards";
import axios from "../utils/axios";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  document.title = "WebFlix | Trending";

  const navigate = useNavigate();

  const [trendingContent, setTrendingContent] = useState([]);
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [page, setPage] = useState(1);

  const getTrendingContent = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      setTrendingContent((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
      console.log(page);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setTrendingContent([]);
    getTrendingContent();
  }, [category, duration]);

  return trendingContent.length > 0 ? (
    <div className="h-full w-full">
      <div className="px-10 text-white mb-5 w-full flex justify-between items-center">
        <h1 className="text-3xl flex gap-4 items-center justify-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line  hover:text-[#6556cd] cursor-pointer"
          ></i>
          Trending
        </h1>
        <div className="w-[70%]">
          <Topnav></Topnav>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <Dropdown
            handleCategory={(e) => setCategory(e.target.value.toLowerCase())}
            title={["category", "movie", "person", "tv"]}
          />

          <Dropdown
            handleCategory={(e) => setDuration(e.target.value.toLowerCase())}
            title={["duration", "week", "day"]}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trendingContent}
        next={getTrendingContent}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trendingContent}></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;
