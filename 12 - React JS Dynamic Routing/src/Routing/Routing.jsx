import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";

function Routing() {
  return (
    <Routes>
      <Route path={"/"} element={<Home></Home>}></Route>
      <Route path={"/about"} element={<About></About>}></Route>
      <Route path={"/contact"} element={<Contact></Contact>}></Route>
    </Routes>
  );
}

export default Routing;
