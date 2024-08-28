import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";

function App() {
  return (
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
      </Routes>
    </div>
  );
}

export default App;
