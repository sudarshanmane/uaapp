import React from "react";
import EnquireButton from "../CommonComponents/EnquireButton";
import phone_number from "../../images/phone_number.png";
import location from "../../images/location.png";
import yellow_bar from "../../images/yellow_bar.png";

const Footer = () => {
  return (
    <div className="bg-29 mt-10">
      <div className="md:w-10/12 w-11/12 py-4 m-auto">
        <div className="text-lg text-white text-center md:text-start">
          DASHISAR
        </div>
        <div className="grid justify-between grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="flex flex-col gap-4 m-auto md:m-px">
            <span className="text-fd text-2xl font-semibold m-auto md:m-px uppercase">
              universal high school
            </span>
            <div className="text-white flex gap-4">
              <div className="bg-fd h-8 w-8 p-2 rounded-full">
                <img src={location} className="h-full w-full " alt="" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold ">ADDRESS</span>
                <span className="text-xs">
                  Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai – 400 068
                </span>
              </div>
            </div>
            <div className="text-white flex gap-4">
              <div className="bg-fd h-8 w-8 p-2 rounded-full">
                <img src={phone_number} className="h-full w-full " alt="" />
              </div>{" "}
              <div className="flex flex-col">
                <span className="font-semibold uppercase">
                  Admissions Enquiry
                </span>
                <div className="flex gap-3 text-xs md:flex-col lg:flex-row md:gap-1 lg:gap-3">
                  <span className="text-xs">+91 224 194 7733</span>
                  <span>
                    <img
                      className="h-5 md:ml-3 lg:ml-0 md:rotate-90 lg:rotate-0"
                      src={yellow_bar}
                      alt=""
                    />
                  </span>
                  <span>admissions.dahisar@universal.edu.in </span>
                </div>
              </div>
            </div>
            <div className="m-auto md:m-px mt-5">
              <EnquireButton
                changeColor={true}
                text={"Get In Touch"}
              ></EnquireButton>
            </div>
          </div>
          <div className="h-80 lg:h-full mt-10 md:mt-0 rounded-xl overflow-hidden">
            <iframe
              title="This is a unique title"
              height={"100%"}
              width={"100%"}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Ashok+Van%2C+Shiv+Vallabh+Road%2C+Dahisar+East%2C+Mumbai+%E2%80%93+400068&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="h-10 mt-7 bg-black text-white text-xs flex items-center justify-center">
        Copyright © 2024 Universal Academy. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
