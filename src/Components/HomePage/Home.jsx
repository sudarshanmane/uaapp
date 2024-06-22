import React from "react";
import EnquiryForm from "./EnquiryForm";
import homeCenter from "../../images/home_center.png";
import LearningApproach from "./LearningApproach";
import homeBg from "../../images/home_bg.jpg";
import Intro from "./Intro";
import downArrow from "../../images/downArrow.png";

const Home = () => {
  return (
    <div
      className="bg-cover font-santoshi"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div
        className="w-full"
        style={{ background: "rgba(255, 255, 255, 0.8)" }}
      >
        <div className="pb-10 m-auto pt-28 relative w-full">
          <div className="grid z-20  grid-cols-1 relative justify-between items-end  font-santoshi">
            <Intro></Intro>
            <EnquiryForm></EnquiryForm>
            <div className="h-52"></div>
          </div>
          <div className="absolute top-52 z-0 flex flex-col justify-center">
            <img
              style={{
                width: "46%",
              }}
              className=" flex items-center m-auto"
              src={homeCenter}
              alt=""
            />
            <div className="z-10">
              <div className="absolute flex -mt-3 w-full justify-center">
                <img className="h-6 w-6" src={downArrow} alt="" />
              </div>
              <LearningApproach></LearningApproach>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
