import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center text-5xl">
      <form onSubmit={submitHandler}>
        <input type="text" />
        <input type="password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default About;
