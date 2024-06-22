import React from "react";
import campus_background from "../../images/campus_background.png";
import EnquireButton from "../CommonComponents/EnquireButton";
import universal_High_School from "../../images/Universal High School, Dahisar.jpg";
import group_image from "../../images/group_image.jpg";
import planningImage from "../../images/planningImage.jpg";
import security from "../../images/security.jpg";
import painting from "../../images/painting.jpg";
import cricket_image from "../../images/cricket_image.jpg";

const OurCampus = () => {
  return (
    <div className="mt-12  m-auto">
      <div className="h-40 bg-29 overflow-hidden">
        <img src={campus_background} className="w-full opacity-5" alt="" />
      </div>
      <div className="w-8/12 m-auto relative -mt-32">
        <div className="text-white">OUR</div>
        <div className="flex justify-between">
          <div className="uppercase text-xl font-semibold text-fd">
            campuses
          </div>
          <EnquireButton changeColor={true}></EnquireButton>
        </div>
        <div className="mt-6 flex h-40 gap-3">
          <img
            className="w-6/12 rounded-md"
            src={universal_High_School}
            alt=""
          />
          <img className="rounded-md w-3/12" src={group_image} alt="" />
          <img className="rounded-md w-3/12" src={security} alt="" />
        </div>
        <div className="mt-3 flex h-40 gap-3 overflow-hidden">
          <img className="rounded-md w-3/12" src={painting} alt="" />
          <img className="rounded-md w-3/12" src={planningImage} alt="" />
          <img className="rounded-md w-6/12" src={cricket_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurCampus;
