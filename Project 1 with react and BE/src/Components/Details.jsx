import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productContext } from "../utils/Context";
import axios from "../utils/axios";
import Loading from "./Loading";

function Details() {
  const [products] = useContext(productContext);

  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const getSingleProduct = async () => {
    const { data } = await axios.get(`/products/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {product ? (
        <div className="product h-[100vh] w-full flex">
          <div className="product-imgs h-full w-[55%] overflow-hidden p-20">
            <img
              className="h-full w-full object-container"
              src={product.image}
              alt=""
            />
          </div>
          <div className="product-content h-full w-[45%] px-4 py-8 flex flex-col">
            <div className="flex justify-between">
              <h1 className="text-[3vw] font-[800] tracking-tighter leading-[1.3] mb-12">
                {product.title}
              </h1>
              <h1 className="text-[3vw] font-[800] tracking-tighter">
                {product.id}
              </h1>
            </div>
            <h1 className="mt-2">{product.category}</h1>
            <h1 className="mt-2">${product.price}</h1>
            <p className="mt-3">{product.description}</p>
            <div>
              <div className="flex gap-4">
                <Link className="w-1/2 py-5 mt-[2vw] text-center inline-block border-[1px] border-blue-500 border-solid text-blue-500">
                  Edit
                </Link>
                <Link className="w-1/2 py-5 mt-[2vw] text-center inline-block border-[1px] border-red-500 border-solid text-red-500">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Details;
