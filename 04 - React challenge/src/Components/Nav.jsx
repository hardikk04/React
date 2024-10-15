import React from "react";

const Nav = () => {
  return (
    <div className="fixed z-10 text-white  flex justify-between h-[10vh] w-full text-2xl ">
      <h1 className="text-3xl font-bold uppercase w-[40%] pl-[4vw] pt-[2vw]">
        PortFolio.
      </h1>
      <div className="nav-right flex justify-center items-center gap-[3vw] w-[60%] bg-gray-500 pr-[4vw]">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">WORKS</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACT</a>
      </div>
    </div>
  );
};

export default Nav;
