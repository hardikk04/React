import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  const [data, setData] = useState([]);
  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <div className="flex gap-10">
        <Link to="/" className="text-3xl">
          Home
        </Link>
        <Link to="/about" className="text-3xl">
          About
        </Link>
      </div>
      <button
        onClick={getProducts}
        className="px-5 py-2 mt-3 bg-blue-500 text-sm text-white"
      >
        Add
      </button>
      <br /> <br />
      {data.map((item) => {
        return <div className="p-5 bg-red-400 text-white">{item.title}</div>;
      })}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
