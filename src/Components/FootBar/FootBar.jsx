import React from "react";
import EnquireButton from "../CommonComponents/EnquireButton";
import phone_number from "../../images/phone_number.png";
import location from "../../images/location.png";

const FootBar = () => {
  return (
    <div className="bg-29 mt-10">
      <div className="w-8/12 p-4 m-auto ">
        <span className="text-lg text-white">DASHISAR</span>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-fd text-2xl font-semibold uppercase">
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
                <div className="flex gap-3 text-xs">
                  <span className="text-xs">+91 224 194 7733</span>
                  <span>|</span>
                  <span>admissions.dahisar@universal.edu.in </span>
                </div>
              </div>
            </div>
            <EnquireButton
              changeColor={true}
              text={"Get In Touch"}
            ></EnquireButton>
          </div>
          <div className="w-6/12 border rounded-xl overflow-hidden">
            <iframe
              title="This is a unique title"
              height={"100%"}
              width={"100%s"}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Ashok+Van%2C+Shiv+Vallabh+Road%2C+Dahisar+East%2C+Mumbai+%E2%80%93+400068&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="h-10 mt-10 bg-black text-white text-xs flex items-center justify-center">
        Copyright © 2024 Universal Academy. All rights reserved
      </div>
    </div>
  );
};

export default FootBar;
