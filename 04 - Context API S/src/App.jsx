import React, { useContext } from "react";
import { contextData } from "./utils/Context";
import Sample from "./Sample";

const App = () => {
  const [data, setdata] = useContext(contextData);
  console.log(data);

  return (
    <>
      <Sample />;
    </>
  );
};

export default App;
