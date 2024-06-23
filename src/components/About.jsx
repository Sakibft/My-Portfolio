"use client";
import { TwitterLogo } from "phosphor-react";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <h1 className="mt-4">
        <span className="text-4xl">📢</span>
        <span className="font-bold text-xl"> About me</span>
      </h1>
      <p className="mt-2 mb-2">
        " I create frontend solutions that exceed technical standards and build
        strong user connections. My focus is on designing user-friendly
        interfaces, improving performance, and ensuring accessibility to craft
        memorable digital experiences."
      </p>
      <p className="mb-2">
        "I am passionate about turning design concepts into vibrant web
        interfaces using efficient and elegant code. I relish the process of
        crafting visually captivating websites that not only attract attention
        but also foster meaningful engagement."
      </p>
      <p className="mb-2">
        “ I provide value by utilizing React, MongoDB, Node.js, Express.js,
        Firebase, Tailwind CSS, DaisyUI, etc., to engineer cutting-edge
        solutions that consistently outperform expectations.”
      </p>

      <div className=" flex flex-row gap-x-6   rounded-xl p-2 w-1/2 mt-4">
        {/* github */}
        <a href="https://github.com/Sakibft" target="_blank">
          <button className="text-3xl  rounded-full">
            <FaGithub />
          </button>
        </a>
        {/* twitter */}
        <a href="https://x.com/Sakib2040" target="_blank">
          <button className="text-3xl  rounded-full">
            <TwitterLogo></TwitterLogo>
          </button>
        </a>

        {/* linkDin */}
        <button className="text-3xl  rounded-full">
          <FaLinkedin></FaLinkedin>
        </button>

        {/* instagram */}
        <a href="https://www.instagram.com/sakibsarker31/" target="_blank">
          <button className="text-3xl  rounded-full">
            <FaInstagram></FaInstagram>
          </button>
        </a>
        {/* facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100086958673992"
          target="_blank"
        >
          <button className="text-3xl  rounded-full">
            <FaFacebook></FaFacebook>
          </button>
        </a>
      </div>
      {/* resume */}
      <a
        href="https://drive.google.com/file/d/1MtAN8SsVF2Nit6gpEQDbQHwfDkRZtWqQ/view"
        target="_blank"
      >
        <button className="group relative flex w-40 items-center rounded-full border text-white  p-2 mt-4   ">
          <span> My Resume</span>
          <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-full bg-sky-400 duration-300 group-hover:w-5/6  ">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-10 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </span>
        </button>
      </a>
    </div>
  );
};

export default About;
