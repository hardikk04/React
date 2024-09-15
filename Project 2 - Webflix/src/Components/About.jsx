import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  document.title = "WebFlix | About";

  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6 relative">
      <h1
        onClick={() => navigate(-1)}
        className="text-3xl flex gap-4 items-center justify-center absolute top-[5%] left-[2%]  font-semibold  hover:text-[#6556cd] cursor-pointer"
      >
        <i className="ri-arrow-left-line"></i>
        WebFlix | Home
      </h1>

      <div className="w-full p-8 bg-gray-800 rounded-lg shadow-lg ">
        <h1 className="text-5xl font-bold text-center mb-8 text-[#6556cd]">
          About WebFlix
        </h1>
        <p className="text-lg mb-6">
          Welcome to{" "}
          <span className="font-semibold text-[#6556cd]">WebFlix</span>, your
          ultimate destination for streaming the latest and greatest movies from
          around the globe. WebFlix brings the magic of cinema right to your
          fingertips, offering an extensive library of films across all genres.
        </p>
        <p className="text-lg mb-6">
          At WebFlix, our mission is to provide an unparalleled streaming
          experience. Whether you’re in the mood for a blockbuster hit, an indie
          gem, or a classic favorite, WebFlix has something for everyone.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Stream high-quality movies anytime, anywhere.</li>
          <li>Explore curated collections and personalized recommendations.</li>
          <li>Create and manage your own watchlists.</li>
          <li>
            Enjoy a user-friendly interface with a sleek and modern design.
          </li>
          <li>Stay updated with the latest releases and trending movies.</li>
        </ul>
        <p className="text-lg">
          Join the WebFlix community and dive into a world of entertainment.
          We're constantly updating our library to bring you the best in cinema.
          Get ready to explore, discover, and enjoy movies like never before
          with WebFlix.
        </p>
      </div>
    </div>
  );
};

export default About;
