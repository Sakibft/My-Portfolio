"use client";
import { TwitterLogo } from "phosphor-react";
import React from "react";
import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Define the downloadPDF function
const downloadPDF = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const About = () => {
  const resumeClick = (e) => {
    console.log('hahhahah');
    e.preventDefault();
    // Use the correct path from the root
    downloadPDF("/resume.pdf", "Sahadat Hosen Resume.pdf");
  };

  return (
    <div>
      <h1 className="mt-4">
        <span className="text-4xl">📢</span>
        <span className="font-bold text-xl"> About me</span>
      </h1>
      <p className="mt-2 mb-2">
        &quot;I create frontend solutions that exceed technical standards and build
        strong user connections. My focus is on designing user-friendly
        interfaces, improving performance, and ensuring accessibility to craft
        memorable digital experiences.&quot;
      </p>
      <p className="mb-2">
        &quot;I am passionate about turning design concepts into vibrant web
        interfaces using efficient and elegant code. I relish the process of
        crafting visually captivating websites that not only attract attention
        but also foster meaningful engagement.&quot;
      </p>
      <p className="mb-2">
        &quot;I provide value by utilizing React, MongoDB, Node.js, Express.js,
        Firebase, Tailwind CSS, DaisyUI, etc., to engineer cutting-edge
        solutions that consistently outperform expectations.&quot;
      </p>

      <div className="flex flex-row gap-x-6 rounded-xl p-2 w-1/2 mt-4">
        {/* github */}
        <a href="https://github.com/Sakibft" target="_blank">
          <button className="text-3xl rounded-full">
            <FaGithub />
          </button>
        </a>
        {/* twitter */}
        <a href="https://x.com/Sakib2040" target="_blank">
          <button className="text-3xl rounded-full">
            <TwitterLogo />
          </button>
        </a>
        {/* linkedin */}
        <button className="text-3xl rounded-full">
          <FaLinkedin />
        </button>
        {/* instagram */}
        <a href="https://www.instagram.com/sakibsarker31/" target="_blank">
          <button className="text-3xl rounded-full">
            <FaInstagram />
          </button>
        </a>
        {/* facebook */}
        <a href="https://www.facebook.com/profile.php?id=100086958673992" target="_blank">
          <button className="text-3xl rounded-full">
            <FaFacebook />
          </button>
        </a>
      </div>

      <button
        onClick={resumeClick}
        className="relative flex w-40 items-center rounded-full border text-white p-2 px-4 mt-4"
      >
        My Resume    <FaDownload className="ml-4" />

      </button>
    </div>
  );
};

export default About;

