import React, { useState } from "react";
import { FaGithub, FaInstagram, FaSun, FaMoon } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}>
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center p-4 bg-opacity-90 backdrop-blur-lg shadow-md fixed top-0 w-full z-10">
        <h1 className="text-xl md:text-2xl font-bold">Your Name</h1>
        <div className="flex gap-4 items-center">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-gray-400 transition" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-gray-400 transition" />
          </a>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-800 text-white">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
          Hello, I'm Your Name 👋
        </h2>
        <p className="mt-4 text-lg md:text-xl font-light">MERN Stack Developer | Aspiring Data Analyst</p>
      </section>

      {/* Skills Section */}
      <section className="p-10 bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg mx-4 my-10 text-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-2 text-lg">HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Express.js</p>
      </section>

      {/* Projects Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <ul className="mt-4 space-y-4 text-lg">
          <li className="p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition">📱 Owl-M: Material Design Study App</li>
          <li className="p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition">🍔 Snack Squad: Snack Ordering App</li>
          <li className="p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition">🎙️ Podcast Plus: Redux-Inspired Podcast App</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="p-10 bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg mx-4 my-10 text-center">
        <h2 className="text-3xl font-bold">Experience</h2>
        <p className="mt-2 text-lg">Intern at Tamizhi.AI - Working on MERN Stack projects</p>
      </section>

      {/* Contact Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-lg">📧 your.email@example.com</p>
      </section>
    </div>
  );
};

export default Portfolio;
