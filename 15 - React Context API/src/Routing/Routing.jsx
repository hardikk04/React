import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import User from "../Components/User";
import Userdetails from "../Components/Userdetails";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users/:id" element={<Userdetails />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </>
  );
}

export default Routing;
