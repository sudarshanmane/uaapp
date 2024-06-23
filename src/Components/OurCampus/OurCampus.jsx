import React from "react";
import campus_background from "../../images/campus_background.png";
import EnquireButton from "../CommonComponents/EnquireButton";
import universal_High_School from "../../images/Universal High School, Dahisar.jpg";
import group_image from "../../images/group_image.jpg";
import planningImage from "../../images/planningImage.jpg";
import security from "../../images/security.jpg";
import painting from "../../images/painting.jpg";
import cricket_image from "../../images/cricket_image.jpg";
import CommonCarousel from "../CommonComponents/CommonCarousel";

import camp2_1 from "../../images/camp2/1_football.jpg";
import camp2_2 from "../../images/camp2/1_swimming.jpg";
import camp2_3 from "../../images/camp2/3_lab.jpg";
import camp2_4 from "../../images/camp2/4_football.jpg";
import camp2_5 from "../../images/camp2/5_football.jpg";
import camp2_6 from "../../images/camp2/6_singing.jpg";

import camp3_1 from "../../images/camp3/1_carate.jpg";
import camp3_2 from "../../images/camp3/2_carate.jpg";
import camp3_3 from "../../images/camp3/3_lib.jpg";
import camp3_4 from "../../images/camp3/4_bio.jpg";
import camp3_5 from "../../images/camp3/5_group.jpg";
import camp3_6 from "../../images/camp3/6_phy.jpg";

const camp1 = [
  universal_High_School,
  group_image,
  security,
  painting,
  planningImage,
  cricket_image,
];
const camp2 = [camp2_1, camp2_2, camp2_3, camp2_4, camp2_5, camp2_6];
const camp3 = [camp3_1, camp3_2, camp3_3, camp3_4, camp3_5, camp3_6];

const camps = [camp1, camp2, camp3];
const res = [];

for (const key of camps) {
  console.log(key[0], key);
  let result = (
    <div
      key={key}
      className="mt-6  gap-3 grid md:grid-cols-4 grid-cols-2 items-center justify-center"
    >
      <div className="sm:col-span-2 rounded-lg col-span-1  h-40 overflow-hidden flex item-center justify-center">
        <img className="h-full w-full  " src={key[0]} alt="" />
      </div>
      <div className="h-40 overflow-hidden  rounded-lg flex item-center justify-center">
        <img className="h-full w-full " src={key[1]} alt="" />
      </div>
      <div className="sm:col-span-1 col-span-2 h-40 overflow-hidden  rounded-lg flex item-center justify-center">
        <img className="h-full w-full" src={key[2]} alt="" />
      </div>
      <div className="h-40 overflow-hidden  rounded-lg flex item-center justify-center">
        <img className="h-full w-full" src={key[3]} alt="" />
      </div>
      <div className="h-40 overflow-hidden  rounded-lg flex item-center justify-center">
        <img className="h-full w-full " src={key[4]} alt="" />
      </div>
      <div className="h-40 overflow-hidden  rounded-lg flex item-center justify-center col-span-2">
        <img className="h-full w-full" src={key[5]} alt="" />
      </div>
    </div>
  );
  res.push(result);
}

const OurCampus = () => {
  return (
    <div className="mt-12 w-10/12 lg:w-8/12 m-auto">
      <div className="h-40 bg-29 overflow-hidden">
        <img src={campus_background} className="w-full opacity-5" alt="" />
      </div>
      <div className="md:w-10/12 w-11/12  m-auto relative -mt-32">
        <div className="text-white text-center md:text-start">OUR</div>
        <div className="flex justify-between  ">
          <div className="uppercase text-xl m-auto md:m-px text-center font-semibold text-fd">
            campuses
          </div>
          <div className="hidden md:flex">
            <EnquireButton changeColor={true}></EnquireButton>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <CommonCarousel numberOfCards={1} cards={res}></CommonCarousel>
        </div>
        <div className="mt-10 flex justify-center md:hidden">
          <EnquireButton changeColor={true}></EnquireButton>
        </div>
      </div>
    </div>
  );
};

export default OurCampus;
