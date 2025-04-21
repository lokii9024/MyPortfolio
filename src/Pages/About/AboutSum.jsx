import React from "react";
import aboutIllustration from "../../assets/about-illustration.svg" 

const AboutSum = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8 text-center sm:text-left">
          Know Who <span className="text-black">I&apos;M</span>
        </h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          {/* Left Text Content */}
          <div className="sm:w-1/2 mb-8 sm:mb-0 sm:pr-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Hi Everyone, I am{" "}
              <span className="text-blue-700 font-semibold">Lokesh Vaishnav</span>{" "}
              from{" "}
              <span className="text-blue-700 font-semibold">Jhalawar, Rajasthan</span>
              <br />
              I am currently pursuing my B.Tech in Computer Science from NIT
              Bhopal (2023-2027).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Apart from coding, some other activities that I love to do!
            </p>
            <ul className="list-none ml-4 mb-4 space-y-2 text-gray-700">
              <li>➜ Playing Cricket</li>
              <li>➜ Watching Movies</li>
            </ul>
            <blockquote className="italic text-blue-500 mb-4">
              &quot;Aim to create solutions that inspire positive change!&quot; <br />— Lokesh
            </blockquote>
          </div>

          {/* Right Illustration */}
          <div className="sm:w-1/2 flex justify-center sm:justify-end">
            <img
              src={aboutIllustration}
              alt="About illustration"
              className="w-64 sm:w-80 md:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSum;
