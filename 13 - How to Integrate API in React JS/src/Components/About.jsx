import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    console.log("created");

    return () => {
      console.log("Destroyed");
    };
  });
  return <div>About</div>;
}

export default About;
