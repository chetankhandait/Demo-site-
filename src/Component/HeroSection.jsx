import React from "react";
 

const HeroSection = () => {
  return (
    <div className="flex  ">
      <h2 className="absolute top-[19.6rem] left-[5.45rem] text-white font-semibold text-6xl   ">
        Wish your dog as focused <br /> and listene to you?
      </h2>
      <img
        src="src/assets/dog1.jpg"
        alt=""
        className="w-full h-[608px] object-cover object-top  rounded-tr-[206px] rounded-tr-[ 205px] rounded-bl-[205px]  p-2 "
      />
    </div>
  );
};

export default HeroSection;
