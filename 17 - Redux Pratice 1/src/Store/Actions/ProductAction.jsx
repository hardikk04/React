import axios from "axios";
import { getProducts } from "../Slices/ProductReducer";

export const asyncFunction = () => async (dispatch, state) => {
  try {
    const products = await axios.get("https://fakestoreapi.com/products");

    dispatch(getProducts(products.data));
  } catch (error) {
    console.log(error);
  }
};
