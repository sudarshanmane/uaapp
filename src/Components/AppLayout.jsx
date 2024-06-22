import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./appLayout.css";
import homeBg from "../images/home_bg.jpg";

const AppLayout = () => {
  return (
    <div>
      <div className="z-50">
        <Navbar></Navbar>
      </div>
      <div>
        <div className=" m-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
