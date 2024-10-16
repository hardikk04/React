import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tvshow from "./Components/Tvshow";
import People from "./Components/People";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";
import PersonDetails from "./Components/PersonDetails";

function App() {
  return (
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/movie/details/:id" element={<MovieDetails />}></Route>
        <Route path="/tvshow" element={<Tvshow />}></Route>
        <Route path="/tv/details/:id" element={<TvDetails />}></Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/person/details/:id" element={<PersonDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
