import Image from "next/image";
import React from "react";
// import sakib from ''
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        {/* Text */}
        <div className="col-span-6 border">
          <h1>Welcome to my world!</h1>
          <h2> Hi, I'm Sahadat👋 </h2>
          <h3> I'm a Web Developer. </h3>
          <p>
            I'm passionate about creating dynamic and engaging online
            experiences. With a commitment to clean code and pixel-perfect
            designs, I ensure websites are interactive and visually captivating
            with the use of web animations.
          </p>
        </div>
        {/* image */}
        <div className="col-span-6 border flex justify-center items-center">
      
           <Image src={"/sakib.jpg"} alt="haha" width="400" height="300"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
