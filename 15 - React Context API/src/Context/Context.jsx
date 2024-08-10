import React, { createContext, useContext, useState } from "react";

export const userContext = createContext();

function Context(props) {
  const [users, setUsers] = useState([
    { name: "Hardik", city: "Bhopal" },
    { name: "Anuj", city: "Indore" },
    { name: "Prateek", city: "Sehore" },
  ]);

  return (
    <userContext.Provider value={{ users, setUsers }}>
      {props.children}
    </userContext.Provider>
  );
}

export default Context;
