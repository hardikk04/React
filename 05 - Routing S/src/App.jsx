import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import { Link } from "react-router-dom";

const App = () => {
  
  return (
    <>
      <nav>
        <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/">
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-500" : "")}
          to="/about"
        >
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default App;
