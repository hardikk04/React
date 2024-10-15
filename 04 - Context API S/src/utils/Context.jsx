import React, { createContext, useState } from "react";

export const contextData = createContext(null);

const Context = (props) => {
  const [data, setdata] = useState("data he");
  return (
    <contextData.Provider value={[data, setdata]}>
      {props.children}
    </contextData.Provider>
  );
};

export default Context;
