import { useEffect, useState } from "react";
import Topnav from "./Topnav";
import Cards from "./Cards";
import axios from "../utils/axios";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  document.title = "WebFlix | People Popular";

  const getPeopleContent = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);

      setPeople((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setPeople([]);
    getPeopleContent();
  }, []);

  return people.length > 0 ? (
    <div className="h-full w-full">
      <div className="px-10 text-white mb-5 w-full flex justify-between items-center">
        <h1 className="text-3xl flex gap-4 items-center justify-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line  hover:text-[#6556cd] cursor-pointer"
          ></i>
          Tv Show
        </h1>
        <div className="w-[70%]">
          <Topnav></Topnav>
        </div>
      </div>

      <InfiniteScroll
        dataLength={people}
        next={getPeopleContent}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={people}></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People;
