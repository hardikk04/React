import React from "react";
import Home from "./Components/Home";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";


function App() {
  const { search, pathname } = useLocation();

  return (
    <div
      className="h-screen
     w-screen flex"
    >
      {pathname !== "/" || search.length > 0 ? (
        <Link
          to="/"
          className="absolute z-10 left-[18%] top-[3%] text-2xl text-red-300 font-[600]"
        >
          Home
        </Link>
      ) : (
        ""
      )}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/edit/:id" element={<Edit></Edit>}></Route>
        <Route path="/details/:id" element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;
