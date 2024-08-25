import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const [products, setProducts] = useContext(productContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("All details are required");
      return;
    }

    const pi = products.findIndex((p) => p.id == id);
    const copiedData = [...products];
    copiedData[pi] = { ...product };
    setProducts(copiedData);
    localStorage.setItem("products", JSON.stringify(copiedData));
    toast.success("Product updated successfully!");
    navigate("/");
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="w-full h-screen flex flex-col pt-[6%] items-center"
    >
      <h1 className="text-5xl font-[600]">Edit Products</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 my-2 outline-none"
        onChange={changeHandler}
        name="image"
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 my-2 outline-none"
        onChange={changeHandler}
        name="title"
        value={product && product.title}
      />
      <div className="w-1/2 flex gap-4">
        <input
          type="text"
          placeholder="category"
          className="text-2xl bg-zinc-100 rounded p-3 w-1/2 my-2 outline-none"
          onChange={changeHandler}
          name="category"
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-2xl bg-zinc-100 rounded p-3 w-1/2 my-2 outline-none"
          name="price"
          onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        placeholder="enter product description here"
        className="w-1/2 text-xl bg-zinc-100 my-2 p-3 rounded"
        rows="10"
        name="description"
        onChange={changeHandler}
        value={product && product.description}
      ></textarea>
      <div className="w-1/2 my-2">
        <button className="text-blue-300 text-xl border py-2 px-4 border-blue-100 rounded-md">
          Edit Product
        </button>
      </div>
    </form>
  );
}

export default Create;
