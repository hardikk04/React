import { useEffect, useState } from "react";
import axios from "../utils/axios.jsx";

function Show() {
  const [products, setProducts] = useState([]);
  const [users, setUser] = useState([]);

  const getProduct = () => {
    axios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getProduct();

    return () => {
      console.log("Show deleted");
    };
  }, []);

  return (
    <div className="text-3xl pl-[5%]">
      <button
        onClick={getProduct}
        className="px-5 py-2 rounded-md bg-red-400 text-white mb-6"
      >
        Show
      </button>

      {products.length > 0 ? (
        products.map((product, index) => {
          return (
            <h3
              key={product.id}
              className="bg-blue-300 mt-2 w-fit text-white px-4 py-2 rounded-md"
            >
              {product.title}
            </h3>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Show;
