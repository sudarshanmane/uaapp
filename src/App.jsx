import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Content from "./Components/Content";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={"/home/dashboard"}></Navigate>}
        ></Route>
        <Route path="/home" element={<AppLayout />}>
          <Route path="dashboard" element={<Content></Content>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
