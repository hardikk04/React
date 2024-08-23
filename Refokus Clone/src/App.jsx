import React from "react";
import Lenis from "lenis";
import Nav from "./Components/Nav";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marques from "./Components/Marques";
import Forward from "./Components/Forward";
import Info from "./Components/Info";
import Owner from "./Components/Owners";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  const lenisJS = () => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  };
  lenisJS();

  return (
    <div className="ff w-full overflow-hidden bg-black text-white">
      <Nav></Nav>
      <Work></Work>
      <div className="mt-[4.5vw]">
        <Stripes></Stripes>
      </div>
      <Products></Products>
      <div className="mt-[4.5vw]">
        <Stripes></Stripes>
        <Marques></Marques>
      </div>
      <Forward></Forward>
      <Info></Info>
      <Owner></Owner>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
