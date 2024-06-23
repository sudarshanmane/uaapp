import React from "react";
import Home from "./HomePage/Home";
import UniversalHighSchool from "./UniversalHighSchool/UniversalHighSchool";
import Programs from "./Programs/Programs";
import SuccessStories from "./SuccessStories/SuccessStories";
import OurCampus from "./OurCampus/OurCampus";
import Footer from "./Footer/Footer";

const Content = () => {
  return (
    <div className="w-full">
      <Home></Home>
      <UniversalHighSchool></UniversalHighSchool>
      <Programs></Programs>
      <SuccessStories></SuccessStories>
      <OurCampus></OurCampus>
      <Footer></Footer>
    </div>
  );
};

export default Content;
