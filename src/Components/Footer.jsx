import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white flex items-center justify-evenly h-[20vh] max-[600px]:h-[25vh] max-[600px]:flex-col"
    >
      <label
        className="logo"
        style={{ fontSize: "2vmax", color: "white" }}
      >
        Portfolio.
      </label>
      <p
        className="text-center"
        style={{ fontSize: "1.2vmax", fontWeight: 400, color: "white" }}
      >
        &#169; All Rights Reserved | Designed and Developed by Lokesh Vaishnav
      </p>
      <div className="social-media">
        <h5 style={{ fontSize: "2vmax", fontWeight: 400, color: "white" }}>
          Let's Connect
        </h5>
        <ul className="flex items-center justify-between">
          <li>
            <a href="https://www.instagram.com/lokesh.v07/?hl=en">
              <FaInstagram className="text-2xl"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lokesh-vaishnav-289615295">
              <FaLinkedin className="text-2xl"/>
            </a>
          </li>
          <li>
            <a href="https://x.com/LordV9145?t=GzINresKgfZIUt24QCCUHg&s=09">
              <FaTwitter className="text-2xl"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
