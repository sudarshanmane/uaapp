import React from "react";

import right_arrow from "../../images/right_arrow.png";
import right_arrow_yellow from "../../images/right_arrow_yellow.png";

const EnquireButton = ({ changeColor, text }) => {
  return (
    <button
      className={`text-xs w-fit font-semibold p-3 ${
        !changeColor ? "bg-29 text-white" : "bg-fd text-29"
      }  gap-3 flex items-center rounded-full capitalize`}
    >
      {text || "Enquire Now"}
      <button
        className={`h-5 w-5 rounded-full ${
          changeColor ? "bg-29" : "bg-fd"
        } p-1 `}
      >
        <img src={changeColor ? right_arrow_yellow : right_arrow} alt="" />
      </button>
    </button>
  );
};

export default EnquireButton;
