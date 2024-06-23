import React, { useEffect, useState } from "react";
import right_arrow from "../../images/right_arrow.png";
import EnquireButton from "../CommonComponents/EnquireButton";
import school_preperation from "../../images/school_preperation.jpg";

const programs = [
  {
    name: "ISC + NEET",
    color: "ff",
    p1: "NEET is a national-level examination conducted by NTA. The candidates who want to get admission to medical courses must qualify for the entrance test. NEET questions only come from Physics, Chemistry, Zoology, and Botany.",
    p2: "Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and NEET (and other Medical exams) within the comfort of their school premises. Our coursework is specially created for the ISC curriculum to create a synergy between Board and NEET exam preparations during school hours.",
  },
  {
    name: "ISC + IIT JEE",
    color: "e8",
    p1: "IITs are one of the most prestigious colleges in the country. All Engineering aspirants wish to get into one of the IITs, but getting into such an institution is a challenging task. A lot of hard work andhard and dedication is required to ace JEE Main and JEE Advanced to get into IIT or some other top educational institution in the country.",
    p2: "Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and IITJEE ( and other engineering exams) within the comfort of their school premises. Our coursework is specially created for the ISC curriculum to create a synergy between Board and NEET exam preparations during school hours",
  },
];

const programCards = programs.map((el) => {
  return (
    <div key={el.name}>
      <div className="relative border h-14 flex justify-center -mb-10 m-auto w-7/12 rounded-t-2xl items-center bg-29 text-white text-lg font-semibold ">
        <div>{el.name}</div>
      </div>
      <div
        className={`flex flex-col h-full px-8 bg-${el.color} rounded-3xl text-center`}
      >
        <p className="text-xs mt-12 ">
          {el.p1} <br />
          <br />
          {el.p2}
        </p>
      </div>
      <div className="relative -mt-5 m-auto w-full flex justify-center">
        <EnquireButton></EnquireButton>
      </div>
    </div>
  );
});

const inSchoolPrep = [
  {
    name: "In School Preparation",
    details: {
      title: "In School Preparation",
      info: "Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes.",
    },
  },
  {
    name: "Revision",
    details: {
      title: "In School Preparation",
      info: "Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes.",
    },
  },
  {
    name: "Mock Tests",
    details: {
      title: "In School Preparation",
      info: "Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes.",
    },
  },
  {
    name: "Feedback",
    details: {
      title: "In School Preparation",
      info: "Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes.",
    },
  },
  {
    name: "Study Material",
    details: {
      title: "In School Preparation",
      info: "Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes.",
    },
  },
  {
    name: "Counselling",
    details: {
      title: "In School Preparation",
      info: "Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes.",
    },
  },
  {
    name: "Career Guidance",
    details: {
      title: "In School Preparation",
      info: "Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes.",
    },
  },
];

const Programs = () => {
  const [inSchoolPrepButton, setInSchoolPrepButton] = useState();
  const [inSchoolPrepState, setInSchoolPrepState] = useState({
    active: "In School Preparation",
    details: {
      name: "In School Preparation",
      details: {
        title: "In School Preparation",
        info: "Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes.",
      },
    },
  });

  useEffect(() => {
    console.log(inSchoolPrepState);
  }, [inSchoolPrepState]);

  useEffect(() => {
    const inSchoolPrepDatails = inSchoolPrep.map((el, index) => {
      return (
        <div
          role="button"
          onClick={() =>
            setInSchoolPrepState(() => {
              return { active: el.name, details: el };
            })
          }
          key={el.name + index}
          className={`border p-3 rounded-t-2xl text-sm md:text-xs xl:text-sm font-semibold ${
            el.name === inSchoolPrepState.active
              ? "bg-29 text-white"
              : "bg-e8 text-29"
          } `}
        >
          {el.name}
        </div>
      );
    });

    setInSchoolPrepButton(() => inSchoolPrepDatails);
  }, [inSchoolPrepState]);

  return (
    <>
      <div className="w-11/12 md:w-10/12  m-auto rounded-b-xl">
        <div className="md:w-11/12 m-auto mt-10 ">
          <div className="flex justify-center flex-col text-center m-auto text-lg">
            <span className="font-semibold">OUR</span>
            <span className="text-2xl text-29 font-bold">PROGRAMS</span>
          </div>
          <div className="mt-10 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-16  md:mb-10 sm:mb-28">
            {programCards}
          </div>

          <div className="shadow-shadow_1 md:mt-28 mt-20 rounded-xl ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:flex gap-2 px-4 justify-center relative -top-6">
              {inSchoolPrepButton}
            </div>
            <div className="flex  lg:grid  lg:grid-cols-2 flex-col lg:flex-row items-center justify-between gap-10 bg-white shadow-lg px-10 rounded-b-xl">
              <div className="flex flex-col items-center lg:items-start gap-3 justify-between text-center lg:text-start">
                <div className="text-2xl font-semibold  text-29">
                  {inSchoolPrepState.active}
                </div>
                <div className="text-base">
                  Lectures will happen on campus during school hours with our
                  esteemed faculty powered by PACE, so students don’t need to go
                  anywhere for extra coaching or tuition classes.
                </div>
                <EnquireButton></EnquireButton>
              </div>
              <div className="md:w-9/12 lg:w-full sm:h-60  -mt-4 mb-10 rounded-2xl overflow-hidden h-full flex items-center justify-center">
                <img className="w-full" src={school_preperation} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-200 h-36 relative -mt-28 -z-10"></div>
    </>
  );
};

export default Programs;
