import React from "react";
import EnquiryForm from "./EnquiryForm";
import homeCenter from "../../images/home_center.png";
import LearningApproach from "./LearningApproach";
import homeBg from "../../images/home_bg.jpg";
import Intro from "./Intro";
import downArrow from "../../images/downArrow.png";
import smiling_girl from "../../images/smiling_indian_student.png";

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
        <div className="pb-10 m-auto pt-28 relative w-full lg:w-10/12 ">
          <div className="grid z-20 grid-cols-1 lg:grid-cols-2 relative justify-between items-end  font-santoshi">
            <Intro></Intro>
            <img
              // style={{
              //   width: "46%",
              // }}
              className="flex items-center m-auto lg:hidden w-8/12 mt-5"
              src={homeCenter}
              alt=""
            />
            <EnquiryForm></EnquiryForm>
            <div className="h-52 hidden lg:flex"></div>
            <div className="z-10 w-11/12 m-auto lg:hidden mt-10">
              <div className="relative flex lg:-mt-3 -mb-3 w-full justify-center">
                <img className="h-6 w-6" src={downArrow} alt="" />
              </div>
              <LearningApproach></LearningApproach>
            </div>
          </div>
          <div className="hidden absolute top-72 z-0 lg:flex flex-col justify-center">
            <img
              style={{
                width: "46%",
              }}
              className="flex xl:hidden items-center m-auto"
              src={smiling_girl}
              alt=""
            />

            <img
              style={{
                width: "46%",
              }}
              className="xl:flex hidden items-center m-auto"
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
