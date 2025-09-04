import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles.css";
import avatar from "../../src/assets/avatar.png"

const Home = () => (
  <div className="bg-slate-100 flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
    <div className="md:w-1/3 flex justify-center">
      <img
        src={avatar}
        alt="Profile"
        className="rounded-full border-solid-black w-48 h-48 shadow-lg"
      />
    </div>
    <div className="md:w-2/3 text-center md:text-left">
      <h1 className="text-4xl font-bold">
        Hello!<span className="wave">👋</span>, I'M{" "}
        <span className="text-blue-700">LOKESH VAISHNAV</span>
      </h1>
      <h2 className="text-3xl text-blue-500 mt-2">
        <Typewriter
          words={["Web Developer", "Competitive Coder", "Engineer", "Learner"]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <p className="text-lg mt-4">
        I'm a CSE undergraduate student at NIT Bhopal.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
        <button className="inline-block bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          <a
          href="/files/lokesh_nitb.pdf"
          target="_blank"
          className="inline-block bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Resume
        </a>
        </button>
        <button className="inline-block bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          <a
          href="https://www.linkedin.com/in/lokesh-vaishnav-289615295"
          className="inline-block bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Hire Me
        </a>
        </button>
      </div>
    </div>
  </div>
);

export default Home;
