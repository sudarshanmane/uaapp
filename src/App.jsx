import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Content from "./Components/Content";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  const fallbackRender = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "600",
        }}
        className="w-screen absolute top-1/3"
      >
        Error: Our team is on it. Please bear with us.
      </div>
    );
  };

  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
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
    </ErrorBoundary>
  );
};

export default App;
