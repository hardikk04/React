import axios from "./axios";
import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const productContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  return (
    <productContext.Provider value={[products, setProducts]}>
      {props.children}
    </productContext.Provider>
  );
}

export default Context;
