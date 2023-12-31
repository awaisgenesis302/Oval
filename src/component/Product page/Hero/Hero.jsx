import React from "react";
import badge from "../../../assets/hero.svg";
const Hero = () => {
  return (
    <div className="flex justify-center flex-col item-center px-4 mt-10 mb-10">
      <div className="w-full text-black text-center font-rubik font-medium">
        <p className="lg:text-[36px] text[14px] md:text-[25px]">
          Make your project & tasks
        </p>{" "}
        <p className="lg:text-[36px] text[14px] md:text-[25px]">
          {" "}
          well planned
        </p>
        <p className="text-black mt-10 font-rubik font-medium text-opacity-50 md:text-opacity-60 text-center lg:text-[32px]  text-[12px] md:text-[20px]">
          Plan, track, and do all your work in one place.
          <br />
          Steer the ship together with your team.
        </p>
        <div>
          <button className="mt-10 text-[18px] md:text-[16px] font-inter bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 rounded">
            Contact us
          </button>
        </div>
      </div>
      <div className=" mt-14 px-4">
        <div className="flex justify-center flex-col items-center  ">
          <div className="flex justify-center w-full">
            <img
              className="h-[180px] lg:h-[800px]"
              src={badge}
              alt="Your Company"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
