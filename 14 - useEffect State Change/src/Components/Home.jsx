import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log("Home created");
    return () => {
      console.log("Home deleted");
    };
  });

  return <div className="text-3xl pl-[5%]">Home</div>;
}

export default Home;
