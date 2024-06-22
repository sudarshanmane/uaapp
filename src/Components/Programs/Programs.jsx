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
          onClick={() =>
            setInSchoolPrepState(() => {
              return { active: el.name, details: el };
            })
          }
          key={el.name + index}
          className={`border p-3 rounded-t-2xl text-sm font-semibold ${
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
    <div>
      <div className="w-10/12 m-auto mt-10">
        <div className="flex justify-center flex-col text-center m-auto text-lg">
          <span className="font-semibold">OUR</span>
          <span className="text-2xl text-29 font-bold">PROGRAMS</span>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-16">{programCards}</div>

        <div className="flex gap-2 mt-28  justify-center relative -mb-5">
          {inSchoolPrepButton}
        </div>

        <div className="flex justify-between h-56 gap-10 bg-white shadow-lg px-10 py-10">
          <div className="flex flex-col justify-between">
            <div className="text-2xl font-semibold text-29">
              {inSchoolPrepState.active}
            </div>
            <div className="text-xs">
              Lectures will happen on campus during school hours with our
              esteemed faculty powered by PACE, so students don’t need to go
              anywhere for extra coaching or tuition classes.
            </div>
            <EnquireButton></EnquireButton>
          </div>
          <div className="w-7/12 rounded-2xl overflow-hidden h-full flex items-center justify-center">
            <img className="w-full" src={school_preperation} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-yellow-200 h-52 relative -mt-20 -z-10"></div>
    </div>
  );
};

export default Programs;
