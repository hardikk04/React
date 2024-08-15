import axios from "./axios";
import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const productContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <productContext.Provider value={[products, setProducts]}>
      {props.children}
    </productContext.Provider>
  );
}

export default Context;
