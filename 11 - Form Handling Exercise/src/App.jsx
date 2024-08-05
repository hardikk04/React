import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
import { set } from "react-hook-form";

function App() {
  const [data, setData] = useState([]);

  const handleFormData = (formData) => {
    setData([...data, formData]);
  };

  const handleRemove = (itemIndex) => {
    setData((prev) => {
      return prev.filter((item, index) => {
        if (itemIndex !== index) {
          return item;
        }
      });
    });
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center flex-col">
      <Cards data={data} handleRemove={handleRemove}></Cards>
      <Form handleFormData={handleFormData}></Form>
    </div>
  );
}

export default App;
