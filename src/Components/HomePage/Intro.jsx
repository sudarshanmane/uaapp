import React from "react";
import pace_medical from "../../images/pace_medical.png";
import right_arrow from "../../images/right_arrow.png";
import reading from "../../images/reading.png";

const Intro = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="kickstart font-santoshi text-lg base text-center lg:text-left  font-semibold">
        KICKSTART YOUR  
      </span>
      <span className="text-2xl text-center lg:text-left font-bold text text-39">
        IIT JEE/NEET Test Prep,
      </span>
      <div className="flex flex-col items-center lg:items-start lg:ml-20">
        <span className="text-39 font-semibold text-sm">Powered by</span>
        <img
          className="w-28 -mt-2"
          src={pace_medical}
          alt="pace_medical_image"
        ></img>
      </div>
      <div className="lg:flex hidden flex-row justify-start items-center gap-3 mt-5">
        <span className="font-semibold ">ADMISSIONS OPEN</span>
        <button className="bg-39 p-2 px-3 flex flex-row gap-5 items-center rounded-full ">
          <span className="text-white text-xs">Enquiry Now</span>
          <button className="w-5  h-5 bg-yellow-400 rounded-full flex justify-center items-center">
            <img className="h-3" src={right_arrow} alt="" />
          </button>
        </button>
      </div>
      <div className="flex gap-3 flex-row lg:flex-col mt-5 m-auto lg:m-px">
        <div className="flex gap-3 items-center font-bold text-xs">
          <img className="h-7" src={reading} alt="" />
          <div>
            <div>Batch Starts From 4</div>
            <div>3rd April '2</div>
          </div>
        </div>
        <div className="flex gap-3 items-center font-bold text-xs">
          <img className="h-7" src={reading} alt="" />
          <div>
            <div>Batch Starts From 4</div>
            <div>3rd April '2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
