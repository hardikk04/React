import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-center items-center gap-16">
      <Link className="text-3xl" to="/">
        Home
      </Link>
      <Link className="text-3xl" to="/user">
        User
      </Link>
      <Link className="text-3xl" to="/about">
        About
      </Link>
    </div>
  );
}

export default Nav;
