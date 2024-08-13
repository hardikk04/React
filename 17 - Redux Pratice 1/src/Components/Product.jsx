import { useDispatch, useSelector } from "react-redux";
import { asyncFunction } from "../Store/Actions/ProductAction";
import { useEffect } from "react";

function Product() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(asyncFunction());
  }, []);

  return (
    <div className="flex justify-center items-center flex-col text-white mt-5">
      {products.map((product, index) => {
        return (
          <div key={product.id} className="flex gap-2 mt-2">
            <h1>{product.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
