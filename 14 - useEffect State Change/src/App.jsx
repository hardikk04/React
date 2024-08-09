import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Show from "./Components/Show";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/show"} element={<Show />}></Route>
      </Routes>
    </div>
  );
}

export default App;
