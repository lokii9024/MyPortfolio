import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaUser, FaCode, FaEnvelope, FaProjectDiagram, FaGithub } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItemClass =
    "relative flex items-center text-black hover:text-blue-600 block py-2";
  const underlineBase =
    "absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-300";

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Portfolio.
        </Link>
        {/* Mobile: GitHub icon + Hamburger */}
        <div className="flex items-center md:hidden">
          <a
            href="https://github.com/lokeshvaishnav"  // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-black mr-4"
          >
            <FaGithub />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-black text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="group">
            <Link to="/" className={navItemClass}>
              <FaHome className="mr-2" /> Home
              <span className={`${underlineBase} w-0 group-hover:w-full`}></span>
            </Link>
          </li>
          <li className="group">
            <Link to="/about" className={navItemClass}>
              <FaUser className="mr-2" /> About
              <span className={`${underlineBase} w-0 group-hover:w-full`}></span>
            </Link>
          </li>
          <li className="group">
            <Link to="/projects" className={navItemClass}>
              <FaProjectDiagram className="mr-2" /> Projects
              <span className={`${underlineBase} w-0 group-hover:w-full`}></span>
            </Link>
          </li>
          <li className="group relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-black hover:text-blue-600 block py-2"
            >
              <FaCode className="mr-2" /> Coding Profiles
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-56 z-50">
                <li>
                  <a
                    href="https://codeforces.com/profile/lokesh_9024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 hover:bg-blue-100"
                  >
                    <SiCodeforces className="mr-2" /> Codeforces
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/u/loki_9024-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 hover:bg-blue-100"
                  >
                    <SiLeetcode className="mr-2" /> LeetCode
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codechef.com/users/lokii9024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 hover:bg-blue-100"
                  >
                    <SiCodechef className="mr-2" /> CodeChef
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/user/vishalvaictes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 hover:bg-blue-100"
                  >
                    <SiGeeksforgeeks className="mr-2" /> GeeksforGeeks
                  </a>
                </li>
              </ul>
            )}
          </li>
          {/* GitHub Fork Button for Desktop */}
          <li className="group">
            <a
              href="https://github.com/lokii9024"  // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className={navItemClass}
            >
              <FaGithub className="mr-2" /> Github
              <span className={`${underlineBase} w-0 group-hover:w-full`}></span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-2 p-4">
            <li className="group">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={navItemClass + " text-center"}
              >
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li className="group">
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={navItemClass + " text-center"}
              >
                <FaUser className="mr-2" /> About
              </Link>
            </li>
            <li className="group">
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={navItemClass + " text-center"}
              >
                <FaProjectDiagram className="mr-2" /> Projects
              </Link>
            </li>
            
            <li className="group relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center text-black hover:text-blue-600 block py-2">
                <FaCode className="mr-2" /> Coding Profiles
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 bg-white shadow-lg rounded-md w-56 z-50">
                  <li>
                    <a href="https://codeforces.com/profile/lokesh_9024" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 hover:bg-blue-100">
                      <SiCodeforces className="mr-2" /> Codeforces
                    </a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/u/loki_9024-/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 hover:bg-blue-100">
                      <SiLeetcode className="mr-2" /> LeetCode
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codechef.com/users/lokii9024" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 hover:bg-blue-100">
                      <SiCodechef className="mr-2" /> CodeChef
                    </a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/user/vishalvaictes/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 hover:bg-blue-100">
                      <SiGeeksforgeeks className="mr-2" /> GeeksforGeeks
                    </a>
                  </li>
                </ul>
              )}
            </li>
            {/* GitHub Fork Button for Mobile */}
            <li className="group">
              <a
                href="https://github.com/lokii9024" 
                target="_blank"
                rel="noopener noreferrer"
                className={navItemClass + " text-center"}
              >
                <FaGithub className="mr-2" /> Github
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
