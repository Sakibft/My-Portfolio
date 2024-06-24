"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import About from "./About";
import { FaAngleLeft, FaGreaterThan, FaLessThan } from "react-icons/fa";
// import sakib from ''
const Banner = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col-reverse md:flex-row p-4 space-x-4">
        {/* Text */}
        <div className="md:w-1/2  flex flex-col items-start">
        {/* button */}
          <div className="flex gap-x-4 mb-20 ">
            <button className="border-b border-l px-3 py-1 rounded-xl">
              Home
            </button>
            <button className="border-b border-l px-3 py-1 rounded-xl">
              About
            </button>
            <a href="#skills">
              <button className="border-b border-l px-3 py-1 rounded-xl">
                Skills
              </button>
            </a>
            <a href="#projects">
              <button className="border-b border-l px-3 py-1 rounded-xl">
                Projects
              </button>
            </a>
          <a href="#contact">
          <button className="border-b border-l px-3 py-1 rounded-xl">
              Contact
            </button>
          </a>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Welcome to my Portfolio!</h1>
            <h2 className="font-bold text-4xl">Hi, I&apos;m Sahadat 👋</h2>
            <span>
              {/* <FaLessThan className="text-6xl" /> */}

              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "Web Developer", // initially rendered starting point
                  1000,
                  "React  Developer",
                  500,
                ]}
                speed={20}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
              {/* <FaGreaterThan className="text-6xl" /> */}
            </span>
            <About></About>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            width={100}
            height={50}
            src="/sakib.jpg"
            alt="haha"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
