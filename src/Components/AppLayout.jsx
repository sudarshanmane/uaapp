import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const AppLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet />
        <div>div</div> <div>div</div> <div>div</div> <div>div</div>{" "}
        <div>div</div> <div>div</div> <div>div</div> <div>div</div>{" "}
        <div>div</div> <div>div</div> <div>div</div> <div>div</div>{" "}
        <div>div</div> <div>div</div> <div>div</div> <div>div</div>{" "}
        <div>div</div> <div>div</div> <div>div</div> <div>div</div>{" "}
        <div>div</div> <div>div</div> <div>div</div> <div>div</div>{" "}
        <div>div</div> <div>div</div> <div>div</div> <div>div</div>{" "}
        <div>div</div> <div>div</div> <div>div</div> <div>div</div>{" "}
        <div>div</div> <div>div</div> <div>div</div> <div>div</div>{" "}
        <div>div</div> <div>div</div> <div>div</div>{" "}
      </div>
    </div>
  );
};

export default AppLayout;
