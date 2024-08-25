import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(productContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filterProducts, setFilterProducts] = useState(null);

  useEffect(() => {
    if (!filterProducts || category === "undefined") {
      setFilterProducts(products);
    }
    if (category !== "undefined") {
      setFilterProducts(products.filter((p) => p.category === category));
    }
  }, [category, products]);

  return (
    <>
      <Nav></Nav>;
      <div className="w-[85%] pt-[5%] p-10 flex flex-wrap justify-center items-center gap-6 overflow-y-auto overflow-x-hidden">
        {filterProducts ? (
          filterProducts.map((item, index) => {
            return (
              <Link
                key={item.id}
                to={`/details/${item.id}`}
                className="card w-[18%] h-[30vh] shadow p-5 flex flex-col items-center justify-between rounded"
              >
                <div className="hover:scale-110 img h-[85%] overflow-hidden w-full">
                  <img
                    className="h-full w-full object-contain"
                    src={item.image}
                    alt=""
                  />
                </div>
                <h3 className="hover:text-blue-300 text-center mt-6">
                  {item.title}
                </h3>
              </Link>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default Home;
