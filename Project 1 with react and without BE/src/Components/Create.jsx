import React, { useContext, useState } from "react";
import { productContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

function Create() {
  const [products, setProducts] = useContext(productContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("All details are required");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    toast.success("Product created successfully!");
    navigate("/");
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="w-full h-screen flex flex-col pt-[6%] items-center"
    >
      <h1 className="text-5xl font-[600]">Add New Products</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 my-2 outline-none"
        onChange={(e) => {
          setImage(e.target.value);
        }}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 my-2 outline-none"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <div className="w-1/2 flex gap-4">
        <input
          type="text"
          placeholder="category"
          className="text-2xl bg-zinc-100 rounded p-3 w-1/2 my-2 outline-none"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-2xl bg-zinc-100 rounded p-3 w-1/2 my-2 outline-none"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
      </div>
      <textarea
        placeholder="enter product description here"
        className="w-1/2 text-xl bg-zinc-100 my-2 p-3 rounded"
        rows="10"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <div className="w-1/2 my-2">
        <button
          to="/create"
          className="text-blue-300 text-xl border py-2 px-4 border-blue-100 rounded-md"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
