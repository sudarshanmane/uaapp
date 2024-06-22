import React from "react";

import right_arrow from "../../images/right_arrow.png"

const EnquireButton = () => {
  return (
    <button className="text-xs w-fit font-semibold p-3 bg-29 text-white gap-3 flex items-center rounded-full capitalize">
      Enquire Now
      <button className="h-5 w-5 rounded-full bg-fd p-1 ">
        <img src={right_arrow} alt="" />
      </button>
    </button>
  );
};

export default EnquireButton;
