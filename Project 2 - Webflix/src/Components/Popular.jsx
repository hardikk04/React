import { useEffect, useState } from "react";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import Cards from "./Cards";
import axios from "../utils/axios";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  const navigate = useNavigate();
  const [popularContent, setPopularContent] = useState([]);
  const [category, setCategory] = useState("movie");
  const [page, setPage] = useState(1);

  document.title = "WebFlix | Popular " + category;

  const getPopularContent = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      setPopularContent((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setPopularContent([]);
    getPopularContent();
  }, [category]);

  return popularContent.length > 0 ? (
    <div className="h-full w-full">
      <div className="px-10 text-white mb-5 w-full flex justify-between items-center">
        <h1 className="text-3xl flex gap-4 items-center justify-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line  hover:text-[#6556cd] cursor-pointer"
          ></i>
          Popular
        </h1>
        <div className="w-[70%]">
          <Topnav></Topnav>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <Dropdown
            handleCategory={(e) => setCategory(e.target.value.toLowerCase())}
            title={["category", "movie", "person", "tv"]}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={popularContent}
        next={getPopularContent}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popularContent}></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;
