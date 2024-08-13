import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import User from "./Components/User";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-800 text-white">
      <nav className="flex gap-8 text-2xl justify-center">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <div className="line w-full h-[1px] bg-zinc-700 mt-4"></div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path="/products" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
