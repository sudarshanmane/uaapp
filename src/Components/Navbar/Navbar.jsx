import React from "react";
import "./navbar.css";
import universal_high_school_image from "../../images/universal_high_school_image.png";
import universal_bar from "../../images/universal_high_bar.png";
import pace_medical from "../../images/pace_medical.png";

const Navbar = () => {
  return (
    <div className="bg-white w-full fixed rounded-b-3xl z-50 shadow-xl">
      <div className="flex flex-wrap p-1 py-3 justify-between w-11/12 sm:w-10/12 m-auto ">
        <div className="flex gap-3">
          <img className="h-6" src={universal_high_school_image} alt="" />
          <img className="h-6" src={universal_bar} alt="" />
          <img className="h-6" src={pace_medical} alt="" />
        </div>
        <button className="bg-39 p-2 px-4 text-xs rounded-full text-white">
          Get Info
        </button>
      </div>
    </div>
  );
};

export default Navbar;
