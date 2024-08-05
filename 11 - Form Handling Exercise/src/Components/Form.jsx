import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormData }) {
  const { register, reset, handleSubmit } = useForm();

  return (
    <form
      className="mt-8 flex gap-5"
      onSubmit={handleSubmit((data) => {
        handleFormData(data);
        reset();
      })}
    >
      <input
        {...register("name")}
        className="p-2 rounded-md
      "
        type="text"
        placeholder="Name"
      />
      <input
        {...register("email")}
        className="p-2 rounded-md
      "
        type="email"
        placeholder="Email"
      />
      <input
        {...register("img")}
        className="p-2 rounded-md
      "
        type="text"
        placeholder="Image URL"
      />
      <input
        className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm"
        type="submit"
      />
    </form>
  );
}

export default Form;
