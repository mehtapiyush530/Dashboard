import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const btn = (
    <a
      href="#_"
      className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
        Get started
      </span>
      <span className="relative invisible">Get Started</span>
    </a>
  );

  return (
    <div>
      <div className="bg-purple-600 text-center h-[100vh] flex flex-col justify-center items-center gap-6 px-4">
        <p className="text-white md:text-[4rem] text-[2.8rem] font-bold leading-tight">
          Welcome to DashApp
        </p>
        <p className="text-white font-medium md:text-[2rem] text-[1.2rem] leading-relaxed">
          Your Journey to Productivity Begins Here – Welcome to Your Dashboard!
        </p>
        <Link to="/Nav">
          <button className="focus:outline-none">{btn}</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
