import React from "react";
import EnquireButton from "../CommonComponents/EnquireButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import success_stories_1 from "../../images/success_stories_1.jpg";
import success_stories_2 from "../../images/success_stories_2.jpg";
import success_stories_3 from "../../images/success_stories_3.jpg";
import success_stories_4 from "../../images/success_stories_4.jpg";
import success_stories_5 from "../../images/success_stories_5.jpg";
import "./successStories.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SuccessStories = () => {
  return (
    <div className="w-8/12 m-auto mt-10">
      <div>SUCCESS</div>
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl text-29">STORIES</div>
        <EnquireButton></EnquireButton>
      </div>
      <div className="mt-10">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <img src={success_stories_1} className="h-52" alt="" />
          <img src={success_stories_2} className="h-52" alt="" />
          <img src={success_stories_3} className="h-52" alt="" />
          <img src={success_stories_4} className="h-52" alt="" />
          <img src={success_stories_5} className="h-52" alt="" />
        </Carousel>
      </div>
    </div>
  );
};

export default SuccessStories;
