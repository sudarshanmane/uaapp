import React from "react";
import EnquireButton from "../CommonComponents/EnquireButton";
import success_stories_1 from "../../images/success_stories_1.jpg";
import success_stories_2 from "../../images/success_stories_2.jpg";
import success_stories_3 from "../../images/success_stories_3.jpg";
import success_stories_4 from "../../images/success_stories_4.jpg";
import success_stories_5 from "../../images/success_stories_5.jpg";
import CommonCarousel from "../CommonComponents/CommonCarousel";

const SuccessStories = () => {
  return (
    <div className="w-10/12 lg:w-8/12 m-auto mt-10">
      <div>SUCCESS</div>
      <div className="flex items-center justify-between">
        <div className="font-bold text-2xl text-29">STORIES</div>
        <div className="hidden">
          <EnquireButton></EnquireButton>
        </div>{" "}
      </div>
      <div className="mt-10">
        <CommonCarousel
          cards={[
            <img
              key="success_stories_1"
              src={success_stories_1}
              className="h-52 rounded-xl"
              alt=""
            />,
            <img
              key="success_stories_2"
              src={success_stories_2}
              className="h-52 rounded-xl"
              alt=""
            />,
            <img
              key="success_stories_3"
              src={success_stories_3}
              className="h-52 rounded-xl"
              alt=""
            />,
            <img
              key="success_stories_4"
              src={success_stories_4}
              className="h-52 rounded-xl"
              alt=""
            />,
            <img
              key="success_stories_5"
              src={success_stories_5}
              className="h-52 rounded-xl"
              alt=""
            />,
          ]}
        ></CommonCarousel>
      </div>
    </div>
  );
};

export default SuccessStories;
