import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./commonCarousel.css";

const CommonCarousel = ({ cards, numberOfCards }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: numberOfCards || 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: numberOfCards || 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: numberOfCards || 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: numberOfCards || 1,
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      autoPlay={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means the carousel is server-side rendering compatible
      infinite={true}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out" // custom transition for smooth animation
      transitionDuration={300} // duration of the slide transition in milliseconds
    >
      {cards}
    </Carousel>
  );
};

export default CommonCarousel;
