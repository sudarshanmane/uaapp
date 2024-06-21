import React from "react";
import "./navbar.css";
import universal_high_school_image from "../../images/universal_high_school_image.png";
import universal_bar from "../../images/universal_high_bar.png";
import pace_medical from "../../images/pace_medical.png";
import get_info from "../../images/get_info.png";

const Navbar = () => {
  return (
    <div className="main_nav_container">
      <div className="nav_container">
        <div className="nav_container_image_container nav_container_image_container_1">
          <img src={universal_high_school_image} alt="" />
          <img src={universal_bar} alt="" />
          <img src={pace_medical} alt="" />
        </div>
        <div className="nav_container_image_container">
          <img src={get_info} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
