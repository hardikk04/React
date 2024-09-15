import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  document.title = "WebFlix | Contact";

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission, e.g., send data to an API
    setStatus("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center w-full p-8 relative">
      <h1
        onClick={() => navigate(-1)}
        className="hover:text-[#6556cd] cursor-pointer text-3xl flex gap-4 items-center justify-center absolute top-[5%] left-[2%]  font-semibold"
      >
        <i className="ri-arrow-left-line"></i>
        WebFlix | Home
      </h1>
      <div className="w-full p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#6556cd]">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#6556cd] text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Send Message
          </button>
          {status && (
            <p className="text-center text-green-500 mt-4">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
