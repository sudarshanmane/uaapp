import React from "react";
import about_univaersal_high_school from "../../images/about_univaersal_high_school.png";
import right_arrow from "../../images/right_arrow.png";
import iit_pace from "../../images/iit_pace.png";

const UniversalHighSchool = () => {
  return (
    <div>
      <div className="w-8/12 m-auto flex items-center mt-48">
        <img
          className="absolute w-80"
          src={about_univaersal_high_school}
          alt=""
        />
        <div className="flex">
          <div className="w-3/12 "></div>
          <div className="flex flex-col w-9/12  pl-52 bg-ff p-12 rounded-3xl">
            <span className="">ABOUT</span>
            <span className="text-29 text-3xl font-semibold mb-2">
              Universal High School
            </span>
            <span className="text-xs">
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
              <button className="text-xs font-semibold p-3 bg-29 text-white gap-3 flex items-center rounded-full capitalize">
                Enquire Now
                <button className="h-5 w-5 rounded-full bg-fd p-1 ">
                  <img src={right_arrow} alt="" />
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-8/12 m-auto flex items-center mt-10">
        <div className="absolute w-8/12 flex justify-end">
          <img className="w-80" src={iit_pace} alt="" />
        </div>
        <div className="flex">
          <div className="flex flex-col w-9/12  pr-52 bg-e8 p-12 rounded-3xl">
            <span className="">ABOUT</span>
            <span className="text-29 text-3xl font-semibold mb-2">
              Universal High School
            </span>
            <span className="text-xs">
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
              <button className="text-xs font-semibold p-3 bg-29 text-white gap-3 flex items-center rounded-full capitalize">
                Enquire Now
                <button className="h-5 w-5 rounded-full bg-fd p-1 ">
                  <img src={right_arrow} alt="" />
                </button>
              </button>
            </div>
          </div>
          <div className="w-3/12 "></div>
        </div>
      </div>
    </div>
  );
};

export default UniversalHighSchool;
