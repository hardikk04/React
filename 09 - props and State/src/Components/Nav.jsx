import React from "react";

function Nav({ data }) {
  return (
    <div className="flex justify-between items-center mb-12">
      <h1 className="text-orange-500 text-2xl">Orange</h1>
      <h1 className="text-white bg-orange-500 px-4 py-2 text-sm rounded-md">
        Favourites {data.filter((item) => item.cart).length}
      </h1>
    </div>
  );
}

export default Nav;
