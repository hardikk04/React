import React, { useContext } from "react";
import { contextData } from "./utils/Context";

const Sample = () => {
  const [data, setdata] = useContext(contextData);
  console.log(data);

  return <div>Sample</div>;
};

export default Sample;
