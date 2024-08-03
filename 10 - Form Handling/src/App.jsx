import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        <input {...register("name")} type="text" placeholder="Name" />
        <input {...register("age")} type="number" placeholder="Age" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
