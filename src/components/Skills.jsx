import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="text-white">
      <h1 className="text-center font-bold text-4xl mt-10 mb-10">My Skills</h1>
      {/* Front End */}
      <h1 className="text-2xl text-center mb-5 font-semibold">
        Front End Development
      </h1>
      <div>
        {/* 1 */}
        <div className="flex justify-center items-center  w-full   ">
          <div className="grid lg:grid-cols-3 grid-cols-2  gap-x-4">
            {/* html */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image src={"/html.png"} alt="hah" width={70} height={10}></Image>
            </div>
            {/* css */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image src={"/css.png"} alt="hah" width={70} height={10}></Image>
            </div>
            {/* Tailwind */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/Tailwind.png"}
                alt="hah"
                width={140}
                height={10}
              ></Image>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex justify-center items-center  w-full  mt-3">
          <div className="grid lg:grid-cols-5 grid-cols-2  gap-x-4">
            {/* java */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image src={"/java.png"} alt="hah" width={70} height={10}></Image>
            </div>
            {/* daisyui */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/daisyui.png"}
                alt="hah"
                width={1320}
                height={10}
              ></Image>
            </div>
            {/* React */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/react.png"}
                alt="hah"
                width={70}
                height={10}
              ></Image>
            </div>

            {/* firebase */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/firebase.png"}
                alt="hah"
                width={100}
                height={10}
              ></Image>
            </div>
            {/* Navigate Ui */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/navgate.png"}
                alt="hah"
                width={80}
                height={10}
              ></Image>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex justify-center items-center  w-full  mt-3">
          <div className="grid lg:grid-cols-2 grid-cols-2  gap-x-4">
            {/* Next */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/next.png"}
                alt="hah"
                width={138}
                height={10}
              ></Image>
            </div>
            {/* tanstack*/}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/tanstack.webp"}
                alt="hah"
                width={80}
                height={10}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Backend */}
      <h1 className="text-2xl font-semibold text-center mt-10 mb-5">
        Backend Development
      </h1>
      <div>
        <div className="flex justify-center items-center gap-x-2">
          {/* 1 */}
          <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
            <Image src={"/node.jpeg"} alt="hah" width={168} height={10}></Image>
          </div>
          {/* 2 */}
          <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
            <Image src={"/ex.png"} alt="hah" width={180} height={10}></Image>
          </div>
          {/* 3 */}
          <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
            <Image src={"/mongo.png"} alt="hah" width={100} height={10}></Image>
          </div>
        </div>
      </div>
      {/* Dev tools */}
      <h1 className="text-2xl font-semibold text-center mt-10 mb-5">
        Dev Tools
      </h1>
      <div>
        {/* 1 line */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-3">
            {/* crome */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/crome.png"}
                alt="hah"
                width={80}
                height={10}
              ></Image>
            </div>
            {/* figma */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/figma.png"}
                alt="hah"
                width={70}
                height={10}
              ></Image>
            </div>
          </div>
        </div>
        {/* 2 line */}
        <div className="flex justify-center items-center mt-3">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
            {/* vs code */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image src={"/vs.jpg"} alt="hah" width={140} height={10}></Image>
            </div>

            {/* git */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image src={"/git.png"} alt="hah" width={80} height={10}></Image>
            </div>
            {/* github */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/github.png"}
                alt="hah"
                width={80}
                height={10}
              ></Image>
            </div>
            {/* vercel */}
            <div className="border rounded-xl w-48 h-28 flex justify-center items-center">
              <Image
                src={"/vercel.png"}
                alt="hah"
                width={100}
                height={10}
              ></Image>
            </div>
          </div>
        </div>
        {/* 3 line */}
        <div className="flex justify-center items-center mt-3">
          {/* netlify */}
          <div className="border rounded-xl w-48 h-28 flex justify-center items-center ">
            <Image
              src={"/netlify.webp"}
              alt="hah"
              width={100}
              height={10}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
