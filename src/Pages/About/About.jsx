import React from "react";
import Skills from "./Skills";
import AboutSum from "./AboutSum";
import Tools from "./Tools";

const About = () => (
  <div className="mt-8 bg-slate-100 min-h-screen flex flex-col items-center justify-center  p-6">
    <AboutSum/>
    <Skills/>
    <Tools/>
  </div>
);

export default About;
