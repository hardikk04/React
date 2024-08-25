import React, { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(productContext);

  let distinctCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distinctCategory = [...new Set(distinctCategory)];

  return (
    <nav className="w-[15%] h-full bg-zinc-100 pt-6 flex flex-col items-center">
      <Link
        to="/create"
        className="text-blue-300 text-xl border py-2 px-4 border-blue-100 rounded-md"
      >
        Add New Product
      </Link>
      <hr className="w-[80%] my-4" />
      <h1 className="text-2xl mb-3 w-[80%]">Category</h1>
      <ul className=" w-[80%]">
        {distinctCategory.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/?category=${item}`}
              className="my-2 flex items-center gap-2  hover:text-blue-500"
            >
              <span className="h-[10px] w-[10px] bg-blue-300 rounded-full inline-block"></span>{" "}
              {item}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
