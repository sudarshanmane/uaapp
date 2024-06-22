import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./appLayout.css";

const AppLayout = () => {
  return (
    <div>
      <div className="z-50">
        <Navbar></Navbar>
      </div>
      <div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
