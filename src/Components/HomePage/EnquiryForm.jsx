import React, { useState } from "react";
import Input from "./Input";

const EnquiryForm = () => {
  const [parentRelationShip, setParentRelationShip] = useState("Father");

  const handleParentRelationShip = (relationShip) => {
    setParentRelationShip(relationShip);
  };

  return (
    <div className="flex justify-center lg:justify-end">
      <div className="rounded-xl overflow-hidden lg:w-72 w-11/12 shadow-lg">
        <div className="bg-white">
          <div className="text-39 font-bold bg-fd p-3 text- sm text-xl lg:text-base text-center">
            ENQUIRE NOW!
          </div>
          <div className="p-3 lg:text-xs  text-sm form-font-style flex gap-2 flex-col">
            <div className="grid grid-cols-3 gap-2  justify-between items-center">
              <div className="text-sm lg:text-xs">Academic Year</div>
              <button className=" text-sm lg:text-xs bg-39 h-8 col-span-2 text-white rounded-lg">
                2024 - 2026
              </button>
            </div>
            <div className="text-sm lg:text-xs grid grid-cols-3 gap-2  justify-between items-center">
              <div>Your Relationship with the Child</div>
              <div className="h-8 text-sm lg:text-xs col-span-2 text-white  rounded-lg overflow-auto border-2 grid grid-cols-2  border-1">
                <button
                  onClick={() => handleParentRelationShip("Father")}
                  className={`w-full  ${
                    parentRelationShip === "Father"
                      ? "bg-39 39 text-white"
                      : "bg-white text-39"
                  }`}
                >
                  Father
                </button>
                <button
                  onClick={() => handleParentRelationShip("Mother")}
                  className={`w-full h-full ${
                    parentRelationShip === "Mother"
                      ? "bg-39 text-white"
                      : "bg-white text-39"
                  }`}
                >
                  Mother
                </button>
              </div>
            </div>
            <div className="grid  text-sm lg:text-xs grid-cols-2 gap-x-4 gap-y-2">
              <Input
                label={"Child’s First Name"}
                name={"childs_first_name"}
              ></Input>
              <Input
                label={"Child’s Last Name"}
                name={"childs_last_name"}
              ></Input>
              <Input label={"Your First Name"} name={"your_first_name"}></Input>
              <Input label={"Your Last Name"} name={"your_last_name"}></Input>
            </div>
            <div className="">
              <div className="text-sm lg:text-xs ">Course Applying For</div>
              <select
                className="h-10 border-el border items-center w-full md:text-sm"
                label={"Course Applying For"}
                name="course_applying_for"
              >
                <option className="h-10" value="">
                  Choose Course
                </option>
                <option className="h-10" value="NEET">
                  NEET
                </option>
                <option className="h-10" value="JEE">
                  JEE
                </option>
              </select>
            </div>
            <div className="text-sm lg:text-xs flex flex-col gap-3">
              <Input
                label={"Mobile Number"}
                name={"mobile_number"}
                placeholder="Enter your Mobile Number"
                type={"mobile"}
              ></Input>
              <Input
                label={"Email Address"}
                placeholder="yourname@example.com"
                name={"email"}
                type={"email"}
              ></Input>
            </div>
            <button className="p-2 px-3 mb-4 mt-4 text-sm lg:text-xs bg-39 text-white w-fit m-auto rounded-2xl">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
