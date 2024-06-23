import React from "react";
import about_univaersal_high_school from "../../images/about_univaersal_high_school.png";
import right_arrow from "../../images/right_arrow.png";
import iit_pace from "../../images/iit_pace.png";
import EnquireButton from "../CommonComponents/EnquireButton";

const UniversalHighSchool = () => {
  return (
    <div className="lg:mt-48">
      <div className="md:w-10/12 lg:w-9/12 w-11/12 m-auto flex items-center  flex-col-reverse md:flex-row">
        <img
          className="md:absolute relative w-80 md:w-56 lg:w-72 -mt-20 md:-mt-0"
          src={about_univaersal_high_school}
          alt=""
        />
        <div className="flex">
          <div className="md:w-3/12  md:flex hidden md:justify-end "></div>
          <div className="flex flex-col md:w-full items-center  bg-ff md:p-7 md:pl-32 lg:pl-44 p-4 rounded-3xl">
            <span className="">ABOUT</span>
            <span className="text-29 text-3xl font-bold mb-2 text-center uppercase">
              Universal High School
            </span>
            <span className="md:text-xs text-base text-center">
              Universal High School, Dahisar equips every student with the right
              attitude and skills to help them find their unique place in the
              world by providing a wholesome and ever-evolving learning
              environment. So that they can fearlessly pursue a better tomorrow.
              In line with this mission, Universal is launching the best IIT
              JEE/ NEET test prep program powered by PACE IIT & MEDICAL. PACE
              IIT & Medical is India’s best IIT JEE/ NEET test prep program and
              has helped more than xxx+ students prepare for IIT JEE and xxx
              students in NEET for the last few years.
            </span>
            <div className="mt-5">
              <EnquireButton></EnquireButton>
            </div>
            <div className="h-20 md:hidden"></div>
          </div>
        </div>
      </div>

      <div className="md:w-9/12 mt-10 w-11/12 m-auto flex items-center  flex-col-reverse md:flex-row-reverse">
        <img
          className="md:absolute relative w-80 md:w-56 lg:w-72 -mt-20 md:-mt-0"
          src={iit_pace}
          alt=""
        />
        <div className="flex ">
          <div className="flex flex-col md:w-full items-center  bg-e8 md:p-7 md:pr-32 lg:pr-44 p-4 rounded-3xl">
            <span className="">ABOUT</span>
            <span className="text-29 text-3xl font-bold mb-2 text-center uppercase">
              IIT PACE
            </span>
            <span className="md:text-xs text-base text-center">
              Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT &
              Medical has embarked on a remarkable journey, transforming the
              lives of students and shaping the landscape of competitive exam
              coaching. It all began in 1999, with a humble vision to bridge the
              gap between aspirations and achievements. PACE IIT & Medical has
              become synonymous with success in competitive exams and helped xxx
              students to crack IIT and xxx students to crack NEET/ Medical
              exams.
            </span>
            <div className="mt-5">
              <EnquireButton></EnquireButton>
            </div>
            <div className="h-20 md:hidden"></div>
          </div>
          <div className="md:w-3/12 md:flex hidden md:justify-end "></div>
        </div>
      </div>
    </div>
  );
};

export default UniversalHighSchool;
